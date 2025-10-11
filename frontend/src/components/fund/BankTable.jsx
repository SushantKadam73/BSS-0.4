import React from 'react';

const BankTable = ({ rows = [] }) => {
  if (!rows?.length) return null;
  return (
    <section style={{ padding: '60px 40px' }}>
      <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
        <h2 className="heading-2" style={{ marginBottom: 16 }}>Bank Details</h2>
        <div style={{ overflowX: 'auto', border: '1px solid var(--border-medium)', borderRadius: 8 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr className="caption" style={{ textAlign: 'left', background: 'var(--secondary-olive)' }}>
                <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-medium)' }}>Label</th>
                <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-medium)' }}>Account Name</th>
                <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-medium)' }}>Account Number</th>
                <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-medium)' }}>IFSC</th>
                <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-medium)' }}>SWIFT</th>
                <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-medium)' }}>Bank</th>
                <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-medium)' }}>Branch</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((b, idx) => (
                <tr key={idx} className="body-small">
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-light)' }}>{b.label || '-'}</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-light)' }}>{b.account_name}</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-light)' }}>{b.account_number}</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-light)' }}>{b.ifsc}</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-light)' }}>{b.swift || '-'}</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-light)' }}>{b.bank || '-'}</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-light)' }}>{b.branch || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BankTable;
