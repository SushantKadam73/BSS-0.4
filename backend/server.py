from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List, Optional
from models import Fund, AggregatedImpact, ImpactStory, NewsHighlight, AboutContent, CauseCategory
from fund_parser import parse_fund_from_md
from seed_data import IMAGES, IMPACT_STORIES, NEWS_HIGHLIGHTS, ABOUT_CONTENT, CAUSE_CATEGORIES

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Create the main app without a prefix
app = FastAPI(title="Bhartiya Sena Seva API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Startup: Load fund data from MD files
@app.on_event("startup")
async def startup_event():
    """Load fund data from markdown files into database on startup"""
    try:
        # Check if funds already exist
        existing_count = await db.funds.count_documents({})
        if existing_count > 0:
            logger.info(f"Funds already loaded: {existing_count} funds in database")
            return
        
        logger.info("Loading fund data from markdown files...")
        
        # Parse all three funds
        funds_to_load = [
            ('armed-forces-flag-day-fund.md', 'flag_soldiers'),
            ('bharat-ke-veer.md', 'soldier_family'),
            ('national-defence-fund.md', 'wheelchair')
        ]
        
        loaded_funds = []
        for filename, image_key in funds_to_load:
            filepath = ROOT_DIR / 'data' / filename
            if filepath.exists():
                fund = parse_fund_from_md(str(filepath), IMAGES)
                await db.funds.insert_one(fund.dict())
                loaded_funds.append(fund.name)
                logger.info(f"Loaded fund: {fund.name}")
        
        logger.info(f"Successfully loaded {len(loaded_funds)} funds: {', '.join(loaded_funds)}")
        
    except Exception as e:
        logger.error(f"Error loading fund data: {str(e)}")
        raise


# Routes
@api_router.get("/")
async def root():
    return {
        "message": "Bhartiya Sena Seva API",
        "version": "1.0",
        "description": "Independent aggregator for Indian Armed Forces welfare funds"
    }


@api_router.get("/funds", response_model=List[Fund])
async def get_all_funds(category: Optional[str] = None):
    """Get all funds, optionally filtered by category"""
    query = {}
    if category:
        query["category"] = category
    
    funds = await db.funds.find(query).to_list(100)
    return [Fund(**fund) for fund in funds]


@api_router.get("/funds/{slug}", response_model=Fund)
async def get_fund_by_slug(slug: str):
    """Get a specific fund by slug"""
    fund = await db.funds.find_one({"slug": slug})
    if not fund:
        raise HTTPException(status_code=404, detail=f"Fund with slug '{slug}' not found")
    return Fund(**fund)


@api_router.get("/impact-stats", response_model=AggregatedImpact)
async def get_aggregated_impact():
    """Get aggregated impact statistics across all funds"""
    funds = await db.funds.find().to_list(100)
    
    total_corpus = 0
    annual_disbursements = 0
    beneficiaries_reached = 0
    scholarships = 0
    
    for fund_doc in funds:
        fund = Fund(**fund_doc)
        stats = fund.impact_stats
        
        if stats.total_corpus:
            total_corpus += stats.total_corpus
        if stats.total_disbursed:
            annual_disbursements += stats.total_disbursed
        if stats.beneficiaries_supported:
            beneficiaries_reached += stats.beneficiaries_supported
        if stats.scholarships_disbursed:
            scholarships += stats.scholarships_disbursed
    
    # Medical welfare estimate (from AFFDF medical grants)
    medical_welfare = 20000  # ₹200 crores in lakhs
    
    return AggregatedImpact(
        total_corpus=total_corpus,
        annual_disbursements=annual_disbursements,
        beneficiaries_reached=beneficiaries_reached,
        scholarships_provided=scholarships if scholarships > 0 else 60000,
        medical_welfare_spend=medical_welfare,
        last_updated='2025-01-15'
    )


@api_router.get("/impact-stories", response_model=List[ImpactStory])
async def get_impact_stories(fund_slug: Optional[str] = None):
    """Get impact stories, optionally filtered by fund"""
    if fund_slug:
        return [story for story in IMPACT_STORIES if story.fund_slug == fund_slug]
    return IMPACT_STORIES


@api_router.get("/news", response_model=List[NewsHighlight])
async def get_news_highlights(fund_slug: Optional[str] = None):
    """Get news highlights, optionally filtered by fund"""
    if fund_slug:
        return [news for news in NEWS_HIGHLIGHTS if news.fund_slug == fund_slug]
    return NEWS_HIGHLIGHTS


@api_router.get("/about", response_model=AboutContent)
async def get_about_content():
    """Get about page content"""
    return ABOUT_CONTENT


@api_router.get("/causes", response_model=List[CauseCategory])
async def get_cause_categories():
    """Get all cause categories"""
    return CAUSE_CATEGORIES


@api_router.get("/causes/{cause_id}/funds", response_model=List[Fund])
async def get_funds_by_cause(cause_id: str):
    """Get funds related to a specific cause"""
    cause = next((c for c in CAUSE_CATEGORIES if c.id == cause_id), None)
    if not cause:
        raise HTTPException(status_code=404, detail=f"Cause '{cause_id}' not found")
    
    funds = await db.funds.find({"slug": {"$in": cause.related_fund_slugs}}).to_list(100)
    return [Fund(**fund) for fund in funds]


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
