import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="py-20 relative">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* Left Column: Contact Details & Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-3xl font-heading mb-8">Contact Information</h2>
            
            <ContactCard 
              icon={<Mail size={24} />} 
              title="Email" 
              detail="hello@portfolio.com" 
              subdetail="I'll reply within 24 hours." 
            />
            
            <ContactCard 
              icon={<Phone size={24} />} 
              title="Phone" 
              detail="+1 (555) 123-4567" 
              subdetail="Mon-Fri, 9am to 6pm PST" 
            />
            
            <ContactCard 
              icon={<MapPin size={24} />} 
              title="Office" 
              detail="100 Market St, San Francisco" 
              subdetail="CA 94105, United States" 
            />
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 glass-panel p-10 md:p-12"
          >
            <h2 className="text-3xl font-heading mb-8">Send a Message</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows="6"
                  className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <MagneticButton className="w-full bg-primary text-background py-4 rounded-xl text-lg hover:bg-primary/90">
                  Send Message
                </MagneticButton>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, detail, subdetail }) {
  return (
    <div className="glass-panel p-6 flex gap-6 items-start group hover:border-accent/30 transition-colors">
      <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-heading font-bold mb-1">{title}</h3>
        <p className="text-primary font-medium mb-1">{detail}</p>
        <p className="text-muted text-sm">{subdetail}</p>
      </div>
    </div>
  );
}
