# 小星伴 项目看板 & 更新日志

> **最后更新**：2026-02-09
> **当前阶段**：阶段1 - APP Demo 样式完善
> **当前重点**：日报详情页 v4.0 实现 + 视觉素材补足
>
> **给 AI 的说明**：这是项目的核心任务追踪文件。每次会话开始时请先读这个文件，了解项目进度。完成任务后请更新状态。

---

## 项目阶段总览

```
阶段1 APP Demo ⬅️ 当前    →    阶段2 后端接入    →    阶段3 硬件集成    →    MVP验证    →    阶段4 正式硬件
```

详见 [development-roadmap.md](../02-product-spec/development-roadmap.md)

---

## 当前任务看板

### P0 - 正在做 / 必须马上做

| # | 任务 | 状态 | 说明 | 关联文件 |
|---|------|------|------|---------|
| T-01 | **日报详情页重构 (ReportDetail v4.0)** | 🔴 待开发 | 按 daily-report-template.md v4.0 重新搭建8个Part | `ReportDetail.tsx`, `daily-report-template.md` |
| T-02 | 扩充 scenarios.ts 数据模型 | ✅ 完成 | 8个新接口 + MEMORY_MAP 完整 mock 数据（6维度） | `scenarios.ts` |
| T-03 | 首页 UI 完善 | 🟡 进行中 | Home.tsx 基本框架有了，需细化 | `Home.tsx` |
| T-04 | 记录 Tab 完善 | 🟡 进行中 | 主页完成（新动态+6宫格+AI入口），详情页待开发 | `Record.tsx` |

### P1 - 接下来做

| # | 任务 | 状态 | 说明 | 关联文件 |
|---|------|------|------|---------|
| T-05 | 我的 Tab 开发 | ⚪ 待开发 | 个人中心、设置 | `Mine.tsx` |
| T-06 | 会员中心完善 | ⚪ 待开发 | 定价展示、订阅管理 | `MemberCenter.tsx` |
| T-07 | 激活成功动画 | ⚪ 待开发 | 4秒动画：星星绽放→光环扩散→成功标识→祝福语 | 待创建 |
| T-08 | 网站增加紧迫感机制 | ⚪ 待规划 | 众筹倒计时、限量早鸟、进度条 | `website-planning.md` |
| T-09 | 网站增加"体验示例日报"入口 | ⚪ 待规划 | 让家长在网站上直接体验一份日报Demo | `website-planning.md` |

### P2 - 后续做

| # | 任务 | 状态 | 说明 | 关联文件 |
|---|------|------|------|---------|
| T-10 | 硬件概念渲染图 | ⚪ 待素材 | AI生成或外包3D概念图 | `character-ip-design.md` |
| T-11 | IP角色2D插画 | ⚪ 待素材 | 星星角色的标准形象 | `character-ip-design.md` |
| T-12 | Tailwind Config 更新 | ⚪ 待开发 | Moimoi风格色彩/字体统一 | `05-ui-design-system.md` |
| T-13 | 按钮/卡片组件重构 (Soft 3D) | ⚪ 待开发 | 设计系统组件升级 | `05-ui-design-system.md` |
| T-14 | 项目结构重组 (Monorepo) | ⚪ 暂缓 | frontend-demo → apps/mobile-web | `implementation_plan.md` |

### 已完成

| # | 任务 | 完成日期 | 说明 |
|---|------|---------|------|
| ~~T-A1~~ | 3-Tab 导航结构 | 2025-02-05 | 首页/记录/我的 |
| ~~T-A2~~ | 未登录状态页面 | 2025-02-05 | 启动页、欢迎页、登录页 |
| ~~T-A3~~ | 设备绑定流程 | 2025-02-05 | 5步绑定向导 |
| ~~T-A4~~ | UI设计系统定义 | 2025-02-05 | Moimoi风格规范 |
| ~~T-A5~~ | Home V2 + Report 2.0 | 2025-02-05 | Moimoi风格升级 |
| ~~T-A6~~ | 文档体系建立 | 2025-02-05 | 市场分析、产品规格、硬件设计等 |
| ~~T-A7~~ | 日报模板 v4.0 | 2025-02-05 | 三层架构+渐进披露+反馈闭环 |
| ~~T-A8~~ | 开发路线图 | 2025-02-05 | 4阶段策略 |
| ~~T-A9~~ | 官网规划文档 | 2025-02-06 | Moimoi风格8 Section设计 |
| ~~T-A10~~ | 竞品参考、成本估算等辅助文档 | 2025-02-06 | 多份参考文档 |

---

## 更新日志

> 每次会话完成工作后，在这里记录。格式：日期 | 做了什么 | 涉及文件

| 日期 | 更新内容 | 涉及文件 | 会话备注 |
|------|---------|---------|---------|
| 2026-02-09 | 产品架构重大升级：记录Tab→记忆图谱系统、设备双模数据架构、分级推送机制 | `task.md`, `03-information-architecture.md`, `01-app-features.md`, `04-wireframes.md`, `product-definition.md` | 产品讨论会话 |
| 2026-02-09 | 项目状态盘点，提交所有未保存工作 (commit aea6a78) | 全部 | 盘点会话 |
| 2026-02-09 | 网站规划评审：确认不加竞品对比，加紧迫感机制；识别视觉素材缺失 | `website-planning.md` | 评审会话 |
| 2026-02-09 | 创建项目看板 & 更新日志（本文件） | `task.md` | 看板创建 |
| 2025-02-06 | 新增官网规划、工业设计分析 | `website-planning.md`, `industrial-design-analysis.md` | - |
| 2025-02-05 | 日报模板v4.0、开发路线图、行业入门指南 | `daily-report-template.md`, `development-roadmap.md` | - |
| 2025-02-05 | Report 2.0, Home V2 & Moimoi Design System Upgrade | 前端代码 + 设计文档 | commit 2ffbf7a |
| 2025-02-05 | APP架构重构为3 Tab | 前端代码 + IA文档 | commit 53b8824 |
| 2025-02-05 | 初始提交：完整文档和原型 | 全部 | commit b94cb72 |

---

## 决策记录

> 重要的产品决策记录在这里，避免后续会话重复讨论。

| 日期 | 决策 | 原因 | 决策人 |
|------|------|------|--------|
| 2026-02-09 | 设备双模数据架构：主动对话(按键触发,高优先) + 被动监听(始终在线,需AI筛选) | 主动对话标记为重点内容，被动监听提供全景背景 | YZ |
| 2026-02-09 | 记录Tab从话题索引重构为"个人记忆图谱"系统 | 6个维度：人物图谱、情绪档案、兴趣图谱、成长足迹、正在经历、小小世界观 | YZ |
| 2026-02-09 | 记忆图谱采用分级推送机制让记录"活"起来 | 4级推送：即时告警/当日高亮/周更趋势/惊喜成就；新动态+红点驱动家长打开 | YZ |
| 2026-02-09 | 网站不做竞品对比 section | 不需要让家长知道跟其他产品的对比 | YZ |
| 2026-02-09 | 网站加入紧迫感机制 | 众筹倒计时、限量早鸟、进度条 → 提升转化 | YZ |
| 2026-02-09 | 前端不暴露数据来源标识（⭐/📎），双模数据架构仅作后端逻辑 | 家长不关心数据是主动对话还是被动监听，AI融合后统一呈现 | YZ |
| 2026-02-09 | 品牌名称后续可能调整 | 产品定义已准确，品牌名待定 | YZ |
| 2025-02-05 | 日报基于"孩子说了什么"设计，不假装知道行程 | 技术诚实原则 | YZ |
| 2025-02-05 | 软件先行，硬件后接入 | 先验证核心价值再投入硬件 | YZ |
| 2025-02-05 | APP 3-Tab 架构（首页/记录/我的） | 简化导航，聚焦核心 | YZ |
| 2025-02-05 | Moimoi 设计风格 | 活力有机，区别于传统企业风 | YZ |

---

## 待解决的问题

| # | 问题 | 状态 | 备注 |
|---|------|------|------|
| Q-01 | 品牌名称最终确定 | ⏳ 待定 | 当前暂用"小星伴"，后续可能更改 |
| Q-02 | 硬件概念图如何获取 | ⏳ 待定 | AI生成 vs 外包设计 |
| Q-03 | 日报Demo是独立页面还是集成到APP | ⏳ 待定 | 网站用的"体验示例日报"入口 |
| Q-04 | 被动监听的隐私合规框架 | ⏳ 待定 | 录到他人声音的法律合规问题，需法律顾问 |

---

## 文档索引

| 领域 | 核心文档 | 路径 |
|------|---------|------|
| 项目治理 | 项目规则 | `docs/00-planning/00-project-governance.md` |
| 项目管理 | **本文件（看板+日志）** | `docs/00-planning/task.md` |
| 开发路线 | 4阶段路线图 | `docs/02-product-spec/development-roadmap.md` |
| 产品规格 | MVP规格说明 | `docs/02-product-spec/mvp-specification.md` |
| APP设计 | 功能列表 | `docs/07-app-design/01-app-features.md` |
| APP设计 | 信息架构 | `docs/07-app-design/03-information-architecture.md` |
| APP设计 | 线框图 | `docs/07-app-design/04-wireframes.md` |
| APP设计 | UI设计系统 | `docs/07-app-design/05-ui-design-system.md` |
| 日报设计 | 日报模板 v4.0 | `docs/07-app-design/daily-report-template.md` |
| 官网设计 | 网站规划 | `docs/08-website/website-planning.md` |
| 硬件设计 | 硬件规格 | `docs/03-hardware-design/hardware-specification.md` |
| 硬件设计 | IP角色设计 | `docs/03-hardware-design/character-ip-design.md` |
| 品牌策略 | 品牌定位与传播 | `docs/06-business-model/brand-strategy.md` |
| 定价策略 | 定价与商业模式 | `docs/06-business-model/pricing-strategy.md` |
| 市场策略 | GTM策略 | `docs/06-business-model/go-to-market.md` |
