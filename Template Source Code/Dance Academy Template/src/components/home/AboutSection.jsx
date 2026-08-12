import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { ArrowRight, Award, HeartHandshake, Sparkles } from 'lucide-react';
import { academyData } from '../../data/academy';

export default function AboutSection() {
  const { eyebrow, heading, content, buttonText, buttonHref, image } = academyData.about;

  return (
    <section className="py-10 md:py-14 bg-[#101214] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-[#282523] bg-[#1B1B1D] group">
              <img
                src={image}
                alt="Rhythm Dance Academy studio instruction"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#101214]/90 backdrop-blur-md border border-[#282523] flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#C99683]/20 text-[#C99683] border border-[#C99683]/30 shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#F7F4F0] text-base">Professional Mentorship</h4>
                  <p className="text-xs text-[#A39E98]">Encouraging studio environment for all dancers</p>
                </div>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#C99683]/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Text Side */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C99683] bg-[#C99683]/10 px-4 py-1.5 rounded-full border border-[#C99683]/30 inline-block">
              {eyebrow}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4F0] leading-tight">
              {heading}
            </h2>

            <p className="text-base sm:text-lg text-[#A39E98] leading-relaxed font-light">
              {content}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#282523]">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C99683] shrink-0 mt-1" />
                <div>
                  <h5 className="text-[#F7F4F0] text-sm font-semibold">Excellence</h5>
                  <p className="text-xs text-[#A39E98]">High standards of dance technique</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#C99683] shrink-0 mt-1" />
                <div>
                  <h5 className="text-[#F7F4F0] text-sm font-semibold">Community</h5>
                  <p className="text-xs text-[#A39E98]">Warm & supportive atmosphere</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button to={buttonHref} variant="primary" size="md" className="group">
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
