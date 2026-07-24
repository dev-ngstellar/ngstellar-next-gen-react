import React from 'react';
import { SERVICES, PRICING_PACKAGES, FAQS } from '../data/eventsData';
import { Sparkles, CheckCircle2, ArrowRight, HelpCircle, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Services Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-semibold">
          Luxury Event Capabilities
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-heading)]">
          World-Class Production & Experiences
        </h1>
        <p className="text-sm text-[var(--text-body)]">
          From concept design to high-impact execution, we architect global summits, haute couture galas, and product reveals.
        </p>
      </div>

      {/* Detailed Services Grid */}
      <div className="space-y-12">
        {SERVICES.map((srv, idx) => (
          <div
            key={srv.id}
            className={`glass-card p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-[var(--border-color)] ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs font-mono font-semibold">
                <span>{srv.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-heading)]">{srv.title}</h2>
              <p className="text-sm text-[var(--text-body)] leading-relaxed">{srv.shortDesc}</p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[var(--text-heading)] uppercase tracking-wider">Key Capabilities Included:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-[var(--text-heading)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-success)]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[var(--text-muted)] block">Investment Tier</span>
                  <span className="text-xl font-extrabold text-[var(--text-heading)]">{srv.startingPrice}</span>
                </div>
                <Link
                  to="/contact"
                  className="px-6 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-semibold shadow-md hover:bg-[var(--color-primary-hover)] transition-colors flex items-center space-x-2"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="h-80 rounded-2xl overflow-hidden shadow-xl">
              <img src={srv.image} alt={srv.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Packages Section */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-[var(--text-heading)]">Full Production Packages</h2>
          <p className="text-xs text-[var(--text-muted)]">Select an all-inclusive framework or customize your tier.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PACKAGES.map((pkg, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl space-y-6 flex flex-col justify-between border border-[var(--border-color)]">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--text-heading)]">{pkg.name}</h3>
                <div className="text-3xl font-extrabold text-[var(--text-heading)]">{pkg.price}</div>
                <p className="text-xs text-[var(--text-body)]">{pkg.description}</p>
                <ul className="space-y-2 pt-4 border-t border-[var(--border-color)]">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="text-xs text-[var(--text-heading)] flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white font-bold text-xs text-center block">
                Inquire Tier
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
