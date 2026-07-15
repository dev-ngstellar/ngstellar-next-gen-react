import React from 'react';
import { FiMail, FiPhone, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../../config/themes';

export const AgentCard = ({ agent }) => {
  const { currentTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
    >
      {/* Agent Photo */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Experience badge */}
        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/10 flex items-center space-x-1.5">
          <FiAward className="text-xs" style={{ color: currentTheme.primary }} />
          <span>{agent.experience} Exp</span>
        </div>
      </div>

      {/* Info Content */}
      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 className="text-lg font-bold text-slate-800 mb-1">{agent.name}</h3>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-theme-primary">{agent.role}</p>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-3 mb-4 block">
          Specialist: {agent.specialization}
        </span>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6">
          {agent.bio}
        </p>

        {/* Contact Links */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <a
            href={`mailto:${agent.email}`}
            className="flex items-center justify-center space-x-1.5 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors text-xs font-semibold"
          >
            <FiMail />
            <span>Email</span>
          </a>
          <a
            href={`tel:${agent.phone}`}
            className="flex items-center justify-center space-x-1.5 py-3 rounded-2xl bg-theme-primary text-white hover:opacity-90 transition-opacity text-xs font-semibold shadow-sm"
          >
            <FiPhone />
            <span>Call</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
