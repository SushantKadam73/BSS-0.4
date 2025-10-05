from pydantic import BaseModel, Field
from typing import List, Optional, Dict
from datetime import datetime
import uuid


class ImpactStats(BaseModel):
    total_disbursed: Optional[float] = None
    beneficiaries_supported: Optional[int] = None
    yearly_collection: Optional[float] = None
    total_collected: Optional[float] = None
    total_corpus: Optional[float] = None
    scholarships_disbursed: Optional[float] = None
    fiscal_year: Optional[str] = None


class Fund(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    name: str
    short_name: str
    category: str
    established_year: int
    official_url: str
    managed_by: str
    tagline: str
    description: str
    impact_stats: ImpactStats
    beneficiary_types: List[str]
    support_types: List[str]
    featured_image: str
    full_content: str  # Full markdown content
    created_at: datetime = Field(default_factory=datetime.utcnow)


class AggregatedImpact(BaseModel):
    total_corpus: float
    annual_disbursements: float
    beneficiaries_reached: int
    scholarships_provided: int
    medical_welfare_spend: float
    last_updated: str


class CauseCategory(BaseModel):
    id: str
    title: str
    description: str
    icon: str
    related_fund_slugs: List[str]


class ImpactStory(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    relation: str
    story: str
    fund_slug: str
    image: str


class NewsHighlight(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    date: str
    excerpt: str
    fund_slug: str
    image: str


class AboutContent(BaseModel):
    mission: str
    vision: str
    values: List[str]
    disclaimer: str