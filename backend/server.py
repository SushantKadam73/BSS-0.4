from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import json
import logging
from pathlib import Path
from typing import List, Optional, Dict, Any

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

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

# Global data storage
FUNDS_DATA = []
IMPACT_STATS = {}
STATIC_DATA = {}


# Startup: Load JSON data files
@app.on_event("startup")
async def startup_event():
    """Load data from JSON files on startup"""
    global FUNDS_DATA, IMPACT_STATS, STATIC_DATA
    
    try:
        data_dir = ROOT_DIR / 'data'
        
        # Load funds data
        funds_path = data_dir / 'funds.json'
        if funds_path.exists():
            with open(funds_path, 'r', encoding='utf-8') as f:
                FUNDS_DATA = json.load(f)
            logger.info(f"Loaded {len(FUNDS_DATA)} funds from JSON")
        
        # Load impact stats
        stats_path = data_dir / 'impact_stats.json'
        if stats_path.exists():
            with open(stats_path, 'r', encoding='utf-8') as f:
                IMPACT_STATS = json.load(f)
            logger.info("Loaded impact statistics from JSON")
        
        # Load static data (stories, news, causes, about)
        static_path = data_dir / 'static_data.json'
        if static_path.exists():
            with open(static_path, 'r', encoding='utf-8') as f:
                STATIC_DATA = json.load(f)
            logger.info("Loaded static content from JSON")
        
        logger.info("✓ All data loaded successfully from JSON files")
        
    except Exception as e:
        logger.error(f"Error loading data: {str(e)}")
        raise


# Routes
@api_router.get("/")
async def root():
    return {
        "message": "Bhartiya Sena Seva API",
        "version": "2.0",
        "description": "Independent aggregator for Indian Armed Forces welfare funds",
        "data_source": "JSON files"
    }


@api_router.get("/funds")
async def get_all_funds(category: Optional[str] = None) -> List[Dict[str, Any]]:
    """Get all funds, optionally filtered by category"""
    if category:
        return [f for f in FUNDS_DATA if f.get('category') == category]
    return FUNDS_DATA


@api_router.get("/funds/{slug}")
async def get_fund_by_slug(slug: str) -> Dict[str, Any]:
    """Get a specific fund by slug"""
    fund = next((f for f in FUNDS_DATA if f.get('slug') == slug), None)
    if not fund:
        raise HTTPException(status_code=404, detail=f"Fund with slug '{slug}' not found")
    return fund


@api_router.get("/impact-stats")
async def get_aggregated_impact() -> Dict[str, Any]:
    """Get aggregated impact statistics across all funds"""
    return IMPACT_STATS


@api_router.get("/impact-stories")
async def get_impact_stories(fund_slug: Optional[str] = None) -> List[Dict[str, Any]]:
    """Get impact stories, optionally filtered by fund"""
    stories = STATIC_DATA.get('impact_stories', [])
    if fund_slug:
        return [s for s in stories if s.get('fund_slug') == fund_slug]
    return stories


@api_router.get("/news")
async def get_news_highlights(fund_slug: Optional[str] = None) -> List[Dict[str, Any]]:
    """Get news highlights, optionally filtered by fund"""
    news = STATIC_DATA.get('news_highlights', [])
    if fund_slug:
        return [n for n in news if n.get('fund_slug') == fund_slug]
    return news


@api_router.get("/about")
async def get_about_content() -> Dict[str, Any]:
    """Get about page content"""
    return STATIC_DATA.get('about_content', {})


@api_router.get("/causes")
async def get_cause_categories() -> List[Dict[str, Any]]:
    """Get all cause categories"""
    return STATIC_DATA.get('cause_categories', [])


@api_router.get("/causes/{cause_id}/funds")
async def get_funds_by_cause(cause_id: str) -> List[Dict[str, Any]]:
    """Get funds related to a specific cause"""
    causes = STATIC_DATA.get('cause_categories', [])
    cause = next((c for c in causes if c.get('id') == cause_id), None)
    if not cause:
        raise HTTPException(status_code=404, detail=f"Cause '{cause_id}' not found")
    
    related_slugs = cause.get('related_fund_slugs', [])
    return [f for f in FUNDS_DATA if f.get('slug') in related_slugs]


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
