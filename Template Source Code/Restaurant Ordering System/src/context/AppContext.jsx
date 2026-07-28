import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_ORDERS, FOOD_ITEMS, MOCK_RESERVATIONS } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem('gourmetium_theme') || 'dark');
  
  // Navigation / View State
  const [currentView, setCurrentView] = useState('home'); // 'home', 'menu', 'food-detail', 'about', 'contact', 'offers', 'order-tracking', 'customer-dashboard', 'admin-dashboard', 'kitchen-dashboard', 'delivery-dashboard'
  const [selectedDishId, setSelectedDishId] = useState('dish-1');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Cart state
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [wishlist, setWishlist] = useState(['dish-1', 'dish-2']);
  
  // Live Orders state
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [activeTrackingOrderId, setActiveTrackingOrderId] = useState('ORD-8821');

  // Command Palette & Search
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // QR Menu Simulation Table
  const [tableNumber, setTableNumber] = useState(null);

  // Sync theme class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('gourmetium_theme', theme);
  }, [theme]);

  // Keyboard shortcut Ctrl + K for Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  // Cart operations
  const addToCart = (dish, selectedCustomizations = {}, quantity = 1) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.id === dish.id && JSON.stringify(item.customizations) === JSON.stringify(selectedCustomizations));
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { ...dish, quantity, customizations: selectedCustomizations }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const updateCartQty = (index, delta) => {
    setCart(prev => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) return prev.filter((_, i) => i !== index);
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const cartSubtotal = cart.reduce((acc, item) => acc + (item.discountPrice || item.price) * item.quantity, 0);
  const discountAmount = appliedCoupon ? (cartSubtotal * 0.20) : 0;
  const tax = (cartSubtotal - discountAmount) * 0.09;
  const deliveryFee = cart.length > 0 ? 4.99 : 0;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + tax + deliveryFee);

  const toggleWishlist = (dishId) => {
    setWishlist(prev => prev.includes(dishId) ? prev.filter(id => id !== dishId) : [...prev, dishId]);
  };

  // Place Order Simulation
  const placeOrder = (customerDetails) => {
    const newId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder = {
      id: newId,
      customerName: customerDetails.name || 'Gourmet Guest',
      customerPhone: customerDetails.phone || '+1 555-019-2834',
      customerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      type: tableNumber ? 'Dine-In' : 'Delivery',
      tableNo: tableNumber ? `Table ${tableNumber}` : null,
      address: customerDetails.address || '123 Luxury Way, Suite 400',
      status: 'Accepted',
      items: cart.map(item => ({ name: item.name, qty: item.quantity, price: item.discountPrice || item.price })),
      subtotal: cartSubtotal,
      tax: tax,
      deliveryFee: deliveryFee,
      total: cartTotal,
      paymentMethod: customerDetails.paymentMethod || 'Apple Pay (Paid)',
      placedAt: 'Just now',
      prepProgress: 10,
      driver: { name: 'Marcus Sterling', phone: '+1 555-883-9911', vehicle: 'Black Prius (XYZ-491)' }
    };

    setOrders(prev => [newOrder, ...prev]);
    setActiveTrackingOrderId(newId);
    clearCart();
    setIsCartOpen(false);
    setCurrentView('order-tracking');
  };

  // Admin / Kitchen status updates
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(order => {
      if (order.id === orderId) {
        let prepProgress = order.prepProgress;
        if (newStatus === 'Accepted') prepProgress = 20;
        if (newStatus === 'Preparing') prepProgress = 50;
        if (newStatus === 'Cooking') prepProgress = 75;
        if (newStatus === 'Ready') prepProgress = 90;
        if (newStatus === 'Out for Delivery') prepProgress = 95;
        if (newStatus === 'Delivered') prepProgress = 100;
        return { ...order, status: newStatus, prepProgress };
      }
      return order;
    }));
  };

  return (
    <AppContext.Provider value={{
      theme,
      toggleTheme,
      currentView,
      setCurrentView,
      selectedDishId,
      setSelectedDishId,
      activeCategory,
      setActiveCategory,
      cart,
      addToCart,
      removeFromCart,
      updateCartQty,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      appliedCoupon,
      setAppliedCoupon,
      cartSubtotal,
      discountAmount,
      tax,
      deliveryFee,
      cartTotal,
      wishlist,
      toggleWishlist,
      orders,
      updateOrderStatus,
      activeTrackingOrderId,
      setActiveTrackingOrderId,
      placeOrder,
      isCommandOpen,
      setIsCommandOpen,
      searchQuery,
      setSearchQuery,
      tableNumber,
      setTableNumber
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
