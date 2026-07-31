import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_BRANCHES, MOCK_PRODUCTS, MOCK_RECIPES, MOCK_ORDERS, MOCK_SUPPLIERS, MOCK_DRIVERS } from '../data/mockData';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Navigation & View Modes
  const [activeMode, setActiveMode] = useState('customer'); // 'customer' | 'customer-dashboard' | 'admin'
  const [activeCustomerTab, setActiveCustomerTab] = useState('home'); 
  const [activeAccountTab, setActiveAccountTab] = useState('overview');
  const [activeAdminTab, setActiveAdminTab] = useState('dashboard');
  
  // Design & Branch State
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(MOCK_BRANCHES[0]);

  // Data Collections
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState(MOCK_PRODUCTS[0]);
  const [recipes, setRecipes] = useState(MOCK_RECIPES);
  const [selectedRecipe, setSelectedRecipe] = useState(MOCK_RECIPES[0]);
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [suppliers, setSuppliers] = useState(MOCK_SUPPLIERS);
  
  // Shopping Cart & Wishlist & Rewards
  const [cart, setCart] = useState([
    { product: MOCK_PRODUCTS[0], qty: 2 },
    { product: MOCK_PRODUCTS[3], qty: 1 }
  ]);
  const [wishlist, setWishlist] = useState(['p1', 'p3', 'p7']);
  const [appliedCoupon, setAppliedCoupon] = useState({ code: 'STELLAR10', discount: 0.10 });
  const [deliverySlot, setDeliverySlot] = useState('Express 30 Mins ($2.99)');
  const [walletBalance, setWalletBalance] = useState(145.50);
  const [rewardPoints, setRewardPoints] = useState(1280);

  // Modals & Floating Drawers
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [barcodeProduct, setBarcodeProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Toast / System Notifications
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'warning', title: 'Low Stock Alert', message: 'Wagyu Ribeye Steak stock at 12 units (Threshold: 15).', time: '10m ago' },
    { id: 2, type: 'info', title: 'Batch Expiry Warning', message: 'Hydroponic Strawberries batch BAT-2026-STR-44 expires in 4 days.', time: '1h ago' },
    { id: 3, type: 'success', title: 'New Order Received', message: 'Order #ORD-9823 confirmed for Metro Flagship.', time: '2h ago' }
  ]);

  // Dark Mode Side Effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Global Keyboard Shortcuts (Ctrl + K / Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Cart Functions
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].qty += quantity;
        return updated;
      }
      return [...prev, { product, qty: quantity }];
    });

    addToast('success', 'Added to Cart', `${product.name} added to your basket.`);
  };

  const updateCartQty = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const addAllRecipeIngredientsToCart = (recipe) => {
    const recipeProducts = products.filter(p => recipe.ingredientIds.includes(p.id));
    recipeProducts.forEach(p => addToCart(p, 1));
    addToast('success', 'Recipe Ingredients Added', `All available ingredients for "${recipe.title}" added to cart!`);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const addToast = (type, title, message) => {
    const newNotif = {
      id: Date.now(),
      type,
      title,
      message,
      time: 'Just now'
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  // Cart Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + (item.product.price * item.qty), 0);
  const discountAmount = appliedCoupon ? cartSubtotal * appliedCoupon.discount : 0;
  const deliveryFee = cartSubtotal > 50 ? 0 : 3.99;
  const taxAmount = (cartSubtotal - discountAmount) * 0.08;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + deliveryFee + taxAmount);

  return (
    <StoreContext.Provider value={{
      activeMode, setActiveMode,
      activeCustomerTab, setActiveCustomerTab,
      activeAccountTab, setActiveAccountTab,
      activeAdminTab, setActiveAdminTab,
      isDarkMode, setIsDarkMode,
      selectedBranch, setSelectedBranch,
      products, setProducts,
      selectedProduct, setSelectedProduct,
      recipes, setRecipes,
      selectedRecipe, setSelectedRecipe,
      orders, setOrders,
      suppliers, setSuppliers,
      cart, setCart,
      addToCart, updateCartQty, removeFromCart, addAllRecipeIngredientsToCart,
      wishlist, toggleWishlist,
      appliedCoupon, setAppliedCoupon,
      deliverySlot, setDeliverySlot,
      walletBalance, setWalletBalance,
      rewardPoints, setRewardPoints,
      cartSubtotal, discountAmount, deliveryFee, taxAmount, cartTotal,
      notifications, addToast,
      commandPaletteOpen, setCommandPaletteOpen,
      notificationDrawerOpen, setNotificationDrawerOpen,
      quickViewProduct, setQuickViewProduct,
      barcodeProduct, setBarcodeProduct,
      searchQuery, setSearchQuery
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
