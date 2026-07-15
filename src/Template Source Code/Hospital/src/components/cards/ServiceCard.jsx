import React from 'react';
import { motion } from 'framer-motion';
import { hoverEffect } from '../../animations/motionVariants';
import * as Icons from 'react-icons/fa';

const ServiceCard = ({ title, desc, iconName }) => {
  // Dynamic icon resolving
  const IconComponent = Icons[iconName] || Icons.FaBriefcaseMedical;

  return (
    <motion.div
      variants={hoverEffect}
      whileHover="hover"
      className="glass-card hover:bg-white/95 p-8 rounded-2xl transition-all duration-300 border border-white/50 flex flex-col items-start text-left select-none relative group overflow-hidden"
    >
      {/* Decorative dynamic colored light background block */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-125" />

      {/* Icon Wrapper */}
      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm shadow-primary/5">
        <IconComponent size={24} />
      </div>

      <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-sm md:text-base text-gray-500 leading-relaxed">
        {desc}
      </p>

      {/* Learn More Link */}
      <span className="text-sm font-semibold text-primary mt-6 inline-flex items-center gap-1 cursor-pointer group-hover:translate-x-1 transition-transform">
        Learn More <span className="text-xs">→</span>
      </span>
    </motion.div>
  );
};

export default ServiceCard;
