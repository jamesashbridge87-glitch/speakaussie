export interface CultureModule {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  readingTimeMinutes: number;
  sections: CultureSection[];
  keyTakeaways: string[];
  relatedScenarios: string[]; // IDs of related practice scenarios
}

export interface CultureSection {
  heading: string;
  content: string;
  tip?: string;
  examples?: string[];
}

export const cultureModules: CultureModule[] = [
  {
    id: 'aussie-meeting-culture',
    title: 'The Aussie Meeting: Why It Starts with Chitchat',
    shortDescription: 'Understanding the casual approach to professional meetings',
    icon: '☕',
    readingTimeMinutes: 3,
    sections: [
      {
        heading: 'Meetings Don\'t Start Right Away',
        content: 'If you\'ve ever sat in an Australian meeting wondering when the "real" meeting will start, you\'re not alone. In many cultures, meetings begin promptly with the agenda. In Australia, meetings often start with 2-5 minutes of casual chat - about the weather, the weekend, sports, or life in general.',
        tip: 'Don\'t rush to get to business. This chitchat is part of the meeting, not a delay.',
      },
      {
        heading: 'Why Chitchat Matters',
        content: 'This casual opening serves several purposes: it builds rapport, helps people relax, and establishes a collaborative atmosphere. Australians value relationships alongside results. By taking time to connect as humans first, the actual work discussion often goes more smoothly.',
        examples: [
          '"How was your weekend?" - The classic opener',
          '"Did you see the game last night?" - Sports connection',
          '"This weather, hey?" - Always safe territory',
          '"How\'s the new place going?" - Showing personal interest',
        ],
      },
      {
        heading: 'Joining the Chitchat',
        content: 'You don\'t need to be an expert conversationalist. Simple responses work well: "Yeah, good weekend, pretty quiet" or "Not bad, getting used to the heat!" The goal isn\'t deep conversation - it\'s brief, friendly connection.',
        tip: 'If you\'re unsure what to say, asking questions works well: "Got any plans for the weekend?"',
      },
      {
        heading: 'Reading the Room',
        content: 'Watch for the transition moment. Usually the meeting leader will signal it\'s time to start: "Right, shall we crack on?" or "Okay, let\'s get into it." Until then, enjoy the casual chat - it\'s part of Australian work culture.',
      },
    ],
    keyTakeaways: [
      'Casual chat at the start of meetings is normal and expected',
      'It builds relationships and creates a collaborative atmosphere',
      'Keep your contributions brief and friendly',
      'Wait for the signal to transition to business',
    ],
    relatedScenarios: ['contributing-in-meetings', 'first-team-meeting', 'standup-update'],
  },

  {
    id: 'tall-poppy-syndrome',
    title: 'Tall Poppy Syndrome: Talking About Your Achievements',
    shortDescription: 'Navigating the Australian discomfort with self-promotion',
    icon: '🌷',
    readingTimeMinutes: 4,
    sections: [
      {
        heading: 'What Is Tall Poppy Syndrome?',
        content: 'Tall Poppy Syndrome is the Australian tendency to criticize or resent people who stand out or promote themselves too much. The "tall poppy" gets cut down to size. This cultural trait means that the self-promotion common in other countries can backfire in Australia.',
      },
      {
        heading: 'How It Shows Up at Work',
        content: 'Saying "I\'m the best at this" or "I single-handedly saved the project" will make Australians uncomfortable. Even if it\'s true! They might think you\'re arrogant or not a team player. This doesn\'t mean you can\'t talk about your achievements - you just need to do it differently.',
        examples: [
          'Instead of "I crushed it" → "Yeah, it went pretty well"',
          'Instead of "I\'m an expert" → "I\'ve got a bit of experience in that"',
          'Instead of "I saved the day" → "The team pulled together and we got there"',
        ],
      },
      {
        heading: 'The Art of Humble Confidence',
        content: 'The sweet spot is being confident without being boastful. Share your achievements, but: credit the team, acknowledge luck or help you received, and let results speak for themselves. "We had a good win on that project" lands better than "I achieved amazing results."',
        tip: 'Self-deprecating humor works well. "Yeah, somehow didn\'t stuff it up this time" shows you don\'t take yourself too seriously.',
      },
      {
        heading: 'In Interviews and Reviews',
        content: 'This is where it gets tricky. You need to sell yourself, but not too hard. Focus on specific examples and outcomes rather than self-praise. "In that role, we increased sales by 20%" is better than "I\'m an incredible salesperson." Let the achievements speak.',
      },
      {
        heading: 'It\'s Changing (Slowly)',
        content: 'Younger Australians and international companies in Australia are more comfortable with self-promotion. But in traditional Australian workplaces, the tall poppy instinct is still strong. When in doubt, err on the side of humility.',
      },
    ],
    keyTakeaways: [
      'Direct self-promotion can make Australians uncomfortable',
      'Credit the team and acknowledge others\' contributions',
      'Let achievements speak for themselves with specific examples',
      'Self-deprecating humor helps show you don\'t take yourself too seriously',
      'In interviews, focus on outcomes and examples, not self-praise',
    ],
    relatedScenarios: ['tell-me-about-yourself', 'behavioural-interview', 'asking-for-raise'],
  },

  {
    id: 'friday-drinks-culture',
    title: 'Friday Drinks Culture: What to Expect',
    shortDescription: 'Navigating after-work socializing in Australia',
    icon: '🍺',
    readingTimeMinutes: 3,
    sections: [
      {
        heading: 'The Friday Drinks Tradition',
        content: 'Many Australian workplaces have a "Friday drinks" tradition - after-work drinks to celebrate the end of the week. This might be at a nearby pub, in the office, or at someone\'s house. It\'s a social ritual that helps colleagues bond outside of work mode.',
      },
      {
        heading: 'The "Shout" System',
        content: 'Australians typically take turns "shouting" (buying) rounds of drinks. If someone buys you a drink, you\'re expected to shout them back at some point. Don\'t keep a running tally, but do participate. If you\'re in a group, you might say "I\'ll get the next round."',
        tip: 'If you don\'t drink alcohol, that\'s completely fine. Just shout soft drinks or coffee instead. No one will mind.',
        examples: [
          '"My shout - what\'s everyone having?"',
          '"Let me get this round"',
          '"I\'ll grab the next one"',
        ],
      },
      {
        heading: 'How to Handle Not Drinking',
        content: 'Not drinking alcohol is increasingly common and completely accepted. Simple explanations work: "I\'m driving", "Not drinking tonight", or just "I\'ll have a lemonade, thanks." Don\'t over-explain. Most people won\'t ask why, and if they do, a brief answer is fine.',
      },
      {
        heading: 'Conversation Topics',
        content: 'Friday drinks conversation is relaxed and social. Common topics: weekend plans, sports, TV shows, holidays, funny work stories (keeping it appropriate), local restaurants or events. Avoid heavy work discussions - the point is to unwind.',
        tip: 'If you don\'t follow Australian sports, that\'s okay! Ask questions: "So what\'s the deal with AFL?" People love explaining things they\'re passionate about.',
      },
      {
        heading: 'When to Leave',
        content: 'You don\'t have to stay all night. Leaving after an hour or two is completely normal. Good exit lines: "Right, I\'d better head off", "I should call it a night", or "Early start tomorrow - catch you next time." Say goodbye to people, don\'t just disappear.',
      },
    ],
    keyTakeaways: [
      'Friday drinks is a common social tradition in Australian workplaces',
      'Take turns shouting (buying) rounds',
      'Not drinking alcohol is completely fine',
      'Keep conversation light and social',
      'It\'s okay to leave after an hour or two',
    ],
    relatedScenarios: ['friday-drinks', 'friday-wind-down', 'first-lunch'],
  },

  {
    id: 'email-tone',
    title: 'Email Tone: Why Aussies Sound Casual Even When Serious',
    shortDescription: 'Understanding Australian professional email culture',
    icon: '📧',
    readingTimeMinutes: 3,
    sections: [
      {
        heading: 'The Casual Email Paradox',
        content: 'Australian work emails often sound surprisingly casual. "Hey!", "Cheers", "No worries" - language that might seem too informal in other countries is completely normal here. This doesn\'t mean the content isn\'t serious - it\'s just the Australian communication style.',
      },
      {
        heading: 'Common Australian Email Phrases',
        content: 'Understanding these common phrases will help you read and write emails that fit the culture.',
        examples: [
          '"Hey [Name]" or "Hi [Name]" - Standard openers (not "Dear")',
          '"Hope you\'re well" - Friendly opener',
          '"Just following up on..." - Polite nudge',
          '"Let me know if you have any questions" - Offering help',
          '"Cheers" - Very common sign-off',
          '"Thanks heaps" - Expressing gratitude',
          '"No worries" - Acknowledging thanks or saying something is fine',
        ],
      },
      {
        heading: 'Matching the Tone',
        content: 'A good rule: match the tone of the person you\'re emailing. If they sign off with "Cheers, Mike", you can reply with "Cheers" too. If they\'re more formal, be more formal. When in doubt, err slightly on the casual side rather than overly formal.',
        tip: 'Australians rarely use "Dear" unless it\'s very formal. "Hi [Name]" is almost always appropriate.',
      },
      {
        heading: 'Direct But Polite',
        content: 'Australians are direct in emails. They get to the point quickly without excessive pleasantries. But this directness comes with politeness: "Would you be able to..." rather than "I need you to...", "Thanks for your help with this" at the end, etc.',
      },
      {
        heading: 'Quick Replies Are Valued',
        content: 'The casual tone extends to response time. A quick, brief reply is often better than a delayed, perfect one. "Yep, all good" or "Will do, thanks" are perfectly acceptable responses when that\'s all that\'s needed.',
      },
    ],
    keyTakeaways: [
      'Casual language in emails is normal and professional in Australia',
      '"Cheers" and "Hi [Name]" are standard, not too informal',
      'Match the tone of the person you\'re emailing',
      'Be direct but polite',
      'Quick, brief replies are valued',
    ],
    relatedScenarios: ['weekly-manager-checkin', 'asking-for-help'],
  },

  {
    id: 'aussie-humor-at-work',
    title: 'Aussie Humor at Work: Banter and Taking the Mickey',
    shortDescription: 'Understanding workplace humor and not taking things personally',
    icon: '😄',
    readingTimeMinutes: 3,
    sections: [
      {
        heading: 'The Role of Humor',
        content: 'Humor is central to Australian workplace culture. Australians use jokes, teasing, and banter to build relationships and ease tension. What might seem like insults in other cultures are often signs of acceptance and friendship here.',
      },
      {
        heading: 'Taking the Mickey',
        content: '"Taking the mickey" (or "taking the piss") means gentle teasing. If colleagues tease you about something - your sports team losing, your coffee addiction, a minor mistake - it usually means they like you. The appropriate response is to laugh along or tease them back.',
        examples: [
          '"Nice of you to join us" (when you\'re 2 minutes late) - gentle teasing',
          '"Oh, here we go, coffee number three!" - friendly ribbing',
          '"Your team got smashed on the weekend, hey?" - sports banter',
        ],
        tip: 'If you\'re unsure whether something is teasing or genuine criticism, look at the tone and the smiles. Teasing is usually delivered with a grin.',
      },
      {
        heading: 'Self-Deprecating Humor',
        content: 'Australians love self-deprecating humor - making fun of yourself. It shows you don\'t take yourself too seriously (remember tall poppy syndrome). Saying "Yeah, I stuffed that up" or "Not my finest moment" makes you relatable.',
      },
      {
        heading: 'When Humor Isn\'t Appropriate',
        content: 'Even in Australia, there are limits. Humor isn\'t appropriate when: discussing serious work issues, someone is genuinely upset, topics involve protected characteristics (race, gender, etc.), or in very formal settings with senior executives or clients.',
      },
      {
        heading: 'Joining In',
        content: 'You don\'t have to be funny to participate. Laughing along, adding a simple comment, or doing some gentle teasing back is enough. "Yeah, yeah, very funny" with a smile shows you can take a joke. Over time, you\'ll get more comfortable with the banter.',
      },
    ],
    keyTakeaways: [
      'Teasing often means colleagues like you and accept you',
      'Self-deprecating humor shows you don\'t take yourself too seriously',
      'Laugh along and tease back when appropriate',
      'Know when humor isn\'t appropriate',
      'You don\'t have to be funny - just be a good sport',
    ],
    relatedScenarios: ['friday-drinks', 'kitchen-small-talk', 'first-lunch'],
  },
];

// Helper function to get a module by ID
export function getCultureModuleById(id: string): CultureModule | undefined {
  return cultureModules.find(m => m.id === id);
}

// Helper function to get related modules for a scenario
export function getRelatedModulesForScenario(scenarioId: string): CultureModule[] {
  return cultureModules.filter(m => m.relatedScenarios.includes(scenarioId));
}
