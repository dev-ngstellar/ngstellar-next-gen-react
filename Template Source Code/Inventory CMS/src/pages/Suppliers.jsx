import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Plus, Mail, Phone, Clock, Star, AlertCircle, X, ShieldCheck } from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function Suppliers() {
  const { suppliers, addToast } = useInventory();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-txt-heading">Suppliers & Vendor Network</h1>
          <p className="text-xs text-txt-muted">
            Track vendor lead times, fulfillment performance scores, and outstanding procurement balances.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
        >
          <Plus className="w-4 h-4" />
          <span>Add Supplier</span>
        </button>
      </div>

      {/* Supplier Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {suppliers.map((sup) => (
          <motion.div
            key={sup.id}
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 text-[10px] font-extrabold bg-accent-success/20 text-accent-success rounded-full">
                  Score: {sup.performanceScore}%
                </span>
                <span className="text-xs font-bold text-amber-400 flex items-center">
                  <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" /> {sup.rating}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-txt-heading mt-2">{sup.name}</h3>
              <p className="text-[11px] text-txt-muted">Contact: {sup.contactPerson}</p>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex items-center text-txt-muted truncate">
                <Mail className="w-3.5 h-3.5 mr-2 text-accent-primary shrink-0" />
                <span className="truncate">{sup.email}</span>
              </div>
              <div className="flex items-center text-txt-muted">
                <Clock className="w-3.5 h-3.5 mr-2 text-accent-warning shrink-0" />
                <span>Average Lead Time: {sup.leadTimeDays} Days</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <div>
                <span className="text-[10px] text-txt-muted block">Open POs</span>
                <span className="font-bold text-txt-heading">{sup.openOrdersCount} Orders</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-txt-muted block">Outstanding Payables</span>
                <span className="font-extrabold text-accent-warning">${sup.outstandingBalance.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Supplier Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-bg-card border border-border-main rounded-2xl p-6 shadow-float glass-panel space-y-4"
            >
              <div className="flex items-center justify-between border-b border-border-main pb-3">
                <h3 className="text-base font-extrabold text-txt-heading">Register New Supplier</h3>
                <button onClick={() => setModalOpen(false)} className="p-1 text-txt-muted hover:text-txt-heading">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addToast('Supplier Registered', 'Added new vendor to supply chain network.', 'success');
                  setModalOpen(false);
                }}
                className="space-y-3 text-xs"
              >
                <div className="space-y-1">
                  <label className="font-bold text-txt-heading">Supplier Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sony B2B Hardware"
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-txt-heading">Vendor Contact Email</label>
                  <input
                    type="email"
                    required
                    placeholder="sales@sony.com"
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-accent-primary text-white font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all glow-button"
                >
                  Confirm Supplier Registration
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
