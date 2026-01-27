# SpeakAussie Implementation Plan

## Executive Summary

Based on comprehensive market research, this plan transforms SpeakAussie from a functional MVP into a market-ready product that addresses the #1 gap in language learning: real speaking practice. Our competitive advantage is the combination of ElevenLabs voice AI + Australian-specific workplace content - no competitor offers this.

**Primary Goal:** Convert the existing 46K social media followers into paying users while preventing the 3-month churn cliff that kills language learning apps.

---

## Research-Driven Priorities

### What Research Tells Us

| Finding | Implication |
|---------|-------------|
| Motivation is confidence/belonging > career | Reframe all messaging |
| 3-month churn cliff exists | Show progress by month 2 |
| 15-minute sessions optimal | Design for this length |
| Speaking practice is #1 gap | Our ElevenLabs integration is the differentiator |
| Users hate artificial friction | No hearts/energy system ever |
| Billing trust is critical | Transparent, easy cancellation |
| $15-35/month is the sweet spot | Restructure current pricing |

### Target Persona: Confident Communicator (40% of market)

- Age 28-38, entry to mid-level professionals
- Been in Australia 6 months - 2 years
- Primary pain: accent confusion, slang, anxiety about being misunderstood
- Willing to pay: $15-30/month
- Success metric: "I feel confident speaking at work"

---

## Phase 1: Messaging & Positioning (Week 1-2)

### 1.1 Reframe Core Messaging

**Current (Career-focused):**
- "Advance in your role"
- "From interview to thriving in your role"
- "Nail your Australian job interview"

**New (Confidence-focused):**
- "Speak with confidence at work"
- "Never feel misunderstood again"
- "Fit in with your Australian team"
- "From anxious to confident in 8 weeks"

### 1.2 Update App Copy

| Location | Current | New |
|----------|---------|-----|
| Header tagline | "Master Australian workplace English" | "Speak with confidence at work" |
| Scenario selector subtitle | "From interview to thriving in your role" | "Practice real conversations. Build real confidence." |
| Career Growth category | "Advance in your role" | "Speak up with confidence" |
| Subscription plans | "For serious learners" | "For confident communicators" |

### 1.3 Update Category Framing

| Category | Current Description | New Description |
|----------|---------------------|-----------------|
| Getting the Job | "Nail your Australian job interview" | "Interview with confidence" |
| First Weeks | "Start strong in your new role" | "Fit in from day one" |
| Meetings | "Contribute confidently in meetings" | Keep (already good) |
| Career Growth | "Advance in your role" | "Speak up and be heard" |
| Work Social | "Connect with colleagues" | Keep (already good) |

### Deliverables
- [x] Update AussieEnglishPractice.tsx header and instructions
- [x] Update scenarios.ts category descriptions
- [x] Update SubscriptionPlans.tsx copy
- [ ] Update any marketing/landing page copy

---

## Phase 2: Pricing Restructure (Week 2-3)

### 2.1 New Pricing Structure

**Current Pricing:**
- Free: 2 min/day
- Basic: $25/month - 5 min/day
- Standard: $49/month - 10 min/day
- Premium: $79/month - 15 min/day

**New Pricing (Good-Better-Best with Anchoring):**
- Free: 2 min/day (unchanged - trial)
- Starter: $29/month - 5 min/day
- Professional: $49/month - 15 min/day (TARGET TIER)
- Executive: $99/month - Unlimited + monthly group coaching

**Rationale:**
- $29 entry signals premium (not cheap app territory)
- $49 is the anchor target - $99 makes it look like great value
- $99 Executive captures high-value users + creates community
- 68% gross margin, $50.50 ARPU
- Niche positioning justifies premium pricing

### 2.2 Pricing Page Updates

**Starter ($29/month)**
- 5 minutes of voice practice per day
- All 14+ workplace scenarios
- 160+ slang terms
- Basic progress tracking

**Professional ($49/month) - "Most Popular"**
- 15 minutes of voice practice per day
- All Starter features
- Confidence score tracking
- Session recordings & playback
- Priority support

**Executive ($99/month)**
- Unlimited voice practice
- All Professional features
- Monthly group coaching call with Your Aussie Uncle
- Early access to new scenarios
- Direct feedback on your progress

### 2.3 Billing Trust Features

Based on competitor failures (Elsa, Babbel billing complaints):

- [ ] Add clear trial-end reminder emails (3 days, 1 day before)
- [ ] Easy one-click cancellation in app
- [ ] No dark patterns in subscription flow
- [ ] Show "Cancel anytime" prominently
- [ ] Prorated refunds for annual plans

### Deliverables
- [x] Update backend schema.ts with new plan limits
- [x] Update SubscriptionPlans.tsx with new tiers
- [x] Update useSubscription.ts with new plan types
- [x] Update UsageBadge.tsx with new plan labels
- [x] Update billing.ts with new checkout schema
- [x] Update Subscription.ts model with new PlanType
- [x] Update stripe.ts with new price mappings
- [x] Update .env.example with new env vars
- [ ] Create Stripe products/prices in dashboard
- [ ] Add cancellation reminder emails
- [ ] Update billing portal access

---

## Phase 3: Progress Tracking - Beat the 3-Month Cliff (Week 3-5)

### 3.1 The Problem

Users churn at 3 months because they don't see progress. Research shows:
- "I have seen no amelioration in my accent" (Elsa review)
- Users need tangible proof they're improving

### 3.2 Confidence Score System

Create a simple "Confidence Score" that users can see growing:

**Inputs:**
- Sessions completed
- Scenarios mastered (repeat scenarios get easier)
- Vocabulary learned
- Speaking time accumulated
- Consistency streak

**Display:**
- Overall confidence score (0-100)
- Progress over time chart
- "You're in the top X% of learners this week"
- Milestone celebrations

### 3.3 Before/After Recordings

Allow users to:
1. Record themselves in Week 1
2. Get prompted to re-record at Week 4, Week 8
3. Compare side-by-side
4. Share progress (optional)

### 3.4 Weekly Progress Summary

Email/notification each week:
- Minutes practiced this week
- Scenarios completed
- New vocabulary learned
- Confidence score change
- Encouragement message

### 3.5 90-Day Confidence Journey

Structure the experience as a journey:
- **Week 1-2:** "Getting Started" - Basic scenarios, build habit
- **Week 3-4:** "Finding Your Voice" - More challenging scenarios
- **Week 5-8:** "Building Momentum" - Advanced scenarios, measure progress
- **Week 9-12:** "Confident Communicator" - Master scenarios, celebrate

### Deliverables
- [x] Create ConfidenceScore component
- [x] Add confidence score calculation (frontend hook)
- [x] Create progress dashboard improvements (Confidence tab)
- [x] Add milestone tracking system
- [x] Design 90-day journey framework (useJourneyProgress hook + components)
- [ ] Add session recording/playback feature
- [ ] Create weekly email summary system

---

## Phase 4: Engagement Features - Prevent Early Churn (Week 5-7)

### 4.1 Onboarding Improvements

Research shows boring/repetitive content causes churn in weeks 2-4.

**New User Flow:**
1. Welcome video/message from "Your Aussie Uncle"
2. Quick assessment: "Where are you in your Aussie journey?"
3. Personalized starting scenario recommendation
4. First session success celebration
5. "Come back tomorrow" reminder with specific scenario suggestion

### 4.2 Session Variety

Prevent repetition fatigue:
- Recommend different scenarios each day
- "Try something new" prompts
- Seasonal/timely scenarios (e.g., "Christmas party small talk")
- User-requested scenario voting

### 4.3 Micro-Learning Mode

For days when users only have 5 minutes:
- Quick slang flashcard review
- Single phrase practice
- Listen to a scenario (passive learning)

### 4.4 Streak & Habit System

Simple, non-punitive:
- Track daily practice streak
- Celebrate milestones (7 days, 30 days, etc.)
- "Streak freeze" for missed days (no punishment)
- Weekly consistency goals, not daily requirements

### Deliverables
- [x] Create improved onboarding flow (OnboardingFlow component)
- [x] Add scenario recommendation engine (useScenarioRecommendations hook)
- [ ] Create micro-learning mode
- [x] Implement streak tracking (already in confidence score + progress tracking)
- [x] Add celebration animations/messages (CelebrationToast component)

---

## Phase 5: Content Expansion (Week 7-10)

### 5.1 Priority Scenarios to Add

Based on Confident Communicator needs:

**High Priority (add first):**
1. "Small Talk at the Coffee Machine" (extend existing)
2. "Joining a Video Call" - remote work is common
3. "Asking for Clarification" - "Sorry, what does that mean?"
4. "The Work Christmas Party" - seasonal, social anxiety
5. "Giving a Quick Update in Standup" - common scenario

**Medium Priority:**
6. "Responding to Slack/Teams Messages" - written vs spoken Aussie
7. "Making Small Talk with Your Manager's Boss"
8. "Handling a Difficult Customer" (for customer-facing roles)
9. "Explaining Your Background" - common question for migrants
10. "The Friday Afternoon Wind-Down" - informal end-of-week chat

### 5.2 Slang Expansion

Add workplace-specific slang categories:
- Email/written slang ("circling back", "as per my last email")
- Meeting slang ("let's take this offline", "park that")
- Remote work slang ("jump on a call", "share your screen")
- Industry-specific slang (optional future expansion)

### 5.3 Workplace Culture Modules

New content type: short explainers (not conversation-based)
- "The Aussie Meeting: Why It Starts with Chitchat"
- "Tall Poppy Syndrome: How to Talk About Achievements"
- "The Friday Drinks Culture: What to Expect"
- "Email Tone: Why Aussies Sound Casual Even When Serious"

### Deliverables
- [x] Add 5 high-priority scenarios
- [x] Expand slang database (30 workplace terms added)
- [x] Create workplace culture module framework
- [x] Add 3-5 culture explainer modules (5 modules added)
- [x] Create CultureModuleViewer component with UI

---

## Phase 6: Feedback & Improvement Loop (Week 10-12)

### 6.1 Constructive Feedback System

Research shows Elsa's harsh feedback causes frustration. Design encouraging feedback:

**Instead of:** "Your pronunciation of 'mate' was incorrect"
**Say:** "Good effort! Try saying 'mate' with a flatter 'a' sound - like 'mayt'. Aussies love this word!"

Principles:
- Always acknowledge the attempt
- Give specific, actionable tips
- Use encouraging language
- Show improvement over time

### 6.2 Post-Session Feedback

After each scenario:
- "How did that feel?" (Great / Okay / Tough)
- Quick tip based on the conversation
- Suggest next scenario
- Option to repeat or try new

### 6.3 User Feedback Collection

Build feedback into the product:
- In-app feedback button
- "What scenario do you want next?" voting
- Monthly NPS survey
- Churn survey for cancellations

### Deliverables
- [x] Design encouraging feedback message templates (feedbackMessages.ts)
- [x] Create post-session feedback flow (PostSessionFeedback.tsx)
- [x] Add in-app feedback mechanism (FeedbackButton.tsx)
- [x] Set up NPS survey system (NPSSurvey.tsx with useNPSSurvey hook)

---

## Technical Debt & Infrastructure (Ongoing)

### Priority Fixes (from code review)

1. **Error Logging** - Add proper error tracking (Sentry or similar)
2. **Testing** - Add basic test coverage for critical paths
3. **Performance** - Research shows slow apps cause churn
4. **Analytics** - Track key metrics (session completion, churn, etc.)

### Monitoring

Track these metrics from day 1:
- Daily/Weekly active users
- Session completion rate
- Scenario popularity
- Conversion rate (free to paid)
- Churn rate (especially at day 30, 60, 90)
- NPS score

---

## Success Metrics

### 90-Day Goals

| Metric | Target | Why |
|--------|--------|-----|
| Free to Paid Conversion | 5-10% | Industry benchmark |
| Day 7 Retention | 40%+ | Early engagement |
| Day 30 Retention | 25%+ | Habit formation |
| Day 90 Retention | 15%+ | Beat the churn cliff |
| Session Completion | 80%+ | Content is engaging |
| NPS Score | 40+ | Users recommend it |

### Revenue Goals

**Pricing:** $29/$49/$99 (Starter/Professional/Executive)
**Expected ARPU:** $50.50/month
**Gross Margin:** 68%

| Conversion | Paying Users | Monthly Revenue | Monthly Profit | Annual Profit |
|------------|--------------|-----------------|----------------|---------------|
| 1% of 46K | 460 | $23,230 | $15,700 | $188,400 |
| 2% of 46K | 920 | $46,460 | $31,400 | $376,800 |
| 5% of 46K | 2,300 | $116,150 | $78,499 | $941,988 |

---

## Implementation Timeline

| Week | Phase | Key Deliverables |
|------|-------|------------------|
| 1-2 | Messaging | Updated copy throughout app |
| 2-3 | Pricing | New pricing tiers, billing improvements |
| 3-5 | Progress Tracking | Confidence score, journey framework |
| 5-7 | Engagement | Onboarding, streaks, micro-learning |
| 7-10 | Content | 5 new scenarios, culture modules |
| 10-12 | Feedback | Encouraging feedback system |
| Ongoing | Technical | Error logging, testing, analytics |

---

## Dependencies & Risks

### Dependencies
- ElevenLabs grant approval (for sustainable unit economics at $15 tier)
- Time to create new scenario content
- Design resources for UI improvements

### Risks

| Risk | Mitigation |
|------|------------|
| Grant not approved | Start with $25 Basic tier, lower to $15 if approved |
| Users don't convert | Test with small audience first, iterate on messaging |
| Content creation slow | Prioritize highest-impact scenarios first |
| Technical issues | Add monitoring before scaling marketing |

---

## Next Steps (Immediate)

1. **Confirm pricing strategy** - Wait for ElevenLabs grant decision or proceed with adjusted pricing?
2. **Start Phase 1** - Messaging updates (lowest effort, high impact)
3. **Set up analytics** - Can't improve what you can't measure
4. **Plan content creation** - Start writing new scenarios

---

*Implementation plan created: 27 January 2026*
*Based on: Initial market validation + Follow-up competitive intelligence research*
