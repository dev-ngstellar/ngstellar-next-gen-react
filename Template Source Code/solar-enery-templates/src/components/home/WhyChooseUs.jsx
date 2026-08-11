import React from 'react';
import { ShieldCheck, Wrench, Coins, Activity, Sparkles } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { companyData } from '../../data/company';

const iconMap = {
  ShieldCheck,
  Wrench,
  Coins,
  Activity,
};

export const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        <SectionTitle
          badge="Why Choose Us"
          title="Engineered for Maximum Efficiency &"
          highlightText="Long-Term Savings"
          subtitle="Discover why property owners and enterprise companies choose Solarix as their trusted renewable energy partner."
          dark={true}
          centered={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyData.whyChooseUs.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="glass-panel-dark p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-[#f0771a] border border-amber-500/30 flex items-center justify-center mb-6 shadow-md">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 text-xs font-semibold text-[#f0771a] uppercase tracking-wider">
                  Guaranteed Quality
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
