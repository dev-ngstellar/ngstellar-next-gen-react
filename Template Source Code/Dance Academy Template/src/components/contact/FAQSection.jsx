import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import FAQItem from '../common/FAQItem';
import { faqsData } from '../../data/faqs';

export default function FAQSection() {
  return (
    <section className="py-12 md:py-16 bg-[#101214] relative overflow-hidden" id="faq">
      <Container>
        <SectionTitle
          label="FREQUENTLY ASKED QUESTIONS"
          title="Everything You Need to Know"
          subtitle="Have questions about getting started? Here are answers to common questions from new dancers."
          align="center"
          className="mb-16"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpenInitial={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
