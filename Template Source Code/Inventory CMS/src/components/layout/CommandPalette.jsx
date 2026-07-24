import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Command,
  Package,
  Boxes,
  ShoppingCart,
  ShoppingBag,
  Warehouse,
  FileText,
  Settings,
  HelpCircle,
  Plus,
  ArrowRight,
  X,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useInventory } from '../../context/InventoryContext';
import { useNavigate } from 'react-router-dom';

export default function CommandPalette() {
  const { commandPaletteOpen, setCommandPaletteOpen, products, setSelectedProductDetail } = useInventory();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const pages = [
    { name: 'Dashboard Overview', path: '/', category: 'Navigation', icon: Package },
    { name: 'Products Catalog', path: '/products', category: 'Navigation', icon: Package },
    { name: 'Add Product Wizard', path: '/products/add', category: 'Action', icon: Plus },
    { name: 'Inventory Overview & Stock', path: '/inventory', category: 'Navigation', icon: Boxes },
    { name: 'Warehouses & Storage Hubs', path: '/warehouse', category: 'Navigation', icon: Warehouse },
    { name: 'Purchase Orders (Kanban)', path: '/purchase-orders', category: 'Navigation', icon: ShoppingCart },
    { name: 'Sales Orders Pipeline', path: '/sales-orders', category: 'Navigation', icon: ShoppingBag },
    { name: 'Reports & Export Center', path: '/reports', category: 'Navigation', icon: FileText },
    { name: 'Analytics & Trend Forecasts', path: '/analytics', category: 'Navigation', icon: Sparkles },
    { name: 'System Settings', path: '/settings', category: 'Navigation', icon: Settings },
    { name: 'Help Center & Shortcuts', path: '/help', category: 'Navigation', icon: HelpCircle },
  ];

  // Filter products matching query
  const matchingProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.sku.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const matchingPages = pages.filter((page) =>
    page.name.toLowerCase().includes(query.toLowerCase())
  );

  const combinedResults = [
    ...matchingPages.map((p) => ({ ...p, type: 'page' })),
    ...matchingProducts.map((p) => ({ name: p.name, path: `/products`, product: p, type: 'product' })),
  ];

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (item) => {
    if (!item) return;
    setCommandPaletteOpen(false);
    setQuery('');
    if (item.type === 'product' && item.product) {
      setSelectedProductDetail(item.product);
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const handleKeyDown = (e) => {
    if (!commandPaletteOpen) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < combinedResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : combinedResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (combinedResults[selectedIndex]) {
        handleSelect(combinedResults[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setCommandPaletteOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <div
          onKeyDown={handleKeyDown}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md"
        >
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0"
            onClick={() => setCommandPaletteOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="relative w-full max-w-2xl bg-bg-card border border-border-main rounded-2xl shadow-float glass-panel overflow-hidden z-10"
          >
            {/* Input Header */}
            <div className="flex items-center px-4 py-3.5 border-b border-border-main space-x-3 bg-bg-surface/50">
              <Search className="w-5 h-5 text-accent-primary shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search (e.g. 'MacBook', 'Orders', 'Settings')..."
                className="w-full bg-transparent text-sm text-txt-heading placeholder:text-txt-muted focus:outline-none font-medium"
              />
              <button
                onClick={() => setCommandPaletteOpen(false)}
                className="p-1 rounded-lg hover:bg-bg-hover text-txt-muted hover:text-txt-heading transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results Body */}
            <div className="max-h-96 overflow-y-auto p-2 space-y-2">
              {combinedResults.length === 0 ? (
                <div className="py-12 text-center text-xs text-txt-muted">
                  No matching commands or products found for "{query}".
                </div>
              ) : (
                combinedResults.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between p-3 rounded-xl cursor-pointer text-xs transition-all ${
                        isSelected
                          ? 'bg-accent-primary text-white font-semibold shadow-glow-sm'
                          : 'bg-bg-surface/60 hover:bg-bg-hover text-txt-heading'
                      }`}
                    >
                      <div className="flex items-center space-x-3 truncate">
                        {item.type === 'product' ? (
                          <img
                            src={item.product.image}
                            alt=""
                            className="w-7 h-7 rounded-lg object-cover shrink-0"
                          />
                        ) : (
                          <div
                            className={`p-1.5 rounded-lg ${
                              isSelected ? 'bg-white/20 text-white' : 'bg-bg-card text-accent-primary'
                            }`}
                          >
                            <Zap className="w-4 h-4" />
                          </div>
                        )}

                        <div className="flex flex-col truncate">
                          <span className="truncate">{item.name}</span>
                          {item.product && (
                            <span
                              className={`text-[10px] font-mono ${
                                isSelected ? 'text-white/80' : 'text-txt-muted'
                              }`}
                            >
                              SKU: {item.product.sku} • Stock: {item.product.quantity}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        <span
                          className={`px-2 py-0.5 text-[10px] font-bold rounded-md uppercase ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-bg-card border border-border-subtle text-txt-muted'
                          }`}
                        >
                          {item.type}
                        </span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 ${
                            isSelected ? 'text-white' : 'text-txt-muted'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer keyboard guide */}
            <div className="px-4 py-2.5 bg-bg-surface border-t border-border-main flex items-center justify-between text-[11px] text-txt-muted">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <kbd className="px-1 py-0.5 bg-bg-card border border-border-subtle rounded font-mono">↑↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center space-x-1">
                  <kbd className="px-1 py-0.5 bg-bg-card border border-border-subtle rounded font-mono">↵</kbd>
                  <span>Select</span>
                </span>
                <span className="flex items-center space-x-1">
                  <kbd className="px-1 py-0.5 bg-bg-card border border-border-subtle rounded font-mono">ESC</kbd>
                  <span>Close</span>
                </span>
              </div>
              <span className="font-bold text-accent-primary">Stellar OS</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
