import AboutHero from '../../components/about/AboutHero';
import TimelineSection from '../../components/about/TimelineSection';
import CertificationsSection from '../../components/about/CertificationsSection';
import SkillsSection from '../../components/about/SkillsSection';
import StudioGallery from '../../components/about/StudioGallery';
import AboutStats from '../../components/about/AboutStats';
import AboutCTA from '../../components/about/AboutCTA';

export default function About() {
  return (
    <>
      <AboutHero />
      <TimelineSection />
      <CertificationsSection />
      <SkillsSection />
      <StudioGallery />
      <AboutStats />
      <AboutCTA />
    </>
  );
}
