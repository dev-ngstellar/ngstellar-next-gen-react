import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { useTheme } from '../../config/themes';
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Contact = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">Get In Touch</h1>
        <p className="text-slate-500 text-xs sm:text-sm">
          Have questions about a premium listing, farm layout, or commercial leasing option? Drop a query below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Columns: Contact Details & Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 space-y-6">
            <h3 className="text-xl font-bold">Contact Directory</h3>
            
            <div className="space-y-6 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <FiPhone className="text-lg mt-0.5" style={{ color: currentTheme.primary }} />
                <div>
                  <p className="text-white font-medium">Phone Support</p>
                  <a href={`tel:${siteConfig.contactInfo.phone}`} className="hover:underline text-xs">
                    {siteConfig.contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FiMail className="text-lg mt-0.5" style={{ color: currentTheme.primary }} />
                <div>
                  <p className="text-white font-medium">General advisory</p>
                  <a href={`mailto:${siteConfig.contactInfo.email}`} className="hover:underline text-xs">
                    {siteConfig.contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FiMapPin className="text-lg mt-0.5" style={{ color: currentTheme.primary }} />
                <div>
                  <p className="text-white font-medium">Headquarters</p>
                  <p className="text-slate-400 text-xs">{siteConfig.contactInfo.office}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FiClock className="text-lg mt-0.5" style={{ color: currentTheme.primary }} />
                <div>
                  <p className="text-white font-medium">Business Hours</p>
                  <p className="text-slate-400 text-xs">{siteConfig.contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Map Placeholder */}
          <div className="w-full h-60 bg-slate-100 border border-slate-200 rounded-3xl relative overflow-hidden flex items-center justify-center text-center p-6">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }} />
            <div className="space-y-2">
              <FiMapPin className="text-4xl text-theme-primary mx-auto animate-bounce" />
              <p className="font-bold text-xs text-slate-800">Financial District HQ</p>
              <span className="text-[10px] text-slate-400 max-w-[200px] block mx-auto">
                Embed your interactive Google Maps iframe or Mapbox canvas here.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Send Inquiry</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-emerald-50 border border-emerald-100 rounded-2xl text-center space-y-3 text-emerald-800"
              >
                <FiCheckCircle className="text-4xl mx-auto text-emerald-500" />
                <h4 className="font-bold text-lg">Message Received Successfully!</h4>
                <p className="text-xs text-emerald-600 max-w-sm mx-auto">
                  Thank you for contacting us. Your message has been routed to our lead qualification channel. An advisor will contact you within 24 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +1 (800) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary"
                    />
                  </div>

                  {/* Business Model interests */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Interested in</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary cursor-pointer"
                    >
                      <option value="">Choose Category</option>
                      <option value="Residential">Residential Villas & Flats</option>
                      <option value="Commercial">Commercial Offices / Towers</option>
                      <option value="Farmland">Plots & Farm Lands</option>
                      <option value="Investment">Investment Yield Portfolios</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Provide details about your query or preferred location..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-theme-primary hover:opacity-95 text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition-opacity shadow-md shadow-theme-primary/10 cursor-pointer"
                >
                  Send Advisory Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
