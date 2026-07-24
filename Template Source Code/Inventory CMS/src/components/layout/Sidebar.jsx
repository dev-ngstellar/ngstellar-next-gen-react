import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Boxes,
  Package,
  Tags,
  Award,
  Truck,
  ShoppingCart,
  ShoppingBag,
  Users,
  Warehouse,
  ArrowLeftRight,
  FileText,
  BarChart3,
  Bell,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Plus,
  Box,
  Cpu,
  Globe,
  Sparkles,
  Zap,
  ChevronDown,
  Check,
} from 'lucide-react';
import { useInventory } from '../../context/InventoryContext';

const navigationItems = [
  {
    section: 'MAIN',
    items: [
      { name: 'Dashboard', path: '/', icon: LayoutDashboard, badge: null },
    ],
  },
  {
    section: 'INVENTORY CATALOG',
    items: [
      { name: 'Products', path: '/products', icon: Package, badge: null },
      { name: 'Inventory Overview', path: '/inventory', icon: Boxes, badge: 'Low Stock' },
      { name: 'Categories', path: '/categories', icon: Tags, badge: null },
      { name: 'Brands', path: '/brands', icon: Award, badge: null },
    ],
  },
  {
    section: 'SUPPLY CHAIN',
    items: [
      { name: 'Warehouses', path: '/warehouse', icon: Warehouse, badge: '4 Hubs' },
      { name: 'Stock Transfers', path: '/transfers', icon: ArrowLeftRight, badge: null },
      { name: 'Purchase Orders', path: '/purchase-orders', icon: ShoppingCart, badge: 'Active' },
      { name: 'Sales Orders', path: '/sales-orders', icon: ShoppingBag, badge: null },
    ],
  },
  {
    section: 'RELATIONS',
    items: [
      { name: 'Suppliers', path: '/suppliers', icon: Truck, badge: null },
      { name: 'Customers', path: '/customers', icon: Users, badge: null },
    ],
  },
  {
    section: 'BUSINESS & ANALYTICS',
    items: [
      { name: 'Reports', path: '/reports', icon: FileText, badge: null },
      { name: 'Analytics & Trends', path: '/analytics', icon: BarChart3, badge: 'Pro' },
      { name: 'Notifications', path: '/notifications', icon: Bell, badge: 'Alerts' },
    ],
  },
  {
    section: 'SYSTEM',
    items: [
      { name: 'Settings', path: '/settings', icon: Settings, badge: null },
      { name: 'Help Center', path: '/help', icon: HelpCircle, badge: null },
    ],
  },
];

export default function Sidebar() {
  const {
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    activeWorkspace,
    setActiveWorkspace,
    workspaces,
    products,
    notifications,
  } = useInventory();
  const location = useLocation();
  const [workspaceMenuOpen, setWorkspaceMenuOpen] = useState(false);

  const lowStockCount = products.filter((p) => p.status === 'Low Stock' || p.status === 'Out of Stock').length;
  const unreadNotifCount = notifications.filter((n) => !n.read).length;

  return (
    <aside
      className={`fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-bg-sidebar border-r border-border-main transition-all duration-300 ${
        isSidebarCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Sidebar Header / Logo */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-border-subtle">
        <div className="flex items-center space-x-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-primary to-accent-glow flex items-center justify-center text-white shadow-glow-sm shrink-0">
            <Box className="w-5 h-5 animate-pulse-subtle" />
          </div>
          {!isSidebarCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <span className="font-extrabold text-base tracking-tight text-txt-heading leading-tight flex items-center space-x-1">
                <span>Stellar</span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-accent-primary/20 text-accent-primary rounded-full uppercase tracking-wider">
                  CMS
                </span>
              </span>
              <span className="text-[11px] text-txt-muted font-medium">Enterprise Inventory</span>
            </motion.div>
          )}
        </div>

        {/* Toggle Collapse Button */}
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="p-1.5 rounded-lg text-txt-muted hover:text-txt-heading hover:bg-bg-hover transition-colors"
          title={isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {isSidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Workspace Switcher */}
      <div className="p-3 relative">
        <button
          onClick={() => setWorkspaceMenuOpen(!workspaceMenuOpen)}
          className={`w-full flex items-center justify-between p-2 rounded-xl bg-bg-surface border border-border-main hover:border-accent-primary/40 transition-all ${
            isSidebarCollapsed ? 'justify-center' : ''
          }`}
        >
          <div className="flex items-center space-x-2.5 overflow-hidden">
            <div className="w-7 h-7 rounded-lg bg-accent-primary/15 text-accent-primary flex items-center justify-center font-bold text-xs shrink-0">
              {activeWorkspace.code.slice(0, 2)}
            </div>
            {!isSidebarCollapsed && (
              <div className="flex flex-col text-left overflow-hidden">
                <span className="text-xs font-semibold text-txt-heading truncate">
                  {activeWorkspace.name}
                </span>
                <span className="text-[10px] text-txt-muted font-mono">{activeWorkspace.code}</span>
              </div>
            )}
          </div>
          {!isSidebarCollapsed && <ChevronDown className="w-3.5 h-3.5 text-txt-muted shrink-0" />}
        </button>

        {/* Workspace Dropdown */}
        <AnimatePresence>
          {workspaceMenuOpen && !isSidebarCollapsed && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-3 right-3 top-16 z-50 p-1.5 bg-bg-card border border-border-main rounded-xl shadow-float space-y-1 glass-panel"
            >
              <div className="px-2 py-1 text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                Select Workspace
              </div>
              {workspaces.map((ws) => (
                <button
                  key={ws.id}
                  onClick={() => {
                    setActiveWorkspace(ws);
                    setWorkspaceMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-medium transition-colors ${
                    activeWorkspace.id === ws.id
                      ? 'bg-accent-primary/10 text-accent-primary font-semibold'
                      : 'text-txt-main hover:bg-bg-hover'
                  }`}
                >
                  <div className="flex items-center space-x-2 truncate">
                    <span className="w-5 h-5 rounded bg-bg-surface flex items-center justify-center text-[10px] font-bold">
                      {ws.code.slice(0, 2)}
                    </span>
                    <span className="truncate">{ws.name}</span>
                  </div>
                  {activeWorkspace.id === ws.id && <Check className="w-3.5 h-3.5 text-accent-primary" />}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-4">
        {navigationItems.map((group, idx) => (
          <div key={idx} className="space-y-1">
            {!isSidebarCollapsed && (
              <div className="px-3 text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                {group.section}
              </div>
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                let badgeContent = item.badge;
                if (item.path === '/inventory' && lowStockCount > 0) {
                  badgeContent = `${lowStockCount} Alert`;
                } else if (item.path === '/notifications' && unreadNotifCount > 0) {
                  badgeContent = `${unreadNotifCount}`;
                }

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`relative flex items-center px-3 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                      isActive
                        ? 'bg-accent-primary/10 text-accent-primary font-semibold'
                        : 'text-txt-muted hover:text-txt-heading hover:bg-bg-hover'
                    } ${isSidebarCollapsed ? 'justify-center' : 'justify-between'}`}
                    title={isSidebarCollapsed ? item.name : undefined}
                  >
                    {/* Active Pill Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute left-0 top-2 bottom-2 w-1 bg-accent-primary rounded-r-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center space-x-3">
                      <Icon
                        className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                          isActive ? 'text-accent-primary' : 'text-txt-muted group-hover:text-txt-heading'
                        }`}
                      />
                      {!isSidebarCollapsed && <span className="truncate">{item.name}</span>}
                    </div>

                    {!isSidebarCollapsed && badgeContent && (
                      <span
                        className={`px-1.5 py-0.5 text-[10px] font-bold rounded-full ${
                          item.path === '/inventory' && lowStockCount > 0
                            ? 'bg-accent-danger/20 text-accent-danger'
                            : item.path === '/notifications' && unreadNotifCount > 0
                            ? 'bg-accent-primary/20 text-accent-primary'
                            : 'bg-bg-surface text-txt-muted'
                        }`}
                      >
                        {badgeContent}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Footer User Profile */}
      <div className="p-3 border-t border-border-subtle bg-bg-surface/50">
        <div
          className={`flex items-center justify-between p-2 rounded-xl bg-bg-card border border-border-subtle ${
            isSidebarCollapsed ? 'justify-center' : ''
          }`}
        >
          <div className="flex items-center space-x-2.5 overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-lg object-cover ring-2 ring-accent-primary/30 shrink-0"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-accent-success rounded-full ring-2 ring-bg-card" />
            </div>
            {!isSidebarCollapsed && (
              <div className="flex flex-col truncate">
                <span className="text-xs font-bold text-txt-heading truncate">Akshaya Dev</span>
                <span className="text-[10px] text-txt-muted truncate">Admin & Lead Ops</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
