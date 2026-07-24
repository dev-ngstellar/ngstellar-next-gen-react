import React, { useState } from 'react';
import { X, CheckCircle2, Calculator, Zap, Phone } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/electricianData';

export const QuoteCalculatorModal = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [propertyType, setPropertyType] = useState('Home / Residential');
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-lg bg-[var(--bg-secondary)] border border-[var(--color-primary)]/40 rounded-3xl p-6 space-y-6 glass-panel relative animate-fade-in shadow-2xl">
        
        <button
          onClick={() => { onClose(false); setSubmitted(false); }}
          className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2 border-b border-[var(--border-color)] pb-3">
              <Calculator className="w-5 h-5 text-[var(--color-primary)]" />
              <h3 className="text-lg font-bold text-[var(--text-heading)]">Instant Service Quote Calculator</h3>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[var(--text-muted)]">Select Service Needed</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] p-3 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--color-primary)] font-medium"
              >
                {SERVICES.map(s => (
                  <option key={s.id} value={s.id}>{s.title} (Starting {s.startingPrice})</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[var(--text-muted)]">Property Type</label>
              <div className="grid grid-cols-2 gap-2">
                {['Home / Residential', 'Commercial Office', 'Industrial Facility', 'Emergency Repair'].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setPropertyType(type)}
                    className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      propertyType === type
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                        : 'border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-muted)]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[var(--text-muted)]">Your Full Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] px-3 py-2.5 rounded-xl border border-[var(--border-color)]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[var(--text-muted)]">Phone Number for Fast Dispatch</label>
              <input
                type="tel"
                required
                placeholder="(312) 555-0199"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] px-3 py-2.5 rounded-xl border border-[var(--border-color)]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[var(--color-primary)] text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity"
            >
              Get Free Instant Estimate & Schedule
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-heading)]">Estimate Received!</h3>
            <p className="text-xs text-[var(--text-muted)]">
              Thank you {name}. A Master Electrician will call you at <strong className="text-[var(--text-heading)]">{phone}</strong> within 10 minutes to confirm dispatch.
            </p>
            <a
              href={`tel:${COMPANY_INFO.emergencyPhone}`}
              className="px-6 py-2.5 rounded-xl bg-[var(--color-primary)] text-slate-950 text-xs font-bold inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Or Call Dispatch Now: {COMPANY_INFO.emergencyPhone}</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
