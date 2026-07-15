import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Calendar, Plus, Minus, Palette, Code, Layout, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-accent" />, label: 'Email', value: 'hello@alex.design' },
    { icon: <Phone className="w-5 h-5 text-accent" />, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: <MapPin className="w-5 h-5 text-accent" />, label: 'Location', value: 'San Francisco, CA' },
    { icon: <Clock className="w-5 h-5 text-accent" />, label: 'Response Time', value: 'Within 24 Hours' },
    { icon: <Calendar className="w-5 h-5 text-accent" />, label: 'Availability', value: 'Accepting New Projects' },
  ];

  const services = [
    { title: 'Website Design', description: 'Visually stunning and user-centric designs.', icon: <Palette className="w-6 h-6 text-accent" /> },
    { title: 'Web Development', description: 'Fast, scalable, and secure applications.', icon: <Code className="w-6 h-6 text-accent" /> },
    { title: 'UI / UX', description: 'Intuitive interfaces that convert visitors.', icon: <Layout className="w-6 h-6 text-accent" /> },
    { title: 'Consultation', description: 'Expert advice on your digital strategy.', icon: <MessageSquare className="w-6 h-6 text-accent" /> },
  ];

  const faqs = [
    { question: 'What is your typical project timeline?', answer: 'Most projects take between 4 to 8 weeks depending on the complexity and scope. We will define a clear timeline during our discovery phase.' },
    { question: 'Do you offer ongoing support after launch?', answer: 'Yes, I offer various maintenance and support packages to ensure your digital product stays updated and secure.' },
    { question: 'What are your payment terms?', answer: 'I typically request a 50% deposit to secure your spot in my schedule, with the remaining 50% due upon project completion.' },
    { question: 'Do you work with international clients?', answer: 'Absolutely! I work with clients globally and am highly communicative across different time zones.' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-24 text-center relative"
        initial="hidden" animate="visible" variants={fadeUp}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[120px] -z-10" />
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
          Let's <span className="text-gradient">Talk.</span>
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
          Have a project in mind? Fill out the form or reach out directly.
        </p>
      </motion.section>

      {/* Section 2: Contact Layout */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32 grid lg:grid-cols-5 gap-12"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        {/* Left: Contact Info */}
        <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-text-secondary">Reach out through any of these channels. I'm always happy to chat about new opportunities.</p>
          </div>
          
          <div className="flex flex-col gap-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-surface/50 border border-white/5 hover:border-accent/30 transition-colors">
                <div className="p-3 bg-white/5 rounded-xl">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-text-secondary">{info.label}</p>
                  <p className="font-medium text-white">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 mt-auto pt-8">
            <a href="#" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white font-bold">X</a>
            <a href="#" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white font-bold">in</a>
            <a href="#" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white font-bold">Dr</a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div variants={fadeUp} className="lg:col-span-3">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Company (Optional)</label>
                  <input type="text" placeholder="Company Inc." className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Budget</label>
                  <select className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select a budget</option>
                    <option value="1">Less than $5k</option>
                    <option value="2">$5k - $10k</option>
                    <option value="3">$10k - $20k</option>
                    <option value="4">$20k+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-text-secondary">Project Details</label>
                <textarea rows="5" placeholder="Tell me about your project, goals, and timeline..." className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"></textarea>
              </div>

              <button className="w-full mt-4 bg-primary text-background font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 3: Service Cards */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How I Can Help</h2>
          <p className="text-text-secondary">Expertise tailored to your needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div key={i} variants={fadeUp} className="p-6 rounded-2xl glass-card hover:-translate-y-2 hover:bg-white/[0.03] transition-all cursor-pointer">
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 4: FAQ Accordion */}
      <motion.section 
        className="max-w-3xl mx-auto px-6 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-text-secondary">Everything you need to know before we start.</p>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp} className="glass border border-white/5 rounded-2xl overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <span className="font-medium text-white">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : 'rotate-0'}`}>
                  <Plus className="w-5 h-5 text-accent" />
                </span>
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-text-secondary text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 5: Large CTA Banner */}
      <motion.section 
        className="max-w-5xl mx-auto px-6 text-center"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <div className="bg-gradient-to-tr from-surface to-surface/40 rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-white/10 group">
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
              Let's create something extraordinary. Schedule a free consultation to discuss your vision.
            </p>
            <button className="px-10 py-5 rounded-full glass border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors shadow-lg">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Contact;
