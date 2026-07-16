import React, { useState, useEffect } from 'react';

const AnnouncementBar = () => {
  const announcements = [
    "FREE SHIPPING ON ORDERS OVER $200",
    "INTRODUCING SUMMER COLLECTION 2026 — DISCOVER TIMELESS FASHION"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white text-[10px] tracking-[0.2em] font-light py-2.5 px-4 text-center transition-all duration-500 uppercase overflow-hidden select-none">
      <div 
        key={index}
        className="animate-[fade-in_0.6s_ease-out] flex justify-center items-center gap-2"
      >
        <span>{announcements[index]}</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
