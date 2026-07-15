import React, { useState, useEffect, useRef } from 'react';

// Count-up helper component
function Counter({ end, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    // Extract numeric part from string if any
    const finalVal = parseFloat(end.toString().replace(/,/g, ''));
    if (isNaN(finalVal)) {
      setCount(end);
      return;
    }

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const currentVal = Math.floor(progress * finalVal);
      // Format number with commas
      setCount(currentVal.toLocaleString());

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // set final string representation
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
}

export default function Stats() {
  const statItems = [
    {
      id: 1,
      number: "18.4",
      prefix: "$",
      suffix: "B",
      label: "Portfolio Investment Value"
    },
    {
      id: 2,
      number: "2450",
      suffix: " m",
      label: "Total Tower Height Built"
    },
    {
      id: 3,
      number: "142",
      suffix: "+",
      label: "Active Tower Cranes"
    },
    {
      id: 4,
      number: "12850",
      suffix: "",
      label: "Engineers & Craftsmen"
    }
  ];

  return (
    <section className="stats-ribbon">
      <div className="container">
        <div className="stats-grid">
          {statItems.map((item) => (
            <div key={item.id} className="stat-card">
              <div className="stat-number">
                <Counter 
                  end={item.number} 
                  prefix={item.prefix || ''} 
                  suffix={item.suffix || ''} 
                />
              </div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
