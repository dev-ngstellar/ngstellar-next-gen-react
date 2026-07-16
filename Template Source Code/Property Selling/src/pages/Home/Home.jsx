import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { properties } from '../../data/properties';
import { projects } from '../../data/projects';
import { agents } from '../../data/agents';
import { testimonials } from '../../data/testimonials';
import { blogs } from '../../data/blogs';
import { siteConfig } from '../../data/siteConfig';
import { useTheme } from '../../config/themes';
import { PropertyCard } from '../../components/cards/PropertyCard';
import { FAQAccordion } from '../../components/common/FAQAccordion';
import { AgentCard } from '../../components/cards/AgentCard';
import { FiSearch, FiSliders, FiArrowRight, FiCheckCircle, FiChevronLeft, FiChevronRight, FiTrendingUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
export const Home = () => {
  const navigate = useNavigate();
  const { currentTheme } = useTheme();

  // Search Filter state
  const [searchLoc, setSearchLoc] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchBudget, setSearchBudget] = useState('');
  const [searchBeds, setSearchBeds] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  // Testimonials Carousel state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Derived filter locations
  const locations = useMemo(() => {
    const allLocs = properties.map(p => p.location.split(',')[1]?.trim() || p.location);
    return [...new Set(allLocs)].filter(Boolean);
  }, []);

  const featuredProperties = useMemo(() => {
    return properties.filter(p => p.isFeatured).slice(0, 3);
  }, []);

  const investmentOpportunities = useMemo(() => {
    return properties.filter(p => p.isInvestment).slice(0, 3);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Build query params or navigate to properties with filters
    const query = new URLSearchParams();
    if (searchLoc) query.append('loc', searchLoc);
    if (searchType) query.append('type', searchType);
    if (searchBudget) query.append('budget', searchBudget);
    if (searchBeds) query.append('beds', searchBeds);
    if (searchStatus) query.append('status', searchStatus);

    navigate(`/properties?${query.toString()}`);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="space-y-28 pb-16">
      
      {/* SECTION 1: Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 text-white py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md"
            style={{ color: currentTheme.accent }}
          >
            Introducing Premium Templates
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black max-w-4xl tracking-tight leading-none text-white"
          >
            Find Properties That <br />
            <span className="gradient-text bg-gradient-to-r from-white via-slate-100" style={{ backgroundImage: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.accent || '#fff'})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Match Your Vision
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-2xl text-sm sm:text-base md:text-lg font-light leading-relaxed"
          >
            Explore residential, commercial, luxury, and investment properties designed to meet your lifestyle and business goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={() => navigate('/properties')}
              className="w-full sm:w-auto px-8 py-4 bg-theme-primary text-white font-bold rounded-full text-sm hover:opacity-90 transition-opacity shadow-lg cursor-pointer"
            >
              Browse Properties
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full text-sm transition-colors backdrop-blur-md cursor-pointer"
            >
              Schedule Consultation
            </button>
          </motion.div>

          {/* Floating Statistics grid */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-12 border-t border-white/10 w-full max-w-4xl mt-12"
          >
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold" style={{ color: currentTheme.primary }}>1000+</span>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Properties Listed</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold" style={{ color: currentTheme.primary }}>500+</span>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Satisfied Clients</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold" style={{ color: currentTheme.primary }}>20+</span>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Locations Covered</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold" style={{ color: currentTheme.primary }}>10+</span>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Smart Property Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <FiSliders className="text-theme-primary text-base" />
            <span>Smart Search Filters</span>
          </div>

          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Location</label>
              <select
                value={searchLoc}
                onChange={(e) => setSearchLoc(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary cursor-pointer"
              >
                <option value="">All Locations</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Property Type</label>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary cursor-pointer"
              >
                <option value="">All Types</option>
                {siteConfig.categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Budget Max</label>
              <select
                value={searchBudget}
                onChange={(e) => setSearchBudget(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary cursor-pointer"
              >
                <option value="">Any Budget</option>
                <option value="1000000">$1,000,000</option>
                <option value="2000000">$2,000,000</option>
                <option value="3500000">$3,500,000</option>
                <option value="5000000">$5,000,000</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Beds Min</label>
              <select
                value={searchBeds}
                onChange={(e) => setSearchBeds(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary cursor-pointer"
              >
                <option value="">Any Beds</option>
                <option value="1">1+ Beds</option>
                <option value="2">2+ Beds</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-theme-primary hover:opacity-95 text-white font-bold rounded-2xl text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer"
            >
              <FiSearch />
              <span>Search Options</span>
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 3: Featured Properties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-theme-primary">Curated Listings</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Featured Properties</h2>
          </div>
          <Link to="/properties" className="flex items-center space-x-1.5 text-xs font-bold text-theme-primary uppercase hover:underline">
            <span>View All Properties</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </section>

      {/* SECTION 4: Property Categories */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold text-theme-primary">Explore Sectors</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Property Categories</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {siteConfig.categories.map((cat, i) => (
              <div
                key={cat.id}
                onClick={() => navigate(`/properties?type=${cat.id}`)}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center space-y-3 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-2xl bg-theme-primary/10 flex items-center justify-center mx-auto text-theme-primary font-black uppercase text-xs">
                  {cat.name.slice(0, 2)}
                </div>
                <h4 className="font-bold text-slate-800 group-hover:text-theme-primary transition-colors text-sm sm:text-base">
                  {cat.name}
                </h4>
                <p className="text-[11px] text-slate-400 leading-normal line-clamp-2">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold text-theme-primary">Value Proposition</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Why Institutional Buyers & Developers Partner With Us
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We streamline transaction processes, guarantee zero-variance pricing disclosures, and provide automated valuation dashboards to protect portfolio integrity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {siteConfig.whyChooseUs.map((wcu, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <FiCheckCircle className="text-theme-primary text-lg mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{wcu.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">{wcu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-video lg:aspect-square bg-slate-100 rounded-3xl overflow-hidden relative shadow-inner">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" alt="Consultation desk" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 6: Featured Projects */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold text-theme-primary">Major Developments</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Featured Projects</h2>
            </div>
            <Link to="/projects" className="flex items-center space-x-1.5 text-xs font-bold text-theme-primary uppercase hover:underline">
              <span>View Portfolio Timeline</span>
              <FiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((proj) => (
              <div key={proj.id} className="bg-white rounded-3xl border border-slate-100 p-6 flex flex-col sm:flex-row gap-6 shadow-sm">
                <div className="w-full sm:w-1/3 aspect-video sm:aspect-square rounded-2xl overflow-hidden bg-slate-100">
                  <img src={proj.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">{proj.status}</span>
                    <h3 className="font-bold text-slate-800 text-lg mt-1">{proj.title}</h3>
                    <p className="text-xs text-theme-primary font-semibold mt-0.5">{proj.category}</p>
                    <p className="text-[11px] text-slate-400 mt-2">{proj.location}</p>
                  </div>
                  <Link to="/projects" className="text-xs font-bold text-theme-primary mt-4 uppercase hover:underline block">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Investment Opportunities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full">
            <FiTrendingUp />
            <span>High Yield Assets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Investment Opportunities</h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Curated listings showing projected annual ROIs. Ideal for equity appreciation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investmentOpportunities.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </section>

      {/* SECTION 8: Statistics Counters */}
      <section className="bg-slate-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-theme-primary">
                1000+
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Properties Listed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-theme-primary">
                500+
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Satisfied Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-theme-primary">
                20+
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Cities Covered</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-theme-primary">
                95%
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Agent Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-bold text-theme-primary">Expert Advisors</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Certified Partners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.slice(0, 3).map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      {/* SECTION 10: Testimonials Carousel */}
      <section className="bg-slate-50 py-20 border-y border-slate-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold text-theme-primary">Client Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Partners Say</h2>
          </div>

          <div className="relative bg-white rounded-3xl border border-slate-100 shadow-sm p-8 sm:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-center"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto bg-slate-100">
                  <img src={testimonials[activeTestimonial].avatar} alt="" className="w-full h-full object-cover" />
                </div>
                <p className="text-base sm:text-lg text-slate-600 italic leading-relaxed max-w-2xl mx-auto">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-xs text-slate-400 font-semibold">{testimonials[activeTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider arrows */}
            <div className="flex justify-center space-x-4 pt-8 border-t border-slate-50 mt-8">
              <button
                onClick={handlePrevTestimonial}
                className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors cursor-pointer text-slate-500"
              >
                <FiChevronLeft className="text-lg" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors cursor-pointer text-slate-500"
              >
                <FiChevronRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Latest Insights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-theme-primary">Industry Reports</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Latest Insights & Guides</h2>
          </div>
          <Link to="/blog" className="flex items-center space-x-1.5 text-xs font-bold text-theme-primary uppercase hover:underline">
            <span>View Blog Directory</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              onClick={() => navigate('/blog')}
              className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img src={blog.image} alt="" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] uppercase font-bold text-theme-primary">{blog.category}</span>
                <h3 className="font-bold text-slate-800 text-base group-hover:text-theme-primary transition-colors line-clamp-2">{blog.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 12: FAQ Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-bold text-theme-primary">Frictionless Decisions</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <FAQAccordion faqs={siteConfig.faqs} />
      </section>

      {/* SECTION 13: CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden relative p-8 sm:p-16 text-center text-white space-y-6">
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }} />
          <h2 className="text-3xl sm:text-5xl font-black max-w-xl mx-auto leading-tight">Ready To Find Your Next Property?</h2>
          <p className="text-slate-400 max-w-md mx-auto text-xs sm:text-sm">
            Consult with certified market brokers to get verified lists customized for your budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 relative z-10">
            <button
              onClick={() => navigate('/properties')}
              className="w-full sm:w-auto px-8 py-3.5 bg-theme-primary hover:opacity-95 text-white font-bold rounded-full text-xs uppercase tracking-wider cursor-pointer"
            >
              Browse Listings
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-full text-xs uppercase tracking-wider cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
