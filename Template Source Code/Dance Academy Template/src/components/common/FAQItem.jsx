import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ question, answer, isOpenInitial = false }) {
  const [isOpen, setIsOpen] = useState(isOpenInitial);

  return (
    <div className="border border-[#282523] rounded-2xl bg-[#1B1B1D] hover:border-[#C99683]/40 transition-all duration-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#C99683] rounded-2xl cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg sm:text-xl font-semibold text-[#F7F4F0] pr-4">
          {question}
        </span>
        <span className={`p-2 rounded-full bg-[#151719] text-[#A39E98] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#C99683]/20 text-[#C99683]' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-1 text-[#A39E98] text-base leading-relaxed border-t border-[#282523] animate-in fade-in slide-in-from-top-2 duration-200 font-light">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
