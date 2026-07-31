import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Settings, Save, Building, ShieldCheck, CreditCard } from 'lucide-react';

export default function AdminSettings() {
  const { addToast } = useStore();

  const handleSave = (e) => {
    e.preventDefault();
    addToast('success', 'Settings Saved', 'System configurations updated globally across all store branches.');
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Retail System Settings</h1>
        <p className="text-xs text-slate-500">Configure global tax rates, fulfillment slot capacity, payment gateways, and branch rules.</p>
      </div>

      <form onSubmit={handleSave} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-md space-y-6">
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 border-b pb-2">Store & Tax Rules</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Default Sales Tax Rate (%)</label>
              <input type="number" defaultValue={8.0} step="0.1" className="w-full mt-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold outline-none" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Free Delivery Threshold ($)</label>
              <input type="number" defaultValue={50.00} className="w-full mt-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold outline-none" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 border-b pb-2">Express Delivery Slot Limits</h3>
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Max Express Orders Per 30-Min Window</label>
            <input type="number" defaultValue={40} className="w-full mt-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold outline-none" />
          </div>
        </div>

        <button type="submit" className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg">
          <Save className="w-4 h-4" /> Save System Settings
        </button>
      </form>
    </div>
  );
}
