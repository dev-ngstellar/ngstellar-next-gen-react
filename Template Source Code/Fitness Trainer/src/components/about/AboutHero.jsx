import { motion } from 'framer-motion';
import { Award, Users, Star, Globe } from 'lucide-react';
import { siteConfig } from '../../utils/data';
import { fadeLeft, fadeRight, viewportOnce } from '../../utils/animations';

const quickStats = [
  { icon: Award, value: '10+', label: 'Years Exp.' },
  { icon: Users, value: '2500+', label: 'Clients' },
  { icon: Star, value: '98%', label: 'Success Rate' },
  { icon: Globe, value: '18', label: 'Countries' },
];

export default function AboutHero() {
  return (
    <section
      className="pt-32 pb-20 relative overflow-hidden"
      style={{ background: 'var(--secondary)' }}
    >
      {/* Aurora */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'var(--aurora-1)', filter: 'blur(100px)', opacity: 0.6 }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Decorative ring */}
            <div
              className="absolute inset-0 sm:-inset-4 rounded-3xl animate-pulse-glow opacity-20"
              style={{ border: '1px solid var(--primary)', borderRadius: '32px' }}
            />
            {/* Glow orb */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-25"
              style={{ background: 'var(--primary)', filter: 'blur(80px)' }}
            />
            <div className="relative rounded-3xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <img
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=700&q=85"
                alt={siteConfig.trainerName}
                className="w-full object-cover"
                style={{ minHeight: '600px', objectPosition: 'center top' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, var(--secondary) 0%, transparent 60%)' }}
              />
              {/* Name card overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display font-bold text-2xl text-white mb-1">{siteConfig.trainerName}</h3>
                <p className="text-sm" style={{ color: 'var(--primary)' }}>Elite Personal Trainer & Fitness Coach</p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {quickStats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-3 text-center"
                  style={{ border: '1px solid var(--border)' }}
                >
                  <Icon className="w-4 h-4 mx-auto mb-1.5" style={{ color: 'var(--primary)' }} />
                  <div className="font-display font-bold text-sm" style={{ color: 'var(--text)' }}>{value}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="section-label">✦ About Me</span>
            <h1
              className="font-display font-extrabold tracking-tight leading-tight mt-3 mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--text)' }}
            >
              A Decade of<br />
              <span className="text-gradient">Transforming Lives</span>
            </h1>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                Hi, I'm <strong style={{ color: 'var(--text)' }}>{siteConfig.trainerName}</strong> — an elite personal trainer and fitness coach with over 10 years of experience helping people achieve extraordinary physical transformations.
              </p>
              <p>
                My journey started with my own transformation — overcoming a sports injury that nearly ended my athletic career. That experience gave me a deep understanding of the human body, the psychology of change, and what it truly takes to build lasting fitness.
              </p>
              <p>
                Today, I work with professionals, athletes, and everyday people worldwide — combining evidence-based training methodologies with precision nutrition to deliver results that last a lifetime.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span
                className="px-4 py-2 rounded-full text-sm font-medium glass"
                style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                🏆 NASM Certified
              </span>
              <span
                className="px-4 py-2 rounded-full text-sm font-medium glass"
                style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                💪 ACE Certified
              </span>
              <span
                className="px-4 py-2 rounded-full text-sm font-medium glass"
                style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                🥗 Precision Nutrition L2
              </span>
            </div>

            <div className="mt-10">
              <a href="/contact">
                <button className="btn-primary py-4 px-8">
                  Book A Consultation
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
