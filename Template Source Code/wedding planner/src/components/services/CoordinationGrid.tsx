import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { assets } from '../../config/assets';

export const CoordinationGrid: React.FC = () => {
  const coordinationItems = [
    "Venue Selection",
    "Décor & Styling",
    "Floral Design",
    "Photography",
    "Catering",
    "Entertainment",
    "Guest Coordination",
    "Wedding Timeline",
    "Vendor Coordination",
    "Event-Day Management",
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-b border-accent/20 relative overflow-hidden">
      {/* Full-Size Full-Section Background Canvas with Top-Left and Bottom-Right Floral Waves */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={assets.floralWaveBg}
          alt="Full size floral wave section background"
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up">
          <SectionHeading
            eyebrow="Comprehensive Scope"
            title="Every Detail, Thoughtfully Coordinated"
            alignment="center"
            className="mb-12 md:mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {coordinationItems.map((item, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
              <div className="p-6 bg-white/95 backdrop-blur-sm border border-accent/20 rounded-2xl shadow-soft text-center space-y-3 flex flex-col items-center justify-center hover:border-accent hover:shadow-lg transition-all duration-300 h-full">
                <CheckCircle className="w-6 h-6 text-accent" />
                <h4 className="font-semibold text-sm text-text">
                  {item}
                </h4>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
