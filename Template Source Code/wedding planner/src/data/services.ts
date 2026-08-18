import { assets } from '../config/assets';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  ctaText?: string;
  popular?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "full-wedding-planning",
    title: "Full Wedding Planning",
    shortDesc: "Complete planning and coordination from concept to celebration. We help shape the overall vision, manage timelines, coordinate vendors, and keep the entire planning journey organized.",
    fullDesc: "Complete planning and coordination from concept to celebration. We help shape the overall vision, manage timelines, coordinate vendors, and keep the entire planning journey organized.",
    image: assets.services.planning,
    popular: true,
    features: [
      "Dedicated senior wedding director",
      "Budget creation & allocation tracking",
      "Complete design, moodboards & decor layout",
      "Full vendor sourcing & contract negotiation",
      "Comprehensive timeline & RSVP management",
      "On-site coordination team for all events"
    ],
    ctaText: "Plan Your Wedding"
  },
  {
    id: "wedding-decor",
    title: "Wedding Décor & Styling",
    shortDesc: "Elegant themes, floral arrangements, stage designs, lighting, and personalized décor created to bring your wedding atmosphere to life.",
    fullDesc: "Elegant themes, floral arrangements, stage designs, lighting, and personalized décor created to bring your wedding atmosphere to life.",
    image: assets.services.decor,
    features: [
      "Custom Mandap & Stage concept design",
      "Exquisite floral archways & tablescapes",
      "Ambient architectural & mood lighting",
      "Themed entrance gates & seating layouts",
      "Luxury linens, tableware & drapery",
      "3D spatial preview rendering"
    ],
    ctaText: "Plan Your Wedding"
  },
  {
    id: "destination-weddings",
    title: "Destination Weddings",
    shortDesc: "Beautiful celebrations planned across stunning destinations with seamless coordination. From location planning to guest logistics, we help bring your destination celebration together.",
    fullDesc: "Beautiful celebrations planned across stunning destinations with seamless coordination. From location planning to guest logistics, we help bring your destination celebration together.",
    image: assets.services.destination,
    popular: true,
    features: [
      "Global destination & venue curations",
      "Guest travel, airport transfers & hospitality",
      "Welcome kit design & hamper assembly",
      "Local permissions & vendor management",
      "Multi-day event itinerary planning",
      "Dedicated guest concierge team"
    ],
    ctaText: "Plan Your Wedding"
  },
  {
    id: "venue-management",
    title: "Venue & Vendor Management",
    shortDesc: "We help you find and coordinate trusted venues, caterers, photographers, entertainers, and more, ensuring every partner works together smoothly.",
    fullDesc: "We help you find and coordinate trusted venues, caterers, photographers, entertainers, and more, ensuring every partner works together smoothly.",
    image: assets.services.venue,
    features: [
      "Access to exclusive luxury venues",
      "Catering curation & tasting sessions",
      "Sound, light & stage technical management",
      "Contract negotiation & transparent billing",
      "Artisan artist & performer bookings",
      "Licensing & security arrangements"
    ],
    ctaText: "Plan Your Wedding"
  },
  {
    id: "wedding-day",
    title: "Wedding Day Coordination",
    shortDesc: "Professional on-the-day management so everything runs smoothly while you enjoy every moment. Our team manages schedules, vendors, transitions, and important details behind the scenes.",
    fullDesc: "Professional on-the-day management so everything runs smoothly while you enjoy every moment. Our team manages schedules, vendors, transitions, and important details behind the scenes.",
    image: assets.services.coordination,
    features: [
      "Pre-wedding 30-day timeline audit",
      "Vendor alignment & run-sheet creation",
      "Bridal & groom party assistant",
      "Real-time schedule & guest flow control",
      "Emergency kit & problem resolution",
      "Gift management & vendor settlements"
    ],
    ctaText: "Plan Your Wedding"
  },
  {
    id: "photography",
    title: "Photography & Entertainment",
    shortDesc: "Capture your special moments and create an unforgettable atmosphere with carefully selected photography and entertainment professionals.",
    fullDesc: "Capture your special moments and create an unforgettable atmosphere with carefully selected photography and entertainment professionals.",
    image: assets.services.photography,
    features: [
      "Candid & traditional wedding photography",
      "4K cinematic wedding trailer & films",
      "Pre-wedding shoot styling & locations",
      "Live acoustic bands & celebrity DJs",
      "Sangeet dance choreography",
      "Custom photobooth & interactive stations"
    ],
    ctaText: "Plan Your Wedding"
  }
];
