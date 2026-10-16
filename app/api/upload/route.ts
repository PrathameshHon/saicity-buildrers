import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

/**
 * Image upload — stores the (compressed) image inside the database as base64
 * so uploads work in EVERY environment, including serverless hosts (Vercel)
 * where the filesystem is read-only. Images are served back through
 * /api/uploads/[id] with immutable caching.
 *
 * Limit: 4 MB per file (serverless request-body safe).
 */

const MAX_FILE_BYTES = 4 * 1024 * 1024; // 4 MB
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

/** Compress + normalize with sharp; falls back to the original bytes if sharp is unavailable. */
async function processImage(buffer: Buffer, mime: string): Promise<{ data: Buffer; mime: string }> {
  try {
    const sharpModule = await import("sharp");
    const sharp = sharpModule.default;
    const rotated = sharp(buffer).rotate(); // respect EXIF orientation
    if (mime === "image/png") {
      const out = await rotated
        .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
        .png({ compressionLevel: 9 })
        .toBuffer();
      return { data: out, mime: "image/png" };
    }
    const out = await rotated
      .resize(1800, 1800, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();
    return { data: out, mime: "image/jpeg" };
  } catch {
    // sharp unavailable — keep the original bytes (still valid and size-checked)
    return { data: buffer, mime };
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: "Image is too large — please pick one under 4 MB." },
        { status: 413 }
      );
    }
    const mime = file.type || "image/jpeg";
    if (!ALLOWED_TYPES.has(mime)) {
      return NextResponse.json(
        { error: "Only JPG, PNG or WebP images are allowed." },
        { status: 415 }
      );
    }

    const input = Buffer.from(await file.arrayBuffer());
    const { data, mime: outMime } = await processImage(input, mime);

    const upload = await db.upload.create({
      data: {
        mime: outMime,
        size: data.byteLength,
        data: data.toString("base64"),
      },
    });

    return NextResponse.json({ success: true, url: `/api/uploads/${upload.id}` });
  } catch (error) {
    console.error("[api/upload] failed:", error);
    return NextResponse.json(
      { error: "Could not save the image — please try again." },
      { status: 500 }
    );
  }
}
