import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

function RelatedContent({
  title = 'Continue Exploring',
  subtitle = 'Discover related advisory practices, diagnostic tools, and capabilities.',
  links = []
}) {
  if (!links || links.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/10 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {title}
            </h2>
            {subtitle && <p className="text-xs sm:text-sm text-slate-400 mt-1">{subtitle}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-primary-500/40 hover:bg-white/[0.06] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest block mb-1">
                  {item.category || 'Capability'}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-primary-300 transition-colors mb-2">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>

              <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-xs font-bold text-primary-400 group-hover:text-primary-300">
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(RelatedContent);
