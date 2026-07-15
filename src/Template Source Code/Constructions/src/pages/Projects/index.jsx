import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from '../../components/cards/ProjectCard';
import SectionHeader from '../../components/common/SectionHeader';
import { getImg } from '../../utils/images';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Infrastructure', 'Healthcare', 'Education'];

  const filtered = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const visibleProjects = filtered.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="w-full pt-24">
      {/* Banner */}
      <section className="relative py-20 bg-white text-text-primary text-center border-b border-border">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: `url(${getImg('projects.infrastructure01')})` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase border-l-2 border-primary pl-2.5">
            Our Works
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 tracking-tight text-text-primary">
            Infrastructure & Building Portfolio
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
            Review our engineering solutions across healthcare, civic transport, residential housing, and industrial complexes.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setVisibleCount(6); // reset counts on filter change
                }}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-border text-text-secondary hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          {visibleProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((proj, idx) => (
                <ProjectCard
                  key={proj.id}
                  id={proj.id}
                  title={proj.title}
                  category={proj.category}
                  shortDesc={proj.shortDesc}
                  image={proj.image}
                  metrics={proj.metrics}
                  index={idx}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-text-secondary text-sm">
              No projects currently available under this category.
            </div>
          )}

          {/* Load More Button */}
          {filtered.length > visibleCount && (
            <div className="mt-12 text-center">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/95 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
