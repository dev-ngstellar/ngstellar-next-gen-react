import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Ticket, Clock, CheckCircle2, ArrowRight, Shield, Award, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UPCOMING_EVENTS, SERVICES, TESTIMONIALS, PRICING_PACKAGES, TRUSTED_BRANDS, GALLERY_ITEMS, FAQS } from '../data/eventsData';

export const Home = () => {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({ days: 48, hours: 14, minutes: 22, seconds: 40 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: prev.minutes - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12">
        {/* Cinematic Background Image with Glass Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20 filter blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-[var(--bg-primary)]"></div>
          {/* Animated Ambient Glow Spheres */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Upcoming Event Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-[var(--color-primary)]/30 text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest glow-primary">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span>Next Flagship Summit: Sep 15, 2026 • New York</span>
          </div>

          {/* Cinematic Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-heading)] tracking-tight leading-tight max-w-5xl mx-auto">
            Architecting <span className="gradient-text">World-Class Event</span> Experiences & Summits
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-body)] max-w-3xl mx-auto font-light leading-relaxed">
            The flagship platform combining luxury public event production with enterprise-grade SaaS management for global leaders, summits, and haute couture galas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/events"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)] text-white font-bold text-base shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2 glow-primary"
            >
              <Ticket className="w-5 h-5" />
              <span>Explore Events</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[var(--bg-card)] text-[var(--text-heading)] font-semibold text-base border border-[var(--border-color)] hover:border-[var(--color-primary)] hover:bg-[var(--bg-surface)] transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
              <span>Book Event Experience</span>
            </Link>
          </div>

          {/* Floating Live Countdown Card */}
          <div className="max-w-2xl mx-auto pt-8">
            <div className="glass-card p-6 rounded-3xl border border-[var(--border-color)] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-1">
                <span className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-mono font-semibold">
                  Global Tech Vision Summit 2026
                </span>
                <h3 className="text-base font-bold text-[var(--text-heading)]">Countdown to Keynote</h3>
              </div>

              {/* Countdown Numbers */}
              <div className="grid grid-cols-4 gap-3 text-center">
                {[
                  { label: 'Days', val: timeLeft.days },
                  { label: 'Hours', val: timeLeft.hours },
                  { label: 'Mins', val: timeLeft.minutes },
                  { label: 'Secs', val: timeLeft.seconds },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[var(--bg-primary)] px-3 py-2 rounded-xl border border-[var(--border-color)] min-w-[60px]">
                    <div className="text-lg font-bold text-[var(--text-heading)] font-mono">{String(item.val).padStart(2, '0')}</div>
                    <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TRUSTED BRANDS MARQUEE */}
      <section className="py-8 border-y border-[var(--border-color)] bg-[var(--bg-secondary)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono">
            Trusted by World-Class Organizations & Founders
          </p>
        </div>
        <div className="flex space-x-12 animate-marquee whitespace-nowrap justify-center items-center opacity-70 hover:opacity-100 transition-opacity">
          {TRUSTED_BRANDS.map((brand, i) => (
            <span key={i} className="text-xl font-bold font-mono tracking-wider text-[var(--text-heading)] px-4">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED UPCOMING EVENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-semibold">
              Curated Selection
            </span>
            <h2 className="text-3xl font-extrabold text-[var(--text-heading)] mt-1">
              Featured Flagship Summits
            </h2>
          </div>
          <Link to="/events" className="text-sm font-semibold text-[var(--color-primary)] hover:underline flex items-center space-x-1">
            <span>View All 24+ Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.slice(0, 3).map((evt) => (
            <div key={evt.id} className="glass-card rounded-3xl overflow-hidden flex flex-col group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-[var(--color-primary)] rounded-full shadow-lg">
                    {evt.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center space-x-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{evt.rating}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-[var(--text-muted)] font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>{evt.dateFormatted}</span>
                    <span>•</span>
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>{evt.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-heading)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-[var(--text-body)] line-clamp-2">{evt.description}</p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">Pass Price</span>
                    <span className="text-lg font-extrabold text-[var(--text-heading)]">${evt.price}</span>
                  </div>
                  <Link
                    to={`/events/${evt.id}`}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[var(--color-primary)] rounded-xl hover:bg-[var(--color-primary-hover)] transition-colors shadow-md"
                  >
                    Reserve Ticket
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LUXURY SERVICES PRESENTATION */}
      <section className="bg-[var(--bg-secondary)] py-16 border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-semibold">
              Bespoke Event Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)]">
              Our Luxury Production Capabilities
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              From global technology summits to private destination galas, we deliver perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv) => (
              <div key={srv.id} className="glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--color-primary)]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-heading)]">{srv.title}</h3>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed">{srv.shortDesc}</p>
                </div>
                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                  <span className="text-[var(--text-muted)]">Starting at <strong className="text-[var(--text-heading)]">{srv.startingPrice}</strong></span>
                  <Link to="/services" className="text-[var(--color-primary)] font-semibold hover:underline">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-semibold">
            Execution Framework
          </span>
          <h2 className="text-3xl font-extrabold text-[var(--text-heading)]">
            How We Execute Unrivaled Summits
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            { step: "01", title: "Strategic Vision", desc: "Co-designing high-concept stage branding, venue selection, and attendee journeys." },
            { step: "02", title: "SaaS Setup", desc: "Deploying white-label ticket portals, agenda schedules, and QR access permissions." },
            { step: "03", title: "Flawless Execution", desc: "Managing live hybrid streams, keynote audio-visuals, and VIP lounge hospitality." },
            { step: "04", title: "Post-Event Growth", desc: "Exporting real-time revenue analytics, lead capture, and attendee feedback scores." }
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 rounded-3xl space-y-3 relative">
              <span className="text-3xl font-mono font-extrabold text-[var(--color-primary)]">{item.step}</span>
              <h3 className="text-base font-bold text-[var(--text-heading)]">{item.title}</h3>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-semibold">
            Transparent Investment
          </span>
          <h2 className="text-3xl font-extrabold text-[var(--text-heading)]">
            Flexible Experience Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PACKAGES.map((pkg, i) => (
            <div
              key={i}
              className={`glass-card p-8 rounded-3xl space-y-6 flex flex-col justify-between relative ${
                pkg.popular ? 'border-2 border-[var(--color-primary)] shadow-2xl glow-primary' : ''
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 right-6 px-4 py-1 text-xs font-bold text-white bg-[var(--color-primary)] rounded-full uppercase tracking-wider">
                  {pkg.badge}
                </span>
              )}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--text-heading)]">{pkg.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold text-[var(--text-heading)]">{pkg.price}</span>
                  <span className="text-xs text-[var(--text-muted)]">/{pkg.period}</span>
                </div>
                <p className="text-xs text-[var(--text-body)]">{pkg.description}</p>
                
                <ul className="space-y-3 pt-4 border-t border-[var(--border-color)]">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-3 text-xs text-[var(--text-heading)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`w-full py-3 rounded-xl text-center text-xs font-bold transition-all shadow-md ${
                  pkg.popular
                    ? 'bg-[var(--color-primary)] text-white hover:opacity-90'
                    : 'bg-[var(--bg-primary)] text-[var(--text-heading)] border border-[var(--border-color)] hover:border-[var(--color-primary)]'
                }`}
              >
                {pkg.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[var(--bg-secondary)] py-16 border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-semibold">
              Client Endorsements
            </span>
            <h2 className="text-3xl font-extrabold text-[var(--text-heading)]">What Global Leaders Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-card p-6 rounded-3xl space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(t.rating)].map((_, r) => (
                    <Star key={r} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-[var(--text-heading)] italic leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center space-x-3 pt-2">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-[var(--color-primary)]" />
                  <div>
                    <h4 className="text-xs font-bold text-[var(--text-heading)]">{t.name}</h4>
                    <span className="text-[10px] text-[var(--text-muted)]">{t.role}, {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL PUBLIC CTA */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="glass-card p-12 rounded-3xl space-y-6 border border-[var(--color-primary)]/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10"></div>
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)]">
              Ready to Host an Unforgettable Event?
            </h2>
            <p className="text-sm text-[var(--text-body)] max-w-xl mx-auto">
              Schedule a private strategy call with our executive producers or tour our SaaS admin suite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold shadow-lg hover:scale-105 transition-transform"
              >
                Schedule Executive Consultation
              </Link>
              <Link
                to="/admin"
                className="px-8 py-3.5 rounded-xl bg-[var(--bg-primary)] text-[var(--text-heading)] text-xs font-bold border border-[var(--border-color)] hover:border-[var(--color-primary)] transition-all"
              >
                Explore Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
