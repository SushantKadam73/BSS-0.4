import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, GraduationCap, Heart } from 'lucide-react';

const ImpactMeter = ({ stats }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!stats) return null;

  const formatNumber = (num) => {
    if (num >= 100000) {
      return `₹${(num / 100000).toFixed(2)} Cr`;
    } else if (num >= 100) {
      return `₹${(num / 100).toFixed(0)} Cr`;
    } else {
      return num.toLocaleString('en-IN');
    }
  };

  const metrics = [
    {
      icon: TrendingUp,
      label: 'Total Corpus',
      value: formatNumber(stats.total_corpus || 0),
      description: 'Funds managed across all schemes'
    },
    {
      icon: Users,
      label: 'Beneficiaries Reached',
      value: (stats.beneficiaries_reached || 0).toLocaleString('en-IN'),
      description: 'Families supported annually'
    },
    {
      icon: GraduationCap,
      label: 'Scholarships',
      value: (stats.scholarships_provided || 0).toLocaleString('en-IN'),
      description: 'Educational support provided'
    },
    {
      icon: Heart,
      label: 'Annual Disbursements',
      value: formatNumber(stats.annual_disbursements || 0),
      description: 'Direct support to families'
    }
  ];

  return (
    <section id="impact-meter" style={{
      background: 'var(--bg-page)',
      padding: '120px 40px',
      position: 'relative'
    }}>
      <div className="container-custom" style={{
        maxWidth: '87.5rem',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="caption" style={{ marginBottom: '16px' }}>REAL-TIME IMPACT</div>
          <h2 className="heading-1" style={{ marginBottom: '20px' }}>Transparent Data, Verified Results</h2>
          <p className="body-medium" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Aggregated statistics from verified government sources. Every rupee accounted, 
            every beneficiary counted.
          </p>
        </div>

        {/* Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px'
        }}>
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                style={{
                  background: 'var(--secondary-olive)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '8px',
                  padding: '40px 32px',
                  transition: 'all 0.3s ease',
                  transform: animated ? 'translateY(0)' : 'translateY(20px)',
                  opacity: animated ? 1 : 0,
                  transitionDelay: `${index * 0.1}s`
                }}
                className="hover-scale"
              >
                <Icon size={32} color="var(--brand-primary)" style={{ marginBottom: '20px' }} />
                <h3 className="heading-2" style={{
                  marginBottom: '12px',
                  fontSize: 'clamp(2rem, 1.5rem + 1.5vw, 2.5rem)'
                }}>
                  {metric.value}
                </h3>
                <p className="heading-6" style={{
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  {metric.label}
                </p>
                <p className="body-small">{metric.description}</p>
              </div>
            );
          })}
        </div>

        {/* Last Updated */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <p className="caption">Last Updated: {stats.last_updated || 'January 2025'}</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #impact-meter {
            padding: 80px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ImpactMeter;