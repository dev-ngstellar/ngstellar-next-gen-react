import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) { return twMerge(clsx(inputs)); }

const NewsCard = ({ 
  article, 
  variant = 'default', 
  className 
}) => {
  // Variants: 'default' (vertical standard), 'featured' (large hero), 'horizontal' (list view), 'compact' (sidebar)
  
  if (variant === 'featured') {
    return (
      <Link to={`/article/${article.slug || 'slug'}`} className={cn("group relative block rounded-2xl overflow-hidden premium-card h-[400px] md:h-[500px]", className)}>
        <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
          <div className="mb-4">
            <span className="bg-[var(--color-accent-500)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-[var(--color-primary-200)] transition-colors text-balance">
            {article.title}
          </h2>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span className="font-medium text-white">{article.author}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {article.readTime} min read</span>
            <span className="hidden sm:inline">• {article.date}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link to={`/article/${article.slug || 'slug'}`} className={cn("group flex flex-col sm:flex-row gap-6 p-4 rounded-xl hover:bg-[var(--color-bg-secondary)] transition-colors border border-transparent hover:border-[var(--color-border)]", className)}>
        <div className="sm:w-1/3 relative rounded-xl overflow-hidden shrink-0 aspect-video sm:aspect-auto">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="sm:w-2/3 flex flex-col justify-center">
          <div className="text-[var(--color-primary-600)] dark:text-[var(--color-primary-400)] text-xs font-bold uppercase tracking-wider mb-2">{article.category}</div>
          <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary-600)] transition-colors leading-snug">
            {article.title}
          </h3>
          <p className="text-[var(--color-text-muted)] text-sm mb-4 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center justify-between mt-auto text-xs text-[var(--color-text-muted)] font-medium">
            <div className="flex items-center gap-3">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <Bookmark className="w-4 h-4 hover:text-[var(--color-primary-600)]" />
              <Share2 className="w-4 h-4 hover:text-[var(--color-primary-600)]" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/article/${article.slug || 'slug'}`} className={cn("group flex gap-4", className)}>
        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 relative">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-[var(--color-bg)] flex items-center justify-center text-xs font-bold shadow-sm">{article.index || 1}</div>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary-600)] transition-colors leading-snug line-clamp-2 mb-2">
            {article.title}
          </h4>
          <div className="text-xs text-[var(--color-text-muted)] mt-auto flex items-center gap-2">
            <span className="text-[var(--color-primary-600)] font-semibold">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default Vertical
  return (
    <Link to={`/article/${article.slug || 'slug'}`} className={cn("group flex flex-col bg-[var(--color-bg)] rounded-xl overflow-hidden hover:shadow-[var(--card-shadow)] border border-transparent hover:border-[var(--color-border)] transition-all", className)}>
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 dark:bg-black/80 backdrop-blur-sm text-[var(--color-text)] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow border border-t-0 border-transparent group-hover:border-[var(--color-border)] rounded-b-xl transition-colors">
        <h3 className="font-serif text-lg font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary-600)] transition-colors leading-snug line-clamp-3">
          {article.title}
        </h3>
        <p className="text-[var(--color-text-muted)] text-sm mb-4 line-clamp-2 flex-grow">{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] font-medium pt-4 border-t border-[var(--color-border)] mt-auto">
          <span className="font-semibold text-[var(--color-text)]">{article.author}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {article.date}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
