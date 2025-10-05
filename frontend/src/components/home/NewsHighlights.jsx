import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsHighlights = ({ news }) => {
  if (!news || news.length === 0) return null;

  return (
    <section style={{
      background: 'var(--secondary-olive)',
      padding: '120px 40px'
    }}>
      <div className="container-custom" style={{
        maxWidth: '87.5rem',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="caption" style={{ marginBottom: '16px', color: 'var(--brand-primary)' }}>LATEST UPDATES</div>
          <h2 className="heading-1" style={{ marginBottom: '20px' }}>News & Highlights</h2>
          <p className="body-medium" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Recent developments and major contributions to armed forces welfare funds
          </p>
        </div>

        {/* News Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {news.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'var(--bg-page)',
                border: '1px solid var(--border-medium)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              className="hover-scale"
            >
              <div style={{
                height: '220px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div style={{ padding: '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <Calendar size={14} color="var(--text-secondary)" />
                  <span className="caption">
                    {new Date(item.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>

                <h3 className="heading-5" style={{
                  marginBottom: '16px',
                  lineHeight: '1.3'
                }}>
                  {item.title}
                </h3>

                <p className="body-small" style={{
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  {item.excerpt}
                </p>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--brand-primary)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Read More
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          section {
            padding: 80px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default NewsHighlights;