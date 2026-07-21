import React from 'react';
import { MapPin, Clock, DollarSign, Bookmark, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from './Badge';
import Button from './Button';

const JobCard = ({ job, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <div className="glass-card p-6 md:p-8 rounded-3xl hover-lift group relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-primary-500)]/20 to-transparent rounded-bl-full pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
              {job.logo ? (
                <img src={job.logo} alt={job.company} className="w-10 h-10 object-contain rounded-lg" />
              ) : (
                <Briefcase className="w-8 h-8 text-[var(--color-primary-500)]" />
              )}
            </div>
            <div>
              <Link to={`/job/${job.id}`} className="font-serif font-bold text-xl hover:text-[var(--color-primary-500)] transition-colors line-clamp-1">{job.title}</Link>
              <div className="text-[var(--color-text-muted)] text-sm mt-1">{job.company}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {job.tags?.slice(0, 2).map((tag, idx) => (
              <Badge key={idx} variant="primary">{tag}</Badge>
            ))}
            {job.featured && <Badge variant="glow">Featured</Badge>}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <MapPin className="w-4 h-4 text-[var(--color-primary-500)]" /> {job.location}
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <DollarSign className="w-4 h-4 text-[var(--color-primary-500)]" /> {job.salary}
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Clock className="w-4 h-4 text-[var(--color-primary-500)]" /> {job.type}
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Briefcase className="w-4 h-4 text-[var(--color-primary-500)]" /> {job.experience}
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
          <span className="text-xs text-[var(--color-text-muted)] font-medium">Posted {job.postedAt}</span>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-xl bg-[var(--color-bg-secondary)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary-500)] hover:bg-[var(--color-primary-50)] dark:hover:bg-[var(--color-primary-900)]/30 transition-colors">
              <Bookmark className="w-4 h-4" />
            </button>
            <Button variant="primary" icon={ArrowRight} iconPosition="right">Apply Now</Button>
          </div>
        </div>
      </div>
    );
  }

  // Default Variant
  return (
    <div className="bg-[var(--color-bg)] border border-[var(--color-border)] p-6 rounded-2xl hover-lift group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
          {job.logo ? (
            <img src={job.logo} alt={job.company} className="w-8 h-8 object-contain rounded-lg" />
          ) : (
            <Briefcase className="w-6 h-6 text-[var(--color-text-muted)]" />
          )}
        </div>
        <button className="text-[var(--color-text-muted)] hover:text-[var(--color-primary-500)] transition-colors">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4">
        <div className="text-[var(--color-text-muted)] text-xs font-bold uppercase tracking-wider mb-1">{job.company}</div>
        <Link to={`/job/${job.id}`} className="font-serif font-bold text-lg hover:text-[var(--color-primary-500)] transition-colors line-clamp-2 leading-snug">{job.title}</Link>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
          <MapPin className="w-4 h-4 shrink-0" /> <span className="truncate">{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
          <DollarSign className="w-4 h-4 shrink-0" /> {job.salary}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {job.type && <Badge variant="secondary">{job.type}</Badge>}
        </div>
        <span className="text-xs text-[var(--color-text-muted)]">{job.postedAt}</span>
      </div>
    </div>
  );
};

export default JobCard;
