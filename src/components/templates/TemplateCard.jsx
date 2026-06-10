import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TemplateCard = ({ template }) => {
  const { slug, title, description, coverImage, pages } = template;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all duration-300 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col h-full"
    >
      {/* Background radial glow */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5">
        <img
          src={coverImage}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

        {/* Page count badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-slate-950/80 border border-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md shadow-md">
          <svg className="w-3.5 h-3.5 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>{pages.length} Pages</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Badges and tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center gap-1 rounded-md bg-primary-500/10 border border-primary-500/20 px-2 py-0.5 text-xs font-semibold text-primary-300">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.66 14.16c-.34.33-.76.54-1.26.63-.5.09-1.02.04-1.5-.16-.48-.2-1.04-.63-1.68-1.28L8 14.16V17H6V7h2v5.84l4.28-4.28c.64-.64 1.2-1.07 1.68-1.27.48-.2 1-.25 1.5-.16.5.09.92.3 1.26.63.34.33.55.76.64 1.27.09.5.04 1.02-.16 1.5-.2.48-.63 1.04-1.28 1.68l-3.34 3.34 3.34 3.34c.65.64 1.08 1.2 1.28 1.68.2.48.25 1 .16 1.5-.09.51-.3.94-.64 1.27z" />
            </svg>
            React.js
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-secondary-500/10 border border-secondary-500/20 px-2 py-0.5 text-xs font-semibold text-secondary-300">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Responsive
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-accent-500/10 border border-accent-500/20 px-2 py-0.5 text-xs font-semibold text-accent-300">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Modern UI
          </span>
        </div>

        {/* View Details Link */}
        <Link
          to={`/templates/${slug}`}
          className="inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-primary-700 to-primary-500 hover:from-primary-600 hover:to-primary-400 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-700/20 hover:shadow-primary-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group/btn"
        >
          <span>View Template</span>
          <svg className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
