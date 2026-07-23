import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ShieldAlert, Send, CheckCircle2, HelpCircle } from 'lucide-react';
import { SOCIETY_INFO } from '../../data/mockData';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    { q: "How do residents register visitors?", a: "Residents log into the Resident Portal or mobile app and generate an instant QR gate pass or approve entry notifications." },
    { q: "How are maintenance bills calculated?", a: "Maintenance bills include base square footage charge, metered water & electricity utilities, parking bay fees, and applicable tax." },
    { q: "Can non-residents book clubhouse facilities?", a: "Amenity bookings are exclusively reserved for verified residents and their invited guests." },
    { q: "Who handles emergency gate security?", a: "Main Gate Console is manned 24/7 by licensed security personnel connected directly to local emergency dispatch." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest theme-accent-text block">
          Concierge & Support
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Get In Touch With SkyNest
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Our property management team and concierge are available 24/7 to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Info Sidebar */}
        <div className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Management Office</h3>
          
          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 theme-accent-text shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 dark:text-white">Address</strong>
                <span className="text-slate-500">{SOCIETY_INFO.location}, {SOCIETY_INFO.city}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 theme-accent-text shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 dark:text-white">Concierge Desk</strong>
                <span className="text-slate-500">{SOCIETY_INFO.phone}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 theme-accent-text shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 dark:text-white">Email Address</strong>
                <span className="text-slate-500">{SOCIETY_INFO.email}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 theme-accent-text shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 dark:text-white">Office Working Hours</strong>
                <span className="text-slate-500">Mon - Sat: 08:00 AM - 08:00 PM</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 space-y-1">
            <div className="flex items-center gap-2 font-bold text-xs">
              <ShieldAlert className="w-4 h-4" />
              Emergency Gate SOS Hotline
            </div>
            <p className="text-xs font-mono font-bold">{SOCIETY_INFO.emergencyPhone}</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6">Send A Message</h3>

          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 rounded-full theme-accent-bg text-white flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold">Message Sent Successfully!</h4>
              <p className="text-xs text-slate-500">Our concierge desk will respond to your inquiry within 60 minutes.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Your Full Name</label>
                  <input required type="text" placeholder="Marcus Vance" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Email Address</label>
                  <input required type="email" placeholder="marcus@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Phone Number</label>
                  <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Inquiry Category</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                    <option>Apartment Booking</option>
                    <option>Resident Inquiry</option>
                    <option>Maintenance Support</option>
                    <option>Commercial Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Your Message</label>
                <textarea required rows={4} placeholder="How can we help you today?" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"></textarea>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl theme-accent-bg text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Interactive Google Map Mockup */}
      <div className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 h-72 relative flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&auto=format&fit=crop&q=80"
          alt="Map location"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
          <div className="glass-card px-6 py-4 rounded-2xl border border-white/20 text-center text-white backdrop-blur-md">
            <MapPin className="w-8 h-8 text-teal-400 mx-auto mb-2 animate-bounce" />
            <h4 className="font-bold text-sm">SkyNest Luxury Towers Map Coordinates</h4>
            <p className="text-xs text-slate-300 font-mono">40.7128° N, 74.0060° W</p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white text-center">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 space-y-1">
              <h5 className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 theme-accent-text" />
                {faq.q}
              </h5>
              <p className="text-xs text-slate-500 dark:text-slate-400 pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
