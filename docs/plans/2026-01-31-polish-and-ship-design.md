# SpeakAussie: Polish & Ship Plan

**Created:** 2026-01-31
**Goal:** Production-ready quality - fix bugs, improve accessibility, enhance UX, tune content

## Overview

This plan focuses on polishing the existing app for production release. No new features - just quality improvements across four phases executed sequentially.

## Phase 1: Technical Quality

Fix bugs, accessibility issues, and code inconsistencies to establish a stable foundation.

### Accessibility (High Priority)

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| TQ-1 | VoiceSelector keyboard navigation | Arrow keys navigate between voice options, Enter/Space selects |
| TQ-2 | Add prefers-reduced-motion support | Skeleton and StreakReminder animations respect user preference |
| TQ-3 | Add missing ARIA roles | StreakReminder has role="status", loading skeletons have role="progressbar" |
| TQ-4 | Add focus-visible styles | VoiceSelector, ErrorBoundary, NotFound have visible focus indicators |

### Code Consistency (Medium Priority)

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| TQ-5 | Replace hardcoded colors in ErrorBoundary | All colors use CSS variables from variables.css |
| TQ-6 | Replace hardcoded colors in NotFound | All colors use CSS variables from variables.css |
| TQ-7 | Extract magic numbers in UnifiedDashboard | Values 50, 3600, 20 are named constants with comments |
| TQ-8 | Fix DuotoneIcon API | Either use secondary color or remove from interface |
| TQ-9 | Consolidate IconSize type | Single definition shared between DuotoneIcon and CustomIcon |

### Minor Cleanup

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| TQ-10 | Replace VoiceSelector Unicode symbols | Use Lucide Play/Square icons instead of ▶/■ |

---

## Phase 2: UX Polish

Improve user experience through better feedback, error handling, and navigation.

### Loading & Feedback States

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| UX-1 | Add VoiceSelector audio loading state | Spinner or indicator shows while audio loads |
| UX-2 | Add VoiceSelector audio error handling | User sees message if intro audio fails to load |
| UX-3 | Audit scenario loading states | Skeleton loaders appear during all data fetches |

### Error Handling

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| UX-4 | Improve ErrorBoundary focus management | Focus moves to error message or retry button when error appears |
| UX-5 | Improve NotFound page | Updates document.title, uses proper main landmark |

### Navigation & Flow

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| UX-6 | Add skip link to UnifiedDashboard | Keyboard users can skip to main content |
| UX-7 | Fix heading hierarchy in UnifiedDashboard | "Your Progress Dashboard" is a proper heading element |

### Visual Consistency

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| UX-8 | Replace VoiceSelector hardcoded colors | All rgba values use CSS variables |
| UX-9 | Review icon re-exports bundle impact | Document bundle size, remove unused re-exports if significant |

---

## Phase 3: Content/Voice

Fix AI conversation quality issues and enhance voice character depth.

### Voice Character Issues

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| CV-1 | Fix emotion leaking bug | AI conveys emotions through tone, doesn't say emotion words |
| CV-2 | Add Tom character personality | voices.ts has personality traits, prompts inject character context |
| CV-3 | Add Emma character personality | voices.ts has personality traits, prompts inject character context |

### Prompt Improvements

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| CV-4 | Add difficulty-based prompt modifiers | Beginner/intermediate/advanced scenarios adjust AI speech complexity |
| CV-5 | Enhance voice-specific prompt injection | Prompts include character context beyond {name} placeholder |

### Content Quality

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| CV-6 | Audit scenario prompts for consistency | Review all 22 categories, fix any inconsistent or low-quality prompts |

---

## Phase 4: Infrastructure

Production readiness - monitoring, analytics, and performance.

### Error Tracking

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| IF-1 | Integrate error tracking service | Errors captured and reported (e.g., Sentry) |
| IF-2 | Review backend error handling | Express middleware logs errors properly, returns appropriate responses |

### Analytics

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| IF-3 | Add basic frontend analytics | Track session starts, scenario completions, key user actions |
| IF-4 | Add conversion tracking | Track subscription funnel: view plans → select → complete |

### Performance

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| IF-5 | Audit bundle size | Document current size, identify any bloat, recommend optimizations |
| IF-6 | Run Lighthouse audit | Score 90+ on performance and accessibility, fix any critical issues |

### Monitoring

| ID | Story | Acceptance Criteria |
|----|-------|---------------------|
| IF-7 | Improve health check endpoint | Returns meaningful status (db connection, external services) |
| IF-8 | Review API rate limiting | ElevenLabs usage tracked, alerts if approaching limits |

---

## Execution

Stories will be executed using Ralph - each story picked up by a fresh Claude instance, implemented, tested, and committed if passing.

**Estimated total: 32 stories**

Priority order: TQ-* → UX-* → CV-* → IF-*
