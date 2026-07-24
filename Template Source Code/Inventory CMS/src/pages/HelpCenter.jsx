import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Search, ChevronDown, ChevronUp, Command, Sparkles, MessageSquare } from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function HelpCenter() {
  const { setOnboardingActive, addToast } = useInventory();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How does the Ctrl + K Command Palette work?',
      a: 'Pressing Ctrl + K opens a global search overlay where you can jump to any page, search product SKUs, or run quick stock adjustments directly.',
    },
    {
      q: 'How do I initiate an inter-warehouse stock transfer?',
      a: 'Navigate to the Warehouses module and click "New Stock Transfer". Select the origin hub, target destination hub, and specify unit quantities.',
    },
    {
      q: 'Can I export inventory data to Excel or PDF?',
      a: 'Yes, visit the Reports module to generate CSV, Excel, or formatted PDF exports for any date range.',
    },
    {
      q: 'What happens when stock falls below the minimum alert level?',
      a: 'The system generates an automated Low Stock Notification and updates the product status badge to "Low Stock".',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="text-center space-y-2 py-4">
        <h1 className="text-3xl font-extrabold text-txt-heading">Stellar Help & Documentation</h1>
        <p className="text-xs text-txt-muted max-w-lg mx-auto">
          Find instant answers to common questions, view keyboard shortcuts, or launch the interactive product tour.
        </p>
        <button
          onClick={() => setOnboardingActive(true)}
          className="mt-3 px-4 py-2 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all inline-flex items-center space-x-1.5 glow-button"
        >
          <Sparkles className="w-4 h-4" />
          <span>Relaunch Product Guided Tour</span>
        </button>
      </div>

      {/* FAQ Accordion */}
      <div className="p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-4">
        <h2 className="text-base font-extrabold text-txt-heading">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="rounded-xl bg-bg-surface border border-border-subtle overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 flex items-center justify-between text-left text-xs font-bold text-txt-heading hover:bg-bg-hover transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-accent-primary" /> : <ChevronDown className="w-4 h-4 text-txt-muted" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-txt-muted leading-relaxed border-t border-border-subtle pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
