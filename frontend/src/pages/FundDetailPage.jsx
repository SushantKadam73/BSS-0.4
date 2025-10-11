import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ExternalLink, Building2, Link as LinkIcon } from 'lucide-react';

import Hero from '../components/fund/Hero';
import StatCards from '../components/fund/StatCards';
import AttributeGrid from '../components/fund/AttributeGrid';
import BankTable from '../components/fund/BankTable';
import SectionsAccordion from '../components/fund/SectionsAccordion';

// Per‑fund files for others only (AFFDF will use text-file information, not JSON)
import ndf from '../data/funds/national-defence-fund.json';
import bkv from '../data/funds/bharat-ke-veer.json';

const FundDetailPage = () => {
  const { slug } = useParams();

  // Inline AFFDF page built directly from research text (no JSON/datamodel used)
  const AFFDF_INLINE = useMemo(() => ({
    meta: {
      title: 'Armed Forces Flag Day Fund (AFFDF)',
      tagline: 'Nation’s gratitude for veterans, war widows, and dependents',
      category: 'Veterans Welfare',
      official_url: 'https://affdf.gov.in',
    },
    attributes: [
      { key: 'name', label: 'Fund', value: 'Armed Forces Flag Day Fund (AFFDF)' },
      { key: 'managed_by', label: 'Managed By', value: 'Kendriya Sainik Board (MoD, DESW)' },
      { key: 'established_year', label: 'Flag Day Tradition Since', value: '1949' },
      { key: 'consolidated_year', label: 'Consolidated Under SRO‑7E', value: '1993' },
      { key: 'official_url', label: 'Official Portal', value: 'https://affdf.gov.in' },
      { key: 'impact.total_disbursed', label: 'FY 2023‑24 Disbursed', value: 366.54 },
      { key: 'impact.beneficiaries_supported', label: 'FY 2023‑24 Beneficiaries', value: 172133 },
    ],
    bank_details: [
      { label: 'PNB', account_name: 'Armed Forces Flag Day Fund', account_number: '3083000100179875', ifsc: 'PUNB0308300', bank: 'Punjab National Bank' },
      { label: 'ICICI', account_name: 'Armed Forces Flag Day Fund', account_number: '182401001380', ifsc: 'ICIC0001824', bank: 'ICICI Bank' },
      { label: 'SBI', account_name: 'Armed Forces Flag Day Fund', account_number: '40601079720', ifsc: 'SBIN0000691', swift: 'SBININBB104', bank: 'State Bank of India' },
    ],
    sections: {
      'Identity & Origin': { md: 'Established as a national tradition on 7 Dec 1949 to honour the Armed Forces and support their families; consolidated in 1993 (SRO‑7E) amalgamating multiple welfare funds. Operated through KSB with a nationwide RSB/ZSB network.' },
      'Purpose & Beneficiaries': { md: 'Supports veterans (especially non‑pensioners up to Havildar/equivalent), Veer Naris and dependents, battle‑casualty and disabled personnel, and institutions like paraplegic rehab centres and war memorial hostels.' },
      'Legal & Governance': { md: 'GoI/MoD notification SRO‑7E (13 Apr 1993) is the legal basis. Governance via Managing Committee (Raksha Mantri as Chair). KSB under DESW implements via 34 RSBs and 413 ZSBs.' },
      'Financials': { md: 'Multi‑channel collections: public donations (Flag Day drives), year‑round online transfers, CSR. Examples: FY20 ₹47 Cr+ collections; FY21 disbursed ~₹133 Cr; REC (2024) ₹15 Cr for ESM children education.' },
      'Money Flows & Donation Channels': { md: 'Donate via affdf.gov.in or bank transfer to PNB/ICICI/SBI accounts; UPI/QR/RTGS/NEFT supported. 80G(5)(vi) tax benefits; CSR‑eligible. International donors can use SBI (SWIFT SBININBB104).' },
      'Impact & Verification': { md: 'RMEWF schemes funded by AFFDF. FY 2023‑24: ₹366.54 Cr to 1,72,133 beneficiaries. Parliamentary oversight, CAG/state audits, and routine MoD/KSB reporting ensure verification.' }
    }
  }), []);

  // Map slug to sources (avoid JSON for AFFDF per instruction)
  const FUND_MAP = useMemo(() => ({
    'national-defence-fund': ndf,
    'bharat-ke-veer': bkv,
  }), []);

  const fund = slug === 'armed-forces-flag-day-fund' ? AFFDF_INLINE : FUND_MAP[slug];

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

  const formatCrore = (num) => {
    if (!num && num !== 0) return '—';
    const n = Number(num);
    if (Number.isNaN(n)) return '—';
    return `₹${n.toFixed(2)} Cr`.replace(/\.00\sCr$/, ' Cr');
  };

  const getAttr = (key) => {
    const attrs = (fund?.attributes || []);
    return attrs.find(a => a.key === key) || null;
  };

  const getAttrValue = (key) => getAttr(key)?.value;

  const officialUrl = getAttrValue('official_url') || fund?.meta?.official_url;
  const name = getAttrValue('name') || fund?.meta?.title || 'Fund';
  const tagline = fund?.meta?.tagline || '';
  const category = fund?.meta?.category || '';
  const featuredImageFromMeta = fund?.meta?.featured_image;
  const establishedYear = getAttrValue('established_year');
  const managedBy = getAttrValue('managed_by');

  // Featured images per fund (fallbacks in public/images)
  const IMAGE_MAP = {
    'national-defence-fund': '/images/flag and soldiers_1755323045336.png',
    'armed-forces-flag-day-fund': '/images/flag and salute of police.png',
    'bharat-ke-veer': '/images/amar javan_1755323045336.png',
  };
  const featuredImage = featuredImageFromMeta || IMAGE_MAP[slug] || '';

  // Derive quick stats with robust fallbacks per fund
  const deriveStats = () => {
    const val = (k, altKeys=[]) => {
      const v = getAttrValue(k);
      if (v != null) return v;
      for (const ak of altKeys) {
        const vv = getAttrValue(ak);
        if (vv != null) return vv;
      }
      return undefined;
    };

    const items = [];

    if (slug === 'national-defence-fund') {
      const corpus = val('impact.total_corpus');
      const receipts = val('impact.annual_receipts_2024_25');
      items.push({ icon: 'TrendingUp', label: 'Corpus', value: formatCrore(corpus ?? 1448.38) });
      items.push({ icon: 'IndianRupee', label: 'Annual Receipts (2024-25)', value: formatCrore(receipts ?? 130.95) });
      items.push({ icon: 'Calendar', label: 'Established', value: String(establishedYear ?? 1962) });
    }

    if (slug === 'armed-forces-flag-day-fund') {
      const disb = val('impact.total_disbursed');
      const bene = val('impact.beneficiaries_supported');
      items.push({ icon: 'TrendingUp', label: 'Disbursed (FY 2023-24)', value: formatCrore(disb ?? 366.54) });
      items.push({ icon: 'Users', label: 'Beneficiaries (FY 2023-24)', value: (bene ?? 172133).toLocaleString('en-IN') });
      items.push({ icon: 'Calendar', label: 'Flag Day Tradition', value: 'Since 1949' });
    }

    if (slug === 'bharat-ke-veer') {
      const disb = val('impact.total_disbursed');
      items.push({ icon: 'TrendingUp', label: 'Total Disbursed (as of 2024)', value: formatCrore(disb ?? 76.97) });
      items.push({ icon: 'IndianRupee', label: 'Per-Family Cap', value: '₹25 Lakh' });
      items.push({ icon: 'Calendar', label: 'Established', value: String(establishedYear ?? 2017) });
    }

    return items;
  };

  const sections = fund?.sections || {};

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero Section */}
      <Hero title={name} subtitle={tagline} imageUrl={featuredImage} ctaUrl={officialUrl} />

      {/* Link row under hero */}
      {officialUrl && (
        <section style={{ padding: '0 40px 20px' }}>
          <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto' }}>
            <div className="body-large" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <LinkIcon size={18} color="var(--brand-primary)" />
              <a href={officialUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)' }}>{officialUrl}</a>
            </div>
          </div>
        </section>
      )}

      {/* Quick Stats */}
      <StatCards items={deriveStats()} />

      {/* Attributes Grid */}
      <AttributeGrid attributes={fund.attributes || []} />

      {/* Bank Details Table */}
      {(fund.bank_details && fund.bank_details.length > 0) && (
        <BankTable rows={fund.bank_details} />
      )}

      {/* Collapsed research sections (not pasted inline) */}
      <SectionsAccordion sections={sections} order={[
        'Identity & Origin',
        'Purpose & Beneficiaries',
        'Legal & Governance',
        'Financials',
        'Money Flows & Donation Channels',
        'Impact & Verification'
      ]} />

      {/* CTA Section */}
      <section style={{ padding: '120px 40px', background: 'var(--bg-page)' }}>
        <div className="container-custom" style={{ maxWidth: '87.5rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="heading-1" style={{ marginBottom: '24px' }}>Ready to Contribute?</h2>
          <p className="body-large" style={{ marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            All contributions must be made through the official government portal. 
            We do not process any donations directly.
          </p>
          <a href={officialUrl || '#'} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
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
