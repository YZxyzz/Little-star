# Little-star "Pebble" Product Definition
**Version:** 2.1 (Dual-Mode Architecture)
**Date:** 2026-02-09

> This document serves as the **Single Source of Truth** for the Little-star "Pebble" edition, consolidating Design, Requirements, and Hardware Specs.

---

## Part 1: Industrial Design & Aesthetics

### 1.1 Core Concept: "Calm Tech" Companion
The device is designed not as a gadget, but as a "digital soul" housed in a natural, friendly object. It avoids aggressive tech styling (vents, visible screws) in favor of organic shapes that feel good to touch and hold.

### 1.2 Form Factor & Materials
- **Shape:** Organic "Pebble" / Capsule. Smooth continuous surfaces with no sharp edges.
- **Dimensions:** ~35mm diameter × 12mm thickness.
- **Weight:** **Strictly < 15g** (Critical Constraint).
- **Body Material:** Matte PC/ABS or Soft-touch coating (Warm, skin-friendly).
- **Colors:** Matte Black / Satin Silver (Premium, jewelry-like).
- **Texture:** Smooth, non-slip.

### 1.3 Wearing Styles
1.  **Necklace/Pendant (Primary)**: Worn close to the heart via a lanyard.
2.  **Magnetic Clip (Secondary)**: Attaches to clothes/bags using a magnetic back or accessory.

---

## Part 2: Product Requirements (PRD)

### 2.1 Key Features
1.  **Always-Ready AI**: Single-button access to voice chat.
2.  **Cable-Free Charging**: Integrated **Male USB-C plug** hidden under the lanyard cap. Plug directly into laptops/power banks.
3.  **Modular Expression**: Front surface supports magnetic interchangeable covers/accessories.
4.  **Blind Operation**: Tactile button on the back, easily found by touch.

### 2.2 Interaction Design
- **Input**:
    - **Press & Hold**: Talk / Record.
    - **Click**: Status check / Interrupt.
- **Feedback**:
    - **Haptic**: Vibration motor for confirmation (quiet interaction).
    - **Visual**: Subtle "breathing" LED indicators (hidden sub-surface).

### 2.3 Environmental
- **Water Resistance**: IP54 (Sweat/Splash proof).
- **Durability**: Drop-resistant (1.2m) for child usage.

### 2.4 Dual-Mode Data Architecture (v2.0 新增)

> **更新日期**：2026-02-09
> **重大决策**：设备采用双模数据架构，支持主动对话和被动监听两种模式。

#### 模式定义

| 模式 | 触发方式 | 数据性质 | 信号权重 | 用途 |
|------|---------|---------|---------|------|
| **主动对话** | 按键/唤醒词 | 孩子主动想说的事 | ⭐ 高优先 | 标记为重点内容，孩子觉得重要到专门说 |
| **被动监听** | 始终在线 | 孩子身边发生的一切 | 📎 背景佐证 | AI从环境声音中提取信息，需筛选 |

#### 数据处理流程

```
主动对话 → 结构化对话记录 → ⭐ 重点标记 → 直接入记忆图谱
被动监听 → 实时语音转文本 → AI筛选有价值信息 → 📎 背景补充
                          → 语音分离(Speaker Diarization)
                          → 场景识别(教室/操场/家里)
                          → 声纹建档(识别反复出现的人)
```

#### 双模融合示例

```
孩子主动对小星伴说（⭐ 重点）：
"今天小强又欺负我了"

被动监听捕捉到（📎 背景佐证）：
"小强你别推我！"（10:45）
"老师，小强推我了"（10:47）

融合后呈现给家长：
→ 完整事件链，而非单方面转述
```

#### 隐私考量

| 问题 | 当前方案 | 待决策 |
|------|---------|--------|
| 被动录音是否上传原始音频 | 仅上传文本，音频本地处理后删除 | - |
| 他人声音如何处理 | 只提取语义信息，不存储他人声纹特征 | - |
| 家长能否听原始录音 | 待决策 | Q-04 |
| 学校/公共场所录音合规 | 待法律顾问介入 | Q-04 |

---

## Part 3: Hardware Specifications

### 3.1 Architecture
- **Connectivity**: **Standalone 4G LTE Cat.1** (Target) or BLE Tethered (Fallback if weight fails).
    - *Preferred Module*: Air780E or ASR3603 (Ultra-compact).
- **Power**:
    - **Battery**: Custom round Li-Po, **~150-180mAh**.
    - **Charging**: 5V Direct USB-C.
    - **Power Mgmt**: Smart VAD (Voice Activity Detection) for ultra-low sleep power.

### 3.2 Components (Weight Budget < 15g)

| Component | Spec | Est. Weight | Notes |
|-----------|------|-------------|-------|
| **Mainboard** | High-density HDI PCB | 4.0g | Integrated Shielding |
| **Battery** | 180mAh Custom Round | 3.5g | Key weight driver |
| **Housing** | Thin-wall PC/ABS | 4.0g | Max width 1.0mm |
| **Connector**| USB-C Male Plug | 1.5g | Structural part |
| **Magnets** | N52 Neodymium | 1.0g | For accessories |
| **Audio** | MEMS Mic + Piezo/Micro-speaker | 1.0g | |
| **Misc** | Glue, Foam, screws | 0.5g | |
| **Total** | | **~15.5g** | *Risk: Exceeds 15g.* |

> **Risk Mitigation**: If 15g is unachievable with 4G, switch to a BLE-only "Tethered" architecture which removes the Modem and reduces battery needs, easily hitting <10g.

### 3.3 Audio System
- **Microphone**: Dual MEMS Array (Beamforming/Noise Cancellation).
- **Speaker**: Optimized for voice frequency (human speech), not music.

### 3.4 Mechanical Details
- **Cap Mechanism**: The lanyard loop acts as a protective cap for the USB-C plug. Needs a secure snap-release (2kg pull force) for safety.
- **Magnetic Interface**: Embedded magnets in the front housing must be balanced—strong enough to hold covers, weak enough not to interfere with electronics/compass.
