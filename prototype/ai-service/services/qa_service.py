"""
Parenting Q&A Service
"""
import logging
from typing import Optional

from models import (
    ChildProfile,
    ParentingQARequest,
    ParentingQAResponse,
)
from prompts import (
    PARENTING_QA_SYSTEM_PROMPT,
    PARENTING_QA_USER_TEMPLATE,
    PARENTING_QA_GENERAL_TEMPLATE,
)
from .llm_service import get_llm_service

logger = logging.getLogger(__name__)


class QAService:
    """Service for parenting Q&A"""
    
    def __init__(self):
        self.llm_service = get_llm_service()
    
    async def answer_question(
        self,
        request: ParentingQARequest,
    ) -> ParentingQAResponse:
        """Answer a parenting question"""
        
        if request.child:
            # Personalized answer with child context
            user_message = PARENTING_QA_USER_TEMPLATE.format(
                child_name=request.child.name,
                age=request.child.age,
                gender="男孩" if request.child.gender == "male" else "女孩" if request.child.gender == "female" else "孩子",
                recent_context=request.recent_context or "暂无近期记录",
                question=request.question,
            )
        else:
            # General answer without child context
            user_message = PARENTING_QA_GENERAL_TEMPLATE.format(
                question=request.question,
            )
        
        logger.info(f"Answering parenting question: {request.question[:50]}...")
        
        try:
            answer = await self.llm_service.generate_text(
                system_prompt=PARENTING_QA_SYSTEM_PROMPT,
                user_message=user_message,
                temperature=0.7,
                max_tokens=1000,
            )
            
            # Extract related topics (simple keyword extraction)
            related_topics = self._extract_topics(request.question, answer)
            
            return ParentingQAResponse(
                answer=answer,
                related_topics=related_topics,
            )
            
        except Exception as e:
            logger.error(f"Failed to answer question: {e}")
            raise
    
    def _extract_topics(self, question: str, answer: str) -> list:
        """Extract related topics from Q&A"""
        # Simple keyword-based topic extraction
        # In production, use NLP or LLM for better extraction
        
        topic_keywords = {
            "分享": "分享与社交",
            "情绪": "情绪管理",
            "发脾气": "情绪管理",
            "哭": "情绪表达",
            "打人": "行为管理",
            "说谎": "诚实教育",
            "睡觉": "睡眠习惯",
            "吃饭": "饮食习惯",
            "幼儿园": "入园适应",
            "朋友": "社交能力",
            "学习": "学习兴趣",
            "专注": "注意力培养",
            "胆小": "自信培养",
            "害怕": "恐惧处理",
        }
        
        combined_text = question + answer
        topics = []
        
        for keyword, topic in topic_keywords.items():
            if keyword in combined_text and topic not in topics:
                topics.append(topic)
        
        return topics[:5]  # Return max 5 topics


class ConversationContext:
    """Manage conversation context for multi-turn Q&A"""
    
    def __init__(self, child: Optional[ChildProfile] = None):
        self.child = child
        self.history: list = []
        self.max_history = 5
    
    def add_turn(self, question: str, answer: str):
        """Add a conversation turn"""
        self.history.append({
            "question": question,
            "answer": answer,
        })
        
        # Keep only recent history
        if len(self.history) > self.max_history:
            self.history = self.history[-self.max_history:]
    
    def get_context_summary(self) -> str:
        """Get summary of conversation history"""
        if not self.history:
            return ""
        
        summary_parts = []
        for turn in self.history[-3:]:  # Last 3 turns
            summary_parts.append(f"问：{turn['question'][:50]}...")
            summary_parts.append(f"答：{turn['answer'][:100]}...")
        
        return "\n".join(summary_parts)
