import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-[var(--background-color)] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <div>
              <h1 className="text-5xl font-heading font-bold mb-6">Get in Touch</h1>
              <p className="text-[var(--text-muted)] text-lg">Ready to start your next project? Contact us for a premium consultation.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-[var(--primary-color)] mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-bold text-lg font-heading">Headquarters</h4>
                  <p className="text-[var(--text-muted)]">123 Luxury Avenue, Suite 400<br/>New York, NY 10012</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-[var(--primary-color)] mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-bold text-lg font-heading">Phone</h4>
                  <p className="text-[var(--text-muted)]">+1 (234) 567-890</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-[var(--primary-color)] mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-bold text-lg font-heading">Email</h4>
                  <p className="text-[var(--text-muted)]">hello@archlux.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="bg-[var(--surface-color)] p-10 border border-[var(--border-color)]">
            <h3 className="text-2xl font-heading font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--text-muted)]">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-[var(--border-color)] py-2 focus:border-[var(--primary-color)] outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--text-muted)]">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-[var(--border-color)] py-2 focus:border-[var(--primary-color)] outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--text-muted)]">Project Type</label>
                <select className="w-full bg-transparent border-b border-[var(--border-color)] py-2 focus:border-[var(--primary-color)] outline-none transition-colors text-[var(--text-main)] appearance-none">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Hospitality</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--text-muted)]">Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-[var(--border-color)] py-2 focus:border-[var(--primary-color)] outline-none transition-colors"></textarea>
              </div>
              <button type="button" className="w-full bg-[var(--primary-color)] text-white py-4 font-medium tracking-widest uppercase hover:bg-opacity-90 transition-all">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
