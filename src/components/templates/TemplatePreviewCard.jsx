import React from 'react';
import { motion } from 'framer-motion';

const TemplatePreviewCard = ({ page, index, onOpenLightbox }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      onClick={() => onOpenLightbox(index)}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/30 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5"
    >
      {/* Light glow on border on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Screenshot Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={page.image}
          alt={page.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Zoom Action Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-3.5 rounded-full bg-slate-950/80 border border-white/20 text-white backdrop-blur-md transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg">
            <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info footer */}
      <div className="p-4 border-t border-white/5 flex items-center justify-between bg-slate-950/20">
        <span className="font-semibold text-white group-hover:text-primary-300 transition-colors">
          {page.title}
        </span>
        <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Expand View
        </span>
      </div>
    </motion.div>
  );
};

export default TemplatePreviewCard;
