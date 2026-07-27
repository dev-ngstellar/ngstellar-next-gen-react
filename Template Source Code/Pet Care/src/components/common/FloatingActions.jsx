import React from 'react';
import { PhoneCall, MessageSquare } from 'lucide-react';

export const FloatingActions = ({ onOpenAppointment }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Trigger */}
      <a
        href="https://wa.me/15550192834"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 transition-all duration-200 group"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </a>

      {/* Emergency Call Trigger */}
      <a
        href="tel:18009997387"
        aria-label="Emergency Call"
        className="w-13 h-13 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/30 hover:scale-110 transition-all duration-200 group animate-bounce"
      >
        <PhoneCall className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
