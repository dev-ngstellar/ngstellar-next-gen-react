import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formState, setFormState] = useState({ status: 'idle' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ status: 'submitting' });
    setTimeout(() => setFormState({ status: 'success' }), 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] pt-24">
      {/* Hero */}
      <section className="bg-[var(--color-primary-950)] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Let's Talk About Your <span className="text-[var(--color-accent-400)]">Future</span></h1>
            <p className="text-xl text-[var(--color-primary-100)] max-w-2xl mx-auto">
              Our expert counselors are ready to guide you. Reach out to schedule a free demo class or ask any questions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">Get in Touch</h2>
                <p className="text-[var(--color-text-muted)] text-lg">Visit our flagship campus or contact our admissions desk. We're open 7 days a week.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center shrink-0 text-[var(--color-primary-600)]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">Headquarters (Cyber City Campus)</h3>
                    <p className="text-[var(--color-text-muted)]">Level 4, Premium EduTower,<br/>Knowledge Park, Cyber City 122002</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-50)] dark:bg-[var(--color-accent-900)]/30 flex items-center justify-center shrink-0 text-[var(--color-accent-600)]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">Admissions Helpline</h3>
                    <p className="text-[var(--color-text-muted)]">Toll-Free: 1800-123-4567<br/>Direct: +91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 text-purple-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">Email Support</h3>
                    <p className="text-[var(--color-text-muted)]">admissions@elevateacademy.edu<br/>support@elevateacademy.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center shrink-0 text-orange-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">Working Hours</h3>
                    <p className="text-[var(--color-text-muted)]">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--color-bg-secondary)] p-8 md:p-12 rounded-3xl border border-[var(--color-border)] shadow-[var(--card-shadow)]">
              {formState.status === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-[var(--color-accent-100)] text-[var(--color-accent-600)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Request Received!</h3>
                  <p className="text-[var(--color-text-muted)]">Thank you for reaching out. An admission counselor will contact you within 24 hours.</p>
                  <Button onClick={() => setFormState({status: 'idle'})} className="mt-8">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-8">Book a Free Counseling Session</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-4 focus:ring-[var(--color-primary-500)]/10 transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-4 focus:ring-[var(--color-primary-500)]/10 transition-all" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-4 focus:ring-[var(--color-primary-500)]/10 transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-4 focus:ring-[var(--color-primary-500)]/10 transition-all" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Course of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-4 focus:ring-[var(--color-primary-500)]/10 transition-all text-[var(--color-text)]">
                      <option>Select a Course...</option>
                      <option>JEE Advanced Prep</option>
                      <option>NEET Target Batch</option>
                      <option>UPSC Foundation</option>
                      <option>Data Science Masterclass</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Your Message</label>
                    <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-4 focus:ring-[var(--color-primary-500)]/10 transition-all resize-none" placeholder="Tell us about your goals..."></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full justify-center" icon={Send}>
                    {formState.status === 'submitting' ? 'Sending...' : 'Submit Request'}
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="Map View" className="w-full h-full object-cover opacity-50 dark:opacity-20 mix-blend-luminosity grayscale" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white dark:bg-[var(--color-bg)] p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-[var(--color-border)]">
            <div className="w-12 h-12 rounded-full bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/50 flex items-center justify-center text-[var(--color-primary-600)] animate-bounce">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg text-[var(--color-text)]">Elevate Academy</div>
              <div className="text-[var(--color-text-muted)] text-sm">Find us on Google Maps</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
