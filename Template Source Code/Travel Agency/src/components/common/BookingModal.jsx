import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Calendar, Users, Shield, Sparkles, CreditCard, ArrowRight } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, selectedPackage }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    guests: 2,
    specialRequests: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const pkgTitle = selectedPackage ? selectedPackage.title : 'Custom Luxury Expedition';
  const unitPrice = selectedPackage ? (selectedPackage.discountPrice || selectedPackage.price) : 3490;
  const totalPrice = unitPrice * formData.guests;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Dialog Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/20 dark:border-white/10 z-10 bg-surface text-text-main my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full glass-panel hover:bg-primary/20 text-text-muted hover:text-text-bright transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-2xl font-black text-text-bright">Expedition Reserved!</h3>
              <p className="text-text-muted text-sm max-w-md mx-auto">
                Thank you, <span className="text-primary font-bold">{formData.name}</span>. Your VIP Travel Concierge will contact you within 2 hours with complete itinerary confirmation.
              </p>
              <div className="p-4 rounded-2xl bg-surface border border-border/80 text-left max-w-md mx-auto space-y-1 text-xs text-text-muted">
                <p><strong className="text-text-bright">Booking Ref:</strong> #VOY-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p><strong className="text-text-bright">Package:</strong> {pkgTitle}</p>
                <p><strong className="text-text-bright">Estimated Total:</strong> ${totalPrice.toLocaleString()} USD</p>
              </div>
              <button
                onClick={handleReset}
                className="mt-6 px-8 py-3 rounded-2xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all"
              >
                Return to Exploration
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Header */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-primary tracking-widest uppercase flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> VIP Reservation Atelier
                </span>
                <h3 className="font-heading text-2xl font-bold text-text-bright">{pkgTitle}</h3>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center gap-2 pb-4 border-b border-border/60">
                <div className={`flex-1 h-1.5 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-border'}`} />
                <div className={`flex-1 h-1.5 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-border'}`} />
              </div>

              {step === 1 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-muted">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sir Harrison Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-muted">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="harrison@vance-holdings.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-muted">Phone Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-muted">Preferred Travel Date *</label>
                      <input
                        type="date"
                        required
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (formData.name && formData.email && formData.phone) setStep(2);
                    }}
                    className="w-full py-3.5 rounded-2xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all mt-4"
                  >
                    <span>Continue to Customization</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-muted">Number of Guests</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright focus:outline-none focus:border-primary cursor-pointer"
                      >
                        <option value={1}>1 Guest (Solo)</option>
                        <option value={2}>2 Guests (Couple)</option>
                        <option value={4}>4 Guests (Family)</option>
                        <option value={6}>6+ Guests (VIP Group)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-text-muted">Dietary or Special Requests</label>
                      <input
                        type="text"
                        placeholder="e.g., Vegan, Private Seaplane, Champagne"
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Price Summary Breakdown */}
                  <div className="p-4 rounded-2xl bg-background border border-border/80 space-y-2 text-xs">
                    <div className="flex justify-between text-text-muted">
                      <span>Rate per person:</span>
                      <span className="font-semibold text-text-bright">${unitPrice.toLocaleString()} USD</span>
                    </div>
                    <div className="flex justify-between text-text-muted">
                      <span>Travelers:</span>
                      <span className="font-semibold text-text-bright">{formData.guests}</span>
                    </div>
                    <div className="flex justify-between text-text-muted">
                      <span>VIP Concierge & Taxes:</span>
                      <span className="font-semibold text-emerald-400">Included</span>
                    </div>
                    <div className="pt-2 border-t border-border flex justify-between text-sm font-bold text-text-bright">
                      <span>Total Estimated Cost:</span>
                      <span className="text-primary text-base font-extrabold">${totalPrice.toLocaleString()} USD</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3.5 rounded-2xl glass-panel text-text-main font-semibold text-sm hover:bg-surface transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-hover text-white font-bold text-sm shadow-xl shadow-primary/30 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Confirm & Lock Rate</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-text-muted border-t border-border/40">
                <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-primary" /> 100% Refundable Deposit</span>
                <span>•</span>
                <span>Zero Booking Fees</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
