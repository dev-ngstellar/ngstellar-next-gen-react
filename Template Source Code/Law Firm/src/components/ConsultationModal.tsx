import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, Phone, Scale, Send, CheckCircle2 } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/lawFirmData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'corporate-law',
    date: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-luxury overflow-hidden z-10 my-8"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[var(--color-primary-dark)] via-[#0F1D30] to-[var(--color-primary-dark)] p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/50 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[#D4A34B]/20 text-[#D4A34B] border border-[#D4A34B]/30">
                  <Scale className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-[#D4A34B] uppercase">
                  Confidential Representation
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Book a Senior Legal Consultation
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Direct access to our senior partners. Fully confidential preliminary assessment.
              </p>
            </div>

            {/* Form Content */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[var(--color-heading)]">
                    Consultation Request Confirmed
                  </h4>
                  <p className="text-sm text-[var(--color-body)] max-w-md">
                    Thank you, <span className="font-semibold text-[var(--color-heading)]">{formData.name}</span>. A legal associate from Vance & Sterling will contact you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)] mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 w-4 h-4 text-[var(--color-muted)]" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Eleanor Vance"
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)] mb-1.5">
                        Executive Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3 w-4 h-4 text-[var(--color-muted)]" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="vance@corporation.com"
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)] mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3 w-4 h-4 text-[var(--color-muted)]" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)] mb-1.5">
                        Practice Area *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B]"
                      >
                        {PRACTICE_AREAS.map((area) => (
                          <option key={area.id} value={area.id}>
                            {area.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)] mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-[var(--color-muted)]" />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)] mb-1.5">
                      Case Brief & Matter Summary
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Briefly describe your legal inquiry..."
                      className="w-full px-4 py-2.5 text-sm bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F3E5AB] via-[#D4A34B] to-[#9A661F] text-slate-950 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow hover:scale-[1.01] active:scale-95 transition-all"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Confirm Consultation Request</span>
                    </button>
                    <p className="text-[11px] text-[var(--color-muted)] text-center mt-2.5">
                      🔒 Secured under Attorney-Client Privilege. Strict confidentiality guaranteed.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
