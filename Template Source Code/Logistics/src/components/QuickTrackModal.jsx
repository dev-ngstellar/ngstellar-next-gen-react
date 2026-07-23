import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Package, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function QuickTrackModal({ isOpen, onClose }) {
  const [trackingInput, setTrackingInput] = useState('');
  const navigate = useNavigate();

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackingInput.trim()) return;
    onClose();
    navigate(`/tracking?id=${encodeURIComponent(trackingInput.trim())}`);
  };

  const handlePresetSelect = (presetId) => {
    onClose();
    navigate(`/tracking?id=${presetId}`);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl glass-panel bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-8 shadow-glow-lg z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-500">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-white">Live Shipment Tracking</h3>
              <p className="text-xs text-slate-400">Track air, ocean, or overland freight in real-time</p>
            </div>
          </div>

          <form onSubmit={handleTrackSubmit} className="mt-6">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Enter Waybill / Tracking Number
            </label>
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. CF-9842-X7"
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                className="w-full pl-12 pr-32 py-3.5 bg-surface-bg/80 border border-surface-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm transition-all"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 shadow-md"
              >
                Track Now
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Quick Demo Preset Waybills */}
          <div className="mt-6 pt-5 border-t border-surface-border">
            <p className="text-xs font-medium text-slate-400 mb-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-500" /> Or try demo tracking numbers:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => handlePresetSelect('CF-9842-X7')}
                className="p-2.5 bg-white/5 hover:bg-brand-500/15 border border-white/10 hover:border-brand-500/40 rounded-xl text-left transition-all group"
              >
                <div className="text-xs font-bold text-slate-200 group-hover:text-brand-500 transition-colors">CF-9842-X7</div>
                <div className="text-[10px] text-slate-400">Air Priority • In Transit</div>
              </button>

              <button
                onClick={() => handlePresetSelect('CF-7412-M9')}
                className="p-2.5 bg-white/5 hover:bg-brand-500/15 border border-white/10 hover:border-brand-500/40 rounded-xl text-left transition-all group"
              >
                <div className="text-xs font-bold text-slate-200 group-hover:text-brand-500 transition-colors">CF-7412-M9</div>
                <div className="text-[10px] text-slate-400">Ocean Freight • Out For Delivery</div>
              </button>

              <button
                onClick={() => handlePresetSelect('CF-3301-R2')}
                className="p-2.5 bg-white/5 hover:bg-brand-500/15 border border-white/10 hover:border-brand-500/40 rounded-xl text-left transition-all group"
              >
                <div className="text-xs font-bold text-slate-200 group-hover:text-brand-500 transition-colors">CF-3301-R2</div>
                <div className="text-[10px] text-slate-400">Cold Chain • Delivered</div>
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              256-Bit Encrypted Telemetry Ledger
            </span>
            <span>CargoFlow v3.4 Engine</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
