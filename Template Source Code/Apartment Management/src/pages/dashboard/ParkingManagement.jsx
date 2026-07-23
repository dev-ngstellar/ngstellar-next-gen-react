import React, { useState } from 'react';
import { PARKING_SLOTS } from '../../data/mockData';
import { Car, Zap, QrCode, CheckCircle2, Shield } from 'lucide-react';
import { QRPassModal } from '../../components/ui/QRPassModal';

export const ParkingManagement = () => {
  const [selectedPass, setSelectedPass] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Basement & Visitor Parking Grid</h1>
          <p className="text-xs text-slate-500">Allocated owner slots, visitor bays, EV charging ports, and RFID vehicle pass stickers.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PARKING_SLOTS.map((slot) => (
          <div
            key={slot.id}
            className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 theme-accent-text" />
                <h3 className="text-lg font-black font-mono text-slate-900 dark:text-white">{slot.id}</h3>
              </div>
              {slot.evCharger && (
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600">
                  <Zap className="w-3 h-3 fill-emerald-500" />
                  EV Fast Charger
                </span>
              )}
            </div>

            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex justify-between">
                <span>Location:</span>
                <strong>{slot.level}</strong>
              </div>
              <div className="flex justify-between">
                <span>Assigned To:</span>
                <strong className="theme-accent-text">{slot.assignedTo}</strong>
              </div>
              <div className="flex justify-between">
                <span>Vehicle:</span>
                <strong className="font-mono">{slot.vehicle}</strong>
              </div>
            </div>

            <button
              onClick={() => setSelectedPass({ id: `STK-${slot.id}`, visitorName: slot.assignedTo, hostApartment: slot.id, vehicleNo: slot.vehicle, qrCode: `RFID-${slot.id}-2026` })}
              className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center justify-center gap-2"
            >
              <QrCode className="w-3.5 h-3.5" />
              Generate RFID Parking Sticker QR
            </button>
          </div>
        ))}
      </div>

      <QRPassModal
        isOpen={!!selectedPass}
        onClose={() => setSelectedPass(null)}
        passData={selectedPass}
      />
    </div>
  );
};
