import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, AlertCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-page)',
      borderTop: '2px solid var(--border-medium)',
      padding: '96px 40px 40px',
      marginTop: '120px'
    }}>
      <div className="container-custom" style={{
        maxWidth: '87.5rem',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <Shield size={28} color="var(--brand-primary)" strokeWidth={2.5} />
              <span className="heading-5" style={{ color: 'var(--brand-primary)' }}>
                BHARTIYA SENA SEVA
              </span>
            </div>
            <p className="body-small" style={{ marginTop: '16px', lineHeight: '1.6' }}>
              Independent research aggregator for Indian Armed Forces welfare funds. 
              Empowering citizens with verified information.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-6" style={{ marginBottom: '20px', color: 'var(--brand-primary)' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>Home</Link>
              <Link to="/funds" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>All Funds</Link>
              <Link to="/about" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>About Us</Link>
            </div>
          </div>

          {/* Funds */}
          <div>
            <h3 className="heading-6" style={{ marginBottom: '20px', color: 'var(--brand-primary)' }}>Funds</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/funds/armed-forces-flag-day-fund" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>AFFDF</Link>
              <Link to="/funds/bharat-ke-veer" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>Bharat Ke Veer</Link>
              <Link to="/funds/national-defence-fund" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>National Defence Fund</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-6" style={{ marginBottom: '20px', color: 'var(--brand-primary)' }}>Contact</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Mail size={16} color="var(--text-secondary)" />
              <span className="body-small">info@bhartiyasenaseva.in</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          background: 'rgba(217, 251, 6, 0.05)',
          border: '1px solid var(--border-light)',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '40px'
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <AlertCircle size={20} color="var(--brand-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 className="heading-6" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>Important Disclaimer</h4>
              <p className="body-small" style={{ lineHeight: '1.6' }}>
                Bhartiya Sena Seva is <strong>NOT a government portal</strong>. We are an independent aggregator 
                providing research-based information on government-backed armed forces funds. All donations are 
                processed through <strong>official government portals only</strong>. We do not handle any financial 
                transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p className="caption" style={{ color: 'var(--text-muted)' }}>
            © 2025 Bhartiya Sena Seva. Independent Research Aggregator.
          </p>
          <p className="caption" style={{ color: 'var(--text-muted)' }}>
            All official fund data sourced from government portals.
          </p>
        </div>
      </div>

      <style>{`
        footer a:hover {
          color: var(--brand-primary) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;