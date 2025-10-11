import React from 'react';
import { TrendingUp, Users, Calendar, IndianRupee } from 'lucide-react';

const ICONS = { TrendingUp, Users, Calendar, IndianRupee };

const StatCards = ({ items = [] }) => {
  return (
    <section style={{ padding: '60px 40px' }}>
      <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {items.map((it, idx) => {
            const Icon = ICONS[it.icon] || TrendingUp;
            return (
              <div key={idx} style={{ background: 'var(--secondary-olive)', border: '1px solid var(--border-medium)', borderRadius: 12, padding: 24, textAlign: 'center' }}>
                <Icon size={28} color="var(--brand-primary)" style={{ marginBottom: 12 }} />
                <div className="heading-3" style={{ marginBottom: 6 }}>{it.value ?? '—'}</div>
                <div className="caption" style={{ color: 'var(--text-secondary)' }}>{it.label}</div>
                {it.subLabel && <div className="caption" style={{ marginTop: 6 }}>{it.subLabel}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatCards;
