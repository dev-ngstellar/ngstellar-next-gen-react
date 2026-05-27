import { useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

export default function Marquee({ children, speed = 2, direction = "left", className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  // Start at -50% for right direction to allow moving towards 0
  const baseX = useMotionValue(direction === "right" ? -50 : 0);
  
  useAnimationFrame((t, delta) => {
    // Calculate movement based on time delta (ms)
    // Adjust speed: base speed * factor
    let moveBy = (speed * delta) / 100; // Adjust divisor to tune sensitivity
    
    if (isHovered) {
      moveBy *= 0.15; // Slow down to 15% speed when hovered
    }
    
    if (direction === "left") {
      baseX.set(baseX.get() - moveBy);
    } else {
      baseX.set(baseX.get() + moveBy);
    }
  });

  const x = useTransform(baseX, (v) => {
    // Wrap consistently between -50% and 0%
    // For left (decreasing): e.g. -10 -> -10%. -60 -> -10%
    // For right (increasing): e.g. -40 -> -40%. 10 -> -40% (via shift)
    
    // Logic: v % 50 maps generic value to -50..50 range roughly
    // We want strictly -50% to 0%.
    
    // For Left (v is negative): v % 50 is negative. e.g. -60 % 50 = -10. Perfect.
    if (direction === "left") {
        return `${v % 50}%`;
    } 
    
    // For Right (v starts -50 and increases):
    // -50 % 50 = 0.
    // -40 % 50 = -40.
    // 0 % 50 = 0.
    // 10 % 50 = 10. (We want -40)
    // So we need to shift calculation for positive range or just ensure it wraps to negative.
    // ((v % 50) - 50) % 50
    
    return `${((v % 50) - 50) % 50}%`;
  });

  return (
    <div 
        className={`${className}`} // Outer container
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="marquee"
    >
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}
