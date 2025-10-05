// Mock data for Bhartiya Sena Seva - Phase 1

export const impactStats = {
  totalCorpus: 180000, // ₹1,800+ crores in lakhs
  annualDisbursements: 50000, // ₹500+ crores in lakhs
  beneficiariesReached: 200000,
  scholarshipsProvided: 60000,
  medicalWelfareSpend: 20000, // ₹200+ crores in lakhs
  lastUpdated: '2025-01-15'
};

export const funds = [
  {
    id: 'affdf',
    slug: 'armed-forces-flag-day-fund',
    name: 'Armed Forces Flag Day Fund',
    shortName: 'AFFDF',
    category: 'Veterans & Widows',
    establishedYear: 1949,
    officialUrl: 'https://ksb.gov.in/',
    managedBy: 'Kendriya Sainik Board (KSB)',
    tagline: 'Supporting Veterans, Widows, and their Families',
    description: 'The Armed Forces Flag Day Fund supports veterans, widows, and dependents through comprehensive welfare schemes including education, medical care, and rehabilitation programs.',
    impactStats: {
      totalDisbursed: 36654, // ₹366.54 crores in lakhs
      beneficiariesSupported: 172133,
      yearlyCollection: 4700, // ₹47 crores in lakhs
      fiscalYear: '2023-24'
    },
    beneficiaryTypes: ['Veterans', 'War Widows', 'Dependents', 'Disabled Personnel'],
    supportTypes: ['Education Grants', 'Medical Assistance', 'Penury Grants', 'Marriage Support'],
    featuredImage: 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/6z7df7um_flag%20and%20soldiers_1755323045336.png'
  },
  {
    id: 'bkv',
    slug: 'bharat-ke-veer',
    name: 'Bharat Ke Veer',
    shortName: 'BKV',
    category: 'Martyrs Families',
    establishedYear: 2017,
    officialUrl: 'https://bharatkeveer.gov.in',
    managedBy: 'Ministry of Home Affairs Trust',
    tagline: 'Warriors of India - Supporting Bravehearts',
    description: 'Digital platform enabling citizens to contribute directly to families of CAPF and Assam Rifles martyrs. Provides up to ₹25 lakh per family with transparent, direct fund transfer.',
    impactStats: {
      totalDisbursed: 7697, // ₹76.97 crores in lakhs
      beneficiariesSupported: 267,
      totalCollected: 29976, // ₹299.76 crores in lakhs
      fiscalYear: '2024'
    },
    beneficiaryTypes: ['CRPF Families', 'BSF Families', 'CISF Families', 'Assam Rifles Families'],
    supportTypes: ['Direct Financial Aid', 'Education Support', 'Healthcare', 'Rehabilitation'],
    featuredImage: 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/okn0b52h_solider%20family_1755323045337.png'
  },
  {
    id: 'ndf',
    slug: 'national-defence-fund',
    name: 'National Defence Fund',
    shortName: 'NDF',
    category: 'Defence Welfare',
    establishedYear: 1962,
    officialUrl: 'https://ndf.gov.in',
    managedBy: 'Prime Minister\'s Office',
    tagline: 'Nation\'s Commitment to Defence Personnel',
    description: 'Established post-1962 war, NDF mobilizes voluntary contributions for armed forces welfare. Manages PM Scholarship Scheme and provides comprehensive support to defence families.',
    impactStats: {
      totalCorpus: 144838, // ₹1,448.38 crores in lakhs
      beneficiariesSupported: 60000,
      scholarshipsDisbursed: 13994, // ₹139.94 crores in lakhs
      fiscalYear: '2025'
    },
    beneficiaryTypes: ['Armed Forces', 'Paramilitary', 'State Police', 'Dependents'],
    supportTypes: ['PM Scholarships', 'Immediate Relief', 'Welfare Grants', 'Educational Support'],
    featuredImage: 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/1ho9k1vu_people%20providing%20groceries%20to%20soldiers%20on%20a%20wheelchair.png'
  }
];

export const causeCategories = [
  {
    id: 'education',
    title: 'Education',
    description: 'Support children of armed forces personnel with scholarships and educational grants',
    icon: 'GraduationCap',
    relatedFunds: ['affdf', 'ndf']
  },
  {
    id: 'medical',
    title: 'Medical Aid',
    description: 'Provide healthcare support and medical assistance to veterans and their families',
    icon: 'Heart',
    relatedFunds: ['affdf', 'bkv']
  },
  {
    id: 'widows',
    title: 'War Widows',
    description: 'Financial and social support for spouses of martyred personnel',
    icon: 'Users',
    relatedFunds: ['affdf', 'bkv']
  },
  {
    id: 'veterans',
    title: 'Veterans',
    description: 'Rehabilitation and welfare programs for retired armed forces personnel',
    icon: 'Shield',
    relatedFunds: ['affdf', 'ndf']
  }
];

export const impactStories = [
  {
    id: 1,
    name: 'Priya Sharma',
    relation: 'Daughter of Veteran',
    story: 'The educational grant helped me complete my engineering degree. My father served 22 years in the Army, and this support changed our family\'s future.',
    fund: 'AFFDF',
    image: 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/okn0b52h_solider%20family_1755323045337.png'
  },
  {
    id: 2,
    name: 'Meera Devi',
    relation: 'War Widow',
    story: 'After losing my husband in the line of duty, the immediate financial assistance gave us stability. My children are now pursuing their dreams.',
    fund: 'BKV',
    image: 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/6z7df7um_flag%20and%20soldiers_1755323045336.png'
  },
  {
    id: 3,
    name: 'Col. Rajesh Kumar (Retd.)',
    relation: 'Veteran',
    story: 'The medical assistance fund covered my surgery costs. It\'s reassuring to know the nation remembers our service even after retirement.',
    fund: 'NDF',
    image: 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/1ho9k1vu_people%20providing%20groceries%20to%20soldiers%20on%20a%20wheelchair.png'
  }
];

export const newsHighlights = [
  {
    id: 1,
    title: 'Armed Forces Flag Day 2024: Record Contributions',
    date: '2024-12-07',
    excerpt: 'Flag Day 2024 witnessed record corporate and public participation, with REC Limited contributing ₹15 crores for education of 12,500 children.',
    fund: 'AFFDF',
    image: 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/qq6toc39_flag%20and%20salute%20of%20police.png'
  },
  {
    id: 2,
    title: 'Bharat Ke Veer Increases Support Cap to ₹25 Lakh',
    date: '2023-10-10',
    excerpt: 'Individual donation limit raised from ₹15 lakh to ₹25 lakh per braveheart family, ensuring enhanced support for CAPF martyrs\' families.',
    fund: 'BKV',
    image: 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/tz251i7p_amar%20javan_1755323045336.png'
  },
  {
    id: 3,
    title: 'PM Scholarship Scheme Supports 60,000+ Students',
    date: '2024-08-15',
    excerpt: 'National Defence Fund\'s scholarship program has disbursed ₹140 crores, supporting technical and professional education for defence families.',
    fund: 'NDF',
    image: 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/6z7df7um_flag%20and%20soldiers_1755323045336.png'
  }
];

export const aboutContent = {
  mission: 'Bhartiya Sena Seva is an independent research-based aggregator platform dedicated to increasing awareness, transparency, and citizen participation in authentic government-backed armed forces welfare funds. We bridge the gap between citizens and soldier welfare initiatives through comprehensive, verified information.',
  vision: 'To be the most trusted and comprehensive source of information on armed forces welfare schemes, enabling every citizen to make informed decisions about supporting our nation\'s heroes and their families.',
  values: [
    'Transparency in all fund information',
    'Verified research from official sources',
    'Respect for armed forces personnel',
    'Independence and non-partisanship',
    'Citizen empowerment through information'
  ],
  disclaimer: 'Bhartiya Sena Seva is NOT a government portal. We are an independent aggregator providing research-based information on government-backed armed forces funds. All donations are processed through official government portals only. We do not handle any financial transactions.'
};