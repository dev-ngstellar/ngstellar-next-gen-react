import React, { useState, useMemo } from 'react';
import { TOUR_PACKAGES, FAQS } from '../data/travelData';
import PackageCard from '../components/common/PackageCard';
import { Award, Clock, Check, X, Sparkles, Filter, CheckCircle2, ChevronDown, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TourPackages({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(7000);
  const [maxDays, setMaxDays] = useState(14);
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const categories = ['All', 'Luxury', 'Adventure', 'Honeymoon', 'Family', 'Group', 'Corporate', 'Solo Backpacking'];

  const filteredPackages = useMemo(() => {
    return TOUR_PACKAGES.filter((pkg) => {
      const matchesCat = selectedCategory === 'All' || pkg.category === selectedCategory;
      const matchesPrice = (pkg.discountPrice || pkg.price) <= maxPrice;
      const matchesDays = pkg.durationDays <= maxDays;
      return matchesCat && matchesPrice && matchesDays;
    });
  }, [selectedCategory, maxPrice, maxDays]);

  const featuredPkg = TOUR_PACKAGES.find((p) => p.id === 'pkg-1') || TOUR_PACKAGES[0];

  return (
    <div className="space-y-20 pb-24 pt-28">
      
      {/* Luxury Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
            alt="Tour Packages Hero"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-gold text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> All-Inclusive Expeditions
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white">
            Curated Tour Packages
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Bespoke itineraries crafted with 5-star luxury accommodations, private yachts, and dedicated personal concierges.
          </p>
        </div>
      </section>

      {/* Featured Package Hero Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-amber-400/40 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-950 text-white">
          <div className="space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-wider inline-block">
              ★ Featured Expedition Of The Month
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black">{featuredPkg.title}</h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{featuredPkg.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Duration</span>
                <span className="font-bold text-white mt-0.5 block">{featuredPkg.duration}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Rate per person</span>
                <span className="font-bold text-primary mt-0.5 block">${featuredPkg.discountPrice?.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking(featuredPkg)}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-hover text-white font-bold text-xs shadow-xl shadow-primary/30 hover:scale-105 transition-all"
            >
              Reserve Featured Package
            </button>
          </div>

          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
            <img src={featuredPkg.image} alt={featuredPkg.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Category Tabs & Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'glass-panel text-text-muted hover:text-text-bright'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sliders Panel */}
        <div className="glass-panel p-6 rounded-3xl border border-border grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-text-muted uppercase">
              <span>Max Package Price</span>
              <span className="text-primary">${maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="10000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-primary cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-text-muted uppercase">
              <span>Max Duration Days</span>
              <span className="text-primary">{maxDays} Days</span>
            </div>
            <input
              type="range"
              min="5"
              max="15"
              step="1"
              value={maxDays}
              onChange={(e) => setMaxDays(Number(e.target.value))}
              className="w-full accent-primary cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onBookNow={onOpenBooking} />
          ))}
        </div>
      </section>

      {/* Detailed Package Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Transparent Tiering</span>
          <h2 className="font-heading text-3xl font-bold text-text-bright">Package Tier Comparison</h2>
        </div>

        <div className="glass-panel rounded-3xl border border-border overflow-x-auto p-4 sm:p-6">
          <table className="w-full text-left text-xs min-w-[600px]">
            <thead>
              <tr className="border-b border-border text-text-muted uppercase tracking-wider font-bold">
                <th className="py-4 px-4">Feature & Service</th>
                <th className="py-4 px-4">Standard Luxury</th>
                <th className="py-4 px-4 text-primary">VOYAGE Royal Signature</th>
                <th className="py-4 px-4 text-gold">Presidential Villa Charter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-text-main font-medium">
              <tr>
                <td className="py-4 px-4 font-bold text-text-bright">Hotel Accommodation</td>
                <td className="py-4 px-4">5★ Luxury Resort</td>
                <td className="py-4 px-4 text-primary font-semibold">5★ Superior Overwater Villa</td>
                <td className="py-4 px-4 text-gold font-semibold">Private Island Sanctuary</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-text-bright">Airport Transfers</td>
                <td className="py-4 px-4">Private Executive Van</td>
                <td className="py-4 px-4 text-primary font-semibold">Seaplane / Helicopter</td>
                <td className="py-4 px-4 text-gold font-semibold">Private Charter Jet Assist</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-text-bright">Personal Host</td>
                <td className="py-4 px-4">Shared Local Guide</td>
                <td className="py-4 px-4 text-primary font-semibold">Dedicated 24/7 Butler</td>
                <td className="py-4 px-4 text-gold font-semibold">Full Personal Staff & Chef</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-text-bright">Dining Inclusions</td>
                <td className="py-4 px-4">Daily Gourmet Breakfast</td>
                <td className="py-4 px-4 text-primary font-semibold">All-Inclusive Michelin Dining</td>
                <td className="py-4 px-4 text-gold font-semibold">Bespoke Custom Menus</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-text-bright">Flexible Cancellation</td>
                <td className="py-4 px-4">Up to 30 Days Prior</td>
                <td className="py-4 px-4 text-primary font-semibold">Up to 14 Days Prior</td>
                <td className="py-4 px-4 text-gold font-semibold">Anytime 100% Refundable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Inclusions vs Exclusions Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="glass-panel p-8 rounded-3xl border border-emerald-500/30 space-y-4">
            <h3 className="font-heading text-xl font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> What Is Always Included
            </h3>
            <ul className="space-y-3 text-xs text-text-main font-medium">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 5-Star Luxury Resort & Villa Stays</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Door-to-door VIP Chauffeur & Seaplane Transfers</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 24/7 Dedicated VIP Travel Manager</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> All Park Permits & Private Cultural Access</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Complimentary Royal Shield Insurance Package</li>
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-rose-500/30 space-y-4">
            <h3 className="font-heading text-xl font-bold text-rose-400 flex items-center gap-2">
              <X className="w-5 h-5" /> What Is Excluded
            </h3>
            <ul className="space-y-3 text-xs text-text-main font-medium">
              <li className="flex items-center gap-2"><X className="w-4 h-4 text-rose-400 shrink-0" /> International Commercial Air Tickets (unless specified)</li>
              <li className="flex items-center gap-2"><X className="w-4 h-4 text-rose-400 shrink-0" /> Personal Souvenirs & Independent Shopping</li>
              <li className="flex items-center gap-2"><X className="w-4 h-4 text-rose-400 shrink-0" /> Diplomatic Visa Processing Fees</li>
              <li className="flex items-center gap-2"><X className="w-4 h-4 text-rose-400 shrink-0" /> Voluntary Staff Gratuities</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
