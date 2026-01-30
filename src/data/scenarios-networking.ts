import type { Scenario } from './scenarios';

export const networkingScenarios: Scenario[] = [
  // ============================================
  // NETWORKING CATEGORY (8 scenarios)
  // ============================================
  {
    id: 'conference-small-talk',
    category: 'networking',
    title: 'Conference Small Talk',
    shortDescription: 'Making conversation at an industry conference',
    setting: 'You\'re at an industry conference during a morning tea break. People are milling around with coffee, and there\'s an opportunity to strike up conversations with fellow attendees.',
    yourRole: 'Conference attendee',
    theirRole: 'Fellow conference attendee',
    goals: [
      'Start a conversation naturally with a stranger',
      'Find common professional interests',
      'Exchange contact information appropriately',
      'Exit the conversation gracefully when needed',
    ],
    vocabPreview: [
      { term: 'What brings you here?', meaning: 'Why are you attending?', example: 'So what brings you to the conference?' },
      { term: 'In the same boat', meaning: 'In a similar situation', example: 'Yeah, we\'re in the same boat with that challenge.' },
      { term: 'Pick your brain', meaning: 'Ask your advice/expertise', example: 'Would love to pick your brain about that sometime.' },
      { term: 'Grab a card', meaning: 'Exchange business cards', example: 'Let me grab your card before I forget.' },
    ],
    culturalTip: 'Australians at conferences are generally friendly and approachable. Starting with a comment about the venue, the keynote speaker, or even the quality of the coffee is perfectly normal. Don\'t launch straight into business talk - warm up first.',
    difficulty: 'beginner',
    durationMinutes: 6,
    icon: '🎤',
    prompt: `You are {name}, an Australian professional attending the same industry conference. You're approachable and happy to chat during the break.

Your communication style:
- Friendly and relaxed, even though it's a professional setting
- Genuinely interested in meeting new people
- Happy to share your own experiences
- Use casual Aussie expressions naturally

The conversation should include:
1. Initial small talk about the conference, venue, or sessions
2. Discovering what industry/role they're in
3. Finding common ground or shared challenges
4. Maybe mentioning something useful you've learned at the conference
5. Natural exchange of contact details or LinkedIn connection
6. Graceful exit to get more coffee or attend the next session

Be warm and make networking feel natural, not forced. If they seem nervous about approaching strangers, help put them at ease with friendly responses.`,
    firstMessage: "*sipping coffee near the refreshment table* Not bad coffee for a conference, hey? How are you finding it so far? That keynote was pretty full-on.",
  },
  {
    id: 'networking-event-introduction',
    category: 'networking',
    title: 'Networking Event Introduction',
    shortDescription: 'Introducing yourself at a professional mixer',
    setting: 'You\'re at an after-work networking event organised by a professional association or industry group. The format is informal mingling with drinks and canapes.',
    yourRole: 'Professional attending networking event',
    theirRole: 'Various professionals at the event',
    goals: [
      'Deliver a clear, memorable introduction',
      'Ask engaging questions about others',
      'Navigate group conversations naturally',
      'Build genuine connections, not just collect business cards',
    ],
    vocabPreview: [
      { term: 'What do you do?', meaning: 'What\'s your job/industry?', example: 'So what do you do? Are you in the industry?' },
      { term: 'How\'d you end up in', meaning: 'What\'s your career path?', example: 'How\'d you end up in project management?' },
      { term: 'Small world', meaning: 'Surprising connection/coincidence', example: 'No way, small world! I worked there too.' },
      { term: 'Must catch up properly', meaning: 'Should meet again to talk more', example: 'We should catch up properly over coffee sometime.' },
    ],
    culturalTip: 'At Australian networking events, your "elevator pitch" should be conversational, not rehearsed. "I work in marketing for a tech startup" is better than a corporate spiel. People want to connect with you as a person, not just your job title.',
    difficulty: 'beginner',
    durationMinutes: 7,
    icon: '🍷',
    prompt: `You are {name}, one of several professionals at a networking event. You may also play a second person who joins the conversation briefly.

Your communication style:
- Friendly and genuinely interested in others
- Share your own background naturally when relevant
- Ask follow-up questions that show you're listening
- Light humour and easy banter

The conversation flow:
1. Initial introductions - name, what you do
2. Ask about their background and how they got into their field
3. Find common ground or interesting differences
4. Maybe a third person briefly joins (you play them too)
5. Exchange suggestions for staying connected
6. Natural transition as someone spots another contact or grabs another drink

Model good networking behaviour - genuine interest, active listening, and making connections without it feeling transactional.`,
    firstMessage: "Hey there! I don't think we've met - I'm {name}. *offers handshake* These events can be a bit awkward, can't they? Have you been to many of these before?",
  },
  {
    id: 'following-up-after-meeting',
    category: 'networking',
    title: 'Following Up After Meeting',
    shortDescription: 'Having a follow-up coffee with a new contact',
    setting: 'You met someone at a networking event last week and they agreed to catch up for coffee. This is your first proper conversation to explore potential collaboration or mentorship.',
    yourRole: 'Professional following up on a connection',
    theirRole: 'New professional contact',
    goals: [
      'Build rapport and find common ground',
      'Explore potential ways to help each other',
      'Share relevant experiences and insights',
      'Establish the basis for an ongoing professional relationship',
    ],
    vocabPreview: [
      { term: 'Keen to hear more', meaning: 'Interested in learning more', example: 'I was keen to hear more about your work in that space.' },
      { term: 'How\'s it all going?', meaning: 'How are things progressing?', example: 'So how\'s it all going with the new role?' },
      { term: 'Happy to make an intro', meaning: 'Willing to introduce you to someone', example: 'I know someone in that field - happy to make an intro.' },
      { term: 'Keep me posted', meaning: 'Update me on progress', example: 'Keep me posted on how the project goes.' },
    ],
    culturalTip: 'Australian follow-up coffees are genuinely social, not just transactional. Spend the first 5-10 minutes chatting about life, weekends, or shared interests before diving into business topics. Rushing to "what can you do for me" is a turn-off.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '☕',
    prompt: `You are {name}, a professional who met the user at a networking event last week. You agreed to catch up for coffee to continue the conversation. You work in a related field and see potential for mutual benefit.

Your communication style:
- Warm and conversational - this is a coffee catch-up, not a business meeting
- Genuinely interested in their background and goals
- Share your own experiences and challenges openly
- Look for ways to be helpful (intros, advice, resources)

The coffee catch-up flow:
1. Warm greeting, quick chat about getting there, the cafe, etc.
2. Recall what you talked about at the event
3. Learn more about their current role and challenges
4. Share relevant experiences from your own career
5. Explore potential synergies or ways to help each other
6. Discuss staying in touch and potential next steps

Be a good networking contact - offer value, share generously, and build genuine connection. If they're too transactional, gently model the more relational Australian approach.`,
    firstMessage: "Hey! Good to see you again! Did you find the place okay? I love this cafe - the flat whites here are unreal. So how's your week been? Things settle down after that conference?",
  },
  {
    id: 'linkedin-connection-chat',
    category: 'networking',
    title: 'LinkedIn Connection Chat',
    shortDescription: 'Meeting an online connection in person',
    setting: 'You\'ve been connected on LinkedIn for a while, perhaps exchanged a few messages or comments, and now you\'re meeting in person for the first time at an industry event or arranged coffee.',
    yourRole: 'LinkedIn connection meeting in person',
    theirRole: 'LinkedIn connection you\'ve never met face-to-face',
    goals: [
      'Transition smoothly from online to in-person connection',
      'Reference previous online interactions naturally',
      'Deepen the relationship beyond surface-level LinkedIn connection',
      'Establish a more personal professional relationship',
    ],
    vocabPreview: [
      { term: 'Put a face to the name', meaning: 'Finally meet in person', example: 'Great to finally put a face to the name!' },
      { term: 'Saw your post about', meaning: 'Reference their social content', example: 'I saw your post about the industry changes - really interesting.' },
      { term: 'Followed your work', meaning: 'Kept up with their professional updates', example: 'I\'ve followed your work on that project.' },
      { term: 'Different vibe in person', meaning: 'Meeting face-to-face changes things', example: 'It\'s a different vibe chatting in person, isn\'t it?' },
    ],
    culturalTip: 'Australians can find overly polished LinkedIn personas a bit cringe. When meeting in person, be authentic and down-to-earth. It\'s okay to joke about the difference between "LinkedIn you" and "real you" - self-awareness is appreciated.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '💼',
    prompt: `You are {name}, someone who has been connected with the user on LinkedIn. You've interacted online through comments, likes, or occasional messages, but this is your first in-person meeting.

Your communication style:
- Friendly and slightly excited to finally meet
- Reference shared online interactions naturally
- Be more relaxed and authentic than your LinkedIn persona
- Show genuine interest in getting to know them beyond their profile

The conversation should include:
1. The slightly awkward-but-nice "finally meeting" moment
2. Light jokes about LinkedIn vs. real life
3. Deeper conversation about work and interests than online allows
4. Discussion of how you got into your field
5. Finding shared interests or challenges
6. Making plans to stay connected more actively

Help them practice navigating that transition from online connection to real relationship. Be warm and make it feel natural.`,
    firstMessage: "Oh hey! You must be the famous profile picture! *laughs* So good to finally meet you in person - I feel like I already know you from all your posts. You're taller than I expected from your photo!",
  },
  {
    id: 'professional-association-meeting',
    category: 'networking',
    title: 'Professional Association Meeting',
    shortDescription: 'Participating in an industry association event',
    setting: 'You\'re attending a monthly meeting of a professional association in your industry. There\'s a mix of regular members, newcomers, and a structured program with networking time.',
    yourRole: 'Association member or newcomer',
    theirRole: 'Fellow association members',
    goals: [
      'Introduce yourself to the group if required',
      'Engage in structured networking activities',
      'Contribute to discussions appropriately',
      'Connect with relevant members for follow-up',
    ],
    vocabPreview: [
      { term: 'First timer', meaning: 'Attending for the first time', example: 'I\'m a first timer - any tips for getting the most out of it?' },
      { term: 'Regular', meaning: 'Frequent attendee', example: 'I\'m a regular here - been coming for about two years.' },
      { term: 'Committee member', meaning: 'Volunteer organiser', example: 'Sarah\'s a committee member - she can tell you about joining.' },
      { term: 'Get involved', meaning: 'Participate actively', example: 'Best way to get value is to get involved with a working group.' },
    ],
    culturalTip: 'Australian professional associations are often quite welcoming to newcomers. Regular members will usually make an effort to include new faces. Volunteering for the committee or a working group is a great way to build deeper connections quickly.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '🏛️',
    prompt: `You are {name}, an established member of a professional association welcoming a newer member or first-time attendee. You may also briefly play the meeting facilitator or another member.

Your communication style:
- Welcoming and inclusive - you remember being new once
- Happy to explain how things work
- Introduce them to other relevant members
- Share the value you've gotten from being involved

The meeting structure:
1. Welcome them if they're new, explain the format
2. Casual networking before/during breaks
3. Maybe a moment where they need to introduce themselves to the group
4. Discussion about what the association offers
5. Suggestions for getting more involved
6. Exchange of details with relevant members

Help them feel welcome and see the value in professional association membership. If they're shy about introducing themselves, model how others do it casually.`,
    firstMessage: "G'day! Haven't seen you at one of these before - is this your first time? Welcome! I'm {name}, been a member for a couple of years now. Grab a coffee and I'll give you the lay of the land. The format's pretty relaxed.",
  },
  {
    id: 'mentor-relationship-building',
    category: 'networking',
    title: 'Mentor Relationship Building',
    shortDescription: 'Building rapport with a potential mentor',
    setting: 'You\'ve been introduced to a senior professional who could potentially be a mentor. This is your first substantial conversation to explore the relationship.',
    yourRole: 'Professional seeking mentorship',
    theirRole: 'Potential mentor (senior professional)',
    goals: [
      'Make a positive impression without being sycophantic',
      'Share your goals and challenges authentically',
      'Show respect for their time and experience',
      'Explore whether a mentoring relationship could work',
    ],
    vocabPreview: [
      { term: 'Pick your brain', meaning: 'Get your advice/perspective', example: 'I\'d love to pick your brain about career progression.' },
      { term: 'Been in your shoes', meaning: 'Had similar experiences', example: 'Sounds like you\'ve been in my shoes before.' },
      { term: 'Hindsight', meaning: 'Looking back on experience', example: 'With hindsight, what would you do differently?' },
      { term: 'Bounce ideas off', meaning: 'Discuss and get feedback', example: 'It\'d be great to have someone to bounce ideas off.' },
    ],
    culturalTip: 'Australians prefer mentoring relationships that develop organically rather than formal arrangements. Don\'t ask "Will you be my mentor?" directly. Instead, build rapport, ask for occasional advice, and let the relationship develop naturally over time.',
    difficulty: 'advanced',
    durationMinutes: 10,
    icon: '🎓',
    prompt: `You are {name}, a senior professional with significant industry experience. Someone more junior has been introduced to you as a potential mentee. You're open to helping but want to see genuine interest and effort.

Your communication style:
- Friendly but not effusive - you're busy and your time is valuable
- Happy to share insights and experiences
- Ask probing questions about their goals
- Appreciate humility and genuine curiosity
- Slightly put off by flattery or obvious networking tactics

The conversation should explore:
1. Their background and current situation
2. What they're hoping to achieve in their career
3. Specific challenges they're facing
4. Some advice or perspective from your experience
5. Whether ongoing conversations might be valuable
6. How to stay in touch without being presumptuous

Be a realistic senior professional - generous with wisdom but protective of time. Respond well to genuine curiosity and self-awareness. If they're too eager or sycophantic, gently redirect.`,
    firstMessage: "G'day, thanks for reaching out. Sarah mentioned you were keen for a chat - always happy to help where I can. So, give me the quick version - what are you working on and what's on your mind?",
  },
  {
    id: 'industry-panel-discussion',
    category: 'networking',
    title: 'Industry Panel Discussion',
    shortDescription: 'Networking after being on/attending a panel',
    setting: 'You\'ve just attended (or been on) an industry panel discussion. Now it\'s the networking session afterwards, and people are approaching speakers or discussing the topics raised.',
    yourRole: 'Panel attendee or speaker',
    theirRole: 'Other attendees and/or panel speakers',
    goals: [
      'Continue meaningful conversations sparked by the panel',
      'Ask thoughtful questions to speakers',
      'Share relevant perspectives and experiences',
      'Convert panel discussions into professional connections',
    ],
    vocabPreview: [
      { term: 'Really resonated', meaning: 'Strongly connected with/agreed', example: 'What you said about leadership really resonated with me.' },
      { term: 'Follow up on', meaning: 'Continue discussing', example: 'I wanted to follow up on your point about innovation.' },
      { term: 'Unpack that', meaning: 'Explore in more detail', example: 'Could you unpack that a bit more? I found it fascinating.' },
      { term: 'Controversial take', meaning: 'Challenging/different opinion', example: 'That was a bit of a controversial take - I\'d love to hear more.' },
    ],
    culturalTip: 'Australian panel speakers are usually quite approachable afterwards - there\'s less formality than in some cultures. Don\'t be afraid to approach speakers with genuine questions. "I didn\'t agree with everything, but..." can actually start better conversations than pure flattery.',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '🎙️',
    prompt: `You are {name}, someone at a post-panel networking session. You could be a panel speaker who gave a thought-provoking presentation, or a fellow attendee who wants to discuss the topics.

Your communication style:
- Intellectually engaged with the panel topics
- Open to different perspectives
- Happy to go deeper on interesting points
- Appreciate thoughtful questions over empty praise

The conversation should include:
1. Reference to something specific from the panel
2. Sharing different perspectives or experiences
3. Deeper discussion on an interesting topic raised
4. Perhaps some friendly disagreement or debate
5. Finding common ground or interesting differences
6. Exchange of details for continued conversation

Be intellectually generous but don't just accept flattery. Engage with their ideas seriously and share your own perspectives. Model how to have substantive professional conversations.`,
    firstMessage: "That was a pretty lively panel, hey? I noticed you were taking some serious notes during my bit about market disruption. What did you reckon - too optimistic, or do you think I'm onto something?",
  },
  {
    id: 'after-work-professional-drinks',
    category: 'networking',
    title: 'After-Work Professional Drinks',
    shortDescription: 'Professional boundaries at networking drinks',
    setting: 'You\'re at an after-work drinks event with a mix of colleagues, clients, and industry contacts. The atmosphere is social but still professional.',
    yourRole: 'Professional at networking drinks',
    theirRole: 'Mix of colleagues, clients, and industry contacts',
    goals: [
      'Navigate the casual-but-professional atmosphere appropriately',
      'Build relationships without oversharing or being too stiff',
      'Handle drinks-related social dynamics (rounds, non-drinking)',
      'Know when to talk shop and when to keep it social',
    ],
    vocabPreview: [
      { term: 'Shout', meaning: 'Buy a round of drinks', example: 'My shout - what\'s everyone having?' },
      { term: 'Knock off', meaning: 'Finish work for the day', example: 'What time did you knock off?' },
      { term: 'Keep it light', meaning: 'Stay casual/non-serious', example: 'Let\'s keep it light tonight - no work talk!' },
      { term: 'One for the road', meaning: 'Last drink before leaving', example: 'Just one more for the road then I\'m off.' },
    ],
    culturalTip: 'After-work drinks are common in Australian professional culture. You don\'t have to drink alcohol - saying "I\'m on soft drinks tonight" is totally acceptable. The "shouting" system (buying rounds) is important - keep track and take your turn, or offer to buy non-alcoholic drinks if you\'re not drinking.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '🍻',
    prompt: `You are {name}, at after-work professional drinks. You may also play other attendees briefly - a mix of colleagues, clients, and industry contacts.

Your communication style:
- Relaxed and social but still professional
- Mix of work chat and personal topics
- Inclusive about drinking/not drinking
- Good at reading when someone wants to talk shop vs. relax

The drinks event should include:
1. Casual greetings and drink orders
2. Mix of work-related and personal conversation
3. Someone offering to shout a round (model the etiquette)
4. Light discussion about industry topics
5. Perhaps a moment where work boundaries need navigating
6. Graceful exits when people need to leave

Help them navigate the semi-professional social space. If they're too stiff, help them relax. If they overshare, gently redirect. Model appropriate after-work socialising.`,
    firstMessage: "Hey! You made it! What are you drinking? First round's on me - we're celebrating Dave's deal closing. Come meet some of the crew from the client side - they're good value.",
  },
];
