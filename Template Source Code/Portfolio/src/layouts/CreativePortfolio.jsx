import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiImage, FiAward, FiHeart, FiTrendingUp, FiBookOpen, FiActivity, FiArrowRight } from 'react-icons/fi';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import SectionWrapper, { AnimatedDiv } from '../components/common/SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

export default function CreativePortfolio() {
  const { selectedProfession: profession, activeProfileData: data } = usePortfolio();
  const [likes, setLikes] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  if (!profession || !data) return null;

  const mockCreativeGallery = [
    { title: "Futurism Rebrand", category: "Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80", size: "tall" },
    { title: "Mobile UI Kit", category: "Product Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80", size: "wide" },
    { title: "Neon Editorial Mockups", category: "Editorial", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80", size: "normal" },
    { title: "Studio Light Capture", category: "Photography", image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80", size: "tall" },
    { title: "Cinematic Reel", category: "Motion", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80", size: "normal" },
  ];

  const handleLike = (idx) => {
    setLikes(prev => ({ ...prev, [idx]: (prev[idx] || 0) + 1 }));
  };

  return (
    <div style={{ background: '#0F0B2D', color: '#F9FAFB', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
      
      {/* 1. CREATIVE HERO */}
      <section style={{ padding: '8rem 0 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -10%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <span style={{ fontSize: '0.9rem', color: '#C084FC', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                {profession.emoji} Visual Showcase
              </span>
              <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '1rem 0' }}>
                Making Brands <br /><span style={{ background: 'linear-gradient(to right, #A855F7, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Unforgettable</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#A5B4FC', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
                I am {data.name}, a {data.title} focused on crafting beautiful visual experiences.
              </p>
            </AnimatedDiv>
            <AnimatedDiv variant={fadeUp}>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href="#portfolio" className="btn-primary" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)', border: 'none' }}>
                  View Works <FiImage style={{ marginLeft: '0.5rem' }} />
                </a>
              </div>
            </AnimatedDiv>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT DESIGNER */}
      <SectionWrapper className="section" style={{ background: '#1E1B4B' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Visual Philosophy</h2>
          <p style={{ color: '#A5B4FC', fontSize: '1.05rem', lineHeight: 1.8 }}>
            {data.bio}
          </p>
        </div>
      </SectionWrapper>

      {/* 3. MASONRY PORTFOLIO GALLERY */}
      <SectionWrapper className="section" id="portfolio">
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <span style={{ color: '#A855F7', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Portfolio</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginTop: '0.5rem' }}>Curated Creations</h2>
          </AnimatedDiv>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', gridAutoFlow: 'dense' }}>
            {mockCreativeGallery.map((item, idx) => (
              <AnimatedDiv key={idx} variant={scaleIn} style={{ gridColumn: item.size === 'wide' ? 'span 2' : 'auto', gridRow: item.size === 'tall' ? 'span 2' : 'auto' }}>
                <motion.div whileHover={{ y: -6 }} style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', background: '#1E1B4B', border: '1px solid #3730A3', aspectRatio: item.size === 'tall' ? '3/4' : item.size === 'wide' ? '16/10' : '4/3' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,11,45,0.95) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.25rem', opacity: 0, transition: 'opacity 0.3s' }} className="creative-hover-overlay">
                    <span style={{ color: '#C084FC', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{item.category}</span>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0.25rem 0' }}>{item.title}</h4>
                    <button onClick={() => handleLike(idx)} style={{ background: 'none', border: 'none', color: '#EC4899', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <FiHeart fill={likes[idx] ? '#EC4899' : 'none'} /> {likes[idx] || 0}
                    </button>
                  </div>
                </motion.div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. BEFORE & AFTER SHOWCASE */}
      <SectionWrapper className="section" style={{ background: '#1E1B4B' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Before / After Showcase</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ color: '#A5B4FC', fontWeight: 700, marginBottom: '0.5rem' }}>Initial Draft Wireframe</h4>
              <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&q=80" alt="Before" style={{ width: '100%', borderRadius: '0.5rem' }} />
            </div>
            <div>
              <h4 style={{ color: '#C084FC', fontWeight: 700, marginBottom: '0.5rem' }}>Final Interactive Interface</h4>
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" alt="After" style={{ width: '100%', borderRadius: '0.5rem' }} />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. CREATIVE PROCESS */}
      <SectionWrapper className="section">
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Visual Workflow</h2>
          </AnimatedDiv>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { step: "01", title: "Concept Sketching", desc: "Mapping ideas, wireframing visual user interactions, and drafting moods." },
              { step: "02", title: "Pixel Crafting", desc: "Constructing typography systems, detailed elements, and high-fidelity layouts." },
              { step: "03", title: "Interactive Motion", desc: "Adding motion curves, transitions, and testing user animations." }
            ].map((p, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#1E1B4B', borderRadius: '1rem', border: '1px solid #3730A3' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#A855F7', marginBottom: '1rem' }}>{p.step}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#A5B4FC', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. SERVICES */}
      <SectionWrapper className="section" style={{ background: '#1E1B4B' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' }}>My Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: "Brand Identity Design", desc: "Creating comprehensive logo marks, brand guides, and custom print design setups." },
              { title: "UI/UX & Interactive Design", desc: "Designing responsive websites, applications, design systems, and animated interactions." }
            ].map((srv, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#0F0B2D', border: '1px solid #3730A3', borderRadius: '0.75rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#C084FC', marginBottom: '0.5rem' }}>{srv.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#A5B4FC', lineHeight: '1.5' }}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. AWARDS */}
      <SectionWrapper className="section">
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Awards & Mentions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', opacity: 0.8 }}>
            <div style={{ padding: '1.5rem', background: '#1E1B4B', borderRadius: '0.5rem', textAlign: 'center' }}>
              <FiAward size={32} color="#A855F7" style={{ marginBottom: '0.5rem' }} />
              <h4>CSS Design Awards</h4>
              <p style={{ fontSize: '0.75rem', color: '#A5B4FC' }}>Site of the Day 2025</p>
            </div>
            <div style={{ padding: '1.5rem', background: '#1E1B4B', borderRadius: '0.5rem', textAlign: 'center' }}>
              <FiAward size={32} color="#A855F7" style={{ marginBottom: '0.5rem' }} />
              <h4>Awwwards</h4>
              <p style={{ fontSize: '0.75rem', color: '#A5B4FC' }}>Honorable Mention 2024</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 8. BRANDS LOGO WALL */}
      <section style={{ padding: '3rem 0', background: '#1E1B4B', opacity: 0.6 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', fontSize: '1.1rem', fontWeight: 700 }}>
          <span>PIXEL_LAB</span>
          <span>NEXUS_STUDIO</span>
          <span>CREATIVE_CO</span>
          <span>FANCY_BRANDS</span>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <SectionWrapper className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Client Testimonials</h2>
          <div style={{ padding: '2rem', background: '#1E1B4B', border: '1px solid #3730A3', borderRadius: '1rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#A5B4FC' }}>
              "A truly creative visionary. Transformed our brand identity and built a beautiful custom design language that helped us scale."
            </p>
            <div style={{ marginTop: '1rem', fontWeight: 700, color: '#C084FC' }}>
              — Head of Product, Nexus Studio
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 10. CREATIVE BLOG */}
      <SectionWrapper className="section" style={{ background: '#1E1B4B' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Creative Insights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: "Building Harmony With Custom Typography", date: "May 2026", cat: "Typography" },
              { title: "UX Rules For High-converting Landing Pages", date: "April 2026", cat: "Product Design" }
            ].map((post, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#0F0B2D', border: '1px solid #3730A3', borderRadius: '0.75rem' }}>
                <FiBookOpen size={20} color="#A855F7" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{post.title}</h4>
                <div style={{ fontSize: '0.75rem', color: '#A5B4FC' }}>{post.date} • {post.cat}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 11. FAQ ACCORDION */}
      <SectionWrapper className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Design FAQs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { q: "What design files do you provide at handover?", a: "I deliver complete Figma source files, vector assets, and brand guidelines documentation." },
              { q: "Do you offer web layout coding support?", a: "I focus on UX/UI design but collaborate with expert frontend developers for site coding." }
            ].map((faq, idx) => (
              <div key={idx} style={{ background: '#1E1B4B', border: '1px solid #3730A3', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} style={{ width: '100%', background: 'none', border: 'none', padding: '1.25rem', textAlign: 'left', color: 'white', fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{faq.q}</span>
                  <span>{openFaq === idx ? '-' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ padding: '0 1.25rem 1.25rem', color: '#A5B4FC', fontSize: '0.85rem' }}>
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 12. CTA BANNER */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #7C3AED 0%, #0F0B2D 100%)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Let's Build Something Beautiful</h2>
          <p style={{ color: '#A5B4FC', marginBottom: '2.5rem' }}>Transform your product identity with high-end premium design.</p>
          <a href="#contact" className="btn-primary" style={{ background: 'white', color: '#0F0B2D', border: 'none', display: 'inline-flex', alignItems: 'center' }}>
            Start Project <FiArrowRight style={{ marginLeft: '0.5rem' }} />
          </a>
        </div>
      </section>

      {/* 13. CONTACT */}
      <section className="section" id="contact" style={{ background: '#0F0B2D', borderTop: '1px solid #3730A3' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Let's Connect</h2>
          <p style={{ color: '#A5B4FC', margin: '0.5rem 0 2rem' }}>Ready for contracts or design collaboration.</p>
          <a href={`mailto:${data.email}`} className="btn-primary" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)', border: 'none', padding: '0.875rem 2rem' }}>
            hello@creative.studio
          </a>
        </div>
      </section>

      <style>{`
        .creative-hover-overlay:hover, div:hover > .creative-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
