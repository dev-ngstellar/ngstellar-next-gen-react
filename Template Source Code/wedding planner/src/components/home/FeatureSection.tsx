import React from 'react';
import { HeartHandshake, Palette, ShieldCheck, Clock } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';

export const FeatureSection: React.FC = () => {
  const features = [
    {
      id: '01',
      title: 'Personalized Planning',
      description: 'Every wedding is designed around your story and style.',
      icon: <HeartHandshake className="w-5 h-5 text-accent" />,
    },
    {
      id: '02',
      title: 'Creative Décor',
      description: 'Floral, furniture, fabric, lighting, and detailed event styling.',
      icon: <Palette className="w-5 h-5 text-accent" />,
    },
    {
      id: '03',
      title: 'Trusted Vendors',
      description: 'A carefully vetted network of reliable and high-end professionals.',
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
    },
    {
      id: '04',
      title: 'Seamless Execution',
      description: 'From the first rehearsal to the final celebration, we manage every detail.',
      icon: <Clock className="w-5 h-5 text-accent" />,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-surface border-b border-accent/20 relative overflow-hidden">
      <Container className="relative z-10">
        <ScrollReveal animation="fade-up">
          <SectionHeading
            eyebrow="Why Couples Trust Us"
            title="Why Choose Us?"
            description="We take care of every detail so you can focus on celebrating the moments that matter most."
            alignment="center"
            className="mb-16 md:mb-20"
          />
        </ScrollReveal>

        {/* 4 Luxury Arch Cards Grid matching design screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal key={feature.id} animation="fade-up" delay={idx * 120}>
              <div className="group relative p-8 bg-background/90 backdrop-blur-sm border border-accent/30 rounded-[2.5rem] hover:border-accent hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between overflow-hidden cursor-pointer">
                <div>
                  {/* Top Arch Crest Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center border border-accent/40 group-hover:bg-accent group-hover:text-surface transition-all duration-500">
                      {feature.icon}
                    </div>
                    <span className="font-serif text-2xl font-bold text-accent/50 group-hover:text-accent transition-colors">
                      {feature.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-lg lg:text-xl text-text mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-light text-mutedText leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Card Action Tagline matching screenshot */}
                
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
