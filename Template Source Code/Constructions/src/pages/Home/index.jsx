import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';

const CountUpComponent = typeof CountUp === 'function' ? CountUp : (CountUp.default || CountUp);
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import CSS for Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Data imports
import { siteConfig } from '../../data/siteConfig';
import { servicesData } from '../../data/services';
import { projectsData } from '../../data/projects';
import { testimonialsData } from '../../data/testimonials';
import { teamData } from '../../data/team';
import { blogsData } from '../../data/blogs';

// Image and icon utilities
import { getImg } from '../../utils/images';
import { getIcon } from '../../utils/icons';

// Component imports
import SectionHeader from '../../components/common/SectionHeader';
import ServiceCard from '../../components/cards/ServiceCard';
import ProjectCard from '../../components/cards/ProjectCard';
import TeamCard from '../../components/cards/TeamCard';
import BlogCard from '../../components/cards/BlogCard';

// Icons for Trust Section
import { MdVerified, MdSecurity, MdThumbUp, MdSchedule, MdStars } from 'react-icons/md';

const Home = ({ onOpenQuote }) => {
  const [projectFilter, setProjectFilter] = useState('All');

  const filteredProjects = projectFilter === 'All'
    ? projectsData.slice(0, 3)
    : projectsData.filter(p => p.category === projectFilter).slice(0, 3);

  const trustIcons = {
    engineers: <MdVerified className="text-4xl text-primary" />,
    safety: <MdSecurity className="text-4xl text-primary" />,
    quality: <MdThumbUp className="text-4xl text-primary" />,
    delivery: <MdSchedule className="text-4xl text-primary" />,
    excellence: <MdStars className="text-4xl text-primary" />
  };

  const projectCategories = ['All', 'Commercial', 'Residential', 'Industrial', 'Infrastructure', 'Healthcare', 'Education'];

  return (
    <div className="w-full">
      {/* =========================================================
         SECTION 1: HERO
         ========================================================= */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image / Placeholder */}
        <div className="absolute inset-0 z-0">
          <img
            src={getImg('hero.construction01')}
            alt="Infrastructure Project Hero"
            className="w-full h-full object-cover opacity-35 scale-105 animate-[pulse_8s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full pt-20">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20"
            >
              Industry Leading Infrastructure Solutions
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-6 tracking-tight leading-[1.1]"
            >
              Building Tomorrow's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Infrastructure</span> Today
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-slate-300 mt-6 leading-relaxed"
            >
              Delivering innovative construction, engineering, and project management solutions through quality, safety, and operational excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link
                to="/projects"
                className="px-8 py-3.5 rounded-lg bg-primary hover:bg-primary/95 text-white font-bold text-sm shadow-lg hover:shadow-primary/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                Explore Projects
              </Link>
              <button
                onClick={onOpenQuote}
                className="px-8 py-3.5 rounded-lg border-2 border-white/20 hover:border-white text-white font-bold text-sm bg-white/5 hover:bg-white/10 transition-all hover:scale-[1.02] cursor-pointer"
              >
                Request Consultation
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Cards (Desktop) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8 hidden lg:grid grid-cols-4 gap-6 z-20">
          {[
            { count: '250+', label: 'Projects Delivered' },
            { count: '15+', label: 'Years Experience' },
            { count: '100+', label: 'Experts Team' },
            { count: '20+', label: 'Locations' }
          ].map((card, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
              key={card.label}
              className="glass-dark p-6 rounded-xl border border-white/10 text-left flex flex-col justify-center"
            >
              <span className="text-2xl font-black text-primary">{card.count}</span>
              <span className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">{card.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 z-10 text-[10px] uppercase tracking-widest font-extrabold animate-bounce">
          <span>Scroll Down</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </section>

      {/* =========================================================
         SECTION 2: TRUST
         ========================================================= */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {siteConfig.trustItems.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={item.id}
                className="flex flex-col items-center text-center p-4 border border-slate-50 hover:border-border hover:bg-slate-50/50 rounded-xl transition-all"
              >
                <div className="mb-4">
                  {trustIcons[item.id] || <MdVerified className="text-4xl text-primary" />}
                </div>
                <h3 className="text-base font-bold text-text-primary mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 3: SERVICES
         ========================================================= */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Core Expertise"
            title="Building High-Performance Infrastructure"
            description="We deploy professional methodologies across diverse building fields to deliver world-class physical structures."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                icon={service.icon}
                shortDesc={service.shortDesc}
                index={idx}
              />
            ))}
            {/* Added Renovation & Design Build as mock/bonus cards to reach requested list */}
            <ServiceCard
              id="renovations"
              title="Renovation Services"
              icon="MdBuild"
              shortDesc="Retrofitting structural systems, spatial upgrades, and cosmetic overhauls for aging corporate and retail centers."
              index={6}
            />
            <ServiceCard
              id="design-build"
              title="Design & Build"
              icon="MdLandscape"
              shortDesc="Integrated execution structure pairing architectural draftsmen with field operations under a single team."
              index={7}
            />
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 4: WHY CHOOSE US
         ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 -translate-x-2 -translate-y-2" />
            <img
              src={getImg('general.aboutOverview')}
              alt="Structural framework"
              className="rounded-2xl h-80 w-full object-cover z-10 shadow-lg"
            />
            <img
              src={getImg('projects.commercial02')}
              alt="Engineering blueprint analysis"
              className="rounded-2xl h-80 w-full object-cover mt-8 z-10 shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="text-left">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase border-l-2 border-primary pl-2.5">
              Why Partner With Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary mt-3 mb-6 tracking-tight leading-tight">
              Engineering Reliability, Executing Quality
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
              We bypass intermediate brokerage structures, maintaining full control over planning, materials, and onsite labor. This ensures projects remain safe, compliant, and cost-controlled.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Experienced Team', desc: 'Licensed structural estimators and PMs.' },
                { title: 'Quality Control', desc: 'Rigorous third-party lab testing.' },
                { title: 'Safety First', desc: 'HSE compliance and zero accident policies.' },
                { title: 'Advanced Tech', desc: 'Laser grading, BIM modeling, and telemetry.' },
                { title: 'Cost Efficiency', desc: 'Sourced procurement contracts.' },
                { title: 'Reliable Delivery', desc: 'Structured milestones with daily updates.' }
              ].map((feat, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  key={feat.title}
                  className="flex gap-3 text-left"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">{feat.title}</h4>
                    <p className="text-xs text-text-secondary mt-1">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 5: FEATURED PROJECTS
         ========================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Portfolio Showcase"
            title="Projects Built to Last Generations"
            description="Explore our portfolio of commercial office buildings, distribution hubs, transport systems, and civil assets."
          />

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  projectFilter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-border text-text-secondary hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, idx) => (
                <ProjectCard
                  key={proj.id}
                  id={proj.id}
                  title={proj.title}
                  category={proj.category}
                  shortDesc={proj.shortDesc}
                  image={proj.image}
                  metrics={proj.metrics}
                  index={idx}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm transition-colors cursor-pointer"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 6: PROCESS
         ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Operational Flow"
            title="Our Construction Methodology"
            description="We guide clients through a structured six-step sequence to ensure risk control and build integrity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {/* Timeline Line (Desktop) */}
            <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-border -translate-y-1/2 hidden lg:block z-0" />

            {siteConfig.process.map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                key={step.step}
                className="relative flex flex-col items-center text-center bg-white border border-border rounded-xl p-5 hover:shadow-lg transition-shadow z-10"
              >
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm mb-4 shadow-md">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 7: STATISTICS
         ========================================================= */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        {/* Parallax structure details */}
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${getImg('general.aboutOverview')})` }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {siteConfig.stats.map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={stat.id}
                className="flex flex-col items-center text-center"
              >
                <span className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
                  <CountUpComponent end={stat.count} duration={3} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-400 mt-2 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 8: INDUSTRIES SERVED
         ========================================================= */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Sectors & Sectors"
            title="Industries We Build For"
            description="We deliver customized construction layouts optimized for specific commercial requirements."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.industries.map((ind, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={ind.id}
                className="group flex flex-col text-left p-6 bg-white border border-border rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {getIcon(ind.icon, 'text-xl')}
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {ind.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 9: SAFETY & QUALITY
         ========================================================= */}
      <section className="py-20 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase border-l-2 border-primary pl-2.5">
              Strict Regulations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary mt-3 mb-6 tracking-tight leading-tight">
              {siteConfig.safetyQuality.title}
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
              {siteConfig.safetyQuality.subtitle}
            </p>

            <div className="flex flex-col gap-6">
              {siteConfig.safetyQuality.points.map((pt, idx) => (
                <div key={pt.title} className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">{pt.title}</h4>
                    <p className="text-xs text-text-secondary mt-1">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-3 translate-x-2 translate-y-2" />
            <img
              src={getImg('general.safetyQualitySection')}
              alt="HSE Compliance Verification"
              className="rounded-2xl w-full object-cover h-[450px] relative z-10 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 10: LEADERSHIP TEAM
         ========================================================= */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Executive Leadership"
            title="People Behind the Precision"
            description="Our senior management averages two decades of operational experience overseeing commercial construction portfolios."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.leadership.map((member, idx) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                socials={member.socials}
                index={idx}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm transition-colors cursor-pointer"
            >
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 11: TESTIMONIALS
         ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Client Feedback"
            title="What Project Developers Say"
            description="Reviews and technical evaluations from corporate developers and public transit supervisors."
          />

          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="pb-14"
            >
              {testimonialsData.map((test) => (
                <SwiperSlide key={test.id}>
                  <div className="flex flex-col items-center text-center p-6 md:p-10 border border-border rounded-2xl bg-slate-50/30">
                    <span className="text-6xl text-primary font-serif leading-none h-6 select-none">“</span>
                    <p className="text-sm sm:text-base md:text-lg text-text-primary italic mt-4 mb-6 leading-relaxed max-w-2xl">
                      {test.text}
                    </p>
                    <div className="h-px bg-border w-16 mb-4" />
                    <span className="text-sm font-bold text-text-primary">{test.name}</span>
                    <span className="text-xs text-text-secondary mt-1">{test.role} &middot; {test.company}</span>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider mt-2.5">Project: {test.project}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 12: LATEST INSIGHTS
         ========================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Industry News"
            title="Insights & Engineering bulletins"
            description="Stay informed with structural breakdowns, regulatory changes, and sustainable design methodologies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog, idx) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                category={blog.category}
                date={blog.date}
                readTime={blog.readTime}
                shortDesc={blog.shortDesc}
                image={blog.image}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 13: CTA
         ========================================================= */}
      <section className="py-16 sm:py-20 bg-primary text-white relative overflow-hidden text-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Ready To Build Your Next Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/80 mt-6 leading-relaxed max-w-2xl mx-auto animate-fade"
          >
            Contact our structural estimators today to request structural blueprints, preliminary pricing details, and regulatory scheduling timelines.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center mt-10"
          >
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-primary font-bold text-sm shadow-lg hover:shadow-black/10 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              Request Consultation
            </button>
            <Link
              to="/projects"
              className="px-8 py-3.5 rounded-lg border-2 border-white/20 hover:border-white text-white font-bold text-sm bg-white/5 hover:bg-white/10 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
