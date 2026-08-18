import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactIntro } from '../components/contact/ContactIntro';
import { ContactInfo } from '../components/contact/ContactInfo';
import { EnquiryForm } from '../components/contact/EnquiryForm';
import { WhatHappensNext } from '../components/contact/WhatHappensNext';
import { Container } from '../components/common/Container';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { siteConfig } from '../config/siteConfig';
import { assets } from '../config/assets';

export const Contact: React.FC = () => {
  return (
    <PageContainer title={`Plan Your Wedding | ${siteConfig.brand.name}`}>
      <ContactHero />
      <ContactIntro />
      
      {/* Contact Feature Banner Image */}
      <section className="pb-12 bg-background">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="relative aspect-[21/9] min-h-[220px] overflow-hidden border border-accent/30 shadow-elevated group">
              <img
                src={assets.services.venue}
                alt="Luxury Wedding Venue & Consultation Studio"
                className="w-full h-full object-cover editorial-img-zoom opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text/85 via-text/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-surface">
                <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-1">
                  Studio Consultation
                </span>
                <p className="font-serif italic text-base sm:text-xl">
                  "Let's discuss your date, venue preferences, and design dream."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="pb-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>
      <WhatHappensNext />
    </PageContainer>
  );
};

