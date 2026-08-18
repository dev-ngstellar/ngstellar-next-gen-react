import React from 'react';
import { ArrowRight } from 'lucide-react';
import { routesConfig } from '../../config/routesConfig';
import { Button } from '../common/Button';
import { Container } from '../common/Container';

export const HeroSection: React.FC = () => {
  const stats = [
    { value: '150+', label: 'Weddings Planned' },
    { value: '100%', label: 'Bespoke Design' },
    { value: '12+', label: 'Years of Experience' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#1A1817]">
      {/* Background Hero Bride & Groom Image Canvas with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-wedding.jpg"
          alt="Luxury wedding couple"
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817] via-[#1A1817]/60 to-[#1A1817]/40" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <Container className="relative z-10 text-center text-surface pt-12 pb-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold">
              Planning Luxury Weddings & Events
            </span>
          </div>

          {/* Hero Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-surface drop-shadow-md">
            Your Dream Wedding, <br className="hidden sm:block" />
            <span className="italic font-serif font-normal text-accent">Beautifully Planned</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg md:text-xl font-light text-surface/90 leading-relaxed max-w-2xl mx-auto drop-shadow">
            From intimate celebrations to grand destination weddings, we bring your vision to life with thoughtful planning, elegant design, and flawless execution.
          </p>

          {/* Primary Call To Action Button */}
          <div className="pt-4 flex justify-center">
            <Button
              to={routesConfig.planWedding}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              className="bg-accent text-text hover:bg-accent/90 border-accent px-8 py-3.5 text-sm shadow-xl"
            >
              Plan Your Wedding
            </Button>
          </div>

          {/* Bottom Floating Stat Counters */}
          <div className="pt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-surface/20 shadow-2xl text-center space-y-1"
              >
                <div className="font-serif text-2xl sm:text-4xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-surface/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
