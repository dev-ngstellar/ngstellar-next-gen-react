import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-accent"></span>
            <span className="uppercase tracking-widest text-sm font-medium text-accent">Behind the Code</span>
            <span className="h-px w-12 bg-accent"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-8 leading-tight">
            Designing digital <br/>
            <span className="text-muted italic font-light">experiences</span> with purpose.
          </h1>
          
          <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            I am a multi-disciplinary developer and designer based in San Francisco, blending art and engineering to create products that people love to use.
          </p>
        </motion.div>
        
        {/* Large Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-20 rounded-3xl overflow-hidden glass p-2 relative h-[400px] md:h-[600px] max-w-5xl mx-auto"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
