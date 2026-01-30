// Phase 5: Cross-Cultural Teams - Diverse Teams Category
// Created as part of the SpeakAussie Scenario Expansion Plan

import type { Scenario, CategoryInfo, Difficulty } from './scenarios';

// Type extension for Phase 5 category
export type Phase5Category = 'diverse';

// New Category Definition
export const diverseCategory: CategoryInfo = {
  id: 'diverse' as any, // Cast needed until ScenarioCategory type is extended
  title: 'Diverse Teams',
  description: 'Thrive in multicultural workplaces',
  icon: '🌏',
  order: 10,
};

// Phase 5 Scenarios - Cross-Cultural Teams
export const phase5Scenarios: Scenario[] = [
  // ============================================
  // DIVERSE TEAMS SCENARIOS
  // ============================================
  {
    id: 'offshore-collaboration',
    category: 'diverse' as any,
    title: 'Working with Offshore Teams',
    shortDescription: 'Cross timezone and culture communication',
    setting: 'You\'re on a video call with team members based overseas. There are timezone challenges and some communication style differences to navigate.',
    yourRole: 'Team member in Australia',
    theirRole: 'Offshore team colleagues (various locations)',
    goals: [
      'Communicate clearly across cultural differences',
      'Be mindful of time zone considerations',
      'Clarify understanding without being condescending',
      'Build rapport despite the distance',
    ],
    vocabPreview: [
      { term: 'Touch base', meaning: 'Have a brief meeting/chat', example: 'Let\'s touch base tomorrow your time.' },
      { term: 'EOD', meaning: 'End of day', example: 'Can you get that to me by EOD your time?' },
      { term: 'Async', meaning: 'Not happening at the same time', example: 'We can handle that async - no need for a meeting.' },
      { term: 'Loop you in', meaning: 'Include you in communication', example: 'I\'ll loop you in on that email thread.' },
    ],
    culturalTip: 'Australian directness can sometimes seem blunt to colleagues from cultures that communicate more indirectly. Add warmth with phrases like "Just checking in" or "Hope this finds you well". Also, be patient with different English accents and speeds - speak clearly, not louder.',
    difficulty: 'intermediate' as Difficulty,
    durationMinutes: 7,
    icon: '🌐',
    prompt: `You are playing offshore team members from different locations on a video call with the user (who is based in Australia). Rotate between personas:

1. {name} - Based in India, very polite and formal communication style, may say "yes" even when they need clarification
2. A colleague from the Philippines - Warm and friendly, sometimes indirect with concerns
3. A colleague from Eastern Europe - Direct but might come across as blunt

The meeting scenario:
- You're discussing a project handover or ongoing collaboration
- There are some miscommunications to work through
- Timezone challenges come up naturally

Behaviours to include:
1. One person agrees but then asks clarifying questions (indicating they didn't fully understand)
2. Someone is clearly tired because it's late/early their time - the user should acknowledge this
3. A cultural misunderstanding that needs gentle navigation
4. Technical issues (slight lag, audio cutting out) that require patience

Help them practice clear, patient, respectful cross-cultural communication. Model how to clarify without being condescending.`,
    firstMessage: "Hello! Good morning - well, it's evening here actually, about 8 PM. Thank you for making time for this call. I hope you are doing well? We wanted to discuss the project timeline, if that's okay with you?",
  },
  {
    id: 'cultural-misunderstanding',
    category: 'diverse' as any,
    title: 'Navigating Cultural Differences',
    shortDescription: 'Handling miscommunication gracefully',
    setting: 'A colleague from a different cultural background has misunderstood something you said, or vice versa. You need to clear things up without causing embarrassment.',
    yourRole: 'Team member',
    theirRole: 'Colleague from different cultural background',
    goals: [
      'Recognise when a miscommunication has occurred',
      'Address it sensitively without blame',
      'Learn from the experience',
      'Strengthen the relationship through understanding',
    ],
    vocabPreview: [
      { term: 'My bad', meaning: 'My mistake (taking responsibility)', example: 'Ah, my bad - I should have explained that better.' },
      { term: 'Got our wires crossed', meaning: 'Had a miscommunication', example: 'I think we got our wires crossed there.' },
      { term: 'What I meant was', meaning: 'Clarifying intent', example: 'What I meant was we should delay, not cancel.' },
      { term: 'No offence taken', meaning: 'I\'m not upset', example: 'No offence taken - I know you didn\'t mean it that way.' },
    ],
    culturalTip: 'Australian humour, especially sarcasm and self-deprecation, doesn\'t always translate well across cultures. If someone looks confused or uncomfortable, clarify: "Sorry, that was just a joke - I actually meant..." Being humble about cultural differences builds trust.',
    difficulty: 'intermediate' as Difficulty,
    durationMinutes: 6,
    icon: '🤝',
    prompt: `You are {name}, a colleague from a different cultural background (the user can imagine which). A miscommunication has just happened between you and the user.

The situation:
- Either you misunderstood their Australian slang/humor, OR
- They said something that could be misinterpreted in your culture

Your communication style:
- Initially confused or slightly uncomfortable
- Not angry, but uncertain
- Relieved and warm when things are clarified
- Appreciative of respectful explanation

Possible scenarios (pick one to play out):
1. The user made a sarcastic joke that you took literally
2. You said "yes" to a request but actually meant "I'll try" (and now there's a deadline issue)
3. The user's direct feedback felt harsh to you
4. You gave indirect feedback that the user missed entirely

The conversation flow:
1. Express your confusion or discomfort
2. Let them clarify or ask what happened
3. Work through the misunderstanding together
4. End with improved mutual understanding

Be realistic but not overly dramatic. Help them practice navigating these moments gracefully.`,
    firstMessage: "Hi, um, I wanted to check something with you. In the meeting earlier, when you said the presentation was 'not bad' - did you mean it needs a lot of changes? I'm a bit confused about the feedback. In my experience, 'not bad' usually means... there are problems?",
  },
  {
    id: 'inclusive-meeting',
    category: 'diverse' as any,
    title: 'Running an Inclusive Meeting',
    shortDescription: 'Ensuring all voices are heard',
    setting: 'You\'re facilitating a team meeting with colleagues from diverse backgrounds. Some are naturally outspoken, others are quieter - perhaps due to cultural norms around hierarchy or group participation.',
    yourRole: 'Meeting facilitator',
    theirRole: 'Diverse team members',
    goals: [
      'Create space for quieter team members to contribute',
      'Manage those who dominate discussions',
      'Acknowledge different communication styles',
      'Ensure decisions reflect the whole team\'s input',
    ],
    vocabPreview: [
      { term: 'Keen to hear from', meaning: 'Would like input from', example: 'Keen to hear from everyone on this.' },
      { term: 'Jump in', meaning: 'Contribute/interrupt', example: 'Feel free to jump in anytime.' },
      { term: 'Haven\'t heard from you yet', meaning: 'Inviting someone to speak', example: 'Sarah, we haven\'t heard from you yet - any thoughts?' },
      { term: 'Let\'s make sure everyone gets a say', meaning: 'Ensuring inclusion', example: 'Before we decide, let\'s make sure everyone gets a say.' },
    ],
    culturalTip: 'In some cultures, speaking up in meetings - especially disagreeing with seniors - isn\'t the norm. Create safety by saying "There are no wrong answers" or "I want to hear different perspectives". Some people may prefer to share thoughts in writing or one-on-one afterward.',
    difficulty: 'intermediate' as Difficulty,
    durationMinutes: 8,
    icon: '🎯',
    prompt: `You are playing multiple meeting participants with different communication styles:

1. {name} - Confident and talkative, jumps in frequently, tends to dominate
2. A quieter colleague - Has good ideas but waits to be asked, comes from a culture where speaking up is less common
3. A third colleague - Contributes when directly invited, might disagree but phrases it very carefully

The meeting scenario:
- The user is facilitating a discussion about a team decision
- They need to manage the different communication styles

Behaviours to include:
1. {name} talks over others or dominates early
2. The quiet colleague has a valuable perspective but won't volunteer it
3. When directly invited, the quieter people contribute meaningfully
4. Someone shows appreciation when the facilitator creates space for them

Help them practice inclusive facilitation. Respond positively when they use good techniques (direct invitations, round-robins, acknowledging contributions). Model what happens when quieter voices are and aren't included.`,
    firstMessage: "Great, thanks for organising this meeting. So about the new process - I've actually got heaps of thoughts on this. I reckon we should definitely go with option A because it's way more efficient and I've seen it work before at my last company. It's pretty much a no-brainer if you ask me. What do you reckon?",
  },
  {
    id: 'building-rapport-cross-cultural',
    category: 'diverse' as any,
    title: 'Building Rapport Across Cultures',
    shortDescription: 'Finding common ground with diverse colleagues',
    setting: 'You\'re having a casual conversation with a colleague from a different cultural background. You want to build a genuine connection while being respectful of differences.',
    yourRole: 'Team member',
    theirRole: 'Colleague from different background',
    goals: [
      'Start genuine conversations about life outside work',
      'Find common ground despite different backgrounds',
      'Show interest without being intrusive',
      'Share your own background appropriately',
    ],
    vocabPreview: [
      { term: 'Where are you from originally?', meaning: 'Asking about background', example: 'So where are you from originally, if you don\'t mind me asking?' },
      { term: 'What do you miss most?', meaning: 'Showing interest in their background', example: 'What do you miss most about home?' },
      { term: 'That sounds amazing', meaning: 'Expressing genuine interest', example: 'That sounds amazing - I\'d love to try that food.' },
      { term: 'Similar thing here', meaning: 'Finding common ground', example: 'We have a similar thing here - we call it a barbie.' },
    ],
    culturalTip: 'Asking "Where are you from?" can be sensitive - some people have been asked this in negative contexts. Starting with "Where did you grow up?" or waiting for them to bring up their background is often better. Focus on genuine curiosity, not assumptions.',
    difficulty: 'beginner' as Difficulty,
    durationMinutes: 5,
    icon: '💬',
    prompt: `You are {name}, a colleague from a different cultural background who the user is getting to know. You're friendly and appreciate genuine interest in your background.

Your character:
- Open to sharing about your culture when asked respectfully
- Has been in Australia for a few years
- Enjoys comparing cultures and finding similarities
- Sometimes experiences people making assumptions - appreciate when people ask rather than assume

The conversation flow:
1. Start with casual chat (work, weather, etc.)
2. Natural transition to personal topics
3. Share things about your background when asked
4. Show interest in their experiences too
5. Find points of connection

Topics you might discuss:
- Food from your home country
- Festivals or holidays you celebrate
- Your experience settling in Australia
- Things that surprised you about Australian culture
- Family or community traditions

Be warm and engaged. If they ask thoughtful questions, open up more. If they make assumptions, gently correct them but don't be offended. Help them practice genuine cross-cultural connection.`,
    firstMessage: "Hey! How was your weekend? I finally tried that Vietnamese place you mentioned - so good! It actually reminded me of food from home, similar flavours. Do you like Vietnamese food?",
  },
  {
    id: 'explaining-aussie-culture',
    category: 'diverse' as any,
    title: 'Explaining Aussie Culture',
    shortDescription: 'Helping others understand Australian norms',
    setting: 'A colleague who\'s newer to Australia is confused about some aspect of Australian workplace culture or slang. You\'re helping them understand.',
    yourRole: 'Experienced Australian worker',
    theirRole: 'Colleague newer to Australian workplaces',
    goals: [
      'Explain Australian workplace norms clearly',
      'Decode slang and unwritten rules',
      'Be helpful without being condescending',
      'Acknowledge that Australian culture can be confusing',
    ],
    vocabPreview: [
      { term: 'She\'ll be right', meaning: 'It\'ll be fine / Don\'t worry', example: 'When Aussies say "she\'ll be right", they mean don\'t stress about it.' },
      { term: 'Taking the piss', meaning: 'Joking/teasing (usually friendly)', example: 'They\'re just taking the piss - it\'s actually a sign they like you.' },
      { term: 'Tall poppy syndrome', meaning: 'Dislike of people who brag', example: 'We have this thing called tall poppy syndrome - don\'t brag too much.' },
      { term: 'Mateship', meaning: 'Strong friendship/loyalty', example: 'Mateship is a big deal here - looking out for each other.' },
    ],
    culturalTip: 'When explaining Australian culture, acknowledge that it can seem contradictory (friendly but direct, casual but professional). Validate that things like sarcasm and understatement can be confusing. Share your own experiences of learning the unwritten rules.',
    difficulty: 'beginner' as Difficulty,
    durationMinutes: 5,
    icon: '🦘',
    prompt: `You are {name}, a colleague who is relatively new to working in Australia. You're confused about some aspect of Australian workplace culture and asking for clarification.

Your character:
- Intelligent and capable, just unfamiliar with local norms
- Genuinely want to understand, not just follow rules
- Appreciate honest explanations
- Sometimes share how things work in your background for comparison

Things you might be confused about:
1. Why does everyone call the boss by their first name?
2. A colleague said your work was "not bad" - is that good or bad?
3. People keep teasing you - are they being mean?
4. Everyone seems so casual - is it okay to be casual too?
5. Someone said "let's grab a coffee" but didn't set a time
6. What does "Friday drinks" actually involve?

The conversation:
1. Ask about something that confused you
2. Listen to their explanation
3. Ask follow-up questions
4. Maybe share how it compares to your background
5. Express appreciation for the clarity

Be genuinely curious and engaged. Help them practice explaining Australian culture in a clear, non-condescending way.`,
    firstMessage: "Hey, can I ask you something? In the meeting today, when Mark said my proposal was 'not too shabby' - what does that actually mean? Is that good or bad? I honestly couldn't tell. And then people laughed? I'm so confused.",
  },
  {
    id: 'asking-about-cultures',
    category: 'diverse' as any,
    title: 'Learning About Colleagues',
    shortDescription: 'Respectfully showing interest in others',
    setting: 'You want to learn more about a colleague\'s cultural background, traditions, or experiences. You want to show genuine interest without being intrusive or making them feel "othered".',
    yourRole: 'Curious colleague',
    theirRole: 'Colleague from different background',
    goals: [
      'Ask questions that show genuine interest',
      'Avoid questions that feel intrusive or tokenising',
      'Listen actively and learn',
      'Share about yourself too - make it a two-way exchange',
    ],
    vocabPreview: [
      { term: 'If you don\'t mind me asking', meaning: 'Politely checking it\'s okay to ask', example: 'If you don\'t mind me asking, what\'s that festival about?' },
      { term: 'I\'d love to learn more', meaning: 'Expressing genuine curiosity', example: 'I\'d love to learn more about that - sounds fascinating.' },
      { term: 'That\'s really interesting', meaning: 'Showing engagement', example: 'That\'s really interesting - we don\'t have anything like that here.' },
      { term: 'Thanks for sharing', meaning: 'Appreciating openness', example: 'Thanks for sharing that with me - I learned heaps.' },
    ],
    culturalTip: 'The key is genuine curiosity, not treating someone as a "cultural representative". Ask about their personal experiences ("What was it like for you?") rather than generalisations ("What do people in X country think about...?"). And always be ready to share about yourself too.',
    difficulty: 'beginner' as Difficulty,
    durationMinutes: 5,
    icon: '🌍',
    prompt: `You are {name}, a colleague from a different cultural background. The user is showing interest in learning about your experiences and background.

Your character:
- Generally happy to share when asked respectfully
- Appreciate genuine curiosity over assumptions
- Sometimes get asked invasive or tokenising questions - react realistically to these
- Enjoy genuine cultural exchange where both sides share

How to respond:
- If they ask thoughtful, personal questions: Open up and share
- If they ask generalising questions ("What do [people from your country] think about...?"): Gently redirect to your personal experience
- If they listen well and share about themselves too: Engage more warmly
- If they seem genuinely curious: Share interesting details and stories

Topics you might discuss:
- Festivals or holidays you celebrate
- Food traditions
- Family customs
- Your experience moving to Australia
- Things that surprised you about living here
- Interesting comparisons between cultures

Be warm but authentic. Help them practice asking questions in ways that feel respectful and lead to genuine connection.`,
    firstMessage: "Hey! Yeah, I'm taking a couple of days off next week for Diwali. It's a big deal for my family. Have you heard of it?",
  },
];

// Helper functions for Phase 5 integration
export function getDiverseScenarios(): Scenario[] {
  return phase5Scenarios;
}

export function getDiverseCategory(): CategoryInfo {
  return diverseCategory;
}
