import React from 'react';
import Container from '../common/Container';
import { academyData } from '../../data/academy';

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#101214] border-y border-[#282523]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-[#282523]">
          {academyData.stats.map((stat, idx) => (
            <div key={idx} className="p-4 flex flex-col items-center">
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#D6A08D] tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#A39E98]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
