import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { roomsData } from '../data/mockData';
import { useBooking } from '../hooks/useBooking';
import { Star, Bed, Maximize, Filter, SlidersHorizontal, RotateCcw } from 'lucide-react';

const Rooms = () => {
  const navigate = useNavigate();
  const { selectRoom, checkIn, checkOut, guests } = useBooking();

  // Filters State
  const [selectedType, setSelectedType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedCapacity, setSelectedCapacity] = useState('All');
  const [filteredRooms, setFilteredRooms] = useState(roomsData);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Filter Logic
  useEffect(() => {
    let result = roomsData;

    // Room Type Filter
    if (selectedType !== 'All') {
      result = result.filter((room) => room.type === selectedType);
    }

    // Price Filter
    result = result.filter((room) => room.price <= maxPrice);

    // Capacity Filter
    if (selectedCapacity !== 'All') {
      const cap = Number(selectedCapacity);
      if (cap === 6) {
        result = result.filter((room) => room.capacity >= 4);
      } else {
        result = result.filter((room) => room.capacity === cap);
      }
    }

    setFilteredRooms(result);
  }, [selectedType, maxPrice, selectedCapacity]);

  const handleResetFilters = () => {
    setSelectedType('All');
    setMaxPrice(2000);
    setSelectedCapacity('All');
  };

  const handleBookNow = (roomId) => {
    selectRoom(roomId);
    navigate('/booking');
  };

  const handleViewDetails = (roomId) => {
    navigate(`/room/${roomId}`);
  };

  const roomTypes = ['All', 'Deluxe', 'Premium', 'Executive', 'Family', 'Villa', 'Presidential'];

  return (
    <div className="animate-page-enter">
      {/* Mini Hero Header */}
      <div 
        className="relative h-[40vh] w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <span className="text-xs tracking-[0.25em] uppercase text-[#c5a880] font-semibold">Our Collection</span>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide mt-2">
            Rooms & Suites
          </h1>
        </div>
      </div>

      {/* Main Catalog Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        
        {/* Active Booking Search Params Info */}
        <div className="bg-[#faf9f6] border border-[#c5a880]/20 p-4 md:p-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-light">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-black/50 tracking-wider uppercase">Active Search:</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1a1a1a]">Check-In:</span>
              <span className="text-[#c5a880]">{checkIn}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1a1a1a]">Check-Out:</span>
              <span className="text-[#c5a880]">{checkOut}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1a1a1a]">Guests:</span>
              <span className="text-[#c5a880]">{guests} {guests > 1 ? 'Guests' : 'Guest'}</span>
            </div>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="text-[10px] font-semibold text-[#c5a880] hover:text-[#1a1a1a] tracking-widest uppercase underline"
          >
            Modify Dates
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 bg-white border border-[#c5a880]/15 p-6 h-fit sticky top-24 shadow-sm">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-black/5">
              <span className="font-serif text-lg text-[#1a1a1a] flex items-center gap-2 font-medium">
                <SlidersHorizontal className="w-4 h-4 text-[#c5a880]" />
                Filter Suites
              </span>
              <button 
                onClick={handleResetFilters}
                className="text-[#c5a880] hover:text-[#1a1a1a] p-1 focus:outline-none flex items-center gap-1 text-[10px] uppercase tracking-wider"
                title="Reset Filters"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Room Type */}
            <div className="mb-6">
              <h4 className="text-[11px] tracking-widest text-[#1a1a1a]/60 uppercase font-semibold mb-3">Room Type</h4>
              <div className="flex flex-col gap-2">
                {roomTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`text-left text-xs tracking-wide py-1 border-l-2 pl-3 transition-all ${
                      selectedType === type
                        ? 'border-[#c5a880] text-[#c5a880] font-semibold'
                        : 'border-transparent text-black/60 hover:text-black hover:border-black/30'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-[11px] tracking-widest text-[#1a1a1a]/60 uppercase font-semibold">Max Price</h4>
                <span className="text-xs font-semibold text-[#c5a880]">${maxPrice}</span>
              </div>
              <input
                type="range"
                min="300"
                max="2000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1 bg-[#c5a880]/20 rounded-lg appearance-none cursor-pointer accent-[#c5a880]"
              />
              <div className="flex justify-between text-[10px] text-black/40 mt-1 font-light">
                <span>$300</span>
                <span>$2,000+</span>
              </div>
            </div>

            {/* Capacity */}
            <div>
              <h4 className="text-[11px] tracking-widest text-[#1a1a1a]/60 uppercase font-semibold mb-3">Guest Capacity</h4>
              <div className="flex flex-col gap-2">
                {[
                  { value: 'All', label: 'All Capacities' },
                  { value: '2', label: '2 Guests' },
                  { value: '4', label: '4 Guests' },
                  { value: '6', label: '6+ Guests (Villas)' }
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setSelectedCapacity(item.value)}
                    className={`text-left text-xs tracking-wide py-1 border-l-2 pl-3 transition-all ${
                      selectedCapacity === item.value
                        ? 'border-[#c5a880] text-[#c5a880] font-semibold'
                        : 'border-transparent text-black/60 hover:text-black hover:border-black/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Rooms Grid */}
          <div className="lg:col-span-3">
            
            {filteredRooms.length === 0 ? (
              <div className="text-center py-20 bg-white border border-[#c5a880]/15">
                <h3 className="font-serif text-2xl text-black/70 mb-2">No Suites Available</h3>
                <p className="text-sm font-light text-black/40 mb-6">Try broadening your filter parameters.</p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 bg-[#c5a880] text-[#1a1a1a] text-xs font-semibold tracking-[0.2em] uppercase transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredRooms.map((room) => (
                  <div
                    key={room.id}
                    className="group bg-white border border-[#c5a880]/15 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    {/* Image wrap */}
                    <div className="relative h-72 w-full overflow-hidden">
                      <img
                        src={room.images[0]}
                        alt={room.name}
                        className="w-full h-72 object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1566073771259-6a8506099945";
                        }}
                      />
                      <div className="absolute inset-0 bg-[#1a1a1a]/15 group-hover:bg-[#1a1a1a]/30 transition-colors duration-500" />
                      <div className="absolute top-3 left-3 bg-[#faf9f6]/95 backdrop-blur-sm border border-[#c5a880]/20 text-black text-[9px] tracking-[0.25em] uppercase py-1 px-2.5 font-medium">
                        {room.type}
                      </div>
                      
                      {/* Price overlay */}
                      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm py-1 px-2.5 text-white text-xs font-serif font-semibold tracking-wider">
                        ${room.price} <span className="text-[9px] font-sans font-light text-white/70">/ night</span>
                      </div>

                      {/* Rating overlay */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] bg-[#1a1a1a]/80 text-[#c5a880] py-1 px-2.5 rounded-none font-semibold">
                        <Star className="w-3 h-3 fill-[#c5a880] text-[#c5a880]" />
                        <span>{room.rating}</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-xl text-[#1a1a1a] group-hover:text-[#c5a880] transition-colors duration-300 mb-2">
                          {room.name}
                        </h3>
                        <p className="text-[#1a1a1a]/60 text-xs font-light leading-relaxed mb-4 line-clamp-2">
                          {room.description}
                        </p>

                        {/* Room size & bed */}
                        <div className="flex items-center gap-4 text-[10px] text-black/50 font-light mb-6">
                          <span className="flex items-center gap-1">
                            <Bed className="w-3.5 h-3.5 text-[#c5a880]" />
                            {room.bedType}
                          </span>
                          <span className="flex items-center gap-1">
                            <Maximize className="w-3.5 h-3.5 text-[#c5a880]" />
                            {room.size}
                          </span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3 pt-4 border-t border-black/5 mt-auto">
                        <button
                          onClick={() => handleViewDetails(room.id)}
                          className="w-1/2 py-2.5 text-center border border-[#c5a880] hover:border-[#1a1a1a] text-[#c5a880] hover:text-[#1a1a1a] text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleBookNow(room.id)}
                          className="w-1/2 py-2.5 text-center bg-[#c5a880] hover:bg-[#1a1a1a] text-white text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
                        >
                          Book Now
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Rooms;
