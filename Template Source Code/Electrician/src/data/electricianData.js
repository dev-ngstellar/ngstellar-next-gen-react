// Dataset for Electrician & Electrical Contracting Template

export const COMPANY_INFO = {
  name: "VoltagePro Electrical Systems",
  tagline: "Powering Homes & Industry With Uncompromising Safety",
  phone: "+1 (800) 555-VOLT",
  emergencyPhone: "+1 (800) 999-ELEC",
  email: "service@voltagepro.com",
  license: "Master Electrician License #EC-98402",
  address: "100 Industrial Parkway, Suite 400, Chicago, IL 60601",
  experienceYears: 24,
  projectsCompleted: "12,500+",
  satisfiedClients: "9,800+",
  emergencyResponseMins: "< 30 mins"
};

export const SERVICES = [
  {
    id: "srv-residential",
    title: "Residential Electrical Services",
    category: "Residential",
    icon: "Home",
    shortDesc: "Complete home rewiring, breaker replacement, outlet installation, and ceiling fan mounting.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    features: ["Circuit Breaker Replacement", "Whole-Home Surge Protection", "Recessed LED Lighting", "AFCI/GFCI Safety Outlets"],
    startingPrice: "$150"
  },
  {
    id: "srv-commercial",
    title: "Commercial Electrical Contracting",
    category: "Commercial",
    icon: "Building2",
    shortDesc: "Three-phase power systems, office lighting retrofit, emergency backup generators, and safety audits.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    features: ["Three-Phase Distribution", "Emergency Exit Lighting", "Commercial Panel Upgrades", "Dedicated Data Circuits"],
    startingPrice: "$450"
  },
  {
    id: "srv-industrial",
    title: "Industrial Power Engineering",
    category: "Industrial",
    icon: "Factory",
    shortDesc: "High-voltage substation maintenance, heavy machinery wiring, motor control centers, and PLC integration.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    features: ["Motor Control Cabinets", "Transformers & Switchgear", "Thermal Imaging Audits", "24/7 Factory Breakdown Care"],
    startingPrice: "$1,200"
  },
  {
    id: "srv-ev-charger",
    title: "EV Charger Installation",
    category: "Specialized",
    icon: "Zap",
    shortDesc: "Level 2 & Level 3 Tesla & Universal EV fast charger installations for homes and commercial parking fleets.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
    features: ["Tesla Wall Connector Setup", "Commercial Fleet Stations", "Load Management Modules", "Permit & Rebate Assistance"],
    startingPrice: "$599"
  },
  {
    id: "srv-solar",
    title: "Solar PV & Battery Systems",
    category: "Clean Energy",
    icon: "Sun",
    shortDesc: "Rooftop solar panel installation, Tesla Powerwall storage battery integration, and grid tie-ins.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800",
    features: ["Hybrid Inverter Wiring", "Tesla Powerwall Backup", "Net Metering Setup", "Rooftop Array Wiring"],
    startingPrice: "$3,499"
  },
  {
    id: "srv-smarthome",
    title: "Smart Home Automation & CCTV",
    category: "Technology",
    icon: "Shield",
    shortDesc: "Lutron smart lighting scenes, Nest/Ring security cameras, video doorbells, and smart panel monitoring.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    features: ["IP Security Cameras (CCTV)", "Lutron Wireless Dimmers", "Smart Main Panels (Span)", "Integrated Access Control"],
    startingPrice: "$299"
  }
];

export const PROJECTS = [
  {
    id: "prj-1",
    title: "Commercial High-Rise Panel Retrofit",
    client: "Chicago Financial Center",
    category: "Commercial",
    location: "Downtown Chicago, IL",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    description: "Replaced 4,000A main distribution busway and retrofitted 18 floors with LED emergency lighting panels."
  },
  {
    id: "prj-2",
    title: "Luxury Estate Smart Lighting & Solar",
    client: "Private Residence",
    category: "Residential",
    location: "Naperville, IL",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description: "Full Lutron Homeworks QS setup paired with a 24kW rooftop solar array and dual Tesla Powerwalls."
  },
  {
    id: "prj-3",
    title: "EV Fleet Charging Station Installation",
    client: "Metro Logistics Depot",
    category: "Specialized",
    location: "Schaumburg, IL",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
    description: "Installed 32 Level-2 48A dual EV charging pedestals with intelligent dynamic load balance modules."
  },
  {
    id: "prj-4",
    title: "Industrial Substation Upgrade",
    client: "Midwest Steel Manufacturing",
    category: "Industrial",
    location: "Gary, IN",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    description: "13.8kV transformer replacement and motor control center installation for high-load smelting equipment."
  }
];

export const TESTIMONIALS = [
  {
    id: "tst-1",
    name: "Robert Henderson",
    role: "Property Operations Manager",
    company: "Apex Tower Management",
    rating: 5,
    comment: "VoltagePro responded within 20 minutes when our main 800A breaker tripped at midnight. Their master electricians had our building back on power safely!"
  },
  {
    id: "tst-2",
    name: "Dr. Amanda Lin",
    role: "Homeowner",
    company: "Residential Client",
    rating: 5,
    comment: "Extremely professional service. They installed our Tesla Wall Charger and upgraded our panel from 100A to 200A cleanly with zero mess."
  },
  {
    id: "tst-3",
    name: "Marcus Vance",
    role: "Plant Operations Director",
    company: "Midwest Logistics",
    rating: 5,
    comment: "The thermal imaging audit identified 3 hot spots on our main switchgear before catastrophic failure. Saved us hundreds of thousands in downtime."
  }
];

export const FAQS = [
  {
    question: "Do you offer 24/7 emergency electrical repairs?",
    answer: "Yes! Our emergency dispatch unit operates 24 hours a day, 7 days a week, 365 days a year. Our average arrival time in the Chicago metro area is under 30 minutes."
  },
  {
    question: "Are your electricians licensed and insured?",
    answer: "Every member of our team is a Licensed Master or Journeyman Electrician backed by $5M in General Liability and Workers Compensation insurance."
  },
  {
    question: "Why should I upgrade my electrical panel to 200 Amps?",
    answer: "Older 60A or 100A panels cannot handle modern power loads like EV chargers, heat pumps, or smart appliances. A 200A panel prevents tripped breakers and electrical fire hazards."
  },
  {
    question: "How do I get an upfront cost estimate for my project?",
    answer: "You can use our online Instant Service Estimator or call us directly. We provide flat-rate, transparent pricing before any work begins with zero hidden fees."
  }
];
