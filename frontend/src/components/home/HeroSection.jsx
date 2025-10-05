import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 40px 80px'
    }}>
      {/* Background Image */}
      <div className="hero-background">
        <img
          src="/images/flag and soldiers_1755323045336.png"
          alt="Indian Armed Forces"
          className="hero-image"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
        <div className="hero-overlay" style={{
          opacity: 0.8,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)'
        }}></div>
      </div>

      {/* Content */}
      <div className="hero-content" style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '900px'
      }}>
        <div className="caption" style={{ marginBottom: '20px', color: 'var(--brand-primary)' }}>
          INDEPENDENT AGGREGATOR
        </div>
        
        <h1 className="brand-display" style={{
          marginBottom: '32px',
          lineHeight: '1'
        }}>
          HONORING SERVICE, SUPPORTING HEROES
        </h1>

        <p className="body-large" style={{
          marginBottom: '40px',
          maxWidth: '600px',
          color: 'var(--neutral-light)'
        }}>
          Comprehensive information on government-backed welfare funds for 
          Indian Armed Forces personnel and their families. Making it easier 
          for citizens to support our nation's heroes.
        </p>

        <div style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => navigate('/funds')}
            className="btn-primary hover-scale"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            Explore Funds
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() => {
              document.getElementById('impact-meter')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary hover-scale"
          >
            See Impact
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-section {
            min-height: 80vh !important;
            padding: 100px 20px 60px !important;
          }
          .brand-display {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;