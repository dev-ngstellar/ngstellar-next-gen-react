import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Code, Lightbulb, Clock, Monitor, LayoutTemplate, Server, Smartphone, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '150+' },
    { label: 'Happy Clients', value: '85+' },
    { label: 'Years Experience', value: '8+' },
    { label: 'Countries Worked', value: '12' },
  ];

  const skills = [
    { name: 'React', icon: <Code className="w-6 h-6 text-accent" /> },
    { name: 'Next.js', icon: <Server className="w-6 h-6 text-accent" /> },
    { name: 'Node.js', icon: <Monitor className="w-6 h-6 text-accent" /> },
    { name: 'UI Design', icon: <LayoutTemplate className="w-6 h-6 text-accent" /> },
    { name: 'Tailwind', icon: <Code className="w-6 h-6 text-accent" /> },
    { name: 'TypeScript', icon: <Smartphone className="w-6 h-6 text-accent" /> },
  ];

  const timeline = [
    { role: 'Current Position', company: 'Self Employed', period: '2023 - Present', description: 'Working on premium freelance projects and building digital products.' },
    { role: 'Lead Designer', company: 'Creative Agency', period: '2020 - 2023', description: 'Led a team of designers in creating award-winning web experiences.' },
    { role: 'Senior Developer', company: 'Tech Startup', period: '2018 - 2020', description: 'Architected and built scalable frontend applications.' },
    { role: 'Freelancer', company: 'Independent', period: '2016 - 2018', description: 'Started the journey by helping local businesses establish their online presence.' },
  ];

  const whyWork = [
    { title: 'Fast Delivery', description: 'Optimized workflows ensure your project is delivered on time, every time.', icon: <Clock className="w-8 h-8 text-accent" /> },
    { title: 'Creative Thinking', description: 'Innovative solutions that make your brand stand out from the competition.', icon: <Lightbulb className="w-8 h-8 text-accent" /> },
    { title: 'Clean Code', description: 'Maintainable, scalable, and highly performant code architecture.', icon: <Code className="w-8 h-8 text-accent" /> },
    { title: 'Long-Term Support', description: 'Ongoing maintenance and support even after the project is completed.', icon: <CheckCircle className="w-8 h-8 text-accent" /> },
  ];

  const testimonials = [
    { name: 'Sarah Jenkins', company: 'TechNova', review: 'Alex delivered an outstanding product that exceeded our expectations. Highly recommended!', rating: 5 },
    { name: 'Michael Chen', company: 'Elevate Studio', review: 'The attention to detail and design aesthetic is unmatched. A true professional.', rating: 5 },
    { name: 'Emma Watson', company: 'StartUp Inc', review: 'Working with Alex was a breeze. Fast, reliable, and incredibly talented.', rating: 5 },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32 text-center relative"
        initial="hidden" animate="visible" variants={fadeUp}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          About <span className="text-gradient">Me</span>
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
          Crafting digital experiences that merge beautiful design with robust engineering.
        </p>
      </motion.section>

      {/* Section 1: Intro */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32 grid md:grid-cols-2 gap-16 items-center"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass p-2 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 to-transparent opacity-50 blur-xl group-hover:opacity-80 transition-opacity duration-700" />
          <div className="w-full h-full bg-surface/50 rounded-2xl flex items-center justify-center border border-white/5 relative z-10 overflow-hidden">
             {/* Placeholder for Professional Image */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
             <span className="text-text-secondary">Professional Image</span>
          </div>
        </motion.div>
        
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">My Story & Mission</h2>
          <p className="text-text-secondary leading-relaxed">
            I am a passionate digital creator with over a decade of experience bridging the gap between design and engineering. My journey started as a freelance web designer and evolved into leading full-stack development teams.
          </p>
          <p className="text-text-secondary leading-relaxed">
            My mission is to help businesses grow by building digital products that are not only visually stunning but also highly performant and accessible. I believe that great design is invisible, and great engineering is flawless.
          </p>
          <div className="mt-4">
            <button className="px-8 py-4 rounded-full bg-primary text-background font-medium hover:scale-105 transition-transform">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 2: Stats */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-300">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</span>
              <span className="text-text-secondary text-sm uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 3: Skills */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Skills</h2>
          <p className="text-text-secondary">The tools I use to bring ideas to life.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-2 hover:bg-white/5 transition-all duration-300 cursor-pointer group">
              <div className="p-3 bg-surface rounded-xl border border-white/5 group-hover:border-accent/50 transition-colors">
                {skill.icon}
              </div>
              <span className="text-lg font-medium text-white">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 4: Experience Timeline */}
      <motion.section 
        className="max-w-3xl mx-auto px-6 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-text-secondary">My professional journey over the years.</p>
        </div>
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
          {timeline.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="relative pl-8 md:pl-0">
              <div className="absolute w-4 h-4 rounded-full bg-accent -left-[24px] top-1.5 md:-left-[40px] shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <span className="text-accent text-sm font-medium px-3 py-1 bg-accent/10 rounded-full w-fit">{item.period}</span>
              </div>
              <h4 className="text-lg text-text-secondary mb-3">{item.company}</h4>
              <p className="text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 5: Why Work With Me */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Me</h2>
          <p className="text-text-secondary">What sets my services apart.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {whyWork.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="glass-card rounded-3xl p-8 hover:bg-white/[0.02] transition-colors group">
              <div className="mb-6 p-4 bg-surface rounded-2xl w-fit border border-white/5 group-hover:border-accent/30 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 6: Testimonials */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-text-secondary">What people say about working with me.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div key={i} variants={fadeUp} className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-white text-lg leading-relaxed mb-8">"{testimonial.review}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-text-secondary">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 7: Large CTA */}
      <motion.section 
        className="max-w-5xl mx-auto px-6 text-center relative"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <div className="absolute inset-0 bg-accent/20 blur-[100px] -z-10 rounded-full" />
        <div className="glass-card rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-white/10">
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Let's Build Something <br className="hidden md:block"/>
              <span className="text-gradient">Amazing Together</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
              Ready to take your digital presence to the next level? Drop me a message and let's start planning your next project.
            </p>
            <button className="px-10 py-5 rounded-full bg-primary text-background font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Hire Me Today
            </button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default About;
