# UI 设计规范 (Design System)

> **版本**：v3.0 (Moimoi Style Redesign)
> **设计核心**：**Vibrant & Organic (活力与有机)**
> **参考源**：`ui-ref-04-moimoi-characters.png`
> **关键词**：`Pure White` (纯白通透), `Vibrant Blobs` (活力气泡), `Super Round` (超级圆)

---

## 1. 核心理念 (Philosophy)

这不是一个"工具"，而是一个 **"游乐场"**。
我们**彻底抛弃**传统的卡片式布局（Card-based），转为 **气泡式布局 (Blob-based)**。

*   **基调**：纯白画布，上面漂浮着鲜艳的果冻/气泡。
*   **形态**：拒绝直线。所有元素都是圆的，或者是动态的有机形状。
*   **氛围**：高能量、快乐、年轻。

---

## 2. 色彩体系 (Vibrant Palette)

### 2.1 背景 (Canvas)
*   **Pure White**: `#FFFFFF` (纯白，绝对干净，让色彩跳出来)

### 2.2 活力气泡色 (The Blobs)
这组颜色用于背景的气泡、按钮或强调文字。它们是高明度、高饱和的马卡龙色。

*   **Hot Pink (热情)**: `#FF8FAB` (主强调色)
*   **Fresh Green (成长)**: `#B0E57C`
*   **Sky Blue (智慧)**: `#74C0FC`
*   **Sunshine Yellow (快乐)**: `#FFD43B`
*   **Lilac (魔法)**: `#CCBCFF`

### 2.3 文字色 (Typography)
*   **Super Black**: `#000000` (标题使用纯黑，最大化对比度)
*   **Soft Gray**: `#868e96` (次级信息)

---

## 3. UI 组件规范

### 3.1 容器 (The Blobs)
不再使用标准的矩形圆角卡片。
*   **有机形状**：使用 CSS `border-radius` 的非对称值 (e.g., `60% 40% 30% 70% / 60% 30% 70% 40%`) 创造动态感。
*   **无边框**：色块直接放在白底上，不需要描边。

### 3.2 按钮 (Pop Buttons)
*   **Black Pill**: 黑色胶囊按钮，白色文字，极为醒目。
*   **Ghost Pill**: 白色胶囊，带轻微阴影。

### 3.3 字体 (Typography)
*   **Family**: `Nunito` (必须圆润)
*   **Weight**: 标题必须使用 **ExtraBold (800)** 或 **Black (900)**。
*   **Size**: 标题字号巨大 (32px+)。

---

## 4. 布局原则

1.  **Unboxed (去盒化)**：不要把内容关在笼子里。
2.  **Overlapping (重叠)**：元素之间可以有轻微遮挡，制造前后景深。
3.  **Floating (悬浮)**：所有可交互元素都应该感觉是"浮"在白纸上的。

---

## 5. 组件示例

### 首页 Hero
*   背景：纯白
*   主体：巨大的 3D Masco 群组或单个大特写
*   装饰：背后的淡色动态 Blob

### 列表项
*   不再是列表，而是堆叠的"云朵"。
