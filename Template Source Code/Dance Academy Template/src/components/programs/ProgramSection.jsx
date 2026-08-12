import React, { useState } from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ProgramCard from './ProgramCard';
import ProgramFilter from './ProgramFilter';
import { programsData } from '../../data/programs';

const CATEGORIES = ['All', 'Kids', 'Teens', 'Adults', 'Beginners', 'Advanced'];

export default function ProgramSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPrograms = activeCategory === 'All'
    ? programsData
    : programsData.filter((item) => {
        if (activeCategory === 'Kids') return item.category === 'Kids' || item.id === 'kids-dance';
        if (activeCategory === 'Teens') return item.category === 'Teens' || item.id === 'teen-dance';
        if (activeCategory === 'Adults') return item.category === 'Adults' || item.id === 'adult-dance';
        if (activeCategory === 'Beginners') return item.level.includes('Beginner') || item.category === 'Beginners';
        if (activeCategory === 'Advanced') return item.level.includes('Advanced') || item.category === 'Advanced';
        return true;
      });

  return (
    <section className="py-14 md:py-20 bg-[#101214] relative">
      <Container>
        <SectionTitle
          label="CURATED PATHWAYS"
          title="Explore Our Dance Programs"
          subtitle="Designed to cultivate talent, technique, and creative confidence for every stage of your dance journey."
          align="center"
          className="mb-12"
        />

        <ProgramFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
}
