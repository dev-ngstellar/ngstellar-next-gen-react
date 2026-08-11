import React from 'react';
import { ArrowRight, PhoneCall, CheckCircle2 } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';
import { companyData } from '../../data/company';
import { ImageWithFallback } from './ImageWithFallback';

export const CTASection = ({
  title = "Ready to Switch to Clean Energy & Cut Your Utility Bills?",
  description = "Get a customized solar feasibility report, energy calculation, and zero-obligation cost estimate from our solar engineering team today.",
  primaryCtaText = "Get Your Free Solar Quote",
  secondaryCtaText = "Call Our Solar Team",
}) => {
  return (
    <section className="py-16 lg:py-20 relative bg-slate-950 text-white overflow-hidden">
      {/* Solar CTA Background Image */}
      <ImageWithFallback
        src={companyData.ctaImage}
        alt="Solar energy landscape background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-slate-950/90 to-slate-950/95"></div>

      {/* Background Graphic Accents */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-800/60">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Unlock 30% Federal Solar ITC Tax Credit
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to Switch to Clean Energy &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0771a] via-amber-400 to-amber-300">
              Cut Your Utility Bills?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* Quick Perks checklist */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-amber-200 pt-2">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Zero Out-of-Pocket Options
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              25-Year Equipment Warranty
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Free On-Site Feasibility Audit
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button to="/contact" variant="accent" size="lg" icon={ArrowRight}>
              {primaryCtaText}
            </Button>
            <Button href={`tel:${companyData.contact.phoneClean}`} variant="white" size="lg" icon={PhoneCall}>
              {secondaryCtaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
