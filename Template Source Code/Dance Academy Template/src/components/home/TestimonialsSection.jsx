import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { Quote, Star } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-10 md:py-14 bg-[#151719] relative overflow-hidden">
      <Container>
        <SectionTitle
          label="TESTIMONIALS"
          title="What Our Dancers Say"
          subtitle="Real stories from students and parents who have made our studio their artistic home."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/50 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-1 text-[#C99683]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C99683]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#C99683]/40 group-hover:text-[#C99683] transition-colors" />

                <p className="text-base text-[#F7F4F0] leading-relaxed italic font-serif">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#282523] flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-[#F7F4F0] text-sm">{item.author}</h4>
                  <p className="text-xs text-[#A39E98]">{item.role}</p>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#C99683]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
