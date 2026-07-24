import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', eventType: 'Corporate Summit', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-semibold">
          Executive Concierge
        </span>
        <h1 className="text-4xl font-extrabold text-[var(--text-heading)]">
          Connect With Our Event Producers
        </h1>
        <p className="text-sm text-[var(--text-muted)]">
          Inquire about custom venue production, SaaS portal enterprise licensing, or VIP concierge service.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Form */}
        <div className="glass-card p-8 rounded-3xl space-y-6 border border-[var(--border-color)]">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--text-heading)]">Send Direct Inquiry</h3>

              <div className="space-y-1">
                <label className="text-xs text-[var(--text-muted)]">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Alexander Wright"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] px-4 py-3 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-[var(--text-muted)]">Work Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alex.wright@vanguard.io"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] px-4 py-3 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-[var(--text-muted)]">Event Category</label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] px-4 py-3 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--color-primary)]"
                >
                  <option>Corporate Summit</option>
                  <option>Haute Couture Gala</option>
                  <option>Music Festival</option>
                  <option>Product Launch Keynote</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-[var(--text-muted)]">Message & Scope Details</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us about expected attendee count, preferred city, and target date..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] p-4 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--color-primary)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Executive Inquiry</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-[var(--text-heading)]">Inquiry Received!</h3>
              <p className="text-xs text-[var(--text-muted)]">An Executive Producer will contact you at {formData.email} within 2 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-xl bg-[var(--bg-primary)] text-xs font-semibold border border-[var(--border-color)] text-[var(--text-heading)]"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Global HQ Info & WhatsApp CTA */}
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-3xl space-y-4 border border-[var(--border-color)]">
            <h3 className="text-lg font-bold text-[var(--text-heading)]">Global Headquarters</h3>
            <div className="space-y-3 text-xs text-[var(--text-body)]">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                <span>5th Avenue, Suite 4200, Manhattan, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                <span>+1 (800) 555-STELLAR</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                <span>concierge@stellarevents.io</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Mon - Fri: 08:00 AM - 08:00 PM EST</span>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp VIP Button */}
          <a
            href="https://wa.me/18005557835"
            target="_blank"
            rel="noreferrer"
            className="w-full p-4 rounded-3xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-3 shadow-lg hover:bg-emerald-500 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Connect Immediately on WhatsApp VIP Line</span>
          </a>
        </div>

      </div>

    </div>
  );
};
