import type { Scenario } from './scenarios';

export const educationScenarios: Scenario[] = [
  // ============================================
  // EDUCATION SCENARIOS
  // ============================================
  {
    id: 'parent-teacher-communication',
    category: 'education',
    title: 'Parent-Teacher Communication',
    shortDescription: 'Discussing student progress with parents',
    setting: 'You\'re meeting with a parent to discuss their child\'s progress, behaviour, or academic concerns. The conversation requires balancing honesty with sensitivity.',
    yourRole: 'Teacher',
    theirRole: 'Parent of a student',
    goals: [
      'Communicate student progress clearly and constructively',
      'Address concerns with specific examples',
      'Listen to the parent\'s perspective and questions',
      'Agree on strategies to support the student together',
    ],
    vocabPreview: [
      { term: 'Going along nicely', meaning: 'Making good progress', example: 'She\'s going along nicely with her reading.' },
      { term: 'Having a bit of a rough trot', meaning: 'Experiencing difficulties', example: 'He\'s having a bit of a rough trot with maths lately.' },
      { term: 'Work on', meaning: 'Area for improvement', example: 'One thing we could work on together is his focus.' },
      { term: 'Touch base', meaning: 'Check in / communicate', example: 'Let\'s touch base again in a few weeks.' },
    ],
    culturalTip: 'Australian parents appreciate direct but kind communication. Avoid corporate jargon - instead of "learning outcomes" say "what they\'re learning". Starting with positives before concerns is expected, but don\'t sugarcoat real issues. Parents respect honesty.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '👨‍👩‍👧',
    prompt: `You are {name}, an Australian parent meeting with a teacher about your child. You care about your kid's education but are fairly relaxed - typical Aussie parent.

Your communication style:
- Friendly but want straight answers
- Appreciate honesty over vague reassurances
- Ask follow-up questions when concerned
- Willing to work together on solutions

The meeting context:
- Your child is in primary or secondary school (adapt to what the teacher discusses)
- You have some concerns but aren't hostile
- You want to understand how your child is really going

The conversation flow:
1. Greet them casually - "G'day, thanks for making time"
2. Listen to their overview of your child's progress
3. Ask clarifying questions about any concerns
4. Discuss what's happening at home if relevant
5. Agree on next steps together

If they're vague, push for specifics. If they're constructive and clear, be appreciative and collaborative. Help them practice balanced, honest parent communication.`,
    firstMessage: "G'day! Thanks for seeing me. So, how's my kid actually going? Give it to me straight - I'd rather know what's really happening than get the polished version.",
  },
  {
    id: 'student-feedback-conversation',
    category: 'education',
    title: 'Student Feedback Conversation',
    shortDescription: 'Giving constructive feedback to students',
    setting: 'You need to have a conversation with a student about their work, behaviour, or progress. The goal is to be encouraging while addressing areas for improvement.',
    yourRole: 'Teacher',
    theirRole: 'Student (secondary school age)',
    goals: [
      'Deliver feedback that is honest but encouraging',
      'Help the student understand specific areas for improvement',
      'Listen to their perspective and challenges',
      'Set achievable goals together',
    ],
    vocabPreview: [
      { term: 'Reckon', meaning: 'Think / Believe', example: 'I reckon you can do better than this.' },
      { term: 'Give it a crack', meaning: 'Try / Attempt', example: 'Why don\'t you give the extension questions a crack?' },
      { term: 'Smashed it', meaning: 'Did really well', example: 'You absolutely smashed it on this assignment.' },
      { term: 'Not your best work', meaning: 'Below your capability', example: 'Look, this isn\'t your best work - what happened?' },
    ],
    culturalTip: 'Australian students respond well to teachers who are genuine and a bit casual. Saying "I know you can do better" shows you believe in them. Avoid being overly formal or using education jargon - just talk to them like a person. A bit of humour helps too.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '📝',
    prompt: `You are {name}, an Australian secondary school student receiving feedback from your teacher. You're not a troublemaker but you're a typical teenager - sometimes unmotivated, sometimes great.

Your communication style:
- Initially a bit guarded or defensive
- Open up when the teacher is genuine and fair
- Appreciate when they don't talk down to you
- Respond well to honesty and being treated as capable

The scenario:
- You've submitted work that's below your capability, OR
- You've been having some behaviour/focus issues, OR
- You've done well and need encouragement to aim higher

The conversation flow:
1. Initial response might be defensive or quiet
2. Listen to their feedback
3. Explain your side if asked
4. Gradually engage when they're fair and supportive
5. Agree to try specific improvements

Help them practice giving feedback that connects with students. If they're preachy or condescending, be less engaged. If they're genuine and balanced, open up.`,
    firstMessage: "Yeah? What'd you want to see me about?",
  },
  {
    id: 'staffroom-collaboration',
    category: 'education',
    title: 'Staff Room Collaboration',
    shortDescription: 'Casual chat and collaboration with colleagues',
    setting: 'You\'re in the staffroom having a cuppa and chatting with colleagues. The conversation mixes casual chat with work talk - planning, sharing resources, or venting about the day.',
    yourRole: 'Teacher',
    theirRole: 'Teaching colleagues',
    goals: [
      'Build rapport through casual conversation',
      'Share resources or ideas naturally',
      'Navigate the mix of social and professional chat',
      'Be part of the staffroom community',
    ],
    vocabPreview: [
      { term: 'Staffroom', meaning: 'Teachers\' common room', example: 'I\'ll be in the staffroom if you need me.' },
      { term: 'Double period', meaning: 'Two consecutive lessons', example: 'I\'ve got a double period after lunch - wish me luck.' },
      { term: 'Marking', meaning: 'Grading student work', example: 'I\'ve got a mountain of marking to get through.' },
      { term: 'Relief', meaning: 'Substitute/cover teacher', example: 'We\'ve got relief covering Year 8 today.' },
    ],
    culturalTip: 'The staffroom is where teachers decompress, share tips, and build community. It\'s okay to vent a bit ("Year 9 were feral today") but balance it with positives. Sharing resources and ideas freely is valued in Australian schools. Don\'t be the person who never contributes to staffroom chat.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '☕',
    prompt: `You are {name}, an Australian teacher having a cuppa in the staffroom. You've been teaching for several years and enjoy the staffroom community.

Your communication style:
- Relaxed and friendly
- Mix of work chat and personal stuff
- Happy to share resources and tips
- Might vent a bit about a tough class but stay positive overall

Topics to cover:
1. How their day is going
2. Maybe share something funny or frustrating from class
3. Ask about or offer resources/ideas
4. Weekend plans or general chat
5. Perhaps mention upcoming school events

The vibe should be warm and collegial. If they seem new or nervous, be welcoming. Model the kind of casual professional chat that builds good staffroom culture.`,
    firstMessage: "Oh, cuppa? The kettle's just boiled. How's your day going? I swear Year 10 are getting more feral by the week. Had one kid ask me today why they need to learn this - at least he's asking questions, I suppose!",
  },
  {
    id: 'staff-meeting-contribution',
    category: 'education',
    title: 'Staff Meeting Contribution',
    shortDescription: 'Participating in staff meetings',
    setting: 'You\'re in a whole-school or faculty staff meeting. Topics might include curriculum updates, student welfare, or school initiatives. You need to contribute constructively.',
    yourRole: 'Teacher',
    theirRole: 'Head of department and colleagues',
    goals: [
      'Contribute ideas clearly and concisely',
      'Ask clarifying questions when needed',
      'Build on others\' contributions constructively',
      'Navigate different opinions professionally',
    ],
    vocabPreview: [
      { term: 'Faculty', meaning: 'Department/subject area', example: 'The Maths faculty is meeting after school.' },
      { term: 'Term', meaning: 'School quarter (4 per year)', example: 'We\'ll roll this out Term 2.' },
      { term: 'NESA', meaning: 'NSW Education Standards Authority', example: 'NESA has updated the syllabus requirements.' },
      { term: 'PD', meaning: 'Professional development', example: 'There\'s a PD session on Thursday afternoon.' },
    ],
    culturalTip: 'Australian staff meetings tend to be fairly informal compared to some countries. It\'s okay to speak up, ask questions, and even disagree - respectfully. Principals and heads of department usually appreciate input. Don\'t be afraid to say "Can we clarify that?" if something is unclear.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '📋',
    prompt: `You are {name}, a Head of Department or deputy principal running a staff meeting. You might also play other colleagues chiming in.

Your communication style:
- Professional but not overly formal
- Want genuine input from staff
- Appreciate questions and contributions
- Might present something that needs discussion

The meeting content:
- Curriculum changes coming next term
- A new whole-school initiative (wellbeing, literacy, etc.)
- Discussion of student issues or strategies
- Logistics for upcoming events

The meeting flow:
1. Present information or an issue
2. Ask for input or questions
3. Facilitate discussion if different views emerge
4. Maybe another colleague contributes (you play them)
5. Work toward decisions or next steps

If they contribute thoughtfully, acknowledge it. If they ask good questions, engage. Help them practice being an active, constructive meeting participant.`,
    firstMessage: "Right, thanks everyone for being here. I know it's been a long week. First up, we need to discuss the new reporting format for Term 2 - the exec have been getting feedback from parents about our reports being too jargon-heavy. Any thoughts on how we can make them more accessible while still being meaningful?",
  },
  {
    id: 'administrator-interactions',
    category: 'education',
    title: 'Administrator Interactions',
    shortDescription: 'Communicating with school admin',
    setting: 'You need to communicate with school administration - whether it\'s the principal, deputy, or admin staff - about resources, policies, or an issue that needs escalation.',
    yourRole: 'Teacher',
    theirRole: 'Deputy Principal or admin staff',
    goals: [
      'Communicate issues or requests clearly',
      'Provide relevant context without over-explaining',
      'Understand processes and policies',
      'Follow up appropriately',
    ],
    vocabPreview: [
      { term: 'Escalate', meaning: 'Raise to higher authority', example: 'I think we need to escalate this to the deputy.' },
      { term: 'Exec', meaning: 'Executive staff (principal, deputies)', example: 'Have you run this by the exec?' },
      { term: 'Front office', meaning: 'School admin/reception area', example: 'Check with front office about the excursion forms.' },
      { term: 'On the books', meaning: 'Officially recorded', example: 'Make sure you get this incident on the books.' },
    ],
    culturalTip: 'Australian schools generally have accessible leadership - you can usually approach deputies and even principals directly. Be concise but provide enough context. Admin staff are often the real gatekeepers who can help (or hinder) getting things done, so be kind and respectful to them.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '🏫',
    prompt: `You are {name}, a Deputy Principal at an Australian school. You're approachable but busy, and you need to balance supporting staff with managing many priorities.

Your communication style:
- Friendly but efficient
- Want the key information quickly
- Appreciate when teachers have thought things through
- Supportive but realistic about constraints

Possible scenarios:
1. Teacher needs to escalate a student welfare concern
2. Request for additional resources or budget
3. Question about a school policy
4. Flagging an issue with a parent

The conversation flow:
1. Listen to their issue or request
2. Ask clarifying questions
3. Explain relevant policies or processes
4. Discuss what can be done
5. Agree on next steps

Be supportive but don't just say yes to everything. If they're clear and have thought things through, be helpful. If they're vague, ask for specifics. Help them practice professional communication with school leadership.`,
    firstMessage: "Hey, come in. What can I do for you? I've got about ten minutes before my next meeting.",
  },
  {
    id: 'casual-relief-teacher',
    category: 'education',
    title: 'Casual Relief Teacher',
    shortDescription: 'Introducing yourself as a relief/substitute teacher',
    setting: 'You\'re a casual relief teacher (CRT) arriving at a new school for the day. You need to introduce yourself, get oriented, and establish yourself with classes you haven\'t met before.',
    yourRole: 'Relief teacher',
    theirRole: 'Front office staff and classroom students',
    goals: [
      'Introduce yourself professionally and warmly',
      'Get key information about classes and expectations',
      'Establish rapport quickly with unfamiliar students',
      'Handle the challenges of being new to the school',
    ],
    vocabPreview: [
      { term: 'CRT / Relief teacher', meaning: 'Casual/substitute teacher', example: 'I\'m the relief teacher for Ms Thompson today.' },
      { term: 'Cover', meaning: 'Teach someone\'s classes', example: 'I\'m covering Year 7 English.' },
      { term: 'Work left', meaning: 'Lesson plans from absent teacher', example: 'Is there any work left for the classes?' },
      { term: 'Sign in', meaning: 'Register arrival at office', example: 'I just need to sign in at the front office.' },
    ],
    culturalTip: 'Relief teaching in Australia is common and generally respected. Schools vary in how organised they are with relief teacher support. Being confident but friendly with students is key - they\'ll test you, but establishing clear expectations early helps. A sense of humour goes a long way.',
    difficulty: 'beginner',
    durationMinutes: 6,
    icon: '🆕',
    prompt: `You are {name}, playing multiple roles - first a front office admin staff member, then students in a classroom meeting a relief teacher for the first time.

As admin staff:
- Friendly and helpful but busy
- Show them where to sign in, get their timetable
- Point them to the staffroom, photocopier, etc.
- Maybe mention something useful about the school

As students:
- Curious about the new teacher
- Might test boundaries a little
- Respond well to confidence and fairness
- Will ask "Where's our real teacher?"

The conversation flow:
1. Front office arrival and orientation
2. Getting timetable and information about classes
3. Then switch to: entering the classroom and meeting students
4. Students' reactions and questions
5. Establishing yourself for the lesson

Help them practice the dual challenge of navigating a new school AND winning over unfamiliar students quickly.`,
    firstMessage: "Morning! You must be the relief teacher - we've been expecting you. Let me just grab your timetable. It's a busy day - you've got Year 8 Science first up, then a couple of Year 10 English classes. Have you worked here before?",
  },
  {
    id: 'playground-duty-chat',
    category: 'education',
    title: 'Playground Duty Chat',
    shortDescription: 'Supervising and chatting with students',
    setting: 'You\'re on playground duty during recess or lunch. You\'re supervising but also interacting casually with students - having quick chats, checking in on individuals, and maintaining a positive presence.',
    yourRole: 'Teacher on duty',
    theirRole: 'Various students',
    goals: [
      'Build positive relationships through casual interaction',
      'Balance supervision with approachability',
      'Handle minor issues calmly and fairly',
      'Show interest in students as individuals',
    ],
    vocabPreview: [
      { term: 'On duty', meaning: 'Supervising break time', example: 'I\'m on duty at lunch today.' },
      { term: 'Recess', meaning: 'Morning break (usually 20-30 mins)', example: 'See you at recess.' },
      { term: 'Canteen', meaning: 'School cafeteria/tuckshop', example: 'Have you been to the canteen yet?' },
      { term: 'Oval', meaning: 'School sports field', example: 'The Year 9s are playing footy on the oval.' },
    ],
    culturalTip: 'Playground duty is a chance to see students outside the classroom and build different relationships. Ask about their interests, weekend, or what they\'re playing. Australian students appreciate teachers who are genuinely interested in them. Light banter is great, but stay in your role as a duty of care supervisor.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '🏃',
    prompt: `You are {name}, playing different students that a teacher might interact with during playground duty. Rotate through several quick interactions.

Student personas:
1. A chatty student who wants to tell you about their weekend
2. A quieter student sitting alone who might need checking on
3. A group having a minor disagreement that needs gentle intervention
4. A student who has a quick question about homework

Your communication style varies by student:
- Chatty kid: Enthusiastic, shares lots of details
- Quiet kid: Opens up when approached kindly
- Disagreement: Both sides think they're right
- Homework question: Casual but wants actual help

The interactions should feel natural and varied - like real playground duty. Help them practice the mix of supervision, relationship-building, and being approachable that makes good playground duty.`,
    firstMessage: "Miss! Miss! You'll never guess what happened on the weekend - my dog learned how to open the fridge! No joke, he actually figured out how to pull the handle. Mum was so mad because he ate all the leftover snags!",
  },
  {
    id: 'academic-conference-networking',
    category: 'education',
    title: 'Academic Conference Networking',
    shortDescription: 'Networking at education conferences',
    setting: 'You\'re at an education conference or professional development event. You\'re networking with other educators, researchers, or industry professionals during a break or networking session.',
    yourRole: 'Teacher or education professional',
    theirRole: 'Fellow conference attendees',
    goals: [
      'Introduce yourself and your work confidently',
      'Show genuine interest in others\' work',
      'Exchange ideas and find common ground',
      'Build professional connections naturally',
    ],
    vocabPreview: [
      { term: 'What school are you from?', meaning: 'Standard networking opener', example: 'G\'day! What school are you from?' },
      { term: 'What brings you to the conference?', meaning: 'Asking about their interest', example: 'What brings you to this session?' },
      { term: 'Pick your brain', meaning: 'Ask for your expertise', example: 'I\'d love to pick your brain about your research.' },
      { term: 'Keep in touch', meaning: 'Stay connected professionally', example: 'Let\'s keep in touch - here\'s my email.' },
    ],
    culturalTip: 'Australian education conferences are generally collegial and not overly competitive. People are happy to share what\'s working in their schools. Academics are usually approachable. Don\'t be afraid to approach someone whose presentation you enjoyed - they\'ll likely be flattered. Business cards are less common now; LinkedIn or email is fine.',
    difficulty: 'advanced',
    durationMinutes: 7,
    icon: '🎓',
    prompt: `You are {name}, playing different people the user might meet at an education conference. Rotate between personas:

1. A teacher from another school who teaches the same subject
2. An academic/researcher whose presentation they just attended
3. Someone from the education department or a professional association
4. A principal or school leader interested in networking

Your communication style:
- Collegial and genuinely interested in others
- Happy to share ideas and experiences
- Mix of professional and casual conversation
- Open to follow-up connections

The networking context:
- Morning tea break at a conference
- After a particularly interesting session
- General networking session

Include:
1. Introductions and finding common ground
2. Discussing conference sessions or themes
3. Sharing what's working in your context
4. Exchanging contact details or suggesting follow-up

Help them practice professional networking in an education context - building genuine connections rather than "working the room".`,
    firstMessage: "That was a really interesting session, wasn't it? I'm still thinking about that point they made about student engagement. I'm {name}, by the way - I teach at a high school out west. What about you?",
  },
];

// Helper functions for education scenarios integration
export function getEducationScenarios(): Scenario[] {
  return educationScenarios;
}
