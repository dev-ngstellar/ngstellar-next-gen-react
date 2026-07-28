import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Scale,
  Shield,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ChevronDown,
  Building2,
  Home as HomeIcon,
  ShieldAlert,
  Globe,
  Receipt,
  Briefcase,
  Star,
  Quote
} from 'lucide-react';
import { PRACTICE_AREAS, ATTORNEYS, TESTIMONIALS, FAQS } from '../data/lawFirmData';

interface HomeProps {
  onOpenConsultation: () => void;
}

const iconMap: Record<string, any> = {
  Building2,
  Users,
  ShieldAlert,
  Home: HomeIcon,
  Globe,
  Scale,
  Receipt,
  Briefcase
};

export const Home: React.FC<HomeProps> = ({ onOpenConsultation }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. PREMIUM HERO SECTION                                                    */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[var(--color-primary-dark)] text-white">
        {/* Cinematic Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Law firm architecture"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)] via-[var(--color-primary-dark)]/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-[#D4A34B]/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#D4A34B] animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-[#D4A34B] uppercase">
                  Premier International Law Firm
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Justice Backed by <br />
                <span className="gold-gradient-text">Uncompromising Experience.</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-sans font-normal leading-relaxed">
                Delivering trusted legal solutions with integrity, expertise, and commitment. Advising sovereign entities, global enterprises, and private client estates.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#D4A34B] to-[#9A661F] text-slate-950 font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  <PhoneCall className="w-4 h-4 text-slate-950" />
                  <span>Book Consultation</span>
                </button>

                <Link
                  to="/practice-areas"
                  className="px-8 py-4 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-[#D4A34B] text-white font-semibold text-sm uppercase tracking-wider backdrop-blur-md hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-[#D4A34B] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[#D4A34B]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white font-serif">20+</p>
                    <p className="text-xs text-slate-400">Years Experience</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[#D4A34B]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white font-serif">500+</p>
                    <p className="text-xs text-slate-400">Cases Won</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[#D4A34B]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white font-serif">100%</p>
                    <p className="text-xs text-slate-400">Trusted Legal Counsel</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 hidden lg:block"
            >
              <div className="relative p-8 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-luxury space-y-6">
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-[#D4A34B] text-slate-950 font-bold text-xs rounded-full shadow-md uppercase tracking-wider">
                  Top Tier Firm
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4A34B] to-[#9A661F] p-[1px]">
                    <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                      <Scale className="w-7 h-7 text-[#D4A34B]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">Vance & Sterling</h3>
                    <p className="text-xs text-[#D4A34B]">Global Chambers Tier-1 Partner</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  "Our mandate is non-negotiable: protecting our clients' asset longevity, executive integrity, and commercial rights across international jurisdictions."
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Geneva • New York • London</span>
                  <span className="text-[#D4A34B] font-semibold">24/7 Hotline</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PRACTICE AREAS PREVIEW                                                  */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[var(--color-bg)] border-b border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
                Core Competencies
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--color-heading)] mt-2">
                Specialized Legal Sectors
              </h2>
            </div>
            <p className="text-sm text-[var(--color-muted)] max-w-md">
              Comprehensive legal frameworks structured to manage complex corporate transactions, high-stakes litigation, and asset security.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICE_AREAS.slice(0, 8).map((area) => {
              const IconComponent = iconMap[area.iconName] || Scale;
              return (
                <motion.div
                  key={area.id}
                  whileHover={{ y: -6 }}
                  className="group relative p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-sm hover:shadow-luxury hover:border-[#D4A34B]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] flex items-center justify-center text-[#D4A34B] group-hover:bg-[#D4A34B] group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[var(--color-heading)] group-hover:text-[#D4A34B] transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                      {area.shortDesc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[var(--color-border)]/60 flex items-center justify-between">
                    <Link
                      to={`/practice-areas#${area.id}`}
                      className="text-xs font-semibold text-[var(--color-heading)] group-hover:text-[#D4A34B] flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Practice</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-sm font-semibold text-[var(--color-heading)] hover:border-[#D4A34B] transition-all"
            >
              <span>View All Legal Sectors</span>
              <ArrowRight className="w-4 h-4 text-[#D4A34B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY CHOOSE US                                                           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
                Distinction & Standards
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--color-heading)] leading-tight">
                Why Elite Clients Entrust Their Future To Us.
              </h2>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Legal excellence demands relentless preparation, deep sector acumen, and uncompromising ethical commitment. We don't just advise; we engineer outcomes.
              </p>
              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-full bg-[var(--color-primary)] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#D4A34B] hover:text-slate-950 transition-colors"
                >
                  Schedule Private Audit
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Experienced Attorneys', desc: 'Senior partner guidance on every individual case file with minimum 15+ years bar experience.' },
                { title: 'Confidential Consultation', desc: 'Strict non-disclosure protocols and encrypted communication channels for all advisory.' },
                { title: 'Transparent Fee Architecture', desc: 'No hidden disbursements. Clear milestone billing and fixed retainer frameworks.' },
                { title: 'Client-Focused Strategy', desc: 'Custom legal roadmaps designed to protect both immediate rights and long-term asset value.' },
                { title: 'Proven Track Record', desc: 'Over $4.5B in negotiated transactions and a 96.8% trial success outcome.' },
                { title: 'Ethical Representation', desc: 'Adhering to strict international bar standards with zero compromise on professional integrity.' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[var(--color-card)] border border-[var(--color-card-border)] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#D4A34B]/10 text-[#D4A34B] flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[var(--color-heading)]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ATTORNEYS PREVIEW                                                      */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
              Senior Legal Leadership
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--color-heading)] mt-2">
              Meet Our Partners
            </h2>
            <p className="text-sm text-[var(--color-muted)] mt-4">
              Distinguished legal scholars, trial litigators, and corporate strategists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ATTORNEYS.map((attorney) => (
              <div
                key={attorney.id}
                className="group rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] overflow-hidden shadow-sm hover:shadow-luxury transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden bg-slate-900">
                  <img
                    src={attorney.photo}
                    alt={attorney.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-[#D4A34B] uppercase tracking-wider block">
                      {attorney.experience}
                    </span>
                    <h3 className="font-serif text-xl font-bold">{attorney.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs font-medium text-[var(--color-heading)]">
                    {attorney.designation}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    <span className="font-semibold text-[var(--color-heading)]">Specialty: </span>
                    {attorney.specialization}
                  </p>
                  <div className="pt-3 border-t border-[var(--color-border)]">
                    <Link
                      to="/about"
                      className="text-xs font-semibold text-[#D4A34B] hover:underline flex items-center gap-1"
                    >
                      <span>View Full Profile</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CASE SUCCESS STATS                                                     */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[var(--color-primary-dark)] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            <div className="p-6">
              <p className="font-serif text-5xl font-bold text-[#D4A34B] mb-2">$4.5B+</p>
              <p className="text-xs uppercase tracking-widest text-slate-400">Transactional Volume</p>
            </div>
            <div className="p-6">
              <p className="font-serif text-5xl font-bold text-[#D4A34B] mb-2">96.8%</p>
              <p className="text-xs uppercase tracking-widest text-slate-400">Favorable Trial Record</p>
            </div>
            <div className="p-6">
              <p className="font-serif text-5xl font-bold text-[#D4A34B] mb-2">24+</p>
              <p className="text-xs uppercase tracking-widest text-slate-400">Years of Practice</p>
            </div>
            <div className="p-6">
              <p className="font-serif text-5xl font-bold text-[#D4A34B] mb-2">35+</p>
              <p className="text-xs uppercase tracking-widest text-slate-400">International Legal Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TESTIMONIALS                                                            */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
              Client Endorsements
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--color-heading)] mt-2">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-sm space-y-6 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#D4A34B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm text-[var(--color-body)] leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--color-border)]/60 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-12 h-12 rounded-full object-cover border border-[#D4A34B]/40"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[var(--color-heading)]">
                      {t.clientName}
                    </h4>
                    <p className="text-xs text-[var(--color-muted)]">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FAQ ACCORDION                                                           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
              Clarifications
            </span>
            <h2 className="font-serif text-4xl font-bold text-[var(--color-heading)] mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[var(--color-card)] border border-[var(--color-card-border)] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-xl font-semibold text-[var(--color-heading)] hover:text-[#D4A34B] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D4A34B] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)]/40 pt-4 font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CALL TO ACTION                                                          */}
      {/* ========================================================================= */}
      <section className="py-24 bg-gradient-to-r from-[var(--color-primary-dark)] via-[#0B192C] to-[var(--color-primary-dark)] text-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A34B]">
            Confidential Counsel
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Need Legal Guidance? <br />
            Schedule Your Consultation Today.
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto">
            Contact our senior partners for an urgent confidential review of your corporate, financial, or personal legal matters.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={onOpenConsultation}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#D4A34B] to-[#9A661F] text-slate-950 font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all"
            >
              Book Private Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
