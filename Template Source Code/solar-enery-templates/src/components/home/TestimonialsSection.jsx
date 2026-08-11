import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { testimonialsData } from '../../data/testimonials';

import { ImageWithFallback } from '../common/ImageWithFallback';

export const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        <SectionTitle
          badge="Customer Testimonials"
          title="What Our Clients Say About"
          highlightText="Solarix"
          subtitle="Read real experiences from home and business owners who transformed their energy bill with our solar systems."
          dark={true}
          centered={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-panel-dark p-8 rounded-2xl border border-slate-800 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-orange-500/20 absolute top-6 right-6" />

              <div className="space-y-4 mb-6">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <ImageWithFallback
                  src={item.image}
                  alt={`${item.name} - ${item.role}`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#f0771a] shrink-0"
                />
                <div>
                  <h4 className="text-base font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-[#f0771a] font-medium">{item.role}</p>
                  <p className="text-xs text-slate-400">{item.company} • {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
