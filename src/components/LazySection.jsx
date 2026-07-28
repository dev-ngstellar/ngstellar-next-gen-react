import { useState, useEffect, useRef, memo } from 'react';

/**
 * LazySection component defers mounting/rendering children until scrolled near viewport
 */
function LazySection({ children, fallback = null, rootMargin = '200px 0px' }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isVisible) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={containerRef} className="min-h-[100px]">
      {isVisible ? children : fallback}
    </div>
  );
}

export default memo(LazySection);
