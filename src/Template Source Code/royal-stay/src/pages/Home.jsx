import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import SearchAvailability from '../components/home/SearchAvailability';
import FeaturedRooms from '../components/home/FeaturedRooms';
import Amenities from '../components/home/Amenities';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';
import Location from '../components/home/Location';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="animate-page-enter">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Availability Bar */}
      <SearchAvailability />

      {/* 3. Featured Rooms Grid */}
      <FeaturedRooms />

      {/* 4. Palace Amenities */}
      <Amenities />

      {/* 5. Photos Gallery */}
      <Gallery />

      {/* 6. Guest Testimonials */}
      <Testimonials />

      {/* 7. Hotel Location Section */}
      <Location />

      {/* 8. Newsletter Signup */}
      <Newsletter />
    </div>
  );
};

export default Home;
