import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronRight, CheckCircle2, Sparkles, Shield, Compass, TrendingUp, Layers } from 'lucide-react';
import { NAV_ITEMS } from '../components/navigation/navData';

export default function AdvisoryPage() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Find matching menu item or category or sub-item
  let section = null;
  let subItem = null;
  let pageTitle = '';
  let pageDescription = '';
  let categoryName = '';

  for (const item of NAV_ITEMS) {
    if (item.href === currentPath) {
      section = item;
      pageTitle = item.label;
      pageDescription = item.tagline || 'Strategic transformation and advisory solutions designed for sustainable growth.';
      break;
    }

    if (item.items) {
      const match = item.items.find((sub) => sub.href === currentPath);
      if (match) {
        section = item;
        subItem = match;
        pageTitle = match.title;
        pageDescription = match.description;
        categoryName = item.label;
        break;
      }
    }

    if (item.categories) {
      for (const cat of item.categories) {
        if (cat.href === currentPath) {
          section = item;
          pageTitle = cat.category;
          pageDescription = `Comprehensive ${cat.category.toLowerCase()} capabilities designed to accelerate organizational transformation.`;
          categoryName = item.label;
          break;
        }
        const match = cat.links?.find((l) => l.href === currentPath);
        if (match) {
          section = item;
          subItem = match;
          pageTitle = match.title;
          pageDescription = `High-impact ${match.title} services combining strategy, execution, and technological excellence.`;
          categoryName = cat.category;
          break;
        }
      }
      if (pageTitle) break;
    }

    if (item.stages) {
      const match = item.stages.find((s) => s.href === currentPath);
      if (match) {
        section = item;
        subItem = match;
        pageTitle = `Stage ${match.step}: ${match.title}`;
        pageDescription = match.description;
        categoryName = 'OUR APPROACH';
        break;
      }
    }

    if (item.ctaOptions) {
      const match = item.ctaOptions.find((c) => c.href === currentPath);
      if (match) {
        section = item;
        subItem = match;
        pageTitle = match.title;
        pageDescription = match.description;
        categoryName = 'CONTACT';
        break;
      }
    }
  }

  // Fallback if not specifically found in the structured tree
  if (!pageTitle) {
    const segments = currentPath.split('/').filter(Boolean);
    pageTitle = segments.map((s) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())).join(' — ');
    pageDescription = 'Strategic consulting, technology enablement, and sustainable advisory services.';
  }

  return (
    <div className="min-h-screen text-slate-100 pb-20">
      <Helmet>
        <title>{pageTitle} | NG Stellar Advisory</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-secondary-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link to="/" className="hover:text-primary-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            {categoryName && (
              <>
                <span className="text-slate-400">{categoryName}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              </>
            )}
            <span className="text-primary-300 font-semibold">{pageTitle}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-bold text-primary-300 uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
            <span>NG Stellar Strategic Advisory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-6">
            {pageTitle}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            {pageDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 text-white font-bold text-sm shadow-xl shadow-primary-700/30 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Start a Transformation Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/transformation-health-check"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/12 text-slate-200 hover:text-white font-semibold text-sm transition-colors"
            >
              <span>Take Health Check</span>
              <Shield className="w-4 h-4 text-primary-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Pillars & Highlights */}
      <section className="py-16 border-t border-white/10 bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-primary-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Strategic Clarity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Evidence-based frameworks and market benchmarking to pinpoint high-return transformation priorities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-secondary-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-secondary-500/20 text-secondary-300 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Execution Excellence</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Seamless translation of high-level roadmaps into agile, cross-functional sprints and tangible business outcomes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sustainable Impact</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Institutionalizing capabilities, governance, and operating models that ensure long-term resilience and value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Check Callout Banner */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary-950/90 via-slate-900/95 to-secondary-950/90 border border-primary-500/30 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-xs font-bold text-secondary-400 uppercase tracking-wider mb-2 block">
                  Complimentary Assessment
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Benchmark Your Transformation Readiness
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Evaluate your organization across business, talent, operational, and technological dimensions with the NG Stellar Transformation Health Check.
                </p>
              </div>

              <Link
                to="/transformation-health-check"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm shadow-xl hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all flex-shrink-0"
              >
                <span>Start Health Check</span>
                <ArrowRight className="w-4 h-4 text-primary-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
