import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Building2, LayoutDashboard, Building, Users, UserCheck, ShieldCheck, 
  CreditCard, AlertTriangle, Calendar, Car, PackageCheck, Bell, 
  PartyPopper, FolderOpen, BarChart3, Settings, ShieldAlert, Sparkles, ChevronRight
} from 'lucide-react';
import { useAuthRole } from '../../context/AuthRoleContext';

export const Sidebar = () => {
  const { currentRole } = useAuthRole();

  const allNavItems = [
    { path: '/dashboard', label: 'Overview Dashboard', icon: LayoutDashboard, roles: ['super_admin', 'manager', 'resident', 'security'] },
    { path: '/dashboard/apartments', label: 'Apartment Management', icon: Building, badge: '1200 Units', roles: ['super_admin', 'manager'] },
    { path: '/dashboard/residents', label: 'Resident Directory', icon: Users, badge: 'Active', roles: ['super_admin', 'manager'] },
    { path: '/dashboard/staff', label: 'Staff Roster & Shifts', icon: UserCheck, roles: ['super_admin', 'manager'] },
    { path: '/dashboard/visitors', label: 'Visitor Approvals', icon: ShieldCheck, badge: '4 New', roles: ['super_admin', 'manager', 'resident'] },
    { path: '/dashboard/billing', label: 'Maintenance Billing', icon: CreditCard, badge: 'Invoices', roles: ['super_admin', 'manager', 'resident'] },
    { path: '/dashboard/complaints', label: 'Complaints Portal', icon: AlertTriangle, badge: '2 Urgent', roles: ['super_admin', 'manager', 'resident'] },
    { path: '/dashboard/amenities', label: 'Amenities Booking', icon: Calendar, roles: ['super_admin', 'manager', 'resident'] },
    { path: '/dashboard/parking', label: 'Parking Management', icon: Car, roles: ['super_admin', 'manager', 'resident'] },
    { path: '/dashboard/parcels', label: 'Parcel & Deliveries', icon: PackageCheck, badge: 'Arrived', roles: ['super_admin', 'manager', 'resident', 'security'] },
    { path: '/dashboard/security-gate', label: 'Security Gate Console', icon: ShieldCheck, badge: 'Live', roles: ['super_admin', 'manager', 'security'] },
    { path: '/dashboard/notices', label: 'Notice Board', icon: Bell, roles: ['super_admin', 'manager', 'resident'] },
    { path: '/dashboard/events', label: 'Community Events', icon: PartyPopper, roles: ['super_admin', 'manager', 'resident'] },
    { path: '/dashboard/documents', label: 'Document Vault', icon: FolderOpen, roles: ['super_admin', 'manager', 'resident'] },
    { path: '/dashboard/reports', label: 'Reports & Analytics', icon: BarChart3, roles: ['super_admin', 'manager'] },
    { path: '/dashboard/settings', label: 'Settings & Roles', icon: Settings, roles: ['super_admin'] },
  ];

  const filteredNavItems = allNavItems.filter(item => item.roles.includes(currentRole.id));

  return (
    <aside className="w-64 glass-sidebar h-screen sticky top-0 flex flex-col justify-between hidden md:flex z-40 border-r border-slate-200/80 dark:border-slate-800">
      
      {/* Brand Header */}
      <div>
        <div className="p-6 flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/80">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="p-2 rounded-xl theme-accent-bg text-white shadow-md">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Sky<span className="theme-accent-text">Nest</span>
              </span>
              <span className="block text-[9px] uppercase font-bold tracking-widest text-slate-400">
                SaaS CMS v2.4
              </span>
            </div>
          </NavLink>
        </div>

        {/* Current Active Persona Info */}
        <div className="mx-4 my-4 p-3 rounded-2xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <img
            src={currentRole.avatar}
            alt={currentRole.name}
            className="w-9 h-9 rounded-xl object-cover"
          />
          <div className="overflow-hidden">
            <span className="block text-xs font-bold text-slate-900 dark:text-white truncate">
              {currentRole.name}
            </span>
            <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold theme-accent-light-bg theme-accent-text uppercase tracking-wider mt-0.5">
              {currentRole.id.replace('_', ' ')}
            </span>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="px-3 space-y-1 overflow-y-auto max-h-[calc(100vh-230px)]">
          {filteredNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/dashboard'}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-xs transition-all ${
                    isActive
                      ? 'theme-accent-bg text-white shadow-lg shadow-teal-500/20 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 stroke-[2]" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-white">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer Banner */}
      <div className="p-4 border-t border-slate-200/60 dark:border-slate-800">
        <div className="p-3.5 rounded-2xl aurora-bg border border-slate-200/80 dark:border-slate-800 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
            <Sparkles className="w-3.5 h-3.5 theme-accent-text" />
            NG Stellar Growth
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
            Premium Residential CMS
          </p>
        </div>
      </div>
    </aside>
  );
};
