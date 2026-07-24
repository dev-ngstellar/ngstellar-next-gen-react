import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/electricianData';

export const Contact = ({ onOpenQuoteModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: 'Emergency Repair', details: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold">
          24/7 Service Dispatch
        </span>
        <h1 className="text-4xl font-extrabold text-[var(--text-heading)] font-mono">
          Contact Our Master Electricians
        </h1>
        <p className="text-sm text-[var(--text-muted)]">
          Need an immediate emergency fix or scheduling a commercial project? We are ready to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Form */}
        <div className="glass-card p-8 rounded-3xl space-y-6 border border-[var(--border-color)]">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--text-heading)] font-mono">Dispatch Service Request</h3>

              <div className="space-y-1">
                <label className="text-xs text-[var(--text-muted)]">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Alexander Wright"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] px-4 py-3 rounded-xl border border-[var(--border-color)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-[var(--text-muted)]">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="(312) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] px-4 py-3 rounded-xl border border-[var(--border-color)]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[var(--text-muted)]">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@vanguard.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] px-4 py-3 rounded-xl border border-[var(--border-color)]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-[var(--text-muted)]">Service Required</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] px-4 py-3 rounded-xl border border-[var(--border-color)]"
                >
                  <option>Emergency Repair (Tripped Breakers / Burning Smell)</option>
                  <option>Residential Panel Upgrade (200A)</option>
                  <option>EV Fast Charger Installation</option>
                  <option>Commercial Power Engineering</option>
                  <option>Solar & Battery Wiring</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-[var(--text-muted)]">Describe Issue / Scope</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Provide property location, urgency, or specific breaker details..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] p-4 rounded-xl border border-[var(--border-color)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[var(--color-primary)] text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Service Request</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-[var(--text-heading)] font-mono">Dispatch Confirmed!</h3>
              <p className="text-xs text-[var(--text-muted)]">
                Our emergency coordinator will call <strong className="text-[var(--text-heading)]">{formData.phone}</strong> within 10 minutes.
              </p>
            </div>
          )}
        </div>

        {/* HQ Details & Direct Hotline */}
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-3xl space-y-4 border border-[var(--border-color)]">
            <h3 className="text-lg font-bold text-[var(--text-heading)] font-mono">Headquarters & Hotline</h3>
            <div className="space-y-3 text-xs text-[var(--text-body)]">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3 font-mono font-bold text-[var(--text-heading)]">
                <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Office: {COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3 font-mono font-bold text-[var(--color-primary)]">
                <Phone className="w-4 h-4 text-red-500 animate-bounce" />
                <span>24/7 Hotline: {COMPANY_INFO.emergencyPhone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/18005558658"
            target="_blank"
            rel="noreferrer"
            className="w-full p-4 rounded-3xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-3 shadow-lg hover:bg-emerald-500 transition-colors font-mono"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat On WhatsApp Dispatch Line</span>
          </a>
        </div>

      </div>

    </div>
  );
};
