import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-[var(--background)] min-h-screen relative overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-b from-[var(--surface)] to-transparent rounded-bl-full opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[200px] opacity-10 -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Let's Connect</h1>
          <p className="text-[var(--muted)] max-w-2xl mx-auto font-light text-lg">
            We are currently accepting bookings for the upcoming season. Please fill out the form below to inquire about our availability and receive a custom proposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Details & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="mb-12">
                <h3 className="text-2xl font-serif mb-4">Studio</h3>
                <p className="text-[var(--muted)] font-light">
                  125 Fifth Avenue, Floor 4<br />
                  New York, NY 10003<br />
                  United States
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-serif mb-4">Direct Inquiries</h3>
                <p className="text-[var(--muted)] font-light mb-2">hello@ngstellar.com</p>
                <p className="text-[var(--muted)] font-light">+1 (212) 555-0198</p>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-4">Working Hours</h3>
                <p className="text-[var(--muted)] font-light mb-2">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-[var(--muted)] font-light">Available worldwide for special assignments.</p>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="glass-card p-8 md:p-12 backdrop-blur-xl border border-[var(--border)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[var(--muted)] mb-2">Name</label>
                  <input type="text" className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-none px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[var(--muted)] mb-2">Email</label>
                  <input type="email" className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-none px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[var(--muted)] mb-2">Event Type</label>
                  <select className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-none px-4 py-3 text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none">
                    <option>Wedding</option>
                    <option>Portrait Session</option>
                    <option>Editorial / Fashion</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[var(--muted)] mb-2">Date</label>
                  <input type="date" className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-none px-4 py-3 text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm uppercase tracking-widest text-[var(--muted)] mb-2">Message & Details</label>
                <textarea rows="4" className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-none px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" placeholder="Tell us about your vision..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-white text-black hover:bg-[var(--accent)] hover:text-white transition-all duration-300 font-medium tracking-widest uppercase text-sm">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
