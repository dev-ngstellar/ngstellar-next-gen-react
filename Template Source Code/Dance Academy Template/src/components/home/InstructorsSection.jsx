import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { instructorsData } from '../../data/instructors';

export default function InstructorsSection() {
  return (
    <section className="py-10 md:py-14 bg-[#151719] relative overflow-hidden">
      <Container>
        <SectionTitle
          label="FEATURED INSTRUCTORS"
          title="Learn from experienced dance Teachers."
          subtitle="Our master faculty brings world-class performance pedigree and artistic passion to every class."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {instructorsData.map((instructor) => (
            <div
              key={instructor.id}
              className="group relative rounded-3xl overflow-hidden bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/50 transition-all duration-500 shadow-xl"
            >
              {/* Photo */}
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Info */}
              <div className="p-6 relative -mt-16 z-10 bg-[#1B1B1D]/95 backdrop-blur-md border-t border-[#282523] rounded-b-3xl space-y-3">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#C99683]/10 text-[#C99683] text-xs font-semibold uppercase tracking-wider border border-[#C99683]/30">
                  {instructor.role}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#F7F4F0] group-hover:text-[#C99683] transition-colors">
                  {instructor.name}
                </h3>

                <p className="text-xs text-[#A39E98] leading-relaxed font-light">
                  {instructor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
