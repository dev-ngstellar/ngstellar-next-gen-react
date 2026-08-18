import React from 'react';
import { Heart, Sparkles, Users, Clock } from 'lucide-react';
import { Container } from '../common/Container';
import { ScrollReveal } from '../common/ScrollReveal';

export const ValuesSection: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'Personal Stories',
      desc: 'Every couple is different, and every celebration should feel personal.',
      icon: <Heart className="w-5 h-5 text-[#C9A35D]" />,
    },
    {
      number: '02',
      title: 'Thoughtful Details',
      desc: 'We believe the smallest details can create the most memorable moments.',
      icon: <Sparkles className="w-5 h-5 text-[#C9A35D]" />,
    },
    {
      number: '03',
      title: 'Genuine Connections',
      desc: 'We build strong relationships with couples, families, venues, and vendors throughout the planning journey.',
      icon: <Users className="w-5 h-5 text-[#C9A35D]" />,
    },
    {
      number: '04',
      title: 'Effortless Celebrations',
      desc: 'We manage the details behind the scenes so you can be fully present for your special moments.',
      icon: <Clock className="w-5 h-5 text-[#C9A35D]" />,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
      <Container size="lg" className="relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A35D] font-semibold block">
              Our Principles
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#2D2927] font-serif">
              What Matters to Us
            </h2>
            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="h-[1px] w-12 bg-[#C9A35D]/50" />
              <span className="text-[#C9A35D] text-base">♡</span>
              <span className="h-[1px] w-12 bg-[#C9A35D]/50" />
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Principles Columns Grid with Gold Separators */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {principles.map((item, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="text-center space-y-3 p-6 rounded-3xl bg-surface/70 backdrop-blur-sm border border-[#C9A35D]/25 shadow-soft hover:shadow-xl hover:border-[#C9A35D] transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="font-serif text-xs font-bold text-[#C9A35D] tracking-widest block">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 mx-auto rounded-full bg-[#F5EFE5] flex items-center justify-center border border-[#C9A35D]/30 shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-base text-[#2D2927] font-serif">
                      {item.title}
                    </h3>
                    <div className="w-6 h-[1px] bg-[#C9A35D]/40 mx-auto" />
                    <p className="text-xs font-light text-[#756D67] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Horizontal Champagne Separator Line with Center ♡ */}
        <div className="pt-20 flex items-center justify-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9A35D]/40 to-[#C9A35D]/60" />
          <span className="text-[#C9A35D] text-sm px-2">♡</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C9A35D]/60 via-[#C9A35D]/40 to-transparent" />
        </div>
      </Container>
    </section>
  );
};
