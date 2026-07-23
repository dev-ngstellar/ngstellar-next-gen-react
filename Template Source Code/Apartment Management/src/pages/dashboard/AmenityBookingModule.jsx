import React, { useState } from 'react';
import { AMENITIES_LIST } from '../../data/mockData';
import { Calendar, Clock, CheckCircle2, Plus } from 'lucide-react';
import { Modal } from '../../components/ui/Modal';

export const AmenityBookingModule = () => {
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const [successMsg, setSuccessMsg] = useState(false);

  const activeBookings = [
    { id: "BKG-101", facility: "Grand Ball Pavilion & Lounge", resident: "Sophia Sterling (A-402)", date: "Aug 05, 2026", slot: "Evening (06:00 PM - 10:00 PM)", status: "Approved" },
    { id: "BKG-102", facility: "Private Dolby Atmos Cinema", resident: "Sarah Jenkins (B-204)", date: "Jul 28, 2026", slot: "Night (08:00 PM - 10:30 PM)", status: "Approved" },
    { id: "BKG-103", facility: "Championship Tennis Court", resident: "Dr. Elena Rostova (C-1201)", date: "Jul 25, 2026", slot: "Morning (07:00 AM - 08:30 AM)", status: "Approved" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Amenity Reservations & Slots</h1>
        <p className="text-xs text-slate-500">Book clubhouse facilities, tennis courts, infinity pool cabanas, and private cinema.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Facilities Grid */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Available Community Facilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AMENITIES_LIST.map((item) => (
              <div key={item.id} className="glass-card rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-xl" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.name}</h4>
                  <span className="text-[10px] text-slate-400 block">{item.hours}</span>
                </div>
                <button
                  onClick={() => { setSelectedAmenity(item); setSuccessMsg(false); }}
                  className="w-full py-2 rounded-xl theme-accent-bg text-white font-bold text-xs"
                >
                  Book Slot
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Live Booking Schedule Sidebar */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-4 h-4 theme-accent-text" />
            Approved Slot Bookings
          </h3>

          <div className="space-y-3">
            {activeBookings.map((bkg) => (
              <div key={bkg.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <strong className="block text-slate-900 dark:text-white">{bkg.facility}</strong>
                <span className="text-slate-500 block">Booked by: {bkg.resident}</span>
                <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                  <span>{bkg.date}</span>
                  <span className="font-bold theme-accent-text">{bkg.slot}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Modal isOpen={!!selectedAmenity} onClose={() => setSelectedAmenity(null)} title={`Reserve ${selectedAmenity?.name}`}>
        {successMsg ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full theme-accent-bg text-white flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-base">Booking Slot Approved!</h4>
            <p className="text-xs text-slate-500">Facility pass added to resident QR wallet.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSuccessMsg(true); }} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold mb-1">Reservation Date</label>
              <input required type="date" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Time Window</label>
              <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <option>Morning (08:00 AM - 10:00 AM)</option>
                <option>Afternoon (01:00 PM - 03:00 PM)</option>
                <option>Evening (06:00 PM - 09:00 PM)</option>
              </select>
            </div>
            <button type="submit" className="w-full py-3 rounded-xl theme-accent-bg text-white font-bold">
              Confirm Facility Booking
            </button>
          </form>
        )}
      </Modal>

    </div>
  );
};
