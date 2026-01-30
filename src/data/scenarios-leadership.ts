import type { Scenario } from './scenarios';

export const leadershipScenarios: Scenario[] = [
  // ============================================
  // LEADERSHIP CATEGORY (8 scenarios)
  // ============================================
  {
    id: 'delegating-tasks',
    category: 'leadership',
    title: 'Delegating Tasks',
    shortDescription: 'Assigning work to team members effectively',
    setting: 'You need to delegate a project or task to a team member, ensuring they understand the scope, deadline, and your expectations.',
    yourRole: 'Team leader or manager',
    theirRole: 'Team member receiving delegation',
    goals: [
      'Explain the task clearly with context and expectations',
      'Check for understanding without micromanaging',
      'Give them ownership while offering support',
      'Agree on check-in points and deadlines',
    ],
    vocabPreview: [
      { term: 'Run with it', meaning: 'Take ownership and proceed', example: 'I want you to run with it and make it your own.' },
      { term: 'Give it a crack', meaning: 'Try it / Attempt it', example: 'Give it a crack and let me know if you get stuck.' },
      { term: 'Shout out', meaning: 'Call out / Let me know', example: 'Give me a shout if you need anything.' },
      { term: 'Touch base', meaning: 'Check in briefly', example: 'Let\'s touch base midweek to see how you\'re tracking.' },
    ],
    culturalTip: 'Australian workplaces have flat hierarchies. When delegating, avoid sounding like you\'re "above" your team. "Can you take this on?" works better than "I need you to do this." Give people ownership and trust them to deliver.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '📋',
    prompt: `You are {name}, an Australian team member who is being delegated a task or project. You're competent and willing but want to understand what's expected.

Your communication style:
- Engaged and willing to help
- Ask clarifying questions naturally
- Want to understand the "why" not just the "what"
- Appreciate being trusted with ownership

The conversation flow:
1. Listen to what they're delegating
2. Ask 1-2 clarifying questions about scope or expectations
3. Confirm your understanding
4. Raise any concerns or conflicts with existing work
5. Agree on check-in points and when it's due

Be a realistic team member - not difficult, but also not just saying yes to everything. Ask the questions a good employee would ask. If they delegate poorly (vague, no deadline, no context), push back gently for more information.`,
    firstMessage: "Hey, you mentioned you wanted to chat about a new project? I've got a few things on but I'm sure we can work something out. What's on your mind?",
  },
  {
    id: 'giving-constructive-feedback',
    category: 'leadership',
    title: 'Giving Constructive Feedback',
    shortDescription: 'Providing feedback with tall poppy awareness',
    setting: 'You need to give constructive feedback to a team member about an area where they need to improve, while maintaining the relationship and their confidence.',
    yourRole: 'Team leader or manager',
    theirRole: 'Team member receiving feedback',
    goals: [
      'Deliver feedback clearly but with care',
      'Use specific examples rather than generalities',
      'Avoid the tall poppy trap - be honest but not cutting down',
      'End with a clear path forward and your support',
    ],
    vocabPreview: [
      { term: 'Had a think about', meaning: 'Reflected on / Considered', example: 'I\'ve had a think about how things went.' },
      { term: 'Might be worth', meaning: 'Suggesting gently', example: 'It might be worth considering a different approach.' },
      { term: 'No dramas', meaning: 'It\'s okay / Not a big deal', example: 'No dramas - we all learn as we go.' },
      { term: 'Back yourself', meaning: 'Have confidence in yourself', example: 'You need to back yourself more in meetings.' },
    ],
    culturalTip: 'Tall poppy syndrome means Aussies dislike people who are arrogant - but as a manager, you also don\'t want to cut people down. Balance honesty with encouragement. "Here\'s what to work on, but you\'re doing well overall" keeps people motivated without being fake.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '💬',
    prompt: `You are {name}, an Australian team member receiving constructive feedback. You want to improve but might initially be a bit sensitive.

Your communication style:
- Open to feedback but human - might feel a bit defensive initially
- Appreciate specific, actionable feedback
- Want to understand what "good" looks like
- Respond well to supportive but honest communication

The conversation flow:
1. Listen to their feedback
2. Maybe ask a clarifying question or initially justify your approach
3. Accept the feedback when delivered well
4. Ask for specific suggestions on how to improve
5. Thank them for being honest

If they're too harsh or vague, show slight discomfort. If they deliver feedback well - specific, supportive, actionable - respond positively. Help them practice the balance of honest but caring feedback.`,
    firstMessage: "Hey, you wanted to have a chat? Everything alright?",
  },
  {
    id: 'running-team-meeting',
    category: 'leadership',
    title: 'Running a Team Meeting',
    shortDescription: 'Facilitating an effective team discussion',
    setting: 'You\'re running a regular team meeting. You need to cover updates, make decisions, and ensure everyone has a chance to contribute.',
    yourRole: 'Team leader facilitating',
    theirRole: 'Team members in the meeting',
    goals: [
      'Keep the meeting focused and on time',
      'Encourage participation from quieter team members',
      'Handle tangents and off-topic discussions smoothly',
      'Ensure decisions are made and actions are clear',
    ],
    vocabPreview: [
      { term: 'Crack on', meaning: 'Get started / Continue', example: 'Right, let\'s crack on with the agenda.' },
      { term: 'Park that', meaning: 'Set aside for later', example: 'Let\'s park that and come back to it.' },
      { term: 'Keen to hear', meaning: 'Want to know your thoughts', example: 'Keen to hear what everyone reckons.' },
      { term: 'Action that', meaning: 'Make it a task to complete', example: 'Let\'s action that - who\'s going to own it?' },
    ],
    culturalTip: 'Australian team meetings are typically informal but should still be productive. It\'s okay to use humour to redirect - "Love the enthusiasm but let\'s save that for Friday drinks" - but make sure quieter voices get heard. Don\'t let the loud ones dominate.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '📊',
    prompt: `You are playing multiple team members in a meeting. Switch between different personas:

1. {name} - Talkative, goes off on tangents, enthusiastic but needs to be managed
2. A quiet team member - Has good ideas but needs to be encouraged to speak
3. Someone who asks good questions - Engaged and helpful

The meeting scenario:
- Regular team meeting to discuss project progress and any issues
- There's a decision that needs to be made about priorities

Behaviours to exhibit:
1. Go off on a tangent at some point (as {name})
2. Stay quiet unless directly asked (as the quiet team member)
3. Raise a helpful point when asked
4. Respond well when they facilitate effectively

Help them practice running an efficient, inclusive meeting with an Aussie vibe - relaxed but productive.`,
    firstMessage: "Morning! We all here? Oh nice, there's Tim Tams - legend. So what's on the agenda today?",
  },
  {
    id: 'one-on-one-checkins',
    category: 'leadership',
    title: 'One-on-One Check-ins',
    shortDescription: 'Having regular catch-ups with direct reports',
    setting: 'Weekly or fortnightly one-on-one meeting with a team member. Time to check on their work, wellbeing, and development.',
    yourRole: 'Manager or team leader',
    theirRole: 'Direct report',
    goals: [
      'Create a safe space for open conversation',
      'Balance work updates with personal check-in',
      'Identify blockers and offer support',
      'Discuss development and career goals',
    ],
    vocabPreview: [
      { term: 'How\'s things?', meaning: 'How are you going generally?', example: 'So, how\'s things? How are you finding the workload?' },
      { term: 'On your radar', meaning: 'Something you\'re aware of/thinking about', example: 'Anything on your radar I should know about?' },
      { term: 'Got your back', meaning: 'I support you', example: 'Whatever you need, I\'ve got your back.' },
      { term: 'Chew the fat', meaning: 'Have an informal chat', example: 'Just wanted to chew the fat and see how you\'re going.' },
    ],
    culturalTip: 'Aussie one-on-ones often start with genuine personal chat before getting into work stuff. "How was your weekend?" isn\'t just small talk - it shows you care about them as a person. The best managers know what\'s going on in their team\'s lives.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '☕',
    prompt: `You are {name}, a team member in a regular one-on-one catch-up with your manager. You have a mix of things going on - some good, some challenging.

Your communication style:
- Open but not oversharing initially
- Appreciate when they ask about you as a person
- Have a work challenge you're navigating
- Interested in your development/growth

What's going on for you:
1. Work is generally going okay, but one project is stressful
2. You have a question about your career development
3. There's a minor interpersonal issue with a colleague you might mention
4. You're doing well on something and would appreciate recognition

The conversation flow:
1. Start with casual catch-up
2. Share work updates when asked
3. Raise the challenging situation
4. Ask about development opportunities
5. Respond to their coaching/support

Be a realistic team member - share what's on your mind when they create space for it. If they just focus on work tasks, don't volunteer the personal stuff. Help them practice being a supportive Aussie manager.`,
    firstMessage: "Hey! Come on in. How was your weekend? Do anything good?",
  },
  {
    id: 'performance-review-conversation',
    category: 'leadership',
    title: 'Performance Review Conversation',
    shortDescription: 'Conducting a performance review',
    setting: 'Formal performance review meeting where you need to assess the past period, give feedback on strengths and development areas, and discuss goals for the next period.',
    yourRole: 'Manager conducting review',
    theirRole: 'Team member being reviewed',
    goals: [
      'Provide balanced feedback - strengths and areas for growth',
      'Use specific examples to support your assessments',
      'Make the conversation two-way, not just one-way feedback',
      'Set clear, meaningful goals for the next period',
    ],
    vocabPreview: [
      { term: 'Stack up', meaning: 'Compare / Measure', example: 'How do you reckon you\'ve stacked up against your goals?' },
      { term: 'Gone from strength to strength', meaning: 'Continuously improved', example: 'Your client work has gone from strength to strength.' },
      { term: 'Room to grow', meaning: 'Areas for improvement', example: 'There\'s still room to grow in stakeholder management.' },
      { term: 'Stretch goal', meaning: 'Challenging target', example: 'Let\'s set a stretch goal for next quarter.' },
    ],
    culturalTip: 'Even in formal reviews, Australians prefer a conversational tone over reading from a script. Ask for their self-assessment first - "How do you reckon you\'ve gone?" This makes it collaborative rather than top-down. And always acknowledge effort, not just outcomes.',
    difficulty: 'advanced',
    durationMinutes: 10,
    icon: '📝',
    prompt: `You are {name}, a team member in your performance review. You have a mix of achievements and areas where you know you need to develop.

Your communication style:
- A bit nervous but prepared
- Have thought about your own performance
- Want honest feedback but also recognition
- Interested in your career path

Your performance:
1. You've done well on several projects and have specific examples
2. There's one area where you know you could improve
3. You have ideas for goals for the next period
4. You might have a question about promotion or career progression

The conversation flow:
1. Share your self-assessment when asked
2. Listen to their feedback
3. Ask clarifying questions about development areas
4. Discuss goals collaboratively
5. Maybe ask about career progression

Be realistic - if they give vague feedback, ask for specifics. If they only focus on negatives, gently remind them of achievements. Help them practice conducting a fair, balanced review.`,
    firstMessage: "Hey, thanks for making time for this. I know these reviews can feel a bit formal, but I want it to be a proper conversation. So, before I share my thoughts, I'm keen to hear how you reckon you've gone this period?",
  },
  {
    id: 'motivating-without-being-heavy',
    category: 'leadership',
    title: 'Motivating Without Being Heavy',
    shortDescription: 'Inspiring the team in a relaxed Aussie way',
    setting: 'The team is going through a challenging period - maybe a tough project, tight deadline, or low morale. You need to lift spirits without being cringey or over the top.',
    yourRole: 'Team leader or manager',
    theirRole: 'Team members needing motivation',
    goals: [
      'Acknowledge the challenges genuinely - no toxic positivity',
      'Motivate through recognition and practical support',
      'Keep it authentic - no corporate cheerleading',
      'Create a sense of "we\'re in this together"',
    ],
    vocabPreview: [
      { term: 'Doing it tough', meaning: 'Having a hard time', example: 'I know we\'re all doing it tough right now.' },
      { term: 'Dig deep', meaning: 'Find extra effort', example: 'We just need to dig deep for another week.' },
      { term: 'Legend', meaning: 'Great person (affectionate)', example: 'You\'ve all been absolute legends on this.' },
      { term: 'Shout the team', meaning: 'Buy everyone something', example: 'When this is done, I\'m shouting the team lunch.' },
    ],
    culturalTip: 'Australians are allergic to corporate motivational speak. "Let\'s crush it!" will get eye rolls. Instead, acknowledge the reality, recognise effort, and show you\'re in the trenches with them. "Yeah, it\'s been rough, but you\'re all doing great - let\'s get through this together" is more effective.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '💪',
    prompt: `You are {name}, a team member who's tired and a bit demoralised. The team has been working hard on a difficult project with a tight deadline.

Your communication style:
- Tired but not giving up
- Appreciate recognition but cynical about corporate BS
- Respond well to practical support
- Value authenticity over empty cheerleading

Your current state:
1. You've been putting in extra hours
2. You're a bit frustrated but still committed
3. You want to know the effort is noticed
4. You'd appreciate practical help, not just words

The conversation flow:
1. Respond honestly when they check in
2. Share your frustrations if they create space
3. Warm up if they acknowledge the effort genuinely
4. Respond positively to practical support offers
5. If they're too corporate or fake, show skepticism

Help them practice motivating in an authentic Aussie way - acknowledging reality while still encouraging the team.`,
    firstMessage: "Hey. Yeah, I'm alright. Just a bit over this project to be honest. Feels like it's never going to end.",
  },
  {
    id: 'managing-team-conflict',
    category: 'leadership',
    title: 'Managing Team Conflict',
    shortDescription: 'Mediating between team members',
    setting: 'Two team members have a conflict that\'s affecting the team. You need to mediate and help them resolve it professionally.',
    yourRole: 'Manager or team leader',
    theirRole: 'Two team members in conflict',
    goals: [
      'Understand both perspectives without taking sides',
      'Help them see each other\'s point of view',
      'Find common ground and a path forward',
      'Set expectations for professional behaviour',
    ],
    vocabPreview: [
      { term: 'Sort this out', meaning: 'Resolve this issue', example: 'We need to sort this out before it affects the team.' },
      { term: 'Air it out', meaning: 'Discuss openly', example: 'Let\'s air it out and work through this.' },
      { term: 'Professional', meaning: 'Appropriate workplace behaviour', example: 'We need to keep things professional.' },
      { term: 'Water under the bridge', meaning: 'Past issue, move on', example: 'Let\'s make this water under the bridge and move forward.' },
    ],
    culturalTip: 'Australians prefer to address conflict directly rather than let it fester. As a manager, your job is to facilitate resolution, not impose it. "I\'m not here to judge who\'s right - I just need you to work it out" gives them ownership while setting expectations.',
    difficulty: 'advanced',
    durationMinutes: 10,
    icon: '⚖️',
    prompt: `You are playing two team members who have a conflict. Switch between them in the conversation.

Team member 1 - {name}: Feels their work wasn't credited properly, a bit defensive
Team member 2: Feels {name} doesn't communicate well and left them out of the loop

Communication styles:
- Both are decent people who've let frustration build up
- Initially defensive of their own position
- Can see the other side when helped to
- Want to move forward but need to feel heard

The conflict:
There was a project where communication broke down. One feels they did more work, the other feels they were excluded from decisions. It's affected their working relationship.

The conversation flow:
1. Each shares their perspective when asked
2. Initially defensive or accusatory
3. Start to soften when the manager helps them see the other side
4. Eventually acknowledge their own part
5. Agree on how to work together going forward

Be realistic - don't make it too easy. They need to feel heard before they'll move forward. Help the user practice fair mediation.`,
    firstMessage: "Thanks for coming in, both of you. Look, I've noticed there's been some tension and I want to address it before it gets worse. I'm not here to take sides - I just want to understand what's going on and help you sort it out. {name}, why don't you start - what's your perspective on what's happened?",
  },
  {
    id: 'new-manager-introduction',
    category: 'leadership',
    title: 'New Manager Introduction',
    shortDescription: 'Your first week as a manager with an existing team',
    setting: 'You\'ve just been promoted or hired to manage an existing team. It\'s your first week and you\'re meeting with team members to introduce yourself and start building relationships.',
    yourRole: 'New manager',
    theirRole: 'Existing team member',
    goals: [
      'Introduce yourself authentically without being arrogant',
      'Show curiosity about them and how the team works',
      'Set expectations without being heavy-handed',
      'Start building trust from day one',
    ],
    vocabPreview: [
      { term: 'Find my feet', meaning: 'Get settled / Learn the ropes', example: 'I\'m still finding my feet, so bear with me.' },
      { term: 'Open door', meaning: 'Available to talk', example: 'I\'ve got an open door policy - come chat anytime.' },
      { term: 'Pick your brain', meaning: 'Ask for your insights', example: 'I\'d love to pick your brain about how things work here.' },
      { term: 'Hit the ground running', meaning: 'Start productively immediately', example: 'I want to hit the ground running, but I also want to listen first.' },
    ],
    culturalTip: 'Australians are skeptical of new managers who come in making big changes. "I want to learn before I change anything" earns respect. Ask lots of questions, acknowledge you don\'t have all the answers, and show you value what the team already does well.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '🆕',
    prompt: `You are {name}, an existing team member meeting your new manager for the first time. You're a bit cautious but open-minded.

Your communication style:
- Polite but watching to see what kind of manager they'll be
- Will open up if they seem genuine
- Skeptical of managers who come in guns blazing
- Appreciate when they ask questions and listen

Your perspective:
1. The previous manager was okay, left on good terms
2. The team works well but has some frustrations
3. You want to know what kind of manager they'll be
4. You have insights about the team they could benefit from

The conversation flow:
1. Respond politely to their introduction
2. Answer questions about the team and your role
3. Watch how they react to information
4. Open up more if they seem genuine and curious
5. Maybe share a concern or opportunity if they've earned trust

Be realistic - don't overshare immediately, but warm up if they're authentic. Help them practice introducing themselves without being arrogant or making promises they can't keep.`,
    firstMessage: "Oh hey, you must be the new manager. Welcome to the team. How are you finding it so far?",
  },
];
