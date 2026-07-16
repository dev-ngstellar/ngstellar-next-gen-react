import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, align = 'center' }) {
  const alignmentClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center mx-auto';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 md:mb-24 max-w-3xl ${alignmentClass}`}
    >
      {subtitle && (
        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-wider uppercase mb-4 border border-accent/20">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-6">{title}</h2>
    </motion.div>
  );
}
