import React, { useState } from 'react';
import { PARCELS_DATA } from '../../data/mockData';
import { Package, Plus, CheckCircle2, ShieldCheck, QrCode } from 'lucide-react';
import { Modal } from '../../components/ui/Modal';

export const ParcelManagement = () => {
  const [parcels, setParcels] = useState(PARCELS_DATA);
  const [newParcelModal, setNewParcelModal] = useState(false);

  const handleLogParcel = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newP = {
      id: `PCL-${Math.floor(7000 + Math.random() * 900)}`,
      recipient: formData.get('recipient'),
      carrier: formData.get('carrier'),
      trackingNo: formData.get('trackingNo'),
      arrivedAt: 'Just Now',
      status: 'Notified / Ready',
      otp: Math.floor(1000 + Math.random() * 9000).toString(),
      photo: null
    };
    setParcels([newP, ...parcels]);
    setNewParcelModal(false);
  };

  const handleVerifyOTP = (pclId) => {
    setParcels(prev => prev.map(p => p.id === pclId ? { ...p, status: 'Picked Up' } : p));
    alert("OTP Verified successfully! Parcel marked as Picked Up.");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Parcel & Delivery Tracker</h1>
          <p className="text-xs text-slate-500">Log incoming Amazon, FedEx, and food deliveries with OTP verification.</p>
        </div>

        <button
          onClick={() => setNewParcelModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl theme-accent-bg text-white font-bold text-xs shadow-md"
        >
          <Plus className="w-4 h-4" />
          Log Incoming Package
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {parcels.map((pcl) => (
          <div key={pcl.id} className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-slate-400">{pcl.id}</span>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                pcl.status === 'Picked Up' ? 'bg-slate-200 dark:bg-slate-800 text-slate-500' : 'bg-emerald-500/10 text-emerald-600'
              }`}>
                {pcl.status}
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{pcl.recipient}</h3>
              <p className="text-xs text-slate-500 mt-0.5">Carrier: {pcl.carrier} ({pcl.trackingNo})</p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <span>Pickup OTP Code:</span>
              <strong className="font-mono text-base theme-accent-text">{pcl.otp}</strong>
            </div>

            {pcl.status !== 'Picked Up' && (
              <button
                onClick={() => handleVerifyOTP(pcl.id)}
                className="w-full py-2.5 rounded-xl theme-accent-bg text-white font-bold text-xs shadow-md"
              >
                Verify Resident OTP & Release
              </button>
            )}
          </div>
        ))}
      </div>

      <Modal isOpen={newParcelModal} onClose={() => setNewParcelModal(false)} title="Log Incoming Delivery Package">
        <form onSubmit={handleLogParcel} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold mb-1">Recipient Resident Unit</label>
            <input required name="recipient" placeholder="Sophia Sterling (A-402)" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Courier Carrier</label>
              <select name="carrier" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <option>Amazon Prime</option>
                <option>FedEx Express</option>
                <option>DHL International</option>
                <option>DoorDash / Food Delivery</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Tracking Number</label>
              <input required name="trackingNo" placeholder="TBA901234901" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl theme-accent-bg text-white font-bold">
            Send Pickup SMS & Push Notification
          </button>
        </form>
      </Modal>
    </div>
  );
};
