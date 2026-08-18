import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { GalleryHero } from '../components/gallery/GalleryHero';
import { GalleryIntro } from '../components/gallery/GalleryIntro';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { CTASection } from '../components/home/CTASection';
import { siteConfig } from '../config/siteConfig';

export const Gallery: React.FC = () => {
  return (
    <PageContainer title={`Real Weddings Gallery | ${siteConfig.brand.name}`}>
      <GalleryHero />
      <GalleryIntro />
      <GalleryGrid />
      <CTASection
        title="Imagine Your Wedding Here"
        description="Your celebration should feel as special as the moments you're creating. Let's bring your ideas, style, and story together into a wedding that feels completely yours."
      />
    </PageContainer>
  );
};
