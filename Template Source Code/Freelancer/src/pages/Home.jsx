import React from 'react';
import { motion } from 'framer-motion';
import { Code, LayoutTemplate, Zap, ExternalLink, Check, Star } from 'lucide-react';

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const trustedBy = ['Google', 'Microsoft', 'Adobe', 'Spotify', 'Airbnb', 'Amazon'];

  const services = [
    { title: 'Web Development', desc: 'Modern, fast, and scalable applications built with React and Node.js.', icon: <Code className="w-6 h-6 text-accent" /> },
    { title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces designed for conversion and engagement.', icon: <LayoutTemplate className="w-6 h-6 text-accent" /> },
    { title: 'Performance Optimization', desc: 'Lightning-fast load times and seamless interactions for your users.', icon: <Zap className="w-6 h-6 text-accent" /> },
  ];

  const projects = [
    { title: 'Fintech Dashboard', category: 'Web App', tech: 'React, Tailwind, Recharts', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000' },
    { title: 'E-Commerce Platform', category: 'Platform', tech: 'Next.js, Stripe, Prisma', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000' },
    { title: 'Creative Agency', category: 'Website', tech: 'Vite, Framer Motion', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000' },
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', desc: 'Understanding your goals and technical requirements.' },
    { num: '02', title: 'Planning', desc: 'Creating wireframes and mapping out the architecture.' },
    { num: '03', title: 'Development', desc: 'Writing clean, scalable code with regular updates.' },
    { num: '04', title: 'Launch', desc: 'Deploying the final product and ensuring everything runs smoothly.' },
  ];

  const pricing = [
    { name: 'Starter', price: '$2,500', features: ['5 Page Website', 'Responsive Design', 'Basic SEO', '1 Month Support'] },
    { name: 'Business', price: '$5,000', features: ['Custom Web App', 'Database Integration', 'Advanced SEO', '3 Months Support'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Full-Stack Platform', 'Custom Architecture', 'Dedicated Team', '24/7 Support'] },
  ];

  const testimonials = [
    { name: 'David Smith', company: 'TechFlow', review: 'Alex completely transformed our online presence. The new platform is blazing fast.', rating: 5 },
    { name: 'Jessica Lee', company: 'DesignCo', review: 'An absolute pleasure to work with. The attention to detail in the UI is incredible.', rating: 5 },
  ];

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32 flex flex-col items-center text-center relative min-h-[70vh] justify-center"
        initial="hidden" animate="visible" variants={fadeUp}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[120px] -z-10" />
        
        <motion.div variants={fadeUp} className="flex gap-4 mb-8">
          <span className="glass border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-text-secondary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available for Freelance
          </span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
          Hi, I'm Alex. <br />
          <span className="text-gradient">I build premium digital experiences.</span>
        </motion.h1>
        
        <motion.p variants={fadeUp} className="text-text-secondary text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Helping businesses grow through tailored, modern, and high-performance web applications that convert users into customers.
        </motion.p>
        
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-4 rounded-full bg-primary text-background font-bold hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto">
            Hire Me
          </button>
          <button className="px-8 py-4 rounded-full glass border border-white/10 font-bold text-white hover:bg-white/10 transition-colors w-full sm:w-auto">
            Download CV
          </button>
        </motion.div>
      </motion.section>

      {/* Trusted By Marquee */}
      <section className="border-y border-white/5 py-12 mb-32 overflow-hidden bg-white/[0.01]">
        <div className="flex gap-16 items-center whitespace-nowrap px-6 animate-[marquee_20s_linear_infinite] w-max">
          {[...trustedBy, ...trustedBy, ...trustedBy].map((company, i) => (
            <span key={i} className="text-2xl font-bold text-text-secondary/30 uppercase tracking-widest">
              {company}
            </span>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What I Do</h2>
          <p className="text-text-secondary max-w-xl mx-auto">Specialized services designed to elevate your brand's digital presence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div key={i} variants={fadeUp} className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center border border-white/5 mb-6 group-hover:border-accent/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-text-secondary max-w-xl">A selection of my recent premium projects.</p>
          </div>
          <button className="text-white font-medium hover:text-accent transition-colors flex items-center gap-2">
            View All Projects <ExternalLink className="w-4 h-4" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div key={i} variants={fadeUp} className="group relative rounded-3xl overflow-hidden glass border border-white/10 cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-accent text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm">{project.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My Process</h2>
          <p className="text-text-secondary max-w-xl mx-auto">A streamlined workflow to ensure project success.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          {processSteps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left pt-6">
              <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-xl font-bold text-white mb-6 shadow-xl">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing Preview */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Pricing Packages</h2>
          <p className="text-text-secondary max-w-xl mx-auto">Transparent pricing for premium services.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {pricing.map((plan, i) => (
            <motion.div key={i} variants={fadeUp} className={`glass-card rounded-[2.5rem] p-8 md:p-10 relative ${plan.popular ? 'border-accent/50 shadow-[0_0_40px_rgba(59,130,246,0.15)] md:-translate-y-4' : 'border-white/5'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-8">{plan.price}</div>
              <ul className="flex flex-col gap-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-text-secondary">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-bold transition-all ${plan.popular ? 'bg-primary text-background hover:scale-105' : 'glass border border-white/20 text-white hover:bg-white/10'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="max-w-5xl mx-auto px-6 mb-10"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((test, i) => (
            <motion.div key={i} variants={fadeUp} className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-white text-lg leading-relaxed mb-8">"{test.review}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-accent flex items-center justify-center text-white font-bold text-lg">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{test.name}</h4>
                  <p className="text-sm text-text-secondary">{test.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default Home;
