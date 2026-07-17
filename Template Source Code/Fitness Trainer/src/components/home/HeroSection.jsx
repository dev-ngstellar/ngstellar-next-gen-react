import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Users, TrendingUp, Award, ShieldCheck, ChevronDown } from 'lucide-react';
import { heroStats } from '../../utils/data';

const statIcons = { Users, TrendingUp, Award, ShieldCheck };

const floatingShapes = [
  { size: 80, x: '8%', y: '20%', delay: 0, opacity: 0.04 },
  { size: 140, x: '85%', y: '15%', delay: 1.5, opacity: 0.03 },
  { size: 60, x: '75%', y: '70%', delay: 0.8, opacity: 0.05 },
  { size: 100, x: '15%', y: '75%', delay: 2, opacity: 0.035 },
];

export default function HeroSection() {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax transforms for background
  const bgX = useTransform(mouseX, [-0.5, 0.5], ['-15px', '15px']);
  const bgY = useTransform(mouseY, [-0.5, 0.5], ['-10px', '10px']);

  // Stat card parallax (opposite direction)
  const cardX = useTransform(mouseX, [-0.5, 0.5], ['10px', '-10px']);
  const cardY = useTransform(mouseY, [-0.5, 0.5], ['8px', '-8px']);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden noise-overlay"
      style={{ background: 'var(--secondary)' }}
    >
      {/* Aurora / Mesh Gradient Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: bgX, y: bgY }}
      >
        {/* Main aurora orbs */}
        <div
          className="absolute rounded-full"
          style={{
            width: '700px', height: '700px',
            top: '-15%', right: '-5%',
            background: 'var(--aurora-1)',
            filter: 'blur(100px)',
            animation: 'auroraMove 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '500px', height: '500px',
            bottom: '-10%', left: '-5%',
            background: 'var(--aurora-2)',
            filter: 'blur(90px)',
            animation: 'auroraMove 10s ease-in-out 3s infinite reverse',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '300px', height: '300px',
            top: '50%', left: '40%',
            background: 'var(--aurora-3)',
            filter: 'blur(80px)',
            animation: 'auroraMove 16s ease-in-out 6s infinite',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Floating SVG shapes */}
        {floatingShapes.map((shape, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              border: '1px solid var(--primary)',
              opacity: shape.opacity,
              animation: `float 8s ease-in-out ${shape.delay}s infinite`,
            }}
          />
        ))}
        {/* Cross/dumbbell shape */}
        <div
          className="absolute"
          style={{
            left: '60%', top: '25%',
            width: '50px', height: '12px',
            border: '1px solid var(--primary)',
            opacity: 0.05,
            borderRadius: '4px',
            animation: 'float 7s ease-in-out 1s infinite',
          }}
        />
      </motion.div>

      {/* Trainer Image — Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block">
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=85"
            alt="Elite personal trainer"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
          {/* Gradient overlays */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, var(--secondary) 0%, rgba(8,11,16,0.65) 40%, rgba(8,11,16,0.05) 100%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, var(--secondary) 0%, transparent 35%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, var(--secondary) 0%, transparent 15%)' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 pt-32 pb-20 flex flex-col justify-center min-h-[calc(100vh-5rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left: Heading & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="section-label">
                ✦ Premium Personal Training
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="mt-4 mb-7 overflow-hidden">
              {['Transform', 'Your Body.', 'Transform', 'Your Life.'].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 100, opacity: 0, skewY: 5 }}
                  animate={{ y: 0, opacity: 1, skewY: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + i * 0.09,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="overflow-hidden"
                >
                  <span
                    className="block font-display font-extrabold leading-none tracking-tight py-1"
                    style={{
                      fontSize: 'clamp(2.8rem, 6.2vw, 5.5rem)',
                      color: i === 1 || i === 3 ? 'var(--primary)' : 'var(--text)',
                      textShadow: i === 1 || i === 3 ? '0 0 60px var(--glow)' : 'none',
                    }}
                  >
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="text-lg mb-10 max-w-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              Premium personal training with science-backed programs, precision nutrition, and relentless support — designed to deliver measurable results in 90 days.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <button className="btn-primary py-4 px-8 text-base gap-2.5">
                  Start Training
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-outline py-4 px-8 text-base gap-2.5">
                  <Calendar className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                  Book Consultation
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Empty space on desktop for trainer image display */}
          <div className="lg:col-span-5 hidden lg:block h-full"></div>
        </div>

        {/* Unified Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 w-full"
        >
          {heroStats.map((stat, i) => {
            const Icon = statIcons[stat.icon] || Users;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + i * 0.12 }}
                className="glass rounded-2xl p-5 text-center glow-sm hover:scale-105 transition-transform duration-300"
                style={{
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: 'var(--glow-soft)', border: '1px solid var(--primary)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                </div>
                <div
                  className="font-display font-bold text-2xl leading-none mb-1.5"
                  style={{ color: 'var(--primary)', textShadow: '0 0 16px var(--glow)' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-medium tracking-wide" style={{ color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" style={{ color: 'var(--primary)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
