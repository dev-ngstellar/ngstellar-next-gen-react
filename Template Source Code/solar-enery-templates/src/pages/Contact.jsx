import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { Container } from '../components/common/Container';
import { SectionTitle } from '../components/common/SectionTitle';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { MapPlaceholder } from '../components/contact/MapPlaceholder';
import { FAQSection } from '../components/home/FAQSection';
import { CTASection } from '../components/common/CTASection';

export const Contact = () => {
  return (
    <>
      <PageHero
        title="Get In Touch With"
        highlightText="Solar Specialists"
        plainTitle="Contact Us"
        description="Schedule a free solar feasibility assessment, request a custom ROI quote, or get answers to your renewable energy questions."
        badge="Zero-Obligation Consultation"
      />

      <section className="py-20 lg:py-28 bg-slate-50">
        <Container>
          <SectionTitle
            badge="Let's Talk Solar"
            title="Start Saving With Renewable"
            highlightText="Solar Power Today"
            subtitle="Send us a message or give us a call. Our engineering team will review your roof layout and current electricity bill to build a custom solar proposal."
            centered={true}
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Details */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>

          {/* Map Visual Location Card */}
          <div className="mt-16">
            <MapPlaceholder />
          </div>
        </Container>
      </section>

      {/* FAQ Drawer */}
      <FAQSection />

      {/* Final CTA */}
      <CTASection />
    </>
  );
};
