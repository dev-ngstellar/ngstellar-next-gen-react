import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Boxes,
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  RefreshCw,
  Search,
  Filter,
  Plus,
  Minus,
  X,
  History,
  SlidersHorizontal,
  Download,
  Building2,
} from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function Inventory() {
  const { products, stockMovements, updateProductStock, addToast } = useInventory();

  const [adjustModalOpen, setAdjustModalOpen] = useState(false);
  const [selectedProdId, setSelectedProdId] = useState(products[0]?.id || '');
  const [deltaQty, setDeltaQty] = useState(10);
  const [adjustReason, setAdjustReason] = useState('Manual Restock');
  const [filterType, setFilterType] = useState('All');

  const totalStock = products.reduce((acc, p) => acc + p.quantity, 0);
  const totalValuation = products.reduce((acc, p) => acc + p.quantity * p.purchasePrice, 0);
  const lowStockCount = products.filter((p) => p.status === 'Low Stock' || p.status === 'Out of Stock').length;

  const handleAdjustSubmit = (e) => {
    e.preventDefault();
    updateProductStock(selectedProdId, Number(deltaQty), adjustReason);
    setAdjustModalOpen(false);
  };

  const filteredMovements = filterType === 'All'
    ? stockMovements
    : stockMovements.filter((m) => m.type === filterType);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-txt-heading">Inventory & Stock Controls</h1>
          <p className="text-xs text-txt-muted">
            Monitor real-time inventory balances, stock movements, and initiate stock adjustments.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setAdjustModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
          >
            <Plus className="w-4 h-4" />
            <span>Adjust Stock</span>
          </button>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-2">
          <span className="text-xs font-bold text-txt-muted uppercase tracking-wider">Total Inventory Items</span>
          <div className="text-2xl font-extrabold text-txt-heading">{totalStock.toLocaleString()} units</div>
          <span className="text-[11px] text-accent-success font-semibold flex items-center">
            <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> Healthy stock levels
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-2">
          <span className="text-xs font-bold text-txt-muted uppercase tracking-wider">Total Stock Valuation</span>
          <div className="text-2xl font-extrabold text-accent-primary">
            ${totalValuation.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
          <span className="text-[11px] text-txt-muted">Based on purchase cost</span>
        </div>

        <div className="p-5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-2">
          <span className="text-xs font-bold text-txt-muted uppercase tracking-wider">Low & Out of Stock Items</span>
          <div className="text-2xl font-extrabold text-accent-danger">{lowStockCount} Items</div>
          <span className="text-[11px] text-accent-danger font-semibold flex items-center">
            <AlertTriangle className="w-3.5 h-3.5 mr-1" /> Reorder required
          </span>
        </div>
      </div>

      {/* Stock Movement Log Table */}
      <div className="p-5 md:p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-extrabold text-txt-heading flex items-center space-x-2">
              <History className="w-5 h-5 text-accent-primary" />
              <span>Stock Movement Audit Log</span>
            </h3>
            <p className="text-xs text-txt-muted">Real-time track of all incoming, outgoing, transfer, and adjustment events.</p>
          </div>

          <div className="flex items-center space-x-2">
            {['All', 'Incoming', 'Outgoing', 'Adjustment', 'Transfer'].map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filterType === t
                    ? 'bg-accent-primary text-white shadow-sm'
                    : 'bg-bg-surface text-txt-muted hover:text-txt-heading'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border-main text-txt-muted font-bold uppercase text-[10px]">
                <th className="py-3 px-3">Type</th>
                <th className="py-3 px-3">Product Name</th>
                <th className="py-3 px-3">SKU</th>
                <th className="py-3 px-3">Qty Delta</th>
                <th className="py-3 px-3">Source / Reason</th>
                <th className="py-3 px-3">Timestamp</th>
                <th className="py-3 px-3 text-right">Auditor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {filteredMovements.map((m) => (
                <tr key={m.id} className="hover:bg-bg-hover/60 transition-colors">
                  <td className="py-3 px-3">
                    <span
                      className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full ${
                        m.type === 'Incoming'
                          ? 'bg-accent-success/20 text-accent-success'
                          : m.type === 'Outgoing'
                          ? 'bg-accent-danger/20 text-accent-danger'
                          : m.type === 'Transfer'
                          ? 'bg-accent-primary/20 text-accent-primary'
                          : 'bg-accent-warning/20 text-accent-warning'
                      }`}
                    >
                      {m.type}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-bold text-txt-heading">{m.productName}</td>
                  <td className="py-3 px-3 font-mono text-txt-muted">{m.sku}</td>
                  <td
                    className={`py-3 px-3 font-extrabold ${
                      m.qty >= 0 ? 'text-accent-success' : 'text-accent-danger'
                    }`}
                  >
                    {m.qty >= 0 ? `+${m.qty}` : m.qty}
                  </td>
                  <td className="py-3 px-3 text-txt-muted">{m.destination || m.source}</td>
                  <td className="py-3 px-3 text-txt-muted font-mono text-[11px]">{m.timestamp}</td>
                  <td className="py-3 px-3 text-right font-medium text-txt-heading">{m.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stock Adjustment Modal */}
      <AnimatePresence>
        {adjustModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-bg-card border border-border-main rounded-2xl p-6 shadow-float glass-panel space-y-4"
            >
              <div className="flex items-center justify-between border-b border-border-main pb-3">
                <h3 className="text-base font-extrabold text-txt-heading">Stock Adjustment Tool</h3>
                <button onClick={() => setAdjustModalOpen(false)} className="p-1 text-txt-muted hover:text-txt-heading">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleAdjustSubmit} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-txt-heading">Select Product</label>
                  <select
                    value={selectedProdId}
                    onChange={(e) => setSelectedProdId(e.target.value)}
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main font-medium focus:outline-none focus:border-accent-primary"
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} (Stock: {p.quantity})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-txt-heading">Quantity Delta (+/-)</label>
                  <input
                    type="number"
                    value={deltaQty}
                    onChange={(e) => setDeltaQty(e.target.value)}
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main font-bold focus:outline-none focus:border-accent-primary"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-txt-heading">Reason</label>
                  <select
                    value={adjustReason}
                    onChange={(e) => setAdjustReason(e.target.value)}
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main font-medium focus:outline-none"
                  >
                    <option value="Manual Restock">Manual Restock</option>
                    <option value="Damaged Goods">Damaged Goods</option>
                    <option value="Audit Reconciliation">Audit Reconciliation</option>
                    <option value="Sample / Demo Item">Sample / Demo Item</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-accent-primary text-white font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all glow-button"
                >
                  Confirm Adjustment
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
