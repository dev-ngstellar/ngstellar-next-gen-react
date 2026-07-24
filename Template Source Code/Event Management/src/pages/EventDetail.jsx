import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Ticket, User, ShieldCheck, CheckCircle2, Star, Sparkles, Share2, HelpCircle, ArrowLeft, QrCode, CreditCard } from 'lucide-react';
import { UPCOMING_EVENTS, SPEAKERS, FAQS } from '../data/eventsData';

export const EventDetail = () => {
  const { id } = useParams();
  const event = UPCOMING_EVENTS.find(e => e.id === id) || UPCOMING_EVENTS[0];
  const [activeTab, setActiveTab] = useState('overview');
  const [ticketModal, setTicketModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState('regular');
  const [ticketBooked, setTicketBooked] = useState(false);

  const eventSpeakers = SPEAKERS.filter(spk => event.speakers?.includes(spk.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Back Button */}
      <Link to="/events" className="inline-flex items-center space-x-2 text-xs font-semibold text-[var(--color-primary)] hover:underline">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Events Calendar</span>
      </Link>

      {/* Hero Banner with Image & Sticky Checkout Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Event Title & Visuals */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-3xl overflow-hidden h-96 shadow-2xl">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 flex space-x-2">
              <span className="px-3 py-1 text-xs font-bold text-white bg-[var(--color-primary)] rounded-full shadow-lg">
                {event.category}
              </span>
              <span className="px-3 py-1 text-xs font-bold text-white bg-emerald-500 rounded-full shadow-lg">
                {event.status}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] leading-tight">
              {event.title}
            </h1>
            <p className="text-base text-[var(--color-primary)] font-medium">{event.subtitle}</p>
            
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[var(--text-muted)] font-mono">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                <span>{event.dateFormatted}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                <span>{event.venue}, {event.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Ticket Pass Purchase Box */}
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-3xl space-y-6 border border-[var(--color-primary)]/40 shadow-2xl sticky top-28 glow-primary">
            <div className="flex items-baseline justify-between border-b border-[var(--border-color)] pb-4">
              <div>
                <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider block">Pass Price</span>
                <span className="text-3xl font-extrabold text-[var(--text-heading)]">${event.price}</span>
                <span className="text-xs text-[var(--text-muted)] line-through ml-2">${event.originalPrice}</span>
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Only {event.seatsLeft} Seats Left
              </span>
            </div>

            <div className="space-y-3 text-xs text-[var(--text-heading)]">
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-muted)]">Organizer:</span>
                <span className="font-semibold">{event.organizer}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-muted)]">Access Tier:</span>
                <span className="font-semibold text-[var(--color-primary)]">All-Access Pass + VIP Gala</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-muted)]">Cancellation:</span>
                <span className="font-semibold text-emerald-400">100% Refundable (7 days prior)</span>
              </div>
            </div>

            <button
              onClick={() => setTicketModal(true)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)] text-white font-bold text-sm shadow-xl hover:opacity-95 transition-opacity flex items-center justify-center space-x-2"
            >
              <Ticket className="w-5 h-5" />
              <span>Register & Book Pass Now</span>
            </button>

            <div className="flex items-center justify-center space-x-2 text-[10px] text-[var(--text-muted)] pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Encrypted 256-bit Stripe Instant Ticketing</span>
            </div>
          </div>
        </div>

      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-[var(--border-color)] flex space-x-6 overflow-x-auto pb-2">
        {['overview', 'agenda', 'speakers', 'venue', 'faq'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-bold uppercase tracking-wider pb-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab
                ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-heading)]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content Areas */}
      <div className="space-y-8">
        {activeTab === 'overview' && (
          <div className="glass-card p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-heading)]">Event Overview & Highlights</h3>
            <p className="text-sm text-[var(--text-body)] leading-relaxed">{event.description}</p>
            
            <h4 className="text-sm font-bold text-[var(--text-heading)] uppercase tracking-wider pt-4">Key Takeaways</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Keynote talks from top global industry experts",
                "Hands-on interactive masterclasses and architecture workshops",
                "Private VIP lounge access with executive lunch and gala drinks",
                "Digital Certificate of Attendance & downloadable presentation slide decks"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5" />
                  <span className="text-xs text-[var(--text-heading)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'agenda' && (
          <div className="glass-card p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-heading)]">Detailed Summit Agenda</h3>
            <div className="space-y-4">
              {event.agenda.map((ag, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1.5 rounded-xl bg-[var(--color-primary)]/20 text-[var(--color-primary)] font-mono font-bold text-xs">
                      {ag.time}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-heading)]">{ag.title}</h4>
                      <p className="text-xs text-[var(--text-muted)]">Speaker: {ag.speaker}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-color)] self-start md:self-auto">
                    {ag.room}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'speakers' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {eventSpeakers.map((spk) => (
              <div key={spk.id} className="glass-card p-6 rounded-3xl text-center space-y-4">
                <img src={spk.avatar} alt={spk.name} className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[var(--color-primary)]" />
                <div>
                  <h4 className="text-base font-bold text-[var(--text-heading)]">{spk.name}</h4>
                  <p className="text-xs text-[var(--color-primary)]">{spk.role}</p>
                  <p className="text-[10px] text-[var(--text-muted)] font-mono">{spk.company}</p>
                </div>
                <p className="text-xs text-[var(--text-body)] line-clamp-3">{spk.bio}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'venue' && (
          <div className="glass-card p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-heading)]">Venue & Location Details</h3>
            <p className="text-sm text-[var(--text-body)]">
              {event.venue} is situated at {event.location}. It offers state-of-the-art keynote sound systems, high-speed fiber internet, and VIP parking valet services.
            </p>
            {/* Simulated Google Maps View */}
            <div className="h-64 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col items-center justify-center text-center p-6 space-y-3">
              <MapPin className="w-10 h-10 text-[var(--color-primary)] animate-bounce" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[var(--text-heading)]">{event.venue}</h4>
                <p className="text-xs text-[var(--text-muted)]">Coordinates: {event.coordinates.lat}, {event.coordinates.lng}</p>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-[var(--color-primary)] text-white text-xs font-semibold">
                Open in Google Maps Navigation
              </span>
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="glass-card p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-heading)] mb-4">Frequently Asked Questions</h3>
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-2">
                <h4 className="text-sm font-bold text-[var(--text-heading)] flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-[var(--text-body)] pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ticket Booking Modal */}
      {ticketModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl p-6 space-y-6 glass-panel relative animate-fade-in">
            {!ticketBooked ? (
              <>
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                  <h3 className="text-lg font-bold text-[var(--text-heading)] flex items-center space-x-2">
                    <Ticket className="w-5 h-5 text-[var(--color-primary)]" />
                    <span>Select Pass Tier</span>
                  </h3>
                  <button onClick={() => setTicketModal(false)} className="text-[var(--text-muted)] hover:text-white">✕</button>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'regular', name: 'Standard Pass', price: event.price, desc: 'Full Keynote Access + Certificate' },
                    { id: 'vip', name: 'VIP Executive Pass', price: event.price + 250, desc: 'Keynote + Front Row + Gala Lunch + Speaker Lounge' }
                  ].map((t) => (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTicket(t.id)}
                      className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                        selectedTicket === t.id
                          ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
                          : 'border-[var(--border-color)] bg-[var(--bg-primary)]'
                      }`}
                    >
                      <div>
                        <h4 className="text-sm font-bold text-[var(--text-heading)]">{t.name}</h4>
                        <p className="text-xs text-[var(--text-muted)]">{t.desc}</p>
                      </div>
                      <span className="text-base font-extrabold text-[var(--text-heading)]">${t.price}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setTicketBooked(true)}
                  className="w-full py-3.5 rounded-xl bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Complete Checkout via Stripe</span>
                </button>
              </>
            ) : (
              /* Ticket QR Confirmation View */
              <div className="text-center space-y-6 py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[var(--text-heading)]">Registration Confirmed!</h3>
                  <p className="text-xs text-[var(--text-muted)]">Your ticket QR pass has been sent to your email.</p>
                </div>

                {/* Simulated QR Code */}
                <div className="p-6 rounded-2xl bg-white text-slate-900 inline-block mx-auto border-4 border-[var(--color-primary)]">
                  <QrCode className="w-32 h-32" />
                  <span className="block text-[10px] font-mono font-bold mt-2 text-slate-700">QR-STELLAR-EXECUTIVE</span>
                </div>

                <button
                  onClick={() => { setTicketModal(false); setTicketBooked(false); }}
                  className="w-full py-3 rounded-xl bg-[var(--bg-primary)] text-[var(--text-heading)] border border-[var(--border-color)] text-xs font-bold"
                >
                  Close Confirmation
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
