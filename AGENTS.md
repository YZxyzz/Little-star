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
| 2026-02-08 | **外壳材质改为硅胶方案** | 从毛绒改为医用级硅胶，防水易清洁，可更换多种卡通造型（兔子/海豚/小熊等） | hardware-specification.md, character-ip-design.md |
| 2026-02-08 | **重要竞品警告：Mooni M1** | 听力熊发布 Mooni M1（312元），与小星伴高度重合（可穿戴、硅胶、4G、AI陪伴），需强化差异化定位 | competitive-analysis.md |
| 2026-02-08 | **战略级洞察：权力与责任失衡理论** | 发现产品必然性的底层逻辑：父母承担后果却缺席决策，小星伴是修复系统断层的稳定代理 | case-power-responsibility-imbalance.md, core-insight-power-imbalance.md |

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
├── 00-planning/             # 项目规划和协作指南 ⭐
│   ├── product-design-brainstorm.md  # 产品设计头脑风暴指南（AI助手必读）
│   ├── implementation_plan.md        # 实施计划
│   └── ...
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

## 六、产品设计与用户调研协作

### 6.1 产品设计协作

> **重要**：当进行产品设计讨论和头脑风暴时，请参考 `docs/00-planning/product-design-brainstorm.md`

**设计协作流程：**
1. **读取背景信息** - 从 AGENTS.md 和相关文档了解项目现状
2. **理解用户想法** - 主动提问，挖掘需求和痛点
3. **头脑风暴** - 提供多方案对比，分析优劣
4. **确认方案** - 总结讨论结果，获得用户确认
5. **更新文档** - 根据自动同步规则更新相关文档

**快速启动：**
- 当用户输入产品设计相关话题时，自动读取相关背景文档
- 按照 `product-design-brainstorm.md` 中的模板进行讨论
- 完成后自动更新文档（不询问，直接执行）

详细指南：`docs/00-planning/product-design-brainstorm.md`

---

### 6.2 用户调研协作 ⭐

> **重要**：当进行用户案例研究和需求分析时，请参考 `docs/05-user-testing/case-study-research-guide.md`

**调研协作流程：**
1. **定义研究目标** - 明确本次调研要解决的问题
2. **设计用户画像** - 细分不同家庭类型
3. **执行案例研究** - 创建虚拟案例或记录真实访谈
4. **分析和洞察** - 提取痛点、需求、产品匹配度
5. **转化为行动** - 功能优化、定价调整、营销话术
6. **更新文档** - 自动同步到相关规格文档

**快速启动：**
- 关键词触发：案例研究、用户画像、调研问题、痛点分析、定价测试
- 自动读取项目背景和产品规格
- 按照调研框架系统化执行
- 提供横向分析和行动建议

**家庭类型分类：**
- A类：一线城市双职工家庭（高收入，时间焦虑）
- B类：二线城市全职妈妈家庭（中收入，育儿验证）
- C类：新一线城市创业者家庭（高收入，科学育儿）
- D类：单亲妈妈家庭（低收入，情感陪伴）
- E类：海归高知家庭（高收入，专业性）
- F类：传统中产家庭（中收入，安全可靠）

详细指南：`docs/05-user-testing/case-study-research-guide.md`

---

## 七、重要约定

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

## 八、最近一次更新

**日期**：2026-02-08

**更新内容**：

**1. 外壳材质重大改进**
- ⭐ 从毛绒改为医用级硅胶材质
  - 优势：防水易清洁、耐用卫生、适合儿童实际使用场景
  - 可更换多种卡通造型（星星/兔子/海豚/小熊/狐狸等）
  - 成本降低9元（从36元降至27元）
- 更新文档：
  - `hardware-specification.md` - 材料选择、模块化设计、BOM成本
  - `character-ip-design.md` - 基础形象、标志性特征、固定表情、配色方案
  - `AGENTS.md` - 决策记录

**2. 产品设计协作流程规范化**
- ⭐ 创建产品设计头脑风暴指南 `docs/00-planning/product-design-brainstorm.md`
  - 定义标准化的设计讨论流程
  - 提供设计话题模板（硬件/功能/商业模式）
  - 明确文档更新规则和示例对话
- 在 `AGENTS.md` 中新增"六、产品设计协作"章节

**3. 竞品重大更新：Mooni M1**
- ⚠️ **竞争态势严峻**：听力熊发布 Mooni M1（2025年1月）
  - 价格：312.8元（低于小星伴 399元）
  - 形态：可穿戴、硅胶材质、IP67防水、4G流量卡
  - 功能：AI陪伴、成长记录、通话定位、儿童电台
  - **威胁等级：高** - 与小星伴定位高度重合
- 更新文档：
  - `competitive-analysis.md` - 深度分析 Mooni M1，更新竞争策略
  - `AGENTS.md` - 决策记录
- **紧急应对措施**：
  - 评估价格策略调整
  - 强化差异化定位（成长记录官 vs 对话机）
  - 考虑增加通话定位功能
  - 加快MVP上市时间

**4. 用户调研协作流程规范化 ⭐**
- 创建用户案例研究调研指南 `docs/05-user-testing/case-study-research-guide.md`
  - 系统化调研工作流程（定义目标→设计画像→执行研究→分析洞察→转化行动）
  - 6种典型家庭画像模板（双职工/全职妈妈/创业者/单亲/高知/传统中产）
  - 标准调研问题库（44个精心设计的问题）
  - 案例记录和分析框架
  - 虚拟案例创建指南
  - 横向分析方法
  - 洞察到行动的转化规则
- 创建用户使用指南 `docs/05-user-testing/HOW-TO-USE-RESEARCH-SKILL.md`
- 在 `AGENTS.md` 中新增"6.2 用户调研协作"章节
- 更新 `CLAUDE.md` 添加调研触发规则

**5. 战略级洞察：权力与责任失衡理论 🔴**
- ⭐ **发现产品必然性的底层逻辑**：
  - 核心洞察：父母承担100%长期后果，却仅有20%规则制定权；照料者拥有80%日常权力，却承担0%长期后果
  - 三种必然后果：短期最优压倒长期最优、父母被动内疚循环、孩子权威切换策略
  - 小星伴的角色：父母教育原则的稳定代理，修复权力—责任断层
- 创建深度案例分析 `docs/05-user-testing/cases/case-power-responsibility-imbalance.md`
  - 2个详细虚拟案例（祖辈照料+保姆照料）
  - 系统性失衡分析矩阵
  - 小星伴介入点分析
  - 对产品定位、营销、功能的全面影响
- 提炼核心洞察文档 `docs/05-user-testing/insights/core-insight-power-imbalance.md`
- **重大影响**：
  - 产品定位：从"AI成长伙伴"升级为"父母教育原则的稳定代理"
  - 目标用户：精准到中度-重度失衡家庭（70%的双职工家庭）
  - 营销话术：完全重构，从功能罗列到痛点共鸣
  - 竞争策略：从功能维度竞争转为问题理解深度竞争
  - 功能优先级：新增"价值观柔性纠偏"、"父母不在场模式"为P0
  - 定价逻辑：从功能对比转为系统修复价值（0.14元/小时守护心理成长）

**历史更新（2025-02-05）**：
- 用户状态系统：定义4种状态（未登录、已登录未绑定、激活成功、正常使用）
- 设备绑定完整流程：5步向导（创建档案→准备设备→扫描配对→连接中→激活流量）
- 激活成功动画规格：4秒炫酷动画（星星绽放→光环扩散→成功标识→祝福语）

---

*此文件由 AI 助手维护，请在每次重要对话后更新*
