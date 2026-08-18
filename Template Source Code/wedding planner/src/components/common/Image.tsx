import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'auto';
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  aspectRatio = 'auto',
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]',
    auto: '',
  };

  return (
    <div className={`relative overflow-hidden bg-secondary/30 ${aspectClasses[aspectRatio]} ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-secondary/60 animate-pulse flex items-center justify-center">
          <span className="sr-only">Loading image...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setIsLoaded(true);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        {...props}
      />
    </div>
  );
};
