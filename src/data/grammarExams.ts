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
  questions: ExamQuestion[];
};

export const grammarExams: GrammarExam[] = [
  {
    slug: "review-basic-grammar-1-2",
    title: "Tugas Review Basic Grammar 1-2",
    description: "Tugas/latihan dari PDF REVIEW BASIC GRAMMAR 1 2 untuk persiapan ujian.",
    duration: "28 menit",
    sourcePdf: "/modules/review-basic-grammar-1-2.pdf",
    questions: [
      { id: "r1", question: "My brother looks so ____ today.", options: ["happily", "happy", "happiness", "more happy"], correctIndex: 1, reason: "Setelah linking verb 'looks' pakai adjective: happy." },
      { id: "r2", question: "She speaks very ____, so everyone understands her.", options: ["clear", "clearly", "clearness", "clearing"], correctIndex: 1, reason: "Setelah verb 'speaks' pakai adverb: clearly." },
      { id: "r3", question: "Rina has two ____ in her bag.", options: ["dictionary", "dic", "dictionarys", "dictionaries"], correctIndex: 3, reason: "Plural dari dictionary adalah dictionaries." },
      { id: "r4", question: "The teacher gave ____ homework yesterday.", options: ["we", "us", "our", "ours"], correctIndex: 1, reason: "Setelah verb 'gave' butuh object pronoun: us." },
      { id: "r5", question: "This is not my pen. It is ____.", options: ["her", "she", "hers", "herself"], correctIndex: 2, reason: "Kata ganti kepemilikan yang berdiri sendiri: hers." },
      { id: "r6", question: "A number of students ____ absent today.", options: ["is", "was", "are", "be"], correctIndex: 2, reason: "'A number of + plural noun' pakai verb plural: are." },
      { id: "r7", question: "The number of students ____ increasing every year.", options: ["are", "were", "is", "have"], correctIndex: 2, reason: "Subjeknya 'The number' (singular), jadi pakai is." },
      { id: "r8", question: "There isn’t ____ milk in the fridge.", options: ["many", "much", "a few", "several"], correctIndex: 1, reason: "Milk uncountable, jadi pakai much." },
      { id: "r9", question: "She bought ____ orange and ____ banana.", options: ["a, a", "an, a", "a, an", "an, an"], correctIndex: 1, reason: "Orange bunyi vokal -> an, banana bunyi konsonan -> a." },
      { id: "r10", question: "The children ____ playing in the yard when it started to rain.", options: ["was", "is", "were", "are"], correctIndex: 2, reason: "Past continuous plural: were playing." },
      { id: "r11", question: "He is interested ____ learning English.", options: ["in", "on", "at", "to"], correctIndex: 0, reason: "Collocation yang benar: interested in." },
      { id: "r12", question: "He runs quickly every morning. Kata 'quickly' adalah ....", options: ["adjective", "noun", "adverb", "pronoun"], correctIndex: 2, reason: "Quickly menjelaskan verb runs, jadi adverb." },
      { id: "r13", question: "The baby is crying ____.", options: ["loud", "loudly", "louder", "loudness"], correctIndex: 1, reason: "Menjelaskan cara menangis -> adverb loudly." },
      { id: "r14", question: "They have already finished their homework. Kata 'finished' berfungsi sebagai ....", options: ["adjective", "verb (past participle)", "noun", "adverb"], correctIndex: 1, reason: "Pada present perfect: have + V3 (past participle)." },
      { id: "r15", question: "Which sentence is correct?", options: ["She doesn't likes coffee.", "She don't like coffee.", "She doesn't like coffee.", "She not like coffee."], correctIndex: 2, reason: "Simple present negatif untuk she: doesn't + V1." },
      { id: "r16", question: "She sings very (good / well).", options: ["good", "well"], correctIndex: 1, reason: "Setelah verb pakai adverb: well." },
      { id: "r17", question: "The news (is / are) very surprising.", options: ["is", "are"], correctIndex: 0, reason: "News dianggap singular: is." },
      { id: "r18", question: "A number of students (is / are) absent today.", options: ["is", "are"], correctIndex: 1, reason: "'A number of' + plural -> are." },
      { id: "r19", question: "The number of students (is / are) increasing every year.", options: ["is", "are"], correctIndex: 0, reason: "'The number' singular -> is." },
      { id: "r20", question: "He hurt (him / himself) while playing football.", options: ["him", "himself"], correctIndex: 1, reason: "Reflexive pronoun dibutuhkan: himself." },
      { id: "r21", question: "There isn’t (many / much) sugar left.", options: ["many", "much"], correctIndex: 1, reason: "Sugar uncountable -> much." },
      { id: "r22", question: "She bought (a / an) umbrella yesterday.", options: ["a", "an"], correctIndex: 1, reason: "Umbrella bunyi vokal -> an." },
      { id: "r23", question: "This book is (her / hers).", options: ["her", "hers"], correctIndex: 1, reason: "Tanpa noun setelahnya -> hers." },
      { id: "r24", question: "My (data / datum) have already gone after I restart my laptop.", options: ["data", "datum"], correctIndex: 0, reason: "Dengan verb 'have', subjek jamak: data." },
      { id: "r25", question: "The children (was / were) playing in the yard.", options: ["was", "were"], correctIndex: 1, reason: "Children plural -> were." },
      { id: "r26", question: "Translate: 'Dia sedang membaca buku sekarang.'", options: ["She reads a book now.", "She is reading a book now.", "She has read a book now.", "She was reading a book now."], correctIndex: 1, reason: "'Sedang' + 'sekarang' -> present continuous." },
      { id: "r27", question: "Translate: 'Saya akan pergi ke Jakarta besok.'", options: ["I go to Jakarta tomorrow.", "I went to Jakarta tomorrow.", "I will go to Jakarta tomorrow.", "I am going Jakarta tomorrow."], correctIndex: 2, reason: "'Akan' -> will + V1." },
      { id: "r28", question: "Translate: 'Kami sudah membangun rumah selama 3 bulan.'", options: ["We built a house for three months.", "We have been building a house for three months.", "We are building a house for three months.", "We had build a house for three months."], correctIndex: 1, reason: "Aktivitas dari masa lalu sampai sekarang + durasi -> present perfect continuous." },
      { id: "r29", question: "Translate: 'Novel itu dibawa oleh ayahku.'", options: ["My father brought that novel.", "That novel was brought by my father.", "That novel is brought by my father.", "My father was bring that novel."], correctIndex: 1, reason: "Kalimat pasif lampau: was/were + V3." },
      { id: "r30", question: "Translate: 'Kamu harus belajar lebih rajin untuk ujian besok.'", options: ["You should studying harder for tomorrow exam.", "You must study harder for tomorrow's exam.", "You must studies harder for tomorrow exam.", "You are must study harder for tomorrow's exam."], correctIndex: 1, reason: "Modal 'must' diikuti V1: study." },
    ],
  },
  {
    slug: "kisi-kisi-having",
    title: "Kisi-Kisi Ujian (Having)",
    description: "Kisi-kisi dari PDF d. having untuk persiapan ujian.",
    duration: "20 soal",
    sourcePdf: "/modules/kisi-kisi-having.pdf",
    questions: [
      { id: "h1", question: "My parents look very ____ today.", options: ["happily", "happy", "happiness", "more happily"], correctIndex: 1, reason: "Setelah linking verb 'look' pakai adjective: happy." },
      { id: "h2", question: "She answered the question very ____.", options: ["confident", "confidence", "confidently", "confidents"], correctIndex: 2, reason: "Menjelaskan verb answered -> adverb confidently." },
      { id: "h3", question: "Rina has three ____ in her bag.", options: ["watch", "watches", "watchs", "watching"], correctIndex: 1, reason: "Plural dari watch adalah watches." },
      { id: "h4", question: "The teacher gave ____ a difficult task.", options: ["we", "our", "us", "ours"], correctIndex: 2, reason: "Object pronoun setelah gave: us." },
      { id: "h5", question: "This is not your book. It is ____.", options: ["my", "mine", "me", "myself"], correctIndex: 1, reason: "Possessive pronoun yang berdiri sendiri: mine." },
      { id: "h6", question: "A number of students ____ absent yesterday.", options: ["is", "was", "are", "were"], correctIndex: 3, reason: "Karena kemarin (past) dan plural -> were." },
      { id: "h7", question: "The number of participants ____ increasing every year.", options: ["are", "were", "is", "have"], correctIndex: 2, reason: "'The number' singular -> is." },
      { id: "h8", question: "There isn’t ____ sugar left in the jar.", options: ["many", "much", "a few", "several"], correctIndex: 1, reason: "Sugar uncountable -> much." },
      { id: "h9", question: "She bought ____ apple and ____ orange.", options: ["a, a", "an, a", "a, an", "an, an"], correctIndex: 3, reason: "Apple dan orange sama-sama bunyi vokal -> an." },
      { id: "h10", question: "The children ____ playing when their mother called them.", options: ["was", "were", "is", "are"], correctIndex: 1, reason: "Past continuous plural -> were playing." },
      { id: "h11", question: "He is interested ____ joining the club.", options: ["in", "on", "at", "to"], correctIndex: 0, reason: "Collocation: interested in." },
      { id: "h12", question: "She is one of the ____ students in this class.", options: ["smart", "smarter", "smartest", "more smart"], correctIndex: 2, reason: "One of the + superlative -> smartest." },
      { id: "h13", question: "The baby is crying ____.", options: ["loud", "loudly", "louder", "loudness"], correctIndex: 1, reason: "Menjelaskan cara menangis -> loudly." },
      { id: "h14", question: "He has lived here ____ 2021.", options: ["for", "since", "from", "during"], correctIndex: 1, reason: "Since dipakai untuk titik waktu." },
      { id: "h15", question: "They ____ finished their homework before the teacher came.", options: ["have", "has", "had", "having"], correctIndex: 2, reason: "Aksi selesai sebelum aksi lampau lain -> past perfect (had + V3)." },
      { id: "h16", question: "You drive so (slow / slowly).", options: ["slow", "slowly"], correctIndex: 1, reason: "Menjelaskan verb drive -> adverb slowly." },
      { id: "h17", question: "She looks (beautiful / beautifully) today.", options: ["beautiful", "beautifully"], correctIndex: 0, reason: "Setelah linking verb looks -> adjective beautiful." },
      { id: "h18", question: "If you do not study (hard / hardly), you will fail the test.", options: ["hard", "hardly"], correctIndex: 0, reason: "'Study hard' = belajar giat. 'Hardly' artinya hampir tidak." },
      { id: "h19", question: "Our team (was / were) very tired after the match.", options: ["was", "were"], correctIndex: 0, reason: "Team biasanya diperlakukan singular -> was." },
      { id: "h20", question: "An architect needs a great amount of (equipment / equipments) for this project.", options: ["equipment", "equipments"], correctIndex: 0, reason: "Equipment adalah uncountable noun." },
    ],
  },
];
