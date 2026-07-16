import React from 'react';
import ContactForm from '../../components/forms/ContactForm';
import { siteConfig } from '../../data/siteConfig';
import { getImg } from '../../utils/images';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdBusiness } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="w-full pt-24 text-left">
      {/* Banner */}
      <section className="relative py-20 bg-white text-text-primary text-center border-b border-border">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: `url(${getImg('general.contactMap')})` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase border-l-2 border-primary pl-2.5">
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 tracking-tight text-text-primary">
            Connect With Our Estimators
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
            Reach out to our offices to request technical bids, structural consultations, and project timelines.
          </p>
        </div>
      </section>

      {/* Main Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase border-l-2 border-primary pl-2.5">
                Headquarters
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mt-3 mb-4 tracking-tight leading-tight">
                Our Office Information
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Our central estimating, project coordination, and HSE engineering departments operate out of our Metro City complex. Schedule a visit to review active BIM files.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-sm text-text-secondary">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MdLocationOn className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Office Address</h4>
                  <p>{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MdPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Telephone Contacts</h4>
                  <p className="hover:text-primary transition-colors"><a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MdEmail className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">General Inquiries</h4>
                  <p className="hover:text-primary transition-colors"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MdAccessTime className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Business Hours</h4>
                  <p>{siteConfig.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-border shadow-inner bg-slate-900 group">
            {/* Styled blueprint aesthetic layout representation of map */}
            <img
              src={getImg('general.contactMap')}
              alt="Geographical Office coordinates map"
              className="w-full h-full object-cover opacity-30 group-hover:scale-[1.01] transition-transform duration-700"
            />
            {/* Map Overlay Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-dark p-6 rounded-xl border border-white/10 text-center max-w-sm flex flex-col items-center">
              <MdBusiness className="text-primary text-4xl mb-3" />
              <h3 className="text-base font-bold text-white mb-2">Central Operations Complex</h3>
              <p className="text-xs text-slate-400 mb-4">{siteConfig.address}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded bg-primary hover:bg-primary/90 text-white text-xs font-bold transition-all shadow cursor-pointer"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
