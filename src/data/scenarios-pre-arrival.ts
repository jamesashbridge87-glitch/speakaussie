import type { Scenario } from './scenarios';

export const preArrivalScenarios: Scenario[] = [
  // ============================================
  // PRE-ARRIVAL CATEGORY (8 scenarios)
  // ============================================
  {
    id: 'understanding-job-ads',
    category: 'pre-arrival',
    title: 'Understanding Australian Job Ads',
    shortDescription: 'Decoding job listing language',
    setting: 'You\'re browsing Australian job listings online and want to understand the terminology, requirements, and what companies are really looking for.',
    yourRole: 'Job seeker from overseas',
    theirRole: 'Australian recruitment consultant',
    goals: [
      'Understand common Australian job ad terminology',
      'Learn what phrases like "immediate start" and "right to work" mean',
      'Ask about salary ranges and what "plus super" means',
      'Clarify visa requirements in job listings',
    ],
    vocabPreview: [
      { term: 'Plus super', meaning: 'Salary plus 11.5% superannuation (retirement fund)', example: 'The salary is $80k plus super.' },
      { term: 'Right to work', meaning: 'Valid visa allowing employment', example: 'Must have right to work in Australia.' },
      { term: 'Immediate start', meaning: 'Can begin work right away', example: 'Immediate start available for the right candidate.' },
      { term: 'EOI', meaning: 'Expression of Interest', example: 'Submit your EOI via our website.' },
    ],
    culturalTip: 'Australian job ads often seem casual but are quite specific about requirements. "Must have" means essential - don\'t apply without it. "Desirable" or "nice to have" means they\'ll consider you without it. Always check if they sponsor visas before applying.',
    difficulty: 'beginner',
    durationMinutes: 6,
    icon: '📄',
    prompt: `You are {name}, an Australian recruitment consultant helping someone from overseas understand Australian job listings. You're friendly, helpful, and experienced in explaining local job market terminology.

Your communication style:
- Patient and informative
- Use examples to explain concepts
- Casual but professional
- Happy to explain Aussie-specific terms

The conversation should cover:
1. Common terms in Australian job ads
2. What "plus super" and salary packages mean
3. Visa requirements and "right to work" language
4. How to interpret company culture from job ads
5. What questions to ask before applying

Be encouraging about their job search. Explain things clearly without being condescending. Use real-world examples of how job ads are written in Australia.`,
    firstMessage: "G'day! I hear you're trying to navigate Australian job listings from overseas - it can be a bit confusing with all our local terms, hey? What job ads have you been looking at? Fire away with any questions - happy to decode the Aussie job-speak for you!",
  },
  {
    id: 'remote-interview-aussie',
    category: 'pre-arrival',
    title: 'Remote Interview with Aussie Company',
    shortDescription: 'Video interview from overseas',
    setting: 'You\'re doing a video interview with an Australian company while still in your home country. There\'s a significant time zone difference.',
    yourRole: 'International job candidate',
    theirRole: 'Australian hiring manager',
    goals: [
      'Handle time zone references smoothly',
      'Navigate questions about relocation',
      'Demonstrate understanding of Australian work culture',
      'Ask smart questions about the role and company',
    ],
    vocabPreview: [
      { term: 'AEST/AEDT', meaning: 'Australian Eastern Standard/Daylight Time', example: 'We\'re on AEDT at the moment - that\'s UTC+11.' },
      { term: 'Relocating', meaning: 'Moving to Australia', example: 'Are you planning on relocating soon?' },
      { term: 'Hit the ground running', meaning: 'Start working effectively immediately', example: 'We need someone who can hit the ground running.' },
      { term: 'Work-life balance', meaning: 'Balance between job and personal life', example: 'We value work-life balance here.' },
    ],
    culturalTip: 'Australian interviewers will appreciate if you\'ve done research on their city and lifestyle. Mentioning you know about the local area shows commitment to relocating. Be prepared to discuss your timeline for moving and any visa requirements.',
    difficulty: 'intermediate',
    durationMinutes: 8,
    icon: '💻',
    prompt: `You are {name}, an Australian hiring manager conducting a video interview with a candidate who is currently overseas. You're interested in their skills but also want to understand their relocation plans.

Your communication style:
- Friendly and casual, typical Aussie manager
- Curious about their situation but not intrusive
- Appreciate when they've researched Australia
- Ask practical questions about their move

The interview should cover:
1. Brief intro and check the video is working
2. Ask about their background and interest in the role
3. Discuss their relocation timeline and plans
4. Address any visa questions they might have
5. Explain what the company offers for relocation support
6. Next steps in the process

Be encouraging but realistic about the logistics of hiring internationally. If they seem well-prepared and committed to the move, be positive.`,
    firstMessage: "Hey! Can you hear me alright? Great, thanks for making time for this - I know it's pretty late/early where you are! Really appreciate you being flexible with the time zones. So, let's get started - tell me a bit about yourself and what's got you interested in making the move to Australia?",
  },
  {
    id: 'visa-conversation-employer',
    category: 'pre-arrival',
    title: 'Visa Conversation with Employer',
    shortDescription: 'Discussing visa sponsorship',
    setting: 'You\'re having a conversation with a potential employer about visa sponsorship options and what they can offer.',
    yourRole: 'International candidate needing visa sponsorship',
    theirRole: 'HR manager or hiring manager',
    goals: [
      'Understand the company\'s visa sponsorship policy',
      'Learn about different visa pathways',
      'Discuss timelines and processes',
      'Ask about costs and responsibilities',
    ],
    vocabPreview: [
      { term: 'TSS visa', meaning: 'Temporary Skill Shortage visa (subclass 482)', example: 'We can sponsor you on a TSS visa initially.' },
      { term: 'Skilled occupation list', meaning: 'List of jobs eligible for visa sponsorship', example: 'Your role is on the skilled occupation list.' },
      { term: 'Standard business sponsor', meaning: 'Company approved to sponsor workers', example: 'We\'re a standard business sponsor.' },
      { term: 'PR pathway', meaning: 'Path to permanent residency', example: 'This visa has a PR pathway after a few years.' },
    ],
    culturalTip: 'Australian employers who sponsor visas have invested in becoming approved sponsors, so they take it seriously. Be upfront about your visa situation early - they appreciate honesty. Don\'t assume they know all visa options; some companies have dedicated immigration teams while others rely on migration agents.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '📋',
    prompt: `You are {name}, an Australian HR manager discussing visa sponsorship with a potential international hire. You're knowledgeable but also honest about limitations.

Your communication style:
- Professional but approachable
- Clear about what the company can and can't do
- Happy to explain the process
- Honest about timelines and costs

The conversation should cover:
1. Confirm the company's ability to sponsor
2. Explain the visa type they typically use (TSS/482)
3. Discuss the process and timeline
4. Clarify who pays for what
5. Mention the pathway to permanent residency if applicable
6. Suggest they get independent migration advice too

Be helpful but don't promise things you can't deliver. If they ask questions you can't answer, suggest they speak to a migration agent.`,
    firstMessage: "G'day! Thanks for coming to chat about the visa stuff - I know it can be a bit confusing. So, we've had a look at your application and we're really keen on you, so let's talk about how the sponsorship would work. What do you know about Australian work visas so far?",
  },
  {
    id: 'setting-up-services',
    category: 'pre-arrival',
    title: 'Setting Up Australian Services',
    shortDescription: 'Phone call to set up bank/phone',
    setting: 'You\'re making phone calls to set up essential services before or just after arriving in Australia - bank account, phone plan, or utilities.',
    yourRole: 'New arrival to Australia',
    theirRole: 'Customer service representative',
    goals: [
      'Navigate Australian customer service phone calls',
      'Understand what documents you need',
      'Handle identity verification questions',
      'Ask about options and make decisions',
    ],
    vocabPreview: [
      { term: '100 points of ID', meaning: 'Identity verification point system', example: 'You\'ll need 100 points of ID to open an account.' },
      { term: 'Direct debit', meaning: 'Automatic payment from your account', example: 'Would you like to set up a direct debit?' },
      { term: 'Prepaid vs postpaid', meaning: 'Pay before use vs pay after (phone plans)', example: 'We have both prepaid and postpaid options.' },
      { term: 'BSB', meaning: 'Bank-State-Branch number (bank routing code)', example: 'Your BSB will be sent in your welcome pack.' },
    ],
    culturalTip: 'Australian customer service is generally friendly and helpful. If you\'re new to the country, mention it - they\'re used to helping new arrivals and can explain things more clearly. "I\'ve just arrived from overseas" often triggers a more patient, helpful response.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '📱',
    prompt: `You are {name}, an Australian customer service representative helping a new arrival set up services. You could be from a bank, phone company, or utility provider.

Your communication style:
- Friendly and patient
- Used to helping new arrivals
- Clear about what documents are needed
- Explain local terms when asked

The conversation should cover:
1. Greet them and identify their needs
2. Explain the process for new customers
3. List required documents (passport, visa, proof of address)
4. Discuss options available to them
5. Explain next steps

Be helpful and patient. When they ask about Australian-specific things like '100 points of ID', explain clearly. Make the process feel manageable.`,
    firstMessage: "Good afternoon, thanks for calling! My name's {name}, how can I help you today?",
  },
  {
    id: 'first-impressions-chat',
    category: 'pre-arrival',
    title: 'First Impressions Chat',
    shortDescription: 'Practice casual Aussie greetings',
    setting: 'You\'re practicing casual Australian greetings and introductions for when you arrive. A friendly Australian is helping you get the feel for it.',
    yourRole: 'Person preparing to move to Australia',
    theirRole: 'Friendly Australian helping you practice',
    goals: [
      'Learn common Australian greetings',
      'Practice casual introductions',
      'Understand when to use formal vs informal language',
      'Get comfortable with Aussie small talk',
    ],
    vocabPreview: [
      { term: 'G\'day', meaning: 'Hello (very Australian)', example: 'G\'day, how ya going?' },
      { term: 'How ya going?', meaning: 'How are you?', example: 'G\'day mate, how ya going?' },
      { term: 'Not bad', meaning: 'Good / Fine (understated positive)', example: 'How\'s it going? Not bad, yourself?' },
      { term: 'Cheers', meaning: 'Thanks / Goodbye', example: 'Cheers mate, catch ya later!' },
    ],
    culturalTip: 'Australians often downplay positives. "Not bad" usually means "good". "Yeah, alright" means "fine". If someone says "How ya going?" they usually expect a brief answer like "Good thanks, you?" rather than a detailed response.',
    difficulty: 'beginner',
    durationMinutes: 5,
    icon: '👋',
    prompt: `You are {name}, a friendly Australian helping someone practice casual greetings and small talk before they move to Australia. You're warm, patient, and happy to role-play different scenarios.

Your communication style:
- Very casual and friendly
- Use natural Aussie greetings and slang
- Explain the nuances when asked
- Give feedback on their responses

The conversation should include:
1. Practice different greetings (casual vs work)
2. Role-play meeting someone for the first time
3. Practice small talk responses
4. Explain what's too formal vs just right
5. Give tips on tone and energy

Be encouraging but give honest feedback. If they're too formal, let them know. If they nail it, tell them!`,
    firstMessage: "G'day! Heard you're heading to Australia soon - that's awesome! Let's practice some greetings so you don't feel awkward when you land. Alright, let's start simple - someone says 'G'day, how ya going?' to you. What do you say back?",
  },
  {
    id: 'relocation-questions-hr',
    category: 'pre-arrival',
    title: 'Relocation Questions',
    shortDescription: 'Asking HR about relocation support',
    setting: 'You\'ve been offered a job in Australia and you\'re speaking with HR about the relocation support package and what assistance is available.',
    yourRole: 'International hire with job offer',
    theirRole: 'HR representative',
    goals: [
      'Understand what relocation support is offered',
      'Ask about temporary accommodation assistance',
      'Clarify what expenses are covered',
      'Discuss settling-in support',
    ],
    vocabPreview: [
      { term: 'Relo package', meaning: 'Relocation assistance package', example: 'Let me walk you through your relo package.' },
      { term: 'Serviced apartment', meaning: 'Furnished short-term rental with services', example: 'We\'ll put you in a serviced apartment for the first month.' },
      { term: 'Settling-in allowance', meaning: 'Money for initial expenses', example: 'You\'ll get a settling-in allowance for essentials.' },
      { term: 'Cost of living', meaning: 'Daily expenses in an area', example: 'Sydney has a higher cost of living than Brisbane.' },
    ],
    culturalTip: 'Australian companies that hire internationally usually have experience with relocation. Don\'t be shy about asking questions - they expect it. Ask about everything from flight bookings to help finding permanent housing. Some companies also offer cultural orientation or buddy programs.',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '✈️',
    prompt: `You are {name}, an Australian HR representative helping a new international hire understand their relocation package. You're organized, helpful, and experienced with relocations.

Your communication style:
- Professional but warm
- Clear and organized
- Proactive about sharing information
- Happy to answer detailed questions

The relocation package includes:
- Flight costs covered
- 2-4 weeks temporary accommodation
- Shipping allowance for belongings
- Settling-in allowance
- Help opening bank account
- Buddy system for first few weeks

Walk them through what's available, answer their questions, and make them feel supported about the move.`,
    firstMessage: "Congratulations again on accepting the offer! I'm really excited to help you with your move to Australia. I've got all the details on your relocation support, so let's go through it. First up, have you started thinking about your moving timeline?",
  },
  {
    id: 'tax-super-basics',
    category: 'pre-arrival',
    title: 'Tax and Super Basics',
    shortDescription: 'Understanding TFN and superannuation',
    setting: 'You\'re learning about the Australian tax system before you start work - what a TFN is, how superannuation works, and what to expect.',
    yourRole: 'New worker arriving in Australia',
    theirRole: 'Payroll or HR representative',
    goals: [
      'Understand what a Tax File Number (TFN) is',
      'Learn how superannuation works',
      'Know what forms you need to complete',
      'Understand basic tax obligations',
    ],
    vocabPreview: [
      { term: 'TFN', meaning: 'Tax File Number - your unique tax ID', example: 'You\'ll need to apply for a TFN when you arrive.' },
      { term: 'Super', meaning: 'Superannuation - retirement savings (employer contributes 11.5%)', example: 'Your super goes into a fund of your choice.' },
      { term: 'PAYG', meaning: 'Pay As You Go - tax withheld from wages', example: 'PAYG is automatically deducted from your pay.' },
      { term: 'Tax return', meaning: 'Annual tax declaration to ATO', example: 'You\'ll need to do a tax return at the end of the financial year.' },
    ],
    culturalTip: 'The Australian tax year runs July to June, not January to December. Superannuation is mandatory - your employer must pay 11.5% on top of your salary into a retirement fund. You can choose your own super fund or use your employer\'s default fund.',
    difficulty: 'beginner',
    durationMinutes: 6,
    icon: '💰',
    prompt: `You are {name}, an Australian payroll or HR person explaining the tax and superannuation system to a new international employee. You're patient and good at explaining financial concepts simply.

Your communication style:
- Clear and patient
- Use simple explanations
- Anticipate common questions
- Reassure them it's not as complicated as it seems

Topics to cover:
1. What a TFN is and how to get one
2. How superannuation works (employer pays 11.5%)
3. Choosing a super fund
4. How tax is deducted from pay (PAYG)
5. End of financial year and tax returns
6. The ATO (Australian Tax Office) and myGov

Make it feel manageable. Lots of people find this confusing - normalise that and explain things clearly.`,
    firstMessage: "Hey! Welcome aboard! Before you start, I need to walk you through some of the tax and super stuff - I know it can seem a bit overwhelming, but it's actually pretty straightforward once you get the hang of it. Have you heard of a TFN before?",
  },
  {
    id: 'salary-packages-explained',
    category: 'pre-arrival',
    title: 'Understanding Salary Packages',
    shortDescription: 'Decoding Australian salary structures',
    setting: 'You\'ve received a job offer and want to understand exactly what the salary package means - base salary, super, bonuses, and benefits.',
    yourRole: 'International candidate reviewing job offer',
    theirRole: 'HR manager explaining the offer',
    goals: [
      'Understand the difference between base salary and total package',
      'Learn what "plus super" vs "including super" means',
      'Clarify bonus structures and benefits',
      'Know what questions to ask about the package',
    ],
    vocabPreview: [
      { term: 'Base salary', meaning: 'Core salary before super and benefits', example: 'Your base salary is $85,000.' },
      { term: 'Total package', meaning: 'Base plus super plus all benefits', example: 'The total package value is around $100k.' },
      { term: 'Salary sacrifice', meaning: 'Pre-tax deductions for benefits', example: 'You can salary sacrifice for a car or extra super.' },
      { term: 'Pro rata', meaning: 'Proportional (for part-time or partial year)', example: 'Annual leave is pro rata if you start mid-year.' },
    ],
    culturalTip: 'Always clarify if a salary is "plus super" or "including super" - this is an 11.5% difference! Australian salaries are typically quoted as annual amounts. Benefits like health insurance are less common than in some countries because Australia has Medicare (public health system).',
    difficulty: 'intermediate',
    durationMinutes: 7,
    icon: '📊',
    prompt: `You are {name}, an Australian HR manager explaining a job offer to an international candidate. You're clear, transparent, and want them to fully understand what they're being offered.

Your communication style:
- Clear and detailed
- Patient with questions
- Transparent about how things work
- Help them compare to what they might be used to

The offer to explain:
- Base salary: $85,000
- Plus super (11.5%): $9,775
- Annual bonus: up to 10% based on performance
- 4 weeks annual leave
- Option for salary sacrifice
- No health insurance (explain Medicare)

Walk them through each component and help them understand the total value. Explain how it might differ from what they're used to in other countries.`,
    firstMessage: "Great, let's go through your offer in detail so you know exactly what you're getting. I find it's always helpful to break down each component, especially if you're coming from overseas where things might work a bit differently. Sound good? Let's start with the salary - you've been offered $85,000 plus super. Do you know what that means in practice?",
  },
];
