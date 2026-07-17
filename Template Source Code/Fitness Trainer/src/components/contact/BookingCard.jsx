import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { viewportOnce } from '../../utils/animations';

const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
const trainingTypes = ['Online', 'In-Person'];

export default function BookingCard() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedType, setSelectedType] = useState('Online');
  const [date, setDate] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="glass rounded-2xl p-8" style={{ border: '1px solid var(--border)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}
          >
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg" style={{ color: 'var(--text)' }}>
              Book Consultation
            </h3>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Free 30-minute session</p>
          </div>
        </div>

        {/* Date */}
        <div className="mb-5">
          <label
            className="block text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: 'var(--text-muted)' }}
          >
            Select Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              width: '100%',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '12px 16px',
              color: 'var(--text)',
              fontSize: '14px',
              outline: 'none',
              colorScheme: 'dark',
            }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
          />
        </div>

        {/* Time Slots */}
        <div className="mb-5">
          <label
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--text-muted)' }}
          >
            <Clock className="w-3.5 h-3.5" />
            Select Time
          </label>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className="py-2 rounded-xl text-xs font-medium transition-all duration-200"
                style={{
                  background: selectedTime === slot ? 'var(--primary)' : 'var(--surface)',
                  color: selectedTime === slot ? 'white' : 'var(--text-muted)',
                  border: `1px solid ${selectedTime === slot ? 'var(--primary)' : 'var(--border)'}`,
                  boxShadow: selectedTime === slot ? '0 0 12px var(--glow-soft)' : 'none',
                }}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Training Type */}
        <div className="mb-6">
          <label
            className="block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--text-muted)' }}
          >
            Training Type
          </label>
          <div className="flex gap-3">
            {trainingTypes.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className="flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: selectedType === t ? 'var(--primary)' : 'var(--surface)',
                  color: selectedType === t ? 'white' : 'var(--text-muted)',
                  border: `1px solid ${selectedType === t ? 'var(--primary)' : 'var(--border)'}`,
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <button
          className="btn-primary w-full justify-center py-3.5 gap-2.5"
          disabled={!date || !selectedTime}
          style={{ opacity: !date || !selectedTime ? 0.6 : 1 }}
        >
          Confirm Booking
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-xs text-center mt-3" style={{ color: 'var(--text-subtle)' }}>
          Free consultation — no payment required
        </p>
      </div>
    </motion.div>
  );
}
