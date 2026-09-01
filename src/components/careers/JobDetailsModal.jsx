import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  Clock,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function JobDetailsModal({ job, isOpen, onClose, onApply }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Lock background scrolling and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    // Prevent background page from scrolling behind modal
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Focus close button for accessibility
    const timer = setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    }, 100);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!job) return null;

  const Icon = job.icon || Briefcase;

  const handleApplyClick = () => {
    onClose();
    if (onApply) {
      onApply(job.selectValue || job.title);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[950] flex items-center justify-center pt-[76px] sm:pt-[84px] lg:pt-[94px] pb-4 sm:pb-6 px-3 sm:px-6 lg:px-8 overflow-hidden pointer-events-auto">
          {/* Subtle Dimmed Backdrop (Navbar at z-[1000] stays completely visible and usable above) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm -z-10 cursor-pointer"
          />

          {/* Wide Centered Modal Dialog */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="job-modal-title"
            aria-describedby="job-modal-description"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[95vw] sm:w-[92vw] lg:w-[88vw] max-w-[1400px] max-h-[calc(100vh-90px)] sm:max-h-[calc(100vh-105px)] lg:max-h-[calc(100vh-120px)] flex flex-col rounded-3xl bg-slate-900/95 border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden my-auto"
          >
            {/* 1. STICKY HEADER */}
            <div className="sticky top-0 z-20 border-b border-white/10 px-6 sm:px-8 lg:px-10 py-5 sm:py-6 bg-slate-900/95 backdrop-blur-xl flex items-center justify-between gap-4 flex-shrink-0">
              <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${job.accentColor || 'text-primary-400'}`} />
                </div>
                <div className="min-w-0">
                  <h2
                    id="job-modal-title"
                    className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight truncate leading-tight"
                  >
                    {job.title}
                  </h2>
                  <p className={`text-xs sm:text-sm font-semibold ${job.accentColor || 'text-primary-400'} mt-0.5 mb-2 truncate`}>
                    {job.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 font-medium">
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{job.location}</span>
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{job.experience}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Button (X) - 44px easy-click touch target */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close job details"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary-400 cursor-pointer flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 2. SCROLLABLE BODY (TWO-COLUMN DESKTOP LAYOUT) */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 lg:px-10 py-6 sm:py-8 space-y-8 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                {/* LEFT COLUMN: About, Responsibilities, Required Skills, Preferred Skills (lg:col-span-7) */}
                <div className="lg:col-span-7 space-y-7">
                  {/* About the Role */}
                  <div id="job-modal-description">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary-400 mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>About the Role</span>
                    </h3>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {job.fullDescription || job.shortDescription}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  {job.responsibilities && job.responsibilities.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3.5">
                        Responsibilities
                      </h3>
                      <div className="space-y-3">
                        {job.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className={`w-4 h-4 ${job.accentColor || 'text-primary-400'} flex-shrink-0 mt-0.5`} />
                            <span className="leading-relaxed">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Required Skills */}
                  {job.skills && job.skills.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                        Required Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-white/10 text-slate-200 font-medium shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Preferred Skills */}
                  {job.preferredSkills && job.preferredSkills.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Preferred & Bonus Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {job.preferredSkills.map((pskill) => (
                          <span
                            key={pskill}
                            className="text-xs px-3.5 py-1.5 rounded-xl bg-primary-950/60 border border-primary-500/25 text-primary-300 font-medium"
                          >
                            + {pskill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT COLUMN: Experience, Qualifications, What You'll Do, Location & Mode (lg:col-span-5) */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Experience & Qualifications Cards */}
                  <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 shadow-md">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-400 mb-2">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span>Experience</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">{job.experience}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 shadow-md">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary-400 mb-2">
                      <GraduationCap className="w-4 h-4 text-secondary-400" />
                      <span>Qualifications</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">{job.qualifications}</p>
                  </div>

                  {/* What You'll Do & Key Impact Areas */}
                  {job.impactAreas && job.impactAreas.length > 0 && (
                    <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 shadow-md">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                        <Award className={`w-4 h-4 ${job.accentColor || 'text-primary-400'}`} />
                        <span>What You&apos;ll Do & Key Impact</span>
                      </h3>
                      <div className="space-y-2.5">
                        {job.impactAreas.map((impact, i) => (
                          <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-white/5 text-xs text-slate-300 flex items-start gap-2.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${job.accentColor ? 'bg-current' : 'bg-primary-400'} flex-shrink-0 mt-1.5`} />
                            <span className="leading-snug">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Location & Work Mode Card */}
                  <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 shadow-md">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      <span>Location & Work Mode</span>
                    </div>
                    <div className="space-y-1 text-xs sm:text-sm text-slate-300">
                      <div><strong className="text-white">Location:</strong> {job.location}</div>
                      <div><strong className="text-white">Employment Type:</strong> {job.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. STICKY FOOTER CTA */}
            <div className="sticky bottom-0 z-20 border-t border-white/10 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-slate-900/95 backdrop-blur-xl flex items-center justify-between gap-4 flex-shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-white/10 transition-all cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={handleApplyClick}
                className="py-3 px-8 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 hover:brightness-110 shadow-lg shadow-primary-600/30 transition-all flex items-center gap-2 group/btn cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
