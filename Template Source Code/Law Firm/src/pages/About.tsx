import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { ATTORNEYS } from '../data/lawFirmData';
import { Award, ShieldCheck, Scale, CheckCircle2, Globe, Building2, Users } from 'lucide-react';

interface Props {
  onOpenConsultation: () => void;
}

export const About: React.FC<Props> = ({ onOpenConsultation }) => {
  const milestones = [
    { year: '2002', title: 'Firm Founding', desc: 'Established in New York by Alexander Vance as a boutique corporate litigation chamber.' },
    { year: '2008', title: 'European Expansion', desc: 'Opened Geneva office prioritizing cross-border international tax & banking compliance.' },
    { year: '2015', title: 'M&A Practice Milestone', desc: 'Surpassed $2.5 Billion in cumulative cross-border merger and acquisition transactions.' },
    { year: '2021', title: 'White Collar Leadership', desc: 'Eleanor Sterling appointed Head of Trial Litigation; named Top Chambers Tier-1 Partner.' },
    { year: '2026', title: 'Global Mobility & Tech Law', desc: 'Expanded specialized sovereign investment and global business mobility sectors.' }
  ];

  return (
    <div className="w-full bg-[var(--color-bg)]">
      <PageBanner
        title="About Vance & Sterling"
        subtitle="A legacy of courtroom victory, strategic corporate stewardship, and relentless pursuit of justice."
        breadcrumbs={[{ label: 'About Firm' }]}
      />

      {/* Firm Story / Mission & Vision */}
      <section className="py-24 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
                Heritage & Philosophy
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--color-heading)] leading-tight">
                Architecting Legal Victory With Unwavering Precision.
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-body)] leading-relaxed">
                Founded on the foundational tenets of intellectual rigor, absolute discretion, and zealous advocacy, Vance & Sterling represents the apex of corporate and civil legal jurisprudence.
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Our partners combine decades of trial experience with deep sector knowledge. We do not accept passive outcomes; we craft authoritative legal solutions that safeguard enterprise capital and personal reputation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#D4A34B]/10 text-[#D4A34B] flex items-center justify-center">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[var(--color-heading)]">Our Mission</h4>
                  <p className="text-xs text-[var(--color-muted)]">To provide uncompromising, world-class legal representation that protects the strategic interests of our clients globally.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#D4A34B]/10 text-[#D4A34B] flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[var(--color-heading)]">Our Vision</h4>
                  <p className="text-xs text-[var(--color-muted)]">To set the global benchmark for modern corporate jurisprudence, ethical advocacy, and client discretion.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-[var(--color-border)]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Law Firm Office Headquarters"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/90 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                  <span className="text-xs font-semibold text-[#D4A34B] uppercase tracking-widest">Headquarters</span>
                  <h3 className="font-serif text-2xl font-bold">New York • Geneva • London</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Timeline */}
      <section className="py-24 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
              Our Journey
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--color-heading)] mt-2">
              Milestones of Excellence
            </h2>
          </div>

          <div className="relative border-l-2 border-[#D4A34B]/30 ml-4 sm:ml-32 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-12 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#D4A34B] border-4 border-[var(--color-bg-alt)] group-hover:scale-125 transition-transform" />
                <div className="hidden sm:block absolute -left-28 top-0 font-serif font-bold text-2xl text-[#D4A34B]">
                  {m.year}
                </div>
                <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-sm max-w-2xl">
                  <span className="sm:hidden font-serif font-bold text-lg text-[#D4A34B] block mb-1">{m.year}</span>
                  <h3 className="font-serif text-xl font-bold text-[var(--color-heading)]">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-2 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Attorney Team Section */}
      <section className="py-24 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
              Legal Council Leadership
            </span>
            <h2 className="font-serif text-4xl font-bold text-[var(--color-heading)] mt-2">
              Meet Our Senior Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ATTORNEYS.map((attorney) => (
              <div
                key={attorney.id}
                className="p-8 rounded-3xl bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start"
              >
                <img
                  src={attorney.photo}
                  alt={attorney.name}
                  className="w-36 h-44 rounded-2xl object-cover border border-[#D4A34B]/30 shrink-0"
                />
                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-[#D4A34B] uppercase tracking-wider block">
                      {attorney.experience}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[var(--color-heading)]">
                      {attorney.name}
                    </h3>
                    <p className="text-xs text-[var(--color-muted)] font-medium">
                      {attorney.designation}
                    </p>
                  </div>

                  <p className="text-xs text-[var(--color-body)] leading-relaxed">
                    {attorney.bio}
                  </p>

                  <div className="pt-2 text-[11px] text-[var(--color-muted)] space-y-1">
                    <p className="font-semibold text-[var(--color-heading)]">Admissions & Credentials:</p>
                    {attorney.barAdmissions.map((adm, i) => (
                      <p key={i}>• {adm}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="py-20 bg-[var(--color-primary-dark)] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
            Global Distinctions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Recognized by International Legal Ratings
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            {['Chambers Global Tier 1', 'The Legal 500 Hall of Fame', 'Super Lawyers Top 100', 'Best Lawyers Law Firm of Year'].map((award, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <Award className="w-8 h-8 text-[#D4A34B] mx-auto" />
                <h4 className="font-serif font-bold text-base text-white">{award}</h4>
                <p className="text-[11px] text-slate-400">Jurisdiction Governance</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
