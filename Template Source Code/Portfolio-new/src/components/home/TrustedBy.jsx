import React from 'react';
import { motion } from 'framer-motion';

export default function TrustedBy() {
  const logos = [
    'Acme Corp', 'GlobalNet', 'Pied Piper', 'Stark Industries', 'Initech', 'Soylent', 'Massive Dynamic', 'Umbrella Corp'
  ];

  return (
    <section className="py-20 border-y border-border/50 bg-surface/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm font-medium tracking-widest text-muted uppercase">Trusted by innovative companies worldwide</p>
      </div>

      <div className="flex w-[200%]">
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center justify-around w-1/2"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="text-2xl md:text-3xl font-heading font-bold text-muted/50 hover:text-primary transition-colors cursor-default select-none">
              {logo}
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center justify-around w-1/2"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="text-2xl md:text-3xl font-heading font-bold text-muted/50 hover:text-primary transition-colors cursor-default select-none">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
