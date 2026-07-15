import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getImg } from '../../utils/images';
import { MdArrowForward } from 'react-icons/md';

const ProjectCard = ({ id, title, category, shortDesc, image, metrics, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-xl overflow-hidden border border-border bg-white shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container with Reveal Effect */}
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <img
          src={getImg(image)}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded shadow-md">
          {category}
        </span>
      </div>

      {/* Info Block */}
      <div className="p-6 flex flex-col flex-grow justify-between text-left">
        <div>
          <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {shortDesc}
          </p>

          {/* Mini specs list */}
          {metrics && (
            <div className="grid grid-cols-2 gap-2 border-t border-border pt-4 mb-6 text-xs text-text-secondary">
              <div>
                <span className="font-semibold text-text-primary">Location:</span> {metrics.location}
              </div>
              <div>
                <span className="font-semibold text-text-primary">Value:</span> {metrics.value}
              </div>
            </div>
          )}
        </div>

        <Link
          to={`/projects/${id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link mt-auto"
        >
          <span>View Details</span>
          <MdArrowForward className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
