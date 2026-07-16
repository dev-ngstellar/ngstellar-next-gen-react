import React, { useState } from 'react';
import { useSpecialty } from '../hooks/useSpecialty';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { FaChevronDown, FaStethoscope } from 'react-icons/fa';

const AccordionItem = ({ q, a, isOpen, onClick }) => {
  return (
    <div className="border border-gray-150 rounded-2xl overflow-hidden bg-white shadow-sm mb-4">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left font-bold text-dark hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm md:text-base leading-snug">{q}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary-light flex-shrink-0 text-xs ml-4"
        >
          <FaChevronDown />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-500 leading-relaxed border-t border-gray-50 mt-1">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Treatments = () => {
  const { activeConfig } = useSpecialty();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="relative pt-[120px] pb-20 overflow-hidden bg-light text-left">
      <div className="container mx-auto px-4 lg:px-8">
        
        <SectionHeader 
          subtitle="Therapeutic Specialties"
          title={`Clinical Treatments & Procedures`}
          description="We offer full surgical, non-invasive therapeutic support, and preventive recovery protocols."
        />

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {activeConfig.services.map((serv, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-150 shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-lg flex-shrink-0">
                <FaStethoscope />
              </div>
              <div className="space-y-3">
                <h3 className="font-extrabold text-lg md:text-xl text-dark leading-tight">{serv.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{serv.desc}</p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="text-[10px] bg-light text-gray-500 font-bold px-3 py-1 rounded-full">Diagnostic Review</span>
                  <span className="text-[10px] bg-light text-gray-500 font-bold px-3 py-1 rounded-full">Therapy Plan</span>
                  <span className="text-[10px] bg-light text-gray-500 font-bold px-3 py-1 rounded-full">Post-op Care</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            subtitle="FAQ"
            title="Common Medical Queries & Answers"
            description="Find rapid clinical answers to booking, insurance coverage claims, and scheduling issues."
          />
          <div>
            {activeConfig.faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === idx}
                onClick={() => toggleOpen(idx)}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Treatments;
