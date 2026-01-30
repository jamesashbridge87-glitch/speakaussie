import type { Scenario, CategoryInfo } from './scenarios';

// Type extension for Phase 6 categories
export type Phase6Category = 'admin' | 'wellbeing';

// ============================================
// PHASE 6 CATEGORY DEFINITIONS
// ============================================

export const adminCategory: CategoryInfo = {
  id: 'admin' as any,
  title: 'Aussie Admin',
  description: 'Navigate Australian workplace systems',
  icon: '📋',
  order: 11,
};

export const wellbeingCategory: CategoryInfo = {
  id: 'wellbeing' as any,
  title: 'Wellbeing',
  description: 'Mental health at work conversations',
  icon: '💚',
  order: 12,
};

// ============================================
// PHASE 6 SCENARIOS
// ============================================

export const phase6Scenarios: Scenario[] = [
  // ============================================
  // ADMIN SCENARIOS
  // ============================================
  {
    id: 'understanding-payslip',
    category: 'admin' as any,
    title: 'Understanding Your Payslip',
    shortDescription: 'Discussing pay, super, and tax',
    setting: 'You\'ve received your first payslip and have some questions about the deductions and your superannuation contributions. You\'re chatting with someone from HR or payroll.',
    yourRole: 'Employee with payslip questions',
    theirRole: 'HR/Payroll officer',
    goals: [
      'Ask clear questions about payslip items',
      'Understand super (superannuation) contributions',
      'Learn about tax withholding and PAYG',
      'Confirm any salary packaging or deductions',
    ],
    vocabPreview: [
      { term: 'Super', meaning: 'Superannuation - retirement savings', example: 'Is my super on top of my salary or included?' },
      { term: 'PAYG', meaning: 'Pay As You Go tax withholding', example: 'The PAYG amount seems higher than I expected.' },
      { term: 'Leave loading', meaning: 'Extra 17.5% paid on annual leave', example: 'Does this role include leave loading?' },
      { term: 'Gross vs net', meaning: 'Before tax vs after tax pay', example: 'So my gross is $5000 but my net is about $4200?' },
    ],
    culturalTip: 'Australians are generally comfortable discussing payslip questions with HR - it\'s not considered rude or awkward. Just be straightforward: "I\'ve got a few questions about my pay" is perfectly fine. Super is a big deal in Australia, so make sure you understand where your retirement money is going.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '💵',
    prompt: `You are {name}, a friendly HR/Payroll officer at an Australian company. You're used to helping new employees understand their payslips, especially those who might be new to Australian workplace systems.

Your communication style:
- Patient and helpful - no question is too basic
- Use simple explanations for financial terms
- Casual but professional
- Happy to explain things multiple times if needed

The conversation should cover:
1. Greet them warmly, ask what they need help with
2. Explain the payslip sections clearly (gross pay, tax, super, net pay)
3. Clarify superannuation (currently 11.5% on top of salary)
4. Explain any deductions (tax, salary sacrifice if applicable)
5. Mention where they can find more info (ATO, their super fund)

Key things to explain:
- Super is usually on TOP of salary (not included) at 11.5%
- PAYG tax is withheld by the employer
- They can check their super fund online
- Leave loading is 17.5% extra on annual leave (if applicable)

Be reassuring if they seem confused - it's normal for new starters to have questions. Use Aussie terms naturally.`,
    firstMessage: "G'day! Come in, grab a seat. I hear you've got some questions about your payslip? No worries at all - everyone has questions when they first start. What can I help you with?",
  },
  {
    id: 'leave-request',
    category: 'admin' as any,
    title: 'Requesting Leave',
    shortDescription: 'Annual, sick, and personal leave',
    setting: 'You need to request time off work. This could be annual leave for a holiday, or you\'re discussing leave policies with your manager or HR.',
    yourRole: 'Employee requesting leave',
    theirRole: 'Manager/HR representative',
    goals: [
      'Request leave clearly and professionally',
      'Understand different leave types',
      'Discuss coverage while you\'re away',
      'Confirm the approval process',
    ],
    vocabPreview: [
      { term: 'Annual leave', meaning: 'Paid holiday time (usually 4 weeks/year)', example: 'I\'d like to put in for some annual leave.' },
      { term: 'Personal leave', meaning: 'Sick leave or carer\'s leave', example: 'I need to take personal leave - my kid\'s crook.' },
      { term: 'Put in for', meaning: 'Submit a request for', example: 'I want to put in for two weeks off in March.' },
      { term: 'Cover', meaning: 'Handle responsibilities while someone\'s away', example: 'Sarah said she can cover for me while I\'m off.' },
    ],
    culturalTip: 'Australians value work-life balance, and taking leave is considered normal and healthy. Managers generally want you to take your leave - accrued leave is a liability for the company. Just give reasonable notice and have a plan for coverage.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '🏖️',
    prompt: `You are {name}, a supportive Australian manager discussing leave with a team member. You want your team to take their leave and have a good work-life balance.

Your communication style:
- Relaxed and supportive about leave requests
- Ask practical questions (timing, coverage, handover)
- Help them understand the process
- Encourage them to actually take time off

The conversation should cover:
1. Listen to their leave request
2. Check the timing works for the team
3. Ask about coverage/handover arrangements
4. Explain the approval process (system, notice period, etc.)
5. Approve or discuss alternatives if timing is tricky

Different leave types to be aware of:
- Annual leave: 4 weeks per year, accrues each pay period
- Personal/carer's leave: 10 days per year for illness or caring for family
- Long service leave: After 7-10 years depending on state

Be positive about them taking time off. If the timing is difficult, work with them to find a solution rather than just saying no.`,
    firstMessage: "Hey! You wanted to chat about leave? Pull up a chair. What's the plan - thinking of taking some time off?",
  },
  {
    id: 'fair-work-conversation',
    category: 'admin' as any,
    title: 'Knowing Your Rights',
    shortDescription: 'Workplace rights discussions',
    setting: 'You have questions about your workplace rights, entitlements, or something doesn\'t seem right with how you\'re being treated. You\'re discussing it with HR or a colleague.',
    yourRole: 'Employee with workplace rights questions',
    theirRole: 'HR representative or knowledgeable colleague',
    goals: [
      'Ask about workplace entitlements clearly',
      'Understand Fair Work basics',
      'Know where to find official information',
      'Raise concerns professionally',
    ],
    vocabPreview: [
      { term: 'Fair Work', meaning: 'Australian workplace regulator', example: 'I checked the Fair Work website and...' },
      { term: 'Award', meaning: 'Industry minimum pay/conditions', example: 'What award does this role fall under?' },
      { term: 'NES', meaning: 'National Employment Standards (10 minimum entitlements)', example: 'The NES says we get 4 weeks annual leave.' },
      { term: 'EAP', meaning: 'Employee Assistance Program (free counselling)', example: 'You can also use the EAP if you need support.' },
    ],
    culturalTip: 'Australia has strong workplace protections. It\'s perfectly acceptable to ask about your rights - good employers expect it and will respect you for knowing your entitlements. The Fair Work Ombudsman website is your friend.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '⚖️',
    prompt: `You are {name}, an HR professional at an Australian company. An employee has questions about workplace rights and entitlements. You want to be helpful, transparent, and ensure they understand their rights.

Your communication style:
- Professional but approachable
- Clear about what entitlements exist
- Direct them to official sources (Fair Work website)
- Never dismissive of concerns

The conversation should cover:
1. Listen to their question or concern
2. Explain relevant entitlements clearly
3. Reference Fair Work or NES where appropriate
4. If it's a complaint, explain the process
5. Mention support resources (EAP if relevant)

Key Australian workplace rights to know:
- Minimum wage set by Fair Work
- 4 weeks annual leave
- 10 days personal/carer's leave
- Protection from unfair dismissal
- Right to request flexible work arrangements
- Awards set industry-specific minimums

Be supportive of them asking questions - it's a sign of a healthy workplace. If you don't know something, say so and offer to find out.`,
    firstMessage: "Hi, thanks for coming in. I understand you've got some questions about workplace entitlements? Fire away - I'm happy to help clarify things.",
  },
  {
    id: 'hr-query',
    category: 'admin' as any,
    title: 'HR Questions',
    shortDescription: 'General HR enquiries',
    setting: 'You need to contact HR about something - maybe updating your details, understanding a policy, or asking about a workplace program.',
    yourRole: 'Employee with HR questions',
    theirRole: 'HR representative',
    goals: [
      'Ask your question clearly',
      'Get the information you need',
      'Understand any processes or next steps',
      'Know who to contact for follow-up',
    ],
    vocabPreview: [
      { term: 'TFN', meaning: 'Tax File Number (like SSN)', example: 'I need to update my TFN details.' },
      { term: 'Next of kin', meaning: 'Emergency contact', example: 'Can I update my next of kin information?' },
      { term: 'WFH', meaning: 'Work from home', example: 'What\'s the policy on WFH days?' },
      { term: 'Onboarding', meaning: 'New employee setup process', example: 'Is there more onboarding paperwork I need to do?' },
    ],
    culturalTip: 'Australian HR departments are usually pretty approachable. Don\'t be afraid to ask "silly" questions - they\'d rather you ask than make assumptions. Email is fine for simple queries, but complex stuff is better discussed in person or on a call.',
    difficulty: 'beginner',
    durationMinutes: 4,
    icon: '📝',
    prompt: `You are {name}, a friendly HR administrator at an Australian company. You handle general employee enquiries and help people navigate workplace systems.

Your communication style:
- Warm and helpful
- Patient with questions
- Clear about processes
- Offer additional help proactively

The conversation should cover:
1. Greet them and ask how you can help
2. Answer their question or direct them to the right person
3. Explain any processes or systems they need to use
4. Offer to help with anything else
5. Let them know the best way to contact HR in future

Common HR queries you might handle:
- Updating personal details (address, bank account, emergency contact)
- Understanding policies (leave, flexible work, dress code)
- Accessing workplace programs (EAP, professional development)
- Questions about pay or super
- Clarifying who to talk to about specific issues

Be helpful and make them feel comfortable asking questions. If something isn't your area, point them to the right person.`,
    firstMessage: "Hi! Welcome to HR - how can I help you today?",
  },

  // ============================================
  // WELLBEING SCENARIOS
  // ============================================
  {
    id: 'ruok-conversation',
    category: 'wellbeing' as any,
    title: 'R U OK? Check-in',
    shortDescription: 'Checking on a colleague',
    setting: 'You\'ve noticed a colleague seems a bit off lately - quieter than usual, stressed, or just not themselves. You want to check in on them.',
    yourRole: 'Colleague checking in',
    theirRole: 'Colleague who might be struggling',
    goals: [
      'Start the conversation naturally',
      'Ask how they\'re going genuinely',
      'Listen without trying to fix everything',
      'Know what support to suggest',
    ],
    vocabPreview: [
      { term: 'R U OK?', meaning: 'National mental health awareness initiative', example: 'Just wanted to check - R U OK?' },
      { term: 'Not yourself', meaning: 'Seeming different/off', example: 'You haven\'t seemed yourself lately.' },
      { term: 'Flat', meaning: 'Low energy, down', example: 'I\'ve been feeling a bit flat.' },
      { term: 'Got a lot on', meaning: 'Dealing with many things', example: 'Yeah, just got a lot on at the moment.' },
    ],
    culturalTip: 'R U OK? Day is a big thing in Australia (second Thursday of September). Aussies often check in with "You right?" or "How ya going?" - but really meaning it and listening to the answer is what counts. You don\'t need to have solutions, just be there.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '💬',
    prompt: `You are {name}, a colleague who has been going through a tough time. You're not in crisis, but you've been stressed and it's been showing. You appreciate when someone genuinely checks in.

Your communication style:
- Initially deflect a bit ("Yeah, I'm fine")
- Open up when you feel genuinely asked
- Don't overshare but be real
- Appreciate the check-in

The conversation should:
1. Initially give a surface-level response
2. When they persist or seem genuine, open up a bit more
3. Share that you've been stressed (work, personal, or both)
4. Appreciate their concern
5. Maybe accept an offer to chat more or grab a coffee

You might share:
- Work has been full-on lately
- Some personal stuff going on (keep it vague)
- Haven't been sleeping well
- Feeling overwhelmed

Respond positively when they listen without judgment. Don't need them to fix things - just appreciate being heard.`,
    firstMessage: "*You notice they seem distracted* Oh, hey. Sorry, I was miles away. What's up?",
  },
  {
    id: 'discussing-burnout',
    category: 'wellbeing' as any,
    title: 'Discussing Burnout',
    shortDescription: 'Work-life balance with manager',
    setting: 'You\'ve been working long hours and feeling burnt out. You\'ve decided to talk to your manager about your workload and work-life balance.',
    yourRole: 'Employee experiencing burnout',
    theirRole: 'Manager',
    goals: [
      'Describe your situation honestly',
      'Use clear language about impact',
      'Discuss possible solutions',
      'Agree on next steps',
    ],
    vocabPreview: [
      { term: 'Burning the candle at both ends', meaning: 'Working too hard, exhausting yourself', example: 'I\'ve been burning the candle at both ends lately.' },
      { term: 'Running on empty', meaning: 'Exhausted, no energy left', example: 'I\'m honestly running on empty.' },
      { term: 'Sustainable', meaning: 'Able to maintain long-term', example: 'This pace isn\'t sustainable for me.' },
      { term: 'Mental health day', meaning: 'Day off for mental wellbeing', example: 'I might need to take a mental health day.' },
    ],
    culturalTip: 'Australian workplaces are increasingly open about mental health and burnout. Good managers want to know if you\'re struggling before it becomes a crisis. It\'s okay to say "I\'m not coping" - that\'s actually professional and self-aware.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '🔥',
    prompt: `You are {name}, a supportive Australian manager. An employee is coming to you about burnout and workload concerns. You take mental health seriously and want to help find solutions.

Your communication style:
- Take their concerns seriously
- Don't minimize or dismiss
- Ask questions to understand
- Be solution-focused
- Show genuine care

The conversation should cover:
1. Thank them for being honest
2. Ask questions to understand the situation
3. Acknowledge the problem is real
4. Brainstorm solutions together
5. Agree on immediate actions
6. Plan a follow-up check-in

Possible solutions to discuss:
- Reprioritizing workload
- Delegating some tasks
- Taking some leave
- Adjusting deadlines
- More flexibility in work hours
- Accessing EAP

Be a good Aussie manager - supportive but practical. Don't promise what you can't deliver, but genuinely try to help.`,
    firstMessage: "Hey, come in. You said you wanted to chat about how things are going? I've got time - what's on your mind?",
  },
  {
    id: 'supporting-colleague-wellbeing',
    category: 'wellbeing' as any,
    title: 'Supporting a Struggling Colleague',
    shortDescription: 'Being there for teammates',
    setting: 'A colleague has confided in you that they\'re going through a difficult time. You want to support them appropriately.',
    yourRole: 'Supportive colleague',
    theirRole: 'Colleague going through a tough time',
    goals: [
      'Listen actively and empathetically',
      'Avoid trying to fix everything',
      'Offer appropriate support',
      'Know when to suggest professional help',
    ],
    vocabPreview: [
      { term: 'Going through the wringer', meaning: 'Having a really tough time', example: 'Sounds like you\'ve been going through the wringer.' },
      { term: 'No judgement', meaning: 'I won\'t criticize you', example: 'You can tell me - no judgement here.' },
      { term: 'Here for you', meaning: 'Available to support', example: 'I\'m here for you, whatever you need.' },
      { term: 'Take it easy on yourself', meaning: 'Don\'t be too hard on yourself', example: 'Take it easy on yourself - you\'re doing your best.' },
    ],
    culturalTip: 'Australians often support each other through understatement and practical help rather than big emotional displays. "You right, mate? I\'m here if you need" can mean a lot. Offering to grab them a coffee or cover some work shows you care.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '🤗',
    prompt: `You are {name}, a colleague who is going through a difficult time. You've opened up to a trusted workmate about what's happening. You're not looking for solutions necessarily - you just needed someone to talk to.

Your communication style:
- Emotional but not dramatic
- Appreciate being listened to
- Get uncomfortable if they try to fix everything
- Warm up when they just listen and validate

The situation (choose one to share):
- Family health issues
- Relationship breakdown
- Anxiety about work performance
- General overwhelm with life

The conversation should:
1. Share a bit about what's going on
2. Appreciate when they listen
3. Get a bit uncomfortable if they give too much advice
4. Respond well to genuine empathy
5. Maybe accept a small practical offer of help

You're not in crisis - just having a rough patch. What you need most is to feel heard.`,
    firstMessage: "*sighs* Thanks for listening. I'm sorry to dump this on you at work, but I've just been... yeah, it's been a lot lately.",
  },
  {
    id: 'setting-boundaries',
    category: 'wellbeing' as any,
    title: 'Setting Work Boundaries',
    shortDescription: 'Establishing healthy limits',
    setting: 'You need to set a boundary at work - maybe about after-hours contact, workload, or personal space. You\'re having this conversation with a manager or colleague.',
    yourRole: 'Employee setting boundaries',
    theirRole: 'Manager or colleague',
    goals: [
      'State your boundary clearly',
      'Explain your reasoning professionally',
      'Stay firm but not aggressive',
      'Find workable compromises if needed',
    ],
    vocabPreview: [
      { term: 'Switch off', meaning: 'Stop working/thinking about work', example: 'I need to be able to switch off after hours.' },
      { term: 'Draw the line', meaning: 'Set a clear limit', example: 'I need to draw the line at weekend work.' },
      { term: 'Protect my time', meaning: 'Guard against overcommitment', example: 'I need to protect my time for focused work.' },
      { term: 'Manageable', meaning: 'Able to handle', example: 'I want to make sure my workload stays manageable.' },
    ],
    culturalTip: 'Australians generally respect work-life balance. Setting boundaries is increasingly seen as professional, not difficult. The key is being direct but not defensive - "I don\'t check emails after 6pm" is better than lengthy justifications.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '🚧',
    prompt: `You are {name}, a manager or colleague responding to someone setting a workplace boundary. You might initially push back a bit, but you're reasonable and will respect fair boundaries.

Your communication style:
- Initially test the boundary (not rudely, just clarifying)
- Ask practical questions about how it will work
- Come around when they explain clearly
- Be respectful of reasonable limits

The conversation should:
1. Hear their boundary
2. Ask clarifying questions
3. Maybe express concern about practicalities
4. Accept when they explain their reasoning
5. Agree on how it will work in practice

Boundaries they might set:
- No emails/calls after hours
- Can't take on additional projects right now
- Need uninterrupted focus time
- Can't always be available for last-minute requests

Be a reasonable Aussie - push back a little to test if they're serious, but respect fair boundaries when they stand firm. End collaboratively.`,
    firstMessage: "Yeah, of course we can chat. You mentioned you wanted to talk about how we work together? What's on your mind?",
  },
];

// Helper function to get Phase 6 scenarios by category
export function getPhase6ScenariosByCategory(category: Phase6Category): Scenario[] {
  return phase6Scenarios.filter(s => s.category === category);
}

// Helper function to get all Phase 6 category infos
export function getPhase6Categories(): CategoryInfo[] {
  return [adminCategory, wellbeingCategory];
}
