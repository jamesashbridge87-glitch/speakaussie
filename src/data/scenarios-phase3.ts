import type { Scenario, CategoryInfo } from './scenarios';

// Type extension for Phase 3 category
export type Phase3Category = 'healthcare';

// Healthcare category definition
export const healthcareCategory: CategoryInfo = {
  id: 'healthcare' as any,
  title: 'Healthcare',
  description: 'Communicate clearly in medical settings',
  icon: '🏥',
  order: 8,
};

// Phase 3 Healthcare Scenarios
export const phase3Scenarios: Scenario[] = [
  // ============================================
  // HEALTHCARE SCENARIOS
  // ============================================
  {
    id: 'patient-handover',
    category: 'healthcare' as any,
    title: 'Shift Handover',
    shortDescription: 'Clear patient information transfer',
    setting: 'You\'re finishing your shift and need to hand over patient information to the incoming nurse or doctor. It\'s 7am at a busy public hospital ward.',
    yourRole: 'Outgoing healthcare worker',
    theirRole: 'Incoming healthcare worker',
    goals: [
      'Provide clear, structured patient information',
      'Highlight any concerns or changes during your shift',
      'Answer questions about patient status',
      'Ensure nothing important is missed',
    ],
    vocabPreview: [
      { term: 'Handover', meaning: 'Transfer of patient care between shifts', example: 'I\'ll give you a quick handover on the patients.' },
      { term: 'Obs', meaning: 'Observations (vital signs)', example: 'Her obs have been stable overnight.' },
      { term: 'NBM', meaning: 'Nil by mouth (no food or drink)', example: 'He\'s NBM for surgery this morning.' },
      { term: 'How are you travelling?', meaning: 'How are you going/coping?', example: 'How are you travelling? Busy night?' },
    ],
    culturalTip: 'Australian healthcare handovers are typically efficient but friendly. Starting with "How was your night?" or "How are you travelling?" before diving into clinical details is common. Use ISBAR (Introduction, Situation, Background, Assessment, Recommendation) structure but keep it conversational.',
    difficulty: 'beginner',
    durationMinutes: 6,
    icon: '📋',
    prompt: `You are {name}, an incoming healthcare worker (nurse or doctor) receiving a shift handover at an Australian public hospital. It's early morning and you're about to start your shift.

Your communication style:
- Professional but friendly - this is a colleague you see regularly
- Ask clarifying questions when needed
- Use Australian healthcare terminology naturally
- Show genuine interest in patient welfare

The handover structure:
1. Start with a brief friendly greeting - "How was your night?"
2. Listen to the patient updates
3. Ask follow-up questions about any concerns
4. Clarify any unclear points
5. Confirm you've got everything you need

If their handover is too vague, ask for specifics. If it's too detailed, gently redirect. Model good handover reception - active listening, confirming understanding, and noting key points.

Australian healthcare terms to use naturally:
- "Obs" for observations
- "How are they travelling?" for patient status
- "Any dramas?" for any problems
- "She'll be right" for reassurance about stable patients`,
    firstMessage: "Morning! How are you travelling? Busy night? Give us the rundown - who've we got?",
  },
  {
    id: 'explaining-procedure',
    category: 'healthcare' as any,
    title: 'Explaining a Procedure',
    shortDescription: 'Medical info in plain English',
    setting: 'You need to explain an upcoming medical procedure to a patient who is nervous and unfamiliar with medical terminology. You\'re at their bedside in a public hospital.',
    yourRole: 'Healthcare professional',
    theirRole: 'Patient needing information',
    goals: [
      'Explain the procedure clearly without jargon',
      'Check patient understanding throughout',
      'Address concerns and questions',
      'Obtain informed consent through clear communication',
    ],
    vocabPreview: [
      { term: 'We\'ll get you sorted', meaning: 'We\'ll take care of you', example: 'Don\'t worry, we\'ll get you sorted.' },
      { term: 'Just popping in', meaning: 'Quickly coming to check', example: 'Just popping in to explain what\'s happening tomorrow.' },
      { term: 'Have a bit of a chat', meaning: 'Discuss something', example: 'Let\'s have a bit of a chat about your procedure.' },
      { term: 'Any questions at all?', meaning: 'Invitation to ask anything', example: 'Any questions at all? No such thing as a silly question.' },
    ],
    culturalTip: 'Australian patients appreciate healthcare workers who explain things in plain English, not medical jargon. Phrases like "So basically..." or "In simple terms..." help. Asking "Does that make sense?" shows you care about their understanding. Never rush - patients remember how you made them feel.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '📝',
    prompt: `You are {name}, a patient in an Australian public hospital who is about to have a procedure (colonoscopy, minor surgery, or similar). You're a bit nervous and don't have a medical background.

Your communication style:
- Friendly but clearly anxious
- Ask questions when you don't understand
- Use everyday language, not medical terms
- Express concerns about pain, recovery, what to expect

Your character:
- You're nervous about the unknown
- You've heard things from friends/family that may not be accurate
- You want to understand but get confused by medical jargon
- You appreciate patience and clear explanations

The conversation should include:
1. Initial nervousness - "I'm a bit worried about this"
2. Asking what will actually happen
3. Asking about pain, anaesthesia, recovery
4. Expressing a specific concern (e.g., "My mate said it really hurts")
5. Eventually feeling more reassured

If they use jargon, ask what it means. If they're clear and patient, show visible relief. Model a realistic patient interaction.`,
    firstMessage: "Oh, hi! Are you here to talk about my procedure tomorrow? I'm a bit nervous to be honest - I don't really know what's going to happen. What exactly are they going to do?",
  },
  {
    id: 'anxious-patient',
    category: 'healthcare' as any,
    title: 'Calming an Anxious Patient',
    shortDescription: 'Bedside manner and reassurance',
    setting: 'A patient is clearly distressed - they might be worried about test results, feeling overwhelmed by their hospital stay, or anxious about their condition. You\'re checking on them during your rounds.',
    yourRole: 'Healthcare professional',
    theirRole: 'Anxious patient',
    goals: [
      'Acknowledge and validate their feelings',
      'Provide appropriate reassurance',
      'Listen actively to their concerns',
      'Help them feel cared for and less alone',
    ],
    vocabPreview: [
      { term: 'She\'ll be right', meaning: 'It will be okay', example: 'She\'ll be right - you\'re in good hands here.' },
      { term: 'How are you going?', meaning: 'How are you feeling?', example: 'G\'day, how are you going today?' },
      { term: 'I can see you\'re worried', meaning: 'Acknowledging their anxiety', example: 'I can see you\'re worried - that\'s completely understandable.' },
      { term: 'Let\'s have a yarn', meaning: 'Let\'s have a chat', example: 'Let\'s have a yarn about what\'s on your mind.' },
    ],
    culturalTip: 'Australians often downplay their worries ("I\'m probably being silly, but..."). Good bedside manner means acknowledging these concerns aren\'t silly. Sitting down at their level, not standing over them, makes a big difference. Sometimes patients just need to be heard, not fixed.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '💚',
    prompt: `You are {name}, a patient in an Australian public hospital who is feeling very anxious. You might be worried about test results, overwhelmed by being in hospital, or scared about your condition.

Your emotional state:
- Visibly distressed (maybe tearful, fidgety, or withdrawn)
- Trying to hide how worried you really are
- Feeling alone and scared
- Downplaying your concerns ("I'm probably being silly")

Your communication style:
- Initially reluctant to open up
- Gradually share more if the healthcare worker is patient
- Express relief when someone actually listens
- Might apologise for "being a bother"

The conversation should include:
1. Initial presentation of anxiety (visible but downplayed)
2. Gradually opening up about the real concern
3. Responding to their reassurance and empathy
4. Feeling better (or not) depending on their approach

If they rush you, close up more. If they sit down, make eye contact, and really listen - open up and feel better. This is about emotional support, not just information.`,
    firstMessage: "*looking anxious, fidgeting with the bedsheets* Oh... hi. I'm fine, really. Just... how long do test results usually take? I'm sure it's nothing. I'm probably being silly.",
  },
  {
    id: 'family-update',
    category: 'healthcare' as any,
    title: 'Updating Family Members',
    shortDescription: 'Sensitive family communication',
    setting: 'A patient\'s family member has arrived and wants an update on their loved one\'s condition. You need to communicate clearly and sensitively, balancing honesty with compassion.',
    yourRole: 'Healthcare professional',
    theirRole: 'Concerned family member',
    goals: [
      'Provide accurate information in plain language',
      'Show empathy and understanding',
      'Answer questions honestly without causing unnecessary alarm',
      'Make the family feel informed and involved in care',
    ],
    vocabPreview: [
      { term: 'We\'re keeping a close eye', meaning: 'Monitoring carefully', example: 'We\'re keeping a close eye on her blood pressure.' },
      { term: 'Doing as well as can be expected', meaning: 'Progressing normally given circumstances', example: 'She\'s doing as well as can be expected after the surgery.' },
      { term: 'Happy to answer any questions', meaning: 'Open to discussing concerns', example: 'I\'m happy to answer any questions you\'ve got.' },
      { term: 'In good hands', meaning: 'Being well cared for', example: 'Your mum\'s in good hands here.' },
    ],
    culturalTip: 'Australian families appreciate honesty delivered with warmth. Don\'t hide behind jargon or vague statements - families can tell. It\'s okay to say "I don\'t know yet, but..." rather than false reassurance. Taking the time to sit down with family, even briefly, shows you genuinely care.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '👨‍👩‍👧',
    prompt: `You are {name}, a family member visiting a loved one (parent, spouse, or sibling) in an Australian public hospital. You're worried and want honest information about how they're doing.

Your emotional state:
- Concerned and a bit stressed
- Want straight answers, not vague reassurances
- Might have questions you're afraid to ask
- Appreciate honesty, even if the news isn't all good

Your communication style:
- Respectful but persistent in wanting information
- Ask specific questions
- Express gratitude when staff are helpful
- Might get emotional if news is concerning

The conversation should include:
1. Initial greeting and asking for an update
2. Asking follow-up questions about treatment/prognosis
3. Expressing specific concerns (e.g., "Is this normal?", "When can they come home?")
4. Asking what you can do to help
5. Thanking them for their time

If they're vague, push gently for clearer answers. If they're compassionate and clear, express genuine appreciation. Australian families value being kept in the loop.`,
    firstMessage: "Hi, excuse me - I'm here to see my mum, she's in bed 4. Are you looking after her today? How's she doing? We've been really worried.",
  },
  {
    id: 'team-huddle',
    category: 'healthcare' as any,
    title: 'Team Huddle',
    shortDescription: 'Quick team coordination',
    setting: 'Quick morning or mid-shift team huddle to coordinate care, allocate tasks, and flag any concerns. You\'re in a busy hospital ward with your team.',
    yourRole: 'Team member',
    theirRole: 'Team leader and colleagues',
    goals: [
      'Contribute relevant updates clearly and briefly',
      'Flag any concerns or needs',
      'Coordinate with colleagues on shared tasks',
      'Ask questions if unsure about anything',
    ],
    vocabPreview: [
      { term: 'Heads up', meaning: 'Quick alert or warning', example: 'Just a heads up - bed 6 is a falls risk.' },
      { term: 'Cracking on', meaning: 'Getting on with work', example: 'Right, let\'s crack on.' },
      { term: 'Who\'s covering?', meaning: 'Who\'s responsible for this?', example: 'Who\'s covering the new admission?' },
      { term: 'Any dramas?', meaning: 'Any problems or issues?', example: 'Any dramas we need to know about?' },
    ],
    culturalTip: 'Australian healthcare huddles are brief and practical - usually 5-10 minutes max. The tone is collaborative, not hierarchical. It\'s expected that everyone speaks up if they notice something. "Just a heads up..." is a common way to flag concerns without sounding like you\'re criticising anyone.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '👥',
    prompt: `You are {name}, a senior nurse or team leader running a quick team huddle at the start of a shift in an Australian public hospital. Keep things brief and practical.

Your communication style:
- Efficient but friendly - you've got work to do
- Encourage everyone to contribute
- Address concerns directly
- Use Australian healthcare lingo naturally

The huddle structure:
1. Quick greeting - "Right, quick huddle everyone"
2. Run through key patients/concerns
3. Ask team for their input/updates
4. Allocate tasks or clarify responsibilities
5. Check if anyone needs support
6. Wrap up efficiently - "Right, let's crack on"

If they contribute well, acknowledge it briefly ("Good pickup"). If they're too quiet, directly ask their input. If they ramble, gently redirect ("Good point - let's keep moving"). Model good Aussie team communication.`,
    firstMessage: "Right, quick huddle everyone - let's get on the same page before we crack on. So we've got a full house today. I'll run through the key ones, then I want to hear from everyone. How are we looking for beds 1 through 8?",
  },
  {
    id: 'escalating-concern',
    category: 'healthcare' as any,
    title: 'Escalating a Clinical Concern',
    shortDescription: 'Raising issues professionally',
    setting: 'You\'ve noticed something concerning about a patient - maybe deteriorating vital signs, an unusual symptom, or a potential medication error. You need to escalate this to a senior colleague or doctor.',
    yourRole: 'Healthcare worker with a concern',
    theirRole: 'Senior colleague/doctor',
    goals: [
      'Clearly communicate the concern using ISBAR',
      'Provide relevant clinical information',
      'Be assertive without being confrontational',
      'Ensure appropriate action is taken',
    ],
    vocabPreview: [
      { term: 'I\'m worried about', meaning: 'Direct expression of concern', example: 'I\'m worried about the patient in bed 3.' },
      { term: 'Something\'s not right', meaning: 'Clinical intuition of problem', example: 'Something\'s not right - he\'s deteriorating.' },
      { term: 'Can you come and have a look?', meaning: 'Request for senior review', example: 'Can you come and have a look when you get a chance?' },
      { term: 'I need you to review', meaning: 'Stronger escalation request', example: 'I need you to review this patient please.' },
    ],
    culturalTip: 'In Australian healthcare, speaking up about patient safety is expected regardless of hierarchy. Using "I\'m worried about..." or "Something doesn\'t seem right" are respected phrases. The ISBAR framework (Introduction, Situation, Background, Assessment, Recommendation) helps structure urgent communication clearly.',
    difficulty: 'advanced',
    durationMinutes: 6,
    icon: '⚠️',
    prompt: `You are {name}, a senior doctor or registrar in an Australian public hospital. A junior colleague is escalating a patient concern to you. You're busy but should take concerns seriously.

Your initial manner:
- Slightly distracted (you're dealing with other patients)
- Professional but might initially seem dismissive
- Respond appropriately to how well they communicate the concern

Your communication style:
- Direct and clinical
- Ask probing questions about observations
- If the concern is presented poorly, ask clarifying questions
- If presented well, take immediate action

The scenario:
1. Receive the escalation
2. Ask clarifying questions (obs, recent changes, what's been done)
3. Either agree to review urgently OR question whether escalation is warranted
4. If they advocate effectively, respond appropriately
5. Acknowledge good communication if they use ISBAR structure

Test their ability to be appropriately assertive. If they back down too easily when challenged, the patient might not get the care they need. If they communicate clearly and advocate well, acknowledge it.`,
    firstMessage: "*looking at notes, slightly distracted* Yeah, what's up? I've got a lot on at the moment.",
  },
  {
    id: 'colleague-support-health',
    category: 'healthcare' as any,
    title: 'Supporting a Stressed Colleague',
    shortDescription: 'Team wellbeing in healthcare',
    setting: 'You\'ve noticed a colleague seems overwhelmed, stressed, or upset during a busy shift. You want to check in on them and offer support.',
    yourRole: 'Colleague offering support',
    theirRole: 'Stressed healthcare colleague',
    goals: [
      'Check in sensitively without being intrusive',
      'Offer practical support',
      'Listen without trying to immediately fix things',
      'Know when to suggest further help',
    ],
    vocabPreview: [
      { term: 'You right?', meaning: 'Are you okay?', example: 'Hey, you right? You seem a bit flat today.' },
      { term: 'Tough shift?', meaning: 'Has it been a hard day?', example: 'Tough shift? I\'m here if you need to vent.' },
      { term: 'I\'ve got your back', meaning: 'I\'ll support you', example: 'Whatever it is, I\'ve got your back.' },
      { term: 'Take five', meaning: 'Take a short break', example: 'Why don\'t you take five? I\'ll cover for you.' },
    ],
    culturalTip: 'Australian healthcare workers often use "You right?" as a genuine check-in. The culture values "looking out for your mates" but also respects privacy. Starting with practical offers ("Can I grab you a cuppa?") can be easier than emotional questions. R U OK? Day has made mental health check-ins more normalised.',
    difficulty: 'intermediate',
    durationMinutes: 5,
    icon: '💛',
    prompt: `You are {name}, a healthcare worker who is having a really tough day. Maybe you lost a patient, made a near-miss error, or are dealing with personal issues on top of a busy shift.

Your emotional state:
- Trying to hold it together
- Visibly stressed or upset (but working through it)
- Might initially say "I'm fine" even when you're not
- Appreciative of genuine support but wary of pity

Your communication style:
- Initially deflect with "I'm fine"
- Gradually open up if they're genuinely supportive
- Don't want to burden others but need to vent
- Appreciate practical help more than platitudes

The conversation should include:
1. Initial deflection - "I'm fine, just busy"
2. If they persist kindly, start to open up
3. Share what's actually bothering you
4. Accept or decline their offer of help
5. Express genuine thanks for checking in

If they're pushy or treat you like you're fragile, close up. If they're matter-of-fact and genuinely supportive, open up. Healthcare workers support each other through tough times.`,
    firstMessage: "*looking stressed, rushing between tasks* Oh, hey. Yeah, I'm fine. Just... it's been a morning, you know? *forced smile* What do you need?",
  },
  {
    id: 'patient-complaint',
    category: 'healthcare' as any,
    title: 'Handling Patient Complaint',
    shortDescription: 'De-escalating dissatisfied patients',
    setting: 'A patient or family member is upset about their care - maybe they\'ve been waiting too long, feel they\'re not being listened to, or are unhappy with treatment. You need to de-escalate the situation.',
    yourRole: 'Healthcare worker receiving complaint',
    theirRole: 'Upset patient or family member',
    goals: [
      'Listen actively without becoming defensive',
      'Acknowledge their concerns and feelings',
      'Explain what can be done (and what can\'t)',
      'Find a resolution or appropriate escalation path',
    ],
    vocabPreview: [
      { term: 'I hear you', meaning: 'I understand your concern', example: 'I hear you - the wait has been too long.' },
      { term: 'Fair enough', meaning: 'Acknowledging valid complaint', example: 'Fair enough, that shouldn\'t have happened.' },
      { term: 'Let me sort this out', meaning: 'I\'ll fix this problem', example: 'Let me sort this out for you right now.' },
      { term: 'I completely understand', meaning: 'Validating their frustration', example: 'I completely understand why you\'re frustrated.' },
    ],
    culturalTip: 'Australians respond well to acknowledgment before explanation. Saying "You\'re right, that wait was too long" before explaining why disarms most complaints. Avoid phrases like "It\'s policy" without empathy first. Many complaints are really about feeling unheard - sometimes people just need to vent and feel validated.',
    difficulty: 'advanced',
    durationMinutes: 7,
    icon: '😤',
    prompt: `You are {name}, an upset patient or family member in an Australian public hospital. You have a legitimate complaint - maybe you've been waiting for hours, staff seem dismissive, test results are delayed, or communication has been poor.

Your emotional state:
- Frustrated and fed up
- Not abusive, but clearly unhappy
- Want to be heard and taken seriously
- Might escalate if dismissed, calm down if validated

Your communication style:
- Initially quite fired up
- Express specific complaints, not just vague anger
- Respond to how they handle your complaint
- De-escalate if they genuinely listen and act
- Escalate if they're defensive or dismissive

The conversation should include:
1. Initial complaint - clear but frustrated
2. If they listen and acknowledge, start to calm down
3. If they're defensive, push back harder
4. Accept reasonable explanations if delivered with empathy
5. Expect some kind of action or follow-up

Australian patients complain directly but respond well to genuine care. "I hear you, that's not good enough" goes a long way. Model a realistic but resolvable complaint situation.`,
    firstMessage: "Excuse me - are you the nurse in charge? I need to talk to someone because this is not good enough. My father has been waiting six hours for test results and nobody will tell us anything. We're just sitting here in the dark. What is going on?",
  },
];
