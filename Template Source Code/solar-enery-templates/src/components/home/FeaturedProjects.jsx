import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { ProjectCard } from '../projects/ProjectCard';
import { Button } from '../common/Button';
import { projectsData } from '../../data/projects';

export const FeaturedProjects = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <Container>
        <SectionTitle
          badge="Featured Portfolio"
          title="Proven Clean Energy"
          highlightText="Installations"
          subtitle="Explore our latest residential microgrids, commercial solar roof systems, and utility-scale solar farms."
          centered={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/projects" variant="primary" size="lg" icon={ArrowRight}>
            Explore All Solar Projects
          </Button>
        </div>
      </Container>
    </section>
  );
};
