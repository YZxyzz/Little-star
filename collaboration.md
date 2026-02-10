# 分支协作与冲突解决规则

> **最后更新**：2026-02-08
>
> **目的**：定义多分支协作规则，记录合并冲突和解决策略

---

## 一、分支策略

### 1.1 分支结构

```
main (origin/main)
├─ 主分支，包含稳定版本
├─ 受保护，需要 PR review
└─ 定期从 kevin 合并

kevin (origin/kevin)
├─ 开发分支，日常工作
├─ 包含最新特性和实验
└─ 定期合并到 main
```

### 1.2 分支同步规则

**从 origin/main 更新到 kevin：**
```bash
git fetch origin main
git merge origin/main
# 如果有冲突，优先保留 kevin 分支内容
```

**从 kevin 推送到 origin：**
```bash
git push origin kevin
```

**创建 PR 合并到 main：**
```bash
# 在 GitHub 上创建 PR: kevin → main
# Review 后合并
```

---

## 二、冲突解决策略

### 2.1 基本原则

> **核心规则**：当 origin/main 和 kevin 分支有冲突时，**优先使用 kevin 分支的内容**

**原因：**
- kevin 是活跃开发分支，包含最新决策
- main 分支可能滞后，不反映最新思路
- 实验性功能和改进在 kevin 先验证

### 2.2 冲突处理流程

```
检测到冲突
    ↓
1. 记录冲突详情到本文档
    ↓
2. 分析冲突原因（并行开发 vs 决策变更）
    ↓
3. 应用解决策略
    ├─ 优先使用 kevin 分支内容（默认）
    ├─ 如果 main 有重要更新，合并两者
    └─ 记录决策理由
    ↓
4. 更新 AGENTS.md 和相关文档
    ↓
5. 测试验证
```

### 2.3 特殊文件处理

| 文件类型 | 冲突策略 | 说明 |
|---------|---------|------|
| **AGENTS.md** | 合并两者 | 保留所有决策记录，按时间排序 |
| **CLAUDE.md** | kevin 优先 | 开发分支规则最新 |
| **README.md** | 合并两者 | 文档应该全面 |
| **代码文件** | kevin 优先 | 开发分支代码最新 |
| **文档文件** | 合并两者 | 保留所有有价值信息 |
| **配置文件** | kevin 优先 | 开发环境配置最新 |

---

## 三、当前分支状态

### 3.1 最近一次同步

**日期**：2026-02-08
**操作**：尝试合并 origin/main 到 kevin
**结果**：✅ Already up to date
**说明**：kevin 分支已包含 origin/main 的所有内容，领先 1 个提交

### 3.2 kevin 分支独有提交

| Commit | 日期 | 说明 | 文件变更 |
|--------|------|------|---------|
| 98e7b58 | 2026-02-08 | add research ability | +3784 lines |

**主要变更：**
- ✅ 创建产品设计协作 skill
- ✅ 创建用户调研协作 skill
- ✅ 深度竞品分析（Mooni M1）
- ✅ 硅胶材质改进方案
- ✅ 权力与责任失衡理论
- ✅ 产品定位战略升级

### 3.3 分支差异统计

```
11 files changed, 3784 insertions(+), 123 deletions(-)

主要新增文件：
- docs/00-planning/product-design-brainstorm.md (+409 lines)
- docs/00-planning/HOW-TO-USE-DESIGN-SKILL.md (+277 lines)
- docs/05-user-testing/case-study-research-guide.md (+766 lines)
- docs/05-user-testing/HOW-TO-USE-RESEARCH-SKILL.md (+515 lines)
- docs/05-user-testing/cases/case-power-responsibility-imbalance.md (+875 lines)
- docs/05-user-testing/insights/core-insight-power-imbalance.md (+341 lines)

主要修改文件：
- AGENTS.md (+139 lines)
- docs/01-market-research/competitive-analysis.md (+325 lines)
- docs/03-hardware-design/hardware-specification.md (+147 lines)
- docs/03-hardware-design/character-ip-design.md (+82 lines)
- CLAUDE.md (+31 lines)
```

---

## 四、历史冲突记录

### 4.1 冲突记录模板

```markdown
## 冲突 #[编号]

**日期**：YYYY-MM-DD
**文件**：path/to/file.md
**冲突类型**：内容冲突 / 决策冲突 / 删除冲突

**main 分支内容：**
```
[main 分支的内容]
```

**kevin 分支内容：**
```
[kevin 分支的内容]
```

**冲突原因**：
[为什么会产生冲突]

**解决策略**：
[使用哪个版本，为什么]

**最终采用：**
```
[最终保留的内容]
```

**影响文档**：
- file1.md
- file2.md
```

### 4.2 实际冲突记录

> 当前无冲突记录

**说明**：截至 2026-02-08，kevin 分支领先于 origin/main，没有产生合并冲突。

---

## 五、协作最佳实践

### 5.1 日常工作流

**在 kevin 分支开发：**
```bash
# 1. 确保在 kevin 分支
git checkout kevin

# 2. 开始工作前，同步 origin/main（如果需要）
git fetch origin main
git merge origin/main  # 优先保留 kevin 内容

# 3. 进行开发工作
# ... 编辑文件 ...

# 4. 提交更改
git add .
git commit -m "描述性提交信息"

# 5. 推送到 origin/kevin
git push origin kevin
```

**定期合并到 main：**
```bash
# 1. 创建 PR: kevin → main（在 GitHub 上）
# 2. Review 检查清单：
#    - 所有测试通过
#    - 文档已更新
#    - AGENTS.md 已同步
#    - 无明显 bug
# 3. 合并 PR
```

### 5.2 AI 助手协作规则

**当 AI 助手操作 git 时：**

1. **自动同步策略**
   - 每次会话开始前，检查 origin/main 是否有更新
   - 如果有，自动合并到 kevin（优先保留 kevin 内容）
   - 如果有冲突，记录到 collaboration.md

2. **冲突处理**
   - 优先使用 kevin 分支内容
   - 如果 main 有重要更新（如用户在其他地方修改），询问用户
   - 记录冲突详情和解决方案

3. **文档同步**
   - 每次重大决策后，更新 AGENTS.md
   - 创建新文件后，更新 README.md 索引
   - 修改产品规格后，检查相关文档一致性

4. **提交信息规范**
   - 描述性：说明做了什么，为什么
   - 简洁：单行总结 + 详细说明（如需要）
   - Co-authored: 总是添加 AI 协作标识

### 5.3 禁止操作

**AI 助手不应该：**
- ❌ Force push 到任何分支
- ❌ 直接推送到 main 分支（应该通过 PR）
- ❌ 删除远程分支
- ❌ Reset --hard（可能丢失工作）
- ❌ 在有冲突时自动选择而不询问（除非明确规则）

**用户应避免：**
- ❌ 在 main 分支直接修改（应在 kevin 开发）
- ❌ 不同步就长期独立开发
- ❌ 忽略冲突提示

---

## 六、故障排查

### 6.1 常见问题

**Q1: 合并后发现 kevin 的更改丢失了**

```bash
# 检查 reflog
git reflog

# 找到合并前的 commit
git reset --hard <commit-hash>

# 重新合并，这次优先 kevin
git merge origin/main -X ours
```

**Q2: 不确定哪个分支的内容更正确**

```bash
# 查看两个分支的差异
git diff origin/main..kevin path/to/file

# 查看文件的修改历史
git log -p path/to/file

# 询问用户确认
```

**Q3: 同步后发现有破坏性变更**

```bash
# 创建备份分支
git branch kevin-backup

# 回滚到之前状态
git reset --hard <previous-commit>

# 重新仔细合并
```

### 6.2 紧急恢复

**如果出现严重问题：**

```bash
# 1. 创建当前状态快照
git stash
git branch emergency-backup

# 2. 恢复到上一个已知良好状态
git checkout kevin
git reset --hard <last-good-commit>

# 3. 重新应用更改（如果需要）
git cherry-pick <commit-hash>
```

---

## 七、更新日志

| 日期 | 操作 | 结果 | 说明 |
|------|------|------|------|
| 2026-02-08 | 初始化协作规则 | ✅ | 创建本文档 |
| 2026-02-08 | 合并 origin/main 到 kevin | ✅ Already up to date | 无冲突 |

---

## 八、相关文档

- **AGENTS.md** - 项目决策和状态记录
- **CLAUDE.md** - AI 助手协作规则
- **README.md** - 项目概述和文档索引
- **docs/00-planning/implementation_plan.md** - 实施计划

---

**本文档持续更新，记录每次分支操作和冲突解决。**
