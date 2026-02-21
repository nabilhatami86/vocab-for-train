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
];
