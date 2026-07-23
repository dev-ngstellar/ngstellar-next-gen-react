import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, ShieldAlert, Send, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
import { WeatherWidget, CurrencyConverterWidget, VisaAssistanceSection } from '../components/common/Widgets';

export default function Contact({ onOpenBooking }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Maldives',
    travelDate: '',
    budget: '$5,000 - $10,000',
    travelers: '2 Travelers',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-24 pt-28">
      
      {/* Luxury Hero Banner */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2000&q=80"
            alt="Contact VOYAGE"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-gold text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> VIP Concierge Desk
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white">
            Connect With Our Travel Architects
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            We are available 24/7 to design your custom global expedition.
          </p>
        </div>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-border space-y-2">
            <Phone className="w-6 h-6 text-primary" />
            <h4 className="font-heading font-bold text-base text-text-bright">VIP Direct Line</h4>
            <p className="text-text-muted text-xs">+1 (800) VOYAGE-VIP</p>
            <p className="text-text-muted text-[11px]">+44 20 7946 0912 (UK Desk)</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-border space-y-2">
            <Mail className="w-6 h-6 text-primary" />
            <h4 className="font-heading font-bold text-base text-text-bright">Private Email Desk</h4>
            <p className="text-text-muted text-xs">concierge@voyage-travel.com</p>
            <p className="text-text-muted text-[11px]">inquiries@voyage-travel.com</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-border space-y-2">
            <MessageSquare className="w-6 h-6 text-emerald-400" />
            <h4 className="font-heading font-bold text-base text-text-bright">WhatsApp VIP</h4>
            <p className="text-text-muted text-xs">+1 (555) 019-2834</p>
            <p className="text-text-muted text-[11px]">Instant 24/7 Chat Response</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-border space-y-2">
            <MapPin className="w-6 h-6 text-gold" />
            <h4 className="font-heading font-bold text-base text-text-bright">Global Headquarters</h4>
            <p className="text-text-muted text-xs">740 Park Avenue, Suite 18B</p>
            <p className="text-text-muted text-[11px]">New York, NY 10021</p>
          </div>
        </div>
      </section>

      {/* Main Section: Premium Contact Form & Emergency Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Form Column */}
          <div className="lg:col-span-2 glass-panel p-8 sm:p-12 rounded-3xl border border-border space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Inquiry Form</span>
              <h2 className="font-heading text-3xl font-bold text-text-bright">Plan Your Bespoke Vacation</h2>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="font-heading text-2xl font-bold text-text-bright">Inquiry Received</h3>
                <p className="text-text-muted text-xs max-w-md mx-auto">
                  Thank you <strong className="text-text-bright">{formData.name}</strong>. A Senior Travel Architect has received your request for {formData.destination} and will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-text-muted">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Eleanor Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-text-muted">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@sterling.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-text-muted">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-text-muted">Destination Interested</label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright font-medium focus:outline-none focus:border-primary cursor-pointer"
                    >
                      <option value="Maldives">Maldives Overwater</option>
                      <option value="Santorini">Santorini & Mykonos</option>
                      <option value="Swiss Alps">Swiss Alps & Zermatt</option>
                      <option value="Kyoto">Kyoto & Tokyo</option>
                      <option value="Serengeti">Serengeti Safari</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-text-muted">Travel Date</label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-text-muted">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright font-medium focus:outline-none focus:border-primary cursor-pointer"
                    >
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+ (Ultra Luxury)</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-text-muted">Travelers</label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright font-medium focus:outline-none focus:border-primary cursor-pointer"
                    >
                      <option value="1 Traveler">1 Solo</option>
                      <option value="2 Travelers">2 Couple</option>
                      <option value="4+ Family">4+ Family</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-text-muted">Personal Preferences / Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about special occasions, dietary needs, private flights, or preferred activities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-text-bright focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-hover text-white font-bold text-sm shadow-xl shadow-primary/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send VIP Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Emergency Contact Card & Widgets */}
          <div className="space-y-6">
            
            {/* Emergency Support Card */}
            <div className="glass-card p-6 rounded-3xl border border-rose-500/40 bg-rose-500/5 space-y-3">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-rose-400" /> 24/7 Global SOS Line
              </span>
              <h4 className="font-heading font-bold text-text-bright text-lg">In-Trip Emergency Assistance</h4>
              <p className="text-text-muted text-xs leading-relaxed">
                Currently traveling on a VOYAGE package and need immediate support? Call our emergency command center.
              </p>
              <div className="p-3 rounded-xl bg-background border border-border font-mono font-bold text-rose-400 text-sm">
                +1 (888) VOYAGE-911
              </div>
            </div>

            {/* Weather Micro-Widget */}
            <WeatherWidget />

            {/* Currency Micro-Widget */}
            <CurrencyConverterWidget />

          </div>
        </div>
      </section>

      {/* Visa Assistance Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VisaAssistanceSection />
      </section>

      {/* Embedded Simulated Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-border h-80 flex items-center justify-center bg-slate-950 text-center p-6">
          <div className="space-y-2 relative z-10">
            <MapPin className="w-10 h-10 text-primary mx-auto animate-bounce" />
            <h3 className="font-heading text-2xl font-bold text-white">VOYAGE Atelier Flagship — New York</h3>
            <p className="text-slate-400 text-xs">740 Park Avenue, Upper East Side, Manhattan</p>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30">
              By Appointment Only
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-heading text-3xl sm:text-5xl font-black text-text-bright">Your Dream Vacation Starts Here.</h2>
        <p className="text-text-muted text-sm max-w-md mx-auto">
          Contact our principal designers today and receive a complimentary itinerary proposal.
        </p>
      </section>

    </div>
  );
}
