import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Target, Eye, Shield, AlertCircle } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AboutPage = () => {
  const [aboutContent, setAboutContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(`${API}/about`);
        setAboutContent(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching about content:', error);
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  if (loading || !aboutContent) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-page)' }}>
        <div className="heading-3" style={{ color: 'var(--brand-primary)' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ padding: '100px 40px 80px', background: 'var(--secondary-olive)' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto', textAlign: 'center' }}>
          <div className="caption" style={{ marginBottom: '16px', color: 'var(--brand-primary)' }}>ABOUT US</div>
          <h1 className="heading-1" style={{ marginBottom: '20px' }}>BHARTIYA SENA SEVA</h1>
          <p className="body-large" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Independent Research Aggregator for Indian Armed Forces Welfare Funds
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '120px 40px' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(217, 251, 6, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Target size={32} color="var(--brand-primary)" />
              </div>
              <h2 className="heading-2" style={{ marginBottom: '24px' }}>Our Mission</h2>
              <p className="body-medium" style={{ lineHeight: '1.7' }}>
                {aboutContent.mission}
              </p>
            </div>

            <div>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(217, 251, 6, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Eye size={32} color="var(--brand-primary)" />
              </div>
              <h2 className="heading-2" style={{ marginBottom: '24px' }}>Our Vision</h2>
              <p className="body-medium" style={{ lineHeight: '1.7' }}>
                {aboutContent.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '120px 40px', background: 'var(--secondary-olive)' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="heading-1" style={{ marginBottom: '20px' }}>Our Values</h2>
            <p className="body-medium">The principles that guide everything we do</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {aboutContent.values.map((value, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--bg-page)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '12px',
                  padding: '40px 32px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                className="hover-scale"
              >
                <Shield size={32} color="var(--brand-primary)" style={{ marginBottom: '20px' }} />
                <p className="body-medium" style={{ lineHeight: '1.6' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: '120px 40px' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
          <div style={{
            background: 'var(--secondary-olive)',
            border: '2px solid var(--border-medium)',
            borderRadius: '12px',
            padding: '60px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <AlertCircle size={40} color="var(--brand-primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h2 className="heading-3" style={{ marginBottom: '20px' }}>Important Legal Disclaimer</h2>
                <p className="body-medium" style={{ lineHeight: '1.7' }}>
                  {aboutContent.disclaimer}
                </p>
              </div>
            </div>
          </div>
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

export default AboutPage;