import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustedBy from '../components/home/TrustedBy';
import AboutSection from '../components/home/AboutSection';
import FeatureSection from '../components/home/FeatureSection';
import PopularMenu from '../components/home/PopularMenu';
import SignatureDrink from '../components/home/SignatureDrink';
import ChefSection from '../components/home/ChefSection';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <TrustedBy />
      <AboutSection />
      <FeatureSection />
      <PopularMenu />
      <SignatureDrink />
      <ChefSection />
      <Testimonials />
      <Gallery />
      <CTASection />
    </div>
  );
}
