import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Compass, Clock, Send, ShieldCheck, HelpCircle } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Reservations');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const supportDesks = [
    {
      name: "Reservations Desk",
      phone: "+1 (800) 769-2578 (Ext. 1)",
      email: "reservations@royalstay.com",
      hours: "24/7 Support"
    },
    {
      name: "Spa & Wellness Desk",
      phone: "+1 (800) 769-2578 (Ext. 2)",
      email: "spa@royalstay.com",
      hours: "08:00 - 22:00 EST"
    },
    {
      name: "Events & Weddings",
      phone: "+1 (800) 769-2578 (Ext. 3)",
      email: "events@royalstay.com",
      hours: "09:00 - 18:00 EST"
    },
    {
      name: "Concierge Services",
      phone: "+1 (800) 769-2578 (Ext. 4)",
      email: "concierge@royalstay.com",
      hours: "24/7 Support"
    }
  ];

  return (
    <div className="animate-page-enter">
      {/* Header Banner */}
      <div 
        className="relative h-[40vh] w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <span className="text-xs tracking-[0.25em] uppercase text-[#c5a880] font-semibold">Get In Touch</span>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide mt-2">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-[#c5a880]/15 p-8 text-center flex flex-col items-center gap-3 shadow-sm">
            <div className="w-12 h-12 rounded-full border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-black font-semibold tracking-wide">Our Address</h3>
            <p className="text-xs text-black/50 leading-relaxed font-light">
              102 Ocean Ridge Boulevard,<br />Cliffside Heights, NY 10007
            </p>
          </div>

          <div className="bg-white border border-[#c5a880]/15 p-8 text-center flex flex-col items-center gap-3 shadow-sm">
            <div className="w-12 h-12 rounded-full border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-black font-semibold tracking-wide">Direct Contact</h3>
            <p className="text-xs text-black/50 leading-relaxed font-light">
              Reservations: +1 (800) 769-2578<br />
              Front Desk: +1 (212) 889-1022
            </p>
          </div>

          <div className="bg-white border border-[#c5a880]/15 p-8 text-center flex flex-col items-center gap-3 shadow-sm">
            <div className="w-12 h-12 rounded-full border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-black font-semibold tracking-wide">Electronic Mail</h3>
            <p className="text-xs text-black/50 leading-relaxed font-light">
              General: hello@royalstay.com<br />
              Inquiries: reservations@royalstay.com
            </p>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Contact Form (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#c5a880]/15 p-6 md:p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-light text-black mb-2">Send Us A Message</h2>
            <p className="text-xs text-black/50 font-light mb-8">Do you have questions, special requests, or custom arrangements? Send us a message and our hosts will connect with you.</p>

            {submitted ? (
              <div className="bg-[#c5a880]/10 border border-[#c5a880]/30 p-6 text-center text-[#8e6e43] text-sm tracking-wider uppercase font-semibold">
                Thank you! Your message has been sent successfully. A host will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleMessageSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-wider text-black/50 uppercase font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jonathan Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border border-black/10 py-3 px-3.5 focus:outline-none focus:border-[#c5a880] text-xs font-light"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-wider text-black/50 uppercase font-semibold">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jonathan.doe@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-black/10 py-3 px-3.5 focus:outline-none focus:border-[#c5a880] text-xs font-light"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-black/50 uppercase font-semibold">Inquiry Type</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="border border-black/10 py-3 px-3.5 focus:outline-none focus:border-[#c5a880] text-xs font-light bg-transparent"
                  >
                    <option value="Reservations">Room & Suites Reservations</option>
                    <option value="Spa">Soma Spa Services</option>
                    <option value="Events">Weddings, Galas & Events</option>
                    <option value="Concierge">Chauffeur & Personal Butler Request</option>
                    <option value="Other">General feedback / Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-black/50 uppercase font-semibold">Your Message</label>
                  <textarea
                    rows="6"
                    required
                    placeholder="Provide details about your inquiry here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-black/10 py-3 px-3.5 focus:outline-none focus:border-[#c5a880] text-xs font-light resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#1a1a1a] text-white hover:bg-[#c5a880] hover:text-[#1a1a1a] py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map placeholder (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border border-[#c5a880]/20 h-[320px] w-full relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Royal Stay Map"
                className="w-full h-full object-cover filter brightness-[0.75]"
              />
              <div className="absolute inset-0 bg-[#1a1a1a]/30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#c5a880] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-[#c5a880] animate-spin-slow" />
                </div>
                <span className="bg-[#1a1a1a] text-white border border-[#c5a880] text-[9px] tracking-wider py-0.5 px-2 font-medium">
                  ROYAL STAY RESORT
                </span>
              </div>
            </div>

            <div className="border border-[#c5a880]/15 bg-white p-6 shadow-sm flex flex-col gap-4">
              <h3 className="font-serif text-lg text-black font-semibold">Check-in Registry</h3>
              <ul className="flex flex-col gap-3 text-xs font-light text-black/60">
                <li className="flex gap-2 items-center">
                  <Clock className="w-4 h-4 text-[#c5a880]" />
                  <span>Check-in: 15:00 - 23:00 hours</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Clock className="w-4 h-4 text-[#c5a880]" />
                  <span>Check-out: Before 12:00 hours</span>
                </li>
                <li className="flex gap-2 items-start">
                  <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>Government-issued photo identification and a credit card are required at check-in for incidental charges.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Support channels list */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs tracking-[0.25em] uppercase text-[#c5a880] font-semibold flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#c5a880]" />
              Dedicated Assistance
            </span>
            <h2 className="font-serif text-3xl font-light tracking-wide mt-2">
              Support Desks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportDesks.map((desk, idx) => (
              <div key={idx} className="border border-black/5 bg-[#faf9f6]/40 p-6 flex flex-col gap-3">
                <h4 className="font-serif text-base text-[#1a1a1a] font-semibold border-b border-[#c5a880]/20 pb-2">
                  {desk.name}
                </h4>
                <div className="text-xs font-light text-black/70 flex flex-col gap-1.5">
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-black/40">Phone:</span> {desk.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-black/40">Email:</span> {desk.email}
                  </span>
                  <span className="flex items-center gap-1 text-[#c5a880] font-medium">
                    <Clock className="w-3.5 h-3.5" /> {desk.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
