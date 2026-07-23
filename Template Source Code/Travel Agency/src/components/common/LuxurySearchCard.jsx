import React, { useState } from 'react';
import { MapPin, Calendar, Users, Compass, Search, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LuxurySearchCard({ className = "" }) {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [travelType, setTravelType] = useState('Luxury');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/packages?dest=${encodeURIComponent(destination)}&type=${encodeURIComponent(travelType)}`);
  };

  return (
    <div className={`w-full max-w-5xl mx-auto glass-panel p-4 sm:p-6 rounded-3xl shadow-2xl border border-white/20 dark:border-white/10 relative z-20 ${className}`}>
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
        
        {/* Field 1: Destination */}
        <div className="space-y-1.5 p-3 rounded-2xl bg-surface/40 hover:bg-surface/70 transition-colors border border-border/50">
          <label className="text-[11px] font-bold tracking-wider uppercase text-text-muted flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" /> Destination
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-text-bright focus:outline-none cursor-pointer"
          >
            <option value="" className="bg-surface text-text-main">All Destinations</option>
            <option value="Maldives" className="bg-surface text-text-main">Maldives Atolls</option>
            <option value="Bali" className="bg-surface text-text-main">Bali Rainforest & Coast</option>
            <option value="Santorini" className="bg-surface text-text-main">Santorini & Mykonos</option>
            <option value="Swiss Alps" className="bg-surface text-text-main">Swiss Alps Zermatt</option>
            <option value="Dubai" className="bg-surface text-text-main">Dubai Royal Desert</option>
            <option value="Japan" className="bg-surface text-text-main">Kyoto & Tokyo</option>
            <option value="Serengeti" className="bg-surface text-text-main">Serengeti Safari</option>
          </select>
        </div>

        {/* Field 2: Travel Date */}
        <div className="space-y-1.5 p-3 rounded-2xl bg-surface/40 hover:bg-surface/70 transition-colors border border-border/50">
          <label className="text-[11px] font-bold tracking-wider uppercase text-text-muted flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary" /> Travel Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-text-bright focus:outline-none cursor-pointer"
          />
        </div>

        {/* Field 3: Guests */}
        <div className="space-y-1.5 p-3 rounded-2xl bg-surface/40 hover:bg-surface/70 transition-colors border border-border/50">
          <label className="text-[11px] font-bold tracking-wider uppercase text-text-muted flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-primary" /> Travelers
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-text-bright focus:outline-none cursor-pointer"
          >
            <option value="1 Guest" className="bg-surface text-text-main">1 Solo Traveler</option>
            <option value="2 Guests" className="bg-surface text-text-main">2 Travelers (Couple)</option>
            <option value="4 Guests" className="bg-surface text-text-main">4 Travelers (Family)</option>
            <option value="6+ Guests" className="bg-surface text-text-main">6+ Group Travelers</option>
          </select>
        </div>

        {/* Field 4: Travel Type */}
        <div className="space-y-1.5 p-3 rounded-2xl bg-surface/40 hover:bg-surface/70 transition-colors border border-border/50">
          <label className="text-[11px] font-bold tracking-wider uppercase text-text-muted flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-primary" /> Travel Type
          </label>
          <select
            value={travelType}
            onChange={(e) => setTravelType(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-text-bright focus:outline-none cursor-pointer"
          >
            <option value="Luxury" className="bg-surface text-text-main">Ultra Luxury</option>
            <option value="Honeymoon" className="bg-surface text-text-main">Honeymoon Bliss</option>
            <option value="Adventure" className="bg-surface text-text-main">Wild Adventure</option>
            <option value="Family" className="bg-surface text-text-main">Family Vacation</option>
            <option value="Corporate" className="bg-surface text-text-main">Private Charter</option>
          </select>
        </div>

        {/* Search Submit Button */}
        <button
          type="submit"
          className="w-full h-full py-4 px-6 rounded-2xl bg-gradient-to-r from-primary to-primary-hover text-white font-heading font-bold text-sm tracking-wide shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>Search Tours</span>
        </button>
      </form>
    </div>
  );
}
