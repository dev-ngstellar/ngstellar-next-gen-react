import React from 'react';
import PageHero from '../components/common/PageHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import LocationSection from '../components/contact/LocationSection';
import FAQSection from '../components/contact/FAQSection';
import CTASection from '../components/common/CTASection';
import { academyData } from '../data/academy';

export default function Contact() {
  const { eyebrow, heading, description, image } = academyData.contactHero;
  const cta = academyData.ctaSection.contact;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <PageHero
        eyebrow={eyebrow}
        heading={heading}
        description={description}
        image={image}
      />
      <ContactInfo />
      <ContactForm />
      <LocationSection />
      <FAQSection />
      <CTASection
        heading={cta.heading}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
      />
    </main>
  );
}
