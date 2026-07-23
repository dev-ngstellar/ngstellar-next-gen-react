export const trackingDatabase = {
  "CF-9842-X7": {
    trackingNumber: "CF-9842-X7",
    serviceType: "Air Express Priority",
    origin: "Shanghai Cargo Terminal (PVG)",
    destination: "Frankfurt Logistics Hub (FRA)",
    currentStatus: "In Transit",
    statusCode: "IN_TRANSIT",
    progressPercent: 65,
    estimatedDelivery: "2026-07-25 14:00 CET",
    sender: "TechCorp Global Supply Co., Ltd",
    recipient: "Apex Systems Europe GMBH",
    weight: "485.5 kg",
    dimensions: "120 x 80 x 140 cm",
    pieces: "4 Wooden Skids",
    temperature: "-4°C (Controlled Active Container)",
    courier: "CargoFlow Flight CF-802 (Boeing 777F)",
    timeline: [
      {
        status: "Order Received",
        location: "Shanghai HQ Hub",
        timestamp: "2026-07-22 09:30 CST",
        completed: true,
        description: "Electronic Shipping Data Received. Booking Confirmed."
      },
      {
        status: "Picked Up",
        location: "Shanghai Facility",
        timestamp: "2026-07-22 14:15 CST",
        completed: true,
        description: "Cargo loaded onto feeder truck and scanned into system."
      },
      {
        status: "In Transit",
        location: "Shanghai Airport Cargo Terminal (PVG)",
        timestamp: "2026-07-23 03:45 CST",
        completed: true,
        current: true,
        description: "Departed PVG Hub on Flight CF-802 bound for Frankfurt (FRA)."
      },
      {
        status: "Customs Clearance",
        location: "Frankfurt Airport (FRA)",
        timestamp: "Estimated 2026-07-24 08:00 CET",
        completed: false,
        description: "Awaiting EU Customs Digital Clearance filing."
      },
      {
        status: "Out For Delivery",
        location: "Frankfurt Express Depot",
        timestamp: "Estimated 2026-07-25 09:00 CET",
        completed: false,
        description: "Assigned to Last-Mile Electric Cargo Fleet."
      },
      {
        status: "Delivered",
        location: "Apex Systems Warehouse, Frankfurt",
        timestamp: "Estimated 2026-07-25 14:00 CET",
        completed: false,
        description: "Recipient digital signature confirmation."
      }
    ]
  },
  "CF-7412-M9": {
    trackingNumber: "CF-7412-M9",
    serviceType: "Ocean Freight FCL Container",
    origin: "Port of Rotterdam (NLD)",
    destination: "Port of Singapore (SGP)",
    currentStatus: "Out For Delivery",
    statusCode: "OUT_FOR_DELIVERY",
    progressPercent: 90,
    estimatedDelivery: "2026-07-23 18:30 SGT",
    sender: "Nordic Engineering BV",
    recipient: "Southeast Asia Energy Corp",
    weight: "18,400.0 kg",
    dimensions: "40ft High Cube Dry Container (TGHU-992140)",
    pieces: "1 x 40ft Container",
    temperature: "Ambient (Telemetry Active)",
    courier: "CargoFlow Marine Liner - 'Maersk Horizon'",
    timeline: [
      {
        status: "Order Received",
        location: "Rotterdam Commercial Office",
        timestamp: "2026-07-02 11:00 CET",
        completed: true,
        description: "Export Documentation Verification & Booking Finalized."
      },
      {
        status: "Picked Up",
        location: "Rotterdam Container Yard",
        timestamp: "2026-07-04 08:00 CET",
        completed: true,
        description: "Container sealed (Seal #CF-882190) and loaded onto vessel."
      },
      {
        status: "In Transit",
        location: "Suez Canal Transit Point",
        timestamp: "2026-07-14 16:20 UTC",
        completed: true,
        description: "Sailed through Indian Ocean cargo lane safely."
      },
      {
        status: "Customs Clearance",
        location: "Singapore Pasir Panjang Terminal",
        timestamp: "2026-07-22 22:00 SGT",
        completed: true,
        description: "Customs Duty Exemption Cleared by Singapore Customs."
      },
      {
        status: "Out For Delivery",
        location: "Singapore Port Intermodal Depot",
        timestamp: "2026-07-23 11:30 SGT",
        completed: true,
        current: true,
        description: "Mounted on Heavy Duty Container Chassis Truck CF-440."
      },
      {
        status: "Delivered",
        location: "Tuas Industrial Park, Singapore",
        timestamp: "Estimated 2026-07-23 18:30 SGT",
        completed: false,
        description: "Unloading scheduled at recipient dock."
      }
    ]
  },
  "CF-3301-R2": {
    trackingNumber: "CF-3301-R2",
    serviceType: "Overland Cold-Chain Express",
    origin: "Chicago Logistics Center, IL",
    destination: "New York Metro Hub, NY",
    currentStatus: "Delivered",
    statusCode: "DELIVERED",
    progressPercent: 100,
    estimatedDelivery: "2026-07-23 10:15 EST",
    sender: "BioMed Research Labs USA",
    recipient: "Manhattan General Specialty Clinic",
    weight: "62.0 kg",
    dimensions: "60 x 50 x 50 cm",
    pieces: "2 Temperature-Controlled Boxes",
    temperature: "-20°C (Dry Ice Sealed)",
    courier: "CargoFlow Express Reefer Unit #902",
    timeline: [
      {
        status: "Order Received",
        location: "Chicago HQ Dispatch",
        timestamp: "2026-07-22 06:00 CST",
        completed: true,
        description: "Priority Bio-Pharma Request Approved."
      },
      {
        status: "Picked Up",
        location: "BioMed Facility, Chicago",
        timestamp: "2026-07-22 08:30 CST",
        completed: true,
        description: "Thermal sensor initialized and verified at -20.2°C."
      },
      {
        status: "In Transit",
        location: "Interstate 80 East Cargo Corridor",
        timestamp: "2026-07-22 18:45 EST",
        completed: true,
        description: "Smooth transit via dedicated express team drivers."
      },
      {
        status: "Customs Clearance",
        location: "State Line Entry Point",
        timestamp: "2026-07-23 04:00 EST",
        completed: true,
        description: "State Bio-Hazard Transportation Permit Verified."
      },
      {
        status: "Out For Delivery",
        location: "Long Island City Dispatch Center",
        timestamp: "2026-07-23 07:30 EST",
        completed: true,
        description: "Loaded into temperature-monitored electric sprinter van."
      },
      {
        status: "Delivered",
        location: "Manhattan General Clinic, NY",
        timestamp: "2026-07-23 10:15 EST",
        completed: true,
        current: true,
        description: "Received & signed by Dr. Sarah Jenkins (POD #NY-9921)."
      }
    ]
  }
};

// Fallback helper to simulate dynamic waybill lookup for any custom code entered by user
export const getShipmentDetails = (waybillId) => {
  const cleanId = String(waybillId).trim().toUpperCase();
  if (trackingDatabase[cleanId]) {
    return trackingDatabase[cleanId];
  }
  
  // Generate a dynamic realistic shipment for any user-typed waybill
  return {
    trackingNumber: cleanId || "CF-8800-LIVE",
    serviceType: "Intermodal Smart Express",
    origin: "Global Logistics Gateway Hub",
    destination: "Destination Metro Freight Terminal",
    currentStatus: "In Transit",
    statusCode: "IN_TRANSIT",
    progressPercent: 55,
    estimatedDelivery: "2026-07-26 16:00 Local",
    sender: "Global Trade Enterprise",
    recipient: "Registered Commercial Consignee",
    weight: "250.0 kg",
    dimensions: "100 x 80 x 90 cm",
    pieces: "2 Pallets",
    temperature: "Ambient Standard",
    courier: "CargoFlow Global Fleet Direct",
    timeline: [
      {
        status: "Order Received",
        location: "Origin Gateway Terminal",
        timestamp: "2026-07-23 08:00",
        completed: true,
        description: "Waybill created and registered on CargoFlow Global Ledger."
      },
      {
        status: "Picked Up",
        location: "Origin Dispatch Center",
        timestamp: "2026-07-23 11:30",
        completed: true,
        description: "Cargo inspected and scanned onto linehaul unit."
      },
      {
        status: "In Transit",
        location: "International Freight Corridor",
        timestamp: "2026-07-23 14:00",
        completed: true,
        current: true,
        description: "Currently in transit. GPS telemetry active."
      },
      {
        status: "Customs Clearance",
        location: "Destination Customs Yard",
        timestamp: "Estimated 2026-07-25 09:00",
        completed: false,
        description: "Pending import declaration."
      },
      {
        status: "Out For Delivery",
        location: "Local Express Facility",
        timestamp: "Estimated 2026-07-26 08:00",
        completed: false,
        description: "Scheduled for last mile courier dispatch."
      },
      {
        status: "Delivered",
        location: "Recipient Warehouse",
        timestamp: "Estimated 2026-07-26 16:00",
        completed: false,
        description: "Awaiting final delivery handshake."
      }
    ]
  };
};
