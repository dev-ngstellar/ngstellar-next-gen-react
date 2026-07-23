import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Shield, Palette, Globe, ChevronDown, Check, Sparkles, User, LogOut, CheckCircle2, AlertTriangle, Package } from 'lucide-react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useTheme } from '../../context/ThemeContext';
import { ThemeCustomizerModal } from './ThemeCustomizerModal';

export const Header = ({ toggleSidebar }) => {
  const { currentRole, switchRole, ROLES } = useAuthRole();
  const { isDark, toggleTheme } = useTheme();
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  const notifications = [
    { id: 1, title: 'New Visitor Arrival', desc: 'Daniel Craig arrived for Flat A-402', time: '5m ago', icon: Shield, color: 'text-emerald-500' },
    { id: 2, title: 'Package Delivered', desc: 'Amazon parcel registered at Gate 1', time: '18m ago', icon: Package, color: 'text-amber-500' },
    { id: 3, title: 'Maintenance Paid', desc: 'Flat C-1201 settled monthly dues $700', time: '1h ago', icon: CheckCircle2, color: 'text-teal-500' },
    { id: 4, title: 'Urgent Complaint', desc: 'Elevator sensor alert reported in Tower B', time: '2h ago', icon: AlertTriangle, color: 'text-rose-500' },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 w-full glass-nav px-4 lg:px-8 py-3 flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800">
        
        {/* Left: Search & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search apartments, residents, vehicles, visitors, invoices..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Public Site Link */}
          <Link
            to="/"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="View Public Website"
          >
            <Globe className="w-4 h-4 text-slate-400" />
            Public Site
          </Link>

          {/* Theme Customizer Trigger */}
          <button
            onClick={() => setIsThemeModalOpen(true)}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Theme Engine"
          >
            <Palette className="w-4 h-4" />
          </button>

          {/* Notification Bell Dropdown */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full theme-accent-bg animate-ping" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full theme-accent-bg" />
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 glass-card rounded-2xl p-4 shadow-2xl z-50 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Recent Society Alerts</h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold theme-accent-light-bg theme-accent-text">
                    4 Unread
                  </span>
                </div>
                <div className="space-y-3">
                  {notifications.map((n) => {
                    const IconComp = n.icon;
                    return (
                      <div key={n.id} className="flex gap-3 p-2.5 rounded-xl hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition">
                        <div className={`p-2 rounded-xl bg-slate-100 dark:bg-slate-900 ${n.color}`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xs font-semibold text-slate-900 dark:text-white">{n.title}</h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{n.desc}</p>
                          <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block" />

          {/* Dynamic Role Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className="flex items-center gap-3 p-1.5 pr-3 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition"
            >
              <img
                src={currentRole.avatar}
                alt={currentRole.name}
                className="w-8 h-8 rounded-xl object-cover ring-2 ring-teal-500/20"
              />
              <div className="text-left hidden md:block">
                <span className="block text-xs font-bold text-slate-900 dark:text-white leading-tight">
                  {currentRole.name}
                </span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                  {currentRole.badge}
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
            </button>

            {roleDropdownOpen && (
              <div className="absolute right-0 mt-3 w-72 glass-card rounded-2xl p-2 shadow-2xl z-50 border border-slate-200 dark:border-slate-800">
                <div className="px-3 py-2.5 mb-1 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 theme-accent-text" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Switch Active Portal View
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Seamlessly preview CMS perspectives for all personas.
                  </p>
                </div>

                <div className="space-y-1">
                  {Object.values(ROLES).map((role) => (
                    <button
                      key={role.id}
                      onClick={() => {
                        switchRole(role.id);
                        setRoleDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition ${
                        currentRole.id === role.id
                          ? 'theme-accent-light-bg theme-accent-text font-bold'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img src={role.avatar} alt={role.name} className="w-7 h-7 rounded-lg object-cover" />
                        <div>
                          <span className="block text-xs">{role.name}</span>
                          <span className="block text-[10px] opacity-75 font-normal">{role.badge}</span>
                        </div>
                      </div>
                      {currentRole.id === role.id && <Check className="w-4 h-4 stroke-[3]" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </header>

      <ThemeCustomizerModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
      />
    </>
  );
};
