import React from 'react';
import { motion } from 'framer-motion';
import { getImg } from '../../utils/images';
import SectionHeader from '../../components/common/SectionHeader';
import { MdVerified, MdSecurity, MdTrendingUp, MdStars, MdCheck } from 'react-icons/md';

const About = () => {
  const coreValues = [
    { title: 'Absolute Integrity', desc: 'Operating with transparency, ethical bidding practices, and structural accountability.', icon: <MdVerified className="text-3xl text-primary" /> },
    { title: 'Uncompromising Safety', desc: 'Targeting zero accidents on site with strict adherence to ISO guidelines and local codes.', icon: <MdSecurity className="text-3xl text-primary" /> },
    { title: 'Engineering Innovation', desc: 'Deploying laser grading, Building Information Modeling (BIM), and low-carbon cement aggregates.', icon: <MdTrendingUp className="text-3xl text-primary" /> },
    { title: 'Operational Excellence', desc: 'Achieving on-time handovers through automated supply management and scheduling.', icon: <MdStars className="text-3xl text-primary" /> }
  ];

  const milestones = [
    { year: '2012', title: 'Operational Foundation', desc: 'Established civil contracting services specializing in municipal grading and road laying.' },
    { year: '2016', title: 'Industrial Expansion', desc: 'Acquired heavy fabrication assets, stepping into warehouse framing and mechanical piping.' },
    { year: '2020', title: 'Infrastructure Integration', desc: 'Began building large-scale municipal bridges, transport terminals, and waste plants.' },
    { year: '2024', title: 'Sustainable Milestones', desc: 'Achieved ISO 45001 safety credentials and pioneered green building aggregate methods.' }
  ];

  return (
    <div className="w-full pt-24">
      {/* Banner */}
      <section className="relative py-20 bg-white text-text-primary text-center border-b border-border">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: `url(${getImg('general.aboutOverview')})` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase border-l-2 border-primary pl-2.5">
            About Our Firm
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 tracking-tight text-text-primary">
            Building Infrastructure of the Future
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
            A commercial-grade construction and engineering layout template engineered for developers, EPC contractors, and civil builders.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase border-l-2 border-primary pl-2.5">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mt-3 mb-6 tracking-tight leading-tight">
              Delivering Premium Construction Standards Across Six Sectors
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
              We provide engineering and construction services. By controlling both structural fabrication pipelines and onsite logistics, we eliminate intermediate supply chain delays and deliver robust corporate offices, transport transit hubs, and heavy industrial facilities.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              We are future-ready, incorporating smart sensors, carbon-reduced geopolymer concretes, and laser precision grading directly into our structural projects.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-2xl font-black text-text-primary">15+</h4>
                <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Years of Experience</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-2xl font-black text-text-primary">250+</h4>
                <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Projects Completed</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 translate-x-2 -translate-y-2" />
            <img
              src={getImg('general.safetyQualitySection')}
              alt="Engineers evaluating plans"
              className="rounded-2xl w-full object-cover h-[400px] relative z-10 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-slate-50 border-y border-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-2xl border border-border shadow-sm">
            <h3 className="text-xl font-bold text-text-primary mb-3">Our Mission</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              To construct secure, high-durability, and sustainable infrastructure that connects metropolitan districts and supports long-term commercial productivity.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-border shadow-sm">
            <h3 className="text-xl font-bold text-text-primary mb-3">Our Vision</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              To lead the industry transition toward green geo-polymer concrete bases, cloud BIM coordination, and automated zero-harm site environments.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Core Beliefs"
            title="Values That Drive Quality"
            description="Our structural operations rely on four foundational policies to ensure client compliance and project performance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {coreValues.map((val) => (
              <div key={val.title} className="p-6 border border-border bg-slate-50/20 rounded-2xl flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-text-primary">{val.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-slate-50 border-t border-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our History"
            title="The Infrastructure Journey"
            description="Our steady, deliberate capacity growth from a grading contractor to an industrial builder."
          />

          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-32 py-4 flex flex-col gap-12">
            {milestones.map((ms, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={ms.year}
                className="relative pl-8 md:pl-12"
              >
                {/* Year Badge (Desktop) */}
                <div className="absolute top-0 -left-4 md:-left-32 w-16 text-right hidden md:block">
                  <span className="text-lg font-black text-primary">{ms.year}</span>
                </div>
                {/* Point */}
                <div className="absolute top-1.5 -left-[9px] w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md" />
                
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  <span className="md:hidden text-primary font-black mr-2">{ms.year} -</span>
                  {ms.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
                  {ms.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
