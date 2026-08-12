import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { ArrowUpRight } from 'lucide-react';
import { classesData } from '../../data/classes';

export default function DanceStyles() {
  return (
    <section className="py-10 md:py-14 bg-[#101214] relative overflow-hidden">
      <Container>
        <SectionTitle
          label="EXPLORE YOUR STYLE"
          title="Something for Every Dancer"
          subtitle="Whether you are taking your first step or refining advanced performance technique, discover your passion across our specialized disciplines."
          align="center"
          className="mb-16"
        />

        {/* 6 Reusable Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classesData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/50 transition-all duration-500 flex flex-col justify-between shadow-xl hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} class`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1D] via-[#1B1B1D]/30 to-transparent" />
                
                {/* Age & Level Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#101214]/85 backdrop-blur-md text-[11px] font-semibold text-[#C99683] border border-[#C99683]/30">
                    Age: {item.age}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-[#101214]/85 backdrop-blur-md text-[11px] font-semibold text-[#F7F4F0] border border-[#282523]">
                    {item.level}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#F7F4F0] group-hover:text-[#C99683] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#A39E98] leading-relaxed font-light">
                    {item.homeSummary || item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#282523] flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C99683]">
                    View Schedule & Info
                  </span>
                  <div className="p-2 rounded-full bg-[#151719] text-[#A39E98] group-hover:bg-[#C99683] group-hover:text-[#101214] transition-all duration-300 border border-[#282523]">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <Link to="/classes" className="absolute inset-0 z-10" aria-label={`Learn more about ${item.title}`} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
