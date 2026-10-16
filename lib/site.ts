export const SITE = {
  name: "Sai Towers",
  project: "Sai Green Woods",
  developer: "Sai Towers & Developers",
  tagline: "A Royal Green Address in Kopargaon",
  phone: "+91 98220 45678",
  phoneRaw: "+919822045678",
  whatsapp: "919822045678",
  email: "sales@saigreenwoods.in",
  address: "Sai Towers, 2nd Floor, MG Road, Kopargaon, Ahmednagar, Maharashtra 423601",
  hours: "Mon – Sat: 9:30 AM – 7:00 PM · Sunday: By Appointment",
  reraNumbers: ["P52200079044", "P52200077262"],
  reraWebsite: "https://maharera.maharashtra.gov.in",
};

export type ViewRoute = "home" | "about" | "projects" | "gallery" | "reviews" | "contact" | "admin";

export const NAV_LINKS: { route: ViewRoute; label: string }[] = [
  { route: "home", label: "Home" },
  { route: "about", label: "About" },
  { route: "projects", label: "Projects" },
  { route: "gallery", label: "Gallery" },
  { route: "reviews", label: "Reviews" },
  { route: "contact", label: "Contact" },
];

export const VIEW_TITLES: Record<ViewRoute, string> = {
  home: "Sai Towers | Sai Green Woods — Royal Green Living in Kopargaon",
  about: "About Sai Towers | Sai Green Woods, Kopargaon",
  projects: "Projects & Book a Home | Sai Green Woods by Sai Towers",
  gallery: "Gallery | Sai Green Woods",
  reviews: "Reviews & Testimonials | Sai Green Woods",
  contact: "Contact Us | Sai Towers, Kopargaon",
  admin: "Admin Console | Sai Green Woods",
};

/* ── 3D scroll experience copy (camera fly-through) ─────────── */
export const EXPERIENCE_STEPS = [
  {
    id: "facade",
    index: "01",
    title: "Architecture that wears gold.",
    copy: "Floor-to-ceiling emerald glazing framed in champagne-gold mullions — a facade composed to catch the last light of the day.",
    chips: ["Emerald Glazing", "Gold Mullions", "Stone & Light"],
  },
  {
    id: "interior",
    index: "02",
    title: "Step through the walls.",
    copy: "The glass dissolves and you're inside — an open-plan living room where walnut floors meet deep emerald comfort.",
    chips: ["Walnut Floors", "Open Plan", "Warm Pendants"],
  },
  {
    id: "corridor",
    index: "03",
    title: "A passage in warm light.",
    copy: "Pools of golden downlight guide you down the primary corridor, past walnut doors and quiet art.",
    chips: ["Golden Downlights", "Walnut Doors"],
  },
  {
    id: "living",
    index: "04",
    title: "Arrive in the light.",
    copy: "North-lit, sun-drenched spaces — the reading corner every morning deserves, framed by sheer drapes and green.",
    chips: ["North Light", "Reading Corner"],
  },
] as const;

export const EXPERIENCE_RAIL = [
  { label: "Overview", threshold: 0 },
  { label: "The Facade", threshold: 0.14 },
  { label: "The Interior", threshold: 0.36 },
  { label: "The Corridor", threshold: 0.58 },
  { label: "Sun-Drenched Living", threshold: 0.78 },
  { label: "Book Your Home", threshold: 0.97 },
] as const;

export const TRUST_BADGES = [
  {
    title: "MahaRERA Registered",
    description: "All projects registered with MahaRERA for complete transparency.",
    icon: "shield",
  },
  {
    title: "Clear Titles & NA Order",
    description: "Legally verified plots with crystal clear documentation.",
    icon: "file",
  },
  {
    title: "On-Time Possession",
    description: "A decade-long record of delivering every project on schedule.",
    icon: "clock",
  },
  {
    title: "Eco-Friendly Development",
    description: "500+ trees, rainwater harvesting and green open spaces.",
    icon: "leaf",
  },
] as const;

export const STATS = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 850, suffix: "+", label: "Happy Families" },
  { value: 60, suffix: "+", label: "Acres Developed" },
];

export const AMENITIES = [
  {
    title: "Grand Entrance Gate",
    description: "An imposing designer gateway with 24×7 security cabin welcomes you home.",
    icon: "gate",
  },
  {
    title: "Clubhouse",
    description: "A premium community clubhouse with lounge, indoor games & multipurpose hall.",
    icon: "clubhouse",
  },
  {
    title: "Swimming Pool",
    description: "A sparkling pool with sun deck and kids' pool for refreshing weekends.",
    icon: "pool",
  },
  {
    title: "Landscaped Gardens",
    description: "Meticulously manicured gardens, flower beds and open green spaces.",
    icon: "garden",
  },
  {
    title: "Children's Play Area",
    description: "Safe, modern play equipment on soft rubber flooring for the little ones.",
    icon: "play",
  },
  {
    title: "Jogging & Cycling Track",
    description: "Dedicated tracks winding through the green canopy of the township.",
    icon: "jogging",
  },
  {
    title: "Avenue Plantation",
    description: "Tree-lined internal avenues with 500+ planted trees across the township.",
    icon: "tree",
  },
  {
    title: "24×7 Security & CCTV",
    description: "Gated community with round-the-clock security and CCTV surveillance.",
    icon: "security",
  },
] as const;

export const GALLERY = [
  { src: "/images/gallery-gate.png", caption: "Grand Entrance Gateway" },
  { src: "/images/gallery-clubhouse.png", caption: "Clubhouse & Swimming Pool" },
  { src: "/images/gallery-garden.png", caption: "Central Landscaped Garden" },
  { src: "/images/gallery-avenue.png", caption: "Tree-Lined Avenue Roads" },
  { src: "/images/gallery-play.png", caption: "Children's Play Area" },
  { src: "/images/gallery-jogging.png", caption: "Jogging Track" },
  { src: "/images/project-villas.png", caption: "Premium Row Villas — Phase 2" },
  { src: "/images/project-plots.png", caption: "Aerial View — Phase 1 Plots" },
];

export const LOCATION_ADVANTAGES = [
  { place: "Kopargaon City Market", distance: "2.0 km" },
  { place: "Kopargaon Railway Station", distance: "3.5 km" },
  { place: "Shirdi Sai Baba Temple", distance: "15 km" },
  { place: "Shirdi Airport", distance: "22 km" },
  { place: "Sacred Heart School & Colleges", distance: "1.5 km" },
  { place: "Nashik City", distance: "90 km" },
];

export const WHY_CHOOSE = [
  {
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden costs — what you see is what you pay.",
  },
  {
    title: "Quality Construction",
    description: "ISI-certified materials, structural audits and skilled supervision at every stage.",
  },
  {
    title: "Bank Loan Assistance",
    description: "Tie-ups with all leading banks for hassle-free home & plot loans.",
  },
  {
    title: "After-Sales Support",
    description: "Dedicated relationship managers even after your possession.",
  },
];
