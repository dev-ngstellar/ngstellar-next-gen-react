import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Award } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('3bhk');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16 md:mb-20 animate-[slide-up_0.8s_ease-out_forwards]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Private Viewing Concierge</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Schedule a Private Viewing
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mt-1" />
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mt-2">
            Viewing of our show suites is arranged by private invitation only. Register below to connect with a senior relationship manager.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Details (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider pl-3 border-l-2 border-[#D4AF37]">
              Lobby Offices
            </h3>

            <div className="flex flex-col gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-4.5 p-4 bg-[#0b0f19] border border-slate-900 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold">Experience Center</span>
                  <span className="text-slate-400 leading-relaxed mt-1 block">Skyline Residences Pavilion, Sector 65, Golf Course Ext Road</span>
                </div>
              </div>

              <div className="flex items-center gap-4.5 p-4 bg-[#0b0f19] border border-slate-900 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                  <Phone className="w-4.5 h-4.5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold">Direct Desk</span>
                  <span className="text-slate-400 leading-relaxed mt-1 block">+91 99999 55555 / +91 98888 44444</span>
                </div>
              </div>

              <div className="flex items-center gap-4.5 p-4 bg-[#0b0f19] border border-slate-900 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                  <Mail className="w-4.5 h-4.5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold">Concierge Mail</span>
                  <span className="text-slate-400 leading-relaxed mt-1 block">concierge@skylineresidences.com</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2.5 items-center p-6 bg-[#0b0f19] border border-[#D4AF37]/10 rounded-2xl">
              <Award className="w-6 h-6 text-[#D4AF37] shrink-0" />
              <span className="text-[10px] tracking-wider uppercase font-bold text-[#D4AF37] leading-relaxed">
                RERA Registered Project: RERA-GRG-1102-2026
              </span>
            </div>
          </div>

          {/* Form (7 Columns) */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider pl-3 border-l-2 border-[#D4AF37] mb-6">
              Request Invitation
            </h3>

            {success ? (
              <div className="p-8 bg-[#0b0f19] border border-[#D4AF37]/20 rounded-2xl flex flex-col items-center text-center gap-5 shadow-sm animate-scale-up">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-serif text-xl font-bold text-white">Invitation Request Submitted</h4>
                  <p className="text-slate-400 text-xs font-light max-w-sm mx-auto leading-relaxed">
                    Thank you. A senior relationship manager will call you within 2 hours to confirm your private suite viewing appointment details.
                  </p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#AA7C11] text-black font-bold text-[10px] tracking-wider uppercase transition-colors rounded-sm"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="bg-[#0b0f19] border border-slate-900 p-8 rounded-2xl flex flex-col gap-6 shadow-xl">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full bg-[#020617] border border-slate-900 focus:border-[#D4AF37] py-3 px-4 text-xs font-light text-white focus:outline-none transition-colors rounded"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@domain.com"
                      className="w-full bg-[#020617] border border-slate-900 focus:border-[#D4AF37] py-3 px-4 text-xs font-light text-white focus:outline-none transition-colors rounded"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Contact Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 99999 88888"
                      className="w-full bg-[#020617] border border-slate-900 focus:border-[#D4AF37] py-3 px-4 text-xs font-light text-white focus:outline-none transition-colors rounded"
                    />
                  </div>
                </div>

                {/* Category preference */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Configuration Choice</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-[#020617] border border-slate-900 focus:border-[#D4AF37] py-3 px-4 text-xs font-light text-white focus:outline-none transition-colors rounded"
                  >
                    <option value="3bhk">Signature 3 BHK Residence (3,200 sq. ft.)</option>
                    <option value="4bhk">Signature 4 BHK Residence (4,500 sq. ft.)</option>
                    <option value="penthouse">Sky Penthouse Suite (6,800 sq. ft.)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Preferred Visit Details / Requests</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide preferred time slot and details..."
                    className="w-full bg-[#020617] border border-slate-900 focus:border-[#D4AF37] py-3 px-4 text-xs font-light text-white focus:outline-none transition-colors rounded resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#AA7C11] disabled:bg-slate-800 text-black font-extrabold text-xs tracking-[0.25em] uppercase transition-colors flex items-center justify-center gap-2 mt-2 cursor-pointer rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  {loading ? 'Submitting Details...' : 'Request Invitation Link'}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
