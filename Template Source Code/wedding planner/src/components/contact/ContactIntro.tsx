import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const ContactIntro: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <Container size="md">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Start The Conversation"
            title="Tell Us About Your Celebration"
            alignment="center"
            className="mb-2"
          />

          <p className="text-base sm:text-lg font-normal text-mutedText leading-relaxed">
            Whether you already have a date and venue or are just beginning to explore your ideas, we'd love to hear what you have in mind.
          </p>
        </div>
      </Container>
    </section>
  );
};
