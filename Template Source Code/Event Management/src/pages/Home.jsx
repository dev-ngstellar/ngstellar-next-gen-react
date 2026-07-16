import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import UpcomingEventsSection from '../components/sections/UpcomingEventsSection';
import EventCategoriesSection from '../components/sections/EventCategoriesSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import GallerySection from '../components/sections/GallerySection';
import PackagesSection from '../components/sections/PackagesSection';
import StatisticsSection from '../components/sections/StatisticsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import { pageTransition } from '../utils/animations';

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <HeroSection />
      <ServicesSection />
      <UpcomingEventsSection />
      <EventCategoriesSection />
      <StatisticsSection />
      <WhyChooseUsSection />
      <GallerySection />
      <PackagesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </motion.div>
  );
}
