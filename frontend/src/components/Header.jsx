import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(26, 28, 27, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-medium)'
    }}>
      <nav className="container-custom" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        maxWidth: '87.5rem',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none'
        }}>
          <Shield size={32} color="var(--brand-primary)" strokeWidth={2.5} />
          <span className="heading-5" style={{ color: 'var(--brand-primary)' }}>
            BHARTIYA SENA SEVA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }} className="desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/funds" className="nav-link">Funds</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            padding: '8px'
          }}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? (
            <X size={28} color="var(--brand-primary)" />
          ) : (
            <Menu size={28} color="var(--brand-primary)" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          background: 'var(--bg-page)',
          borderTop: '1px solid var(--border-medium)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }} className="mobile-menu">
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/funds" className="nav-link" onClick={() => setIsMenuOpen(false)}>Funds</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;