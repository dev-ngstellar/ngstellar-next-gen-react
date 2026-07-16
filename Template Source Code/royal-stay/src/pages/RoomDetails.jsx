import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { roomsData } from '../data/mockData';
import { useBooking } from '../hooks/useBooking';
import { Star, Bed, Maximize, Shield, Calendar, Users, Eye, CheckCircle } from 'lucide-react';

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { checkIn, checkOut, guests, setCheckIn, setCheckOut, setGuests, selectRoom } = useBooking();

  const room = roomsData.find((r) => r.id === Number(id));

  // State for active image in the gallery
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (room) {
      setActiveImage(room.images[0]);
    }
  }, [id, room]);

  if (!room) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-40 text-center">
        <h2 className="font-serif text-3xl text-black/75 mb-4">Suite Not Found</h2>
        <p className="text-sm font-light text-black/40 mb-8">The requested room does not exist in our registry.</p>
        <Link
          to="/rooms"
          className="px-8 py-4 bg-[#c5a880] text-white text-xs font-semibold tracking-[0.2em] uppercase"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  // Calculate nights
  const computeNights = () => {
    try {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays || 1;
    } catch {
      return 1;
    }
  };

  const nights = computeNights();
  const subtotal = room.price * nights;
  const taxesAndFees = Math.round(subtotal * 0.14); // 14% tax and service fee
  const total = subtotal + taxesAndFees;

  const handleBookRedirect = () => {
    selectRoom(room.id);
    navigate('/booking');
  };

  // Find related rooms (same type or similar price class, excluding current room)
  const relatedRooms = roomsData
    .filter((r) => r.id !== room.id)
    .slice(0, 3);

  return (
    <div className="animate-page-enter pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Breadcrumbs */}
        <div className="text-xs font-light text-black/40 mb-6 flex gap-2">
          <Link to="/" className="hover:text-[#c5a880] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/rooms" className="hover:text-[#c5a880] transition-colors">Rooms</Link>
          <span>/</span>
          <span className="text-black/70 font-normal">{room.name}</span>
        </div>

        {/* Title & Rating */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a880] font-semibold">Exquisite Living</span>
            <h1 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-[#1a1a1a] mt-1">
              {room.name}
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#1a1a1a]">
            <div className="flex items-center gap-1 text-[#c5a880] font-semibold">
              <Star className="w-4 h-4 fill-[#c5a880]" />
              <span>{room.rating}</span>
            </div>
            <span className="text-black/30">|</span>
            <span className="text-black/50 font-light font-sans">{room.reviewsCount} Verfied Reviews</span>
          </div>
        </div>

        {/* Gallery & Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Main Details (Left 8 Cols) */}
          <div className="lg:col-span-8">
            
            {/* Gallery Component */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="h-[480px] w-full border border-[#c5a880]/15 overflow-hidden relative">
                <img
                  src={activeImage}
                  alt={room.name}
                  className="w-full h-full object-cover transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1566073771259-6a8506099945";
                  }}
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm py-1 px-3 text-white text-[10px] tracking-wider uppercase font-semibold">
                  {room.view}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {room.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`h-24 w-full border overflow-hidden ${
                      activeImage === img 
                        ? 'border-[#c5a880] ring-1 ring-[#c5a880]/50' 
                        : 'border-[#c5a880]/15 hover:border-[#c5a880]/50'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`thumbnail ${idx}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1566073771259-6a8506099945";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Room Specs Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 border border-[#c5a880]/15 bg-white mb-10 text-center">
              <div>
                <span className="text-[10px] text-black/40 uppercase block mb-1">Room Size</span>
                <span className="text-sm font-semibold text-[#1a1a1a] font-serif">{room.size}</span>
              </div>
              <div>
                <span className="text-[10px] text-black/40 uppercase block mb-1">Bed Configuration</span>
                <span className="text-sm font-semibold text-[#1a1a1a] font-serif">{room.bedType}</span>
              </div>
              <div>
                <span className="text-[10px] text-black/40 uppercase block mb-1">Max Occupancy</span>
                <span className="text-sm font-semibold text-[#1a1a1a] font-serif">{room.capacity} Guests</span>
              </div>
              <div>
                <span className="text-[10px] text-black/40 uppercase block mb-1">Primary Vista</span>
                <span className="text-sm font-semibold text-[#1a1a1a] font-serif">{room.view.split(' & ')[0]}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h2 className="font-serif text-2xl font-light text-[#1a1a1a] mb-4 pb-2 border-b border-[#c5a880]/15">
                The Sanctuary Experience
              </h2>
              <p className="text-[#1a1a1a]/80 text-sm font-light leading-relaxed mb-6">
                {room.longDescription}
              </p>
              <div className="flex flex-col gap-2 p-4 bg-[#faf9f6] border-l-2 border-[#c5a880] text-xs text-black/60 italic leading-relaxed">
                <span>"An oasis of elegant design. Perfect check-in and absolute silence during our stay. Truly a royal treatment." — Eleanor Vance, Luxury Travel Journalist</span>
              </div>
            </div>

            {/* Amenities Grid */}
            <div>
              <h2 className="font-serif text-2xl font-light text-[#1a1a1a] mb-6 pb-2 border-b border-[#c5a880]/15">
                Amenities & Conveniences
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex gap-2.5 items-center text-xs font-light text-[#1a1a1a]/80">
                    <CheckCircle className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Booking Side Widget (Right 4 Cols) */}
          <div className="lg:col-span-4">
            <div className="border border-[#c5a880]/30 bg-white p-6 sticky top-28 shadow-lg">
              <div className="text-center pb-6 border-b border-[#c5a880]/15 mb-6">
                <span className="text-[10px] tracking-wider text-black/40 uppercase block">Price Per Night</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-serif font-semibold text-[#1a1a1a]">${room.price}</span>
                  <span className="text-sm text-black/40 font-light">/ Night</span>
                </div>
              </div>

              {/* Input Adjusters */}
              <div className="flex flex-col gap-4 mb-6">
                {/* Dates Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-black/50 uppercase font-semibold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                    Check-In
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border border-black/10 py-2.5 px-3 focus:outline-none focus:border-[#c5a880] text-xs text-[#1a1a1a] bg-[#faf9f6]/30 font-light"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-black/50 uppercase font-semibold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                    Check-Out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn || new Date().toISOString().split('T')[0]}
                    className="w-full border border-black/10 py-2.5 px-3 focus:outline-none focus:border-[#c5a880] text-xs text-[#1a1a1a] bg-[#faf9f6]/30 font-light"
                  />
                </div>

                {/* Guests Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-black/50 uppercase font-semibold flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#c5a880]" />
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full border border-black/10 py-2.5 px-3 focus:outline-none focus:border-[#c5a880] text-xs text-[#1a1a1a] bg-[#faf9f6]/30 font-light"
                  >
                    {[...Array(room.capacity)].map((_, idx) => (
                      <option key={idx + 1} value={idx + 1}>
                        {idx + 1} {idx === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Billing breakdown */}
              <div className="flex flex-col gap-3 text-xs font-light border-b border-black/5 pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-black/60">${room.price} x {nights} {nights > 1 ? 'nights' : 'night'}</span>
                  <span className="font-semibold text-[#1a1a1a]">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/60">Tax & Luxury Service Fee (14%)</span>
                  <span className="font-semibold text-[#1a1a1a]">${taxesAndFees}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-semibold text-[#1a1a1a] uppercase">Total Cost</span>
                <span className="text-xl font-serif font-bold text-[#c5a880]">${total}</span>
              </div>

              {/* Action */}
              <button
                onClick={handleBookRedirect}
                className="w-full bg-[#1a1a1a] text-white hover:bg-[#c5a880] hover:text-[#1a1a1a] py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 shadow-md text-center block"
              >
                Proceed To Booking
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-black/40 font-light">
                <Shield className="w-3.5 h-3.5 text-green-600" />
                <span>Best Price Guarantee & Secure Connection</span>
              </div>

            </div>
          </div>

        </div>

        {/* Related Rooms Section */}
        <div className="border-t border-[#c5a880]/20 pt-16">
          <h2 className="font-serif text-3xl font-light text-center mb-10 text-[#1a1a1a]">
            Alternative Masterpieces
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedRooms.map((r) => (
              <div 
                key={r.id}
                className="group bg-white border border-[#c5a880]/15 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={r.images[0]}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1566073771259-6a8506099945";
                    }}
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 py-0.5 px-2 text-white text-[10px] font-semibold">
                    ${r.price} / Night
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-[#1a1a1a] group-hover:text-[#c5a880] transition-colors mb-1">{r.name}</h4>
                    <p className="text-[11px] text-[#1a1a1a]/50 font-light mb-4 line-clamp-1">{r.description}</p>
                  </div>
                  <Link 
                    to={`/room/${r.id}`}
                    className="text-[10px] font-semibold text-[#c5a880] hover:text-[#1a1a1a] tracking-widest uppercase flex items-center gap-1 mt-auto"
                  >
                    <Eye className="w-3 h-3" />
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default RoomDetails;
