import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AboutPreview } from '../components/home/AboutPreview';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { HowItWorks } from '../components/home/HowItWorks';
import { StatsSection } from '../components/home/StatsSection';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { CTASection } from '../components/common/CTASection';

export const Home = () => { 
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <HowItWorks />
      <StatsSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
};
