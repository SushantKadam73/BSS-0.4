#!/usr/bin/env python3
"""
Parse markdown fund research reports into structured JSON
"""

import re
import json
from pathlib import Path


def parse_markdown_frontmatter(content):
    """Extract YAML frontmatter from markdown"""
    frontmatter = {}
    match = re.search(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
    if match:
        frontmatter_text = match.group(1)
        for line in frontmatter_text.split('\n'):
            if ':' in line:
                key, value = line.split(':', 1)
                key = key.strip()
                value = value.strip().strip('"').strip("'")
                # Remove comments
                if '#' in value:
                    value = value.split('#')[0].strip()
                frontmatter[key] = value
    return frontmatter


def extract_sections(content):
    """Extract all sections from markdown content"""
    sections = {}
    
    # Remove frontmatter
    content_without_frontmatter = re.sub(r'^---\s*\n.*?\n---\s*\n', '', content, flags=re.DOTALL)
    
    # Split by main sections (## headings)
    section_pattern = r'##\s+(\d+\.?\s+.*?)\n(.*?)(?=##\s+\d+\.?\s+|\Z)'
    matches = re.findall(section_pattern, content_without_frontmatter, re.DOTALL)
    
    for title, content_text in matches:
        title = title.strip()
        sections[title] = content_text.strip()
    
    return sections


def extract_bank_details(content):
    """Extract bank account details from markdown"""
    bank_details = []
    
    # Look for bank sections
    bank_pattern = r'\*\*(.*?Bank.*?)\*\*\s*\n(.*?)(?=\n\*\*|$)'
    matches = re.findall(bank_pattern, content, re.DOTALL | re.IGNORECASE)
    
    for bank_name, details in matches:
        bank_info = {'bank_name': bank_name.strip()}
        
        # Extract account details
        account_match = re.search(r'Account Number:\s*(\S+)', details)
        ifsc_match = re.search(r'IFSC Code:\s*(\S+)', details)
        swift_match = re.search(r'SWIFT Code:\s*(\S+)', details)
        
        if account_match:
            bank_info['account_number'] = account_match.group(1)
        if ifsc_match:
            bank_info['ifsc_code'] = ifsc_match.group(1)
        if swift_match:
            bank_info['swift_code'] = swift_match.group(1)
        
        if len(bank_info) > 1:  # Only add if we found more than just the name
            bank_details.append(bank_info)
    
    return bank_details


def parse_fund_file(filepath, images):
    """Parse a single fund markdown file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    frontmatter = parse_markdown_frontmatter(content)
    sections = extract_sections(content)
    
    slug = frontmatter.get('slug', '')
    
    # Determine fund-specific data
    if 'armed-forces-flag-day' in slug:
        fund_data = {
            'id': 'affdf',
            'slug': 'armed-forces-flag-day-fund',
            'name': 'Armed Forces Flag Day Fund',
            'short_name': 'AFFDF',
            'tagline': 'Supporting Veterans, Widows, and their Families',
            'established_year': 1949,
            'managed_by': 'Kendriya Sainik Board (KSB)',
            'category': 'Veterans & Widows',
            'featured_image': images.get('flag_soldiers', ''),
            'impact_stats': {
                'total_disbursed': 36654,
                'beneficiaries_supported': 172133,
                'yearly_collection': 4700,
                'fiscal_year': '2023-24'
            },
            'beneficiary_types': ['Veterans', 'War Widows', 'Dependents', 'Disabled Personnel'],
            'support_types': ['Education Grants', 'Medical Assistance', 'Penury Grants', 'Marriage Support']
        }
    elif 'bharat-ke-veer' in slug:
        fund_data = {
            'id': 'bkv',
            'slug': 'bharat-ke-veer',
            'name': 'Bharat Ke Veer',
            'short_name': 'BKV',
            'tagline': 'Warriors of India - Supporting Bravehearts',
            'established_year': 2017,
            'managed_by': 'Ministry of Home Affairs Trust',
            'category': 'Martyrs Families',
            'featured_image': images.get('soldier_family', ''),
            'impact_stats': {
                'total_disbursed': 7697,
                'beneficiaries_supported': 267,
                'total_collected': 29976,
                'fiscal_year': '2024'
            },
            'beneficiary_types': ['CRPF Families', 'BSF Families', 'CISF Families', 'Assam Rifles Families'],
            'support_types': ['Direct Financial Aid', 'Education Support', 'Healthcare', 'Rehabilitation']
        }
    else:  # National Defence Fund
        fund_data = {
            'id': 'ndf',
            'slug': 'national-defence-fund',
            'name': 'National Defence Fund',
            'short_name': 'NDF',
            'tagline': "Nation's Commitment to Defence Personnel",
            'established_year': 1962,
            'managed_by': "Prime Minister's Office",
            'category': 'Defence Welfare',
            'featured_image': images.get('wheelchair', ''),
            'impact_stats': {
                'total_corpus': 144838,
                'beneficiaries_supported': 60000,
                'scholarships_disbursed': 13994,
                'fiscal_year': '2025'
            },
            'beneficiary_types': ['Armed Forces', 'Paramilitary', 'State Police', 'Dependents'],
            'support_types': ['PM Scholarships', 'Immediate Relief', 'Welfare Grants', 'Educational Support']
        }
    
    # Add frontmatter data
    fund_data['official_url'] = frontmatter.get('official_url', '')
    fund_data['data_quality'] = frontmatter.get('data_quality', 'B')
    
    # Add parsed sections
    fund_data['sections'] = sections
    
    # Extract bank details
    fund_data['bank_details'] = extract_bank_details(content)
    
    # Create description
    if '2. Purpose & Beneficiaries' in sections:
        desc_text = sections['2. Purpose & Beneficiaries']
        # Get first paragraph
        paragraphs = [p.strip() for p in desc_text.split('\n\n') if p.strip() and not p.strip().startswith('**')]
        if paragraphs:
            fund_data['description'] = paragraphs[0][:400] + '...' if len(paragraphs[0]) > 400 else paragraphs[0]
    
    return fund_data


def main():
    """Main function to parse all funds"""
    images = {
        'flag_soldiers': 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/6z7df7um_flag%20and%20soldiers_1755323045336.png',
        'soldier_family': 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/okn0b52h_solider%20family_1755323045337.png',
        'wheelchair': 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/1ho9k1vu_people%20providing%20groceries%20to%20soldiers%20on%20a%20wheelchair.png',
        'police_salute': 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/qq6toc39_flag%20and%20salute%20of%20police.png',
        'amar_jawan': 'https://customer-assets.emergentagent.com/job_bharat-forces/artifacts/tz251i7p_amar%20javan_1755323045336.png'
    }
    
    data_dir = Path(__file__).parent / 'data'
    
    funds = []
    fund_files = [
        ('armed-forces-flag-day-fund.md', 'flag_soldiers'),
        ('bharat-ke-veer.md', 'soldier_family'),
        ('national-defence-fund.md', 'wheelchair')
    ]
    
    for filename, _ in fund_files:
        filepath = data_dir / filename
        if filepath.exists():
            print(f"Parsing {filename}...")
            fund_data = parse_fund_file(filepath, images)
            funds.append(fund_data)
            print(f"✓ Parsed {fund_data['name']}")
    
    # Save funds data
    funds_json_path = data_dir / 'funds.json'
    with open(funds_json_path, 'w', encoding='utf-8') as f:
        json.dump(funds, f, indent=2, ensure_ascii=False)
    print(f"\n✓ Saved {len(funds)} funds to {funds_json_path}")
    
    # Calculate and save aggregated stats
    total_corpus = sum(f['impact_stats'].get('total_corpus', 0) for f in funds)
    total_disbursed = sum(f['impact_stats'].get('total_disbursed', 0) for f in funds)
    total_beneficiaries = sum(f['impact_stats'].get('beneficiaries_supported', 0) for f in funds)
    total_scholarships = sum(f['impact_stats'].get('scholarships_disbursed', 0) for f in funds)
    
    impact_stats = {
        'total_corpus': total_corpus,
        'annual_disbursements': total_disbursed,
        'beneficiaries_reached': total_beneficiaries,
        'scholarships_provided': total_scholarships if total_scholarships > 0 else 60000,
        'medical_welfare_spend': 20000,
        'last_updated': '2025-01-15'
    }
    
    stats_json_path = data_dir / 'impact_stats.json'
    with open(stats_json_path, 'w', encoding='utf-8') as f:
        json.dump(impact_stats, f, indent=2)
    print(f"✓ Saved impact stats to {stats_json_path}")


if __name__ == '__main__':
    main()
