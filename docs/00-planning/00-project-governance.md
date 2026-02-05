# Project Governance & Rules

> **Effective Date**: 2026-02-05
> **Status**: Active

This document outlines the core rules and operating procedures for the "Little Star Companion" project. All contributors (including AI agents) must strictly adhere to these guidelines.

## 1. Documentation First Principle

### Rule 1.1: Zero-Lag Documentation
**"If it's agreed in chat, it's written in docs."**

*   **Trigger**: Any time a product decision, design change, or architectural shift is agreed upon in a conversation.
*   **Action**: The relevant documentation (PRD, Specs, Wireframes, IA) MUST be updated **immediately** within the same session.
*   **Prohibition**: Do not defer documentation updates to a "later cleanup phase."
*   **Verification**: The User has the right to ask "Is this documented?" at any time, and the answer must be "Yes, here is the link."

### Rule 1.2: Single Source of Truth
*   Avoid creating temporary "update folders" (e.g., avoid `docs/08-temp-update/`).
*   Always integrate changes directly into the canonical documents in the existing structure (e.g., `docs/02-product-spec/`, `docs/07-app-design/`).
*   If a document becomes too large, refactor the structure, but do not fragment the truth.

## 2. Product Philosophy Guidelines

### Rule 2.1: The "Observer & Coach" Stance
*   **Core Role**: The AI is an *observer* of the child's world and a *coach* for the parent.
*   **Voice**: Empathetic, objective, and supportive.
*   **Constraint**: The AI should NEVER simply "judge" the child or issue cold commands to the parent. It must provide context ("The Why") and actionable, warm guidance ("The How").

### Rule 2.2: Aesthetic Standard
*   **Style**: "Moimoi" (Organic, Warm, Vibrant).
*   **Experience**: The app should feel like a "breathing" companion, not a static tool. Use micro-animations, emotional text, and warm colors.

## 3. Workflow Standard

### Rule 3.1: Plan -> Document -> Code
1.  **Plan**: Discuss and agree on the concept.
2.  **Document**: Update the official specs (Rule 1.1).
3.  **Code**: Implement the feature based *only* on the updated documentation.
