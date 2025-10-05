import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Heart, Users, Shield } from 'lucide-react';

const iconMap = {
  GraduationCap,
  Heart,
  Users,
  Shield
};

const PickYourCause = ({ causes }) => {
  const navigate = useNavigate();

  if (!causes || causes.length === 0) return null;

  return (
    <section style={{
      background: 'var(--secondary-olive)',
      padding: '120px 40px',
      position: 'relative'
    }}>
      <div className="container-custom" style={{
        maxWidth: '87.5rem',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="caption" style={{ marginBottom: '16px', color: 'var(--brand-primary)' }}>PERSONALIZED SUPPORT</div>
          <h2 className="heading-1" style={{ marginBottom: '20px' }}>Pick Your Cause</h2>
          <p className="body-medium" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Choose the area where you want to make an impact. Each cause connects 
            you to specific funds aligned with your values.
          </p>
        </div>

        {/* Causes Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {causes.map((cause) => {
            const Icon = iconMap[cause.icon] || Shield;
            return (
              <div
                key={cause.id}
                onClick={() => navigate(`/causes/${cause.id}`)}
                style={{
                  background: 'var(--bg-page)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '12px',
                  padding: '40px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="hover-scale"
              >
                <div style={{
                  background: 'rgba(217, 251, 6, 0.1)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Icon size={32} color="var(--brand-primary)" strokeWidth={2} />
                </div>

                <h3 className="heading-4" style={{
                  marginBottom: '16px',
                  color: 'var(--brand-primary)'
                }}>
                  {cause.title}
                </h3>

                <p className="body-small" style={{
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  {cause.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--brand-primary)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  View Funds
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                </div>
              </div>
            );
          })}
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

export default PickYourCause;