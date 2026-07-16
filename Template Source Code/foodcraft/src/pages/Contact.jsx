import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('dining');
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
      setMessage('');
    }, 1200);
  };

  return (
    <div className="bg-white text-[#111827] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16 md:mb-20 animate-[slide-up_0.8s_ease-out_forwards]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#EAB308] font-bold">Contact Concierge</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight">
            Connect With FoodCraft
          </h1>
          <div className="w-20 h-[2.5px] bg-[#EAB308] mt-1" />
          <p className="text-[#6B7280] text-xs md:text-sm font-light leading-relaxed mt-2">
            Reach out to our relations team for private dining sponsorships, corporate summits, press relations, or specialized catering operations.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Cards (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h3 className="font-serif text-lg font-bold text-[#111827] uppercase tracking-wider pl-3 border-l-2 border-[#EAB308]">
              Lobby Offices
            </h3>

            <div className="flex flex-col gap-6 text-xs text-[#6B7280]">
              <div className="flex items-center gap-4.5 p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] border border-[#EAB308]/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-[#EAB308]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-550 block font-bold">Address Details</span>
                  <span className="text-[#6B7280] leading-relaxed mt-1 block">45th Floor Sky Deck, Horizon Heights, Luxury District</span>
                </div>
              </div>

              <div className="flex items-center gap-4.5 p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] border border-[#EAB308]/25 flex items-center justify-center shrink-0">
                  <Phone className="w-4.5 h-4.5 text-[#EAB308]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-550 block font-bold">Direct Reception</span>
                  <span className="text-[#6B7280] leading-relaxed mt-1 block">+91 98888 77777 / +91 97777 66666</span>
                </div>
              </div>

              <div className="flex items-center gap-4.5 p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] border border-[#EAB308]/25 flex items-center justify-center shrink-0">
                  <Mail className="w-4.5 h-4.5 text-[#EAB308]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-550 block font-bold">Relations Email</span>
                  <span className="text-[#6B7280] leading-relaxed mt-1 block">concierge@foodcraft.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-base font-bold text-[#111827] uppercase tracking-wider pl-3 border-l-2 border-[#EAB308] mb-6">
              Send Concierge Query
            </h3>

            {success ? (
              <div className="p-8 bg-gray-50 border border-[#EAB308]/20 rounded-2xl flex flex-col items-center text-center gap-5 shadow-sm animate-scale-up">
                <div className="w-16 h-16 rounded-full bg-[#FEF3C7] border border-[#EAB308]/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#EAB308]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-serif text-xl font-bold text-[#111827]">Message Dispatched</h4>
                  <p className="text-[#6B7280] text-xs font-light max-w-sm mx-auto leading-relaxed">
                    Thank you. Our relations counselor will examine your query and get back to you within 12 business hours.
                  </p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold text-[10px] tracking-wider uppercase transition-colors rounded-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="bg-white border border-gray-150 p-8 rounded-2xl shadow-sm flex flex-col gap-6">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-widest text-[#EAB308] font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full bg-gray-50 border border-gray-100 focus:border-[#EAB308] py-3 px-4 text-xs font-light text-[#111827] focus:outline-none transition-colors rounded"
                  />
                </div>

                {/* Email */}
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

                {/* Subject of Query */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-widest text-[#EAB308] font-bold">Department</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-100 focus:border-[#EAB308] py-3 px-4 text-xs font-light text-[#111827] focus:outline-none transition-colors rounded"
                  >
                    <option value="dining">Private Dining & Events Sponsorship</option>
                    <option value="press">Press Relations & Marketing</option>
                    <option value="career">Career Opportunities & Stagiaire Program</option>
                    <option value="other">General Inquiries</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-widest text-[#EAB308] font-bold">Message Details</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter message details..."
                    className="w-full bg-gray-50 border border-gray-100 focus:border-[#EAB308] py-3 px-4 text-xs font-light text-[#111827] focus:outline-none transition-colors rounded resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#EAB308] hover:bg-[#CA8A04] disabled:bg-slate-300 text-white font-extrabold text-xs tracking-[0.25em] uppercase transition-colors flex items-center justify-center gap-2 mt-2 cursor-pointer rounded-sm hover:shadow-[0_4px_12px_rgba(234,179,8,0.2)]"
                >
                  {loading ? 'Sending Query...' : 'Dispatch Message'}
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
