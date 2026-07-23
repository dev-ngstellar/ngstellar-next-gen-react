import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Plane, Ship, Truck, Train, Calculator } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    freightType: 'air',
    origin: '',
    destination: '',
    weight: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl glass-panel bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-8 shadow-glow-lg z-10 my-8"
        >
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>
              <h3 className="text-2xl font-bold font-heading text-white mb-2">Quote Request Sent!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Thank you, <span className="text-brand-500 font-semibold">{formData.name}</span>. Our logistics dispatch team is processing your request for <span className="uppercase text-brand-500">{formData.origin} to {formData.destination}</span>. You will receive an official rate breakdown in your email (<span className="text-slate-200">{formData.email}</span>) within 15 minutes.
              </p>
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm rounded-xl transition-all shadow-glow"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-500">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">Request Freight Quote</h3>
                  <p className="text-xs text-slate-400">Get guaranteed competitive shipping rates & transit schedules</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Freight Mode Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Select Mode of Transport
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'air', label: 'Air Express', icon: Plane },
                      { id: 'ocean', label: 'Ocean Liner', icon: Ship },
                      { id: 'road', label: 'Overland Road', icon: Truck },
                      { id: 'rail', label: 'Rail Intermodal', icon: Train }
                    ].map((mode) => {
                      const IconComp = mode.icon;
                      const isSelected = formData.freightType === mode.id;
                      return (
                        <button
                          key={mode.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, freightType: mode.id })}
                          className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-semibold ${
                            isSelected
                              ? 'bg-brand-500/20 border-brand-500 text-white shadow-glow'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <IconComp className={`w-5 h-5 ${isSelected ? 'text-brand-500' : 'text-slate-400'}`} />
                          <span>{mode.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Origin City / Port</label>
                    <input
                      type="text"
                      name="origin"
                      required
                      placeholder="e.g. Shanghai (PVG)"
                      value={formData.origin}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Destination City / Port</label>
                    <input
                      type="text"
                      name="destination"
                      required
                      placeholder="e.g. Rotterdam (NLD)"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Estimated Weight (kg / lbs)</label>
                    <input
                      type="text"
                      name="weight"
                      required
                      placeholder="e.g. 1,500 kg"
                      value={formData.weight}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Corporate Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Cargo Details / Requirements (Optional)</label>
                  <textarea
                    name="message"
                    rows="2"
                    placeholder="Hazardous materials, refrigeration requirements, container size..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-glow text-sm"
                >
                  <Send className="w-4 h-4" />
                  Generate Instant Freight Quote
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
