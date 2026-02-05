"""
Weekly Report Generation Prompts
"""

WEEKLY_REPORT_SYSTEM_PROMPT = """你是"小星伴"的AI助手，一位专业的儿童发展顾问。你的任务是帮助家长了解孩子的周度成长变化。

## 你的角色
- 你善于从多天的记录中发现规律和趋势
- 你能识别孩子的成长亮点和需要关注的模式
- 你的分析基于证据，但表达温暖积极

## 周报特点
- 比日报更宏观，关注趋势而非单一事件
- 发现跨越多天的模式
- 给出更有深度的建议
- 帮助家长看到"大局"

## 输出格式
严格按照JSON格式输出，不要添加任何额外文本。"""


WEEKLY_REPORT_USER_TEMPLATE = """请根据本周的记录，生成一份周度成长报告。

## 孩子信息
- 姓名：{child_name}
- 昵称：{nickname}
- 年龄：{age}岁
- 性别：{gender}

## 本周时间范围
{start_date} 至 {end_date}

## 本周每日摘要
{daily_summaries}

## 本周关键事件
{key_events}

## 输出要求
请以JSON格式输出：

{{
  "summary": "本周总结，3-5句话，概括孩子这周的整体状态和变化",
  "highlights": [
    {{
      "category": "分类（如：社交能力、学习兴趣、情绪发展、习惯养成等）",
      "content": "这个方面的亮点或进步"
    }}
  ],
  "concerns": [
    {{
      "category": "分类",
      "content": "需要关注的地方",
      "suggestion": "建议"
    }}
  ],
  "mood_trend": {{
    "pattern": "整体趋势描述",
    "average_score": 1-5的平均分,
    "best_day": "情绪最好的一天及原因",
    "challenging_day": "情绪最具挑战的一天及原因（如果有）"
  }},
  "top_interests": ["本周孩子最感兴趣的话题，最多5个"],
  "growth_observation": "一个具体的成长观察，描述你从记录中发现的成长迹象",
  "parent_tips": [
    {{
      "tip": "给家长的建议",
      "reason": "为什么这样建议"
    }}
  ],
  "next_week_focus": "下周建议重点关注的方面"
}}

## 注意事项
1. highlights最多3个，选最有意义的
2. concerns如果没有就写空数组
3. parent_tips最多2个
4. 用积极但客观的语气
5. 建议要具体、可行"""


# 月度报告模板
MONTHLY_REPORT_USER_TEMPLATE = """请根据本月的记录，生成一份月度成长报告。

## 孩子信息
- 姓名：{child_name}
- 年龄：{age}岁{months}个月

## 本月时间范围
{start_date} 至 {end_date}

## 本月周报摘要
{weekly_summaries}

## 输出要求
请以JSON格式输出：

{{
  "summary": "本月总结，5-8句话",
  "growth_milestones": ["本月达成的成长里程碑"],
  "development_areas": [
    {{
      "area": "发展领域",
      "progress": "进步描述",
      "evidence": "具体表现"
    }}
  ],
  "interest_evolution": "兴趣变化描述",
  "social_development": "社交发展观察",
  "emotional_patterns": "情绪模式分析",
  "recommendations": [
    {{
      "area": "建议领域",
      "recommendation": "具体建议",
      "activities": ["推荐活动"]
    }}
  ],
  "memorable_moments": ["本月最难忘的时刻"],
  "parent_reflection_prompts": ["给家长的思考问题，帮助家长更深入理解孩子"]
}}"""
