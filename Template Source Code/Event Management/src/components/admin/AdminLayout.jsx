import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Calendar, Ticket, Users, MapPin, Mic, 
  Award, Image, FileText, BarChart3, Bell, Settings, ArrowLeft, Sparkles, CheckCircle2 
} from 'lucide-react';

export const AdminLayout = ({ children, activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Overview Dashboard', icon: LayoutDashboard },
    { id: 'events', label: 'Events & Builder', icon: Calendar },
    { id: 'bookings', label: 'Bookings & Invoices', icon: FileText },
    { id: 'tickets', label: 'Ticket Passes', icon: Ticket },
    { id: 'attendees', label: 'Attendees & Check-in', icon: Users },
    { id: 'venues', label: 'Venues', icon: MapPin },
    { id: 'speakers', label: 'Speakers', icon: Mic },
    { id: 'sponsors', label: 'Sponsors', icon: Award },
    { id: 'media', label: 'Media Library', icon: Image },
    { id: 'blog', label: 'Blog CMS', icon: FileText },
    { id: 'analytics', label: 'Analytics & Funnel', icon: BarChart3 },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-body)] flex flex-col md:flex-row">
      
      {/* Sidebar Navigation (Linear / Stripe / Raycast Style) */}
      <aside className="w-full md:w-64 bg-[var(--bg-secondary)] border-r border-[var(--border-color)] flex flex-col justify-between p-4 flex-shrink-0">
        <div className="space-y-6">
          
          {/* Logo & Public Switcher */}
          <div className="space-y-2">
            <Link to="/" className="flex items-center space-x-2 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </Link>
            
            <div className="p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs">
                SE
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[var(--text-heading)]">Stellar Admin</span>
                <span className="text-[10px] text-[var(--color-primary)] font-mono flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Enterprise SaaS</span>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Menu Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[var(--color-primary)] text-white shadow-md'
                      : 'text-[var(--text-body)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-heading)]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile Info Footer */}
        <div className="pt-4 border-t border-[var(--border-color)] flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
            alt="Admin Avatar"
            className="w-8 h-8 rounded-full border border-[var(--color-primary)]"
          />
          <div className="flex flex-col text-xs">
            <span className="font-bold text-[var(--text-heading)]">Antigravity Admin</span>
            <span className="text-[10px] text-[var(--text-muted)]">Superuser Access</span>
          </div>
        </div>
      </aside>

      {/* Main Administrative Workplace Area */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto space-y-6">
        {children}
      </main>

    </div>
  );
};
