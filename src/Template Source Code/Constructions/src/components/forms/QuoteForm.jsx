import React from 'react';
import { useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';

const QuoteForm = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  if (!isOpen) return null;

  const onSubmit = (data) => {
    alert(`Consultation and Quote request submitted successfully!\n\nDetails:\nName: ${data.name}\nProject Category: ${data.category}\nEmail: ${data.email}`);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-border p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-slate-100 text-text-secondary transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <MdClose className="text-xl" />
        </button>

        <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2 text-left">
          Request a Consultation
        </h3>
        <p className="text-sm text-text-secondary mb-6 text-left">
          Provide your project specs and our senior estimators will review your requirements.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-left">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Johnathan Miller"
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g. john@company.com"
                className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                })}
              />
              {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="e.g. +1 (555) 019-2834"
                className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm"
                {...register('phone', { required: 'Phone is required' })}
              />
              {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>}
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
              Project Category
            </label>
            <select
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm"
              {...register('category', { required: 'Please select a category' })}
            >
              <option value="">Select a service category...</option>
              <option value="Commercial">Commercial Construction</option>
              <option value="Residential">Residential Development</option>
              <option value="Industrial">Industrial & Warehousing</option>
              <option value="Infrastructure">Civil Infrastructure</option>
              <option value="Engineering">Structural Engineering</option>
              <option value="Management">Project Management & EPC</option>
            </select>
            {errors.category && <span className="text-xs text-red-500 mt-1 block">{errors.category.message}</span>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
              Project Overview / Scope
            </label>
            <textarea
              rows="4"
              placeholder="Provide a brief outline of the square footage, location, estimated start date, and special engineering challenges..."
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm resize-none"
              {...register('message', { required: 'Project overview is required' })}
            />
            {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-lg bg-primary hover:bg-primary/95 text-white font-bold text-sm shadow-md transition-colors cursor-pointer text-center"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
