export const servicesData = [
  {
    id: "air-freight",
    title: "Air Freight Forwarding",
    tagline: "Ultra-Fast Global Aviation Express Logistics",
    category: "Freight",
    icon: "Plane",
    heroImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    description: "High-priority, time-critical air freight services connecting over 150 countries with guaranteed space allocations, charter services, and door-to-door express delivery.",
    transitTime: "1 - 3 Days Worldwide",
    coverage: "Global (150+ International Airports)",
    features: [
      "IATA Certified Dangerous Goods Handling",
      "Real-Time Temperature & Altitude Telemetry",
      "Next Flight Out (NFO) & Full Aircraft Charter",
      "Automated Customs Clearance at Airport Terminals",
      "Dedicated Air Cargo Operations Desk 24/7"
    ],
    pricingEstimate: "From $4.50 / kg",
    popularFor: "Electronics, Pharma, Automotive Parts, High-Value Goods"
  },
  {
    id: "ocean-freight",
    title: "Ocean Freight Shipping",
    tagline: "High-Volume Intercontinental Maritime Logistics",
    category: "Freight",
    icon: "Ship",
    heroImage: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
    description: "Cost-effective FCL (Full Container Load) and LCL (Less than Container Load) maritime transport across major international shipping lanes with direct carrier agreements.",
    transitTime: "12 - 28 Days",
    coverage: "Global Sea Ports & Inland Waterways",
    features: [
      "20ft, 40ft High Cube & Reefer Container Solutions",
      "Bi-Weekly Schedules with Top Tier Ocean Liners",
      "Port-to-Port & Door-to-Door Multimodal Routing",
      "Comprehensive Cargo Marine Insurance Coverage",
      "Real-Time Vessel Tracking & Container Telematics"
    ],
    pricingEstimate: "From $850 / TEU Container",
    popularFor: "Heavy Machinery, Bulk Retail, Raw Materials, Industrial Equipment"
  },
  {
    id: "road-transport",
    title: "Road & Overland Transport",
    tagline: "Cross-Border Truckload & LTL Freight Solutions",
    category: "Ground",
    icon: "Truck",
    heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    description: "Flexible, GPS-tracked fleet services offering Full Truckload (FTL), Less Than Truckload (LTL), and heavy haul transportation across domestic and continental networks.",
    transitTime: "1 - 5 Days Inter-State/Country",
    coverage: "North America, Europe, Asia Highway Networks",
    features: [
      "GPS Fleet Telematics & Driver Monitoring",
      "Temperature-Controlled Reefer Trailers",
      "Over-Dimensional & Heavy Haul Equipment",
      "Cross-Border Transit Customs Escort",
      "Dynamic Route Optimization & Live Dispatch"
    ],
    pricingEstimate: "From $2.10 / Mile",
    popularFor: "Consumer Packaged Goods, Manufacturing, FMCG, Agriculture"
  },
  {
    id: "rail-freight",
    title: "Rail Freight & Intermodal",
    tagline: "Eco-Friendly Long-Distance Overland Cargo",
    category: "Ground",
    icon: "Train",
    heroImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    description: "Sustainable intermodal rail logistics combining heavy volume capacity with low carbon emissions across transcontinental railway networks.",
    transitTime: "7 - 14 Days Transcontinental",
    coverage: "Eurasia Freight Corridors & North American Rail Hubs",
    features: [
      "60% Reduction in CO2 Carbon Footprint vs Road",
      "Direct Terminal-to-Terminal Block Train Links",
      "Heavy Cargo & Containerized Freight Support",
      "Seamless Rail-to-Truck Intermodal Switching",
      "High Security Container Locks & Seals"
    ],
    pricingEstimate: "From $1.20 / Ton-Mile",
    popularFor: "Automotive, Bulk Commodities, Steel, Chemicals"
  },
  {
    id: "express-delivery",
    title: "Express Courier & Last-Mile",
    tagline: "Time-Definite Same-Day & Next-Day Delivery",
    category: "Express",
    icon: "Zap",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description: "Ultra-fast express parcel and document delivery for time-critical business contracts, medical samples, and premium e-commerce fulfillment.",
    transitTime: "Same-Day to 24 Hours",
    coverage: "Urban Metro Areas & Global Capital Cities",
    features: [
      "Digital Proof of Delivery (e-Signature & Photo)",
      "Real-Time Live Driver Map Location Tracking",
      "Automated SMS & WhatsApp Delivery Alerts",
      "Weekend & Holiday Express Dispatch",
      "Zero-Emission Electric Van Delivery Fleet"
    ],
    pricingEstimate: "From $15.00 / Parcel",
    popularFor: "E-Commerce Orders, Legal Documents, Urgent Spare Parts"
  },
  {
    id: "warehousing",
    title: "Smart Warehousing & Fulfillment",
    tagline: "Automated Micro-Fulfillment & Cold Hubs",
    category: "Warehousing",
    icon: "Warehouse",
    heroImage: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1200&q=80",
    description: "AI-driven automated fulfillment centers featuring robotics, real-time WMS integration, bonded warehousing, and climate-controlled storage.",
    transitTime: "Instant Order Pick & Pack",
    coverage: "100+ Strategic Global Distribution Centers",
    features: [
      "Automated Guided Vehicles (AGV) & Robotic Sorting",
      "Real-Time WMS (Warehouse Management System) API",
      "Bonded Custom Warehouse & Free Trade Zone Support",
      "Multi-Climate Zones (-25°C to +25°C)",
      "Kitting, Labeling, & Reverse Logistics Management"
    ],
    pricingEstimate: "Custom Volume Based Rates",
    popularFor: "Retail Brands, E-Commerce Stores, Medical Supplies"
  },
  {
    id: "cold-chain",
    title: "Cold Chain Logistics",
    tagline: "Precision Temperature-Controlled Transport",
    category: "Specialized",
    icon: "Thermometer",
    heroImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
    description: "Unbroken cold chain transport for biopharmaceuticals, vaccines, perishable foods, and high-precision temperature sensitive materials.",
    transitTime: "Time-Sensitive Continuous Monitoring",
    coverage: "Global Air, Sea & Refrigerated Ground",
    features: [
      "Strict Temp Range Monitoring (-80°C Cryogenic to +15°C)",
      "IoT Active Thermal Telemetry Loggers",
      "GDP (Good Distribution Practice) Certified Warehouses",
      "Dry Ice & Liquid Nitrogen Re-Icing Stations",
      "Rapid Priority Clearance at Cargo Terminals"
    ],
    pricingEstimate: "Custom Thermal Quote",
    popularFor: "Pharmaceuticals, Biologics, Fresh Foods, Cosmetics"
  },
  {
    id: "customs-clearance",
    title: "Customs Clearance & Compliance",
    tagline: "Frictionless International Trade Brokerage",
    category: "Consulting",
    icon: "ShieldCheck",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    description: "In-house licensed customs brokers ensuring smooth compliance, tariff classification, HS code verification, and duty calculation for worldwide imports.",
    transitTime: "Same-Day Digital Processing",
    coverage: "Global Customs Ports of Entry",
    features: [
      "Automated Electronic Entry Filing (EDI / ACE)",
      "HS Code & Tariff Classification Advisory",
      "Free Trade Agreement (FTA) Tax Optimization",
      "Duty & Tax Payment Processing on Behalf",
      "Audit Support & Regulatory Compliance Reviews"
    ],
    pricingEstimate: "From $120 / Entry Filing",
    popularFor: "Importers, Exporters, International Merchants"
  },
  {
    id: "project-cargo",
    title: "Project Cargo & Heavy Lift",
    tagline: "Tailored Logistics for Massive Infrastructure",
    category: "Specialized",
    icon: "Boxes",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    description: "Specialized engineering and logistics for out-of-gauge (OOG) heavy machinery, industrial equipment, wind turbines, and mining components.",
    transitTime: "Custom Project Schedule",
    coverage: "Global High-Capacity Ports & Remote Sites",
    features: [
      "Route Engineering & Bridge Load Capacity Inspections",
      "Barge, Crane & Heavy Transport Vehicle Charter",
      "On-Site Cargo Loading Supervision by Marine Surveyors",
      "Permit Acquisition & Police Highway Escorts",
      "Turnkey Logistics Project Management"
    ],
    pricingEstimate: "Custom Project Estimation",
    popularFor: "Energy Sector, Mining, Civil Construction, Aerospace"
  },
  {
    id: "supply-chain-consulting",
    title: "Supply Chain Strategy & AI",
    tagline: "Data-Driven Logistics & Network Optimization",
    category: "Consulting",
    icon: "Cpu",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "Transform your global logistics network with predictive analytics, AI route simulation, inventory reduction algorithms, and ESG sustainability audits.",
    transitTime: "Consulting Engagement",
    coverage: "Global Enterprise Advisory",
    features: [
      "Supply Chain Network Redesign & Hub Placement",
      "AI Predictive Inventory Optimization",
      "Scope 1, 2, 3 Carbon Footprint Audits",
      "Supplier Risk Management & Multi-Sourcing",
      "Control Tower Software Integration"
    ],
    pricingEstimate: "Enterprise Plan",
    popularFor: "Global Corporations, Supply Chain VPs, Logistics Leads"
  }
];
