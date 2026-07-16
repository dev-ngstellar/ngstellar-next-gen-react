import React, { useState, useMemo } from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../../components/cards/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../config/themes';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('all'); // all | Completed | Ongoing | Upcoming
  const { currentTheme } = useTheme();

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projects;
    return projects.filter(p => p.status === activeTab);
  }, [activeTab]);

  const tabs = [
    { id: 'all', label: 'All Developments' },
    { id: 'Completed', label: 'Completed' },
    { id: 'Ongoing', label: 'Ongoing' },
    { id: 'Upcoming', label: 'Upcoming' }
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Title */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">Project Portfolio</h1>
        <p className="text-slate-500 text-xs sm:text-sm">
          Explore iconic high-rise architectures, residential townships, and commercial spaces.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-slate-100 pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer"
              style={{ color: isActive ? '#fff' : '#64748B' }}
            >
              <span className="relative z-10">{tab.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeProjectTab"
                  className="absolute inset-0 rounded-full z-0"
                  style={{ backgroundColor: currentTheme.primary }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Projects Cards Container */}
      <div className="space-y-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 text-slate-400">
              No projects are currently registered under this filter.
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
