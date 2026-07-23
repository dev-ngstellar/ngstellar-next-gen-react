import React, { useState } from 'react';
import { APARTMENT_UNITS } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import { Modal } from '../../components/ui/Modal';
import { Building, Plus, Edit2, Trash2, Eye, CheckCircle2 } from 'lucide-react';

export const ApartmentManagement = () => {
  const [apartments, setApartments] = useState(APARTMENT_UNITS);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingApartment, setEditingApartment] = useState(null);

  const handleSaveApartment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUnit = {
      id: formData.get('id'),
      tower: formData.get('tower'),
      floor: formData.get('floor'),
      bhk: formData.get('bhk'),
      area: formData.get('area'),
      owner: formData.get('owner'),
      tenant: formData.get('tenant'),
      parking: formData.get('parking'),
      status: formData.get('status'),
      maintenance: 'Paid',
      dues: 0
    };

    if (editingApartment) {
      setApartments(prev => prev.map(a => a.id === editingApartment.id ? newUnit : a));
    } else {
      setApartments(prev => [newUnit, ...prev]);
    }
    setIsAddModalOpen(false);
    setEditingApartment(null);
  };

  const columns = [
    { header: 'Flat ID', accessor: 'id', render: (row) => <span className="font-mono font-bold text-slate-900 dark:text-white">{row.id}</span> },
    { header: 'Tower & Floor', accessor: 'tower', render: (row) => <span>{row.tower} • {row.floor}</span> },
    { header: 'BHK & Area', accessor: 'bhk', render: (row) => <span>{row.bhk} ({row.area})</span> },
    { header: 'Owner', accessor: 'owner' },
    { header: 'Tenant', accessor: 'tenant' },
    { header: 'Parking Bay', accessor: 'parking', render: (row) => <span className="font-mono text-xs">{row.parking}</span> },
    { 
      header: 'Occupancy', 
      accessor: 'status', 
      render: (row) => (
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
          row.status === 'Occupied' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
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
            onClick={() => { setEditingApartment(row); setIsAddModalOpen(true); }}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setApartments(prev => prev.filter(a => a.id !== row.id))}
            className="p-1.5 rounded-lg hover:bg-rose-100 text-rose-600"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Apartment Unit Management</h1>
          <p className="text-xs text-slate-500">Manage towers, floor plans, occupancy status, and slot assignments.</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={apartments}
        searchPlaceholder="Search by flat number, owner name, tower..."
        filterKey="status"
        filterOptions={['Occupied', 'Vacant']}
        actionButton={
          <button
            onClick={() => { setEditingApartment(null); setIsAddModalOpen(true); }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl theme-accent-bg text-white font-bold text-xs shadow-md"
          >
            <Plus className="w-4 h-4" />
            Add Apartment
          </button>
        }
      />

      {/* CRUD Add/Edit Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title={editingApartment ? "Edit Apartment Record" : "Register New Apartment"}>
        <form onSubmit={handleSaveApartment} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Apartment ID</label>
              <input required name="id" defaultValue={editingApartment?.id || "E-101"} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Tower</label>
              <select name="tower" defaultValue={editingApartment?.tower || "Tower A"} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <option>Tower A</option>
                <option>Tower B</option>
                <option>Tower C</option>
                <option>Tower D</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Floor Level</label>
              <input required name="floor" defaultValue={editingApartment?.floor || "1st Floor"} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
            <div>
              <label className="block font-semibold mb-1">BHK Specification</label>
              <select name="bhk" defaultValue={editingApartment?.bhk || "3 BHK"} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>4 BHK Duplex</option>
                <option>Penthouse</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Sq Ft Area</label>
              <input required name="area" defaultValue={editingApartment?.area || "2,200 sq ft"} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Occupancy Status</label>
              <select name="status" defaultValue={editingApartment?.status || "Occupied"} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <option value="Occupied">Occupied</option>
                <option value="Vacant">Vacant</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Owner Name</label>
              <input required name="owner" defaultValue={editingApartment?.owner || "Marcus Vance"} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Tenant Name (or Self)</label>
              <input required name="tenant" defaultValue={editingApartment?.tenant || "Self"} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Assigned Parking Bay</label>
            <input required name="parking" defaultValue={editingApartment?.parking || "P-E01"} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
          </div>

          <button type="submit" className="w-full py-3 rounded-xl theme-accent-bg text-white font-bold">
            {editingApartment ? "Update Unit Details" : "Save Apartment Record"}
          </button>
        </form>
      </Modal>

    </div>
  );
};
