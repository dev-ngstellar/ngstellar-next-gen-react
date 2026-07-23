import React from 'react';
import { Modal } from './Modal';
import { Building2, Printer, Download, CheckCircle, Clock } from 'lucide-react';
import { SOCIETY_INFO } from '../../data/mockData';

export const InvoiceModal = ({ isOpen, onClose, invoice }) => {
  if (!invoice) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Society Maintenance Invoice" maxWidth="max-w-2xl">
      <div id="printable-invoice" className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
        
        {/* Invoice Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl theme-accent-bg text-white">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">{SOCIETY_INFO.name}</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">{SOCIETY_INFO.location}</p>
            </div>
          </div>
          <div className="sm:text-right">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Invoice ID</span>
            <h4 className="text-lg font-black font-mono theme-accent-text">{invoice.id}</h4>
            <div className={`inline-flex items-center gap-1 mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
              invoice.status === 'Paid' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
            }`}>
              {invoice.status === 'Paid' ? <CheckCircle className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
              {invoice.status}
            </div>
          </div>
        </div>

        {/* Resident & Billing Period Details */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="block font-semibold text-slate-400 uppercase tracking-wider mb-1">Billed To</span>
            <strong className="block text-sm text-slate-900 dark:text-white">{invoice.resident}</strong>
            <span className="text-slate-500 dark:text-slate-400">Unit: {invoice.unit}</span>
          </div>
          <div className="text-right">
            <span className="block font-semibold text-slate-400 uppercase tracking-wider mb-1">Billing Period</span>
            <strong className="block text-sm text-slate-900 dark:text-white">{invoice.month}</strong>
            <span className="text-slate-500 dark:text-slate-400">Due Date: {invoice.dueDate}</span>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-500 font-bold uppercase">
              <tr>
                <th className="py-2.5 px-4">Description</th>
                <th className="py-2.5 px-4 text-right">Amount ($)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              <tr>
                <td className="py-2.5 px-4">Society Maintenance Base Charge</td>
                <td className="py-2.5 px-4 text-right">${invoice.baseFee.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4">Water & Sewage Utility</td>
                <td className="py-2.5 px-4 text-right">${invoice.utilityWater.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4">Common Electricity Contribution</td>
                <td className="py-2.5 px-4 text-right">${invoice.electricity.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4">Reserved Parking Bay Levy</td>
                <td className="py-2.5 px-4 text-right">${invoice.parkingFee.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4">State GST / Taxes (5%)</td>
                <td className="py-2.5 px-4 text-right">${invoice.gst.toFixed(2)}</td>
              </tr>
            </tbody>
            <tfoot className="bg-slate-50 dark:bg-slate-800/40 font-bold border-t border-slate-200 dark:border-slate-800">
              <tr>
                <td className="py-3 px-4 text-slate-900 dark:text-white">Total Amount Due</td>
                <td className="py-3 px-4 text-right text-base theme-accent-text">${invoice.total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Footer Note & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <p className="text-[11px] text-slate-400 text-center sm:text-left">
            Thank you for being an esteemed resident of SkyNest. Online payments via credit card, ACH, or Apple Pay are available on the Resident Portal.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
            <button
              onClick={() => alert("Invoice PDF download initiated.")}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl theme-accent-bg text-white text-xs font-bold shadow-md hover:opacity-95 transition"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>

      </div>
    </Modal>
  );
};
