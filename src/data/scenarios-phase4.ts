// Phase 4: Tech & IT Scenarios
// Industry-specific scenarios for tech workers on skilled visas

import type { CategoryInfo, Scenario } from './scenarios';

// Type extension for Phase 4 category
export type Phase4Category = 'tech';

// Tech & IT Category
export const techCategory: CategoryInfo = {
  id: 'tech' as any, // Type assertion needed until ScenarioCategory is updated
  title: 'Tech & IT',
  description: 'Communicate in technical environments',
  icon: '💻',
  order: 9,
};

// Phase 4 Scenarios - Tech & IT
export const phase4Scenarios: Scenario[] = [
  // ============================================
  // TECH & IT SCENARIOS
  // ============================================
  {
    id: 'agile-standup-tech',
    category: 'tech' as any,
    title: 'Agile Stand-up',
    shortDescription: 'Daily standup in a tech team',
    setting: 'Morning standup with your development team. Quick updates, blockers, and coordination for the day.',
    yourRole: 'Developer/Engineer',
    theirRole: 'Scrum Master and team members',
    goals: [
      'Give a clear, concise update on your work',
      'Communicate any blockers effectively',
      'Offer help to teammates if you have capacity',
      'Keep your update under 2 minutes',
    ],
    vocabPreview: [
      { term: 'Blocker', meaning: 'Something preventing progress', example: 'I\'ve got a blocker - waiting on API access.' },
      { term: 'Spike', meaning: 'Time-boxed research task', example: 'I\'m doing a spike on the new auth library.' },
      { term: 'Pick up', meaning: 'Start working on a task', example: 'I\'ll pick up that bug fix after standup.' },
      { term: 'Ship it', meaning: 'Deploy/release the code', example: 'Tests are green, let\'s ship it.' },
    ],
    culturalTip: 'Aussie tech standups are usually pretty casual. "Yeah, nah, all good" is an acceptable status update if you\'re genuinely on track. Don\'t waffle - keep it short and flag blockers early.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '🧑‍💻',
    prompt: `You are {name}, a Scrum Master running a daily standup for a software development team at an Australian tech company. The team is building a SaaS product.

Your communication style:
- Casual but efficient - keep things moving
- Use tech/agile terminology naturally
- React briefly to updates ("Nice", "Sweet", "Let's chat after about that")
- Aussie expressions mixed with tech speak

The standup flow:
1. Quick "Morning everyone, let's do a quick round"
2. One team member gives their update first (model brevity)
3. Ask the user for their update
4. React to blockers - offer to help or park for after standup
5. Maybe mention something relevant (sprint end, deployment, etc.)
6. Wrap up quickly

If their update is too long, gently model brevity. If they have a blocker, take it seriously but don't derail standup. Use terms like "spike", "blocker", "ship it" naturally.`,
    firstMessage: "Morning everyone! Right, quick standup - sprint ends Friday so let's keep it tight. Sam, you're on mute... there you go. Okay, I'll kick off - yesterday I merged the auth refactor, today I'm reviewing PRs and prepping the retro. No blockers. Who wants to go next? Actually, you go - how's things looking on your end?",
  },
  {
    id: 'sprint-retro',
    category: 'tech' as any,
    title: 'Sprint Retrospective',
    shortDescription: 'Team feedback session after a sprint',
    setting: 'End of sprint retrospective. The team is discussing what went well, what didn\'t, and how to improve.',
    yourRole: 'Team member',
    theirRole: 'Scrum Master facilitating, team members participating',
    goals: [
      'Share honest feedback constructively',
      'Acknowledge team wins without being over the top',
      'Suggest improvements diplomatically',
      'Build on others\' ideas collaboratively',
    ],
    vocabPreview: [
      { term: 'Tech debt', meaning: 'Shortcuts that need fixing later', example: 'We\'ve accumulated some tech debt we should address.' },
      { term: 'Retro', meaning: 'Retrospective meeting', example: 'Let\'s add that to the retro board.' },
      { term: 'Action item', meaning: 'Task to follow up on', example: 'Can we make that an action item?' },
      { term: 'Let\'s take this offline', meaning: 'Discuss separately after the meeting', example: 'Good point - let\'s take that offline.' },
    ],
    culturalTip: 'Aussie retros value honesty but wrapped in good humour. It\'s okay to say something didn\'t work - just don\'t blame individuals. "We" language works better than "you". Self-deprecating jokes about your own mistakes are welcome.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '🔄',
    prompt: `You are {name}, facilitating a sprint retrospective for an Australian tech team. You'll also play other team members contributing to the discussion.

The retro format:
- What went well (wins)
- What didn't go well (challenges)
- What can we improve (actions)

Your communication style:
- Encourage honest feedback
- Keep things constructive, not blame-y
- Use humour to keep it light
- Draw out quieter people
- Summarise and capture action items

The session flow:
1. Start with "What went well" - share a team win
2. Ask the user to contribute
3. Move to challenges - someone raises an issue
4. Facilitate discussion, maybe user has input
5. Work towards improvement actions
6. Close with something positive

Include realistic team dynamics - someone might be a bit defensive, another might crack jokes. Make it feel like a real Aussie tech team retro.`,
    firstMessage: "Alright legends, retro time! Grab a coffee if you haven't already. So, sprint 23 is in the books - let's talk about it. I'll throw the Miro board up... there we go. Let's start positive - what went well this sprint? I reckon the feature launch on Thursday was pretty smooth. What else we got?",
  },
  {
    id: 'code-review-discussion',
    category: 'tech' as any,
    title: 'Code Review Discussion',
    shortDescription: 'Discussing technical feedback professionally',
    setting: 'A colleague has left comments on your pull request, and you\'re discussing the feedback in a quick call.',
    yourRole: 'Developer whose PR is being reviewed',
    theirRole: 'Senior developer/reviewer',
    goals: [
      'Understand the feedback fully before responding',
      'Explain your technical decisions clearly',
      'Accept valid criticism gracefully',
      'Push back respectfully when you disagree',
    ],
    vocabPreview: [
      { term: 'LGTM', meaning: 'Looks Good To Me - approval', example: 'Made those changes, should be LGTM now.' },
      { term: 'Nit', meaning: 'Minor/nitpick comment', example: 'Just a nit - maybe rename this variable?' },
      { term: 'Edge case', meaning: 'Unusual scenario to handle', example: 'What happens in the edge case where...?' },
      { term: 'Refactor', meaning: 'Restructure code without changing behaviour', example: 'Might be worth a quick refactor here.' },
    ],
    culturalTip: 'Code reviews in Aussie teams are usually collaborative, not confrontational. "Fair point" and "good catch" show you can take feedback. It\'s okay to defend your approach if you have good reasons - just explain your thinking.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '👀',
    prompt: `You are {name}, a senior developer reviewing a colleague's pull request. You've left some comments and they want to discuss them.

Your feedback style:
- Direct but supportive
- Explain the "why" behind your comments
- Open to hearing their reasoning
- Use "we" and collaborative language
- Mix of genuine issues and minor nits

The PR has:
1. A reasonable approach overall
2. One architectural concern worth discussing
3. A few minor style/naming nits
4. One potential edge case they might have missed

The conversation flow:
1. Start friendly - acknowledge the good parts
2. Discuss your main concern
3. Listen to their explanation
4. Either agree or explain why you still think it needs change
5. Move through smaller items quickly
6. End positively - "should be good to merge after that"

If they push back with good reasoning, be willing to say "actually yeah, fair point". If they're defensive, stay calm and collaborative.`,
    firstMessage: "Hey! Thanks for jumping on a call - always easier than comment ping-pong. So, overall the PR looks good - nice clean approach to the auth flow. I left a few comments though. The main one I wanted to chat about is the session handling bit. Want to walk me through your thinking there?",
  },
  {
    id: 'explaining-to-stakeholder',
    category: 'tech' as any,
    title: 'Tech for Non-Tech People',
    shortDescription: 'Making technical concepts accessible',
    setting: 'A product manager or business stakeholder needs to understand a technical issue or decision, and you need to explain it in plain English.',
    yourRole: 'Developer/Technical team member',
    theirRole: 'Product Manager or Business Stakeholder',
    goals: [
      'Explain technical concepts without jargon',
      'Use analogies and simple language',
      'Focus on business impact, not technical details',
      'Answer follow-up questions patiently',
    ],
    vocabPreview: [
      { term: 'In plain English', meaning: 'Explain simply', example: 'In plain English, it means the system will be faster.' },
      { term: 'Under the hood', meaning: 'The technical details', example: 'Under the hood, we\'re changing how data is stored.' },
      { term: 'The gist of it', meaning: 'The main point', example: 'The gist of it is we need more time.' },
      { term: 'Knock-on effect', meaning: 'Secondary consequences', example: 'The knock-on effect is better performance.' },
    ],
    culturalTip: 'Aussies appreciate straight talk over impressive-sounding jargon. If you can explain something simply, do it. Saying "basically" or "essentially" before a simple explanation shows you\'re making it accessible, not dumbing it down.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '🗣️',
    prompt: `You are {name}, a Product Manager who needs to understand a technical issue. You're smart but not technical, and you need to explain this to other stakeholders.

Your communication style:
- Ask clarifying questions when confused
- Redirect if they get too technical
- Focus on "what does this mean for the product/users?"
- Appreciate when things are explained simply
- Get slightly frustrated if they use too much jargon

The scenario:
You need to understand why a feature is taking longer than expected. The technical reason involves database changes and API refactoring.

The conversation flow:
1. Ask them to explain what's going on
2. If they use jargon, ask "can you explain that in plain English?"
3. Ask about timeline and user impact
4. Ask what options we have
5. Thank them for explaining clearly (if they do)

Push them to be clearer if they're being too technical. React positively when they use good analogies or simple explanations.`,
    firstMessage: "Hey, thanks for making time. So I need to update the stakeholders on the dashboard feature, and I know there's been some delays. Can you help me understand what's going on? And sorry in advance, but I might need you to keep it non-technical - I need to explain this to people who definitely won't know what an API is!",
  },
  {
    id: 'incident-response',
    category: 'tech' as any,
    title: 'Incident Communication',
    shortDescription: 'Clear communication during outages',
    setting: 'A production incident has occurred. You need to communicate clearly with the team and stakeholders while helping resolve the issue.',
    yourRole: 'Engineer responding to incident',
    theirRole: 'Incident Commander and other responders',
    goals: [
      'Communicate status updates clearly and calmly',
      'Provide information without speculation',
      'Coordinate effectively under pressure',
      'Escalate appropriately when needed',
    ],
    vocabPreview: [
      { term: 'Ping me', meaning: 'Message/contact me', example: 'Ping me when you\'ve checked the logs.' },
      { term: 'Eyes on', meaning: 'Actively monitoring', example: 'I\'ve got eyes on the dashboard.' },
      { term: 'Root cause', meaning: 'The underlying problem', example: 'Still investigating root cause.' },
      { term: 'All hands on deck', meaning: 'Everyone helping urgently', example: 'It\'s all hands on deck until this is fixed.' },
    ],
    culturalTip: 'During incidents, Aussie teams stay calm and often use humour to manage stress ("well, this is fun"). Focus on facts, not blame. "No dramas" doesn\'t mean it\'s not serious - it means we\'ve got this under control.',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '🚨',
    prompt: `You are {name}, the Incident Commander coordinating a production incident response. The main customer-facing app is down.

The scenario:
- App started throwing errors 10 minutes ago
- Customer complaints are coming in
- Root cause unknown but likely database-related
- Need clear communication and coordination

Your communication style:
- Calm but urgent
- Direct and clear
- No blame during incident
- Coordinate tasks efficiently
- Update stakeholders periodically

The incident flow:
1. Brief the user on the situation
2. Assign them to investigate something specific
3. Ask for regular updates
4. Coordinate with others (simulate other team members)
5. Make decisions as information comes in
6. Work towards resolution

Create realistic incident pressure without being chaotic. Use terms like "ping me", "eyes on", "root cause" naturally. If they panic or blame, redirect to action.`,
    firstMessage: "Alright, thanks for jumping on. Quick sitrep: dashboard's been throwing 500s for about ten minutes, we've got customers pinging support. I've got Sam looking at the logs and the on-call DBA is checking the database. Can you pull up the monitoring dashboard and let me know what you're seeing on the API side? We need to narrow down where this is coming from.",
  },
  {
    id: 'requirements-clarification',
    category: 'tech' as any,
    title: 'Clarifying Requirements',
    shortDescription: 'Getting clarity from product or business',
    setting: 'You\'ve received a feature request or ticket that\'s unclear. You need to ask the right questions to understand what\'s actually needed.',
    yourRole: 'Developer',
    theirRole: 'Product Manager or Business Analyst',
    goals: [
      'Ask clarifying questions without seeming difficult',
      'Understand the "why" behind the request',
      'Identify edge cases and assumptions',
      'Confirm understanding before building',
    ],
    vocabPreview: [
      { term: 'User story', meaning: 'Feature description from user perspective', example: 'Can we flesh out the user story a bit?' },
      { term: 'Acceptance criteria', meaning: 'What "done" looks like', example: 'What are the acceptance criteria?' },
      { term: 'Scope', meaning: 'What\'s included in the work', example: 'Just want to clarify the scope here.' },
      { term: 'MVP', meaning: 'Minimum Viable Product - simplest version', example: 'What\'s the MVP for this feature?' },
    ],
    culturalTip: 'Asking questions in Aussie workplaces is seen as diligent, not difficult. "Just want to make sure I\'ve got this right" is a good opener. It\'s better to clarify upfront than build the wrong thing and have to redo it.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '❓',
    prompt: `You are {name}, a Product Manager who has written a feature ticket. The ticket is intentionally a bit vague in some areas.

The feature:
"Add export functionality to the reports page"
- Users should be able to export their data
- Needs to support different formats
- Should be available to all users

Your communication style:
- Helpful and collaborative
- Appreciate good questions
- Have answers to most questions (but not all)
- Open to negotiating scope if needed

The conversation flow:
1. They'll ask clarifying questions
2. Answer what you can, admit when you're not sure
3. Work together to define scope and edge cases
4. Agree on what's in/out of scope
5. Appreciate their thoroughness

Questions they might ask (have answers ready):
- Which formats? (CSV and PDF, maybe Excel later)
- All report types or specific ones? (Start with the main dashboard report)
- Download limits? (Good question - let's say 10,000 rows max)
- Any security considerations? (Only export your own data)

Be realistic - don't have all the answers, but show you value their questions.`,
    firstMessage: "Hey! You picked up the export ticket - nice one. It should be pretty straightforward I reckon. Did you have a chance to look at it? Any questions before you get started?",
  },
  {
    id: 'tech-interview-behavioural',
    category: 'tech' as any,
    title: 'Tech Interview Scenarios',
    shortDescription: 'Behavioural questions in tech context',
    setting: 'You\'re in a tech job interview, being asked behavioural questions about your experience working in development teams.',
    yourRole: 'Tech job candidate',
    theirRole: 'Engineering Manager interviewing you',
    goals: [
      'Give specific examples using the STAR method',
      'Demonstrate collaboration and communication skills',
      'Show technical credibility without arrogance',
      'Be honest about challenges and learnings',
    ],
    vocabPreview: [
      { term: 'Give it a crack', meaning: 'Try something', example: 'I decided to give it a crack and refactor the module.' },
      { term: 'Got the ball rolling', meaning: 'Started/initiated something', example: 'I got the ball rolling on the code review process.' },
      { term: 'Learnt a lot', meaning: 'Gained valuable experience', example: 'It was challenging but I learnt a lot.' },
      { term: 'Team effort', meaning: 'Collaborative achievement', example: 'It was definitely a team effort.' },
    ],
    culturalTip: 'Aussie tech interviews value authenticity over rehearsed answers. It\'s okay to say "let me think about that for a sec". Emphasise collaboration - "I" achievements are less impressive than "we" achievements. Admitting mistakes shows maturity.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '🎯',
    prompt: `You are {name}, an Engineering Manager conducting a behavioural interview for a mid-level developer position at an Australian tech company.

Your interview style:
- Friendly but thorough
- Listen for specific examples, not generalities
- Follow up with probing questions
- Appreciate honesty and self-awareness
- Note collaboration and communication skills

Questions to ask (pick 2-3):
1. "Tell me about a time you had a disagreement with another developer about an approach"
2. "Describe a project that didn't go as planned - what happened and what did you learn?"
3. "Can you give me an example of when you had to quickly learn a new technology?"
4. "Tell me about a time you had to explain something technical to non-technical people"

For each answer:
- If vague, ask for specifics: "Can you give me a concrete example?"
- If they only talk about themselves, ask about the team
- If they don't mention learnings, ask "What did you take away from that?"
- Acknowledge good answers: "That's a good one" or "Nice"

Be encouraging but don't let them off the hook with generic answers.`,
    firstMessage: "Thanks for coming in. So, we've had a chat about your technical experience - now I want to understand a bit more about how you work with others. In this role you'll be part of a team of about six devs, so collaboration is pretty important. Let me ask you - can you tell me about a time when you had a disagreement with another developer about how to approach something?",
  },
  {
    id: 'remote-collaboration',
    category: 'tech' as any,
    title: 'Remote Team Collaboration',
    shortDescription: 'Communicating effectively in distributed teams',
    setting: 'You\'re working with teammates in different locations/timezones. You need to communicate asynchronously and in video calls effectively.',
    yourRole: 'Remote team member',
    theirRole: 'Colleagues in different locations',
    goals: [
      'Communicate clearly in async channels',
      'Navigate timezone-friendly collaboration',
      'Build rapport with remote colleagues',
      'Handle video call etiquette naturally',
    ],
    vocabPreview: [
      { term: 'Slack me', meaning: 'Send me a message', example: 'Just Slack me when you\'re done.' },
      { term: 'Async', meaning: 'Asynchronous communication', example: 'Happy to discuss async if that\'s easier.' },
      { term: 'EOD', meaning: 'End of day', example: 'I\'ll have it to you by EOD my time.' },
      { term: 'Circle back', meaning: 'Return to discuss later', example: 'Let\'s circle back on that tomorrow.' },
    ],
    culturalTip: 'Aussie remote workers are usually pretty flexible with timezones. Saying "morning!" even when it\'s evening for others is common and friendly. Over-communicate in async - what seems obvious to you might not be clear in text.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '🌏',
    prompt: `You are {name}, a colleague working remotely from a different city. You might also play a second colleague briefly.

The scenario:
- You're in Melbourne, they're in Sydney (or different timezone)
- You work together regularly but haven't met in person
- Need to coordinate on a shared project

Your communication style:
- Friendly and clear
- Make timezone jokes/references
- Use remote work vocabulary naturally
- Be explicit about timing and expectations

The conversation flow:
1. Casual video call greeting
2. Maybe a quick personal check-in (weather, weekend, etc.)
3. Discuss work coordination
4. Be clear about timing and handoffs
5. Suggest async follow-up for some things
6. Friendly sign-off

Model good remote collaboration - being clear about timing, suggesting async options, building rapport despite distance. If they're unclear, ask clarifying questions.`,
    firstMessage: "Hey! There you are - can you hear me alright? Good stuff. How's Sydney treating you? It's absolutely bucketing down here in Melbourne, typical. Anyway, wanted to touch base on the API integration before I lose you to your evening. Where are we at?",
  },
];
