"""
Pydantic models for AI Service
"""
from datetime import date, datetime
from typing import Optional, List
from pydantic import BaseModel, Field
from enum import Enum


# Enums
class MoodType(str, Enum):
    HAPPY = "happy"
    CALM = "calm"
    SAD = "sad"
    ANXIOUS = "anxious"
    EXCITED = "excited"
    TIRED = "tired"
    MIXED = "mixed"


class EventType(str, Enum):
    POSITIVE = "positive"
    NEGATIVE = "negative"
    NEUTRAL = "neutral"


class Importance(str, Enum):
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"


class Gender(str, Enum):
    MALE = "male"
    FEMALE = "female"


# Input Models
class ChildProfile(BaseModel):
    """Child profile information"""
    id: str
    name: str
    nickname: Optional[str] = None
    age: int = Field(ge=0, le=18)
    gender: Optional[Gender] = None
    birth_date: Optional[date] = None


class RecordItem(BaseModel):
    """Single record item from parent"""
    id: str
    content: str
    tags: List[str] = []
    event_time: Optional[datetime] = None
    created_at: datetime


class DailyReportRequest(BaseModel):
    """Request to generate daily report"""
    child: ChildProfile
    records: List[RecordItem]
    report_date: date


class ParentingQARequest(BaseModel):
    """Request for parenting Q&A"""
    question: str
    child: Optional[ChildProfile] = None
    recent_context: Optional[str] = None


class WeeklyReportRequest(BaseModel):
    """Request to generate weekly report"""
    child: ChildProfile
    start_date: date
    end_date: date
    daily_summaries: List[str]
    key_events: List[str]


# Output Models
class KeyEvent(BaseModel):
    """Key event in daily report"""
    event: str
    type: EventType
    importance: Importance
    time_period: Optional[str] = None


class MoodAnalysis(BaseModel):
    """Mood analysis result"""
    overall: MoodType
    score: float = Field(ge=1, le=5)
    description: str


class Suggestion(BaseModel):
    """Parenting suggestion"""
    context: str
    suggestion: str
    sample_dialogue: Optional[str] = None


class DailyReportResponse(BaseModel):
    """Daily report generation result"""
    summary: str
    key_events: List[KeyEvent]
    mood: MoodAnalysis
    topics: List[str]
    suggestions: List[Suggestion]
    highlight_of_day: Optional[str] = None


class ParentingQAResponse(BaseModel):
    """Parenting Q&A response"""
    answer: str
    related_topics: List[str] = []


class WeeklyHighlight(BaseModel):
    """Weekly highlight item"""
    category: str
    content: str


class WeeklyConcern(BaseModel):
    """Weekly concern item"""
    category: str
    content: str
    suggestion: str


class MoodTrend(BaseModel):
    """Weekly mood trend"""
    pattern: str
    average_score: float
    best_day: Optional[str] = None
    challenging_day: Optional[str] = None


class ParentTip(BaseModel):
    """Tip for parents"""
    tip: str
    reason: str


class WeeklyReportResponse(BaseModel):
    """Weekly report generation result"""
    summary: str
    highlights: List[WeeklyHighlight]
    concerns: List[WeeklyConcern]
    mood_trend: MoodTrend
    top_interests: List[str]
    growth_observation: str
    parent_tips: List[ParentTip]
    next_week_focus: str


# API Response wrapper
class APIResponse(BaseModel):
    """Standard API response wrapper"""
    code: int = 0
    message: str = "success"
    data: Optional[dict] = None
