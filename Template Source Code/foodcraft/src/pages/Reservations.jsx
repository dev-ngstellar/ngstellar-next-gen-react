import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldAlert, Award, Sparkles, Users } from 'lucide-react';

const Reservations = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [seating, setSeating] = useState('skyline');
  const [requests, setRequests] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [recordCode, setRecordCode] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const generatedCode = `FC-${Math.floor(100000 + Math.random() * 900000)}`;

    const currentReservations = JSON.parse(localStorage.getItem('foodcraft_bookings')) || [];
    const newBooking = {
      code: generatedCode,
      name,
      phone,
      email,
      guests,
      date,
      time,
      seating,
      requests,
      created: new Date().toLocaleDateString()
    };

    setTimeout(() => {
      localStorage.setItem('foodcraft_bookings', JSON.stringify([newBooking, ...currentReservations]));
      setRecordCode(generatedCode);
      setLoading(false);
      setSuccess(true);
      
      // Reset
      setName('');
      setPhone('');
      setEmail('');
      setDate('');
      setRequests('');
    }, 1500);
  };

  return (
    <div className="bg-white text-[#111827] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16 md:mb-20 animate-[slide-up_0.8s_ease-out_forwards]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#EAB308] font-bold">Secure Table</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight">
            Online Table Reservations
          </h1>
          <div className="w-20 h-[2.5px] bg-[#EAB308] mt-1" />
          <p className="text-[#6B7280] text-xs md:text-sm font-light leading-relaxed mt-2">
            Secure seating inside our 45th-floor glass terrace or main hall. Bookings open 30 days in advance. Smart elegant attire requested.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Reservation Policy Details (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg font-bold text-[#111827] uppercase tracking-wider pl-3 border-l-2 border-[#EAB308]">
                Booking Protocol
              </h3>
              <p className="text-[#6B7280] text-xs font-light leading-relaxed">
                To guarantee our standards of quality and detail, please observe the following requirements during your dining visit.
              </p>
            </div>

            {/* List */}
            <div className="flex flex-col gap-6 text-xs text-[#6B7280]">
              <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] border border-[#EAB308]/25 flex items-center justify-center shrink-0">
                  <Users className="w-4.5 h-4.5 text-[#EAB308]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-550 block font-bold">Dress Standard</span>
                  <span className="text-[#6B7280] leading-relaxed mt-1 block">Smart Elegant dress code is strictly enforced. Gentlemen are requested to wear collared shirts and closed shoes. No athletic wear.</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] border border-[#EAB308]/25 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-4.5 h-4.5 text-[#EAB308]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-550 block font-bold">Late Arrival Window</span>
                  <span className="text-[#6B7280] leading-relaxed mt-1 block">Reservations are held for a maximum of 15 minutes. Please notify our reception desk if you expect any delays.</span>
                </div>
              </div>
            </div>

            {/* Accolades */}
            <div className="flex gap-2.5 items-center p-6 bg-gray-50 border border-gray-150 rounded-2xl">
              <Award className="w-6 h-6 text-[#EAB308] shrink-0" />
              <span className="text-[10px] tracking-wider uppercase font-bold text-[#111827] leading-relaxed">
                Reservations areNDNC compliant & verified by SMS
              </span>
            </div>

          </div>

          {/* Form / Success Panel (7 Columns) */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-base font-bold text-[#111827] uppercase tracking-wider pl-3 border-l-2 border-[#EAB308] mb-6">
              Reserve Your Table
            </h3>

            {success ? (
              <div className="p-8 bg-gray-50 border border-[#EAB308]/20 rounded-2xl flex flex-col items-center text-center gap-5 shadow-sm animate-scale-up">
                <div className="w-16 h-16 rounded-full bg-[#FEF3C7] border border-[#EAB308]/35 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#EAB308]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-serif text-xl font-bold text-[#111827]">Table Reserved Successfully</h4>
                  <p className="text-[#6B7280] text-xs font-light max-w-sm mx-auto leading-relaxed">
                    Your reservation code is <strong className="text-[#EAB308] font-bold">{recordCode}</strong>. We have dispatched a confirmation SMS with your check-in details.
                  </p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold text-[10px] tracking-wider uppercase transition-colors rounded-sm"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleBook} className="bg-white border border-gray-150 p-8 rounded-2xl shadow-sm flex flex-col gap-6">
                
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-widest text-[#EAB308] font-bold">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter booking name"
                    className="w-full bg-gray-50 border border-gray-100 focus:border-[#EAB308] py-3 px-4 text-xs font-light text-[#111827] focus:outline-none transition-colors rounded"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] uppercase tracking-widest text-[#EAB308] font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@domain.com"
                      className="w-full bg-gray-50 border border-gray-100 focus:border-[#EAB308] py-3 px-4 text-xs font-light text-[#111827] focus:outline-none transition-colors rounded"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] uppercase tracking-widest text-[#EAB308] font-bold">Contact Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 99999 88888"
                      className="w-full bg-gray-50 border border-gray-100 focus:border-[#EAB308] py-3 px-4 text-xs font-light text-[#111827] focus:outline-none transition-colors rounded"
                    />
                  </div>
                </div>

                {/* Guests & Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] uppercase tracking-widest text-[#EAB308] font-bold">Total Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 focus:border-[#EAB308] py-3 px-4 text-xs font-light text-[#111827] focus:outline-none transition-colors rounded"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests (Couple)</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="12">Private Dining Hall (8-12)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] uppercase tracking-widest text-[#EAB308] font-bold">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 focus:border-[#EAB308] py-3 px-4 text-xs font-light text-[#111827] focus:outline-none transition-colors rounded"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] uppercase tracking-widest text-[#EAB308] font-bold">Time Slot</label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 focus:border-[#EAB308] py-3 px-4 text-xs font-light text-[#111827] focus:outline-none transition-colors rounded"
                    >
                      <option value="18:30">6:30 PM (Dinner)</option>
                      <option value="20:00">8:00 PM (Prime Dinner)</option>
                      <option value="21:30">9:30 PM (Late Service)</option>
                    </select>
                  </div>
                </div>

                {/* Seating preference */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-widest text-[#EAB308] font-bold">Seating Experience</label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-100 focus:border-[#EAB308] py-3 px-4 text-xs font-light text-[#111827] focus:outline-none transition-colors rounded"
                  >
                    <option value="skyline">45th Floor Glass Sky Terrace (Rooftop)</option>
                    <option value="main">Main Dining Hall & Stage Area</option>
                    <option value="cellar">Acoustic Wine Cellar Chamber (Private)</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-widest text-[#EAB308] font-bold">Special Requests</label>
                  <textarea
                    rows={3}
                    value={requests}
                    onChange={(e) => setRequests(e.target.value)}
                    placeholder="Enter allergies or customized seating instructions..."
                    className="w-full bg-gray-50 border border-gray-100 focus:border-[#EAB308] py-3 px-4 text-xs font-light text-[#111827] focus:outline-none transition-colors rounded resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#EAB308] hover:bg-[#CA8A04] disabled:bg-slate-300 text-white font-bold text-xs tracking-[0.25em] uppercase transition-colors flex items-center justify-center gap-2 mt-2 cursor-pointer rounded-sm hover:shadow-[0_4px_12px_rgba(234,179,8,0.2)]"
                >
                  {loading ? 'Securing Table...' : 'Reserve Table'}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Reservations;
