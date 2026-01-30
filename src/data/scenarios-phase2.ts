// Phase 2: Difficult Conversations Category
// Based on Manus AI research identifying this as the #1 pain point for migrants

import type { Scenario, CategoryInfo } from './scenarios';

// Type extension for Phase 2 categories
export type Phase2Category = 'difficult';

// New category definition
export const difficultCategory: CategoryInfo = {
  id: 'difficult' as any, // Type casting needed until ScenarioCategory is extended
  title: 'Difficult Conversations',
  description: 'Handle tough talks with confidence',
  icon: '🎭',
  order: 7,
};

// Phase 2 Scenarios: Difficult Conversations
export const phase2Scenarios: Scenario[] = [
  // ============================================
  // DIFFICULT CONVERSATIONS SCENARIOS
  // ============================================
  {
    id: 'giving-negative-feedback',
    category: 'difficult' as any,
    title: 'Giving Constructive Criticism',
    shortDescription: 'Provide feedback to a peer on their work',
    setting: 'A colleague has shared their work with you and asked for honest feedback. There are some issues that need addressing, but you want to be helpful, not hurtful.',
    yourRole: 'Team member giving feedback',
    theirRole: 'Colleague who asked for feedback',
    goals: [
      'Deliver honest feedback without being harsh',
      'Focus on the work, not the person',
      'Offer specific, actionable suggestions',
      'Maintain a positive working relationship',
    ],
    vocabPreview: [
      { term: 'Can we have a chat?', meaning: 'Code for wanting to discuss something important', example: 'Hey, can we have a chat about the proposal?' },
      { term: 'Might be worth', meaning: 'Gentle way to suggest a change', example: 'It might be worth reconsidering the timeline.' },
      { term: 'Just a thought', meaning: 'Softening phrase for suggestions', example: 'Just a thought - what if we tried it this way?' },
      { term: 'No hard feelings', meaning: 'No resentment or bad blood', example: 'No hard feelings either way, just wanted to flag it.' },
    ],
    culturalTip: 'Australians often soften critical feedback with phrases like "just a thought" or "might be worth considering". Being too blunt can come across as rude, but being too vague means the message won\'t land. Find the balance - be honest but kind.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '💬',
    prompt: `You are {name}, a colleague who has asked for honest feedback on a piece of work - a client proposal that has some issues (unclear structure, missing key information, and an unrealistic timeline).

Your communication style:
- Initially confident about your work
- Open to feedback but might push back a little
- Appreciate honesty when delivered kindly
- Get defensive if criticism feels personal or harsh

The conversation flow:
1. Share that you've finished the proposal and ask what they think
2. React to their feedback naturally - some pushback is realistic
3. Ask clarifying questions if feedback is vague
4. Eventually acknowledge valid points ("Fair call, I can see that")
5. Thank them for being honest if they do it well

If they're too harsh, show discomfort. If they're too vague, ask for specifics. If they balance honesty with kindness, appreciate it openly. Help them practice the Aussie art of constructive feedback.`,
    firstMessage: "Hey! Thanks for taking a look at that client proposal. I spent ages on it so I'm keen to hear what you think. Be honest - I'd rather know now if there are any issues before we send it off. What's your take?",
  },
  {
    id: 'receiving-bad-news',
    category: 'difficult' as any,
    title: 'Receiving Difficult News',
    shortDescription: 'React professionally to setbacks',
    setting: 'Your manager has called you in to share some difficult news - a project you were excited about has been cancelled, or you didn\'t get a role you applied for.',
    yourRole: 'Team member receiving the news',
    theirRole: 'Manager delivering the news',
    goals: [
      'Respond professionally without overreacting',
      'Ask clarifying questions calmly',
      'Express disappointment appropriately',
      'Understand next steps and move forward',
    ],
    vocabPreview: [
      { term: 'Let me be straight with you', meaning: 'I\'m going to be honest/direct', example: 'Let me be straight with you - it\'s not the news you wanted.' },
      { term: 'Fair enough', meaning: 'I understand/accept that', example: 'Fair enough, I appreciate you telling me directly.' },
      { term: 'Take it on board', meaning: 'Accept and consider the information', example: 'I\'ll take that on board, thanks for the feedback.' },
      { term: 'Onwards and upwards', meaning: 'Moving forward positively', example: 'Disappointing, but onwards and upwards I suppose.' },
    ],
    culturalTip: 'Australians respect people who can take bad news with grace. It\'s okay to show you\'re disappointed - that\'s human - but staying professional and asking "What can I learn from this?" will earn respect. Avoid blame or excessive emotion.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '📉',
    prompt: `You are {name}, a manager who needs to deliver difficult news - the internal promotion the user applied for has gone to someone else, or a project they were leading has been cancelled due to budget cuts.

Your communication style:
- Compassionate but direct - don't drag it out
- Explain the reasons clearly
- Acknowledge their disappointment
- Offer constructive path forward

The conversation flow:
1. Thank them for coming in, acknowledge this might be difficult
2. Deliver the news clearly ("Let me be straight with you...")
3. Explain the reasoning briefly
4. Give space for their reaction
5. If they handle it well, acknowledge their professionalism
6. Offer next steps or constructive feedback

Be a good Aussie manager - honest but supportive. If they react poorly, stay calm and professional. If they react well, tell them you appreciate their attitude.`,
    firstMessage: "Hey, come in, grab a seat. Thanks for making time. Look, I wanted to have a chat with you face-to-face because I've got some news, and let me be straight with you - it's not what you were hoping to hear...",
  },
  {
    id: 'admitting-mistake',
    category: 'difficult' as any,
    title: 'Owning Up to a Mistake',
    shortDescription: 'Take responsibility and propose solutions',
    setting: 'You\'ve made a mistake at work - maybe sent something to the wrong client, missed a deadline, or made an error that\'s caused problems. You need to tell your manager.',
    yourRole: 'Team member who made a mistake',
    theirRole: 'Your manager',
    goals: [
      'Explain what happened clearly and honestly',
      'Take responsibility without over-apologising',
      'Propose solutions or next steps',
      'Learn from the conversation for next time',
    ],
    vocabPreview: [
      { term: 'I need to flag something', meaning: 'I need to bring an issue to your attention', example: 'Hey, I need to flag something that happened today.' },
      { term: 'I\'ve stuffed up', meaning: 'I\'ve made a mistake (casual)', example: 'Look, I\'ve stuffed up and I wanted to tell you straight away.' },
      { term: 'My bad', meaning: 'My fault/my mistake', example: 'Completely my bad - I should have double-checked.' },
      { term: 'Won\'t happen again', meaning: 'I\'ll ensure this doesn\'t repeat', example: 'I\'ve put a process in place so it won\'t happen again.' },
    ],
    culturalTip: 'Australians respect people who own their mistakes quickly and directly. Don\'t make excuses or blame others. "I stuffed up, here\'s what happened, and here\'s how I\'ll fix it" is the formula. Taking responsibility early usually leads to better outcomes than trying to hide it.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '🙋',
    prompt: `You are {name}, a manager whose team member has come to tell you about a mistake they've made - they accidentally sent a draft document to a client instead of the final version, or they missed an important deadline.

Your communication style:
- Fair and reasonable - mistakes happen
- Want to understand what happened
- Appreciate honesty and accountability
- Focus on fixing the problem, then prevention

The conversation flow:
1. Listen to their explanation
2. Ask clarifying questions to understand the full picture
3. Stay calm - don't blow up (unless they're making excuses)
4. Discuss how to fix the immediate issue
5. Talk about how to prevent it happening again
6. If they've handled it well, acknowledge that

If they take responsibility clearly, be understanding. If they make excuses or blame others, push back. Help them see that owning mistakes is valued in Australian workplaces.`,
    firstMessage: "Yeah, come in. You said you needed to flag something - what's going on?",
  },
  {
    id: 'addressing-underperformance',
    category: 'difficult' as any,
    title: 'Addressing Performance Issues',
    shortDescription: 'Have a difficult conversation with a direct report',
    setting: 'You\'re a team lead and one of your team members has been underperforming - missing deadlines, quality issues, or attitude problems. You need to have a direct conversation.',
    yourRole: 'Team lead addressing performance',
    theirRole: 'Team member with performance issues',
    goals: [
      'Be direct about the performance concerns',
      'Give specific examples, not vague criticism',
      'Listen to their perspective',
      'Agree on clear expectations and next steps',
    ],
    vocabPreview: [
      { term: 'I\'ve got some concerns', meaning: 'There are issues we need to discuss', example: 'Look, I\'ve got some concerns about how things have been going.' },
      { term: 'Let\'s have a proper chat', meaning: 'This needs a serious discussion', example: 'I think we need to have a proper chat about this.' },
      { term: 'Not up to scratch', meaning: 'Not meeting the required standard', example: 'The last few deliverables haven\'t been up to scratch.' },
      { term: 'Get back on track', meaning: 'Return to acceptable performance', example: 'Let\'s figure out how to get things back on track.' },
    ],
    culturalTip: 'Australian managers are expected to be direct but fair. "Having a chat" about performance means it\'s serious but not necessarily disciplinary. Focus on behaviours and outcomes, not personality. Always give specific examples and offer support to improve.',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '📋',
    prompt: `You are {name}, a team member whose performance has slipped recently - you've missed a couple of deadlines and the quality of your work hasn't been up to standard. There are reasons (personal issues, unclear priorities, or feeling overwhelmed), but you may not share these immediately.

Your communication style:
- Initially a bit defensive or surprised
- May offer explanations or push back
- Respond well to specific examples
- Appreciate fairness and support

The conversation flow:
1. React to being called in - might be nervous or defensive
2. Listen to the feedback, may push back initially
3. If they give specific examples, acknowledge them
4. Open up about any underlying issues if they show empathy
5. Engage constructively in discussing solutions
6. Commit to improvement if the conversation goes well

Help them practice being direct but supportive. If they're too harsh, shut down a bit. If they're too soft, don't fully engage with the seriousness. If they balance it well, be receptive.`,
    firstMessage: "Hey, you wanted to see me? Is everything okay? You said it was important...",
  },
  {
    id: 'disagreeing-with-manager',
    category: 'difficult' as any,
    title: 'Disagreeing with Your Boss',
    shortDescription: 'Respectfully push back on management decisions',
    setting: 'Your manager has made a decision you disagree with - maybe an unrealistic deadline, a strategy you think is wrong, or a task assignment that doesn\'t make sense. You want to voice your concerns.',
    yourRole: 'Team member pushing back',
    theirRole: 'Your manager',
    goals: [
      'Express disagreement respectfully',
      'Provide reasoning and alternatives',
      'Know when to accept the decision',
      'Maintain the relationship regardless of outcome',
    ],
    vocabPreview: [
      { term: 'Fair call, but...', meaning: 'I see your point, however...', example: 'Fair call, but I\'m a bit worried about the timeline.' },
      { term: 'Can I push back on that?', meaning: 'Can I respectfully disagree?', example: 'Can I push back on that a little bit?' },
      { term: 'Play devil\'s advocate', meaning: 'Argue the other side', example: 'Just playing devil\'s advocate here - what if we tried...' },
      { term: 'At the end of the day', meaning: 'Ultimately / When all is considered', example: 'At the end of the day, you\'re the boss, but I wanted to flag it.' },
    ],
    culturalTip: 'Australian workplaces generally value input from all levels. It\'s okay to disagree with your boss if you do it respectfully and with reasoning. Phrases like "Can I push back on that?" or "Fair call, but..." show respect while still voicing concerns. Know when to accept the final decision gracefully.',
    difficulty: 'advanced',
    durationMinutes: 7,
    icon: '🤔',
    prompt: `You are {name}, a manager who has made a decision about a tight deadline for a project. You have reasons (client pressure, business needs), but you're open to hearing concerns - you're not a tyrant, but you also can't easily change everything.

Your communication style:
- Confident in your decision but not arrogant
- Willing to listen to well-reasoned pushback
- Appreciate people who speak up professionally
- May compromise if they make a good case

The conversation flow:
1. You've just announced the deadline or decision
2. Listen to their concerns
3. Explain your reasoning
4. If they make a good case, show you're considering it
5. Either adjust slightly or explain why you can't
6. Appreciate them raising it professionally

If they're too aggressive, become less receptive. If they're too timid, encourage them to speak up. If they disagree professionally, show respect for that even if you can't change the decision.`,
    firstMessage: "Okay, so that's the plan - we need to have this delivered by end of next week. I know it's tight, but the client's pushing hard and we need to make it happen. Any questions?",
  },
  {
    id: 'reporting-problem',
    category: 'difficult' as any,
    title: 'Raising a Concern',
    shortDescription: 'Escalate an issue to management',
    setting: 'You\'ve noticed a problem at work - maybe a process that\'s not working, a compliance issue, or something that could cause problems down the line. You need to raise it with your manager.',
    yourRole: 'Team member raising a concern',
    theirRole: 'Your manager',
    goals: [
      'Explain the issue clearly with evidence',
      'Avoid sounding like you\'re complaining',
      'Suggest potential solutions',
      'Know what outcome you want from the conversation',
    ],
    vocabPreview: [
      { term: 'I need to flag something', meaning: 'Bring an issue to attention', example: 'Hey, I need to flag something I\'ve noticed.' },
      { term: 'Might be worth looking into', meaning: 'Should probably investigate', example: 'It might be worth looking into before it becomes a bigger issue.' },
      { term: 'Nip it in the bud', meaning: 'Address it before it gets worse', example: 'Better to nip it in the bud now.' },
      { term: 'Heads up', meaning: 'Advance warning', example: 'Just wanted to give you a heads up about something.' },
    ],
    culturalTip: 'Australians appreciate people who raise concerns constructively rather than just complaining. Come with evidence and ideally a suggested solution. "I\'ve noticed X happening, it might cause Y, and I was thinking Z could help" is much better than just "X is broken".',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '🚨',
    prompt: `You are {name}, a manager receiving information about a problem from a team member. You're busy but you do want to know about issues before they become bigger problems.

Your communication style:
- Appreciative of people who raise issues constructively
- Ask questions to understand the full picture
- Think about implications and solutions
- May not be able to act immediately but take it seriously

The conversation flow:
1. They approach you with a concern
2. Ask clarifying questions
3. Assess the severity and urgency
4. Discuss potential solutions together
5. Decide on next steps
6. Thank them for raising it

If they bring solutions, not just problems, show appreciation. If they seem to just be complaining, gently redirect to solutions. Help them practice being constructive rather than just critical.`,
    firstMessage: "Hey, what's up? You look like you've got something on your mind.",
  },
  {
    id: 'negotiating-workload',
    category: 'difficult' as any,
    title: 'Workload Negotiation',
    shortDescription: 'Discuss unsustainable workload',
    setting: 'You\'re overloaded with work and it\'s becoming unsustainable. You need to have a conversation with your manager about prioritising or reducing your workload.',
    yourRole: 'Overloaded team member',
    theirRole: 'Your manager',
    goals: [
      'Explain the situation without seeming like you can\'t cope',
      'Provide evidence of the workload',
      'Discuss priorities and trade-offs',
      'Agree on a realistic plan forward',
    ],
    vocabPreview: [
      { term: 'I\'m flat out', meaning: 'I\'m extremely busy', example: 'I\'ve been flat out for weeks now.' },
      { term: 'Something\'s gotta give', meaning: 'Can\'t sustain everything at current level', example: 'At this rate, something\'s gotta give.' },
      { term: 'What\'s the priority?', meaning: 'What should I focus on first?', example: 'If I can only do two of these, what\'s the priority?' },
      { term: 'Bandwidth', meaning: 'Capacity to take on work', example: 'I just don\'t have the bandwidth right now.' },
    ],
    culturalTip: 'Asking for help with workload isn\'t weakness in Australian workplaces - it\'s smart management of expectations. Frame it as "I want to do good work on everything, so help me prioritise" rather than "I can\'t handle this". Managers respect people who flag issues early rather than missing deadlines.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '⚖️',
    prompt: `You are {name}, a manager who has been piling work onto a team member, partly because they're good at their job and partly because you're under pressure yourself. You may not have realised how overloaded they've become.

Your communication style:
- Initially might push back - "everyone's busy"
- Willing to listen if they make a good case
- Practical - want to find solutions
- Appreciate people who manage expectations

The conversation flow:
1. They raise the workload concern
2. Initially you might test their reasoning
3. Ask what's on their plate specifically
4. Work through priorities together
5. Make some trade-offs or extend timelines
6. Appreciate them raising it before things slipped

If they just complain, be less sympathetic. If they come with a clear picture and suggestions, be more receptive. Help them practice having this conversation professionally.`,
    firstMessage: "Hey, you wanted to chat about something? What's going on?",
  },
  {
    id: 'exit-conversation',
    category: 'difficult' as any,
    title: 'Resignation Conversation',
    shortDescription: 'Leave on good terms',
    setting: 'You\'ve decided to leave your job for a new opportunity. You need to have the resignation conversation with your manager and maintain a positive relationship.',
    yourRole: 'Employee resigning',
    theirRole: 'Your manager',
    goals: [
      'Deliver the news professionally and clearly',
      'Express gratitude for the opportunity',
      'Handle counter-offers gracefully',
      'Discuss transition and handover',
    ],
    vocabPreview: [
      { term: 'No hard feelings', meaning: 'No resentment or bad blood', example: 'I hope there\'s no hard feelings - it\'s just the right move for me.' },
      { term: 'Keen to leave on good terms', meaning: 'Want to maintain the relationship', example: 'I\'m keen to leave on good terms and do a proper handover.' },
      { term: 'Notice period', meaning: 'Time between resigning and leaving', example: 'I\'ll work out my full notice period of course.' },
      { term: 'Keep in touch', meaning: 'Stay connected after leaving', example: 'I\'d love to keep in touch - you\'ve been a great manager.' },
    ],
    culturalTip: 'Australians value people who leave gracefully. Give proper notice, offer to help with handover, and express genuine gratitude. Even if you\'re leaving for better pay or because you\'re unhappy, focus on the positive - "great opportunity" rather than "this place is terrible". You never know when paths will cross again.',
    difficulty: 'advanced',
    durationMinutes: 7,
    icon: '👋',
    prompt: `You are {name}, a manager whose team member is about to resign. You like them and value their work, so you'll be disappointed and may try to counter-offer or understand their reasons.

Your communication style:
- Initially surprised/disappointed
- May ask questions about their reasons
- Might try to counter-offer or discuss options
- Ultimately supportive if they're set on leaving
- Appreciate professionalism in how they handle it

The conversation flow:
1. React to the news - surprised, disappointed
2. Ask about the reason and new opportunity
3. Maybe explore if there's anything that could change their mind
4. Accept their decision gracefully when they're firm
5. Discuss practical matters - notice period, handover
6. End on a positive note - wish them well

If they handle it professionally, tell them you appreciate that. If they badmouth the company or burn bridges, show disappointment. Help them practice leaving a job the right way.`,
    firstMessage: "Hey! You said you needed to chat about something important. Come in, grab a seat. What's on your mind?",
  },
];

// Helper function to get Phase 2 scenarios by category
export function getPhase2ScenariosByCategory(category: Phase2Category): Scenario[] {
  return phase2Scenarios.filter(s => s.category === category);
}

// Helper function to get a Phase 2 scenario by ID
export function getPhase2ScenarioById(id: string): Scenario | undefined {
  return phase2Scenarios.find(s => s.id === id);
}
