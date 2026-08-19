import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const items = [
  { label: 'Diagnostic Dimensions', value: 5, suffix: '', prefix: '' },
  { label: 'Delivery Stages', value: 6, suffix: '', prefix: '' },
  { label: 'Core Practice Areas', value: 4, suffix: '', prefix: '' },
  { label: 'Ecosystem Categories', value: 8, suffix: '', prefix: '' },
];

function CountUpAnimation({ end, suffix, prefix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

function StatsStrip() {
  return (
    <div className="mt-6">
      {/* Heading - Outside Container */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
        Transformation <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-extrabold"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
          }}
        >Metrics</span>
      </h2>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 opacity-90"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        <div className="relative px-6 py-8 md:px-12">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-12 gap-x-8 text-white md:grid-cols-4 text-center">
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center group cursor-default"
              >
                <span className="text-3xl sm:text-4xl font-bold tracking-tight group-hover:scale-110 transition-transform duration-300">
                  <CountUpAnimation
                    end={item.value}
                    suffix={item.suffix}
                    prefix={item.prefix}
                    duration={2.5}
                  />
                </span>
                <span className="text-sm sm:text-base font-medium text-white/80 mt-1">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default StatsStrip;
