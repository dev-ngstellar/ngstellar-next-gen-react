import React, { useState } from 'react';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 md:p-8 rounded-2xl border border-white/60 shadow-lg"
    >
      <h3 className="text-xl md:text-2xl font-bold text-dark mb-6 text-left">Send Us A Message</h3>
      
      {submitted ? (
        <div className="py-12 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
          <span className="text-3xl mb-2 block">📩</span>
          <h4 className="font-bold text-emerald-800 mb-1">Inquiry Sent!</h4>
          <p className="text-xs text-emerald-600 px-4">Thank you for writing to us. We will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Your Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="e.g. Jane Doe"
              className="px-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white/70"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="e.g. jane@example.com"
              className="px-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white/70"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Subject</label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
              placeholder="e.g. General Inquiry"
              className="px-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white/70"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
              rows="4"
              placeholder="Type your message here..."
              className="px-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white/70 resize-none"
            />
          </div>

          <Button type="submit" variant="primary" showIcon={true} className="mt-2">
            Send Message
          </Button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
