import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { Container } from '../components/common/Container';
import { SectionTitle } from '../components/common/SectionTitle';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilter } from '../components/projects/ProjectFilter';
import { StatsSection } from '../components/home/StatsSection';
import { CTASection } from '../components/common/CTASection';
import { projectsData, projectCategories } from '../data/projects';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      <PageHero
        title="Our Portfolio of"
        highlightText="Solar Projects"
        plainTitle="Projects"
        description="Discover our portfolio of successful rooftop solar installations, commercial parking carports, and industrial microgrids."
        badge="Proven Track Record"
      />

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionTitle
            badge="Project Gallery"
            title="Clean Energy Installations"
            highlightText="In Action"
            subtitle="Browse our recent installations across residential estates, commercial hubs, and agricultural properties."
            centered={true}
            className="mb-10"
          />

          {/* Category Filter Tabs */}
          <ProjectFilter
            categories={projectCategories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-500 font-medium">No projects found in this category.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Statistics */}
      <StatsSection />

      {/* CTA */}
      <CTASection />
    </>
  );
};
