import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445116572660-236099ceab33?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">About Us</h1>
          <p className="text-accent/80 text-lg max-w-xl mx-auto">Discover the passion, the process, and the people behind every cup.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" 
              alt="Coffee beans roasting" 
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Heritage</span>
            <h2 className="text-4xl font-serif font-bold text-primary">From a tiny roastery to your favorite morning stop.</h2>
            <p className="text-text-muted leading-relaxed text-lg">
              Founded in 2015, Stellar Cafe began with a simple idea: that coffee should be an experience, not just a transaction. What started as a small batch roastery in a garage has blossomed into a beloved community hub.
            </p>
            <p className="text-text-muted leading-relaxed">
              We travel the globe to source the finest, ethically-grown organic beans, partnering directly with farmers to ensure fair trade and sustainable practices. Every bean we roast is treated with the utmost respect to bring out its unique flavor profile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-accent/20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Core Values</span>
          <h2 className="text-4xl font-serif font-bold text-primary">What we stand for</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-10 rounded-2xl border border-border text-center shadow-sm"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Quality First</h3>
            <p className="text-text-muted">We never compromise on the quality of our beans or our brewing methods. Excellence is our standard.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card p-10 rounded-2xl border border-border text-center shadow-sm"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3z"/><path d="M3 4h8s3-3 3-3"/></svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Sustainability</h3>
            <p className="text-text-muted">From sourcing to packaging, we are committed to environmentally friendly and sustainable practices.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-card p-10 rounded-2xl border border-border text-center shadow-sm"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Community</h3>
            <p className="text-text-muted">We aim to be the heart of our neighborhood, a place where people connect, collaborate, and belong.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
