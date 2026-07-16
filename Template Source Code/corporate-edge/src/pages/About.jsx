import React, { useEffect } from 'react';
import { Linkedin, Twitter, Target, Eye, Award, CheckCircle, Shield } from 'lucide-react';
import { teamMembersData } from '../data/mockData';

const About = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const achievements = [
    {
      year: "2021",
      title: "Corporate Founding",
      desc: "Founded in San Francisco by Katherine Vance, focusing on cloud integration projects for digital health brands."
    },
    {
      year: "2023",
      title: "EMEA Expansion",
      desc: "Opened our London regional support office to manage logistics clients and expanded team to 80+ senior engineers."
    },
    {
      year: "2025",
      title: "SaaS Systems Integrator Award",
      desc: "Recognized as a premier SaaS architect builder in North America for outstanding Core Web Vitals achievements."
    },
    {
      year: "2026",
      title: "Full SOC 2 Type II Compliance",
      desc: "Successfully audited all operational data pipelines and client source code repositories under SOC 2 requirements."
    }
  ];

  return (
    <div className="animate-page-enter">
      {/* Header Banner */}
      <div className="relative pt-36 pb-20 bg-slate-950 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-blue-400 font-semibold mb-2 block">Our Agency</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Designed for Modern Enterprise Scale
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mt-4 max-w-xl mx-auto">
            We bridge the gap between rigorous systems security and fluid, tactile user interfaces to help businesses accelerate their digital evolution.
          </p>
        </div>
      </div>

      {/* Story, Mission, Vision Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Story (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold">Our Origin</span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900">
            A Story of Code Quality & Clear Metrics
          </h2>
          <p className="text-slate-500 text-sm font-light leading-relaxed">
            Corporate Edge was established with a singular mission: to eliminate the architectural complexity and operational bottlenecks that plague modern SaaS migrations. Having observed many enterprise platforms struggle under technical debt, we set out to build a consulting-focused agency staffed exclusively by senior engineers.
          </p>
          <p className="text-slate-500 text-sm font-light leading-relaxed">
            Today, we function as a trusted technology partner to financial hubs, health portals, and e-commerce leaders worldwide. By combining rigid testing regimes with modern component-based design systems, we build platforms that are fast, secure, and ready to scale.
          </p>

          <div className="flex gap-4 p-4 border border-slate-100 bg-slate-50/50 rounded-xl items-start text-xs text-slate-500 font-light mt-4">
            <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <span>
              Every line of code written by Corporate Edge passes strict linting protocols, automated unit test suites, and compliance checks (HIPAA/SOC 2) before it reaches production.
            </span>
          </div>
        </div>

        {/* Mission & Vision Cards (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Mission */}
          <div className="p-8 border border-slate-100 bg-white rounded-xl saas-card-shadow flex gap-4">
            <div className="w-10 h-10 rounded bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                To engineer secure, high-fidelity software ecosystems that empower global enterprises to automate manual operations, eliminate latency, and capture business opportunities.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 border border-slate-100 bg-white rounded-xl saas-card-shadow flex gap-4">
            <div className="w-10 h-10 rounded bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                To set the worldwide standard for high-performance enterprise React & Cloud deployments, fostering a culture where code clarity and customer success are valued above all.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold mb-2 block">System Architects</span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">
              Our Leadership Team
            </h2>
            <p className="text-slate-500 text-xs font-light leading-relaxed mt-3">
              Meet the specialists leading our software engineering, experience design systems, and enterprise cloud migration consulting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembersData.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover border-b border-slate-100"
                  />
                  <div className="p-6">
                    <h4 className="font-heading text-base font-bold text-slate-900 mb-1">
                      {member.name}
                    </h4>
                    <span className="text-[11px] text-blue-600 font-semibold block mb-3">
                      {member.role}
                    </span>
                    <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>
                
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex gap-4 mt-auto">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold mb-2 block flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4" />
            Milestones
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900">
            Agency Achievements & Timeline
          </h2>
        </div>

        <div className="relative border-l border-slate-200 pl-6 md:pl-10 ml-4 md:ml-8 flex flex-col gap-12">
          {achievements.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-10 md:-left-14 top-1 w-6 h-6 rounded-full border-4 border-slate-50 bg-blue-600 flex items-center justify-center shadow group-hover:scale-110 transition-transform" />
              
              <div className="flex flex-col gap-2">
                <span className="font-heading text-lg font-bold text-blue-600">
                  {item.year}
                </span>
                <h4 className="font-heading text-base font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs font-light leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
