import React, { useState } from 'react';
import { RESIDENTS_DATA } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import { Modal } from '../../components/ui/Modal';
import { UserCheck, Eye, Phone, Mail, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export const ResidentManagement = () => {
  const [selectedResident, setSelectedResident] = useState(null);

  const columns = [
    {
      header: 'Resident Name',
      accessor: 'name',
      render: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.photo} alt={row.name} className="w-9 h-9 rounded-xl object-cover" />
          <div>
            <strong className="block text-slate-900 dark:text-white font-bold">{row.name}</strong>
            <span className="text-[10px] text-slate-400">{row.email}</span>
          </div>
        </div>
      )
    },
    { header: 'Apartment Unit', accessor: 'apartment', render: (row) => <span className="font-bold theme-accent-text">{row.apartment}</span> },
    { header: 'Resident Type', accessor: 'type', render: (row) => <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800">{row.type}</span> },
    { header: 'Contact Phone', accessor: 'phone' },
    { header: 'Occupation', accessor: 'occupation' },
    { 
      header: 'KYC Status', 
      accessor: 'kycVerified',
      render: (row) => (
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
          <CheckCircle2 className="w-3 h-3" /> Verified KYC
        </span>
      )
    },
    {
      header: 'View Profile',
      accessor: 'actions',
      render: (row) => (
        <button
          onClick={() => setSelectedResident(row)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <Eye className="w-3.5 h-3.5" />
          Profile
        </button>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Resident Directory & KYC Vault</h1>
        <p className="text-xs text-slate-500">Comprehensive resident profiles, family members, documents, and payment histories.</p>
      </div>

      <DataTable
        columns={columns}
        data={RESIDENTS_DATA}
        searchPlaceholder="Search resident name, apartment ID, occupation..."
        filterKey="type"
        filterOptions={['Owner', 'Tenant']}
      />

      {/* Resident Detail Profile Drawer / Modal */}
      <Modal isOpen={!!selectedResident} onClose={() => setSelectedResident(null)} title="Resident Profile & KYC Sheet" maxWidth="max-w-xl">
        {selectedResident && (
          <div className="space-y-6 text-xs">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <img src={selectedResident.photo} alt={selectedResident.name} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-teal-500/20" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{selectedResident.name}</h3>
                <p className="text-xs theme-accent-text font-bold">{selectedResident.apartment} • {selectedResident.type}</p>
                <span className="text-[11px] text-slate-400">{selectedResident.occupation}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 block mb-1">Phone Number</span>
                <strong className="text-slate-900 dark:text-white">{selectedResident.phone}</strong>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 block mb-1">Emergency Contact</span>
                <strong className="text-slate-900 dark:text-white">{selectedResident.emergencyContact}</strong>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                <span className="block text-slate-400">Family Members</span>
                <strong className="text-base text-slate-900 dark:text-white">{selectedResident.familyMembers}</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                <span className="block text-slate-400">Move-In Date</span>
                <strong className="text-xs text-slate-900 dark:text-white">{selectedResident.moveInDate}</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                <span className="block text-slate-400">Dues Status</span>
                <strong className="text-xs text-emerald-500">{selectedResident.paymentStatus}</strong>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button onClick={() => setSelectedResident(null)} className="px-5 py-2 rounded-xl theme-accent-bg text-white font-bold">
                Close Profile
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
