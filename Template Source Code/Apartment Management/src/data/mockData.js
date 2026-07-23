export const SOCIETY_INFO = {
  name: "SkyNest Luxury Residences",
  tagline: "Ultra-Premium Residential Community & Smart Living",
  towers: 15,
  totalFlats: 1200,
  occupancyRate: "98%",
  amenitiesCount: 25,
  location: "Skyline Avenue, Financial District, Tech Park Zone",
  city: "Metropolis, NY 10001",
  phone: "+1 (800) 555-SKYN",
  email: "concierge@skynestresidences.com",
  emergencyPhone: "+1 (800) 911-SKYN",
};

export const APARTMENT_UNITS = [
  { id: "A-101", tower: "Tower A", floor: "1st Floor", bhk: "3 BHK", area: "2,450 sq ft", owner: "Marcus Vance", tenant: "Eleanor Vance", parking: "P-A12", status: "Occupied", maintenance: "Paid", dues: 0 },
  { id: "A-402", tower: "Tower A", floor: "4th Floor", bhk: "4 BHK Penthouse", area: "3,800 sq ft", owner: "Sophia Sterling", tenant: "Self", parking: "P-A01 & P-A02", status: "Occupied", maintenance: "Paid", dues: 0 },
  { id: "B-204", tower: "Tower B", floor: "2nd Floor", bhk: "2 BHK", area: "1,650 sq ft", owner: "Devon Thorne", tenant: "Sarah Jenkins", parking: "P-B18", status: "Occupied", maintenance: "Overdue", dues: 450 },
  { id: "B-501", tower: "Tower B", floor: "5th Floor", bhk: "3 BHK", area: "2,200 sq ft", owner: "SkyNest Corp", tenant: "Vacant", parking: "Unassigned", status: "Vacant", maintenance: "N/A", dues: 0 },
  { id: "C-803", tower: "Tower C", floor: "8th Floor", bhk: "3 BHK Luxury", area: "2,600 sq ft", owner: "Harrison Croft", tenant: "Liam O'Connor", parking: "P-C09", status: "Occupied", maintenance: "Pending", dues: 350 },
  { id: "C-1201", tower: "Tower C", floor: "12th Floor", bhk: "4 BHK Duplex", area: "4,100 sq ft", owner: "Dr. Elena Rostova", tenant: "Self", parking: "P-C01", status: "Occupied", maintenance: "Paid", dues: 0 },
  { id: "D-302", tower: "Tower D", floor: "3rd Floor", bhk: "2 BHK", area: "1,550 sq ft", owner: "Arthur Pendelton", tenant: "Chloe Bennett", parking: "P-D14", status: "Occupied", maintenance: "Paid", dues: 0 },
  { id: "D-904", tower: "Tower D", floor: "9th Floor", bhk: "3 BHK", area: "2,300 sq ft", owner: "Vikram Malhotra", tenant: "Self", parking: "P-D05", status: "Occupied", maintenance: "Overdue", dues: 720 },
];

export const RESIDENTS_DATA = [
  {
    id: "RES-1001",
    name: "Sophia Sterling",
    apartment: "A-402 (Penthouse)",
    type: "Owner",
    phone: "+1 (555) 234-5678",
    email: "sophia.sterling@apex.io",
    occupation: "Managing Director, Sterling Capital",
    familyMembers: 4,
    moveInDate: "Jan 12, 2022",
    status: "Active",
    kycVerified: true,
    emergencyContact: "David Sterling (+1 555 999 1111)",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    paymentStatus: "Paid Up to Date"
  },
  {
    id: "RES-1002",
    name: "Sarah Jenkins",
    apartment: "B-204",
    type: "Tenant",
    phone: "+1 (555) 876-5432",
    email: "sarah.j@techdesign.com",
    occupation: "Principal UX Architect",
    familyMembers: 2,
    moveInDate: "Aug 01, 2023",
    status: "Active",
    kycVerified: true,
    emergencyContact: "Robert Jenkins (+1 555 888 2222)",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
    paymentStatus: "Overdue ($450)"
  },
  {
    id: "RES-1003",
    name: "Dr. Elena Rostova",
    apartment: "C-1201",
    type: "Owner",
    phone: "+1 (555) 345-6789",
    email: "elena.rostova@medcenter.org",
    occupation: "Chief of Surgery",
    familyMembers: 3,
    moveInDate: "Mar 15, 2021",
    status: "Active",
    kycVerified: true,
    emergencyContact: "Alexey Rostov (+1 555 777 3333)",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    paymentStatus: "Paid Up to Date"
  },
  {
    id: "RES-1004",
    name: "Vikram Malhotra",
    apartment: "D-904",
    type: "Owner",
    phone: "+1 (555) 901-2345",
    email: "vikram@malhotragroup.com",
    occupation: "Founder & CEO, TechVentures",
    familyMembers: 5,
    moveInDate: "Nov 20, 2020",
    status: "Active",
    kycVerified: true,
    emergencyContact: "Priya Malhotra (+1 555 666 4444)",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    paymentStatus: "Overdue ($720)"
  }
];

export const STAFF_MEMBERS = [
  { id: "STF-01", name: "Chief James Brody", role: "Security Supervisor", phone: "+1 (555) 444-1001", shift: "Day (08:00 - 16:00)", status: "On Duty", rating: 4.9, salary: "$4,800/mo", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
  { id: "STF-02", name: "Carlos Mendez", role: "Head Electrician", phone: "+1 (555) 444-1002", shift: "General (09:00 - 17:00)", status: "On Duty", rating: 4.8, salary: "$4,200/mo", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80" },
  { id: "STF-03", name: "Maria Delgado", role: "Housekeeping Lead", phone: "+1 (555) 444-1003", shift: "Morning (07:00 - 15:00)", status: "On Duty", rating: 5.0, salary: "$3,600/mo", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80" },
  { id: "STF-04", name: "Robert Hayes", role: "Senior Plumber", phone: "+1 (555) 444-1004", shift: "On Call", status: "Available", rating: 4.7, salary: "$4,000/mo", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80" },
  { id: "STF-05", name: "Anita Ray", role: "Landscape Gardener", phone: "+1 (555) 444-1005", shift: "Morning (06:00 - 14:00)", status: "Completed Shift", rating: 4.9, salary: "$3,400/mo", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80" }
];

export const VISITORS_LOG = [
  { id: "VIS-8901", visitorName: "Daniel Craig", phone: "+1 (555) 111-2233", hostApartment: "A-402", hostName: "Sophia Sterling", purpose: "Personal / Guest", vehicleNo: "NY-889-X", checkIn: "14:32 Today", checkOut: "Pending", status: "Approved", qrCode: "QR-8901-A402" },
  { id: "VIS-8902", visitorName: "Amazon Prime Logistics", phone: "+1 (555) 999-0011", hostApartment: "B-204", hostName: "Sarah Jenkins", purpose: "Package Delivery", vehicleNo: "VAN-402", checkIn: "14:15 Today", checkOut: "14:22 Today", status: "Completed", qrCode: "QR-8902-B204" },
  { id: "VIS-8903", visitorName: "Michael Chang", phone: "+1 (555) 333-4455", hostApartment: "C-1201", hostName: "Dr. Elena Rostova", purpose: "Medical Representative", vehicleNo: "NJ-451-Z", checkIn: "13:00 Today", checkOut: "13:45 Today", status: "Completed", qrCode: "QR-8903-C1201" },
  { id: "VIS-8904", visitorName: "Uber Eats Delivery", phone: "+1 (555) 777-8899", hostApartment: "D-904", hostName: "Vikram Malhotra", purpose: "Food Delivery", vehicleNo: "M-221", checkIn: "14:40 Today", checkOut: "Pending", status: "Checked In", qrCode: "QR-8904-D904" }
];

export const MAINTENANCE_BILLING = [
  { id: "INV-2026-001", month: "July 2026", unit: "A-402", resident: "Sophia Sterling", baseFee: 350, utilityWater: 45, electricity: 120, parkingFee: 50, gst: 25, total: 590, status: "Paid", dueDate: "Jul 10, 2026", paymentDate: "Jul 04, 2026" },
  { id: "INV-2026-002", month: "July 2026", unit: "B-204", resident: "Sarah Jenkins", baseFee: 280, utilityWater: 35, electricity: 85, parkingFee: 50, gst: 20, total: 470, status: "Overdue", dueDate: "Jul 10, 2026", paymentDate: "-" },
  { id: "INV-2026-003", month: "July 2026", unit: "C-1201", resident: "Dr. Elena Rostova", baseFee: 420, utilityWater: 60, electricity: 140, parkingFee: 50, gst: 30, total: 700, status: "Paid", dueDate: "Jul 10, 2026", paymentDate: "Jul 02, 2026" },
  { id: "INV-2026-004", month: "July 2026", unit: "D-904", resident: "Vikram Malhotra", baseFee: 320, utilityWater: 40, electricity: 95, parkingFee: 50, gst: 22, total: 527, status: "Overdue", dueDate: "Jul 10, 2026", paymentDate: "-" }
];

export const COMPLAINTS_DATA = [
  { id: "TKT-401", category: "Elevator Service", title: "Tower B High-Speed Elevator Sensor Beeping", apartment: "B-204", priority: "High", assignedTo: "Carlos Mendez", status: "In Progress", date: "Jul 22, 2026", description: "Elevator B2 makes a persistent alarm sound when stopping on floor 5.", image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=400&auto=format&fit=crop&q=80" },
  { id: "TKT-402", category: "Plumbing", title: "Low Water Pressure in Master Suite", apartment: "C-1201", priority: "Medium", assignedTo: "Robert Hayes", status: "Resolved", date: "Jul 21, 2026", description: "Pressure booster pump valve needed minor adjustment.", image: null },
  { id: "TKT-403", category: "Clubhouse / Pool", title: "Jacuzzi Temperature Control Calibration", apartment: "A-402", priority: "Low", assignedTo: "Staff Pool Team", status: "Open", date: "Jul 23, 2026", description: "Water temp reading 2 degrees cooler than preset thermostat.", image: null }
];

export const AMENITIES_LIST = [
  { id: "AMN-01", name: "Infinity Olympic Pool", category: "Recreation & Wellness", capacity: "40 Persons", hours: "06:00 AM - 10:00 PM", status: "Available", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&auto=format&fit=crop&q=80", description: "Temperature-controlled 50-meter lap pool with private cabanas and jacuzzi." },
  { id: "AMN-02", name: "High-Tech Fitness Club", category: "Fitness", capacity: "60 Persons", hours: "05:00 AM - 11:00 PM", status: "Available", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80", description: "Technogym biometric equipment, personal trainers, and cardio suite." },
  { id: "AMN-03", name: "Grand Ball Pavilion & Lounge", category: "Events", capacity: "200 Guests", hours: "Booking Required", status: "Booking Required", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&auto=format&fit=crop&q=80", description: "State-of-the-art acoustics, banquet seating, and catering pantry." },
  { id: "AMN-04", name: "Championship Tennis Court", category: "Sports", capacity: "4 Players", hours: "06:00 AM - 09:00 PM", status: "Available", image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&auto=format&fit=crop&q=80", description: "Synthetic acrylic surface with night illumination floodlights." },
  { id: "AMN-05", name: "Private Dolby Atmos Cinema", category: "Entertainment", capacity: "24 Seats", hours: "10:00 AM - 11:00 PM", status: "Available", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80", description: "4K Laser projection with recliner seating and snack service." }
];

export const PARKING_SLOTS = [
  { id: "P-A01", level: "Basement 1", type: "Owner Reserved", assignedTo: "Sophia Sterling (A-402)", vehicle: "Tesla Model S (NY-889-X)", status: "Occupied", evCharger: true },
  { id: "P-A02", level: "Basement 1", type: "Owner Reserved", assignedTo: "Sophia Sterling (A-402)", vehicle: "Porsche Taycan (NY-442-P)", status: "Occupied", evCharger: true },
  { id: "P-B18", level: "Basement 1", type: "Tenant Reserved", assignedTo: "Sarah Jenkins (B-204)", vehicle: "BMW 3 Series (NJ-120-K)", status: "Occupied", evCharger: false },
  { id: "P-V01", level: "Ground Floor", type: "Visitor Slot", assignedTo: "Daniel Craig (VIS-8901)", vehicle: "Audi Q7 (NY-889-X)", status: "Occupied", evCharger: false },
  { id: "P-V02", level: "Ground Floor", type: "Visitor Slot", assignedTo: "Unassigned", vehicle: "-", status: "Vacant", evCharger: true }
];

export const PARCELS_DATA = [
  { id: "PCL-7701", recipient: "Sophia Sterling (A-402)", carrier: "Amazon Prime", trackingNo: "TBA901234901", arrivedAt: "14:15 Today", status: "Notified / Ready", otp: "4892", photo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&auto=format&fit=crop&q=80" },
  { id: "PCL-7702", recipient: "Sarah Jenkins (B-204)", carrier: "FedEx Express", trackingNo: "789012349910", arrivedAt: "11:30 Today", status: "Picked Up", otp: "1093", photo: null },
  { id: "PCL-7703", recipient: "Dr. Elena Rostova (C-1201)", carrier: "DHL International", trackingNo: "DHL-992104-X", arrivedAt: "09:45 Today", status: "Picked Up", otp: "5512", photo: null }
];

export const NOTICES_DATA = [
  { id: "NTC-101", title: "Annual General Body Society Meeting (AGM 2026)", category: "Announcement", date: "Jul 20, 2026", author: "Management Committee", content: "The Annual General Body Meeting is scheduled for Sunday, August 10th at 10:00 AM in the Grand Ball Pavilion. All owners are requested to attend.", priority: "High", pinned: true },
  { id: "NTC-102", title: "Scheduled Solar Grid Maintenance & Testing", category: "Maintenance", date: "Jul 22, 2026", author: "Technical Facilities Dept", content: "Solar grid inverter testing will be conducted on Thursday from 02:00 PM to 04:00 PM. Backup generators will remain online.", priority: "Medium", pinned: false },
  { id: "NTC-103", title: "Monsoon Landscaping & Pest Control Schedule", category: "General", date: "Jul 18, 2026", author: "Horticulture Team", content: "Organic herbal fogging for mosquitoes will be performed around common gardens every Tuesday evening at 06:30 PM.", priority: "Low", pinned: false }
];

export const EVENTS_DATA = [
  { id: "EVT-01", title: "Summer Sky Gazer & Stargazing Night", date: "Aug 02, 2026", time: "08:00 PM", location: "Rooftop Observatory Deck", rsvpCount: 84, status: "Upcoming", image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&auto=format&fit=crop&q=80" },
  { id: "EVT-02", title: "SkyNest Annual Tennis Championship", date: "Aug 15, 2026", time: "07:00 AM", location: "Championship Tennis Court", rsvpCount: 32, status: "Registration Open", image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&auto=format&fit=crop&q=80" },
  { id: "EVT-03", title: "Community Organic Farmers Market", date: "Aug 20, 2026", time: "09:00 AM", location: "Central Plaza Gardens", rsvpCount: 140, status: "Upcoming", image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&auto=format&fit=crop&q=80" }
];

export const DOCUMENTS_DATA = [
  { id: "DOC-01", title: "SkyNest Society Bye-Laws & Code of Conduct 2026", category: "Rules & Policies", size: "2.4 MB", date: "Jan 01, 2026", format: "PDF" },
  { id: "DOC-02", title: "Annual Financial Audit & Revenue Balance Sheet", category: "Financials", size: "5.1 MB", date: "Mar 31, 2026", format: "PDF" },
  { id: "DOC-03", title: "Building Comprehensive Structural Insurance Policy", category: "Legal & Certificates", size: "3.8 MB", date: "May 10, 2026", format: "PDF" },
  { id: "DOC-04", title: "Master EV Charging Infrastructure Guidelines", category: "Facilities", size: "1.2 MB", date: "Jun 15, 2026", format: "PDF" }
];

export const GALLERY_ITEMS = [
  { id: 1, title: "Grand Lobby Entrance", category: "Common Areas", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80" },
  { id: 2, title: "Infinity Rooftop Pool", category: "Amenities", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&auto=format&fit=crop&q=80" },
  { id: 3, title: "Skyline Architecture at Sunset", category: "Building", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80" },
  { id: 4, title: "Central Botanical Park", category: "Landscape", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80" },
  { id: 5, title: "Dolby Atmos Theater", category: "Amenities", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80" },
  { id: 6, title: "Diwali Gala Light Show", category: "Events", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80" }
];

export const REVENUE_MONTHLY_CHART = [
  { month: "Jan", maintenance: 45000, amenities: 4200, parking: 3100 },
  { month: "Feb", maintenance: 46200, amenities: 4800, parking: 3100 },
  { month: "Mar", maintenance: 47000, amenities: 5100, parking: 3200 },
  { month: "Apr", maintenance: 46800, amenities: 5600, parking: 3200 },
  { month: "May", maintenance: 48500, amenities: 6200, parking: 3400 },
  { month: "Jun", maintenance: 49200, amenities: 6800, parking: 3400 },
  { month: "Jul", maintenance: 51000, amenities: 7400, parking: 3500 },
];
