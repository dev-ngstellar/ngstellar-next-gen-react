import React from 'react';
import Container from '../common/Container';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { academyData } from '../../data/academy';

export default function ContactInfo() {
  const { address, phone, email, hours } = academyData.contact;

  return (
    <section className="py-10 md:py-12 bg-[#101214]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Visit Studio */}
          <div className="p-6 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/40 transition-all duration-300 space-y-3 shadow-lg">
            <div className="p-3 rounded-2xl bg-[#C99683]/15 text-[#C99683] w-fit border border-[#C99683]/30">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F7F4F0]">Visit the Studio</h3>
            <p className="text-sm text-[#A39E98] leading-relaxed font-light">
              {address.line1}<br />
              {address.line2}
            </p>
          </div>

          {/* Call Us */}
          <div className="p-6 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/40 transition-all duration-300 space-y-3 shadow-lg">
            <div className="p-3 rounded-2xl bg-[#C99683]/15 text-[#C99683] w-fit border border-[#C99683]/30">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F7F4F0]">Call Us</h3>
            <p className="text-sm text-[#A39E98] leading-relaxed font-light">
              Direct line: <a href={`tel:${phone}`} className="text-[#F7F4F0] hover:text-[#C99683] font-semibold">{phone}</a>
            </p>
          </div>

          {/* Email */}
          <div className="p-6 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/40 transition-all duration-300 space-y-3 shadow-lg">
            <div className="p-3 rounded-2xl bg-[#C99683]/15 text-[#C99683] w-fit border border-[#C99683]/30">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F7F4F0]">Email Us</h3>
            <p className="text-sm text-[#A39E98] leading-relaxed font-light">
              <a href={`mailto:${email}`} className="text-[#F7F4F0] hover:text-[#C99683] font-semibold">{email}</a>
            </p>
          </div>

          {/* Studio Hours */}
          <div className="p-6 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/40 transition-all duration-300 space-y-3 shadow-lg">
            <div className="p-3 rounded-2xl bg-[#C99683]/15 text-[#C99683] w-fit border border-[#C99683]/30">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F7F4F0]">Studio Hours</h3>
            <p className="text-sm text-[#A39E98] leading-relaxed font-light">
              <span className="text-[#F7F4F0] font-medium">{hours.days}</span><br />
              <span>{hours.time}</span>
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
