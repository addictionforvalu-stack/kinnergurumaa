import {
  ServiceItem,
  Astrologer,
  Testimonial,
  BlogPost,
  FAQItem,
  UserProfile,
  KundliChartData,
  BookingData
} from '../types';

export const TRUST_METRICS = [
  { label: 'Consultations Completed', value: '10,000+', subtitle: 'Verified 1-on-1 sessions' },
  { label: 'Years of Vedic Mastery', value: '15+', subtitle: 'Traditional Gurukul lineage' },
  { label: 'Client Satisfaction', value: '4.9/5', subtitle: 'Based on 4,200+ direct reviews' },
  { label: 'Countries Served', value: '25+', subtitle: 'Global clients across 6 continents' },
];

export const SERVICES_DATA: ServiceItem[] = [];

/*
export const OLD_SERVICES_BACKUP: ServiceItem[] = [
  {
    id: 'birth-chart-analysis',
    title: 'Birth Chart Analysis',
    sanskritName: 'Janam Kundli Vimarsh',
    shortDesc: 'A comprehensive 360° deep-dive into your 12 houses, Lagna (Ascendant), and planetary alignments.',
    fullDesc: 'Your Janam Kundli is your cosmic blueprint at the exact second of your birth. This session deconstructs your foundational strengths, inherent karmic patterns, hidden potentials, and life trajectory through classical Parashari principles.',
    durationMinutes: 60,
    priceUSD: 145,
    priceINR: 4999,
    popular: true,
    category: 'core',
    iconName: 'Compass',
    highlights: [
      'Ascendant (Lagna) & Moon sign psychological profile',
      'Analysis of all 12 houses & their governing deities',
      'Current Mahadasha & Antardasha roadmap for the next 3 years',
      'Tailored gemstone, mantra & lifestyle alignment remedies'
    ],
    deliverables: [
      '60-Minute 1-on-1 confidential video consultation',
      'Comprehensive 24-page personalized Janam Kundli PDF dossier',
      'High-definition session audio recording',
      '7-day follow-up messaging directly with your astrologer'
    ],
    sampleQuestions: [
      'What are my innate natural talents and blind spots?',
      'Why do I experience recurring obstacles in certain life phases?',
      'What karmic lessons is my soul meant to master in this lifetime?'
    ]
  },
  {
    id: 'marriage-compatibility',
    title: 'Marriage & Compatibility',
    sanskritName: 'Kundli Milan & Gun Milan',
    shortDesc: 'Holistic 36-Guna matching combined with emotional, physical, and financial synergy analysis.',
    fullDesc: 'Beyond conventional score-checking, our acharyas assess mental temperament (Maitri), longevity, financial stability, Bhakoot and Nadi doshas, and provide authentic balancing remedies for long-lasting marital harmony.',
    durationMinutes: 60,
    priceUSD: 165,
    priceINR: 5999,
    popular: true,
    category: 'relationships',
    iconName: 'HeartHandshake',
    highlights: [
      'Ashtakoot 36 Guna Milan & Navamsha (D9) harmony',
      'Manglik (Kuja) dosha assessment and mitigation',
      'Long-term emotional, financial and family synchronicity',
      'Auspicious marriage Muhurta (dates & timings)'
    ],
    deliverables: [
      'Comparative two-chart synastry breakdown',
      'Gun Milan compatibility score report with mitigation advice',
      'Session recording & customized shared remedies guide'
    ],
    sampleQuestions: [
      'Are our mental and emotional temperaments complementary?',
      'Do we share Kuja Dosha, and how can it be neutralized?',
      'What are the most favorable windows for our wedding ceremony?'
    ]
  },
  {
    id: 'career-business-guidance',
    title: 'Career & Business Guidance',
    sanskritName: 'Karma Sthana & Artha Guidance',
    shortDesc: 'Actionable timing for job changes, venture launches, promotions, and wealth accumulation.',
    fullDesc: 'Harness the wisdom of the 10th House (Karma Bhava), Dashamsha (D10) divisional chart, and Jupiter/Saturn transits to make strategic executive moves and capitalize on lucrative business cycles.',
    durationMinutes: 45,
    priceUSD: 130,
    priceINR: 4499,
    popular: false,
    category: 'destiny',
    iconName: 'Briefcase',
    highlights: [
      '10th House & Dashamsha (D10) professional blueprint',
      'Optimal timing for starting a business, resignation, or expansion',
      'Wealth yogas (Dhana Yogas) and liquidity phases',
      'Navigating challenging Sade Sati or Rahu periods in work'
    ],
    deliverables: [
      '18-month career timing roadmap with high/low risk indicators',
      'Executive strategic summary document',
      '45-Minute intensive discussion with transit dates'
    ],
    sampleQuestions: [
      'Is my chart more favorable for entrepreneurship or corporate leadership?',
      'When is the safest time to resign or pivot into a new sector?',
      'How will the upcoming planetary transit affect my business cashflow?'
    ]
  },
  {
    id: 'love-relationships',
    title: 'Love & Relationship Guidance',
    sanskritName: 'Shukra & 7th House Insights',
    shortDesc: 'Understand relationship patterns, soul-tie timing, and pathways through heartbreak.',
    fullDesc: 'Analyze the position of Venus (Shukra), Mars (Mangal), and the 7th House lord to understand your romantic instincts, when significant life partners enter your sphere, and how to dissolve karmic knots.',
    durationMinutes: 45,
    priceUSD: 120,
    priceINR: 3999,
    popular: false,
    category: 'relationships',
    iconName: 'Sparkles',
    highlights: [
      'Venus placement, condition, and romantic inclinations',
      'Identification of partnership timing windows in your Dasha',
      'Healing past karmic relationship cycles and repeated heartbreaks',
      'Remedial measures for emotional peace and self-alignment'
    ],
    deliverables: [
      'Personalized relationship archetype profile',
      'Actionable astrological guidance notes',
      'Audio recording of your session'
    ],
    sampleQuestions: [
      'When is my next major partnership window opening?',
      'Why do I attract emotionally unavailable partners?',
      'How can I harmonize current relationship tensions?'
    ]
  },
  {
    id: 'vedic-numerology',
    title: 'Vedic Numerology',
    sanskritName: 'Anka Shastra Analysis',
    shortDesc: 'Harness the vibratory frequencies of your Birth Number, Destiny Number, and Name spelling.',
    fullDesc: 'Vedic numerology (Anka Vidya) reveals how your birth dates align with planetary rulers. Fine-tune your business name, personal signature, lucky dates, and vehicle/home numbers for optimal cosmic resonance.',
    durationMinutes: 45,
    priceUSD: 110,
    priceINR: 3699,
    popular: false,
    category: 'destiny',
    iconName: 'Hash',
    highlights: [
      'Mulank (Birth Number) and Bhagyank (Destiny Number) synthesis',
      'Name spelling optimization for personal or brand success',
      'Auspicious dates, colors, and lucky directions',
      'Synergy between your numerological numbers and birth chart'
    ],
    deliverables: [
      'Customized Vedic Numerology chart with vibration table',
      'Name correction recommendations if required',
      '45-Minute interactive session'
    ],
    sampleQuestions: [
      'Is my current legal or brand name in harmony with my birth date?',
      'What are my power days for signing contracts or making investments?',
      'Which numbers should I avoid in key life decisions?'
    ]
  },
  {
    id: 'kundli-reading',
    title: 'Kundli Reading & Dasha Review',
    sanskritName: 'Vimshottari Dasha Analysis',
    shortDesc: 'Pinpoint which planetary period currently rules your life and prepare for what lies ahead.',
    fullDesc: 'Life moves in cosmic seasons governed by the 120-year Vimshottari cycle. Understand which planet is actively holding the reins of your health, finance, and relationships right now and how to navigate transitions.',
    durationMinutes: 45,
    priceUSD: 125,
    priceINR: 4299,
    popular: false,
    category: 'core',
    iconName: 'Layers',
    highlights: [
      'Detailed study of current Mahadasha, Antardasha & Pratyantardasha',
      'Major planetary transits (Gochar): Saturn, Jupiter, Rahu-Ketu',
      'Anticipation of major life turning points over the next 24 months',
      'Precise remedial timing for peace of mind'
    ],
    deliverables: [
      'Dasha timeline summary with key milestone dates',
      'Transit impact notes',
      'Audio recording of the consultation'
    ],
    sampleQuestions: [
      'When does my current challenging planetary period conclude?',
      'What opportunities does my next upcoming Mahadasha present?',
      'How can I best prepare for my next major planetary shift?'
    ]
  },
  {
    id: 'yearly-horoscope',
    title: 'Yearly Horoscope & Varshphal',
    sanskritName: 'Tajik Varshphal Forecast',
    shortDesc: 'A detailed 12-month month-by-month predictive forecast based on your solar return chart.',
    fullDesc: 'Varshphal (Solar Return) creates a specialized chart for your birthday year. It acts as a dedicated operational manual for your coming 365 days, highlighting quarter-by-quarter peaks, cautions, and favorable windows.',
    durationMinutes: 60,
    priceUSD: 155,
    priceINR: 5299,
    popular: true,
    category: 'annual',
    iconName: 'Calendar',
    highlights: [
      'Muntha position and Year Lord (Varsheshwara) analysis',
      'Quarterly breakdown: Wealth, Health, Family, and Career',
      'Specific auspicious windows for investments and travel',
      'Annual astrological protection remedies and rituals'
    ],
    deliverables: [
      'Comprehensive 12-Month Predictive Dossier (PDF)',
      '60-Minute deep-dive session with an Acharya',
      'Calendar of auspicious dates for key initiatives'
    ],
    sampleQuestions: [
      'Which quarter of this year holds the strongest growth potential?',
      'Are there health or financial vulnerabilities I should safeguard against?',
      'What is the central karmic theme of my current solar year?'
    ]
  },
  {
    id: 'personalized-consultation',
    title: 'Personalized Spiritual Consultation',
    sanskritName: 'Atma Shanti & Remedial Guidance',
    shortDesc: 'A safe, private, unhurried sanctuary to address deeply personal questions and spiritual dilemmas.',
    fullDesc: 'For those seeking clarity during complex life intersections, spiritual crises, or sudden upheavals. Combines classical Vedic chart reading with contemplative spiritual counseling and non-fatalistic practical guidance.',
    durationMinutes: 60,
    priceUSD: 175,
    priceINR: 6499,
    popular: false,
    category: 'core',
    iconName: 'Flame',
    highlights: [
      'Unhurried, compassionate 1-on-1 space for multi-faceted issues',
      'Integration of Prashna Kundli (Horary astrology) for immediate clarity',
      'Customized spiritual remedies: Japa, Dana, and sacred timing',
      'Strict adherence to client dignity, privacy, and non-judgment'
    ],
    deliverables: [
      '60-Minute private video or audio sanctuary',
      'Personalized spiritual action plan with authentic mantras',
      'Direct follow-up access for 14 days'
    ],
    sampleQuestions: [
      'I am at a total crossroads in life; which path honors my Dharma?',
      'How can I find inner peace amidst external instability?',
      'What spiritual practices are best suited to my cosmic constitution?'
    ]
  }
];
*/

export const ASTROLOGERS_DATA: Astrologer[] = [
  {
    id: 'acharya-devavrat',
    name: 'Acharya Devavrat Shastri',
    title: 'Senior Vedic Astrologer & Parashari Scholar',
    lineageOrDegree: 'M.A. Jyotish (Sampurnanand Sanskrit Vishwavidyalaya, Varanasi)',
    experienceYears: 22,
    consultationsCount: 7400,
    rating: 4.98,
    reviewCount: 1840,
    languages: ['English', 'Hindi', 'Sanskrit'],
    specialties: ['Birth Chart Analysis', 'Career & Business', 'Karma Yogas', 'Vedic Remedies'],
    bio: 'Born into a four-generation family of traditional scholars in Varanasi, Acharya Devavrat combines deep classical Sanskrit scholarship with a calm, rational, modern perspective. He specializes in precise dasha timing and non-fear-based spiritual guidance.',
    philosophy: 'Astrology is not a prison of fatalism; it is a celestial map showing where the winds blow so you can adjust your sails with wisdom and grace.',
    avatarUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Sat'],
    hourlyRateUSD: 155,
    hourlyRateINR: 5499
  },
  {
    id: 'dr-gayatri-sundaram',
    name: 'Dr. Gayatri Sundaram',
    title: 'Divisional Charts & Relationship Specialist',
    lineageOrDegree: 'Ph.D. in Vedic Sciences & Certified Jaimini Astrologer',
    experienceYears: 17,
    consultationsCount: 5200,
    rating: 4.95,
    reviewCount: 1290,
    languages: ['English', 'Tamil', 'Hindi'],
    specialties: ['Marriage Compatibility', 'Love & Relationships', 'Navamsha (D9) Dynamics', 'Muhurta'],
    bio: 'Dr. Gayatri is acclaimed internationally for her analytical rigor in Ashtakoot matching and Navamsha deconstruction. Her consultations provide thoughtful, empathetic guidance for couples and individuals seeking harmonious lifelong companionship.',
    philosophy: 'When two souls unite, their charts do not simply add up; they create a third shared energetic destiny that can be nurtured with conscious awareness.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    availableDays: ['Tue', 'Wed', 'Thu', 'Fri', 'Sun'],
    hourlyRateUSD: 165,
    hourlyRateINR: 5999
  },
  {
    id: 'pt-raghavendra-joshi',
    name: 'Pt. Raghavendra Joshi',
    title: 'Financial Astrology & Prashna Shastra Master',
    lineageOrDegree: 'Jyotish Praveena & Jyotish Visharada (ICAS)',
    experienceYears: 19,
    consultationsCount: 6100,
    rating: 4.96,
    reviewCount: 1420,
    languages: ['English', 'Marathi', 'Hindi'],
    specialties: ['Business & Startups', 'Wealth Yogas', 'Prashna (Horary) Kundli', 'Varshphal'],
    bio: 'Pt. Raghavendra is trusted by entrepreneurs, professionals, and founders worldwide. With a background in economics preceding his two decades of Vedic studies, he translates planetary cycles into clear, actionable commercial and financial insights.',
    philosophy: 'Wealth in Vedic philosophy is Lakshmi—sacred energy that flows best when aligned with righteous action (Dharma) and cosmic timing (Kala).',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    availableDays: ['Mon', 'Wed', 'Fri', 'Sat', 'Sun'],
    hourlyRateUSD: 150,
    hourlyRateINR: 5299
  },
  {
    id: 'vidushi-ananya-sen',
    name: 'Vidushi Ananya Sen',
    title: 'Vedic Numerologist & Nakshatra Counselor',
    lineageOrDegree: 'Diploma in Anka Shastra & Vedic Psychology',
    experienceYears: 14,
    consultationsCount: 3900,
    rating: 4.94,
    reviewCount: 960,
    languages: ['English', 'Bengali', 'Hindi'],
    specialties: ['Vedic Numerology', 'Name Vibration Alignment', 'Spiritual Clarity', 'Life Transitions'],
    bio: 'Vidushi Ananya specializes in the deep psychological interplay of Nakshatras (lunar mansions) and Vedic numerological frequencies. Her sessions are gentle, profoundly illuminating, and oriented towards personal empowerment and purpose.',
    philosophy: 'Your name and birth date carry a sacred tone. When that tone vibrates in resonance with your core nature, friction dissolves.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
    hourlyRateUSD: 135,
    hourlyRateINR: 4799
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Sunita & Vikram M.',
    location: 'London, United Kingdom',
    rating: 5,
    serviceTitle: 'Marriage & Compatibility',
    date: 'February 2026',
    quote: 'We were nervous about traditional Kundli matching because family members were fixated on an apparent dosha. Dr. Gayatri walked us through the Navamsha with such grace, nuance, and logic that both families felt complete peace. We are now happily married.',
    outcome: 'Resolved family concerns through nuanced Navamsha analysis',
    verified: true
  },
  {
    id: 'test-2',
    clientName: 'Rajiv K.',
    location: 'San Francisco, CA, USA',
    rating: 5,
    serviceTitle: 'Career & Business Guidance',
    date: 'January 2026',
    quote: 'I was considering leaving my executive tech role to bootstrap an AI venture. Acharya Devavrat predicted a favorable window starting mid-autumn and advised against rushing in spring. Following that timing saved me from severe cash-flow traps. Truly invaluable counsel.',
    outcome: 'Optimized venture launch timing and avoided liquidity traps',
    verified: true
  },
  {
    id: 'test-3',
    clientName: 'Aarohi P.',
    location: 'Mumbai, India',
    rating: 5,
    serviceTitle: 'Birth Chart Analysis',
    date: 'December 2025',
    quote: 'This was the furthest thing from the superstitious astrology you see online. It felt like an enlightened combination of psychotherapy, cosmic philosophy, and practical strategy. The 24-page dossier is something I will keep for decades.',
    outcome: 'Gained profound clarity on life purpose and personal strengths',
    verified: true
  },
  {
    id: 'test-4',
    clientName: 'Marcus E.',
    location: 'Singapore',
    rating: 5,
    serviceTitle: 'Yearly Horoscope & Varshphal',
    date: 'February 2026',
    quote: 'I have had consultations in multiple disciplines, but Pt. Raghavendra’s reading of my Solar Return was astonishingly precise regarding my international relocation and commercial partnerships. Highly recommended.',
    outcome: 'Flawless relocation and international transition planning',
    verified: true
  },
  {
    id: 'test-5',
    clientName: 'Meera S.',
    location: 'Toronto, Canada',
    rating: 5,
    serviceTitle: 'Vedic Numerology & Name Alignment',
    date: 'January 2026',
    quote: 'Vidushi Ananya helped me harmonize my personal brand name with my destiny number. The shift in clarity and client inquiries within three months was remarkable. Her guidance is both spiritual and grounded.',
    outcome: 'Brand resonance and tangible client inquiry growth',
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'what-your-birth-chart-reveals-about-career',
    title: 'What Your Birth Chart Reveals About Your Career & Calling',
    subtitle: 'Deconstructing the 10th House, the Dashamsha chart, and the role of Saturn as the cosmic auditor.',
    category: 'Career & Karma',
    readTime: '6 min read',
    publishedDate: 'March 2, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
    summary: 'In classical Vedic astrology, your professional calling is governed by the Karma Sthana. Learn how planetary positions indicate whether you thrive in leadership, specialized craftsmanship, or entrepreneurial risk.',
    content: [
      'The tenth house of the Janam Kundli—known as the Karma Bhava—is considered the most potent quadrant (Kendra). It signifies your public impact, professional honor, and the nature of your worldly contributions.',
      'Unlike modern pop astrology that only considers Sun signs, Vedic astrology analyzes the Rashi occupying your 10th house, the condition of its governing lord, and the subtle harmonics of the Dashamsha (D10) divisional chart.',
      'Furthermore, Saturn (Shani Dev) is not an adversary; he acts as the cosmic taskmaster. When Saturn activates your professional axis, it demands rigorous discipline, ethical foundations, and long-term patience. Understanding this cycle shifts anxiety into purposeful dedication.'
    ],
    keyTakeaways: [
      'The 10th house indicates outward accomplishment and professional duty',
      'Divisional chart D10 provides granular insight into your true vocation',
      'Planetary Dasha periods determine whether to expand or consolidate'
    ]
  },
  {
    id: 'post-2',
    slug: 'how-vedic-astrology-helps-relationships',
    title: 'How Vedic Astrology Can Help With Relationships & Long-Term Harmony',
    subtitle: 'Why classical Kundli matching transcends simple scorecards to understand psychological temperaments.',
    category: 'Relationships',
    readTime: '8 min read',
    publishedDate: 'February 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80',
    summary: 'True compatibility is not about finding someone identical to you, but finding harmonious resonance in values, emotional resilience, and shared karmic vision.',
    content: [
      'In Vedic philosophy, human connection is deeply intertwined with the Moon (Chandra), which governs our emotional psyche, subconscious reflexes, and instinctive responses.',
      'When astrologers perform Kundli Milan, the 36-point Ashtakoot system examines eight distinct facets of compatibility: from spiritual alignment (Varna) and mutual magnetism (Vashya) to mental temperament (Maitri) and genetic wellness (Nadi).',
      'Crucially, an experienced astrologer never looks at a low score as an automatic disqualifier. By examining the Navamsha (D9) and the placement of Jupiter and Venus, solutions and conscious behavioral adjustments can often bridge traditional gaps.'
    ],
    keyTakeaways: [
      'The Moon sign reflects emotional needs and domestic peace',
      'Ashtakoot assesses psychological, mental, and physical compatibility',
      'Navamsha (D9) reveals how the relationship evolves over decades'
    ]
  },
  {
    id: 'post-3',
    slug: 'understanding-your-moon-sign-chandra-rashi',
    title: 'Understanding Your Moon Sign: The True Compass of Vedic Astrology',
    subtitle: 'Why your Chandra Rashi reflects your inner sanctuary far more deeply than the Western Sun sign.',
    category: 'Vedic Fundamentals',
    readTime: '5 min read',
    publishedDate: 'February 16, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&w=800&q=80',
    summary: 'While your Sun sign represents your soul’s core ego, your Moon sign governs your emotional nervous system, mental peace, and daily reactions.',
    content: [
      'In traditional Indian astrology, the zodiac is calculated using the sidereal system, which accounts for the actual astronomical precession of the equinoxes. This means your Vedic Moon sign is frequently one sign earlier than in Western tropical astrology.',
      'Because the Moon stays in each constellation for only about 2.25 days, your Moon sign and Nakshatra (lunar mansion) reveal exquisitely nuanced details about how you process grief, love, ambition, and stress.',
      'When life feels turbulent, nurturing your Moon sign through meditation, water elements, and conscious stillness restores equilibrium faster than any external intervention.'
    ],
    keyTakeaways: [
      'Sidereal astrology aligns with physical planetary constellations',
      'The Moon sign dictates your mental constitution (Manas)',
      'Your Nakshatra determines the starting point of your life’s Dasha cycle'
    ]
  },
  {
    id: 'post-4',
    slug: 'best-time-to-make-important-decisions',
    title: 'The Sacred Art of Muhurta: Timing Decisions with the Cosmic Clock',
    subtitle: 'How ancient Vedic electional astrology identifies auspicious hours for investments, weddings, and ventures.',
    category: 'Sacred Timing',
    readTime: '7 min read',
    publishedDate: 'January 28, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    summary: 'Just as farmers plant seeds in favorable seasons, humans reap greater prosperity when planting initiatives during auspicious planetary alignments.',
    content: [
      'Muhurta is the ancient Vedic science of electional timing. Every action initiated at a particular moment carries the energetic imprint of that exact celestial configuration.',
      'A true Muhurta calculation balances five vital limbs (Panchang): Tithi (lunar day), Vaar (solar weekday), Nakshatra (lunar mansion), Yoga (soli-lunar angle), and Karana (half lunar day).',
      'Avoiding adverse windows like Rahu Kaal while choosing the Lagna with benefic planets in Kendra positions provides subtle yet undeniable momentum to endeavors.'
    ],
    keyTakeaways: [
      'Muhurta aligns human intent with natural cosmic rhythms',
      'Panchang provides five dimensions of time quality',
      'Careful timing minimizes unnecessary friction and delays'
    ]
  },
  {
    id: 'post-5',
    slug: 'kundli-matching-explained-myths-and-truths',
    title: 'Kundli Matching Explained: Dispelling Myths About Manglik & Nadi Doshas',
    subtitle: 'A rational, scholar’s perspective on traditional fear-mongering and the real mechanics of harmony.',
    category: 'Vedic Wisdom',
    readTime: '9 min read',
    publishedDate: 'January 14, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    summary: 'Too many relationships suffer due to superficial readings of Kuja Dosha. Learn how classical texts provide dozens of natural cancellations and authentic remedies.',
    content: [
      'One of the most persistent anxieties in Indian astrology is the fear of Manglik Dosha (Mars placement). However, ancient texts like the Brihat Parashara Hora Shastra outline over thirty specific planetary combinations that completely neutralize it.',
      'For example, when Mars is in its own sign (Aries or Scorpio), or exalted in Capricorn, or aspected by a strong Jupiter, the so-called malefic influence is transmuted into courage, leadership, and emotional devotion.',
      'Our practice is built on eradicating superstition. We provide couples with grounded psychological and spiritual insights rather than imposing anxiety.'
    ],
    keyTakeaways: [
      'Over 70% of apparent Manglik conditions have classical cancellations',
      'Mars represents vital drive, passion, and boundaries',
      'Ethical astrology empowers human agency and mutual respect'
    ]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What information do I need to prepare for a consultation?',
    answer: 'To generate your accurate Vedic birth chart, you will need: your exact Date of Birth, Time of Birth (ideally as accurate as possible from a hospital birth record), and Place of Birth (City, State, Country). If your exact birth time is uncertain, let us know during booking so our astrologers can utilize Prashna Shastra or perform birth-time rectification techniques.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'How does an online consultation work?',
    answer: 'Once you book, you receive an instant confirmation and calendar invite with a secure high-definition video link (Zoom/Google Meet) or audio call option. Before your session, your astrologer spends 30-45 minutes pre-calculating your Janam Kundli, Navamsha, and current Dasha. During the live call, you have an unhurried, private conversation. Afterwards, your dossier and audio recording are saved directly to your client dashboard.',
    category: 'booking'
  },
  {
    id: 'faq-3',
    question: 'Is my personal and birth information kept strictly confidential?',
    answer: 'Yes, absolutely. We treat your personal data, life questions, and birth charts with the highest standard of ethical confidentiality. We never sell, share, or publish client records. All consultation notes and charts are encrypted and accessible only by your selected Acharya.',
    category: 'privacy'
  },
  {
    id: 'faq-4',
    question: 'How long does a consultation take?',
    answer: 'Our consultations are structured in 45-minute and 60-minute in-depth sessions. We intentionally avoid rushed 10-minute automated readings because authentic Vedic analysis requires thorough chart deconstruction and attentive listening to your life context.',
    category: 'booking'
  },
  {
    id: 'faq-5',
    question: 'Can I ask specific questions about career, marriage, and finance?',
    answer: 'Yes. You are encouraged to submit 2-3 specific life questions when booking, or bring your questions to the live session. Our astrologers will analyze the specific house lords (e.g. 10th for career, 7th for marriage, 2nd & 11th for wealth) to give targeted, time-bound guidance.',
    category: 'general'
  },
  {
    id: 'faq-6',
    question: 'Can I reschedule my appointment if something comes up?',
    answer: 'Yes. You can reschedule your appointment directly from your User Dashboard up to 6 hours prior to your session time with zero penalty. We understand that emergencies and scheduling conflicts arise.',
    category: 'booking'
  },
  {
    id: 'faq-7',
    question: 'Do you provide remedies, and are they expensive or fear-based?',
    answer: 'We adhere to an ethical, non-fear-based Vedic philosophy. We never tell clients that bad luck will strike unless they buy expensive rituals. Our recommended remedies emphasize internal alignment: tailored Vedic mantras (Japa), positive behavioral modifications, meditation, charitable giving (Dana) on specific planetary days, and optional natural gemstone or Rudraksha guidance only if structurally supportive.',
    category: 'remedies'
  },
  {
    id: 'faq-8',
    question: 'What is the difference between Vedic and Western astrology?',
    answer: 'Vedic astrology (Jyotish) uses the Sidereal zodiac, which maps to the actual observable astronomical positions of the stars and constellations, accounting for the earth’s axial precession. It also utilizes the 27 Nakshatras (lunar mansions) and the predictive Vimshottari Dasha planetary timeline system, providing unmatched temporal precision.',
    category: 'general'
  }
];

export const DEMO_USER: UserProfile = {
  id: 'usr-108',
  name: 'Priya Sharma',
  email: 'priya.sharma@example.com',
  phone: '+1 (555) 382-9102',
  birthDetails: {
    dateOfBirth: '1992-08-18',
    timeOfBirth: '07:42',
    timeAccuracy: 'exact',
    placeOfBirth: 'New Delhi',
    country: 'India',
    currentCity: 'New York, USA',
    gender: 'female'
  },
  savedKundli: {
    ascendant: 'Leo (Simha) 14°22\'',
    moonSign: 'Taurus (Vrishabha) 21°05\'',
    sunSign: 'Leo (Simha) 02°11\'',
    currentDasha: 'Jupiter (Guru) Mahadasha - Saturn (Shani) Antardasha',
    dashaPeriod: 'Nov 2024 to May 2027',
    planetaryPositions: [
      { planet: 'Ascendant (Lagna)', sanskrit: 'Lagna', house: 1, sign: 'Leo', nakshatra: 'Purva Phalguni', pada: 1, degree: '14°22\'', status: 'Own' },
      { planet: 'Sun', sanskrit: 'Surya', house: 1, sign: 'Leo', nakshatra: 'Magha', pada: 1, degree: '02°11\'', status: 'Own' },
      { planet: 'Moon', sanskrit: 'Chandra', house: 10, sign: 'Taurus', nakshatra: 'Rohini', pada: 4, degree: '21°05\'', status: 'Exalted' },
      { planet: 'Mars', sanskrit: 'Mangal', house: 9, sign: 'Aries', nakshatra: 'Bharani', pada: 2, degree: '11°48\'', status: 'Own' },
      { planet: 'Mercury', sanskrit: 'Budha', house: 2, sign: 'Virgo', nakshatra: 'Hasta', pada: 1, degree: '05°30\'', status: 'Exalted' },
      { planet: 'Jupiter', sanskrit: 'Guru', house: 12, sign: 'Cancer', nakshatra: 'Pushya', pada: 3, degree: '18°14\'', status: 'Exalted' },
      { planet: 'Venus', sanskrit: 'Shukra', house: 1, sign: 'Leo', nakshatra: 'Purva Phalguni', pada: 3, degree: '24°50\'', status: 'Friendly' },
      { planet: 'Saturn', sanskrit: 'Shani', house: 6, sign: 'Capricorn', nakshatra: 'Shravana', pada: 2, degree: '19°02\'', status: 'Own' },
      { planet: 'Rahu', sanskrit: 'Rahu', house: 4, sign: 'Scorpio', nakshatra: 'Anuradha', pada: 4, degree: '08°12\'', status: 'Friendly' },
      { planet: 'Ketu', sanskrit: 'Ketu', house: 10, sign: 'Taurus', nakshatra: 'Krittika', pada: 2, degree: '08°12\'', status: 'Neutral' },
    ],
    coreRemedies: {
      gemstone: 'Yellow Sapphire (Pukhraj) 4.5 carats in Gold on Index Finger',
      mantra: 'Om Gram Greem Groum Sah Guruve Namah (108 times on Thursdays)',
      rudraksha: '5 Mukhi Nepali Rudraksha for Jupiter harmony',
      auspiciousDay: 'Thursday (Guruvaar) and Sunday (Ravi-vaar)',
      charitySuggestion: 'Support educational books or nutritious meals for students on Thursdays'
    }
  }
};

export const INITIAL_BOOKINGS: BookingData[] = [
  {
    id: 'bkg-101',
    serviceId: 'birth-chart-analysis',
    serviceTitle: 'Birth Chart Analysis (Janam Kundli)',
    astrologerId: 'acharya-devavrat',
    astrologerName: 'Acharya Devavrat Shastri',
    date: '2026-09-22',
    timeSlot: '11:00 AM - 12:00 PM EST',
    consultationType: 'video',
    fullName: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+1 (555) 382-9102',
    birthDetails: DEMO_USER.birthDetails,
    concernsOrQuestions: 'I am planning an international promotion and wanted to check my upcoming Jupiter-Saturn period timing.',
    totalPriceUSD: 145,
    totalPriceINR: 4999,
    currency: 'USD',
    paymentMethod: 'card',
    status: 'upcoming',
    zoomLink: 'https://meet.google.com/kinnergurumaa-session-849',
    referenceNumber: 'KG-2026-8942',
    createdAt: '2026-09-12T14:20:00Z'
  },
  {
    id: 'bkg-102',
    serviceId: 'career-business-guidance',
    serviceTitle: 'Career & Business Guidance',
    astrologerId: 'pt-raghavendra-joshi',
    astrologerName: 'Pt. Raghavendra Joshi',
    date: '2026-05-18',
    timeSlot: '03:00 PM - 03:45 PM EST',
    consultationType: 'video',
    fullName: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+1 (555) 382-9102',
    birthDetails: DEMO_USER.birthDetails,
    concernsOrQuestions: 'Reviewed startup equity investment and timing of contract negotiations.',
    totalPriceUSD: 130,
    totalPriceINR: 4499,
    currency: 'USD',
    paymentMethod: 'card',
    status: 'completed',
    referenceNumber: 'AV-2026-5120',
    createdAt: '2026-05-10T10:15:00Z'
  }
];
