import React from 'react';
import { useSpecialty } from '../hooks/useSpecialty';
import SectionHeader from '../components/common/SectionHeader';
import ContactForm from '../components/forms/ContactForm';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const { activeConfig } = useSpecialty();

  const details = [
    { title: 'Emergency Helpline', info: activeConfig.emergencyNumber, icon: <FaPhoneAlt />, sub: '24/7 Trauma Helpline' },
    { title: 'General Inquiries', info: activeConfig.email || 'info@stellarhealthcare.com', icon: <FaEnvelope />, sub: 'Consultation booking' },
    { title: 'Clinic Address', info: activeConfig.address || 'Stellar Towers, Sector 62, Golf Course Road, Gurgaon, India', icon: <FaMapMarkerAlt />, sub: 'Main Medical Campus' },
    { title: 'Working Hours', info: `Weekdays: ${activeConfig.hours?.weekdays || '8:00 AM - 8:00 PM'}`, icon: <FaClock />, sub: activeConfig.hours?.emergency || '24/7 Available' },
  ];

  return (
    <div className="relative pt-[120px] pb-20 overflow-hidden bg-light text-left">
      <div className="container mx-auto px-4 lg:px-8">
        
        <SectionHeader 
          subtitle="Get In Touch"
          title={`Contact ${activeConfig.name}`}
          description="Have inquiries regarding treatment packages or booking schedules? Reach our support desk directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          {/* Left: Contact Info (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {details.map((d, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                  {d.icon}
                </div>
                <div>
                  <h4 className="font-bold text-dark text-sm mb-0.5">{d.title}</h4>
                  <p className="text-xs text-gray-400 font-semibold mb-1">{d.sub}</p>
                  <span className="text-sm text-gray-600 font-semibold break-all leading-normal">{d.info}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Google Map Placeholder */}
        <div className="bg-white p-4 rounded-3xl border border-gray-150 shadow-sm overflow-hidden select-none">
          <div className="w-full h-[350px] md:h-[400px] rounded-2xl bg-gray-100 flex flex-col items-center justify-center text-gray-400 gap-2 relative">
            {/* Mock map graphic style */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(200,200,200,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(200,200,200,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center animate-bounce z-10"><FaMapMarkerAlt size={20} /></div>
            <span className="font-bold text-dark text-base z-10">Google Map Placeholder</span>
            <span className="text-xs text-gray-400 max-w-xs text-center z-10 px-4">{activeConfig.address || 'Stellar Towers, Sector 62, Golf Course Road, Gurgaon, India'}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
