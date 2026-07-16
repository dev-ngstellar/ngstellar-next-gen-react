import React from 'react';
import { Link } from 'react-router-dom';
import { useSpecialty } from '../hooks/useSpecialty';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations/motionVariants';
import { FaPhoneAlt, FaStar, FaHandshake, FaFileInvoiceDollar, FaCheckCircle, FaBriefcaseMedical } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Button from '../components/common/Button';
import SectionHeader from '../components/common/SectionHeader';
import ServiceCard from '../components/cards/ServiceCard';
import DoctorCard from '../components/cards/DoctorCard';
import FacilityCard from '../components/cards/FacilityCard';
import BlogCard from '../components/cards/BlogCard';
import AppointmentForm from '../components/forms/AppointmentForm';

const Home = () => {
  const { activeConfig } = useSpecialty();

  return (
    <div className="relative pt-[80px] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent py-12 md:py-20">
        {/* Background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-reverse" />

        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          
          {/* Left Text Column */}
          <motion.div 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            className="text-left flex flex-col items-start"
          >
            <span className="text-secondary font-bold text-xs md:text-sm uppercase tracking-widest bg-secondary/10 px-3.5 py-1 rounded-full mb-5">
              {activeConfig.hero.subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark leading-tight mb-6 tracking-tight">
              {activeConfig.hero.title}
            </h1>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              {activeConfig.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="primary" showIcon={true}>Book Appointment</Button>
              </Link>
              <Link to="/departments">
                <Button variant="secondary">Explore Departments</Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image/Cards Column */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            animate="show"
            className="relative flex items-center justify-center w-full min-h-[350px] md:min-h-[450px]"
          >
            {/* Parallax elements container */}
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[30px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={activeConfig.hero.img} 
                alt="Hospital Clinic Hero" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23F1F5F9'/><path d='M20 20h60v60H20z' fill='%23CBD5E1'/><path d='M40 45a5 5 0 1 0 0-10 5 5 0 0 0 0 10z' fill='%2394A3B8'/><path d='M25 70l15-20 15 15 10-10 10 15z' fill='%2364748B'/></svg>";
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            {activeConfig.hero.floatingCards.map((card, idx) => {
              const offsets = [
                'top-10 -left-6 md:-left-12',
                'bottom-1/3 -right-6 md:-right-10',
                '-bottom-6 left-1/4',
              ];
              // Render maximum 3 floating cards for clean UI
              if (idx > 2) return null;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`absolute ${offsets[idx]} glass-card px-4 py-3 md:px-5 md:py-3.5 rounded-2xl shadow-lg border border-white/70 flex flex-col items-start min-w-[120px] md:min-w-[150px] text-left select-none cursor-default`}
                >
                  <span className="text-2xl md:text-3xl font-extrabold text-primary">{card.val}</span>
                  <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">{card.label}</span>
                </motion.div>
              );
            })}

          </motion.div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="bg-white py-10 shadow-sm border-y border-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {activeConfig.trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-600 font-semibold text-xs md:text-sm uppercase tracking-wider select-none">
                <span className="text-secondary text-base md:text-lg">✔</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            subtitle="Clinical Services"
            title="Premium Medical Care Solutions"
            description="We offer full clinical support and therapeutic options backed by certified medical professionals."
          />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {activeConfig.services.slice(0, 4).map((serv) => (
              <ServiceCard 
                key={serv.id}
                title={serv.title}
                desc={serv.desc}
                iconName={serv.icon}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Image */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100 mx-auto"
          >
            <img 
              src={activeConfig.whyChooseUs.img} 
              alt="Medical Care Facility"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column Content */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-left"
          >
            <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full mb-3 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight mb-4">
              Setting Clinical Benchmarks in Modern Care
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
              {activeConfig.whyChooseUs.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeConfig.whyChooseUs.features.slice(0, 4).map((f, idx) => (
                <div key={idx} className="flex gap-3 items-start select-none">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs flex-shrink-0 mt-0.5">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm mb-1">{f.title}</h4>
                    <p className="text-xs text-gray-400 leading-normal">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. DOCTORS SECTION */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            subtitle="Clinical Staff"
            title="Consult Highly-Qualified Specialists"
            description="Our physicians are board-certified practitioners holding clinical excellence in their specific domains."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {activeConfig.doctors.map((doc, idx) => (
              <DoctorCard 
                key={idx}
                name={doc.name}
                spec={doc.spec}
                exp={doc.exp}
                img={doc.img}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. APPOINTMENT FORM & STATS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-light relative">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Stats & Brief Info (Left 5 Cols) */}
          <div className="lg:col-span-5 text-left flex flex-col items-start">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full mb-3 inline-block">
              Stats & Booking
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6 tracking-tight">
              Clinical Performance & Care Outcomes
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
              Schedule your clinic visit online today. Enter your basic symptoms, and our administrative desk will assign the leading clinician to verify your diagnosis.
            </p>

            {/* Grid of Stats */}
            <div className="grid grid-cols-2 gap-6 w-full">
              {activeConfig.stats.map((st, idx) => (
                <div key={idx} className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-left">
                  <span className="text-2xl md:text-3xl font-extrabold text-primary block mb-1">{st.val}</span>
                  <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">{st.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Glass Appointment Form (Right 7 Cols) */}
          <div className="lg:col-span-7 w-full">
            <AppointmentForm />
          </div>

        </div>
      </section>

      {/* 8. FACILITIES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            subtitle="Clinical Infrastructure"
            title="State-Of-The-Art Medical Tech"
            description="Our campus hosts advanced diagnostic systems, sterile operation suites, and patient monitoring facilities."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {activeConfig.facilities.slice(0, 3).map((f, idx) => (
              <FacilityCard 
                key={idx}
                title={f.title}
                desc={f.desc}
                img={f.img}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-20 bg-light select-none">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            subtitle="Reviews"
            title="What Patients Say About Our Care"
            description="Read firsthand recovery reviews from individuals who completed treatments in our clinics."
          />
          
          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              className="pb-14"
            >
              {activeConfig.testimonials.map((test, idx) => (
                <SwiperSlide key={idx}>
                  <div className="glass-card p-8 md:p-12 rounded-3xl border border-white flex flex-col items-center text-center">
                    {/* Star rating */}
                    <div className="flex gap-1 mb-6 text-amber-400">
                      {[...Array(test.rating)].map((_, i) => <FaStar key={i} />)}
                    </div>
                    
                    <p className="text-base md:text-xl text-gray-600 leading-relaxed italic mb-8 font-medium">
                      "{test.text}"
                    </p>

                    <div className="flex items-center gap-4">
                      <img 
                        src={test.img} 
                        alt={test.name} 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23CBD5E1'/><path d='M50 50c10 0 18-8 18-18s-8-18-18-18-18 8-18 18 8 18 18 18zm0 6c-15 0-27 12-27 26v2h54v-2c0-14-12-26-27-26z' fill='%2394A3B8'/></svg>";
                        }}
                        className="w-full h-full object-cover border-2 border-primary/20"
                      />
                      <div className="text-left">
                        <h4 className="font-bold text-dark text-sm md:text-base leading-none mb-1">{test.name}</h4>
                        <span className="text-xs text-gray-400 font-semibold">{test.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* 10. INSURANCE PARTNERS */}
      <section className="py-12 bg-white border-y border-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block mb-6">
            Supported Cashless Insurance TPA Networks
          </span>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60">
            <span className="font-extrabold text-base md:text-lg text-gray-400 flex items-center gap-1"><FaHandshake /> Star Health</span>
            <span className="font-extrabold text-base md:text-lg text-gray-400 flex items-center gap-1"><FaFileInvoiceDollar /> ICICI Lombard</span>
            <span className="font-extrabold text-base md:text-lg text-gray-400 flex items-center gap-1"><FaBriefcaseMedical /> Max Bupa</span>
            <span className="font-extrabold text-base md:text-lg text-gray-400 flex items-center gap-1"><FaHandshake /> HDFC Ergo</span>
          </div>
        </div>
      </section>

      {/* 11. BLOG SECTION */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            subtitle="Health Hub"
            title="Read Latest Medical & Health Articles"
            description="Empower your daily routines with direct healthcare suggestions, preventive tips, and medical research updates."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {activeConfig.blogs.map((b, idx) => (
              <BlogCard 
                key={idx}
                title={b.title}
                img={b.img}
                date={b.date}
                author={b.author}
                cat={b.cat}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 12. EMERGENCY CTA */}
      <section className="py-16 md:py-20 bg-dark text-white relative overflow-hidden">
        {/* Abstract light beam */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-left max-w-2xl">
            <span className="text-accent font-extrabold text-xs uppercase tracking-widest mb-3 block">
              24/7 Helpline Desk
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Need Immediate Medical Assistance?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Our trauma response units, life support cardiac ambulances, and critical physicians are on-standby round the clock to manage trauma situations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 flex-shrink-0 w-full lg:w-auto">
            <a 
              href={`tel:${activeConfig.emergencyNumber}`} 
              className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center select-none"
            >
              <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-white text-lg">
                <FaPhoneAlt />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Helpline Number</span>
                <span className="text-lg md:text-xl font-black text-rose-500 block">{activeConfig.emergencyNumber}</span>
              </div>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="accent" showIcon={true} className="w-full !py-5">
                Contact Desk
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
