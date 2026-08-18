import React from 'react';
import { servicesData } from '../../data/services';
import { Container } from '../common/Container';
import { ServiceCard } from './ServiceCard';

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <div className="space-y-16 md:space-y-24">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

