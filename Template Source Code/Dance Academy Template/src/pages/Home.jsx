import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import DanceStyles from '../components/home/DanceStyles';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StatsSection from '../components/home/StatsSection';
import InstructorsSection from '../components/home/InstructorsSection';
import GallerySection from '../components/home/GallerySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/common/CTASection';
import { academyData } from '../data/academy';

export default function Home() {
  const { heading, description, buttonText, buttonHref } = academyData.ctaSection.home;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <HeroSection />
      <AboutSection />
      <DanceStyles />
      <WhyChooseUs />
      <StatsSection />
      <InstructorsSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection
        heading={heading}
        description={description}
        buttonText={buttonText}
        buttonHref={buttonHref}
      />
    </main>
  );
}
