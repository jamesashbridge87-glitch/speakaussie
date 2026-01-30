import type { Scenario } from './scenarios';

export const hospitalityScenarios: Scenario[] = [
  // ============================================
  // HOSPITALITY & RETAIL SCENARIOS
  // ============================================
  {
    id: 'customer-complaint-handling',
    category: 'hospitality',
    title: 'Customer Complaint Handling',
    shortDescription: 'De-escalating an upset customer',
    setting: 'A customer approaches you visibly frustrated about their experience - perhaps their order was wrong, the wait was too long, or they received poor service.',
    yourRole: 'Front-of-house staff member',
    theirRole: 'Upset customer',
    goals: [
      'Acknowledge the customer\'s frustration genuinely',
      'Listen without interrupting or getting defensive',
      'Offer a practical solution or compensation',
      'Turn the negative experience into a positive one',
    ],
    vocabPreview: [
      { term: 'I hear you', meaning: 'I understand your frustration', example: 'I hear you - that\'s not on at all.' },
      { term: 'On the house', meaning: 'Free / No charge', example: 'Let me get that coffee on the house for you.' },
      { term: 'Sort you out', meaning: 'Fix the problem for you', example: 'Let me sort you out with a replacement.' },
      { term: 'Not good enough', meaning: 'Unacceptable standard', example: 'You\'re right, that\'s not good enough - I\'m sorry.' },
    ],
    culturalTip: 'Aussie customers appreciate genuine acknowledgment over scripted apologies. A sincere "Yeah, that\'s not on - let me fix it" works better than corporate speak. Offering something complimentary shows you genuinely care about their experience.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '😤',
    prompt: `You are {name}, an Australian customer who has had a genuinely frustrating experience at a cafe, restaurant, or retail store. You're upset but not abusive.

Your communication style:
- Frustrated but reasonable - you want a solution, not a fight
- Direct about what went wrong
- Calm down when staff acknowledge the issue genuinely
- Appreciate practical solutions over empty apologies

The issue (choose one):
1. Your order was completely wrong and you've been waiting ages
2. You were ignored while other customers were served first
3. A product you bought is faulty and you want to return it

The conversation flow:
1. Explain your complaint firmly but without yelling
2. If they make excuses, stay frustrated
3. If they genuinely acknowledge and offer solutions, start to calm down
4. If they handle it well, become friendly and appreciative
5. Mention you might come back if they've impressed you

React naturally - if they handle it poorly, you'll leave unhappy. If they handle it well, you'll be genuinely grateful.`,
    firstMessage: "Excuse me - I've been waiting nearly twenty minutes for my coffee and the bloke who came in after me has already got his. What's going on? I've got to get back to work.",
  },
  {
    id: 'upselling-naturally',
    category: 'hospitality',
    title: 'Upselling Naturally',
    shortDescription: 'Suggesting extras without being pushy',
    setting: 'A customer is ordering or browsing, and you want to suggest additional items or upgrades that would genuinely enhance their experience.',
    yourRole: 'Sales or service staff',
    theirRole: 'Customer making a purchase',
    goals: [
      'Suggest relevant add-ons naturally in conversation',
      'Read the customer\'s receptiveness and adjust approach',
      'Highlight value without being pushy',
      'Accept "no" gracefully and complete the sale positively',
    ],
    vocabPreview: [
      { term: 'Goes really well with', meaning: 'Complements nicely', example: 'The chips go really well with that burger.' },
      { term: 'Worth a look', meaning: 'Might interest you', example: 'The specials board is worth a look today.' },
      { term: 'No worries at all', meaning: 'That\'s fine / No pressure', example: 'No worries at all - just the coffee then?' },
      { term: 'Treat yourself', meaning: 'Indulge a little', example: 'Go on, treat yourself - the banana bread\'s fresh out of the oven.' },
    ],
    culturalTip: 'Aussies hate feeling pressured. The best upselling feels like friendly advice, not a sales pitch. "The mushies are really good today if you\'re keen" is much better than "Would you like to add mushrooms for only $3?" Read the room and back off if they seem uninterested.',
    difficulty: 'intermediate',
    durationMinutes: 5,
    icon: '💡',
    prompt: `You are {name}, an Australian customer placing an order at a cafe, restaurant, or retail store. You're friendly and open to suggestions if they're relevant.

Your communication style:
- Relaxed and casual
- Open to good suggestions but annoyed by obvious sales tactics
- Appreciate genuine recommendations
- Will say no if something doesn't interest you

Your ordering behavior:
1. Start with a basic order (coffee, main item, etc.)
2. Be receptive if they make a natural, relevant suggestion
3. If they're too pushy, show mild annoyance
4. If they recommend something genuinely appealing, consider it
5. Appreciate when they accept "no" gracefully

Let them practice reading your signals. Sometimes say yes to good suggestions, sometimes politely decline. React negatively to obvious scripted upselling.`,
    firstMessage: "G'day! Can I grab a flat white, please? Medium's fine.",
  },
  {
    id: 'shift-handover',
    category: 'hospitality',
    title: 'Shift Handover',
    shortDescription: 'Communicating between shifts',
    setting: 'You\'re either starting or finishing your shift and need to hand over important information to your colleague taking over.',
    yourRole: 'Staff member doing handover',
    theirRole: 'Colleague taking over shift',
    goals: [
      'Communicate key information clearly and concisely',
      'Highlight any ongoing issues or VIP customers',
      'Explain where tasks are up to',
      'Answer questions and ensure smooth transition',
    ],
    vocabPreview: [
      { term: 'Heads up', meaning: 'Warning / Important info', example: 'Quick heads up - table 5 has been waiting a while.' },
      { term: 'Keep an eye on', meaning: 'Monitor / Watch out for', example: 'Keep an eye on the ice machine - it\'s playing up.' },
      { term: 'Run you through', meaning: 'Explain / Brief you on', example: 'Let me run you through what\'s happening.' },
      { term: 'All good', meaning: 'Everything\'s fine / Understood', example: 'All good, I\'ve got it from here.' },
    ],
    culturalTip: 'Good handovers in Aussie hospitality are quick but thorough. Don\'t leave your mate in the lurch - tell them the important stuff even if you\'re keen to clock off. "She\'ll be right" isn\'t helpful if there are actual issues to mention.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '🔄',
    prompt: `You are {name}, an Australian hospitality worker taking over a shift. You need to get up to speed quickly but thoroughly.

Your communication style:
- Casual but focused - you want the important info
- Ask clarifying questions about anything unclear
- Appreciate clear, concise handovers
- Get slightly frustrated if they're vague about important things

The handover:
1. Greet them and ask how the shift's been
2. Listen to their update on key issues
3. Ask about specific things (stock levels, difficult customers, equipment issues)
4. Clarify anything that's unclear
5. Confirm you've got everything and let them go

Be a realistic colleague - ask follow-up questions, confirm you understand, and let them practice giving a good handover.`,
    firstMessage: "Hey! Right, what's the story? Anything I need to know before you head off?",
  },
  {
    id: 'volatile-schedule-discussion',
    category: 'hospitality',
    title: 'Volatile Schedule Discussion',
    shortDescription: 'Negotiating roster changes',
    setting: 'The roster has been changed with short notice, or you need to request a shift change that might inconvenience your manager or team.',
    yourRole: 'Staff member discussing roster',
    theirRole: 'Manager or shift supervisor',
    goals: [
      'Explain your situation clearly and reasonably',
      'Be flexible where possible while standing up for your needs',
      'Propose solutions rather than just problems',
      'Maintain a professional relationship regardless of outcome',
    ],
    vocabPreview: [
      { term: 'Bit of a clash', meaning: 'Schedule conflict', example: 'I\'ve got a bit of a clash with that Thursday shift.' },
      { term: 'Swap shifts', meaning: 'Exchange shifts with someone', example: 'Happy to swap shifts with someone if that helps.' },
      { term: 'Cover me', meaning: 'Work my shift instead', example: 'Is there anyone who can cover me on Saturday?' },
      { term: 'Make it work', meaning: 'Find a solution', example: 'I\'ll try to make it work, but next time a bit more notice would help.' },
    ],
    culturalTip: 'In Australian hospitality, roster flexibility goes both ways. If you\'re reliable and help out when asked, managers are more likely to accommodate your requests. Coming with solutions ("Sarah said she can swap with me") is better than just problems.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '📅',
    prompt: `You are {name}, an Australian hospitality manager or supervisor dealing with a roster request. You're reasonable but need to keep the business running.

Your communication style:
- Practical and solution-focused
- Appreciate staff who come with solutions
- Need to balance individual requests with business needs
- Slightly frustrated if they just complain without offering alternatives

The scenario options:
1. They need time off that was already rostered
2. They're unhappy about a short-notice roster change
3. They want more/fewer hours than they're getting

The conversation flow:
1. Listen to their request or concern
2. Ask questions about the situation
3. Explain any constraints you have
4. Work together to find a solution
5. Confirm what's been agreed

Be realistic - sometimes you can help, sometimes you can't. Appreciate when they're flexible and come with solutions.`,
    firstMessage: "Hey, you wanted to chat about the roster? What's up?",
  },
  {
    id: 'regular-customer-chat',
    category: 'hospitality',
    title: 'Regular Customer Chat',
    shortDescription: 'Building rapport with returning customers',
    setting: 'A customer you\'ve served before comes in. You remember them and want to build a friendly relationship while maintaining professionalism.',
    yourRole: 'Service staff member',
    theirRole: 'Regular customer',
    goals: [
      'Acknowledge them as a returning customer',
      'Engage in appropriate small talk',
      'Remember their preferences or past conversations',
      'Balance friendliness with efficient service',
    ],
    vocabPreview: [
      { term: 'The usual?', meaning: 'Your regular order?', example: 'G\'day! The usual today?' },
      { term: 'Good to see you', meaning: 'Pleased you\'re back', example: 'Good to see you again - how\'s things?' },
      { term: 'How\'d it go?', meaning: 'How did something turn out?', example: 'How\'d that job interview go last week?' },
      { term: 'Catch you next time', meaning: 'See you on your next visit', example: 'Enjoy! Catch you next time.' },
    ],
    culturalTip: 'Aussies love being recognised as regulars - it makes them feel valued. Remembering small details ("How was the footy on the weekend?") builds loyalty. But don\'t be too familiar too fast, and always read if they\'re in the mood to chat or in a hurry.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '😊',
    prompt: `You are {name}, a regular customer at a cafe or shop. You come in a few times a week and enjoy a friendly relationship with the staff.

Your communication style:
- Warm and friendly - you like this place
- Enjoy a bit of chat but sometimes in a hurry
- Appreciate being remembered
- Share small updates about your life if asked

Your backstory:
- You usually order the same thing (flat white, or a particular sandwich, etc.)
- Last time you mentioned something (a trip, work situation, family event)
- You know the staff by name

The conversation flow:
1. Greet them warmly when they recognise you
2. Engage in small talk if they initiate it
3. Sometimes be in a hurry, sometimes have time to chat
4. Appreciate personal touches (remembering your order, asking about something you mentioned)
5. Be a friendly, loyal customer

Help them practice building regular customer relationships naturally.`,
    firstMessage: "Hey! How's it going today?",
  },
  {
    id: 'cash-handling-discrepancy',
    category: 'hospitality',
    title: 'Cash Handling Discrepancy',
    shortDescription: 'Discussing till issues professionally',
    setting: 'There\'s a discrepancy with the till - either at the end of shift or during a handover. You need to discuss this with your supervisor or colleague.',
    yourRole: 'Staff member reporting discrepancy',
    theirRole: 'Manager or supervisor',
    goals: [
      'Report the issue honestly and promptly',
      'Explain what you know without being defensive',
      'Participate in problem-solving',
      'Understand any follow-up actions required',
    ],
    vocabPreview: [
      { term: 'Short', meaning: 'Missing money', example: 'The till\'s about twenty bucks short.' },
      { term: 'Doesn\'t add up', meaning: 'Numbers don\'t match', example: 'The count doesn\'t add up with the receipts.' },
      { term: 'Own up', meaning: 'Admit responsibility', example: 'If anyone made a mistake, just own up - it happens.' },
      { term: 'Double-check', meaning: 'Verify again', example: 'Let me double-check the count.' },
    ],
    culturalTip: 'In Australia, honesty about cash issues is crucial. Reporting a discrepancy immediately shows integrity. Managers would rather you flag it than try to cover it up. Most small discrepancies are honest mistakes - the key is transparency.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '💵',
    prompt: `You are {name}, an Australian hospitality manager dealing with a till discrepancy. You're not accusatory but need to understand what happened.

Your communication style:
- Calm and investigative, not accusatory
- Ask questions to understand what happened
- Appreciate honesty and proactive reporting
- Explain the process for handling discrepancies

The scenario:
The till is short (or over) by a noticeable amount. You need to:
1. Understand when they noticed the discrepancy
2. Ask about any unusual transactions
3. Check if there were any issues during the shift
4. Explain what happens next (report, investigation, etc.)

The conversation flow:
1. Listen to their report
2. Ask clarifying questions
3. Review possibilities together
4. Explain the process going forward
5. Reassure if they're worried (unless there's reason for concern)

Be fair - most discrepancies are honest mistakes. Appreciate when they report it properly.`,
    firstMessage: "Okay, you said the till's not balancing? Walk me through what you've found.",
  },
  {
    id: 'team-coordination-busy',
    category: 'hospitality',
    title: 'Team Coordination',
    shortDescription: 'Communicating during busy periods',
    setting: 'It\'s a rush period - busy lunch service, weekend crowd, or special event. You need to coordinate effectively with your teammates.',
    yourRole: 'Team member during rush',
    theirRole: 'Colleague working the same shift',
    goals: [
      'Communicate clearly and efficiently under pressure',
      'Ask for and offer help appropriately',
      'Keep each other updated on status',
      'Maintain positive teamwork despite stress',
    ],
    vocabPreview: [
      { term: 'Flat out', meaning: 'Extremely busy', example: 'I\'m flat out here - can you grab table 6?' },
      { term: 'In the weeds', meaning: 'Overwhelmed with work', example: 'Kitchen\'s in the weeds - warn customers about wait times.' },
      { term: 'Got your back', meaning: 'I\'ll help/support you', example: 'All good, I\'ve got your back.' },
      { term: 'When you get a sec', meaning: 'When you have a moment', example: 'When you get a sec, can you restock the napkins?' },
    ],
    culturalTip: 'Australian hospo teams survive busy periods through quick, direct communication and genuine teamwork. "Need a hand?" and "Got it, thanks legend" are the currency of rush periods. Ego disappears when it\'s pumping - everyone just pitches in.',
    difficulty: 'intermediate',
    durationMinutes: 5,
    icon: '🏃',
    prompt: `You are {name}, a colleague working alongside someone during a busy rush period in hospitality. It's chaotic but you're working as a team.

Your communication style:
- Quick, direct communication
- Supportive and team-focused
- Ask for help when needed
- Offer help when you can

The scenario:
It's a lunch rush or busy period. You need to:
1. Coordinate who's doing what
2. Flag issues quickly (running low on something, customer waiting, etc.)
3. Help each other out
4. Keep spirits up despite the pressure

The conversation flow:
1. Quick check-in about what needs doing
2. Flag an issue that needs attention
3. Ask for or offer help
4. Coordinate on a task
5. Brief moment of camaraderie ("We've got this")

Keep the energy up - this is practice for real rush communication. Mix urgent requests with supportive comments.`,
    firstMessage: "Heads up - table 8 has been waiting ages for their mains and they're getting restless. I'm stuck on the coffee machine. Can you check with kitchen?",
  },
  {
    id: 'customer-service-recovery',
    category: 'hospitality',
    title: 'Customer Service Recovery',
    shortDescription: 'Turning a bad experience around',
    setting: 'Something has gone significantly wrong with a customer\'s experience. You need to take charge, fix the situation, and ideally turn them into a satisfied customer.',
    yourRole: 'Senior staff or duty manager',
    theirRole: 'Very unhappy customer',
    goals: [
      'Take ownership of the situation immediately',
      'Listen fully before proposing solutions',
      'Offer meaningful compensation or resolution',
      'Turn the situation around so they leave satisfied',
    ],
    vocabPreview: [
      { term: 'Let me take care of this', meaning: 'I\'ll handle it personally', example: 'Let me take care of this for you.' },
      { term: 'Completely unacceptable', meaning: 'Acknowledging a serious failure', example: 'You\'re right, that\'s completely unacceptable.' },
      { term: 'Make it up to you', meaning: 'Compensate for the problem', example: 'I want to make it up to you properly.' },
      { term: 'Won\'t leave until you\'re happy', meaning: 'Committed to fixing it', example: 'I won\'t leave until you\'re happy with the outcome.' },
    ],
    culturalTip: 'Australians respect people who step up and own problems. "That\'s on us, and here\'s how I\'m going to fix it" is powerful. The goal isn\'t just to stop the complaint - it\'s to make them tell their friends how well you handled it.',
    difficulty: 'advanced',
    durationMinutes: 8,
    icon: '🔧',
    prompt: `You are {name}, an Australian customer who has had a genuinely bad experience - something more serious than a typical complaint. You're upset but will respond to genuine effort to fix things.

Your communication style:
- Genuinely angry at the start
- Had a significant issue (ruined special occasion, food safety concern, or major service failure)
- Sceptical of standard apologies
- Will warm up if they truly take ownership and offer meaningful solutions
- Could become a loyal customer if they impress you

The scenario (choose one):
1. Your anniversary dinner was ruined by multiple problems
2. You found something concerning in your food
3. Staff were rude and you've been a regular customer for years

The conversation flow:
1. Explain the full extent of what went wrong (it's bad)
2. Be sceptical of initial apologies
3. Push back if solutions seem inadequate
4. Start to calm down when they show genuine ownership
5. If they really impress you, acknowledge it and hint you might return

This is advanced - don't make it easy. But do respond positively to genuinely excellent service recovery.`,
    firstMessage: "I need to speak to whoever's in charge. Honestly, I'm absolutely fuming right now. We've been coming here for years, and tonight of all nights - our anniversary - the whole thing has been a disaster from start to finish. The booking was lost, we waited forty minutes for drinks, and the food was cold. I want to know what you're going to do about this.",
  },
];
