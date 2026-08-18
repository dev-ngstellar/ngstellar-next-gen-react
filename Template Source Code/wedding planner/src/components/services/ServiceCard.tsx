import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../../data/services';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div id={service.id} className="scroll-mt-28 border-b border-accent/20 pb-12 sm:pb-16 md:pb-24 max-w-full overflow-hidden">
      <ScrollReveal animation={isEven ? 'slide-left' : 'slide-right'}>
        <div className="bg-surface border border-accent/20 p-5 sm:p-8 lg:p-14 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group max-w-full">
          {/* Service Visual */}
          <div className={`lg:col-span-6 w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden border border-accent/20 bg-text rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover editorial-img-zoom opacity-95 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text/50 via-transparent to-transparent opacity-40" />

              {service.popular && (
                <span className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-accent text-text text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] px-3 sm:px-4 py-1.5 sm:py-2 border border-accent/40 shadow-md">
                  Most Popular
                </span>
              )}
            </div>
          </div>

          {/* Service Content */}
          <div className={`lg:col-span-6 w-full space-y-4 sm:space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="flex items-center justify-between border-b border-secondary pb-3 sm:pb-4">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                Service Suite — 0{index + 1}
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-accent/40 font-bold">
                0{index + 1}
              </span>
            </div>

            <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-text leading-tight group-hover:text-primary transition-colors break-words">
              {service.title}
            </h3>

            <p className="text-sm sm:text-base font-light text-mutedText leading-relaxed break-words">
              {service.fullDesc}
            </p>

            {/* Feature checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm font-light text-text/85">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="break-words">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 sm:pt-6 border-t border-secondary flex flex-col sm:flex-row items-stretch sm:items-center">
              <Button
                to={`/contact?service=${encodeURIComponent(service.title)}#enquiry-form`}
                variant={service.popular ? 'primary' : 'outline'}
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-center justify-center"
              >
                {service.ctaText || "Plan Your Wedding"}
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

