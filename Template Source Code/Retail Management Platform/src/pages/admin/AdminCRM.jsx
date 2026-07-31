import React from 'react';
import { Users, Award, Heart, MessageSquare } from 'lucide-react';

export default function AdminCRM() {
  const customers = [
    { name: 'Eleanor Vance', ltv: '$4,850.00', segment: 'VIP Platinum', orders: 48, status: 'Active' },
    { name: 'David Sterling', ltv: '$2,420.00', segment: 'Regular Preferred', orders: 22, status: 'Active' },
    { name: 'Sophia Loren', ltv: '$890.00', segment: 'New Shopper', orders: 8, status: 'Active' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Customer CRM & Lifetime Value (LTV)</h1>
        <p className="text-xs text-slate-500">Customer segmentation, RFM analysis, purchase history, and support tickets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {customers.map((c, i) => (
          <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{c.name}</h3>
              <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400 font-bold text-[10px]">
                {c.segment}
              </span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 flex justify-between text-xs font-bold">
              <span>Lifetime Value (LTV)</span>
              <span className="text-emerald-600 dark:text-emerald-400">{c.ltv}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
