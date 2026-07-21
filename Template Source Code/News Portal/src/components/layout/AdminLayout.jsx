import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Folder, Users, Image as ImageIcon, MessageSquare, Mail, Settings, PieChart, ExternalLink, Menu, X, Bell, Search, LogOut } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

function cn(...inputs) { return twMerge(clsx(inputs)); }

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Articles', path: '/admin/articles', icon: FileText },
    { name: 'Categories', path: '/admin/categories', icon: Folder },
    { name: 'Authors', path: '/admin/authors', icon: Users },
    { name: 'Media Library', path: '/admin/media', icon: ImageIcon },
    { name: 'Comments', path: '/admin/comments', icon: MessageSquare },
    { name: 'Newsletter', path: '/admin/newsletter', icon: Mail },
    { name: 'Analytics', path: '/admin/analytics', icon: PieChart },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[var(--admin-sidebar-bg)] border-r border-[var(--color-border)] overflow-hidden">
      <div className="h-16 flex items-center px-6 border-b border-[var(--color-border)] shrink-0 justify-between">
        <span className={cn("font-serif font-black text-2xl tracking-tight text-white uppercase", !sidebarOpen && "hidden")}>
          Nova<span className="text-[var(--color-primary-500)]">Admin</span>
        </span>
        {sidebarOpen ? null : <span className="font-serif font-black text-2xl text-[var(--color-primary-500)]">N</span>}
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                isActive 
                  ? "bg-[var(--admin-sidebar-active)] text-white shadow-md shadow-[var(--admin-sidebar-active)]/20" 
                  : "text-[var(--admin-sidebar-text)] hover:bg-[var(--color-surface-800)] hover:text-white"
              )}
            >
              {isActive && (
                <motion.div layoutId="adminSidebarActive" className="absolute inset-0 bg-[var(--admin-sidebar-active)] rounded-xl -z-10" />
              )}
              <item.icon className={cn("shrink-0", sidebarOpen ? "w-5 h-5" : "w-6 h-6 mx-auto")} />
              <span className={cn("font-medium whitespace-nowrap", !sidebarOpen && "hidden")}>{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-[var(--color-border)] shrink-0">
        <Link to="/" className={cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-xl text-[var(--admin-sidebar-text)] hover:bg-[var(--color-surface-800)] hover:text-white transition-colors",
          !sidebarOpen && "justify-center"
        )}>
          <ExternalLink className="w-5 h-5 shrink-0" />
          <span className={cn("font-medium", !sidebarOpen && "hidden")}>View Site</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-bg-secondary)]">
      
      {/* Desktop Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: sidebarOpen ? 260 : 80 }}
        className="hidden md:block shrink-0 z-20 h-full relative"
      >
        <SidebarContent />
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-3 top-20 bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] rounded-full p-1 shadow-md hover:text-[var(--color-primary-600)]"
        >
          {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
            />
            <motion.aside 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-[260px] z-50 md:hidden shadow-2xl"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Top Header */}
        <header className="h-16 bg-[var(--color-bg)] border-b border-[var(--color-border)] flex items-center justify-between px-4 sm:px-6 z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileOpen(true)} className="md:hidden p-2 -ml-2 text-[var(--color-text-muted)] hover:bg-[var(--color-bg-secondary)] rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:flex items-center relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
              <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 bg-[var(--color-bg-secondary)] border border-transparent focus:border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20 text-[var(--color-text)] transition-all w-64" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[var(--color-text-muted)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)] rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--color-accent-500)] rounded-full"></span>
            </button>
            <div className="w-px h-6 bg-[var(--color-border)] mx-1"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Admin" className="w-9 h-9 rounded-full ring-2 ring-transparent group-hover:ring-[var(--color-primary-500)] transition-all" />
              <div className="hidden md:block">
                <div className="text-sm font-bold text-[var(--color-text)] leading-tight">Admin User</div>
                <div className="text-xs text-[var(--color-text-muted)]">Editor in Chief</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-[var(--color-bg-secondary)]">
          <div className="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      
    </div>
  );
};

export default AdminLayout;
