import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-accent/5 -z-10"></div>
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Let's Make An <span className="text-accent">Impact</span> Together
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70"
          >
            Have a question, want to partner with us, or need more information about our programs? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Office Information */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-foreground/70 mb-8">
                Our global headquarters is based in New York, with regional offices operating in over 40 countries to ensure effective program delivery.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              {[
                { icon: MapPin, title: "Headquarters", desc: "123 Humanitarian Way, Suite 400\nNew York, NY 10001, USA" },
                { icon: Phone, title: "Phone Support", desc: "+1 (555) 123-4567\nMon - Fri, 9am - 6pm EST" },
                { icon: Mail, title: "Email Address", desc: "hello@lumorafoundation.org\nsupport@lumorafoundation.org" },
                { icon: Clock, title: "Working Hours", desc: "Monday to Friday: 9:00 AM - 6:00 PM\nSaturday & Sunday: Closed" }
              ].map((info, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                    <p className="text-foreground/70 whitespace-pre-line text-sm">{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Simple Map Representation */}
            <div className="mt-4 h-64 rounded-3xl bg-foreground/5 border border-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-700"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/40 animate-bounce">
                <MapPin size={20} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-[3rem] p-8 md:p-12 border border-border h-full shadow-xl shadow-foreground/5">
              <h3 className="text-2xl font-bold mb-8">Send Us A Message</h3>
              <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input required type="text" className="bg-background border border-border focus:border-accent rounded-xl px-4 py-3 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input required type="email" className="bg-background border border-border focus:border-accent rounded-xl px-4 py-3 outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input required type="tel" className="bg-background border border-border focus:border-accent rounded-xl px-4 py-3 outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Subject</label>
                    <select required className="bg-background border border-border focus:border-accent rounded-xl px-4 py-3 outline-none transition-colors appearance-none">
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="donation">Donation Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media & Press</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-grow">
                  <label className="text-sm font-medium">Your Message</label>
                  <textarea required rows="6" className="bg-background border border-border focus:border-accent rounded-xl px-4 py-3 outline-none transition-colors resize-none h-full" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-accent text-white font-bold text-lg hover:bg-accent/90 hover:scale-[1.02] transition-all shadow-lg shadow-accent/30 flex items-center justify-center gap-2">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
