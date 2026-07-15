import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

export default function FAQ() {
  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Most of my projects take between 4 to 12 weeks from initial concept to launch, depending on the complexity of the requirements and the scope of work."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, I work with clients all over the world. My process is highly optimized for asynchronous communication, making time zone differences a non-issue."
    },
    {
      question: "What is your technology stack?",
      answer: "I specialize in modern React ecosystems, primarily using Next.js, Tailwind CSS, and Framer Motion. For backend services, I typically use Node.js with PostgreSQL or specialized services like Supabase."
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer: "Absolutely. I offer retainer packages for ongoing maintenance, performance optimization, and feature development to ensure your product remains cutting-edge."
    }
  ];

  return (
    <section className="py-20 md:py-32 relative bg-surface/10 border-y border-border/50">
      <div className="container max-w-4xl">
        <SectionHeader title="Common Questions" subtitle="FAQ" align="center" />
        
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel overflow-hidden"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group"
      >
        <span className="text-xl font-heading font-bold group-hover:text-accent transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-muted group-hover:text-accent transition-colors shrink-0 ml-4"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-8 pb-6 text-muted leading-relaxed">
              <div className="w-full h-px bg-border/50 mb-6"></div>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
