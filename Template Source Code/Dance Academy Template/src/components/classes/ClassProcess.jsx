import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { academyData } from '../../data/academy';

export default function ClassProcess() {
  const { eyebrow, heading, steps } = academyData.classExperience;

  return (
    <section className="py-14 md:py-20 bg-[#151719] relative overflow-hidden">
      <Container>
        <SectionTitle
          label={eyebrow}
          title={heading}
          subtitle="Our structured methodology ensures comprehensive artistic and physical progression."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="p-8 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-4xl font-serif font-bold text-[#C99683]/40 group-hover:text-[#C99683] transition-colors">
                  {step.number}
                </span>

                <h3 className="font-serif text-2xl font-bold text-[#F7F4F0] group-hover:text-[#C99683] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-[#A39E98] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#282523] flex items-center justify-between text-xs text-[#A39E98] uppercase tracking-wider">
                <span>Phase {index + 1}</span>
                <span className="w-2 h-2 rounded-full bg-[#C99683]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
