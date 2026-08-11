import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { ServiceCard } from '../services/ServiceCard';
import { Button } from '../common/Button';
import { servicesData } from '../../data/services';

export const ServicesPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionTitle
          badge="Our Core Services"
          title="Comprehensive Clean Energy"
          highlightText="Solutions"
          subtitle="From rooftop residential panels to megawatt commercial infrastructure, we provide turnkey solar engineering and battery storage solutions."
          centered={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} compact={true} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/services" variant="primary" size="lg" icon={ArrowRight}>
            View All Solar Services
          </Button>
        </div>
      </Container>
    </section>
  );
};
