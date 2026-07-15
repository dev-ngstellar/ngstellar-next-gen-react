import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Infinite slow zoom effect on the image
    gsap.to(imageRef.current, {
      scale: 1.5,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Initial load animation for content
    gsap.fromTo(
      contentRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop")' }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--background)]"></div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <Camera size={48} className="text-[var(--accent)] opacity-80" strokeWidth={1} />
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight drop-shadow-2xl">
          Capturing timeless <br className="hidden md:block" /> stories through light.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 font-light">
          An exclusive luxury photography experience tailored for those who appreciate the profound beauty of captured moments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
          <a href="/gallery" className="w-full sm:w-auto px-10 py-4 bg-[var(--accent)] text-[var(--background)] font-medium tracking-wide hover:bg-white transition-all duration-300 rounded-full text-center">
            View Gallery
          </a>
          <a href="/contact" className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-sm rounded-full text-center">
            Book a Shoot
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase mb-3">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--accent)] to-transparent"></div>
      </motion.div>

      {/* Floating blurred gradient lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
