import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import FAQ from '../components/contact/FAQ';
import CTABanner from '../components/shared/CTABanner';

function Contact() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactForm />
      <FAQ />
      <CTABanner />
    </div>
  );
}

export default Contact;
