import React from 'react';
import { useForm } from 'react-hook-form';

const ApplicationForm = ({ selectedJob, onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      position: selectedJob || ''
    }
  });

  const onSubmit = (data) => {
    alert(`Application submitted successfully for the position: ${data.position}!\n\nCandidate: ${data.name}`);
    reset();
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 bg-white border border-border rounded-xl p-6 sm:p-8 shadow-lg text-left">
      <h3 className="text-xl font-bold text-text-primary mb-1">
        Apply for an Opening
      </h3>
      <p className="text-xs text-text-secondary mb-3">
        Submit your credentials to join our engineering and construction divisions.
      </p>

      {/* Position */}
      <div>
        <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
          Applying For Position
        </label>
        <input
          type="text"
          placeholder="e.g. Senior Project Manager"
          className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm"
          {...register('position', { required: 'Please specify the position' })}
        />
        {errors.position && <span className="text-xs text-red-500 mt-1 block">{errors.position.message}</span>}
      </div>

      {/* Name */}
      <div>
        <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
            Email
          </label>
          <input
            type="email"
            placeholder="john@example.com"
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
            Phone
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 012-3456"
            className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm"
            {...register('phone', { required: 'Phone is required' })}
          />
          {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>}
        </div>
      </div>

      {/* Resume Link */}
      <div>
        <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
          Resume / LinkedIn URL
        </label>
        <input
          type="url"
          placeholder="https://linkedin.com/in/username"
          className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm"
          {...register('resume', { required: 'Resume link is required' })}
        />
        {errors.resume && <span className="text-xs text-red-500 mt-1 block">{errors.resume.message}</span>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
          Cover Note / Relevant Projects
        </label>
        <textarea
          rows="4"
          placeholder="Briefly state your years of experience, safety licenses held (OSHA, etc.), and notable projects completed..."
          className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm resize-none"
          {...register('coverLetter')}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-primary hover:bg-primary/95 text-white font-bold text-sm shadow-md transition-colors cursor-pointer text-center"
      >
        Submit Application
      </button>
    </form>
  );
};

export default ApplicationForm;
