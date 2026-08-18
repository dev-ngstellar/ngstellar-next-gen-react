import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const ServiceIntro: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <Container size="md">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Our Approach"
            title="Thoughtful Planning, Beautifully Delivered"
            alignment="center"
            className="mb-2"
          />

          <p className="text-base sm:text-lg font-normal text-mutedText leading-relaxed">
            From the first planning conversation to the final celebration, our team coordinates the many moving parts of a wedding to create an experience that feels effortless for you and your guests.
          </p>
        </div>
      </Container>
    </section>
  );
};
