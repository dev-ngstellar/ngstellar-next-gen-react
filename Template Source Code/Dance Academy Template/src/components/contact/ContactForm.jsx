import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';
import { CheckCircle2, Send, AlertCircle, Loader2 } from 'lucide-react';
import { classesData } from '../../data/classes';
import { contactConfig } from '../../data/contact';
import { validateContactForm } from '../../utils/validation';

export default function ContactForm() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    ageGroup: 'Kids (4-7)',
    danceStyle: 'Ballet',
    experienceLevel: 'Beginner',
    preferredClass: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryClassParam = searchParams.get('class');
    const stateClass = location.state?.classId || location.state?.className || queryClassParam;

    if (stateClass) {
      // Find matching class from centralized classesData by id or title
      const foundClass = classesData.find(
        c => c.id.toLowerCase() === stateClass.toLowerCase() ||
             c.title.toLowerCase() === stateClass.toLowerCase() ||
             c.id.replace(/-/g, '') === stateClass.toLowerCase().replace(/-/g, '')
      );
      
      const targetId = foundClass ? foundClass.id : stateClass;

      setFormData(prev => ({
        ...prev,
        preferredClass: targetId,
        danceStyle: foundClass ? foundClass.title : (prev.danceStyle || 'Ballet')
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        preferredClass: ''
      }));
    }

    // Scroll directly to contact form if navigated via CTA state or query param
    if (queryClassParam || location.state?.scrollToForm || location.hash === '#enquiry-form' || location.hash === '#contact-form') {
      const el = document.getElementById('enquiry-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const validationErrors = validateContactForm(formData);
    if (validationErrors[name]) {
      setErrors(prev => ({ ...prev, [name]: validationErrors[name] }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    if (touched[name] || errors[name]) {
      const validationErrors = validateContactForm(updatedForm);
      setErrors(prev => ({
        ...prev,
        [name]: validationErrors[name] || ''
      }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({
        fullName: true,
        email: true,
        phone: true,
        preferredClass: true,
        message: true
      });

      // Focus first field with error
      const firstErrorKey = Object.keys(validationErrors)[0];
      const targetEl = document.getElementById(firstErrorKey);
      if (targetEl) {
        targetEl.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setErrors({});

    try {
      const payload = {
        recipient_email: contactConfig.recipientEmail,
        subject: contactConfig.subject,
        access_key: contactConfig.apiKey,
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        age_group: formData.ageGroup,
        dance_style: formData.danceStyle,
        experience_level: formData.experienceLevel,
        preferred_class: formData.preferredClass || 'General Inquiry',
        message: formData.message.trim()
      };

      if (contactConfig.apiEndpoint) {
        const response = await fetch(contactConfig.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }
      } else {
        // Fallback simulation for template demo mode
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setIsSubmitted(true);
      setTouched({});
    } catch (err) {
      setSubmitError('Unable to send your message right now. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#101214] relative overflow-hidden" id="enquiry-form">
      <Container>
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-[#1B1B1D] border border-[#282523] shadow-2xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C99683] bg-[#C99683]/10 px-4 py-1.5 rounded-full border border-[#C99683]/30 inline-block mb-3">
              GET STARTED
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4F0] tracking-tight">
              Start Your Dance Journey
            </h2>
            <p className="mt-2 text-sm text-[#A39E98] font-light">
              Fill out the form below to reserve a spot or ask us any question.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 sm:p-12 rounded-2xl bg-[#101214] border border-[#C99683]/50 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#C99683]/20 text-[#C99683] border border-[#C99683]/40 flex items-center justify-center mx-auto shadow-lg shadow-[#C99683]/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#F7F4F0]">Enquiry Submitted!</h3>
                <p className="text-base text-[#A39E98] max-w-lg mx-auto leading-relaxed font-light">
                  Thank you! Your enquiry has been received. We'll get back to you shortly.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    ageGroup: 'Kids (4-7)',
                    danceStyle: 'Ballet',
                    experienceLevel: 'Beginner',
                    preferredClass: '',
                    message: ''
                  });
                  setErrors({});
                  setTouched({});
                }}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#151719] text-[#F7F4F0] hover:bg-[#C99683] hover:text-[#101214] border border-[#282523] transition-all cursor-pointer"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#F7F4F0]">
                    Full Name <span className="text-[#C99683]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Sarah Jenkins"
                    aria-invalid={errors.fullName ? 'true' : 'false'}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#101214] border ${
                      errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-[#282523] focus:border-[#C99683]'
                    } text-[#F7F4F0] placeholder-[#A39E98]/50 focus:outline-none focus:ring-2 focus:ring-[#C99683]/50 text-sm transition-all`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#F7F4F0]">
                    Email Address <span className="text-[#C99683]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. sarah@example.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#101214] border ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-[#282523] focus:border-[#C99683]'
                    } text-[#F7F4F0] placeholder-[#A39E98]/50 focus:outline-none focus:ring-2 focus:ring-[#C99683]/50 text-sm transition-all`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#F7F4F0]">
                    Phone Number <span className="text-[#C99683]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. +1 (555) 000-0000"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#101214] border ${
                      errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-[#282523] focus:border-[#C99683]'
                    } text-[#F7F4F0] placeholder-[#A39E98]/50 focus:outline-none focus:ring-2 focus:ring-[#C99683]/50 text-sm transition-all`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Age Group */}
                <div className="space-y-2">
                  <label htmlFor="ageGroup" className="block text-xs font-semibold uppercase tracking-wider text-[#F7F4F0]">
                    Age Group
                  </label>
                  <select
                    id="ageGroup"
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#101214] border border-[#282523] text-[#F7F4F0] focus:outline-none focus:border-[#C99683] focus:ring-2 focus:ring-[#C99683]/50 text-sm transition-all"
                  >
                    <option value="Kids (4-7)">Kids (4–7 years)</option>
                    <option value="Youth (8-12)">Youth (8–12 years)</option>
                    <option value="Teens (13-17)">Teens (13–17 years)</option>
                    <option value="Adults (18+)">Adults (18+ years)</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Dance Style */}
                <div className="space-y-2">
                  <label htmlFor="danceStyle" className="block text-xs font-semibold uppercase tracking-wider text-[#F7F4F0]">
                    Dance Style
                  </label>
                  <select
                    id="danceStyle"
                    name="danceStyle"
                    value={formData.danceStyle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#101214] border border-[#282523] text-[#F7F4F0] focus:outline-none focus:border-[#C99683] focus:ring-2 focus:ring-[#C99683]/50 text-sm transition-all"
                  >
                    {classesData.map(c => (
                      <option key={c.id} value={c.title}>{c.title}</option>
                    ))}
                  </select>
                </div>

                {/* Experience Level */}
                <div className="space-y-2">
                  <label htmlFor="experienceLevel" className="block text-xs font-semibold uppercase tracking-wider text-[#F7F4F0]">
                    Experience Level
                  </label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#101214] border border-[#282523] text-[#F7F4F0] focus:outline-none focus:border-[#C99683] focus:ring-2 focus:ring-[#C99683]/50 text-sm transition-all"
                  >
                    <option value="Beginner">Beginner (No experience)</option>
                    <option value="Intermediate">Intermediate (1-3 years)</option>
                    <option value="Advanced">Advanced (4+ years)</option>
                  </select>
                </div>

                {/* Preferred Class / Program */}
                <div className="space-y-2">
                  <label htmlFor="preferredClass" className="block text-xs font-semibold uppercase tracking-wider text-[#F7F4F0]">
                    Class / Program <span className="text-[#C99683]">*</span>
                  </label>
                  <select
                    id="preferredClass"
                    name="preferredClass"
                    value={formData.preferredClass}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={errors.preferredClass ? 'true' : 'false'}
                    aria-describedby={errors.preferredClass ? 'preferredClass-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#101214] border ${
                      errors.preferredClass ? 'border-rose-500 focus:ring-rose-500' : 'border-[#282523] focus:border-[#C99683]'
                    } text-[#F7F4F0] focus:outline-none focus:ring-2 focus:ring-[#C99683]/50 text-sm transition-all`}
                  >
                    <option value="">Select a class</option>
                    {classesData.map(c => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                  {errors.preferredClass && (
                    <p id="preferredClass-error" className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.preferredClass}
                    </p>
                  )}
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#F7F4F0]">
                  Message <span className="text-[#C99683]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your goals or ask any question..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-[#101214] border ${
                    errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-[#282523] focus:border-[#C99683]'
                  } text-[#F7F4F0] placeholder-[#A39E98]/50 focus:outline-none focus:ring-2 focus:ring-[#C99683]/50 text-sm transition-all`}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Error Banner */}
              {submitError && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>

            </form>
          )}

        </div>
      </Container>
    </section>
  );
}
