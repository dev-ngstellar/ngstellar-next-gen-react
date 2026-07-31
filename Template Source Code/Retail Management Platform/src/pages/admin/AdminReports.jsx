import React from 'react';
import { useStore } from '../../context/StoreContext';
import { FileText, Download, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

export default function AdminReports() {
  const { addToast } = useStore();

  const reports = [
    { title: 'Monthly Profit & Loss Statement (P&L)', period: 'July 2026', size: '2.4 MB' },
    { title: 'Inventory Valuation & Spoilage Audit', period: 'Q2 2026', size: '1.8 MB' },
    { title: 'Supplier Performance & Delivery On-Time Rate', period: 'YTD 2026', size: '3.1 MB' },
    { title: 'Tax Compliance & VAT Breakdown Report', period: 'July 2026', size: '890 KB' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Financial Reports & Exports</h1>
        <p className="text-xs text-slate-500">Download audit-ready financial statements, inventory valuations, and supplier metrics.</p>
      </div>

      <div className="space-y-4">
        {reports.map((r, i) => (
          <div key={i} className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 font-bold">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{r.title}</h3>
                <p className="text-xs text-slate-400">Period: {r.period} • Size: {r.size}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => addToast('success', 'PDF Export Complete', `Downloaded ${r.title}.pdf`)}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" /> Download PDF
              </button>
              <button 
                onClick={() => addToast('info', 'CSV Export Complete', `Exported ${r.title}.csv`)}
                className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs"
              >
                <FileSpreadsheet className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
