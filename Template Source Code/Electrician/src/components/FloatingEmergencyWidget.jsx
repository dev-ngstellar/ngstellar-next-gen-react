import React from 'react';
import { Phone, Zap, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/electricianData';

export const FloatingEmergencyWidget = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* 24/7 Hotline Button */}
      <a
        href={`tel:${COMPANY_INFO.emergencyPhone}`}
        className="flex items-center space-x-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs shadow-2xl hover:scale-105 transition-all group glow-amber"
      >
        <Phone className="w-4 h-4 fill-white animate-bounce" />
        <span>24/7 Hotline: {COMPANY_INFO.emergencyPhone}</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      </a>
    </div>
  );
};
