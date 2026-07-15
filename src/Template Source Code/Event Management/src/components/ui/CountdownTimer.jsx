import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa6';

function pad(n) {
  return String(n).padStart(2, '0');
}

function getTimeLeft(targetDate) {
  const diff = new Date(targetDate) - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

export default function CountdownTimer({ date, compact = false }) {
  const [time, setTime] = useState(() => getTimeLeft(date));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(date)), 1000);
    return () => clearInterval(id);
  }, [date]);

  if (time.expired) {
    return (
      <div className="flex items-center gap-2 text-white/40 text-sm">
        <FaClock />
        <span>Event has passed</span>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <FaClock style={{ color: 'var(--color-primary)' }} />
        <span className="text-white font-mono font-bold">
          {time.days}d {pad(time.hours)}h {pad(time.minutes)}m
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {[
        { value: time.days, label: 'Days' },
        { value: time.hours, label: 'Hrs' },
        { value: time.minutes, label: 'Min' },
        { value: time.seconds, label: 'Sec' },
      ].map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-2">
          <motion.div
            className="flex flex-col items-center"
            key={`${label}-${value}`}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center font-black text-xl"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <motion.span
                key={value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{ color: 'var(--color-primary)', fontFamily: 'monospace' }}
              >
                {pad(value)}
              </motion.span>
            </div>
            <span className="text-white/40 text-xs mt-1 font-medium">{label}</span>
          </motion.div>
          {i < 3 && (
            <span className="text-white/30 font-bold text-lg mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
