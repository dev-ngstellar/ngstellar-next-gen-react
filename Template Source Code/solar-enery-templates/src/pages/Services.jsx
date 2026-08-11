import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { Container } from '../components/common/Container';
import { SectionTitle } from '../components/common/SectionTitle';
import { ServiceCard } from '../components/services/ServiceCard';
import { HowItWorks } from '../components/home/HowItWorks';
import { CTASection } from '../components/common/CTASection';
import { servicesData } from '../data/services';

export const Services = () => {
  return (
    <>
      <PageHero
        title="Turnkey Solar &"
        highlightText="Renewable Solutions"
        plainTitle="Services"
        description="Comprehensive solar engineering, energy storage, and maintenance services tailored for residential homes, commercial properties, and utility facilities."
        badge="End-to-End Clean Energy Services"
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionTitle
            badge="Full Service Portfolio"
            title="Tailored Clean Energy"
            highlightText="System Portfolio"
            subtitle="Explore our specialized clean energy capabilities designed to maximize energy production, reduce grid reliance, and deliver reliable long-term savings."
            centered={true}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} compact={false} />
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works Process */}
      <HowItWorks />

      {/* Service Guarantees Section */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <Container>
          <SectionTitle
            badge="Service Commitments"
            title="The Solarix Service"
            highlightText="Guarantee"
            subtitle="We back every installation with industry-leading warranties and ongoing operational support."
            dark={true}
            centered={true}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel-dark p-8 rounded-2xl border border-slate-800">
              <div className="text-3xl font-extrabold text-amber-400 mb-2">25 Years</div>
              <h4 className="text-xl font-bold text-white mb-2">Linear Power Output Warranty</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Guaranteed panel performance ensuring your solar array maintains at least 85% output after 25 full years of operation.
              </p>
            </div>

            <div className="glass-panel-dark p-8 rounded-2xl border border-slate-800">
              <div className="text-3xl font-extrabold text-[#f0771a] mb-2">10 Years</div>
              <h4 className="text-xl font-bold text-white mb-2">Workmanship Guarantee</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Full coverage on roof penetrations, mounting brackets, structural racking, and electrical wiring work.
              </p>
            </div>

            <div className="glass-panel-dark p-8 rounded-2xl border border-slate-800">
              <div className="text-3xl font-extrabold text-amber-400 mb-2">24/7</div>
              <h4 className="text-xl font-bold text-white mb-2">Real-Time Mobile Monitoring</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Automated system telemetry alerts our maintenance team instantly if an inverter or string experiences output drops.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};
