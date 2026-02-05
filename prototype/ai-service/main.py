"""
LittleStar AI Service - FastAPI Application
"""
import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from config import get_settings
from models import (
    APIResponse,
    DailyReportRequest,
    ParentingQARequest,
    WeeklyReportRequest,
)
from services import ReportService, QAService

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

settings = get_settings()


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan management"""
    logger.info("Starting LittleStar AI Service...")
    yield
    logger.info("Shutting down LittleStar AI Service...")


# Create FastAPI application
app = FastAPI(
    title=settings.APP_NAME,
    description="AI Service for LittleStar - Children's Growth Companion",
    version="0.1.0",
    lifespan=lifespan,
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure appropriately for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize services
report_service = ReportService()
qa_service = QAService()


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": settings.APP_NAME}


@app.post("/api/v1/reports/daily", response_model=APIResponse)
async def generate_daily_report(request: DailyReportRequest):
    """
    Generate daily growth report
    
    Given a list of records from the parent, generate a structured
    daily report with summary, key events, mood analysis, and suggestions.
    """
    try:
        report = await report_service.generate_daily_report(request)
        return APIResponse(
            code=0,
            message="success",
            data=report.model_dump(),
        )
    except ValueError as e:
        logger.error(f"Validation error: {e}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error generating daily report: {e}")
        raise HTTPException(status_code=500, detail="Failed to generate report")


@app.post("/api/v1/reports/weekly", response_model=APIResponse)
async def generate_weekly_report(request: WeeklyReportRequest):
    """
    Generate weekly growth report
    
    Given daily summaries and key events from the week, generate
    a comprehensive weekly report with trends and insights.
    """
    try:
        report = await report_service.generate_weekly_report(request)
        return APIResponse(
            code=0,
            message="success",
            data=report.model_dump(),
        )
    except ValueError as e:
        logger.error(f"Validation error: {e}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error generating weekly report: {e}")
        raise HTTPException(status_code=500, detail="Failed to generate report")


@app.post("/api/v1/ai/ask", response_model=APIResponse)
async def ask_parenting_question(request: ParentingQARequest):
    """
    Answer a parenting question
    
    Provide expert parenting advice based on the question and
    optionally the child's profile and recent context.
    """
    try:
        response = await qa_service.answer_question(request)
        return APIResponse(
            code=0,
            message="success",
            data=response.model_dump(),
        )
    except ValueError as e:
        logger.error(f"Validation error: {e}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error answering question: {e}")
        raise HTTPException(status_code=500, detail="Failed to answer question")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.DEBUG,
    )
