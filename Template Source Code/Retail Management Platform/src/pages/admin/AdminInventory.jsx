import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Layers, AlertTriangle, ArrowUpDown, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function AdminInventory() {
  const { products, addToast } = useStore();

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Interactive Stock & Heatmap Matrix</h1>
          <p className="text-xs text-slate-500">Real-time aisle rack density, low-stock alerts, and batch expiry tracking.</p>
        </div>

        <button 
          onClick={() => addToast('success', 'Stock Sync Complete', 'Inventory levels synchronized across all 4 retail hubs.')}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
        >
          <RefreshCw className="w-4 h-4" /> Trigger Stock Audit
        </button>
      </div>

      {/* Interactive Inventory Heatmap Grid */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-md space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Live Storage Rack Density Heatmap</h3>
          <div className="flex items-center gap-4 text-xs font-bold">
            <span className="flex items-center gap-1 text-emerald-600"><span className="w-3 h-3 rounded-full bg-emerald-500" /> Optimal (&gt;20)</span>
            <span className="flex items-center gap-1 text-amber-600"><span className="w-3 h-3 rounded-full bg-amber-500" /> Low Stock (&lt;15)</span>
            <span className="flex items-center gap-1 text-red-600"><span className="w-3 h-3 rounded-full bg-red-500" /> Critical (&lt;5)</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {products.map((p) => {
            const isLow = p.stock <= p.lowStockThreshold;
            const isCritical = p.stock <= 5;
            return (
              <div 
                key={p.id}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  isCritical 
                    ? 'border-red-500 bg-red-50 dark:bg-red-950/40' 
                    : isLow 
                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40' 
                    : 'border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20'
                }`}
              >
                <span className="text-[10px] font-mono font-bold text-slate-400 block truncate">{p.id.toUpperCase()}</span>
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate mt-0.5">{p.name}</p>
                <p className={`text-base font-extrabold mt-1 ${isCritical ? 'text-red-600' : isLow ? 'text-amber-600' : 'text-emerald-600'}`}>
                  {p.stock}
                </p>
                <span className="text-[9px] font-semibold text-slate-400">units</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Batch Expiry Table */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Batch Expiry Log & FIFO Rotation</h3>
        <div className="space-y-3">
          {products.map(p => (
            <div key={p.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <img src={p.image} alt={p.name} className="w-10 h-10 rounded-xl object-cover" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">{p.name}</p>
                  <p className="text-[10px] text-slate-400">Batch: {p.batchNumber}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-amber-600 dark:text-amber-400">Exp: {p.expiryDate}</p>
                <p className="text-[10px] text-slate-500">Rack Aisle 04 • Slot B</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
