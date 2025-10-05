import React from 'react';
import { useParams } from 'react-router-dom';
import { ExternalLink, Calendar, Users, TrendingUp, Building2 } from 'lucide-react';

// Import JSON data directly
import fundsData from '../data/funds.json';

const FundDetailPage = () => {
  const { slug } = useParams();
  const fund = fundsData.find(f => f.slug === slug);

  if (!fund) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-page)', padding: '80px 20px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 className="heading-2" style={{ marginBottom: '20px' }}>Fund Not Found</h1>
          <p className="body-medium">The fund you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const formatNumber = (num) => {
    if (num >= 100) return `₹${(num / 100).toFixed(0)} Cr`;
    return num.toLocaleString('en-IN');
  };

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '100px 40px 80px',
        background: 'var(--secondary-olive)',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.15
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
        </div>

        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="caption" style={{ marginBottom: '16px', color: 'var(--brand-primary)' }}>
            {fund.category}
          </div>
          <h1 className="heading-1" style={{ marginBottom: '16px' }}>{fund.name}</h1>
          <p className="heading-5" style={{ marginBottom: '24px', fontWeight: 600, textTransform: 'uppercase' }}>
            {fund.tagline}
          </p>
          <p className="body-large" style={{ maxWidth: '800px', marginBottom: '40px' }}>
            {fund.description}
          </p>

          <a
            href={fund.official_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            Visit Official Portal
            <ExternalLink size={20} />
          </a>
        </div>
      </section>

      {/* Quick Stats */}
      <section style={{ padding: '80px 40px' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px'
          }}>
            <div style={{
              background: 'var(--secondary-olive)',
              border: '1px solid var(--border-medium)',
              borderRadius: '12px',
              padding: '32px',
              textAlign: 'center'
            }}>
              <TrendingUp size={32} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
              <div className="heading-3" style={{ marginBottom: '8px', fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2rem)' }}>
                {formatNumber(fund.impact_stats.total_disbursed || fund.impact_stats.total_corpus || 0)}
              </div>
              <div className="caption">Total Disbursed/Corpus</div>
            </div>

            <div style={{
              background: 'var(--secondary-olive)',
              border: '1px solid var(--border-medium)',
              borderRadius: '12px',
              padding: '32px',
              textAlign: 'center'
            }}>
              <Users size={32} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
              <div className="heading-3" style={{ marginBottom: '8px', fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2rem)' }}>
                {(fund.impact_stats.beneficiaries_supported || 0).toLocaleString('en-IN')}
              </div>
              <div className="caption">Beneficiaries Supported</div>
            </div>

            <div style={{
              background: 'var(--secondary-olive)',
              border: '1px solid var(--border-medium)',
              borderRadius: '12px',
              padding: '32px',
              textAlign: 'center'
            }}>
              <Calendar size={32} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
              <div className="heading-3" style={{ marginBottom: '8px', fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2rem)' }}>
                {fund.established_year}
              </div>
              <div className="caption">Established</div>
            </div>

            <div style={{
              background: 'var(--secondary-olive)',
              border: '1px solid var(--border-medium)',
              borderRadius: '12px',
              padding: '32px',
              textAlign: 'center'
            }}>
              <Building2 size={32} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
              <div className="heading-6" style={{ marginBottom: '8px', lineHeight: '1.3', color: 'var(--brand-primary)' }}>
                {fund.managed_by}
              </div>
              <div className="caption">Managed By</div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiaries & Support Types */}
      <section style={{ padding: '80px 40px', background: 'var(--secondary-olive)' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            {/* Beneficiaries */}
            <div>
              <h2 className="heading-2" style={{ marginBottom: '32px' }}>Who Benefits</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {fund.beneficiary_types.map((type, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'var(--bg-page)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--brand-primary)',
                      flexShrink: 0
                    }}></div>
                    <span className="body-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Types */}
            <div>
              <h2 className="heading-2" style={{ marginBottom: '32px' }}>Types of Support</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {fund.support_types.map((type, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'var(--bg-page)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--brand-primary)',
                      flexShrink: 0
                    }}></div>
                    <span className="body-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 40px', background: 'var(--bg-page)' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="heading-1" style={{ marginBottom: '24px' }}>Ready to Contribute?</h2>
          <p className="body-large" style={{ marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            All contributions must be made through the official government portal. 
            We do not process any donations directly.
          </p>
          <a
            href={fund.official_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            Donate via Official Portal
            <ExternalLink size={20} />
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FundDetailPage;
