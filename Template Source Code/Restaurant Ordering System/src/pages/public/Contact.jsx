import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle2, MapPin, Phone, Mail, Sparkles, MessageSquare } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Contact = () => {
  const [partySize, setPartySize] = useState('2 Guests');
  const [resDate, setResDate] = useState('2026-07-30');
  const [resTime, setResTime] = useState('19:30');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Reserve Your Experience</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100">
          Table Reservations & Concierge
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
          Reserve your private booth, patio dining, or VIP chef table. Instant confirmation provided.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Reservation Booking Form */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-200 dark:border-stone-800">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Reserve A Table</h3>
              <p className="text-xs text-stone-500">Live availability sync enabled</p>
            </div>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">Reservation Confirmed!</h4>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Thank you, {guestName}. We look forward to welcoming your party of {partySize} on {resDate} at {resTime}.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-colors"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">Guests</label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>4 Guests</option>
                    <option>6 Guests (VIP)</option>
                    <option>8+ Private Room</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={resDate}
                    onChange={(e) => setResDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">Time Slot</label>
                  <select
                    value={resTime}
                    onChange={(e) => setResTime(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500"
                  >
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:30</option>
                    <option>21:15</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="David Kim"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 901-2233"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">Dietary Preferences or Special Requests</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Anniversary celebration, nut allergies, terrace booth preference..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-amber-500 text-stone-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
              >
                Confirm Table Reservation
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Location & Hours Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-stone-900 text-white space-y-6 shadow-2xl">
            <h3 className="font-serif text-2xl font-bold text-amber-400">Flagship Dining Room</h3>
            
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-stone-100">742 Fifth Avenue, Suite 100</p>
                  <p className="text-stone-400">New York, NY 10019</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-stone-300 font-mono">+1 (212) 555-0199</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-stone-300">concierge@gourmetium.com</span>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 space-y-2 text-xs">
              <h4 className="font-serif text-sm font-bold text-stone-200">Operating Hours</h4>
              <div className="flex justify-between text-stone-400">
                <span>Mon - Thu</span>
                <span className="font-mono text-stone-200">17:00 - 23:00</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Fri - Sun</span>
                <span className="font-mono text-stone-200">16:00 - 00:00</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
