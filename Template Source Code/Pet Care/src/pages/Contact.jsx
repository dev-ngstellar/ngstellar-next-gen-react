import React, { useState } from 'react';
import { BreadcrumbBanner } from '../components/common/BreadcrumbBanner';
import { Phone, Mail, MapPin, Clock, MessageSquare, HeartPulse, Send, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES_DATA[0].title,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const serviceAreas = ['Manhattan & Downtown', 'Brooklyn Heights', 'Queens & Astoria', 'Upper East Side', 'Jersey City', 'Long Island'];

  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors">
      
      <BreadcrumbBanner
        pageName="Contact Us"
        title="Get In Touch & Visit Our Hospital"
        subtitle="We are available 24/7 for emergency triage, routine wellness appointments, and luxury grooming inquiries."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Emergency Alert Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-red-600 to-rose-700 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <HeartPulse className="w-7 h-7 text-white animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Having a Pet Emergency Right Now?</h3>
              <p className="text-xs sm:text-sm text-red-100 mt-0.5">Our ER trauma surgeons are on standby 24/7. No appointment needed for emergencies.</p>
            </div>
          </div>
          <a
            href="tel:18009997387"
            className="px-6 py-3 rounded-full bg-white text-red-600 font-extrabold text-sm hover:bg-red-50 transition-colors shrink-0 shadow-lg"
          >
            Call ER Hotline: (800) 999-PETS
          </a>
        </div>

        {/* Grid: Contact Form & Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-[var(--heading)] mb-2">Send Us a Message</h2>
            <p className="text-xs text-[var(--muted-text)] mb-6">Fill out the form below and our care team will respond within 2 business hours.</p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-[var(--heading)]">Message Sent Successfully!</h3>
                <p className="text-xs text-[var(--muted-text)]">Thank you {formData.name}. We look forward to seeing your pet.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--heading)] mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--heading)] focus:outline-none focus:border-[var(--primary)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--heading)] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--heading)] focus:outline-none focus:border-[var(--primary)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--heading)] mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--heading)] focus:outline-none focus:border-[var(--primary)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--heading)] mb-1">Service Interested In</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--heading)] focus:outline-none focus:border-[var(--primary)]"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--heading)] mb-1">Message / Pet Details</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us about your pet's needs or any specific symptoms..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--heading)] focus:outline-none focus:border-[var(--primary)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold text-sm shadow-lg shadow-[var(--primary)]/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Location Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--heading)]">Direct Hospital Contacts</h3>
              
              <div className="space-y-3 text-xs text-[var(--muted-text)]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[var(--heading)]">Hospital Address</strong>
                    <span>742 Evergreen Terrace, Luxury Care District, NY 10001</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[var(--heading)]">Phone Lines</strong>
                    <span>Main Desk: (555) 019-2834</span>
                    <span className="block text-red-500 font-bold">24/7 ER: (800) 999-PETS</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[var(--heading)]">Email Enquiries</strong>
                    <span>care@aurapetwellness.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[var(--heading)]">Operating Hours</strong>
                    <span>Emergency Triage: 24/7 / 365 Days</span>
                    <span className="block">Routine Clinic: Mon - Sun: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 space-y-3">
              <h3 className="text-base font-bold text-[var(--heading)]">Service Coverage Areas</h3>
              <p className="text-xs text-[var(--muted-text)]">We offer ambulatory home-visit services across:</p>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span key={area} className="px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)] text-xs font-semibold text-[var(--body-text)]">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
