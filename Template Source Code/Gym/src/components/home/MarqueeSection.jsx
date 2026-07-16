import { marqueeItems } from '../../utils/data';

export default function MarqueeSection() {
  const doubled = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      className="py-6 overflow-hidden relative"
      style={{
        background: 'var(--primary)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--primary), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--primary), transparent)' }} />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 mx-4 font-display text-white text-xl tracking-widest uppercase"
          >
            {item}
            <span className="text-white/40 text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
