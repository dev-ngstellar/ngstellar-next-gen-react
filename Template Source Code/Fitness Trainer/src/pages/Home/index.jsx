import HeroSection from '../../components/home/HeroSection';
import MarqueeSection from '../../components/home/MarqueeSection';
import ProgramsSection from '../../components/home/ProgramsSection';
import TransformationSection from '../../components/home/TransformationSection';
import WhyChooseSection from '../../components/home/WhyChooseSection';
import StatsSection from '../../components/home/StatsSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import CTASection from '../../components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ProgramsSection />
      <TransformationSection />
      <WhyChooseSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
