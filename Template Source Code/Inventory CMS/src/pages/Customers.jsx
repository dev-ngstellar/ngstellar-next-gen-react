import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Plus, Mail, Phone, ShoppingBag, DollarSign, Calendar, Star, X } from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function Customers() {
  const { customers, addToast } = useInventory();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-txt-heading">Customer CRM Directory</h1>
          <p className="text-xs text-txt-muted">
            Manage enterprise client accounts, lifetime values (LTV), and purchase histories.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
        >
          <Plus className="w-4 h-4" />
          <span>Add Customer</span>
        </button>
      </div>

      {/* Customer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {customers.map((cust) => (
          <motion.div
            key={cust.id}
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card flex flex-col justify-between space-y-4"
          >
            <div className="flex items-start space-x-3">
              <img src={cust.avatar} alt="" className="w-12 h-12 rounded-xl object-cover ring-2 ring-accent-primary/20 shrink-0" />
              <div className="overflow-hidden">
                <span className="px-2 py-0.5 text-[10px] font-extrabold bg-accent-primary/10 text-accent-primary rounded-full">
                  {cust.status}
                </span>
                <h3 className="text-sm font-extrabold text-txt-heading truncate mt-1">{cust.name}</h3>
                <p className="text-[11px] text-txt-muted truncate">{cust.company}</p>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex items-center text-txt-muted truncate">
                <Mail className="w-3.5 h-3.5 mr-2 text-accent-primary shrink-0" />
                <span className="truncate">{cust.email}</span>
              </div>
              <div className="flex items-center text-txt-muted">
                <Phone className="w-3.5 h-3.5 mr-2 text-accent-success shrink-0" />
                <span>{cust.phone}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <div>
                <span className="text-[10px] text-txt-muted block">Total Orders</span>
                <span className="font-bold text-txt-heading">{cust.totalOrders} orders</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-txt-muted block">Lifetime Value</span>
                <span className="font-extrabold text-accent-primary">${cust.lifetimeValue.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Customer Modal */}
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
                <h3 className="text-base font-extrabold text-txt-heading">Add New Client Account</h3>
                <button onClick={() => setModalOpen(false)} className="p-1 text-txt-muted hover:text-txt-heading">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addToast('Customer Added', 'New client account created.', 'success');
                  setModalOpen(false);
                }}
                className="space-y-3 text-xs"
              >
                <div className="space-y-1">
                  <label className="font-bold text-txt-heading">Full Name / Org</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Wayne Enterprises"
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-txt-heading">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="bruce@wayne.com"
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-txt-heading">Phone Number</label>
                  <input
                    type="text"
                    placeholder="+1 (555) 019-2831"
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-accent-primary text-white font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all glow-button"
                >
                  Create Client Record
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
