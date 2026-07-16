import React from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden text-center">
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-accent"></span>
            <span className="uppercase tracking-widest text-sm font-medium text-accent">Contact</span>
            <span className="h-px w-12 bg-accent"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-8 leading-tight">
            Let's start a <br/>
            <span className="text-muted italic font-light">conversation</span>
          </h1>
          
          <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            Whether you have a project in mind, a question about my process, or just want to say hello, I'd love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
