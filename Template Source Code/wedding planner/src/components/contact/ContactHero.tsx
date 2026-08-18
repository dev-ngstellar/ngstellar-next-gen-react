import React from 'react';
import { assets } from '../../config/assets';
import { PageBanner } from '../common/PageBanner';

export const ContactHero: React.FC = () => {
  return (
    <PageBanner
      imageSrc={assets.services.venue}
      eyebrow="Get In Touch"
      title="Let's Start Planning Your Wedding"
      subtitle="Tell us a little about your celebration. Our wedding planning team will get in touch with you to discuss your vision."
    />
  );
};


