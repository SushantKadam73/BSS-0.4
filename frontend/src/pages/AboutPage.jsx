import React from 'react';
import { Target, Eye, Shield, AlertCircle, Heart, Mail, Phone, CheckCircle, Sparkles } from 'lucide-react';

// Import JSON data directly
import staticData from '../data/static_data.json';

const AboutPage = () => {
  const aboutContent = staticData.about_content || {};

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

      {/* Story Section */}
      <section style={{ padding: '120px 40px', background: 'var(--bg-page)' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(217, 251, 6, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              margin: '0 auto 24px'
            }}>
              <Heart size={32} color="var(--brand-primary)" />
            </div>
            <h2 className="heading-2" style={{ marginBottom: '32px', textAlign: 'center' }}>Story of Bhartiya Sena Seva</h2>
            <p className="body-large" style={{ lineHeight: '1.8', textAlign: 'center' }}>
              {aboutContent.story}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '120px 40px', background: 'var(--secondary-olive)' }}>
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

      {/* How It Helps Citizens */}
      <section style={{ padding: '120px 40px', background: 'var(--bg-page)' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="heading-1" style={{ marginBottom: '20px' }}>How We Help Citizens</h2>
            <p className="body-medium">Making armed forces welfare schemes accessible to everyone</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {aboutContent.how_it_helps && aboutContent.how_it_helps.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--secondary-olive)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '12px',
                  padding: '40px 32px',
                  transition: 'all 0.3s ease'
                }}
                className="hover-scale"
              >
                <CheckCircle size={32} color="var(--brand-primary)" style={{ marginBottom: '20px' }} />
                <h3 className="heading-5" style={{ marginBottom: '16px', color: 'var(--brand-primary)' }}>
                  {item.title}
                </h3>
                <p className="body-small" style={{ lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
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

      {/* AI Disclaimer */}
      <section style={{ padding: '120px 40px', background: 'var(--bg-page)' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
          <div style={{
            background: 'var(--secondary-olive)',
            border: '2px solid var(--border-medium)',
            borderRadius: '12px',
            padding: '60px',
            maxWidth: '900px',
            margin: '0 auto 60px'
          }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <Sparkles size={40} color="var(--brand-primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h2 className="heading-3" style={{ marginBottom: '20px' }}>AI-Assisted Research</h2>
                <p className="body-medium" style={{ lineHeight: '1.7' }}>
                  {aboutContent.ai_disclaimer}
                </p>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
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

      {/* Contact Section */}
      <section style={{ padding: '120px 40px', background: 'var(--secondary-olive)' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="heading-1" style={{ marginBottom: '32px' }}>Contact Us</h2>
            <p className="body-large" style={{ marginBottom: '48px' }}>
              Have questions, found an error, or want to suggest improvements? We'd love to hear from you.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              alignItems: 'center'
            }}>
              <a
                href={`mailto:${aboutContent.contact?.email || 'contact@bhartiyasenaseva.in'}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: 'var(--brand-primary)',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease'
                }}
                className="hover-scale"
              >
                <Mail size={24} />
                {aboutContent.contact?.email || 'contact@bhartiyasenaseva.in'}
              </a>

              <p className="body-small" style={{ marginTop: '16px', maxWidth: '500px' }}>
                {aboutContent.contact?.note || 'For corrections, suggestions, or partnership inquiries'}
              </p>
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