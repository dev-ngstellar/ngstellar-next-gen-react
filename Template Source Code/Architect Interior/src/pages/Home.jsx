import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, ChevronRight, Award, Compass, Building2, Grid, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* SECTION 1: Luxury Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--background-color)]">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" 
            alt="Luxury Villa Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300"></div>
        </motion.div>

        <div className="container relative z-10 mx-auto px-6 pt-20 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Designing Spaces <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-white">That Inspire</span> <br/>
            Timeless Living.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light"
          >
            We create luxurious residential, commercial and hospitality interiors that blend creativity with functionality.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/projects" className="px-8 py-4 bg-[var(--primary-color)] text-white hover:bg-opacity-90 transition-all duration-300 font-medium tracking-wide flex items-center justify-center gap-2 group">
              Explore Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide">
              Book Consultation
            </Link>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-0 right-0 z-20 hidden md:block"
        >
          <div className="container mx-auto px-6">
            <div className="glass-panel max-w-4xl mx-auto rounded-none flex justify-around items-center p-8">
              <div className="text-center">
                <h4 className="text-4xl font-heading font-bold text-[var(--primary-color)] mb-1">250+</h4>
                <p className="text-sm tracking-widest text-[var(--text-muted)] uppercase">Projects</p>
              </div>
              <div className="w-[1px] h-12 bg-[var(--border-color)]"></div>
              <div className="text-center">
                <h4 className="text-4xl font-heading font-bold text-[var(--primary-color)] mb-1">15+</h4>
                <p className="text-sm tracking-widest text-[var(--text-muted)] uppercase">Years Experience</p>
              </div>
              <div className="w-[1px] h-12 bg-[var(--border-color)]"></div>
              <div className="text-center">
                <h4 className="text-4xl font-heading font-bold text-[var(--primary-color)] mb-1">98%</h4>
                <p className="text-sm tracking-widest text-[var(--text-muted)] uppercase">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: Featured Projects */}
      <section className="py-32 bg-[var(--background-color)]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col md:flex-row justify-between items-end mb-16"
          >
            <div>
              <p className="text-[var(--primary-color)] tracking-widest uppercase text-sm mb-4 font-semibold">Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">Featured Projects</h2>
            </div>
            <Link to="/projects" className="hidden md:flex items-center text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-colors group pb-2">
              View All Projects <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Modern Villa", loc: "Beverly Hills", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", col: "md:col-span-2" },
              { title: "Luxury Apartment", loc: "New York", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80", col: "md:col-span-1" },
              { title: "Office Interior", loc: "London", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80", col: "md:col-span-1" }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariant}
                className={`group relative overflow-hidden h-[400px] md:h-[600px] cursor-pointer ${project.col}`}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="px-3 py-1 bg-[var(--primary-color)] text-white text-xs tracking-widest uppercase">{project.loc}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading text-white mb-2">{project.title}</h3>
                  <div className="flex items-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-4">
                    <span className="uppercase tracking-widest text-sm mr-2">View Project</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: About Preview */}
      <section className="py-24 bg-[var(--surface-color)]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Architect at work" className="w-full h-[600px] object-cover" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--primary-color)] -z-10 hidden lg:block"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 space-y-8"
            >
              <div>
                <p className="text-[var(--primary-color)] tracking-widest uppercase text-sm mb-4 font-semibold">Our Philosophy</p>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Designing the future of living spaces.</h2>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                  We believe that architecture is more than just building structures; it's about creating environments that elevate the human experience. Our approach combines rigorous design principles with a deep understanding of natural light, materials, and space.
                </p>
              </div>
              <ul className="space-y-4 text-[var(--text-main)] font-medium">
                <li className="flex items-center"><ChevronRight className="text-[var(--primary-color)] mr-2"/> Timeless Minimalist Aesthetics</li>
                <li className="flex items-center"><ChevronRight className="text-[var(--primary-color)] mr-2"/> Sustainable & Eco-Friendly Design</li>
                <li className="flex items-center"><ChevronRight className="text-[var(--primary-color)] mr-2"/> Premium Material Selection</li>
              </ul>
              <Link to="/about" className="inline-block mt-8 pb-1 border-b-2 border-[var(--primary-color)] text-[var(--text-main)] font-medium hover:text-[var(--primary-color)] transition-colors uppercase tracking-widest text-sm">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Design Services */}
      <section className="py-32 bg-[var(--background-color)]">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="mb-16 max-w-2xl mx-auto"
          >
            <p className="text-[var(--primary-color)] tracking-widest uppercase text-sm mb-4 font-semibold">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Our Design Services</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Architecture Design", icon: <Building2 size={40}/>, desc: "Comprehensive architectural planning for residential and commercial structures." },
              { title: "Interior Design", icon: <HomeIcon size={40}/>, desc: "Curating luxurious interior spaces with premium finishes and custom furniture." },
              { title: "Space Planning", icon: <Grid size={40}/>, desc: "Optimizing layouts for flow, functionality, and spatial harmony." }
            ].map((service, idx) => (
              <motion.div 
                key={idx} variants={fadeUpVariant}
                className="bg-[var(--surface-color)] p-10 border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-colors duration-300 group hover:-translate-y-2 text-left"
              >
                <div className="text-[var(--primary-color)] mb-6">{service.icon}</div>
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-[var(--primary-color)] transition-colors">{service.title}</h3>
                <p className="text-[var(--text-muted)] mb-6">{service.desc}</p>
                <Link to="/services" className="text-sm uppercase tracking-widest flex items-center group-hover:text-[var(--primary-color)]">
                  Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: Call To Action */}
      <section className="py-32 bg-[var(--primary-color)] relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-8"
          >
            Let's Build Your Dream Space.
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/contact" className="inline-block px-10 py-5 bg-white text-[var(--primary-color)] font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300">
              Book a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
