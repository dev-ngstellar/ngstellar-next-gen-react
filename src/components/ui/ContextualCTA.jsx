import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

function ContextualCTA({
  eyebrow = 'Next Steps in Transformation',
  heading = 'Ready to Realign Your Business Operations?',
  description = 'Connect with our senior advisory team to explore how our transformation and sustainability frameworks can be tailored to your strategic priorities.',
  primaryCta = { label: 'Start a Transformation Conversation', href: '/contact' },
  secondaryCta = { label: 'Request a Health Check', href: '/transformation-health-check' },
  accent = 'primary', // 'primary' | 'emerald'
}) {
  const gradient =
    accent === 'emerald'
      ? 'from-emerald-950/90 via-slate-900/95 to-slate-950/95 border-emerald-500/30'
      : 'from-primary-950/90 via-slate-900/95 to-slate-950/95 border-primary-500/30';

  const btnGrad =
    accent === 'emerald'
      ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-primary-600 shadow-emerald-600/30'
      : 'bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 shadow-primary-600/30';

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-b ${gradient} border shadow-2xl text-center relative overflow-hidden backdrop-blur-xl`}>
          {eyebrow && (
            <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest block mb-3">
              {eyebrow}
            </span>
          )}

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight max-w-3xl mx-auto">
            {heading}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {primaryCta && (
              <Link
                to={primaryCta.href}
                className={`inline-flex items-center justify-center gap-2 rounded-full ${btnGrad} px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl transition-all hover:brightness-110 hover:scale-105 active:scale-95`}
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            )}

            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/12 px-6 py-4 text-sm font-semibold text-slate-200 hover:text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                <span>{secondaryCta.label}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ContextualCTA);
