import React from 'react';
import { FiMapPin, FiCalendar, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../../config/themes';

export const ProjectCard = ({ project }) => {
  const { currentTheme } = useTheme();

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      case 'Ongoing':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'Upcoming':
      default:
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col lg:flex-row gap-6 p-6"
    >
      {/* Visual */}
      <div className="w-full lg:w-1/3 aspect-video lg:aspect-auto lg:h-64 rounded-2xl overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full border backdrop-blur-md ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
      </div>

      {/* Details */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-1.5 text-xs text-slate-400 mb-2">
            <FiMapPin style={{ color: currentTheme.primary }} />
            <span>{project.location}</span>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
          <p className="text-xs font-bold text-theme-primary uppercase tracking-wider mb-4">{project.category}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.highlights.map((hl, i) => (
              <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded-lg">
                {hl}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline Summary & Completion Details */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <FiCalendar className="text-base" style={{ color: currentTheme.primary }} />
            <span>Completion Target: <strong className="text-slate-700">{project.completionDate}</strong></span>
          </div>

          <button
            onClick={() => alert(`Detailed project dossier for "${project.title}" will be fetched dynamically via upcoming AI integrations.`)}
            className="flex items-center space-x-1 text-xs font-bold text-theme-primary uppercase tracking-wider hover:opacity-80 transition-opacity self-start sm:self-auto cursor-pointer"
          >
            <span>Project Dossier</span>
            <FiChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
