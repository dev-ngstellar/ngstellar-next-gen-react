export const MOCK_BRANCHES = [
  { id: 'b1', name: 'Metro Flagship Store', city: 'New York, NY', code: 'NYC-01', stockMultiplier: 1.2, address: '450 Fifth Avenue, NY' },
  { id: 'b2', name: 'Westside Express Hub', city: 'Los Angeles, CA', code: 'LA-02', stockMultiplier: 0.9, address: '980 Wilshire Blvd, LA' },
  { id: 'b3', name: 'Organics Central Market', city: 'Austin, TX', code: 'ATX-03', stockMultiplier: 1.0, address: '1200 Congress Ave, Austin' },
  { id: 'b4', name: 'Northside Hypermarket', city: 'Chicago, IL', code: 'CHI-04', stockMultiplier: 1.5, address: '300 N Michigan Ave, Chicago' }
];

export const MOCK_CATEGORIES = [
  { id: 'c1', name: 'Vegetables', icon: 'Carrot', itemCount: 48, banner: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80' },
  { id: 'c2', name: 'Fruits', icon: 'Apple', itemCount: 36, banner: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80' },
  { id: 'c3', name: 'Dairy & Eggs', icon: 'Milk', itemCount: 29, banner: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80' },
  { id: 'c4', name: 'Bakery', icon: 'Wheat', itemCount: 22, banner: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80' },
  { id: 'c5', name: 'Meat & Poultry', icon: 'Drumstick', itemCount: 31, banner: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80' },
  { id: 'c6', name: 'Seafood', icon: 'Fish', itemCount: 18, banner: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80' },
  { id: 'c7', name: 'Beverages', icon: 'Coffee', itemCount: 42, banner: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80' },
  { id: 'c8', name: 'Frozen Foods', icon: 'Snowflake', itemCount: 25, banner: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80' },
  { id: 'c9', name: 'Snacks & Pantry', icon: 'Cookie', itemCount: 54, banner: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80' },
  { id: 'c10', name: 'Organic & Bio', icon: 'Leaf', itemCount: 60, banner: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80' }
];

export const MOCK_PRODUCTS = [
  {
    id: 'p1',
    name: 'Organic Hass Avocados',
    category: 'Vegetables',
    brand: 'NaturaFarm',
    price: 4.99,
    originalPrice: 6.99,
    unit: 'Pack of 4',
    rating: 4.9,
    reviewsCount: 128,
    isOrganic: true,
    isFlashSale: true,
    discountPercentage: 28,
    stock: 85,
    lowStockThreshold: 20,
    batchNumber: 'BAT-2026-AVO-09',
    expiryDate: '2026-08-10',
    barcode: '8901234567891',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80',
    description: 'Creamy, rich Hass avocados grown sustainably without synthetic pesticides. Hand-picked at peak ripeness.',
    nutrition: { calories: '160 kcal', protein: '2g', carbs: '9g', fat: '15g', fiber: '7g' },
    storage: 'Keep at room temperature until ripe, then refrigerate up to 5 days.',
    origin: 'California, USA',
    tags: ['Fresh', 'Organic', 'Keto', 'Superfood']
  },
  {
    id: 'p2',
    name: 'Fresh Hydroponic Strawberries',
    category: 'Fruits',
    brand: 'BerryBliss',
    price: 5.49,
    originalPrice: 6.99,
    unit: '1 lb Container',
    rating: 4.8,
    reviewsCount: 94,
    isOrganic: true,
    isFlashSale: true,
    discountPercentage: 21,
    stock: 42,
    lowStockThreshold: 15,
    batchNumber: 'BAT-2026-STR-44',
    expiryDate: '2026-08-05',
    barcode: '8901234567892',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80',
    description: 'Juicy, sweet greenhouse-grown strawberries picked daily. Perfectly ripe and bursting with natural flavor.',
    nutrition: { calories: '49 kcal', protein: '1g', carbs: '11.7g', fat: '0.4g', fiber: '3g' },
    storage: 'Refrigerate immediately between 32°F to 36°F.',
    origin: 'Oregon, USA',
    tags: ['Organic', 'Vitamin C', 'Hydrating']
  },
  {
    id: 'p3',
    name: 'Wild Caught Atlantic Salmon Fillet',
    category: 'Seafood',
    brand: 'OceanPure',
    price: 18.99,
    originalPrice: 22.99,
    unit: '1.2 lbs Pack',
    rating: 4.95,
    reviewsCount: 210,
    isOrganic: false,
    isFlashSale: false,
    discountPercentage: 17,
    stock: 18,
    lowStockThreshold: 10,
    batchNumber: 'BAT-2026-SAL-12',
    expiryDate: '2026-08-04',
    barcode: '8901234567893',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    description: 'Sustainably wild caught salmon with rich Omega-3 fatty acids. Skin-on fillet ready for pan-searing or baking.',
    nutrition: { calories: '206 kcal', protein: '22g', carbs: '0g', fat: '12g', omega3: '2.5g' },
    storage: 'Keep refrigerated at 32°F or freeze for up to 3 months.',
    origin: 'Alaska, USA',
    tags: ['Wild Caught', 'Omega-3', 'High Protein']
  },
  {
    id: 'p4',
    name: 'Artisanal Sourdough Country Loaf',
    category: 'Bakery',
    brand: 'Bakehouse 1888',
    price: 6.25,
    originalPrice: 7.50,
    unit: '600g Loaf',
    rating: 4.87,
    reviewsCount: 88,
    isOrganic: true,
    isFlashSale: false,
    discountPercentage: 0,
    stock: 30,
    lowStockThreshold: 8,
    batchNumber: 'BAT-2026-BRD-88',
    expiryDate: '2026-08-03',
    barcode: '8901234567894',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    description: 'Slow-fermented for 36 hours using organic unbleached flour and natural starter. Crispy crust with open airy crumb.',
    nutrition: { calories: '180 kcal', protein: '7g', carbs: '36g', fat: '1g', fiber: '2g' },
    storage: 'Store in breadbox or paper bag. Slice and freeze for longer storage.',
    origin: 'Local Artisan Bakery',
    tags: ['Artisanal', 'Organic', '36hr Ferment']
  },
  {
    id: 'p5',
    name: 'Grass-Fed Whole Milk Organic Dairy',
    category: 'Dairy & Eggs',
    brand: 'PastureGold',
    price: 4.89,
    originalPrice: 5.49,
    unit: '0.5 Gallon',
    rating: 4.92,
    reviewsCount: 156,
    isOrganic: true,
    isFlashSale: false,
    discountPercentage: 0,
    stock: 65,
    lowStockThreshold: 15,
    batchNumber: 'BAT-2026-MLK-05',
    expiryDate: '2026-08-14',
    barcode: '8901234567895',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
    description: '100% pasture-raised grass-fed organic milk with cream top. Non-GMO verified and ultra-pasteurized for freshness.',
    nutrition: { calories: '150 kcal', protein: '8g', carbs: '12g', fat: '8g', calcium: '300mg' },
    storage: 'Refrigerate under 38°F. Use within 7 days of opening.',
    origin: 'Vermont Farms',
    tags: ['Grass-Fed', 'Pasture Raised', 'Non-GMO']
  },
  {
    id: 'p6',
    name: 'Cold Pressed Green Juice Vitality',
    category: 'Beverages',
    brand: 'Press&Co',
    price: 6.99,
    originalPrice: 8.49,
    unit: '16 fl oz',
    rating: 4.75,
    reviewsCount: 62,
    isOrganic: true,
    isFlashSale: true,
    discountPercentage: 18,
    stock: 28,
    lowStockThreshold: 10,
    batchNumber: 'BAT-2026-JUC-99',
    expiryDate: '2026-08-08',
    barcode: '8901234567896',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    description: 'Cold-pressed kale, spinach, cucumber, green apple, lemon, and ginger. No added sugar or preservatives.',
    nutrition: { calories: '110 kcal', protein: '3g', carbs: '24g', fat: '0.5g', vitC: '120%' },
    storage: 'Keep cold. Shake well before drinking.',
    origin: 'California, USA',
    tags: ['Detox', 'Cold Pressed', 'Raw']
  },
  {
    id: 'p7',
    name: 'Prime Wagyu Ribeye Steak A5 Grade',
    category: 'Meat & Poultry',
    brand: 'Kurobuta Farms',
    price: 34.99,
    originalPrice: 42.00,
    unit: '12 oz Cut',
    rating: 4.98,
    reviewsCount: 145,
    isOrganic: false,
    isFlashSale: true,
    discountPercentage: 16,
    stock: 12,
    lowStockThreshold: 5,
    batchNumber: 'BAT-2026-WAG-01',
    expiryDate: '2026-08-06',
    barcode: '8901234567897',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Intense marbling with unbelievable tenderness. Sourced directly from certified Japanese Wagyu farms.',
    nutrition: { calories: '330 kcal', protein: '24g', carbs: '0g', fat: '26g', iron: '20%' },
    storage: 'Refrigerate at 34°F. Bring to room temp 30 min before searing.',
    origin: 'Miyazaki, Japan',
    tags: ['A5 Wagyu', 'Gourmet', 'Keto']
  },
  {
    id: 'p8',
    name: 'Organic Heirloom Tomatoes',
    category: 'Vegetables',
    brand: 'NaturaFarm',
    price: 3.99,
    originalPrice: 4.99,
    unit: '1.5 lbs Pack',
    rating: 4.82,
    reviewsCount: 77,
    isOrganic: true,
    isFlashSale: false,
    discountPercentage: 0,
    stock: 50,
    lowStockThreshold: 12,
    batchNumber: 'BAT-2026-TOM-11',
    expiryDate: '2026-08-07',
    barcode: '8901234567898',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant multicolored heirloom tomatoes grown from open-pollinated seed varieties. Rich, complex savory-sweet balance.',
    nutrition: { calories: '35 kcal', protein: '1.5g', carbs: '7g', fat: '0.2g', lycopene: 'High' },
    storage: 'Store stem down at room temperature. Never refrigerate.',
    origin: 'Local Organic Farms',
    tags: ['Heirloom', 'Organic', 'Locally Grown']
  }
];

export const MOCK_RECIPES = [
  {
    id: 'r1',
    title: 'Gourmet Avocado & Poached Egg Toast',
    time: '15 mins',
    difficulty: 'Easy',
    calories: '380 kcal',
    author: 'Chef Marcus Vance',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    description: 'Golden sourdough topped with smashed organic avocado, poached pasture-raised eggs, chili flakes, and extra virgin olive oil.',
    ingredientIds: ['p1', 'p4', 'p5'],
    steps: [
      'Toast sourdough loaf slices until golden brown.',
      'Mash Hass avocado with sea salt, lemon juice, and black pepper.',
      'Poach eggs in simmering water with a drop of vinegar for 3 minutes.',
      'Spread avocado evenly on toast, top with poached eggs, red pepper flakes, and olive oil drizzling.'
    ]
  },
  {
    id: 'r2',
    title: 'Pan-Seared Wild Salmon with Herb Butter',
    time: '25 mins',
    difficulty: 'Medium',
    calories: '520 kcal',
    author: 'Chef Elena Rostova',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy skin Atlantic wild salmon served with garlic herb compound butter and charred organic tomatoes.',
    ingredientIds: ['p3', 'p8'],
    steps: [
      'Pat salmon fillet skin completely dry with paper towels; season generously.',
      'Heat cast iron skillet over high heat with avocado oil.',
      'Place salmon skin-side down; press gently for 4 minutes until skin is extra crisp.',
      'Flip salmon, add butter & garlic, baste continuously for 2 minutes.'
    ]
  },
  {
    id: 'r3',
    title: 'Fresh Strawberry & Green Detox Bowl',
    time: '10 mins',
    difficulty: 'Easy',
    calories: '240 kcal',
    author: 'Nutritionist Sarah Chen',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80',
    description: 'Anti-oxidant rich morning bowl with sliced hydroponic strawberries, cold pressed green juice reduction, chia seeds, and fresh mint.',
    ingredientIds: ['p2', 'p6'],
    steps: [
      'Wash and slice fresh hydroponic strawberries.',
      'Pour chilled green vitality juice into bowl base.',
      'Arrange strawberries, organic chia seeds, and edible flowers on top.'
    ]
  }
];

export const MOCK_ORDERS = [
  {
    id: 'ORD-9823',
    customerName: 'Eleanor Vance',
    customerEmail: 'eleanor@vance-design.com',
    date: '2026-07-31 10:45 AM',
    status: 'Out For Delivery',
    totalAmount: 48.72,
    branch: 'Metro Flagship Store',
    driver: 'Alex Rivera',
    items: [
      { id: 'p1', name: 'Organic Hass Avocados', qty: 2, price: 4.99 },
      { id: 'p3', name: 'Wild Caught Atlantic Salmon', qty: 1, price: 18.99 },
      { id: 'p4', name: 'Artisanal Sourdough Bread', qty: 2, price: 6.25 }
    ],
    address: '742 Evergreen Terrace, Suite 4B, New York'
  },
  {
    id: 'ORD-9822',
    customerName: 'David Sterling',
    customerEmail: 'david.s@techcorp.io',
    date: '2026-07-31 09:15 AM',
    status: 'Packed',
    totalAmount: 89.40,
    branch: 'Metro Flagship Store',
    driver: 'Marcus Vance',
    items: [
      { id: 'p7', name: 'Prime Wagyu Ribeye Steak A5', qty: 2, price: 34.99 },
      { id: 'p6', name: 'Cold Pressed Green Juice', qty: 2, price: 6.99 }
    ],
    address: '100 Wall Street, Apt 18C, New York'
  },
  {
    id: 'ORD-9821',
    customerName: 'Sophia Loren',
    customerEmail: 'sophia@studio.com',
    date: '2026-07-30 04:20 PM',
    status: 'Delivered',
    totalAmount: 32.50,
    branch: 'Westside Express Hub',
    driver: 'Sarah Chen',
    items: [
      { id: 'p2', name: 'Hydroponic Strawberries', qty: 3, price: 5.49 },
      { id: 'p5', name: 'Grass-Fed Whole Milk', qty: 2, price: 4.89 }
    ],
    address: '90210 Sunset Blvd, Beverly Hills, CA'
  }
];

export const MOCK_WAREHOUSE_ZONES = [
  { id: 'z1', name: 'Zone A - Fresh Produce & Cold Storage', temperature: '36°F / 2°C', totalShelves: 24, occupied: '88%', status: 'Optimal' },
  { id: 'z2', name: 'Zone B - Dry Goods & Bakery', temperature: '68°F / 20°C', totalShelves: 36, occupied: '72%', status: 'Optimal' },
  { id: 'z3', name: 'Zone C - Dairy & Meats (Frozen)', temperature: '-4°F / -20°C', totalShelves: 18, occupied: '94%', status: 'High Density' },
  { id: 'z4', name: 'Zone D - Beverages & Cellar', temperature: '55°F / 13°C', totalShelves: 30, occupied: '60%', status: 'Normal' }
];

export const MOCK_SUPPLIERS = [
  { id: 'sup1', name: 'NaturaFarm Organics LLC', category: 'Produce & Fruits', leadTime: '24 Hours', rating: 4.9, activePOs: 3, totalSpent: '$142,500' },
  { id: 'sup2', name: 'Pacific Catch Seafood Co', category: 'Seafood', leadTime: '12 Hours', rating: 4.95, activePOs: 1, totalSpent: '$89,200' },
  { id: 'sup3', name: 'Bakehouse 1888 Artisans', category: 'Bakery', leadTime: '6 Hours', rating: 4.8, activePOs: 2, totalSpent: '$45,000' },
  { id: 'sup4', name: 'Kurobuta Farms Japan', category: 'Gourmet Meats', leadTime: '48 Hours', rating: 4.98, activePOs: 4, totalSpent: '$210,000' }
];

export const MOCK_DRIVERS = [
  { id: 'd1', name: 'Alex Rivera', vehicle: 'EV Cargo Van #04', rating: 4.9, activeDeliveries: 3, completedToday: 14, status: 'On Route' },
  { id: 'd2', name: 'Sarah Chen', vehicle: 'E-Bike Courier #12', rating: 4.95, activeDeliveries: 1, completedToday: 19, status: 'On Route' },
  { id: 'd3', name: 'Marcus Vance', vehicle: 'EV Cargo Van #08', rating: 4.88, activeDeliveries: 0, completedToday: 11, status: 'At Hub' }
];

export const MOCK_ANALYTICS_DATA = {
  monthlyRevenue: [
    { month: 'Jan', revenue: 142000, orders: 3200, profit: 42000 },
    { month: 'Feb', revenue: 158000, orders: 3500, profit: 49000 },
    { month: 'Mar', revenue: 189000, orders: 4100, profit: 58000 },
    { month: 'Apr', revenue: 210000, orders: 4600, profit: 67000 },
    { month: 'May', revenue: 245000, orders: 5400, profit: 82000 },
    { month: 'Jun', revenue: 278000, orders: 6100, profit: 95000 },
    { month: 'Jul', revenue: 312000, orders: 6900, profit: 108000 }
  ],
  peakHours: [
    { hour: '8 AM', onlineOrders: 120, inStore: 45 },
    { hour: '10 AM', onlineOrders: 310, inStore: 180 },
    { hour: '12 PM', onlineOrders: 480, inStore: 340 },
    { hour: '2 PM', onlineOrders: 290, inStore: 220 },
    { hour: '5 PM', onlineOrders: 640, inStore: 510 },
    { hour: '7 PM', onlineOrders: 520, inStore: 390 },
    { hour: '9 PM', onlineOrders: 210, inStore: 110 }
  ],
  categoryBreakdown: [
    { name: 'Organic & Bio', value: 32, fill: '#22c55e' },
    { name: 'Meat & Seafood', value: 24, fill: '#ef4444' },
    { name: 'Fresh Produce', value: 20, fill: '#f59e0b' },
    { name: 'Dairy & Bakery', value: 14, fill: '#3b82f6' },
    { name: 'Beverages', value: 10, fill: '#8b5cf6' }
  ]
};
