import { motion } from 'framer-motion';

export default function BorderBeam({ duration = 40, className = "" }) {
  return (
    <motion.div
      className={`absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_94%,#d946ef_96.5%,#00a2ff_100%)] z-[-1] ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}
