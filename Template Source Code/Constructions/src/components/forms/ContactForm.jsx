import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(`Thank you for your message, ${data.name}! We will get back to you shortly.`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 bg-white border border-border rounded-xl p-6 sm:p-8 shadow-lg text-left">
      <h3 className="text-xl font-bold text-text-primary mb-2">
        Send Us an Inquiry
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
            Email Address
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 012-3456"
            className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm"
            {...register('phone')}
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
            Subject
          </label>
          <input
            type="text"
            placeholder="Project bidding, partnerships..."
            className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && <span className="text-xs text-red-500 mt-1 block">{errors.subject.message}</span>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1.5">
          Detailed Message
        </label>
        <textarea
          rows="5"
          placeholder="Please describe how we can assist you..."
          className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:border-primary bg-slate-50 transition-colors text-sm resize-none"
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>}
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-primary hover:bg-primary/95 text-white font-bold text-sm shadow-md transition-colors cursor-pointer text-center"
      >
        Submit Inquiry
      </button>
    </form>
  );
};

export default ContactForm;
