import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const HomeIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#C9A35D]/20 relative overflow-hidden"
    >
      {/* Background Image with Gradient Fade Mask from Left to Right */}
      <div className="absolute top-0 bottom-0 left-0 w-full md:w-1/2 pointer-events-none opacity-40 md:opacity-50 z-0">
        <img
          src="/assets/about-wedding.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 95%)',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 95%)',
          }}
        />
      </div>

      <Container size="lg" className="relative z-10">
        {/* Center Main Text Content */}
        <div
          className="text-center space-y-6 max-w-2xl mx-auto transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <SectionHeading
            eyebrow="Welcome To Our Studio"
            title="Creating Celebrations That Feel Like You"
            alignment="center"
            className="mb-2"
          />

          <p className="text-base sm:text-lg font-light text-[#756D67] leading-relaxed">
            Every couple has a distinct narrative, and your wedding day should be a seamless reflection of it. From the first spark of inspiration to the final toast, we meticulously curate every detail to arrangement, spatial flow, and timeline moment around your personality.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-[#C9A35D]/60" />
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A35D] font-semibold">
              Thoughtful planning • Beautiful details • Meaningful moments
            </p>
            <span className="h-[1px] w-12 bg-[#C9A35D]/60" />
          </div>
        </div>
      </Container>
    </section>
  );
};
