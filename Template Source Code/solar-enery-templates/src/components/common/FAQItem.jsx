import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQItem = ({ question, answer, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden transition-all duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:text-[#f0771a] transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-180 bg-orange-100 text-[#d6620d]' : ''
        }`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in-50 duration-200">
          {answer}
        </div>
      )}
    </div>
  );
};
