import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const FeaturedFunds = ({ funds }) => {
  const navigate = useNavigate();

  if (!funds || funds.length === 0) return null;

  const formatNumber = (num) => {
    if (num >= 100) {
      return `₹${(num / 100).toFixed(0)} Cr`;
    }
    return num.toLocaleString('en-IN');
  };

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
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '80px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div className="caption" style={{ marginBottom: '16px' }}>FEATURED FUNDS</div>
            <h2 className="heading-1">Major Welfare Schemes</h2>
          </div>
          <button
            onClick={() => navigate('/funds')}
            className="btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            View All Funds
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Funds Grid */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          {funds.map((fund) => (
            <div
              key={fund.id}
              style={{
                background: 'var(--secondary-olive)',
                border: '1px solid var(--border-medium)',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 0,
                minHeight: '500px',
                transition: 'all 0.3s ease'
              }}
              className="hover-scale fund-card"
            >
              {/* Image */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: '500px'
              }}>
                <img
                  src={fund.featured_image}
                  alt={fund.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  padding: '40px 32px 32px'
                }}>
                  <span className="caption" style={{ color: 'var(--brand-primary)' }}>
                    {fund.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 className="heading-3" style={{
                    marginBottom: '12px',
                    lineHeight: '1.2'
                  }}>
                    {fund.short_name}
                  </h3>
                  <p className="body-small" style={{
                    marginBottom: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {fund.tagline}
                  </p>
                  <p className="body-medium" style={{
                    marginBottom: '32px',
                    lineHeight: '1.6'
                  }}>
                    {fund.description}
                  </p>

                  {/* Stats */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '24px',
                    marginBottom: '32px',
                    padding: '24px',
                    background: 'rgba(217, 251, 6, 0.05)',
                    borderRadius: '8px'
                  }}>
                    <div>
                      <div className="heading-5" style={{ marginBottom: '4px' }}>
                        {formatNumber(fund.impact_stats.total_disbursed || fund.impact_stats.total_corpus || 0)}
                      </div>
                      <div className="caption">Disbursed</div>
                    </div>
                    <div>
                      <div className="heading-5" style={{ marginBottom: '4px' }}>
                        {(fund.impact_stats.beneficiaries_supported || 0).toLocaleString('en-IN')}
                      </div>
                      <div className="caption">Beneficiaries</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap'
                }}>
                  <button
                    onClick={() => navigate(`/funds/${fund.slug}`)}
                    className="btn-primary"
                    style={{ flex: 1, minWidth: '140px' }}
                  >
                    Learn More
                  </button>
                  <a
                    href={fund.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      flex: 1,
                      minWidth: '140px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    Official Portal
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .fund-card {
            grid-template-columns: 1fr !important;
          }
          section {
            padding: 80px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedFunds;