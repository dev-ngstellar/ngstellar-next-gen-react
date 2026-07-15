import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investment: '$1M - $5M',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-[#F1F5F9]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text Info */}
          <div className="lg:col-span-5">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-[0.25em] block mb-3 font-sans">
              Connect With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-syne mb-6">
              Executive Consultation
            </h2>
            <p className="text-[#64748B] font-light leading-relaxed mb-8">
              Discuss prospective partnerships, capital integrations, or custom architectural megastructures with our executive board of directors.
            </p>

            <div className="flex items-center gap-4 bg-white border border-[#E2E8F0] p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A]">Secure Investor Integration</h4>
                <p className="text-xs text-[#64748B] font-light mt-0.5">
                  All discussions and submitted credentials remain fully confidential under secure board-level NDA agreements.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] shadow-sm rounded-3xl p-8 md:p-10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs uppercase font-bold text-[#64748B] tracking-wider block mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#F59E0B] focus:outline-none text-[#0F172A] font-light"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase font-bold text-[#64748B] tracking-wider block mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#F59E0B] focus:outline-none text-[#0F172A] font-light"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs uppercase font-bold text-[#64748B] tracking-wider block mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#F59E0B] focus:outline-none text-[#0F172A] font-light"
                        placeholder="Apex Holdings"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase font-bold text-[#64748B] tracking-wider block mb-2">
                        Capital Integration Size
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#F59E0B] focus:outline-none text-[#0F172A] font-light bg-white"
                        value={formData.investment}
                        onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                      >
                        <option>$1M - $5M</option>
                        <option>$5M - $25M</option>
                        <option>$25M - $100M</option>
                        <option>$100M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-bold text-[#64748B] tracking-wider block mb-2">
                      Brief Partnership Objective
                    </label>
                    <textarea
                      rows="4"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#F59E0B] focus:outline-none text-[#0F172A] font-light resize-none"
                      placeholder="Outline your investment target or structural project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full !bg-[#F59E0B] !text-[#0F172A] !border-[#F59E0B] font-bold py-3.5 flex items-center justify-center gap-2"
                  >
                    Submit Credentials
                    <Send size={16} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-6">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] font-syne mb-3">
                    Briefing Requested Successfully
                  </h3>
                  <p className="text-[#64748B] font-light max-w-md mb-8">
                    Thank you, <span className="font-bold text-[#0F172A]">{formData.name}</span>. An executive representative from the board will verify your company credentials and contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', investment: '$1M - $5M', message: '' }); }}
                    className="btn btn-secondary !border-[#E2E8F0] !text-[#0F172A]"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
