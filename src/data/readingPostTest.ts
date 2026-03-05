// Post Test Reading — Indonesian Lifestyle and How to Behave in Indonesian Society
// Part A: True / False / Not Given (10 soal)
// Part B: Multiple Choice A/B/C/D (10 soal) — specific detail + synonym/same meaning
// Part C: Fill in / Short Answer (5 soal) — vocabulary meaning & main idea

// ─── PASSAGE ────────────────────────────────────────────────────────────────

export const readingPassage = {
  title: "Indonesian Lifestyle and How to Behave in Indonesian Society",
  paragraphs: [
    "Indonesia is a country with a very diverse culture and religion. The society consists of hundreds of ethnic groups with different languages, traditions, and beliefs. In particular, religion plays an important role and shapes lifestyle in daily life. The majority of Indonesians are Muslim, but the country also has significant populations of Christians, Hindus, Buddhists, and those with indigenous beliefs. Hence, Indonesians are accustomed to living alongside people of different convictions.",

    "Java, the most populated island, is filled with a rich cultural heritage. The Javanese people are known for their polite manners and respect for elders. Daily life in Java is associated with strong community bonds and religious practices. In rural areas, ancient traditions and animism beliefs are still adopted alongside formal religion. Indigenous offerings to ancestral souls are considered to be a part of Javanese spiritual practice.",

    "Bali is another island famous for its unique Hindu culture. The Balinese are delighted to share their traditions with visitors. Temples and daily offerings are common sights across the island. Tourists are encouraged to respect local customs by dressing modestly when entering temples and avoiding hands-on interaction with sacred objects.",

    "When it comes to behavior in Indonesian society, there are several things to keep in mind. Indonesians generally greet each other with a handshake or a nod, and it is considered rude to use the left hand when giving or receiving items. Pointing with the index finger at people is also considered impolite; nodding or using the whole hand is more accepted. Public displays of affection are contrary to local customs and can induce embarrassment for those involved.",

    "Discussing sensitive topics such as religion, politics, and family descent should be avoided, as these can result in conflict. Indonesians prefer conversations filled with enthusiasm about food, travel, and community events. Visitors who aid in understanding local customs are often greeted with great affection. Being briefly accustomed to local norms gives the opportunity to build meaningful connections with the Indonesian people.",
  ],
};

// ─── QUESTION TYPE ──────────────────────────────────────────────────────────

export type ReadingQuestion = {
  id: string;
  part: "A" | "B" | "C";
  partLabel: string;
  question: string;        // Part A: pernyataan T/F/NG; Part B: soal MCQ; Part C: soal isian
  paraphraseNote?: string; // Part A: catatan parafrase yang digunakan
  options: string[];       // Part A: ["True","False","Not Given"]; Part B: 4 pilihan; Part C: [jawaban]
  correctIndex: number;
  reason: string;
};

// ─── BANK SOAL ──────────────────────────────────────────────────────────────

export const readingPostTestQuestions: ReadingQuestion[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // PART A — TRUE / FALSE / NOT GIVEN
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "ra_01",
    part: "A",
    partLabel: "True / False / Not Given",
    question:
      "Indonesia is made up of hundreds of ethnic groups with various languages and traditions.",
    paraphraseNote: "Paraphrase: 'consists of' → 'made up of' | 'diverse' → 'various'",
    options: ["True", "False", "Not Given"],
    correctIndex: 0,
    reason:
      "TRUE. Teks menyatakan 'The society consists of hundreds of ethnic groups with different languages, traditions, and beliefs.' Parafrase yang digunakan: consists of = made up of, diverse/different = various.",
  },
  {
    id: "ra_02",
    part: "A",
    partLabel: "True / False / Not Given",
    question:
      "The majority of Indonesians follow the Hindu religion.",
    paraphraseNote: "Paraphrase: 'majority' → 'most' | 'follow' → 'are'",
    options: ["True", "False", "Not Given"],
    correctIndex: 1,
    reason:
      "FALSE. Teks menyatakan 'The majority of Indonesians are Muslim', bukan Hindu. Hindu hanya salah satu dari beberapa agama yang ada.",
  },
  {
    id: "ra_03",
    part: "A",
    partLabel: "True / False / Not Given",
    question:
      "Indonesia has more than 700 officially recognized ethnic groups according to government data.",
    options: ["True", "False", "Not Given"],
    correctIndex: 2,
    reason:
      "NOT GIVEN. Teks hanya menyebut 'hundreds of ethnic groups' tanpa menyebutkan angka pasti atau sumber data pemerintah. Informasi ini tidak ada dalam teks.",
  },
  {
    id: "ra_04",
    part: "A",
    partLabel: "True / False / Not Given",
    question:
      "Daily life in Java is related to strong community bonds and religious practices.",
    paraphraseNote: "Paraphrase: 'associated with' → 'related to'",
    options: ["True", "False", "Not Given"],
    correctIndex: 0,
    reason:
      "TRUE. Teks menyatakan 'Daily life in Java is associated with strong community bonds and religious practices.' Parafrase: associated with = related to.",
  },
  {
    id: "ra_05",
    part: "A",
    partLabel: "True / False / Not Given",
    question:
      "Bali attracts more international tourists than any other island in Indonesia.",
    options: ["True", "False", "Not Given"],
    correctIndex: 2,
    reason:
      "NOT GIVEN. Teks tidak membandingkan jumlah wisatawan antarpulau. Informasi ini tidak disebutkan dalam teks.",
  },
  {
    id: "ra_06",
    part: "A",
    partLabel: "True / False / Not Given",
    question:
      "Visitors are motivated to wear modest clothing when entering Balinese temples.",
    paraphraseNote: "Paraphrase: 'encouraged' → 'motivated' | 'dressing modestly' → 'wear modest clothing'",
    options: ["True", "False", "Not Given"],
    correctIndex: 0,
    reason:
      "TRUE. Teks menyatakan 'Tourists are encouraged to respect local customs by dressing modestly when entering temples.' Parafrase: encouraged = motivated, dressing modestly = wear modest clothing.",
  },
  {
    id: "ra_07",
    part: "A",
    partLabel: "True / False / Not Given",
    question:
      "It is fine to use the left hand when handing something to another person in Indonesian culture.",
    paraphraseNote: "Paraphrase: 'fine to use' → opposite of 'considered rude to use'",
    options: ["True", "False", "Not Given"],
    correctIndex: 1,
    reason:
      "FALSE. Teks menyatakan 'it is considered rude to use the left hand when giving or receiving items', sehingga pernyataan bahwa hal itu 'fine/acceptable' adalah salah.",
  },
  {
    id: "ra_08",
    part: "A",
    partLabel: "True / False / Not Given",
    question:
      "Showing love in public can cause embarrassment in Indonesian society.",
    paraphraseNote: "Paraphrase: 'public displays of affection' → 'showing love in public' | 'induce' → 'cause'",
    options: ["True", "False", "Not Given"],
    correctIndex: 0,
    reason:
      "TRUE. Teks menyatakan 'Public displays of affection are contrary to local customs and can induce embarrassment.' Parafrase: public displays of affection = showing love in public, induce = cause.",
  },
  {
    id: "ra_09",
    part: "A",
    partLabel: "True / False / Not Given",
    question:
      "Indonesian cuisine has become one of the most popular foods in Southeast Asia.",
    options: ["True", "False", "Not Given"],
    correctIndex: 2,
    reason:
      "NOT GIVEN. Teks menyebut 'food' sebagai topik percakapan yang disukai, tetapi tidak membahas popularitas masakan Indonesia di Asia Tenggara.",
  },
  {
    id: "ra_10",
    part: "A",
    partLabel: "True / False / Not Given",
    question:
      "In Indonesia, using the index finger to point at people is believed to be polite.",
    paraphraseNote: "Paraphrase: 'considered impolite' → opposite | 'considered' → 'believed to be'",
    options: ["True", "False", "Not Given"],
    correctIndex: 1,
    reason:
      "FALSE. Teks menyatakan 'Pointing with the index finger at people is also considered impolite.' Jadi pernyataan bahwa itu dianggap sopan adalah salah.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PART B — MULTIPLE CHOICE (A/B/C/D)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "rb_01",
    part: "B",
    partLabel: "Multiple Choice",
    question:
      "What does the word 'diverse' mean as used in the first paragraph of the passage?",
    options: ["similar", "various", "ancient", "indigenous"],
    correctIndex: 1,
    reason:
      "'Diverse' berarti 'various' (berbagai macam). Teks menyebut 'a very diverse culture' yang berarti budaya yang sangat beragam. Pilihan lain tidak sesuai konteks.",
  },
  {
    id: "rb_02",
    part: "B",
    partLabel: "Multiple Choice",
    question:
      "According to the passage, what shapes the lifestyle of people in Indonesia on a daily basis?",
    options: [
      "the type of food Indonesians eat",
      "the number of islands in Indonesia",
      "religion plays an important role",
      "the ancient traditions from Java",
    ],
    correctIndex: 2,
    reason:
      "Teks menyatakan 'In particular, religion plays an important role and shapes lifestyle in daily life.' Jawaban C langsung dikutip dari teks.",
  },
  {
    id: "rb_03",
    part: "B",
    partLabel: "Multiple Choice",
    question:
      "The word 'hence' in the passage has the same meaning as...",
    options: ["however", "although", "meanwhile", "therefore"],
    correctIndex: 3,
    reason:
      "'Hence' berarti 'therefore' (oleh karena itu / sehingga). Ini adalah kata penghubung yang menunjukkan hasil atau kesimpulan dari kalimat sebelumnya.",
  },
  {
    id: "rb_04",
    part: "B",
    partLabel: "Multiple Choice",
    question:
      "Which of the following is mentioned as part of Javanese spiritual practice?",
    options: [
      "daily beach offerings at sunset",
      "Buddhist meditation ceremonies",
      "indigenous offerings to ancestral souls",
      "dressing modestly in sacred temples",
    ],
    correctIndex: 2,
    reason:
      "Teks menyatakan 'Indigenous offerings to ancestral souls are considered to be a part of Javanese spiritual practice.' Pilihan lain tidak disebutkan dalam konteks Jawa.",
  },
  {
    id: "rb_05",
    part: "B",
    partLabel: "Multiple Choice",
    question:
      "The word 'delighted' as used in the passage about Bali means...",
    options: ["surprised", "encouraged", "very happy", "confused"],
    correctIndex: 2,
    reason:
      "'Delighted' berarti 'very happy' (sangat senang). Teks menyatakan 'The Balinese are delighted to share their traditions with visitors' — mereka sangat senang berbagi tradisi.",
  },
  {
    id: "rb_06",
    part: "B",
    partLabel: "Multiple Choice",
    question:
      "According to the passage, which gesture is MORE ACCEPTED in Indonesian society?",
    options: [
      "pointing with the index finger",
      "using the left hand when greeting",
      "nodding or using the whole hand",
      "putting both hands on the hips",
    ],
    correctIndex: 2,
    reason:
      "Teks menyatakan 'nodding or using the whole hand is more accepted.' Ini adalah alternatif yang lebih sopan dibanding menunjuk dengan jari telunjuk.",
  },
  {
    id: "rb_07",
    part: "B",
    partLabel: "Multiple Choice",
    question:
      "The word 'convictions' in the passage has the same meaning as...",
    options: ["traditions", "punishments", "celebrations", "strong beliefs"],
    correctIndex: 3,
    reason:
      "'Convictions' berarti 'strong beliefs' (keyakinan yang kuat). Teks menggunakannya dalam konteks hidup berdampingan dengan orang-orang yang memiliki keyakinan berbeda.",
  },
  {
    id: "rb_08",
    part: "B",
    partLabel: "Multiple Choice",
    question:
      "Which of the following topics should be AVOIDED in conversation with Indonesians according to the passage?",
    options: [
      "food and travel",
      "community events",
      "religion and politics",
      "local customs and traditions",
    ],
    correctIndex: 2,
    reason:
      "Teks menyatakan 'Discussing sensitive topics such as religion, politics, and family descent should be avoided.' Pilihan A dan B justru adalah topik yang disukai.",
  },
  {
    id: "rb_09",
    part: "B",
    partLabel: "Multiple Choice",
    question:
      "The word 'indigenous' in the passage means...",
    options: ["foreign or imported", "ancient and forgotten", "native or original", "very diverse"],
    correctIndex: 2,
    reason:
      "'Indigenous' berarti 'native/original' (asli / pribumi). Digunakan dalam konteks 'indigenous beliefs' (kepercayaan asli) dan 'indigenous offerings' (persembahan asli daerah).",
  },
  {
    id: "rb_10",
    part: "B",
    partLabel: "Multiple Choice",
    question:
      "Which of the following information is NOT mentioned in the passage?",
    options: [
      "The Balinese are happy to share their traditions with visitors",
      "The Javanese are known for respecting their elders",
      "Indonesia has a national language called Bahasa Indonesia",
      "Using the left hand when receiving items is considered rude",
    ],
    correctIndex: 2,
    reason:
      "Teks tidak menyebutkan Bahasa Indonesia sebagai bahasa nasional. Pilihan A, B, dan D semuanya disebutkan secara langsung dalam teks.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PART C — SHORT ANSWER / FILL IN (text input)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "rc_01",
    part: "C",
    partLabel: "Short Answer",
    question:
      "What is the main topic discussed in the passage? (Write your answer in English)",
    options: ["Indonesian lifestyle and how to behave in Indonesian society"],
    correctIndex: 0,
    reason:
      "Judul dan isi teks secara keseluruhan membahas gaya hidup di Indonesia dan cara berperilaku yang baik dalam masyarakat Indonesia.",
  },
  {
    id: "rc_02",
    part: "C",
    partLabel: "Short Answer",
    question:
      "What does the word 'ancient' mean in the passage?",
    options: ["very old"],
    correctIndex: 0,
    reason:
      "'Ancient' berarti 'very old' (sangat tua / kuno). Dalam teks, kata ini digunakan untuk menggambarkan tradisi Jawa yang sudah ada sejak lama: 'ancient traditions'.",
  },
  {
    id: "rc_03",
    part: "C",
    partLabel: "Short Answer",
    question:
      "What does the word 'affection' mean as used in the passage?",
    options: ["love or fondness"],
    correctIndex: 0,
    reason:
      "'Affection' berarti 'love or fondness' (rasa cinta atau kasih sayang). Digunakan dalam 'public displays of affection' dan 'greeted with great affection'.",
  },
  {
    id: "rc_04",
    part: "C",
    partLabel: "Short Answer",
    question:
      "According to the passage, what gives visitors the opportunity to build meaningful connections with Indonesian people?",
    options: ["being briefly accustomed to local norms"],
    correctIndex: 0,
    reason:
      "Teks menyatakan 'Being briefly accustomed to local norms gives the opportunity to build meaningful connections with the Indonesian people.'",
  },
  {
    id: "rc_05",
    part: "C",
    partLabel: "Short Answer",
    question:
      "What does the word 'soul' mean in the passage?",
    options: ["spirit"],
    correctIndex: 0,
    reason:
      "'Soul' berarti 'spirit' (roh / jiwa). Dalam teks disebutkan 'indigenous offerings to ancestral souls' — persembahan kepada roh leluhur.",
  },
];

// Helper: pick all questions (no shuffle needed — urutan A→B→C sudah terstruktur)
export function getReadingPostTestQuestions(): ReadingQuestion[] {
  return readingPostTestQuestions;
}
