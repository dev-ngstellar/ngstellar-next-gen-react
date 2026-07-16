import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Brain, Activity, Baby, Smile, Stethoscope, CheckCircle, 
  ShieldCheck, ArrowRight, ShieldAlert, Award
} from 'lucide-react';
import { servicesData } from '../data/mockData';

const Services = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const renderServiceIcon = (name) => {
    switch (name) {
      case 'Cardiology': return <Heart className="w-8 h-8 text-sky-500" />;
      case 'Neurology': return <Brain className="w-8 h-8 text-sky-500" />;
      case 'Orthopedics': return <Activity className="w-8 h-8 text-sky-500" />;
      case 'Pediatrics': return <Baby className="w-8 h-8 text-sky-500" />;
      case 'Dental Care': return <Smile className="w-8 h-8 text-sky-500" />;
      default: return <Stethoscope className="w-8 h-8 text-sky-500" />;
    }
  };

  const capabilities = [
    {
      title: "JCI Accredited Labs",
      desc: "Our diagnostic lab systems follow stringent international verification pathways, providing accurate, rapid testing metrics."
    },
    {
      title: "Robotic Surgery Suites",
      desc: "We perform minimally invasive operations using advanced robotic arms, resulting in lower bleeding rates and faster recovery."
    },
    {
      title: "Post-Operative Rehab Panels",
      desc: "Dedicated physical therapists assist joint arthroplasty and neurological patients to reclaim their maximum mobility levels."
    }
  ];

  return (
    <div className="animate-page-enter">
      
      {/* Header Banner */}
      <div className="relative pt-36 pb-20 bg-slate-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-sky-400 font-semibold mb-2 block">Our Services</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            Specialized Clinical Departments
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mt-4 max-w-xl mx-auto">
            Explore our specialized clinical care blocks, staffed with resident medical specialists and backed by state-of-the-art diagnostic technologies.
          </p>
        </div>
      </div>

      {/* Services Detailed Cards Layout */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {servicesData.map((svc) => (
            <div 
              key={svc.id}
              className="p-8 md:p-10 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                {renderServiceIcon(svc.name)}
              </div>
              <div className="flex-grow flex flex-col gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    {svc.name} Clinical Block
                  </h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-[10px] tracking-widest uppercase text-slate-400 font-bold mb-3">Unit Deliverables & Benefits</h4>
                  <ul className="flex flex-col gap-2.5 text-xs font-light text-slate-600">
                    {svc.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Equipment Highlight */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-sky-500 font-semibold block mb-2">Hospital Tech</span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">
              Advanced Clinical Diagnostics
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-100 rounded-xl flex flex-col gap-3 shadow-sm">
                <div className="w-10 h-10 rounded bg-sky-50 text-sky-500 flex items-center justify-center">
                  <Award className="w-5 h-5 text-sky-500" />
                </div>
                <h4 className="font-heading text-sm font-bold text-slate-900">
                  {cap.title}
                </h4>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outpatient consultation CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-5">
          <ShieldCheck className="w-10 h-10 text-emerald-500" />
          <h3 className="font-heading text-2xl font-bold">Have an External Doctor Referral Letter?</h3>
          <p className="text-slate-400 text-xs font-light max-w-md">
            Our admissions office welcomes external referrals. Submit your reports today to schedule diagnostic evaluation blocks.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors"
          >
            Schedule Referral Check-In
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
