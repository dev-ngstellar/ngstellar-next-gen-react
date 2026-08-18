import React from 'react';
import { assets } from '../../config/assets';
import { PageBanner } from '../common/PageBanner';

export const ServicesHero: React.FC = () => {
  return (
    <PageBanner
      imageSrc={assets.services.decor}
      eyebrow="Our Services"
      title="Everything You Need for Your Perfect Celebration"
      subtitle="From planning and styling to vendor coordination and event-day management, we offer complete wedding solutions tailored to your needs."
    />
  );
};


