import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { HeroSection } from '../components/home/HeroSection';
import { HomeIntro } from '../components/home/HomeIntro';
import { FeatureSection } from '../components/home/FeatureSection';
import { WeddingTypes } from '../components/home/WeddingTypes';
import { OurApproach } from '../components/home/OurApproach';
import { siteConfig } from '../config/siteConfig';

export const Home: React.FC = () => {
  return (
    <PageContainer title={`${siteConfig.brand.name} | Luxury Wedding Planner`}>
      <HeroSection />

      {/* Subtle Horizontal Divider Between Hero and Welcome Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-accent/30" />
      </div>

      <HomeIntro />
      <FeatureSection />
      <WeddingTypes />
      <OurApproach />
    </PageContainer>
  );
};
