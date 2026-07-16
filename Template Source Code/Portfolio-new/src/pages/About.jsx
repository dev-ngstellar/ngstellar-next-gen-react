import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import Experience from '../components/home/Experience';
import Skills from '../components/home/Skills';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/shared/CTABanner';

function About() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutStory />
      <Experience />
      <Skills />
      <Testimonials />
      <CTABanner />
    </div>
  );
}

export default About;
