// Encouraging feedback message templates
// Designed to be supportive and actionable, not harsh or discouraging

export interface FeedbackMessage {
  id: string;
  type: 'encouragement' | 'tip' | 'celebration' | 'improvement';
  message: string;
  context?: string; // When to show this message
}

// Session completion encouragements based on feeling
export const sessionFeelingResponses = {
  great: [
    "Awesome work! You're building real confidence with every conversation.",
    "Brilliant! That's exactly how natural conversations flow.",
    "You're smashing it! Your Aussie English is really coming along.",
    "Top effort! Keep that momentum going.",
    "Ripper session! You're getting the hang of this.",
  ],
  okay: [
    "Good effort! Every conversation is practice that counts.",
    "Nice work getting through that. It gets easier with practice!",
    "That's the spirit! Some sessions are harder than others, and that's okay.",
    "You showed up and practiced - that's what matters most.",
    "Solid effort! Even 'okay' sessions build your skills.",
  ],
  tough: [
    "Hey, tough sessions happen to everyone! The fact you finished shows real determination.",
    "Don't worry - challenging conversations are actually the best teachers.",
    "You pushed through a hard one. That takes guts, and you'll be stronger for it.",
    "The tough sessions are where the real learning happens. You've got this!",
    "It's okay to find it hard. You're learning a whole new way of communicating!",
  ],
};

// Scenario-specific tips to show after sessions
export const scenarioTips: Record<string, string[]> = {
  // Interview scenarios
  'tell-me-about-yourself': [
    "Tip: Aussies appreciate humble confidence. Share achievements but credit teamwork too.",
    "Remember: Keep it conversational, not scripted. A bit of personality goes a long way.",
    "Pro tip: End with why you're excited about this opportunity, not just your achievements.",
  ],
  'behavioural-interview': [
    "Tip: Use specific examples with outcomes. 'We increased sales by 20%' beats 'I'm great at sales'.",
    "Remember: It's okay to pause and think. A thoughtful answer beats a rushed one.",
    "Pro tip: The STAR method (Situation, Task, Action, Result) works well in Australia too.",
  ],
  'salary-negotiation': [
    "Tip: Know your market rate before negotiating. Research is your friend.",
    "Remember: It's normal to negotiate in Australia. Most employers expect it.",
    "Pro tip: Focus on the value you bring, not just what you need.",
  ],

  // First weeks scenarios
  'first-team-meeting': [
    "Tip: It's okay to mostly listen in your first meeting. Observe how others interact.",
    "Remember: A simple 'good to meet everyone' goes a long way.",
    "Pro tip: Note down any acronyms or terms you don't understand to ask about later.",
  ],
  'kitchen-small-talk': [
    "Tip: Weekend plans and weather are always safe topics for kitchen chat.",
    "Remember: Keep it brief - kitchen chats are meant to be quick and friendly.",
    "Pro tip: Asking questions shows interest and takes pressure off you to talk.",
  ],
  'first-lunch': [
    "Tip: Let others lead the conversation at first. You'll learn a lot about the team.",
    "Remember: It's fine to say you're still learning about Australian culture.",
    "Pro tip: If they make plans, try to join occasionally - it builds relationships.",
  ],

  // Meeting scenarios
  'contributing-in-meetings': [
    "Tip: 'I reckon...' or 'Maybe we could...' are great low-pressure ways to contribute.",
    "Remember: You don't need a perfect idea - even questions show engagement.",
    "Pro tip: Building on someone else's idea ('I like Sarah's point, and maybe...') works well.",
  ],
  'standup-update': [
    "Tip: Keep it brief: what you did, what you're doing, any blockers. That's it!",
    "Remember: 'Cracking on with...' and 'Should have that sorted by...' are natural phrases.",
    "Pro tip: If you're blocked, say so clearly. Teams appreciate knowing early.",
  ],
  'joining-video-call': [
    "Tip: A quick 'G'day' or 'Hey everyone' when you join is all you need.",
    "Remember: Technical issues happen to everyone. 'Can you hear me alright?' is a normal check.",
    "Pro tip: It's fine to ask 'Sorry, you dropped out there - could you repeat that?'",
  ],

  // Social scenarios
  'friday-drinks': [
    "Tip: 'My shout' means you're buying. Participate in rounds when you can.",
    "Remember: Not drinking alcohol is completely normal. Just join the social aspect.",
    "Pro tip: Leaving after an hour is totally fine - just say goodbye properly.",
  ],
  'friday-wind-down': [
    "Tip: Keep conversation light on Fridays - weekend plans, TV shows, casual topics.",
    "Remember: This is bonding time. Don't bring up heavy work issues.",
    "Pro tip: 'Any plans for the weekend?' is a perfect Friday question.",
  ],
  'christmas-party': [
    "Tip: Work parties are about being friendly, not formal. Relax and enjoy!",
    "Remember: Thank the organizers and acknowledge the hosts.",
    "Pro tip: It's a good time to chat with people from other teams.",
  ],

  // Career scenarios
  'asking-for-raise': [
    "Tip: Come prepared with specific examples of your contributions and market data.",
    "Remember: It's normal to ask - managers expect these conversations.",
    "Pro tip: 'I wanted to discuss my development and compensation' is a good opener.",
  ],
  'asking-for-help': [
    "Tip: Asking for help shows self-awareness, not weakness. Aussies respect it.",
    "Remember: Start with what you've already tried - it shows you've made an effort.",
    "Pro tip: 'Do you have a sec?' or 'When you've got a moment...' are polite ways to ask.",
  ],
  'asking-clarification': [
    "Tip: 'Sorry, I'm not familiar with that term' is perfectly acceptable.",
    "Remember: Better to ask than to guess wrong. Everyone appreciates clarity.",
    "Pro tip: Repeating back what you understood helps confirm you've got it right.",
  ],

  // Manager scenarios
  'weekly-manager-checkin': [
    "Tip: Come prepared with updates, questions, and any support you need.",
    "Remember: These are conversations, not interrogations. Managers want to help.",
    "Pro tip: If you have concerns, this is a good time to raise them.",
  ],
};

// General tips for any scenario
export const generalTips = [
  "Remember: Australians value authenticity over perfection. Be yourself!",
  "Tip: If you don't understand something, it's always okay to ask.",
  "Pro tip: 'No worries' and 'Cheers' can get you through most workplace situations.",
  "Remember: Everyone started somewhere. Your colleagues know you're learning.",
  "Tip: Active listening (nodding, brief responses) shows you're engaged.",
  "Pro tip: A bit of self-deprecating humor shows you don't take yourself too seriously.",
  "Remember: It's better to be genuine than to try too hard to fit in.",
  "Tip: When in doubt, match the energy of the room.",
];

// Milestone celebration messages
export const milestoneMessages = {
  sessions: {
    5: "5 sessions complete! You're building a great habit.",
    10: "Double digits! 10 sessions shows real commitment.",
    25: "25 sessions! You're well on your way to confidence.",
    50: "50 sessions! You're becoming a seasoned practitioner.",
    100: "100 sessions! You're absolutely crushing it. Legend status!",
  },
  streak: {
    3: "3-day streak! You're building momentum.",
    7: "A whole week! That's dedication.",
    14: "Two weeks strong! This is becoming a habit.",
    30: "30-day streak! Incredible consistency.",
  },
  scenarios: {
    5: "You've tried 5 different scenarios! Variety is great for learning.",
    10: "10 scenarios explored! You're covering lots of ground.",
    14: "You've tried every scenario type! True explorer!",
  },
};

// Helper function to get random encouragement
export function getRandomEncouragement(feeling: 'great' | 'okay' | 'tough'): string {
  const messages = sessionFeelingResponses[feeling];
  return messages[Math.floor(Math.random() * messages.length)];
}

// Helper function to get scenario tip
export function getScenarioTip(scenarioId: string): string {
  const tips = scenarioTips[scenarioId] || generalTips;
  return tips[Math.floor(Math.random() * tips.length)];
}

// Helper function to get general tip
export function getGeneralTip(): string {
  return generalTips[Math.floor(Math.random() * generalTips.length)];
}
