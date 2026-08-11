import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sun, Award } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { companyData } from '../../data/company';

import { ImageWithFallback } from '../common/ImageWithFallback';

export const HeroSection = () => {
  return (
    <section className="relative pt-12 lg:pt-20 pb-20 lg:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-inner">
              <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Next-Gen Solar Power & Battery Systems</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Power Your Future With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0771a] via-amber-400 to-amber-300">Clean Solar Energy</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {companyData.subTagline}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Get a Free Consultation
              </Button>
              <Button to="/services" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                Explore Our Solutions
              </Button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#f0771a]" />
                <span>25-Year Panel Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span>Up to 90% Bill Reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#f0771a]" />
                <span>Certified Installers</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Image */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl bg-slate-900 group">
                <ImageWithFallback
                  src={companyData.heroImage}
                  alt="Utility scale high-efficiency solar panel installation array"
                  className="w-full h-[340px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Floating Metric Badge 1 */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 glass-panel-dark px-3 py-2 sm:px-4 sm:py-3 rounded-2xl flex items-center gap-2.5 sm:gap-3 shadow-xl">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 text-[#f0771a] flex items-center justify-center font-bold text-sm sm:text-base">
                    ⚡
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-bold">System Output</div>
                    <div className="text-xs sm:text-sm font-extrabold text-white">99.8% Efficiency</div>
                  </div>
                </div>

                {/* Floating Metric Badge 2 */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-panel-dark p-3 sm:p-4 rounded-2xl flex items-center justify-between shadow-xl">
                  <div>
                    <div className="text-[10px] sm:text-xs text-[#f0771a] font-bold uppercase tracking-wider">Clean Energy Produced</div>
                    <div className="text-base sm:text-xl font-extrabold text-white">350+ Megawatts</div>
                  </div>
                  <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#f0771a] text-[10px] sm:text-xs font-bold text-white">
                    Verified
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
