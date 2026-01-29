# Workplace Modules Design

**Date:** 2026-01-29
**Status:** Approved for implementation

## Overview

Add workplace phrase practice modules to SpeakAussie, organized by situation. Users practice the specific language they need for Australian workplace scenarios.

## Product Direction

SpeakAussie is a **practice app** for Australian English. The video course (separate product) teaches theory and cultural understanding. The app focuses on drilling phrases, pronunciation, and conversations.

## App Structure

```
SpeakAussie
├── /app        → AI Conversation Practice (existing)
├── /speak      → Pronunciation Practice (existing)
├── /slang      → Casual Phrase Practice (existing)
└── /workplace  → Professional Phrase Practice (NEW)
    ├── Small Talk
    ├── Friday Drinks & Social Events
    ├── Banter & Comebacks
    ├── Performance Reviews
    ├── Giving & Receiving Feedback
    └── Presentations & Pitching
```

## The 6 Situations

### 1. Small Talk
- Greetings & responses ("How ya going?" → "Yeah, good thanks, you?")
- Weather conversation
- Weekend chat
- Returning from leave
- Filler/transitions

### 2. Friday Drinks & Social Events
- Arriving & joining
- Sports talk basics
- Politely declining drinks
- Exiting gracefully
- Inclusive responses

### 3. Banter & Comebacks
- Recognizing pisstakes
- Safe comebacks
- Self-deprecating deflection
- Escalating playfully
- When to just laugh

### 4. Performance Reviews
- Stating achievements without arrogance
- Asking for raises
- Receiving positive feedback
- Receiving critical feedback
- Asking for growth

### 5. Giving & Receiving Feedback
- Softening criticism
- Decoding indirect feedback
- Asking for clarification
- Acknowledging without defensiveness
- Following up

### 6. Presentations & Pitching
- Opening with humility
- Hedging confidently
- Inviting pushback
- Handling questions
- Closing without overselling

## Data Model

```typescript
interface WorkplacePhrase {
  id: string;
  phrase: string;
  meaning: string;
  situation: WorkplaceSituation;
  subcategory: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  context: string;
  example: string;
  whatTheyHear: string;
  alternatives?: string[];
  avoid?: string;
  culturalNote?: string;
}

type WorkplaceSituation =
  | 'small-talk'
  | 'friday-drinks'
  | 'banter'
  | 'performance-reviews'
  | 'feedback'
  | 'presentations';
```

## UI Design

### Main Page (`/workplace`)
- Quick Prep hero at top (urgent entry point)
- Guided path showing progression
- Review nudge with warm copy
- "See all" for full situation grid

### Situation Page
- "Up Next" hero card with clear starting point
- Learn → Practice → Review visual hierarchy
- Game modes: Flashcards, Quiz, Fill-in-blank, Sentence Builder
- Review prompt with warm microcopy

### Flashcards
- Progressive disclosure: front shows phrase + meaning
- Tap "See more" for context, alternatives, what to avoid
- Two-button feedback: "Nailed it" / "Need practice"

### Microcopy Voice
Warm, encouraging "Aussie Uncle" tone:
- "You've nailed 12 phrases. 16 to go."
- "8 phrases getting rusty — quick refresh?"
- "Nice one!" not "Correct"

## Gamification

### XP (same as slang)
- Flashcard viewed: 1 XP
- Quiz answer correct: 10 XP
- Quiz completed: 25 XP
- Perfect quiz: 50 XP
- Situation completed: 100 XP

### Achievements (13 new)
- 💼 First Day - Complete first workplace session
- 🍻 Friday Ready - Complete Friday Drinks
- 😏 Banter Boss - Complete Banter
- 💬 Small Talk Pro - Complete Small Talk
- 📈 Review Ready - Complete Performance Reviews
- 🔄 Feedback Master - Complete Feedback
- 🎤 Pitch Perfect - Complete Presentations
- 🏢 Workplace Complete - Finish all 6 situations
- 🎯 Quick Prepper - Use Quick Prep 5 times
- 💯 No Worries - 100% on any quiz
- 🔥 On Fire - 10 correct in a row
- 🌟 Phrase Collector - Favorite 20 phrases
- 🧠 Steel Trap - Review 50 with "Nailed it"

### Unified Progression
- One XP pool (slang + workplace)
- One streak (any activity counts)
- One level system

## Implementation Phases

### Phase 1: Foundation
- Data model and Small Talk content (~22 phrases)
- `/workplace` route and navigation
- Reuse slang game mode components
- Basic XP integration

### Phase 2: Content Expansion
- Remaining 5 situations (~116 phrases)
- Situation grid showing all 6
- Per-situation progress tracking

### Phase 3: Polish
- Quick Prep hero
- Guided path with unlocks
- Progressive disclosure flashcards
- Two-button feedback
- All 13 achievements
- Warm microcopy throughout

## File Structure

```
src/
├── components/
│   └── workplace/
│       ├── WorkplacePage.tsx
│       ├── SituationPage.tsx
│       ├── SituationCard.tsx
│       ├── QuickPrep.tsx
│       ├── GuidedPath.tsx
│       ├── WorkplaceFlashcard.tsx
│       └── WorkplaceQuiz.tsx
├── data/
│   └── workplaceData.ts
├── hooks/
│   └── useWorkplaceProgress.ts
└── App.tsx (add /workplace route)
```

## Content Volume

| Situation | Phrases |
|-----------|--------:|
| Small Talk | 22 |
| Friday Drinks | 28 |
| Banter | 24 |
| Performance Reviews | 18 |
| Feedback | 20 |
| Presentations | 26 |
| **Total** | **138** |
