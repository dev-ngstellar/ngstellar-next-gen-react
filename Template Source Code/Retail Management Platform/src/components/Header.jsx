import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  ShoppingBag, 
  LayoutDashboard, 
  User, 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  MapPin, 
  ChevronDown, 
  Heart, 
  Sparkles,
  Command
} from 'lucide-react';
import { MOCK_BRANCHES } from '../data/mockData';

export default function Header() {
  const {
    activeMode, setActiveMode,
    activeCustomerTab, setActiveCustomerTab,
    activeAdminTab, setActiveAdminTab,
    activeAccountTab, setActiveAccountTab,
    selectedBranch, setSelectedBranch,
    isDarkMode, setIsDarkMode,
    cart,
    wishlist,
    notifications,
    setCommandPaletteOpen,
    setNotificationDrawerOpen
  } = useStore();

  const [branchDropdownOpen, setBranchDropdownOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      {/* Top Banner Mode Indicator */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-[11px]">
              <Sparkles className="w-3 h-3" /> Enterprise Platform
            </span>
            <span className="text-slate-400 hidden sm:inline">• Multi-Branch Retail Engine</span>
          </div>

          {/* Mode Switcher Toggle Pill */}
          <div className="flex items-center gap-1 bg-slate-800 dark:bg-slate-900 p-1 rounded-lg border border-slate-700">
            <button
              onClick={() => { setActiveMode('customer'); setActiveCustomerTab('home'); }}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold transition-all flex items-center gap-1 ${
                activeMode === 'customer' 
                  ? 'bg-emerald-500 text-white shadow-sm' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-3 h-3" /> Storefront
            </button>

            <button
              onClick={() => { setActiveMode('customer-dashboard'); setActiveAccountTab('overview'); }}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold transition-all flex items-center gap-1 ${
                activeMode === 'customer-dashboard' 
                  ? 'bg-purple-600 text-white shadow-sm' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <User className="w-3 h-3" /> My Account
            </button>

            <button
              onClick={() => { setActiveMode('admin'); setActiveAdminTab('dashboard'); }}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold transition-all flex items-center gap-1 ${
                activeMode === 'admin' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-3 h-3" /> Enterprise Admin
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => { setActiveMode('customer'); setActiveCustomerTab('home'); }}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white font-extrabold shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Stellar<span className="text-emerald-600 dark:text-emerald-400">Retail</span>
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 -mt-1">Enterprise Commerce</span>
            </div>
          </button>

          {/* Branch Switcher Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setBranchDropdownOpen(!branchDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>{selectedBranch.name}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {branchDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-fadeIn">
                <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Select Operating Store Branch</p>
                {MOCK_BRANCHES.map(branch => (
                  <button
                    key={branch.id}
                    onClick={() => {
                      setSelectedBranch(branch);
                      setBranchDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-emerald-50 dark:hover:bg-emerald-950/40 ${
                      selectedBranch.id === branch.id ? 'font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div>
                      <p>{branch.name}</p>
                      <p className="text-[10px] text-slate-400">{branch.city}</p>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">{branch.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center Navigation Links (Visible in Customer Storefront Mode) */}
        {activeMode === 'customer' && (
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'shop', label: 'Shop Catalog' },
              { id: 'categories', label: 'Categories' },
              { id: 'offers', label: 'Offers & Deals' },
              { id: 'recipes', label: 'Recipes' },
              { id: 'about', label: 'About' },
              { id: 'contact', label: 'Stores' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCustomerTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  activeCustomerTab === tab.id
                    ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        )}

        {/* Right Tools (Command Palette Trigger, Wishlist, Cart, Notifs, Theme) */}
        <div className="flex items-center gap-2">
          {/* Command Palette Button */}
          <button
            onClick={() => setCommandPaletteOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-medium transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-mono text-[10px] text-slate-500">
              <Command className="w-2.5 h-2.5" /> K
            </kbd>
          </button>

          {/* Wishlist Icon */}
          {activeMode === 'customer' && (
            <button
              onClick={() => setActiveCustomerTab('shop')}
              className="relative p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
          )}

          {/* Cart Trigger */}
          {activeMode === 'customer' && (
            <button
              onClick={() => setActiveCustomerTab('cart')}
              className="relative flex items-center gap-2 py-1.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {totalCartCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-white text-emerald-700 font-extrabold text-[11px]">
                  {totalCartCount}
                </span>
              )}
            </button>
          )}

          {/* Notifications Trigger */}
          <button
            onClick={() => setNotificationDrawerOpen(true)}
            className="relative p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
            {notifications.length > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            )}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
        </div>
      </div>
    </header>
  );
}
