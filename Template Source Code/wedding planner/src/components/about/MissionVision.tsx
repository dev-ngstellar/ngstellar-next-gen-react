import React from 'react';
import { Target, Eye } from 'lucide-react';
import { Container } from '../common/Container';
import { ScrollReveal } from '../common/ScrollReveal';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-14 md:py-18 bg-[#FAF7F2] relative overflow-hidden">
      <Container size="lg" className="relative z-10">
        
        {/* Two Enhanced Equal-Height Luxury Cards Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Our Mission Card */}
          <ScrollReveal animation="slide-left" className="h-full">
            <div className="p-8 sm:p-10 rounded-3xl bg-surface/85 backdrop-blur-md border border-[#C9A35D]/30 shadow-soft hover:shadow-xl hover:border-[#C9A35D] transition-all duration-300 h-full flex flex-col justify-between text-center space-y-5">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#F5EFE5] flex items-center justify-center border border-[#C9A35D]/40 shadow-sm">
                  <Target className="w-6 h-6 text-[#C9A35D]" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A35D] font-semibold block">
                  OUR MISSION
                </span>
                <div className="w-12 h-[1px] bg-[#C9A35D]/40 mx-auto" />
                <p className="text-sm sm:text-base font-light text-[#756D67] leading-relaxed pt-2">
                  To create beautifully planned celebrations where every detail reflects the couple's personality, values, and vision, while making the planning experience as enjoyable and stress-free as the celebration itself.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Our Vision Card */}
          <ScrollReveal animation="slide-right" className="h-full">
            <div className="p-8 sm:p-10 rounded-3xl bg-surface/85 backdrop-blur-md border border-[#C9A35D]/30 shadow-soft hover:shadow-xl hover:border-[#C9A35D] transition-all duration-300 h-full flex flex-col justify-between text-center space-y-5">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#F5EFE5] flex items-center justify-center border border-[#C9A35D]/40 shadow-sm">
                  <Eye className="w-6 h-6 text-[#C9A35D]" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A35D] font-semibold block">
                  OUR VISION
                </span>
                <div className="w-12 h-[1px] bg-[#C9A35D]/40 mx-auto" />
                <p className="text-sm sm:text-base font-light text-[#756D67] leading-relaxed pt-2">
                  To be a trusted name in wedding experiences, known for thoughtful planning, timeless design, meaningful celebrations, and the confidence we give every couple throughout their journey.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Horizontal Champagne Separator Line with Center ♡ */}
        <div className="pt-14 flex items-center justify-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9A35D]/40 to-[#C9A35D]/60" />
          <span className="text-[#C9A35D] text-sm px-2">♡</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C9A35D]/60 via-[#C9A35D]/40 to-transparent" />
        </div>
      </Container>
    </section>
  );
};
