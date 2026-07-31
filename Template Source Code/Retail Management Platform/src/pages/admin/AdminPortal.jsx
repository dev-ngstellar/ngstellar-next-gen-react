import React from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  Warehouse, 
  Truck, 
  Users, 
  UserCheck, 
  Tag, 
  FileText, 
  BarChart3, 
  Settings, 
  Building,
  Bell,
  Sparkles,
  QrCode,
  Plus
} from 'lucide-react';

import AdminDashboard from './AdminDashboard';
import AdminProducts from './AdminProducts';
import AdminInventory from './AdminInventory';
import AdminWarehouse from './AdminWarehouse';
import AdminSuppliers from './AdminSuppliers';
import AdminDelivery from './AdminDelivery';
import AdminStaff from './AdminStaff';
import AdminCRM from './AdminCRM';
import AdminMarketing from './AdminMarketing';
import AdminReports from './AdminReports';
import AdminAnalytics from './AdminAnalytics';
import AdminSettings from './AdminSettings';

export default function AdminPortal() {
  const { activeAdminTab, setActiveAdminTab, selectedBranch } = useStore();

  const navItems = [
    { id: 'dashboard', label: 'Executive Dashboard', icon: LayoutDashboard },
    { id: 'products', label: 'Product Catalog', icon: Package },
    { id: 'inventory', label: 'Inventory & Heatmap', icon: Layers },
    { id: 'warehouse', label: 'Warehouse & Zones', icon: Warehouse },
    { id: 'suppliers', label: 'Suppliers & POs', icon: Building },
    { id: 'delivery', label: 'Delivery & Route Plan', icon: Truck },
    { id: 'staff', label: 'Staff & Roles', icon: UserCheck },
    { id: 'crm', label: 'Customer CRM', icon: Users },
    { id: 'marketing', label: 'Marketing & Coupons', icon: Tag },
    { id: 'reports', label: 'Financial Reports', icon: FileText },
    { id: 'analytics', label: 'Analytics & Forecast', icon: BarChart3 },
    { id: 'settings', label: 'System Settings', icon: Settings }
  ];

  const renderContent = () => {
    switch (activeAdminTab) {
      case 'dashboard': return <AdminDashboard />;
      case 'products': return <AdminProducts />;
      case 'inventory': return <AdminInventory />;
      case 'warehouse': return <AdminWarehouse />;
      case 'suppliers': return <AdminSuppliers />;
      case 'delivery': return <AdminDelivery />;
      case 'staff': return <AdminStaff />;
      case 'crm': return <AdminCRM />;
      case 'marketing': return <AdminMarketing />;
      case 'reports': return <AdminReports />;
      case 'analytics': return <AdminAnalytics />;
      case 'settings': return <AdminSettings />;
      default: return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col md:flex-row">
      {/* Enterprise Admin Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 p-4 border-r border-slate-800 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          {/* Admin Header Branding */}
          <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                SR
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-white">Stellar Admin OS</h3>
                <p className="text-[10px] text-blue-400 font-bold uppercase">{selectedBranch.code} • Active Hub</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <p className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Retail Modules</p>
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeAdminTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveAdminTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Admin Status */}
        <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Stellar Core v4.8</span>
          <span className="flex items-center gap-1 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Sync
          </span>
        </div>
      </aside>

      {/* Main Admin Workspace */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}
