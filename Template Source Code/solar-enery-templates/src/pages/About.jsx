import React from 'react';
import { Target, Compass, Leaf, Award, CheckCircle2, HeartHandshake } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Container } from '../components/common/Container';
import { SectionTitle } from '../components/common/SectionTitle';
import { StatsSection } from '../components/home/StatsSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CTASection } from '../components/common/CTASection';
import { companyData } from '../data/company';

import { ImageWithFallback } from '../components/common/ImageWithFallback';

const valueIcons = {
  Leaf,
  Award,
  CheckCircle2,
  HeartHandshake
};

export const About = () => {
  return (
    <>
      <PageHero
        title="Pioneering Renewable"
        highlightText="Solar Energy"
        plainTitle="About Solarix"
        description="Pioneering sustainable, zero-emission clean energy solutions for residential, commercial, and industrial clients."
        badge="Empowering Clean Energy Since 2014"
      />

      {/* Company Story & Intro */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionTitle
                badge="Our Story"
                title="Accelerating the Global Transition to"
                highlightText="Clean Solar Power"
                subtitle="Founded in 2014, Solarix began with a simple mission: to make high-efficiency clean solar energy accessible, reliable, and financially rewarding for every property owner."
                centered={false}
              />
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Over the past decade, we have expanded from a regional installer into a full-scale renewable engineering firm deploying over 350 Megawatts of clean photovoltaic capacity. Our turnkey approach covers initial energy modeling, 3D shade simulation, utility interconnection, and 25-year performance monitoring.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether equipping single-family rooftops with lithium battery reserves or engineering ground-mount utility farms, our team is committed to unmatched installation quality and transparent ROI estimates.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <ImageWithFallback
                  src={companyData.aboutTeamImage}
                  alt="Solarix Renewable Energy Infrastructure & Team Operations"
                  className="w-full h-[320px] sm:h-[440px] object-cover"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#f0771a] flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  To empower communities and businesses with high-efficiency solar generation and storage technology, lowering carbon emissions and eliminating dependence on fossil fuel power grids.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 text-xs font-bold text-[#f0771a] uppercase tracking-wider">
                100% Renewable Commitment
              </div>
            </div>

            {/* Vision */}
            <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-[#f0771a] flex items-center justify-center mb-6">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  To become the leading clean energy infrastructure provider, driving innovation in smart microgrids, battery energy storage, and solar-powered electric mobility.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800 text-xs font-bold text-amber-400 uppercase tracking-wider">
                Building Tomorrow's Energy Grid
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionTitle
            badge="Guiding Principles"
            title="Our Core Values"
            subtitle="The fundamental beliefs that guide our engineering standards, client relationships, and installation practices."
            centered={true}
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.values.map((val, idx) => {
              const IconComponent = valueIcons[val.icon] || Leaf;
              return (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 card-hover flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#f0771a] text-white flex items-center justify-center mb-6 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Statistics */}
      <StatsSection />

      {/* CTA */}
      <CTASection />
    </>
  );
};
