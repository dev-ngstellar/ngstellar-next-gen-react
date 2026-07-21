import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-6xl font-black text-[var(--color-text)] mb-6 leading-tight">Get in Touch</h1>
        <p className="text-xl text-[var(--color-text-muted)]">Whether you have a news tip, advertising inquiry, or need support, our team is here to help.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[var(--color-bg-secondary)] p-8 md:p-12 rounded-3xl border border-[var(--color-border)] shadow-lg">
          <h2 className="font-serif text-3xl font-bold mb-8">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--color-text)]">First Name</label>
                <input type="text" className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--color-text)]">Last Name</label>
                <input type="text" className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none transition-all" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--color-text)]">Email Address</label>
              <input type="email" className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--color-text)]">Department</label>
              <select className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none transition-all">
                <option>Editorial / News Tip</option>
                <option>Advertising / Sponsorship</option>
                <option>Technical Support</option>
                <option>Press / Media Inquiry</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--color-text)]">Message</label>
              <textarea rows="5" className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none transition-all resize-none"></textarea>
            </div>
            
            <Button variant="primary" size="lg" fullWidth>Submit Message</Button>
          </form>
        </div>

        {/* Contact Info & Departments */}
        <div className="lg:col-span-5 space-y-10">
          
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Global Headquarters</h3>
            <div className="bg-[var(--color-bg-secondary)] p-6 rounded-2xl border border-[var(--color-border)] flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)] rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[var(--color-primary-600)] dark:text-[var(--color-primary-400)]" />
              </div>
              <div>
                <div className="font-bold text-lg mb-1">NovaPress Media Group</div>
                <div className="text-[var(--color-text-muted)] leading-relaxed">
                  1 World Trade Center<br/>
                  Suite 4500<br/>
                  New York, NY 10007<br/>
                  United States
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Departments</h3>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary-500)] transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-[var(--color-primary-500)]" />
                  <span className="font-bold text-[var(--color-text)]">Editorial Desk</span>
                </div>
                <div className="text-[var(--color-text-muted)] text-sm group-hover:text-[var(--color-text)] transition-colors">Submit news tips, pitches, or press releases.</div>
                <div className="mt-2 text-sm font-medium text-[var(--color-primary-600)]">tips@novapress.com</div>
              </div>
              
              <div className="p-5 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary-500)] transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="w-5 h-5 text-[var(--color-primary-500)]" />
                  <span className="font-bold text-[var(--color-text)]">Advertising</span>
                </div>
                <div className="text-[var(--color-text-muted)] text-sm group-hover:text-[var(--color-text)] transition-colors">Inquire about sponsorships, display ads, and branded content.</div>
                <div className="mt-2 text-sm font-medium text-[var(--color-primary-600)]">ads@novapress.com</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
