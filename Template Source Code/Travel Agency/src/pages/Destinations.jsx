import React, { useState, useMemo } from 'react';
import { DESTINATIONS, FAQS } from '../data/travelData';
import DestinationCard from '../components/common/DestinationCard';
import InteractiveMap from '../components/common/InteractiveMap';
import { Search, Filter, Globe, Compass, Sun, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [maxBudget, setMaxBudget] = useState(12000);
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((dest) => {
      const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dest.country.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesContinent = selectedContinent === 'All' || dest.continent === selectedContinent;
      const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
      const matchesSeason = selectedSeason === 'All' || dest.season === selectedSeason;
      const matchesBudget = dest.startingPrice <= maxBudget;

      return matchesSearch && matchesContinent && matchesCategory && matchesSeason && matchesBudget;
    });
  }, [searchQuery, selectedContinent, selectedCategory, selectedSeason, maxBudget]);

  const topExperiences = [
    { title: 'Overwater Bungalow Sunset', dest: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80' },
    { title: 'Private Volcano Catamaran Cruise', dest: 'Santorini', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80' },
    { title: 'Matterhorn Sunrise Glacier Skiing', dest: 'Switzerland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80' },
    { title: 'Kyoto Heritage Geisha Tea Ceremony', dest: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="space-y-20 pb-24 pt-28">
      
      {/* Luxury Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
            alt="Destinations Hero"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-gold text-xs font-bold uppercase tracking-widest">
            <Globe className="w-4 h-4" /> Global Sanctuary Portfolio
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white">
            Explore Handcrafted Destinations
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Filter our worldwide collection by continent, season, travel style, and budget.
          </p>
        </div>
      </section>

      {/* Filter & Search Control Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-border space-y-6">
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search by country or destination name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-background border border-border text-sm text-text-bright placeholder-text-muted focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-border/60">
            {/* Continent */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase text-text-muted">Continent</label>
              <select
                value={selectedContinent}
                onChange={(e) => setSelectedContinent(e.target.value)}
                className="w-full bg-background border border-border text-sm text-text-bright font-semibold rounded-xl px-3 py-2.5 focus:outline-none cursor-pointer"
              >
                <option value="All">All Continents</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
              </select>
            </div>

            {/* Travel Type */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase text-text-muted">Travel Style</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-background border border-border text-sm text-text-bright font-semibold rounded-xl px-3 py-2.5 focus:outline-none cursor-pointer"
              >
                <option value="All">All Styles</option>
                <option value="Luxury">Luxury Stays</option>
                <option value="Honeymoon">Honeymoon Bliss</option>
                <option value="Adventure">Wild Adventure</option>
                <option value="Group">Group & Cultural</option>
              </select>
            </div>

            {/* Season */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase text-text-muted">Season</label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full bg-background border border-border text-sm text-text-bright font-semibold rounded-xl px-3 py-2.5 focus:outline-none cursor-pointer"
              >
                <option value="All">All Seasons</option>
                <option value="Summer">Summer Sun</option>
                <option value="Winter">Winter Snow</option>
                <option value="Spring">Spring Bloom</option>
              </select>
            </div>

            {/* Budget Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-bold uppercase text-text-muted">
                <span>Max Starting Budget</span>
                <span className="text-primary">${maxBudget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="12000"
                step="500"
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer mt-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between text-xs text-text-muted font-bold">
          <span>Showing {filteredDestinations.length} Sanctuary Destinations</span>
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-panel rounded-3xl space-y-3">
            <Globe className="w-12 h-12 text-text-muted mx-auto" />
            <h3 className="font-heading text-xl font-bold text-text-bright">No Destinations Match Your Filter</h3>
            <p className="text-text-muted text-xs">Try resetting your search query or adjusting your budget range.</p>
          </div>
        )}
      </section>

      {/* Interactive World Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveMap />
      </section>

      {/* Top Experiences Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Bucket List</span>
          <h2 className="font-heading text-3xl font-bold text-text-bright">Top Signature Experiences</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topExperiences.map((exp, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden glass-card h-64 border border-border">
              <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] text-gold font-bold uppercase tracking-wider">{exp.dest}</span>
                <h4 className="font-heading font-bold text-white text-base leading-tight">{exp.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
          </span>
          <h2 className="font-heading text-3xl font-bold text-text-bright">Destination Insights</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={idx} className="glass-panel rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-heading font-bold text-sm text-text-bright hover:text-primary transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 text-xs text-text-muted leading-relaxed border-t border-border/40 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
