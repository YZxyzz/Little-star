Read ./AGENTS.md before implementation.

# 产品设计协作

When user discusses product design ideas or improvements:
1. Read `docs/00-planning/product-design-brainstorm.md` for workflow
2. Read `AGENTS.md` for project context and existing decisions
3. Read related docs based on the topic
4. Follow the brainstorming workflow in the guide
5. Update docs automatically according to sync rules

# Quick Commands

## Product Design
- When user mentions design/改进/建议 in hardware context → Read `hardware-specification.md` + `character-ip-design.md`
- When user mentions new feature/新功能 → Read `mvp-specification.md` + `api-specification.md`
- When user mentions pricing/定价/会员 → Read `pricing-strategy.md`

## User Research
- When user mentions case study/案例研究/用户画像/persona → Read `case-study-research-guide.md` + execute research workflow
- When user mentions 调研问题/访谈/interview → Generate research question list
- When user mentions 痛点分析/需求分析/user needs → Create or analyze user cases
- When user mentions 定价测试/price testing → Test pricing acceptance across user personas

**Research Workflow:**
1. Read `AGENTS.md` for project context
2. Read `case-study-research-guide.md` for methodology
3. Read relevant docs (mvp-specification.md, pricing-strategy.md, etc.)
4. Execute case study or generate research questions
5. Analyze insights and provide recommendations
6. Update relevant docs automatically

# Git 协作规则

**Branch Strategy:**
- `main` - Stable branch (protected, requires PR review)
- `kevin` - Development branch (active work happens here)

**Conflict Resolution:**
- Read `collaboration.md` for detailed branching and merge rules
- **Core rule**: When merging origin/main into kevin, **prefer kevin branch content**
- Reason: kevin contains latest decisions and experimental features
- Always document conflicts in `collaboration.md` section "四、历史冲突记录"

**Before Starting Work:**
1. Check if origin/main has updates: `git fetch origin main`
2. If updates exist, merge with kevin preference: `git merge origin/main`
3. If conflicts occur:
   - Resolve by preferring kevin content (unless main has critical updates)
   - Document conflict details in `collaboration.md`
   - Update AGENTS.md if decisions are affected