import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, Check } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  const supportHours = [
    { department: "Registrar Admissions Support", hours: "Mon - Fri (09:00 - 17:00)" },
    { department: "Parent Portal Help Desk", hours: "24 Hours / 7 Days" },
    { department: "Corporate & Partner Inquiries", hours: "Mon - Fri (09:00 - 18:00)" }
  ];

  return (
    <div className="animate-page-enter">
      
      {/* Header Banner */}
      <div className="relative pt-36 pb-20 bg-slate-900 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-violet-400 font-semibold mb-2 block">Connect With Us</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            Consultation & Campus Support
          </h1>
          <p className="text-slate-450 text-xs sm:text-sm font-light leading-relaxed mt-4 max-w-xl mx-auto">
            Need parent portal login assistance, admissions guidance, or tuition invoices? Drop a ticket below.
          </p>
        </div>
      </div>

      {/* Form and info grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Form (7 Columns) */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl shadow-sm p-6 md:p-8">
          <h3 className="font-heading text-lg font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">
            Submit Support Ticket
          </h3>

          {success ? (
            <div className="p-8 text-center flex flex-col items-center gap-4 animate-[scale-up_0.4s_ease-out_forwards]">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Ticket Queued Successfully</h4>
              <p className="text-slate-555 text-xs font-light max-w-sm leading-relaxed">
                Thank you. Your inquiry is active in our help desk. A support representative will email you shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-violet-655 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors"
              >
                Send Another Ticket
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Jenkins"
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 019-2834"
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Inquiry Message</label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline details regarding billing queries, sibling enrollment discounts, or playground schedules..."
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-600 hover:bg-violet-750 disabled:bg-violet-500/50 text-white py-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow shadow-violet-600/10"
              >
                {loading ? 'Submitting Ticket...' : 'Send Message'}
              </button>

              <div className="flex justify-center items-center gap-2 text-[10px] text-slate-400 font-light mt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Your contact data is securely saved under standard privacy rules.</span>
              </div>
            </form>
          )}

        </div>

        {/* Right Info Details (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-xs font-bold text-slate-900 uppercase tracking-widest pl-1 border-l-2 border-violet-600">
              Campus Contact Directory
            </h4>
            
            <div className="p-5 bg-white border border-slate-100 rounded-xl flex flex-col gap-3.5 text-xs font-light text-slate-550 shadow-sm">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                <span>450 Academy Road, San Francisco, CA 94107</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-violet-500 shrink-0" />
                <span>+1 (800) 555-0188</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-violet-500 shrink-0" />
                <span>registrations@smartacademy.edu</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-xs font-bold text-slate-900 uppercase tracking-widest pl-1 border-l-2 border-violet-600">
              Office Hours
            </h4>

            <div className="border border-slate-100 bg-white rounded-xl shadow-sm overflow-hidden text-xs">
              {supportHours.map((sh, idx) => (
                <div key={idx} className="p-4 flex justify-between gap-4 border-b border-slate-100 last:border-0 font-light text-slate-550">
                  <span className="font-medium text-slate-800">{sh.department}</span>
                  <span className="shrink-0 text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    {sh.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>

      {/* Google Map Mock Placeholder */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm relative h-96 bg-slate-900 flex items-center justify-center text-center">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="absolute top-1/2 left-1/3 w-1/3 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent blur-sm" />
          <div className="absolute top-1/4 left-1/2 w-1 h-1/2 bg-gradient-to-b from-transparent via-violet-500 to-transparent blur-sm" />

          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-violet-600/20 border border-violet-500 flex items-center justify-center text-white animate-bounce">
              <MapPin className="w-6 h-6 text-violet-500 fill-violet-500/20" />
            </div>
            <h4 className="font-heading text-sm font-bold text-white">Interactive Kids School Campus Map</h4>
            <p className="text-slate-400 text-xs font-light max-w-sm">
              Map integration is ready for deployment. Loading coordinates for Lecture Halls and Creative Playgrounds.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
