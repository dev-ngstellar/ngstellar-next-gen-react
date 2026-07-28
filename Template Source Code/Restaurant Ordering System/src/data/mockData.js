export const FOOD_CATEGORIES = [
  { id: 'all', name: 'All Dishes', icon: 'Sparkles', count: 24 },
  { id: 'pizza', name: 'Artisanal Pizza', icon: 'Pizza', count: 6 },
  { id: 'burger', name: 'Gourmet Burgers', icon: 'HamBurger', count: 5 },
  { id: 'pasta', name: 'Fresh Pasta', icon: 'Utensils', count: 4 },
  { id: 'seafood', name: 'Ocean Seafood', icon: 'Fish', count: 3 },
  { id: 'dessert', name: 'Signature Desserts', icon: 'Cake', count: 4 },
  { id: 'drinks', name: 'Craft Beverages', icon: 'Wine', count: 4 },
];

export const FOOD_ITEMS = [
  {
    id: 'dish-1',
    name: 'Truffle & Wild Mushroom Pizza',
    category: 'pizza',
    price: 28.50,
    rating: 4.9,
    reviewsCount: 142,
    prepTime: '20-25 min',
    calories: '850 kcal',
    isChefSpecial: true,
    isVeg: true,
    isSpicy: false,
    isPopular: true,
    isNew: false,
    discountPrice: 24.00,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Slow-fermented sourdough crust topped with black truffle paste, wild chanterelles, fior di latte mozzarella, fresh thyme, and white truffle oil drizzle.',
    ingredients: ['Black Truffle Paste', 'Wild Chanterelles', 'Fior di Latte Mozzarella', 'Aged Parmigiano', 'Fresh Thyme', 'Extra Virgin Olive Oil'],
    nutrition: { carbs: '92g', protein: '28g', fat: '34g', fiber: '6g' },
    customizations: [
      { name: 'Crust Type', options: ['Sourdough (Default)', 'Thin Crispy', 'Gluten-Free (+ $3.00)'] },
      { name: 'Extra Toppings', options: ['Extra Truffle Oil (+ $2.50)', 'Fresh Burrata (+ $4.00)', 'Aged Prosciutto (+ $4.50)'] }
    ]
  },
  {
    id: 'dish-2',
    name: 'Wagyu A5 Black Garlic Burger',
    category: 'burger',
    price: 34.00,
    rating: 5.0,
    reviewsCount: 198,
    prepTime: '15-20 min',
    calories: '980 kcal',
    isChefSpecial: true,
    isVeg: false,
    isSpicy: false,
    isPopular: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Double 100% Japanese Wagyu beef patties, caramelized black garlic aioli, smoked Gruyère cheese, micro arugula on a toasted artisanal brioche bun.',
    ingredients: ['Wagyu Beef Patties', 'Black Garlic Aioli', 'Smoked Gruyère', 'Micro Greens', 'Brioche Bun'],
    nutrition: { carbs: '54g', protein: '58g', fat: '62g', fiber: '3g' },
    customizations: [
      { name: 'Doneness', options: ['Medium Rare', 'Medium (Recommended)', 'Medium Well'] },
      { name: 'Sides', options: ['Truffle Fries (Included)', 'Sweet Potato Wedges', 'Side Caesar Salad'] }
    ]
  },
  {
    id: 'dish-3',
    name: 'Handmade Lobster Fettuccine',
    category: 'pasta',
    price: 36.00,
    rating: 4.8,
    reviewsCount: 95,
    prepTime: '25 min',
    calories: '760 kcal',
    isChefSpecial: false,
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Fresh egg fettuccine tossed with butter-poached Maine lobster tail, saffron cream reduction, cherry tomatoes, and Calabrian chili oil.',
    ingredients: ['Fresh Fettuccine', 'Maine Lobster', 'Saffron Cream', 'Calabrian Chili', 'Heirloom Tomatoes'],
    nutrition: { carbs: '78g', protein: '38g', fat: '30g', fiber: '4g' },
    customizations: [
      { name: 'Spice Level', options: ['Mild', 'Medium Spicy', 'Extra Calabrian Chili'] }
    ]
  },
  {
    id: 'dish-4',
    name: 'Pan-Seared Chilean Sea Bass',
    category: 'seafood',
    price: 42.00,
    rating: 4.9,
    reviewsCount: 84,
    prepTime: '20 min',
    calories: '620 kcal',
    isChefSpecial: true,
    isVeg: false,
    isSpicy: false,
    isPopular: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Wild-caught sea bass over lemongrass ginger velvet puree, baby bok choy, finished with dashi soy reduction.',
    ingredients: ['Chilean Sea Bass', 'Lemongrass Puree', 'Baby Bok Choy', 'Dashi Reduction'],
    nutrition: { carbs: '22g', protein: '46g', fat: '28g', fiber: '5g' }
  },
  {
    id: 'dish-5',
    name: 'Gold Leaf Chocolate Sphere',
    category: 'dessert',
    price: 18.00,
    rating: 5.0,
    reviewsCount: 230,
    prepTime: '10 min',
    calories: '540 kcal',
    isChefSpecial: true,
    isVeg: true,
    isSpicy: false,
    isPopular: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Dark Valrhona chocolate sphere encased in 24k edible gold leaf, filled with hazelnut mousse, poured with hot salted caramel at table.',
    ingredients: ['70% Valrhona Dark Chocolate', '24k Gold Leaf', 'Piedmont Hazelnut', 'Salted Caramel'],
    nutrition: { carbs: '64g', protein: '8g', fat: '32g', fiber: '7g' }
  },
  {
    id: 'dish-6',
    name: 'Smoked Old Fashioned Cocktail',
    category: 'drinks',
    price: 16.50,
    rating: 4.9,
    reviewsCount: 112,
    prepTime: '5 min',
    calories: '190 kcal',
    isChefSpecial: false,
    isVeg: true,
    isSpicy: false,
    isPopular: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Small-batch Reserve Bourbon, Angostura & orange bitters, smoked with hickory wood under a glass cloche.',
    ingredients: ['Reserve Bourbon', 'Angostura Bitters', 'Orange Peel', 'Hickory Smoke']
  }
];

export const INITIAL_ORDERS = [
  {
    id: 'ORD-8821',
    customerName: 'Eleanor Vance',
    customerPhone: '+1 (555) 019-2834',
    customerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    type: 'Delivery',
    tableNo: null,
    address: '742 Evergreen Terrace, Apt 4B',
    status: 'Preparing', // Accepted, Preparing, Ready, Out for Delivery, Delivered
    items: [
      { name: 'Truffle & Wild Mushroom Pizza', qty: 1, price: 28.50 },
      { name: 'Gold Leaf Chocolate Sphere', qty: 2, price: 36.00 }
    ],
    subtotal: 64.50,
    tax: 5.80,
    deliveryFee: 4.99,
    total: 75.29,
    paymentMethod: 'Apple Pay (Paid)',
    placedAt: '12 mins ago',
    prepProgress: 60,
    driver: { name: 'Marcus Sterling', phone: '+1 555-883-9911', vehicle: 'Black Prius (XYZ-491)' }
  },
  {
    id: 'ORD-8822',
    customerName: 'Alexander Hayes',
    customerPhone: '+1 (555) 839-1029',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    type: 'Dine-In',
    tableNo: 'Table 04',
    address: null,
    status: 'Cooking',
    items: [
      { name: 'Wagyu A5 Black Garlic Burger', qty: 2, price: 68.00 },
      { name: 'Smoked Old Fashioned Cocktail', qty: 2, price: 33.00 }
    ],
    subtotal: 101.00,
    tax: 9.09,
    deliveryFee: 0,
    total: 110.09,
    paymentMethod: 'Credit Card (Pending)',
    placedAt: '8 mins ago',
    prepProgress: 40
  },
  {
    id: 'ORD-8823',
    customerName: 'Sophia Martinez',
    customerPhone: '+1 (555) 472-8819',
    customerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    type: 'Delivery',
    tableNo: null,
    address: '100 Ocean Drive, Penthouse 12',
    status: 'Ready',
    items: [
      { name: 'Handmade Lobster Fettuccine', qty: 1, price: 36.00 },
      { name: 'Pan-Seared Chilean Sea Bass', qty: 1, price: 42.00 }
    ],
    subtotal: 78.00,
    tax: 7.02,
    deliveryFee: 4.99,
    total: 90.01,
    paymentMethod: 'Credit Card (Paid)',
    placedAt: '22 mins ago',
    prepProgress: 100,
    driver: { name: 'Elena Rostova', phone: '+1 555-442-1100', vehicle: 'Vespa Sprint (M-889)' }
  }
];

export const MOCK_RESERVATIONS = [
  { id: 'RES-101', name: 'David Kim', partySize: 4, date: 'Today', time: '19:30', table: 'Table 08 (VIP Box)', status: 'Confirmed', phone: '+1 555-901-2233' },
  { id: 'RES-102', name: 'Rachel Green', partySize: 2, date: 'Today', time: '20:00', table: 'Table 02 (Patio)', status: 'Seated', phone: '+1 555-881-3322' },
  { id: 'RES-103', name: 'Robert Vance', partySize: 6, date: 'Tomorrow', time: '18:45', table: 'Table 12 (Main Dining)', status: 'Pending', phone: '+1 555-443-2211' }
];

export const MOCK_PROMOS = [
  { id: 'PR-1', code: 'GOURMET20', discount: '20% OFF', minSpend: '$50', expiry: 'Ends in 3 days', description: 'Enjoy 20% off your order of $50 or more on signature dishes.' },
  { id: 'PR-2', code: 'TRUFFLELover', discount: 'Free Truffle Fries', minSpend: '$35', expiry: 'Valid this week', description: 'Get a complimentary portion of Truffle Fries with any burger order.' },
  { id: 'PR-3', code: 'CHEFVIP', discount: '$15 OFF', minSpend: '$75', expiry: 'Limited Time', description: 'Exclusive discount for our VIP Loyalty members.' }
];

export const MOCK_INVENTORY = [
  { id: 'INV-1', name: 'Black Truffle Paste', category: 'Pantry', stock: '2.4 kg', threshold: '1.0 kg', status: 'Optimal', supplier: 'Truffle Co. Italy' },
  { id: 'INV-2', name: 'A5 Wagyu Beef Patties', category: 'Meat', stock: '8 units', threshold: '15 units', status: 'Low Stock', supplier: 'Miyazaki Imports' },
  { id: 'INV-3', name: 'Maine Lobster Tails', category: 'Seafood', stock: '14 units', threshold: '10 units', status: 'Optimal', supplier: 'Atlantic Seafood' },
  { id: 'INV-4', name: 'Valrhona Chocolate 70%', category: 'Baking', stock: '0.8 kg', threshold: '2.0 kg', status: 'Critical', supplier: 'Valrhona France' }
];
