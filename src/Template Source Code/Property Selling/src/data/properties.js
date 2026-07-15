export const properties = [
  {
    id: 'prop-01',
    title: 'Minimalist Glass Villa',
    category: 'luxury-villas',
    type: 'Villa',
    status: 'For Sale',
    price: 3450000,
    location: 'Coastal Ridge, Bay Area',
    area: 5200,
    bedrooms: 5,
    bathrooms: 6,
    parking: 3,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isInvestment: true,
    roi: '8.4%',
    description: 'Designed by award-winning architects, this glass villa features seamless indoor-outdoor living, a heated infinity pool, smart home automation, and panoramic views of the coastal ridge.',
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Club House', 'Garden', 'Parking', 'Smart Home', 'Wine Cellar']
  },
  {
    id: 'prop-02',
    title: 'Urban Penthouse Oasis',
    category: 'apartments',
    type: 'Apartment',
    status: 'For Sale',
    price: 1890000,
    location: 'Metropolitan Center, Midtown',
    area: 3100,
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isInvestment: false,
    description: 'Elevated luxury living in the heart of midtown. Featuring a private rooftop terrace, floor-to-ceiling glass windows, custom marble finishes, and concierge services.',
    amenities: ['Gym', 'Security', 'Club House', 'Parking', 'Concierge', 'Private Lift', 'Rooftop Terrace']
  },
  {
    id: 'prop-03',
    title: 'Corporate HQ Tower Office',
    category: 'office-spaces',
    type: 'Commercial',
    status: 'For Lease',
    price: 12500, // Monthly lease
    location: 'Financial District, Block C',
    area: 7500,
    bedrooms: 0,
    bathrooms: 4,
    parking: 5,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isInvestment: true,
    roi: '9.2%',
    description: 'A fully-equipped corporate office floor. Complete with high-speed executive boardrooms, open layout desks, and private cabins in the commercial core.',
    amenities: ['Security', 'Parking', 'Fiber Internet', 'Conference Rooms', 'Cafe', 'Air Conditioning']
  },
  {
    id: 'prop-04',
    title: 'Heritage Organic Farmland',
    category: 'farm-land',
    type: 'Farm Land',
    status: 'For Sale',
    price: 790000,
    location: 'Green Meadows Valley',
    area: 120000, // Sqft
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500937386664-56d15fe0e733?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: false,
    isInvestment: true,
    roi: '11.5%',
    description: 'Premium agricultural parcel featuring fertile soil, natural water irrigation channels, and excellent connectivity. Ideal for agro-tourism or private farmhouses.',
    amenities: ['Water Connection', 'Fencing', 'Access Road', 'Electricity Supply']
  },
  {
    id: 'prop-05',
    title: 'Premium Retail Corner Outlet',
    category: 'retail-spaces',
    type: 'Commercial',
    status: 'For Sale',
    price: 1450000,
    location: 'Main Boulevard, Retail Hub',
    area: 2400,
    bedrooms: 0,
    bathrooms: 2,
    parking: 2,
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: false,
    isInvestment: true,
    roi: '8.9%',
    description: 'High visibility double-height retail showroom located at a major signal intersection. Massive foot traffic and premium storefront display window.',
    amenities: ['Security', 'Parking', 'High Footfall', 'Air Conditioning', 'Storage Area']
  },
  {
    id: 'prop-06',
    title: 'Suburban Development Plot',
    category: 'plots',
    type: 'Plots',
    status: 'For Sale',
    price: 450000,
    location: 'Oakridge Township Sector 4',
    area: 6000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: false,
    isInvestment: false,
    description: 'Fully leveled residential plot with clear titles, close proximity to schools and markets, and immediate utility connectivity.',
    amenities: ['Water Connection', 'Fencing', 'Electricity Supply', 'Club House Membership']
  },
  {
    id: 'prop-07',
    title: 'Mid-Rise Penthouse Apartment',
    category: 'apartments',
    type: 'Apartment',
    status: 'For Rent',
    price: 4800, // Monthly Rent
    location: 'Parkview Towers, North Side',
    area: 1950,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: false,
    isInvestment: false,
    description: 'Modern, fully furnished flat facing the central park. Features a wrap-around balcony, automated kitchen, and central heating.',
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Club House', 'Garden', 'Parking']
  },
  {
    id: 'prop-08',
    title: 'Sunset Coast Luxury Estate',
    category: 'luxury-villas',
    type: 'Villa',
    status: 'For Sale',
    price: 4950000,
    location: 'Pacific Palisades, Malibu',
    area: 6800,
    bedrooms: 6,
    bathrooms: 7,
    parking: 4,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isInvestment: true,
    roi: '7.9%',
    description: 'Architectural masterpiece overlooking the ocean. Complete with custom private cinema room, detached guest house, state-of-the-art wellness spa, and smart-climate wine cellar.',
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Club House', 'Garden', 'Parking', 'Home Cinema', 'Ocean View']
  }
];
