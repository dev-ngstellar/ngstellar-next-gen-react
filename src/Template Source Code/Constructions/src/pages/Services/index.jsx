import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/services';
import { siteConfig } from '../../data/siteConfig';
import { getImg } from '../../utils/images';
import { getIcon } from '../../utils/icons';
import SectionHeader from '../../components/common/SectionHeader';
import { MdCheckCircle, MdHelpOutline } from 'react-icons/md';

const Services = () => {
  return (
    <div className="w-full pt-24">
      {/* Banner */}
      <section className="relative py-20 bg-white text-text-primary text-center border-b border-border">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: `url(${getImg('projects.commercial01')})` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase border-l-2 border-primary pl-2.5">
            Capabilities List
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 tracking-tight text-text-primary">
            Our Building Capabilities & Services
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
            State-of-the-art methodologies applied to commercial developments, transport grids, and heavy industrial processing lines.
          </p>
        </div>
      </section>

      {/* Service Detail Blocks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
          {servicesData.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center text-left scroll-mt-28`}
              >
                {/* Image Block */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}>
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl rotate-2 translate-x-1.5 translate-y-1.5" />
                  <img
                    src={getImg(service.image)}
                    alt={service.title}
                    className="rounded-2xl w-full object-cover h-80 sm:h-96 relative z-10 shadow-lg"
                    loading="lazy"
                  />
                </div>

                {/* Content Block */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded bg-primary/10 text-primary flex items-center justify-center">
                      {getIcon(service.icon, 'text-xl')}
                    </div>
                    <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                    {service.longDesc}
                  </p>

                  {/* Benefits checklist */}
                  {service.benefits && (
                    <div className="flex flex-col gap-3 mb-6">
                      <h4 className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
                        Key Value Delivered:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {service.benefits.map((b) => (
                          <div key={b} className="flex gap-2 items-start text-xs text-text-secondary">
                            <MdCheckCircle className="text-primary text-base shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dynamic Accordion FAQs for this service */}
                  {service.faqs && (
                    <div className="border-t border-border pt-5 mt-5">
                      <h4 className="text-xs font-extrabold text-text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <MdHelpOutline className="text-primary text-sm" />
                        <span>Capability FAQ</span>
                      </h4>
                      <div className="flex flex-col gap-3">
                        {service.faqs.map((faq) => (
                          <div key={faq.q} className="text-xs">
                            <div className="font-bold text-text-primary mb-1">Q: {faq.q}</div>
                            <div className="text-text-secondary">A: {faq.a}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 border-t border-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="The Engineering Cycle"
            title="Rigorous Implementation Process"
            description="Our structural projects follow strict milestone validations to avoid cost creep and regulatory issues."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.process.slice(0, 3).map((proc) => (
              <div key={proc.step} className="p-6 bg-white border border-border rounded-xl">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{proc.step} / Planning & Design</span>
                <h3 className="text-base font-bold text-text-primary mt-2 mb-3">{proc.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{proc.desc}</p>
              </div>
            ))}
            {siteConfig.process.slice(3, 6).map((proc) => (
              <div key={proc.step} className="p-6 bg-white border border-border rounded-xl">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{proc.step} / Build & Commisioning</span>
                <h3 className="text-base font-bold text-text-primary mt-2 mb-3">{proc.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
