import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-[var(--background-color)] min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <p className="text-[var(--primary-color)] tracking-widest uppercase text-sm mb-4 font-semibold">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-8">Elevating Spaces, Inspiring Lives.</h1>
          <p className="text-[var(--text-muted)] text-xl leading-relaxed">
            Founded in 2011, Archlux has grown to become a globally recognized architecture and interior design firm. We blend visionary design with pragmatic execution to create spaces that stand the test of time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Team at work" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Our Philosophy</h2>
            <p className="text-[var(--text-muted)]">
              We believe that good architecture is not just about making a statement; it's about making a difference. Our approach is deeply rooted in context, sustainability, and human-centric design.
            </p>
            <ul className="space-y-4 pt-4">
              {['Sustainable Practices', 'Innovative Material Usage', 'Contextual Architecture', 'Human-Centric Interiors'].map(item => (
                <li key={item} className="flex items-center text-[var(--text-main)] font-medium">
                  <CheckCircle className="text-[var(--primary-color)] mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
