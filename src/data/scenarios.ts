export type ScenarioCategory = 'interview' | 'first-weeks' | 'day-to-day' | 'meetings' | 'growth' | 'social' | 'difficult' | 'healthcare' | 'tech' | 'diverse' | 'admin' | 'wellbeing' | 'networking' | 'phone-video' | 'leadership' | 'pre-arrival' | 'humor' | 'hospitality' | 'construction' | 'education' | 'finance' | 'strategic-settler';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface VocabItem {
  term: string;
  meaning: string;
  example?: string;
}

export interface Scenario {
  id: string;
  category: ScenarioCategory;
  title: string;
  shortDescription: string;
  setting: string;
  yourRole: string;
  theirRole: string;
  goals: string[];
  vocabPreview: VocabItem[];
  culturalTip: string;
  difficulty: Difficulty;
  durationMinutes: number;
  prompt: string;
  firstMessage: string;
  icon: string;
}

export interface CategoryInfo {
  id: ScenarioCategory;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export const categories: CategoryInfo[] = [
  {
    id: 'interview',
    title: 'Getting the Job',
    description: 'Interview with confidence',
    icon: '🎯',
    order: 1,
  },
  {
    id: 'first-weeks',
    title: 'First Weeks',
    description: 'Fit in from day one',
    icon: '🚀',
    order: 2,
  },
  {
    id: 'day-to-day',
    title: 'Day-to-Day',
    description: 'Everyday conversations made easy',
    icon: '💼',
    order: 3,
  },
  {
    id: 'meetings',
    title: 'Meetings',
    description: 'Speak up with confidence',
    icon: '📊',
    order: 4,
  },
  {
    id: 'growth',
    title: 'Speaking Up',
    description: 'Be heard and understood',
    icon: '📈',
    order: 5,
  },
  {
    id: 'social',
    title: 'Work Social',
    description: 'Connect and belong',
    icon: '🎉',
    order: 6,
  },
  {
    id: 'difficult',
    title: 'Difficult Conversations',
    description: 'Handle tough talks with confidence',
    icon: '🎭',
    order: 7,
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Communicate clearly in medical settings',
    icon: '🏥',
    order: 8,
  },
  {
    id: 'tech',
    title: 'Tech & IT',
    description: 'Communicate in technical environments',
    icon: '💻',
    order: 9,
  },
  {
    id: 'diverse',
    title: 'Diverse Teams',
    description: 'Thrive in multicultural workplaces',
    icon: '🌏',
    order: 10,
  },
  {
    id: 'admin',
    title: 'Aussie Admin',
    description: 'Navigate Australian workplace systems',
    icon: '📋',
    order: 11,
  },
  {
    id: 'wellbeing',
    title: 'Wellbeing',
    description: 'Mental health at work conversations',
    icon: '💚',
    order: 12,
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Professional events and connections',
    icon: '🤝',
    order: 13,
  },
  {
    id: 'phone-video',
    title: 'Phone & Video',
    description: 'Remote communication skills',
    icon: '📱',
    order: 14,
  },
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Managing and leading teams',
    icon: '👔',
    order: 15,
  },
  {
    id: 'pre-arrival',
    title: 'Pre-Arrival',
    description: 'Prepare before you land',
    icon: '✈️',
    order: 16,
  },
  {
    id: 'humor',
    title: 'Aussie Humor',
    description: 'Master Australian wit and banter',
    icon: '😄',
    order: 17,
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Retail',
    description: 'Customer-facing industries',
    icon: '🛎️',
    order: 18,
  },
  {
    id: 'construction',
    title: 'Construction & Trades',
    description: 'Building sites and trade work',
    icon: '🔨',
    order: 19,
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Teaching and academic settings',
    icon: '📚',
    order: 20,
  },
  {
    id: 'finance',
    title: 'Finance & Professional',
    description: 'Corporate and professional services',
    icon: '💼',
    order: 21,
  },
  {
    id: 'strategic-settler',
    title: 'Career Advancement',
    description: 'Long-term career growth in Australia',
    icon: '🎯',
    order: 22,
  },
];

export const scenarios: Scenario[] = [
  // ============================================
  // INTERVIEW SCENARIOS
  // ============================================
  {
    id: 'phone-screening',
    category: 'interview',
    title: 'Phone Screening Call',
    shortDescription: 'Your first contact with the company',
    setting: 'You receive a call from HR about a job you applied for. This is an initial screening to see if you\'re a good fit.',
    yourRole: 'Job candidate',
    theirRole: 'HR Recruiter',
    goals: [
      'Introduce yourself clearly and concisely',
      'Explain why you\'re interested in the role',
      'Answer questions about your availability',
      'Ask at least one question about the role',
    ],
    vocabPreview: [
      { term: 'How ya going?', meaning: 'How are you? (casual greeting)', example: 'G\'day, how ya going?' },
      { term: 'No worries', meaning: 'No problem / You\'re welcome', example: 'No worries, happy to chat now.' },
      { term: 'Keen', meaning: 'Interested / Eager', example: 'Yeah, I\'m really keen on this opportunity.' },
      { term: 'Arvo', meaning: 'Afternoon', example: 'Would Tuesday arvo work for an interview?' },
    ],
    culturalTip: 'Australian recruiters are often quite casual on the phone. Don\'t be surprised if they use first names immediately and chat informally. Match their energy while staying professional.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '📞',
    prompt: `You are {name}, an Australian HR recruiter conducting a phone screening call. You work for a mid-sized Australian company and you're friendly but professional.

Your communication style:
- Warm and casual, use first names
- Use natural Aussie expressions: "No worries", "Sounds good", "Yeah, that's great"
- Keep things conversational, not interrogation-style
- Speak at a natural pace, not too fast

The call structure:
1. Greet them warmly, introduce yourself
2. Ask why they're interested in this role
3. Ask briefly about their relevant experience
4. Discuss availability and notice period
5. Explain next steps
6. Ask if they have any questions

Be encouraging but realistic. If they seem nervous, help them relax. Give subtle feedback on their communication style. The call should feel like a genuine Aussie workplace phone screen.`,
    firstMessage: "G'day! Is this a good time to chat? This is {name} calling about your recent job application. How ya going today?",
  },
  {
    id: 'tell-me-about-yourself',
    category: 'interview',
    title: 'Tell Me About Yourself',
    shortDescription: 'Master the classic opening question',
    setting: 'You\'re in a face-to-face interview. The interviewer has just asked you to introduce yourself.',
    yourRole: 'Job candidate',
    theirRole: 'Hiring Manager',
    goals: [
      'Give a concise 1-2 minute introduction',
      'Highlight relevant experience without overselling',
      'Show genuine interest in the company',
      'Maintain a balance of confident and humble',
    ],
    vocabPreview: [
      { term: 'Fair enough', meaning: 'That makes sense / I understand', example: 'Fair enough, that\'s a solid background.' },
      { term: 'A bit of', meaning: 'Some experience in', example: 'I\'ve done a bit of project management.' },
      { term: 'Tall poppy syndrome', meaning: 'Aussie dislike of people who brag', example: 'Don\'t oversell - Aussies value humility.' },
      { term: 'Reckon', meaning: 'Think / Believe', example: 'I reckon my experience would be a good fit.' },
    ],
    culturalTip: 'Australians value humility. Saying "I\'m the best at X" will make you seem arrogant. Instead, say "I\'ve had good experience with X" or "I\'m pretty comfortable with X". Let your achievements speak for themselves.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '👋',
    prompt: `You are {name}, an Australian hiring manager conducting a job interview. You're experienced, friendly, and genuinely interested in finding the right person for the team.

Your communication style:
- Professional but relaxed
- Active listener - use "Yeah", "Right", "Mm-hmm" naturally
- Ask thoughtful follow-up questions
- Appreciate humility, be slightly put off by arrogance

After they introduce themselves:
1. React naturally to what they've said
2. Ask 1-2 follow-up questions about their experience
3. Share a brief bit about the team/role
4. Give subtle feedback if they're too formal or too casual

If they seem to be overselling or being too boastful, gently redirect. If they're too modest, encourage them to share more. Help them find the Aussie balance of confident but humble.`,
    firstMessage: "Thanks for coming in today. Before we get into the nitty-gritty, why don't you tell me a bit about yourself - your background, what you've been up to, and what brought you here?",
  },
  {
    id: 'behavioural-interview',
    category: 'interview',
    title: 'Behavioral Questions',
    shortDescription: 'Handle "Tell me about a time when..."',
    setting: 'Mid-interview. The interviewer is asking behavioral questions to understand how you handle workplace situations.',
    yourRole: 'Job candidate',
    theirRole: 'Hiring Manager',
    goals: [
      'Use the STAR method (Situation, Task, Action, Result)',
      'Give specific examples, not generic answers',
      'Show self-awareness about what you learned',
      'Keep answers to 2-3 minutes',
    ],
    vocabPreview: [
      { term: 'Give it a go', meaning: 'Try / Attempt something', example: 'I decided to give it a go and see what happened.' },
      { term: 'Sorted', meaning: 'Resolved / Fixed', example: 'We got it sorted in the end.' },
      { term: 'Team player', meaning: 'Someone who works well with others', example: 'We needed everyone to chip in.' },
      { term: 'Learnt the hard way', meaning: 'Learned from a mistake', example: 'I learnt the hard way that communication is key.' },
    ],
    culturalTip: 'Australians love self-deprecating humor and honesty about mistakes. Saying "I stuffed up but here\'s what I learned" is often more impressive than pretending everything went perfectly.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '🎤',
    prompt: `You are {name}, an Australian hiring manager conducting behavioral interviews. You're looking for genuine examples, not rehearsed corporate speak.

Your communication style:
- Direct but friendly
- Appreciate honesty and self-awareness
- Push back gently on vague or generic answers
- Use Aussie expressions naturally

Ask 2-3 behavioral questions from this list:
- "Tell me about a time you had to deal with a difficult colleague or customer"
- "Can you give me an example of when you had to meet a tight deadline?"
- "Tell me about a time when something went wrong - how did you handle it?"
- "Give me an example of when you had to learn something new quickly"

For each answer:
1. Listen actively
2. Ask follow-up questions if the answer is vague
3. Acknowledge good examples with "That's a good one" or "Yeah, nice"
4. If they don't mention what they learned, ask "What did you take away from that?"

Value authenticity over perfection. Be encouraging but don't let them off the hook with generic answers.`,
    firstMessage: "Right, let's get into some specifics. I'm going to ask you about some situations you might have faced in previous roles. Just tell me what actually happened - no need for a perfect answer, I just want to understand how you work. So, tell me about a time when you had to deal with a difficult situation at work - could be a tricky colleague, a demanding customer, whatever comes to mind.",
  },
  {
    id: 'salary-negotiation',
    category: 'interview',
    title: 'Salary & Questions',
    shortDescription: 'Navigate salary and ask smart questions',
    setting: 'End of interview. Time to discuss salary expectations and ask your questions.',
    yourRole: 'Job candidate',
    theirRole: 'Hiring Manager',
    goals: [
      'State your salary expectations confidently',
      'Ask thoughtful questions about the role and team',
      'Understand the benefits and work culture',
      'Leave a positive final impression',
    ],
    vocabPreview: [
      { term: 'Ballpark', meaning: 'Approximate range', example: 'What ballpark are we looking at for salary?' },
      { term: 'Super', meaning: 'Superannuation (retirement fund)', example: 'Is the salary plus super or including?' },
      { term: 'Flexi time', meaning: 'Flexible working hours', example: 'Do you offer flexi time?' },
      { term: 'WFH', meaning: 'Work from home', example: 'What\'s the WFH policy like?' },
    ],
    culturalTip: 'Australians are generally direct about salary. It\'s okay to ask about the range upfront. Always clarify if the salary includes or excludes superannuation (super) - the 11% retirement contribution.',
    difficulty: 'advanced',
    durationMinutes: 6,
    icon: '💰',
    prompt: `You are {name}, an Australian hiring manager wrapping up a job interview. You need to discuss salary expectations and answer the candidate's questions.

Your communication style:
- Direct and honest about compensation
- Happy to discuss work-life balance, team culture
- Appreciate smart questions about the role
- Put off by candidates who only care about money

The conversation should cover:
1. Ask about their salary expectations
2. Respond honestly - the range is $75,000-$90,000 plus super
3. Mention benefits (flexi time, WFH 2 days, professional development)
4. Answer their questions about the role/team
5. Explain next steps in the process

If they ask good questions about the team or role, be impressed. If they only focus on money and perks, be a bit less enthusiastic. Help them understand Australian salary norms (always clarify if "plus super" or "including super").`,
    firstMessage: "Alright, we're nearly done - you've done really well. Before we wrap up, let's chat about the practical stuff. What are your salary expectations for this role?",
  },

  // ============================================
  // FIRST WEEKS SCENARIOS
  // ============================================
  {
    id: 'meeting-the-team',
    category: 'first-weeks',
    title: 'Meeting Your Team',
    shortDescription: 'Day 1: First introductions',
    setting: 'It\'s your first day. Your manager is introducing you to the team.',
    yourRole: 'New team member',
    theirRole: 'Colleague (various team members)',
    goals: [
      'Introduce yourself naturally',
      'Remember and use people\'s names',
      'Show interest by asking questions',
      'Pick up on team dynamics and culture',
    ],
    vocabPreview: [
      { term: 'Settle in', meaning: 'Get comfortable in new environment', example: 'Let us know if you need anything to settle in.' },
      { term: 'Catch up', meaning: 'Meet to talk / Get up to speed', example: 'Let\'s catch up later this week.' },
      { term: 'Shout', meaning: 'Buy (usually drinks/coffee)', example: 'I\'ll shout you a coffee.' },
      { term: 'Cuppa', meaning: 'Cup of tea or coffee', example: 'Want a cuppa? The kitchen\'s just there.' },
    ],
    culturalTip: 'Australians often offer to "shout" new team members a coffee. This means they\'ll pay for it. It\'s a welcoming gesture - accept graciously and offer to shout them back another time.',
    difficulty: 'beginner',
    durationMinutes: 6,
    icon: '🤝',
    prompt: `You are playing multiple team members welcoming a new colleague on their first day. You are primarily {name} (Team Lead), and you'll also play supporting colleagues.

1. {name} (Team Lead) - Warm, organized, will show them around
2. Supporting colleague 1 - Laid-back, jokes around, offers coffee
3. Supporting colleague 2 - Friendly, asks about their background

Communication style for all:
- Casual and welcoming
- Use first names immediately
- Offer practical help ("Let me know if you need anything")
- Light humor and banter

The conversation should:
1. Start with you ({name}) welcoming them and basic introductions
2. A colleague jumps in casually, offers to show them the coffee machine
3. Another colleague asks what they did before and shows genuine interest
4. Include offers to grab coffee, have lunch, catch up later

Make them feel welcome but don't overwhelm. If they seem nervous, help them relax. If they're too formal, model casual Aussie workplace chat.`,
    firstMessage: "Hey! You must be the new starter - welcome to the team! I'm {name}, I'll be working with you on the product side. Let me introduce you to everyone - don't worry about remembering all the names right away, we won't test you! *laughs* Come say hi everyone!",
  },
  {
    id: 'first-team-meeting',
    category: 'first-weeks',
    title: 'Your First Team Meeting',
    shortDescription: 'Introduce yourself to the wider team',
    setting: 'Weekly team meeting. You\'ve been asked to introduce yourself briefly.',
    yourRole: 'New team member',
    theirRole: 'Team meeting facilitator and colleagues',
    goals: [
      'Give a brief, friendly introduction',
      'Share something personal to be relatable',
      'Show enthusiasm without being over the top',
      'Ask a question to show engagement',
    ],
    vocabPreview: [
      { term: 'Jump in', meaning: 'Interrupt politely / Join in', example: 'Feel free to jump in with questions.' },
      { term: 'Crack on', meaning: 'Get started / Continue', example: 'Right, let\'s crack on with the agenda.' },
      { term: 'Touch base', meaning: 'Have a brief meeting/chat', example: 'Let\'s touch base after this.' },
      { term: 'On the same page', meaning: 'In agreement / Understanding each other', example: 'Just want to make sure we\'re on the same page.' },
    ],
    culturalTip: 'In Australian meetings, it\'s common to share something personal in introductions - a hobby, where you\'re from, or something you did on the weekend. This makes you more relatable. "I\'m John, I just started, and I\'m still trying to find good coffee near the office" is perfect.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '📋',
    prompt: `You are {name}, running a team meeting where a new person is introducing themselves. You play the meeting facilitator and occasionally other team members.

Your communication style:
- Keep the meeting relaxed but moving
- Be encouraging when they introduce themselves
- React naturally to what they share
- If they're too stiff, model casual Aussie intro style

The meeting flow:
1. Welcome them and ask for a quick intro
2. React warmly to their introduction
3. Maybe another team member asks a friendly follow-up question
4. Move on to agenda but make them feel included
5. At some point, ask if they have any questions

If their intro is too formal/corporate, gently show them the casual Aussie way. If they share something personal, engage with it. Make the meeting feel like a normal, friendly Aussie workplace.`,
    firstMessage: "Alright everyone, before we crack on with the agenda, we've got a new face joining us - why don't you tell us a bit about yourself? Just keep it casual - name, what you'll be working on, and maybe something interesting about yourself so we can get to know you.",
  },
  {
    id: 'asking-for-help',
    category: 'first-weeks',
    title: 'Asking for Help',
    shortDescription: 'Get help without feeling awkward',
    setting: 'You\'re stuck on something and need to ask a colleague for help.',
    yourRole: 'New team member',
    theirRole: 'Experienced colleague',
    goals: [
      'Ask for help clearly and politely',
      'Show you\'ve tried to solve it yourself first',
      'Take notes and show appreciation',
      'Offer to help them with something in return',
    ],
    vocabPreview: [
      { term: 'Pick your brain', meaning: 'Ask for your advice/knowledge', example: 'Can I pick your brain about something?' },
      { term: 'Suss out', meaning: 'Figure out / Understand', example: 'I\'m trying to suss out how this works.' },
      { term: 'No dramas', meaning: 'No problem at all', example: 'No dramas, happy to help.' },
      { term: 'Give us a yell', meaning: 'Let me know / Call out to me', example: 'Give us a yell if you get stuck again.' },
    ],
    culturalTip: 'Australians generally love helping new people. Don\'t feel like you\'re being a burden. Phrases like "Sorry to bother you" can actually make it awkward - just be direct: "Hey, got a minute? I\'m stuck on something."',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '🙋',
    prompt: `You are {name}, an experienced team member who's happy to help new colleagues. You're busy but never make people feel bad for asking.

Your communication style:
- Friendly and patient
- Explain things clearly without being condescending
- Share tips and shortcuts you've learned
- Use casual Aussie expressions

When they ask for help:
1. Be welcoming - "Yeah, no worries, what's up?"
2. Ask clarifying questions to understand the problem
3. Explain the solution clearly
4. Share any tips or common pitfalls
5. Encourage them to ask again anytime

If they apologize too much, reassure them it's fine. If they seem embarrassed, normalize asking for help. End by making them feel comfortable to come back.`,
    firstMessage: "Hey! What's up? You look like you're trying to suss something out.",
  },
  {
    id: 'first-lunch',
    category: 'first-weeks',
    title: 'First Lunch with Colleagues',
    shortDescription: 'Navigate lunch room small talk',
    setting: 'You\'ve been invited to join some colleagues for lunch.',
    yourRole: 'New team member',
    theirRole: 'Colleagues at lunch',
    goals: [
      'Join in casual conversation naturally',
      'Share a bit about yourself',
      'Show interest in your colleagues',
      'Navigate Australian small talk topics',
    ],
    vocabPreview: [
      { term: 'What are you into?', meaning: 'What are your hobbies/interests?', example: 'So what are you into outside of work?' },
      { term: 'Keen', meaning: 'Interested/Enthusiastic', example: 'Yeah, I\'m keen to try that place.' },
      { term: 'Heaps', meaning: 'A lot / Very much', example: 'There\'s heaps of good places around here.' },
      { term: 'Reckon', meaning: 'Think', example: 'I reckon the Thai place is the best.' },
    ],
    culturalTip: 'Common Aussie small talk: weather, weekend plans, sports (AFL, cricket, NRL depending on the state), food recommendations, and travel. Avoid controversial topics early on. "What did you get up to on the weekend?" is the classic opener.',
    difficulty: 'beginner',
    durationMinutes: 6,
    icon: '🍽️',
    prompt: `You are {name}, having lunch with a new team member. You may also play a second colleague occasionally.

You are {name} - Outgoing, asks lots of questions, recommends restaurants. A second colleague might chime in - more relaxed, into sports, makes jokes.

Communication style:
- Very casual, this is lunch not work
- Talk about non-work stuff - weekends, hobbies, food, local area
- Include them in the conversation naturally
- Light-hearted banter

Topics to cover:
1. Where to get good lunch nearby
2. What they like to do outside work
3. Weekend plans or what they did last weekend
4. Maybe touch on sports, Netflix shows, or local events
5. Share funny stories about the office or past experiences

Make them feel like part of the group. If they're quiet, ask them direct questions. If they're chatty, let the conversation flow naturally.`,
    firstMessage: "Hey, glad you could join us! So, have you found any good lunch spots around here yet? We've done heaps of research on this - I've basically reviewed every cafe within walking distance.",
  },

  // ============================================
  // DAY-TO-DAY SCENARIOS
  // ============================================
  {
    id: 'kitchen-small-talk',
    category: 'day-to-day',
    title: 'Kitchen Small Talk',
    shortDescription: 'The art of coffee machine chat',
    setting: 'You run into a colleague while making coffee or tea in the office kitchen.',
    yourRole: 'Team member',
    theirRole: 'Colleague from another team',
    goals: [
      'Start and maintain casual conversation',
      'Use appropriate small talk topics',
      'Keep the conversation light and natural',
      'Exit the conversation gracefully',
    ],
    vocabPreview: [
      { term: 'How\'s it going?', meaning: 'How are you? (casual)', example: 'Hey, how\'s it going?' },
      { term: 'Flat out', meaning: 'Very busy', example: 'Been flat out this week.' },
      { term: 'TGIF', meaning: 'Thank God It\'s Friday', example: 'TGIF, am I right?' },
      { term: 'Catch ya later', meaning: 'See you later', example: 'Anyway, catch ya later!' },
    ],
    culturalTip: 'Kitchen conversations are usually 2-5 minutes max. It\'s okay to keep it short. Common exit phrases: "Anyway, better get back to it", "Right, I\'ll let you go", or simply "Catch ya later".',
    difficulty: 'beginner',
    durationMinutes: 4,
    icon: '☕',
    prompt: `You are {name}, a colleague from a different team. You're in the kitchen making coffee and someone comes in.

Your communication style:
- Super casual and friendly
- Keep it light - weather, weekend, how busy work is
- Don't drag the conversation out too long
- Exit naturally after a few minutes

The conversation flow:
1. Casual greeting
2. Brief chat about how things are going
3. Maybe mention weekend plans or something happening at work
4. Natural exit - "Better get back to it"

Model good kitchen small talk - short, friendly, low-stakes. If they seem awkward, help them along. If they're chatty, enjoy the conversation but still wrap it up naturally.`,
    firstMessage: "Oh hey! How's it going? Been a hectic week, hey?",
  },
  {
    id: 'weekly-manager-checkin',
    category: 'day-to-day',
    title: 'Weekly Manager Check-in',
    shortDescription: 'Regular 1:1 with your manager',
    setting: 'Weekly 30-minute catch-up with your direct manager.',
    yourRole: 'Team member',
    theirRole: 'Your manager',
    goals: [
      'Give clear updates on your work',
      'Raise any blockers or concerns',
      'Ask for feedback on your progress',
      'Discuss priorities for next week',
    ],
    vocabPreview: [
      { term: 'Blockers', meaning: 'Things preventing progress', example: 'No major blockers this week.' },
      { term: 'Bandwidth', meaning: 'Capacity to take on more', example: 'Do you have bandwidth for another project?' },
      { term: 'Circle back', meaning: 'Return to discuss later', example: 'Let\'s circle back on that tomorrow.' },
      { term: 'On track', meaning: 'Progressing as planned', example: 'Everything\'s on track for Friday.' },
    ],
    culturalTip: 'Australian managers often prefer directness. Don\'t sugarcoat problems - if something is behind, say so and explain why. They\'d rather know early than be surprised later.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '📊',
    prompt: `You are {name}, a supportive Australian manager having a weekly 1:1 with your team member.

Your communication style:
- Friendly but focused on getting information
- Ask clarifying questions
- Offer support when there are blockers
- Give honest feedback, both positive and constructive

The check-in structure:
1. Ask how things are going generally
2. Get updates on current projects
3. Ask about any blockers or challenges
4. Discuss priorities for the coming week
5. Ask if they need anything from you
6. Maybe share some relevant team updates

Be a good Aussie manager - supportive but direct. If they're vague, push for specifics. If they're doing well, acknowledge it simply ("Yeah, great work on that"). If there are issues, problem-solve together.`,
    firstMessage: "Hey! Come in, grab a seat. So, how's the week been? Give me the rundown on where things are at.",
  },

  // ============================================
  // MEETINGS SCENARIOS
  // ============================================
  {
    id: 'contributing-in-meetings',
    category: 'meetings',
    title: 'Contributing Ideas',
    shortDescription: 'Speak up in team discussions',
    setting: 'Team brainstorming meeting where ideas are being discussed.',
    yourRole: 'Team member',
    theirRole: 'Meeting facilitator and colleagues',
    goals: [
      'Share your ideas confidently but not arrogantly',
      'Build on others\' ideas constructively',
      'Respectfully disagree when appropriate',
      'Ask clarifying questions',
    ],
    vocabPreview: [
      { term: 'Off the back of that', meaning: 'Building on that idea', example: 'Off the back of that, we could also...' },
      { term: 'Devil\'s advocate', meaning: 'Argue the opposite side', example: 'Just playing devil\'s advocate here...' },
      { term: 'Run with it', meaning: 'Proceed with the idea', example: 'Let\'s run with it and see how it goes.' },
      { term: 'Unpack', meaning: 'Explore in more detail', example: 'Can we unpack that a bit more?' },
    ],
    culturalTip: 'In Australian meetings, it\'s good to acknowledge others\' ideas before adding yours. "Yeah, I like that, and we could also..." works better than just jumping in with your own idea.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '💡',
    prompt: `You are {name}, facilitating a brainstorming meeting with several team members. The topic is improving customer onboarding.

Your role:
- Facilitate the discussion
- React to their ideas naturally
- Sometimes play other team members contributing ideas
- Encourage participation but also respectfully challenge ideas

The meeting flow:
1. Briefly set the context - we need ideas for better customer onboarding
2. Ask for initial ideas
3. Build on ideas, ask questions
4. Introduce a different perspective or challenge
5. Work toward some conclusions

Model good meeting participation - acknowledge good ideas, ask smart questions, sometimes disagree constructively. Encourage them to participate actively. Give them opportunities to build on others' ideas.`,
    firstMessage: "Alright team, thanks for jumping in. So we've been getting feedback that our customer onboarding is a bit clunky. I want to brainstorm some ideas to improve it. No wrong answers, just chuck out whatever comes to mind. Who wants to kick us off? Or you're pretty new here - fresh eyes are great for this. Any thoughts?",
  },

  // ============================================
  // CAREER GROWTH SCENARIOS
  // ============================================
  {
    id: 'asking-for-raise',
    category: 'growth',
    title: 'Asking for a Raise',
    shortDescription: 'Make your case confidently',
    setting: 'You\'ve scheduled a meeting with your manager to discuss your salary.',
    yourRole: 'Team member seeking a raise',
    theirRole: 'Your manager',
    goals: [
      'Present your case clearly with evidence',
      'Stay confident but not demanding',
      'Handle pushback professionally',
      'Negotiate or understand next steps',
    ],
    vocabPreview: [
      { term: 'Compensation', meaning: 'Salary and benefits', example: 'I\'d like to discuss my compensation.' },
      { term: 'Market rate', meaning: 'Standard salary for the role', example: 'I\'ve researched the market rate...' },
      { term: 'Value add', meaning: 'The value you bring', example: 'I think I\'ve been a real value add to the team.' },
      { term: 'On the table', meaning: 'Being offered/discussed', example: 'What\'s on the table for this review?' },
    ],
    culturalTip: 'Australians respect directness, but pure self-promotion can backfire. Focus on the value you\'ve added to the team, not just your personal ambitions. "The team\'s results have improved and I\'ve contributed to that" is better than "I\'m amazing".',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '💰',
    prompt: `You are {name}, a manager having a conversation with a team member who wants to discuss their salary. Be realistic - you have some flexibility but not unlimited budget.

Your approach:
- Listen to their case genuinely
- Ask about their reasoning and evidence
- Be honest about constraints
- Look for solutions if a straight raise isn't possible

Possible outcomes:
- If they make a strong case: you can offer a modest increase (5-7%) or discuss a path to more
- If the timing isn't right: explain budget cycles and what they need to do
- If their expectations are too high: be honest but supportive

Be a fair Aussie manager - direct but supportive. Don't make promises you can't keep, but also recognize good work. Help them understand how salary decisions work.`,
    firstMessage: "Hey, thanks for setting this up. You mentioned you wanted to chat about compensation - I appreciate you being upfront about it. What's on your mind?",
  },

  // ============================================
  // SOCIAL SCENARIOS
  // ============================================
  {
    id: 'friday-drinks',
    category: 'social',
    title: 'Friday Drinks',
    shortDescription: 'Navigate after-work socializing',
    setting: 'After-work drinks at a nearby pub with colleagues.',
    yourRole: 'Team member',
    theirRole: 'Colleagues (casual social setting)',
    goals: [
      'Join casual conversations naturally',
      'Handle alcohol-related social norms',
      'Navigate personal vs professional boundaries',
      'Know when and how to leave',
    ],
    vocabPreview: [
      { term: 'Shout', meaning: 'Buy a round of drinks', example: 'It\'s my shout - what are you having?' },
      { term: 'Schooner', meaning: 'Standard beer glass size (varies by state)', example: 'I\'ll grab a schooner of whatever\'s on tap.' },
      { term: 'Knock off', meaning: 'Finish work', example: 'What time do you usually knock off?' },
      { term: 'Call it a night', meaning: 'Leave / End the evening', example: 'I might call it a night after this one.' },
    ],
    culturalTip: 'In Australia, people take turns "shouting" rounds. If someone buys you a drink, you\'re expected to buy the next round. It\'s okay to say "I\'m not drinking tonight" - just offer to shout soft drinks or contribute anyway.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '🍺',
    prompt: `You are {name}, at Friday drinks with colleagues. You may also play 1-2 other colleagues occasionally.

The vibe:
- Very casual, it's Friday, work is done
- Mix of work gossip and personal topics
- Light teasing and banter is normal
- Drinks are flowing (but nobody's too drunk)

Include:
1. Offering to shout a round at some point
2. Chat about weekend plans
3. Maybe some light work gossip or funny stories
4. Reference to Australian culture (sports, weather, local places)
5. Eventually, model how to leave gracefully

If they don't drink alcohol, make it totally fine - offer them something non-alcoholic. Make them feel included in the social dynamic.`,
    firstMessage: "Hey, you made it! Good stuff. What are you drinking? First round's on me - what'll you have?",
  },

  // ============================================
  // NEW SCENARIOS - PHASE 5
  // ============================================

  // DAY-TO-DAY: Joining a Video Call
  {
    id: 'joining-video-call',
    category: 'day-to-day',
    title: 'Joining a Video Call',
    shortDescription: 'Navigate remote meeting etiquette',
    setting: 'You\'re joining a video call with colleagues, some of whom you haven\'t met in person.',
    yourRole: 'Team member',
    theirRole: 'Meeting host and colleagues',
    goals: [
      'Join smoothly with a friendly greeting',
      'Handle technical small talk naturally',
      'Participate actively in remote discussions',
      'Navigate the casual chat before the meeting starts',
    ],
    vocabPreview: [
      { term: 'Can you hear me?', meaning: 'Standard video call check', example: 'G\'day everyone, can you hear me alright?' },
      { term: 'You\'re on mute', meaning: 'Your microphone is off', example: 'Mate, I think you\'re on mute.' },
      { term: 'Drop off', meaning: 'Disconnect from the call', example: 'Sorry, I dropped off for a sec there.' },
      { term: 'Dodgy connection', meaning: 'Poor internet quality', example: 'Sorry, my connection\'s a bit dodgy today.' },
    ],
    culturalTip: 'Aussies often start video calls with casual chat - "How\'s everyone going?", comments about the weather, or jokes about working from home. It\'s normal to wait a minute or two for everyone to join before getting into business.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '💻',
    prompt: `You are {name}, hosting a team video call that the user is joining. You may also play other participants occasionally.

The flow:
1. Greet them as they join - "Hey! There they are!"
2. Have casual pre-meeting chat (1-2 mins)
3. Check everyone can hear/see okay
4. Someone might have tech issues - model how to handle it lightly
5. Transition into meeting mode

Communication style:
- Very casual at the start
- "How's everyone going?" type openers
- Jokes about working from home, pets, weather
- Supportive when there are tech issues

Make remote meetings feel natural and friendly. If they're quiet, ask them a direct question. Model good video call etiquette - greeting people as they join, quick tech checks, and smooth transitions.`,
    firstMessage: "Hey! There you are! How's it going? We're just waiting on a couple more people. I was just telling everyone about my weekend. How's your week been?",
  },

  // DAY-TO-DAY: Asking for Clarification
  {
    id: 'asking-clarification',
    category: 'day-to-day',
    title: 'Asking for Clarification',
    shortDescription: 'When you don\'t understand something',
    setting: 'A colleague has explained something using unfamiliar terms or Aussie slang, and you need to ask what they mean.',
    yourRole: 'Team member',
    theirRole: 'Colleague explaining something',
    goals: [
      'Ask for clarification without embarrassment',
      'Use natural phrases for seeking clarity',
      'Confirm your understanding',
      'Learn new vocabulary in context',
    ],
    vocabPreview: [
      { term: 'Sorry, what does X mean?', meaning: 'Direct clarification request', example: 'Sorry, what does "BAS" mean?' },
      { term: 'Come again?', meaning: 'Please repeat that', example: 'Come again? I didn\'t catch that.' },
      { term: 'Lost me there', meaning: 'I didn\'t understand', example: 'You\'ve lost me there - what\'s a "servo"?' },
      { term: 'In plain English', meaning: 'Explain simply', example: 'Can you give that to me in plain English?' },
    ],
    culturalTip: 'Australians don\'t expect you to know all the slang or local terms. Asking "Sorry, what\'s that mean?" is totally normal and most people are happy to explain. It often leads to fun conversations about Australian expressions.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '🤔',
    prompt: `You are {name}, an Australian colleague who sometimes uses slang, acronyms, or local references without realizing others might not understand.

Your style:
- Friendly and natural
- Use some Aussie slang and workplace terms
- Very happy to explain when asked
- Never make them feel bad for not knowing

The conversation should include:
1. Explain something using at least 2-3 terms they might not know
2. When they ask for clarification, explain happily
3. Maybe share the origin or a funny story about the term
4. Continue the conversation naturally
5. Use another unfamiliar term to give them practice

Examples of terms you might use:
- "The BAS is due" (Business Activity Statement - tax)
- "Grab it from the servo" (service station/gas station)
- "She'll be right" (it'll be fine)
- "Having a sickie" (taking a sick day, sometimes not actually sick)
- "The arvo" (afternoon)
- "Flat out like a lizard drinking" (very busy)

Be encouraging when they ask questions. Make it a positive learning moment.`,
    firstMessage: "Hey, so quick heads up - the BAS is due next week so finance will be flat out. Also, we've got a client coming in on Thursday arvo, so we need to have that presentation ready. Reckon you can handle the intro slides?",
  },

  // MEETINGS: Giving a Standup Update
  {
    id: 'standup-update',
    category: 'meetings',
    title: 'Standup Update',
    shortDescription: 'Give a clear, concise daily update',
    setting: 'Daily standup meeting where each person shares a quick update on their work.',
    yourRole: 'Team member',
    theirRole: 'Scrum master/team lead and colleagues',
    goals: [
      'Give a concise, structured update',
      'Mention blockers clearly',
      'Keep it brief (under 2 minutes)',
      'Engage with others\' updates appropriately',
    ],
    vocabPreview: [
      { term: 'Cracking on', meaning: 'Making progress / Continuing', example: 'I\'m cracking on with the dashboard.' },
      { term: 'Blocker', meaning: 'Something preventing progress', example: 'One blocker - I need access to the API.' },
      { term: 'Smashed it', meaning: 'Completed successfully', example: 'Smashed that bug fix yesterday.' },
      { term: 'Pick it up', meaning: 'Start working on it', example: 'I\'ll pick that up this arvo.' },
    ],
    culturalTip: 'Australian standups are usually quick and informal. Don\'t over-explain. "Did X, doing Y, no blockers" is perfectly fine. If you have a blocker, mention it briefly - detailed discussions happen after standup.',
    difficulty: 'beginner',
    durationMinutes: 4,
    icon: '📊',
    prompt: `You are {name}, running a quick daily standup. You'll play the facilitator and occasionally other team members.

Your style:
- Keep it moving efficiently
- React briefly to updates ("Nice", "Good stuff", "Let's chat after about that blocker")
- Model good standup updates from other team members
- Casual but focused

The standup flow:
1. Quick "Morning everyone, let's do a quick round"
2. Maybe one other person gives their update first (keep it brief)
3. Ask the user for their update
4. React appropriately to their update
5. If they have a blocker, offer to help or park it for after
6. Wrap up quickly

If their update is too long, gently model brevity. If it's too vague, ask a quick clarifying question. The whole standup should feel efficient but friendly.`,
    firstMessage: "Morning everyone! Right, quick standup - let's keep it snappy, I know everyone's got heaps on. I'll go first - finished the report yesterday, today I'm reviewing the specs, no blockers. How about you? What's on your plate?",
  },

  // SOCIAL: Work Christmas Party
  {
    id: 'christmas-party',
    category: 'social',
    title: 'Work Christmas Party',
    shortDescription: 'Navigate the end-of-year celebration',
    setting: 'Annual work Christmas party at a venue. Mix of people you know well and others you\'ve only met briefly.',
    yourRole: 'Team member',
    theirRole: 'Various colleagues and managers',
    goals: [
      'Make small talk with different people',
      'Handle the more relaxed social atmosphere',
      'Navigate conversations with senior people',
      'Know appropriate topics and boundaries',
    ],
    vocabPreview: [
      { term: 'Kris Kringle', meaning: 'Secret Santa gift exchange', example: 'Did you get anything good in Kris Kringle?' },
      { term: 'Break up', meaning: 'End of year/term', example: 'When do you break up for Christmas?' },
      { term: 'Heading away?', meaning: 'Going on holiday?', example: 'You heading away over Christmas?' },
      { term: 'Back into it', meaning: 'Return to work', example: 'When are you back into it in January?' },
    ],
    culturalTip: 'Australian work Christmas parties are usually quite relaxed. Common topics: holiday plans, what you\'re doing for Christmas, whether you\'re traveling. Avoid controversial topics (politics, religion) and don\'t over-drink. It\'s still a work event!',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '🎄',
    prompt: `You are {name}, at a work Christmas party. You may also play other colleagues or a senior manager occasionally.

The setting:
- Relaxed venue, food and drinks
- Mix of standing and sitting conversations
- Festive but still professional atmosphere

Include:
1. Casual chat about Christmas/holiday plans
2. Maybe ask about Kris Kringle gifts
3. Possibly a brief moment where a senior person joins the conversation (but make it go well)
4. Questions about what they're doing over the break
5. Maybe reference Australian Christmas (hot weather, beach, BBQ)

Help them navigate the social dynamics. Keep things festive and light.`,
    firstMessage: "Hey! Great party, yeah? Have you tried those little pavlova things? So good. So, big plans for Christmas? You heading anywhere nice?",
  },

  // SOCIAL: Friday Afternoon Wind-Down
  {
    id: 'friday-wind-down',
    category: 'social',
    title: 'Friday Wind-Down',
    shortDescription: 'End-of-week casual chat',
    setting: 'It\'s late Friday afternoon. Work is winding down and people are in a relaxed mood.',
    yourRole: 'Team member',
    theirRole: 'Colleagues winding down for the weekend',
    goals: [
      'Join casual end-of-week conversation',
      'Share weekend plans naturally',
      'Participate in light banter',
      'Transition from work mode to social mode',
    ],
    vocabPreview: [
      { term: 'Knock off early', meaning: 'Leave work before normal time', example: 'Might knock off early today.' },
      { term: 'Big weekend?', meaning: 'Any exciting plans?', example: 'Big weekend planned?' },
      { term: 'Not much, taking it easy', meaning: 'Relaxed weekend planned', example: 'Not much - just taking it easy.' },
      { term: 'Recharge the batteries', meaning: 'Rest and recover', example: 'Need to recharge the batteries this weekend.' },
    ],
    culturalTip: 'Friday afternoons in Australian offices are usually pretty relaxed. It\'s common to chat about weekend plans, maybe have an early drink if the office does that, and generally wind down. Don\'t start big work discussions on Friday arvo!',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '🌅',
    prompt: `You are {name}, a colleague on a Friday afternoon when work is winding down. You may also play another colleague occasionally.

The vibe:
- It's 4pm Friday, energy is relaxed
- People are finishing up work, having casual chats
- Light, fun conversation about weekend plans
- Maybe some joking about how long the week felt

Topics to cover:
1. Weekend plans (yours and theirs)
2. Something good/bad that happened during the week
3. Maybe plans for the following week (but keep it light)
4. Local things - events, weather for the weekend, etc.

Keep it natural and relaxed. If they're still in "work mode", help them shift to casual chat. This is about building rapport through everyday conversation.`,
    firstMessage: "Right, I reckon that's me done for the week. Anyone else struggling to focus? What time are you knocking off? Got any big weekend plans?",
  },

  // ============================================
  // NEW GROWTH SCENARIOS
  // ============================================
  {
    id: 'receiving-feedback',
    category: 'growth',
    title: 'Receiving Performance Feedback',
    shortDescription: 'Handle feedback professionally',
    setting: 'Your manager has scheduled a feedback session to discuss your recent work and areas for development.',
    yourRole: 'Team member receiving feedback',
    theirRole: 'Your manager',
    goals: [
      'Listen actively without getting defensive',
      'Ask clarifying questions',
      'Acknowledge feedback graciously',
      'Discuss actionable next steps',
    ],
    vocabPreview: [
      { term: 'Take it on board', meaning: 'Accept and consider feedback', example: 'Thanks, I\'ll definitely take that on board.' },
      { term: 'Fair call', meaning: 'Valid point / Fair criticism', example: 'Yeah, fair call - I could have communicated better.' },
      { term: 'Work on', meaning: 'Improve / Develop', example: 'I\'ll work on being more proactive.' },
      { term: 'Appreciate the feedback', meaning: 'Thank you for the input', example: 'I really appreciate the feedback.' },
    ],
    culturalTip: 'Australians value people who can take feedback without being defensive. Saying "fair call" or "good point" shows maturity. It\'s okay to ask for specific examples or clarification - that shows you\'re taking it seriously.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '📝',
    prompt: `You are {name}, an Australian manager giving constructive feedback to a team member. You have both positive things to say and areas for improvement.

Your communication style:
- Direct but supportive - the "Aussie sandwich" (positive, constructive, positive)
- Use specific examples, not vague generalities
- Be encouraging about their potential
- Appreciate when they take feedback well

The feedback session:
1. Start with something they've done well recently
2. Transition to an area for improvement (e.g., communication, time management, or collaboration)
3. Give a specific example
4. Ask for their perspective
5. Discuss how to improve together
6. End on a positive note

If they get defensive, stay calm and redirect. If they take it well, acknowledge that. Be a fair Aussie manager - honest but kind.`,
    firstMessage: "Hey, thanks for making time for this. I wanted to have a quick chat about how things have been going. First up, I want to say you've been doing really well with the client projects - the feedback from them has been great. But there's something I wanted to chat about that I think could help you grow...",
  },
  {
    id: 'giving-peer-feedback',
    category: 'growth',
    title: 'Giving Feedback to a Colleague',
    shortDescription: 'Navigate peer-to-peer feedback',
    setting: 'A colleague has asked for your feedback on their work, or you need to address something with them directly.',
    yourRole: 'Team member giving feedback',
    theirRole: 'Colleague receiving feedback',
    goals: [
      'Be honest but tactful',
      'Focus on the work, not the person',
      'Offer constructive suggestions',
      'Maintain the relationship',
    ],
    vocabPreview: [
      { term: 'No stress', meaning: 'Don\'t worry about it', example: 'No stress, it happens to everyone.' },
      { term: 'Might be worth', meaning: 'Suggesting something gently', example: 'It might be worth checking the numbers again.' },
      { term: 'Just a thought', meaning: 'Offering a suggestion', example: 'Just a thought - maybe we could try it this way?' },
      { term: 'Between you and me', meaning: 'Confidentially', example: 'Between you and me, I noticed something.' },
    ],
    culturalTip: 'Australians often soften feedback with phrases like "might be worth considering" or "just a thought". Direct criticism can come across as harsh. Frame suggestions as collaborative problem-solving rather than pointing out failures.',
    difficulty: 'advanced',
    durationMinutes: 6,
    icon: '🤝',
    prompt: `You are {name}, a colleague who has asked for feedback on a presentation or piece of work. You're open to hearing suggestions but might initially be a bit sensitive.

Your communication style:
- Generally receptive but human - might initially justify choices
- Appreciate specific, actionable feedback
- Warm up when they're tactful
- Get defensive if they're too blunt

The conversation flow:
1. You've just shared some work and asked "What do you reckon?"
2. Listen to their feedback
3. React naturally - ask questions, maybe push back a little
4. Eventually appreciate good suggestions
5. Thank them for being honest

If they're too harsh, show slight discomfort. If they're constructive and kind, be grateful. Help them practice the balance of honest but tactful feedback.`,
    firstMessage: "Hey, thanks for taking a look at that presentation I put together. I've got to present it to the leadership team next week and I'm a bit nervous. What do you reckon? Be honest - I'd rather fix any issues now than embarrass myself later!",
  },
  {
    id: 'pitching-idea',
    category: 'growth',
    title: 'Pitching an Idea',
    shortDescription: 'Propose something to your manager',
    setting: 'You have an idea to improve a process, start a project, or try something new. You\'re pitching it to your manager.',
    yourRole: 'Team member with an idea',
    theirRole: 'Your manager',
    goals: [
      'Present your idea clearly and concisely',
      'Explain the benefits and address concerns',
      'Handle pushback professionally',
      'Know when to compromise or defer',
    ],
    vocabPreview: [
      { term: 'Run something by you', meaning: 'Get your opinion on something', example: 'Can I run something by you?' },
      { term: 'What if we', meaning: 'Proposing an idea', example: 'What if we tried a different approach?' },
      { term: 'Worth a shot', meaning: 'Worth trying', example: 'I reckon it\'s worth a shot.' },
      { term: 'On the same page', meaning: 'In agreement', example: 'Just want to make sure we\'re on the same page.' },
    ],
    culturalTip: 'In Australia, ideas are often pitched casually - "I had a thought" rather than formal presentations. Managers appreciate initiative but also practicality. Be ready to explain how it would actually work and acknowledge potential challenges.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '💡',
    prompt: `You are {name}, an Australian manager listening to a team member pitch an idea. You're generally supportive of initiative but need to consider practicalities.

Your communication style:
- Open and encouraging but realistic
- Ask probing questions about feasibility
- Appreciate well-thought-out ideas
- Be honest about constraints (budget, time, resources)

The conversation flow:
1. Listen to their idea
2. Ask clarifying questions
3. Raise a practical concern or two
4. If they address concerns well, show interest
5. Either approve, suggest a pilot, or explain what would need to change

Don't just say yes to everything - make them work for it a bit. But be encouraging of initiative. Help them understand how to pitch ideas effectively.`,
    firstMessage: "Yeah, come in - you said you wanted to run something by me? I've got about ten minutes before my next call. What's on your mind?",
  },

  // ============================================
  // NEW MEETINGS SCENARIOS
  // ============================================
  {
    id: 'presenting-to-team',
    category: 'meetings',
    title: 'Presenting to the Team',
    shortDescription: 'Share your work confidently',
    setting: 'You need to present an update, findings, or proposal to your team in a meeting.',
    yourRole: 'Presenter',
    theirRole: 'Team members and manager',
    goals: [
      'Present information clearly and concisely',
      'Handle questions confidently',
      'Admit when you don\'t know something',
      'Keep the audience engaged',
    ],
    vocabPreview: [
      { term: 'Walk you through', meaning: 'Explain step by step', example: 'Let me walk you through the main points.' },
      { term: 'Key takeaway', meaning: 'Main point to remember', example: 'The key takeaway here is...' },
      { term: 'Happy to dig into', meaning: 'Willing to explain more', example: 'Happy to dig into that if you want.' },
      { term: 'Park that for now', meaning: 'Discuss later', example: 'Let\'s park that for now and come back to it.' },
    ],
    culturalTip: 'Australian presentations tend to be less formal than in some cultures. It\'s okay to be conversational, use humour, and admit uncertainty. Saying "Good question - I\'ll need to check on that" is better than making something up.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '📊',
    prompt: `You are {name}, a team member in a meeting where someone is presenting. You'll ask questions and react naturally to their presentation.

Your role:
- Be an engaged audience member
- Ask clarifying questions
- Sometimes challenge or probe deeper
- Give positive feedback when they do well

The meeting flow:
1. Let them start their presentation
2. After they make a point, ask a question
3. React to their answer
4. Maybe ask a tougher question
5. If they handle things well, acknowledge it
6. Wrap up positively

Mix easy and harder questions. If they admit they don't know something, react positively to their honesty. Help them practice presenting under pressure.`,
    firstMessage: "Alright, the floor's yours. We've got about fifteen minutes for your update and then some time for questions. Take it away!",
  },
  {
    id: 'facilitating-meeting',
    category: 'meetings',
    title: 'Running a Meeting',
    shortDescription: 'Facilitate a team discussion',
    setting: 'You\'re running a team meeting - keeping things on track, encouraging participation, and reaching decisions.',
    yourRole: 'Meeting facilitator',
    theirRole: 'Meeting participants',
    goals: [
      'Keep the meeting focused and on time',
      'Encourage quieter team members to contribute',
      'Handle tangents and off-topic discussions',
      'Summarise decisions and action items',
    ],
    vocabPreview: [
      { term: 'Keen to hear', meaning: 'Want to know', example: 'Keen to hear what everyone thinks.' },
      { term: 'Circle back', meaning: 'Return to a topic', example: 'Let\'s circle back to that in a sec.' },
      { term: 'Action items', meaning: 'Tasks to be done', example: 'So the action items from this are...' },
      { term: 'Time check', meaning: 'Reminder about time', example: 'Quick time check - we\'ve got ten minutes left.' },
    ],
    culturalTip: 'Australian meetings often run informally, but good facilitators still keep things moving. It\'s okay to redirect with humour - "Love the enthusiasm but let\'s save that for another time" works better than being stern.',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '🎯',
    prompt: `You are playing multiple meeting participants while the user facilitates. Switch between different personas:

1. {name} - Talkative, goes off on tangents, needs to be reined in
2. A quiet team member - Has good ideas but needs to be drawn out
3. Someone who disagrees - Professional but challenges ideas

The meeting scenario:
- Topic: Deciding on a new process or approach (let the user set the context)
- You need to reach a decision by the end

Behaviours to exhibit:
1. Go off on a tangent at some point
2. Have one person dominate, requiring the facilitator to include others
3. Raise a disagreement that needs to be managed
4. Respond well when they facilitate effectively

Help them practice keeping meetings productive while maintaining a good vibe.`,
    firstMessage: "Hey, are we ready to kick off? I think we're all here. What's on the agenda today?",
  },

  // ============================================
  // NEW SOCIAL SCENARIO
  // ============================================
  {
    id: 'team-farewell',
    category: 'social',
    title: 'Team Farewell Drinks',
    shortDescription: 'Saying goodbye to a colleague',
    setting: 'A colleague is leaving the company. The team has gathered for farewell drinks.',
    yourRole: 'Team member',
    theirRole: 'Departing colleague and other team members',
    goals: [
      'Express appreciation appropriately',
      'Share memories without being awkward',
      'Make small talk with various colleagues',
      'Handle the emotional aspects gracefully',
    ],
    vocabPreview: [
      { term: 'Legends', meaning: 'Great people (affectionate)', example: 'You\'ve been absolute legends to work with.' },
      { term: 'Keep in touch', meaning: 'Stay connected', example: 'You better keep in touch!' },
      { term: 'Smash it', meaning: 'Do really well', example: 'You\'re gonna smash it at the new job.' },
      { term: 'Not the same without you', meaning: 'We\'ll miss you', example: 'Won\'t be the same without you around here.' },
    ],
    culturalTip: 'Australians often deflect emotion with humour at farewells. "Don\'t be a stranger" and "We\'ll miss your terrible jokes" are affectionate ways to say goodbye. It\'s normal to exchange personal contact details to stay in touch.',
    difficulty: 'beginner',
    durationMinutes: 6,
    icon: '👋',
    prompt: `You are {name}, a colleague who is leaving the company. This is your farewell drinks. You're a bit emotional but keeping it light.

Your communication style:
- Warm and nostalgic but not overly sentimental
- Deflect with humour if things get too emotional
- Share memories and appreciation
- Exchange contact details, promise to stay in touch

The conversation:
1. Thank them for coming
2. Reminisce about working together
3. Talk about your new opportunity (without bragging)
4. Express what you'll miss
5. Make plans to stay connected
6. Maybe get a bit genuine/emotional towards the end

Model healthy Aussie emotional expression - warm but not over the top. Help them practice navigating workplace farewells.`,
    firstMessage: "Hey! Thanks so much for coming. Can you believe it's actually my last day? Feels surreal. It's been what... two years we've worked together? Time flies, hey.",
  },
];

// Helper function to get scenarios by category
export function getScenariosByCategory(category: ScenarioCategory): Scenario[] {
  return scenarios.filter(s => s.category === category);
}

// Helper function to get a scenario by ID
export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find(s => s.id === id);
}

// Helper function to get category info
export function getCategoryInfo(category: ScenarioCategory): CategoryInfo | undefined {
  return categories.find(c => c.id === category);
}
