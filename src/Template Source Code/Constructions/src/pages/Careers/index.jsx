import React, { useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import ApplicationForm from '../../components/forms/ApplicationForm';
import { getImg } from '../../utils/images';
import { MdOutlineWorkOutline, MdLocationOn, MdAccessTime, MdAttachMoney, MdSecurity, MdThumbUp, MdTrendingUp, MdStars } from 'react-icons/md';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState('');

  const jobs = [
    { id: 'pm', title: 'Senior Project Manager', location: 'Metro City East', time: 'Full-Time', salary: '$110k - $130k', desc: 'Overseeing metropolitan logistics and commercial skyscrapers. Requires 8+ years of PM experience and OSHA certifications.' },
    { id: 'safety', title: 'HSE Safety Specialist', location: 'Industrial Zone West', time: 'Full-Time', salary: '$85k - $95k', desc: 'Managing safety standards, audits, hazards analysis, and compliance training on active industrial construction sites.' },
    { id: 'draftsman', title: 'Structural Draftsman (BIM)', location: 'Business District North', time: 'Full-Time / Hybrid', salary: '$75k - $90k', desc: 'Creating 3D models and layout drafts using BIM software, collaborating directly with structural engineers.' },
    { id: 'engineer', title: 'Civil Site Engineer', location: 'Metro City East', time: 'Full-Time', salary: '$90k - $110k', desc: 'Running field checks, surveying, concrete testing audits, and contractor coordination on transit rail jobs.' }
  ];

  const benefits = [
    { title: 'Premium Health & Dental', desc: 'Full medical coverage for you and your dependents starting day 1.', icon: <MdThumbUp className="text-2xl text-primary" /> },
    { title: '401(k) Match & Pensions', desc: 'Robust savings configurations to prepare you for future retirement.', icon: <MdStars className="text-2xl text-primary" /> },
    { title: 'Training & Certifications', desc: 'Paid structural courses, PE licensure, and OSHA safety upgrades.', icon: <MdTrendingUp className="text-2xl text-primary" /> },
    { title: 'Zero Accident Culture', desc: 'A safety-first approach with continuous onsite supervision.', icon: <MdSecurity className="text-2xl text-primary" /> }
  ];

  const handleApplyNow = (title) => {
    setSelectedJob(title);
    // Smooth scroll down to form
    const formEl = document.getElementById('application-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-24">
      {/* Banner */}
      <section className="relative py-20 bg-white text-text-primary text-center border-b border-border">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: `url(${getImg('general.careersCulture')})` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase border-l-2 border-primary pl-2.5">
            Careers
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 tracking-tight text-text-primary">
            Build Your Future With Us
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed">
            Join a professional engineering team shaping municipal transport and green office towers.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Perks & Benefits"
            title="Why Engineers Join Our Ranks"
            description="We invest in our workforce, providing training, top-tier medical covers, and zero-accident environments."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 border border-border rounded-2xl bg-slate-50/20 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  {b.icon}
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">{b.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Grid */}
      <section className="py-20 bg-slate-50 border-y border-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Available Positions"
            title="Current Job Openings"
            description="Review active specifications below. Select apply to load your credentials into the recruitment system."
          />

          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            {jobs.map((job) => (
              <div key={job.id} className="p-6 bg-white border border-border rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
                <div className="flex-grow max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-text-primary">{job.title}</h3>
                    <span className="text-[10px] font-extrabold text-primary bg-primary/10 uppercase tracking-widest px-2 py-0.5 rounded">
                      {job.time}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-text-secondary mt-2 mb-4">
                    <span className="flex items-center gap-1"><MdLocationOn /> {job.location}</span>
                    <span className="flex items-center gap-1"><MdAttachMoney /> {job.salary}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{job.desc}</p>
                </div>
                <button
                  onClick={() => handleApplyNow(job.title)}
                  className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/95 text-white text-xs font-bold shrink-0 shadow transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form-section" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <ApplicationForm selectedJob={selectedJob} />
        </div>
      </section>
    </div>
  );
};

export default Careers;
