import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';

export const OurApproach: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation & Vision',
      desc: 'We sit down with you to understand your style, preferences, event expectations, and overall wedding dream.',
      tag: 'Initial Discovery',
    },
    {
      number: '02',
      title: 'Design & Curation',
      desc: 'Crafting a plan that turns ideas into reality with layouts, moodboards, vendor partnerships, and timeline blueprint.',
      tag: 'Creative Planning',
    },
    {
      number: '03',
      title: 'Flawless Execution',
      desc: "On your wedding day, our team ensures every moment runs smooth so all that's left is joy and lovely moments.",
      tag: 'Grand Celebration',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background border-b border-accent/20 relative overflow-hidden">

      {/* Top Left Ring Box Image (Moved to Far Left Edge & Made Significantly Larger) */}
      <div
        className="hidden lg:block absolute top-2 -left-8 lg:-left-4 xl:left-0 w-72 h-[380px] xl:w-80 xl:h-[420px] pointer-events-none z-0 opacity-95 transition-all duration-700"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 95%)',
          maskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 95%)',
        }}
      >
        <img
          src="/assets/ring-box-left.jpg"
          alt=""
          className="w-full h-full object-cover transform -rotate-3"
        />
      </div>

      {/* Bottom Right Flowers & Candle Image (Moved to Far Right Edge & Made Significantly Larger) */}
      <div
        className="hidden lg:block absolute bottom-2 -right-8 lg:-right-4 xl:right-0 w-72 h-[380px] xl:w-80 xl:h-[420px] pointer-events-none z-0 opacity-95 transition-all duration-700"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse at right center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 95%)',
          maskImage: 'radial-gradient(ellipse at right center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 95%)',
        }}
      >
        <img
          src="/assets/rings-rose-right.jpg"
          alt=""
          className="w-full h-full object-cover transform rotate-3"
        />
      </div>

      <Container size="lg" className="relative z-10">
        <ScrollReveal animation="fade-up">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Bring Your Vision To Life"
            description="A seamless, structured, and enjoyable planning experience from concept to celebration."
            alignment="center"
            className="mb-16 md:mb-20"
          />
        </ScrollReveal>

        {/* Center 3 Process Cards Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, idx) => (
              <ScrollReveal key={step.number} animation="fade-up" delay={idx * 150}>
                <div className="group relative p-7 pt-8 bg-surface/95 backdrop-blur-sm border border-accent/30 rounded-2xl shadow-soft hover:shadow-2xl hover:border-accent hover:-translate-y-2 transition-all duration-500 h-full flex flex-col justify-between cursor-pointer">

                  {/* Top Glowing Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

                  <div>
                    {/* Top Step Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-secondary/80 border border-accent/40 font-serif text-lg font-bold text-accent group-hover:bg-accent group-hover:text-surface transition-all duration-500">
                        {step.number}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-accent px-3 py-1 bg-accent/10 rounded-full border border-accent/25">
                        {step.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-extrabold text-lg lg:text-xl text-text mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs font-light text-mutedText leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
