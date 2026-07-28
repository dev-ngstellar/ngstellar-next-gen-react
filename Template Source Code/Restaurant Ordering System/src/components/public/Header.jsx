import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Sun, Moon, Sparkles, Command, User, UtensilsCrossed, Compass, LayoutDashboard, ChefHat, Truck, QrCode } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Header = () => {
  const { theme, toggleTheme, currentView, setCurrentView, cart, setIsCartOpen, setIsCommandOpen, tableNumber } = useApp();
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'offers', label: 'Offers & Combos' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Reservations & Contact' },
    { id: 'order-tracking', label: 'Order Track' },
  ];

  const portalLinks = [
    { id: 'customer-dashboard', label: 'Customer Portal', icon: User },
    { id: 'admin-dashboard', label: 'Admin SaaS', icon: LayoutDashboard },
    { id: 'kitchen-dashboard', label: 'Kitchen KDS', icon: ChefHat },
    { id: 'delivery-dashboard', label: 'Driver App', icon: Truck },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-stone-200/50 dark:border-stone-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setCurrentView('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
              GOURMETIUM
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-sans font-medium">LUXURY</span>
            </span>
            {tableNumber && (
              <span className="text-xs text-amber-500 font-semibold block">Dine-In Table {tableNumber}</span>
            )}
          </div>
        </div>

        {/* Public Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-stone-100/80 dark:bg-stone-900/80 p-1.5 rounded-full border border-stone-200/50 dark:border-stone-800/50">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setCurrentView(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  isActive
                    ? 'text-stone-900 dark:text-white font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white dark:bg-stone-800 rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Command Palette Trigger */}
          <button
            onClick={() => setIsCommandOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg border border-stone-200 dark:border-stone-700 transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search or command</span>
            <kbd className="px-1.5 py-0.5 bg-white dark:bg-stone-900 rounded text-[10px] font-mono border border-stone-200 dark:border-stone-700">Ctrl K</kbd>
          </button>

          {/* Switch Portal Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 hover:opacity-95 transition-opacity shadow-sm">
              <Compass className="w-4 h-4 text-amber-400 dark:text-amber-600" />
              <span className="hidden md:inline">Operations Portals</span>
            </button>
            
            <div className="absolute right-0 top-full mt-2 w-56 p-2 rounded-2xl bg-white dark:bg-stone-900 shadow-2xl border border-stone-200 dark:border-stone-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider px-3 py-1.5">Switch View</div>
              {portalLinks.map(portal => {
                const Icon = portal.icon;
                return (
                  <button
                    key={portal.id}
                    onClick={() => setCurrentView(portal.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      currentView === portal.id 
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold'
                        : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {portal.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-stone-700" />}
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20 flex items-center justify-center"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalCartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1.5 -right-1.5 bg-stone-900 text-amber-400 text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-stone-900"
              >
                {totalCartCount}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
