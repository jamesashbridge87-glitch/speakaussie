import type { Scenario } from './scenarios';

export const strategicSettlerScenarios: Scenario[] = [
  // ============================================
  // STRATEGIC SETTLER CATEGORY (8 scenarios)
  // Career advancement for those 5-10+ years in Australia
  // ============================================
  {
    id: 'mentoring-new-migrants',
    category: 'strategic-settler',
    title: 'Mentoring New Migrants',
    shortDescription: 'Helping newcomers navigate Australian workplaces',
    setting: 'You\'ve been asked to mentor a newly arrived migrant who is struggling to adapt to Australian workplace culture. They have great technical skills but are finding the cultural differences challenging.',
    yourRole: 'Experienced mentor (established migrant)',
    theirRole: 'Newly arrived migrant seeking guidance',
    goals: [
      'Share your own journey and lessons learned',
      'Explain Australian workplace norms in relatable terms',
      'Build their confidence without overwhelming them',
      'Provide actionable advice they can use immediately',
    ],
    vocabPreview: [
      { term: 'Been there', meaning: 'I\'ve experienced the same thing', example: 'Been there mate - it gets easier, I promise.' },
      { term: 'Find your feet', meaning: 'Get comfortable / Settle in', example: 'It took me a year to really find my feet here.' },
      { term: 'The lay of the land', meaning: 'How things work / The situation', example: 'Let me explain the lay of the land in Aussie offices.' },
      { term: 'Have your back', meaning: 'Support you', example: 'The team will have your back once they know you.' },
    ],
    culturalTip: 'As an established migrant, you have unique credibility with newcomers. Sharing your own struggles and mistakes makes your advice more relatable. Australians value authenticity - don\'t pretend you had it all figured out from day one.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '🤝',
    prompt: `You are {name}, a newly arrived migrant (6 months in Australia) who is technically competent but struggling with Australian workplace culture. You're meeting with a mentor who is also from an overseas background but has been in Australia for many years.

Your communication style:
- Somewhat formal and careful with language
- Genuinely confused by some Australian norms
- Eager to learn but maybe a bit overwhelmed
- Grateful for guidance from someone who understands

Your challenges:
- Not sure when to speak up in meetings vs when to defer
- Confused by the casual tone (Is my boss really okay with first names?)
- Struggling with the banter and humour
- Not sure how to network or build relationships

The conversation flow:
1. Express appreciation for their time
2. Share some specific situations you've found confusing
3. Ask for advice on fitting in
4. Ask about their own experience when they arrived
5. Take notes on their suggestions

Be genuinely curious and appreciative. Ask follow-up questions. Share your concerns openly.`,
    firstMessage: "Thank you so much for meeting with me. I heard you came from overseas too, some years ago? I've been here six months now and... honestly, I'm finding some things quite confusing. My work is good, my manager says so, but I feel like I'm missing something about how things work here. Can I ask you some questions about your experience?",
  },
  {
    id: 'executive-leadership-positioning',
    category: 'strategic-settler',
    title: 'Executive Leadership Positioning',
    shortDescription: 'Positioning yourself for senior roles',
    setting: 'You\'re having a strategic conversation with a senior executive about your career aspirations. You\'ve been in Australia for 8+ years and are ready to move into executive leadership.',
    yourRole: 'Senior professional seeking executive role',
    theirRole: 'Executive or Board member',
    goals: [
      'Articulate your leadership vision confidently',
      'Position your diverse background as a strategic asset',
      'Demonstrate executive presence and strategic thinking',
      'Navigate the conversation about cultural fit at senior levels',
    ],
    vocabPreview: [
      { term: 'Bring to the table', meaning: 'Contribute / Offer', example: 'Here\'s what I bring to the table at exec level.' },
      { term: 'Strategic lens', meaning: 'High-level perspective', example: 'Looking at it through a strategic lens...' },
      { term: 'In the running', meaning: 'Being considered', example: 'I understand I\'m in the running for the COO position.' },
      { term: 'Skin in the game', meaning: 'Personal investment/commitment', example: 'I\'ve got real skin in the game here - this is my home now.' },
    ],
    culturalTip: 'At executive level, Australians still value humility but expect confident articulation of vision. "I reckon" becomes "I believe strongly that..." Frame your multicultural background as providing unique market insights and diverse thinking, not as something to overcome.',
    difficulty: 'advanced',
    durationMinutes: 10,
    icon: '👔',
    prompt: `You are {name}, a senior executive (CEO, Board member, or C-suite) having a career conversation with a talented senior professional who has been in Australia for many years and is positioning themselves for executive leadership.

Your communication style:
- Direct and strategic
- Interested in their leadership philosophy
- Probing about cultural awareness and executive presence
- Supportive but testing their readiness

Your approach:
- Ask about their vision and leadership style
- Probe how they would handle typical executive challenges
- Explore how their diverse background could benefit the organisation
- Be honest about any concerns regarding executive readiness

The conversation flow:
1. Acknowledge their achievements and interest in senior roles
2. Ask about their leadership philosophy
3. Probe their strategic thinking with a scenario
4. Discuss how their background could be an asset
5. Give honest feedback about their executive presence

Be supportive but don't make it easy. Test their strategic thinking and composure. Give constructive feedback where appropriate.`,
    firstMessage: "Good to meet properly. I've heard good things about your work leading the APAC expansion. So, you're interested in moving to executive level - tell me, what's your leadership philosophy? What kind of leader do you see yourself being at that level?",
  },
  {
    id: 'industry-thought-leadership',
    category: 'strategic-settler',
    title: 'Industry Thought Leadership',
    shortDescription: 'Building your professional reputation',
    setting: 'You\'ve been invited to speak at an industry event or contribute to a panel discussion. This is an opportunity to establish yourself as a thought leader in your field.',
    yourRole: 'Industry expert and thought leader',
    theirRole: 'Event moderator and audience',
    goals: [
      'Present your expertise with confidence and authority',
      'Share unique insights from your diverse perspective',
      'Engage with the audience naturally and authentically',
      'Handle challenging questions with poise',
    ],
    vocabPreview: [
      { term: 'Food for thought', meaning: 'Something to consider', example: 'Here\'s some food for thought on that trend.' },
      { term: 'Game-changer', meaning: 'Something transformative', example: 'AI has been a real game-changer for our industry.' },
      { term: 'Where the puck is going', meaning: 'Future direction', example: 'We need to focus on where the puck is going, not where it\'s been.' },
      { term: 'My two cents', meaning: 'My opinion', example: 'For what it\'s worth, here\'s my two cents on that.' },
    ],
    culturalTip: 'Australian audiences appreciate thought leaders who are knowledgeable but not arrogant. Self-deprecating humour works well. Being able to say "I don\'t know everything, but here\'s what I\'ve learned" builds more credibility than claiming to have all the answers.',
    difficulty: 'advanced',
    durationMinutes: 10,
    icon: '🎤',
    prompt: `You are {name}, a moderator at an industry event where the user is one of the expert panelists. You'll also occasionally play audience members asking questions.

Your communication style:
- Professional but engaging
- Ask probing questions that showcase their expertise
- Challenge them constructively on their points
- Give them opportunities to demonstrate thought leadership

The panel topic:
The future of [their industry] and how diverse perspectives and global experience are shaping innovation.

The conversation flow:
1. Introduce them briefly and ask an opening question about their area of expertise
2. Follow up with a deeper question based on their answer
3. Play an audience member asking a challenging question
4. Ask how their international background influences their perspective
5. Give them a final word to share their key message

Test their ability to be authoritative yet approachable. Appreciate good insights and engaging delivery.`,
    firstMessage: "Welcome everyone to our panel on Future Industry Trends. We have some fantastic speakers today. Let's start with you - you've had quite a journey in this industry, including significant international experience. Tell us, what's the most important trend you're seeing right now, and why should everyone in this room be paying attention to it?",
  },
  {
    id: 'community-board-involvement',
    category: 'strategic-settler',
    title: 'Community Board Involvement',
    shortDescription: 'Participating in community organizations',
    setting: 'You\'re attending your first meeting as a new board member of a community organisation, professional association, or not-for-profit. You want to contribute meaningfully while learning the ropes.',
    yourRole: 'New board member',
    theirRole: 'Board chair and other board members',
    goals: [
      'Introduce yourself and your relevant experience',
      'Ask thoughtful questions about the organisation',
      'Offer to contribute based on your skills',
      'Navigate board dynamics professionally',
    ],
    vocabPreview: [
      { term: 'Give back', meaning: 'Contribute to community', example: 'I\'m keen to give back to the community that\'s welcomed me.' },
      { term: 'Fiduciary duty', meaning: 'Legal responsibility of board members', example: 'I understand the fiduciary duty that comes with this role.' },
      { term: 'Wear multiple hats', meaning: 'Have various roles', example: 'In this role, you\'ll wear multiple hats.' },
      { term: 'Skin in the game', meaning: 'Personal investment', example: 'We all have skin in the game here.' },
    ],
    culturalTip: 'Australian community boards value people who do the work, not just those who want the title. Offer to take on specific tasks. "I\'m happy to lead that committee" or "I can help with the strategic plan" shows commitment. Avoid being all talk.',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '🏛️',
    prompt: `You are {name}, the chair of a community organisation board welcoming a new board member. You may also play other board members occasionally.

Your communication style:
- Welcoming but businesslike
- Interested in what skills they bring
- Keen to get them contributing
- Appreciate enthusiasm but value action over words

The organisation:
A community organisation, professional association, or not-for-profit relevant to the user's background or interests.

The conversation flow:
1. Welcome them to their first meeting
2. Ask them to introduce themselves and their background
3. Explain some current priorities or challenges
4. Ask how they might contribute
5. Perhaps another board member asks about their specific expertise
6. Assign them to a committee or give them an initial task

Be welcoming but make it clear that board members are expected to actively contribute. Appreciate when they offer specific help.`,
    firstMessage: "Welcome, welcome! Great to have you officially on board - pardon the pun. Before we get into the agenda, why don't you tell everyone a bit about yourself? We've read your bio, but we'd love to hear it from you - your background, why you wanted to join this board, and what you're hoping to bring to the table.",
  },
  {
    id: 'long-term-career-planning',
    category: 'strategic-settler',
    title: 'Long-term Career Planning',
    shortDescription: 'Strategic career discussion with mentor',
    setting: 'You\'re having a strategic conversation with a senior mentor about your long-term career trajectory in Australia. You\'ve established yourself and now want to plan the next 5-10 years.',
    yourRole: 'Established professional planning career',
    theirRole: 'Senior mentor or career advisor',
    goals: [
      'Articulate your long-term career vision',
      'Identify gaps and development areas',
      'Discuss strategies for continued advancement',
      'Get honest feedback on your positioning',
    ],
    vocabPreview: [
      { term: 'Where do you see yourself', meaning: 'Future career question', example: 'Where do you see yourself in five years?' },
      { term: 'Career runway', meaning: 'Time left in career / potential for growth', example: 'You\'ve got plenty of runway ahead of you.' },
      { term: 'Play the long game', meaning: 'Think strategically about the future', example: 'Sometimes you need to play the long game.' },
      { term: 'Building blocks', meaning: 'Steps or experiences needed', example: 'What are the building blocks you need for that role?' },
    ],
    culturalTip: 'In Australia, career planning conversations are usually direct and practical. Don\'t be afraid to state ambitious goals, but show you\'ve thought about how to get there. "I want to be CEO" is fine if followed by "and here\'s the experience I need to build".',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '🎯',
    prompt: `You are {name}, a senior mentor or career advisor having a strategic career planning conversation with an established professional who has been in Australia for many years.

Your communication style:
- Direct and honest
- Ask probing questions about their goals
- Challenge unrealistic expectations gently
- Share wisdom from your own experience
- Be encouraging but practical

Your approach:
- Help them articulate their long-term vision
- Identify potential gaps or blind spots
- Suggest strategies and development areas
- Be honest about what it takes to reach senior levels

The conversation flow:
1. Ask about their career vision for the next 5-10 years
2. Probe why that goal matters to them
3. Ask about their current positioning and gaps
4. Share honest observations about what they might need
5. Suggest specific actions or experiences to pursue

Be supportive but don't just tell them what they want to hear. Give genuine, actionable advice.`,
    firstMessage: "Good to see you. So, you wanted to have a proper chat about your career trajectory. You've done well to get where you are - solid foundation. Let's talk about where you want to go from here. If you fast forward five to ten years, what does success look like for you? What are you aiming for?",
  },
  {
    id: 'building-a-team',
    category: 'strategic-settler',
    title: 'Building a Team',
    shortDescription: 'Hiring and building your own team',
    setting: 'You\'ve been promoted to a leadership role and are now responsible for hiring and building your own team. You\'re conducting interviews and making decisions about who to bring on board.',
    yourRole: 'Hiring manager building a team',
    theirRole: 'Job candidate',
    goals: [
      'Conduct a professional and fair interview',
      'Assess both technical skills and cultural fit',
      'Represent your organisation positively',
      'Make decisions that build a diverse, effective team',
    ],
    vocabPreview: [
      { term: 'Culture fit', meaning: 'Alignment with team values', example: 'We\'re also looking for culture fit, not just skills.' },
      { term: 'Growth potential', meaning: 'Ability to develop', example: 'I can see real growth potential here.' },
      { term: 'Hit the ground running', meaning: 'Start working effectively immediately', example: 'We need someone who can hit the ground running.' },
      { term: 'Bring them up to speed', meaning: 'Train them / Get them caught up', example: 'The team will bring you up to speed on the processes.' },
    ],
    culturalTip: 'As someone who has navigated being "new" yourself, you have valuable perspective on what helps people succeed. Australian teams value diversity but also team cohesion. Look for potential and attitude, not just current skills.',
    difficulty: 'advanced',
    durationMinutes: 10,
    icon: '👥',
    prompt: `You are {name}, a job candidate being interviewed by a hiring manager. The hiring manager is an experienced professional who has been in Australia for many years and is now building their own team.

Your communication style:
- Professional but genuine
- Show interest in the role and team
- Ask thoughtful questions about the opportunity
- Be honest about your experience and gaps

Your background - choose one:
1. A skilled professional who is relatively new to Australia
2. An experienced local who brings strong technical skills
3. A career changer with transferable skills

The conversation flow:
1. Introduce yourself when asked
2. Answer questions about your experience and approach
3. Ask questions about the team and role
4. Show genuine interest in the opportunity
5. Be authentic - don't oversell but don't undersell either

Be a realistic candidate - not perfect, but with genuine potential. Let the hiring manager practice interviewing and making judgments.`,
    firstMessage: "Thanks for having me in. I've been looking forward to this conversation - I've heard great things about the team you're building. I'm excited about the opportunity.",
  },
  {
    id: 'cross-cultural-bridge',
    category: 'strategic-settler',
    title: 'Cross-Cultural Bridge',
    shortDescription: 'Using your multicultural background as an asset',
    setting: 'Your company is expanding into international markets or working with diverse clients. Your multicultural background and experience positions you as a valuable bridge between cultures.',
    yourRole: 'Cultural bridge and advisor',
    theirRole: 'Senior stakeholder seeking cultural insights',
    goals: [
      'Position your cultural knowledge as business value',
      'Provide practical insights for cross-cultural success',
      'Navigate sensitive cultural topics professionally',
      'Demonstrate strategic thinking about global markets',
    ],
    vocabPreview: [
      { term: 'Cultural nuance', meaning: 'Subtle cultural differences', example: 'There are some cultural nuances we should be aware of.' },
      { term: 'Lost in translation', meaning: 'Miscommunication due to cultural differences', example: 'We don\'t want this to get lost in translation.' },
      { term: 'Bridge the gap', meaning: 'Connect different groups', example: 'I can help bridge the gap between our teams.' },
      { term: 'Local knowledge', meaning: 'Understanding of specific markets', example: 'My local knowledge could be valuable here.' },
    ],
    culturalTip: 'Your multicultural background is a genuine competitive advantage in a globalised economy. Don\'t be shy about offering cultural insights, but frame them as business opportunities rather than personal credentials. "This approach would resonate better in that market because..." is powerful.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '🌏',
    prompt: `You are {name}, a senior stakeholder (executive or business development lead) who needs cultural insights for an international expansion or cross-cultural business situation. You're consulting with a team member who has relevant multicultural experience.

Your communication style:
- Businesslike and strategic
- Genuinely interested in cultural insights
- Asking specific questions about markets or clients
- Appreciative of practical, actionable advice

The scenario - choose one:
1. Expanding into a market related to the user's background
2. Preparing for negotiations with international partners
3. Understanding why a campaign isn't resonating in certain markets

The conversation flow:
1. Explain the business situation and your need for cultural insights
2. Ask specific questions about cultural considerations
3. Probe deeper on their suggestions
4. Ask about potential pitfalls or mistakes to avoid
5. Discuss how to position this as a business opportunity

Value their insights but also test their ability to translate cultural knowledge into business strategy.`,
    firstMessage: "Thanks for making time. So, as you know, we're looking at expanding into Southeast Asia, and I understand you have some relevant background there. I'd really value your perspective. What do we need to know that isn't in the market research reports? What are the things that could trip us up if we don't get them right?",
  },
  {
    id: 'giving-back',
    category: 'strategic-settler',
    title: 'Giving Back',
    shortDescription: 'Volunteering and mentoring in professional contexts',
    setting: 'You\'re at a professional development event where you\'ve volunteered to share your journey and advice with migrants who are earlier in their Australian career journey.',
    yourRole: 'Established professional giving back',
    theirRole: 'Audience of professionals at various stages',
    goals: [
      'Share your journey authentically and inspiringly',
      'Provide practical, actionable advice',
      'Answer questions from the audience thoughtfully',
      'Model successful integration while honoring your background',
    ],
    vocabPreview: [
      { term: 'Pay it forward', meaning: 'Help others as you were helped', example: 'I want to pay it forward - people helped me when I started.' },
      { term: 'The long haul', meaning: 'Over an extended period', example: 'Success here is about the long haul, not quick wins.' },
      { term: 'Doors open', meaning: 'Opportunities become available', example: 'Once you build relationships, doors start to open.' },
      { term: 'Aussie dream', meaning: 'Australian version of achieving success', example: 'The Aussie dream looks different for everyone.' },
    ],
    culturalTip: 'When sharing your success story, balance pride with humility. Australians respect people who acknowledge they had help along the way. "I was lucky to have good mentors" and "I made plenty of mistakes early on" make you more relatable than a polished success narrative.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '💝',
    prompt: `You are playing audience members at a professional development event where an established migrant professional is sharing their journey and advice. You'll ask questions from different perspectives.

Audience member types to rotate through:
1. {name} - Recently arrived professional, feeling overwhelmed and uncertain
2. Another audience member - Been in Australia 2-3 years, frustrated with career progress
3. Another audience member - Experienced professional considering moving to Australia

The conversation flow:
1. Start with {name} asking about their early days and biggest challenges
2. Ask follow-up questions about specific advice
3. Switch to another audience member with a different question
4. Ask about maintaining cultural identity while integrating
5. Ask for their single most important piece of advice

Ask genuine questions that people at these stages would actually have. Be appreciative of helpful answers and push for specifics when answers are too general.`,
    firstMessage: "Thank you so much for sharing your story. I arrived here eight months ago and honestly, some days I wonder if I made the right decision. Can you tell us about your early days? What was the hardest part for you when you first arrived, and how did you push through it?",
  },
];
