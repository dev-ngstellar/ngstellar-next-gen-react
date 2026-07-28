import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { PRACTICE_AREAS, PracticeArea } from '../data/lawFirmData';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Scale, PhoneCall } from 'lucide-react';

interface Props {
  onOpenConsultation: () => void;
}

export const PracticeAreas: React.FC<Props> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Corporate', 'Litigation', 'Personal', 'Consulting'];

  const filteredAreas = selectedCategory === 'All'
    ? PRACTICE_AREAS
    : PRACTICE_AREAS.filter(area => area.category === selectedCategory);

  return (
    <div className="w-full bg-[var(--color-bg)]">
      <PageBanner
        title="Practice Sectors & Legal Services"
        subtitle="Specialized corporate architecture, high-stakes white collar defense, real estate governance, and sovereign advisory."
        breadcrumbs={[{ label: 'Practice Areas' }]}
      />

      {/* Category Filter Navigation */}
      <section className="py-10 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)] sticky top-[65px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D4A34B] text-slate-950 shadow-gold-glow font-bold'
                    : 'bg-[var(--color-surface)] text-[var(--color-heading)] border border-[var(--color-border)] hover:border-[#D4A34B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {filteredAreas.map((area: PracticeArea, index: number) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={area.id}
                id={area.id}
                className="scroll-mt-32 p-8 sm:p-12 rounded-3xl bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-sm hover:shadow-luxury transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Text Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A34B]/10 border border-[#D4A34B]/30 text-[#D4A34B] text-xs font-semibold uppercase tracking-wider">
                      <Scale className="w-3.5 h-3.5" />
                      <span>{area.category} Legal Sector</span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-heading)]">
                      {area.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[var(--color-body)] leading-relaxed">
                      {area.fullDesc}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4A34B]">
                        Strategic Client Benefits
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {area.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[var(--color-heading)]">
                            <CheckCircle2 className="w-4 h-4 text-[#D4A34B] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process Overview */}
                    <div className="pt-4 border-t border-[var(--color-border)] space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-heading)]">
                        Procedural Execution Framework
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {area.process.map((step, sIdx) => (
                          <div key={sIdx} className="p-3 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)]/60">
                            <p className="font-serif font-bold text-xs text-[#D4A34B]">{step.title}</p>
                            <p className="text-[11px] text-[var(--color-muted)] mt-1">{step.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={onOpenConsultation}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#D4A34B] to-[#9A661F] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-gold-glow hover:scale-105 transition-all"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>Retain Counsel for {area.title}</span>
                      </button>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-border)] group">
                      <img
                        src={area.heroImage}
                        alt={area.title}
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                        <p className="text-xs text-[#D4A34B] font-semibold tracking-wider uppercase">Senior Legal Oversight</p>
                        <p className="font-serif text-lg font-bold">Vance & Sterling Legal Chamber</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-primary-dark)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-4xl font-bold">Inquire About Custom Corporate & Sovereign Retainers</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our managing partners construct bespoke multi-jurisdictional legal retainers for global entities.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-full bg-[#D4A34B] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#c58b32] transition-colors"
          >
            Request Retainer Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
