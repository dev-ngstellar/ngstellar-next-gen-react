import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { SocialLinks } from '../common/SocialLinks';
import { ScrollReveal } from '../common/ScrollReveal';

export const ContactInfo: React.FC = () => {
  const rawPhone = siteConfig.contact.phone.replace(/[^0-9+]/g, '');

  return (
    <ScrollReveal animation="slide-left">
      <div className="bg-surface border border-accent/30 p-8 sm:p-12 shadow-card space-y-8">
        <div>
          <h3 className="font-extrabold text-2xl sm:text-3xl text-text mb-2">
            Let's Talk
          </h3>
          <p className="text-sm font-light text-mutedText leading-relaxed">
            Have questions or already have a wedding date in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-secondary/80 flex items-center justify-center shrink-0 border border-accent/20">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Studio Location</h4>
              <p className="text-sm text-text font-normal mt-1">{siteConfig.contact.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-secondary/80 flex items-center justify-center shrink-0 border border-accent/20">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Phone & WhatsApp</h4>
              <a href={`tel:${rawPhone}`} className="text-sm text-text hover:text-primary font-normal mt-1 block transition-colors">
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-secondary/80 flex items-center justify-center shrink-0 border border-accent/20">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Email Address</h4>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-text hover:text-primary font-normal mt-1 block transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-secondary/80 flex items-center justify-center shrink-0 border border-accent/20">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Consultation Hours</h4>
              <p className="text-sm text-text font-normal mt-1">{siteConfig.contact.workingHours}</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-accent/20">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-4">Follow & Connect With Us</h4>
          <SocialLinks
            itemClassName="w-10 h-10 bg-secondary/80 border border-accent/20 hover:bg-accent hover:text-surface text-text flex items-center justify-center transition-all shrink-0"
          />
        </div>
      </div>
    </ScrollReveal>
  );
};

