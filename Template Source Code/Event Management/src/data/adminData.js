// Dataset for SaaS Admin Operations, Analytics & Management

export const ADMIN_METRICS = {
  totalRevenue: 248950,
  monthlyRevenue: 64200,
  growthPercentage: 18.4,
  todayRegistrations: 142,
  activeEventsCount: 8,
  completedEventsCount: 34,
  pendingBookings: 12,
  liveVisitors: 648
};

export const REVENUE_CHART_DATA = [
  { month: "Jan", revenue: 28000, registrations: 420 },
  { month: "Feb", revenue: 35000, registrations: 510 },
  { month: "Mar", revenue: 42000, registrations: 680 },
  { month: "Apr", revenue: 39000, registrations: 590 },
  { month: "May", revenue: 58000, registrations: 890 },
  { month: "Jun", revenue: 64200, registrations: 1040 }
];

export const REGISTRATION_FUNNEL = [
  { stage: "Page Impressions", count: 48500, fill: "#6366f1" },
  { stage: "Event Views", count: 24200, fill: "#8b5cf6" },
  { stage: "Ticket Checkout Initiated", count: 8600, fill: "#ec4899" },
  { stage: "Completed Bookings", count: 3420, fill: "#10b981" }
];

export const RECENT_BOOKINGS = [
  {
    id: "BKG-9081",
    customer: "Alexander Wright",
    email: "alex.wright@vanguard.io",
    event: "Global Tech Vision Summit 2026",
    ticketType: "VIP Access Pass",
    amount: "$499.00",
    status: "Confirmed",
    date: "2026-07-24 14:32",
    qrCode: "QR-STELLAR-9081"
  },
  {
    id: "BKG-9082",
    customer: "Elena Rostova",
    email: "elena@neuralmind.ai",
    event: "Aura Luxury Fashion & Design Gala",
    ticketType: "Haute Couture Pass",
    amount: "$850.00",
    status: "Confirmed",
    date: "2026-07-24 13:15",
    qrCode: "QR-STELLAR-9082"
  },
  {
    id: "BKG-9083",
    customer: "Marcus Vance",
    email: "m.vance@apex.com",
    event: "FinTech Symposium 2026",
    ticketType: "Regular Executive",
    amount: "$620.00",
    status: "Pending",
    date: "2026-07-24 11:05",
    qrCode: "QR-STELLAR-9083"
  },
  {
    id: "BKG-9084",
    customer: "Sophie Martin",
    email: "sophie@lumiere.fr",
    event: "Starlight Neon Music Festival",
    ticketType: "3-Day VIP Wristband",
    amount: "$320.00",
    status: "Confirmed",
    date: "2026-07-24 09:40",
    qrCode: "QR-STELLAR-9084"
  },
  {
    id: "BKG-9085",
    customer: "Kenji Sato",
    email: "kenji@tokyotech.jp",
    event: "Global Tech Vision Summit 2026",
    ticketType: "Virtual Pass",
    amount: "$199.00",
    status: "Cancelled",
    date: "2026-07-23 18:22",
    qrCode: "QR-STELLAR-9085"
  }
];

export const ATTENDEES_LIST = [
  { id: "ATT-101", name: "Alexander Wright", email: "alex.wright@vanguard.io", checkIn: true, time: "09:12 AM", seat: "A-12" },
  { id: "ATT-102", name: "Elena Rostova", email: "elena@neuralmind.ai", checkIn: true, time: "09:30 AM", seat: "VIP-04" },
  { id: "ATT-103", name: "Marcus Vance", email: "m.vance@apex.com", checkIn: false, time: "-", seat: "B-45" },
  { id: "ATT-104", name: "Sophie Martin", email: "sophie@lumiere.fr", checkIn: true, time: "10:05 AM", seat: "VIP-09" }
];

export const VENUES_LIST = [
  { id: "ven-1", name: "Metropolitan Convention Center", city: "New York, USA", capacity: "3,500", rate: "$12,000 / day", status: "Available" },
  { id: "ven-2", name: "Palais de la Bourse", city: "Paris, France", capacity: "1,200", rate: "€15,000 / day", status: "Booked" },
  { id: "ven-3", name: "The ExCeL London Arena", city: "London, UK", capacity: "5,000", rate: "£18,000 / day", status: "Available" },
  { id: "ven-4", name: "Odaiba Bay Park Arena", city: "Tokyo, Japan", capacity: "10,000", rate: "¥2,500,000 / day", status: "Available" }
];

export const MEDIA_ASSETS = [
  { id: 1, name: "hero-tech-summit.jpeg", size: "2.4 MB", type: "Image", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "paris-fashion-gala.png", size: "4.1 MB", type: "Image", url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "keynote-stage-3d.mp4", size: "18.5 MB", type: "Video", url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "tokyo-festival-crowd.jpeg", size: "3.2 MB", type: "Image", url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600" }
];

export const BLOG_POSTS = [
  { id: "post-1", title: "Top 10 Event Design Trends for 2027", author: "Antigravity Team", category: "Design", status: "Published", views: 2420, date: "Jul 18, 2026" },
  { id: "post-2", title: "Maximizing VIP Ticket Sales with Glassmorphic UX", author: "Antigravity Team", category: "Growth", status: "Published", views: 1850, date: "Jul 10, 2026" },
  { id: "post-3", title: "Hybrid Conference Logistics Strategy", author: "Antigravity Team", category: "Operations", status: "Draft", views: 0, date: "Jul 02, 2026" }
];
