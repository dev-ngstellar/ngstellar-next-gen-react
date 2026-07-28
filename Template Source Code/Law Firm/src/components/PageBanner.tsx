import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export const PageBanner: React.FC<Props> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div className="relative pt-32 pb-20 bg-[var(--color-primary-dark)] text-white overflow-hidden border-b border-[var(--color-border)]">
      {/* Background Graphic elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-90" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D4A34B]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Links */}
        <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-6 uppercase tracking-widest font-semibold">
          <Link to="/" className="hover:text-[#D4A34B] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-[#D4A34B]" />
              {item.path ? (
                <Link to={item.path} className="hover:text-[#D4A34B] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#D4A34B]">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Banner Title */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl font-sans leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
