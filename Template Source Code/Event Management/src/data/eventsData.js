// Dataset for Public Experience Website & Admin Operations

export const UPCOMING_EVENTS = [
  {
    id: "evt-1",
    title: "Global Tech Vision Summit 2026",
    subtitle: "Architecting the Future of AI, Quantum Computing & Web3 Systems",
    category: "Technology",
    status: "Upcoming",
    featured: true,
    date: "2026-09-15T09:00:00",
    dateFormatted: "Sep 15 - 17, 2026",
    time: "09:00 AM - 06:00 PM EST",
    venue: "Metropolitan Convention Center",
    location: "New York, USA",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    price: 499,
    originalPrice: 699,
    seatsTotal: 1200,
    seatsLeft: 84,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Join over 1,000 global tech pioneers, visionary founder leaders, and software engineers for 3 transformative days of keynotes, workshops, and immersive networking experience.",
    organizer: "Stellar Global Corp",
    tags: ["AI", "Cloud", "SaaS", "Leadership"],
    agenda: [
      { time: "09:00 AM", title: "Keynote: The AI Singularity Horizon", speaker: "Dr. Elena Rostova", room: "Grand Auditorium" },
      { time: "11:30 AM", title: "Panel: Next-Gen Autonomous Web Apps", speaker: "Marcus Vance, Sarah Chen", room: "Hall B" },
      { time: "02:00 PM", title: "Interactive Workshop: Building Scale Systems", speaker: "Alexandre Dubois", room: "Workshop Lab 3" },
      { time: "05:00 PM", title: "VIP Networking Gala & Cocktail Hour", speaker: "All Keynote Speakers", room: "Rooftop Lounge" }
    ],
    speakers: ["spk-1", "spk-2", "spk-3", "spk-4"]
  },
  {
    id: "evt-2",
    title: "Aura Luxury Fashion & Design Gala",
    subtitle: "Haute Couture & Modern Sustainable Aesthetics",
    category: "Fashion & Design",
    status: "Upcoming",
    featured: true,
    date: "2026-10-04T18:00:00",
    dateFormatted: "Oct 04, 2026",
    time: "06:00 PM - 11:30 PM CET",
    venue: "Palais de la Bourse",
    location: "Paris, France",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    price: 850,
    originalPrice: 1200,
    seatsTotal: 500,
    seatsLeft: 19,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"
    ],
    description: "An exclusive evening showcasing world-class designers, sustainable luxury innovations, and high-fashion runway shows attended by global icons.",
    organizer: "Aura Paris Events",
    tags: ["Fashion", "Luxury", "Design", "VIP Gala"],
    agenda: [
      { time: "06:00 PM", title: "Red Carpet Champagne Reception", speaker: "VIP Guests", room: "Foyer Grand" },
      { time: "07:30 PM", title: "Autumn Couture Runway Unveiling", speaker: "Jean-Luc Blanc", room: "Main Runway" }
    ],
    speakers: ["spk-2", "spk-5"]
  },
  {
    id: "evt-3",
    title: "FinTech & Modern Banking Symposium",
    subtitle: "DeFi, AI Fraud Detection & Digital Currencies",
    category: "Finance",
    status: "Upcoming",
    featured: false,
    date: "2026-11-12T08:30:00",
    dateFormatted: "Nov 12 - 13, 2026",
    time: "08:30 AM - 05:00 PM GMT",
    venue: "The ExCeL London Arena",
    location: "London, UK",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    price: 620,
    originalPrice: 750,
    seatsTotal: 900,
    seatsLeft: 210,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Gathering banking leaders, blockchain founders, and regulatory pioneers to discuss the future of digital currency infrastructures.",
    organizer: "FinTech Global Network",
    tags: ["Fintech", "Banking", "Blockchain"],
    agenda: [
      { time: "09:00 AM", title: "Central Bank Digital Currency Panel", speaker: "Lord Harrison", room: "Auditorium 1" }
    ],
    speakers: ["spk-3", "spk-6"]
  },
  {
    id: "evt-4",
    title: "Starlight Neon Music & Arts Festival",
    subtitle: "3 Days of Electronic Beats, Interactive Light Displays & Culinary Art",
    category: "Music & Festival",
    status: "Upcoming",
    featured: true,
    date: "2026-12-28T16:00:00",
    dateFormatted: "Dec 28 - 30, 2026",
    time: "04:00 PM - 03:00 AM JST",
    venue: "Odaiba Bay Park",
    location: "Tokyo, Japan",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    price: 320,
    originalPrice: 400,
    seatsTotal: 5000,
    seatsLeft: 412,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Experience the pinnacle of sensory fusion with legendary DJs, holographic projection art, and high-energy stage performances.",
    organizer: "Neon Pulse Asia",
    tags: ["Music", "Festival", "EDM", "Arts"],
    agenda: [
      { time: "06:00 PM", title: "Sunset Chillout & Laser Intro", speaker: "DJ Kairo", room: "Neon Stage" }
    ],
    speakers: ["spk-7", "spk-8"]
  },
  {
    id: "evt-5",
    title: "International Healthcare & BioMed Summit",
    subtitle: "Genomics, Longevity Therapeutics & Smart Medical Robotics",
    category: "Healthcare",
    status: "Completed",
    featured: false,
    date: "2026-05-10T09:00:00",
    dateFormatted: "May 10, 2026",
    time: "09:00 AM - 05:00 PM PST",
    venue: "San Francisco Biotech Hall",
    location: "San Francisco, USA",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    price: 550,
    originalPrice: 550,
    seatsTotal: 800,
    seatsLeft: 0,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    gallery: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"],
    description: "A breakthrough medical summit highlighting CRISPR gene editing advancements and clinical trials in cellular therapy.",
    organizer: "BioMed Alliance",
    tags: ["Health", "Genomics", "Biotech"],
    agenda: [],
    speakers: ["spk-1"]
  }
];

export const SPEAKERS = [
  {
    id: "spk-1",
    name: "Dr. Elena Rostova",
    role: "Head of AI Research",
    company: "Neural Mind Labs",
    bio: "Pioneer in transformer architectures and neural symbolic systems with over 15 years of machine intelligence research.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    id: "spk-2",
    name: "Jean-Luc Blanc",
    role: "Creative Director",
    company: "Maison de Elegance",
    bio: "Award-winning French luxury designer recognized for blending classical haute couture with eco-friendly fabrics.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", instagram: "#" }
  },
  {
    id: "spk-3",
    name: "Sarah Chen",
    role: "VP of Product Engineering",
    company: "Stellar Cloud Systems",
    bio: "Architecting high-scale distributed systems powering tens of millions of concurrent global web requests.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    id: "spk-4",
    name: "Alexandre Dubois",
    role: "Founder & CEO",
    company: "Quantum Capital",
    bio: "Investor, venture builder, and tech evangelist focused on deep tech, quantum computing, and space exploration.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#" }
  }
];

export const SERVICES = [
  {
    id: "srv-1",
    title: "Corporate Event Architecture",
    category: "Corporate",
    icon: "Briefcase",
    shortDesc: "End-to-end strategy, venue procurement, and keynote production for high-stakes business summits.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    features: ["Global Venue Sourcing", "VIP Hospitality Protocol", "Live Hybrid Streaming", "Real-Time Attendee App"],
    startingPrice: "$15,000"
  },
  {
    id: "srv-2",
    title: "Luxury Wedding Planning",
    category: "Weddings",
    icon: "Heart",
    shortDesc: "Bespoke romantic celebrations crafted with breathtaking aesthetic decor and Michelin-grade dining.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    features: ["Custom Theme & Floral Design", "Destination Logistics", "Master Sommelier Pairing", "Private Concierge"],
    startingPrice: "$25,000"
  },
  {
    id: "srv-3",
    title: "Product Launch & Keynote",
    category: "Product Launch",
    icon: "Rocket",
    shortDesc: "Apple-caliber product reveals with LED stage setups, spatial audio, and global press amplification.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    features: ["Interactive 3D Stage Displays", "Global Media Relations", "Live Demo Management", "Instant Pre-order Funnels"],
    startingPrice: "$30,000"
  },
  {
    id: "srv-4",
    title: "Music Festivals & Concerts",
    category: "Entertainment",
    icon: "Music",
    shortDesc: "Large-scale arena staging, pyrotechnic visual effects, artist management, and crowd control engineering.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    features: ["Multi-Stage Acoustics", "Pyrotechnic & Laser Rigging", "Security & Crowd Flow", "RFID Wristband Ticketing"],
    startingPrice: "$50,000"
  }
];

export const TESTIMONIALS = [
  {
    id: "tst-1",
    name: "Victoria Sterling",
    role: "Chief Marketing Officer",
    company: "Vanguard Global",
    quote: "Stellar Events delivered an absolute masterpiece for our annual investor summit. Every detail from the glassmorphic digital check-in to keynotes was flawless.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: "tst-2",
    name: "David Vance",
    role: "Founder",
    company: "Apex Tech Ventures",
    quote: "The admin portal allowed us to manage 3,000 ticket sales, sponsor branding, and speaker timelines in real time without a single glitch.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: "tst-3",
    name: "Camille Laurent",
    role: "Event Director",
    company: "Lumière Paris",
    quote: "Working with this platform elevated our luxury fashion gala to an international phenomenon. Truly the gold standard of event tech.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];

export const PRICING_PACKAGES = [
  {
    name: "Starter Experience",
    badge: "Essential",
    price: "$2,999",
    period: "per event",
    description: "Ideal for boutique workshops, private corporate seminars, and executive dinners.",
    features: [
      "Up to 250 Registered Attendees",
      "Standard Event Landing Page",
      "QR Code Ticket Check-in App",
      "Basic Revenue Analytics",
      "Email Support"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Professional Scale",
    badge: "Most Popular",
    price: "$7,499",
    period: "per event",
    description: "Designed for high-impact multi-day conferences, expos, and product launches.",
    features: [
      "Up to 2,500 Registered Attendees",
      "Custom Brandable Website",
      "Interactive Agenda & Schedule Builder",
      "Sponsor & Speaker Portals",
      "Real-time Admin Analytics & Heatmaps",
      "Dedicated Event Coordinator"
    ],
    buttonText: "Launch Event",
    popular: true
  },
  {
    name: "Enterprise Global",
    badge: "Unlimited",
    price: "$18,500",
    period: "custom tier",
    description: "Complete flagship solution for international summits, festivals, and multi-venue galas.",
    features: [
      "Unlimited Attendees & Venues",
      "White-label Mobile App & Portal",
      "Multi-Currency Payment Gateways",
      "Live Hybrid HD Streaming",
      "On-site Concierge Tech Team",
      "SLA 99.99% Guarantee & 24/7 Phone Support"
    ],
    buttonText: "Contact Enterprise",
    popular: false
  }
];

export const GALLERY_ITEMS = [
  { id: 1, title: "Grand Keynote Auditorium", category: "Technology", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800", likes: 342 },
  { id: 2, title: "Haute Couture Runway", category: "Fashion", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800", likes: 521 },
  { id: 3, title: "Starlight Main Stage", category: "Music", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800", likes: 890 },
  { id: 4, title: "VIP Networking Cocktail", category: "Corporate", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800", likes: 215 },
  { id: 5, title: "Interactive VR Lounge", category: "Exhibition", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800", likes: 412 },
  { id: 6, title: "Luxury Floral Banquet", category: "Weddings", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", likes: 670 }
];

export const TRUSTED_BRANDS = [
  "Stripe", "Vercel", "Linear", "Framer", "Apple", "Google", "Meta", "Tesla", "Bloomberg", "Salesforce"
];

export const FAQS = [
  {
    question: "How quickly can I publish an event landing page?",
    answer: "Using our pre-built luxury templates and component architecture, you can configure and publish a live event page with ticketing, agenda, and speakers within 15 minutes."
  },
  {
    question: "Can I manage on-site check-in using QR codes?",
    answer: "Yes! Our SaaS Admin Portal includes an embedded mobile-friendly QR Ticket scanner app that works seamlessly on any iOS or Android browser."
  },
  {
    question: "Do you support custom domain names and white-labeling?",
    answer: "Absolutley. Professional and Enterprise tiers allow full white-label customization including custom CSS tokens, custom domain names, and branded transactional emails."
  },
  {
    question: "What payment gateways are supported?",
    answer: "We offer native integrations with Stripe, PayPal, Apple Pay, Google Pay, Razorpay, and direct wire transfer invoice options for high-ticket corporate events."
  }
];
