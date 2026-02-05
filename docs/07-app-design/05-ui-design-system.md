# UI 设计规范 (Design System)

> **版本**：v2.0 (Warm-Tech Refresh)
> **设计核心**：**Warm-Tech Companion (温暖科技伴侣)**
> **关键词**：`Soft 3D` (软弹物理感), `Creamy` (奶油质感), `Character-Driven` (角色驱动)

---

## 1. 核心理念 (Philosophy)

从"高饱和度游戏感"转向 **"有温度的陪伴"**。
界面不应该像一个令人紧张的"考场"（原本的Duolingo风），而应该像一个 **温暖的儿童房**。

*   **基调**：奶油色的世界，没有刺眼的纯白。
*   **质感**：所有物体都像是软胶或毛绒做的，看起来很好捏。
*   **角色**：星星不是贴图，它居住在这个界面里。

---

## 2. 色彩体系 (Color Palette)

### 2.1 背景色 (Backgrounds)
不再使用冷灰。
*   **Cream Base (全局背景)**: `#FFFBF0` (暖米白，像纸张或奶油)
*   **Card White (卡片背景)**: `#FFFFFF` (纯白，用于内容承载)

### 2.2 品牌色 (Brand Colors)
更加温暖、金黄，带有渐变的光泽感。
*   **Star Yellow (主色)**: `#FFC800` (温暖的蛋黄)
*   **Star Shadow (主色阴影)**: `#E5B000` (用于3D按压面)
*   **Warm Accent (点缀)**: `#FFA500` (暖橙色)

### 2.3 辅助色 (Secondary)
低饱和度，马卡龙色系。
*   **Soft Green (成长)**: `#88D66C` (嫩芽绿)
*   **Magic Purple (魔法)**: `#B497FF` (薰衣草紫)
*   **Sky Blue (平静)**: `#74C0FC` (治愈蓝)

### 2.4 文字色 (Typography)
*   **Ink Black (主标题)**: `#2C2C2C` (不是纯黑，是深炭灰)
*   **Soft Gray (次级信息)**: `#8E8E93`

---

## 3. UI 组件规范

### 3.1 按钮 (Soft 3D Buttons)
不再是硬朗的像素游戏风，而是 **"软弹风"**。
*   **形状**：`Rounded-2xl` (大圆角)。
*   **质感**：
    *   **正常态**：带有一个柔和的底部色块（模拟厚度）+ 顶部高光。
    *   **点击态**：色块压缩，整体下沉 (Transform scale + translate)。
*   **阴影**：不再是纯黑阴影，而是颜色的加深版 (`Shadow-colored`)。

### 3.2 卡片 (Float Cards)
*   **形状**：`Rounded-3xl`。
*   **边框**：取消粗黑描边，改为 **无描边** 或 **极细柔和描边**。
*   **阴影**：`Shadow-lg` + `Soft Blur`，营造悬浮感。

---

## 4. 字体 (Typography)

*   **Font Family**: `Nunito` 或 `Inter` (Rounded 变体)。
*   **特征**：字形圆润，没有尖角。

---

## 5. 布局原则

*   **Immersive (沉浸式)**：内容卡片占据屏幕主导。
*   **Breathing Room (呼吸感)**：更大的 Padding，不要让信息挤在一起。
