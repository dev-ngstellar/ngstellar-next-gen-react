import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { companyData } from '../../data/company';

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#f0771a] block mb-2">
            Get In Touch
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">
            Contact Information
          </h3>
          <p className="text-sm text-slate-300">
            Have questions about solar panel installation, financing, or tax credits? Speak directly with our team.
          </p>
        </div>

        <div className="space-y-5 pt-2">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-[#f0771a] flex items-center justify-center shrink-0 border border-amber-500/30">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Direct Line</span>
              <a href={`tel:${companyData.contact.phoneClean}`} className="text-base font-bold text-white hover:text-[#f0771a] transition-colors">
                {companyData.contact.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-[#f0771a] flex items-center justify-center shrink-0 border border-amber-500/30">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Email Inquiries</span>
              <a href={`mailto:${companyData.contact.email}`} className="text-base font-bold text-white hover:text-[#f0771a] transition-colors">
                {companyData.contact.email}
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-[#f0771a] flex items-center justify-center shrink-0 border border-amber-500/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Headquarters Address</span>
              <p className="text-sm font-semibold text-slate-200 leading-snug">
                {companyData.contact.address}
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-[#f0771a] flex items-center justify-center shrink-0 border border-amber-500/30">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Office Hours</span>
              <p className="text-sm font-semibold text-slate-200">
                {companyData.contact.workingHours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency & Support Card */}
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#f0771a] text-white flex items-center justify-center shrink-0 shadow-md">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-900">Existing Solar Client Support</h4>
          <p className="text-xs text-slate-600">
            {companyData.contact.emergencySupport}
          </p>
        </div>
      </div>
    </div>
  );
};
