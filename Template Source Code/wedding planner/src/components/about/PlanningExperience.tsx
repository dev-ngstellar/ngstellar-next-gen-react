import React from 'react';
import { Container } from '../common/Container';
import { ScrollReveal } from '../common/ScrollReveal';

export const PlanningExperience: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Listen',
      desc: 'We begin by understanding your story, priorities, and expectations.',
    },
    {
      number: '02',
      title: 'Create',
      desc: 'We shape those ideas into a beautiful celebration with carefully planned details.',
    },
    {
      number: '03',
      title: 'Celebrate',
      desc: 'We coordinate everything behind the scenes so you can enjoy every moment with the people you love.',
    },
  ];

  return (
    <section 
      className="py-14 md:py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url('/assets/Web_Photo_Editor_4.jpg')` }}
    >
      {/* Semi-Transparent Soft Cream Overlay for Legibility */}
      <div className="absolute inset-0 bg-[#FAF7F2]/85 backdrop-blur-[2px] z-0" />

      <Container size="lg" className="relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center space-y-2 max-w-2xl mx-auto mb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A35D] font-semibold block">
              The Way We Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#2D2927] font-serif">
              A Planning Experience Designed Around You
            </h2>
            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="h-[1px] w-10 bg-[#C9A35D]/50" />
              <span className="text-[#C9A35D] text-sm">♡</span>
              <span className="h-[1px] w-10 bg-[#C9A35D]/50" />
            </div>
          </div>
        </ScrollReveal>

        {/* Description Paragraph */}
        <ScrollReveal animation="fade-up">
          <p className="text-xs sm:text-sm font-light text-[#756D67] leading-relaxed max-w-2xl mx-auto text-center mb-10">
            We believe wedding planning should be exciting, organized, and personal. We work closely with every couple to understand their expectations, create a clear plan, coordinate the details, and bring everything together on the day.
          </p>
        </ScrollReveal>

        {/* Unified Outer Frame Container Wrapping the 3 Process Steps */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-[2.5rem] bg-surface/85 backdrop-blur-md border border-[#C9A35D]/40 shadow-2xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Dotted Gold Track Line connecting numbers */}
            <div className="hidden md:block absolute top-6 left-1/4 right-1/4 h-[1px] bg-[#C9A35D]/40 pointer-events-none z-0" />

            {steps.map((step, idx) => (
              <ScrollReveal key={step.number} animation="fade-up" delay={idx * 150}>
                <div className="text-center space-y-3 p-6 rounded-3xl bg-[#FAF7F2] border border-[#C9A35D]/25 shadow-soft hover:shadow-xl hover:border-[#C9A35D] transition-all duration-300 relative z-10 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-11 h-11 mx-auto rounded-full bg-[#F5EFE5] flex items-center justify-center border border-[#C9A35D]/40 font-serif text-sm font-bold text-[#C9A35D] shadow-sm">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-lg text-[#2D2927] font-serif">
                      {step.title}
                    </h3>
                    <div className="w-6 h-[1px] bg-[#C9A35D]/40 mx-auto" />
                    <p className="text-xs font-light text-[#756D67] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
