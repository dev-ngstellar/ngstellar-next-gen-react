import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';

export const WhatHappensNext: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Share Your Details",
      description: "Tell us about your wedding, your plans, and what you are looking for.",
    },
    {
      step: "02",
      title: "Let's Talk",
      description: "Our team will connect with you to understand your vision and priorities.",
    },
    {
      step: "03",
      title: "Start Planning",
      description: "Together, we'll explore the possibilities and take the first step toward your celebration.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-surface border-t border-accent/20">
      <Container>
        <ScrollReveal animation="fade-up">
          <SectionHeading
            eyebrow="Simple Steps"
            title="What Happens Next?"
            description="How we move from your initial inquiry to your dream celebration."
            alignment="center"
            className="mb-16 md:mb-20"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {steps.map((item, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 180}>
              <div className="p-8 lg:p-10 bg-background border border-accent/20 shadow-card hover:border-accent/80 transition-all duration-500 space-y-4 group h-full flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-serif font-bold text-accent/40 block mb-4 group-hover:text-accent transition-colors">
                    {item.step}
                  </span>
                  <h3 className="font-extrabold text-xl text-text mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-mutedText leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-secondary flex items-center justify-between text-[11px] uppercase tracking-widest text-accent font-semibold">
                  <span>Step {item.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

