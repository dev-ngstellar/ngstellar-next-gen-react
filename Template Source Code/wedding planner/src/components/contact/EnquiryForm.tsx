import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { formConfig } from '../../config/formConfig';
import { getFormServicesFromUrlParam } from '../../config/serviceMapping';
import { ScrollReveal } from '../common/ScrollReveal';

export const EnquiryForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    weddingDate: '',
    location: '',
    guestCount: '',
    weddingType: 'Luxury Wedding',
    budgetRange: '₹10–25 Lakhs',
    services: [] as string[],
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; phone?: string }>({});

  const { recipientEmail, successMessage } = formConfig;

  useEffect(() => {
    if (preselectedService) {
      const mappedServices = getFormServicesFromUrlParam(preselectedService);
      if (mappedServices.length > 0) {
        setFormData((prev) => ({
          ...prev,
          services: mappedServices,
        }));
      }
    }
  }, [preselectedService]);

  const weddingTypes = [
    'Traditional Wedding',
    'Destination Wedding',
    'Luxury Wedding',
    'Intimate Wedding',
    'Reception',
    'Engagement',
    'Other',
  ];

  const budgetOptions = [
    'Under ₹5 Lakhs',
    '₹5–10 Lakhs',
    '₹10–25 Lakhs',
    '₹25–50 Lakhs',
    '₹50 Lakhs+',
  ];

  const serviceOptions = [
    'Wedding Planning',
    'Wedding Décor',
    'Destination Wedding',
    'Venue Management',
    'Photography',
    'Entertainment',
    'Full Wedding Package',
  ];

  const handleCheckboxChange = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, services: [...prev.services, serviceName] };
      }
    });
  };

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    if (name === 'fullName') {
      if (!value.trim()) {
        newErrors.fullName = 'Full name is required.';
      } else {
        delete newErrors.fullName;
      }
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        newErrors.email = 'Please enter a valid email address.';
      } else if (!emailRegex.test(value.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      } else {
        delete newErrors.email;
      }
    }

    if (name === 'phone') {
      const phoneRegex = /^\+?[0-9\s\-]{8,15}$/;
      if (!value.trim()) {
        newErrors.phone = 'Please enter a valid phone number.';
      } else if (!phoneRegex.test(value.trim())) {
        newErrors.phone = 'Please enter a valid phone number.';
      } else {
        delete newErrors.phone;
      }
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors: { fullName?: string; email?: string; phone?: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const phoneRegex = /^\+?[0-9\s\-]{8,15}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitEnquiry = async (payload: typeof formData & { recipient: string }) => {
    console.log("Submitting enquiry to config recipient:", payload.recipient, payload);
    setIsSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const payload = {
        ...formData,
        recipient: recipientEmail,
      };
      submitEnquiry(payload);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      weddingDate: '',
      location: '',
      guestCount: '',
      weddingType: 'Luxury Wedding',
      budgetRange: '₹10–25 Lakhs',
      services: [],
      notes: '',
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <ScrollReveal animation="fade-up">
        <div className="bg-surface border border-accent/40 p-8 sm:p-14 text-center shadow-card space-y-6">
          <div className="w-16 h-16 bg-accent/15 text-accent rounded-full flex items-center justify-center mx-auto border border-accent/40">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-extrabold text-2xl sm:text-4xl text-text">
            Enquiry Received!
          </h3>
          <p className="text-base text-mutedText font-light max-w-md mx-auto leading-relaxed">
            {successMessage}
          </p>
          <div className="pt-4">
            <Button variant="outline" onClick={resetForm}>
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal animation="fade-up">
      <form
        id="enquiry-form"
        onSubmit={handleSubmit}
        className="scroll-mt-28 bg-surface border border-accent/30 p-8 sm:p-12 shadow-card space-y-8"
      >
        <div className="border-b border-accent/20 pb-6">
          <div className="flex items-center gap-2 text-accent text-xs uppercase tracking-[0.25em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation Request</span>
          </div>
          <h3 className="font-extrabold text-3xl sm:text-4xl text-text mb-2">
            Plan Your Wedding
          </h3>
          <p className="text-base font-light text-mutedText leading-relaxed">
            Tell us a little about your celebration and our wedding planning team will get in touch with you to discuss your vision.
          </p>
        </div>

        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-text font-semibold mb-2.5">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Ananya Roy"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                validateField('fullName', e.target.value);
              }}
              className={`w-full px-4 py-3.5 bg-background border text-sm text-text focus:outline-none focus:border-accent transition-colors ${
                errors.fullName ? 'border-red-500' : 'border-accent/30'
              }`}
            />
            {errors.fullName && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-text font-semibold mb-2.5">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="e.g. name@example.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                validateField('email', e.target.value);
              }}
              className={`w-full px-4 py-3.5 bg-background border text-sm text-text focus:outline-none focus:border-accent transition-colors ${
                errors.email ? 'border-red-500' : 'border-accent/30'
              }`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.email}</p>}
          </div>
        </div>

        {/* Row 2: Phone & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-text font-semibold mb-2.5">
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                validateField('phone', e.target.value);
              }}
              className={`w-full px-4 py-3.5 bg-background border text-sm text-text focus:outline-none focus:border-accent transition-colors ${
                errors.phone ? 'border-red-500' : 'border-accent/30'
              }`}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-text font-semibold mb-2.5">
              Wedding Date
            </label>
            <input
              type="date"
              value={formData.weddingDate}
              onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
              className="w-full px-4 py-3.5 bg-background border border-accent/30 text-sm text-text focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Location & Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-text font-semibold mb-2.5">
              Wedding Location
            </label>
            <input
              type="text"
              placeholder="e.g. Udaipur, Goa, or Coimbatore"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3.5 bg-background border border-accent/30 text-sm text-text focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-text font-semibold mb-2.5">
              Number of Guests
            </label>
            <input
              type="text"
              placeholder="e.g. 150 - 300 guests"
              value={formData.guestCount}
              onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              className="w-full px-4 py-3.5 bg-background border border-accent/30 text-sm text-text focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Row 4: Selects (Type & Budget) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-text font-semibold mb-2.5">
              Wedding Type
            </label>
            <select
              value={formData.weddingType}
              onChange={(e) => setFormData({ ...formData, weddingType: e.target.value })}
              className="w-full px-4 py-3.5 bg-background border border-accent/30 text-sm text-text focus:outline-none focus:border-accent transition-colors"
            >
              {weddingTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-text font-semibold mb-2.5">
              Budget Range
            </label>
            <select
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
              className="w-full px-4 py-3.5 bg-background border border-accent/30 text-sm text-text focus:outline-none focus:border-accent transition-colors"
            >
              {budgetOptions.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Checkboxes */}
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-text font-semibold mb-3">
            Services Required
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {serviceOptions.map((service) => {
              const isChecked = formData.services.includes(service);
              return (
                <label
                  key={service}
                  className={`flex items-center gap-3 p-3.5 border text-xs cursor-pointer transition-all ${
                    isChecked
                      ? 'border-primary bg-secondary/80 text-primary font-bold shadow-sm'
                      : 'border-accent/20 bg-background text-text/80 hover:border-accent/50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(service)}
                    className="accent-primary w-4 h-4 cursor-pointer"
                  />
                  <span>{service}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Tell Us About Your Wedding */}
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-text font-semibold mb-2.5">
            Tell Us About Your Wedding
          </label>
          <textarea
            rows={4}
            placeholder="Share your wedding theme ideas, preferences, or questions..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-4 py-3.5 bg-background border border-accent/30 text-sm text-text focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        <Button type="submit" variant="primary" fullWidth size="lg" icon={<Send className="w-4 h-4" />}>
          Request a Consultation
        </Button>
      </form>
    </ScrollReveal>
  );
};

