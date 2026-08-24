import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

function PremiumPageHero({
  eyebrow,
  title,
  titleHighlight,
  tagline,
  description,
  breadcrumbs = [],
  primaryCta = { label: 'Start a Transformation Conversation', href: '/contact' },
  secondaryCta = null,
  visualElement = null,
  accentColor = 'primary', // 'primary' (blue), 'emerald' (green), 'secondary' (teal/lime)
}) {
  const accentGlow =
    accentColor === 'emerald'
      ? 'bg-emerald-600/15'
      : accentColor === 'secondary'
      ? 'bg-teal-600/15'
      : 'bg-primary-600/15';

  const badgeBorder =
    accentColor === 'emerald'
      ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300'
      : 'bg-primary-500/10 border-primary-500/25 text-primary-300';

  return (
    <section className="relative pt-[32px] sm:pt-[40px] lg:pt-[48px] pb-12 md:pb-16 overflow-hidden">
      {/* Precision ambient background glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] ${accentGlow} blur-[140px] rounded-full pointer-events-none -z-10`} />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-secondary-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-15 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Bar */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-5 flex-wrap">
            {breadcrumbs.map((b, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-600" />}
                {b.url && idx < breadcrumbs.length - 1 ? (
                  <Link to={b.url} className="hover:text-primary-300 transition-colors">
                    {b.name}
                  </Link>
                ) : (
                  <span className="text-primary-300 font-semibold">{b.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Hero Grid: Left Content + Right Strategic Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className={visualElement ? 'lg:col-span-7' : 'lg:col-span-10'}>
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-6 ${badgeBorder}`}
              >
                <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
                <span>{eyebrow}</span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] mb-5"
            >
              {title}{' '}
              {titleHighlight && (
                <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-emerald-300 bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
              )}
            </motion.h1>

            {tagline && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-primary-300 via-secondary-300 to-emerald-300 bg-clip-text text-transparent mb-5"
              >
                {tagline}
              </motion.div>
            )}

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
              >
                {description}
              </motion.p>
            )}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              {primaryCta && (
                <Link
                  to={primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-primary-600/30 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/12 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{secondaryCta.label}</span>
                  {secondaryCta.icon && <secondaryCta.icon className="w-4 h-4 text-primary-400" />}
                </Link>
              )}
            </motion.div>
          </div>

          {/* Right Visual Element */}
          {visualElement && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              {visualElement}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(PremiumPageHero);
