import React from 'react';
import { Quote } from 'lucide-react';

const ImpactStories = ({ stories }) => {
  if (!stories || stories.length === 0) return null;

  return (
    <section style={{
      background: 'var(--bg-page)',
      padding: '120px 40px'
    }}>
      <div className="container-custom" style={{
        maxWidth: '87.5rem',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="caption" style={{ marginBottom: '16px' }}>REAL STORIES</div>
          <h2 className="heading-1" style={{ marginBottom: '20px' }}>Impact Stories</h2>
          <p className="body-medium" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Hear from the families and individuals whose lives have been transformed 
            by these welfare funds
          </p>
        </div>

        {/* Stories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px'
        }}>
          {stories.map((story) => (
            <div
              key={story.id}
              style={{
                background: 'var(--secondary-olive)',
                border: '1px solid var(--border-medium)',
                borderRadius: '12px',
                padding: '48px 40px',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              className="hover-scale"
            >
              <Quote
                size={48}
                color="var(--brand-primary)"
                style={{
                  opacity: 0.2,
                  position: 'absolute',
                  top: '24px',
                  left: '24px'
                }}
              />

              <div style={{
                position: 'relative',
                zIndex: 1
              }}>
                <p className="body-medium" style={{
                  lineHeight: '1.7',
                  marginBottom: '32px',
                  fontStyle: 'italic'
                }}>
                  "{story.story}"
                </p>

                <div style={{
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '24px'
                }}>
                  <div className="heading-6" style={{
                    marginBottom: '4px',
                    color: 'var(--brand-primary)'
                  }}>
                    {story.name}
                  </div>
                  <div className="caption">{story.relation}</div>
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
          .hover-scale {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ImpactStories;