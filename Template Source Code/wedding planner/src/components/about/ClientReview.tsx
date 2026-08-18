import React from 'react';
import { Container } from '../common/Container';
import { ScrollReveal } from '../common/ScrollReveal';

export const ClientReview: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#F5EFE5] text-center relative overflow-hidden">
      
      {/* Background Subtle Botanical Line-Art SVG Vector */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none opacity-20 text-[#C9A35D]">
        <svg viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M10,90 Q100,10 190,90 M50,70 Q100,30 150,70" />
        </svg>
      </div>

      <Container size="lg" className="relative z-10">
        {/* Center Testimonial Block */}
        <div className="max-w-3xl mx-auto p-7 sm:p-10 rounded-3xl bg-surface/80 backdrop-blur-md border border-[#C9A35D]/30 shadow-2xl relative z-10">
          <ScrollReveal animation="fade-up">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A35D] font-semibold block">
              Words From Our Couples
            </span>
            <p className="font-serif italic text-lg sm:text-2xl text-[#2D2927] leading-relaxed font-normal pt-2">
              "From the first conversation to the final celebration, everything felt thoughtfully planned. We were able to enjoy our wedding without worrying about the details."
            </p>
            <div className="pt-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A35D] font-semibold">
                — Happy Couple
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};
