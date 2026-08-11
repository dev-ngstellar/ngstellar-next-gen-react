import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { FAQItem } from '../common/FAQItem';
import { faqsData } from '../../data/faqs';

export const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionTitle
          badge="Got Questions?"
          title="Frequently Asked"
          highlightText="Solar Questions"
          subtitle="Everything you need to know about switching to solar, installation timelines, tax credits, and warranties."
          centered={true}
          className="mb-14"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpenDefault={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
