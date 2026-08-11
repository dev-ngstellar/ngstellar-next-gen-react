import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { companyData } from '../../data/company';

export const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/80">
      <Container>
        <SectionTitle
          badge="Simple 5-Step Process"
          title="From Initial Quote to"
          highlightText="Clean Grid Power"
          subtitle="Our streamlined turnkey process makes switching to solar effortless, transparent, and hassle-free."
          centered={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {companyData.process.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                <div className="text-4xl font-extrabold text-[#f0771a] mb-4 group-hover:scale-110 transition-transform origin-left">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="w-full h-1 bg-orange-100 rounded-full mt-6 overflow-hidden">
                <div className="h-full bg-[#f0771a] w-1/3 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
