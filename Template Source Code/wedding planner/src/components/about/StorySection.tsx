import React from 'react';
import { Container } from '../common/Container';
import { ScrollReveal } from '../common/ScrollReveal';

export const StorySection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FAF7F2] relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Clean Editorial Image without outline border */}
          <div className="lg:col-span-6">
            <ScrollReveal animation="slide-left">
              <div className="relative w-full h-[380px] sm:h-[450px] md:h-[480px] rounded-3xl overflow-hidden group">
                <img
                  src="/assets/about-wedding.jpg"
                  alt="Our story - luxury wedding planner"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Narrative Editorial Content */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <ScrollReveal animation="slide-right">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A35D] font-semibold block">
                  Our Journey
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#2D2927] font-serif">
                  Our Story
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
                  <span className="h-[1px] w-10 bg-[#C9A35D]/50" />
                  <span className="text-[#C9A35D] text-sm">♡</span>
                  <span className="h-[1px] w-10 bg-[#C9A35D]/50" />
                </div>
              </div>

              <div className="space-y-3 text-sm sm:text-base font-light text-[#756D67] leading-relaxed pt-1">
                <p>
                  Every celebration begins with a story. Our role is to listen, understand what matters to each couple, and turn those ideas into a wedding that feels personal, beautiful, and effortless.
                </p>
                <p>
                  From intimate gatherings surrounded by loved ones to grand celebrations filled with unforgettable details, we bring creativity, organization, and attention to detail to every stage of the planning journey.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Horizontal Champagne Separator Line with Center ♡ */}
        <div className="pt-12 flex items-center justify-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9A35D]/40 to-[#C9A35D]/60" />
          <span className="text-[#C9A35D] text-sm px-2">♡</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C9A35D]/60 via-[#C9A35D]/40 to-transparent" />
        </div>
      </Container>
    </section>
  );
};
