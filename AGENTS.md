# 小星伴项目 AI 协作指南

> **重要**：这是给 AI 助手的项目上下文文件。每次对话开始时应阅读此文件，对话结束时应更新相关内容。

---

## 一、项目概述

**产品名称**：小星伴 (Little Star)

**一句话描述**：3-7岁孩子的AI成长伙伴，帮助父母了解孩子、科学育儿

**核心价值**：
- 对孩子：温暖的AI陪伴对话
- 对父母：每日成长报告 + 育儿指导

**品牌Slogan**：`懂孩子的成长伙伴`

---

## 二、关键决策记录

> 在对话中做出的重要决策，请更新到此处

| 日期 | 决策 | 原因 | 影响文档 |
|------|------|------|---------|
| 2025-02-05 | MVP = 硬件+软件完整方案 | 只做APP无法验证核心价值 | mvp-specification.md |
| 2025-02-05 | 硬件采用蜂窝流量卡，非WiFi | 用户不需要配置WiFi，设备独立联网 | hardware-specification.md |
| 2025-02-05 | 只做React Native APP，不做微信小程序 | 小程序推送受限、入口太深 | mvp-specification.md, app-ux-design.md |
| 2025-02-05 | **会员定价**：月度¥29.9（原价¥39.9），年度¥299（专属年报） | 年费引导+专属权益 | pricing-strategy.md |
| 2025-02-05 | 续费率目标50%+（及格线），60%（目标） | 原10%太低，调高预期 | mvp-specification.md |
| 2025-02-05 | 众筹三档：399/499/599，无家庭装 | 一个家庭一台够用 | pricing-strategy.md |
| 2025-02-05 | 产品只有语音功能，无视觉 | 硬件限制 | character-ip-design.md |
| 2025-02-05 | UI设计采用Duolingo风格 | 年轻化、游戏感、高饱和度暖色 | 05-ui-design-system.md |
| 2025-02-05 | 前端Demo用React+Vite+Tailwind | 快速验证UI，Antigravity辅助开发 | prototype/frontend-demo/ |
| 2025-02-05 | 硬件外观主选variant-02参考图 | 米白色星星，柔和配色，极简表情 | assets/star-mascot-variant-02.jpg |
| 2025-02-05 | UI风格待重新确定 | 原Duolingo风格不满意，新增参考图 | docs/07-app-design/assets/ui-references/ |
| 2025-02-05 | APP导航简化为3 Tab | 首页+记录+我的，极简设计 | 03-information-architecture.md, 04-wireframes.md |
| 2025-02-05 | 记录Tab包含AI对话 | "最了解孩子的AI"，父母可直接对话 | 04-wireframes.md |
| 2025-02-05 | **用户状态系统** | 4种状态：未登录→已登录未绑定→激活成功→正常使用 | 全部APP设计文档 |
| 2025-02-05 | **设备绑定流程5步** | 创建档案→准备设备→扫描配对→连接中→激活流量 | 03-information-architecture.md, 04-wireframes.md |
| 2025-02-05 | **激活成功动画** | 4秒炫酷动画：星星绽放→光环扩散→成功标识→祝福语 | 04-wireframes.md, app-ux-design.md |
| 2025-02-05 | **价格信息隐藏策略** | 绑定流程不展示价格，只在"我的→会员中心"显示 | 04-wireframes.md, 03-information-architecture.md |
| 2025-02-05 | **行业入门指南** | 新增AI录音硬件行业完全入门指南（PLAUD/钉钉拆解、成本估算） | ai-audio-hardware-guide.md |
| 2025-02-05 | **开发路线图** | 4阶段开发策略：APP样式→后端接入→硬件集成→正式硬件。软件先行，**日报价值验证**后再投入硬件 | development-roadmap.md |
| 2025-02-05 | **日报模板v3.0** | 基于技术可行性重新设计：只呈现"孩子说了什么"，不假装知道行程；离散情绪时刻而非曲线；大量引用原话 | daily-report-template.md |

---

## 三、当前项目状态

### 文档完成度

| 模块 | 状态 | 主要文档 |
|------|------|---------|
| 市场调研 | ✅ 完成 | competitive-analysis.md, market-size-analysis.md |
| 产品规格 | ✅ 完成 | mvp-specification.md, api-specification.md, app-ux-design.md |
| 硬件设计 | ✅ 完成 | hardware-specification.md, character-ip-design.md |
| 隐私安全 | ✅ 完成 | privacy-framework.md, data-security-architecture.md |
| 用户测试 | ✅ 完成 | seed-user-testing-plan.md |
| 商业模式 | ✅ 完成 | pricing-strategy.md, brand-strategy.md, go-to-market.md |
| APP设计 | ✅ 完成 | 01-app-features.md ~ 05-ui-design-system.md |
| 营销策略 | ✅ 完成 | content-marketing.md, crowdfunding-marketing.md |

### 开发进度

| 模块 | 状态 | 说明 |
|------|------|------|
| AI服务原型 | ✅ 完成 | Python + FastAPI，prototype/ai-service/ |
| 前端Demo | 🚧 进行中 | React 19 + Vite + Tailwind，Antigravity开发 |
| React Native APP | ❌ 未开始 | 正式APP开发 |
| 硬件原型 | ❌ 未开始 | 等待设计定稿 |

### 待完成

- [ ] 前端Demo完善（报告页、消息页、我的页）
- [ ] React Native APP开发
- [ ] 硬件原型制作
- [ ] 种子用户招募
- [ ] 众筹上线

---

## 四、自动文档同步规则

> **核心原则**：每次任务完成后，**直接执行同步，不要询问**。如果不确定更新哪个文件，列出候选让用户确认。

### 4.1 同步触发条件 & 动作

| 变更类型 | 自动同步动作 | 目标文件 |
|----------|-------------|----------|
| **新增/删除文件** | 更新项目结构 | `README.md` |
| **新增代码功能** | 更新开发进度 | `AGENTS.md` → 三、开发进度 |
| **新增文档** | 添加到文档索引 | `README.md` → 文档索引 |
| **重要决策** | 追加决策记录 | `AGENTS.md` → 二、关键决策记录 |
| **修改定价/商业模式** | 检查并同步一致性 | `pricing-strategy.md` ↔ `AGENTS.md` |
| **修改硬件规格** | 检查并同步一致性 | `hardware-specification.md` ↔ `mvp-specification.md` |
| **UI/设计变更** | 更新设计约定 | `05-ui-design-system.md`, `AGENTS.md` |
| **Bug修复/重要改动** | 记录到更新日志 | `README.md` → 更新日志 |

### 4.2 同步优先级

```
高优先级（必须同步）：
├── AGENTS.md      → 决策记录、项目状态、重要约定
├── README.md      → 项目结构、文档索引、更新日志
└── 被直接修改的文档 → 检查关联文档一致性

中优先级（建议同步）：
├── pricing-strategy.md     → 价格相关变更
├── hardware-specification.md → 硬件相关变更
└── mvp-specification.md    → 功能范围变更

低优先级（按需同步）：
└── 其他文档 → 仅在内容冲突时更新
```

### 4.3 执行规范

1. **不要问，直接做**
   - ❌ "是否需要我更新文档？"
   - ✅ 直接执行更新，在回复末尾简述同步了什么

2. **不确定时列出候选**
   - 列出可能需要更新的文件
   - 让用户确认后再执行

3. **同步完成后的输出格式**
   ```
   ---
   📝 已同步更新：
   - AGENTS.md: 添加决策记录 "xxx"
   - README.md: 更新项目结构
   ```

4. **版本号规则**（README.md 更新日志）
   - 重大功能/架构变更：+0.1.0（如 v0.5.0 → v0.6.0）
   - 小改动/修复：+0.0.1（如 v0.5.0 → v0.5.1）

---

## 五、文档结构

```
docs/
├── 01-market-research/      # 市场调研
├── 02-product-spec/         # 产品规格（MVP、API、APP UX）
├── 03-hardware-design/      # 硬件设计（规格、IP设计）
├── 04-privacy-security/     # 隐私安全
├── 05-user-testing/         # 用户测试
├── 06-business-model/       # 商业模式（定价、品牌、GTM、营销）
└── 07-app-design/           # APP设计（功能、旅程、架构、线框图、UI系统）

prototype/
├── ai-service/              # Python后端（FastAPI）
└── frontend-demo/           # React前端Demo（Antigravity开发）⭐
    ├── src/App.tsx          # 主入口（底部导航）
    ├── src/pages/Home.tsx   # 首页（设备状态、今日报告、时间线）
    └── tailwind.config.js   # 品牌色配置
```

---

## 六、重要约定

### 技术约定

- **APP平台**：React Native (iOS + Android)，不做微信小程序
- **APP导航**：3 Tab（首页、记录、我的）
- **前端Demo**：React 19 + Vite + TypeScript + Tailwind CSS（Antigravity开发）
- **硬件网络**：蜂窝流量卡（非WiFi）
- **隐私架构**：P0-P3四级分类，P0数据永不离开设备
- **UI风格**：Duolingo风格（圆润、游戏感、高饱和度暖色）

### 产品约定

- **目标用户**：3-7岁孩子的家长，一二线城市中产家庭
- **核心功能**：AI对话 + 每日报告 + 成长档案 + 育儿建议
- **差异化**：不是学习机，是"成长记录官"

### 商业约定

- **硬件定价**：¥699（众筹优惠到¥399-599）
- **首年体验**：购买硬件即含首年服务（免费）
- **续费方案**：
  - 月度会员：¥29.9/月（原价¥39.9，自动续费）
  - 年度会员：¥299/年（推荐，专属年报+成长档案）
- **续费率目标**：60%（及格线50%）

---

## 七、最近一次更新

**日期**：2025-02-05

**更新内容**：
- ⭐ **用户状态系统**：定义4种状态（未登录、已登录未绑定、激活成功、正常使用）
- ⭐ **设备绑定完整流程**：5步向导（创建档案→准备设备→扫描配对→连接中→激活流量）
- ⭐ **激活成功动画规格**：4秒炫酷动画（星星绽放→光环扩散→成功标识→祝福语）
- 更新文档：03-information-architecture.md、04-wireframes.md、02-user-journey.md、01-app-features.md、app-ux-design.md
- 所有APP设计文档同步更新

---

*此文件由 AI 助手维护，请在每次重要对话后更新*
