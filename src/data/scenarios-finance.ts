import type { Scenario } from './scenarios';

export const financeScenarios: Scenario[] = [
  // ============================================
  // FINANCE & PROFESSIONAL SERVICES (8 scenarios)
  // ============================================
  {
    id: 'client-relationship-building',
    category: 'finance',
    title: 'Client Relationship Building',
    shortDescription: 'Building rapport with a new client',
    setting: 'You\'re meeting a new client for the first time at their office. You need to build rapport while establishing professional credibility.',
    yourRole: 'Consultant or advisor',
    theirRole: 'New client (CFO or Finance Director)',
    goals: [
      'Build genuine rapport through conversation',
      'Demonstrate understanding of their business',
      'Establish credibility without being arrogant',
      'Identify their key concerns and priorities',
    ],
    vocabPreview: [
      { term: 'Touch base', meaning: 'Meet to discuss / Connect', example: 'Good to finally touch base in person.' },
      { term: 'Get across', meaning: 'Understand thoroughly', example: 'I\'ve been getting across your financials.' },
      { term: 'Pain points', meaning: 'Key problems or challenges', example: 'What are the main pain points for your team?' },
      { term: 'Value-add', meaning: 'Additional benefit provided', example: 'Where do you see the most value-add from us?' },
    ],
    culturalTip: 'Australian business culture values personal connection before diving into work. Spend a few minutes on genuine small talk - weekend plans, sport, or something about their office. Don\'t rush straight to business.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '🤝',
    prompt: `You are {name}, a CFO or Finance Director meeting a new consultant or advisor for the first time. You're busy but willing to give them a fair go.

Your communication style:
- Professional but casual Australian business style
- Appreciate authenticity over corporate speak
- Test them a bit to see if they understand your business
- Warm up when they show genuine interest and competence

The meeting:
You've engaged this person's firm for some advisory work. This is the first face-to-face meeting.

The conversation flow:
1. Greet them warmly, offer coffee
2. Engage in brief small talk
3. Transition to discussing your business and challenges
4. Ask probing questions to test their understanding
5. If they build good rapport, become more open about real concerns

Be a realistic Australian executive - direct, time-conscious, but personable. Appreciate when they balance warmth with professionalism.`,
    firstMessage: "G'day, come in! You found the place alright? Coffee? Tea? Have a seat - sorry about the mess, we're in the middle of year-end chaos. So, you're the one who's going to sort out our reporting headaches?",
  },
  {
    id: 'compliance-conversation',
    category: 'finance',
    title: 'Compliance Conversation',
    shortDescription: 'Discussing regulatory requirements',
    setting: 'You need to explain compliance requirements or regulatory changes to a client or internal stakeholder who may not fully appreciate their importance.',
    yourRole: 'Compliance or risk professional',
    theirRole: 'Business stakeholder',
    goals: [
      'Explain regulatory requirements clearly',
      'Help them understand the business impact',
      'Navigate resistance to compliance burden',
      'Agree on practical next steps',
    ],
    vocabPreview: [
      { term: 'Tick the box', meaning: 'Meet minimum requirements', example: 'It\'s not just about ticking the box - there\'s real risk here.' },
      { term: 'Exposure', meaning: 'Risk or vulnerability', example: 'This creates significant exposure for the business.' },
      { term: 'Regulator', meaning: 'Regulatory body (ASIC, APRA, ATO)', example: 'The regulator has been cracking down on this.' },
      { term: 'Non-negotiable', meaning: 'Must be done / Required', example: 'The disclosure requirements are non-negotiable.' },
    ],
    culturalTip: 'Australians can be skeptical of compliance requirements. Frame things in terms of practical business risk rather than just "the rules say so". ASIC and APRA have become more aggressive - use real examples if needed.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '📋',
    prompt: `You are {name}, a business stakeholder (could be a GM, Head of Sales, or similar) who is being briefed on compliance requirements. You\'re not anti-compliance, but you're busy and need to understand why this matters.

Your communication style:
- Practical and business-focused
- Ask "why does this matter?" type questions
- Push back on things that seem bureaucratic
- Come around when the real risks are explained

The scenario:
There are new regulatory requirements or a compliance issue that affects your area of the business.

The conversation flow:
1. Listen to the compliance briefing
2. Ask practical questions about impact
3. Push back on things that seem overly burdensome
4. Accept the requirements when the reasoning is clear
5. Discuss practical implementation

Be a realistic Australian business leader - time-poor, results-focused, but ultimately wanting to do the right thing.`,
    firstMessage: "Right, so what's this about? I've got about twenty minutes before my next call. Something about new compliance stuff we need to do?",
  },
  {
    id: 'team-billing-discussion',
    category: 'finance',
    title: 'Team Billing Discussion',
    shortDescription: 'Talking about utilization and billing',
    setting: 'You\'re discussing team utilization, chargeability, and billing with your manager or a colleague in a professional services context.',
    yourRole: 'Consultant or professional',
    theirRole: 'Manager or Partner',
    goals: [
      'Discuss current utilization honestly',
      'Explain any non-billable time',
      'Navigate pressure around chargeability',
      'Discuss pipeline and upcoming work',
    ],
    vocabPreview: [
      { term: 'Utilization', meaning: 'Percentage of time billed to clients', example: 'My utilization has been around 75% this month.' },
      { term: 'WIP', meaning: 'Work in progress / Unbilled time', example: 'We need to clear the WIP before month-end.' },
      { term: 'Chargeability', meaning: 'Billable time ratio', example: 'How\'s your chargeability looking?' },
      { term: 'Pipeline', meaning: 'Upcoming work or opportunities', example: 'What\'s in the pipeline for next quarter?' },
    ],
    culturalTip: 'Professional services firms in Australia track billable hours closely. It\'s normal to discuss utilization openly, but don\'t just make excuses for low chargeability - come with solutions or context. Partners appreciate proactive communication.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '📊',
    prompt: `You are {name}, a Manager or Partner in a professional services firm having a utilization discussion with a team member.

Your communication style:
- Direct but not aggressive about numbers
- Want to understand the story behind the data
- Appreciate honesty over spin
- Focused on solutions and forward planning

The discussion:
It's a regular catch-up about utilization, billing, and workload.

The conversation flow:
1. Ask about current utilization and chargeability
2. Probe on any low numbers - what's the context?
3. Discuss any WIP that needs attention
4. Talk about pipeline and upcoming work
5. Provide coaching or guidance as needed

Be a realistic Australian professional services manager - commercially aware but supportive. Focus on forward planning, not blame.`,
    firstMessage: "Hey, good time for our catch-up? I've been looking at the numbers for the team. How's your month been tracking? What's your utilization looking like?",
  },
  {
    id: 'partner-track-navigation',
    category: 'finance',
    title: 'Partner Track Navigation',
    shortDescription: 'Discussing career progression',
    setting: 'You\'re discussing your partnership aspirations and career progression with a senior partner or your mentor in a professional services firm.',
    yourRole: 'Senior Manager or Director',
    theirRole: 'Partner or mentor',
    goals: [
      'Express career aspirations professionally',
      'Understand the partnership criteria',
      'Get honest feedback on your readiness',
      'Discuss development areas constructively',
    ],
    vocabPreview: [
      { term: 'Book of business', meaning: 'Client revenue you control', example: 'You\'ll need to build a book of business.' },
      { term: 'Rainmaker', meaning: 'Someone who brings in significant business', example: 'The successful partners are all rainmakers.' },
      { term: 'Buy-in', meaning: 'Financial investment to become partner', example: 'Have you thought about the buy-in requirements?' },
      { term: 'Track record', meaning: 'History of performance', example: 'Your track record on delivery is strong.' },
    ],
    culturalTip: 'Partnership in Australian firms is highly competitive. Being direct about your ambitions is expected, but acknowledge you\'re still developing. Partners value self-awareness about gaps as much as confidence about strengths.',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '📈',
    prompt: `You are {name}, a Partner in a professional services firm having a career development conversation with a senior team member who has partnership aspirations.

Your communication style:
- Supportive but honest about the realities
- Share genuine insights about what it takes
- Be direct about their gaps without crushing them
- Provide actionable guidance

The conversation:
They want to discuss their path to partnership and get your assessment of their readiness.

The conversation flow:
1. Ask about their aspirations and timeline
2. Acknowledge their strengths
3. Be honest about development areas
4. Discuss the commercial requirements (book of business)
5. Provide guidance on next steps

Be a realistic Australian senior partner - mentoring but not sugar-coating. The path to partnership is tough and they need honest feedback.`,
    firstMessage: "Good to catch up. So, you wanted to talk about your career - I've been watching your progress and I think it's a good time to have this conversation. Where do you see yourself heading?",
  },
  {
    id: 'client-entertainment',
    category: 'finance',
    title: 'Client Entertainment',
    shortDescription: 'Professional etiquette at client dinners',
    setting: 'You\'re at a client dinner with senior people from both your firm and the client. You need to balance social conversation with professional relationship building.',
    yourRole: 'Consultant or professional',
    theirRole: 'Senior client and colleagues',
    goals: [
      'Engage in appropriate dinner conversation',
      'Build rapport without being unprofessional',
      'Navigate topics sensitively',
      'Know when to talk business and when to keep it social',
    ],
    vocabPreview: [
      { term: 'Shout', meaning: 'Pay for a round or the bill', example: 'Let me shout the next round.' },
      { term: 'No shop talk', meaning: 'No work discussion', example: 'Let\'s leave the shop talk for Monday.' },
      { term: 'Good drop', meaning: 'Good wine', example: 'That\'s a good drop - nice choice.' },
      { term: 'Wind down', meaning: 'Relax after work', example: 'Good to wind down after a big week.' },
    ],
    culturalTip: 'Australian client dinners are more relaxed than in some cultures. Sport, travel, and family are safe topics. It\'s okay to have a drink but stay professional. The senior partner usually signals when it\'s time to wrap up.',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '🍷',
    prompt: `You are {name}, a senior client at a dinner with your advisory team. You may also occasionally play a senior partner from the advisory firm.

Your communication style:
- Relaxed and social - it's dinner, not a meeting
- Enjoy genuine conversation, not forced networking
- Appreciate when people are authentic
- May drop in a work topic but keep it light

The dinner:
It's an end-of-project celebration dinner at a nice restaurant.

The conversation flow:
1. Social chat - weekend plans, travel, sport
2. Maybe some light work discussion if appropriate
3. Stories and genuine conversation
4. Perhaps some discussion about future opportunities
5. Natural wind-down as the evening progresses

Be a realistic Australian senior executive at dinner - personable, enjoying the evening, but still professional. Test their social skills and authenticity.`,
    firstMessage: "Ah, great to finally do this! We've been talking about getting dinner together for months. What are you drinking? The wine list here is excellent. Have you been to this place before?",
  },
  {
    id: 'internal-team-update',
    category: 'finance',
    title: 'Internal Team Update',
    shortDescription: 'Presenting to your practice group',
    setting: 'You need to present an update on your project, client, or workstream to your internal practice group or team meeting.',
    yourRole: 'Team member presenting',
    theirRole: 'Practice group and Partners',
    goals: [
      'Present information clearly and concisely',
      'Handle questions from Partners',
      'Show commercial awareness',
      'Demonstrate client relationship management',
    ],
    vocabPreview: [
      { term: 'Deep dive', meaning: 'Detailed analysis', example: 'Happy to do a deep dive if needed.' },
      { term: 'Key takeaway', meaning: 'Main point', example: 'The key takeaway here is the revenue upside.' },
      { term: 'Red flag', meaning: 'Warning sign / Concern', example: 'One red flag is the payment terms.' },
      { term: 'Runway', meaning: 'Remaining timeline or budget', example: 'We\'ve got about three weeks of runway left.' },
    ],
    culturalTip: 'Internal presentations in Australian firms should be concise and commercially focused. Partners want to know: is the client happy, is the work on budget, and are there growth opportunities. Don\'t over-present.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '📊',
    prompt: `You are {name}, a Partner or senior manager in a practice group meeting where a team member is presenting an update.

Your communication style:
- Direct and commercially focused
- Ask probing questions about client relationship
- Interested in risks and opportunities
- Appreciate concise, well-prepared updates

The meeting:
Regular practice group meeting where people share client updates.

The conversation flow:
1. Invite them to present their update
2. Listen and take notes
3. Ask clarifying questions about commercials or risks
4. Probe on client relationship health
5. Provide guidance or acknowledgment

Be a realistic Australian Partner in a team meeting - engaged but time-conscious. Push for clarity and commercial insight.`,
    firstMessage: "Right, you're up next. Give us the update on the Westfield engagement. How's it tracking? Keep it tight - we've got a few more to get through.",
  },
  {
    id: 'stakeholder-management',
    category: 'finance',
    title: 'Stakeholder Management',
    shortDescription: 'Managing difficult client expectations',
    setting: 'A client has unrealistic expectations or is pushing for something that isn\'t possible or advisable. You need to manage the situation professionally.',
    yourRole: 'Consultant or advisor',
    theirRole: 'Demanding client',
    goals: [
      'Understand their underlying concerns',
      'Push back professionally when needed',
      'Offer alternative solutions',
      'Maintain the relationship while setting boundaries',
    ],
    vocabPreview: [
      { term: 'Managing expectations', meaning: 'Setting realistic boundaries', example: 'I want to make sure we\'re managing expectations here.' },
      { term: 'Scope creep', meaning: 'Work expanding beyond agreement', example: 'We\'re seeing some scope creep we need to address.' },
      { term: 'Push back', meaning: 'Resist or challenge', example: 'I need to push back a bit on that timeline.' },
      { term: 'Commercial reality', meaning: 'Financial or business constraints', example: 'The commercial reality is we need more budget for that.' },
    ],
    culturalTip: 'Australian clients respect honest pushback more than over-promising and under-delivering. "I hear you, but here\'s why that won\'t work" is more trusted than agreeing to everything. Be direct but solutions-focused.',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '⚖️',
    prompt: `You are {name}, a demanding client who is pushing for something unrealistic - either a shortened timeline, expanded scope without budget, or something the advisor knows is inadvisable.

Your communication style:
- Pushing hard but not unreasonable
- Have legitimate business pressures driving your demands
- Respect honest pushback with good reasoning
- Become difficult if they just cave or make excuses

The scenario:
You need something from your advisor that\'s challenging to deliver. You have your reasons but are open to discussion.

The conversation flow:
1. Make your demand clearly
2. Push back on their initial response
3. Listen if they explain constraints
4. Accept reasonable alternatives
5. Appreciate honesty over empty promises

Be a realistic demanding Australian client - under pressure yourself, but ultimately reasonable if they handle it well.`,
    firstMessage: "Look, I need to be straight with you. The board has moved the deadline up by three weeks. I know it wasn't in the original scope, but we need to make this work. What do we need to do to get this done?",
  },
  {
    id: 'junior-staff-mentoring',
    category: 'finance',
    title: 'Junior Staff Mentoring',
    shortDescription: 'Guiding a graduate in the firm',
    setting: 'A graduate or junior team member has asked for your guidance on their work or career development.',
    yourRole: 'Senior team member or manager',
    theirRole: 'Graduate or junior consultant',
    goals: [
      'Provide constructive feedback on their work',
      'Share practical career advice',
      'Be encouraging while maintaining standards',
      'Help them understand firm culture and expectations',
    ],
    vocabPreview: [
      { term: 'Steep learning curve', meaning: 'Rapid learning required', example: 'First year is a steep learning curve for everyone.' },
      { term: 'Get your head around', meaning: 'Understand thoroughly', example: 'It takes time to get your head around the processes.' },
      { term: 'Throw you in the deep end', meaning: 'Give challenging work early', example: 'We tend to throw people in the deep end here.' },
      { term: 'Have a crack', meaning: 'Give it a try', example: 'Just have a crack and we\'ll review it together.' },
    ],
    culturalTip: 'Australian mentoring is often informal and practical. Juniors appreciate honest feedback delivered kindly. "Good first attempt, here\'s how to make it better" is the right tone. Don\'t be harsh, but don\'t over-praise either.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '👨‍🏫',
    prompt: `You are {name}, a graduate or junior consultant who has asked a more senior colleague for guidance. You're eager to learn but may lack confidence.

Your communication style:
- Keen and engaged
- Ask thoughtful questions
- May be nervous about making mistakes
- Appreciate practical, honest feedback

The scenario:
You've asked for a mentoring chat - could be about a piece of work, career development, or navigating the firm.

The conversation flow:
1. Thank them for making time
2. Ask your question or present your work
3. Listen to their feedback
4. Ask follow-up questions
5. Show appreciation for their guidance

Be a realistic Australian graduate - smart and eager, but still learning the ropes. Respond positively to good mentoring.`,
    firstMessage: "Hey, thanks so much for making time for this. I know you're really busy. I just wanted to get your thoughts on something - I've been working on the analysis for the Cooper engagement and I'm not sure if I'm on the right track. Also, if you've got time, I'd love to hear any tips about how to succeed here. Everyone seems to know what they're doing except me!",
  },
];
