import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Clock, 
  ShieldCheck, Globe, Building2, Headphones, AlertTriangle 
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [activeBranch, setActiveBranch] = useState('rotterdam');

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Air Freight',
    origin: '',
    destination: '',
    weight: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const branches = [
    {
      id: 'rotterdam',
      city: 'Rotterdam (HQ)',
      country: 'Netherlands',
      address: 'Port Gateway Tower 12, 3011 WN Rotterdam',
      phone: '+31 (0)10 400 8820',
      email: 'rotterdam@cargoflow.com'
    },
    {
      id: 'shanghai',
      city: 'Shanghai',
      country: 'China',
      address: 'Pudong Logistics Zone, 201207 Shanghai',
      phone: '+86 21 6888 9910',
      email: 'shanghai@cargoflow.com'
    },
    {
      id: 'singapore',
      city: 'Singapore',
      country: 'Singapore',
      address: '7 Airline Road, Changi Air Cargo Complex',
      phone: '+65 6744 1100',
      email: 'singapore@cargoflow.com'
    },
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'UAE',
      address: 'Jebel Ali Free Zone, South Building 4',
      phone: '+971 4 881 2233',
      email: 'dubai@cargoflow.com'
    },
    {
      id: 'newyork',
      city: 'New York',
      country: 'USA',
      address: 'JFK Air Cargo Building 75, NY 11430',
      phone: '+1 (718) 553-9000',
      email: 'newyork@cargoflow.com'
    }
  ];

  const currentBranch = branches.find((b) => b.id === activeBranch) || branches[0];

  return (
    <div className="space-y-24 pt-28 pb-20 overflow-hidden">
      {/* Luxury Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider">
          <Headphones className="w-3.5 h-3.5" />
          <span>24/7 Global Dispatch & Advisory</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white max-w-4xl mx-auto leading-tight">
          Connect With Our <span className="text-primary-gradient">Logistics Desk.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Request a customized freight quote, inquire about air/ocean space reservations, or reach our 24/7 emergency dispatch team.
        </p>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-surface-border text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-500 flex items-center justify-center mx-auto">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase">Global Operations Phone</div>
            <div className="text-sm font-bold text-white font-mono">+1 (800) 492-7463</div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-surface-border text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-500 flex items-center justify-center mx-auto">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase">Official Freight Email</div>
            <div className="text-sm font-bold text-white font-mono">quotes@cargoflow.com</div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-surface-border text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-500 flex items-center justify-center mx-auto">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase">WhatsApp Business</div>
            <div className="text-sm font-bold text-white font-mono">+31 6 8920 1144</div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-surface-border text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-500 flex items-center justify-center mx-auto">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase">Operational Hours</div>
            <div className="text-sm font-bold text-white font-mono">24/7 / 365 Days</div>
          </div>
        </div>
      </section>

      {/* Main Quote & Inquiry Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-surface-border grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Side */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-heading text-white">Freight Quote & Business Inquiry</h2>
              <p className="text-xs text-slate-400 mt-1">Fill in cargo specs for a response within 15 minutes.</p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-xs text-slate-300">
                  Our regional freight control desk will email your official quote to <span className="text-brand-500 font-semibold">{form.email}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-brand-500 text-white font-bold text-xs rounded-xl"
                >
                  Submit Another Quote
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-xs focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Acme Global Inc"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-xs focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@acme.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-xs focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-xs focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Service Type</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-xs focus:outline-none focus:border-brand-500"
                    >
                      <option value="Air Freight">Air Freight</option>
                      <option value="Ocean Freight">Ocean Freight</option>
                      <option value="Road Trucking">Road Trucking</option>
                      <option value="Cold Chain">Cold Chain Pharma</option>
                      <option value="Warehousing">Smart Warehousing</option>
                      <option value="Customs">Customs Brokerage</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Origin City/Port</label>
                    <input
                      type="text"
                      name="origin"
                      required
                      placeholder="Shanghai (PVG)"
                      value={form.origin}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-xs focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Destination City/Port</label>
                    <input
                      type="text"
                      name="destination"
                      required
                      placeholder="Rotterdam (NLD)"
                      value={form.destination}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-xs focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Message / Cargo Specifications</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Provide details regarding cargo dimensions, hazardous material class, or required pickup dates..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-surface-bg border border-surface-border rounded-xl text-white text-xs focus:outline-none focus:border-brand-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl shadow-glow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Freight Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Global Branches & Map Side */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-white">Global Offices Directory</h3>
              <p className="text-xs text-slate-400 mt-1">Select a gateway office for location details.</p>
            </div>

            {/* Branch Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {branches.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBranch(b.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeBranch === b.id
                      ? 'bg-brand-500 text-white'
                      : 'bg-surface-bg border border-surface-border text-slate-400 hover:text-white'
                  }`}
                >
                  {b.city.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Branch Details Box */}
            <div className="p-5 rounded-2xl bg-surface-bg border border-surface-border space-y-3">
              <div className="text-base font-bold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-500" />
                <span>{currentBranch.city}, {currentBranch.country}</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                  <span>{currentBranch.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="font-mono">{currentBranch.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="font-mono text-brand-500">{currentBranch.email}</span>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Location Map Widget */}
            <div className="h-48 rounded-2xl bg-slate-950 border border-surface-border relative overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-0 opacity-30 mesh-grid" />
              <div className="text-center z-10 space-y-2">
                <MapPin className="w-8 h-8 text-brand-500 mx-auto animate-bounce" />
                <div className="text-xs font-bold text-white">{currentBranch.city} Terminal Center</div>
                <div className="text-[10px] text-slate-400 font-mono">GPS: 51.9244° N, 4.4777° E</div>
              </div>
            </div>

            {/* Emergency Hotline Card */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-amber-400">24/7 Urgent Dispatch Emergency Hotline</div>
                <div className="text-[11px] text-slate-300 mt-0.5">For urgent re-routing or AOG (Aircraft On Ground) spares: +1 (888) 990-2020</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
