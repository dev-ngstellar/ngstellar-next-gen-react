import React from 'react';
import { useStore } from '../../context/StoreContext';
import { MOCK_SUPPLIERS } from '../../data/mockData';
import { Building, Plus, Star, FileText, CheckCircle2 } from 'lucide-react';

export default function AdminSuppliers() {
  const { addToast } = useStore();

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Supplier Directory & PO Workflow</h1>
          <p className="text-xs text-slate-500">Manage certified organic suppliers, purchase orders, and vendor performance scoring.</p>
        </div>

        <button 
          onClick={() => addToast('success', 'Purchase Order Issued', 'PO #PO-2026-904 sent to NaturaFarm Organics.')}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
        >
          <Plus className="w-4 h-4" /> Issue Purchase Order
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_SUPPLIERS.map(sup => (
          <div key={sup.id} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{sup.name}</h3>
                  <p className="text-xs text-slate-400">{sup.category} • Lead Time: {sup.leadTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <span>{sup.rating}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 grid grid-cols-2 gap-4 text-xs font-bold">
              <div>
                <p className="text-slate-400 uppercase text-[10px]">Active POs</p>
                <p className="text-sm font-extrabold text-slate-900 dark:text-slate-100">{sup.activePOs} POs Pending</p>
              </div>
              <div>
                <p className="text-slate-400 uppercase text-[10px]">Total Annual Spend</p>
                <p className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">{sup.totalSpent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
