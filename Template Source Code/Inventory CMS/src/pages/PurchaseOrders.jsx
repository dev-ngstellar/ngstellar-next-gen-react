import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Plus,
  Clock,
  CheckCircle,
  Truck,
  Package,
  DollarSign,
  Building2,
  Calendar,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function PurchaseOrders() {
  const { purchaseOrders, movePOStatus, addToast } = useInventory();
  const [activeFilter, setActiveFilter] = useState('All');

  const kanbanColumns = [
    { id: 'Draft', title: 'Draft', color: 'border-slate-500 text-slate-400 bg-slate-500/10' },
    { id: 'Requested', title: 'Requested', color: 'border-amber-500 text-amber-400 bg-amber-500/10' },
    { id: 'Approved', title: 'Approved', color: 'border-indigo-500 text-indigo-400 bg-indigo-500/10' },
    { id: 'Packed', title: 'Packed', color: 'border-cyan-500 text-cyan-400 bg-cyan-500/10' },
    { id: 'Shipped', title: 'Shipped', color: 'border-blue-500 text-blue-400 bg-blue-500/10' },
    { id: 'Received', title: 'Received', color: 'border-emerald-500 text-emerald-400 bg-emerald-500/10' },
  ];

  const filteredPOs = activeFilter === 'All'
    ? purchaseOrders
    : purchaseOrders.filter((po) => po.status === activeFilter);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-txt-heading">Purchase Orders Pipeline</h1>
          <p className="text-xs text-txt-muted">
            Kanban workflow tracking vendor procurement from draft request to warehouse receipt.
          </p>
        </div>

        <button
          onClick={() => addToast('Create PO', 'Opened Purchase Order Builder.', 'info')}
          className="px-4 py-2 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
        >
          <Plus className="w-4 h-4" />
          <span>New Purchase Order</span>
        </button>
      </div>

      {/* KANBAN PIPELINE BOARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-4">
        {kanbanColumns.map((col) => {
          const colPOs = purchaseOrders.filter((po) => po.status === col.id);
          return (
            <div
              key={col.id}
              className="p-3 rounded-2xl bg-bg-card/70 border border-border-main shadow-card-glow glass-card flex flex-col space-y-3 min-w-[200px]"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                <span className={`px-2.5 py-0.5 text-[11px] font-extrabold rounded-full border ${col.color}`}>
                  {col.title}
                </span>
                <span className="text-xs font-bold text-txt-muted font-mono">{colPOs.length}</span>
              </div>

              {/* Cards inside column */}
              <div className="space-y-3 flex-1 min-h-[350px]">
                {colPOs.length === 0 ? (
                  <div className="py-8 text-center text-[11px] text-txt-muted italic">No orders</div>
                ) : (
                  colPOs.map((po) => (
                    <motion.div
                      key={po.id}
                      layoutId={po.id}
                      whileHover={{ scale: 1.02 }}
                      className="p-3.5 rounded-xl bg-bg-surface border border-border-main shadow-sm hover:border-accent-primary/50 transition-all space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-extrabold text-accent-primary">{po.id}</span>
                        <span className="text-[10px] text-txt-muted flex items-center">
                          <Calendar className="w-3 h-3 mr-1" /> {po.expectedDate}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-txt-heading line-clamp-1">{po.vendor}</h4>
                        <p className="text-[10px] text-txt-muted truncate">{po.warehouse}</p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-xs">
                        <span className="font-extrabold text-txt-heading">${po.totalValue.toLocaleString()}</span>
                        <span className="text-[10px] text-txt-muted">{po.itemsCount} items</span>
                      </div>

                      {/* Status Next Action Button */}
                      <div className="pt-1 flex items-center justify-end">
                        {col.id === 'Draft' && (
                          <button
                            onClick={() => movePOStatus(po.id, 'Requested')}
                            className="text-[10px] font-bold text-accent-primary hover:underline flex items-center"
                          >
                            <span>Request PO</span> <ArrowRight className="w-3 h-3 ml-0.5" />
                          </button>
                        )}
                        {col.id === 'Requested' && (
                          <button
                            onClick={() => movePOStatus(po.id, 'Approved')}
                            className="text-[10px] font-bold text-accent-success hover:underline flex items-center"
                          >
                            <span>Approve PO</span> <ArrowRight className="w-3 h-3 ml-0.5" />
                          </button>
                        )}
                        {col.id === 'Approved' && (
                          <button
                            onClick={() => movePOStatus(po.id, 'Packed')}
                            className="text-[10px] font-bold text-accent-primary hover:underline flex items-center"
                          >
                            <span>Pack PO</span> <ArrowRight className="w-3 h-3 ml-0.5" />
                          </button>
                        )}
                        {col.id === 'Packed' && (
                          <button
                            onClick={() => movePOStatus(po.id, 'Shipped')}
                            className="text-[10px] font-bold text-accent-warning hover:underline flex items-center"
                          >
                            <span>Ship Goods</span> <ArrowRight className="w-3 h-3 ml-0.5" />
                          </button>
                        )}
                        {col.id === 'Shipped' && (
                          <button
                            onClick={() => movePOStatus(po.id, 'Received')}
                            className="text-[10px] font-bold text-accent-success hover:underline flex items-center"
                          >
                            <span>Mark Received</span> <ArrowRight className="w-3 h-3 ml-0.5" />
                          </button>
                        )}
                        {col.id === 'Received' && (
                          <span className="text-[10px] font-bold text-accent-success flex items-center">
                            <CheckCircle className="w-3 h-3 mr-0.5" /> Stock Received
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
