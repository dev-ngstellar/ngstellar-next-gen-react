import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { companyData } from '../../data/company';

export const MapPlaceholder = () => {
  return (
    <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md group">
      {/* Decorative Grid Map Visual Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#f0771a_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
      
      {/* Visual map graphic elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/90 to-amber-950/80 flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 text-[#f0771a] border border-amber-500/40 flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform">
            <MapPin className="w-8 h-8 animate-bounce" />
          </div>
          
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f0771a]">
              Solar Headquarters Location
            </span>
            <h4 className="text-xl font-bold text-white">
              {companyData.name} Energy Center
            </h4>
            <p className="text-sm text-slate-300">
              {companyData.contact.address}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-medium text-amber-300">
            <Navigation className="w-4 h-4 text-[#f0771a]" />
            <span>Serving Regional & Statewide Solar Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};
