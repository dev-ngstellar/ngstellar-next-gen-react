import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { Search, Plus, QrCode, Edit, Trash2, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function AdminProducts() {
  const { products, setBarcodeProduct, addToast } = useStore();
  const [search, setSearch] = useState('');

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Product SKU Management</h1>
          <p className="text-xs text-slate-500">Manage prices, barcodes, organic tags, nutrition facts, and stock thresholds.</p>
        </div>

        <button 
          onClick={() => addToast('info', 'New SKU Created', 'Demo SKU creation workflow initiated.')}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
        >
          <Plus className="w-4 h-4" /> Create New SKU
        </button>
      </div>

      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <Search className="w-4 h-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Filter SKU by title, brand, or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full text-xs text-slate-900 dark:text-slate-100 bg-transparent outline-none"
        />
      </div>

      {/* Table */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
            <tr>
              <th className="p-4">SKU Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price / Unit</th>
              <th className="p-4">Stock Status</th>
              <th className="p-4">Batch & Expiry</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium text-slate-800 dark:text-slate-200">
            {filtered.map(p => (
              <tr key={p.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                <td className="p-4 flex items-center gap-3">
                  <img src={p.image} alt={p.name} className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100">{p.name}</p>
                    <p className="text-[10px] text-slate-400">{p.brand} • SKU: {p.id.toUpperCase()}</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[10px]">
                    {p.category}
                  </span>
                </td>
                <td className="p-4 font-bold text-slate-900 dark:text-slate-100">
                  ${p.price.toFixed(2)} <span className="text-[10px] text-slate-400 font-normal">/ {p.unit}</span>
                </td>
                <td className="p-4">
                  {p.stock <= p.lowStockThreshold ? (
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 font-bold text-[10px] flex items-center gap-1 w-max">
                      <AlertTriangle className="w-3 h-3" /> Low ({p.stock})
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold text-[10px] flex items-center gap-1 w-max">
                      <CheckCircle2 className="w-3 h-3" /> Optimal ({p.stock})
                    </span>
                  )}
                </td>
                <td className="p-4 font-mono text-[11px]">
                  <p>{p.batchNumber}</p>
                  <p className="text-[10px] text-slate-400">Exp: {p.expiryDate}</p>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => setBarcodeProduct(p)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                      title="Generate Barcode"
                    >
                      <QrCode className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
