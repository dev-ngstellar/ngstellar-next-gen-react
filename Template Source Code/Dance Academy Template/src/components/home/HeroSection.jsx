import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { ArrowRight, Play } from 'lucide-react';
import { academyData } from '../../data/academy';

export default function HeroSection() {
  const { eyebrow, heading, description, image, primaryCta, secondaryCta } = academyData.hero;

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-20 flex items-center bg-[#101214] overflow-hidden">
      {/* Background Photography with Cinematic Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Rhythm Dance Academy performance"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/65 to-[#101214]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101214] via-[#101214]/75 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl space-y-8">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C99683]/10 border border-[#C99683]/30 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#C99683] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C99683]">
              {eyebrow}
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F7F4F0] leading-[1.1]">
            Find Your <span className="italic font-normal text-[#C99683]">Rhythm.</span><br />
            Own the <span className="underline decoration-[#C99683]/50 underline-offset-8">Stage.</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#A39E98] max-w-2xl leading-relaxed font-light">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button to={primaryCta.href} variant="primary" size="lg" className="group">
              <span>{primaryCta.text}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button to={secondaryCta.href} variant="secondary" size="lg" className="group">
              <Play className="w-4 h-4 fill-[#F7F4F0] shrink-0" />
              <span>{secondaryCta.text}</span>
            </Button>
          </div>

          {/* Sub-badge info */}
          <div className="pt-8 border-t border-[#282523] flex items-center gap-8 text-xs text-[#A39E98] uppercase tracking-widest">
            <div>
              <span className="block text-[#F7F4F0] font-bold text-base">ALL AGES</span>
              <span>Kids & Adult Classes</span>
            </div>
            <div className="h-8 w-px bg-[#282523]" />
            <div>
              <span className="block text-[#F7F4F0] font-bold text-base">PRO FACULTY</span>
              <span>Experienced Mentors</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
