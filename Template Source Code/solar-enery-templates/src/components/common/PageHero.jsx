import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from './Container';

export const PageHero = ({ title, highlightText, plainTitle, description, badge = 'Solarix Solutions' }) => {
  return (
    <div className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 opacity-20 hero-gradient"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm text-[#f0771a] font-medium mb-4">
            <Link to="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-500" />
            <span className="text-slate-300">{plainTitle || (typeof title === 'string' ? title : 'Page')}</span>
          </nav>

          {/* Badge */}
          {badge && (
            <span className="inline-block px-3.5 py-1.5 bg-amber-950/80 text-[#f0771a] text-xs font-semibold uppercase tracking-wider rounded-full border border-amber-800/50 mb-4">
              {badge}
            </span>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            {title}{highlightText && (
              <>
                {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0771a] via-amber-400 to-amber-300">
                  {highlightText}
                </span>
              </>
            )}
          </h1>

          {description && (
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};
