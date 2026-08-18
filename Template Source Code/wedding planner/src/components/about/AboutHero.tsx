import React from 'react';
import { assets } from '../../config/assets';
import { PageBanner } from '../common/PageBanner';

export const AboutHero: React.FC = () => {
  return (
    <PageBanner
      imageSrc={assets.about}
      eyebrow="About Us"
      title="About Us"
      subtitle="We Plan. You Celebrate."
    />
  );
};


