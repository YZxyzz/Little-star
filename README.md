# 小星伴 (Little Star)

> 懂孩子的成长伙伴

---

## 更新日志 (Changelog)

| 日期 | 版本 | 修改内容 | 修改文件 |
|------|------|---------|---------|
| **2026-02-08** | **v0.9.0** | **🔴 战略级发现**：三重价值模型（了解孩子+教育引导+**实时守护**），创建 Case Study #1: 电视崩溃事件，发现"危机干预"杀手级功能 | `case-01-tv-meltdown.md`, `brand-strategy.md`(部分) |
| **2026-02-08** | **v0.8.5** | **产品立意升级**：硅胶材质方案、Mooni M1竞品深度分析、权力与责任失衡理论、产品设计协作skill、用户调研协作skill | `hardware-specification.md`, `competitive-analysis.md`, `core-insight-power-imbalance.md` |
| **2026-02-08** | **v0.8.0** | **Git协作规则**：创建 collaboration.md（分支策略、冲突解决、kevin优先原则），更新 CLAUDE.md 添加 Git 协作规则 | `collaboration.md`, `CLAUDE.md`, `AGENTS.md` |
| **2025-02-05** | **v0.7.0** | **用户状态系统**：新增未登录状态、设备绑定完整流程、激活成功动画规格 | 全部APP设计文档 |
| 2025-02-05 | v0.6.0 | APP架构重构：导航简化为3 Tab（首页/记录/我的），记录Tab新增AI对话 | `03-information-architecture.md`, `04-wireframes.md` |
| 2025-02-05 | v0.5.1 | 文档同步机制：AGENTS.md新增自动同步规则，UI参考图文件夹 | `AGENTS.md`, `ui-references/` |
| 2025-02-05 | v0.5.0 | 前端Demo开发：React 19 + Vite + Tailwind，首页UI实现 | `prototype/frontend-demo/` |
| 2025-02-05 | v0.4.0 | 营销策略体系：品牌定位、GTM策略、小红书运营、众筹方案 | `brand-strategy.md`, `go-to-market.md` 等 |
| 2025-02-05 | v0.3.2 | 关键调整：蜂窝流量卡（非WiFi）、只做APP（不做小程序）、续费率目标50%+ | `mvp-specification.md`, `hardware-specification.md` |
| 2025-02-05 | v0.3.1 | 配对方式优化：proximity-based配对（长按激活+APP自动发现） | `hardware-specification.md` |
| 2025-02-05 | v0.3.0 | MVP策略重大更新：MVP=硬件+软件，48h续航，蜂窝网络，实时传输 | `mvp-specification.md`, `hardware-specification.md` |
| 2025-02-05 | v0.2.0 | 硬件设计更新：毛绒玩具形态、三种佩戴方式、振动反馈按钮 | `hardware-specification.md`, `character-ip-design.md` |
| 2025-02-04 | v0.1.0 | 项目初始化 | 全部文档 |

---

## 项目简介

小星伴是一款专为3-7岁学龄前儿童设计的AI陪伴产品。通过可穿戴设备和智能APP，帮助忙碌的父母更好地了解孩子的成长，获得科学的育儿指导。

### 核心价值（三重价值模型 ⭐ v0.9.0 升级）

**对孩子**
- AI陪伴对话：随时倾听、解答疑问
- 情感支持：在孩子需要时提供温暖的陪伴

**对父母（三重价值）**
1. **了解孩子**（事后）
   - 每日成长报告：了解孩子今天发生了什么
   - 长期成长档案：记录孩子的成长轨迹

2. **教育引导**（事后）
   - 育儿指导：针对具体情况的专业建议
   - 系统性育儿知识：从"知道"到"做到"

3. **实时守护**（事中）⭐ **新增**
   - 危机推送：识别孩子情绪过载，在家长快犯错时推送专业指导
   - 脑科学指导：4步应急响应协议，帮助家长冷静应对
   - 关系修复：在你最需要的时候，给你最对的那句话

## 项目结构

```
小星伴Little-star/
├── docs/                           # 📁 文档目录
│   ├── 01-market-research/         # 市场调研
│   │   ├── competitive-analysis.md # 竞品分析
│   │   ├── user-research-framework.md # 用户调研框架
│   │   └── market-size-analysis.md # 市场规模分析
│   ├── 02-product-spec/            # 产品规格
│   │   ├── mvp-specification.md    # MVP规格说明
│   │   └── api-specification.md    # API接口规格
│   ├── 03-hardware-design/         # 硬件设计 ⭐ 最近更新
│   │   ├── hardware-specification.md # 硬件规格（毛绒玩具设计）
│   │   ├── character-ip-design.md  # 角色IP设计
│   │   └── assets/                 # 🖼️ 设计参考图
│   │       ├── star-mascot-variant-02.jpg         # ⭐ 主选参考图（米白星星）
│   │       ├── star-mascot-variant-01.jpg         # 备选参考图（黄色星星）
│   │       └── star-mascot-PRIMARY-reference.jpg  # 云朵形态参考
│   ├── 04-privacy-security/        # 隐私安全
│   │   ├── privacy-framework.md    # 隐私合规框架
│   │   └── data-security-architecture.md # 数据安全架构
│   ├── 05-user-testing/            # 用户测试 ⭐ 新增战略洞察
│   │   ├── seed-user-testing-plan.md # 种子用户测试计划
│   │   ├── case-study-research-guide.md # 案例研究方法论（AI协作）
│   │   ├── HOW-TO-USE-RESEARCH-SKILL.md # 用户调研skill使用指南
│   │   ├── cases/                  # 用户案例库
│   │   │   └── case-power-responsibility-imbalance.md # 权力与责任失衡案例分析
│   │   └── insights/               # 核心洞察
│   │       └── core-insight-power-imbalance.md # 权力与责任失衡理论（战略级）
│   ├── 06-business-model/          # 商业模式
│   │   ├── pricing-strategy.md     # 定价策略
│   │   ├── brand-strategy.md       # 品牌定位与传播
│   │   ├── go-to-market.md         # GTM策略
│   │   ├── content-marketing.md    # 小红书运营策略
│   │   └── crowdfunding-marketing.md # 众筹营销策略
│   ├── 07-app-design/              # APP设计 ⭐ 完整
│   │   ├── 01-app-features.md      # 功能清单
│   │   ├── 02-user-journey.md      # 用户旅程
│   │   ├── 03-information-architecture.md  # 信息架构
│   │   ├── 04-wireframes.md        # 线框图与内容规格
│   │   ├── 05-ui-design-system.md  # UI设计系统
│   │   └── assets/ui-references/   # 🖼️ UI风格参考图 ⭐ 新增
│   ├── 08-case-studies/            # 📚 案例研究 ⭐ v0.9.0 新增
│   │   └── case-01-tv-meltdown.md  # Case Study #1: 电视崩溃事件（揭示"实时守护"价值）
│   └── 00-planning/                # 📋 规划协作
│       ├── product-design-brainstorm.md # 产品设计协作指南（AI协作）
│       └── HOW-TO-USE-DESIGN-SKILL.md # 产品设计skill使用指南
├── prototype/                      # 📁 原型代码
│   ├── ai-service/                 # Python后端服务
│   │   ├── main.py                 # FastAPI应用入口
│   │   ├── config.py               # 配置管理
│   │   ├── models.py               # Pydantic数据模型
│   │   ├── prompts/                # AI提示词模板
│   │   └── services/               # 业务服务层
│   └── frontend-demo/              # React前端Demo ⭐ Antigravity开发
│       ├── src/App.tsx             # 主应用（底部导航）
│       ├── src/pages/Home.tsx      # 首页（时间线、录音）
│       └── tailwind.config.js      # 品牌色配置
├── AGENTS.md                       # 🤖 AI协作指南（决策记录）
├── CLAUDE.md                       # 🤖 AI触发规则（快速命令）
├── collaboration.md                # 🔀 Git协作规则 ⭐ v0.8.0 新增
└── README.md                       # 📖 本文件（项目总览）
```

## 快速开始

### AI服务原型

```bash
# 进入AI服务目录
cd prototype/ai-service

# 创建虚拟环境
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt

# 配置环境变量
cp .env.example .env
# 编辑.env文件，填入你的API密钥

# 启动服务
python main.py
```

服务启动后，访问 http://localhost:8000/docs 查看API文档。

## 技术栈

### 后端
- Python + FastAPI
- PostgreSQL + Redis
- 阿里云通义千问 (qwen-max)

### 前端
- **正式APP**：React Native (iOS + Android)
- **Web Demo**：React 19 + Vite + TypeScript + Tailwind CSS（Antigravity开发）
- 不做微信小程序（推送受限、入口太深）
- UI风格：Duolingo风格（圆润、游戏感、高饱和度暖色）

### 硬件
- ESP32-S3 + 4G蜂窝模组
- 双麦克风阵列
- BLE 5.0（配对）+ 蜂窝网络（数据传输）
- 48小时续航

## 文档索引（完整版）

> 💡 **快速查找**：使用 `Ctrl+F` / `Cmd+F` 搜索关键词

### 📋 00-规划协作 ⭐ v0.8.5 新增

| 文件 | 描述 | 关键词 |
|------|------|--------|
| [product-design-brainstorm.md](docs/00-planning/product-design-brainstorm.md) | 产品设计协作指南 🆕 | AI协作、设计讨论模板、文档同步规则 |
| [HOW-TO-USE-DESIGN-SKILL.md](docs/00-planning/HOW-TO-USE-DESIGN-SKILL.md) | 产品设计skill使用指南 🆕 | 快速开始、典型场景、示例对话 |

### 📊 01-市场调研

| 文件 | 描述 | 关键词 |
|------|------|--------|
| [competitive-analysis.md](docs/01-market-research/competitive-analysis.md) | 竞品深度分析（含Mooni M1）🆕 | 竞品、PLAUD、飞书录音豆、儿童手表、Mooni M1 |
| [user-research-framework.md](docs/01-market-research/user-research-framework.md) | 用户调研框架 | 用户画像、需求、痛点 |
| [market-size-analysis.md](docs/01-market-research/market-size-analysis.md) | 市场规模分析 | TAM、SAM、SOM、市场规模 |

### 📱 02-产品规格

| 文件 | 描述 | 关键词 |
|------|------|--------|
| [mvp-specification.md](docs/02-product-spec/mvp-specification.md) | MVP产品规格 | 功能定义、技术架构、开发里程碑、数据库 |
| [api-specification.md](docs/02-product-spec/api-specification.md) | API接口规格 | REST API、接口、错误码 |

### 🔧 03-硬件设计 ⭐ 最近更新

| 文件 | 描述 | 关键词 |
|------|------|--------|
| [hardware-specification.md](docs/03-hardware-design/hardware-specification.md) | 硬件规格说明 | **毛绒玩具**、ESP32、麦克风、佩戴方式、振动、充电、模块化 |
| [character-ip-design.md](docs/03-hardware-design/character-ip-design.md) | 角色IP设计 | 星星、角色、配色、品牌、表情 |

**🖼️ 设计参考图**

| 文件 | 描述 | 说明 |
|------|------|------|
| [star-mascot-variant-02.jpg](docs/03-hardware-design/assets/star-mascot-variant-02.jpg) | ⭐ **主选参考** | 米白色星星，柔和配色，极简表情（只有两只眼睛） |
| [star-mascot-variant-01.jpg](docs/03-hardware-design/assets/star-mascot-variant-01.jpg) | 备选参考 | 黄色星星，小巧可爱，微笑表情 |
| [star-mascot-PRIMARY-reference.jpg](docs/03-hardware-design/assets/star-mascot-PRIMARY-reference.jpg) | 质感参考 | 白色云朵形态，毛绒质感参考，棕色小脚 |

### 🔒 04-隐私安全

| 文件 | 描述 | 关键词 |
|------|------|--------|
| [privacy-framework.md](docs/04-privacy-security/privacy-framework.md) | 隐私合规框架 | GDPR、CCPA、儿童隐私、COPPA |
| [data-security-architecture.md](docs/04-privacy-security/data-security-architecture.md) | 数据安全架构 | 加密、访问控制、安全 |

### 🧪 05-用户测试 ⭐ v0.8.5 战略洞察

| 文件 | 描述 | 关键词 |
|------|------|--------|
| [seed-user-testing-plan.md](docs/05-user-testing/seed-user-testing-plan.md) | 种子用户测试计划 | Beta测试、用户反馈、测试流程 |
| [case-study-research-guide.md](docs/05-user-testing/case-study-research-guide.md) | 案例研究方法论 🆕 | 6种家庭画像、44个研究问题、AI协作 |
| [HOW-TO-USE-RESEARCH-SKILL.md](docs/05-user-testing/HOW-TO-USE-RESEARCH-SKILL.md) | 用户调研skill使用指南 🆕 | 调研协作、典型场景 |
| [case-power-responsibility-imbalance.md](docs/05-user-testing/cases/case-power-responsibility-imbalance.md) | 权力与责任失衡案例 🆕 | 双职工家庭、照料者、教育原则 |
| [core-insight-power-imbalance.md](docs/05-user-testing/insights/core-insight-power-imbalance.md) | **权力与责任失衡理论** 🔴 **战略级** | 系统断层、产品必然性、市场判断 |

### 💰 06-商业模式 ⭐ 最近更新

| 文件 | 描述 | 关键词 |
|------|------|--------|
| [pricing-strategy.md](docs/06-business-model/pricing-strategy.md) | 定价策略 | 价格、订阅、众筹、商业模式 |
| [brand-strategy.md](docs/06-business-model/brand-strategy.md) | 品牌定位与传播 🆕 | 品牌、Slogan、卖点、信任 |
| [go-to-market.md](docs/06-business-model/go-to-market.md) | GTM策略 🆕 | 上市、时间线、预算、KPI |
| [content-marketing.md](docs/06-business-model/content-marketing.md) | 小红书运营 🆕 | 小红书、内容、KOC、投流 |
| [crowdfunding-marketing.md](docs/06-business-model/crowdfunding-marketing.md) | 众筹营销 🆕 | 众筹、预热、转化、发货 |

### 📱 07-APP设计 ⭐ 完整

| 文件 | 描述 | 关键词 |
|------|------|--------|
| [01-app-features.md](docs/07-app-design/01-app-features.md) | 功能清单 | 功能、模块 |
| [02-user-journey.md](docs/07-app-design/02-user-journey.md) | 用户旅程 | 流程、体验 |
| [03-information-architecture.md](docs/07-app-design/03-information-architecture.md) | 信息架构 | 导航、站点地图 |
| [04-wireframes.md](docs/07-app-design/04-wireframes.md) | 线框图与内容规格 | 页面布局、文案 |
| [05-ui-design-system.md](docs/07-app-design/05-ui-design-system.md) | UI设计系统 | 色彩、字体、组件 |
| [assets/ui-references/](docs/07-app-design/assets/ui-references/) | UI风格参考图 🆕 | 暖橙色、多彩、绿色角色IP风格 |

### 📚 08-案例研究 ⭐ v0.9.0 新增

| 文件 | 描述 | 关键词 |
|------|------|--------|
| [case-01-tv-meltdown.md](docs/08-case-studies/case-01-tv-meltdown.md) | **Case Study #1: 电视崩溃事件** 🔴 **战略级** | 情绪过载、危机干预、实时守护、脑科学、杀手级功能 |

**核心发现**：揭示产品"第三维度"价值 - **实时守护（事中）**

```
小星伴不仅是"事后了解 + 事后建议"
更是"事中守护" - 在你最需要的时候，帮你成为更好的父母
```

**案例概述**：孩子因不能看电视情绪崩溃，妈妈失控打了孩子，小星伴识别危机并推送脑科学指导，帮助妈妈在3分钟内化解危机、修复关系。

**战略意义**：
- 重新定义产品价值：从"双重价值"升级为"三重价值"
- 建立竞争壁垒：竞品不会在危机时刻主动帮你
- 信任飞轮：一次成功干预 = 深度信任建立

### 💻 原型代码

**AI服务（Python）**

| 文件 | 描述 | 关键词 |
|------|------|--------|
| [main.py](prototype/ai-service/main.py) | FastAPI应用入口 | API、服务、端点 |
| [models.py](prototype/ai-service/models.py) | 数据模型定义 | Pydantic、Schema |
| [llm_service.py](prototype/ai-service/services/llm_service.py) | LLM服务抽象 | DashScope、OpenAI、通义千问 |
| [report_service.py](prototype/ai-service/services/report_service.py) | 报告生成服务 | 日报、周报、成长报告 |
| [qa_service.py](prototype/ai-service/services/qa_service.py) | 育儿问答服务 | Q&A、育儿指导 |

**前端Demo（React + Antigravity）** ⭐ 新增

| 文件 | 描述 | 关键词 |
|------|------|--------|
| [App.tsx](prototype/frontend-demo/src/App.tsx) | 主应用入口 | 底部导航、Tab切换 |
| [Home.tsx](prototype/frontend-demo/src/pages/Home.tsx) | 首页组件 | 设备状态、今日报告、时间线 |
| [tailwind.config.js](prototype/frontend-demo/tailwind.config.js) | Tailwind配置 | 品牌色、字体、阴影 |

```bash
# 启动前端Demo
cd prototype/frontend-demo
npm install
npm run dev
# 访问 http://localhost:5173
```

---

## 核心差异化（v0.9.0 升级）

1. **实时危机干预** ⭐ **新增** - 在家长快犯错时推送专业指导，事中守护而非事后补救
   - 竞品只做"事后报告"，小星伴做"事中拯救"
   - 识别孩子情绪过载 + 家长失控，紧急推送脑科学指导
   - "在你最需要的时候，给你最对的那句话"

2. **长期记忆系统** - 跨越月/年的成长轨迹追踪
   - 竞品只记录短期对话，小星伴记录长期成长档案

3. **三重价值闭环** - 了解孩子（事后）+ 教育引导（事后）+ 实时守护（事中）
   - 竞品只解决"不知道孩子在想什么"
   - 小星伴解决"不知道 + 不会教 + 容易失控"

4. **隐私优先架构** - 本地优先处理，家长完全控制
   - 语音本地识别，特征向量上传，原始音频不离设备

5. **科学育儿落地** - 从"知道"到"做到"的转化
   - 育儿书教的，在危机时刻用得上

6. **可爱角色IP** - 孩子愿意佩戴、愿意互动的设计
   - 医用级硅胶材质，防水易清洁，可更换卡通外壳

## 最近更新亮点 🆕

### 2026-02-08 三重价值模型 ⭐⭐⭐ v0.9.0

**🔴 战略级发现：产品"第三维度"价值 - 实时守护（事中）**

从 Case Study #1（电视崩溃事件）中发现：

**旧模型（双重价值）**：
```
了解孩子（事后） + 教育引导（事后）
```

**新模型（三重价值）**：
```
了解孩子（事后） + 教育引导（事后） + 实时守护（事中）⭐
```

**核心洞察**：
> 育儿书教的方法，危机发生时总是想不起来。
> 小星伴在你最需要的那个瞬间，给你最对的那句话。

**产品定位升级**：
- 旧定位："帮你看懂孩子的成长"
- **新定位："在你最需要的时候，帮你成为更好的父母"**

**竞争壁垒**：
- Mooni M1 是"给孩子的玩具"（让孩子不无聊）
- 小星伴是"给家长的守护者"（在危机时刻帮助家长）
- **不在功能维度竞争，而在问题理解深度竞争**

📁 详见：[case-01-tv-meltdown.md](docs/08-case-studies/case-01-tv-meltdown.md)

---

### 2025-02-05 MVP策略重大更新 ⭐⭐⭐

**MVP = 硬件 + 软件 完整方案**（不再是APP-First）

| 特性 | 旧方案 | 新方案 |
|------|--------|--------|
| MVP范围 | 先做APP | **硬件 + 软件 一起做** |
| 续航 | 8小时 | **48小时（2天充一次电）** |
| 网络 | 依赖手机蓝牙 | **自带蜂窝流量卡（不依赖手机）** |
| 传输 | 定时同步 | **实时传输到云端** |
| APP | 微信小程序优先 | **React Native (iOS + Android)** |

**核心产品价值（三重价值模型 v0.9.0）**：

```
┌─────────────────────────┬─────────────────────────┬──────────────────────────┐
│   📊 了解孩子（事后）    │   📚 教育引导（事后）    │   🛡️ 实时守护（事中）⭐   │
├─────────────────────────┼─────────────────────────┼──────────────────────────┤
│ • 今天聊了什么话题       │ • 如何和孩子聊这个话题   │ • 识别孩子情绪过载        │
│ • 孩子的兴趣爱好         │ • 对话方式建议          │ • 识别家长情绪失控        │
│ • 开心/不开心的事        │ • 教育方式引导          │ • 紧急推送专业指导        │
│ • 好奇心问题            │ • 话题切入点建议        │ • 4步应急响应协议         │
│ • 情绪状态分析          │ • 示例对话模板          │ • 在你快犯错时拉你一把     │
└─────────────────────────┴─────────────────────────┴──────────────────────────┘
```

📁 详见：[mvp-specification.md](docs/02-product-spec/mvp-specification.md)

---

### 2025-02-05 硬件设计更新

硬件设计从**硬壳可穿戴**转变为**毛绒玩具形态**：

| 特性 | 旧设计 | 新设计 |
|------|--------|--------|
| 外观 | 硅胶外壳 | **毛茸茸的五角星毛绒玩具** |
| 佩戴 | 挂绳 | **三种方式**：别针/磁吸/吊坠 |
| 按钮 | 触摸按键 | **大物理按钮 + 振动反馈** |
| 充电 | 磁吸底座 | **USB-C线（从毛绒中引出）** |
| 架构 | 一体式 | **模块化**（可放入任何毛绒玩具） |

📁 详见：[hardware-specification.md](docs/03-hardware-design/hardware-specification.md)

📷 **设计参考图**：

| 参考图 | 说明 | 预览 |
|--------|------|------|
| [star-mascot-variant-02.jpg](docs/03-hardware-design/assets/star-mascot-variant-02.jpg) | ⭐ **主选参考** - 米白色星星，柔和配色，极简表情 | 五角星形态，只有两只眼睛 |
| [star-mascot-variant-01.jpg](docs/03-hardware-design/assets/star-mascot-variant-01.jpg) | 备选参考 - 黄色星星，小巧可爱 | 亮黄色，微笑表情 |
| [star-mascot-PRIMARY-reference.jpg](docs/03-hardware-design/assets/star-mascot-PRIMARY-reference.jpg) | 云朵形态参考 - 毛绒质感参考 | 白色云朵，棕色小脚 |

---

## 项目状态

**文档阶段** ✅
- [x] 市场调研与竞品分析
- [x] MVP功能定义与技术选型
- [x] 硬件工业设计规格（毛绒玩具+蜂窝网络）
- [x] 角色IP设计规范
- [x] APP UX设计（用户旅程、功能清单、信息架构、线框图）
- [x] UI设计系统（Duolingo风格）
- [x] 隐私合规框架（P0-P3分级）
- [x] 定价与商业模式
- [x] 品牌策略与营销方案

**开发阶段** 🚧
- [x] AI服务原型（Python + FastAPI）
- [x] 前端Demo（React + Tailwind，Antigravity开发）🆕
- [ ] React Native APP开发
- [ ] 硬件原型制作
- [ ] 种子用户招募

**上市阶段** 📅
- [ ] 众筹上线（目标：3个月内）

## 联系我们

- 项目负责人：[待填写]
- 邮箱：[待填写]

---

*小星伴 - 让每个孩子都有温暖的陪伴*
