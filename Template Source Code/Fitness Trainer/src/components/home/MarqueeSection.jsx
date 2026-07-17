import { marqueePartners } from '../../utils/data';

const doubled = [...marqueePartners, ...marqueePartners];

export default function MarqueeSection() {
  return (
    <section
      className="py-8 relative overflow-hidden"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="marquee-container">
        <div className="marquee-track gap-16">
          {doubled.map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 flex-shrink-0 group"
            >
              <span style={{ color: 'var(--primary)', fontSize: '8px' }}>◆</span>
              <span
                className="text-sm font-semibold uppercase tracking-widest whitespace-nowrap transition-colors duration-300 group-hover:text-white"
                style={{ color: 'var(--text-muted)', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.12em' }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
