import React, { useState } from 'react';
import { MAINTENANCE_BILLING } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import { InvoiceModal } from '../../components/ui/InvoiceModal';
import { CreditCard, FileText, CheckCircle2, Clock, DollarSign, Download } from 'lucide-react';

export const MaintenanceBilling = () => {
  const [invoices, setInvoices] = useState(MAINTENANCE_BILLING);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handlePayInvoice = (invId) => {
    setInvoices(prev => prev.map(inv => inv.id === invId ? { ...inv, status: 'Paid', paymentDate: 'Jul 23, 2026' } : inv));
    alert(`Payment successful for Invoice ${invId}! Digital receipt generated.`);
  };

  const columns = [
    { header: 'Invoice ID', accessor: 'id', render: (row) => <span className="font-mono font-bold text-slate-900 dark:text-white">{row.id}</span> },
    { header: 'Unit', accessor: 'unit', render: (row) => <span className="font-bold theme-accent-text">{row.unit}</span> },
    { header: 'Resident Name', accessor: 'resident' },
    { header: 'Billing Month', accessor: 'month' },
    { header: 'Total Amount', accessor: 'total', render: (row) => <strong className="text-sm font-mono">${row.total.toFixed(2)}</strong> },
    { header: 'Due Date', accessor: 'dueDate' },
    { 
      header: 'Payment Status', 
      accessor: 'status',
      render: (row) => (
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
          row.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-rose-500/10 text-rose-600'
        }`}>
          {row.status}
        </span>
      )
    },
    {
      header: 'Actions',
      accessor: 'actions',
      render: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedInvoice(row)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <FileText className="w-3.5 h-3.5" />
            View Invoice
          </button>
          {row.status !== 'Paid' && (
            <button
              onClick={() => handlePayInvoice(row.id)}
              className="px-3 py-1.5 rounded-xl theme-accent-bg text-white font-bold text-xs shadow-md"
            >
              Pay Dues
            </button>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Maintenance Invoicing & Ledger</h1>
          <p className="text-xs text-slate-500">Automated monthly maintenance dues, utilities breakdown, tax invoicing, and instant payment settlement.</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={invoices}
        searchPlaceholder="Search invoice ID, resident name, flat unit..."
        filterKey="status"
        filterOptions={['Paid', 'Overdue']}
      />

      <InvoiceModal
        isOpen={!!selectedInvoice}
        onClose={() => setSelectedInvoice(null)}
        invoice={selectedInvoice}
      />
    </div>
  );
};
