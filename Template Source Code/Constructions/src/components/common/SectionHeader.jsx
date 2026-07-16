import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ subtitle, title, description, centered = true }) => {
  return (
    <div className={`mb-12 md:mb-16 flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase mb-2 border-l-2 border-primary pl-2.5"
        >
          {subtitle}
        </motion.span>
      )}
      
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary leading-tight mt-1"
        >
          {title}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-text-secondary mt-4 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
