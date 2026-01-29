export interface WorkplacePhrase {
  id: string;
  phrase: string;
  meaning: string;
  situation: WorkplaceSituation;
  subcategory: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  context: string;
  example: string;
  whatTheyHear: string;
  alternatives?: string[];
  avoid?: string;
  culturalNote?: string;
}

export type WorkplaceSituation =
  | 'small-talk'
  | 'friday-drinks'
  | 'banter'
  | 'performance-reviews'
  | 'feedback'
  | 'presentations';

export type WorkplaceDifficulty = 'beginner' | 'intermediate' | 'advanced';

export const situationNames: Record<WorkplaceSituation, string> = {
  'small-talk': 'Small Talk',
  'friday-drinks': 'Friday Drinks & Social Events',
  'banter': 'Banter & Comebacks',
  'performance-reviews': 'Performance Reviews',
  'feedback': 'Giving & Receiving Feedback',
  'presentations': 'Presentations & Pitching',
};

export const situationDescriptions: Record<WorkplaceSituation, string> = {
  'small-talk': 'Everyday workplace conversations',
  'friday-drinks': 'Social events and after-work drinks',
  'banter': 'Playful workplace humor and comebacks',
  'performance-reviews': 'Career conversations and self-advocacy',
  'feedback': 'Giving and receiving constructive feedback',
  'presentations': 'Pitching ideas and presenting to groups',
};

export const situationIcons: Record<WorkplaceSituation, string> = {
  'small-talk': '💬',
  'friday-drinks': '🍻',
  'banter': '😏',
  'performance-reviews': '📈',
  'feedback': '🔄',
  'presentations': '🎤',
};

export const situationOrder: WorkplaceSituation[] = [
  'small-talk',
  'friday-drinks',
  'banter',
  'performance-reviews',
  'feedback',
  'presentations',
];

export const difficultyNames: Record<WorkplaceDifficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export const subcategoryNames: Record<string, string> = {
  // Small Talk
  'greetings-responses': 'Greetings & Responses',
  'weather-chat': 'Weather Conversation',
  'weekend-chat': 'Weekend Chat',
  'returning-from-leave': 'Returning from Leave',
  'transitions': 'Filler & Transitions',
  // Friday Drinks
  'arriving-joining': 'Arriving & Joining',
  'sports-talk': 'Sports Talk Basics',
  'declining-drinks': 'Politely Declining Drinks',
  'exiting-gracefully': 'Exiting Gracefully',
  'inclusive-responses': 'Inclusive Responses',
  // Banter
  'recognizing-pisstakes': 'Recognizing Pisstakes',
  'safe-comebacks': 'Safe Comebacks',
  'self-deprecating': 'Self-Deprecating Deflection',
  'escalating-playfully': 'Escalating Playfully',
  'when-to-laugh': 'When to Just Laugh',
  // Performance Reviews
  'stating-achievements': 'Stating Achievements',
  'asking-for-raises': 'Asking for Raises',
  'receiving-positive': 'Receiving Positive Feedback',
  'receiving-critical': 'Receiving Critical Feedback',
  'asking-for-growth': 'Asking for Growth',
  // Feedback
  'softening-criticism': 'Softening Criticism',
  'decoding-indirect': 'Decoding Indirect Feedback',
  'asking-clarification': 'Asking for Clarification',
  'acknowledging': 'Acknowledging Without Defensiveness',
  'following-up': 'Following Up',
  // Presentations
  'opening-humility': 'Opening with Humility',
  'hedging-confidently': 'Hedging Confidently',
  'inviting-pushback': 'Inviting Pushback',
  'handling-questions': 'Handling Questions',
  'closing': 'Closing Without Overselling',
};

// Small Talk Phrases
export const workplaceData: WorkplacePhrase[] = [
  // === SMALL TALK ===
  // Greetings & Responses
  {
    id: 'st-001',
    phrase: "How ya going?",
    meaning: "How are you? (casual greeting)",
    situation: 'small-talk',
    subcategory: 'greetings-responses',
    difficulty: 'beginner',
    context: "Standard Aussie greeting - use with anyone at work",
    example: "Hey Sarah, how ya going?",
    whatTheyHear: "Friendly, approachable colleague",
    alternatives: ["How's it going?", "How are ya?"],
    avoid: "How do you do? (too formal)",
    culturalNote: "Don't expect a detailed answer - 'Good thanks' is the standard reply"
  },
  {
    id: 'st-002',
    phrase: "Yeah, good thanks. You?",
    meaning: "Standard response to 'How ya going?'",
    situation: 'small-talk',
    subcategory: 'greetings-responses',
    difficulty: 'beginner',
    context: "The expected response - keep it brief",
    example: "How ya going? — Yeah, good thanks. You?",
    whatTheyHear: "Normal, fitting in",
    alternatives: ["Not bad, yourself?", "Good, good. You?"],
    avoid: "Long detailed answers about your actual state",
    culturalNote: "This is a ritual exchange, not a real inquiry about your wellbeing"
  },
  {
    id: 'st-003',
    phrase: "Not too bad",
    meaning: "I'm fine / okay (understated positive)",
    situation: 'small-talk',
    subcategory: 'greetings-responses',
    difficulty: 'beginner',
    context: "Classic Aussie understatement - means things are actually fine",
    example: "How's the project going? — Not too bad, actually.",
    whatTheyHear: "Modest, not a complainer",
    alternatives: ["Can't complain", "Getting there"],
    culturalNote: "Aussies understate positives - 'not too bad' often means 'quite good'"
  },
  {
    id: 'st-004',
    phrase: "G'day",
    meaning: "Hello / Good day",
    situation: 'small-talk',
    subcategory: 'greetings-responses',
    difficulty: 'beginner',
    context: "Classic Australian greeting - works in any context",
    example: "G'day mate, good to see you.",
    whatTheyHear: "Friendly, Australian",
    alternatives: ["Hey", "Morning"],
    culturalNote: "Perfectly acceptable in professional settings despite being casual"
  },
  {
    id: 'st-005',
    phrase: "Cheers",
    meaning: "Thanks / Goodbye / Cheers (toast)",
    situation: 'small-talk',
    subcategory: 'greetings-responses',
    difficulty: 'beginner',
    context: "Multi-purpose word - context tells you which meaning",
    example: "I'll send that through now. — Cheers!",
    whatTheyHear: "Casual, friendly",
    alternatives: ["Ta", "Thanks mate"],
  },

  // Weather Conversation
  {
    id: 'st-006',
    phrase: "Bit warm today, isn't it?",
    meaning: "It's hot today (understatement)",
    situation: 'small-talk',
    subcategory: 'weather-chat',
    difficulty: 'beginner',
    context: "Safe conversation starter - weather is always acceptable",
    example: "Bit warm today, isn't it? — Yeah, gonna be a scorcher.",
    whatTheyHear: "Normal office chit-chat",
    alternatives: ["Hot one today", "Warm enough for ya?"],
    culturalNote: "'Bit warm' when it's 40°C is peak Aussie understatement"
  },
  {
    id: 'st-007',
    phrase: "Can you believe this weather?",
    meaning: "Conversation opener about unusual weather",
    situation: 'small-talk',
    subcategory: 'weather-chat',
    difficulty: 'beginner',
    context: "Works for any extreme weather - rain, heat, cold",
    example: "Can you believe this weather? Three days of rain!",
    whatTheyHear: "Making friendly conversation",
    alternatives: ["This weather's crazy", "What's with this weather?"],
  },
  {
    id: 'st-008',
    phrase: "Beautiful day for it",
    meaning: "Nice weather today",
    situation: 'small-talk',
    subcategory: 'weather-chat',
    difficulty: 'intermediate',
    context: "Positive comment about the weather",
    example: "Beautiful day for it! — Yeah, should've called in sick!",
    whatTheyHear: "Appreciating the good weather, relatable",
    alternatives: ["Lovely day", "Great day out there"],
    culturalNote: "Often said ironically when stuck inside working"
  },

  // Weekend Chat
  {
    id: 'st-009',
    phrase: "Got much on this weekend?",
    meaning: "What are your plans for the weekend?",
    situation: 'small-talk',
    subcategory: 'weekend-chat',
    difficulty: 'beginner',
    context: "Friday conversation starter - very common",
    example: "Got much on this weekend? — Just a quiet one, catching up on Netflix.",
    whatTheyHear: "Friendly interest in your life",
    alternatives: ["Any plans for the weekend?", "What are you up to this weekend?"],
  },
  {
    id: 'st-010',
    phrase: "Just a quiet one",
    meaning: "I'm having a relaxed weekend at home",
    situation: 'small-talk',
    subcategory: 'weekend-chat',
    difficulty: 'beginner',
    context: "Perfect response when you have no exciting plans",
    example: "What are you up to? — Just a quiet one. Might do some gardening.",
    whatTheyHear: "Normal, relatable",
    alternatives: ["Nothing too exciting", "Taking it easy"],
    culturalNote: "No need to have impressive plans - low-key is perfectly acceptable"
  },
  {
    id: 'st-011',
    phrase: "Do anything good on the weekend?",
    meaning: "How was your weekend? (Monday greeting)",
    situation: 'small-talk',
    subcategory: 'weekend-chat',
    difficulty: 'beginner',
    context: "Monday morning conversation starter",
    example: "Morning! Do anything good on the weekend? — Yeah, went to the beach actually.",
    whatTheyHear: "Making friendly Monday conversation",
    alternatives: ["How was the weekend?", "Good weekend?"],
  },
  {
    id: 'st-012',
    phrase: "Yeah, it was alright",
    meaning: "My weekend was fine/good",
    situation: 'small-talk',
    subcategory: 'weekend-chat',
    difficulty: 'beginner',
    context: "Standard response - keep it brief unless they ask more",
    example: "Good weekend? — Yeah, it was alright. Yours?",
    whatTheyHear: "Normal, not over-sharing",
    alternatives: ["Not bad", "Yeah, pretty good"],
  },

  // Returning from Leave
  {
    id: 'st-013',
    phrase: "How was the break?",
    meaning: "How was your time off?",
    situation: 'small-talk',
    subcategory: 'returning-from-leave',
    difficulty: 'beginner',
    context: "Ask a colleague returning from holiday",
    example: "Welcome back! How was the break?",
    whatTheyHear: "Friendly, interested colleague",
    alternatives: ["Good holiday?", "How was the trip?"],
  },
  {
    id: 'st-014',
    phrase: "Good to be back... sort of",
    meaning: "Acknowledging you'd rather still be on holiday",
    situation: 'small-talk',
    subcategory: 'returning-from-leave',
    difficulty: 'intermediate',
    context: "Relatable response when returning from leave",
    example: "Welcome back! — Yeah, good to be back... sort of. Ha!",
    whatTheyHear: "Honest, relatable, good humor",
    alternatives: ["Yeah, back to reality", "Was nice while it lasted"],
    culturalNote: "It's okay to admit you'd rather be on holiday - very relatable"
  },
  {
    id: 'st-015',
    phrase: "Easing back into it",
    meaning: "Taking it slow on my first day back",
    situation: 'small-talk',
    subcategory: 'returning-from-leave',
    difficulty: 'intermediate',
    context: "Explain you're not at full speed yet",
    example: "Big day? — Nah, just easing back into it.",
    whatTheyHear: "Reasonable, normal",
    alternatives: ["Getting back up to speed", "Still in holiday mode"],
  },

  // Filler & Transitions
  {
    id: 'st-016',
    phrase: "Anyway...",
    meaning: "Changing the subject / wrapping up",
    situation: 'small-talk',
    subcategory: 'transitions',
    difficulty: 'beginner',
    context: "Signal that you're moving on from small talk",
    example: "Anyway... better get back to it.",
    whatTheyHear: "Natural conversation transition",
    alternatives: ["Right...", "So..."],
    culturalNote: "Essential for politely ending a conversation"
  },
  {
    id: 'st-017',
    phrase: "Right, better get back to it",
    meaning: "I need to end this chat and return to work",
    situation: 'small-talk',
    subcategory: 'transitions',
    difficulty: 'beginner',
    context: "Polite way to end a conversation",
    example: "Anyway, right, better get back to it. Catch you later!",
    whatTheyHear: "Professional, not rude",
    alternatives: ["Better crack on", "Should probably do some work"],
  },
  {
    id: 'st-018',
    phrase: "Catch you later",
    meaning: "Goodbye (casual)",
    situation: 'small-talk',
    subcategory: 'transitions',
    difficulty: 'beginner',
    context: "Casual goodbye to colleagues",
    example: "Right, catch you later! — See ya!",
    whatTheyHear: "Friendly, casual",
    alternatives: ["See ya", "Later"],
  },
  {
    id: 'st-019',
    phrase: "I'll let you get on with it",
    meaning: "I won't keep you any longer",
    situation: 'small-talk',
    subcategory: 'transitions',
    difficulty: 'intermediate',
    context: "Politely ending a conversation when someone seems busy",
    example: "You look busy - I'll let you get on with it.",
    whatTheyHear: "Considerate, respectful of their time",
    alternatives: ["I won't keep you", "I'll leave you to it"],
  },
  {
    id: 'st-020',
    phrase: "Speaking of which...",
    meaning: "That reminds me / related to that...",
    situation: 'small-talk',
    subcategory: 'transitions',
    difficulty: 'intermediate',
    context: "Transition from small talk to a work topic",
    example: "Speaking of which, did you get a chance to look at that email?",
    whatTheyHear: "Natural conversation flow",
    alternatives: ["On that note...", "That reminds me..."],
  },
  {
    id: 'st-021',
    phrase: "How's things?",
    meaning: "How are you? / How's everything going?",
    situation: 'small-talk',
    subcategory: 'greetings-responses',
    difficulty: 'beginner',
    context: "Casual check-in greeting",
    example: "Hey Dave, how's things? — Yeah, not bad mate.",
    whatTheyHear: "Friendly, casual greeting",
    alternatives: ["How's it all going?", "How are things?"],
  },
  {
    id: 'st-022',
    phrase: "Same old, same old",
    meaning: "Nothing new, everything is as usual",
    situation: 'small-talk',
    subcategory: 'greetings-responses',
    difficulty: 'intermediate',
    context: "Response when nothing exciting is happening",
    example: "What's new? — Same old, same old.",
    whatTheyHear: "Relatable, normal",
    alternatives: ["Nothing much", "The usual"],
  },

  // === FRIDAY DRINKS & SOCIAL EVENTS ===
  // Arriving & Joining
  {
    id: 'fd-001',
    phrase: "Mind if I join you?",
    meaning: "Can I sit/stand with your group?",
    situation: 'friday-drinks',
    subcategory: 'arriving-joining',
    difficulty: 'beginner',
    context: "Politely joining a group at a social event",
    example: "Mind if I join you? — Yeah, course! Grab a seat.",
    whatTheyHear: "Friendly, polite, not pushy",
    alternatives: ["Room for one more?", "Can I join?"],
  },
  {
    id: 'fd-002',
    phrase: "What are we drinking?",
    meaning: "What's everyone having? / I'll get a round",
    situation: 'friday-drinks',
    subcategory: 'arriving-joining',
    difficulty: 'beginner',
    context: "Joining in and potentially offering to buy drinks",
    example: "What are we drinking? I'll grab the next round.",
    whatTheyHear: "Generous, team player",
    alternatives: ["What's everyone having?", "Can I get anyone a drink?"],
    culturalNote: "Offering to buy a round is a great way to integrate"
  },
  {
    id: 'fd-003',
    phrase: "What's the chat?",
    meaning: "What are you all talking about?",
    situation: 'friday-drinks',
    subcategory: 'arriving-joining',
    difficulty: 'intermediate',
    context: "Joining a conversation already in progress",
    example: "Hey everyone! What's the chat?",
    whatTheyHear: "Interested, engaging",
    alternatives: ["What are we talking about?", "What did I miss?"],
  },

  // Sports Talk Basics
  {
    id: 'fd-004',
    phrase: "Did you catch the game?",
    meaning: "Did you watch the match?",
    situation: 'friday-drinks',
    subcategory: 'sports-talk',
    difficulty: 'beginner',
    context: "Opening sports conversation - works for any major sport",
    example: "Did you catch the game on the weekend?",
    whatTheyHear: "Making an effort to connect",
    alternatives: ["See the game?", "Watch the footy?"],
    culturalNote: "You don't need to know details - this opens the door for them to talk"
  },
  {
    id: 'fd-005',
    phrase: "How's your team going?",
    meaning: "How is your sports team performing this season?",
    situation: 'friday-drinks',
    subcategory: 'sports-talk',
    difficulty: 'beginner',
    context: "Ask about their team if you know they follow one",
    example: "How's your team going this season?",
    whatTheyHear: "Remembered what I care about",
    alternatives: ["Your mob doing alright?", "How are they going?"],
  },
  {
    id: 'fd-006',
    phrase: "I didn't catch it - any good?",
    meaning: "I didn't watch, but I'm interested to hear about it",
    situation: 'friday-drinks',
    subcategory: 'sports-talk',
    difficulty: 'intermediate',
    context: "Shows interest without faking knowledge",
    example: "Did you see the final? — Nah, I didn't catch it - any good?",
    whatTheyHear: "Honest, still engaging with the topic",
    alternatives: ["Missed it - how'd it go?", "What happened?"],
    culturalNote: "Better to admit you didn't watch than fake it"
  },
  {
    id: 'fd-007',
    phrase: "I'm not much of a footy person, but fill me in",
    meaning: "I don't follow the sport but I'm happy to listen",
    situation: 'friday-drinks',
    subcategory: 'sports-talk',
    difficulty: 'intermediate',
    context: "Honest admission while staying engaged",
    example: "I'm not much of a footy person, but fill me in - what happened?",
    whatTheyHear: "Honest, making an effort to connect anyway",
    alternatives: ["Don't really follow it, but what's the story?"],
    culturalNote: "Aussies appreciate honesty over pretending to know"
  },

  // Politely Declining Drinks
  {
    id: 'fd-008',
    phrase: "I'm good with water, thanks",
    meaning: "I don't want alcohol but I'll stay",
    situation: 'friday-drinks',
    subcategory: 'declining-drinks',
    difficulty: 'beginner',
    context: "Declining alcohol without making it awkward",
    example: "What can I get you? — I'm good with water, thanks.",
    whatTheyHear: "No big deal, still social",
    alternatives: ["Just a soft drink for me", "I'll stick with water"],
    culturalNote: "No one cares if you don't drink - just stay social"
  },
  {
    id: 'fd-009',
    phrase: "I'm driving tonight",
    meaning: "I can't drink because I'm the designated driver",
    situation: 'friday-drinks',
    subcategory: 'declining-drinks',
    difficulty: 'beginner',
    context: "Universally accepted reason not to drink",
    example: "Beer? — Nah, I'm driving tonight. I'll have a lemonade.",
    whatTheyHear: "Responsible, no judgment",
    alternatives: ["Got the car", "Designated driver tonight"],
  },
  {
    id: 'fd-010',
    phrase: "I'm taking it easy tonight",
    meaning: "I'm not drinking much / at all",
    situation: 'friday-drinks',
    subcategory: 'declining-drinks',
    difficulty: 'intermediate',
    context: "Vague reason to not drink - no explanation needed",
    example: "Another round? — Nah, I'm taking it easy tonight.",
    whatTheyHear: "Fair enough, no questions asked",
    alternatives: ["Having a quiet one", "Not tonight"],
  },

  // Exiting Gracefully
  {
    id: 'fd-011',
    phrase: "I'd better head off",
    meaning: "I need to leave now",
    situation: 'friday-drinks',
    subcategory: 'exiting-gracefully',
    difficulty: 'beginner',
    context: "Casual way to announce you're leaving",
    example: "Right, I'd better head off. Early start tomorrow.",
    whatTheyHear: "Natural, not a big deal",
    alternatives: ["Better get going", "Time for me to head off"],
    culturalNote: "Aussies don't do long goodbyes - keep it brief"
  },
  {
    id: 'fd-012',
    phrase: "Early start tomorrow",
    meaning: "Reason for leaving - I have work/commitments early",
    situation: 'friday-drinks',
    subcategory: 'exiting-gracefully',
    difficulty: 'beginner',
    context: "Universally accepted reason to leave",
    example: "Heading off already? — Yeah, early start tomorrow.",
    whatTheyHear: "Fair enough, responsible",
    alternatives: ["Got an early one", "Big day tomorrow"],
  },
  {
    id: 'fd-013',
    phrase: "Good to catch up with everyone",
    meaning: "Nice seeing you all (farewell)",
    situation: 'friday-drinks',
    subcategory: 'exiting-gracefully',
    difficulty: 'beginner',
    context: "Positive note when leaving",
    example: "Anyway, I'm off. Good to catch up with everyone!",
    whatTheyHear: "Friendly, appreciative",
    alternatives: ["Good seeing everyone", "This was fun"],
  },

  // Inclusive Responses
  {
    id: 'fd-014',
    phrase: "Tell me more about that",
    meaning: "I'm interested, please continue",
    situation: 'friday-drinks',
    subcategory: 'inclusive-responses',
    difficulty: 'beginner',
    context: "Show interest when you don't know the topic",
    example: "So the match went to extra time... — Tell me more about that.",
    whatTheyHear: "Genuinely interested, engaged",
    alternatives: ["What happened next?", "Go on"],
  },
  {
    id: 'fd-015',
    phrase: "That sounds full on",
    meaning: "That sounds intense/busy/dramatic",
    situation: 'friday-drinks',
    subcategory: 'inclusive-responses',
    difficulty: 'intermediate',
    context: "Empathetic response to someone's story",
    example: "We had three deadlines hit at once. — That sounds full on!",
    whatTheyHear: "Empathetic, understanding",
    alternatives: ["Sounds hectic", "That's intense"],
  },

  // === BANTER & COMEBACKS ===
  // Recognizing Pisstakes
  {
    id: 'bn-001',
    phrase: "You're having a go at me, aren't you?",
    meaning: "You're joking/teasing me, right?",
    situation: 'banter',
    subcategory: 'recognizing-pisstakes',
    difficulty: 'intermediate',
    context: "Clarifying if someone is joking",
    example: "You're having a go at me, aren't you? — Ha! Yeah, just stirring.",
    whatTheyHear: "Gets the joke, playing along",
    alternatives: ["Taking the piss?", "You're stirring, right?"],
    culturalNote: "Shows you understand Australian humor"
  },
  {
    id: 'bn-002',
    phrase: "Very funny",
    meaning: "I know you're joking (deadpan response)",
    situation: 'banter',
    subcategory: 'recognizing-pisstakes',
    difficulty: 'beginner',
    context: "Deadpan acknowledgment of a joke",
    example: "Nice shirt - did your mum pick that out? — Very funny.",
    whatTheyHear: "Gets the joke, not offended",
    alternatives: ["Ha ha", "Yeah, yeah"],
  },

  // Safe Comebacks
  {
    id: 'bn-003',
    phrase: "Yeah, yeah",
    meaning: "Dismissive acknowledgment (I hear you but whatever)",
    situation: 'banter',
    subcategory: 'safe-comebacks',
    difficulty: 'beginner',
    context: "Safe response to any teasing",
    example: "Late again? — Yeah, yeah.",
    whatTheyHear: "Taking it in stride",
    alternatives: ["Yeah, alright", "Whatever you say"],
  },
  {
    id: 'bn-004',
    phrase: "Fair call",
    meaning: "You make a good point / fair enough",
    situation: 'banter',
    subcategory: 'safe-comebacks',
    difficulty: 'beginner',
    context: "Accepting criticism or a good point gracefully",
    example: "Maybe check your work next time? — Fair call.",
    whatTheyHear: "Reasonable, takes feedback well",
    alternatives: ["Fair point", "Can't argue with that"],
  },
  {
    id: 'bn-005',
    phrase: "Get stuffed",
    meaning: "Go away / No way (friendly context)",
    situation: 'banter',
    subcategory: 'safe-comebacks',
    difficulty: 'intermediate',
    context: "Friendly dismissal - ONLY use with people you have rapport with",
    example: "You should do all the filing. — Get stuffed! Ha!",
    whatTheyHear: "Playing along, good banter",
    alternatives: ["Yeah right", "In your dreams"],
    avoid: "Using with people you don't know well or seniors",
    culturalNote: "Sounds aggressive but is friendly in right context"
  },
  {
    id: 'bn-006',
    phrase: "Mate, come on",
    meaning: "Be serious / give me a break",
    situation: 'banter',
    subcategory: 'safe-comebacks',
    difficulty: 'beginner',
    context: "Gentle pushback on something unreasonable",
    example: "Can you finish this by lunch? — Mate, come on. That's not happening.",
    whatTheyHear: "Reasonable pushback, friendly tone",
    alternatives: ["Come off it", "Be serious"],
  },

  // Self-Deprecating Deflection
  {
    id: 'bn-007',
    phrase: "Yeah, I walked into that one",
    meaning: "I set myself up for that joke",
    situation: 'banter',
    subcategory: 'self-deprecating',
    difficulty: 'intermediate',
    context: "Acknowledge when you've been got",
    example: "That's what happens when you— — Yeah, I walked into that one.",
    whatTheyHear: "Good sport, can laugh at themselves",
    alternatives: ["Set myself up for that", "Should've seen that coming"],
  },
  {
    id: 'bn-008',
    phrase: "Story of my life",
    meaning: "That's typical for me (self-deprecating)",
    situation: 'banter',
    subcategory: 'self-deprecating',
    difficulty: 'intermediate',
    context: "Humorous admission of a pattern",
    example: "Forgot your laptop charger again? — Story of my life.",
    whatTheyHear: "Self-aware, good humor",
    alternatives: ["Sounds about right", "Classic me"],
  },

  // Escalating Playfully
  {
    id: 'bn-009',
    phrase: "Says the bloke who...",
    meaning: "You're one to talk, considering...",
    situation: 'banter',
    subcategory: 'escalating-playfully',
    difficulty: 'advanced',
    context: "Turning the joke back on them",
    example: "Nice parking job! — Says the bloke who reversed into a bin.",
    whatTheyHear: "Good banter, quick wit",
    alternatives: ["Rich coming from you", "You can talk"],
    avoid: "Anything too personal or genuinely hurtful",
    culturalNote: "Keep it light - the goal is laughs, not hurt"
  },
  {
    id: 'bn-010',
    phrase: "That's rich coming from you",
    meaning: "You're one to talk",
    situation: 'banter',
    subcategory: 'escalating-playfully',
    difficulty: 'intermediate',
    context: "Playfully pointing out their hypocrisy",
    example: "You're always late. — That's rich coming from you!",
    whatTheyHear: "Quick comeback, playing the game",
    alternatives: ["You can talk", "Look who's talking"],
  },

  // When to Just Laugh
  {
    id: 'bn-011',
    phrase: "Ha! Good one",
    meaning: "That was a funny joke (genuine appreciation)",
    situation: 'banter',
    subcategory: 'when-to-laugh',
    difficulty: 'beginner',
    context: "Appreciate a good joke - don't always need a comeback",
    example: "[Someone makes a good joke] — Ha! Good one.",
    whatTheyHear: "Appreciates humor, easy to be around",
    alternatives: ["That's gold", "Classic"],
    culturalNote: "Sometimes laughing is the best response - not everything needs a comeback"
  },
  {
    id: 'bn-012',
    phrase: "Alright, you got me",
    meaning: "Okay, that was a good one, I concede",
    situation: 'banter',
    subcategory: 'when-to-laugh',
    difficulty: 'beginner',
    context: "Concede when they've made a good point or joke",
    example: "[Clever comeback from colleague] — Alright, you got me.",
    whatTheyHear: "Good sport, gracious",
    alternatives: ["Fair enough, you win", "I'll give you that one"],
  },

  // === PERFORMANCE REVIEWS ===
  // Stating Achievements
  {
    id: 'pr-001',
    phrase: "I was pretty happy with how X turned out",
    meaning: "I'm proud of this achievement (humble framing)",
    situation: 'performance-reviews',
    subcategory: 'stating-achievements',
    difficulty: 'intermediate',
    context: "Mention an achievement without sounding arrogant",
    example: "I was pretty happy with how the client presentation turned out.",
    whatTheyHear: "Confident but humble",
    alternatives: ["I think X went well", "X was a good outcome"],
    avoid: "I absolutely crushed it / I was amazing",
    culturalNote: "Understate your wins - let the results speak"
  },
  {
    id: 'pr-002',
    phrase: "The team did a great job on that",
    meaning: "I'm sharing credit (even if you led it)",
    situation: 'performance-reviews',
    subcategory: 'stating-achievements',
    difficulty: 'intermediate',
    context: "Share credit while still being associated with success",
    example: "The team did a great job on the launch. I'm glad I could help coordinate it.",
    whatTheyHear: "Team player, humble leader",
    alternatives: ["We pulled together well", "It was a team effort"],
    culturalNote: "Aussies value team credit over individual glory"
  },
  {
    id: 'pr-003',
    phrase: "I'm proud of the work we did on...",
    meaning: "Stating pride in achievement (balanced framing)",
    situation: 'performance-reviews',
    subcategory: 'stating-achievements',
    difficulty: 'intermediate',
    context: "Express pride without arrogance",
    example: "I'm proud of the work we did on streamlining the onboarding process.",
    whatTheyHear: "Appropriately confident, takes ownership",
    alternatives: ["I'm pleased with how X turned out", "I was glad to lead..."],
  },

  // Asking for Raises
  {
    id: 'pr-004',
    phrase: "I wanted to chat about where I'm at",
    meaning: "I'd like to discuss my compensation/role",
    situation: 'performance-reviews',
    subcategory: 'asking-for-raises',
    difficulty: 'intermediate',
    context: "Open the conversation about a raise",
    example: "I wanted to chat about where I'm at and what the path forward looks like.",
    whatTheyHear: "Professional, direct without being aggressive",
    alternatives: ["Can we discuss my progression?", "I'd like to talk about my role"],
  },
  {
    id: 'pr-005',
    phrase: "What would it take to get to the next level?",
    meaning: "What do I need to do to earn a promotion?",
    situation: 'performance-reviews',
    subcategory: 'asking-for-raises',
    difficulty: 'intermediate',
    context: "Frame it as wanting to earn advancement",
    example: "I'm keen to grow here. What would it take to get to the next level?",
    whatTheyHear: "Ambitious but reasonable, wants to earn it",
    alternatives: ["What does the path to promotion look like?"],
  },

  // Receiving Positive Feedback
  {
    id: 'pr-006',
    phrase: "Thanks, I appreciate that",
    meaning: "Thank you for the positive feedback",
    situation: 'performance-reviews',
    subcategory: 'receiving-positive',
    difficulty: 'beginner',
    context: "Accept a compliment gracefully",
    example: "You did a fantastic job on that. — Thanks, I appreciate that.",
    whatTheyHear: "Gracious, professional",
    alternatives: ["Thanks, that means a lot", "I appreciate you saying that"],
    avoid: '"I know right?" or excessive self-praise',
    culturalNote: "Accept compliments simply - don't deflect too much or gloat"
  },
  {
    id: 'pr-007',
    phrase: "I had good support from the team",
    meaning: "I'm sharing credit for my success",
    situation: 'performance-reviews',
    subcategory: 'receiving-positive',
    difficulty: 'intermediate',
    context: "Acknowledge others when receiving praise",
    example: "Great work on that project. — Thanks! I had good support from the team.",
    whatTheyHear: "Humble, team player",
    alternatives: ["Couldn't have done it without the team"],
  },

  // Receiving Critical Feedback
  {
    id: 'pr-008',
    phrase: "That's fair, I can work on that",
    meaning: "I accept the feedback and will improve",
    situation: 'performance-reviews',
    subcategory: 'receiving-critical',
    difficulty: 'intermediate',
    context: "Accept criticism gracefully",
    example: "Your reports could be more detailed. — That's fair, I can work on that.",
    whatTheyHear: "Takes feedback well, growth mindset",
    alternatives: ["Good point, I'll focus on that", "I hear you"],
    avoid: "Getting defensive or making excuses",
  },
  {
    id: 'pr-009',
    phrase: "Can you give me an example?",
    meaning: "I'd like more specific feedback",
    situation: 'performance-reviews',
    subcategory: 'receiving-critical',
    difficulty: 'intermediate',
    context: "Ask for specifics without being defensive",
    example: "Sometimes your communication could be clearer. — Can you give me an example?",
    whatTheyHear: "Wants to understand and improve",
    alternatives: ["What would that look like?", "Could you be more specific?"],
  },

  // Asking for Growth
  {
    id: 'pr-010',
    phrase: "I'd be keen to take on more of...",
    meaning: "I'm interested in expanding my responsibilities",
    situation: 'performance-reviews',
    subcategory: 'asking-for-growth',
    difficulty: 'intermediate',
    context: "Express interest in growth opportunities",
    example: "I'd be keen to take on more client-facing work.",
    whatTheyHear: "Ambitious, proactive",
    alternatives: ["I'm interested in getting more involved with..."],
  },
  {
    id: 'pr-011',
    phrase: "What opportunities are there to develop in that area?",
    meaning: "How can I grow my skills in this direction?",
    situation: 'performance-reviews',
    subcategory: 'asking-for-growth',
    difficulty: 'intermediate',
    context: "Ask about development pathways",
    example: "What opportunities are there to develop my leadership skills?",
    whatTheyHear: "Growth-oriented, taking initiative",
    alternatives: ["How could I build experience in...?"],
  },

  // === GIVING & RECEIVING FEEDBACK ===
  // Softening Criticism
  {
    id: 'fb-001',
    phrase: "Just a thought...",
    meaning: "I have a suggestion (softening a criticism)",
    situation: 'feedback',
    subcategory: 'softening-criticism',
    difficulty: 'beginner',
    context: "Introduce feedback gently",
    example: "Just a thought - maybe we could try a different approach?",
    whatTheyHear: "Helpful suggestion, not an attack",
    alternatives: ["Just an idea...", "One thing to consider..."],
  },
  {
    id: 'fb-002',
    phrase: "Have you considered...?",
    meaning: "What about this alternative approach?",
    situation: 'feedback',
    subcategory: 'softening-criticism',
    difficulty: 'beginner',
    context: "Suggest an alternative without criticizing directly",
    example: "Have you considered running this by legal first?",
    whatTheyHear: "Helpful, not critical",
    alternatives: ["What about...?", "Could we try...?"],
  },
  {
    id: 'fb-003',
    phrase: "No worries if not, but...",
    meaning: "This is a suggestion, no pressure",
    situation: 'feedback',
    subcategory: 'softening-criticism',
    difficulty: 'intermediate',
    context: "Frame feedback as optional",
    example: "No worries if not, but it might be worth double-checking the numbers.",
    whatTheyHear: "Helpful, not demanding",
    alternatives: ["Just flagging...", "Worth considering..."],
  },

  // Decoding Indirect Feedback
  {
    id: 'fb-004',
    phrase: "Interesting approach",
    meaning: "I disagree / I'm skeptical (indirect)",
    situation: 'feedback',
    subcategory: 'decoding-indirect',
    difficulty: 'advanced',
    context: "Understanding what this really means when someone says it to you",
    example: "That's an interesting approach... — [Translation: They're not convinced]",
    whatTheyHear: "N/A - this is about understanding what others mean",
    culturalNote: "In Aussie workplaces, 'interesting' often means 'I disagree but won't say so directly'"
  },
  {
    id: 'fb-005',
    phrase: "That's one way to do it",
    meaning: "I would have done it differently (indirect criticism)",
    situation: 'feedback',
    subcategory: 'decoding-indirect',
    difficulty: 'advanced',
    context: "Understanding implied criticism",
    example: "That's one way to do it... — [Translation: Probably not the best way]",
    whatTheyHear: "N/A - this is about understanding what others mean",
    culturalNote: "If someone says this, ask what they would suggest"
  },

  // Asking for Clarification
  {
    id: 'fb-006',
    phrase: "What would you suggest instead?",
    meaning: "Help me understand the better approach",
    situation: 'feedback',
    subcategory: 'asking-clarification',
    difficulty: 'intermediate',
    context: "Turn vague criticism into actionable feedback",
    example: "This could be stronger. — What would you suggest instead?",
    whatTheyHear: "Wants to improve, collaborative",
    alternatives: ["How would you approach it?", "What did you have in mind?"],
  },
  {
    id: 'fb-007',
    phrase: "Can you help me understand what you mean?",
    meaning: "I need more clarity on your feedback",
    situation: 'feedback',
    subcategory: 'asking-clarification',
    difficulty: 'intermediate',
    context: "Ask for specifics professionally",
    example: "Can you help me understand what you mean by 'more strategic'?",
    whatTheyHear: "Engaged, wants to understand",
    alternatives: ["Could you elaborate?", "What would that look like?"],
  },

  // Acknowledging Without Defensiveness
  {
    id: 'fb-008',
    phrase: "I hear you",
    meaning: "I understand your point",
    situation: 'feedback',
    subcategory: 'acknowledging',
    difficulty: 'beginner',
    context: "Acknowledge feedback without committing",
    example: "The timeline seems tight. — I hear you. Let me see what I can do.",
    whatTheyHear: "Listened, understood, not defensive",
    alternatives: ["I get that", "I understand"],
  },
  {
    id: 'fb-009',
    phrase: "That's a fair point",
    meaning: "I agree with your observation",
    situation: 'feedback',
    subcategory: 'acknowledging',
    difficulty: 'beginner',
    context: "Accept valid criticism gracefully",
    example: "The data section needs more detail. — That's a fair point.",
    whatTheyHear: "Reasonable, open to feedback",
    alternatives: ["Fair enough", "Good point"],
  },

  // Following Up
  {
    id: 'fb-010',
    phrase: "I've had a think about what you said",
    meaning: "I've reflected on your feedback",
    situation: 'feedback',
    subcategory: 'following-up',
    difficulty: 'intermediate',
    context: "Follow up on previous feedback",
    example: "I've had a think about what you said, and I've made some changes.",
    whatTheyHear: "Took feedback seriously, proactive",
    alternatives: ["I've been thinking about your feedback..."],
  },
  {
    id: 'fb-011',
    phrase: "Does this address what you were thinking?",
    meaning: "Is this the change you wanted?",
    situation: 'feedback',
    subcategory: 'following-up',
    difficulty: 'intermediate',
    context: "Check if you've addressed feedback correctly",
    example: "I've updated the report. Does this address what you were thinking?",
    whatTheyHear: "Collaborative, checking alignment",
    alternatives: ["Is this more along the lines of what you meant?"],
  },

  // === PRESENTATIONS & PITCHING ===
  // Opening with Humility
  {
    id: 'ps-001',
    phrase: "I'll keep this quick",
    meaning: "I won't waste your time",
    situation: 'presentations',
    subcategory: 'opening-humility',
    difficulty: 'beginner',
    context: "Opening that respects people's time",
    example: "I'll keep this quick - just wanted to share a few thoughts on...",
    whatTheyHear: "Respects my time, efficient",
    alternatives: ["This won't take long", "Just a quick one"],
    culturalNote: "Aussies appreciate brevity and dislike waffle"
  },
  {
    id: 'ps-002',
    phrase: "Bear with me",
    meaning: "Please be patient while I explain",
    situation: 'presentations',
    subcategory: 'opening-humility',
    difficulty: 'beginner',
    context: "Asking for patience before explaining something complex",
    example: "Bear with me while I walk you through this.",
    whatTheyHear: "Considerate, aware of complexity",
    alternatives: ["Stick with me here"],
  },

  // Hedging Confidently
  {
    id: 'ps-003',
    phrase: "I reckon...",
    meaning: "I think / believe (softened but confident)",
    situation: 'presentations',
    subcategory: 'hedging-confidently',
    difficulty: 'beginner',
    context: "State an opinion without sounding arrogant",
    example: "I reckon we should focus on the Melbourne market first.",
    whatTheyHear: "Confident but open to other views",
    alternatives: ["My take is...", "The way I see it..."],
    avoid: "I know for a fact that...",
    culturalNote: "Hedging shows you're open to discussion - valued in Aussie culture"
  },
  {
    id: 'ps-004',
    phrase: "The way I see it...",
    meaning: "My perspective is...",
    situation: 'presentations',
    subcategory: 'hedging-confidently',
    difficulty: 'intermediate',
    context: "Share your view while acknowledging other perspectives exist",
    example: "The way I see it, we need to move faster on this.",
    whatTheyHear: "Confident, but not dismissing other views",
    alternatives: ["From where I'm sitting...", "My read on this is..."],
  },

  // Inviting Pushback
  {
    id: 'ps-005',
    phrase: "Tell me if I'm off track",
    meaning: "Please correct me if I'm wrong",
    situation: 'presentations',
    subcategory: 'inviting-pushback',
    difficulty: 'intermediate',
    context: "Invite challenge during a presentation",
    example: "Tell me if I'm off track, but I think we should...",
    whatTheyHear: "Open-minded, collaborative",
    alternatives: ["Pull me up if I'm wrong", "Push back if this doesn't land"],
  },
  {
    id: 'ps-006',
    phrase: "I'm keen to hear what you think",
    meaning: "I want your input",
    situation: 'presentations',
    subcategory: 'inviting-pushback',
    difficulty: 'beginner',
    context: "Invite feedback at the end of presenting",
    example: "That's my take on it. I'm keen to hear what you think.",
    whatTheyHear: "Values my opinion, collaborative",
    alternatives: ["What's your view?", "Thoughts?"],
  },

  // Handling Questions
  {
    id: 'ps-007',
    phrase: "Good question",
    meaning: "Acknowledging a question positively",
    situation: 'presentations',
    subcategory: 'handling-questions',
    difficulty: 'beginner',
    context: "Buy time and acknowledge the asker",
    example: "Good question. Let me think about that...",
    whatTheyHear: "Valued, not dismissed",
    alternatives: ["That's a fair question"],
    culturalNote: "Use sparingly - don't say it to every question"
  },
  {
    id: 'ps-008',
    phrase: "I'd need to check on that",
    meaning: "I don't know but I'll find out",
    situation: 'presentations',
    subcategory: 'handling-questions',
    difficulty: 'beginner',
    context: "Honest admission when you don't have an answer",
    example: "I'd need to check on the exact numbers, but I can follow up.",
    whatTheyHear: "Honest, not making things up",
    alternatives: ["Let me get back to you on that", "I'll find out"],
    culturalNote: "Better to admit you don't know than to bluff"
  },
  {
    id: 'ps-009',
    phrase: "That's outside my wheelhouse",
    meaning: "That's not my area of expertise",
    situation: 'presentations',
    subcategory: 'handling-questions',
    difficulty: 'intermediate',
    context: "Redirect questions you can't answer",
    example: "The legal side is outside my wheelhouse - Sarah would know better.",
    whatTheyHear: "Self-aware, honest about limitations",
    alternatives: ["I'm not the best person to answer that"],
  },

  // Closing Without Overselling
  {
    id: 'ps-010',
    phrase: "Anyway, that's the gist of it",
    meaning: "That's the summary / main point",
    situation: 'presentations',
    subcategory: 'closing',
    difficulty: 'beginner',
    context: "Casual closing that doesn't oversell",
    example: "Anyway, that's the gist of it. Happy to discuss.",
    whatTheyHear: "Down to earth, not pushy",
    alternatives: ["That's the main idea", "So that's where we're at"],
  },
  {
    id: 'ps-011',
    phrase: "I'll leave it there",
    meaning: "I'm done presenting, open for questions",
    situation: 'presentations',
    subcategory: 'closing',
    difficulty: 'beginner',
    context: "Signal you're finished",
    example: "I'll leave it there. Any questions?",
    whatTheyHear: "Efficient, respecting time",
    alternatives: ["I'll stop there", "That's all from me"],
  },
  {
    id: 'ps-012',
    phrase: "Let me know what you think",
    meaning: "I'm open to feedback",
    situation: 'presentations',
    subcategory: 'closing',
    difficulty: 'beginner',
    context: "Invite follow-up after presentation",
    example: "Have a read through and let me know what you think.",
    whatTheyHear: "Collaborative, not demanding",
    alternatives: ["I'd value your input", "Keen to hear your thoughts"],
  },
];

// Helper functions
export const getSituationPhrases = (situation: WorkplaceSituation): WorkplacePhrase[] => {
  return workplaceData.filter(p => p.situation === situation);
};

export const getSubcategoryPhrases = (subcategory: string): WorkplacePhrase[] => {
  return workplaceData.filter(p => p.subcategory === subcategory);
};

export const getSituationSubcategories = (situation: WorkplaceSituation): string[] => {
  const phrases = getSituationPhrases(situation);
  return [...new Set(phrases.map(p => p.subcategory))];
};

export const situations: WorkplaceSituation[] = situationOrder;
export const difficulties: WorkplaceDifficulty[] = ['beginner', 'intermediate', 'advanced'];
