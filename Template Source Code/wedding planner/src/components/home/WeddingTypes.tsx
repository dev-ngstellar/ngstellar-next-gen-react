import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { ScrollReveal } from '../common/ScrollReveal';

export const WeddingTypes: React.FC = () => {
  const experiences = [
    {
      id: 'luxury',
      tag: 'Grandeur & Sophistication',
      title: 'Luxury Weddings',
      description: 'Elegant celebrations with sophisticated styling and unforgettable details.',
      image: '/assets/gallery/wedding-01.jpg',
    },
    {
      id: 'destination',
      tag: 'Scenic & Escapism',
      title: 'Destination Weddings',
      description: 'Breathtaking celebrations planned in remarkable locations with seamless coordination.',
      image: '/assets/gallery/wedding-02.jpg',
    },
    {
      id: 'intimate',
      tag: 'Intimate & Heartfelt',
      title: 'Intimate Weddings',
      description: 'Warm, personal celebrations designed for the people who matter most.',
      image: '/assets/gallery/wedding-03.jpg',
    },
    {
      id: 'traditional',
      tag: 'Timeless & Classic',
      title: 'Traditional Weddings',
      description: 'Timeless ceremonies that beautifully honor traditions while reflecting your unique style.',
      image: '/assets/gallery/wedding-04.jpg',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background border-b border-accent/20 relative overflow-hidden">
      <Container>
        <ScrollReveal animation="fade-up">
          <SectionHeading
            eyebrow="Bespoke Styles"
            title="Celebrations Made Around Your Story"
            description="Whether you dream of an intimate gathering or a grand celebration, we create experiences that feel personal, beautiful, and effortless."
            alignment="center"
            className="mb-16 md:mb-20"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {experiences.map((item, idx) => (
            <ScrollReveal key={item.id} animation="fade-up" delay={idx * 120}>
              <div className="group relative overflow-hidden bg-surface border border-accent/25 hover:border-accent/80 transition-all duration-500 rounded-2xl shadow-card">
                {/* Image Container */}
                <div className="aspect-[16/9] overflow-hidden relative bg-text">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover editorial-img-zoom opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="accent" className="bg-surface/90 backdrop-blur-md text-text font-bold px-3 py-1 border border-accent/30 text-[10px] uppercase tracking-wider shadow-sm">
                      {item.tag}
                    </Badge>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="font-extrabold text-xl sm:text-2xl text-text group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-light text-mutedText leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-accent/15 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                      Curated Experience
                    </span>
                    <ArrowRight className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
