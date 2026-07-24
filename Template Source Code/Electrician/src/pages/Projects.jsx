import React, { useState } from 'react';
import { PROJECTS } from '../data/electricianData';
import { MapPin, X, Maximize2 } from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Specialized'];

  const filteredProjects = PROJECTS.filter(p => 
    filter === 'All' || p.category === filter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold">
          Field Portfolio
        </span>
        <h1 className="text-4xl font-extrabold text-[var(--text-heading)] font-mono">
          Featured Electrical Projects
        </h1>
        <p className="text-sm text-[var(--text-muted)]">
          Explore recent panel upgrades, commercial high-rise retrofits, solar arrays, and EV charging stations.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-xs font-bold font-mono rounded-xl transition-all ${
              filter === cat
                ? 'bg-[var(--color-primary)] text-slate-950 shadow-md'
                : 'bg-[var(--bg-card)] text-[var(--text-body)] border border-[var(--border-color)] hover:border-[var(--color-primary)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((prj) => (
          <div
            key={prj.id}
            onClick={() => setActiveProject(prj)}
            className="glass-card rounded-3xl overflow-hidden cursor-pointer group border border-[var(--border-color)]"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={prj.image} alt={prj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[10px] font-bold text-slate-950 bg-[var(--color-primary)] rounded-full font-mono">
                  {prj.category}
                </span>
              </div>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-bold text-[var(--text-heading)] group-hover:text-[var(--color-primary)] transition-colors">{prj.title}</h3>
              <p className="text-xs text-[var(--text-muted)] font-mono flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                <span>{prj.location} • Client: {prj.client}</span>
              </p>
              <p className="text-xs text-[var(--text-body)]">{prj.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-3xl w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl overflow-hidden glass-panel">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={activeProject.image} alt={activeProject.title} className="w-full h-80 object-cover" />
            <div className="p-6 space-y-3">
              <span className="px-3 py-1 rounded-full bg-[var(--color-primary)] text-slate-950 text-xs font-bold font-mono">
                {activeProject.category}
              </span>
              <h3 className="text-xl font-bold text-[var(--text-heading)]">{activeProject.title}</h3>
              <p className="text-xs text-[var(--text-muted)] font-mono">Location: {activeProject.location}</p>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">{activeProject.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
