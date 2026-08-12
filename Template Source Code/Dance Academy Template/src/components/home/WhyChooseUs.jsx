import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { academyData } from '../../data/academy';

export default function WhyChooseUs() {
  const { eyebrow, heading, features } = academyData.whyChooseUs;

  return (
    <section className="py-10 md:py-14 bg-[#151719] relative overflow-hidden">
      <Container>
        <SectionTitle
          label={eyebrow}
          title={heading}
          subtitle="We provide a transformative experience that empowers dancers inside and outside the studio."
          align="left"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="p-8 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/50 transition-all duration-300 group hover:-translate-y-1 relative shadow-lg"
            >
              <div className="text-4xl font-serif font-bold text-[#C99683]/40 group-hover:text-[#C99683] transition-colors duration-300 mb-6">
                {feature.number}
              </div>

              <h3 className="font-serif text-xl font-bold text-[#F7F4F0] mb-3 group-hover:text-[#C99683] transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm text-[#A39E98] leading-relaxed font-light">
                {feature.description}
              </p>

              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#C99683]/30 group-hover:bg-[#C99683] transition-colors" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
