import React, { useState } from 'react';
import { Sun } from 'lucide-react';

export const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt = 'Solar Energy Installation',
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
      }
    }
  };

  if (hasError && !fallbackSrc) {
    return (
      <div className={`bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 flex flex-col items-center justify-center p-6 text-center text-slate-300 relative overflow-hidden ${className}`}>
        <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-[#f0771a] border border-amber-500/30 flex items-center justify-center mb-2">
          <Sun className="w-6 h-6 animate-pulse text-amber-400" />
        </div>
        <span className="text-xs font-semibold text-slate-200">{alt}</span>
        <span className="text-[10px] text-[#f0771a] font-mono mt-1">Solarix Clean Energy</span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc || fallbackSrc}
      alt={alt}
      onError={handleError}
      loading={loading}
      className={className}
      {...props}
    />
  );
};
