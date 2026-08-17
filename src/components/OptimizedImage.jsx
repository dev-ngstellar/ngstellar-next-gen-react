import { memo } from 'react';

/**
 * Optimized Image Component with smart format handling
 */
function OptimizedImage({
  src,
  alt = '',
  className = '',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchpriority,
  ...props
}) {
  if (!src) return null;

  const isWebp = src.endsWith('.webp');

  if (isWebp) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        {...(fetchpriority ? { fetchpriority } : {})}
        {...props}
      />
    );
  }

  // For non-webp legacy files, provide webp fallback if available
  const extMatch = src.match(/\.(png|jpg|jpeg|avif)$/i);
  const basePath = extMatch ? src.substring(0, extMatch.index) : src;
  const webpSrc = `${basePath}.webp`;

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        {...(fetchpriority ? { fetchpriority } : {})}
        {...props}
      />
    </picture>
  );
}

export default memo(OptimizedImage);
