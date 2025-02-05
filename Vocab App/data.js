
let wordc = [
  {
    "word": "Prospect",
    "banglaMeaning": "সম্ভাবনা, আশাবাদ",
    "englishMeaning": "The possibility or likelihood of a future event happening; a potential customer or candidate.",
    "uses": [
      "The company is excited about the prospect of expanding into new markets.",
      "He is a bright prospect for the national football team."
    ],
    "similarWords": ["Possibility", "Opportunity", "Potential", "Likelihood"]
  },
  {
    "word": "Innovation",
    "banglaMeaning": "আদান-প্রদান, প্রতিভাবাদ",
    "englishMeaning": "The introduction of something new; a new idea, method, or device.",
    "uses": [
      "Their innovation in renewable energy has set them apart from competitors.",
      "The company encourages innovation among its employees."
    ],
    "similarWords": ["Invention", "Creativity", "Novelty", "Revolution"]
  },
  {
    "word": "Resilience",
    "banglaMeaning": "দুর্বলতা, প্রতিরোধত্ব",
    "englishMeaning": "The capacity to recover quickly from difficulties; toughness.",
    "uses": [
      "Her resilience in the face of adversity inspired many people.",
      "The city showed great resilience after the natural disaster."
    ],
    "similarWords": ["Strength", "Stamina", "Endurance", "Fortitude"]
  },
  {
    "word": "Harmony",
    "banglaMeaning": "সমন্বয়, সুস্থিরতা",
    "englishMeaning": "A state of agreement and peace between people or things.",
    "uses": [
      "The harmony between the couple was evident in their daily interactions.",
      "Music often brings about a sense of harmony."
    ],
    "similarWords": ["Agreement", "Peace", "Concord", "Unity"]
  },
  {
    "word": "Momentum",
    "banglaMeaning": "গতিশক্তি, অবচ্ছাপণ",
    "englishMeaning": "The impetus gained by a moving object; the force that drives something forward.",
    "uses": [
      "The project gained momentum as more resources were allocated.",
      "The ball's momentum carried it across the goal line."
    ],
    "similarWords": ["Impetus", "Force", "Drive", "Speed"]
  },
  {
    "word": "Integrity",
    "banglaMeaning": "অন্যায়, অপরাধহীনতা",
    "englishMeaning": "The quality of adhering to moral and ethical principles; honesty and uprightness.",
    "uses": [
      "His integrity made him a trusted leader in the community.",
      "The company values integrity in all its business dealings."
    ],
    "similarWords": ["Honesty", "Morality", "Ethics", "Uprightness"]
  },
  {
    "word": "Ambition",
    "banglaMeaning": "উৎসাহ, আবেগ",
    "englishMeaning": "A strong desire to achieve success or distinction in one's career or life.",
    "uses": [
      "Her ambition to become a doctor was evident from a young age.",
      "His ambition drove him to work long hours every day."
    ],
    "similarWords": ["Desire", "Drive", "Motivation", "Aspiration"]
  },
  {
    "word": "Pioneer",
    "banglaMeaning": "নবদর্শী, প্রথম করনি",
    "englishMeaning": "A person who is among the first to explore or develop an area or idea.",
    "uses": [
      "She was a pioneer in the field of artificial intelligence.",
      "The pioneers of the space program risked their lives for humanity."
    ],
    "similarWords": ["Explorer", "Leader", "Trailblazer", "Pathfinder"]
  },
  {
    "word": "Insight",
    "banglaMeaning": "অভিবৃত্তি, বোঝা",
    "englishMeaning": "The capacity to gain an accurate and deep understanding of someone or something.",
    "uses": [
      "His insight into human behavior was invaluable to the researchers.",
      "The book provides valuable insights into the history of the region."
    ],
    "similarWords": ["Understanding", "Perception", "Clarity", "Comprehension"]
  },
  {
    "word": "Sustainability",
    "banglaMeaning": "বজায়িতা, ধারণাশীলতা",
    "englishMeaning": "The ability to maintain or continue at a certain rate or level.",
    "uses": [
      "The company is committed to sustainability in its production processes.",
      "The sustainability of the ecosystem is crucial for the survival of species."
    ],
    "similarWords": ["Durability", "Continuity", "Viability", "Endurance"]
  }
]

const flashcards = {
    categories: [
        {
            categoryId: 1,
            categoryName: "Vocabulary",
            cards: [
                {
                    cardId: 1,
                    word: "Prospect",
                    banglaMeaning: ["সম্ভাবনা", "আশাবাদ"],
                    englishMeaning: "The possibility or likelihood of a future event happening; a potential customer or candidate.",
                    examples: [
                        "The company is excited about the prospect of expanding into new markets.",
                        "He is a bright prospect for the national football team."
                    ],
                    similarWords: ["Possibility", "Opportunity", "Potential", "Likelihood"],
                    difficultyLevel: "Medium",
                    lastReviewed: "2025-02-05",
                }
            ]
        },
        {
            categoryId: 2,
            categoryName: "I know",
            cards: []
        },
        {
            categoryId: 3,
            categoryName: "I don't know",
            cards: []
        },
        {
            categoryId: 4,
            categoryName: "Phrasal Verbs",
            cards: [...wordc]
        }
    ],
    settings: {
        spacedRepetition: true,
    },
    progressTracking: {
        totalReviewed: 0,
        masteryLevel: {
            easy: 0,
            medium: 0,
            hard: 0,
        },
    }
};