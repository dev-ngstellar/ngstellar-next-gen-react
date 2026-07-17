import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Do you take reservations?", a: "Yes, we strongly recommend making reservations for weekends and parties larger than 4." },
  { q: "Is the cafe pet-friendly?", a: "Yes! We have a dedicated outdoor seating area where well-behaved pets are welcome." },
  { q: "Do you offer vegan or gluten-free options?", a: "Absolutely. We have a variety of plant-based milks and gluten-free pastries available daily." },
  { q: "Is there parking available?", a: "There is free street parking available around the cafe, and a public lot just one block away." },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Premium Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-accent/80 text-lg max-w-xl mx-auto">We'd love to hear from you. Get in touch or make a reservation.</p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info & Map */}
          <div className="flex-1 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Visit Stellar Cafe</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-card border border-border rounded-full text-secondary"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Address</h4>
                    <p className="text-text-muted">123 Stellar Avenue, Coffee District<br/>New York, NY 10012</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-card border border-border rounded-full text-secondary"><Clock size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Opening Hours</h4>
                    <p className="text-text-muted">Mon - Fri: 7:00 AM - 8:00 PM<br/>Sat - Sun: 8:00 AM - 9:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-card border border-border rounded-full text-secondary"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Phone</h4>
                    <p className="text-text-muted">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-card border border-border rounded-full text-secondary"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Email</h4>
                    <p className="text-text-muted">hello@stellarcafe.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-64 w-full rounded-2xl overflow-hidden bg-card border border-border relative"
            >
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Map View" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-primary text-secondary px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 cursor-pointer hover:bg-secondary hover:text-primary transition-colors">
                   <MapPin size={18} /> Open in Google Maps
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Reservation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1"
          >
            <div className="glass p-10 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-serif font-bold text-primary mb-2">Make a Reservation</h3>
              <p className="text-text-muted mb-8">Reserve your spot and enjoy a premium coffee experience.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Name</label>
                    <input type="text" className="w-full bg-white/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Phone</label>
                    <input type="tel" className="w-full bg-white/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="(555) 000-0000" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Date</label>
                    <input type="date" className="w-full bg-white/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Time</label>
                    <select className="w-full bg-white/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors appearance-none">
                      <option>Morning (8:00 AM - 11:00 AM)</option>
                      <option>Afternoon (12:00 PM - 4:00 PM)</option>
                      <option>Evening (5:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Guests</label>
                  <select className="w-full bg-white/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors appearance-none">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Special Requests</label>
                  <textarea rows="4" className="w-full bg-white/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="Any dietary preferences or seating requests?"></textarea>
                </div>
                
                <button type="button" className="w-full bg-secondary text-primary font-bold text-lg py-4 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                  Confirm Reservation
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-accent/20">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
             <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">FAQ</span>
             <h2 className="text-4xl font-serif font-bold text-primary">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-serif font-bold text-primary text-lg">{faq.q}</span>
                  <ChevronDown className={`text-secondary transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-text-muted border-t border-border/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
