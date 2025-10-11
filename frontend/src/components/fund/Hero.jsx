import React from 'react';

const Hero = ({ title, subtitle, imageUrl, ctaUrl, ctaLabel = 'Visit Official Portal' }) => {
  return (
    <section style={{ position: 'relative', padding: '120px 40px 80px', background: 'var(--secondary-olive)', overflow: 'hidden' }}>
      {imageUrl && (
        <div style={{ position: 'absolute', inset: 0, opacity: 0.22 }}>
          <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.1)' }} />
        </div>
      )}
      <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="caption" style={{ marginBottom: 12, color: 'var(--brand-primary)' }}>Armed Forces Welfare Fund</div>
        <h1 className="heading-1" style={{ marginBottom: 12 }}>{title}</h1>
        {subtitle && <p className="heading-5" style={{ marginBottom: 24, fontWeight: 600, textTransform: 'uppercase' }}>{subtitle}</p>}
        {ctaUrl && (
          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
