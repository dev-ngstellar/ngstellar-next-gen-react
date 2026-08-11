import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { companyData } from '../../data/company';

import { ImageWithFallback } from '../common/ImageWithFallback';

export const AboutPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image with Floating Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <ImageWithFallback
                src={companyData.aboutImage}
                alt="Solar Energy Engineering Team inspecting rooftop panel array"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>

            {/* Experience Counter Card */}
            <div className="absolute -bottom-6 -right-6 sm:right-6 glass-panel p-6 rounded-2xl shadow-xl max-w-xs border border-orange-100 hidden sm:block">
              <div className="text-4xl font-extrabold text-[#f0771a] mb-1">
                10+ Years
              </div>
              <p className="text-xs font-semibold text-slate-700">
                Pioneering Clean Energy & Solar Storage Solutions Since {companyData.foundedYear}.
              </p>
            </div>
          </div>

          {/* Right Column: Text & Bullet Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              badge="About Our Company"
              title="Leading the Way in Renewable Solar Energy"
              subtitle={companyData.description}
              centered={false}
            />

            <div className="space-y-3 pt-2">
              {companyData.whyChooseUs.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#f0771a] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button to="/about" variant="primary" size="md" icon={ArrowRight}>
                Learn More About Us
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
