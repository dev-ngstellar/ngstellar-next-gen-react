import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useBooking } from '../hooks/useBooking';
import { roomsData } from '../data/mockData';
import { Crown, Sparkles, AlertTriangle, ShieldCheck, Mail, Phone, User, Calendar, Check, X } from 'lucide-react';

const Booking = () => {
  const navigate = useNavigate();
  const { 
    checkIn, 
    checkOut, 
    guests, 
    selectedRoomId, 
    guestInfo, 
    setGuestInfo,
    confirmBooking, 
    clearBooking 
  } = useBooking();

  const room = roomsData.find((r) => r.id === selectedRoomId);

  // Form states
  const [name, setName] = useState(guestInfo.name || '');
  const [email, setEmail] = useState(guestInfo.email || '');
  const [phone, setPhone] = useState(guestInfo.phone || '');
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Modal success state
  const [successBooking, setSuccessBooking] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!room) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-40 text-center flex flex-col items-center">
        <AlertTriangle className="w-12 h-12 text-[#c5a880] mb-4" />
        <h2 className="font-serif text-3xl text-black/75 mb-2">No Room Selected</h2>
        <p className="text-sm font-light text-black/40 max-w-md mb-8">
          Please select a luxury room from our registry to proceed with your reservations.
        </p>
        <Link
          to="/rooms"
          className="px-8 py-4 bg-[#c5a880] text-white text-xs font-semibold tracking-[0.2em] uppercase"
        >
          Browse Rooms
        </Link>
      </div>
    );
  }

  // Calculation
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
  const taxesAndFees = Math.round(subtotal * 0.14);
  const total = subtotal + taxesAndFees;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) return;

    const bookingPayload = {
      roomName: room.name,
      roomPrice: room.price,
      checkIn,
      checkOut,
      guests,
      totalCost: total,
      guestName: name,
      guestEmail: email,
      guestPhone: phone
    };

    const finalBooking = confirmBooking(bookingPayload);
    setSuccessBooking(finalBooking);
  };

  const handleCloseModal = () => {
    setSuccessBooking(null);
    clearBooking();
    navigate('/');
  };

  return (
    <div className="animate-page-enter pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#c5a880] font-semibold">Reservations</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide mt-2">
            Secure Booking
          </h1>
          <div className="w-16 h-[1px] bg-[#c5a880] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Booking Info and Form (Left 7 Columns) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              {/* Guest Information Card */}
              <div className="border border-[#c5a880]/15 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-6 pb-2 border-b border-black/5 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#c5a880]" />
                  Guest Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-[10px] tracking-wider text-black/50 uppercase font-semibold">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Johnathan Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-black/10 py-3 pl-10 pr-3 focus:outline-none focus:border-[#c5a880] text-xs font-light"
                      />
                      <User className="w-4 h-4 text-black/30 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-wider text-black/50 uppercase font-semibold">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="john.doe@luxury.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-black/10 py-3 pl-10 pr-3 focus:outline-none focus:border-[#c5a880] text-xs font-light"
                      />
                      <Mail className="w-4 h-4 text-black/30 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-wider text-black/50 uppercase font-semibold">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border border-black/10 py-3 pl-10 pr-3 focus:outline-none focus:border-[#c5a880] text-xs font-light"
                      />
                      <Phone className="w-4 h-4 text-black/30 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Details Card */}
              <div className="border border-[#c5a880]/15 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-6 pb-2 border-b border-black/5 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#c5a880]" />
                  Stay Specifications
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                  <div>
                    <span className="text-black/40 block mb-0.5">Check-In Date</span>
                    <span className="font-semibold text-black">{checkIn}</span>
                  </div>
                  <div>
                    <span className="text-black/40 block mb-0.5">Check-Out Date</span>
                    <span className="font-semibold text-black">{checkOut}</span>
                  </div>
                  <div>
                    <span className="text-black/40 block mb-0.5">Guests Selected</span>
                    <span className="font-semibold text-black">{guests} {guests > 1 ? 'Guests' : 'Guest'}</span>
                  </div>
                  <div className="md:col-span-3 pt-2 text-[11px] text-[#c5a880] font-medium flex items-center gap-1.5">
                    <Crown className="w-4 h-4" />
                    <span>Calculated total stay duration: {nights} {nights > 1 ? 'Nights' : 'Night'}</span>
                  </div>
                </div>
              </div>

              {/* Secure Transaction Notice */}
              <div className="flex items-start gap-3.5 p-4 border border-green-200/40 bg-green-50/20 text-xs text-black/60 leading-relaxed">
                <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-0.5">128-Bit SSL Secure Gateway</h4>
                  <span>Your booking is directly transmitted to our secure PMS system. No immediate payment will be drafted. Settle your final balance upon check-out at our grand reception desk.</span>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="flex flex-col gap-4">
                <label className="flex items-start gap-2.5 text-xs text-black/60 font-light cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#c5a880]"
                  />
                  <span>
                    I agree to the Royal Stay Luxury Resort booking terms, check-in rules (15:00 onwards), and cancellation policies (free cancellation up to 48 hours prior to arrival).
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agreeTerms}
                  className="w-full bg-[#1a1a1a] disabled:bg-[#1a1a1a]/20 text-white disabled:text-white/40 hover:bg-[#c5a880] hover:text-[#1a1a1a] py-4.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-md text-center"
                >
                  Confirm My Reservation
                </button>
              </div>

            </form>
          </div>

          {/* Pricing Summary (Right 5 Columns) */}
          <div className="lg:col-span-5">
            <div className="border border-[#c5a880]/20 bg-[#faf9f6] p-6 sticky top-28 shadow-sm">
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-6 pb-2 border-b border-[#c5a880]/15">
                Reservation Summary
              </h3>

              {/* Room card details */}
              <div className="flex gap-4 mb-6">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-24 h-24 object-cover border border-[#c5a880]/15 shrink-0"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1566073771259-6a8506099945";
                  }}
                />
                <div>
                  <span className="text-[9px] tracking-widest text-[#c5a880] uppercase block">{room.type}</span>
                  <h4 className="font-serif text-base text-[#1a1a1a] leading-tight mt-0.5 mb-1">{room.name}</h4>
                  <span className="text-xs text-black/50 block font-light">{room.bedType}</span>
                  <span className="text-xs text-black/50 block font-light">{room.size}</span>
                </div>
              </div>

              {/* Costs */}
              <div className="flex flex-col gap-4 text-xs font-light border-y border-[#c5a880]/15 py-6 mb-6">
                <div className="flex justify-between">
                  <span className="text-black/60">${room.price} x {nights} {nights > 1 ? 'nights' : 'night'}</span>
                  <span className="font-semibold text-[#1a1a1a]">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/60">Local Luxury Tourist Taxes</span>
                  <span className="font-semibold text-[#1a1a1a]">${Math.round(taxesAndFees * 0.4)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/60">Palace Resort Service Charge (10%)</span>
                  <span className="font-semibold text-[#1a1a1a]">${Math.round(taxesAndFees * 0.6)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[10px] tracking-wider text-black/40 uppercase block">Total Reservation Cost</span>
                  <span className="text-xs text-black/40 font-light block">Includes all government taxes</span>
                </div>
                <span className="text-2xl font-serif font-bold text-[#c5a880]">${total}</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Success Modal */}
      {successBooking && (
        <div className="fixed inset-0 z-50 bg-[#1a1a1a]/90 flex items-center justify-center p-6 backdrop-blur-md animate-[fade-in_0.4s_ease-out_forwards]">
          <div className="bg-white border border-[#c5a880]/40 max-w-md w-full p-8 text-center relative shadow-2xl animate-[scale-up_0.5s_ease-out_forwards]">
            
            <div className="w-16 h-16 rounded-full bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880] mx-auto mb-6">
              <Check className="w-8 h-8 stroke-[2]" />
            </div>

            <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a880] font-semibold mb-2 block">Booking Confirmed</span>
            
            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-6">
              Thank You For Your Reservation
            </h3>

            {/* Receipt Summary */}
            <div className="bg-[#faf9f6] border border-black/5 p-4 text-xs font-light text-left flex flex-col gap-2.5 mb-8">
              <div className="flex justify-between border-b border-black/5 pb-2 mb-2 font-medium text-[10px] tracking-widest uppercase text-black/50">
                <span>Verification Receipt</span>
                <span className="text-[#c5a880] font-bold">{successBooking.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/50">Guest Name:</span>
                <span className="font-semibold text-black">{successBooking.guestName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/50">Suite:</span>
                <span className="font-semibold text-black">{successBooking.roomName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/50">Dates:</span>
                <span className="font-semibold text-black">{successBooking.checkIn} to {successBooking.checkOut}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/50">Guests:</span>
                <span className="font-semibold text-black">{successBooking.guests}</span>
              </div>
              <div className="flex justify-between border-t border-black/5 pt-2 mt-2">
                <span className="text-black/50 font-semibold">Total Cost:</span>
                <span className="font-bold text-[#c5a880] text-sm">${successBooking.totalCost}</span>
              </div>
            </div>

            <p className="text-[11px] text-black/40 leading-relaxed mb-6 font-light">
              A detailed confirmation letter has been dispatched to <span className="font-semibold text-black/70">{successBooking.guestEmail}</span>. Our concierge team will connect with you soon to coordinate your luxury airport transfer.
            </p>

            <button
              onClick={handleCloseModal}
              className="w-full bg-[#1a1a1a] hover:bg-[#c5a880] text-white hover:text-[#1a1a1a] py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
            >
              Return to Home
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Booking;
