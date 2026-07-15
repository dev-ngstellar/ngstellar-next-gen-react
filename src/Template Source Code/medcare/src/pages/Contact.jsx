import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Send, Check, AlertTriangle } from 'lucide-react';

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

  const clinicHours = [
    { department: "Emergency & Trauma Triage", hours: "24 Hours / 7 Days" },
    { department: "Outpatient Specialists Consultation", hours: "Mon - Sat (09:00 - 18:00)" },
    { department: "Diagnostic Radiology & Labs", hours: "24 Hours / 7 Days" },
    { department: "General Inpatient Admissions Desk", hours: "Mon - Sun (08:00 - 20:00)" }
  ];

  return (
    <div className="animate-page-enter">
      {/* Header Banner */}
      <div className="relative pt-36 pb-20 bg-slate-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-sky-400 font-semibold mb-2 block">Direct Support</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            Contact MedCare Hospital
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mt-4 max-w-xl mx-auto">
            Get in touch with our help desk coordinators, verify admission documents, or review local clinic working hours.
          </p>
        </div>
      </div>

      {/* Grid Layout (Form & Details) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Contact Form Panel (7 Columns) */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl shadow-sm p-6 md:p-8">
          <h3 className="font-heading text-lg font-bold text-slate-950 mb-6 pb-2 border-b border-slate-100">
            Submit Support Desk Query
          </h3>

          {success ? (
            <div className="p-8 text-center flex flex-col items-center gap-4 animate-[scale-up_0.4s_ease-out_forwards]">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Message Received</h4>
              <p className="text-slate-500 text-xs font-light max-w-sm leading-relaxed">
                Thank you. Your message has been routed to our clinical coordination unit. We will reply to your registered email address within 6 business hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-sky-500 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jonathan Vance"
                    className="w-full border border-slate-200 focus:border-sky-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jonathan.vance@company.com"
                    className="w-full border border-slate-200 focus:border-sky-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
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
                  className="w-full border border-slate-200 focus:border-sky-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Inquiry Details</label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline details regarding general surgery costs, bed availability queries, or other medical support check-in parameters..."
                  className="w-full border border-slate-200 focus:border-sky-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-500/55 text-white py-4 rounded text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow shadow-sky-500/10"
              >
                {loading ? 'Transmitting Message...' : 'Send Message'}
                <Send className="w-3.5 h-3.5" />
              </button>

              <div className="flex justify-center items-center gap-2 text-[10px] text-slate-400 font-light mt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Your contact data is securely saved under standard health HIPAA compliance guidelines.</span>
              </div>
            </form>
          )}

        </div>

        {/* Office Details & Hours (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Emergency Box */}
          <div className="p-6 bg-rose-600 text-white rounded-2xl flex flex-col gap-4 shadow-md">
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase pl-2 border-l-2 border-white flex items-center gap-1.5">
              <AlertTriangle className="w-5 h-5 text-white animate-pulse" />
              Emergency Triage Hotline
            </h4>
            <p className="text-xs font-light text-rose-100 leading-relaxed">
              If you or a family member is suffering chest pains, severe breathing difficulties, or critical physical trauma, phone our ambulance dispatch desk immediately.
            </p>
            <div className="text-lg font-bold">
              Ambulance Desk: 1-800-555-9999
            </div>
          </div>

          {/* Contact Directory */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-xs font-bold text-slate-950 uppercase tracking-widest pl-1 border-l-2 border-sky-500">
              Campus Contact Info
            </h4>
            
            <div className="p-5 bg-white border border-slate-100 rounded-xl flex flex-col gap-3.5 text-xs font-light text-slate-500 shadow-sm">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>100 Health Boulevard, Metro City, NY 10001</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Admissions: +1 (800) 555-0155</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                <span>admissions@medcarehospital.com</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-xs font-bold text-slate-950 uppercase tracking-widest pl-1 border-l-2 border-sky-500">
              Working Hours
            </h4>

            <div className="border border-slate-100 bg-white rounded-xl shadow-sm overflow-hidden text-xs">
              {clinicHours.map((ch, idx) => (
                <div key={idx} className="p-4 flex justify-between gap-4 border-b border-slate-100 last:border-0 font-light text-slate-500">
                  <span className="font-medium text-slate-800">{ch.department}</span>
                  <span className="shrink-0 text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    {ch.hours}
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
          
          <div className="absolute top-1/2 left-1/3 w-1/3 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute top-1/4 left-1/2 w-1 h-1/2 bg-gradient-to-b from-transparent via-sky-500 to-transparent blur-sm" />

          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-sky-600/20 border border-sky-500 flex items-center justify-center text-white animate-bounce">
              <MapPin className="w-6 h-6 text-sky-500 fill-sky-500/20" />
            </div>
            <h4 className="font-heading text-sm font-bold text-white">Interactive MedCare Campus Map</h4>
            <p className="text-slate-400 text-xs font-light max-w-sm">
              Map integration is ready for deployment. Loading outpatient coordinates and parking locations.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
