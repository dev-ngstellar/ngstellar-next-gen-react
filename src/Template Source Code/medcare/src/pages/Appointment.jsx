import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { doctorsData } from '../data/mockData';
import { Calendar, User, Phone, Mail, Stethoscope, Clock, ShieldCheck, Check, AlertCircle } from 'lucide-react';

const Appointment = () => {
  const location = useLocation();

  // Inputs
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  // Form handling state
  const [successBooking, setSuccessBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Check if a doctor was pre-selected from the Doctors page
    if (location.state && location.state.doctorName) {
      setSelectedDoctor(location.state.doctorName);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Generate unique verification receipt MC-XXXXXX
    const receiptId = `MC-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      setLoading(false);
      setSuccessBooking({
        id: receiptId,
        patientName,
        phone,
        email,
        doctor: selectedDoctor,
        date,
        time,
        reason
      });

      // Clear fields
      setPatientName('');
      setPhone('');
      setEmail('');
      setSelectedDoctor('');
      setDate('');
      setTime('');
      setReason('');
    }, 1500);
  };

  const handleCloseSuccess = () => {
    setSuccessBooking(null);
  };

  return (
    <div className="animate-page-enter pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Form Panel (8 Columns) */}
        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-2xl shadow-sm p-6 md:p-8">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">
            Schedule Clinical Appointment
          </h2>
          <p className="text-slate-500 text-xs font-light mb-8">
            Complete the form fields below to schedule a diagnostic consult or post-operative therapy slot. Our reception desk will phone you to confirm.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Patient Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-sky-500" />
                  Patient Full Name
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Jonathan Vance"
                  className="w-full border border-slate-200 focus:border-sky-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-sky-500" />
                  Contact Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 019-2834"
                  className="w-full border border-slate-200 focus:border-sky-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-500" />
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jonathan.vance@company.com"
                className="w-full border border-slate-200 focus:border-sky-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
              />
            </div>

            {/* Doctor Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1">
                <Stethoscope className="w-3.5 h-3.5 text-sky-500" />
                Select Consulting Specialist
              </label>
              <select
                required
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full border border-slate-200 focus:border-sky-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
              >
                <option value="">-- Choose Specialist Doctor --</option>
                {doctorsData.map((doc) => (
                  <option key={doc.id} value={doc.name}>
                    {doc.name} ({doc.specialization})
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-sky-500" />
                  Appointment Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border border-slate-200 focus:border-sky-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sky-500" />
                  Select Preferred Time Slot
                </label>
                <select
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border border-slate-200 focus:border-sky-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                >
                  <option value="">-- Choose Time Slot --</option>
                  <option value="09:00 - 10:00">09:00 - 10:00 AM</option>
                  <option value="10:00 - 11:00">10:00 - 11:00 AM</option>
                  <option value="11:00 - 12:00">11:00 - 12:00 PM</option>
                  <option value="13:00 - 14:00">01:00 - 02:00 PM</option>
                  <option value="14:00 - 15:00">02:00 - 03:00 PM</option>
                  <option value="15:00 - 16:00">03:00 - 04:00 PM</option>
                  <option value="16:00 - 17:00">04:00 - 05:00 PM</option>
                </select>
              </div>
            </div>

            {/* Reason */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Reason for Consultation</label>
              <textarea
                required
                rows={4}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Outline symptoms, chronic history details, or details regarding follow-up checkups..."
                className="w-full border border-slate-200 focus:border-sky-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors resize-none"
              />
            </div>

            {/* Action */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-500/55 text-white py-4 text-xs font-semibold tracking-[0.2em] uppercase rounded transition-colors flex items-center justify-center gap-1.5 shadow shadow-sky-500/10"
            >
              {loading ? 'Transmitting Schedule...' : 'Request Appointment Slot'}
            </button>

          </form>
        </div>

        {/* Right Info Sidebar (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col gap-4 shadow-md">
            <h3 className="font-heading text-sm font-bold tracking-wider uppercase pl-2 border-l-2 border-emerald-500">
              Admission Instructions
            </h3>
            <div className="flex flex-col gap-3.5 text-xs font-light text-slate-400">
              <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                <span>Please arrive 15 minutes prior to your scheduled slot for outpatient file verification.</span>
              </div>
              <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                <span>Bring valid government photo ID and your insurance card for billing calculations.</span>
              </div>
              <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                <span>Keep your medical prescription booklets handy if seeking medication renewals.</span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-slate-100 rounded-2xl shadow-sm bg-emerald-50/10 flex gap-4 items-start">
            <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-heading text-xs font-bold text-slate-900 mb-1">Secure Health Data</h4>
              <p className="text-slate-500 text-[11px] font-light leading-relaxed">
                Your medical submissions are fully protected under HIPPA and JCI electronic health data protection guidelines.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Success Modal Overlay */}
      {successBooking && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-6 backdrop-blur-sm animate-[fade-in_0.3s_ease-out_forwards]">
          <div className="bg-white border border-slate-200 max-w-md w-full p-8 text-center relative shadow-2xl rounded-2xl animate-[scale-up_0.4s_ease-out_forwards]">
            
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <span className="text-[10px] tracking-[0.25em] uppercase text-emerald-600 font-bold mb-2 block">Request Logged</span>
            
            <h3 className="font-heading text-xl font-bold text-slate-900 mb-6">
              Appointment Scheduled
            </h3>

            {/* Receipt Summary */}
            <div className="bg-slate-50 border border-slate-200/60 p-4 text-xs font-light text-left flex flex-col gap-2.5 mb-6 rounded-lg">
              <div className="flex justify-between border-b border-slate-150 pb-2 mb-2 font-bold text-[9px] tracking-widest uppercase text-slate-500">
                <span>Receipt Number</span>
                <span className="text-sky-500 font-extrabold">{successBooking.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Patient:</span>
                <span className="font-bold text-slate-800">{successBooking.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Specialist:</span>
                <span className="font-bold text-slate-800">{successBooking.doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Date & Time:</span>
                <span className="font-bold text-slate-800">{successBooking.date} ({successBooking.time})</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed mb-6 font-light">
              We have dispatched a verification email to <span className="font-semibold text-slate-700">{successBooking.email}</span>. Our clinic help desk will telephone you shortly to verify final slot availability.
            </p>

            <button
              onClick={handleCloseSuccess}
              className="w-full bg-slate-900 hover:bg-sky-500 text-white py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 rounded-lg"
            >
              Close Confirmation
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Appointment;
