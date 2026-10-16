import { db } from '../src/lib/db'

// ── Deterministic pseudo-random (stable across reseeds) ──────────────
function makeRng(seed: number) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

const FACINGS = ['North', 'East', 'West', 'South', 'North-East', 'South-West'] as const

interface FlatSeed {
  tower: string
  floor: number
  floorLabel: string
  unitNumber: string
  unitType: string
  areaSqft: number
  priceLakhs: number
  facing: string
  status: string
  lockedUntil?: Date
  lockSession?: string
}

const DEMO_LOCK_SESSION = 'demo-other-buyer-session'

function roundStep(v: number, step = 0.25) {
  return Math.round(v / step) * step
}

// ── Per-project demo unit plans ───────────────────────────────────────
function generateUnits(): Record<string, FlatSeed[]> {
  const units: Record<string, FlatSeed[]> = {}
  const now = new Date()

  // 1) Sai Green Woods – Phase 1 · 108 NA plots across 4 sectors (A–D)
  {
    const rng = makeRng(101)
    const plots: FlatSeed[] = []
    for (const sector of ['A', 'B', 'C', 'D']) {
      for (let i = 1; i <= 27; i++) {
        const size = 1200 + Math.floor(rng() * 1800 / 50) * 50
        const price = roundStep(4.5 + (size - 1200) * 0.005)
        const roll = rng()
        let status = 'AVAILABLE'
        if (roll < 0.42) status = 'SOLD' // 42% sold — selling fast
        else if (i === 5 && sector === 'A') status = 'LOCKED' // demo: held by another buyer
        else if (i === 12 && sector === 'C') status = 'LOCKED'
        plots.push({
          tower: `Sector ${sector}`,
          floor: 1,
          floorLabel: '1',
          unitNumber: `${sector}-${String(i).padStart(2, '0')}`,
          unitType: 'NA Plot',
          areaSqft: size,
          priceLakhs: price,
          facing: FACINGS[i % FACINGS.length],
          status,
          ...(status === 'LOCKED' ? { lockedUntil: new Date(now.getTime() + 18 * 60000), lockSession: DEMO_LOCK_SESSION } : {}),
        })
      }
    }
    units['sai-green-woods-phase-1'] = plots
  }

  // 2) Sai Green Woods – Phase 2 · 42 villas across 3 rows (A–C)
  {
    const rng = makeRng(202)
    const villas: FlatSeed[] = []
    for (const row of ['A', 'B', 'C']) {
      for (let i = 1; i <= 14; i++) {
        const is2bhk = i % 3 === 0
        const corner = i === 1 || i === 14
        const area = is2bhk ? 1450 : 1780
        const price = roundStep((is2bhk ? 48.5 : 59.5) + (corner ? 2 : 0))
        const roll = rng()
        let status = 'AVAILABLE'
        if (roll < 0.4) status = 'SOLD'
        else if (i === 7 && row === 'B') status = 'LOCKED' // demo: held by another buyer
        villas.push({
          tower: `Row ${row}`,
          floor: 1,
          floorLabel: '1',
          unitNumber: `${row}-${String(i).padStart(2, '0')}`,
          unitType: is2bhk ? '2 BHK Villa' : '3 BHK Villa',
          areaSqft: area,
          priceLakhs: price,
          facing: FACINGS[(i + row.charCodeAt(0)) % FACINGS.length],
          status,
          ...(status === 'LOCKED' ? { lockedUntil: new Date(now.getTime() + 25 * 60000), lockSession: DEMO_LOCK_SESSION } : {}),
        })
      }
    }
    units['sai-green-woods-phase-2'] = villas
  }

  // 3) Sai Green Heights · 64 flats · 2 towers × 4 floors × 8 units
  {
    const rng = makeRng(303)
    const flats: FlatSeed[] = []
    for (const tower of ['A', 'B']) {
      for (let floor = 1; floor <= 4; floor++) {
        for (let pos = 1; pos <= 8; pos++) {
          const is1bhk = pos <= 2
          const area = is1bhk ? 445 : 645
          const price = roundStep((is1bhk ? 32.5 : 42.5) + (floor - 1) * 0.4)
          const roll = rng()
          const status = roll < 0.72 ? 'SOLD' : 'AVAILABLE' // 72% sold — completed
          flats.push({
            tower: `Tower ${tower}`,
            floor,
            floorLabel: String(floor),
            unitNumber: `${tower}-${floor}${String(pos).padStart(2, '0')}`,
            unitType: is1bhk ? '1 BHK' : '2 BHK',
            areaSqft: area,
            priceLakhs: price,
            facing: FACINGS[(pos + floor) % FACINGS.length],
            status,
          })
        }
      }
    }
    units['sai-green-heights'] = flats
  }

  // 4) Sai Green Plaza · 28 units · Block P · G + 3 floors × 7
  {
    const rng = makeRng(404)
    const commercial: FlatSeed[] = []
    const floors = [0, 1, 2, 3]
    for (const floor of floors) {
      for (let pos = 1; pos <= 7; pos++) {
        const isShop = floor === 0
        const demoLock = floor === 1 && pos === 3 // demo: office held by another buyer
        const area = isShop ? 300 + Math.floor(rng() * 320 / 10) * 10 : 380 + Math.floor(rng() * 160 / 10) * 10
        const price = roundStep(isShop ? 45 + (area - 300) * 0.15 : 18 + (area - 380) * 0.05)
        const roll = rng()
        const status = demoLock ? 'LOCKED' : floor === 0 && pos === 5 ? 'SOLD' : roll < 0.3 ? 'SOLD' : 'AVAILABLE'
        commercial.push({
          tower: 'Block P',
          floor,
          floorLabel: floor === 0 ? 'G' : String(floor),
          unitNumber: `${floor === 0 ? 'G' : floor}-${String(pos).padStart(2, '0')}`,
          unitType: isShop ? 'Shop' : 'Office',
          areaSqft: area,
          priceLakhs: price,
          facing: FACINGS[(pos + floor * 2) % FACINGS.length],
          status,
          ...(status === 'LOCKED' ? { lockedUntil: new Date(now.getTime() + 22 * 60000), lockSession: DEMO_LOCK_SESSION } : {}),
        })
      }
    }
    units['sai-green-plaza'] = commercial
  }

  // 5) Sai Green Woods – Phase 3 · 160 farmhouse plots across 5 sectors (A–E)
  {
    const rng = makeRng(505)
    const plots: FlatSeed[] = []
    for (const sector of ['A', 'B', 'C', 'D', 'E']) {
      for (let i = 1; i <= 32; i++) {
        const size = 2000 + Math.floor(rng() * 3000 / 100) * 100
        const price = roundStep(6 + (size - 2000) * 0.004)
        const roll = rng()
        const status = roll < 0.12 ? 'SOLD' : 'AVAILABLE' // pre-launch — mostly available
        plots.push({
          tower: `Sector ${sector}`,
          floor: 1,
          floorLabel: '1',
          unitNumber: `${sector}-${String(i).padStart(2, '0')}`,
          unitType: 'Farmhouse Plot',
          areaSqft: size,
          priceLakhs: price,
          facing: FACINGS[i % FACINGS.length],
          status,
        })
      }
    }
    units['sai-green-woods-phase-3'] = plots
  }

  return units
}

async function main() {
  // Clear existing data
  await db.booking.deleteMany()
  await db.testimonial.deleteMany()
  await db.flat.deleteMany()
  await db.project.deleteMany()

  const projects = [
    {
      slug: 'sai-green-woods-phase-1',
      name: 'Sai Green Woods – Phase 1',
      tagline: 'Premium NA Plots in Nature’s Lap',
      location: 'Shirdi Road, Kopargaon, Maharashtra',
      type: 'Plots',
      status: 'Ongoing',
      price: '₹4.5 Lacs onwards',
      landArea: '6 Acres',
      totalUnits: '108 Plots',
      unitSizes: '1,200 – 3,000 sq.ft',
      reraNumber: 'P52200079044',
      possessionDate: 'Dec 2026',
      description:
        'Sai Green Woods Phase 1 is a thoughtfully planned NA plot development spread across 6 acres of pristine, tree-lined landscape on Shirdi Road. Every plot is vastu-compliant with clear titles, demarcated boundaries, concrete internal roads, street lighting, and a grand entrance gate. Build your dream home amidst 500+ planted trees, landscaped gardens, and a serene environment just minutes from Kopargaon city life.',
      highlights: JSON.stringify([
        'Clear Title & NA Order Plots',
        'MahaRERA Registered Project',
        'Grand Entrance Gate & Compound Wall',
        '30 ft Internal Concrete Roads',
        '500+ Avenue Trees & Landscaped Gardens',
        'Underground Electricity & Water Lines',
        'Children Play Area & Jogging Track',
        'Just 5 min from Kopargaon Market',
      ]),
      amenities: JSON.stringify(['Grand Entrance Gate', 'Landscaped Garden', 'Children Play Area', 'Jogging Track', 'Street Lights', 'Water Supply']),
      image: '/images/project-plots.png',
      gallery: JSON.stringify(['/images/project-plots.png', '/images/gallery-gate.png', '/images/gallery-avenue.png', '/images/gallery-garden.png']),
      featured: true,
      sortOrder: 1,
    },
    {
      slug: 'sai-green-woods-phase-2',
      name: 'Sai Green Woods – Phase 2',
      tagline: 'Row Villas Surrounded by Greenery',
      location: 'Shirdi Road, Kopargaon, Maharashtra',
      type: 'Villas',
      status: 'Ongoing',
      price: '₹48.5 Lacs onwards',
      landArea: '4.5 Acres',
      totalUnits: '42 Villas',
      unitSizes: '2 & 3 BHK Villas',
      reraNumber: 'P52200077262',
      possessionDate: 'Jun 2027',
      description:
        'Phase 2 of Sai Green Woods brings premium 2 & 3 BHK row villas that blend modern architecture with lush green surroundings. Each villa features a private garden, contemporary elevation, premium fittings, ample natural light, and cross ventilation. A gated community with clubhouse access, internal landscaped courts, and a secure environment for your family.',
      highlights: JSON.stringify([
        '2 & 3 BHK Premium Row Villas',
        'MahaRERA Registered Project',
        'Private Garden for Every Villa',
        'Gated Community with Security',
        'Clubhouse & Swimming Pool Access',
        'Premium Flooring & Fittings',
        'Vaastu-Compliant Designs',
        'Bank Loan Approval Available',
      ]),
      amenities: JSON.stringify(['Clubhouse', 'Swimming Pool', 'Gated Security', 'Private Gardens', 'Landscaped Courts', 'Car Parking']),
      image: '/images/project-villas.png',
      gallery: JSON.stringify(['/images/project-villas.png', '/images/gallery-clubhouse.png', '/images/gallery-garden.png', '/images/gallery-play.png']),
      featured: true,
      sortOrder: 2,
    },
    {
      slug: 'sai-green-heights',
      name: 'Sai Green Heights',
      tagline: 'Elegant Apartments, Elevated Living',
      location: 'MG Road, Kopargaon, Maharashtra',
      type: 'Apartments',
      status: 'Completed',
      price: '₹32.0 Lacs onwards',
      landArea: '2 Acres',
      totalUnits: '64 Flats',
      unitSizes: '1 & 2 BHK Flats',
      reraNumber: 'P52200046118',
      possessionDate: 'Ready Possession',
      description:
        'Sai Green Heights is a completed, fully occupied residential apartment community on MG Road. With 64 thoughtfully designed 1 & 2 BHK homes, landscaped entrance, children play zone, and rooftop amenities — it stands as a testament to Sai Green Woods’ commitment to quality construction and on-time delivery.',
      highlights: JSON.stringify([
        'Ready Possession with OC Received',
        '64 Premium 1 & 2 BHK Homes',
        'Prime MG Road Location',
        'Rooftop Amenity Deck',
        'Children Play Zone & Garden',
        'Ample Parking & Lift',
        '100% Families Already Moved In',
      ]),
      amenities: JSON.stringify(['Rooftop Deck', 'Children Play Zone', 'Garden', 'Lift', 'Parking', 'Security']),
      image: '/images/project-apartments.png',
      gallery: JSON.stringify(['/images/project-apartments.png', '/images/gallery-garden.png', '/images/gallery-jogging.png']),
      featured: false,
      sortOrder: 3,
    },
    {
      slug: 'sai-green-plaza',
      name: 'Sai Green Plaza',
      tagline: 'Modern Commercial Shops & Offices',
      location: 'Station Road, Kopargaon, Maharashtra',
      type: 'Commercial',
      status: 'Ongoing',
      price: '₹18.0 Lacs onwards',
      landArea: '0.75 Acres',
      totalUnits: '28 Units',
      unitSizes: '300 – 1,200 sq.ft',
      reraNumber: 'P52200051883',
      possessionDate: 'Mar 2027',
      description:
        'Sai Green Plaza is a contemporary commercial complex offering retail shops and office spaces on busy Station Road. Double-height shop fronts, premium glass facades, ample parking, and high footfall visibility make it the ideal investment for businesses and investors alike.',
      highlights: JSON.stringify([
        'High Visibility Station Road Frontage',
        'Retail Shops & Office Spaces',
        'Double-Height Shop Fronts',
        'Premium Glass Facade',
        'Ample Customer Parking',
        'Ideal for Investment & Rental Yield',
      ]),
      amenities: JSON.stringify(['Glass Facade', 'Parking', 'Signage Rights', 'Power Backup', 'Security', 'Common Toilets']),
      image: '/images/project-commercial.png',
      gallery: JSON.stringify(['/images/project-commercial.png']),
      featured: false,
      sortOrder: 4,
    },
    {
      slug: 'sai-green-woods-phase-3',
      name: 'Sai Green Woods – Phase 3',
      tagline: 'Pre-Launch Farmhouse Plots',
      location: 'Rahata Road, Kopargaon, Maharashtra',
      type: 'Plots',
      status: 'Upcoming',
      price: 'Pre-Launch Pricing',
      landArea: '12 Acres (Proposed)',
      totalUnits: '160 Plots',
      unitSizes: '2,000 – 5,000 sq.ft',
      reraNumber: 'Registration In Progress',
      possessionDate: '2028 (Tentative)',
      description:
        'Phase 3 is an upcoming premium farmhouse plot development on Rahata Road, designed for weekend homes and long-term investment. With larger plot sizes, fruit tree plantations, and dedicated green zones, it offers a peaceful retreat close to Shirdi and Kopargaon. Register now for pre-launch pricing and priority plot selection.',
      highlights: JSON.stringify([
        'Pre-Launch Booking Open',
        'Large Farmhouse Plots',
        'Fruit Tree Plantations',
        'Dedicated Green Zones',
        'Close to Shirdi Temple Town',
        'High Appreciation Corridor',
      ]),
      amenities: JSON.stringify(['Fruit Plantations', 'Green Zones', 'Internal Roads', 'Water Lines', 'Street Lights']),
      image: '/images/gallery-avenue.png',
      gallery: JSON.stringify(['/images/gallery-avenue.png', '/images/gallery-jogging.png']),
      featured: false,
      sortOrder: 5,
    },
  ]

  const unitPlans = generateUnits()

  for (const p of projects) {
    const created = await db.project.create({ data: p })
    const plan = unitPlans[p.slug] ?? []
    if (plan.length > 0) {
      await db.flat.createMany({
        data: plan.map((u) => ({
          projectId: created.id,
          tower: u.tower,
          floor: u.floor,
          floorLabel: u.floorLabel,
          unitNumber: u.unitNumber,
          unitType: u.unitType,
          areaSqft: u.areaSqft,
          priceLakhs: u.priceLakhs,
          facing: u.facing,
          status: u.status,
          lockedUntil: u.lockedUntil ?? null,
          lockSession: u.lockSession ?? null,
        })),
      })
    }
  }

  const testimonials = [
    {
      name: 'Rahul Deshmukh',
      role: 'Plot Owner, Phase 1',
      rating: 5,
      comment:
        'I booked a plot in Sai Green Woods Phase 1 and the experience was seamless — clear documents, transparent pricing, and the development work is exactly as promised. The tree plantation and internal roads are truly impressive!',
    },
    {
      name: 'Sunita Patil',
      role: 'Villa Owner, Phase 2',
      rating: 5,
      comment:
        'We visited multiple projects near Kopargaon before choosing Sai Green Woods. The quality of construction, the greenery, and the team’s commitment stood out. Our villa is almost ready and we can’t wait to move in!',
    },
    {
      name: 'Amit Sharma',
      role: 'Investor',
      rating: 4,
      comment:
        'As an investor, I appreciated the honest dealings and MahaRERA-registered projects. The location near Shirdi Road has strong appreciation potential. Booking and paperwork were handled professionally.',
    },
    {
      name: 'Priya Kulkarni',
      role: 'Flat Owner, Sai Green Heights',
      rating: 5,
      comment:
        'We have been living in Sai Green Heights for a year now — quality construction, good amenities, and a helpful management team. It feels great to be part of a community that actually delivers what it shows.',
    },
  ]

  for (const t of testimonials) {
    await db.testimonial.create({ data: t })
  }

  const counts = {
    projects: await db.project.count(),
    testimonials: await db.testimonial.count(),
    flats: await db.flat.count(),
  }
  console.log('Seeded:', counts)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
