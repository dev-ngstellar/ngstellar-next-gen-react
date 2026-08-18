import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { AboutHero } from '../components/about/AboutHero';
import { StorySection } from '../components/about/StorySection';
import { WhatWeBelieve } from '../components/about/WhatWeBelieve';
import { MissionVision } from '../components/about/MissionVision';
import { ValuesSection } from '../components/about/ValuesSection';
import { ClientReview } from '../components/about/ClientReview';
import { siteConfig } from '../config/siteConfig';

export const About: React.FC = () => {
  return (
    <PageContainer title={`About Us | ${siteConfig.brand.name}`}>
      <AboutHero />
      
      {/* OUR STORY */}
      <StorySection />
      
      {/* OUR PHILOSOPHY */}
      <WhatWeBelieve />
      
      {/* MISSION & VISION */}
      <MissionVision />
      
      {/* WHAT MATTERS TO US */}
      <ValuesSection />
      
      {/* WORDS FROM OUR COUPLES */}
      <ClientReview />
    </PageContainer>
  );
};
