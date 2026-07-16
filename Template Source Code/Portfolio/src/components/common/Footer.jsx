import React from 'react';
import { Link } from 'react-router-dom';
import { FiZap, FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { siteConfig } from '../../config/siteConfig';

const footerLinks = {
  Product: [
    { label: 'All Templates', to: '/portfolio' },
    { label: 'Themes', to: '/themes' },
    { label: 'Pricing', to: '/#pricing' },
    { label: 'Changelog', to: '#' },
  ],
  Company: [
    { label: 'About Us', to: '#' },
    { label: 'Blog', to: '#' },
    { label: 'Careers', to: '#' },
    { label: 'Contact', to: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '#' },
    { label: 'Terms of Service', to: '#' },
    { label: 'License', to: '#' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', paddingTop: '4rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid var(--color-border)' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', textDecoration: 'none' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiZap size={16} color="white" />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-text)' }}>
                Portfolio<span style={{ color: 'var(--color-primary)' }}>Forge</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              The premium portfolio template ecosystem for every profession. Build a portfolio that gets you noticed.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: FiTwitter, href: siteConfig.social.twitter },
                { icon: FiGithub, href: siteConfig.social.github },
                { icon: FiLinkedin, href: siteConfig.social.linkedin },
                { icon: FiInstagram, href: siteConfig.social.instagram },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'var(--color-surface-alt)',
                    border: '1px solid var(--color-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-text-muted)',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-subtle)', marginBottom: '1rem' }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 0', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)' }}>
            © {new Date().getFullYear()} PortfolioForge. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-subtle)' }}>
            <FiMail size={14} />
            <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'var(--color-text-subtle)' }}>
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
