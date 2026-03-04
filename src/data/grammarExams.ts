export type ExamQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  reason: string;
};

export type GrammarExam = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  sourcePdf: string;
  passage?: string;
  vocabList?: { term: string; meaning: string }[];
  questions: ExamQuestion[];
};

const readingPassageHobbyInterest = `People often use the words hobby and interest as if they are the same, but they are not. A hobby is usually a regular activity that you do, while an interest is a subject that attracts your attention. A person may have an interest in photography because of family background or social media appeal, but that does not always mean they practice it as a hobby.

In simple terms, a hobby is action-based, while an interest is thought-based. Hobbies often involve doing something in a direct way: playing guitar, gardening, or joining a cycling club. Interests are often quieter and more reflective, such as reading about climate policy or following architecture trends. Both are valuable, but they require different levels of commitment.

A serious hobby needs dedication. It is not just a one-time activity; it is a long-term pursuit. For example, someone who runs every weekend may slowly build discipline, time management, and confidence. These habits can enhance personal growth. In many cases, progress in a hobby is associated with consistent effort rather than talent.

Hobbies can also connect to career development. Some hobbies have clear professional alignment: blogging can support marketing skills, and coding projects can support software jobs. Other hobbies may seem unrelated, but they still broaden soft skills and may spawn new opportunities. Employers often value this because modern roles usually require adaptability and initiative.

During interviews, a hiring manager may ask about hobbies not because they are mandatory, but because they can reveal character. A comprehensive answer about a hobby can elicit useful signals about motivation, teamwork, and problem-solving style. This is crucial when two candidates have similar technical qualifications.

However, pretending to have a hobby can create risks. If a candidate gives inconsistent details, the interviewer may doubt other claims too. A fake hobby can damage trust and reduce credibility. In the long term, authenticity matters more than trying to impress with a perfect image.`;

export const grammarExams: GrammarExam[] = [
  {
    slug: "review-basic-grammar-1-2",
    title: "Tugas Review Basic Grammar 1-2",
    description:
      "Tugas/latihan dari PDF REVIEW BASIC GRAMMAR 1 2 untuk persiapan ujian.",
    duration: "28 menit",
    sourcePdf: "/modules/review-basic-grammar-1-2.pdf",
    questions: [
      {
        id: "r1",
        question: "My brother looks so ____ today.",
        options: ["happily", "happy", "happiness", "more happy"],
        correctIndex: 1,
        reason: "Setelah linking verb 'looks' pakai adjective: happy.",
      },
      {
        id: "r2",
        question: "She speaks very ____, so everyone understands her.",
        options: ["clear", "clearly", "clearness", "clearing"],
        correctIndex: 1,
        reason: "Setelah verb 'speaks' pakai adverb: clearly.",
      },
      {
        id: "r3",
        question: "Rina has two ____ in her bag.",
        options: ["dictionary", "dic", "dictionarys", "dictionaries"],
        correctIndex: 3,
        reason: "Plural dari dictionary adalah dictionaries.",
      },
      {
        id: "r4",
        question: "The teacher gave ____ homework yesterday.",
        options: ["we", "us", "our", "ours"],
        correctIndex: 1,
        reason: "Setelah verb 'gave' butuh object pronoun: us.",
      },
      {
        id: "r5",
        question: "This is not my pen. It is ____.",
        options: ["her", "she", "hers", "herself"],
        correctIndex: 2,
        reason: "Kata ganti kepemilikan yang berdiri sendiri: hers.",
      },
      {
        id: "r6",
        question: "A number of students ____ absent today.",
        options: ["is", "was", "are", "be"],
        correctIndex: 2,
        reason: "'A number of + plural noun' pakai verb plural: are.",
      },
      {
        id: "r7",
        question: "The number of students ____ increasing every year.",
        options: ["are", "were", "is", "have"],
        correctIndex: 2,
        reason: "Subjeknya 'The number' (singular), jadi pakai is.",
      },
      {
        id: "r8",
        question: "There isn’t ____ milk in the fridge.",
        options: ["many", "much", "a few", "several"],
        correctIndex: 1,
        reason: "Milk uncountable, jadi pakai much.",
      },
      {
        id: "r9",
        question: "She bought ____ orange and ____ banana.",
        options: ["a, a", "an, a", "a, an", "an, an"],
        correctIndex: 1,
        reason: "Orange bunyi vokal -> an, banana bunyi konsonan -> a.",
      },
      {
        id: "r10",
        question:
          "The children ____ playing in the yard when it started to rain.",
        options: ["was", "is", "were", "are"],
        correctIndex: 2,
        reason: "Past continuous plural: were playing.",
      },
      {
        id: "r11",
        question: "He is interested ____ learning English.",
        options: ["in", "on", "at", "to"],
        correctIndex: 0,
        reason: "Collocation yang benar: interested in.",
      },
      {
        id: "r12",
        question: "He runs quickly every morning. Kata 'quickly' adalah ....",
        options: ["adjective", "noun", "adverb", "pronoun"],
        correctIndex: 2,
        reason: "Quickly menjelaskan verb runs, jadi adverb.",
      },
      {
        id: "r13",
        question: "The baby is crying ____.",
        options: ["loud", "loudly", "louder", "loudness"],
        correctIndex: 1,
        reason: "Menjelaskan cara menangis -> adverb loudly.",
      },
      {
        id: "r14",
        question:
          "They have already finished their homework. Kata 'finished' berfungsi sebagai ....",
        options: ["adjective", "verb (past participle)", "noun", "adverb"],
        correctIndex: 1,
        reason: "Pada present perfect: have + V3 (past participle).",
      },
      {
        id: "r15",
        question: "Which sentence is correct?",
        options: [
          "She doesn't likes coffee.",
          "She don't like coffee.",
          "She doesn't like coffee.",
          "She not like coffee.",
        ],
        correctIndex: 2,
        reason: "Simple present negatif untuk she: doesn't + V1.",
      },
      {
        id: "r16",
        question: "She sings very (good / well).",
        options: ["good", "well"],
        correctIndex: 1,
        reason: "Setelah verb pakai adverb: well.",
      },
      {
        id: "r17",
        question: "The news (is / are) very surprising.",
        options: ["is", "are"],
        correctIndex: 0,
        reason: "News dianggap singular: is.",
      },
      {
        id: "r18",
        question: "A number of students (is / are) absent today.",
        options: ["is", "are"],
        correctIndex: 1,
        reason: "'A number of' + plural -> are.",
      },
      {
        id: "r19",
        question: "The number of students (is / are) increasing every year.",
        options: ["is", "are"],
        correctIndex: 0,
        reason: "'The number' singular -> is.",
      },
      {
        id: "r20",
        question: "He hurt (him / himself) while playing football.",
        options: ["him", "himself"],
        correctIndex: 1,
        reason: "Reflexive pronoun dibutuhkan: himself.",
      },
      {
        id: "r21",
        question: "There isn’t (many / much) sugar left.",
        options: ["many", "much"],
        correctIndex: 1,
        reason: "Sugar uncountable -> much.",
      },
      {
        id: "r22",
        question: "She bought (a / an) umbrella yesterday.",
        options: ["a", "an"],
        correctIndex: 1,
        reason: "Umbrella bunyi vokal -> an.",
      },
      {
        id: "r23",
        question: "This book is (her / hers).",
        options: ["her", "hers"],
        correctIndex: 1,
        reason: "Tanpa noun setelahnya -> hers.",
      },
      {
        id: "r24",
        question:
          "My (data / datum) have already gone after I restart my laptop.",
        options: ["data", "datum"],
        correctIndex: 0,
        reason: "Dengan verb 'have', subjek jamak: data.",
      },
      {
        id: "r25",
        question: "The children (was / were) playing in the yard.",
        options: ["was", "were"],
        correctIndex: 1,
        reason: "Children plural -> were.",
      },
      {
        id: "r26",
        question: "Translate: 'Dia sedang membaca buku sekarang.'",
        options: [
          "She reads a book now.",
          "She is reading a book now.",
          "She has read a book now.",
          "She was reading a book now.",
        ],
        correctIndex: 1,
        reason: "'Sedang' + 'sekarang' -> present continuous.",
      },
      {
        id: "r27",
        question: "Translate: 'Saya akan pergi ke Jakarta besok.'",
        options: [
          "I go to Jakarta tomorrow.",
          "I went to Jakarta tomorrow.",
          "I will go to Jakarta tomorrow.",
          "I am going Jakarta tomorrow.",
        ],
        correctIndex: 2,
        reason: "'Akan' -> will + V1.",
      },
      {
        id: "r28",
        question: "Translate: 'Kami sudah membangun rumah selama 3 bulan.'",
        options: [
          "We built a house for three months.",
          "We have been building a house for three months.",
          "We are building a house for three months.",
          "We had build a house for three months.",
        ],
        correctIndex: 1,
        reason:
          "Aktivitas dari masa lalu sampai sekarang + durasi -> present perfect continuous.",
      },
      {
        id: "r29",
        question: "Translate: 'Novel itu dibawa oleh ayahku.'",
        options: [
          "My father brought that novel.",
          "That novel was brought by my father.",
          "That novel is brought by my father.",
          "My father was bring that novel.",
        ],
        correctIndex: 1,
        reason: "Kalimat pasif lampau: was/were + V3.",
      },
      {
        id: "r30",
        question:
          "Translate: 'Kamu harus belajar lebih rajin untuk ujian besok.'",
        options: [
          "You should studying harder for tomorrow exam.",
          "You must study harder for tomorrow's exam.",
          "You must studies harder for tomorrow exam.",
          "You are must study harder for tomorrow's exam.",
        ],
        correctIndex: 1,
        reason: "Modal 'must' diikuti V1: study.",
      },
    ],
  },
  {
    slug: "kisi-kisi-having",
    title: "Kisi-Kisi Mid Test Basic Grammar",
    description: "Kisi-kisi persiapan ujian Mid Test Basic Grammar — Adjective, Adverb, Noun, Pronoun, dan Verb.",
    duration: "20 soal",
    sourcePdf: "/modules/kisi-kisi-having.pdf",
    questions: [
      {
        id: "h1",
        question: "My parents look very ____ today.",
        options: ["happily", "happy", "happiness", "more happily"],
        correctIndex: 1,
        reason: "Setelah linking verb 'look' pakai adjective: happy.",
      },
      {
        id: "h2",
        question: "She answered the question very ____.",
        options: ["confident", "confidence", "confidently", "confidents"],
        correctIndex: 2,
        reason: "Menjelaskan verb answered -> adverb confidently.",
      },
      {
        id: "h3",
        question: "Rina has three ____ in her bag.",
        options: ["watch", "watches", "watchs", "watching"],
        correctIndex: 1,
        reason: "Plural dari watch adalah watches.",
      },
      {
        id: "h4",
        question: "The teacher gave ____ a difficult task.",
        options: ["we", "our", "us", "ours"],
        correctIndex: 2,
        reason: "Object pronoun setelah gave: us.",
      },
      {
        id: "h5",
        question: "This is not your book. It is ____.",
        options: ["my", "mine", "me", "myself"],
        correctIndex: 1,
        reason: "Possessive pronoun yang berdiri sendiri: mine.",
      },
      {
        id: "h6",
        question: "A number of students ____ absent yesterday.",
        options: ["is", "was", "are", "were"],
        correctIndex: 3,
        reason: "Karena kemarin (past) dan plural -> were.",
      },
      {
        id: "h7",
        question: "The number of participants ____ increasing every year.",
        options: ["are", "were", "is", "have"],
        correctIndex: 2,
        reason: "'The number' singular -> is.",
      },
      {
        id: "h8",
        question: "There isn’t ____ sugar left in the jar.",
        options: ["many", "much", "a few", "several"],
        correctIndex: 1,
        reason: "Sugar uncountable -> much.",
      },
      {
        id: "h9",
        question: "She bought ____ apple and ____ orange.",
        options: ["a, a", "an, a", "a, an", "an, an"],
        correctIndex: 3,
        reason: "Apple dan orange sama-sama bunyi vokal -> an.",
      },
      {
        id: "h10",
        question: "The children ____ playing when their mother called them.",
        options: ["was", "were", "is", "are"],
        correctIndex: 1,
        reason: "Past continuous plural -> were playing.",
      },
      {
        id: "h11",
        question: "He is interested ____ joining the club.",
        options: ["in", "on", "at", "to"],
        correctIndex: 0,
        reason: "Collocation: interested in.",
      },
      {
        id: "h12",
        question: "She is one of the ____ students in this class.",
        options: ["smart", "smarter", "smartest", "more smart"],
        correctIndex: 2,
        reason: "One of the + superlative -> smartest.",
      },
      {
        id: "h13",
        question: "The baby is crying ____.",
        options: ["loud", "loudly", "louder", "loudness"],
        correctIndex: 1,
        reason: "Menjelaskan cara menangis -> loudly.",
      },
      {
        id: "h14",
        question: "He has lived here ____ 2021.",
        options: ["for", "since", "from", "during"],
        correctIndex: 1,
        reason: "Since dipakai untuk titik waktu.",
      },
      {
        id: "h15",
        question: "They ____ finished their homework before the teacher came.",
        options: ["have", "has", "had", "having"],
        correctIndex: 2,
        reason:
          "Aksi selesai sebelum aksi lampau lain -> past perfect (had + V3).",
      },
      {
        id: "h16",
        question: "You drive so (slow / slowly).",
        options: ["slow", "slowly"],
        correctIndex: 1,
        reason: "Menjelaskan verb drive -> adverb slowly.",
      },
      {
        id: "h17",
        question: "She looks (beautiful / beautifully) today.",
        options: ["beautiful", "beautifully"],
        correctIndex: 0,
        reason: "Setelah linking verb looks -> adjective beautiful.",
      },
      {
        id: "h18",
        question:
          "If you do not study (hard / hardly), you will fail the test.",
        options: ["hard", "hardly"],
        correctIndex: 0,
        reason: "'Study hard' = belajar giat. 'Hardly' artinya hampir tidak.",
      },
      {
        id: "h19",
        question: "Our team (was / were) very tired after the match.",
        options: ["was", "were"],
        correctIndex: 0,
        reason: "Team biasanya diperlakukan singular -> was.",
      },
      {
        id: "h20",
        question:
          "An architect needs a great amount of (equipment / equipments) for this project.",
        options: ["equipment", "equipments"],
        correctIndex: 0,
        reason: "Equipment adalah uncountable noun.",
      },
    ],
  },
  {
    slug: "tugas-grammar-a1",
    title: "Tugas Grammar — Articles, Nouns & Pronouns (20 Soal)",
    description:
      "Latihan pilihan ganda 20 soal: Articles (a/an/the), Demonstratives, Possessives, Quantifiers, Ordinal/Cardinal Numbers, dan Plural Nouns.",
    duration: "20 soal",
    sourcePdf: "",
    questions: [
      {
        id: "ga1_1",
        question: "She found ___ old coin in the garden.",
        options: ["a", "an", "the", "some"],
        correctIndex: 1,
        reason:
          "'Old' dimulai dengan bunyi vokal /oʊ/ → pakai article 'an'.",
      },
      {
        id: "ga1_2",
        question: "___ apples in this basket are fresh.",
        options: ["This", "That", "These", "A"],
        correctIndex: 2,
        reason:
          "'Apples' adalah plural noun dan ada di dekat pembicara → demonstrative plural 'These'.",
      },
      {
        id: "ga1_3",
        question: "That bicycle is ___, not mine.",
        options: ["her", "hers", "she", "herself"],
        correctIndex: 1,
        reason:
          "Possessive pronoun yang berdiri sendiri (tanpa noun sesudahnya) → 'hers'.",
      },
      {
        id: "ga1_4",
        question: "The room for teachers is called the ___.",
        options: [
          "teachers room",
          "teacher room",
          "teachers' room",
          "room teachers",
        ],
        correctIndex: 2,
        reason:
          "Possessive noun untuk lebih dari satu guru → 'teachers' room' (apostrof setelah -s).",
      },
      {
        id: "ga1_5",
        question: "___ bag was left in the classroom.",
        options: ["Sinta", "Sinta bag", "Sinta's", "Sinta's bag"],
        correctIndex: 3,
        reason:
          "Possessive noun + benda yang dimiliki → 'Sinta's bag'.",
      },
      {
        id: "ga1_6",
        question:
          "I have ___ time to finish this task, so I must hurry.",
        options: ["few", "a few", "little", "many"],
        correctIndex: 2,
        reason:
          "'Time' adalah uncountable noun → pakai 'little' (sedikit, tidak cukup).",
      },
      {
        id: "ga1_7",
        question:
          "There are ___ chairs in the hall for the guests.",
        options: ["much", "several", "little", "an amount of"],
        correctIndex: 1,
        reason:
          "'Chairs' adalah countable plural → pakai 'several' (beberapa).",
      },
      {
        id: "ga1_8",
        question: "We need ___ water to make the soup.",
        options: ["many", "several", "much", "a few"],
        correctIndex: 2,
        reason:
          "'Water' adalah uncountable noun → pakai 'much'.",
      },
      {
        id: "ga1_9",
        question: "___ students passed the exam successfully.",
        options: [
          "A number of",
          "The number of",
          "Much",
          "An amount of",
        ],
        correctIndex: 0,
        reason:
          "'A number of' = sejumlah (banyak) → digunakan dengan countable plural noun; verb menyesuaikan plural.",
      },
      {
        id: "ga1_10",
        question: "___ books on this shelf is fifty.",
        options: [
          "A number of",
          "Several",
          "The number of",
          "Many",
        ],
        correctIndex: 2,
        reason:
          "'The number of' = jumlahnya adalah... → subjek singular, cocok dengan verb 'is'.",
      },
      {
        id: "ga1_11",
        question: "She bought ___ sugar for the cake.",
        options: ["many", "several", "a great amount of", "a few"],
        correctIndex: 2,
        reason:
          "'Sugar' adalah uncountable noun → pakai 'a great amount of'.",
      },
      {
        id: "ga1_12",
        question: "My classroom is on the ___ floor.",
        options: ["three", "third", "thirtieth", "thirty"],
        correctIndex: 1,
        reason:
          "Lantai dinyatakan dengan ordinal number → 'third' (ketiga).",
      },
      {
        id: "ga1_13",
        question: "He has ___ brothers and one sister.",
        options: ["second", "two", "twice", "secondly"],
        correctIndex: 1,
        reason:
          "Jumlah saudara → cardinal number 'two'.",
      },
      {
        id: "ga1_14",
        question:
          "___ money in the drawer belongs to my father.",
        options: ["These", "This", "Those", "A"],
        correctIndex: 1,
        reason:
          "'Money' adalah uncountable noun (diperlakukan singular) → demonstrative singular 'This'.",
      },
      {
        id: "ga1_15",
        question:
          "Which sentence shows possessive adjective + noun correctly?",
        options: [
          "This is my book.",
          "This book is my.",
          "This is book my.",
          "Book is my this.",
        ],
        correctIndex: 0,
        reason:
          "Possessive adjective 'my' harus diletakkan sebelum noun: 'my book'. Pilihan B salah karena 'my' tidak boleh di akhir tanpa noun.",
      },
      {
        id: "ga1_16",
        question:
          "Rina found three small animals in her garden. The animals have long tails and like bananas. What is the correct sentence?",
        options: [
          "Rina found three monkey.",
          "Rina found three monkeys.",
          "Rina found three monkies.",
          "Rina found monkey three.",
        ],
        correctIndex: 1,
        reason:
          "Plural dari 'monkey' adalah 'monkeys' (tambah -s biasa, bukan -ies).",
      },
      {
        id: "ga1_17",
        question:
          "There is only a little sugar left, but there are many cups on the table. Which sentence is correct?",
        options: [
          "There is much cups on the table.",
          "There are much cups on the table.",
          "There are many cups on the table.",
          "There is many cup on the table.",
        ],
        correctIndex: 2,
        reason:
          "'Cups' adalah countable plural → 'many' + 'there are'. 'Much' digunakan untuk uncountable.",
      },
      {
        id: "ga1_18",
        question:
          "A student says: \"I have five ___ in my pencil case. They are red and blue.\" What word completes the sentence correctly?",
        options: ["pencil", "pencils", "penciles", "pencil's"],
        correctIndex: 1,
        reason:
          "Setelah angka 'five' → plural noun 'pencils' (tambah -s).",
      },
      {
        id: "ga1_19",
        question: "Which sentence is correct?",
        options: [
          "She gave the books to they.",
          "She gave the books to them.",
          "She gave the books to their.",
          "She gave the books to theirs.",
        ],
        correctIndex: 1,
        reason:
          "Setelah preposisi 'to' → object pronoun 'them'.",
      },
      {
        id: "ga1_20",
        question: "Choose the correct sentence:",
        options: [
          "He has two tooth.",
          "He has two teeth.",
          "He has two tooths.",
          "He has two teethe.",
        ],
        correctIndex: 1,
        reason:
          "Plural irregular dari 'tooth' adalah 'teeth' (bukan 'tooths').",
      },
    ],
  },
  {
    slug: "tugas-grammar-a2",
    title: "Tugas Grammar — Articles, Nouns & Pronouns (15 Soal)",
    description:
      "Latihan pilihan ganda 15 soal: Articles (a/an), Demonstratives, Possessives, Quantifiers, Ordinal/Cardinal Numbers.",
    duration: "15 soal",
    sourcePdf: "",
    questions: [
      {
        id: "ga2_1",
        question: "I bought ___ umbrella because it was raining.",
        options: ["a", "an", "the", "some"],
        correctIndex: 1,
        reason:
          "'Umbrella' dimulai dengan bunyi vokal /ʌ/ → pakai article 'an'.",
      },
      {
        id: "ga2_2",
        question:
          "___ books on the table belong to me, not yours.",
        options: ["This", "That", "These", "Those"],
        correctIndex: 3,
        reason:
          "'Books' adalah plural, dan buku-buku di atas meja (jauh dari pembicara) → demonstrative plural 'Those'.",
      },
      {
        id: "ga2_3",
        question: "That is ___ house. They live there.",
        options: ["they", "them", "their", "theirs"],
        correctIndex: 2,
        reason:
          "Possessive adjective sebelum noun 'house' → 'their house'.",
      },
      {
        id: "ga2_4",
        question: "The waiting room of the train is called a ___.",
        options: [
          "station of train",
          "train's station",
          "train station",
          "station train",
        ],
        correctIndex: 2,
        reason:
          "Compound noun dalam bahasa Inggris → 'train station' (noun pertama sebagai modifier, tanpa apostrof).",
      },
      {
        id: "ga2_5",
        question: "___ money was lost yesterday.",
        options: ["Rani", "Rani money", "Rani's", "Rani's money"],
        correctIndex: 3,
        reason:
          "Possessive noun + benda yang dimiliki → 'Rani's money'.",
      },
      {
        id: "ga2_6",
        question:
          "I have ___ friends in this city, so I don't feel lonely.",
        options: ["few", "a few", "little", "much"],
        correctIndex: 1,
        reason:
          "'Friends' adalah countable plural, dan 'a few' = beberapa (cukup, tidak merasa kesepian).",
      },
      {
        id: "ga2_7",
        question: "There isn't ___ sugar left in the jar.",
        options: ["many", "a few", "much", "several"],
        correctIndex: 2,
        reason:
          "'Sugar' adalah uncountable noun → pakai 'much' dalam kalimat negatif.",
      },
      {
        id: "ga2_8",
        question:
          "___ students are waiting outside the classroom.",
        options: ["A little", "Much", "Several", "An amount of"],
        correctIndex: 2,
        reason:
          "'Students' adalah countable plural → pakai 'several'.",
      },
      {
        id: "ga2_9",
        question:
          "I don't have ___ information about the event.",
        options: ["many", "a number of", "much", "several"],
        correctIndex: 2,
        reason:
          "'Information' adalah uncountable noun → pakai 'much'.",
      },
      {
        id: "ga2_10",
        question:
          "___ people in this room are wearing glasses.",
        options: [
          "The number of",
          "A number of",
          "An amount of",
          "Much",
        ],
        correctIndex: 1,
        reason:
          "'A number of' = sejumlah (banyak) → digunakan dengan countable plural 'people', verb plural.",
      },
      {
        id: "ga2_11",
        question:
          "___ students in this class is increasing every year.",
        options: [
          "A number of",
          "Several",
          "Many",
          "The number of",
        ],
        correctIndex: 3,
        reason:
          "'The number of' = jumlahnya → subjek dianggap singular, cocok dengan verb 'is increasing'.",
      },
      {
        id: "ga2_12",
        question:
          "She spent ___ money on unnecessary things.",
        options: ["many", "several", "a great amount of", "a few"],
        correctIndex: 2,
        reason:
          "'Money' adalah uncountable noun → pakai 'a great amount of'.",
      },
      {
        id: "ga2_13",
        question: "My birthday is on the ___ of July.",
        options: ["five", "fifth", "fifty", "fifteen"],
        correctIndex: 1,
        reason:
          "Tanggal menggunakan ordinal number → 'fifth' (kelima).",
      },
      {
        id: "ga2_14",
        question: "She bought ___ chairs for the meeting.",
        options: ["third", "three", "thirtieth", "thirdly"],
        correctIndex: 1,
        reason:
          "Jumlah kursi → cardinal number 'three'.",
      },
      {
        id: "ga2_15",
        question:
          "Which sentence shows numeral adjective + noun correctly?",
        options: [
          "One chair is broken.",
          "Chair one is broken.",
          "One is chair broken.",
          "Chair is one broken.",
        ],
        correctIndex: 0,
        reason:
          "Numeral adjective 'one' diletakkan sebelum noun: 'one chair is broken'.",
      },
    ],
  },
  {
    slug: "tugas-pronoun-1",
    title: "Tugas Pronoun — Pilih Kata yang Tepat (Set 1, 15 Soal)",
    description:
      "Pilih pronoun yang benar dari dua pilihan dalam tanda kurung: subject/object pronouns, possessives, reflexive pronouns, dan demonstratives.",
    duration: "15 soal",
    sourcePdf: "",
    questions: [
      {
        id: "pp1_1",
        question: "(She / Her) is my best friend.",
        options: ["She", "Her"],
        correctIndex: 0,
        reason:
          "Posisi subjek kalimat → subject pronoun 'She'.",
      },
      {
        id: "pp1_2",
        question: "Please give the book to (I / me).",
        options: ["I", "me"],
        correctIndex: 1,
        reason:
          "Setelah preposisi 'to' → object pronoun 'me'.",
      },
      {
        id: "pp1_3",
        question: "(We / Us) are going to the market now.",
        options: ["We", "Us"],
        correctIndex: 0,
        reason:
          "Posisi subjek kalimat → subject pronoun 'We'.",
      },
      {
        id: "pp1_4",
        question: "That car is (their / theirs).",
        options: ["their", "theirs"],
        correctIndex: 1,
        reason:
          "Setelah 'is' tanpa noun setelahnya → possessive pronoun 'theirs' (berdiri sendiri).",
      },
      {
        id: "pp1_5",
        question: "The teacher called (he / him) yesterday.",
        options: ["he", "him"],
        correctIndex: 1,
        reason:
          "Posisi objek verb 'called' → object pronoun 'him'.",
      },
      {
        id: "pp1_6",
        question: "This is (my / mine) pen.",
        options: ["my", "mine"],
        correctIndex: 0,
        reason:
          "Sebelum noun 'pen' → possessive adjective 'my'.",
      },
      {
        id: "pp1_7",
        question: "(Those / That) are beautiful flowers.",
        options: ["Those", "That"],
        correctIndex: 0,
        reason:
          "'Flowers' adalah plural → demonstrative plural 'Those'.",
      },
      {
        id: "pp1_8",
        question: "My parents love (I / me) very much.",
        options: ["I", "me"],
        correctIndex: 1,
        reason:
          "Posisi objek verb 'love' → object pronoun 'me'.",
      },
      {
        id: "pp1_9",
        question:
          "The students finished the homework by (themselves / their).",
        options: ["themselves", "their"],
        correctIndex: 0,
        reason:
          "'By themselves' = sendirian/tanpa bantuan → reflexive pronoun 'themselves'.",
      },
      {
        id: "pp1_10",
        question: "Is this notebook (your / yours)?",
        options: ["your", "yours"],
        correctIndex: 1,
        reason:
          "Setelah 'is' tanpa noun setelahnya → possessive pronoun 'yours' (berdiri sendiri).",
      },
      {
        id: "pp1_11",
        question: "(They / Them) live near my house.",
        options: ["They", "Them"],
        correctIndex: 0,
        reason:
          "Posisi subjek kalimat → subject pronoun 'They'.",
      },
      {
        id: "pp1_12",
        question:
          "The manager spoke to (she / her) about the problem.",
        options: ["she", "her"],
        correctIndex: 1,
        reason:
          "Setelah preposisi 'to' → object pronoun 'her'.",
      },
      {
        id: "pp1_13",
        question:
          "Rudi hurt (himself / hisself) while playing football.",
        options: ["himself", "hisself"],
        correctIndex: 0,
        reason:
          "Reflexive pronoun yang benar adalah 'himself' — 'hisself' bukan kata dalam bahasa Inggris baku.",
      },
      {
        id: "pp1_14",
        question: "The cat is cleaning (it / itself).",
        options: ["it", "itself"],
        correctIndex: 1,
        reason:
          "Subjek dan objek sama (the cat membersihkan dirinya sendiri) → reflexive pronoun 'itself'.",
      },
      {
        id: "pp1_15",
        question:
          "Sinta and I prepared the food by (ourselves / ourself).",
        options: ["ourselves", "ourself"],
        correctIndex: 0,
        reason:
          "Reflexive pronoun untuk 'we' (plural) adalah 'ourselves' — 'ourself' tidak digunakan dalam bahasa Inggris baku.",
      },
    ],
  },
  {
    slug: "tugas-pronoun-2",
    title: "Tugas Pronoun — Pilih Kata yang Tepat (Set 2, 15 Soal)",
    description:
      "Pilih pronoun yang benar dari pilihan dalam tanda kurung: subject/object pronouns, possessives, reflexive, reciprocal pronouns, dan demonstratives.",
    duration: "15 soal",
    sourcePdf: "",
    questions: [
      {
        id: "pp2_1",
        question: "I come to Pare by (myself / alone).",
        options: ["myself", "alone"],
        correctIndex: 0,
        reason:
          "'By myself' adalah ekspresi reflexive pronoun yang berarti sendirian/tanpa bantuan orang lain.",
      },
      {
        id: "pp2_2",
        question: "Dinda asks (I / me) to attend the party.",
        options: ["I", "me"],
        correctIndex: 1,
        reason:
          "Posisi objek verb 'asks' → object pronoun 'me'.",
      },
      {
        id: "pp2_3",
        question: "People tell (we / us) about the rules.",
        options: ["we", "us"],
        correctIndex: 1,
        reason:
          "Posisi objek verb 'tell' → object pronoun 'us'.",
      },
      {
        id: "pp2_4",
        question:
          "(They / Them) will not understand the instructions.",
        options: ["They", "Them"],
        correctIndex: 0,
        reason:
          "Posisi subjek kalimat → subject pronoun 'They'.",
      },
      {
        id: "pp2_5",
        question: "I do not talk to (he / him).",
        options: ["he", "him"],
        correctIndex: 1,
        reason:
          "Setelah preposisi 'to' → object pronoun 'him'.",
      },
      {
        id: "pp2_6",
        question: "Yaya and Yuyu help (each other / one another).",
        options: ["each other", "one another"],
        correctIndex: 0,
        reason:
          "'Each other' digunakan untuk dua orang yang saling membantu. 'One another' untuk tiga orang atau lebih. Yaya dan Yuyu = dua orang.",
      },
      {
        id: "pp2_7",
        question: "(This / These) are my books.",
        options: ["This", "These"],
        correctIndex: 1,
        reason:
          "'Books' adalah plural → demonstrative plural 'These'.",
      },
      {
        id: "pp2_8",
        question: "That bottle is (your / yours).",
        options: ["your", "yours"],
        correctIndex: 1,
        reason:
          "Setelah 'is' tanpa noun setelahnya → possessive pronoun 'yours' (berdiri sendiri).",
      },
      {
        id: "pp2_9",
        question: "I love (she / her) so much.",
        options: ["she", "her"],
        correctIndex: 1,
        reason:
          "Posisi objek verb 'love' → object pronoun 'her'.",
      },
      {
        id: "pp2_10",
        question:
          "Dudung invited ___ and ___ to ___ birthday party. (I/me) and (you/your) to (he/his)",
        options: [
          "I, you, his",
          "me, you, his",
          "me, your, his",
          "I, your, he",
        ],
        correctIndex: 1,
        reason:
          "'Invited me' → object pronoun 'me'; 'invited you' → object pronoun 'you'; 'his birthday party' → possessive adjective 'his' sebelum noun.",
      },
      {
        id: "pp2_11",
        question: "My sister told (I / me) to clean the room.",
        options: ["I", "me"],
        correctIndex: 1,
        reason:
          "Posisi objek verb 'told' → object pronoun 'me'.",
      },
      {
        id: "pp2_12",
        question: "This bag is (my / mine), not yours.",
        options: ["my", "mine"],
        correctIndex: 1,
        reason:
          "Setelah 'is' tanpa noun setelahnya → possessive pronoun 'mine' (berdiri sendiri).",
      },
      {
        id: "pp2_13",
        question:
          "The teacher asked (we / us) to submit the assignment today.",
        options: ["we", "us"],
        correctIndex: 1,
        reason:
          "Posisi objek verb 'asked' → object pronoun 'us'.",
      },
      {
        id: "pp2_14",
        question:
          "Rina does not like (they / them) because they are noisy.",
        options: ["they", "them"],
        correctIndex: 1,
        reason:
          "Posisi objek verb 'like' → object pronoun 'them'.",
      },
      {
        id: "pp2_15",
        question:
          "Andi and Bima always help (each other / themselves) when studying.",
        options: ["each other", "themselves"],
        correctIndex: 0,
        reason:
          "Andi dan Bima saling membantu satu sama lain (dua orang) → reciprocal pronoun 'each other'. 'Themselves' berarti mereka membantu diri sendiri masing-masing.",
      },
    ],
  },
  {
    slug: "kisi-kisi-reading-middle-test",
    title: "Kisi-Kisi Reading Middle Test",
    description:
      "Study Guide Mid Test Reading: Part 1 T/F/NG, Part 2 multiple choice detail, Part 3 useful vocabularies.",
    duration: "15 soal",
    sourcePdf: "/modules/reading-week1-2.pdf",
    passage: readingPassageHobbyInterest,
    vocabList: [
      { term: "Dedication", meaning: "strong commitment" },
      { term: "Appeal", meaning: "attract interest" },
      { term: "Background", meaning: "personal history or experience" },
      { term: "Tricky", meaning: "difficult" },
      { term: "Offshore", meaning: "away from the land, in the sea" },
      { term: "Associated", meaning: "connected" },
      { term: "Mandatory", meaning: "something that must be done" },
      { term: "Crossword", meaning: "a word puzzle" },
      { term: "Comprehensive", meaning: "complete and covering everything" },
      { term: "Thought-based", meaning: "based on thinking" },
      { term: "Direct", meaning: "straight, clear, without doubt" },
      { term: "Enhance", meaning: "to improve" },
      { term: "Crucial", meaning: "very important" },
      { term: "Hiring manager", meaning: "person who chooses workers" },
      { term: "Spawn", meaning: "to cause or create" },
    ],
    questions: [
      {
        id: "rm1",
        question:
          "A person can have an interest in something without practicing it regularly.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correctIndex: 0,
        reason:
          "Teks menyatakan interest tidak selalu berarti dipraktikkan sebagai hobby.",
      },
      {
        id: "rm2",
        question:
          "The passage says that all interests are more useful than hobbies.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correctIndex: 1,
        reason:
          "Teks tidak menyatakan interests lebih berguna; keduanya dianggap valuable.",
      },
      {
        id: "rm3",
        question:
          "Hobbies are described as activities that usually require direct participation.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correctIndex: 0,
        reason:
          "Paragraf 2 menyebut hobby sebagai action-based dan direct activity.",
      },
      {
        id: "rm4",
        question:
          "The writer states that talent is more important than consistency in hobby progress.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correctIndex: 1,
        reason:
          "Teks menyebut progress associated with consistent effort rather than talent.",
      },
      {
        id: "rm5",
        question:
          "Some hobbies can support professional skills even when they look unrelated to a job.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correctIndex: 0,
        reason:
          "Paragraf 4 menyebut hobi yang terlihat tidak terkait tetap bisa broaden soft skills.",
      },
      {
        id: "rm6",
        question:
          "Hiring managers always ask hobby questions in every interview.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correctIndex: 2,
        reason:
          "Teks hanya menyebut 'may ask', bukan selalu, dan tidak memberi klaim universal.",
      },
      {
        id: "rm7",
        question:
          "A comprehensive explanation of a hobby may help interviewers assess personal qualities.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correctIndex: 0,
        reason:
          "Paragraf 5 menyatakan jawaban hobby bisa elicit sinyal tentang motivasi, teamwork, dan problem-solving.",
      },
      {
        id: "rm8",
        question:
          "The passage says candidates from creative backgrounds are hired faster.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correctIndex: 2,
        reason:
          "Tidak ada pernyataan tentang creative background dan kecepatan diterima kerja.",
      },
      {
        id: "rm9",
        question:
          "Pretending to have a hobby may reduce a candidate's credibility.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correctIndex: 0,
        reason:
          "Paragraf terakhir menyebut fake hobby dapat merusak trust dan credibility.",
      },
      {
        id: "rm10",
        question:
          "Interviewers should spend at least ten minutes discussing hobbies.",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correctIndex: 2,
        reason: "Tidak ada durasi waktu diskusi hobby di teks.",
      },
      {
        id: "rm11",
        question:
          "Which item below is NOT required when a hiring manager asks about hobbies?",
        options: [
          "Perfect image",
          "Honest explanation",
          "Consistent details",
          "Clear motivation",
        ],
        correctIndex: 0,
        reason: "Teks menekankan authenticity, bukan membangun citra sempurna.",
      },
      {
        id: "rm12",
        question: "The word 'appeal' is closest in meaning to...",
        options: ["attraction", "obligation", "difficulty", "rejection"],
        correctIndex: 0,
        reason:
          "Appeal dalam konteks paragraf pertama berarti daya tarik (attraction).",
      },
      {
        id: "rm13",
        question: "The word 'mandatory' is closest in meaning to...",
        options: ["optional", "required", "creative", "temporary"],
        correctIndex: 1,
        reason: "Mandatory berarti sesuatu yang wajib/required.",
      },
      {
        id: "rm14",
        question: "Why might a hiring manager ask about hobbies?",
        options: [
          "To reveal motivation and work style",
          "To test grammar accuracy",
          "To force mandatory hobbies",
          "To avoid technical questions",
        ],
        correctIndex: 0,
        reason:
          "Paragraf 5 menyebut jawaban hobby bisa mengungkap motivasi, teamwork, dan problem-solving style.",
      },
      {
        id: "rm15",
        question: "What is one negative effect of pretending to have a hobby?",
        options: [
          "It builds stronger trust",
          "It can damage trust and credibility",
          "It guarantees a promotion",
          "It improves alignment automatically",
        ],
        correctIndex: 1,
        reason:
          "Paragraf terakhir menyebut fake hobby bisa merusak trust dan menurunkan credibility.",
      },
    ],
  },
  {
    slug: "tugas-grammar-b1",
    title: "Tugas Grammar — Pilihan Ganda (10 Soal)",
    description:
      "Latihan pilihan ganda 10 soal: Adjective, Adverb, Noun, Pronoun, Verb Agreement, dan Quantifier.",
    duration: "10 soal",
    sourcePdf: "",
    questions: [
      {
        id: "gb1_1",
        question:
          "Her hair looks so smooth. (Identify the part of speech of 'her' and 'smooth')",
        options: [
          "Pronoun, adjective",
          "Adverb, noun",
          "Adjective, adjective",
          "Adverb, adverb",
        ],
        correctIndex: 0,
        reason:
          "'Her' adalah possessive pronoun (kata ganti kepemilikan). 'Smooth' adalah adjective yang mengikuti linking verb 'looks'.",
      },
      {
        id: "gb1_2",
        question:
          "She answered the question very quickly because she was nervous. (Identify the part of speech of 'quickly' and 'was')",
        options: [
          "Adjective, verb auxiliary",
          "Verb, noun",
          "Adverb, verb ordinary",
          "Adverb, verb auxiliary",
        ],
        correctIndex: 3,
        reason:
          "'Quickly' adalah adverb yang menerangkan verb 'answered'. 'Was' adalah verb auxiliary (to be) dalam kalimat 'she was nervous'.",
      },
      {
        id: "gb1_3",
        question:
          "Rina has two pens. She gives ____ pen to Maya and ____ are for herself.",
        options: [
          "other, others",
          "another, others",
          "the other, another",
          "others, other",
        ],
        correctIndex: 1,
        reason:
          "'Another' digunakan untuk menyebut satu lagi (one more) dari suatu kelompok. 'Others' digunakan untuk merujuk yang tersisa dalam bentuk jamak.",
      },
      {
        id: "gb1_4",
        question:
          "He speaks ____ so everyone can ____ him clearly.",
        options: [
          "loud, hear",
          "loudly, hear",
          "loud, hears",
          "loudly, hears",
        ],
        correctIndex: 1,
        reason:
          "'Speaks' adalah action verb, jadi butuh adverb: 'loudly'. Setelah modal 'can' pakai base form verb: 'hear'.",
      },
      {
        id: "gb1_5",
        question:
          "They is dilligent ____ so they can ____ very clearly in the class.",
        options: [
          "woman, explains",
          "women, explain",
          "man, explain",
          "men, explains",
        ],
        correctIndex: 2,
        reason:
          "Jawaban yang benar adalah 'man, explain'. Setelah modal 'can' pakai base form verb tanpa -s: 'explain'.",
      },
      {
        id: "gb1_6",
        question:
          "Andi ____ a good student, and he studies very ____.",
        options: [
          "is, hard",
          "are, hard",
          "is, hardly",
          "are, hardly",
        ],
        correctIndex: 0,
        reason:
          "Subjek 'Andi' singular → pakai 'is'. 'Hard' di sini adalah adverb (belajar dengan keras). 'Hardly' berarti 'hampir tidak', artinya berbeda.",
      },
      {
        id: "gb1_7",
        question:
          "The news about the accident ____ very shocking.",
        options: ["are", "were", "is", "be"],
        correctIndex: 2,
        reason:
          "'News' adalah uncountable noun yang selalu dianggap singular, jadi pakai 'is'.",
      },
      {
        id: "gb1_8",
        question:
          "The sheep in the field ____ eating grass now.",
        options: ["is", "are", "was", "be"],
        correctIndex: 1,
        reason:
          "'Sheep' bisa singular atau plural. 'The sheep in the field' mengacu pada kawanan (plural) → pakai 'are'.",
      },
      {
        id: "gb1_9",
        question:
          "Jessica is a pretty girl, no wonder every man likes her. (Identify the part of speech of 'pretty' and 'likes')",
        options: [
          "Adjective, verb auxiliary",
          "Adverb, verb auxiliary",
          "Adjective, verb ordinary",
          "Adverb, verb ordinary",
        ],
        correctIndex: 2,
        reason:
          "'Pretty' adalah adjective yang menerangkan noun 'girl'. 'Likes' adalah verb ordinary (action/state verb, bukan to be atau modal).",
      },
      {
        id: "gb1_10",
        question:
          "I don't have ____ money, so I cannot buy the bag.",
        options: ["many", "much", "a few", "a little"],
        correctIndex: 1,
        reason:
          "'Money' adalah uncountable noun. Dalam kalimat negatif dengan uncountable noun → pakai 'much'. 'Many' untuk countable, 'a few' untuk countable, 'a little' untuk positive uncountable.",
      },
    ],
  },
  {
    slug: "tugas-grammar-b2",
    title: "Tugas Grammar — Isian Singkat (10 Soal)",
    description:
      "Latihan isian singkat 10 soal: Adverb vs Adjective, Subject-Verb Agreement, Countable/Uncountable Noun, dan Word Choice.",
    duration: "10 soal",
    sourcePdf: "",
    questions: [
      {
        id: "gb2_1",
        question:
          "He runs so ____ that he missed the bus. (slow / slowly)",
        options: ["slow", "slowly"],
        correctIndex: 1,
        reason:
          "'Runs' adalah action verb → butuh adverb. Jawaban: 'slowly'.",
      },
      {
        id: "gb2_2",
        question:
          "She sings very ____. (beautiful / beautifully)",
        options: ["beautiful", "beautifully"],
        correctIndex: 1,
        reason:
          "'Sings' adalah action verb → butuh adverb. Jawaban: 'beautifully'.",
      },
      {
        id: "gb2_3",
        question:
          "The teacher's room ____ near my classroom. (is / are)",
        options: ["is", "are"],
        correctIndex: 0,
        reason:
          "Subjek 'The teacher's room' adalah singular (satu ruangan) → pakai 'is'.",
      },
      {
        id: "gb2_4",
        question:
          "There ____ some milk in the fridge. (is / are)",
        options: ["is", "are"],
        correctIndex: 0,
        reason:
          "'Milk' adalah uncountable noun → dianggap singular → pakai 'is'.",
      },
      {
        id: "gb2_5",
        question:
          "The movie is very ____. (boring / bored)",
        options: ["boring", "bored"],
        correctIndex: 0,
        reason:
          "Subjek 'the movie' adalah benda/hal yang menyebabkan perasaan → pakai '-ing' adjective: 'boring'. 'Bored' dipakai untuk orang yang merasakan kebosanan.",
      },
      {
        id: "gb2_6",
        question:
          "They go jogging ____. (every day / everyday)",
        options: ["every day", "everyday"],
        correctIndex: 0,
        reason:
          "'Every day' (dua kata) adalah adverb of frequency yang berarti 'setiap hari'. 'Everyday' (satu kata) adalah adjective yang berarti 'biasa/sehari-hari' (everyday life).",
      },
      {
        id: "gb2_7",
        question:
          "The number of students ____ absent today. (is / are)",
        options: ["is", "are"],
        correctIndex: 0,
        reason:
          "'The number of ...' → subjek utamanya adalah 'The number' yang singular → pakai 'is'. Beda dengan 'A number of ...' yang pakai 'are'.",
      },
      {
        id: "gb2_8",
        question:
          "We need a lot of ____. (information / informations)",
        options: ["information", "informations"],
        correctIndex: 0,
        reason:
          "'Information' adalah uncountable noun → tidak ada bentuk plural 'informations'. Selalu pakai 'information'.",
      },
      {
        id: "gb2_9",
        question:
          "My boss has a lot of ____ for this company. (data / datum)",
        options: ["data", "datum"],
        correctIndex: 0,
        reason:
          "'Data' adalah bentuk plural dari 'datum', dan dalam penggunaan modern 'data' adalah bentuk standar yang dipakai sebagai uncountable/plural. 'Datum' sangat jarang dipakai.",
      },
      {
        id: "gb2_10",
        question:
          "Her students ____ to the museum in Malang. (visit / visits)",
        options: ["visit", "visits"],
        correctIndex: 0,
        reason:
          "Subjek 'Her students' adalah plural → pakai base form tanpa -s: 'visit'. 'Visits' hanya untuk singular (he/she/it).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  TUGAS CONJUNCTION & PREPOSITION
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "tugas-conjunction-preposition",
    title: "Tugas Conjunction & Preposition (15 Soal)",
    description:
      "Latihan conjunction (and/but/yet, correlative conjunctions) dan preposisi waktu & tempat (in/on/at).",
    duration: "15 menit",
    sourcePdf: "",
    questions: [
      // ── CONJUNCTIONS ─────────────────────────────────────────────────────
      {
        id: "cp01",
        question:
          "I wanted to buy the dress, ______ I didn't have enough money.",
        options: ["and", "but", "or", "so"],
        correctIndex: 1,
        reason:
          "'But' dipakai untuk menunjukkan kontras/pertentangan. Ingin beli → TAPI tidak punya uang. 'So' = oleh karena itu (sebab-akibat, tidak cocok di sini).",
      },
      {
        id: "cp02",
        question:
          "You can ______ stay here ______ come with us to the cinema.",
        options: ["both / and", "neither / nor", "either / or", "not only / but also"],
        correctIndex: 2,
        reason:
          "'Either...or' dipakai untuk memberikan dua pilihan (salah satu). Kamu bisa TINGGAL atau IKUT ke bioskop.",
      },
      {
        id: "cp03",
        question:
          "______ my mother ______ my father likes to watch horror movies; they prefer comedies.",
        options: ["Both / and", "Neither / nor", "Either / or", "Not only / but also"],
        correctIndex: 1,
        reason:
          "'Neither...nor' dipakai ketika KEDUANYA tidak melakukan/menyukai sesuatu. Ibu TIDAK SUKA dan ayah TIDAK SUKA → neither...nor.",
      },
      {
        id: "cp04",
        question:
          "He is very talented, ______ he plays the piano beautifully.",
        options: ["and", "but", "yet", "for"],
        correctIndex: 0,
        reason:
          "'And' menghubungkan dua fakta positif yang berkaitan. Dia berbakat DAN memainkan piano dengan indah — keduanya saling mendukung.",
      },
      {
        id: "cp05",
        question: "She is ______ smart ______ very hardworking.",
        options: ["either / or", "neither / nor", "not only / but also", "whether / or"],
        correctIndex: 2,
        reason:
          "'Not only...but also' dipakai untuk menambahkan dua kualitas positif. Dia TIDAK HANYA pintar, TAPI JUGA sangat pekerja keras.",
      },
      // ── PREPOSITIONS (IN / ON / AT) ───────────────────────────────────────
      {
        id: "cp06",
        question: "Our final exam is scheduled to start ______ 08:30 AM.",
        options: ["in", "on", "at"],
        correctIndex: 2,
        reason:
          "'At' dipakai untuk waktu yang spesifik (jam/menit): at 8:30 AM, at noon, at midnight.",
      },
      {
        id: "cp07",
        question: "I usually go to the gym ______ Monday mornings.",
        options: ["in", "on", "at"],
        correctIndex: 1,
        reason:
          "'On' dipakai untuk hari dan tanggal: on Monday, on Friday, on Monday mornings, on 5th March.",
      },
      {
        id: "cp08",
        question:
          "Many people like to visit Japan ______ spring to see the cherry blossoms.",
        options: ["in", "on", "at"],
        correctIndex: 0,
        reason:
          "'In' dipakai untuk periode waktu yang lebih panjang: in spring, in January, in 2025, in the morning.",
      },
      {
        id: "cp09",
        question:
          "Don't leave your bag ______ the floor; someone might trip over it.",
        options: ["in", "on", "at"],
        correctIndex: 1,
        reason:
          "'On' dipakai untuk permukaan datar: on the floor, on the table, on the wall, on the shelf.",
      },
      {
        id: "cp10",
        question:
          "My brother is currently studying ______ the library.",
        options: ["in", "on", "at"],
        correctIndex: 0,
        reason:
          "'In' dipakai untuk menunjukkan berada di dalam suatu ruangan/gedung: in the library, in the classroom, in the room.",
      },
      {
        id: "cp11",
        question: "My sister was born ______ 2005.",
        options: ["in", "on", "at"],
        correctIndex: 0,
        reason:
          "'In' dipakai untuk tahun: in 2005, in 1998. Juga untuk bulan (in March) dan musim (in summer).",
      },
      {
        id: "cp12",
        question: "I'll meet you ______ the entrance of the cinema.",
        options: ["in", "on", "at"],
        correctIndex: 2,
        reason:
          "'At' dipakai untuk titik/lokasi spesifik: at the entrance, at the bus stop, at the corner.",
      },
      {
        id: "cp13",
        question:
          "We usually have a big family dinner ______ Christmas Day.",
        options: ["in", "on", "at"],
        correctIndex: 1,
        reason:
          "'On' dipakai untuk hari dan hari khusus: on Christmas Day, on my birthday, on New Year's Day.",
      },
      {
        id: "cp14",
        question: "Is there any milk left ______ the fridge?",
        options: ["in", "on", "at"],
        correctIndex: 0,
        reason:
          "'In' dipakai untuk di dalam suatu wadah/ruangan: in the fridge, in the box, in the drawer.",
      },
      {
        id: "cp15",
        question:
          "Stop looking at your phone while walking ______ the street!",
        options: ["in", "on", "at"],
        correctIndex: 1,
        reason:
          "'On' dipakai untuk jalan/jalur: on the street, on the road, on the highway. Berbeda dengan 'in the street' (British English, sedikit berbeda nuansa).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  TUGAS PHRASE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "tugas-phrase",
    title: "Tugas Phrase — Jenis-Jenis Frasa (20 Soal)",
    description:
      "Latihan mengidentifikasi jenis frasa: Noun Phrase, Verb Phrase, Adjective Phrase, Adverbial Phrase, Gerund Phrase, Infinitive Phrase, dan Prepositional Phrase.",
    duration: "20 menit",
    sourcePdf: "",
    questions: [
      {
        id: "ph01",
        question:
          "Manakah yang merupakan 'Noun Phrase' dalam kalimat: \"The friendly teacher gave us homework\"?",
        options: ["The friendly teacher", "Gave us", "Homework", "Friendly"],
        correctIndex: 0,
        reason:
          "Noun Phrase = noun + modifier(s). 'The friendly teacher' terdiri dari determiner 'the' + adjective 'friendly' + noun 'teacher' — berfungsi sebagai subjek kalimat.",
      },
      {
        id: "ph02",
        question:
          "Dalam kalimat \"The soup is extremely hot\", frasa \"extremely hot\" adalah...",
        options: ["Noun Phrase", "Verb Phrase", "Adjective Phrase", "Prepositional Phrase"],
        correctIndex: 2,
        reason:
          "Adjective Phrase = adjective + modifier (adverb). 'Extremely hot' terdiri dari adverb 'extremely' yang memperkuat adjective 'hot' — menerangkan 'the soup'.",
      },
      {
        id: "ph03",
        question:
          "Pilihlah 'Prepositional Phrase' dari kalimat: \"They are playing in the garden\".",
        options: ["They are playing", "In the garden", "The garden", "Playing in"],
        correctIndex: 1,
        reason:
          "Prepositional Phrase = preposition + noun phrase. 'In the garden' dimulai dengan preposisi 'in' — berfungsi sebagai keterangan tempat.",
      },
      {
        id: "ph04",
        question:
          "Frasa \"will be going\" dalam \"I will be going to Japan\" disebut...",
        options: ["Verb Phrase", "Gerund Phrase", "Infinitive Phrase", "Adverbial Phrase"],
        correctIndex: 0,
        reason:
          "Verb Phrase = kata kerja bantu (auxiliary) + kata kerja utama. 'Will be going' menggunakan auxiliary 'will be' + main verb 'going' (future continuous).",
      },
      {
        id: "ph05",
        question:
          "Manakah 'Infinitive Phrase' dalam kalimat: \"To learn English is my goal\"?",
        options: ["To learn English", "English is", "My goal", "Learn English"],
        correctIndex: 0,
        reason:
          "Infinitive Phrase = 'to' + verb + (objek/keterangan). 'To learn English' dimulai dengan 'to' + verb 'learn' + object 'English' — berfungsi sebagai subjek kalimat.",
      },
      {
        id: "ph06",
        question:
          "Dalam \"Eating healthy food is important\", frasa \"Eating healthy food\" adalah...",
        options: ["Verb Phrase", "Gerund Phrase", "Adjective Phrase", "Prepositional Phrase"],
        correctIndex: 1,
        reason:
          "Gerund Phrase = gerund (-ing) + objek/keterangan. 'Eating healthy food' dimulai dengan gerund 'eating' — berfungsi sebagai subjek kalimat (benda).",
      },
      {
        id: "ph07",
        question:
          "Tentukan 'Adverbial Phrase' dalam: \"She sang quite beautifully\".",
        options: ["She sang", "Quite beautifully", "Beautifully", "Sang quite"],
        correctIndex: 1,
        reason:
          "Adverbial Phrase = adverb + modifier. 'Quite beautifully' terdiri dari adverb modifier 'quite' + adverb utama 'beautifully' — menerangkan cara menyanyi.",
      },
      {
        id: "ph08",
        question:
          "Dalam \"The man in the red shirt is my boss\", frasa \"in the red shirt\" berfungsi sebagai...",
        options: [
          "Adjective Phrase (menerangkan noun 'man')",
          "Verb Phrase",
          "Adverbial Phrase",
          "Gerund Phrase",
        ],
        correctIndex: 0,
        reason:
          "'In the red shirt' adalah Prepositional Phrase yang berfungsi sebagai Adjective Phrase — menerangkan noun 'the man' (laki-laki yang mana?).",
      },
      {
        id: "ph09",
        question:
          "Pilihlah kalimat yang memiliki 'Verb Phrase' dengan kata kerja bantu (auxiliary):",
        options: [
          "He plays football.",
          "The cat is sleeping.",
          "A beautiful day.",
          "Very slowly.",
        ],
        correctIndex: 1,
        reason:
          "'The cat is sleeping' mengandung Verb Phrase 'is sleeping' = auxiliary 'is' + main verb 'sleeping' (present continuous). 'He plays' hanya satu kata kerja tunggal.",
      },
      {
        id: "ph10",
        question:
          "Manakah 'Gerund Phrase' yang berfungsi sebagai objek dalam: \"I love watching old movies\"?",
        options: ["I love", "Watching old movies", "Old movies", "Watching"],
        correctIndex: 1,
        reason:
          "'Watching old movies' adalah Gerund Phrase yang berfungsi sebagai objek verb 'love'. Gerund phrase = gerund + object (old movies).",
      },
      {
        id: "ph11",
        question:
          "Frasa \"to go home\" dalam \"It is time to go home\" adalah...",
        options: [
          "Prepositional Phrase",
          "Infinitive Phrase",
          "Noun Phrase",
          "Adjective Phrase",
        ],
        correctIndex: 1,
        reason:
          "'To go home' adalah Infinitive Phrase = 'to' + verb 'go' + adverb 'home'. Berfungsi menerangkan 'time' (waktu untuk apa?).",
      },
      {
        id: "ph12",
        question:
          "Dalam \"The book on the shelf is dusty\", frasa \"on the shelf\" adalah...",
        options: [
          "Prepositional Phrase",
          "Verb Phrase",
          "Infinitive Phrase",
          "Adverbial Phrase",
        ],
        correctIndex: 0,
        reason:
          "'On the shelf' adalah Prepositional Phrase = preposition 'on' + noun phrase 'the shelf'. Berfungsi sebagai adjective — menerangkan 'the book'.",
      },
      {
        id: "ph13",
        question:
          "Pilihlah 'Adverbial Phrase' yang menunjukkan waktu:",
        options: ["In the park", "Very loud", "Early in the morning", "The tall man"],
        correctIndex: 2,
        reason:
          "'Early in the morning' adalah Adverbial Phrase of Time (keterangan waktu). 'In the park' adalah keterangan tempat, 'very loud' adalah adjective phrase.",
      },
      {
        id: "ph14",
        question:
          "Manakah yang merupakan 'Adjective Phrase' dalam: \"The woman, very tired from work, fell asleep\"?",
        options: ["The woman", "Very tired from work", "Fell asleep", "From work"],
        correctIndex: 1,
        reason:
          "'Very tired from work' adalah Adjective Phrase — menerangkan noun 'the woman'. Terdiri dari adverb 'very' + adjective 'tired' + prepositional phrase 'from work'.",
      },
      {
        id: "ph15",
        question:
          "Frasa \"always has been raining\" dalam \"It always has been raining all night\" adalah...",
        options: ["Verb Phrase", "Gerund Phrase", "Adverbial Phrase", "Noun Phrase"],
        correctIndex: 0,
        reason:
          "'Always has been raining' adalah Verb Phrase yang kompleks — auxiliary 'has been' + main verb 'raining' (present perfect continuous) + adverb 'always'.",
      },
      {
        id: "ph16",
        question:
          "Identifikasi 'Noun Phrase' yang menjadi objek: \"I bought a delicious chocolate cake\".",
        options: [
          "I bought",
          "A delicious chocolate cake",
          "Delicious chocolate",
          "Bought a",
        ],
        correctIndex: 1,
        reason:
          "'A delicious chocolate cake' adalah Noun Phrase yang berfungsi sebagai objek verb 'bought'. Terdiri dari article + adjectives + noun.",
      },
      {
        id: "ph17",
        question:
          "Dalam \"He wants to buy a car\", frasa \"to buy a car\" berfungsi sebagai...",
        options: [
          "Infinitive Phrase",
          "Gerund Phrase",
          "Prepositional Phrase",
          "Adjective Phrase",
        ],
        correctIndex: 0,
        reason:
          "'To buy a car' adalah Infinitive Phrase = 'to' + verb 'buy' + object 'a car'. Berfungsi sebagai objek verb 'wants'.",
      },
      {
        id: "ph18",
        question:
          "Kalimat mana yang mengandung 'Adverbial Phrase' yang menunjukkan cara (manner)?",
        options: [
          "She lives in London.",
          "He speaks in a very polite way.",
          "I will go tomorrow.",
          "The blue bird sings.",
        ],
        correctIndex: 1,
        reason:
          "'In a very polite way' adalah Adverbial Phrase of Manner — menerangkan BAGAIMANA dia berbicara. 'In London' adalah keterangan tempat, bukan cara.",
      },
      {
        id: "ph19",
        question:
          "Apa jenis frasa \"Smoking\" dalam kalimat \"Smoking is bad for health\"?",
        options: [
          "Gerund Phrase",
          "Verb Phrase",
          "Infinitive Phrase",
          "Adjective Phrase",
        ],
        correctIndex: 0,
        reason:
          "'Smoking' di sini adalah Gerund — verb-ing yang berfungsi sebagai noun (subjek kalimat). Walau hanya satu kata, ia berfungsi sebagai Gerund Phrase.",
      },
      {
        id: "ph20",
        question:
          "Manakah yang merupakan 'Prepositional Phrase' yang berfungsi sebagai keterangan waktu?",
        options: [
          "At the station",
          "During the movie",
          "With my friend",
          "On the wall",
        ],
        correctIndex: 1,
        reason:
          "'During the movie' = selama film berlangsung → Prepositional Phrase of Time. 'At the station' = tempat, 'with my friend' = cara/keterangan, 'on the wall' = tempat.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  KISI-KISI GRAMMAR POST TEST
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "kisi-kisi-grammar-post-test",
    title: "Kisi-Kisi Grammar — Post Test",
    description:
      "Latihan 30 soal mirip format post test: Part I Correct Phrase (urutan adjective dalam frasa), Part II Correlative Conjunctions & Prepositions, Part III Mixed Grammar.",
    duration: "30 menit",
    sourcePdf: "",
    questions: [
      // ── PART I: CORRECT PHRASE — urutan adjective & noun phrase (10 soal) ─
      {
        id: "pt01",
        question: "I just finished _____ in Bali.",
        options: [
          "Winter of the trip amazing",
          "The amazing winter trip",
          "An amazing winter trip",
          "Trip of winter the amazing",
        ],
        correctIndex: 2,
        reason:
          "Urutan noun phrase yang benar: article + adjective + noun. 'An amazing winter trip' = an (article) + amazing (opinion adj) + winter (noun modifier) + trip (main noun). 'The' tidak dipakai karena baru pertama disebut.",
      },
      {
        id: "pt02",
        question: "The scenery was _____.",
        options: ["So beautiful", "Beautiful so", "So beautifully", "Beautifully so"],
        correctIndex: 0,
        reason:
          "Setelah linking verb 'was' → adjective, bukan adverb. 'So beautiful' benar: 'so' adalah intensifier (adverb) + 'beautiful' (adjective). 'So beautifully' salah karena -ly adverb tidak cocok setelah linking verb.",
      },
      {
        id: "pt03",
        question: "We stayed in _____.",
        options: [
          "a hotel of room expensive",
          "an expensive room hotel",
          "a hotel expensive of room",
          "an expensive hotel room",
        ],
        correctIndex: 3,
        reason:
          "Urutan noun phrase: article + adjective + noun modifier + main noun. 'An expensive hotel room' = an + expensive (adj) + hotel (noun modifier) + room (main noun). 'An' karena 'expensive' berbunyi vokal /ɛ/.",
      },
      {
        id: "pt04",
        question: "From the balcony, we had _____.",
        options: [
          "a view magnificent",
          "magnificent of a view",
          "a view of magnificent",
          "a magnificent view",
        ],
        correctIndex: 3,
        reason:
          "Adjective diletakkan SEBELUM noun: 'a magnificent view'. Pola: article + adjective + noun. 'A view magnificent' salah karena adjective tidak boleh sesudah noun dalam noun phrase biasa.",
      },
      {
        id: "pt05",
        question: "There are _____ in Yogyakarta.",
        options: [
          "many historical famous places",
          "many famous historical places",
          "much famous historical places",
          "famous many places historical",
        ],
        correctIndex: 1,
        reason:
          "Urutan adjective: quantifier (many) + opinion (famous) + age/type (historical) + noun (places). 'Many famous historical places' mengikuti urutan adjective yang benar. 'Much' salah karena 'places' countable.",
      },
      {
        id: "pt06",
        question: "Borobudur is _____.",
        options: [
          "a well-known temple",
          "well known a temple",
          "a temple well known",
          "well a known temple",
        ],
        correctIndex: 0,
        reason:
          "'A well-known temple' = article + compound adjective (well-known) + noun (temple). Compound adjective (hyphenated) diletakkan sebelum noun. Pola ini sama dengan 'a good-looking person'.",
      },
      {
        id: "pt07",
        question: "It was _____ for the students.",
        options: [
          "a lesson special for us",
          "a for us special lesson",
          "a special lesson for us",
          "a special for us lesson",
        ],
        correctIndex: 2,
        reason:
          "Noun phrase + prepositional phrase sebagai modifier: 'a special lesson' (article + adj + noun) lalu diikuti 'for us' (prepositional phrase). Urutan yang benar: 'a special lesson for us'.",
      },
      {
        id: "pt08",
        question: "We spent hours _____ the park.",
        options: [
          "walking the around park",
          "around walking the park",
          "around the walking the park",
          "walking around the park",
        ],
        correctIndex: 3,
        reason:
          "'Walking around the park' = gerund phrase: gerund (walking) + preposisi (around) + noun phrase (the park). Gerund selalu diikuti objek/keterangan, bukan sebaliknya.",
      },
      {
        id: "pt09",
        question: "She is wearing _____ today.",
        options: [
          "a long red beautiful dress",
          "a beautiful long red dress",
          "a red beautiful long dress",
          "long red a beautiful dress",
        ],
        correctIndex: 1,
        reason:
          "Urutan adjective: article + opinion + size + color + noun. 'A beautiful (opinion) long (size) red (color) dress' mengikuti urutan baku: Opinion → Size → Color → Noun.",
      },
      {
        id: "pt10",
        question: "My grandmother gave me _____ last year.",
        options: [
          "an old small golden ring",
          "a golden small old ring",
          "a small old golden ring",
          "old a small golden ring",
        ],
        correctIndex: 2,
        reason:
          "Urutan adjective: article + size + age + material + noun. 'A small (size) old (age) golden (material) ring' mengikuti urutan: Size → Age → Material. 'An old small golden' salah karena Age seharusnya setelah Size.",
      },

      // ── PART II: CORRELATIVE CONJUNCTIONS & PREPOSITIONS (10 soal) ────────
      {
        id: "pt11",
        question:
          "Neither Sarah _____ her friends _____ coming to the party.",
        options: ["and, is", "nor, are", "nor, is", "and, are"],
        correctIndex: 1,
        reason:
          "'Neither...nor' = tidak...maupun. Verb agreement mengikuti subjek PALING DEKAT dengan verb: 'her friends' (plural) → 'are'. Jawaban: 'nor, are'.",
      },
      {
        id: "pt12",
        question:
          "Not only the teacher but also the student _____ the answer.",
        options: ["know", "knows", "are knowing", "have known"],
        correctIndex: 1,
        reason:
          "'Not only...but also' → verb agreement mengikuti subjek PALING DEKAT: 'the student' (singular) → 'knows'. Jika 'the students' (plural), maka 'know'.",
      },
      {
        id: "pt13",
        question:
          "Both the blue pen _____ the red pen _____ to me.",
        options: ["and, belong", "or, belongs", "and, belongs", "or, belong"],
        correctIndex: 0,
        reason:
          "'Both...and' selalu diikuti verb plural karena menggabungkan dua subjek. 'Both the blue pen and the red pen' = plural → 'belong' (tanpa -s).",
      },
      {
        id: "pt14",
        question:
          "My sister is very interested _____ learning photography.",
        options: ["to", "in", "with", "on"],
        correctIndex: 1,
        reason:
          "Collocation tetap: 'interested IN'. Preposisi 'in' selalu mengikuti 'interested': interested in + noun/gerund.",
      },
      {
        id: "pt15",
        question:
          "Your laptop is similar _____ mine, but the color is different.",
        options: ["with", "at", "to", "from"],
        correctIndex: 2,
        reason:
          "Collocation tetap: 'similar TO'. 'Similar to' = mirip dengan. Jangan tertukar dengan 'different from' (berbeda dari).",
      },
      {
        id: "pt16",
        question:
          "The train will depart from Jakarta _____ Bandung _____ 07.00 a.m.",
        options: ["until, in", "to, at", "until, at", "to, in"],
        correctIndex: 1,
        reason:
          "'Depart to' = berangkat menuju (destination). 'At 07.00' = waktu spesifik (jam) → pakai 'at'. Jawaban: 'to, at'.",
      },
      {
        id: "pt17",
        question:
          "Neither the students _____ the teacher _____ satisfied with the result.",
        options: ["nor, was", "nor, were", "and, were", "and, was"],
        correctIndex: 0,
        reason:
          "'Neither...nor' → verb agreement mengikuti subjek PALING DEKAT: 'the teacher' (singular) → 'was'. Jika 'the teachers' (plural), maka 'were'.",
      },
      {
        id: "pt18",
        question:
          "Not only Rina but also her sisters _____ in the school choir.",
        options: ["sings", "sing", "is singing", "has sung"],
        correctIndex: 1,
        reason:
          "'Not only...but also' → subjek paling dekat: 'her sisters' (plural) → 'sing' (base form, tanpa -s). Jika 'her sister' (singular), maka 'sings'.",
      },
      {
        id: "pt19",
        question:
          "Both the manager _____ the director _____ agreed to the new policy.",
        options: ["and, have", "or, has", "and, has", "or, have"],
        correctIndex: 0,
        reason:
          "'Both...and' menggabungkan dua subjek → selalu plural → 'have agreed'. Pola: Both A and B + plural verb.",
      },
      {
        id: "pt20",
        question:
          "She is good _____ speaking English _____ writing formal letters.",
        options: ["at, and", "in, but", "for, and", "at, or"],
        correctIndex: 0,
        reason:
          "Collocation: 'good AT' + gerund. 'And' menghubungkan dua gerund sejajar: 'good at speaking...AND writing'. Jawaban: 'at, and'.",
      },

      // ── PART III: MIXED GRAMMAR (10 soal) ─────────────────────────────────
      {
        id: "pt21",
        question: "The food at that restaurant tastes _____.",
        options: ["wonderfully", "wonderful", "wondering", "wonders"],
        correctIndex: 1,
        reason:
          "Setelah linking verb 'tastes' → adjective: 'wonderful'. Linking verbs (taste, smell, look, feel, sound) selalu diikuti adjective, bukan adverb (-ly).",
      },
      {
        id: "pt22",
        question: "Which sentence uses the CORRECT plural form?",
        options: [
          "She bought two loafs of bread.",
          "There are three childrens at home.",
          "He has two oxen in the farm.",
          "We saw four deers near the river.",
        ],
        correctIndex: 2,
        reason:
          "'Oxen' adalah irregular plural dari 'ox' yang benar. 'Loafs' → loaves, 'childrens' → children (sudah plural, tidak ada -s), 'deers' → deer (tidak berubah).",
      },
      {
        id: "pt23",
        question: "She is _____ honest person who never lies.",
        options: ["a", "an", "the", "—"],
        correctIndex: 1,
        reason:
          "'Honest' diawali bunyi vokal /ɒ/ (huruf 'h' tidak berbunyi) → pakai 'an'. Aturan: 'a/an' ditentukan oleh BUNYI pertama, bukan huruf pertama.",
      },
      {
        id: "pt24",
        question:
          "The number of students _____ increasing every year.",
        options: ["are", "were", "is", "have"],
        correctIndex: 2,
        reason:
          "'The number of...' → subjek utama adalah 'The number' (singular) → pakai 'is'. Berbeda dengan 'A number of students ARE increasing'.",
      },
      {
        id: "pt25",
        question:
          "I don't have _____ experience in teaching.",
        options: ["many", "several", "a few", "much"],
        correctIndex: 3,
        reason:
          "'Experience' (pengalaman) adalah uncountable noun → pakai 'much' di kalimat negatif. 'Many/several/a few' hanya untuk countable noun.",
      },
      {
        id: "pt26",
        question: "The scissors on the table _____ very sharp.",
        options: ["is", "was", "are", "has"],
        correctIndex: 2,
        reason:
          "'Scissors' selalu plural (always-plural noun) → selalu pakai verb plural 'are'. Sama seperti trousers, glasses, pliers, pants.",
      },
      {
        id: "pt27",
        question:
          "He has three pens. He gave one to Rina, _____ to Dian, and kept one for himself.",
        options: ["the other", "other", "another", "others"],
        correctIndex: 2,
        reason:
          "Ada 3 pena (lebih dari 2): beri 1 ke Rina, beri 1 LAGI (another) ke Dian, simpan 1. 'Another' = one more dari kelompok 3+. 'The other' untuk kelompok 2 saja.",
      },
      {
        id: "pt28",
        question:
          "She has been learning English _____ five years.",
        options: ["since", "for", "during", "while"],
        correctIndex: 1,
        reason:
          "'For' dipakai untuk durasi/rentang waktu: 'for five years'. 'Since' dipakai untuk titik waktu mulai: 'since 2019'. 'Five years' = durasi → 'for'.",
      },
      {
        id: "pt29",
        question:
          "My father and _____ will travel to Surabaya next week.",
        options: ["me", "I", "my", "myself"],
        correctIndex: 1,
        reason:
          "Compound subject = posisi subjek → subject pronoun 'I'. 'My father and I' = subjek kalimat. Tips: coba hapus 'My father and' → 'I will travel' (bukan 'me will travel').",
      },
      {
        id: "pt30",
        question:
          "The news about the flood _____ very shocking.",
        options: ["are", "were", "is", "have"],
        correctIndex: 2,
        reason:
          "'News' adalah uncountable noun yang selalu dianggap singular → pakai 'is'. Sama seperti mathematics, economics, physics, information.",
      },
    ],
  },
];
