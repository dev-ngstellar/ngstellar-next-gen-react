import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Award, Users } from 'lucide-react';
import { aboutStats, aboutTimeline, trainers } from '../../utils/data';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../../utils/animations';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.timeline-item',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-item',
            start: 'top 85%',
          },
        }
      );
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden pt-32"
        style={{ background: 'var(--secondary)' }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
            alt="About GymForge"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--secondary), transparent 60%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="section-label">Our Story</span>
            <h1 className="font-display text-white mt-4" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              ABOUT
              <br />
              <span className="text-gradient">GYMFORGE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8 }}>
              <div className="section-header text-left mb-6">
                <span className="section-label">Our Story</span>
                <h2>
                  FORGED FROM PASSION,<br />
                  <span className="text-gradient">BUILT FOR RESULTS</span>
                </h2>
              </div>
              <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                GymForge was born in 2012 from a simple belief: that every person deserves access to elite-level fitness coaching and world-class facilities — regardless of their starting point.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Founded by Marcus Thompson and Aria Chen, two former elite athletes, GymForge has grown from a 2,000 sq ft warehouse gym to a 15,000 sq ft premium facility, serving over 500 active members across 20+ specialized programs.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8 }} className="relative">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=700&q=80"
                alt="GymForge interior"
                className="rounded-2xl w-full object-cover"
                style={{ height: '500px' }}
              />
              <div
                className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-6"
                style={{ border: '1px solid var(--primary)' }}
              >
                <div className="font-display text-4xl" style={{ color: 'var(--primary)' }}>12+</div>
                <div className="text-sm text-white font-medium">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                Icon: Target,
                title: 'Our Mission',
                text: 'To forge the strongest version of every member through science-backed training, expert coaching, and a relentlessly supportive community. We measure success not in weights lifted, but in lives changed.',
              },
              {
                Icon: Eye,
                title: 'Our Vision',
                text: 'To become the world\'s most trusted fitness community — where beginner and elite athlete alike achieve transformational results in a premium environment that inspires daily.',
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="glass rounded-2xl p-10" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'var(--glow-soft)', border: '1px solid var(--primary)' }}>
                  <item.Icon className="w-7 h-7" style={{ color: 'var(--primary)' }} />
                </div>
                <h3 className="font-display text-white text-3xl mb-4">{item.title}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding-sm" style={{ background: 'var(--secondary)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-2xl p-6 text-center"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="font-display text-5xl mb-2" style={{ color: 'var(--primary)' }}>{stat.value}</div>
                <div className="text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: 'rgba(0,0,0,0.3)' }} ref={timelineRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-header"
          >
            <span className="section-label">Timeline</span>
            <h2>
              OUR <span className="text-gradient">JOURNEY</span>
            </h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, var(--primary), transparent)' }} />
            {aboutTimeline.map((item, i) => (
              <div key={item.year} className="timeline-item relative flex gap-8 mb-10 pl-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display text-white text-lg z-10" style={{ background: 'var(--primary)' }}>
                  {item.year.slice(2)}
                </div>
                <div className="glass rounded-2xl p-6 flex-1" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--primary)' }}>{item.year}</div>
                  <h3 className="font-display text-white text-xl mb-2">{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-header"
          >
            <span className="section-label">The Team</span>
            <h2>
              MEET THE COACHES BEHIND THE <span className="text-gradient">RESULTS</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {trainers.slice(0, 4).map((t) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="relative rounded-xl overflow-hidden" style={{ height: '280px' }}>
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-end p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                  <div className="font-display text-white text-lg">{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--primary)' }}>{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <Link to="/trainers">
            <button className="btn-primary">Meet All Trainers</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
