# API接口规格说明

## 一、API概述

### 1.1 基础信息

| 项目 | 内容 |
|------|------|
| 基础URL | `https://api.littlestar.com/v1` |
| 协议 | HTTPS |
| 数据格式 | JSON |
| 字符编码 | UTF-8 |
| 认证方式 | Bearer Token (JWT) |

### 1.2 通用响应格式

**成功响应**
```json
{
  "code": 0,
  "message": "success",
  "data": { ... }
}
```

**错误响应**
```json
{
  "code": 10001,
  "message": "错误描述",
  "data": null
}
```

### 1.3 错误码定义

| 错误码 | 含义 |
|--------|------|
| 0 | 成功 |
| 10001 | 参数错误 |
| 10002 | 未授权 |
| 10003 | 权限不足 |
| 10004 | 资源不存在 |
| 10005 | 服务器错误 |
| 20001 | 用户不存在 |
| 20002 | 验证码错误 |
| 20003 | Token过期 |
| 30001 | AI服务错误 |
| 30002 | 语音识别失败 |

---

## 二、认证接口

### 2.1 发送验证码

**POST** `/auth/send-code`

请求参数：
```json
{
  "phone": "13800138000",
  "type": "login"  // login, register, reset
}
```

响应：
```json
{
  "code": 0,
  "message": "success",
  "data": {
    "expires_in": 300
  }
}
```

### 2.2 手机号登录/注册

**POST** `/auth/login`

请求参数：
```json
{
  "phone": "13800138000",
  "code": "123456"
}
```

响应：
```json
{
  "code": 0,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 2592000,
    "user": {
      "id": "uuid",
      "phone": "13800138000",
      "nickname": "用户昵称",
      "avatar_url": "https://...",
      "is_new": false
    }
  }
}
```

### 2.3 微信授权登录

> **说明**：APP内使用微信SDK实现授权登录，非小程序

**POST** `/auth/wechat-login`

请求参数：
```json
{
  "code": "wx_code_from_wechat_sdk"  // 微信开放平台授权码
}
```

响应：
```json
{
  "code": 0,
  "message": "success",
  "data": {
    "token": "...",
    "user": { ... },
    "need_bindPhone": true
  }
}
```

### 2.4 绑定手机号

**POST** `/auth/bindPhone`

请求参数：
```json
{
  "phone": "13800138000",
  "code": "123456"
}
```

---

## 三、用户接口

### 3.1 获取用户信息

**GET** `/user/profile`

响应：
```json
{
  "code": 0,
  "data": {
    "id": "uuid",
    "phone": "138****8000",
    "nickname": "用户昵称",
    "avatar_url": "https://...",
    "children_count": 1,
    "created_at": "2025-01-01T00:00:00Z"
  }
}
```

### 3.2 更新用户信息

**PUT** `/user/profile`

请求参数：
```json
{
  "nickname": "新昵称",
  "avatar_url": "https://..."
}
```

---

## 四、孩子档案接口

### 4.1 创建孩子档案

**POST** `/children`

请求参数：
```json
{
  "name": "宝宝",
  "nickname": "小宝",
  "gender": "male",  // male, female
  "birth_date": "2020-06-15",
  "avatar_url": "https://..."
}
```

响应：
```json
{
  "code": 0,
  "data": {
    "id": "child_uuid",
    "name": "宝宝",
    "nickname": "小宝",
    "gender": "male",
    "birth_date": "2020-06-15",
    "age": 4,
    "avatar_url": "https://...",
    "created_at": "2025-01-01T00:00:00Z"
  }
}
```

### 4.2 获取孩子列表

**GET** `/children`

响应：
```json
{
  "code": 0,
  "data": {
    "children": [
      {
        "id": "child_uuid",
        "name": "宝宝",
        "nickname": "小宝",
        "gender": "male",
        "age": 4,
        "avatar_url": "https://...",
        "today_records_count": 3,
        "last_record_at": "2025-01-15T14:30:00Z"
      }
    ]
  }
}
```

### 4.3 获取孩子详情

**GET** `/children/{child_id}`

响应：
```json
{
  "code": 0,
  "data": {
    "id": "child_uuid",
    "name": "宝宝",
    "nickname": "小宝",
    "gender": "male",
    "birth_date": "2020-06-15",
    "age": 4,
    "avatar_url": "https://...",
    "stats": {
      "total_records": 156,
      "total_reports": 52,
      "streak_days": 7
    },
    "recent_topics": ["恐龙", "画画", "幼儿园"],
    "family_members": [
      {
        "user_id": "uuid",
        "nickname": "妈妈",
        "relationship": "mother",
        "avatar_url": "https://..."
      }
    ]
  }
}
```

### 4.4 更新孩子档案

**PUT** `/children/{child_id}`

请求参数：
```json
{
  "name": "新名字",
  "nickname": "新昵称"
}
```

### 4.5 删除孩子档案

**DELETE** `/children/{child_id}`

---

## 五、记录接口

### 5.1 获取上传签名（语音文件）

**POST** `/records/upload-signature`

请求参数：
```json
{
  "child_id": "child_uuid",
  "file_type": "audio",
  "file_ext": "m4a"
}
```

响应：
```json
{
  "code": 0,
  "data": {
    "upload_url": "https://oss-cn-hangzhou.aliyuncs.com/...",
    "file_key": "records/2025/01/15/uuid.m4a",
    "expires_at": "2025-01-15T15:00:00Z",
    "headers": {
      "Content-Type": "audio/m4a"
    }
  }
}
```

### 5.2 创建记录

**POST** `/records`

请求参数：
```json
{
  "child_id": "child_uuid",
  "content_type": "audio",  // audio, text
  "audio_key": "records/2025/01/15/uuid.m4a",  // 如果是audio
  "text_content": "今天宝宝在幼儿园...",  // 如果是text
  "tags": ["幼儿园", "开心"],
  "event_time": "2025-01-15T10:00:00Z"
}
```

响应：
```json
{
  "code": 0,
  "data": {
    "id": "record_uuid",
    "child_id": "child_uuid",
    "content_type": "audio",
    "audio_url": "https://...",
    "transcript": null,  // 异步转写
    "tags": ["幼儿园", "开心"],
    "event_time": "2025-01-15T10:00:00Z",
    "status": "processing",  // processing, completed, failed
    "created_at": "2025-01-15T14:30:00Z"
  }
}
```

### 5.3 获取记录列表

**GET** `/records?child_id={child_id}&date={date}&page={page}&limit={limit}`

查询参数：
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| child_id | string | 是 | 孩子ID |
| date | string | 否 | 日期过滤，格式：2025-01-15 |
| start_date | string | 否 | 开始日期 |
| end_date | string | 否 | 结束日期 |
| tags | string | 否 | 标签过滤，逗号分隔 |
| page | int | 否 | 页码，默认1 |
| limit | int | 否 | 每页数量，默认20 |

响应：
```json
{
  "code": 0,
  "data": {
    "records": [
      {
        "id": "record_uuid",
        "content_type": "audio",
        "audio_url": "https://...",
        "transcript": "今天宝宝在幼儿园画了一幅画...",
        "tags": ["幼儿园", "画画"],
        "event_time": "2025-01-15T10:00:00Z",
        "created_at": "2025-01-15T14:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 156,
      "total_pages": 8
    }
  }
}
```

### 5.4 获取记录详情

**GET** `/records/{record_id}`

### 5.5 删除记录

**DELETE** `/records/{record_id}`

---

## 六、报告接口

### 6.1 获取每日报告

**GET** `/reports/daily?child_id={child_id}&date={date}`

响应：
```json
{
  "code": 0,
  "data": {
    "id": "report_uuid",
    "child_id": "child_uuid",
    "report_date": "2025-01-15",
    "summary": "今天小宝度过了充实的一天。在幼儿园画了一幅恐龙的画，老师表扬了他的创意。下午和小明一起玩了积木，两人合作搭了一座城堡。",
    "key_events": [
      {
        "event": "画了恐龙画，得到老师表扬",
        "type": "positive",
        "importance": "high",
        "time": "上午"
      },
      {
        "event": "和小明合作搭积木",
        "type": "positive",
        "importance": "medium",
        "time": "下午"
      }
    ],
    "mood": {
      "overall": "happy",
      "score": 4.5,
      "description": "今天整体心情很好，有成就感"
    },
    "topics": ["恐龙", "画画", "积木", "小明"],
    "suggestions": [
      {
        "context": "画恐龙得到表扬",
        "suggestion": "可以和孩子聊聊他的画，问问恐龙的故事，鼓励他的创造力",
        "sample_dialogue": "宝宝，听说你今天画了一只恐龙！能给我讲讲这只恐龙的故事吗？"
      }
    ],
    "records_count": 3,
    "created_at": "2025-01-15T20:00:00Z"
  }
}
```

### 6.2 获取报告列表

**GET** `/reports/daily/list?child_id={child_id}&start_date={start_date}&end_date={end_date}`

响应：
```json
{
  "code": 0,
  "data": {
    "reports": [
      {
        "id": "report_uuid",
        "report_date": "2025-01-15",
        "summary": "今天小宝度过了充实的一天...",
        "mood": {
          "overall": "happy",
          "score": 4.5
        },
        "records_count": 3
      }
    ],
    "pagination": { ... }
  }
}
```

### 6.3 获取周报

**GET** `/reports/weekly?child_id={child_id}&week={week}`

查询参数：
- week: 周次，格式 2025-W03（2025年第3周）

响应：
```json
{
  "code": 0,
  "data": {
    "id": "report_uuid",
    "child_id": "child_uuid",
    "period_type": "weekly",
    "start_date": "2025-01-13",
    "end_date": "2025-01-19",
    "summary": "本周小宝在社交和创造力方面都有进步...",
    "highlights": [
      {
        "category": "社交能力",
        "content": "和小明建立了更深的友谊，学会了分享玩具"
      },
      {
        "category": "创造力",
        "content": "对画画的兴趣持续增加，画了3幅作品"
      }
    ],
    "mood_trend": {
      "data": [4.5, 4.0, 4.2, 3.8, 4.5, 4.8, 4.5],
      "average": 4.33,
      "trend": "stable"
    },
    "top_topics": ["恐龙", "画画", "小明", "积木"],
    "recommendations": [
      "可以给孩子买一些恐龙主题的绘本，满足他的好奇心",
      "多创造和小明一起玩的机会，培养社交能力"
    ],
    "daily_reports_count": 7,
    "total_records_count": 21
  }
}
```

### 6.4 获取月报

**GET** `/reports/monthly?child_id={child_id}&month={month}`

查询参数：
- month: 月份，格式 2025-01

---

## 七、AI助手接口

### 7.1 育儿问答

**POST** `/ai/ask`

请求参数：
```json
{
  "child_id": "child_uuid",
  "question": "孩子最近总是不愿意分享玩具，怎么引导？"
}
```

响应：
```json
{
  "code": 0,
  "data": {
    "answer": "4岁的孩子不愿意分享是很正常的发展阶段...",
    "related_records": [
      {
        "id": "record_uuid",
        "snippet": "今天和小明抢玩具...",
        "date": "2025-01-14"
      }
    ],
    "suggested_readings": [
      {
        "title": "如何培养孩子的分享意识",
        "url": "https://..."
      }
    ]
  }
}
```

### 7.2 对话历史

**GET** `/ai/history?child_id={child_id}&page={page}&limit={limit}`

响应：
```json
{
  "code": 0,
  "data": {
    "conversations": [
      {
        "id": "conv_uuid",
        "question": "孩子最近总是不愿意分享玩具，怎么引导？",
        "answer": "4岁的孩子不愿意分享是很正常的...",
        "created_at": "2025-01-15T14:30:00Z"
      }
    ],
    "pagination": { ... }
  }
}
```

### 7.3 多模型智能路由

> **说明**：系统根据输入类型和复杂度自动选择最优模型组合。

**POST** `/ai/route`

请求参数：
```json
{
  "child_id": "child_uuid",
  "input_type": "audio",  // audio, text, image, mixed
  "content": {
    "audio_key": "records/2025/01/15/uuid.m4a",  // 如果是audio
    "text": "孩子今天在幼儿园...",  // 如果是text
    "image_key": "images/xxx.jpg"  // 如果是image
  },
  "task_type": "transcription",  // transcription, analysis, report, qa
  "privacy_level_override": null  // 可选：强制指定隐私级别
}
```

响应：
```json
{
  "code": 0,
  "data": {
    "task_id": "task_uuid",
    "routed_models": [
      {
        "model": "qwen_audio",
        "task": "transcription",
        "status": "processing"
      },
      {
        "model": "minimax",
        "task": "analysis",
        "status": "pending"
      }
    ],
    "privacy_classification": {
      "level": "P1",
      "processing_location": "cloud_anonymized",
      "data_retention": "session_only"
    },
    "estimated_time_seconds": 15
  }
}
```

### 7.4 获取处理状态

**GET** `/ai/tasks/{task_id}`

响应：
```json
{
  "code": 0,
  "data": {
    "task_id": "task_uuid",
    "status": "completed",  // processing, completed, failed
    "progress": 100,
    "results": {
      "transcription": {
        "model": "qwen_audio",
        "text": "转写文本...",
        "confidence": 0.95,
        "speakers": [
          {"id": "speaker_1", "segments": [...]}
        ]
      },
      "analysis": {
        "model": "minimax",
        "entities": [...],
        "topics": [...],
        "sentiment": "positive"
      }
    },
    "privacy_audit": {
      "input_level": "P1",
      "output_level": "P2",
      "anonymization_applied": true,
      "local_processing_used": false
    }
  }
}
```

### 7.5 语义搜索记忆

**POST** `/ai/memory/search`

请求参数：
```json
{
  "child_id": "child_uuid",
  "query": "孩子最近对什么话题感兴趣",
  "search_type": "semantic",  // semantic, keyword, hybrid
  "date_range": {
    "start": "2025-01-01",
    "end": "2025-01-15"
  },
  "limit": 10
}
```

响应：
```json
{
  "code": 0,
  "data": {
    "results": [
      {
        "id": "memory_uuid",
        "type": "episodic",  // episodic, semantic, task
        "content": "孩子对恐龙很感兴趣，问了很多问题...",
        "relevance_score": 0.92,
        "source": {
          "record_id": "record_uuid",
          "date": "2025-01-14"
        },
        "topics": ["恐龙", "好奇心"]
      }
    ],
    "total_matches": 15,
    "search_metadata": {
      "vector_db": "milvus",
      "embedding_model": "bge_large"
    }
  }
}
```

---

## 八、隐私分级接口

### 8.1 获取隐私设置

**GET** `/privacy/settings`

响应：
```json
{
  "code": 0,
  "data": {
    "privacy_levels": {
      "P0_local_only": {
        "enabled": true,
        "data_types": ["raw_audio", "full_transcript"],
        "description": "原始音频永不上传"
      },
      "P1_abstracted": {
        "enabled": true,
        "cloud_summary": true,
        "description": "敏感信息仅上传摘要"
      },
      "P2_encrypted": {
        "enabled": true,
        "cloud_storage": true,
        "description": "AI报告加密存储"
      },
      "P3_analytics": {
        "enabled": false,
        "description": "匿名使用统计"
      }
    },
    "local_processing": {
      "enabled": true,
      "model": "qwen_2.5_local",
      "capabilities": ["transcription", "simple_qa"]
    },
    "data_retention": {
      "P0_audio": "local_permanent",
      "P1_profile": "account_lifetime",
      "P2_reports": "365_days",
      "P3_stats": "90_days"
    }
  }
}
```

### 8.2 更新隐私设置

**PUT** `/privacy/settings`

请求参数：
```json
{
  "P3_analytics": {
    "enabled": true
  },
  "data_retention": {
    "P2_reports": "180_days"
  }
}
```

### 8.3 获取数据隐私报告

**GET** `/privacy/report?child_id={child_id}`

响应：
```json
{
  "code": 0,
  "data": {
    "child_id": "child_uuid",
    "data_summary": {
      "P0_local": {
        "audio_files": 156,
        "storage_size_mb": 512,
        "oldest_record": "2024-06-01"
      },
      "P1_abstracted": {
        "profile_fields": 5,
        "abstracted_summaries": 52
      },
      "P2_cloud": {
        "daily_reports": 180,
        "weekly_reports": 26,
        "ai_conversations": 45
      },
      "P3_analytics": {
        "usage_events": 0,
        "status": "disabled"
      }
    },
    "processing_history": {
      "local_only_tasks": 1200,
      "cloud_anonymized_tasks": 300,
      "last_cloud_upload": "2025-01-15T10:00:00Z"
    },
    "export_available": true
  }
}
```

### 8.4 请求数据删除

**POST** `/privacy/delete-request`

请求参数：
```json
{
  "child_id": "child_uuid",
  "scope": "selective",  // selective, all
  "data_types": ["P2_reports"],  // 如果selective
  "date_range": {
    "start": "2024-01-01",
    "end": "2024-06-30"
  },
  "confirmation_code": "123456"  // 短信验证码
}
```

响应：
```json
{
  "code": 0,
  "data": {
    "request_id": "delete_request_uuid",
    "status": "pending",
    "estimated_completion": "72_hours",
    "affected_data": {
      "reports_count": 180,
      "conversations_count": 30
    },
    "note": "P0本地数据需在设备端手动删除"
  }
}
```

---

## 九、家庭成员接口

### 8.1 邀请家庭成员

**POST** `/family/invite`

请求参数：
```json
{
  "child_id": "child_uuid",
  "phone": "13900139000",
  "relationship": "father"  // father, mother, grandmother, grandfather, other
}
```

响应：
```json
{
  "code": 0,
  "data": {
    "invite_code": "ABC123",
    "expires_at": "2025-01-22T00:00:00Z"
  }
}
```

### 8.2 接受邀请

**POST** `/family/join`

请求参数：
```json
{
  "invite_code": "ABC123"
}
```

### 8.3 获取家庭成员列表

**GET** `/family/members?child_id={child_id}`

响应：
```json
{
  "code": 0,
  "data": {
    "members": [
      {
        "id": "member_uuid",
        "user_id": "user_uuid",
        "nickname": "妈妈",
        "relationship": "mother",
        "avatar_url": "https://...",
        "permissions": {
          "can_record": true,
          "can_view_reports": true,
          "can_manage": true
        },
        "joined_at": "2025-01-01T00:00:00Z"
      }
    ]
  }
}
```

### 8.4 移除家庭成员

**DELETE** `/family/members/{member_id}`

---

## 九、设置接口

### 9.1 获取通知设置

**GET** `/settings/notifications`

响应：
```json
{
  "code": 0,
  "data": {
    "daily_report_push": true,
    "daily_report_time": "20:00",
    "weekly_report_push": true,
    "record_reminder": true,
    "record_reminder_time": "19:00"
  }
}
```

### 9.2 更新通知设置

**PUT** `/settings/notifications`

请求参数：
```json
{
  "daily_report_push": true,
  "daily_report_time": "21:00"
}
```

### 9.3 获取隐私设置

**GET** `/settings/privacy`

响应：
```json
{
  "code": 0,
  "data": {
    "data_retention_days": 365,
    "allow_ai_training": false,
    "export_enabled": true
  }
}
```

### 9.4 导出数据

**POST** `/settings/export`

请求参数：
```json
{
  "child_id": "child_uuid",
  "start_date": "2024-01-01",
  "end_date": "2025-01-15",
  "include_records": true,
  "include_reports": true
}
```

响应：
```json
{
  "code": 0,
  "data": {
    "export_id": "export_uuid",
    "status": "processing",
    "estimated_time": 60
  }
}
```

### 9.5 获取导出状态

**GET** `/settings/export/{export_id}`

响应：
```json
{
  "code": 0,
  "data": {
    "export_id": "export_uuid",
    "status": "completed",  // processing, completed, failed
    "download_url": "https://...",
    "expires_at": "2025-01-22T00:00:00Z"
  }
}
```

---

## 十、Webhook接口（内部）

### 10.1 语音转写完成回调

**POST** `/internal/webhooks/transcription-complete`

请求参数：
```json
{
  "record_id": "record_uuid",
  "transcript": "转写后的文本内容...",
  "status": "success",
  "duration": 45.5,
  "language": "zh-CN"
}
```

### 10.2 报告生成完成回调

**POST** `/internal/webhooks/report-complete`

请求参数：
```json
{
  "report_id": "report_uuid",
  "report_type": "daily",
  "child_id": "child_uuid",
  "status": "success"
}
```
