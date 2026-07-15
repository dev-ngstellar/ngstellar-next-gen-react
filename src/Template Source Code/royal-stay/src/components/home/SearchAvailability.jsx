import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../hooks/useBooking';
import { Calendar, Users, Search } from 'lucide-react';

const SearchAvailability = () => {
  const { checkIn, checkOut, guests, updateSearch } = useBooking();
  const navigate = useNavigate();

  const [inDate, setInDate] = useState(checkIn);
  const [outDate, setOutDate] = useState(checkOut);
  const [guestCount, setGuestCount] = useState(guests);

  const handleSearch = (e) => {
    e.preventDefault();
    updateSearch(inDate, outDate, guestCount);
    navigate('/rooms');
  };

  return (
    <section id="search-section" className="relative -mt-16 z-20 max-w-6xl mx-auto px-6">
      <div className="bg-white shadow-2xl p-6 md:p-8 border border-[#c5a880]/20">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          
          {/* Check-In Date */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.2em] uppercase text-black/50 font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
              Check-In Date
            </label>
            <input
              type="date"
              required
              value={inDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setInDate(e.target.value)}
              className="w-full border-b border-[#c5a880]/30 py-2.5 px-1 focus:outline-none focus:border-[#c5a880] text-sm text-[#1a1a1a] font-light bg-transparent"
            />
          </div>

          {/* Check-Out Date */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.2em] uppercase text-black/50 font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
              Check-Out Date
            </label>
            <input
              type="date"
              required
              value={outDate}
              min={inDate || new Date().toISOString().split('T')[0]}
              onChange={(e) => setOutDate(e.target.value)}
              className="w-full border-b border-[#c5a880]/30 py-2.5 px-1 focus:outline-none focus:border-[#c5a880] text-sm text-[#1a1a1a] font-light bg-transparent"
            />
          </div>

          {/* Guests Count */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.2em] uppercase text-black/50 font-semibold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#c5a880]" />
              Guests
            </label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full border-b border-[#c5a880]/30 py-2.5 px-1 focus:outline-none focus:border-[#c5a880] text-sm text-[#1a1a1a] font-light bg-transparent"
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
              <option value={6}>6 Guests (Villa/Penthouse)</option>
            </select>
          </div>

          {/* Search Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#1a1a1a] text-white hover:bg-[#c5a880] hover:text-[#1a1a1a] py-4 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Search Rooms
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default SearchAvailability;
