import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaPlay, FaCalendarCheck } from 'react-icons/fa6';
import { useTheme } from '../../context/ThemeContext';

const heroImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85',
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&q=85',
  'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1920&q=85',
];

export default function HeroSection() {
  const { activeLayout } = useTheme();

  const heroContent = {
    wedding: {
      image: heroImages[0],
      eyebrow: 'Premium Wedding Management',
      headline: 'Your Perfect Day,',
      headlineAccent: 'Perfectly Planned.',
      sub: 'From intimate ceremonies to grand celebrations, we craft breathtaking weddings that tell your unique love story.',
      btn1: 'Explore Wedding Services',
      btn2: 'Book Consultation',
    },
    corporate: {
      image: heroImages[1],
      eyebrow: 'Corporate Event Solutions',
      headline: 'Events That Drive',
      headlineAccent: 'Business Results.',
      sub: 'Professionally executed corporate events that elevate your brand, engage your audience, and achieve measurable outcomes.',
      btn1: 'View Corporate Services',
      btn2: 'Get a Quote',
    },
    festival: {
      image: heroImages[2],
      eyebrow: 'Festival & Concert Management',
      headline: 'Experiences That',
      headlineAccent: 'Move Crowds.',
      sub: 'From intimate concerts to 50,000-person festivals — we deliver electrifying, safe, and unforgettable live experiences.',
      btn1: 'Upcoming Festivals',
      btn2: 'Get Tickets',
    },
    exhibition: {
      image: heroImages[3],
      eyebrow: 'Exhibition & Trade Show Experts',
      headline: 'Connect. Showcase.',
      headlineAccent: 'Grow.',
      sub: 'World-class trade shows and exhibitions that bring together industry leaders, innovators, and decision-makers.',
      btn1: 'View Exhibitions',
      btn2: 'Register Now',
    },
  };

  const content = heroContent[activeLayout] || heroContent.wedding;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          key={content.image}
          src={content.image}
          alt="Event hero"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        {/* Overlays */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)' }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse-glow"
        style={{ background: 'var(--color-primary)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
        style={{ background: 'var(--color-accent)' }} />

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Eyebrow */}
          <motion.div
            className="section-label mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {content.eyebrow}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="heading-display text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: '1.05' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {content.headline}
            <br />
            <span style={{ color: 'var(--color-primary)' }}>{content.headlineAccent}</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {content.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Link to="/events" className="btn-primary text-sm md:text-base">
              <FaCalendarCheck />
              <span>{content.btn1}</span>
            </Link>
            <Link to="/contact" className="btn-outline text-sm md:text-base">
              <span>{content.btn2}</span>
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            {[
              { value: '1,200+', label: 'Events Managed' },
              { value: '850+', label: 'Happy Clients' },
              { value: '12 Yrs', label: 'Experience' },
              { value: '60+', label: 'Team Members' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                  {value}
                </div>
                <div className="text-white/40 text-xs mt-0.5 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
