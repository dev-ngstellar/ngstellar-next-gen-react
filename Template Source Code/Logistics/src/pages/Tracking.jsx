import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Package, Clock, CheckCircle2, MapPin, Truck, Plane, Ship, 
  FileText, Download, Printer, Bell, ShieldCheck, Thermometer, AlertCircle, ArrowRight 
} from 'lucide-react';
import { getShipmentDetails } from '../data/trackingData';

export default function Tracking() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialId = searchParams.get('id') || 'CF-9842-X7';
  
  const [waybillInput, setWaybillInput] = useState(initialId);
  const [activeWaybill, setActiveWaybill] = useState(initialId);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const queryId = searchParams.get('id');
    if (queryId) {
      setWaybillInput(queryId);
      setActiveWaybill(queryId);
    }
  }, [searchParams]);

  const shipment = getShipmentDetails(activeWaybill);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!waybillInput.trim()) return;
    setActiveWaybill(waybillInput.trim());
    setSearchParams({ id: waybillInput.trim() });
  };

  const handleSelectDemo = (demoId) => {
    setWaybillInput(demoId);
    setActiveWaybill(demoId);
    setSearchParams({ id: demoId });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="space-y-16 pt-28 pb-20 overflow-hidden">
      {/* Toast Notification Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-4 z-50 p-4 rounded-xl bg-emerald-500 text-white font-bold text-xs shadow-glow flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Search Section */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider">
          <Package className="w-3.5 h-3.5" />
          <span>Real-Time Telemetry Portal</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
          Live Shipment <span className="text-primary-gradient">Tracking Engine</span>
        </h1>
        <p className="text-sm text-slate-300">
          Enter your 10-digit CargoFlow waybill, bill of lading, or container number.
        </p>

        {/* Tracking Search Input Card */}
        <form onSubmit={handleSearchSubmit} className="glass-panel p-2.5 rounded-2xl border border-surface-border flex items-center gap-2 shadow-2xl">
          <div className="pl-3 text-brand-500">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="e.g. CF-9842-X7"
            value={waybillInput}
            onChange={(e) => setWaybillInput(e.target.value)}
            className="flex-1 bg-transparent border-none text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-0 px-2 font-mono uppercase font-bold"
          />
          <button
            type="submit"
            className="px-6 py-3.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition-all shadow-glow flex items-center gap-1.5 shrink-0"
          >
            <span>Track Freight</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Preset Sample Waybills */}
        <div className="flex flex-wrap justify-center items-center gap-2 pt-2 text-xs">
          <span className="text-slate-400">Quick Test Waybills:</span>
          <button
            onClick={() => handleSelectDemo('CF-9842-X7')}
            className={`px-3 py-1 rounded-lg border font-mono font-bold transition-all ${
              activeWaybill === 'CF-9842-X7' ? 'bg-brand-500 text-white border-brand-500' : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
            }`}
          >
            CF-9842-X7 (Air Express)
          </button>
          <button
            onClick={() => handleSelectDemo('CF-7412-M9')}
            className={`px-3 py-1 rounded-lg border font-mono font-bold transition-all ${
              activeWaybill === 'CF-7412-M9' ? 'bg-brand-500 text-white border-brand-500' : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
            }`}
          >
            CF-7412-M9 (Ocean Container)
          </button>
          <button
            onClick={() => handleSelectDemo('CF-3301-R2')}
            className={`px-3 py-1 rounded-lg border font-mono font-bold transition-all ${
              activeWaybill === 'CF-3301-R2' ? 'bg-brand-500 text-white border-brand-500' : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
            }`}
          >
            CF-3301-R2 (Cold Chain)
          </button>
        </div>
      </section>

      {/* Main Tracking Details Dashboard */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-surface-border space-y-8">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-brand-500 uppercase tracking-widest">{shipment.serviceType}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase">
                  {shipment.currentStatus}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
                Waybill #{shipment.trackingNumber}
              </h2>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => showToast(`Commercial Invoice for ${shipment.trackingNumber} downloaded!`)}
                className="px-3.5 py-2 rounded-xl bg-surface-bg border border-surface-border text-xs font-semibold text-slate-200 hover:border-brand-500 transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-brand-500" />
                <span>Invoice PDF</span>
              </button>
              <button
                onClick={() => showToast('SMS & Email Telemetry Alerts enabled!')}
                className="px-3.5 py-2 rounded-xl bg-surface-bg border border-surface-border text-xs font-semibold text-slate-200 hover:border-brand-500 transition-all flex items-center gap-1.5"
              >
                <Bell className="w-3.5 h-3.5 text-brand-500" />
                <span>Enable Alerts</span>
              </button>
            </div>
          </div>

          {/* Route Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-surface-bg/80 border border-surface-border">
              <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">Origin Point</span>
              <div className="text-sm font-bold text-white">{shipment.origin}</div>
              <div className="text-xs text-slate-400 mt-1">Shipper: {shipment.sender}</div>
            </div>

            <div className="p-5 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex flex-col justify-center text-center">
              <span className="text-[10px] uppercase font-semibold text-brand-500 block mb-1">Estimated Delivery</span>
              <div className="text-lg font-extrabold font-mono text-white">{shipment.estimatedDelivery}</div>
              <div className="text-[11px] text-emerald-400 font-semibold mt-1">On Schedule (Progress {shipment.progressPercent}%)</div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-bg/80 border border-surface-border">
              <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">Destination Point</span>
              <div className="text-sm font-bold text-white">{shipment.destination}</div>
              <div className="text-xs text-slate-400 mt-1">Consignee: {shipment.recipient}</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-400 font-mono">
              <span>Origin Handshake</span>
              <span>In Transit</span>
              <span>Final Delivery</span>
            </div>
            <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden p-0.5 border border-white/5">
              <div
                style={{ width: `${shipment.progressPercent}%` }}
                className="bg-gradient-to-r from-brand-500 to-cyan-400 h-full rounded-full transition-all duration-700 shadow-glow"
              />
            </div>
          </div>

          {/* Timeline Checkpoints */}
          <div className="space-y-6 pt-4">
            <h3 className="text-lg font-bold font-heading text-white">Tracking Audit Trail</h3>
            <div className="space-y-4">
              {shipment.timeline.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 relative">
                  {/* Icon Indicator */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                    step.current
                      ? 'bg-brand-500 text-white border-brand-400 ring-4 ring-brand-500/20'
                      : step.completed
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                      : 'bg-white/5 text-slate-500 border-white/10'
                  }`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>

                  {/* Step Content */}
                  <div className={`flex-1 p-4 rounded-xl border ${step.current ? 'bg-brand-500/10 border-brand-500/40' : 'bg-surface-bg/50 border-surface-border'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{step.status}</span>
                        {step.current && <span className="px-2 py-0.5 text-[9px] font-bold rounded bg-brand-500 text-white">CURRENT LOCATION</span>}
                      </div>
                      <div className="text-xs text-slate-400 font-mono">{step.timestamp}</div>
                    </div>
                    <div className="text-xs text-slate-300 mt-1 font-semibold">{step.location}</div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specs & Courier Details Grid */}
          <div className="pt-6 border-t border-surface-border space-y-4">
            <h3 className="text-lg font-bold font-heading text-white">Shipment Specifications</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block text-[10px] uppercase">Gross Weight</span>
                <span className="font-bold text-white font-mono">{shipment.weight}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block text-[10px] uppercase">Dimensions</span>
                <span className="font-bold text-white font-mono">{shipment.dimensions}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block text-[10px] uppercase">Thermal Status</span>
                <span className="font-bold text-emerald-400 font-mono">{shipment.temperature}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block text-[10px] uppercase">Carrier Unit</span>
                <span className="font-bold text-brand-500 font-mono">{shipment.courier.split(' ')[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
