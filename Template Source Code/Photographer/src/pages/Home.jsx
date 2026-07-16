import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import About from '../components/About';
import GalleryGrid from '../components/GalleryGrid';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import BookingCTA from '../components/BookingCTA';

const Home = () => {
  return (
    <div className="bg-[var(--background)] text-[var(--text)]">
      <Hero />
      <CategorySection />
      <About />
      <GalleryGrid />
      <Testimonials />
      <InstagramFeed />
      <BookingCTA />
    </div>
  );
};

export default Home;
