import React from 'react';
import { MapPin, Zap, Calendar, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group card-hover flex flex-col h-full">
      {/* Project Image Header */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
        <ImageWithFallback
          src={project.image}
          alt={`${project.title} - ${project.category} solar project in ${project.location}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 bg-[#f0771a] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
          {project.category}
        </div>

        {/* Capacity Specs Tag */}
        <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md text-amber-400 text-xs font-extrabold px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 fill-amber-400" />
          <span>{project.capacity}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Location & Year info */}
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-2">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#f0771a]" />
            <span>{project.location}</span>
          </div>
          {project.year && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{project.year}</span>
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#f0771a] transition-colors mb-3">
          {project.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Project Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="pt-4 border-t border-slate-100 space-y-1.5">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f0771a] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
