import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  FileSpreadsheet,
  FileCode,
  Printer,
  Calendar,
  Filter,
  DollarSign,
  Boxes,
  ShoppingCart,
  CheckCircle,
} from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function Reports() {
  const { products, salesOrders, purchaseOrders, addToast } = useInventory();
  const [activeReportTab, setActiveReportTab] = useState('sales');

  const handleExport = (format) => {
    addToast('Report Exported', `Generated ${activeReportTab.toUpperCase()} report in ${format} format.`, 'success');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-txt-heading">Reports & Export Suite</h1>
          <p className="text-xs text-txt-muted">
            Generate custom audit reports for executive stakeholders and accounting integrations.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleExport('CSV')}
            className="px-3.5 py-2 rounded-xl bg-bg-card border border-border-main text-txt-heading text-xs font-semibold hover:bg-bg-hover transition-colors flex items-center space-x-1.5"
          >
            <FileSpreadsheet className="w-4 h-4 text-accent-success" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => handleExport('Excel')}
            className="px-3.5 py-2 rounded-xl bg-bg-card border border-border-main text-txt-heading text-xs font-semibold hover:bg-bg-hover transition-colors flex items-center space-x-1.5"
          >
            <FileCode className="w-4 h-4 text-accent-primary" />
            <span>Export Excel</span>
          </button>
          <button
            onClick={() => handleExport('PDF')}
            className="px-3.5 py-2 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center space-x-2 p-1.5 bg-bg-card border border-border-main rounded-2xl overflow-x-auto glass-card">
        {[
          { id: 'sales', label: 'Sales Reports' },
          { id: 'inventory', label: 'Inventory Valuation' },
          { id: 'profit', label: 'Profit & Margins' },
          { id: 'purchase', label: 'Procurement POs' },
          { id: 'warehouse', label: 'Warehouse Occupancy' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveReportTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeReportTab === tab.id
                ? 'bg-accent-primary text-white shadow-glow-sm'
                : 'text-txt-muted hover:text-txt-heading hover:bg-bg-hover'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Report Data Preview Table */}
      <div className="p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-4">
        <div className="flex items-center justify-between border-b border-border-subtle pb-3">
          <div>
            <h3 className="text-base font-extrabold text-txt-heading capitalize">{activeReportTab} Audit Summary</h3>
            <p className="text-xs text-txt-muted">Showing live generated ledger rows</p>
          </div>
          <span className="text-xs font-mono font-bold text-accent-primary">Period: Q3 2026</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border-main text-txt-muted font-bold uppercase text-[10px]">
                <th className="py-3 px-3">Reference ID</th>
                <th className="py-3 px-3">Item / Target</th>
                <th className="py-3 px-3">Category</th>
                <th className="py-3 px-3">Valuation</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-bg-hover/60">
                  <td className="py-3 px-3 font-mono font-bold text-accent-primary">{p.sku}</td>
                  <td className="py-3 px-3 font-bold text-txt-heading">{p.name}</td>
                  <td className="py-3 px-3 text-txt-muted">{p.category}</td>
                  <td className="py-3 px-3 font-extrabold text-accent-success">${(p.quantity * p.sellingPrice).toLocaleString()}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-accent-success/20 text-accent-success rounded-full">
                      Audited
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
