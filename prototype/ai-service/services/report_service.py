"""
Report Generation Service
"""
import logging
from typing import List

from models import (
    ChildProfile,
    RecordItem,
    DailyReportRequest,
    DailyReportResponse,
    WeeklyReportRequest,
    WeeklyReportResponse,
    KeyEvent,
    MoodAnalysis,
    Suggestion,
    WeeklyHighlight,
    WeeklyConcern,
    MoodTrend,
    ParentTip,
    EventType,
    Importance,
    MoodType,
)
from prompts import (
    DAILY_REPORT_SYSTEM_PROMPT,
    DAILY_REPORT_USER_TEMPLATE,
    WEEKLY_REPORT_SYSTEM_PROMPT,
    WEEKLY_REPORT_USER_TEMPLATE,
)
from .llm_service import get_llm_service

logger = logging.getLogger(__name__)


class ReportService:
    """Service for generating growth reports"""
    
    def __init__(self):
        self.llm_service = get_llm_service()
    
    def _format_records(self, records: List[RecordItem]) -> str:
        """Format records for prompt"""
        if not records:
            return "今天暂无记录"
        
        formatted = []
        for i, record in enumerate(records, 1):
            time_str = ""
            if record.event_time:
                time_str = f"[{record.event_time.strftime('%H:%M')}] "
            
            tags_str = ""
            if record.tags:
                tags_str = f" (标签: {', '.join(record.tags)})"
            
            formatted.append(f"{i}. {time_str}{record.content}{tags_str}")
        
        return "\n".join(formatted)
    
    async def generate_daily_report(
        self,
        request: DailyReportRequest,
    ) -> DailyReportResponse:
        """Generate daily growth report"""
        
        child = request.child
        records_text = self._format_records(request.records)
        
        # Prepare user message
        user_message = DAILY_REPORT_USER_TEMPLATE.format(
            child_name=child.name,
            nickname=child.nickname or child.name,
            age=child.age,
            gender="男孩" if child.gender == "male" else "女孩" if child.gender == "female" else "孩子",
            records=records_text,
        )
        
        logger.info(f"Generating daily report for {child.name}, date: {request.report_date}")
        
        try:
            # Generate report using LLM
            result = await self.llm_service.generate_json(
                system_prompt=DAILY_REPORT_SYSTEM_PROMPT,
                user_message=user_message,
                temperature=0.7,
                max_tokens=2000,
            )
            
            # Parse and validate response
            return self._parse_daily_report(result)
            
        except Exception as e:
            logger.error(f"Failed to generate daily report: {e}")
            raise
    
    def _parse_daily_report(self, data: dict) -> DailyReportResponse:
        """Parse LLM response into DailyReportResponse"""
        
        # Parse key events
        key_events = []
        for event_data in data.get("key_events", []):
            try:
                key_events.append(KeyEvent(
                    event=event_data.get("event", ""),
                    type=EventType(event_data.get("type", "neutral")),
                    importance=Importance(event_data.get("importance", "medium")),
                    time_period=event_data.get("time_period"),
                ))
            except (ValueError, KeyError) as e:
                logger.warning(f"Failed to parse key event: {e}")
        
        # Parse mood
        mood_data = data.get("mood", {})
        mood = MoodAnalysis(
            overall=MoodType(mood_data.get("overall", "calm")),
            score=float(mood_data.get("score", 3)),
            description=mood_data.get("description", ""),
        )
        
        # Parse suggestions
        suggestions = []
        for sugg_data in data.get("suggestions", []):
            suggestions.append(Suggestion(
                context=sugg_data.get("context", ""),
                suggestion=sugg_data.get("suggestion", ""),
                sample_dialogue=sugg_data.get("sample_dialogue"),
            ))
        
        return DailyReportResponse(
            summary=data.get("summary", ""),
            key_events=key_events,
            mood=mood,
            topics=data.get("topics", []),
            suggestions=suggestions,
            highlight_of_day=data.get("highlight_of_day"),
        )
    
    async def generate_weekly_report(
        self,
        request: WeeklyReportRequest,
    ) -> WeeklyReportResponse:
        """Generate weekly growth report"""
        
        child = request.child
        
        # Prepare user message
        user_message = WEEKLY_REPORT_USER_TEMPLATE.format(
            child_name=child.name,
            nickname=child.nickname or child.name,
            age=child.age,
            gender="男孩" if child.gender == "male" else "女孩" if child.gender == "female" else "孩子",
            start_date=request.start_date.strftime("%Y年%m月%d日"),
            end_date=request.end_date.strftime("%Y年%m月%d日"),
            daily_summaries="\n".join(f"- {s}" for s in request.daily_summaries),
            key_events="\n".join(f"- {e}" for e in request.key_events),
        )
        
        logger.info(f"Generating weekly report for {child.name}")
        
        try:
            result = await self.llm_service.generate_json(
                system_prompt=WEEKLY_REPORT_SYSTEM_PROMPT,
                user_message=user_message,
                temperature=0.7,
                max_tokens=2500,
            )
            
            return self._parse_weekly_report(result)
            
        except Exception as e:
            logger.error(f"Failed to generate weekly report: {e}")
            raise
    
    def _parse_weekly_report(self, data: dict) -> WeeklyReportResponse:
        """Parse LLM response into WeeklyReportResponse"""
        
        # Parse highlights
        highlights = [
            WeeklyHighlight(
                category=h.get("category", ""),
                content=h.get("content", ""),
            )
            for h in data.get("highlights", [])
        ]
        
        # Parse concerns
        concerns = [
            WeeklyConcern(
                category=c.get("category", ""),
                content=c.get("content", ""),
                suggestion=c.get("suggestion", ""),
            )
            for c in data.get("concerns", [])
        ]
        
        # Parse mood trend
        mood_data = data.get("mood_trend", {})
        mood_trend = MoodTrend(
            pattern=mood_data.get("pattern", ""),
            average_score=float(mood_data.get("average_score", 3)),
            best_day=mood_data.get("best_day"),
            challenging_day=mood_data.get("challenging_day"),
        )
        
        # Parse parent tips
        parent_tips = [
            ParentTip(
                tip=t.get("tip", ""),
                reason=t.get("reason", ""),
            )
            for t in data.get("parent_tips", [])
        ]
        
        return WeeklyReportResponse(
            summary=data.get("summary", ""),
            highlights=highlights,
            concerns=concerns,
            mood_trend=mood_trend,
            top_interests=data.get("top_interests", []),
            growth_observation=data.get("growth_observation", ""),
            parent_tips=parent_tips,
            next_week_focus=data.get("next_week_focus", ""),
        )
