import { memo } from 'react';

/**
 * Optimized Image Component with multi-format fallback (AVIF -> WebP -> Fallback Original)
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

  // Extract base path without extension
  const extMatch = src.match(/\.(png|jpg|jpeg|webp|avif)$/i);
  const basePath = extMatch ? src.substring(0, extMatch.index) : src;

  const avifSrc = `${basePath}.avif`;
  const webpSrc = `${basePath}.webp`;

  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
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
