import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { servicesData } from '../../data/services';
import { Container } from '../common/Container';
import { SocialLinks } from '../common/SocialLinks';
import { ScrollReveal } from '../common/ScrollReveal';

import { OrganicLineDecoration } from '../common/FloralDecoration';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#1A1817] text-surface pt-20 pb-10 overflow-hidden border-t border-accent/30">
      {/* Subtle Botanical Organic Line Art Background Decor */}
      <OrganicLineDecoration className="top-0 right-0 w-80 h-80 opacity-10 text-accent/30" />
      {/* Local Background Image with Warm Transparent Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div
          className="absolute top-0 bottom-0 right-0 w-full md:w-3/4 lg:w-2/3 bg-cover bg-right-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url(${siteConfig.brand.footerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1817] via-[#1A1817]/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1817]/80 via-transparent to-[#1A1817]" />
      </div>

      {/* Content Layer */}
      <Container className="relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
            {/* Column 1: Brand Info (col-span-4) */}
            <div className="lg:col-span-4 space-y-6">
              <Link to="/" className="flex items-center gap-3 group">
                <img
                  src={siteConfig.brand.logo}
                  alt={siteConfig.brand.name}
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-wide text-surface leading-tight group-hover:text-accent transition-colors">
                    {siteConfig.brand.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold leading-tight pt-0.5">
                    {siteConfig.brand.tagline}
                  </span>
                </div>
              </Link>

              <p className="text-sm font-light text-surface/75 leading-relaxed max-w-sm">
                {siteConfig.brand.description}
              </p>

              {/* Reusable 4 Social Links */}
              <div className="pt-2">
                <SocialLinks />
              </div>
            </div>

            {/* Column 2: Quick Navigation (col-span-2) */}
            <div className="lg:col-span-2 space-y-5">
              <h3 className="font-extrabold text-lg text-surface border-b border-accent/40 pb-2 inline-block">
                Quick Navigation
              </h3>
              <ul className="space-y-3 text-xs uppercase tracking-wider font-medium text-surface/80">
                <li>
                  <Link to="/" className="hover:text-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-accent transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-accent transition-colors">
                    Weddings
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-accent transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Services (col-span-3) */}
            <div className="lg:col-span-3 space-y-5">
              <h3 className="font-extrabold text-lg text-surface border-b border-accent/40 pb-2 inline-block">
                Our Services
              </h3>
              <ul className="space-y-3 text-xs font-light text-surface/80">
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services#${service.id}`}
                      className="hover:text-accent transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Connect With Us (col-span-3) */}
            <div className="lg:col-span-3 space-y-5">
              <h3 className="font-extrabold text-lg text-surface border-b border-accent/40 pb-2 inline-block">
                Connect With Us
              </h3>
              <div className="space-y-4 text-xs font-light text-surface/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>{siteConfig.contact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-accent transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <p className="text-[11px] text-surface/50 pt-1 uppercase tracking-widest">
                  {siteConfig.contact.workingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Gold Line Divider & Centered Copyright */}
          <div className="pt-8 border-t border-surface/15 text-center text-xs font-light text-surface/60">
            <p>© 2026 {siteConfig.brand.name}. All rights reserved</p>
          </div>
        </ScrollReveal>
      </Container>
    </footer>
  );
};

