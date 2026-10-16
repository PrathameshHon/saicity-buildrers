import { db } from '../src/lib/db'

/* One-time seed for visitor community content: approved demo reviews,
   transformation albums, DB-backed gallery items and one paid demo order. */

async function main() {
  const existing = await db.review.count()
  if (existing > 0) {
    console.log('Community seed already present — skipping.')
    return
  }

  /* ── Transformation albums (approved, visible on the site) ─────── */
  const villaAlbum = await db.album.create({
    data: {
      title: 'Our Villa B-07: From Booking to Move-In',
      description:
        'The transformation of our 3 BHK row villa in Phase 2 — from the first site visit to the finished facade, private garden and pooja day.',
      projectName: 'Sai Green Woods – Phase 2',
      flatNo: 'B-07',
      ownerName: 'Rahul Deshmukh',
      approved: true,
      coverPhoto: '/images/project-villas.png',
      photos: {
        create: [
          { url: '/images/project-villas.png', caption: 'Finished villa elevation' },
          { url: '/images/gallery-clubhouse.png', caption: 'Clubhouse view from our row' },
          { url: '/images/gallery-garden.png', caption: 'Central garden next door' },
          { url: '/images/gallery-play.png', caption: "Kids' play area — our son's favourite" },
        ],
      },
    },
  })

  const flatAlbum = await db.album.create({
    data: {
      title: 'A-203 Interiors: Warm & Minimal',
      description:
        'How we turned our 2 BHK at Sai Green Heights into a warm, minimal home with a reading corner and plant wall.',
      projectName: 'Sai Green Heights',
      flatNo: 'A-203',
      ownerName: 'Priya Kulkarni',
      approved: true,
      coverPhoto: '/images/project-apartments.png',
      photos: {
        create: [
          { url: '/images/project-apartments.png', caption: 'Tower A — our home' },
          { url: '/images/gallery-garden.png', caption: 'Morning walk patch' },
          { url: '/images/gallery-jogging.png', caption: 'Evening jogging track' },
        ],
      },
    },
  })

  await db.album.create({
    data: {
      title: 'Weekend Farmhouse Build — Plot E-15',
      description:
        'Foundation to finish for our farmhouse retreat on Phase 3. Fruit trees going in this monsoon.',
      projectName: 'Sai Green Woods – Phase 3',
      flatNo: 'E-15',
      ownerName: 'Sandeep Rao',
      approved: true,
      coverPhoto: '/images/gallery-avenue.png',
      photos: {
        create: [
          { url: '/images/gallery-avenue.png', caption: 'Tree-lined avenue to the plot' },
          { url: '/images/gallery-jogging.png', caption: 'Green corridor behind the site' },
        ],
      },
    },
  })

  /* ── Approved visitor reviews (some linked to albums) ──────────── */
  await db.review.create({
    data: {
      name: 'Rahul Deshmukh',
      email: 'rahul.d@example.in',
      rating: 5,
      title: 'Seamless booking to possession',
      comment:
        'We booked Villa B-07 online during the first lockdown week and every promise made at booking was kept — fencing, roads, street lights, clubhouse. The advance-payment process was transparent and documentation was ready before we even asked.',
      projectName: 'Sai Green Woods – Phase 2',
      flatNo: 'B-07',
      albumId: villaAlbum.id,
      approved: true,
    },
  })

  await db.review.create({
    data: {
      name: 'Priya Kulkarni',
      rating: 5,
      title: 'A year in Sai Green Heights',
      comment:
        'Living here for a year now. Construction quality is genuinely good — no seepage, common areas are maintained, and the management responds the same day. Our interiors journey is in the album below.',
      projectName: 'Sai Green Heights',
      flatNo: 'A-203',
      albumId: flatAlbum.id,
      approved: true,
    },
  })

  await db.review.create({
    data: {
      name: 'Sunita Patil',
      rating: 4,
      title: 'Green and peaceful',
      comment:
        'The tree plantation is real, not brochure talk. Evening walks inside the township feel like a park. Waiting for the clubhouse finishing touches.',
      projectName: 'Sai Green Woods – Phase 2',
      flatNo: 'C-04',
      approved: true,
    },
  })

  /* ── One PENDING review to demo moderation ─────────────────────── */
  await db.review.create({
    data: {
      name: 'Manoj Jagtap',
      rating: 4,
      title: 'Clear documents',
      comment:
        'Bought a Phase 1 plot last month. Title search, NA order and 7/12 everything was shared upfront. Plot demarcation was exact.',
      projectName: 'Sai Green Woods – Phase 1',
      flatNo: 'A-12',
      approved: false,
    },
  })

  /* ── DB-backed gallery items (mirror of the static list) ───────── */
  const galleryItems = [
    { title: 'Grand Entrance Gateway', category: 'Site', caption: 'The designer gateway welcomes you home', image: '/images/gallery-gate.png', sortOrder: 1 },
    { title: 'Clubhouse & Swimming Pool', category: 'Amenities', caption: 'Premium clubhouse with sun deck', image: '/images/gallery-clubhouse.png', sortOrder: 2 },
    { title: 'Central Landscaped Garden', category: 'Amenities', caption: 'Manicured gardens & flower beds', image: '/images/gallery-garden.png', sortOrder: 3 },
    { title: 'Tree-Lined Avenue Roads', category: 'Site', caption: '30 ft internal concrete roads', image: '/images/gallery-avenue.png', sortOrder: 4 },
    { title: "Children's Play Area", category: 'Amenities', caption: 'Safe modern play equipment', image: '/images/gallery-play.png', sortOrder: 5 },
    { title: 'Jogging Track', category: 'Amenities', caption: 'Track winding through green canopy', image: '/images/gallery-jogging.png', sortOrder: 6 },
    { title: 'Premium Row Villas — Phase 2', category: 'Construction', caption: 'Row villa elevations nearing finish', image: '/images/project-villas.png', sortOrder: 7 },
    { title: 'Aerial View — Phase 1 Plots', category: 'Site', caption: 'Demarcated NA plots', image: '/images/project-plots.png', sortOrder: 8 },
  ]
  for (const item of galleryItems) {
    await db.galleryItem.create({ data: item })
  }

  /* ── One PAID demo advance order (unit A-02, Phase 1) ──────────── */
  const phase1 = await db.project.findUnique({ where: { slug: 'sai-green-woods-phase-1' } })
  if (phase1) {
    const flatA02 = await db.flat.findFirst({
      where: { projectId: phase1.id, unitNumber: 'A-02' },
    })
    const arjunBooking = await db.booking.findFirst({
      where: { buyerName: 'Arjun Deshmukh' },
    })
    if (flatA02) {
      await db.bookingOrder.create({
        data: {
          flatId: flatA02.id,
          orderNumber: 'SGW-DEMO-0001',
          amount: 500,
          currency: 'INR',
          provider: 'demo',
          buyerName: 'Arjun Deshmukh',
          buyerPhone: arjunBooking?.buyerPhone ?? '9822011223',
          buyerEmail: 'arjun.d@example.in',
          status: 'PAID',
        },
      })
    }
  }

  const counts = {
    reviews: await db.review.count(),
    albums: await db.album.count(),
    photos: await db.albumPhoto.count(),
    galleryItems: await db.galleryItem.count(),
    orders: await db.bookingOrder.count(),
  }
  console.log('Community seeded:', counts)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
