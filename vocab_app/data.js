const wordList = [
  {
    wordId: 1,
    listName: "Vocabulary",
    cards: [
      {
        cardId: 1,
        word: "Accomplish",
        banglaMeaning: ["সম্পন্ন করা", "উপলব্ধি করা"],
        englishMeaning: "To successfully complete or achieve a task, goal, or objective.",
        examples: [
        "She was able to accomplish all her goals within the given time frame.",
        "Hard work and determination can help you accomplish great things."
      ],
        similarWords: ["Achieve", "Complete", "Fulfill", "Execute"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 2,
        word: "Adapt",
        banglaMeaning: ["অভিযোজিত হওয়া", "খাপ খাওয়ানো"],
        englishMeaning: "To adjust to new conditions or environments.",
        examples: [
        "He quickly adapted to the new workplace environment.",
        "Animals often adapt to changes in their habitat."
      ],
        similarWords: ["Adjust", "Modify", "Transform", "Accustom"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 3,
        word: "Ambitious",
        banglaMeaning: ["উদ্যমী", "উচ্চাকাঙ্ক্ষী"],
        englishMeaning: "Having a strong desire and determination to achieve success.",
        examples: [
        "He is very ambitious and wants to become the CEO someday.",
        "Her ambitious nature helped her climb the corporate ladder."
      ],
        similarWords: ["Aspiring", "Driven", "Determined", "Motivated"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 4,
        word: "Appreciate",
        banglaMeaning: ["মূল্যায়ন করা", "সমাদর করা"],
        englishMeaning: "To recognize the value, importance, or quality of something.",
        examples: [
        "I truly appreciate your help with the project.",
        "It's important to appreciate the small things in life."
      ],
        similarWords: ["Value", "Acknowledge", "Admire", "Respect"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 5,
        word: "Aspect",
        banglaMeaning: ["দিক", "পক্ষ"],
        englishMeaning: "A particular part or feature of something.",
        examples: [
        "One aspect of the job is dealing with customer complaints.",
        "The financial aspect of the project needs attention."
      ],
        similarWords: ["Feature", "Facet", "Element", "Side"],
        lastReviewed: "2025-02-05"
    },
    // Add more cards for the remaining words
      {
        cardId: 6,
        word: "Challenge",
        banglaMeaning: ["চ্যালেঞ্জ", "প্রতিদ্বন্দ্বিতা"],
        englishMeaning: "A task or situation that tests someone's abilities.",
        examples: [
        "Climbing Mount Everest is a significant challenge.",
        "The new project presents an exciting challenge for the team."
      ],
        similarWords: ["Difficulty", "Obstacle", "Test", "Trial"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 7,
        word: "Community",
        banglaMeaning: ["সম্প্রদায়", "সমাজ"],
        englishMeaning: "A group of people living in the same place or having a particular characteristic in common.",
        examples: [
        "The local community came together to help those affected by the flood.",
        "She is an active member of the online tech community."
      ],
        similarWords: ["Society", "Group", "Neighborhood", "Network"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 8,
        word: "Contemporary",
        banglaMeaning: ["সমসাময়িক", "আধুনিক"],
        englishMeaning: "Belonging to or occurring in the present time.",
        examples: [
        "Contemporary art often challenges traditional ideas.",
        "He prefers contemporary music to classical tunes."
      ],
        similarWords: ["Modern", "Current", "Present-day", "Up-to-date"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 9,
        word: "Contribute",
        banglaMeaning: ["অবদান রাখা", "সহায়তা করা"],
        englishMeaning: "To give something, such as money or effort, to help achieve a goal.",
        examples: [
        "He contributed generously to the charity.",
        "Team members are encouraged to contribute their ideas."
      ],
        similarWords: ["Donate", "Support", "Offer", "Provide"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 10,
        word: "Crucial",
        banglaMeaning: ["গুরুত্বপূর্ণ", "অত্যাবশ্যক"],
        englishMeaning: "Extremely important or necessary for success.",
        examples: [
        "Time management is crucial for meeting deadlines.",
        "It is crucial to maintain a healthy diet for long-term well-being."
      ],
        similarWords: ["Vital", "Essential", "Key", "Critical"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 11,
        word: "Diverse",
        banglaMeaning: ["বিভিন্ন ধরনের", "বিচিত্র"],
        englishMeaning: "Showing a great deal of variety; very different.",
        examples: [
        "The city is known for its diverse population.",
        "The company offers a diverse range of products."
      ],
        similarWords: ["Varied", "Different", "Wide-ranging", "Assorted"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 12,
        word: "Engaging",
        banglaMeaning: ["মনোমুগ্ধকর", "আকর্ষণীয়"],
        englishMeaning: "Attractive or interesting; holding one's attention.",
        examples: [
        "The speaker gave an engaging presentation.",
        "Children love engaging activities that keep them entertained."
      ],
        similarWords: ["Captivating", "Interesting", "Charming", "Appealing"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 13,
        word: "Essential",
        banglaMeaning: ["অত্যাবশ্যক", "প্রয়োজনীয়"],
        englishMeaning: "Absolutely necessary; extremely important.",
        examples: [
        "Water is essential for all forms of life.",
        "Good communication is essential in any relationship."
      ],
        similarWords: ["Necessary", "Vital", "Crucial", "Important"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 14,
        word: "Experience",
        banglaMeaning: ["অভিজ্ঞতা", "পরিজ্ঞতা"],
        englishMeaning: "Practical contact with and observation of facts or events.",
        examples: [
        "She has years of experience in the marketing field.",
        "Traveling offers valuable life experiences."
      ],
        similarWords: ["Knowledge", "Expertise", "Practice", "Exposure"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 15,
        word: "Fascinating",
        banglaMeaning: ["মুগ্ধকর", "মনোমুগ্ধকর"],
        englishMeaning: "Extremely interesting or captivating.",
        examples: [
        "The documentary on space exploration was fascinating.",
        "Her storytelling skills are absolutely fascinating."
      ],
        similarWords: ["Interesting", "Captivating", "Enchanting", "Engrossing"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 16,
        word: "Frustrating",
        banglaMeaning: ["হতাশাজনক", "বিরক্তিকর"],
        englishMeaning: "Causing annoyance or discouragement.",
        examples: [
        "It was frustrating to encounter technical issues during the presentation.",
        "Waiting for a delayed flight can be very frustrating."
      ],
        similarWords: ["Annoying", "Exasperating", "Irritating", "Vexing"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 17,
        word: "Impact",
        banglaMeaning: ["প্রভাব", "অভিঘাত"],
        englishMeaning: "The effect or influence of one thing on another.",
        examples: [
        "The new policy had a positive impact on sales.",
        "Social media has a significant impact on modern communication."
      ],
        similarWords: ["Effect", "Influence", "Impression", "Consequences"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 18,
        word: "Improve",
        banglaMeaning: ["উন্নতি করা", "শুদ্ধ করা"],
        englishMeaning: "To make something better or become better.",
        examples: [
        "She took extra classes to improve her math skills.",
        "Regular exercise improves overall health."
      ],
        similarWords: ["Enhance", "Boost", "Better", "Upgrade"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 19,
        word: "Innovative",
        banglaMeaning: ["উদ্ভাবনী", "নতুনত্বপূর্ণ"],
        englishMeaning: "Featuring new ideas, methods, or products.",
        examples: [
        "The company is known for its innovative solutions.",
        "He presented an innovative approach to solving the problem."
      ],
        similarWords: ["Creative", "Inventive", "Original", "Groundbreaking"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 20,
        word: "Opportunity",
        banglaMeaning: ["সুযোগ", "অবসর"],
        englishMeaning: "A set of circumstances that makes it possible to do something.",
        examples: [
        "This internship is a great opportunity for her career.",
        "He seized every opportunity to learn new skills."
      ],
        similarWords: ["Chance", "Prospect", "Possibility", "Opening"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 21,
        word: "Overcome",
        banglaMeaning: ["পরাজিত করা", "জয় করা"],
        englishMeaning: "To successfully deal with or gain control of something difficult.",
        examples: [
        "She overcame her fear of public speaking.",
        "The team overcame many obstacles to win the championship."
      ],
        similarWords: ["Conquer", "Defeat", "Master", "Surmount"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 22,
        word: "Perspective",
        banglaMeaning: ["দৃষ্টিভঙ্গি", "মতামত"],
        englishMeaning: "A particular way of considering or understanding something.",
        examples: [
        "His perspective on life changed after traveling the world.",
        "Understanding different perspectives is crucial for teamwork."
      ],
        similarWords: ["Viewpoint", "Outlook", "Angle", "Standpoint"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 23,
        word: "Significant",
        banglaMeaning: ["গুরুত্বপূর্ণ", "অর্থপূর্ণ"],
        englishMeaning: "Important or meaningful.",
        examples: [
        "This discovery is significant for medical research.",
        "She made a significant contribution to the project."
      ],
        similarWords: ["Important", "Notable", "Substantial", "Meaningful"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 24,
        word: "Sophisticated",
        banglaMeaning: ["জটিল", "অত্যাধুনিক"],
        englishMeaning: "Complex or refined, often with advanced technology or taste.",
        examples: [
        "The software has a sophisticated design.",
        "She has a sophisticated taste in music."
      ],
        similarWords: ["Advanced", "Complex", "Refined", "Elegant"],
        lastReviewed: "2025-02-05"
    },
      {
        cardId: 25,
        word: "Traditional",
        banglaMeaning: ["প্রচলিত", "ঐতিহ্যবাহী"],
        englishMeaning: "Existing in or as part of a tradition; long-established.",
        examples: [
        "They follow a traditional wedding ceremony.",
        "Traditional values are still respected in this community."
      ],
        similarWords: ["Conventional", "Classic", "Customary", "Historic"],
        lastReviewed: "2025-02-05"
    }
  ]
},
  {
    wordId: 2,
    listName: "Known",
    cards: []
    },
  {
    wordId: 3,
    listName: "Unknown",
    cards: []
    },
];
