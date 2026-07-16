import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Zap, UserCheck, BarChart3, Star, 
  ChevronLeft, ChevronRight, Activity, Cpu, Cloud, Globe, Sparkles 
} from 'lucide-react';
import { servicesData, caseStudiesData, testimonialsData, statisticsData } from '../data/mockData';

const Home = () => {
  // Testimonials Slider state
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  // Icon selector mapping
  const renderServiceIcon = (name) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-blue-500" />;
      case 'Smartphone': return <Activity className="w-6 h-6 text-blue-500" />;
      case 'Palette': return <Sparkles className="w-6 h-6 text-blue-500" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-blue-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-500" />;
      default: return <BarChart3 className="w-6 h-6 text-blue-500" />;
    }
  };

  const trustedCompanies = [
    { name: "Stripe", logoText: "stripe" },
    { name: "Deloitte", logoText: "Deloitte." },
    { name: "Novartis", logoText: "NOVARTIS" },
    { name: "Plaid", logoText: "plaid" },
    { name: "Microsoft", logoText: "Microsoft" }
  ];

  return (
    <div className="animate-page-enter">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] bg-slate-950 flex items-center pt-32 pb-20 overflow-hidden">
        {/* Radial Background Gradient Glowing */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.05),transparent_45%)]" />
        
        {/* Floating Shapes Animation */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl animate-float [animation-delay:3s]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] tracking-widest text-blue-400 font-semibold uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Enterprise Architectures</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Transforming Ideas Into <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Digital Success</span>
            </h1>

            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-xl">
              We help progressive businesses scale securely through intelligent cloud architectures, bespoke software engineering, and state-of-the-art AI automation.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase rounded transition-all shadow-lg shadow-blue-600/20"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs tracking-wider uppercase rounded border border-slate-800 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Hero Right Graphic Panel */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-[10px] text-slate-500 ml-2 font-mono">edge_deployment_pipeline.yml</span>
              </div>
              <div className="font-mono text-xs text-slate-400 flex flex-col gap-3.5 leading-relaxed">
                <div>
                  <span className="text-blue-400">deploy:</span>
                  <div className="pl-4"><span className="text-slate-500">runs-on:</span> ubuntu-latest</div>
                  <div className="pl-4"><span className="text-slate-500">steps:</span></div>
                </div>
                <div className="pl-6 border-l border-slate-800">
                  <div className="text-cyan-400">- name: Audit Security Standard</div>
                  <div className="pl-4 text-slate-500">run: npm run audit:compliance</div>
                  <div className="text-green-500">✓ Compliance checks passed (ISO-27001)</div>
                </div>
                <div className="pl-6 border-l border-slate-800">
                  <div className="text-cyan-400">- name: Scale Cloud Infrastructure</div>
                  <div className="pl-4 text-slate-500">uses: terraform/scale-auto@v2</div>
                  <div className="text-green-500">✓ 8 regional clusters activated</div>
                </div>
                <div className="p-3 bg-slate-950/80 rounded border border-slate-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[11px] font-semibold text-white">System Status: Active</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Uptime 99.997%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Trusted By Companies */}
      <section className="bg-slate-950 border-y border-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <span className="text-[10px] tracking-[0.25em] uppercase text-slate-500 font-semibold shrink-0">
            Trusted by industry pioneers
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40">
            {trustedCompanies.map((c, i) => (
              <span key={i} className="font-heading text-lg md:text-xl font-bold tracking-tight text-white hover:opacity-100 transition-opacity duration-300 cursor-default">
                {c.logoText}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Summary Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold block mb-2">Capabilities</span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">
                Services Built for Enterprise Scale
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-slate-900 tracking-wider uppercase transition-colors"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => (
              <div 
                key={svc.id}
                className="p-8 border border-slate-100 bg-white hover:border-blue-500/30 saas-card-shadow rounded-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {renderServiceIcon(svc.iconName)}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 text-[11px] text-slate-500 font-light">
                  {svc.benefits.slice(0, 2).map((b, idx) => (
                    <span key={idx} className="flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-6">
            <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold">Our Value</span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Why Global Businesses Partner with Corporate Edge
            </h2>
            <p className="text-slate-500 text-sm font-light leading-relaxed max-w-lg">
              We leverage clean software design patterns, automated scaling procedures, and robust security protocols to build digital solutions that consistently outperform industry standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 mb-1">ISO-27001 Audited</h4>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">Enterprise compliance and encrypted data pipelines.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 mb-1">Agile Sprint Delivery</h4>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">Continuous production delivery loops every two weeks.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 mb-1">Senior-Only Talent</h4>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">Staffed solely with cloud specialists and senior code engineers.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 mb-1">Proven Uptime SLAs</h4>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">Guaranteed server availability backed by corporate SLA guidelines.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              alt="Strategic Team Session"
              className="rounded-2xl saas-card-shadow w-full object-cover h-[450px]"
            />
            {/* Float Card Indicator */}
            <div className="absolute bottom-6 left-6 p-4 bg-slate-900 text-white rounded-xl shadow-lg flex gap-3 items-center max-w-[240px]">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">Performance Gain</span>
                <span className="text-sm font-bold font-heading">320% Faster Loading</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Statistics Section */}
      <section className="bg-slate-950 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center">
          {statisticsData.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-2">
              <span className="font-heading text-4xl sm:text-5xl font-extrabold text-blue-500 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-light text-slate-400 tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Client Testimonials Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold">Reviews</span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">
              What Our Partners Say
            </h2>
            <p className="text-slate-500 text-xs font-light leading-relaxed mb-4">
              Read how we assist tech leadership teams at health platforms, logistics brands, and neo-banks in deploying scalable, clean-code web products.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handlePrevTestimonial}
                className="w-10 h-10 border border-slate-200 hover:border-blue-600 hover:text-blue-600 rounded-full flex items-center justify-center transition-colors text-slate-600"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNextTestimonial}
                className="w-10 h-10 border border-slate-200 hover:border-blue-600 hover:text-blue-600 rounded-full flex items-center justify-center transition-colors text-slate-600"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="p-8 md:p-10 border border-slate-100 rounded-2xl saas-card-shadow bg-slate-50/50 flex flex-col gap-6 relative">
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(testimonialsData[activeTestimonialIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-slate-700 italic text-sm md:text-base font-light leading-relaxed">
                "{testimonialsData[activeTestimonialIdx].text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-4">
                <img 
                  src={testimonialsData[activeTestimonialIdx].avatar}
                  alt={testimonialsData[activeTestimonialIdx].name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900">
                    {testimonialsData[activeTestimonialIdx].name}
                  </h4>
                  <span className="text-[11px] text-slate-500">
                    {testimonialsData[activeTestimonialIdx].role} &middot; <span className="text-blue-600 font-semibold">{testimonialsData[activeTestimonialIdx].company}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Case Studies Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold block mb-2">Success Stories</span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">
                Our Latest Deployments
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-slate-900 tracking-wider uppercase transition-colors"
            >
              Browse Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudiesData.slice(0, 3).map((project) => (
              <div 
                key={project.id}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.client} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-slate-900/90 text-white text-[9px] tracking-wider uppercase font-semibold">
                      {project.industry}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">{project.client}</span>
                    <h3 className="font-heading text-base font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-2">
                      {project.challenge}
                    </p>
                  </div>
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-400 uppercase">Primary Result</span>
                    <span className="text-xs font-bold text-blue-600">{project.results.metrics[0]}</span>
                  </div>
                  <Link 
                    to="/case-studies"
                    className="text-[10px] font-semibold tracking-wider uppercase text-slate-600 hover:text-blue-600 flex items-center gap-0.5"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CTA Banner */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(37,99,235,0.08),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs tracking-[0.25em] uppercase text-blue-400 font-semibold">
            Partner With Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-2xl leading-tight">
            Ready to Build Your Enterprise Digital Edge?
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-xl leading-relaxed">
            Connect with our system architects for an initial evaluation of your tech debt, migration plans, or custom software roadmap.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs tracking-wider uppercase rounded border border-slate-800 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
