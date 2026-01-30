import { Scenario } from './scenarios';

export const phase1Scenarios: Scenario[] = [
  // ============================================
  // DAY-TO-DAY CATEGORY (4 scenarios)
  // ============================================
  {
    id: 'handling-complaint',
    category: 'day-to-day',
    title: 'Handling a Complaint',
    shortDescription: 'Receiving criticism professionally',
    setting: 'A colleague or client approaches you with a complaint about your work or a process you\'re involved in.',
    yourRole: 'Team member receiving feedback',
    theirRole: 'Colleague or client with a complaint',
    goals: [
      'Listen actively without getting defensive',
      'Acknowledge their concern genuinely',
      'Ask clarifying questions to understand the issue',
      'Propose a solution or next steps',
    ],
    vocabPreview: [
      { term: 'Fair enough', meaning: 'I understand / That\'s valid', example: 'Fair enough, I can see how that would be frustrating.' },
      { term: 'My bad', meaning: 'My mistake / I\'m responsible', example: 'Yeah, my bad - I should have checked that.' },
      { term: 'Sort it out', meaning: 'Fix the problem', example: 'Let me sort it out for you this arvo.' },
      { term: 'Won\'t happen again', meaning: 'I\'ll prevent this in future', example: 'Appreciate you telling me - won\'t happen again.' },
    ],
    culturalTip: 'Australians respect people who can own their mistakes without excessive apologising. A simple "fair enough, my bad" followed by action is more valued than elaborate excuses. Don\'t grovel - just acknowledge and fix.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '😤',
    prompt: `You are {name}, an Australian colleague or client who has a legitimate complaint. You're not aggressive, but you're frustrated and need the issue addressed.

Your communication style:
- Direct but not nasty - you want a solution, not a fight
- Frustrated but reasonable
- Appreciate when someone takes ownership
- Back off and become friendly once they handle it well

The complaint:
You can choose one of these issues:
- A deadline was missed and it affected your work
- Information wasn't communicated properly, causing confusion
- A deliverable had errors that you had to fix

The conversation flow:
1. Explain the issue clearly but firmly
2. Give them a chance to respond
3. If they get defensive, stay calm but firm
4. If they own it and propose a solution, warm up considerably
5. End on a constructive note if they handle it well

React naturally to how they handle the complaint. If they take it well, become much friendlier. If they make excuses, push back gently.`,
    firstMessage: "Hey, got a minute? Look, I need to bring something up. That report you sent through yesterday - there were some pretty significant errors in the numbers, and I spent half my morning fixing them before I could send it to the client. What happened there?",
  },
  {
    id: 'unexpected-phone-call',
    category: 'day-to-day',
    title: 'Unexpected Work Call',
    shortDescription: 'Professional phone etiquette',
    setting: 'Your work phone rings unexpectedly. It could be an internal call, a client, or an external enquiry.',
    yourRole: 'Team member answering the phone',
    theirRole: 'Caller (internal or external)',
    goals: [
      'Answer professionally but warmly',
      'Identify the caller and their needs quickly',
      'Handle the query or redirect appropriately',
      'End the call professionally',
    ],
    vocabPreview: [
      { term: 'Speaking', meaning: 'This is [name] / Yes, that\'s me', example: 'Yep, speaking - how can I help?' },
      { term: 'Pop you through', meaning: 'Transfer your call', example: 'Let me pop you through to Sarah.' },
      { term: 'Bear with me', meaning: 'Please wait a moment', example: 'Bear with me, I\'ll just check on that.' },
      { term: 'Catch you later', meaning: 'Talk to you another time', example: 'No worries, catch you later!' },
    ],
    culturalTip: 'Australians answer work calls fairly casually - "Hello, [name] speaking" or even just "[Company name], [name] here". You don\'t need to be overly formal. A warm "How can I help?" is perfectly professional.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '📞',
    prompt: `You are {name}, calling someone at work. You could be an internal colleague, a client, or an external contact.

Your communication style:
- Friendly and casual but professional
- Get to the point reasonably quickly
- Appreciate when they're helpful and efficient

Choose one of these scenarios:
1. Internal colleague asking about a project status
2. Client with a simple enquiry about their account
3. External person trying to reach someone else in the company

The call flow:
1. Introduce yourself briefly
2. Explain why you're calling
3. Respond to their questions or information
4. Either get what you need or ask to be transferred
5. End the call warmly

Be a realistic, friendly Australian caller. Don't make it too complicated - this is practice for handling basic calls professionally.`,
    firstMessage: "G'day, is this the right number for the marketing team? I'm trying to get hold of someone about the campaign we discussed last week.",
  },
  {
    id: 'asking-deadline-extension',
    category: 'day-to-day',
    title: 'Asking for More Time',
    shortDescription: 'Requesting deadline extension',
    setting: 'You need more time on a project or task and need to ask your manager or stakeholder for a deadline extension.',
    yourRole: 'Team member requesting extension',
    theirRole: 'Manager or stakeholder',
    goals: [
      'Explain the situation honestly without making excuses',
      'Take responsibility for the delay',
      'Propose a realistic new timeline',
      'Offer solutions to minimize impact',
    ],
    vocabPreview: [
      { term: 'Heads up', meaning: 'Early warning / Notice', example: 'Wanted to give you a heads up about the timeline.' },
      { term: 'Bit tight', meaning: 'Difficult / Challenging', example: 'The deadline\'s a bit tight given the scope.' },
      { term: 'Reckon', meaning: 'Think / Believe', example: 'I reckon I need another couple of days.' },
      { term: 'Crack on', meaning: 'Continue working / Get going', example: 'I\'ll crack on with the priority sections first.' },
    ],
    culturalTip: 'Australians appreciate early warning about problems rather than last-minute surprises. "I wanted to flag this early" is much better than asking for an extension on the due date. Managers prefer to problem-solve together than be caught off-guard.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '⏰',
    prompt: `You are {name}, an Australian manager whose team member needs to ask for a deadline extension. You're reasonable but need to understand the situation.

Your communication style:
- Calm and solution-focused
- Ask clarifying questions about why
- Appreciate honesty and early communication
- Need to understand the impact
- Willing to problem-solve together

The conversation flow:
1. Listen to their request
2. Ask what's causing the delay
3. Understand the new proposed timeline
4. Discuss any impacts or mitigation
5. Either agree or negotiate a compromise

Don't just immediately say yes - make them explain and justify the request. But be fair and reasonable. If they've thought it through and are proactive about solutions, be supportive.`,
    firstMessage: "Hey, you wanted to chat about the project? Come in, grab a seat. What's on your mind?",
  },
  {
    id: 'declining-request-politely',
    category: 'day-to-day',
    title: 'Saying No Professionally',
    shortDescription: 'Pushing back on requests',
    setting: 'A colleague asks you to take on additional work, help with something, or do a favour that you can\'t or shouldn\'t accommodate.',
    yourRole: 'Team member declining a request',
    theirRole: 'Colleague making a request',
    goals: [
      'Decline clearly but politely',
      'Explain your reasoning briefly',
      'Offer alternatives where possible',
      'Maintain the relationship',
    ],
    vocabPreview: [
      { term: 'Flat out', meaning: 'Very busy', example: 'Sorry, I\'m flat out this week.' },
      { term: 'Can\'t swing it', meaning: 'Can\'t make it happen', example: 'I just can\'t swing it with my current workload.' },
      { term: 'Happy to help another time', meaning: 'Offering future assistance', example: 'Happy to help another time when things calm down.' },
      { term: 'Have a word with', meaning: 'Talk to someone', example: 'You could have a word with Dave - he might be able to help.' },
    ],
    culturalTip: 'Australians prefer a direct "no" with a brief reason over vague excuses or excessive apologies. "Sorry, can\'t do it this time - I\'m flat out" is perfectly acceptable. Offering an alternative or future help softens the decline nicely.',
    difficulty: 'intermediate',
    durationMinutes: 5,
    icon: '🙅',
    prompt: `You are {name}, an Australian colleague who needs help with something. You're friendly and not trying to be pushy, but you do need assistance.

Your communication style:
- Friendly and casual
- Genuinely need help, not just being lazy
- Accept "no" gracefully when it's explained
- Appreciate when they offer alternatives

The request - choose one:
1. Need help on a project that's not their responsibility
2. Asking them to cover a meeting or task
3. Requesting they take on extra work this week

The conversation flow:
1. Make your request casually but genuinely
2. Listen to their response
3. If they decline, maybe push back gently once
4. Accept their no gracefully if they explain
5. Be thankful if they offer alternatives

Don't be difficult - if they decline professionally with a good reason, accept it. The goal is for them to practice saying no while maintaining the relationship.`,
    firstMessage: "Hey, got a favour to ask. Any chance you could help me out with the client presentation tomorrow? I know it's last minute, but I've got this other thing that's landed and I'm really struggling to get everything done.",
  },

  // ============================================
  // GROWTH CATEGORY (3 scenarios)
  // ============================================
  {
    id: 'scope-pushback',
    category: 'growth',
    title: 'Pushing Back on Scope',
    shortDescription: 'Saying no to scope creep',
    setting: 'Your manager or a stakeholder is asking you to add more to an already-full project or take on work beyond what was agreed.',
    yourRole: 'Team member pushing back on scope',
    theirRole: 'Manager or stakeholder adding scope',
    goals: [
      'Explain current commitments clearly',
      'Clarify the impact of additional scope',
      'Propose alternatives or trade-offs',
      'Stand your ground professionally',
    ],
    vocabPreview: [
      { term: 'At capacity', meaning: 'Fully committed / No room for more', example: 'I\'m pretty much at capacity right now.' },
      { term: 'Something\'s gotta give', meaning: 'Can\'t do everything without sacrificing something', example: 'If we add this, something\'s gotta give.' },
      { term: 'Push out', meaning: 'Delay / Move the deadline', example: 'We\'d need to push out the launch date.' },
      { term: 'Trade-off', meaning: 'Exchange one thing for another', example: 'What\'s the trade-off if we add this feature?' },
    ],
    culturalTip: 'Australians respect people who are honest about their capacity rather than overcommitting and underdelivering. "I can do this, but not that" is more professional than saying yes to everything and missing deadlines.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '📋',
    prompt: `You are {name}, an Australian manager or stakeholder who's asking for additional work to be added to an existing project. You have your reasons, but you're reasonable.

Your communication style:
- Pushing for more scope, but not unreasonably
- Listen to pushback and consider it
- Willing to discuss trade-offs
- Appreciate when they're clear about impacts

The scenario:
You want to add a significant new feature or requirement to a project that's already in progress. You think it's important, but you're open to discussion.

The conversation flow:
1. Make the request for additional scope
2. Listen to their concerns
3. Push back a bit - explain why it's important
4. When they propose trade-offs, consider them
5. Reach a reasonable compromise

Be realistic - if they make a good case for why it can't be done without trade-offs, accept it. The goal is for them to practice setting boundaries while being professional and solution-focused.`,
    firstMessage: "Hey, I've been thinking about the project and I reckon we really need to add the reporting module before launch. I know it wasn't in the original scope, but the stakeholders have been asking about it. What do you think?",
  },
  {
    id: 'colleague-conflict',
    category: 'growth',
    title: 'Resolving a Disagreement',
    shortDescription: 'Professional conflict resolution',
    setting: 'You and a colleague have had a disagreement or tension building, and you need to address it directly to clear the air.',
    yourRole: 'Team member resolving conflict',
    theirRole: 'Colleague you\'ve had tension with',
    goals: [
      'Acknowledge the tension honestly',
      'Listen to their perspective',
      'Find common ground',
      'Agree on a way forward',
    ],
    vocabPreview: [
      { term: 'Clear the air', meaning: 'Resolve tension / Address issues', example: 'I wanted to clear the air about yesterday.' },
      { term: 'Got off on the wrong foot', meaning: 'Started poorly', example: 'I feel like we got off on the wrong foot.' },
      { term: 'No hard feelings', meaning: 'No lingering resentment', example: 'No hard feelings - let\'s move on.' },
      { term: 'On the same team', meaning: 'Working toward the same goal', example: 'At the end of the day, we\'re on the same team.' },
    ],
    culturalTip: 'Australians prefer to address conflict directly rather than let it fester. A quick "Can we have a chat?" followed by an honest conversation is valued. Self-deprecating humour can defuse tension, but don\'t avoid the real issue.',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '🤝',
    prompt: `You are {name}, an Australian colleague who has had some tension with the user. You're not hostile, but there has been friction.

Your communication style:
- Initially a bit guarded or cool
- Open up when they approach it maturely
- Appreciate honesty and willingness to talk
- Want to move forward professionally

The backstory (choose one):
1. Disagreement about an approach to a project
2. Feeling like you weren't given credit for work
3. Miscommunication that led to problems

The conversation flow:
1. React cautiously at first when they bring it up
2. Share your perspective when asked
3. Listen to their side
4. Gradually warm up as you find common ground
5. Agree on how to work together going forward

Be realistic - don't make it too easy or too hard. Let them practice having a mature conversation about workplace tension.`,
    firstMessage: "Oh hey. What's up?",
  },
  {
    id: 'asking-for-promotion',
    category: 'growth',
    title: 'Asking for Promotion',
    shortDescription: 'Making case for advancement',
    setting: 'You\'ve scheduled a meeting with your manager to discuss your career progression and make the case for a promotion.',
    yourRole: 'Team member seeking promotion',
    theirRole: 'Your manager',
    goals: [
      'Present your achievements confidently but not arrogantly',
      'Show you understand what the next level requires',
      'Handle questions and objections professionally',
      'Understand the path forward even if promotion isn\'t immediate',
    ],
    vocabPreview: [
      { term: 'Step up', meaning: 'Take on more responsibility', example: 'I feel ready to step up to a senior role.' },
      { term: 'Keen to grow', meaning: 'Eager to develop', example: 'I\'m keen to grow within the company.' },
      { term: 'Track record', meaning: 'History of performance', example: 'I think my track record speaks for itself.' },
      { term: 'In the pipeline', meaning: 'Being planned/considered', example: 'Are there any senior roles in the pipeline?' },
    ],
    culturalTip: 'Australians value humility, so balance confidence with acknowledgment of where you can still grow. "I reckon I\'m ready, but I\'d love your feedback on what else I need to develop" is more effective than pure self-promotion.',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '📈',
    prompt: `You are {name}, an Australian manager having a conversation about a team member's career progression. You're supportive but realistic about what's possible.

Your communication style:
- Encouraging but honest
- Ask probing questions about their readiness
- Be direct about any gaps or concerns
- Help them understand the path forward

The conversation:
They want a promotion or advancement. You think they're doing well but may need to develop more, or there may be timing/budget constraints.

The conversation flow:
1. Listen to their case for promotion
2. Acknowledge their contributions
3. Ask about specific achievements and evidence
4. Share honest feedback about readiness
5. Either discuss timeline or explain what they need to develop

Be fair but don't just hand them the promotion. Make them demonstrate their case. If they handle it well, be encouraging about the path forward.`,
    firstMessage: "Hey, thanks for putting time in the calendar. You said you wanted to chat about your career - I'm keen to hear what's on your mind. How do you reckon things have been going?",
  },

  // ============================================
  // MEETINGS CATEGORY (2 scenarios)
  // ============================================
  {
    id: 'client-escalation',
    category: 'meetings',
    title: 'Calming an Upset Client',
    shortDescription: 'De-escalation skills',
    setting: 'You\'re in a meeting or call where a client is frustrated, angry, or upset about something. You need to de-escalate the situation.',
    yourRole: 'Account manager or team member',
    theirRole: 'Upset client',
    goals: [
      'Acknowledge their frustration genuinely',
      'Listen without getting defensive',
      'Take ownership where appropriate',
      'Propose concrete next steps',
    ],
    vocabPreview: [
      { term: 'Hear you', meaning: 'I understand your frustration', example: 'I completely hear you on this.' },
      { term: 'Dropped the ball', meaning: 'Made a mistake / Failed', example: 'We dropped the ball on this one.' },
      { term: 'Make it right', meaning: 'Fix the problem', example: 'Let me explain how we\'re going to make it right.' },
      { term: 'On top of it', meaning: 'Handling it / In control', example: 'I\'m on top of it and will update you by EOD.' },
    ],
    culturalTip: 'Australians appreciate when someone owns a problem rather than deflecting. "Yeah, we stuffed up here - let me fix it" is more trusted than corporate excuses. Stay calm, acknowledge their feelings, and focus on solutions.',
    difficulty: 'advanced',
    durationMinutes: 7,
    icon: '😠',
    prompt: `You are {name}, an Australian client who is genuinely frustrated about a problem. You're not being unreasonable, but you're upset and need the issue addressed.

Your communication style:
- Frustrated but not abusive
- Want to be heard and taken seriously
- Calm down when they acknowledge the problem
- Appreciate action over empty apologies

The issue (choose one):
1. Deliverable was late and caused problems for you
2. Something wasn't done as agreed and you're out of pocket
3. Communication has been poor and you feel ignored

The conversation flow:
1. Express your frustration firmly
2. Explain the impact on your business
3. If they get defensive, push back
4. If they acknowledge and propose solutions, start to calm down
5. End constructively if they handle it well

Be realistic - if they genuinely own the problem and propose solutions, soften. If they make excuses, stay frustrated.`,
    firstMessage: "Look, I'll be honest - I'm not happy. We were promised this would be delivered last week, and now my whole team is scrambling because we don't have it. I've got my boss asking questions and I don't have answers. What's going on?",
  },
  {
    id: 'explaining-technical',
    category: 'meetings',
    title: 'Explaining Something Technical',
    shortDescription: 'Making complex topics accessible',
    setting: 'You need to explain a technical concept, process, or decision to someone who doesn\'t have the same background or expertise.',
    yourRole: 'Technical team member',
    theirRole: 'Non-technical stakeholder',
    goals: [
      'Explain complex concepts simply without being condescending',
      'Use analogies and examples to clarify',
      'Check for understanding along the way',
      'Answer questions patiently',
    ],
    vocabPreview: [
      { term: 'In a nutshell', meaning: 'Simply put / Briefly', example: 'In a nutshell, it\'s like a digital filing cabinet.' },
      { term: 'Think of it like', meaning: 'Analogy introduction', example: 'Think of it like a traffic light for data.' },
      { term: 'Does that make sense?', meaning: 'Checking understanding', example: 'Does that make sense so far?' },
      { term: 'The gist', meaning: 'The main point / Core idea', example: 'The gist is we need to upgrade before we can add features.' },
    ],
    culturalTip: 'Australians appreciate plain English over jargon. Being able to explain complex things simply is respected. "Sorry, can you dumb that down for me?" is a common request - don\'t take offence, just explain it more simply.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '🔧',
    prompt: `You are {name}, an Australian stakeholder or manager who needs to understand something technical but doesn't have a technical background.

Your communication style:
- Intelligent but not technical
- Ask clarifying questions
- Appreciate good explanations and analogies
- Get frustrated with jargon or condescension

The scenario:
You need to understand a technical decision, process, or concept so you can make a business decision or explain it to others.

The conversation flow:
1. Ask them to explain the technical topic
2. Ask clarifying questions when confused
3. Request analogies or simpler explanations if needed
4. Show when you understand
5. Maybe ask a follow-up question about implications

Be a realistic non-technical person - ask "what does that mean?" when they use jargon. Appreciate when they explain well without talking down to you.`,
    firstMessage: "Right, so I need to understand this API thing before I can sign off on the budget. Can you explain it to me in plain English? What is it and why do we need it?",
  },
];
