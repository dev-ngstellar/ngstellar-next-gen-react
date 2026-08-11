import { images } from './images';

export const projectsData = [
  {
    id: 1,
    title: "Nevada Desert Sun Solar Farm",
    category: "Industrial",
    location: "Clark County, Nevada",
    capacity: "45.8 MW",
    year: "2024",
    image: images.projects.industrial,
    description: "A utility-scale solar facility generating clean electricity for over 12,000 regional homes using single-axis tracking panels.",
    highlights: ["110,000 Photovoltaic Modules", "Single-Axis Sun Tracking System", "30 MW Battery Storage Facility"]
  },
  {
    id: 2,
    title: "Apex Logistics Solar Roof & Carport",
    category: "Commercial",
    location: "Dallas, Texas",
    capacity: "4.2 MW",
    year: "2024",
    image: images.projects.commercial,
    description: "Rooftop array paired with a 250-car solar parking canopy powering a 500,000 sq ft distribution hub.",
    highlights: ["Reduces grid electricity by 78%", "32 EV Charging Ports Installed", "Payback period: 4.1 years"]
  },
  {
    id: 3,
    title: "Oakwood Estates Smart Eco-Community",
    category: "Residential",
    location: "Sacramento, California",
    capacity: "1.8 MW Total (120 Homes)",
    year: "2023",
    image: images.projects.residential,
    description: "Microgrid solar installation with Tesla Powerwall battery integration across a modern zero-net energy residential neighborhood.",
    highlights: ["100% Zero Net Energy Neighborhood", "Centralized Smart Energy Monitor", "Seamless Outage Protection"]
  },
  {
    id: 4,
    title: "Verde Winery & Organic Vineyard",
    category: "Commercial",
    location: "Napa Valley, California",
    capacity: "850 kW",
    year: "2023",
    image: images.projects.winery,
    description: "Off-grid agriculture solar system powering irrigation pumps, cold storage units, and wine processing equipment.",
    highlights: ["Off-Grid Solar Microgrid", "1.2 MWh Battery Reserve", "Zero Carbon Wine Production"]
  },
  {
    id: 5,
    title: "Metro Tech Campus Solar Carport",
    category: "Commercial",
    location: "Austin, Texas",
    capacity: "2.5 MW",
    year: "2024",
    image: images.projects.carport,
    description: "Custom steel canopy solar array providing shaded parking for 600 vehicles with integrated LED illumination.",
    highlights: ["Custom Structural Steel Design", "60 Level-2 Commercial Chargers", "Reduces Urban Heat Island Effect"]
  },
  {
    id: 6,
    title: "Pacific Coast Modern Residence",
    category: "Residential",
    location: "Malibu, California",
    capacity: "24 kW",
    year: "2024",
    image: images.projects.luxury,
    description: "All-black premium sleek glass solar roof installation paired with dual high-capacity wall batteries.",
    highlights: ["All-Black Monocrystalline Panels", "Dual 27.5 kWh Battery Storage", "Custom Slate Roof Integration"]
  }
];

export const projectCategories = ["All", "Residential", "Commercial", "Industrial"];
