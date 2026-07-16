import React, { useState } from 'react';
import { useSpecialty } from '../../hooks/useSpecialty';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const AppointmentForm = () => {
  const { activeConfig } = useSpecialty();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production template, this handles API submissions
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: '',
        doctor: '',
        date: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 md:p-10 rounded-3xl shadow-xl border border-white/60 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-primary via-secondary to-accent" />
      
      <h3 className="text-2xl md:text-3xl font-extrabold text-dark mb-2 text-left">Schedule an Appointment</h3>
      <p className="text-sm text-gray-500 mb-8 text-left">Fill out the form below and our care team will contact you to confirm.</p>

      {submitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-12 px-6 bg-emerald-50 border border-emerald-100 rounded-2xl text-center"
        >
          <span className="text-4xl mb-4 block">🎉</span>
          <h4 className="font-bold text-emerald-800 text-lg mb-1">Request Received Successfully!</h4>
          <p className="text-xs md:text-sm text-emerald-600">Our medical scheduling team will contact you shortly to confirm your booking.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="e.g. John Doe"
              className="px-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white/70"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required 
              placeholder="e.g. +91 98765 43210"
              className="px-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white/70"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5 col-span-1 md:col-span-2">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="e.g. john@example.com"
              className="px-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white/70"
            />
          </div>

          {/* Department */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Department / Specialty</label>
            <select 
              name="department" 
              value={formData.department}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white/70"
            >
              <option value="">Select Specialty</option>
              {activeConfig.services.map((s) => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>

          {/* Doctor */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Preferred Specialist</label>
            <select 
              name="doctor" 
              value={formData.doctor}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white/70"
            >
              <option value="">Select Doctor</option>
              {activeConfig.doctors.map((d, idx) => (
                <option key={idx} value={d.name}>{d.name} ({d.spec})</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1.5 col-span-1 md:col-span-2">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Preferred Date</label>
            <input 
              type="date" 
              name="date" 
              value={formData.date}
              onChange={handleChange}
              required 
              className="px-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white/70"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5 col-span-1 md:col-span-2">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Additional Message (Optional)</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your symptoms or medical concern..."
              className="px-4 py-3 rounded-xl border border-gray-150 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm bg-white/70 resize-none"
            />
          </div>

          <div className="col-span-1 md:col-span-2 mt-4">
            <Button type="submit" variant="primary" showIcon={true} className="w-full">
              Confirm Appointment Booking
            </Button>
          </div>

        </form>
      )}
    </motion.div>
  );
};

export default AppointmentForm;
