import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Check, X, Box, Command, Layers, ShoppingCart } from 'lucide-react';
import { useInventory } from '../../context/InventoryContext';

export default function OnboardingTour() {
  const { onboardingActive, setOnboardingActive, addToast } = useInventory();
  const [step, setStep] = useState(0);

  if (!onboardingActive) return null;

  const tourSteps = [
    {
      title: 'Welcome to Stellar Inventory CMS',
      description: 'A futuristic enterprise inventory management platform inspired by Linear, Vercel, and Katana. Let’s take a quick 4-step tour!',
      icon: Box,
      highlight: 'Global Dashboard',
    },
    {
      title: 'Command Search & Quick Actions',
      description: 'Press Ctrl + K anywhere on the app to instantly find products, jump to orders, or run inventory adjustments.',
      icon: Command,
      highlight: 'Top Navigation',
    },
    {
      title: 'Hybrid Product Views & Slide Drawer',
      description: 'Switch seamlessly between Table, Grid, List, and Card views. Click any product to slide open real-time barcodes and stock movement logs.',
      icon: Layers,
      highlight: 'Products Catalog',
    },
    {
      title: 'Kanban Supply Chain Pipelines',
      description: 'Manage Purchase Orders and Sales Orders using drag-and-drop pipeline tracking from Draft to Delivered.',
      icon: ShoppingCart,
      highlight: 'PO & SO Pipelines',
    },
  ];

  const current = tourSteps[step];
  const StepIcon = current.icon;

  const handleNext = () => {
    if (step < tourSteps.length - 1) {
      setStep(step + 1);
    } else {
      setOnboardingActive(false);
      setStep(0);
      addToast('Tour Completed!', 'You are ready to explore Stellar Inventory CMS.', 'success');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-md bg-bg-card border border-border-main rounded-3xl p-6 shadow-float glass-panel overflow-hidden space-y-6 text-center"
        >
          {/* Top Step Counter */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-wider bg-accent-primary/20 text-accent-primary px-2.5 py-1 rounded-full">
              Step {step + 1} of {tourSteps.length}
            </span>
            <button
              onClick={() => setOnboardingActive(false)}
              className="p-1.5 rounded-lg hover:bg-bg-hover text-txt-muted hover:text-txt-heading"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Step Graphic */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-accent-primary to-accent-glow text-white flex items-center justify-center shadow-glow-md animate-float">
            <StepIcon className="w-8 h-8" />
          </div>

          {/* Text Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-extrabold text-txt-heading">{current.title}</h3>
            <p className="text-xs text-txt-muted leading-relaxed">{current.description}</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-1.5 pt-2">
            {tourSteps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === step ? 'w-6 bg-accent-primary' : 'w-1.5 bg-bg-surface'
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-3 pt-2">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-2.5 rounded-xl bg-bg-surface hover:bg-bg-hover text-txt-heading text-xs font-bold transition-all"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 py-2.5 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center justify-center space-x-2 glow-button"
            >
              <span>{step === tourSteps.length - 1 ? 'Finish Tour' : 'Next Step'}</span>
              {step === tourSteps.length - 1 ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
