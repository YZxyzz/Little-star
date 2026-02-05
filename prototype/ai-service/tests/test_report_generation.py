"""
Test script for report generation
Run: python -m tests.test_report_generation
"""
import asyncio
from datetime import date, datetime

from models import (
    ChildProfile,
    RecordItem,
    DailyReportRequest,
    Gender,
)
from services import ReportService


async def test_daily_report():
    """Test daily report generation"""
    
    # Create test data
    child = ChildProfile(
        id="test-child-001",
        name="小明",
        nickname="明明",
        age=5,
        gender=Gender.MALE,
    )
    
    records = [
        RecordItem(
            id="record-001",
            content="今天早上小明在幼儿园画了一幅恐龙的画，老师表扬他画得很有创意，他特别开心。",
            tags=["幼儿园", "画画", "开心"],
            event_time=datetime(2025, 1, 15, 10, 30),
            created_at=datetime.now(),
        ),
        RecordItem(
            id="record-002",
            content="下午和小明的好朋友小华一起玩积木，两个人合作搭了一座城堡，但是后来因为谁放最后一块积木吵了一架。",
            tags=["朋友", "积木", "冲突"],
            event_time=datetime(2025, 1, 15, 15, 0),
            created_at=datetime.now(),
        ),
        RecordItem(
            id="record-003",
            content="晚上小明问我：'妈妈，恐龙为什么会灭绝？'他现在对恐龙特别感兴趣，已经连续问了好几天恐龙的问题了。",
            tags=["好奇心", "恐龙"],
            event_time=datetime(2025, 1, 15, 19, 30),
            created_at=datetime.now(),
        ),
    ]
    
    request = DailyReportRequest(
        child=child,
        records=records,
        report_date=date(2025, 1, 15),
    )
    
    # Generate report
    service = ReportService()
    
    print("=" * 60)
    print("Testing Daily Report Generation")
    print("=" * 60)
    print(f"\nChild: {child.name} ({child.age}岁)")
    print(f"Records: {len(records)}")
    print("\n" + "-" * 60)
    
    try:
        report = await service.generate_daily_report(request)
        
        print("\n📋 Daily Report Generated Successfully!\n")
        print(f"📝 Summary:\n{report.summary}\n")
        
        print("🎯 Key Events:")
        for event in report.key_events:
            emoji = "✅" if event.type == "positive" else "⚠️" if event.type == "negative" else "📌"
            print(f"  {emoji} [{event.importance}] {event.event}")
        
        print(f"\n😊 Mood: {report.mood.overall} (Score: {report.mood.score}/5)")
        print(f"   {report.mood.description}")
        
        print(f"\n🏷️ Topics: {', '.join(report.topics)}")
        
        print("\n💡 Suggestions:")
        for i, sugg in enumerate(report.suggestions, 1):
            print(f"\n  {i}. {sugg.context}")
            print(f"     建议: {sugg.suggestion}")
            if sugg.sample_dialogue:
                print(f"     对话示例: \"{sugg.sample_dialogue}\"")
        
        if report.highlight_of_day:
            print(f"\n⭐ Highlight of Day: {report.highlight_of_day}")
        
        print("\n" + "=" * 60)
        print("Test completed successfully!")
        
    except Exception as e:
        print(f"\n❌ Error: {e}")
        raise


async def test_empty_records():
    """Test with empty records"""
    
    child = ChildProfile(
        id="test-child-002",
        name="小红",
        age=4,
        gender=Gender.FEMALE,
    )
    
    request = DailyReportRequest(
        child=child,
        records=[],
        report_date=date.today(),
    )
    
    service = ReportService()
    
    print("\n" + "=" * 60)
    print("Testing with empty records")
    print("=" * 60)
    
    try:
        report = await service.generate_daily_report(request)
        print(f"\n📝 Summary: {report.summary}")
        print("Test completed!")
    except Exception as e:
        print(f"\n❌ Error: {e}")


if __name__ == "__main__":
    asyncio.run(test_daily_report())
