import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { MOCK_BRANCHES } from '../../data/mockData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const { addToast } = useStore();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('success', 'Message Sent', 'Our retail customer care team will respond within 2 hours.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">Retail Hubs & Customer Support</h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Locate our physical supermarket stores or contact customer care.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Store Locations */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Supermarket Branch Locations</h3>
          <div className="space-y-3">
            {MOCK_BRANCHES.map(b => (
              <div key={b.id} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{b.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{b.address}</p>
                  <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-1">Open 6:00 AM - 11:00 PM Daily</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-md">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">Send Us a Message</h3>
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Thank you for reaching out!</h4>
              <p className="text-xs text-slate-500">Ticket #TK-2026-88 has been logged into our CRM system.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full mt-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="w-full mt-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Message / Inquiry</label>
                <textarea required rows={4} placeholder="How can our retail team assist you?" className="w-full mt-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors">
                <Send className="w-4 h-4" /> Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
