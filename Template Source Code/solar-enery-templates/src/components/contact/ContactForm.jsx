import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '../common/Button';
import { servicesData } from '../../data/services';

export const ContactForm = () => {
  const location = useLocation();
  const initialService = location.state?.selectedService || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    message: ''
  });

  useEffect(() => {
    if (location.state?.selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: location.state.selectedService
      }));
    }
  }, [location.state]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a solar service';
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your project';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate static form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-orange-200 shadow-xl text-center space-y-6 animate-in fade-in-50 duration-300">
        <div className="w-16 h-16 rounded-full bg-orange-100 text-[#f0771a] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">Thank You for Reaching Out!</h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
            Your solar consultation request has been received. One of our certified clean energy specialists will contact you within 24 hours.
          </p>
        </div>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          size="md"
          icon={RefreshCw}
          iconPosition="left"
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-6">
      <div className="space-y-1 border-b border-slate-100 pb-4">
        <h3 className="text-2xl font-bold text-slate-900">Request a Free Solar Quote</h3>
        <p className="text-sm text-slate-500">Fill out your details below and our team will prepare a custom solar ROI assessment.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Full Name <span className="text-[#f0771a]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.name ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-[#f0771a] focus:bg-white'
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Email Address <span className="text-[#f0771a]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.email ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-[#f0771a] focus:bg-white'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Phone Number <span className="text-[#f0771a]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.phone ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-[#f0771a] focus:bg-white'
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Service Selection */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Solar Service Needed <span className="text-[#f0771a]">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.service ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-[#f0771a] focus:bg-white'
            }`}
          >
            <option value="">Select a Service</option>
            {servicesData.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
            <option value="General Inquiry">General Solar Consultation</option>
          </select>
          {errors.service && (
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.service}</span>
            </p>
          )}
        </div>
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
          Project Details / Property Info <span className="text-[#f0771a]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your property, current monthly power bill, roof type, or energy goals..."
          className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
            errors.message ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-[#f0771a] focus:bg-white'
          }`}
        ></textarea>
        {errors.message && (
          <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        icon={Send}
        className="w-full justify-center"
      >
        {isSubmitting ? 'Submitting Request...' : 'Send Solar Consultation Request'}
      </Button>

      <p className="text-xs text-slate-400 text-center">
        🔒 We value your privacy. Your information will never be shared with third parties.
      </p>
    </form>
  );
};
