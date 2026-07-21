import React, { useState } from 'react';
import { CheckCircle, Zap, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Growth Sourcing",
      tagline: "Ideal for seed to Series A startups scaling 1-5 key hires.",
      price: "15%",
      subtext: "of first-year base salary",
      badge: "Standard",
      features: [
        "Dedicated Talent Partner",
        "Full Candidate Pre-Screening",
        "60-Day Replacement Guarantee",
        "Technical Skills Assessment",
        "Direct Candidate Intro in 72h"
      ]
    },
    {
      name: "Scale & Enterprise",
      tagline: "For high-growth companies scaling engineering & product teams.",
      price: "12%",
      subtext: "on retained subscription",
      badge: "Most Popular",
      featured: true,
      features: [
        "Priority Access to Top 1% Sourced Talent",
        "90-Day Replacement Guarantee",
        "Dedicated Technical Recruiter",
        "Employer Branding Showcase",
        "Custom Code Assessment Setup",
        "Weekly Pipeline Review Calls"
      ]
    },
    {
      name: "Executive Search",
      tagline: "Confidential VP, C-Suite, and Board Member placements.",
      price: "Retained",
      subtext: "custom engagement structure",
      badge: "Executive",
      features: [
        "Dedicated Senior Partner Lead",
        "Comprehensive Market Mapping",
        "Confidential Candidate Outreach",
        "1-Year Replacement Guarantee",
        "Executive Offer & Equity Structuring"
      ]
    }
  ];

  return (
    <div className="space-y-16 pb-20 pt-8">
      <section className="container-custom text-center max-w-3xl mx-auto">
        <Badge variant="glow" className="mb-4">Transparent Enterprise Pricing</Badge>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Invest in Top 1% Talent</h1>
        <p className="text-[var(--color-text-muted)] text-lg">
          No hidden fees. Pay only for successful placements with industry-leading replacement guarantees.
        </p>
      </section>

      <section className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className={`glass-card p-8 rounded-3xl flex flex-col justify-between hover-lift relative ${plan.featured ? 'border-2 border-blue-500 shadow-2xl shadow-blue-500/10' : ''}`}>
            {plan.featured && (
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <Badge variant="glow" className="bg-blue-600 text-white font-bold">Recommended</Badge>
              </div>
            )}
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant={plan.featured ? "glow" : "secondary"}>{plan.badge}</Badge>
              </div>
              <h3 className="font-serif font-bold text-2xl mb-2">{plan.name}</h3>
              <p className="text-xs text-[var(--color-text-muted)] mb-6 min-h-[36px]">{plan.tagline}</p>
              
              <div className="mb-8 border-y border-[var(--color-border)] py-6">
                <div className="text-4xl font-black text-blue-400 mb-1">{plan.price}</div>
                <div className="text-xs text-[var(--color-text-muted)] font-medium">{plan.subtext}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant={plan.featured ? "primary" : "outline"} className="w-full">
              Choose {plan.name}
            </Button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Pricing;
