import React from 'react';

const AttributeGrid = ({ attributes = [] }) => {
  if (!attributes.length) return null;
  return (
    <section style={{ padding: '60px 40px', background: 'var(--secondary-olive)' }}>
      <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
        <h2 className="heading-2" style={{ marginBottom: 16 }}>Key Details</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {attributes.map((a) => (
            <div key={a.key} style={{ background: 'var(--bg-page)', border: '1px solid var(--border-medium)', borderRadius: 8, padding: 16 }}>
              <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: 6 }}>{a.label}</div>
              <div className="body-medium" style={{ marginBottom: 4 }}>{String(a.value)}</div>
              {a.desc && <div className="caption" style={{ color: 'var(--text-secondary)' }}>{a.desc}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttributeGrid;
