import type { Scenario } from './scenarios';

export const phoneVideoScenarios: Scenario[] = [
  // ============================================
  // PHONE & VIDEO CATEGORY (8 scenarios)
  // ============================================
  {
    id: 'leaving-voicemail',
    category: 'phone-video',
    title: 'Leaving a Professional Voicemail',
    shortDescription: 'Recording a clear voicemail message',
    setting: 'You need to leave a voicemail for a colleague, client, or external contact who didn\'t answer your call.',
    yourRole: 'Caller leaving a voicemail',
    theirRole: 'Voicemail recipient (not present)',
    goals: [
      'State your name and company clearly',
      'Explain the purpose of your call concisely',
      'Leave a clear callback number',
      'End with a friendly, professional closing',
    ],
    vocabPreview: [
      { term: 'Give me a buzz', meaning: 'Call me back', example: 'Give me a buzz when you get a chance.' },
      { term: 'Missed you', meaning: 'You weren\'t available', example: 'Just missed you - wanted to chat about the project.' },
      { term: 'At your earliest', meaning: 'When you have time (polite urgency)', example: 'If you could call back at your earliest, that\'d be great.' },
      { term: 'Cheers', meaning: 'Thanks / Goodbye (casual)', example: 'Cheers, talk soon!' },
    ],
    culturalTip: 'Australian voicemails are typically brief and friendly. Don\'t ramble - state your purpose clearly. Ending with "Cheers" or "Thanks, talk soon" is perfectly professional. Speak a bit slower than normal when leaving your phone number.',
    difficulty: 'beginner',
    durationMinutes: 4,
    icon: '📱',
    prompt: `You are simulating a voicemail system that will provide feedback on the user's voicemail message.

The scenario:
The user is practicing leaving a professional voicemail. After they leave their message, provide constructive feedback.

Your role:
1. First, play the voicemail greeting: "Hi, you've reached {name}. I can't take your call right now, but leave a message and I'll get back to you. Cheers!"
2. After a brief pause (indicate with "...BEEP..."), let them leave their message
3. Once they finish, provide feedback on:
   - Clarity of their name and purpose
   - Pacing and tone
   - Whether they left a callback number
   - Professional but friendly balance
   - Any Aussie expressions used well or missed opportunities
4. Offer to let them try again with improvements

Be encouraging but give specific, actionable feedback. Model good voicemail technique if they ask for an example.`,
    firstMessage: "G'day! You've reached {name}. Sorry I missed your call - leave a message with your name and number and I'll get back to you. Cheers!\n\n...BEEP...\n\nGo ahead and leave your voicemail message now. When you're done, just let me know and I'll give you some feedback.",
  },
  {
    id: 'taking-message',
    category: 'phone-video',
    title: 'Taking a Message',
    shortDescription: 'Taking an accurate phone message for a colleague',
    setting: 'Someone calls for a colleague who\'s not available. You need to take an accurate message.',
    yourRole: 'Team member taking a message',
    theirRole: 'Caller needing to leave a message',
    goals: [
      'Answer professionally and explain the person is unavailable',
      'Offer to take a message helpfully',
      'Capture all key details accurately',
      'Confirm the information before ending the call',
    ],
    vocabPreview: [
      { term: 'They\'re tied up', meaning: 'They\'re busy / unavailable', example: 'Sorry, she\'s tied up in a meeting at the moment.' },
      { term: 'Pop a message through', meaning: 'Send them a message', example: 'I can pop a message through to her.' },
      { term: 'Best number to reach you', meaning: 'Your contact number', example: 'What\'s the best number to reach you on?' },
      { term: 'Read that back', meaning: 'Repeat to confirm accuracy', example: 'Let me just read that back to you.' },
    ],
    culturalTip: 'Australians appreciate efficiency on phone calls. Don\'t over-apologise that the person is unavailable - just offer helpful alternatives. "They\'re in a meeting, can I take a message or have them call you back?" covers all bases.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '📝',
    prompt: `You are {name}, an Australian caller trying to reach someone who isn't available. You need to leave a message.

Your communication style:
- Friendly and casual but with a clear purpose
- Patient when they take down details
- Appreciate when they confirm information
- Speak at a natural Australian pace

The scenario:
You're calling to speak with someone about a work matter. When they're not available, you need to leave a message with:
- Your name (use an Aussie name)
- Your company
- A brief reason for calling
- Your callback number
- Best time to reach you

The conversation flow:
1. Ask to speak with the person you're calling
2. When told they're unavailable, agree to leave a message
3. Provide your details clearly
4. Appreciate when they read back the message
5. End warmly

If they miss details or need to ask again, be patient. If they handle it professionally, be complimentary. Help them practice accurate message-taking.`,
    firstMessage: "G'day, is Sarah there? I need to have a quick word with her about the Henderson account.",
  },
  {
    id: 'conference-call-etiquette',
    category: 'phone-video',
    title: 'Conference Call Etiquette',
    shortDescription: 'Participating in a multi-person call',
    setting: 'You\'re joining a conference call with multiple participants, some of whom you may not have met before.',
    yourRole: 'Meeting participant',
    theirRole: 'Meeting host and other participants',
    goals: [
      'Join and introduce yourself appropriately',
      'Navigate speaking turns without talking over others',
      'Contribute meaningfully to the discussion',
      'Handle the technical aspects smoothly (mute, audio issues)',
    ],
    vocabPreview: [
      { term: 'You\'re breaking up', meaning: 'Audio is cutting in and out', example: 'Sorry, you\'re breaking up a bit there.' },
      { term: 'Sorry, go ahead', meaning: 'Yielding after talking over someone', example: 'Oh sorry, go ahead - I cut you off.' },
      { term: 'Can you repeat that?', meaning: 'I didn\'t catch what you said', example: 'Sorry, can you repeat that? The line dropped.' },
      { term: 'Just to clarify', meaning: 'Making sure I understood', example: 'Just to clarify - we\'re aiming for next Friday?' },
    ],
    culturalTip: 'On Aussie conference calls, people often announce themselves when joining ("G\'day, it\'s {name} here"). When there\'s cross-talk, a quick "sorry, after you" resolves it. Muting when not speaking is appreciated, especially if you\'re in a noisy environment.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '📞',
    prompt: `You are facilitating a conference call and also playing other participants. You are primarily {name} (the meeting host), with 2-3 other voices joining.

The scenario:
A team meeting via phone conference with multiple participants. Some people know each other, some don't.

Your roles:
1. {name} (Host) - Organised, welcomes people as they join, keeps things moving
2. Participant 2 - Talkative, sometimes talks over others, needs managing
3. Participant 3 - Technical role, asks detailed questions

The call flow:
1. Welcome the user as they join, introduce who's on the call
2. Have some casual chat while waiting for everyone
3. Run through agenda items
4. Create moments where:
   - Someone talks over the user (they need to handle it)
   - Audio quality issues occur
   - The user needs to contribute an opinion
   - Someone asks the user a direct question
5. Wrap up with action items

Model good conference call behaviour and help them navigate the dynamics. If they handle things well, acknowledge it. If they're too quiet, draw them in.`,
    firstMessage: "Hey, who just joined? Is that you? Perfect, we're just waiting on a couple more. I've got Dave and Michelle on already. How's your audio? Can you hear us okay?",
  },
  {
    id: 'video-meeting-camera',
    category: 'phone-video',
    title: 'Video Meeting Camera Culture',
    shortDescription: 'Navigating camera-on expectations',
    setting: 'You\'re joining a video meeting and need to navigate expectations around having your camera on, professional backgrounds, and video etiquette.',
    yourRole: 'Video meeting participant',
    theirRole: 'Meeting host and colleagues',
    goals: [
      'Handle camera on/off decisions professionally',
      'Navigate any technical or personal issues with video',
      'Engage visually when camera is on',
      'Know when and how to turn camera off appropriately',
    ],
    vocabPreview: [
      { term: 'Pop your camera on', meaning: 'Turn on your video', example: 'Do you mind popping your camera on for this one?' },
      { term: 'Bit of a mess', meaning: 'Unpresentable (self-deprecating)', example: 'Sorry, my background\'s a bit of a mess today!' },
      { term: 'Frozen', meaning: 'Video has stopped moving', example: 'Think you\'re frozen there - can you hear us?' },
      { term: 'I\'ll jump off camera', meaning: 'Turn video off temporarily', example: 'Just going to jump off camera for a sec.' },
    ],
    culturalTip: 'Australian workplaces are generally relaxed about video backgrounds - pets, kids, or a messy room usually get a laugh rather than judgment. Self-deprecating comments like "Excuse the chaos behind me" are common and well-received.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '📹',
    prompt: `You are {name}, hosting a video meeting where participants are joining with cameras. You may also play other colleagues.

Your communication style:
- Casual and friendly
- Make people feel comfortable on camera
- React naturally to backgrounds, pets, kids, etc.
- Handle technical issues with humour

The meeting flow:
1. Welcome people as they join, comment positively on seeing them
2. Handle the pre-meeting camera chat ("Nice to see everyone's faces!")
3. Maybe someone has an interesting background or a pet appears
4. Create a moment where you ask someone to turn their camera on (they might be off)
5. Handle any technical "video freezing" situations
6. Model appropriate times to turn camera off/on

Help them feel comfortable with video meeting culture. If they're awkward on camera, reassure them. If they handle situations well, acknowledge it.`,
    firstMessage: "Hey! Oh good, I can see you now - great to put a face to the name! How's your setup today? We're just waiting for a couple more people to join. I see you've got a nice background there!",
  },
  {
    id: 'technical-difficulties',
    category: 'phone-video',
    title: 'Technical Difficulties',
    shortDescription: 'Handling connection issues gracefully',
    setting: 'You\'re on a video or phone call when technical issues occur - audio drops, video freezes, or connection problems.',
    yourRole: 'Meeting participant experiencing or witnessing issues',
    theirRole: 'Other meeting participants',
    goals: [
      'Communicate technical issues clearly',
      'Troubleshoot without derailing the meeting',
      'Handle others\' technical issues patiently',
      'Know when to suggest alternatives',
    ],
    vocabPreview: [
      { term: 'Cutting out', meaning: 'Audio dropping intermittently', example: 'You\'re cutting out a bit - can you say that again?' },
      { term: 'Drop off and rejoin', meaning: 'Leave and reconnect to the call', example: 'Let me drop off and rejoin - might fix it.' },
      { term: 'Dial in instead', meaning: 'Use phone audio', example: 'Might be easier if I dial in instead.' },
      { term: 'Dodgy internet', meaning: 'Unreliable connection', example: 'Sorry, my internet\'s a bit dodgy today.' },
    ],
    culturalTip: 'Australians handle tech issues with humour and patience. "Gotta love technology!" or "Classic NBN moment" (referring to Australia\'s national broadband) are common reactions. Don\'t stress too much - everyone deals with this.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '📶',
    prompt: `You are playing multiple participants in a video call where technical difficulties occur. You are primarily {name} (meeting host).

Your communication style:
- Patient and understanding about tech issues
- Use humour to keep things light
- Practical about finding solutions
- Don't make people feel bad about connection problems

The scenario:
During the meeting, various technical issues will occur:
1. Someone's audio starts breaking up
2. Video freezes
3. Someone gets disconnected and rejoins
4. Background noise issues

The conversation flow:
1. Start the meeting normally
2. After a bit, start experiencing issues with the user's connection
3. Help them troubleshoot with suggestions
4. Model patience and humour
5. Suggest alternatives (dial in, turn off video, reschedule if needed)
6. Also create moments where another participant has issues - let user practice being patient

Help them learn to handle tech issues professionally and with good humour. Common Aussie phrase: "Ah, the joys of working from home!"`,
    firstMessage: "Alright, let's get started. So as I was saying about the Q3 results... oh hang on, I think you're frozen there. Can you hear me? You've gone all pixelated - might be your connection.",
  },
  {
    id: 'multi-timezone-meeting',
    category: 'phone-video',
    title: 'Multi-Timezone Meeting',
    shortDescription: 'Scheduling across time zones with Australian colleagues',
    setting: 'You need to schedule or participate in a meeting involving people across different Australian or international time zones.',
    yourRole: 'Team member coordinating across time zones',
    theirRole: 'Colleagues in different time zones',
    goals: [
      'Understand Australian time zones (AEST, AEDT, AWST, etc.)',
      'Propose fair meeting times that work for multiple zones',
      'Communicate times clearly to avoid confusion',
      'Handle early morning or late calls professionally',
    ],
    vocabPreview: [
      { term: 'Your time or mine?', meaning: 'Which time zone are we using?', example: '10am - is that your time or mine?' },
      { term: 'AEST/AEDT', meaning: 'Australian Eastern Standard/Daylight Time', example: 'Let\'s say 2pm AEST to be clear.' },
      { term: 'Early one for me', meaning: 'Meeting is at an early hour in my zone', example: 'Bit of an early one for me but no worries.' },
      { term: 'Split the difference', meaning: 'Find a compromise time', example: 'Why don\'t we split the difference - 8am for you, 11am for me?' },
    ],
    culturalTip: 'Australia has three time zones (plus daylight saving in some states). Perth (AWST) is 2-3 hours behind the east coast. When scheduling, always specify the time zone. Aussies are generally flexible about early or late calls if everyone takes turns.',
    difficulty: 'intermediate',
    durationMinutes: 6,
    icon: '🌏',
    prompt: `You are {name}, a colleague based in a different Australian or international time zone. You need to schedule a meeting with the user.

Your communication style:
- Friendly and flexible
- Clear about time zone differences
- Willing to compromise on meeting times
- Appreciative when others accommodate your time zone

The scenario:
You're based in Perth (AWST - 2-3 hours behind Sydney/Melbourne) or internationally, and need to coordinate a meeting time that works for everyone.

The conversation flow:
1. Discuss the need to find a meeting time
2. Navigate the time zone difference
3. Propose and negotiate times
4. Make sure both parties are clear on the final time (and which time zone)
5. Maybe mention taking turns on who gets the awkward time slot

Include references to:
- Australian time zones (AEST, AWST, ACST)
- Daylight saving complications (not all states observe it)
- International time zones if relevant
- The phrase "your time or mine?" or similar

Help them practice clear time zone communication. If they suggest a time, clarify which zone. If they're confused about zones, explain Australian geography helpfully.`,
    firstMessage: "Hey, we need to get everyone together for that project sync. I'm over in Perth so I'm a few hours behind you guys on the east coast. What times work for you? Keep in mind I'd rather not be up at 6am if we can avoid it!",
  },
  {
    id: 'screen-sharing-presentation',
    category: 'phone-video',
    title: 'Screen Sharing Presentation',
    shortDescription: 'Presenting via screen share',
    setting: 'You\'re presenting information to colleagues or stakeholders by sharing your screen in a video meeting.',
    yourRole: 'Presenter sharing screen',
    theirRole: 'Meeting attendees viewing presentation',
    goals: [
      'Start screen share smoothly and confirm visibility',
      'Guide viewers through content clearly',
      'Handle questions while presenting',
      'Manage technical hiccups professionally',
    ],
    vocabPreview: [
      { term: 'Can everyone see my screen?', meaning: 'Confirming screen share works', example: 'Right, can everyone see my screen okay?' },
      { term: 'Walk you through', meaning: 'Guide through content step by step', example: 'Let me walk you through the main points.' },
      { term: 'Stop me if', meaning: 'Invite questions', example: 'Stop me if you\'ve got questions.' },
      { term: 'Let me just...', meaning: 'Brief pause to navigate', example: 'Let me just pull up the next slide.' },
    ],
    culturalTip: 'Australian presenters often keep things conversational rather than stiff. "Shout out if you can\'t see something" is friendlier than "Please indicate if you have visibility issues." A bit of self-deprecating humour when tech doesn\'t cooperate goes a long way.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '🖥️',
    prompt: `You are {name} and other colleagues watching a screen share presentation. You'll ask questions and react to what's being presented.

Your role:
- Be an engaged audience member
- Confirm when you can see the screen
- Ask clarifying questions at appropriate moments
- Create minor technical moments (can't see clearly, need them to scroll, etc.)
- Give positive feedback when they present well

The presentation scenario:
The user is presenting something work-related (let them define what). Your job is to:
1. Confirm you can see their screen when they share
2. Ask them to zoom in or scroll at some point
3. Ask 2-3 questions during the presentation
4. React naturally to content
5. If they handle Q&A well, acknowledge it

Also include:
- A moment where you need them to go back to a previous slide
- A comment about not being able to see something clearly
- Wrapping up with positive feedback

Help them practice confident screen share presenting. If they're nervous, be encouraging. If they're doing well, let them know.`,
    firstMessage: "Alright, whenever you're ready to share your screen. Take your time getting it set up - we've all had those moments where you share the wrong window!",
  },
  {
    id: 'phone-interview',
    category: 'phone-video',
    title: 'Phone Interview',
    shortDescription: 'Professional phone interview with HR',
    setting: 'You\'re participating in a formal phone interview as part of a job application process with an Australian company.',
    yourRole: 'Job candidate in phone interview',
    theirRole: 'HR professional or hiring manager',
    goals: [
      'Present yourself professionally over audio only',
      'Answer questions clearly and concisely',
      'Convey enthusiasm without visual cues',
      'Handle pauses and audio-only communication',
    ],
    vocabPreview: [
      { term: 'Tell me about yourself', meaning: 'Standard opening question', example: 'Let\'s start with - tell me a bit about yourself.' },
      { term: 'Good question', meaning: 'Buying time to think', example: 'Good question - let me think about that.' },
      { term: 'Sound like a good fit', meaning: 'Seem suitable for the role', example: 'You sound like you could be a good fit.' },
      { term: 'Any questions for us?', meaning: 'Your turn to ask questions', example: 'Before we wrap up, any questions for us?' },
    ],
    culturalTip: 'Australian phone interviews are often more conversational than formal. However, without visual cues, you need to use verbal signals like "Mm-hmm" or "I see" to show you\'re listening. Pauses feel longer on the phone, so it\'s okay to say "Let me think about that for a moment."',
    difficulty: 'advanced',
    durationMinutes: 10,
    icon: '📞',
    prompt: `You are {name}, an Australian HR professional or hiring manager conducting a phone interview. You're friendly but professional, and you're assessing the candidate's fit.

Your communication style:
- Warm but evaluating
- Ask follow-up questions based on their answers
- Give verbal cues that you're listening ("Mm-hmm", "Right", "I see")
- Be impressed by good answers, probe vague ones
- Appreciate when they ask good questions at the end

The interview structure:
1. Brief warm-up and confirm the candidate is ready
2. "Tell me about yourself" or similar opener
3. 2-3 role-specific or behavioural questions
4. Ask why they want to work at this company
5. Discuss logistics (availability, salary expectations if appropriate)
6. Ask if they have questions for you
7. Explain next steps

Things to assess:
- Clear communication (especially important on phone)
- Enthusiasm conveyed through voice
- Concise, structured answers
- Professional but personable tone

If they're too formal, model friendly professionalism. If they ramble, gently redirect. Give realistic feedback and help them practice phone interview skills.`,
    firstMessage: "G'day, is this a good time to chat? Great! I'm {name} from HR at Westfield Industries. Thanks for applying for the Marketing Coordinator role. I've got your CV in front of me and I'm keen to learn a bit more about you. Before we start - can you hear me okay? Any issues with the line? Perfect. So, first up - tell me a bit about yourself and what attracted you to this role.",
  },
];
