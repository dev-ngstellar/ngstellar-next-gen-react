import React, { useState } from 'react';
import { VISITORS_LOG } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import { QRPassModal } from '../../components/ui/QRPassModal';
import { ShieldCheck, Plus, QrCode, CheckCircle2, Clock } from 'lucide-react';
import { Modal } from '../../components/ui/Modal';

export const VisitorManagement = () => {
  const [visitors, setVisitors] = useState(VISITORS_LOG);
  const [selectedPass, setSelectedPass] = useState(null);
  const [newVisitorModal, setNewVisitorModal] = useState(false);

  const handleCreateVisitor = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newV = {
      id: `VIS-${Math.floor(1000 + Math.random() * 9000)}`,
      visitorName: formData.get('visitorName'),
      phone: formData.get('phone'),
      hostApartment: formData.get('hostApartment'),
      hostName: 'Resident Host',
      purpose: formData.get('purpose'),
      vehicleNo: formData.get('vehicleNo') || 'N/A',
      checkIn: 'Just Now',
      checkOut: 'Pending',
      status: 'Approved',
      qrCode: `QR-${Math.floor(1000 + Math.random() * 9000)}-${formData.get('hostApartment')}`
    };
    setVisitors([newV, ...visitors]);
    setNewVisitorModal(false);
  };

  const columns = [
    { header: 'Visitor Name', accessor: 'visitorName', render: (row) => <strong className="text-slate-900 dark:text-white font-bold">{row.visitorName}</strong> },
    { header: 'Host Apartment', accessor: 'hostApartment', render: (row) => <span className="font-bold theme-accent-text">{row.hostApartment}</span> },
    { header: 'Purpose of Visit', accessor: 'purpose' },
    { header: 'Vehicle Number', accessor: 'vehicleNo', render: (row) => <span className="font-mono text-xs">{row.vehicleNo}</span> },
    { header: 'Check In Time', accessor: 'checkIn' },
    { header: 'Check Out Time', accessor: 'checkOut' },
    { 
      header: 'QR Gate Pass', 
      accessor: 'qrCode',
      render: (row) => (
        <button
          onClick={() => setSelectedPass(row)}
          className="flex items-center gap-1 px-3 py-1 rounded-xl theme-accent-light-bg theme-accent-text font-bold text-xs hover:scale-105 transition"
        >
          <QrCode className="w-3.5 h-3.5" />
          View Pass
        </button>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Visitor Approvals & Gate Pass Registry</h1>
          <p className="text-xs text-slate-500">Real-time visitor tracking, QR code verification, and resident gate notifications.</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={visitors}
        searchPlaceholder="Search visitor name, host apartment, vehicle number..."
        filterKey="status"
        filterOptions={['Approved', 'Completed', 'Checked In']}
        actionButton={
          <button
            onClick={() => setNewVisitorModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl theme-accent-bg text-white font-bold text-xs shadow-md"
          >
            <Plus className="w-4 h-4" />
            Issue Instant QR Pass
          </button>
        }
      />

      <QRPassModal
        isOpen={!!selectedPass}
        onClose={() => setSelectedPass(null)}
        passData={selectedPass}
      />

      <Modal isOpen={newVisitorModal} onClose={() => setNewVisitorModal(false)} title="Generate Visitor Gate Pass">
        <form onSubmit={handleCreateVisitor} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold mb-1">Visitor Full Name</label>
            <input required name="visitorName" placeholder="Daniel Craig" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Host Apartment Unit</label>
              <input required name="hostApartment" placeholder="A-402" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Visitor Phone</label>
              <input required name="phone" placeholder="+1 (555) 000-0000" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Purpose of Visit</label>
              <select name="purpose" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <option>Personal Guest</option>
                <option>Package Delivery</option>
                <option>Service Technician</option>
                <option>Food Delivery</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Vehicle License Plate</label>
              <input name="vehicleNo" placeholder="NY-889-X (Optional)" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl theme-accent-bg text-white font-bold">
            Issue Digital QR Pass
          </button>
        </form>
      </Modal>
    </div>
  );
};
