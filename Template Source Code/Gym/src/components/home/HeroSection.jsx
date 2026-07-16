import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, Play, Users, TrendingUp, Clock } from 'lucide-react';
import { heroStats } from '../../utils/data';
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

const statIcons = [Users, TrendingUp, Clock];

export default function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title word-by-word reveal
      const words = titleRef.current?.querySelectorAll('.hero-word');
      if (words) {
        gsap.fromTo(words,
          { y: 120, opacity: 0, skewY: 6 },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            stagger: 0.08,
            duration: 1,
            ease: 'power4.out',
            delay: 0.3,
          }
        );
      }

      // Parallax on mouse move
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 30;
        const y = (clientY / window.innerHeight - 0.5) * 20;
        if (bgRef.current) {
          gsap.to(bgRef.current, {
            x: x,
            y: y,
            duration: 1.5,
            ease: 'power2.out',
          });
        }
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const heroWords = ['BUILD', 'YOUR', 'STRONGEST', 'VERSION'];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--secondary)' }}
    >
      {/* Background Elements */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'var(--primary)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
          style={{ background: 'var(--accent)' }}
        />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Athlete Image (Right) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block">
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80"
            alt="Elite athlete"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ objectPosition: 'center top' }}
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, var(--secondary) 0%, rgba(11,18,32,0.7) 40%, rgba(11,18,32,0.1) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, var(--secondary) 0%, transparent 40%)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-label">
              🔥 Premium Fitness Experience
            </span>
          </motion.div>

          {/* Main Title */}
          <div ref={titleRef} className="overflow-hidden mt-4 mb-6">
            <div className="flex flex-wrap gap-x-6">
              {heroWords.map((word, i) => (
                <span
                  key={i}
                  className="hero-word block font-display text-white opacity-0"
                  style={{
                    fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                    lineHeight: 0.9,
                    color: i === 2 ? 'var(--primary)' : 'white',
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg mb-10 max-w-xl"
            style={{ color: 'var(--text-muted)' }}
          >
            Transform your body and mind with world-class training, expert nutrition coaching, and a community that pushes you beyond limits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link to="/membership">
              <button className="btn-primary text-base py-4 px-8">
                <span>Start Training</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </button>
            </Link>
            <button
              className="btn-outline text-base py-4 px-8 flex items-center gap-3"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'var(--primary)' }}
              >
                <Play className="w-3 h-3 text-white ml-0.5" fill="white" />
              </div>
              Watch Story
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-8"
          >
            {heroStats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--glow-soft)', border: '1px solid var(--primary)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <div className="font-display text-2xl text-white leading-none" style={{ color: 'var(--primary)' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Floating Cards — desktop only */}
        <div className="hidden xl:block">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="absolute right-[10%] top-1/3 glass-strong rounded-2xl p-4 animate-float"
            style={{ zIndex: 20 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--primary)' }}>
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">+127%</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Avg. Strength Gain</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute right-[22%] bottom-[25%] glass-strong rounded-2xl p-4 animate-float-delay"
            style={{ zIndex: 20 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=60&q=80',
                  'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=60&q=80',
                  'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=60&q=80',
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white/20 object-cover" />
                ))}
              </div>
              <div>
                <div className="text-white font-bold text-sm">500+ Members</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Training Daily</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Scroll</span>
        <div className="w-0.5 h-12 overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <motion.div
            className="w-full"
            style={{ background: 'var(--primary)', height: '40%' }}
            animate={{ y: ['-100%', '300%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
