# SpeakAussie Scenario Expansion Plan

**Date**: 30 January 2026
**Based on**: Manus AI Workplace Communication Research
**Current State**: 6 categories, 24 scenarios
**Target State**: 12 categories, 60+ scenarios

---

## Executive Summary

This plan outlines a phased approach to expanding SpeakAussie's conversation scenarios based on Manus AI research identifying high-priority workplace communication needs for skilled migrants in Australia.

### Key Priorities from Research
1. **Difficult Conversations** - #1 pain point for migrants
2. **Healthcare-Specific** - Large migrant workforce segment
3. **Technical/IT-Specific** - High-skilled visa holders
4. **Phone & Video Calls** - Remote work reality
5. **Cross-Cultural Teams** - Diverse Australian workplaces

---

## Phase 1: Foundation Enhancement (Week 1-2)

### Goal
Strengthen existing categories with high-impact scenarios that address research gaps.

### 1.1 Add to `day-to-day` Category (4 new scenarios)

| Scenario ID | Title | Difficulty | Description |
|-------------|-------|------------|-------------|
| `handling-complaint` | Handling a Complaint | intermediate | Receiving criticism from a colleague or client professionally |
| `unexpected-phone-call` | Unexpected Work Call | beginner | Professional phone etiquette for incoming calls |
| `asking-for-deadline-extension` | Asking for More Time | intermediate | Requesting deadline extension without losing credibility |
| `declining-request-politely` | Saying No Professionally | intermediate | Pushing back on requests while maintaining relationships |

### 1.2 Add to `growth` Category (3 new scenarios)

| Scenario ID | Title | Difficulty | Description |
|-------------|-------|------------|-------------|
| `scope-pushback` | Pushing Back on Scope | intermediate | Saying no to extra work/scope creep |
| `colleague-conflict` | Resolving a Disagreement | advanced | Professional conflict resolution with a peer |
| `asking-for-promotion` | Asking for Promotion | advanced | Making the case for career advancement |

### 1.3 Add to `meetings` Category (2 new scenarios)

| Scenario ID | Title | Difficulty | Description |
|-------------|-------|------------|-------------|
| `client-escalation` | Calming an Upset Client | advanced | De-escalation in a client meeting |
| `explaining-technical` | Explaining Something Technical | intermediate | Making complex topics accessible |

### Phase 1 Deliverables
- [ ] 9 new scenarios written and tested
- [ ] Total scenarios: 33
- [ ] Categories enhanced: 3

### Technical Tasks
1. Add scenarios to `src/data/scenarios.ts`
2. Test in app for flow and naturalness
3. Review prompts for authentic Aussie voice

---

## Phase 2: Difficult Conversations (Week 3-4)

### Goal
Launch the #1 priority category from research - the communication area where migrants struggle most.

### 2.1 Create New Category: `difficult`

```typescript
{
  id: 'difficult',
  title: 'Difficult Conversations',
  description: 'Handle tough talks with confidence',
  icon: '🎭', // or custom icon
  order: 7,
}
```

### 2.2 Difficult Conversations Scenarios (8 scenarios)

| Scenario ID | Title | Difficulty | Description |
|-------------|-------|------------|-------------|
| `giving-negative-feedback` | Giving Constructive Criticism | intermediate | Providing feedback to a peer on their work |
| `receiving-bad-news` | Receiving Difficult News | beginner | Reacting professionally to setbacks |
| `admitting-mistake` | Owning Up to a Mistake | intermediate | Taking responsibility and proposing solutions |
| `addressing-underperformance` | Addressing Performance Issues | advanced | Having a difficult conversation with a direct report |
| `disagreeing-with-manager` | Disagreeing with Your Boss | advanced | Respectfully pushing back on management decisions |
| `reporting-problem` | Raising a Concern | intermediate | Escalating an issue to management |
| `negotiating-workload` | Workload Negotiation | intermediate | Discussing unsustainable workload |
| `exit-conversation` | Resignation Conversation | advanced | Leaving on good terms |

### Key Vocabulary for Category
- "I need to flag something"
- "Can we have a chat?"
- "I've got some concerns"
- "Fair call, but..."
- "Let me be straight with you"
- "No hard feelings"

### Cultural Tips
- Australians value directness but wrapped in casualness
- "Having a chat" is code for serious conversation
- Self-deprecation can defuse tension
- "Fair enough" acknowledges the other perspective

### Phase 2 Deliverables
- [ ] New category created
- [ ] 8 scenarios written and tested
- [ ] Total scenarios: 41
- [ ] New category icon designed

---

## Phase 3: Industry-Specific - Healthcare (Week 5-6)

### Goal
Address the second priority - healthcare workers represent a massive migrant segment with unique communication needs.

### 3.1 Create New Category: `healthcare`

```typescript
{
  id: 'healthcare',
  title: 'Healthcare',
  description: 'Communicate clearly in medical settings',
  icon: '🏥',
  order: 8,
}
```

### 3.2 Healthcare Scenarios (8 scenarios)

| Scenario ID | Title | Difficulty | Description |
|-------------|-------|------------|-------------|
| `patient-handover` | Shift Handover | beginner | Clear, concise patient information transfer |
| `explaining-procedure` | Explaining a Procedure | intermediate | Communicating medical info to patients in plain English |
| `anxious-patient` | Calming an Anxious Patient | intermediate | Bedside manner and reassurance |
| `family-update` | Updating Family Members | intermediate | Sensitive communication with patient families |
| `team-huddle` | Team Huddle | beginner | Quick team coordination meeting |
| `escalating-concern` | Escalating a Clinical Concern | advanced | Raising issues up the chain professionally |
| `colleague-support` | Supporting a Stressed Colleague | intermediate | Checking in on team wellbeing |
| `patient-complaint` | Handling Patient Complaint | advanced | De-escalating dissatisfied patients/families |

### Key Vocabulary for Category
- "Handover"
- "Obs" (observations)
- "NBM" / "nil by mouth"
- "She'll be right" (reassurance)
- "Just popping in to check on you"
- "We'll get you sorted"

### Phase 3 Deliverables
- [ ] New category created
- [ ] 8 scenarios written and tested
- [ ] Medical terminology review for Australian context
- [ ] Total scenarios: 49

---

## Phase 4: Industry-Specific - Tech & IT (Week 7-8)

### Goal
Address priority 3 - tech workers on skilled visas need specific communication skills.

### 4.1 Create New Category: `tech`

```typescript
{
  id: 'tech',
  title: 'Tech & IT',
  description: 'Communicate in technical environments',
  icon: '💻',
  order: 9,
}
```

### 4.2 Tech Scenarios (8 scenarios)

| Scenario ID | Title | Difficulty | Description |
|-------------|-------|------------|-------------|
| `agile-standup` | Agile Stand-up | beginner | Daily standup update (expand existing) |
| `sprint-retro` | Sprint Retrospective | intermediate | Giving and receiving team feedback |
| `code-review-discussion` | Code Review Discussion | intermediate | Discussing technical feedback professionally |
| `explaining-to-stakeholder` | Tech Explanation for Non-Tech | intermediate | Making technical concepts accessible |
| `incident-response` | Incident Communication | advanced | Clear communication during outages/issues |
| `requirements-clarification` | Clarifying Requirements | intermediate | Getting clarity from product/business |
| `tech-interview-behavioural` | Tech Interview Scenarios | intermediate | Behavioural questions in tech context |
| `remote-collaboration` | Remote Team Collaboration | beginner | Effective communication in distributed teams |

### Key Vocabulary for Category
- "Spike" (research task)
- "Blocker"
- "Tech debt"
- "Ship it"
- "LGTM" (looks good to me)
- "Ping me" / "Slack me"

### Phase 4 Deliverables
- [ ] New category created
- [ ] 8 scenarios written and tested
- [ ] Total scenarios: 57

---

## Phase 5: Cross-Cultural Teams (Week 9-10)

### Goal
Address the reality of diverse Australian workplaces where migrants work alongside people from many backgrounds.

### 5.1 Create New Category: `diverse`

```typescript
{
  id: 'diverse',
  title: 'Diverse Teams',
  description: 'Thrive in multicultural workplaces',
  icon: '🌏',
  order: 10,
}
```

### 5.2 Diverse Teams Scenarios (6 scenarios)

| Scenario ID | Title | Difficulty | Description |
|-------------|-------|------------|-------------|
| `offshore-collaboration` | Working with Offshore Teams | intermediate | Communicating across time zones and cultures |
| `cultural-misunderstanding` | Navigating Cultural Differences | intermediate | Handling cross-cultural miscommunication |
| `inclusive-meeting` | Running an Inclusive Meeting | intermediate | Ensuring all voices are heard |
| `building-rapport-cross-cultural` | Building Rapport Across Cultures | beginner | Finding common ground with diverse colleagues |
| `explaining-aussie-culture` | Explaining Aussie Workplace Culture | beginner | Helping others understand Australian norms |
| `asking-about-cultures` | Learning About Colleagues' Backgrounds | beginner | Respectfully showing interest in others' cultures |

### Phase 5 Deliverables
- [ ] New category created
- [ ] 6 scenarios written and tested
- [ ] Total scenarios: 63

---

## Phase 6: Supporting Categories (Week 11-12)

### Goal
Add remaining research-identified categories for comprehensive coverage.

### 6.1 Create Category: `admin`

```typescript
{
  id: 'admin',
  title: 'Aussie Admin',
  description: 'Navigate Australian workplace systems',
  icon: '📋',
  order: 11,
}
```

### Admin Scenarios (4 scenarios)

| Scenario ID | Title | Difficulty | Description |
|-------------|-------|------------|-------------|
| `understanding-payslip` | Understanding Your Payslip | beginner | Discussing pay, super, tax with HR |
| `leave-request` | Requesting Leave | beginner | Annual leave, sick leave, personal leave |
| `fair-work-conversation` | Knowing Your Rights | intermediate | Discussing workplace rights professionally |
| `hr-query` | HR Questions | beginner | General HR enquiries |

### 6.2 Create Category: `wellbeing`

```typescript
{
  id: 'wellbeing',
  title: 'Wellbeing',
  description: 'Mental health at work conversations',
  icon: '💚',
  order: 12,
}
```

### Wellbeing Scenarios (4 scenarios)

| Scenario ID | Title | Difficulty | Description |
|-------------|-------|------------|-------------|
| `ruok-conversation` | R U OK? Check-in | beginner | Checking in on a colleague |
| `discussing-burnout` | Discussing Burnout with Manager | intermediate | Work-life balance conversation |
| `supporting-colleague` | Supporting a Struggling Colleague | intermediate | Being there for a teammate |
| `setting-boundaries` | Setting Work Boundaries | intermediate | Establishing healthy limits |

### Phase 6 Deliverables
- [ ] 2 new categories created
- [ ] 8 scenarios written and tested
- [ ] Total scenarios: 71
- [ ] Total categories: 12

---

## Implementation Summary

### Timeline Overview

| Phase | Weeks | Focus | New Scenarios | Running Total |
|-------|-------|-------|---------------|---------------|
| 1 | 1-2 | Enhance existing | 9 | 33 |
| 2 | 3-4 | Difficult Conversations | 8 | 41 |
| 3 | 5-6 | Healthcare | 8 | 49 |
| 4 | 7-8 | Tech & IT | 8 | 57 |
| 5 | 9-10 | Diverse Teams | 6 | 63 |
| 6 | 11-12 | Admin + Wellbeing | 8 | 71 |

### Category Growth

```
Current:  6 categories, 24 scenarios
Phase 1:  6 categories, 33 scenarios  (+9)
Phase 2:  7 categories, 41 scenarios  (+8, +1 cat)
Phase 3:  8 categories, 49 scenarios  (+8, +1 cat)
Phase 4:  9 categories, 57 scenarios  (+8, +1 cat)
Phase 5:  10 categories, 63 scenarios (+6, +1 cat)
Phase 6:  12 categories, 71 scenarios (+8, +2 cats)
```

### Technical Considerations

#### Data Structure Changes
- `ScenarioCategory` type needs updating after Phase 1
- Consider adding `industrySpecific: boolean` flag
- May need subcategories for Healthcare/Tech scenarios

#### UI Considerations
- Category grid may need redesign for 12 categories
- Consider grouping: "Core" vs "Industry" vs "Life Skills"
- Mobile scrolling for category selection

#### Content Quality
- Each scenario needs:
  - Natural Aussie dialogue
  - 4+ vocabulary items
  - Cultural tip
  - Realistic AI persona prompt
  - Appropriate difficulty rating

---

## Success Metrics

### Per Phase
- All scenarios playable end-to-end
- User testing feedback incorporated
- No breaking changes to existing functionality

### Overall
- 3x increase in scenario count (24 → 71)
- 2x increase in categories (6 → 12)
- Coverage of top 5 research priorities
- Industry-specific content for healthcare and tech

---

## Dependencies & Risks

### Dependencies
- Icon generation for new categories
- AI prompt testing for realistic conversations
- Possible vocabulary/phrase research for industry terms

### Risks
| Risk | Mitigation |
|------|------------|
| Industry scenarios feel inauthentic | Partner with healthcare/tech professionals for review |
| Too many categories overwhelms users | Implement smart category recommendations based on user profile |
| Scope creep | Strict adherence to phase deliverables |

---

## Next Steps

1. **Approve plan** - Review and confirm priorities
2. **Phase 1 kickoff** - Begin writing 9 enhancement scenarios
3. **Icon preparation** - Design/generate icons for new categories
4. **User research** - Optional: Validate scenario ideas with target users

---

*Plan created: 30 January 2026*
