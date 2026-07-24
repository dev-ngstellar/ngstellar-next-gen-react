import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Plus,
  CheckCircle,
  Truck,
  PackageCheck,
  FileText,
  Printer,
  Download,
  X,
  Search,
  ArrowRight,
} from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function SalesOrders() {
  const { salesOrders, moveSOStatus, addToast } = useInventory();
  const [selectedOrderInvoice, setSelectedOrderInvoice] = useState(null);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-txt-heading">Sales Orders & Invoicing</h1>
          <p className="text-xs text-txt-muted">
            Fulfill customer orders through fulfillment pipeline stages and generate branded invoices.
          </p>
        </div>

        <button
          onClick={() => addToast('New Sales Order', 'Opened order fulfillment wizard.', 'info')}
          className="px-4 py-2 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
        >
          <Plus className="w-4 h-4" />
          <span>New Sales Order</span>
        </button>
      </div>

      {/* Pipeline View Table */}
      <div className="p-5 md:p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-txt-heading">Active Fulfillment Pipeline</h3>
          <span className="text-xs font-bold text-accent-primary">{salesOrders.length} Orders Active</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border-main text-txt-muted font-bold uppercase text-[10px]">
                <th className="py-3 px-3">Order ID</th>
                <th className="py-3 px-3">Customer</th>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Total Amount</th>
                <th className="py-3 px-3">Pipeline Status</th>
                <th className="py-3 px-3">Tracking Ref</th>
                <th className="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {salesOrders.map((so) => (
                <tr key={so.id} className="hover:bg-bg-hover/60 transition-colors">
                  <td className="py-3 px-3 font-mono font-bold text-accent-primary">{so.id}</td>
                  <td className="py-3 px-3 font-bold text-txt-heading">
                    {so.customer}
                    <span className="block text-[10px] text-txt-muted font-normal">{so.customerEmail}</span>
                  </td>
                  <td className="py-3 px-3 text-txt-muted font-mono text-[11px]">{so.date}</td>
                  <td className="py-3 px-3 font-extrabold text-txt-heading">${so.totalAmount.toLocaleString()}</td>
                  <td className="py-3 px-3">
                    <span
                      className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full ${
                        so.status === 'Delivered'
                          ? 'bg-accent-success/20 text-accent-success'
                          : so.status === 'Shipped'
                          ? 'bg-accent-primary/20 text-accent-primary'
                          : so.status === 'Confirmed'
                          ? 'bg-accent-warning/20 text-accent-warning'
                          : 'bg-bg-surface text-txt-muted'
                      }`}
                    >
                      {so.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-mono text-[11px] text-txt-muted">{so.trackingNumber}</td>
                  <td className="py-3 px-3 text-right space-x-2">
                    <button
                      onClick={() => setSelectedOrderInvoice(so)}
                      className="px-2.5 py-1 rounded-lg bg-bg-surface border border-border-main text-txt-heading hover:bg-bg-hover text-[11px] font-semibold"
                    >
                      Invoice
                    </button>
                    {so.status === 'Pending' && (
                      <button
                        onClick={() => moveSOStatus(so.id, 'Confirmed')}
                        className="px-2.5 py-1 rounded-lg bg-accent-primary text-white text-[11px] font-bold"
                      >
                        Confirm
                      </button>
                    )}
                    {so.status === 'Confirmed' && (
                      <button
                        onClick={() => moveSOStatus(so.id, 'Shipped')}
                        className="px-2.5 py-1 rounded-lg bg-accent-warning text-white text-[11px] font-bold"
                      >
                        Ship
                      </button>
                    )}
                    {so.status === 'Shipped' && (
                      <button
                        onClick={() => moveSOStatus(so.id, 'Delivered')}
                        className="px-2.5 py-1 rounded-lg bg-accent-success text-white text-[11px] font-bold"
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice Modal Preview */}
      <AnimatePresence>
        {selectedOrderInvoice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-white text-slate-900 rounded-3xl p-8 shadow-float overflow-hidden space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold tracking-tight">STELLAR LOGISTICS INVOICE</h2>
                  <p className="text-xs text-slate-500 font-mono">Invoice #{selectedOrderInvoice.id}</p>
                </div>
                <button onClick={() => setSelectedOrderInvoice(null)} className="p-1 text-slate-400 hover:text-slate-900">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Billed To</span>
                  <p className="font-bold text-slate-900">{selectedOrderInvoice.customer}</p>
                  <p className="text-slate-600">{selectedOrderInvoice.customerEmail}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Invoice Date</span>
                  <p className="font-bold text-slate-900">{selectedOrderInvoice.date}</p>
                  <p className="text-slate-600">Payment: {selectedOrderInvoice.paymentStatus}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-slate-700 pb-2 border-b border-slate-200">
                  <span>Description</span>
                  <span>Amount</span>
                </div>
                <div className="flex justify-between py-1 text-slate-800 font-semibold">
                  <span>Enterprise Hardware & Order Fulfillment ({selectedOrderInvoice.itemsCount} items)</span>
                  <span>${selectedOrderInvoice.totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    addToast('Print Triggered', 'Sending invoice to printer...', 'info');
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold flex items-center space-x-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Invoice</span>
                </button>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Due</span>
                  <span className="text-xl font-extrabold text-indigo-600">
                    ${selectedOrderInvoice.totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
