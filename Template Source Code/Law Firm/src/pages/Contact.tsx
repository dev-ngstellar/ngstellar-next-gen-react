import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { FAQS } from '../data/lawFirmData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, ChevronDown, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="w-full bg-[var(--color-bg)]">
      <PageBanner
        title="Contact Senior Legal Counsel"
        subtitle="Confidential inquiry channels for executive legal representation, crisis litigation, and corporate retainers."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      {/* Main Contact Grid */}
      <section className="py-24 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Direct Contact Info & Headquarters */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
                  Direct Access
                </span>
                <h2 className="font-serif text-4xl font-bold text-[var(--color-heading)] mt-2">
                  Chambers Headquarters
                </h2>
                <p className="text-sm text-[var(--color-muted)] mt-2">
                  Our offices are equipped with encrypted meeting suites for high-level confidential advisory.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#D4A34B]/10 text-[#D4A34B] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[var(--color-heading)]">New York Office</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">745 Fifth Avenue, 28th Floor, New York, NY 10151</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#D4A34B]/10 text-[#D4A34B] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[var(--color-heading)]">Telephone Communications</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">Main Switchboard: +1 (800) 555-7890</p>
                    <p className="text-xs text-[#D4A34B] font-semibold mt-0.5">24/7 Crisis Hotline: +1 (888) 999-VANCE</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#D4A34B]/10 text-[#D4A34B] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[var(--color-heading)]">Executive Dispatch</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">contact@vancestirling.law</p>
                    <p className="text-xs text-[var(--color-muted)]">litigation@vancestirling.law</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#D4A34B]/10 text-[#D4A34B] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[var(--color-heading)]">Operating Hours</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">Monday – Friday: 08:30 – 19:30 EST</p>
                    <p className="text-xs text-[var(--color-muted)]">Emergency Council: Available 24/7/365</p>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-4 text-amber-500">
                <AlertCircle className="w-6 h-6 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold uppercase tracking-wider">Urgent Legal Intervention Required?</p>
                  <p className="text-[var(--color-body)] mt-0.5">Contact our emergency response desk directly via WhatsApp or phone hotline.</p>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-luxury space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
                    Encrypted Inquiry
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[var(--color-heading)] mt-1">
                    Send a Confidential Message
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    All communications are protected under international Attorney-Client Privilege.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-[var(--color-heading)]">Inquiry Dispatched</h4>
                    <p className="text-sm text-[var(--color-muted)] max-w-md mx-auto">
                      Thank you. A senior legal associate from Vance & Sterling will review your message and reach out within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Lord / Lady / Executive Name"
                          className="w-full px-4 py-3 text-xs bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)] mb-1.5">
                          Corporate / Executive Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="executive@firm.com"
                          className="w-full px-4 py-3 text-xs bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)] mb-1.5">
                          Telephone Contact *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 text-xs bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)] mb-1.5">
                          Inquiry Sector *
                        </label>
                        <select className="w-full px-4 py-3 text-xs bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B]">
                          <option>Corporate M&A & Strategy</option>
                          <option>White Collar & Trial Defense</option>
                          <option>Commercial Property & Real Estate</option>
                          <option>Global Immigration & Mobility</option>
                          <option>Taxation & Sovereign Advisory</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)] mb-1.5">
                        Confidential Briefing Note *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Please detail your legal requirements or case summary..."
                        className="w-full px-4 py-3 text-xs bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-[var(--color-heading)] focus:outline-none focus:border-[#D4A34B] resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F3E5AB] via-[#D4A34B] to-[#9A661F] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Transmit Legal Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Embed Mock */}
      <section className="h-96 w-full relative bg-slate-900 border-b border-[var(--color-border)] overflow-hidden">
        <iframe
          title="Law Firm Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0526010079237!2d-73.97449552342845!3d40.76307373462142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97bf1dbbd%3A0x6b9079f824b0f946!2s745%205th%20Ave%2C%20New%20York%2C%20NY%2010151!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) opacity(0.85)' }}
          allowFullScreen
          loading="lazy"
        />
        <div className="absolute top-6 left-6 p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-luxury max-w-xs">
          <p className="font-serif font-bold text-sm text-[var(--color-heading)]">Vance & Sterling New York</p>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">745 Fifth Avenue, Plaza District</p>
        </div>
      </section>
    </div>
  );
};
