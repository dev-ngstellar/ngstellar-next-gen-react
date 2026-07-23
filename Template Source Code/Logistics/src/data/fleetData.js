export const fleetCategories = [
  {
    id: "air",
    title: "Global Aviation Cargo Fleet",
    subtitle: "High-Payload Boeing 777F & Airbus A330-200F Transcontinental Aircraft",
    icon: "Plane",
    vehicles: [
      {
        name: "CargoFlow Sky Titan (Boeing 777F)",
        payload: "102 Metric Tons",
        range: "9,200 km (Non-Stop Transpacific)",
        tempControl: "Active Multi-Zone Thermal Hold (-20°C to +25°C)",
        specs: "Dual GE90 Engines, High-Volume Lower Deck Cargo Containers",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "CargoFlow Aero Express (Airbus A330-200F)",
        payload: "70 Metric Tons",
        range: "7,400 km",
        tempControl: "Precision Humidity & Climate Chamber",
        specs: "Optimized for High-Density Palletized Freight",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "ocean",
    title: "Maritime Container Liners",
    subtitle: "Ultra-Large Container Vessels (ULCV) Operating Primary Trade Corridors",
    icon: "Ship",
    vehicles: [
      {
        name: "M/V CargoFlow Vanguard",
        payload: "24,000 TEU (Twenty-Foot Equivalent Units)",
        range: "Global Oceans",
        tempControl: "2,200 Reefer Plug Points for Cold Containers",
        specs: "Dual-Fuel LNG Propulsion System with 35% Lower Emissions",
        image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "M/V Pacific Transporter",
        payload: "15,500 TEU",
        range: "Transpacific / Asia-Europe Corridors",
        tempControl: "Active Telemetry Reefer Monitoring",
        specs: "Air Lubrication Hull Technology for Reduced Fuel Consumption",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "ground",
    title: "Next-Gen Autonomous Ground Fleet",
    subtitle: "Zero-Emission Electric & Hydrogen Semi-Truck Linehaul Units",
    icon: "Truck",
    vehicles: [
      {
        name: "CargoFlow e-Hauler Prime (Electric Heavy Truck)",
        payload: "36 Metric Tons",
        range: "800 km Single Charge Range",
        tempControl: "Solar-Powered Thermo King Refrigeration",
        specs: "Level 4 Autonomous Highway Cruising with Tele-Operation Escort",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "CargoFlow Volt Van (Urban Last-Mile Fleet)",
        payload: "3.5 Metric Tons",
        range: "350 km Urban Range",
        tempControl: "Smart Compartmentalized Cold Lockers",
        specs: "Zero-Emission Urban Freight Access Compliant",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "hubs",
    title: "Automated Smart Fulfillment Hubs",
    subtitle: "High-Tech AI Warehousing & Micro-Fulfillment Sorting Centers",
    icon: "Warehouse",
    vehicles: [
      {
        name: "Rotterdam Super-Hub Alpha",
        payload: "120,000 sq. meter Storage Footprint",
        range: "Pan-European 24-Hour Express Logistics",
        tempControl: "-25°C Frozen to Ambient Controlled",
        specs: "Fully Automated High-Bay AGV Sorting System (25,000 Items/Hr)",
        image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Singapore Cargo Oasis (Free Trade Zone)",
        payload: "85,000 sq. meter Footprint",
        range: "Asia-Pacific Regional Fulfillment",
        tempControl: "IATA CEIV Pharma Certified Cold Facility",
        specs: "Bonded Customs Zone with Automated RFID Scan Gantry",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];
