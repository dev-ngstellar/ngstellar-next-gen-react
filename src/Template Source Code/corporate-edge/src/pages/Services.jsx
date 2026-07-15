import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Smartphone, Palette, Cloud, Cpu, TrendingUp, CheckCircle, 
  HelpCircle, ChevronDown, ShieldCheck, Mail, ArrowRight 
} from 'lucide-react';
import { servicesData } from '../data/mockData';

const Services = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const renderServiceIcon = (name) => {
    switch (name) {
      case 'Globe': return <Globe className="w-8 h-8 text-blue-600" />;
      case 'Smartphone': return <Smartphone className="w-8 h-8 text-blue-600" />;
      case 'Palette': return <Palette className="w-8 h-8 text-blue-600" />;
      case 'Cloud': return <Cloud className="w-8 h-8 text-blue-600" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-blue-600" />;
      default: return <TrendingUp className="w-8 h-8 text-blue-600" />;
    }
  };

  const engagementSteps = [
    {
      step: "01",
      name: "Discovery & Auditing",
      desc: "We analyze your legacy codebases, cloud expenditure, security protocols, and operational workflows to identify architectural debt and scaling bottlenecks."
    },
    {
      step: "02",
      name: "Strategy & Prototyping",
      desc: "Our architects draft a robust systems design, select compatible tech stacks, and construct functional user flow prototypes for client validation."
    },
    {
      step: "03",
      name: "Agile Engineering",
      desc: "We write clean, documented React & Cloud native code in bi-weekly sprint cycles, providing secure demo sandbox staging environments for constant review."
    },
    {
      step: "04",
      name: "DevOps & Launch",
      desc: "We deploy secure serverless architectures utilizing automated testing pipelines and configure active monitoring dashboards to guarantee SLA compliance."
    }
  ];

  const faqData = [
    {
      q: "What is your typical project engagement timeline?",
      a: "Our typical enterprise engagements range from 3 to 9 months depending on scope. However, we deliver functional staging releases at the end of every 2-week sprint cycle to ensure rapid, transparent feedback."
    },
    {
      q: "How does Corporate Edge handle intellectual property and NDAs?",
      a: "All intellectual property, proprietary source code, and assets belong 100% to our clients upon milestone completion. We sign robust mutual NDAs prior to any technical auditing or discovery sessions."
    },
    {
      q: "Do you offer post-launch support and infrastructure management?",
      a: "Yes. We offer monthly Retainer SLAs covering automated system backups, continuous cloud scaling optimization, dependency updates, security audits, and dedicated technical help desk desks."
    },
    {
      q: "Can you work alongside our existing in-house engineering team?",
      a: "Absolutely. We often act as an extension of existing IT departments, assisting with high-level cloud architecture migrations, setting up design systems, or accelerating feature sprints."
    }
  ];

  return (
    <div className="animate-page-enter">
      {/* Header Banner */}
      <div className="relative pt-36 pb-20 bg-slate-950 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-blue-400 font-semibold mb-2 block">Our Expertise</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Services Built for the Future
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mt-4 max-w-xl mx-auto">
            From bespoke full-stack engineering to zero-downtime cloud migrations and strategic software auditing, we deliver the digital tools your enterprise requires.
          </p>
        </div>
      </div>

      {/* Services Detailed Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {servicesData.map((svc) => (
            <div 
              key={svc.id}
              className="p-8 md:p-10 bg-white border border-slate-100 rounded-2xl saas-card-shadow flex flex-col md:flex-row gap-6 items-start hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                {renderServiceIcon(svc.iconName)}
              </div>
              <div className="flex-grow flex flex-col gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    {svc.name}
                  </h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-[10px] tracking-widest uppercase text-slate-400 font-bold mb-3">Key Benefits</h4>
                  <ul className="flex flex-col gap-2.5 text-xs font-light text-slate-600">
                    {svc.benefits.map((b, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Engagement Process */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold mb-2 block">Our Workflow</span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">
              The Path to Production Delivery
            </h2>
            <p className="text-slate-500 text-xs font-light leading-relaxed mt-3">
              We employ a standardized software lifecycle designed to guarantee code quality, clear deadlines, and predictable cloud pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementSteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-100 rounded-xl relative overflow-hidden flex flex-col gap-4">
                <span className="font-heading text-4xl font-extrabold text-blue-50/70 absolute -top-1 -right-2">
                  {step.step}
                </span>
                <h4 className="font-heading text-sm font-bold text-slate-900 relative z-10">
                  {step.name}
                </h4>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold mb-2 block flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            General Inquiries
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div 
                key={idx}
                className="border border-slate-100 bg-white rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-slate-50/50 transition-colors focus:outline-none"
                >
                  <span className="font-heading text-sm font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-blue-600' : ''
                  }`} />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs font-light text-slate-500 leading-relaxed border-t border-slate-50 animate-[fade-in_0.3s_ease-out_forwards]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Mini CTA Panel */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-5">
          <ShieldCheck className="w-10 h-10 text-blue-500" />
          <h3 className="font-heading text-2xl font-bold">Need a Custom Systems Design Proposal?</h3>
          <p className="text-slate-400 text-xs font-light max-w-md">
            Our cloud specialists provide free initial scoping calls. Let us map your migration or refactoring path today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors"
          >
            Connect With An Architect
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
