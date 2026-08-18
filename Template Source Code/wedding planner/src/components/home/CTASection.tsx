import React from 'react';
import { ArrowRight } from 'lucide-react';
import { routesConfig } from '../../config/routesConfig';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { ScrollReveal } from '../common/ScrollReveal';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Let's Plan Your Celebration",
  description = "Tell us what you are imagining, and we'll help you shape the next step.",
  buttonText = "PLAN YOUR WEDDING",
  buttonLink = routesConfig.planWedding,
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#1A1817] text-surface relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-[#1A1817] to-black/90 pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Side: Candlelit staircase image */}
          <div className="hidden lg:flex lg:col-span-3 justify-start items-center">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-surface/20 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="/assets/ring-box-left.jpg"
                alt="Candlelit wedding staircase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Center Column: Text & Call to Action Button */}
          <div className="lg:col-span-6 text-center space-y-6 max-w-xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="space-y-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-surface">
                  {title}
                </h2>

                <p className="text-sm sm:text-base font-light text-surface/80 leading-relaxed max-w-md mx-auto">
                  {description}
                </p>

                <div className="pt-4 flex justify-center">
                  <Button
                    to={buttonLink}
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="bg-[#8B5E5E] text-surface hover:bg-[#8B5E5E]/90 border-[#8B5E5E] px-8 py-3.5 text-sm shadow-2xl font-semibold tracking-wider"
                  >
                    {buttonText}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: High-Resolution Pink Roses & Candles Wedding Table Image */}
          <div className="hidden lg:flex lg:col-span-3 justify-end items-center">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-surface/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="/assets/rings-rose-right.jpg"
                alt="Roses and candle wedding table arrangement"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
