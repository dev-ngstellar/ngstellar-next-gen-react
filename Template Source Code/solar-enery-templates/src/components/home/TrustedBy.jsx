import React from 'react';
import { Container } from '../common/Container';
import { companyData } from '../../data/company';

export const TrustedBy = () => {
  return (
    <section className="py-10 bg-slate-900 border-b border-slate-800 text-slate-400">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
          Trusted By Industry Leaders & Commercial Enterprises Nationwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-75">
          {companyData.trustedBy.map((partner, index) => (
            <div
              key={index}
              className="text-sm sm:text-base font-extrabold tracking-wider text-slate-300 hover:text-[#f0771a] transition-colors cursor-default"
            >
              {partner.logoText}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
