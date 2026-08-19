import { memo } from 'react';
import { Sparkles, Compass, Target, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';

function OutcomeCards({
  title = 'What You Get',
  subtitle = 'Strategic Clarity and Measurable Business Impact',
  outcomes = [
    { title: 'Clarity', desc: 'Deep diagnostic understanding of your current baseline, hidden risks, and untapped opportunities.' },
    { title: 'Priorities', desc: 'Objective ranking of transformation initiatives based on strategic impact and feasibility.' },
    { title: 'Direction', desc: 'An actionable, phased blueprint aligning executive vision with frontline sprint execution.' },
    { title: 'Sustained Value', desc: 'Institutionalized capabilities and continuous governance that ensure gains compound indefinitely.' }
  ]
}) {
  const icons = [Compass, Target, TrendingUp, ShieldCheck];

  return (
    <section className="py-16 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest block mb-2">
            Advisory Deliverables
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-400 text-sm mt-2">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(OutcomeCards);
