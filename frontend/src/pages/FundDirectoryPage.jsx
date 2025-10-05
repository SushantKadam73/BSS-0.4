import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, ExternalLink } from 'lucide-react';

// Import JSON data directly
import fundsData from '../data/funds.json';

const FundDirectoryPage = () => {
  const [funds] = useState(fundsData);
  const [filteredFunds, setFilteredFunds] = useState(fundsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    let result = funds;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(fund => fund.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(fund =>
        fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fund.short_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fund.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredFunds(result);
  }, [searchTerm, selectedCategory, funds]);

  const categories = ['all', ...new Set(funds.map(f => f.category))];

  const formatNumber = (num) => {
    if (num >= 100) return `₹${(num / 100).toFixed(0)} Cr`;
    return num.toLocaleString('en-IN');
  };

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <section style={{ padding: '80px 40px 60px', background: 'var(--secondary-olive)' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
          <div className="caption" style={{ marginBottom: '16px', color: 'var(--brand-primary)' }}>FUND DIRECTORY</div>
          <h1 className="heading-1" style={{ marginBottom: '20px' }}>Explore All Funds</h1>
          <p className="body-large" style={{ maxWidth: '700px' }}>
            Comprehensive directory of government-backed welfare funds for Indian Armed Forces
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section style={{ padding: '60px 40px' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {/* Search */}
            <div style={{ flex: '1 1 300px', position: 'relative' }}>
              <Search size={20} color="var(--text-secondary)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search funds..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 48px',
                  background: 'var(--secondary-olive)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '10rem',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  fontFamily: 'Inter, Arial, sans-serif'
                }}
              />
            </div>

            {/* Category Filter */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '10rem',
                    border: selectedCategory === cat ? '1px solid var(--brand-primary)' : '1px solid var(--border-medium)',
                    background: selectedCategory === cat ? 'var(--brand-primary)' : 'var(--secondary-olive)',
                    color: selectedCategory === cat ? 'var(--text-inverse)' : 'var(--text-primary)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textTransform: 'capitalize'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="body-small" style={{ marginBottom: '40px' }}>
            Showing {filteredFunds.length} of {funds.length} funds
          </p>

          {/* Funds Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {filteredFunds.map(fund => (
              <div
                key={fund.id}
                style={{
                  background: 'var(--secondary-olive)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '12px',
                  padding: '40px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '40px',
                  alignItems: 'center',
                  transition: 'all 0.3s ease'
                }}
                className="hover-scale fund-card"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <h2 className="heading-3">{fund.short_name}</h2>
                    <span className="caption" style={{
                      padding: '4px 12px',
                      background: 'rgba(217, 251, 6, 0.1)',
                      borderRadius: '4px',
                      color: 'var(--brand-primary)'
                    }}>
                      {fund.category}
                    </span>
                  </div>

                  <p className="body-small" style={{ marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>
                    {fund.tagline}
                  </p>

                  <p className="body-medium" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
                    {fund.description}
                  </p>

                  <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                    <div>
                      <div className="heading-6" style={{ marginBottom: '4px' }}>
                        {formatNumber(fund.impact_stats.total_disbursed || fund.impact_stats.total_corpus || 0)}
                      </div>
                      <div className="caption">Disbursed/Corpus</div>
                    </div>
                    <div>
                      <div className="heading-6" style={{ marginBottom: '4px' }}>
                        {(fund.impact_stats.beneficiaries_supported || 0).toLocaleString('en-IN')}
                      </div>
                      <div className="caption">Beneficiaries</div>
                    </div>
                    <div>
                      <div className="heading-6" style={{ marginBottom: '4px' }}>
                        {fund.established_year}
                      </div>
                      <div className="caption">Established</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '180px' }}>
                  <button onClick={() => navigate(`/funds/${fund.slug}`)} className="btn-primary">
                    View Details
                  </button>
                  <a href={fund.official_url} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}>
                    Official Site
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .fund-card {
            grid-template-columns: 1fr !important;
          }
        }
        input:focus {
          outline: none;
          border-color: var(--brand-primary);
        }
      `}</style>
    </div>
  );
};

export default FundDirectoryPage;