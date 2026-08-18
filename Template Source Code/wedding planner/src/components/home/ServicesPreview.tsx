import React from 'react';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/services';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const ServicesPreview: React.FC = () => {
  const previewServices = servicesData.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="Our Signature Offerings"
            title="Comprehensive Wedding Services"
            description="Explore our range of bespoke wedding planning services designed for your unique celebration."
            alignment="left"
            className="mb-0"
          />

          <Button to="/services" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            View All Services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewServices.map((service) => (
            <div
              key={service.id}
              className="bg-surface border border-secondary overflow-hidden group hover:shadow-elevated transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {service.popular && (
                  <span className="absolute top-4 left-4 bg-accent text-surface text-[10px] font-semibold uppercase tracking-widest px-3 py-1">
                    Signature
                  </span>
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h3 className="font-heading text-2xl font-normal text-text group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm font-light text-mutedText leading-relaxed flex-grow">
                  {service.shortDesc}
                </p>

                <div className="pt-4 border-t border-secondary">
                  <Button to="/services" variant="ghost" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Learn Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
