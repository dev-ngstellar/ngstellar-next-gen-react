import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Tag, Send, Gift, Sparkles } from 'lucide-react';

export default function AdminMarketing() {
  const { addToast } = useStore();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Marketing & Campaign Manager</h1>
          <p className="text-xs text-slate-500">Create promotional coupons, run push notifications, and configure loyalty cashback tiers.</p>
        </div>

        <button 
          onClick={() => addToast('success', 'Push Campaign Dispatched', 'Flash Sale alert sent to 18,240 mobile app users.')}
          className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5"
        >
          <Send className="w-4 h-4" /> Broadcast Push Notification
        </button>
      </div>

      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Active Promotional Coupons</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold">
          <div className="p-4 rounded-2xl border border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20">
            <p className="text-emerald-700 dark:text-emerald-400">STELLAR10 • 10% OFF</p>
            <p className="text-slate-400 font-normal mt-1">Total Uses: 1,420 Redemption</p>
          </div>
          <div className="p-4 rounded-2xl border border-amber-500/40 bg-amber-50/40 dark:bg-amber-950/20">
            <p className="text-amber-700 dark:text-amber-400">ORGANIC20 • 20% OFF</p>
            <p className="text-slate-400 font-normal mt-1">Total Uses: 890 Redemption</p>
          </div>
        </div>
      </div>
    </div>
  );
}
