import React from 'react';
import { assets } from '../../config/assets';
import { PageBanner } from '../common/PageBanner';

export const GalleryHero: React.FC = () => {
  return (
    <PageBanner
      imageSrc={assets.gallery[0].image}
      eyebrow="Our Portfolio"
      title="Moments Made to Be Remembered"
      subtitle="Explore some of the celebrations we've designed, planned, and brought to life."
    />
  );
};


