import React from 'react';
import PageHero from '../components/common/PageHero';
import ClassGrid from '../components/classes/ClassGrid';
import ClassProcess from '../components/classes/ClassProcess';
import Timetable from '../components/classes/Timetable';
import CTASection from '../components/common/CTASection';
import { academyData } from '../data/academy';

export default function Classes() {
  const { eyebrow, heading, description, image } = academyData.classesHero;
  const cta = academyData.ctaSection.classes;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <PageHero
        eyebrow={eyebrow}
        heading={heading}
        description={description}
        image={image}
      />
      <ClassGrid />
      <ClassProcess />
      <Timetable />
      <CTASection
        heading={cta.heading}
        description={cta.description}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
      />
    </main>
  );
}
