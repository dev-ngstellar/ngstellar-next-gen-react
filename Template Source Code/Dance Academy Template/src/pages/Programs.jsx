import React from 'react';
import PageHero from '../components/common/PageHero';
import ProgramSection from '../components/programs/ProgramSection';
import WhyJoinAndJourney from '../components/programs/WhyJoinAndJourney';
import CTASection from '../components/common/CTASection';

export default function Programs() {
  return (
    <main className="min-h-screen bg-[#101214]">
      {/* 1. PAGE HERO */}
      <PageHero
        eyebrow="OUR PROGRAMS"
        heading="Find Your Rhythm"
        description="Explore our structured dance programs tailored for different ages, skill levels, and artistic aspirations. Whether you are taking your first step or honing advanced technique, we have a program for you."
        image="/assets/dance-academy/hero/classes-hero.png"
      />

      {/* 2 & 3. DANCE PROGRAMS & CATEGORIES */}
      <ProgramSection />

      {/* 4 & 5. WHY JOIN THESE PROGRAMS & CLASS JOURNEY */}
      <WhyJoinAndJourney />

      {/* 6. CTA */}
      <CTASection
        heading="Ready to Start Dancing?"
        description="Choose your program and take the first step toward becoming a confident dancer."
        buttonText="Join a Class"
        buttonHref="/contact"
      />
    </main>
  );
}
