// ============================================================
// PACKAGES DATA
// Pricing packages for event management services
// ============================================================

export const packages = [
  {
    id: 'basic',
    name: 'Essential',
    tier: 'Basic',
    price: 'From $2,500',
    priceNote: 'Starting price, varies by event size',
    color: 'rgba(255,255,255,0.06)',
    popular: false,
    description: 'Perfect for small gatherings and intimate celebrations requiring professional coordination.',
    features: [
      { text: 'Up to 100 Guests', included: true },
      { text: 'Event Consultation (2 Sessions)', included: true },
      { text: 'Vendor Coordination', included: true },
      { text: 'Day-of Coordination', included: true },
      { text: 'Basic Décor Setup', included: true },
      { text: 'Timeline Management', included: true },
      { text: 'Catering Coordination', included: false },
      { text: 'Photography & Videography', included: false },
      { text: 'Entertainment Booking', included: false },
      { text: 'Custom Theme Design', included: false },
      { text: 'Post-Event Report', included: false },
    ],
    cta: 'Get Started',
    icon: 'FaStar',
  },
  {
    id: 'professional',
    name: 'Professional',
    tier: 'Pro',
    price: 'From $6,500',
    priceNote: 'Most popular for mid-size events',
    color: 'var(--color-primary)',
    popular: true,
    description: 'Comprehensive planning and management for events requiring elevated production and coordination.',
    features: [
      { text: 'Up to 500 Guests', included: true },
      { text: 'Unlimited Consultations', included: true },
      { text: 'Full Vendor Management', included: true },
      { text: 'Day-of Coordination (Full Team)', included: true },
      { text: 'Custom Theme & Décor Design', included: true },
      { text: 'Catering Coordination', included: true },
      { text: 'Photography Package', included: true },
      { text: 'Entertainment Booking', included: true },
      { text: 'Event Website', included: true },
      { text: 'Videography', included: false },
      { text: 'Post-Event Analytics Report', included: false },
    ],
    cta: 'Most Popular',
    icon: 'FaGem',
  },
  {
    id: 'premium',
    name: 'Premium',
    tier: 'Premium',
    price: 'From $15,000',
    priceNote: 'Full-service luxury experience',
    color: 'rgba(255,255,255,0.06)',
    popular: false,
    description: 'Full-service luxury event management delivering an extraordinary, unforgettable experience.',
    features: [
      { text: 'Unlimited Guests', included: true },
      { text: 'Dedicated Senior Planner', included: true },
      { text: 'Complete Vendor Management', included: true },
      { text: 'Full Production Team', included: true },
      { text: 'Luxury Theme & Décor Design', included: true },
      { text: 'Fine Dining Catering', included: true },
      { text: 'Premium Photography & Videography', included: true },
      { text: 'Live Entertainment', included: true },
      { text: 'Custom Event App', included: true },
      { text: 'VIP Guest Services', included: true },
      { text: 'Post-Event Analytics Report', included: true },
    ],
    cta: 'Go Premium',
    icon: 'FaCrown',
  },
  {
    id: 'custom',
    name: 'Custom Enterprise',
    tier: 'Custom',
    price: 'Custom Quote',
    priceNote: 'Tailored to your exact requirements',
    color: 'rgba(255,255,255,0.06)',
    popular: false,
    description: 'Bespoke event solutions for large corporations, government bodies, and multi-day productions.',
    features: [
      { text: 'Unlimited Scale & Scope', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Multi-Day Event Support', included: true },
      { text: 'International Coordination', included: true },
      { text: 'Full Brand Integration', included: true },
      { text: 'Broadcast & Livestream', included: true },
      { text: 'Sponsorship Management', included: true },
      { text: 'PR & Media Coordination', included: true },
      { text: 'Post-Event Analytics Suite', included: true },
      { text: 'Year-Round Retainer Options', included: true },
      { text: 'Priority 24/7 Support', included: true },
    ],
    cta: 'Contact Us',
    icon: 'FaBuilding',
  },
];

export const packageComparison = {
  categories: [
    {
      name: 'Planning & Coordination',
      features: [
        { name: 'Event Consultations', essential: '2 Sessions', professional: 'Unlimited', premium: 'Unlimited', custom: 'Dedicated Planner' },
        { name: 'Day-of Coordination', essential: '1 Coordinator', professional: 'Full Team', premium: 'Full Production Team', custom: 'Multi-Department' },
        { name: 'Timeline Management', essential: true, professional: true, premium: true, custom: true },
        { name: 'Vendor Management', essential: 'Basic', professional: 'Full', premium: 'Complete', custom: 'Enterprise-Level' },
      ],
    },
    {
      name: 'Design & Production',
      features: [
        { name: 'Theme & Décor', essential: 'Basic', professional: 'Custom Design', premium: 'Luxury Design', custom: 'Brand Integration' },
        { name: 'Lighting Design', essential: false, professional: true, premium: true, custom: true },
        { name: 'Stage & AV Setup', essential: false, professional: 'Standard', premium: 'Premium', custom: 'Broadcast-Grade' },
        { name: 'Floral Arrangements', essential: false, professional: true, premium: true, custom: true },
      ],
    },
    {
      name: 'Media & Entertainment',
      features: [
        { name: 'Photography', essential: false, professional: 'Package Included', premium: 'Premium Package', custom: 'Full Media Team' },
        { name: 'Videography', essential: false, professional: false, premium: true, custom: true },
        { name: 'Entertainment Booking', essential: false, professional: true, premium: true, custom: 'Full Lineup' },
        { name: 'Livestream / Broadcast', essential: false, professional: false, premium: false, custom: true },
      ],
    },
    {
      name: 'Guest Capacity',
      features: [
        { name: 'Max Guests', essential: 'Up to 100', professional: 'Up to 500', premium: 'Unlimited', custom: 'Unlimited' },
        { name: 'VIP Guest Services', essential: false, professional: false, premium: true, custom: true },
        { name: 'Event App / Website', essential: false, professional: 'Event Website', premium: 'Custom App', custom: 'Enterprise Platform' },
      ],
    },
  ],
};

export default packages;
