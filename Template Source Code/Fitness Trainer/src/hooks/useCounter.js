import { useState, useRef } from 'react';

export function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  function start() {
    if (started.current) return;
    started.current = true;

    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  return { count, start };
}
