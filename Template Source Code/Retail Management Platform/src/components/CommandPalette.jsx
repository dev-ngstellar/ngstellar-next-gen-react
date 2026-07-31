import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Search, ShoppingBag, LayoutDashboard, Sparkles, Store, Shield, ArrowRight, X, Package, Truck, Users } from 'lucide-react';

export default function CommandPalette() {
  const {
    commandPaletteOpen,
    setCommandPaletteOpen,
    setActiveMode,
    setActiveCustomerTab,
    setActiveAdminTab,
    setActiveAccountTab,
    products,
    setSelectedProduct,
    setIsDarkMode,
    isDarkMode
  } = useStore();

  const [query, setQuery] = useState('');

  if (!commandPaletteOpen) return null;

  const filteredProducts = query
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setActiveMode('customer');
    setActiveCustomerTab('product-details');
    setCommandPaletteOpen(false);
  };

  const handleNavigate = (mode, tab) => {
    setActiveMode(mode);
    if (mode === 'customer') setActiveCustomerTab(tab);
    if (mode === 'admin') setActiveAdminTab(tab);
    if (mode === 'customer-dashboard') setActiveAccountTab(tab);
    setCommandPaletteOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Header */}
        <div className="relative flex items-center px-4 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Type a command or search products, inventory, orders... (Ctrl + K)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full py-4 text-slate-900 dark:text-slate-100 bg-transparent text-sm md:text-base outline-none placeholder:text-slate-400"
          />
          <button 
            onClick={() => setCommandPaletteOpen(false)}
            className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Products Search Results */}
          {filteredProducts.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">Matched Products</p>
              <div className="space-y-1">
                {filteredProducts.slice(0, 4).map(product => (
                  <button
                    key={product.id}
                    onClick={() => handleSelectProduct(product)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/30 group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                      <div className="text-left">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">{product.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{product.category} • ${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Portal Switch Shortcuts */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">Quick Navigation</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <button
                onClick={() => handleNavigate('customer', 'home')}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Customer Storefront</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Shop, Flash Deals, Recipes</p>
                </div>
              </button>

              <button
                onClick={() => handleNavigate('admin', 'dashboard')}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Enterprise Admin Portal</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Analytics, Inventory & POs</p>
                </div>
              </button>

              <button
                onClick={() => handleNavigate('admin', 'inventory')}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors"
              >
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Inventory & Heatmap</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Stock Levels & Batch Expiry</p>
                </div>
              </button>

              <button
                onClick={() => handleNavigate('customer-dashboard', 'overview')}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors"
              >
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Customer Account</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Orders, Wallet & Subscriptions</p>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">Quick Actions</p>
            <div className="space-y-1">
              <button
                onClick={() => { setIsDarkMode(!isDarkMode); setCommandPaletteOpen(false); }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  Toggle Light / Dark Theme Mode
                </span>
                <span className="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Theme</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono">ESC</kbd> to close</span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">StellarRetail Enterprise v2.4</span>
        </div>
      </div>
    </div>
  );
}
