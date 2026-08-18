import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServiceIntro } from '../components/services/ServiceIntro';
import { ServicesGrid } from '../components/services/ServicesGrid';
import { CoordinationGrid } from '../components/services/CoordinationGrid';
import { CTASection } from '../components/home/CTASection';
import { siteConfig } from '../config/siteConfig';
import { Container } from '../components/common/Container';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { assets } from '../config/assets';

export const Services: React.FC = () => {
  return (
    <PageContainer title={`Wedding Services | ${siteConfig.brand.name}`}>
      <ServicesHero />
      
      {/* Editorial Feature Image Highlight Banner */}
      <section className="py-12 bg-background">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="relative aspect-[21/9] min-h-[260px] overflow-hidden border border-accent/30 shadow-elevated group">
              <img
                src={assets.services.destination}
                alt="Luxury Wedding Services"
                className="w-full h-full object-cover editorial-img-zoom opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-text/80 via-text/40 to-transparent" />
              <div className="absolute inset-0 flex items-center p-8 sm:p-14 text-surface max-w-xl">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                    Bespoke Curation
                  </span>
                  <h3 className="font-extrabold text-2xl sm:text-4xl leading-tight">
                    Every Service Tailored To Your Vision
                  </h3>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <ServiceIntro />
      <ServicesGrid />
      <CoordinationGrid />
      <CTASection
        title="Let's Plan Your Celebration"
        description="Tell us what you are imagining, and we'll help you shape the next step."
      />
    </PageContainer>
  );
};

