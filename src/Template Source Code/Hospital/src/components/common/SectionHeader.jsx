import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/motionVariants';

const SectionHeader = ({ subtitle, title, description, align = 'center', dark = false }) => {
  const alignClass = align === 'left' ? 'text-left items-start' : align === 'right' ? 'text-right items-end' : 'text-center items-center';
  const borderAlignClass = align === 'left' ? 'left-0' : align === 'right' ? 'right-0' : 'left-1/2 -translate-x-1/2';

  return (
    <motion.div 
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col ${alignClass} mb-12 md:mb-16 max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {subtitle && (
        <span className="text-secondary font-bold text-xs md:text-sm uppercase tracking-widest mb-3 px-3 py-1 bg-secondary/10 rounded-full">
          {subtitle}
        </span>
      )}
      
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${dark ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      
      <div className="h-[4px] w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />
      
      {description && (
        <p className={`text-sm md:text-lg leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-500'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
