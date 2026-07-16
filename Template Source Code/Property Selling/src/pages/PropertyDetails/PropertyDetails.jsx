import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { properties } from '../../data/properties';
import { PropertyCard } from '../../components/cards/PropertyCard';
import { FiMaximize, FiMapPin, FiMail, FiPhone, FiUser, FiInfo, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaBed, FaBath, FaCar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../config/themes';

export const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentTheme } = useTheme();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMsg, setFormMsg] = useState('Hi, I am interested in this listing and would like to receive further details.');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const property = useMemo(() => {
    return properties.find(p => p.id === id);
  }, [id]);

  const similarProperties = useMemo(() => {
    if (!property) return [];
    return properties
      .filter(p => p.category === property.category && p.id !== property.id)
      .slice(0, 3);
  }, [property]);

  if (!property) {
    return (
      <div className="text-center py-24 space-y-4">
        <h2 className="text-2xl font-bold">Listing Not Found</h2>
        <button onClick={() => navigate('/properties')} className="px-6 py-2 bg-theme-primary text-white rounded-full">
          Return to Directory
        </button>
      </div>
    );
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate API lead submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
    }, 4000);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Back button */}
      <div>
        <Link to="/properties" className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase hover:text-theme-primary transition-colors">
          <FiChevronLeft />
          <span>Back to Listings</span>
        </Link>
      </div>

      {/* Title & Location Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-2">
          <span className="text-xs uppercase font-bold px-3 py-1.5 rounded-full text-white bg-theme-primary">
            {property.status}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">{property.title}</h1>
          <div className="flex items-center space-x-1.5 text-xs sm:text-sm text-slate-500">
            <FiMapPin style={{ color: currentTheme.primary }} />
            <span>{property.location}</span>
          </div>
        </div>

        <div className="text-3xl font-extrabold text-theme-primary md:text-right">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(property.price)}
          {property.status === 'For Lease' || property.status === 'For Rent' ? (
            <span className="text-xs text-slate-400 font-medium block">per month</span>
          ) : (
            <span className="text-xs text-slate-400 font-medium block">total acquisition</span>
          )}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main active image */}
        <div className="lg:col-span-3 aspect-video bg-slate-100 rounded-3xl overflow-hidden relative shadow-inner">
          <img
            src={property.images[activeImageIndex] || property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-all duration-350"
          />
        </div>

        {/* Thumbnails stack */}
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible">
          {(property.images || [property.image]).map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImageIndex(i)}
              className={`aspect-video rounded-2xl overflow-hidden bg-slate-50 border-2 transition-all relative flex-shrink-0 w-24 lg:w-full cursor-pointer ${
                activeImageIndex === i ? 'border-theme-primary shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Main Details & Sidebar Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Properties Detail Brief */}
        <div className="lg:col-span-2 space-y-12">
          {/* Key specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-3xl">
            <div className="text-center space-y-1 py-2 border-r border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Property Area</span>
              <div className="flex items-center justify-center space-x-1.5 text-slate-800 font-bold">
                <FiMaximize className="text-slate-400" />
                <span>{property.area.toLocaleString()} sqft</span>
              </div>
            </div>
            <div className="text-center space-y-1 py-2 sm:border-r border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Bedrooms</span>
              <div className="flex items-center justify-center space-x-1.5 text-slate-800 font-bold">
                <FaBed className="text-slate-400" />
                <span>{property.bedrooms || '—'} Beds</span>
              </div>
            </div>
            <div className="text-center space-y-1 py-2 border-r border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Bathrooms</span>
              <div className="flex items-center justify-center space-x-1.5 text-slate-800 font-bold">
                <FaBath className="text-slate-400" />
                <span>{property.bathrooms || '—'} Baths</span>
              </div>
            </div>
            <div className="text-center space-y-1 py-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Parking Spots</span>
              <div className="flex items-center justify-center space-x-1.5 text-slate-800 font-bold">
                <FaCar className="text-slate-400" />
                <span>{property.parking || '—'} Cars</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Description</h3>
            <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Amenities & Features</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {property.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-xs">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.primary }} />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Location Map</h3>
            <div className="w-full h-80 rounded-3xl bg-slate-100 relative overflow-hidden border border-slate-200 flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="absolute inset-0 opacity-15" style={{
                backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }} />
              <FiMapPin className="text-5xl text-theme-primary animate-bounce" />
              <div>
                <p className="font-bold text-slate-800 text-sm">{property.location}</p>
                <p className="text-xs text-slate-500 max-w-sm mt-1 mx-auto">
                  Map integrations, route guidance, and neighborhood transit indices can be loaded via custom APIs.
                </p>
              </div>
              <button 
                onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(property.location)}`, '_blank')}
                className="px-6 py-2.5 bg-white shadow-md border border-slate-100 rounded-xl text-xs font-semibold text-slate-700 hover:text-theme-primary transition-colors z-10 cursor-pointer"
              >
                Open Google Maps
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div>
          <div className="sticky top-24 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">Schedule Consultation</h3>
              <p className="text-xs text-slate-400">Our certified advisors will contact you shortly.</p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl text-center space-y-2"
              >
                <h4 className="font-bold text-sm">Lead Collected!</h4>
                <p className="text-xs leading-relaxed text-emerald-600">
                  Your inquiry has been stored securely in our AI lead qualification pipeline. An agent will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Sarah Connor"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary"
                    />
                    <FiUser className="absolute left-3.5 top-3.5 text-slate-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary"
                    />
                    <FiMail className="absolute left-3.5 top-3.5 text-slate-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="+1 (800) 000-0000"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary"
                    />
                    <FiPhone className="absolute left-3.5 top-3.5 text-slate-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Message</label>
                  <textarea
                    rows={4}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-theme-primary hover:opacity-95 text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition-opacity shadow-md shadow-theme-primary/10 cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-slate-100 flex items-center space-x-3 text-xs text-slate-400">
              <FiInfo className="text-base text-theme-primary" />
              <span>Future AI plugins will automatically pre-qualify and categorize this contact.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Similar properties section */}
      {similarProperties.length > 0 && (
        <section className="space-y-8 pt-12 border-t border-slate-100">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Similar Listings</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Properties similar in category and status.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default PropertyDetails;
