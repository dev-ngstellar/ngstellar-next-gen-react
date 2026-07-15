import React from 'react';
import { motion } from 'framer-motion';

const FacilityCard = ({ title, desc, img }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass-card hover:bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover border border-white/40 flex flex-col group transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-50">
        <img 
          src={img} 
          alt={title} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23F1F5F9'/><rect x='30' y='30' width='40' height='40' rx='4' fill='%23CBD5E1'/><circle cx='50' cy='50' r='10' fill='%2394A3B8'/></svg>";
          }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 text-left flex flex-col flex-1">
        <h3 className="font-bold text-lg text-dark mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
