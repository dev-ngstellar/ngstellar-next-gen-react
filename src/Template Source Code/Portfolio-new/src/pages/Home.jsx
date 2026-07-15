import React from 'react';
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import AboutPreview from '../components/home/AboutPreview';
import Services from '../components/home/Services';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Skills from '../components/home/Skills';
import Experience from '../components/home/Experience';
import Testimonials from '../components/home/Testimonials';
import LatestArticles from '../components/home/LatestArticles';
import CTABanner from '../components/shared/CTABanner';

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustedBy />
      <AboutPreview />
      <Services />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Testimonials />
      <LatestArticles />
      <CTABanner />
    </div>
  );
}

export default Home;
