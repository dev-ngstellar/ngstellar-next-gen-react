import { motion } from 'framer-motion';
import ContactHero from '../../components/contact/ContactHero';
import ContactForm from '../../components/contact/ContactForm';
import BookingCard from '../../components/contact/BookingCard';
import ContactInfo from '../../components/contact/ContactInfo';
import MapSection from '../../components/contact/MapSection';
import FAQSection from '../../components/contact/FAQSection';
import { viewportOnce } from '../../utils/animations';

export default function Contact() {
  return (
    <>
      <ContactHero />

      {/* Main contact grid */}
      <section id="contact-form" className="section-padding" style={{ background: 'var(--secondary-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left column: Form */}
            <ContactForm />

            {/* Right column: Booking + Info + Map */}
            <div className="flex flex-col gap-6">
              <BookingCard />
              <ContactInfo />
              <MapSection />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
