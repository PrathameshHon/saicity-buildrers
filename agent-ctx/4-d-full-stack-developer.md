# Task 4-d — full-stack-developer — Public frontend (reviews, albums, advance-payment booking, #/admin)

See `/home/z/my-project/worklog.md` → "Task ID: 4-d" entry for the full record.

## Scope
- Owns: `src/components/site/**` (not `admin/`) + `src/lib/razorpay-checkout.ts`
- Did NOT touch: `src/app/page.tsx`, `src/app/layout.tsx`, `src/lib/types.ts`, `src/lib/site.ts`, `src/lib/booking-shared.ts`, any API route, `src/components/admin/**` (parallel agent's area)

## What was built (for later agents)
1. **`#/admin` route** — site-shell ROUTES + `dynamic(() => import("@/components/admin/admin-dashboard").then(m => m.AdminDashboard), { ssr: false })`; renders `<div className="min-h-screen bg-cream"><AdminDashboard /></div>` inside the shared AnimatePresence motion.div; all site chrome (TopBar/Header/Footer/EnquiryModal/FloatingActions) hidden on that route. Footer bottom bar has a discreet Lock-icon "Admin" button.
2. **Reviews view** (`views/reviews-view.tsx`) — "Voices from Our Community" (GET /api/reviews, staggered cards, star rows, project/flat badges, en-IN dates, photo thumbnails → shared `PhotoLightbox`), "Share Your Experience" royal-panel form (id="review-form", 44px star radio picker, /1200 counter, project Select w/ "Other" → custom input, `PhotoUploader` max 6, POST /api/reviews → 201 toast + success state), then Testimonials + CtaBanner. `ReviewsView` now takes `{ testimonials, projects }`.
3. **Gallery view** (`views/gallery-view.tsx` + refactored `gallery.tsx`) — GET /api/gallery (empty → static GALLERY fallback, category "Site"), `Gallery` accepts optional `items` prop and renders category filter chips (All + unique, gold active) over the same masonry + lightbox; `community-albums.tsx` adds #albums (GET /api/albums grouped by projectName, album cards → max-w-4xl AlbumDialog with scrollable captioned photo grid → PhotoLightbox) + "Share Your Transformation" royal-panel form (POST /api/albums, photos 1–8). `GalleryView` now takes `{ projects }`.
4. **Advance-payment booking** (`payment-dialog.tsx` + `booking-section.tsx`) — PurchaseDialog/purchaseUnit deleted. BookingSection GETs `/api/settings` once (advanceAmount/razorpayConfigured), panel buttons read "Book Now · ₹{advance} Advance", footnote + gold instant-booking note. PaymentDialog stages: form (advance summary ₹, provider strip, Indian-phone validation) → POST /api/bookings/initiate (409 → toast + close; 400 → inline error) → demo: "Sai Secure Gateway · DEMO MODE" progress 0→100 (~2s) → POST demo-confirm; razorpay: `loadRazorpay()` (src/lib/razorpay-checkout.ts, promise-cached) + `new window.Razorpay({...})` w/ handler → POST /api/bookings/verify, ondismiss → back to form + hold-still-active toast, "Waiting for payment…" stage meanwhile; success: order chip (font-mono), provider line, 24h note, Done → onSuccess (refresh + toast, unit returns SOLD). Dialog close guarded to form/success/error stages only.
5. **Shared components** — `photo-lightbox.tsx` (prev/next, Escape/arrows; capture-phase stopPropagation so nested Radix dialogs survive), `photo-uploader.tsx` (sequential /api/upload, 6MB/type checks, per-file spinners, removable thumbnails).

## Verification
lint exit 0; tsc clean for src (examples/ + skills/ pre-existing only); browser E2E golden paths for reviews/albums/gallery/admin/payment verified (incl. nested-lightbox Escape, 390px no-overflow, 44px star targets, 367px dialog); DB restored byte-identical (test review/album/order/booking/upload removed, A-03 AVAILABLE). dev.log clean.

## Gotchas for future agents
- The default agent-browser session may be shared with the admin agent (they navigated it to #/admin mid-test) — use `--session <name>` for isolation.
- HMR rebuilds (from the parallel agent's edits) reset React state mid-E2E; re-apply form input if a fill "disappears".
- Admin API login: POST /api/admin/login {"password":"sai-admin"} → cookie; PATCH /api/admin/flats/[id] {"status":"AVAILABLE"} cancels confirmed bookings; BookingOrders have no admin DELETE → use a temp bun script importing `/home/z/my-project/src/lib/db`.
