import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, QrCode, UserCheck, Truck, Car, CheckCircle2, AlertOctagon } from 'lucide-react';

export const SecurityGateConsole = () => {
  const [scannedResult, setScannedResult] = useState(null);
  const [sosActive, setSosActive] = useState(false);

  const handleSimulateQRScan = () => {
    setScannedResult({
      code: "QR-8901-A402",
      visitor: "Daniel Craig",
      host: "Sophia Sterling (A-402)",
      status: "VERIFIED VALID PASS",
      time: new Date().toLocaleTimeString()
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Gate Guard Control Console</h1>
            <p className="text-xs text-slate-400">Main Entrance Tower Terminal • Active Duty Shift</p>
          </div>
        </div>

        <button
          onClick={() => setSosActive(!sosActive)}
          className={`px-5 py-3 rounded-2xl font-extrabold text-xs flex items-center gap-2 shadow-xl transition ${
            sosActive ? 'bg-rose-600 text-white animate-pulse' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40 hover:bg-rose-600 hover:text-white'
          }`}
        >
          <AlertOctagon className="w-4 h-4" />
          {sosActive ? 'SOS BROADCAST ACTIVE' : 'BROADCAST EMERGENCY SOS'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* QR Scanner Touch Interface */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4 text-center">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Digital QR Pass Scanner</h3>
          
          <div className="h-64 rounded-2xl bg-slate-950 p-6 flex flex-col items-center justify-center border-2 border-dashed border-teal-500/40 relative overflow-hidden">
            <QrCode className="w-24 h-24 text-teal-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-400 mt-4">Align visitor smartphone QR pass within frame</span>
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-bounce top-1/2" />
          </div>

          <button
            onClick={handleSimulateQRScan}
            className="w-full py-3 rounded-2xl theme-accent-bg text-white font-bold text-xs shadow-lg"
          >
            Simulate Camera QR Scan
          </button>

          {scannedResult && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-left text-xs space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                {scannedResult.status}
              </div>
              <p>Visitor: <strong>{scannedResult.visitor}</strong></p>
              <p>Host: <strong>{scannedResult.host}</strong></p>
              <span className="text-[10px] text-slate-400 block pt-1">Verified at {scannedResult.time}</span>
            </div>
          )}
        </div>

        {/* Quick Check-in Form */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Manual Gate Entry Pass</h3>
          
          <form onSubmit={(e) => { e.preventDefault(); alert("Manual gate pass created & logged."); }} className="space-y-3 text-xs">
            <div>
              <label className="block font-semibold mb-1">Visitor Name</label>
              <input required placeholder="Walk-in Guest / Worker" className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold mb-1">Apartment Unit</label>
                <input required placeholder="B-204" className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Entry Type</label>
                <select className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                  <option>Guest Entry</option>
                  <option>Delivery Driver</option>
                  <option>Maintenance Worker</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full py-3 rounded-xl theme-accent-bg text-white font-bold">
              Grant Gate Entry
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
