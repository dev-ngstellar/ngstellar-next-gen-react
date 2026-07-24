import React, { createContext, useContext, useState, useEffect } from 'react';

const InventoryContext = createContext();

export const initialWorkspaces = [
  { id: 'ws-1', name: 'Acme Global Logistics', code: 'AGL-MAIN', icon: 'Box' },
  { id: 'ws-2', name: 'Apex Hardware & Tech', code: 'AHT-WEST', icon: 'Cpu' },
  { id: 'ws-3', name: 'Stellar Electronics EU', code: 'STE-AMST', icon: 'Globe' },
];

export const initialCategories = [
  { id: 'cat-1', name: 'Computer Hardware', count: 48, icon: 'Cpu' },
  { id: 'cat-2', name: 'Peripherals & Input', count: 32, icon: 'Mouse' },
  { id: 'cat-3', name: 'Displays & Monitors', count: 24, icon: 'Monitor' },
  { id: 'cat-4', name: 'Audio & Studio Tech', count: 19, icon: 'Headphones' },
  { id: 'cat-5', name: 'Networking & Storage', count: 27, icon: 'HardDrive' },
  { id: 'cat-6', name: 'Components & Chips', count: 56, icon: 'Zap' },
];

export const initialBrands = [
  { id: 'br-1', name: 'Razer', count: 18 },
  { id: 'br-2', name: 'Logitech', count: 24 },
  { id: 'br-3', name: 'Apple', count: 12 },
  { id: 'br-4', name: 'Samsung', count: 29 },
  { id: 'br-5', name: 'Corsair', count: 15 },
  { id: 'br-6', name: 'Dell', count: 21 },
  { id: 'br-7', name: 'Asus', count: 19 },
  { id: 'br-8', name: 'Sony', count: 14 },
];

export const initialWarehouses = [
  {
    id: 'wh-1',
    name: 'Austin Mega Distribution Center',
    code: 'WH-ATX-01',
    location: 'Austin, TX, USA',
    capacity: 88,
    maxCapacity: 10000,
    currentItems: 8800,
    employees: 24,
    manager: 'Sarah Connor',
    zones: [
      { name: 'Zone A - High Velocity', items: 3200, capacity: 3500 },
      { name: 'Zone B - Heavy Components', items: 2800, capacity: 3000 },
      { name: 'Zone C - Electronics Storage', items: 1800, capacity: 2000 },
      { name: 'Zone D - Returns & QC', items: 1000, capacity: 1500 },
    ],
    movementsToday: 142,
    status: 'Optimal',
  },
  {
    id: 'wh-2',
    name: 'Silicon Valley Hub',
    code: 'WH-SJC-02',
    location: 'San Jose, CA, USA',
    capacity: 65,
    maxCapacity: 5000,
    currentItems: 3250,
    employees: 14,
    manager: 'Alex Mercer',
    zones: [
      { name: 'Zone Alpha - Chips & CPU', items: 1500, capacity: 2000 },
      { name: 'Zone Beta - Peripherals', items: 1250, capacity: 2000 },
      { name: 'Zone Gamma - Staging', items: 500, capacity: 1000 },
    ],
    movementsToday: 89,
    status: 'Optimal',
  },
  {
    id: 'wh-3',
    name: 'East Coast Express Facility',
    code: 'WH-EWR-03',
    location: 'Newark, NJ, USA',
    capacity: 94,
    maxCapacity: 8000,
    currentItems: 7520,
    employees: 19,
    manager: 'David Vance',
    zones: [
      { name: 'Racks 1-10 Main Bulk', items: 4000, capacity: 4000 },
      { name: 'Racks 11-20 High-Value', items: 2520, capacity: 3000 },
      { name: 'Buffer Storage', items: 1000, capacity: 1000 },
    ],
    movementsToday: 215,
    status: 'High Utilization',
  },
  {
    id: 'wh-4',
    name: 'Amsterdam EU Depot',
    code: 'WH-AMS-04',
    location: 'Amsterdam, Netherlands',
    capacity: 48,
    maxCapacity: 6000,
    currentItems: 2880,
    employees: 11,
    manager: 'Elena Rostova',
    zones: [
      { name: 'Euro Zone 1', items: 1800, capacity: 3000 },
      { name: 'Euro Zone 2', items: 1080, capacity: 3000 },
    ],
    movementsToday: 54,
    status: 'Optimal',
  },
];

export const initialProducts = [
  {
    id: 'prod-1',
    name: 'Logitech MX Master 3S Wireless Mouse',
    sku: 'SKU-LOG-MX3S',
    barcode: '097855171832',
    category: 'Peripherals & Input',
    brand: 'Logitech',
    warehouse: 'Austin Mega Distribution Center',
    quantity: 450,
    reserved: 45,
    available: 405,
    minStockAlert: 100,
    purchasePrice: 62.00,
    sellingPrice: 99.99,
    status: 'In Stock',
    supplier: 'Logitech Direct Supply',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80',
    description: 'Ergonomic quiet wireless mouse with 8K DPI track-on-glass sensor and Magspeed electromagnetic scrolling.',
    createdDate: '2026-01-15',
    binLocation: 'A-12-04',
    variants: [
      { id: 'v1', name: 'Graphite', sku: 'SKU-LOG-MX3S-GR', stock: 250, price: 99.99 },
      { id: 'v2', name: 'Pale Grey', sku: 'SKU-LOG-MX3S-PG', stock: 200, price: 99.99 },
    ],
  },
  {
    id: 'prod-2',
    name: 'Razer BlackWidow V4 Pro Mechanical Keyboard',
    sku: 'SKU-RAZ-BWV4',
    barcode: '081165904221',
    category: 'Peripherals & Input',
    brand: 'Razer',
    warehouse: 'Silicon Valley Hub',
    quantity: 18,
    reserved: 5,
    available: 13,
    minStockAlert: 50,
    purchasePrice: 140.00,
    sellingPrice: 229.99,
    status: 'Low Stock',
    supplier: 'Razer Wholesale Corp',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
    description: 'Flagship mechanical gaming keyboard with Razer Command Dial, mechanical switches, and underglow RGB.',
    createdDate: '2026-02-01',
    binLocation: 'B-04-12',
    variants: [
      { id: 'v3', name: 'Green Clicky Switch', sku: 'SKU-RAZ-BWV4-GRN', stock: 10, price: 229.99 },
      { id: 'v4', name: 'Yellow Linear Switch', sku: 'SKU-RAZ-BWV4-YEL', stock: 8, price: 229.99 },
    ],
  },
  {
    id: 'prod-3',
    name: 'Dell UltraSharp 27 4K USB-C Monitor (U2724D)',
    sku: 'SKU-DELL-U2724D',
    barcode: '088411644910',
    category: 'Displays & Monitors',
    brand: 'Dell',
    warehouse: 'Austin Mega Distribution Center',
    quantity: 120,
    reserved: 12,
    available: 108,
    minStockAlert: 30,
    purchasePrice: 380.00,
    sellingPrice: 579.99,
    status: 'In Stock',
    supplier: 'Dell Enterprise Logistics',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80',
    description: '120Hz IPS Black display with Thunderbolt 4 connectivity, 98% DCI-P3 color gamut, and ultra-thin bezel.',
    createdDate: '2026-01-20',
    binLocation: 'A-01-09',
    variants: [],
  },
  {
    id: 'prod-4',
    name: 'Samsung 990 PRO 2TB NVMe PCIe 4.0 SSD',
    sku: 'SKU-SAM-990P2T',
    barcode: '088727670980',
    category: 'Networking & Storage',
    brand: 'Samsung',
    warehouse: 'Silicon Valley Hub',
    quantity: 0,
    reserved: 0,
    available: 0,
    minStockAlert: 40,
    purchasePrice: 110.00,
    sellingPrice: 179.99,
    status: 'Out of Stock',
    supplier: 'Samsung Semiconductor Direct',
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=80',
    description: 'Blazing fast sequential read speeds up to 7450 MB/s with smart thermal control and Heatsink option.',
    createdDate: '2026-01-10',
    binLocation: 'C-08-01',
    variants: [
      { id: 'v5', name: 'Without Heatsink', sku: 'SKU-SAM-990P2T-NH', stock: 0, price: 179.99 },
      { id: 'v6', name: 'With Heatsink', sku: 'SKU-SAM-990P2T-HS', stock: 0, price: 199.99 },
    ],
  },
  {
    id: 'prod-5',
    name: 'Apple MacBook Pro 16" M3 Max (64GB, 2TB)',
    sku: 'SKU-APP-MPM316',
    barcode: '019425398210',
    category: 'Computer Hardware',
    brand: 'Apple',
    warehouse: 'East Coast Express Facility',
    quantity: 42,
    reserved: 8,
    available: 34,
    minStockAlert: 15,
    purchasePrice: 2800.00,
    sellingPrice: 3499.00,
    status: 'In Stock',
    supplier: 'Apple Commercial Sales',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
    description: 'Extreme performance laptop with 16-core CPU, 40-core GPU Liquid Retina XDR display, and 22-hour battery life.',
    createdDate: '2026-02-10',
    binLocation: 'VAULT-02',
    variants: [
      { id: 'v7', name: 'Space Black', sku: 'SKU-APP-MPM316-SB', stock: 22, price: 3499.00 },
      { id: 'v8', name: 'Silver', sku: 'SKU-APP-MPM316-SL', stock: 20, price: 3499.00 },
    ],
  },
  {
    id: 'prod-6',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    sku: 'SKU-SONY-XM5',
    barcode: '002724292244',
    category: 'Audio & Studio Tech',
    brand: 'Sony',
    warehouse: 'Amsterdam EU Depot',
    quantity: 320,
    reserved: 28,
    available: 292,
    minStockAlert: 80,
    purchasePrice: 220.00,
    sellingPrice: 399.99,
    status: 'In Stock',
    supplier: 'Sony Audio Distribution',
    rating: 4.85,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    description: 'Industry-leading noise cancellation with 2 processors, 8 microphones, and crystal clear hands-free calling.',
    createdDate: '2026-01-05',
    binLocation: 'EUR-A-09',
    variants: [],
  },
  {
    id: 'prod-7',
    name: 'ASUS ROG Swift OLED PG27AQDM Gaming Monitor',
    sku: 'SKU-ASUS-PG27',
    barcode: '019555390123',
    category: 'Displays & Monitors',
    brand: 'Asus',
    warehouse: 'East Coast Express Facility',
    quantity: 28,
    reserved: 4,
    available: 24,
    minStockAlert: 20,
    purchasePrice: 650.00,
    sellingPrice: 899.99,
    status: 'In Stock',
    supplier: 'Asus Tech Supply',
    rating: 4.75,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
    description: '27-inch 1440p 240Hz OLED gaming monitor with 0.03ms response time and custom heatsink.',
    createdDate: '2026-02-15',
    binLocation: 'B-09-02',
    variants: [],
  },
  {
    id: 'prod-8',
    name: 'Intel Core i9-14900K Desktop Processor',
    sku: 'SKU-INT-14900K',
    barcode: '073585854687',
    category: 'Components & Chips',
    brand: 'Intel',
    warehouse: 'Silicon Valley Hub',
    quantity: 95,
    reserved: 10,
    available: 85,
    minStockAlert: 25,
    purchasePrice: 420.00,
    sellingPrice: 589.00,
    status: 'In Stock',
    supplier: 'Intel Global Components',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&auto=format&fit=crop&q=80',
    description: '24 cores (8 P-cores + 16 E-cores) up to 6.0 GHz max clock speed for ultimate gaming & creator performance.',
    createdDate: '2026-01-28',
    binLocation: 'CHIP-01',
    variants: [],
  },
];

export const initialPurchaseOrders = [
  {
    id: 'PO-2026-0941',
    vendor: 'Logitech Direct Supply',
    warehouse: 'Austin Mega Distribution Center',
    itemsCount: 500,
    totalValue: 31000.00,
    status: 'Approved', // Draft, Requested, Approved, Packed, Shipped, Received
    orderDate: '2026-07-20',
    expectedDate: '2026-07-28',
    paymentStatus: 'Paid',
    items: [
      { name: 'Logitech MX Master 3S', qty: 500, unitCost: 62.00, total: 31000.00 },
    ],
  },
  {
    id: 'PO-2026-0942',
    vendor: 'Samsung Semiconductor Direct',
    warehouse: 'Silicon Valley Hub',
    itemsCount: 300,
    totalValue: 33000.00,
    status: 'Shipped',
    orderDate: '2026-07-18',
    expectedDate: '2026-07-25',
    paymentStatus: 'Pending',
    items: [
      { name: 'Samsung 990 PRO 2TB', qty: 300, unitCost: 110.00, total: 33000.00 },
    ],
  },
  {
    id: 'PO-2026-0943',
    vendor: 'Razer Wholesale Corp',
    warehouse: 'Silicon Valley Hub',
    itemsCount: 150,
    totalValue: 21000.00,
    status: 'Requested',
    orderDate: '2026-07-22',
    expectedDate: '2026-08-05',
    paymentStatus: 'Unpaid',
    items: [
      { name: 'Razer BlackWidow V4 Pro', qty: 150, unitCost: 140.00, total: 21000.00 },
    ],
  },
  {
    id: 'PO-2026-0944',
    vendor: 'Apple Commercial Sales',
    warehouse: 'East Coast Express Facility',
    itemsCount: 50,
    totalValue: 140000.00,
    status: 'Draft',
    orderDate: '2026-07-23',
    expectedDate: '2026-08-10',
    paymentStatus: 'Draft',
    items: [
      { name: 'Apple MacBook Pro 16" M3 Max', qty: 50, unitCost: 2800.00, total: 140000.00 },
    ],
  },
  {
    id: 'PO-2026-0940',
    vendor: 'Sony Audio Distribution',
    warehouse: 'Amsterdam EU Depot',
    itemsCount: 400,
    totalValue: 88000.00,
    status: 'Received',
    orderDate: '2026-07-05',
    expectedDate: '2026-07-15',
    paymentStatus: 'Paid',
    items: [
      { name: 'Sony WH-1000XM5', qty: 400, unitCost: 220.00, total: 88000.00 },
    ],
  },
];

export const initialSalesOrders = [
  {
    id: 'SO-88102',
    customer: 'Cyberdyne Systems Corp',
    customerEmail: 'procurement@cyberdyne.com',
    itemsCount: 12,
    totalAmount: 18450.00,
    status: 'Confirmed', // Pending, Confirmed, Packed, Shipped, Delivered, Cancelled
    paymentStatus: 'Paid',
    date: '2026-07-23',
    trackingNumber: 'TRK-9908123-US',
  },
  {
    id: 'SO-88103',
    customer: 'Aperture Science Inc',
    customerEmail: 'orders@aperture.com',
    itemsCount: 45,
    totalAmount: 34200.00,
    status: 'Shipped',
    paymentStatus: 'Paid',
    date: '2026-07-22',
    trackingNumber: 'TRK-8812390-US',
  },
  {
    id: 'SO-88104',
    customer: 'Weyland-Yutani Corp',
    customerEmail: 'supplies@weyland.io',
    itemsCount: 3,
    totalAmount: 10497.00,
    status: 'Pending',
    paymentStatus: 'Awaiting Invoice',
    date: '2026-07-23',
    trackingNumber: 'PENDING-ALLOCATION',
  },
  {
    id: 'SO-88101',
    customer: 'Stark Industries Logistics',
    customerEmail: 'tony@starkindustries.com',
    itemsCount: 80,
    totalAmount: 89400.00,
    status: 'Delivered',
    paymentStatus: 'Paid',
    date: '2026-07-19',
    trackingNumber: 'TRK-1092837-US',
  },
];

export const initialCustomers = [
  {
    id: 'cust-1',
    name: 'Stark Industries Logistics',
    email: 'tony@starkindustries.com',
    phone: '+1 (555) 901-2384',
    totalOrders: 34,
    lifetimeValue: 485000.00,
    status: 'VIP Customer',
    company: 'Stark Industries',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    joinedDate: '2024-03-12',
  },
  {
    id: 'cust-2',
    name: 'Cyberdyne Systems Corp',
    email: 'procurement@cyberdyne.com',
    phone: '+1 (555) 482-1190',
    totalOrders: 19,
    lifetimeValue: 240000.00,
    status: 'Active',
    company: 'Cyberdyne AI',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    joinedDate: '2024-08-19',
  },
  {
    id: 'cust-3',
    name: 'Aperture Science Inc',
    email: 'orders@aperture.com',
    phone: '+1 (555) 334-8871',
    totalOrders: 12,
    lifetimeValue: 128500.00,
    status: 'Active',
    company: 'Aperture Labs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    joinedDate: '2025-01-10',
  },
  {
    id: 'cust-4',
    name: 'Weyland-Yutani Corp',
    email: 'supplies@weyland.io',
    phone: '+44 20 7946 0912',
    totalOrders: 8,
    lifetimeValue: 94000.00,
    status: 'Active',
    company: 'Weyland-Yutani',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    joinedDate: '2025-05-22',
  },
];

export const initialSuppliers = [
  {
    id: 'sup-1',
    name: 'Logitech Direct Supply',
    contactPerson: 'Marcus Vance',
    email: 'supply@logitech.com',
    phone: '+1 (800) 555-0192',
    leadTimeDays: 4,
    performanceScore: 98,
    openOrdersCount: 2,
    outstandingBalance: 31000.00,
    category: 'Peripherals',
    rating: 4.9,
  },
  {
    id: 'sup-2',
    name: 'Samsung Semiconductor Direct',
    contactPerson: 'Min-Jun Park',
    email: 'b2b@samsung.com',
    phone: '+82 2 555 0144',
    leadTimeDays: 7,
    performanceScore: 94,
    openOrdersCount: 1,
    outstandingBalance: 33000.00,
    category: 'Storage & Chips',
    rating: 4.8,
  },
  {
    id: 'sup-3',
    name: 'Apple Commercial Sales',
    contactPerson: 'Rachel Green',
    email: 'enterprise@apple.com',
    phone: '+1 (800) 692-7753',
    leadTimeDays: 5,
    performanceScore: 99,
    openOrdersCount: 1,
    outstandingBalance: 140000.00,
    category: 'Hardware',
    rating: 5.0,
  },
  {
    id: 'sup-4',
    name: 'Razer Wholesale Corp',
    contactPerson: 'David Chen',
    email: 'partners@razer.com',
    phone: '+1 (888) 555-9081',
    leadTimeDays: 6,
    performanceScore: 92,
    openOrdersCount: 1,
    outstandingBalance: 21000.00,
    category: 'Gaming Gear',
    rating: 4.6,
  },
];

export const initialStockMovements = [
  {
    id: 'mov-101',
    type: 'Incoming', // Incoming, Outgoing, Adjustment, Transfer
    productName: 'Sony WH-1000XM5 Headphones',
    sku: 'SKU-SONY-XM5',
    qty: 400,
    source: 'PO-2026-0940 (Sony Audio)',
    destination: 'Amsterdam EU Depot',
    timestamp: '2026-07-23 14:32',
    user: 'Elena Rostova',
  },
  {
    id: 'mov-102',
    type: 'Outgoing',
    productName: 'Apple MacBook Pro 16" M3 Max',
    sku: 'SKU-APP-MPM316',
    qty: 3,
    source: 'East Coast Express Facility',
    destination: 'SO-88102 (Cyberdyne)',
    timestamp: '2026-07-23 11:15',
    user: 'David Vance',
  },
  {
    id: 'mov-103',
    type: 'Adjustment',
    productName: 'Razer BlackWidow V4 Pro',
    sku: 'SKU-RAZ-BWV4',
    qty: -2,
    source: 'Silicon Valley Hub',
    destination: 'Damaged in QC Inspection',
    timestamp: '2026-07-22 16:45',
    user: 'Alex Mercer',
  },
  {
    id: 'mov-104',
    type: 'Transfer',
    productName: 'Dell UltraSharp 27 4K Monitor',
    sku: 'SKU-DELL-U2724D',
    qty: 25,
    source: 'Austin Mega DC',
    destination: 'Silicon Valley Hub',
    timestamp: '2026-07-21 09:20',
    user: 'Sarah Connor',
  },
];

export const initialNotifications = [
  {
    id: 'notif-1',
    title: 'Low Stock Alert',
    message: 'Razer BlackWidow V4 Pro stock (18) dropped below reorder point (50).',
    time: '10 min ago',
    type: 'warning',
    read: false,
    category: 'Inventory',
  },
  {
    id: 'notif-2',
    title: 'Out of Stock Warning',
    message: 'Samsung 990 PRO 2TB SSD is completely out of stock!',
    time: '1 hour ago',
    type: 'danger',
    read: false,
    category: 'Inventory',
  },
  {
    id: 'notif-3',
    title: 'Purchase Order Approved',
    message: 'PO-2026-0941 for Logitech Direct ($31,000) was approved by Sarah.',
    time: '3 hours ago',
    type: 'success',
    read: true,
    category: 'Purchase',
  },
  {
    id: 'notif-4',
    title: 'High Volume Sales Order',
    message: 'SO-88101 from Stark Industries ($89,400) successfully delivered.',
    time: 'Yesterday',
    type: 'info',
    read: true,
    category: 'Sales',
  },
];

export function InventoryProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('stellar_theme') || 'dark');
  const [accentColor, setAccentColor] = useState(() => localStorage.getItem('stellar_accent') || 'indigo');
  const [activeWorkspace, setActiveWorkspace] = useState(initialWorkspaces[0]);
  const [products, setProducts] = useState(initialProducts);
  const [warehouses, setWarehouses] = useState(initialWarehouses);
  const [purchaseOrders, setPurchaseOrders] = useState(initialPurchaseOrders);
  const [salesOrders, setSalesOrders] = useState(initialSalesOrders);
  const [customers, setCustomers] = useState(initialCustomers);
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [stockMovements, setStockMovements] = useState(initialStockMovements);
  const [notifications, setNotifications] = useState(initialNotifications);
  
  // UI States
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProductDetail, setSelectedProductDetail] = useState(null);
  const [onboardingActive, setOnboardingActive] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Apply Dark/Light mode & Theme class to document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('stellar_theme', theme);
  }, [theme]);

  // Apply Theme Accent
  useEffect(() => {
    const root = document.documentElement;
    const themeClasses = ['theme-emerald', 'theme-violet', 'theme-cyan', 'theme-rose', 'theme-amber'];
    themeClasses.forEach(c => root.classList.remove(c));
    if (accentColor !== 'indigo') {
      root.classList.add(`theme-${accentColor}`);
    }
    localStorage.setItem('stellar_accent', accentColor);
  }, [accentColor]);

  // Toast Helper
  const addToast = (title, message, type = 'info') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Keyboard shortcut listener for Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // CRUD Operations
  const addProduct = (newProduct) => {
    const created = {
      ...newProduct,
      id: `prod-${Date.now()}`,
      createdDate: new Date().toISOString().split('T')[0],
      reserved: 0,
      available: Number(newProduct.quantity) || 0,
      status: Number(newProduct.quantity) <= 0 ? 'Out of Stock' : (Number(newProduct.quantity) < (Number(newProduct.minStockAlert) || 20) ? 'Low Stock' : 'In Stock'),
    };
    setProducts((prev) => [created, ...prev]);
    addToast('Product Created', `${created.name} has been added to inventory catalog.`, 'success');
  };

  const updateProductStock = (productId, deltaQty, reason = 'Manual Adjustment') => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const newQty = Math.max(0, p.quantity + deltaQty);
          const newAvail = Math.max(0, newQty - p.reserved);
          const minAlert = p.minStockAlert || 20;
          const newStatus = newQty === 0 ? 'Out of Stock' : newQty < minAlert ? 'Low Stock' : 'In Stock';
          
          // Log movement
          const newMovement = {
            id: `mov-${Date.now()}`,
            type: deltaQty >= 0 ? 'Incoming' : 'Adjustment',
            productName: p.name,
            sku: p.sku,
            qty: deltaQty,
            source: 'Stock Management',
            destination: reason,
            timestamp: new Date().toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
            user: 'Current User',
          };
          setStockMovements((m) => [newMovement, ...m]);

          return { ...p, quantity: newQty, available: newAvail, status: newStatus };
        }
        return p;
      })
    );
    addToast('Stock Updated', `Stock adjusted for product. Reason: ${reason}`, 'info');
  };

  const movePOStatus = (poId, nextStatus) => {
    setPurchaseOrders((prev) =>
      prev.map((po) => (po.id === poId ? { ...po, status: nextStatus } : po))
    );
    addToast('Order Status Updated', `Purchase order ${poId} moved to ${nextStatus}`, 'success');
  };

  const moveSOStatus = (soId, nextStatus) => {
    setSalesOrders((prev) =>
      prev.map((so) => (so.id === soId ? { ...so, status: nextStatus } : so))
    );
    addToast('Sales Order Updated', `Sales order ${soId} moved to ${nextStatus}`, 'info');
  };

  const markNotificationRead = (notifId) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notifId ? { ...n, read: true } : n))
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
    addToast('Notifications Cleared', 'All notifications have been cleared.', 'info');
  };

  return (
    <InventoryContext.Provider
      value={{
        theme,
        setTheme,
        accentColor,
        setAccentColor,
        activeWorkspace,
        setActiveWorkspace,
        workspaces: initialWorkspaces,
        products,
        addProduct,
        updateProductStock,
        categories: initialCategories,
        brands: initialBrands,
        warehouses,
        setWarehouses,
        purchaseOrders,
        movePOStatus,
        setPurchaseOrders,
        salesOrders,
        moveSOStatus,
        setSalesOrders,
        customers,
        setCustomers,
        suppliers,
        setSuppliers,
        stockMovements,
        notifications,
        markNotificationRead,
        clearNotifications,
        isSidebarCollapsed,
        setIsSidebarCollapsed,
        commandPaletteOpen,
        setCommandPaletteOpen,
        selectedProductDetail,
        setSelectedProductDetail,
        onboardingActive,
        setOnboardingActive,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  return useContext(InventoryContext);
}
