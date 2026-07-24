import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Command,
  Bell,
  Plus,
  Sun,
  Moon,
  ChevronDown,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  PackagePlus,
  ShoppingCart,
  UserPlus,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { useInventory } from '../../context/InventoryContext';
import { useNavigate } from 'react-router-dom';

export default function TopNavbar() {
  const {
    theme,
    setTheme,
    accentColor,
    setAccentColor,
    notifications,
    markNotificationRead,
    clearNotifications,
    setCommandPaletteOpen,
    isSidebarCollapsed,
    addToast,
    setOnboardingActive,
  } = useInventory();

  const navigate = useNavigate();
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const [quickAddOpen, setQuickAddOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [accentMenuOpen, setAccentMenuOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const todayDateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <header
      className={`sticky top-0 z-30 h-16 bg-bg-card/80 backdrop-blur-md border-b border-border-main transition-all duration-300 flex items-center justify-between px-4 md:px-6 ${
        isSidebarCollapsed ? 'ml-20' : 'ml-64'
      }`}
    >
      {/* Left Search Trigger & Date */}
      <div className="flex items-center space-x-4">
        {/* Global Search Button / Trigger */}
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="flex items-center space-x-2.5 px-3 py-1.5 rounded-xl bg-bg-surface border border-border-main text-txt-muted hover:text-txt-heading hover:border-accent-primary/40 transition-all text-xs font-medium w-48 md:w-72 shadow-sm"
        >
          <Search className="w-3.5 h-3.5 text-txt-muted shrink-0" />
          <span className="truncate flex-1 text-left">Search products, SKUs, orders...</span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-bold text-txt-muted bg-bg-card border border-border-main rounded-md">
            <Command className="w-2.5 h-2.5" /> K
          </kbd>
        </button>

        {/* Date Display */}
        <div className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-bg-surface/60 border border-border-subtle text-xs text-txt-muted font-medium">
          <Calendar className="w-3.5 h-3.5 text-accent-primary" />
          <span>{todayDateStr}</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-2.5">
        {/* Onboarding Tour Trigger */}
        <button
          onClick={() => setOnboardingActive(true)}
          className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl bg-accent-primary/10 text-accent-primary border border-accent-primary/20 hover:bg-accent-primary/20 text-xs font-semibold transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Product Tour</span>
        </button>

        {/* Quick Add Menu */}
        <div className="relative">
          <button
            onClick={() => setQuickAddOpen(!quickAddOpen)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all glow-button"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Quick Add</span>
            <ChevronDown className="w-3 h-3 ml-0.5" />
          </button>

          <AnimatePresence>
            {quickAddOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute right-0 top-11 w-48 p-1.5 bg-bg-card border border-border-main rounded-xl shadow-float glass-panel z-50 space-y-1"
              >
                <button
                  onClick={() => {
                    setQuickAddOpen(false);
                    navigate('/products/add');
                  }}
                  className="w-full flex items-center space-x-2 p-2 rounded-lg text-xs font-medium text-txt-main hover:bg-bg-hover hover:text-accent-primary transition-colors"
                >
                  <PackagePlus className="w-4 h-4 text-accent-primary" />
                  <span>Add New Product</span>
                </button>
                <button
                  onClick={() => {
                    setQuickAddOpen(false);
                    navigate('/purchase-orders');
                  }}
                  className="w-full flex items-center space-x-2 p-2 rounded-lg text-xs font-medium text-txt-main hover:bg-bg-hover hover:text-accent-success transition-colors"
                >
                  <ShoppingCart className="w-4 h-4 text-accent-success" />
                  <span>New Purchase Order</span>
                </button>
                <button
                  onClick={() => {
                    setQuickAddOpen(false);
                    navigate('/customers');
                  }}
                  className="w-full flex items-center space-x-2 p-2 rounded-lg text-xs font-medium text-txt-main hover:bg-bg-hover hover:text-accent-warning transition-colors"
                >
                  <UserPlus className="w-4 h-4 text-accent-warning" />
                  <span>Add Customer</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme Accent Color Picker Menu */}
        <div className="relative">
          <button
            onClick={() => setAccentMenuOpen(!accentMenuOpen)}
            className="p-2 rounded-xl bg-bg-surface border border-border-main text-txt-muted hover:text-txt-heading hover:bg-bg-hover transition-colors"
            title="Customize Accent Color"
          >
            <div className="w-4 h-4 rounded-full bg-accent-primary shadow-glow-sm" />
          </button>

          <AnimatePresence>
            {accentMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute right-0 top-11 p-2 bg-bg-card border border-border-main rounded-xl shadow-float glass-panel z-50 flex space-x-2"
              >
                {[
                  { name: 'indigo', color: '#6366f1' },
                  { name: 'emerald', color: '#10b981' },
                  { name: 'violet', color: '#8b5cf6' },
                  { name: 'cyan', color: '#06b6d4' },
                  { name: 'rose', color: '#f43f5e' },
                  { name: 'amber', color: '#f59e0b' },
                ].map((acc) => (
                  <button
                    key={acc.name}
                    onClick={() => {
                      setAccentColor(acc.name);
                      setAccentMenuOpen(false);
                      addToast('Theme Accent Updated', `Accent color changed to ${acc.name}.`, 'info');
                    }}
                    className={`w-6 h-6 rounded-full transition-transform ${
                      accentColor === acc.name ? 'ring-2 ring-offset-2 ring-accent-primary scale-110' : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: acc.color }}
                    title={`Theme: ${acc.name}`}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dark/Light Mode Toggle Switch */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-xl bg-bg-surface border border-border-main text-txt-muted hover:text-txt-heading hover:bg-bg-hover transition-all"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-500" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600 rotate-0 transition-transform duration-500" />
          )}
        </button>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
            className="relative p-2 rounded-xl bg-bg-surface border border-border-main text-txt-muted hover:text-txt-heading hover:bg-bg-hover transition-colors"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent-danger text-white text-[9px] font-bold flex items-center justify-center animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          <AnimatePresence>
            {notifDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                className="absolute right-0 top-11 w-80 sm:w-96 p-3 bg-bg-card border border-border-main rounded-2xl shadow-float glass-panel z-50 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-border-subtle pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-xs text-txt-heading">Notifications</span>
                    {unreadCount > 0 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-extrabold bg-accent-primary/20 text-accent-primary rounded-full">
                        {unreadCount} New
                      </span>
                    )}
                  </div>
                  {notifications.length > 0 && (
                    <button
                      onClick={clearNotifications}
                      className="text-[11px] text-txt-muted hover:text-accent-danger transition-colors font-medium"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
                  {notifications.length === 0 ? (
                    <div className="py-8 text-center text-xs text-txt-muted">
                      No new notifications right now.
                    </div>
                  ) : (
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => markNotificationRead(n.id)}
                        className={`p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
                          n.read
                            ? 'bg-bg-surface/40 border-border-subtle opacity-70'
                            : 'bg-bg-surface border-border-main font-medium shadow-sm hover:border-accent-primary/30'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2">
                            {n.type === 'danger' && <AlertTriangle className="w-3.5 h-3.5 text-accent-danger" />}
                            {n.type === 'warning' && <AlertTriangle className="w-3.5 h-3.5 text-accent-warning" />}
                            {n.type === 'success' && <CheckCircle className="w-3.5 h-3.5 text-accent-success" />}
                            {n.type === 'info' && <Info className="w-3.5 h-3.5 text-accent-primary" />}
                            <span className="font-semibold text-txt-heading">{n.title}</span>
                          </div>
                          <span className="text-[10px] text-txt-muted">{n.time}</span>
                        </div>
                        <p className="text-txt-muted mt-1 leading-snug">{n.message}</p>
                      </div>
                    ))
                  )}
                </div>

                <button
                  onClick={() => {
                    setNotifDropdownOpen(false);
                    navigate('/notifications');
                  }}
                  className="w-full py-2 bg-bg-surface hover:bg-bg-hover text-txt-heading text-xs font-semibold rounded-xl text-center flex items-center justify-center space-x-1 transition-colors"
                >
                  <span>Open Notification Center</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Profile Menu */}
        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center space-x-2 p-1 rounded-xl hover:bg-bg-hover transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="User"
              className="w-8 h-8 rounded-lg object-cover ring-2 ring-accent-primary/40"
            />
          </button>

          <AnimatePresence>
            {profileDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute right-0 top-11 w-56 p-2 bg-bg-card border border-border-main rounded-xl shadow-float glass-panel z-50 space-y-1 text-xs"
              >
                <div className="p-2 border-b border-border-subtle">
                  <p className="font-bold text-txt-heading">Akshaya Dev</p>
                  <p className="text-txt-muted text-[11px]">admin@stellarcms.com</p>
                </div>
                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    navigate('/settings');
                  }}
                  className="w-full text-left p-2 rounded-lg hover:bg-bg-hover text-txt-main"
                >
                  Account Settings
                </button>
                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    navigate('/help');
                  }}
                  className="w-full text-left p-2 rounded-lg hover:bg-bg-hover text-txt-main"
                >
                  Keyboard Shortcuts & FAQ
                </button>
                <div className="border-t border-border-subtle pt-1">
                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      addToast('Signed Out', 'You have been signed out safely.', 'info');
                    }}
                    className="w-full text-left p-2 rounded-lg hover:bg-accent-danger/10 text-accent-danger font-medium"
                  >
                    Log Out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
