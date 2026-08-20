import { useState, useEffect, lazy, Suspense, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy-load Three.js canvas — defers initial bundle weight
const Hero3DAnimation = lazy(() => import('./Hero3DAnimation'));

const heroSlides = [
  {
    id: 1,
    badge: '👉 Transformation & Sustainability Advisory',
    title: 'Transform the Business.',
    titleHighlight: 'Sustain the Impact.',
    titleBody: '',
    descHighlight:
      'NG Stellar is a Transformation & Sustainability Advisory firm helping businesses navigate change, solve complex challenges, unlock opportunities and build sustainable long-term value.',
    descBody:
      'From business strategy and process transformation to technology, AI, digital growth and sustainability, we help organizations understand what needs to change—and turn that understanding into measurable action.',
    features: [
      { icon: '📊', label: 'Business Strategy' },
      { icon: '👥', label: 'People & Org' },
      { icon: '⚙️', label: 'Process & Tech' },
      { icon: '🌱', label: 'Sustainability' }
    ]
  },
  {
    id: 2,
    badge: '👉 Navigating Enterprise Change',
    title: 'Transform the Business.',
    titleHighlight: 'Sustain the Impact.',
    titleBody: '',
    descHighlight:
      'NG Stellar brings together business thinking, people, processes, technology and the right ecosystem to help businesses move from problem or idea to sustainable impact.',
    descBody:
      'From business strategy and process transformation to technology, AI, digital growth and sustainability, we help organizations understand what needs to change—and turn that understanding into measurable action.',
    features: [
      { icon: '📊', label: 'Business Strategy' },
      { icon: '👥', label: 'People & Org' },
      { icon: '⚙️', label: 'Process & Tech' },
      { icon: '🌱', label: 'Sustainability' }
    ]
  },
  {
    id: 3,
    badge: '👉 Delivering Measurable Value',
    title: 'Transform the Business.',
    titleHighlight: 'Sustain the Impact.',
    titleBody: '',
    descHighlight:
      'We help organizations understand what needs to change—and turn that understanding into measurable action and compounding long-term growth.',
    descBody:
      'From business strategy and process transformation to technology, AI, digital growth and sustainability, we help organizations understand what needs to change—and turn that understanding into measurable action.',
    features: [
      { icon: '📊', label: 'Business Strategy' },
      { icon: '👥', label: 'People & Org' },
      { icon: '⚙️', label: 'Process & Tech' },
      { icon: '🌱', label: 'Sustainability' }
    ]
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      id="home"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-5 md:pb-5 lg:pt-30 overflow-hidden no-wrap"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Full Banner 3D Animation — loads asynchronously after hero text */}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <Suspense fallback={null}>
          <Hero3DAnimation activeSlide={currentSlide} />
        </Suspense>
      </div>

      {/* Content - Text Carousel */}
      <div className="relative z-10 min-h-[400px] sm:min-h-[500px] flex items-center">
        <div className="w-full max-w-4xl px-4 md:px-4">
          <div className="space-y-6 sm:space-y-8 text-left">
            {/* Animated Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-400/40 bg-primary-500/15 text-primary-100 text-xs font-medium uppercase tracking-wider shadow-lg shadow-primary-500/20 text-left">
                  <span className="text-lg">{heroSlides[currentSlide].features[0].icon}</span>
                  {heroSlides[currentSlide].badge}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight drop-shadow-lg">
                  {heroSlides[currentSlide].title}{' '}
                  <span
                    className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent drop-shadow-md font-extrabold"
                    style={{
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 50%, #87be41 100%)'
                    }}
                  >
                    {heroSlides[currentSlide].titleHighlight}
                  </span>{' '}
                  {heroSlides[currentSlide].titleBody}
                </h1>

                <div className="max-w-2xl space-y-4">
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-100 leading-relaxed drop-shadow-md">
                    {heroSlides[currentSlide].descHighlight}
                  </p>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed drop-shadow-md border-l-2 border-primary-500/40 pl-4">
                    {heroSlides[currentSlide].descBody}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Controls - Stable Wrapper */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 relative z-[60]">
              <Link
                to="/contact/transformation-conversation"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="order-1 md:order-none inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:brightness-110 hover:shadow-sm hover:shadow-secondary-500/40 hover:scale-105 active:scale-95"
              >
                Start a Transformation Conversation
              </Link>

              <Link
                to="/approach"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="order-1 md:order-none inline-flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/15 border border-white/20 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-slate-100 hover:text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                Explore Our Approach
              </Link>

              {/* Features - Dynamic but wrapper is stable */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs sm:text-sm text-slate-300">
                {heroSlides[currentSlide].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="text-base md:text-lg">{feature.icon}</span>
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Carousel Navigation Controls - Stable & High Z-Index */}
              <div className="hidden lg:flex order-2 md:order-none items-center gap-2 md:gap-3 ml-auto relative pointer-events-auto">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="p-2 md:p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-white/20 backdrop-blur-md text-white transition-all hover:scale-110 active:scale-95 shadow-lg shadow-black/40 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dot Indicators */}
                <div className="flex gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 shadow-lg shadow-black/40 pointer-events-auto">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="p-2 md:p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-white/20 backdrop-blur-md text-white transition-all hover:scale-110 active:scale-95 shadow-lg shadow-black/40 cursor-pointer"
                  aria-label="Next slide"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
