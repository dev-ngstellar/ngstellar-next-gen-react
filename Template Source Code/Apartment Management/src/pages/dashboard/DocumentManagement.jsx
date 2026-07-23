import React from 'react';
import { DOCUMENTS_DATA } from '../../data/mockData';
import { FolderOpen, FileText, Download, Search, Plus } from 'lucide-react';
import { DataTable } from '../../components/ui/DataTable';

export const DocumentManagement = () => {
  const columns = [
    {
      header: 'Document Name',
      accessor: 'title',
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl theme-accent-light-bg theme-accent-text">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <strong className="block text-slate-900 dark:text-white font-bold">{row.title}</strong>
            <span className="text-[10px] text-slate-400">Added on {row.date}</span>
          </div>
        </div>
      )
    },
    { header: 'Category Folder', accessor: 'category', render: (row) => <span className="font-bold theme-accent-text">{row.category}</span> },
    { header: 'File Size', accessor: 'size', render: (row) => <span className="font-mono text-xs">{row.size}</span> },
    { header: 'Format', accessor: 'format', render: (row) => <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-slate-200 dark:bg-slate-800">{row.format}</span> },
    {
      header: 'Download',
      accessor: 'actions',
      render: (row) => (
        <button
          onClick={() => alert(`Downloading ${row.title}`)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl theme-accent-bg text-white text-xs font-bold shadow-md hover:opacity-95 transition"
        >
          <Download className="w-3.5 h-3.5" />
          Download
        </button>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Society Document & Bye-Laws Vault</h1>
          <p className="text-xs text-slate-500">Central digital archive for society bye-laws, financial audits, insurance policies, and AGM minutes.</p>
        </div>

        <button
          onClick={() => alert("Upload document workflow launched.")}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl theme-accent-bg text-white font-bold text-xs shadow-md"
        >
          <Plus className="w-4 h-4" />
          Upload Document
        </button>
      </div>

      <DataTable
        columns={columns}
        data={DOCUMENTS_DATA}
        searchPlaceholder="Search society documents, bye-laws, insurance policies..."
        filterKey="category"
        filterOptions={['Rules & Policies', 'Financials', 'Legal & Certificates', 'Facilities']}
      />
    </div>
  );
};
