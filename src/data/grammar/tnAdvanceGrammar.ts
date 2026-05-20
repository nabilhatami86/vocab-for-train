import type { ModuleLesson } from "@/types/module";

// ── Advance Grammar Lessons ───────────────────────────────────────────────────

const advanceGrammarLessons: ModuleLesson[] = [
  // ── Day 2 · Noun Clause ──────────────────────────────────────────────────────
  {
    id: "adv-grammar-1",
    track: "grammar",
    day: 2,
    tutor: "Ms. Vita",
    title: "Noun Clause",
    subtitle:
      "NC of Question · Statement · Exclamation · Request — Omitting & Abridgement",
    overview:
      "Noun Clause (NC) adalah sub-clause yang berfungsi sebagai noun (singular). Terdapat 4 jenis NC berdasarkan conjunction: NC of Question (whether/if/wh-words), NC of Statement (that/the fact that), NC of Exclamation (what/how), dan NC of Request (that + subjunctive V1).",
    materialSections: [
      {
        title: "A. Pengertian Noun Clause",
        points: [
          "Noun Clause = sub-clause yang berfungsi sebagai NOUN di dalam kalimat.",
          "NC bersifat SINGULAR (tunggal) meskipun isinya jamak.",
          "",
          "Fungsi NC dalam kalimat:",
          "  1. Subject    : What you said is true.",
          "  2. Object     : I know that he is right.",
          "  3. Complement : The truth is that he lied.",
          "  4. Obj. Prep. : My decision depends on whether he will work harder.",
          "",
          "Formula umum NC: CONJ + S + V (statement word order — bukan question order!)",
        ],
      },
      {
        title: "B.1. NC of Question — Yes/No Question",
        points: [
          "Conjunction : WHETHER, IF",
          "Formula     : CONJ + S + V",
          "",
          "📌 Perbedaan WHETHER dan IF:",
          "",
          "1) Jika ada 'or not' → WHETHER bisa langsung di depan 'or not',",
          "   sedangkan IF TIDAK bisa.",
          "   ✅ Abi knows WHETHER OR NOT Bella will come.",
          "   ✅ Abi knows whether Bella will come OR NOT.",
          "   ✅ Abi knows if Bella will come or not.",
          "   ❌ Abi knows if or not Bella will come.",
          "",
          "2) WHETHER bisa di awal kalimat (sebagai subject), IF TIDAK bisa.",
          "   ✅ WHETHER he will come or not is still uncertain.",
          "   ❌ If he will come or not is still uncertain.",
          "",
          "3) IF TIDAK bisa menjadi objek preposisi, WHETHER bisa.",
          "   ✅ My decision depends on WHETHER he will work harder or not.",
          "   ❌ My decision depends on IF he will work harder or not.",
        ],
      },
      {
        title: "B.1. NC of Question — WH-Question sebagai Pronoun",
        points: [
          "Conjunction : who, whoever, what, whatever, whom, whomever, which",
          "",
          "Fungsi:",
          "a) Sebagai SUBJECT NC:",
          "   WHO will come is my best friend.",
          "   S(NC)      V    CS",
          "",
          "b) Sebagai OBJECT NC:",
          "   He will employ WHOEVER will work hard.",
          "   S    V         [S      V    ]",
          "                  NC as object",
          "",
          "📌 'Whoever' = siapa pun yang | 'Whatever' = apa pun yang",
          "   'Whomever' = siapa pun (object position dalam NC)",
        ],
      },
      {
        title: "B.1. NC of Question — WH-Question sebagai Modifier & Adverb",
        points: [
          "Sebagai MODIFIER (conjunction + noun):",
          "  Whose + noun + S+V : possessive (kepemilikan)",
          "  What  + noun + S+V : situation/condition/type",
          "  Which + noun + S+V : choice/pilihan 2 hal",
          "",
          "  e.g: The police are investigating WHOSE BAG was left in the bus.",
          "       I don't know WHICH BOOKS I should read.",
          "       I don't know WHAT COUNTRIES he likes.",
          "       → I think about WHOSE HOUSE it is.",
          "       → WHICH MUSEUM I needed to explore was determined by my teacher.",
          "       → WHAT PHENOMENON just happened was observed by them.",
          "       → I'm confused about WHAT FOOD I should make for this competition.",
          "",
          "Sebagai ADVERB (keterangan):",
          "  Conjunction: when (kapan), where (dimana), how (bagaimana), why (mengapa)",
          "  Formula: CONJ + S + V",
          "",
          "  How much + noun + S+V  (uncountable — seberapa banyak)",
          "  How many + noun + S+V  (countable — seberapa banyak)",
          "",
          "  e.g: We have not decided WHERE we will hold the event.",
          "       The question is WHEN he will go to Pare.",
          "       I cannot understand WHY my parents give me much money.",
          "       I don't know HOW we can repair this computer.",
          "       HOW MANY STUDENTS did a scientific research was still uncertain.",
          "       Our health depends on HOW MUCH WATER flows in our bodies.",
          "       → They forecast WHEN the heavy rain will come down.",
          "       → She asked WHERE her cat is.",
          "       → I learn about HOW gravity works.",
          "       → She tells us WHY the filters are broken.",
          "       → HOW MUCH WATER we drink will affect our health.",
          "       → I am astonished by HOW MANY audience came to my concert.",
        ],
      },
      {
        title: "B.1. Contoh Lengkap: NC as Pronoun (Ringkasan)",
        points: [
          "Formula: CONJ + S+V (sebagai NC) / CONJ + V (jika conj = subject NC)",
          "",
          "who / Whoever    + S+V / +V  → siapa / siapa pun yang",
          "whom / Whomever  + S+V       → kepada siapa / siapa pun (object)",
          "which / Whichever+ S+V / +V  → yang mana / yang mana pun (2 pilihan)",
          "what / Whatever  + S+V / +V  → apa / apa pun yang (subject)",
          "",
          "📌 Contoh analisis lengkap:",
          "",
          "→ WHO will lead the meeting is decided by the board.",
          "   NC (subj)    ↑V          V(main)   O",
          "   'Who will lead...' = NC sebagai subject",
          "",
          "→ She asks WHICH I should finish first.",
          "   S    V   NC(obj) ↑S  V",
          "   'which I should finish first' = NC sebagai object",
          "",
          "→ They are interested in WHAT we learn today.",
          "   S    V           Prep   NC(O.Prep)  S  V",
          "   'what we learn today' = NC sebagai objek preposisi",
          "",
          "→ WHOM my mom selects as a secretary is my closest friend.",
          "   NC(subj)  S    V                   V(main)",
          "   'Whom my mom selects...' = NC sebagai subject",
          "",
          "→ WHOEVER will decide the schedule will be awarded.",
          "   NC(subj) + V                      V(main)",
          "   'Whoever' berfungsi sekaligus sebagai subject dalam NC",
          "",
          "→ She explains WHAT we should bring in the trip.",
          "   S    V       NC(obj)",
          "",
          "→ I deal with WHICH is the best.",
          "   S  V   Prep NC(O.Prep)",
        ],
      },
      {
        title: "B.2. NC of Statement",
        points: [
          "Conjunction: THAT, THE FACT THAT",
          "",
          "📌 Perbedaan THAT dan THE FACT THAT:",
          "",
          "a) Keduanya bisa menjadi subject, TETAPI 'the fact that' TIDAK bisa",
          "   menjadi subject dalam 'anticipatory it'.",
          "   ✅ It is not generally known THAT the company is almost bankrupt.",
          "   ❌ It is not generally known THE FACT THAT the company is...",
          "   ✅ THAT / THE FACT THAT the company is almost bankrupt is not known.",
          "",
          "b) THE FACT THAT bisa menjadi objek preposisi, THAT tidak bisa.",
          "   ✅ He was irritated by THE FACT THAT his friend ate his cakes.",
          "   ❌ He was irritated by THAT his friend ate his cakes.",
        ],
      },
      {
        title: "B.3. NC of Exclamation  &  B.4. NC of Request",
        points: [
          "NC OF EXCLAMATION — Conjunction: WHAT, HOW",
          "",
          "  WHAT : what + a/an + adjective + nC singular",
          "         what + a/an + adjective",
          "         what + adjective + nC plural",
          "         what + adjective + nC uncountable",
          "  HOW  : how + adjective / adverb",
          "",
          "  e.g: He realized WHAT A HARD PROBLEM I face.",
          "       I am amazed at HOW BEAUTIFUL his wife is.",
          "",
          "═══════════════════════════════════",
          "",
          "NC OF REQUEST — Conjunction: THAT + V1 (Subjunctive)",
          "",
          "  ✦ NC of Request adalah objek dari verb yang mengandung makna",
          "    urgency, advisability, atau desirability.",
          "  ✦ Verb dalam NC of Request menggunakan PRESENT SUBJUNCTIVE (V1).",
          "",
          "  e.g: The doctor recommended that he TAKE a vacation.",
          "       He is requesting that a company car BE PLACED at the disposal.",
          "",
          "  Verb yang sering diikuti NC of Request:",
          "  advise, ask, beg, command, demand, desire, forbid, insist,",
          "  move, propose, recommend, request, require, stipulate, suggest, urge",
        ],
      },
      {
        title: "C. Perbedaan AC dan NC",
        points: [
          "1) Posisi conjunction AC ('who, whom, which, when, where, why')",
          "   selalu SETELAH NOUN, sedangkan NC tidak.",
          "",
          "   AC : The girl [WHO is singing the new song] is my friend.",
          "         ↑ ada noun 'the girl' sebelum conjunction",
          "   NC : [WHO is singing the new song] is my friend.",
          "         ↑ tidak ada antecedent, NC = subject",
          "",
          "2) 'That' dalam AC SELALU setelah noun,",
          "   'that' dalam NC boleh setelah noun atau tidak.",
          "",
          "   AC : I borrow your book THAT is red.",
          "   NC : It is an evidence THAT he is a thief.",
          "   NC : I know THAT you are smart.",
          "",
          "3) NC sebagai subject bersifat SINGULAR.",
          "   e.g: WHAT YOU DID hurts me. (hurts, bukan hurt)",
        ],
      },
      {
        title: "D. Omitting & Abridgement dalam NC",
        points: [
          "1) OMITTING:",
          "   Dari semua conjunction NC, hanya 'THAT' yang bisa dihilangkan",
          "   ketika 'that' berfungsi sebagai OBJECT.",
          "",
          "   e.g: I agree [that] education is essential for our life.",
          "        I agree education is essential for our life. ✅",
          "",
          "2) ABRIDGEMENT — mengubah NC menjadi TO INFINITIVE:",
          "",
          "   Syarat:",
          "   a. Conjunction berasal dari QUESTION WORD (wh-word)",
          "   b. Subject di sub clause = subject di main clause",
          "   c. Di sub clause ada MODAL (can, must, should, dll.)",
          "",
          "   e.g: I don't know what I SHOULD do.",
          "        → I don't know WHAT TO DO.",
          "",
          "        She doesn't know where she SHOULD go.",
          "        → She doesn't know WHERE TO GO.",
          "",
          "        He asked me how he CAN fix the machine.",
          "        → He asked me HOW TO FIX the machine.",
        ],
      },
    ],
    exercises: [
      {
        id: "adv-g1-mc1",
        type: "multiple-choice",
        question:
          "My decision depends on ______ he will accept the offer or not.",
        options: ["A. if", "B. whether", "C. that", "D. what"],
        correctAnswer: "B. whether",
        reason:
          "'Whether' bisa menjadi objek preposisi ('on'), sedangkan 'if' tidak bisa. Pola: depends on + WHETHER + S + V.",
      },
      {
        id: "adv-g1-mc2",
        type: "multiple-choice",
        question: "______ or not she passes the exam is not my concern.",
        options: ["A. If", "B. That", "C. Whether", "D. What"],
        correctAnswer: "C. Whether",
        reason:
          "'Whether' bisa berada di awal kalimat sebagai subject NC, sedangkan 'if' tidak bisa. 'Whether or not she passes' = NC sebagai subject.",
      },
      {
        id: "adv-g1-mc3",
        type: "multiple-choice",
        question:
          "The doctor recommended that the patient ______ a complete rest.",
        options: ["A. takes", "B. took", "C. take", "D. to take"],
        correctAnswer: "C. take",
        reason:
          "NC of Request: setelah 'recommended that', gunakan V1 (present subjunctive). Meskipun subject 'the patient' singular, subjunctive tetap 'take' (tanpa -s).",
      },
      {
        id: "adv-g1-mc4",
        type: "multiple-choice",
        question:
          "He was surprised by ______ his employees had quit without notice.",
        options: ["A. that", "B. if", "C. whether", "D. the fact that"],
        correctAnswer: "D. the fact that",
        reason:
          "'The fact that' bisa menjadi objek preposisi ('by'), sedangkan 'that' tidak bisa. Pola: surprised by + THE FACT THAT + S + V.",
      },
      {
        id: "adv-g1-mc5",
        type: "multiple-choice",
        question:
          "I don't know what I should wear to the party. → Abridgement yang benar?",
        options: [
          "A. I don't know what wearing to the party.",
          "B. I don't know what to wear to the party.",
          "C. I don't know to wear to the party.",
          "D. I don't know what I wear to the party.",
        ],
        correctAnswer: "B. I don't know what to wear to the party.",
        reason:
          "Abridgement NC: conjunction dari wh-word (what) + sama subject + ada modal (should) → hapus S + modal, tambah 'to'. 'what I should wear' → 'what to wear'.",
      },
      {
        id: "adv-g1-mc6",
        type: "multiple-choice",
        question: "He will hire ______ is the most qualified for the position.",
        options: ["A. who", "B. whoever", "C. whom", "D. whomever"],
        correctAnswer: "B. whoever",
        reason:
          "'Whoever' = siapa pun yang (subject position dalam NC as object). NC 'whoever is the most qualified' = objek dari 'hire'. 'Who' bisa tetapi 'whoever' lebih tepat untuk menyatakan 'anyone who'.",
      },
      {
        id: "adv-g1-task",
        type: "task",
        section: "final",
        question:
          "A. Tentukan jenis NC (Question/Statement/Exclamation/Request) dan fungsinya (S/O/Complement/Obj.Prep):\n1. That she survived the accident is a miracle.\n2. The committee suggested that all members attend the meeting.\n3. I wonder whether they have arrived safely.\n4. She is amazed at how quickly he learned the language.\n5. Nobody knows whose car was parked in the director's spot.\n\nB. Buat abridgement dari kalimat berikut:\n6. She doesn't know how she should respond to the offer.\n7. He asked me where he could find a good restaurant.",
        sampleAnswer:
          "A.\n1. NC of Statement ('that') — Subject\n2. NC of Request ('that' + V1 subjunctive) — Object\n3. NC of Question (whether) — Object\n4. NC of Exclamation (how) — Object of Preposition\n5. NC of Question (whose + noun as modifier) — Object\n\nB.\n6. She doesn't know how to respond to the offer.\n   (how + she + should respond → how + to respond)\n7. He asked me where to find a good restaurant.\n   (where + he + could find → where + to find)",
      },

      // ── Exercise 9 — Correct / Incorrect ────────────────────────────────────
      {
        id: "adv-g1-ex9-1",
        type: "multiple-choice",
        section: "final",
        question:
          'Exercise 9 — Correct (C) or Incorrect (I)?\n\n"When the season starts is determined by the weather."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'When the season starts' = NC of Question (when) sebagai SUBJECT. Main verb: 'is determined'. Kalimat benar.",
      },
      {
        id: "adv-g1-ex9-2",
        type: "multiple-choice",
        section: "final",
        question:
          'Exercise 9 — Correct (C) or Incorrect (I)?\n\n"The manual how the device should be built."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "Main clause tidak memiliki verb. 'The manual' = subject, tapi tidak ada predicate. Koreksi: 'The manual EXPLAINS how the device should be built.'",
      },
      {
        id: "adv-g1-ex9-3",
        type: "multiple-choice",
        section: "final",
        question:
          'Exercise 9 — Correct (C) or Incorrect (I)?\n\n"The schedule indicated if the teams would be playing in the final game."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "S: 'The schedule'. V: 'indicated'. NC (object): 'if the teams would be playing...' — 'if' sebagai conjunction NC of Question. Kalimat benar.",
      },
      {
        id: "adv-g1-ex9-4",
        type: "multiple-choice",
        section: "final",
        question:
          'Exercise 9 — Correct (C) or Incorrect (I)?\n\n"He refused to enter a plea could not be determined by the lawyer."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "Double predicate tanpa conjunction: 'refused to enter' dan 'could not be determined'. Koreksi: 'WHETHER he refused to enter a plea could not be determined by the lawyer.'",
      },
      {
        id: "adv-g1-ex9-5",
        type: "multiple-choice",
        section: "final",
        question:
          'Exercise 9 — Correct (C) or Incorrect (I)?\n\n"Talked about where we should go for lunch."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "Tidak ada subject! 'Talked' tidak memiliki subject. Koreksi: 'WE talked about where we should go for lunch.'",
      },
      {
        id: "adv-g1-ex9-6",
        type: "multiple-choice",
        section: "final",
        question:
          'Exercise 9 — Correct (C) or Incorrect (I)?\n\n"Why the condition of the patient deteriorated so rapidly it was not explained."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "Double subject: NC 'Why the condition...' sebagai subject, lalu 'it' adalah pronoun redundan. Koreksi: 'Why the condition of the patient deteriorated so rapidly WAS not explained.' (hapus 'it')",
      },
      {
        id: "adv-g1-ex9-7",
        type: "multiple-choice",
        section: "final",
        question:
          'Exercise 9 — Correct (C) or Incorrect (I)?\n\n"Whether or not the new office would be built was to be determined at the meeting."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'Whether or not the new office would be built' = NC of Question sebagai subject. Main verb: 'was to be determined'. 'Whether' bisa di awal kalimat sebagai subject. Kalimat benar.",
      },
      {
        id: "adv-g1-ex9-8",
        type: "multiple-choice",
        section: "final",
        question:
          'Exercise 9 — Correct (C) or Incorrect (I)?\n\n"That the professor has not yet decided when the paper is due."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "NC 'That the professor has not yet decided when the paper is due' hanyalah subject — tidak ada main predicate/verb untuk seluruh kalimat. Koreksi: 'That the professor has not yet decided when the paper is due IS A PROBLEM.'",
      },
      {
        id: "adv-g1-ex9-9",
        type: "multiple-choice",
        section: "final",
        question:
          'Exercise 9 — Correct (C) or Incorrect (I)?\n\n"The contract will be awarded is the question to be answered at the meeting."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "'The contract will be awarded' dan 'is the question' = double predicate. Subject kalimat seharusnya NC. Koreksi: 'WHETHER the contract will be awarded is the question to be answered at the meeting.'",
      },
      {
        id: "adv-g1-ex9-10",
        type: "multiple-choice",
        section: "final",
        question:
          'Exercise 9 — Correct (C) or Incorrect (I)?\n\n"He always talked with whomever he pleased and did whatever he wanted."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "S: He. V1: talked with + NC (whomever he pleased = obj. of prep). Conjunction: and. V2: did + NC (whatever he wanted = object). Compound sentence dengan dua NC. Kalimat benar.",
      },

      // ── Part 1 Translation — NC (Pronoun) ───────────────────────────────────
      {
        id: "adv-g1-trans1",
        type: "task",
        section: "final",
        question:
          "PART 1 — Terjemahkan kalimat berikut ke dalam bahasa Inggris menggunakan Noun Clause yang tepat!\n\n1. Yang sudah berumur 17 tahun wajib memiliki KTP.\n2. Kita tidak tahu siapa lagi yang bisa kita percaya di negara ini.\n3. Rakyat sedang melihat apakah semua program yang disampaikan oleh kandidat terpilih akan benar-benar direalisasikan dengan baik.\n4. Beberapa mahasiswa telah mengetahui mana yang harus mereka kerjakan terlebih dulu.\n5. Apa yang kita lakukan hari ini menentukan masa depan kita nanti.",
        sampleAnswer:
          "1. Whoever has reached the age of 17 is required to have an ID card.\n   → NC: 'Whoever has reached 17' = subject (whoever = siapa pun yang)\n\n2. We don't know who else we can trust in this country.\n   → NC: 'who else we can trust' = object of 'know'\n\n3. The people are watching whether all programs proposed by the elected candidate will truly be realized properly.\n   → NC: 'whether all programs...realized' = object of 'watching'\n\n4. Some students have already known which one they should do first.\n   → NC: 'which one they should do first' = object of 'known'\n\n5. What we do today determines our future.\n   → NC: 'What we do today' = subject (bersifat singular → 'determines')",
      },

      // ── Part 2 Translation — NC (Adverb) ────────────────────────────────────
      {
        id: "adv-g1-trans2",
        type: "task",
        section: "final",
        question:
          "PART 2 — Terjemahkan kalimat berikut ke dalam bahasa Inggris menggunakan Noun Clause yang tepat!\n\n1. Kita harus paham kapan kita harus diam.\n2. Kepribadian kita ditentukan oleh bagaimana kita dulu dididik.\n3. Menjadi bahagia tidak dijamin oleh berapa banyak uang yang kita miliki.\n4. Kapan dan di mana kita akan pergi masih direncanakan.\n5. Para pendaki dapat dengan cepat menentukan mana langkah yang harus mereka ambil ketika tersesat.",
        sampleAnswer:
          "1. We must understand when we should be silent.\n   → NC: 'when we should be silent' = object of 'understand'\n   (Abridgement: We must understand when to be silent.)\n\n2. Our personality is determined by how we were raised/educated.\n   → NC: 'how we were raised' = object of preposition 'by'\n\n3. Being happy is not guaranteed by how much money we have.\n   → NC: 'how much money we have' = object of preposition 'by'\n   Alt: How much money we have does not guarantee happiness.\n\n4. When and where we will go is still being planned.\n   → Two NC joined: 'When and where we will go' = compound NC as subject\n   (singular → 'is still being planned')\n\n5. Hikers can quickly determine which steps they should take when they get lost.\n   → NC: 'which steps they should take when they get lost' = object of 'determine'",
      },
    ],
  },

  // ── Day 3 · NC of Statement, Request & Exclamation ──────────────────────────
  {
    id: "adv-grammar-2",
    track: "grammar",
    day: 3,
    tutor: "Ms. Vita",
    title: "Noun Clause — Statement, Request & Exclamation",
    subtitle: "NC of Statement · NC of Request · NC of Exclamation",
    overview:
      "Melanjutkan Noun Clause Day 2. NC of Statement (that/the fact that) memberikan sebuah pernyataan atau fakta. NC of Request (that + bare infinitive) menyatakan permintaan dengan subjunctive verb. NC of Exclamation (how/what) mengekspresikan kekaguman atau seruan.",
    materialSections: [
      {
        title: "A. NC of Statement",
        points: [
          "Berfungsi memberikan sebuah PERNYATAAN.",
          "",
          "Conjunction:",
          "  that          = Bahwa      → C + S + V",
          "  the fact that = Fakta bahwa → C + S + V",
          "",
          "📌 NB:",
          "  'The fact that' bisa menempati SEMUA posisi (subject, object, objek preposisi).",
          "  'That' hanya bisa sebagai SUBJECT dan OBJECT of verb.",
          "",
          "Contoh:",
          "→ The fact that the four-clove leaf can bring luck was once just common beliefs.",
          "→ She admits that the infrastructure is wrongly developed.",
          "→ That Indonesia is still a developing country is widely believed.",
          "→ They are concerned about the fact that the ministry will allocate the budget mistakenly.",
          "→ The government states that the deforestation is illegal.",
          "→ The architect insists that the workers follow her design.",
        ],
      },
      {
        title: "B. NC of Request",
        points: [
          "Berfungsi sebagai PERMINTAAN.",
          "",
          "Conjunction: that = Agar",
          "",
          "📌 NB:",
          "  Berlaku subjunctive verb yang bermakna meminta:",
          "  insist, beg, force, urge, ask, require, dll.",
          "  Hanya sebagai OBJECT of verb.",
          "  Verb di sub-clause → 'bare infinitive' (apapun subjeknya).",
          "",
          "Contoh:",
          "→ I ask that my sister follow the rules.",
          "→ Secretary urged that the document be submitted.",
          "→ She begs that her friends pick her up tonight.",
        ],
      },
      {
        title: "C. NC of Exclamation",
        points: [
          "Berfungsi sebagai SERUAN.",
          "",
          "Conjunction:",
          "  → How + Adj/Adv + S+V / +V    (Betapa...)",
          "  → What + noun phrase + S+V / +V",
          "",
          "Contoh:",
          "→ I'm amazed by how wonderful the scenery is.",
          "→ What a beautiful weather today makes us happy.",
          "→ She thinks how complicated Indonesian rules are.",
          "→ I'm surprised by how handsome he is.",
          "→ How beautiful you are inspires me.",
        ],
      },
      {
        title: "5. Noun Clause Connector/Subjects",
        points: [
          "NC Connector/Subject berfungsi sebagai SUBJECT dalam noun clause sekaligus penghubung.",
          "Connector ini: who · whoever · what · whatever · which · whichever",
          "",
          "📌 NC as OBJECT of verb:",
          "   Pola: S  V  [NC Connector/Subject  V]",
          "   Contoh: I know  [what  happened].",
          "",
          "📌 NC as SUBJECT:",
          "   Pola: [NC Connector/Subject  V]  V",
          "   Contoh: [What  happened]  was great.",
          "",
          "⚠️  Ingat: setelah NC Connector/Subject HARUS ada VERB di dalam noun clause.",
          "   ❌ You should find out which the best physics department.",
          "   ✅ You should find out which IS the best physics department.",
        ],
      },
    ],
    exercises: [
      // ── Exercise 10: NC Connector/Subject — Correct (C) or Incorrect (I) ──────
      {
        id: "adv-g2-ex10-1",
        type: "multiple-choice",
        question:
          'Exercise 10 — Correct (C) or Incorrect (I)?\n\n"The game show contestant was able to respond to whatever was asked."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "NC Connector/Subject 'whatever' diikuti verb 'was asked' → NC sebagai object of preposition 'to'. Struktur benar.",
      },
      {
        id: "adv-g2-ex10-2",
        type: "multiple-choice",
        question:
          'Exercise 10 — Correct (C) or Incorrect (I)?\n\n"You should find out which the best physics department."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "NC Connector/Subject 'which' harus diikuti verb dalam noun clause. Tidak ada verb setelah 'which'. Koreksi: '...find out which IS the best physics department.'",
      },
      {
        id: "adv-g2-ex10-3",
        type: "multiple-choice",
        question:
          'Exercise 10 — Correct (C) or Incorrect (I)?\n\n"The employee was unhappy about what was added to his job description."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "NC Connector/Subject 'what' diikuti verb 'was added' → NC sebagai object of preposition 'about'. Struktur benar.",
      },
      {
        id: "adv-g2-ex10-4",
        type: "multiple-choice",
        question:
          'Exercise 10 — Correct (C) or Incorrect (I)?\n\n"Whoever wants to take the desert tour during spring break signing up at the office."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "'Signing up' adalah Ving tanpa auxiliary — bukan main verb. NC Subject 'Whoever wants...' tidak memiliki main verb. Koreksi: '...should sign up at the office.'",
      },
      {
        id: "adv-g2-ex10-5",
        type: "multiple-choice",
        question:
          'Exercise 10 — Correct (C) or Incorrect (I)?\n\n"The motorist was unable to discover who he had struck his car."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "Struktur NC salah: 'who he had struck his car' ambigu/janggal. Koreksi: '...discover whose car he had struck.' (jika NC sebagai object dari 'struck')",
      },
      {
        id: "adv-g2-ex10-6",
        type: "multiple-choice",
        question:
          'Exercise 10 — Correct (C) or Incorrect (I)?\n\n"The voters should elect whichever of the candidates seems best to them."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "NC Connector/Subject 'whichever' diikuti prepositional phrase 'of the candidates' lalu verb 'seems' → NC sebagai object of 'elect'. Struktur benar.",
      },
      {
        id: "adv-g2-ex10-7",
        type: "multiple-choice",
        question:
          'Exercise 10 — Correct (C) or Incorrect (I)?\n\n"It was difficult to distinguish what was on sale and what was merely on display."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "Dua NC Connector/Subject: 'what was on sale' dan 'what was merely on display', keduanya sebagai object of 'distinguish'. Struktur benar.",
      },
      {
        id: "adv-g2-ex10-8",
        type: "multiple-choice",
        question:
          'Exercise 10 — Correct (C) or Incorrect (I)?\n\n"You should buy whatever the cheapest and most durable."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "NC 'whatever the cheapest and most durable' tidak memiliki verb. Koreksi: '...whatever IS the cheapest and most durable.'",
      },
      {
        id: "adv-g2-ex10-9",
        type: "multiple-choice",
        question:
          'Exercise 10 — Correct (C) or Incorrect (I)?\n\n"What was written in the letter angered him beyond belief."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "NC Connector/Subject 'What was written in the letter' berfungsi sebagai SUBJECT kalimat, diikuti main verb 'angered'. Struktur benar.",
      },
      {
        id: "adv-g2-ex10-10",
        type: "multiple-choice",
        question:
          'Exercise 10 — Correct (C) or Incorrect (I)?\n\n"You can spend your time with whoever important to you."',
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "NC 'whoever important to you' tidak memiliki verb. Koreksi: '...with whoever IS important to you.'",
      },
      {
        id: "adv-g2-mc1",
        type: "multiple-choice",
        section: "part1",
        question:
          "The board hasn't decided ___ the new branch will be established in Jakarta or Surabaya next year.",
        options: ["a. whether", "b. who", "c. whom", "d. which"],
        correctAnswer: "a. whether",
        reason:
          "'Whether' untuk yes/no NC dengan dua pilihan (Jakarta OR Surabaya). Pola: haven't decided WHETHER...or...",
      },
      {
        id: "adv-g2-mc2",
        type: "multiple-choice",
        section: "part1",
        question:
          "The supervisor asked me ___ I had completed all the revisions before the deadline yesterday.",
        options: ["a. if", "b. who", "c. whom", "d. which"],
        correctAnswer: "a. if",
        reason:
          "'If' untuk indirect yes/no question sebagai object of verb 'asked'. Pola: asked me IF + S + V.",
      },
      {
        id: "adv-g2-mc3",
        type: "multiple-choice",
        section: "part1",
        question:
          "Nobody knows ___ will be appointed as the new ambassador to Japan by the president.",
        options: ["a. who", "b. whom", "c. what", "d. which"],
        correctAnswer: "a. who",
        reason:
          "'Who' sebagai SUBJECT dalam NC (posisi subject: ___ will be appointed). Refers to a person. 'Whom' untuk object position.",
      },
      {
        id: "adv-g2-mc4",
        type: "multiple-choice",
        section: "part1",
        question:
          "It remains unclear ___ the annual meeting will be held at the headquarters or at a different location.",
        options: ["a. whether", "b. who", "c. what", "d. which"],
        correctAnswer: "a. whether",
        reason:
          "'Whether' untuk dua alternatif: headquarters OR different location. Pola: unclear WHETHER...or...",
      },
      {
        id: "adv-g2-mc5",
        type: "multiple-choice",
        section: "part1",
        question:
          "The principal wants to find out ___ of the students in the science club won the national competition.",
        options: ["a. which", "b. who", "c. whom", "d. what"],
        correctAnswer: "a. which",
        reason:
          "'Which' sebagai modifier + noun: 'which OF the students' = memilih dari kelompok spesifik. Conjunction + noun (modifier) untuk pilihan terbatas.",
      },
      {
        id: "adv-g2-mc6",
        type: "multiple-choice",
        section: "part1",
        question:
          "We are not sure ___ the financial report was reviewed by the auditing team last week.",
        options: ["a. if", "b. who", "c. whom", "d. which"],
        correctAnswer: "a. if",
        reason:
          "'If' untuk yes/no indirect question sebagai complement. Tidak ada 'or not' dan tidak di posisi subject/obj.prep → pakai 'if'.",
      },
      {
        id: "adv-g2-mc7",
        type: "multiple-choice",
        section: "part1",
        question:
          "The question is ___ should be responsible for coordinating the international conference this year.",
        options: ["a. who", "b. whom", "c. what", "d. which"],
        correctAnswer: "a. who",
        reason:
          "'Who' sebagai SUBJECT NC (posisi subject: ___ should be responsible). NC sebagai complement. 'Whom' untuk object position.",
      },
      {
        id: "adv-g2-mc8",
        type: "multiple-choice",
        section: "part1",
        question:
          "They haven't decided ___ will cancel the outdoor event because of the severe weather forecast or not.",
        options: ["a. whether", "b. who", "c. whom", "d. which"],
        correctAnswer: "a. whether",
        reason:
          "Ada 'or not' di akhir → 'whether'. Pola: WHETHER...or not = apakah...atau tidak.",
      },
      {
        id: "adv-g2-mc9",
        type: "multiple-choice",
        section: "part1",
        question:
          "It has not been confirmed ___ the guest speaker will be able to attend the business summit in Singapore.",
        options: ["a. whether or not", "b. who", "c. what", "d. which"],
        correctAnswer: "a. whether or not",
        reason:
          "'Whether or not' sebagai kesatuan conjunction untuk yes/no question. NC sebagai subject dengan anticipatory 'It'. Pola: It has not been confirmed WHETHER OR NOT + S + V.",
      },
      {
        id: "adv-g2-mc10",
        type: "multiple-choice",
        section: "part1",
        question:
          "We couldn't decide ___ of the two proposed designs would be more effective for the marketing campaign.",
        options: ["a. which", "b. who", "c. whom", "d. what"],
        correctAnswer: "a. which",
        reason:
          "'Which' + 'of the two' = memilih dari dua pilihan spesifik. 'Which + of + noun' untuk pilihan terbatas.",
      },
      {
        id: "adv-g2-mc11",
        type: "multiple-choice",
        section: "part1",
        question:
          "The committee is discussing ___ should represent the university at the upcoming global youth forum.",
        options: ["a. who", "b. whom", "c. what", "d. which"],
        correctAnswer: "a. who",
        reason:
          "'Who' sebagai SUBJECT NC (posisi subject: ___ should represent). NC sebagai object of 'discussing'. Refers to a person.",
      },
      {
        id: "adv-g2-mc12",
        type: "multiple-choice",
        section: "part1",
        question:
          "I'm not certain ___ she submitted the final version of her research paper on time or not.",
        options: ["a. whether", "b. who", "c. what", "d. which"],
        correctAnswer: "a. whether",
        reason:
          "Ada 'or not' di akhir → 'whether'. Pola: not certain WHETHER + S + V + or not. NC sebagai complement.",
      },
      {
        id: "adv-g2-mc13",
        type: "multiple-choice",
        section: "part1",
        question:
          "They are still debating ___ will approve the new budget proposal after the unexpected increase in costs.",
        options: ["a. whether or not", "b. what", "c. whom", "d. which"],
        correctAnswer: "a. whether or not",
        reason:
          "'Whether or not' = apakah...atau tidak. NC menjadi object of 'debating'. Menyatakan ketidakpastian apakah proposal akan disetujui.",
      },
      {
        id: "adv-g2-mc14",
        type: "multiple-choice",
        section: "part1",
        question:
          "The manager asked ___ could handle the investor presentation during his absence next Friday.",
        options: ["a. who", "b. whom", "c. what", "d. which"],
        correctAnswer: "a. who",
        reason:
          "'Who' sebagai SUBJECT NC (posisi subject: ___ could handle). NC sebagai object of 'asked'. Refers to a person.",
      },
      {
        id: "adv-g2-mc15",
        type: "multiple-choice",
        section: "part1",
        question:
          "It is still unknown ___ caused the sudden breakdown of the main computer system during the conference.",
        options: ["a. what", "b. which", "c. who", "d. whom"],
        correctAnswer: "a. what",
        reason:
          "'What' sebagai SUBJECT NC (posisi subject: ___ caused the breakdown). Refers to a thing/cause (bukan orang). NC sebagai subject dengan anticipatory 'It'.",
      },
      {
        id: "adv-g2-tr1",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Tidak jelas siapa yang mengirim paket itu ke kantor kami.",
        sampleAnswer: "It is not clear who sent that package to our office.",
      },
      {
        id: "adv-g2-tr2",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Tolong beritahu saya buku mana yang harus saya baca terlebih dahulu.",
        sampleAnswer: "Please tell me which book I should read first.",
      },
      {
        id: "adv-g2-tr3",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Kami masih mempertimbangkan apakah akan membuka cabang baru atau tidak.",
        sampleAnswer:
          "We are still considering whether or not to open a new branch.",
      },
      {
        id: "adv-g2-tr4",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Dia bertanya apakah kita bisa menunda rapat sampai minggu depan.",
        sampleAnswer:
          "She asked whether we could postpone the meeting until next week.",
      },
      {
        id: "adv-g2-tr5",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Tidak seorang pun tahu siapa yang menemukan ide itu pertama kali.",
        sampleAnswer: "Nobody knows who came up with that idea first.",
      },
      {
        id: "adv-g2-tr6",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Masalahnya adalah apakah anggaran itu cukup untuk membiayai proyek ini.",
        sampleAnswer:
          "The problem is whether the budget is sufficient to fund this project.",
      },
      {
        id: "adv-g2-tr7",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Saya tidak ingat apa yang dia katakan tentang peraturan baru itu.",
        sampleAnswer:
          "I don't remember what she said about the new regulation.",
      },
      {
        id: "adv-g2-tr8",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Tolong tanyakan siapa yang akan menjadi pembicara utama di acara tersebut.",
        sampleAnswer: "Please ask who will be the main speaker at that event.",
      },
      {
        id: "adv-g2-tr9",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Kami belum memutuskan apakah akan menerima tawaran tersebut atau tidak.",
        sampleAnswer: "We haven't decided whether or not to accept that offer.",
      },
      {
        id: "adv-g2-tr10",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Polisi ingin tahu apa yang membuat tersangka melarikan diri.",
        sampleAnswer: "The police want to know what made the suspect flee.",
      },
      {
        id: "adv-g2-tr11",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Saya penasaran apakah perusahaan itu akan mempekerjakan karyawan baru tahun ini.",
        sampleAnswer:
          "I am curious whether that company will hire new employees this year.",
      },
      {
        id: "adv-g2-tr12",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Mereka sedang mendiskusikan siapa yang akan menjadi duta merek.",
        sampleAnswer:
          "They are discussing who will become the brand ambassador.",
      },
      {
        id: "adv-g2-tr13",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Tidak ada yang tahu barang mana yang akan dijual dengan diskon terbesar.",
        sampleAnswer:
          "Nobody knows which item will be sold with the biggest discount.",
      },
      {
        id: "adv-g2-tr14",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Belum dipastikan apakah pertandingan itu akan tetap dilaksanakan meskipun hujan.",
        sampleAnswer:
          "It has not been confirmed whether the match will still be held despite the rain.",
      },
      {
        id: "adv-g2-tr15",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Terlihat sangat jelas bahwa bahagia tidak hanya soal uang.",
        sampleAnswer:
          "It is very clear that happiness is not just about money.",
      },
      {
        id: "adv-g2-tr16",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Kita tidak bisa menolak fakta bahwa pendidikan berperan penting dalam bagaimana kita bersosialisasi.",
        sampleAnswer:
          "We cannot deny the fact that education plays an important role in how we socialize.",
      },
      {
        id: "adv-g2-tr17",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Pecinta CGI kagum dengan betapa detailnya gambar dalam film Avatar karya James Cameron.",
        sampleAnswer:
          "CGI enthusiasts are amazed by how detailed the images are in James Cameron's Avatar.",
      },
      {
        id: "adv-g2-tr18",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: dr. Tirta menyarankan agar anak muda mengurangi konsumsi gula untuk menghindarkan mereka dari diabetes pada usia dini.",
        sampleAnswer:
          "Dr. Tirta suggested that young people reduce their sugar intake to prevent them from getting diabetes at an early age.",
      },
      {
        id: "adv-g2-tr19",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Bahwa melakukan olahraga yang cukup dapat meningkatkan kualitas tidur telah dibuktikan oleh beberapa penelitian.",
        sampleAnswer:
          "That getting enough exercise can improve sleep quality has been proven by several studies.",
      },
      {
        id: "adv-g2-tr20",
        type: "short-answer",
        section: "part2",
        question:
          "Translate to English: Jake Sully belum menemukan apa alasan yang dia harus jelaskan pada Tonowari, ketua klan Metkayina.",
        sampleAnswer:
          "Jake Sully hasn't found out what reason he should explain to Tonowari, the leader of the Metkayina clan.",
      },
    ],
  },

  // ── Day 4 · Peringkasan NC & Adjective Clause ───────────────────────────────
  {
    id: "adv-grammar-3",
    track: "grammar",
    day: 4,
    tutor: "Ms. Vita",
    title: "Peringkasan NC · Adjective Clause",
    subtitle: "NC Omitting & Abridgement · AC Kinds · AC Reducing & Omitting",
    overview:
      "Peringkasan Noun Clause adalah proses perubahan struktur kalimat tanpa merubah makna, melalui Omitting (penghapusan 'that') dan Abridgement (penyingkatan menjadi to-infinitive). Adjective Clause (AC) adalah clause yang berfungsi memodifikasi noun, menggunakan relative pronoun who/whom/which/that/whose atau relative adverb when/where/why. AC dapat dipersingkat melalui Reducing (mengubah verb menjadi participle) atau Omitting.",
    materialSections: [
      {
        title: "A. Peringkasan NC — 1. Omitting",
        points: [
          "Penghapusan Conjunction 'that' yang bermakna 'bahwa' di posisi object of verb.",
          "",
          "e.g.:",
          "→ They admit that they are guilty.         → They admit they are guilty.",
          "→ She states that the ruler are complicated. → She states the ruler are complicated.",
          "→ The pilot said that the passengers should be calming down during turbulency.",
          "   → The pilot said the passengers should be calming down during turbulency.",
        ],
      },
      {
        title: "A. Peringkasan NC — 2. Abridgement",
        points: [
          "Penghapusan subject di Sub-Clause (SC) dan mengubah verb SC menjadi 'to-Infinitive'.",
          "",
          "Form  : Conj + to + V₁ (Bare)",
          "",
          "Syarat:",
          "  1. NC yang berposisi object of verb + preposition",
          "  2. Seluruh NC yang memakai Conjunction WH",
          "  3. Subject antara SC dan MC harus sama",
          "  4. Ada modal di SC (tidak bisa untuk NC of Exclamation)",
          "",
          "Contoh:",
          "→ She wonders whether she can finish the task (or not).",
          "   A: She wonders whether to finish the task (or not).",
          "",
          "→ I know what I should do next.",
          "   A: I know what to do next.",
          "",
          "→ She asked which book she should read first.",
          "   A: She asked which book to read first.",
          "",
          "→ They don't understand where they must go.",
          "   A: They don't understand where to go.",
          "",
          "→ I will tell you how I can make this cake.",
          "   A: I will tell you how to make this cake.",
          "",
          "→ I'm concerned how much money I will save.",
          "   A: I'm concerned how much money to save.",
          "",
          "→ We're interested in how we can solve the problem.",
          "→ The scientist explains about how to discover the new formula.",
          "→ The evidence shows how to be found.",
        ],
      },
      {
        title: "B. Adjective Clause — Pengertian & Jenis",
        points: [
          "Clause yang berfungsi memodifikasi noun.",
          "Letak: di belakang noun yang dijelaskan.",
          "",
          "Contoh sederhana:",
          "  I have 2 flowers. + They are roses.",
          "  → I have 2 flowers which are roses.",
          "",
          "  I talk to a man. + I deal with him.",
          "  → I talk to a man whom I deal with.",
          "  → A man with whom I deal.",
          "",
          "Kinds of Adjective Clause:",
          "",
          "who   : C+V → untuk orang → yang",
          "  e.g. A leader who gives us an advice looks so great.",
          "",
          "whom  : C+S+V → untuk orang → yang (posisi object)",
          "  e.g. I call a girl whom my brother likes.",
          "",
          "which : C+S+V / C+V → untuk benda/hal",
          "  e.g. I carry a box which is heavy.",
          "",
          "that  : C+S+V / C+V → untuk semua (orang & benda)",
          "  e.g. Many students that join the competition are so smart.",
          "",
          "whose : C+noun+S+V / +V → Kepemilikan",
          "  e.g. A girl whose car is red is angry.",
          "",
          "when  : C+S+V → Keterangan waktu → ketika",
          "  e.g. I remember a time when I met you.",
          "",
          "where : C+S+V → Keterangan tempat → di mana",
          "  e.g. A hotel where my mom works is huge.",
          "",
          "why   : C+S+V → Alasan → mengapa",
          "  e.g. I know the reason why she looks so sad.",
        ],
      },
      {
        title: "C. Peringkasan AC — 1. Reducing (C+V)",
        points: [
          "Perubahan verb dalam AC menjadi bentuk yang lebih singkat.",
          "",
          "Jenis perubahan verb:",
          "  Active  : V-ing (Present Participle)",
          "  Passive : V3 (Past Participle), adj, noun, dll.",
          "  Non-verb: ANA / Being + ANA",
          "",
          "Contoh:",
          "→ A man who stands is my friend.",
          "   → A man standing is my friend.   [Active → V-ing]",
          "",
          "→ I work at the company which is built too quickly.",
          "   → I work at the company built too quickly.   [Passive → V3]",
          "",
          "→ Elon Musk who is the founder of Tesla is so smart.",
          "   → Elon Musk, the founder of Tesla, is so smart.   [Non-verb → Appositive]",
        ],
      },
      {
        title: "C. Peringkasan AC — 2. Omitting (C+S+V)",
        points: [
          "Penghapusan conjunction + subject dalam AC.",
          "",
          "Contoh:",
          "→ I call a girl whom he likes.",
          "→ A time when I saw you every yesterday.",
        ],
      },
    ],
    exercises: [
      // ── TOEFL Exercise (Skills 9–12) ─ regular / no section ──────────────────
      {
        id: "adv-g3-toefl-1",
        type: "multiple-choice",
        question:
          "TOEFL Exercise (Skills 9–12)\n\nDolphins form extremely complicated allegiances and ____ continually changing.",
        options: [
          "A. enmities that",
          "B. that are enmities",
          "C. enmities that are",
          "D. that enmities",
        ],
        correctAnswer: "C. enmities that are",
        reason:
          "'Enmities that are continually changing' = noun + adjective clause (AC). 'that are' = relative pronoun + BE sebagai verb dalam AC. Option A ('enmities that') tidak perlu karena 'change' membutuhkan BE untuk membentuk progressive.",
      },
      {
        id: "adv-g3-toefl-2",
        type: "multiple-choice",
        question:
          "Scientists are now beginning to conduct experiments on ____ trigger different sorts of health risks.",
        options: [
          "A. noise pollution can",
          "B. that noise pollution",
          "C. how noise pollution",
          "D. how noise pollution can",
        ],
        correctAnswer: "D. how noise pollution can",
        reason:
          "Preposisi 'on' membutuhkan noun sebagai objeknya → NC. 'How noise pollution can trigger' = NC of Question (how) sebagai object of preposition. 'Can' diperlukan sebagai modal verb dalam NC.",
      },
      {
        id: "adv-g3-toefl-3",
        type: "multiple-choice",
        question:
          "The Apollo 11 astronauts ____ of the Earth's inhabitants witnessed on the famous first moonwalk on July 20, 1969, were Neil Armstrong and Buzz Aldrin.",
        options: [
          "A. whom",
          "B. whom millions",
          "C. were some",
          "D. whom some were",
        ],
        correctAnswer: "B. whom millions",
        reason:
          "'Whom millions of the Earth's inhabitants witnessed' = AC modifying 'astronauts'. 'Whom' = relative pronoun (object position), 'millions of the Earth's inhabitants' = subject dari AC. Option A tidak ada subject AC-nya.",
      },
      {
        id: "adv-g3-toefl-4",
        type: "multiple-choice",
        question:
          "At the end of the nineteenth century, Alfred Binet developed a test for measuring intelligence ____ served as the basis of modern IQ tests.",
        options: ["A. has", "B. it has", "C. and", "D. which has"],
        correctAnswer: "D. which has",
        reason:
          "'Which has served as the basis of modern IQ tests' = AC modifying 'test'. 'Which' = relative pronoun untuk benda (test). 'Has served' = present perfect sebagai verb dalam AC.",
      },
      {
        id: "adv-g3-toefl-5",
        type: "multiple-choice",
        question:
          "____ have at least four hours of hazardous materials response training is mandated by federal law.",
        options: [
          "A. All police officers",
          "B. All police officers must",
          "C. That all police officers",
          "D. For all police officers",
        ],
        correctAnswer: "C. That all police officers",
        reason:
          "Kalimat ini membutuhkan NC sebagai SUBJECT ('is mandated' = main verb). 'That all police officers have at least four hours...' = NC of Statement sebagai subject. 'That' = conjunction NC.",
      },
      {
        id: "adv-g3-toefl-6",
        type: "multiple-choice",
        question:
          "A cloud's reservoir of negative charge extends upward from the altitude at ____ the freezing point.",
        options: [
          "A. temperatures hit",
          "B. hit temperatures",
          "C. which temperatures hit",
          "D. which hit temperatures",
        ],
        correctAnswer: "C. which temperatures hit",
        reason:
          "'at which temperatures hit the freezing point' = AC modifying 'altitude'. 'at which' = preposition + relative pronoun untuk benda. 'temperatures' = subject AC, 'hit' = verb AC.",
      },
      {
        id: "adv-g3-toefl-7",
        type: "multiple-choice",
        question:
          "In a 1988 advanced officers' training program, Sampson developed a plan to incorporate police in enforcing environmental protection laws whenever ____ feasible.",
        options: ["A. it is", "B. is", "C. has", "D. it has"],
        correctAnswer: "A. it is",
        reason:
          "'whenever it is feasible' = Adverbial Clause of Time. 'it' = dummy subject (expletive), 'is' = verb, 'feasible' = adjective complement. Pola lengkap: whenever + S + V + Adj.",
      },
      {
        id: "adv-g3-toefl-8",
        type: "multiple-choice",
        question:
          "____ will be carried in the next space shuttle payload has not yet been announced to the public.",
        options: ["A. It", "B. What", "C. When", "D. That"],
        correctAnswer: "B. What",
        reason:
          "'What will be carried in the next space shuttle payload' = NC sebagai SUBJECT kalimat. 'What' = NC connector/subject untuk benda yang tidak diketahui. 'has not yet been announced' = main verb.",
      },
      {
        id: "adv-g3-toefl-9",
        type: "multiple-choice",
        question:
          "During free fall, ____ up to a full minute, a skydiver will fall at a constant speed of 120 m.p.h.",
        options: ["A. it is", "B. which is", "C. being", "D. is"],
        correctAnswer: "B. which is",
        reason:
          "'which is up to a full minute' = AC non-restrictive modifying 'free fall'. 'which' = relative pronoun untuk benda (free fall), 'is' = verb, 'up to a full minute' = complement.",
      },
      {
        id: "adv-g3-toefl-10",
        type: "multiple-choice",
        question:
          "The fact ____ the most important ratings period is about to begin has caused all the networks to shore up their schedules.",
        options: ["A. is that", "B. of", "C. that", "D. what"],
        correctAnswer: "C. that",
        reason:
          "'The fact that...' = NC of Statement. 'that' = conjunction NC yang mengikuti noun 'fact'. Pola: the fact + that + S + V.",
      },
      // ── Exercise 4 — Present Participles ─ Part 1 ────────────────────────────
      {
        id: "adv-g3-ex4-1",
        type: "multiple-choice",
        section: "part1",
        question:
          "Exercise 4 — Present Participles: Correct (C) or Incorrect (I)?\n\n\"The companies offering the lowest prices will have the most customers.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'offering' = present participle (ADJ modifier untuk 'companies'), 'will have' = main verb. Satu verb utama, satu participle modifier. Correct.",
      },
      {
        id: "adv-g3-ex4-2",
        type: "multiple-choice",
        section: "part1",
        question:
          "Exercise 4 — Present Participles: Correct (C) or Incorrect (I)?\n\n\"Those travelers are completing their trip on Delta should report to Gate Three.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "'are completing' = verb1, 'should report' = verb2. Tidak ada conjunction yang menghubungkan. Double verb → Incorrect. Harusnya: 'Those travelers completing their trip on Delta should report...'",
      },
      {
        id: "adv-g3-ex4-3",
        type: "multiple-choice",
        section: "part1",
        question:
          "Exercise 4 — Present Participles: Correct (C) or Incorrect (I)?\n\n\"The artisans were demonstrating various handicrafts at booths throughout the fair.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'were demonstrating' = verb (progressive tense) — hanya satu verb dalam kalimat. Kalimat benar secara struktural. Correct.",
      },
      {
        id: "adv-g3-ex4-4",
        type: "multiple-choice",
        section: "part1",
        question:
          "Exercise 4 — Present Participles: Correct (C) or Incorrect (I)?\n\n\"The fraternities are giving the wildest parties attract the most new pledges.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "'are giving' = verb1, 'attract' = verb2. Tidak ada conjunction. Double verb → Incorrect. Harusnya: 'The fraternities giving the wildest parties attract the most new pledges.'",
      },
      {
        id: "adv-g3-ex4-5",
        type: "multiple-choice",
        section: "part1",
        question:
          "Exercise 4 — Present Participles: Correct (C) or Incorrect (I)?\n\n\"The first team winning four games is awarded the championship.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'winning' = present participle (ADJ modifier untuk 'team'), 'is awarded' = main verb. Correct.",
      },
      {
        id: "adv-g3-ex4-6",
        type: "multiple-choice",
        section: "part1",
        question:
          "Exercise 4 — Present Participles: Correct (C) or Incorrect (I)?\n\n\"The speaker was trying to make his point was often interrupted vociferously.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "'was trying' = verb1, 'was interrupted' = verb2. Tidak ada conjunction. Double verb → Incorrect. Harusnya: 'The speaker trying to make his point was often interrupted vociferously.'",
      },
      {
        id: "adv-g3-ex4-7",
        type: "multiple-choice",
        section: "part1",
        question:
          "Exercise 4 — Present Participles: Correct (C) or Incorrect (I)?\n\n\"The fruits were rotting because of the moisture in the crates carrying them to market.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'were rotting' = main verb (progressive), 'carrying' = present participle (ADJ modifier untuk 'crates'). Correct.",
      },
      {
        id: "adv-g3-ex4-8",
        type: "multiple-choice",
        section: "part1",
        question:
          "Exercise 4 — Present Participles: Correct (C) or Incorrect (I)?\n\n\"Any students desiring official transcripts should complete the appropriate form.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'desiring' = present participle (ADJ modifier untuk 'students'), 'should complete' = main verb. Correct.",
      },
      {
        id: "adv-g3-ex4-9",
        type: "multiple-choice",
        section: "part1",
        question:
          "Exercise 4 — Present Participles: Correct (C) or Incorrect (I)?\n\n\"The advertisements were announcing the half-day sale received a lot of attention.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "'were announcing' = verb1, 'received' = verb2. Tidak ada conjunction. Double verb → Incorrect. Harusnya: 'The advertisements announcing the half-day sale received a lot of attention.'",
      },
      {
        id: "adv-g3-ex4-10",
        type: "multiple-choice",
        section: "part1",
        question:
          "Exercise 4 — Present Participles: Correct (C) or Incorrect (I)?\n\n\"The spices flavoring the meal were quite distinctive.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'flavoring' = present participle (ADJ modifier untuk 'spices'), 'were' = main verb. Correct.",
      },
      // ── Exercise 5 — Past Participles ─ Part 2 ───────────────────────────────
      {
        id: "adv-g3-ex5-1",
        type: "multiple-choice",
        section: "part2",
        question:
          "Exercise 5 — Past Participles: Correct (C) or Incorrect (I)?\n\n\"The money was offered by the client was not accepted.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "'was offered' = verb1, 'was not accepted' = verb2. Double passive tanpa conjunction → Incorrect. Harusnya: 'The money offered by the client was not accepted.'",
      },
      {
        id: "adv-g3-ex5-2",
        type: "multiple-choice",
        section: "part2",
        question:
          "Exercise 5 — Past Participles: Correct (C) or Incorrect (I)?\n\n\"The car listed in the advertisement had already stalled.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'listed' = past participle (ADJ modifier untuk 'car'), 'had stalled' = main verb (past perfect). Correct.",
      },
      {
        id: "adv-g3-ex5-3",
        type: "multiple-choice",
        section: "part2",
        question:
          "Exercise 5 — Past Participles: Correct (C) or Incorrect (I)?\n\n\"The chapters were taught by the professor this morning will be on next week's exam.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "'were taught' = verb1, 'will be' = verb2. Double verb tanpa conjunction → Incorrect. Harusnya: 'The chapters taught by the professor this morning will be on next week's exam.'",
      },
      {
        id: "adv-g3-ex5-4",
        type: "multiple-choice",
        section: "part2",
        question:
          "Exercise 5 — Past Participles: Correct (C) or Incorrect (I)?\n\n\"The loaves of bread were baked in a brick oven at a low temperature for many hours.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'were baked' = passive main verb (satu verb utama). Kalimat pasif sederhana yang benar. Correct.",
      },
      {
        id: "adv-g3-ex5-5",
        type: "multiple-choice",
        section: "part2",
        question:
          "Exercise 5 — Past Participles: Correct (C) or Incorrect (I)?\n\n\"The ports were reached by the sailors were under the control of a foreign nation.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "'were reached' = verb1, 'were under' = verb2. Double verb tanpa conjunction → Incorrect. Harusnya: 'The ports reached by the sailors were under the control of a foreign nation.'",
      },
      {
        id: "adv-g3-ex5-6",
        type: "multiple-choice",
        section: "part2",
        question:
          "Exercise 5 — Past Participles: Correct (C) or Incorrect (I)?\n\n\"Those suspected in the string of robberies were arrested by the police.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'suspected' = past participle (ADJ modifier untuk 'those'), 'were arrested' = main verb. Correct.",
      },
      {
        id: "adv-g3-ex5-7",
        type: "multiple-choice",
        section: "part2",
        question:
          "Exercise 5 — Past Participles: Correct (C) or Incorrect (I)?\n\n\"The pizza is served in this restaurant is the tastiest in the county.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "'is served' = verb1, 'is' = verb2. Double verb tanpa conjunction → Incorrect. Harusnya: 'The pizza served in this restaurant is the tastiest in the county.'",
      },
      {
        id: "adv-g3-ex5-8",
        type: "multiple-choice",
        section: "part2",
        question:
          "Exercise 5 — Past Participles: Correct (C) or Incorrect (I)?\n\n\"The courses are listed on the second page of the brochure have several prerequisites.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "I — Incorrect",
        reason:
          "'are listed' = verb1, 'have' = verb2. Double verb tanpa conjunction → Incorrect. Harusnya: 'The courses listed on the second page of the brochure have several prerequisites.'",
      },
      {
        id: "adv-g3-ex5-9",
        type: "multiple-choice",
        section: "part2",
        question:
          "Exercise 5 — Past Participles: Correct (C) or Incorrect (I)?\n\n\"All the tenants were invited to the Independence Day barbecue at the apartment complex.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'were invited' = passive main verb (satu verb utama). Kalimat pasif sederhana yang benar. Correct.",
      },
      {
        id: "adv-g3-ex5-10",
        type: "multiple-choice",
        section: "part2",
        question:
          "Exercise 5 — Past Participles: Correct (C) or Incorrect (I)?\n\n\"Any bills paid by the first of the month will be credited to your account by the next day.\"",
        options: ["C — Correct", "I — Incorrect"],
        correctAnswer: "C — Correct",
        reason:
          "'paid' = past participle (ADJ modifier untuk 'bills'), 'will be credited' = main verb (passive future). Correct.",
      },
    ],
  },

  // ── Day 5 · Adverbial Clause ─────────────────────────────────────────────────
  {
    id: "adv-grammar-4",
    track: "grammar",
    day: 5,
    tutor: "Ms. Vita",
    title: "Adverbial Clause",
    subtitle:
      "8 Jenis AVC — Time · Place · Contrast · Cause · Result · Purpose · Condition · Manner",
    overview:
      "Adverbial Clause (AVC) adalah klausa yang berfungsi sebagai adverb. Conjunction AVC selalu diikuti S+V. Terdapat 8 jenis AVC beserta aturan Abridgement (conj+Ving/V3/ANA) dan Reducing (Ving/V3/Being+ANA) untuk mempersingkat kalimat.",
    materialSections: [
      {
        title: "A. Pengertian & Posisi AVC",
        points: [
          "Adverbial Clause = klausa yang berfungsi sebagai ADVERB.",
          "Conjunction AVC selalu diikuti SUBJECT + VERB.",
          "",
          "Posisi AVC dalam kalimat:",
          "  Awal kalimat (+ koma): WHEN I arrived, everyone was sleeping.",
          "  Akhir kalimat (tanpa koma): Everyone was sleeping WHEN I arrived.",
        ],
      },
      {
        title: "B.1. AVC of Time  &  B.2. AVC of Place",
        points: [
          "AVC OF TIME — menjawab KAPAN?",
          "Conjunction: after, before, as soon as (segera setelah),",
          "  by the time (menjelang), till/until (sampai), when, whenever,",
          "  while/as (ketika/sambil), since, as long as (selama), dll.",
          "",
          "  e.g: I will phone you AS SOON AS I get home.",
          "       WHEN I was watching TV, the telephone rang.    → Disturbing Event",
          "       BEFORE Tommy sleeps, he prays.                 → Sequence Event",
          "       I am listening to the radio WHILE I am having breakfast. → At-the-same-time",
          "",
          "AVC OF PLACE — menjawab DI MANA?",
          "Conjunction: where (di mana), wherever (di manapun),",
          "  anywhere (that) (di mana saja), everywhere (that) (ke manapun),",
          "  no place (that), dll.",
          "",
          "  e.g: She lives WHERE her parents used to live.",
        ],
      },
      {
        title: "B.3. AVC of Contrast  &  B.4. AVC of Reason/Cause",
        points: [
          "AVC OF CONTRAST — meskipun... / padahal...",
          "",
          "a) Concessive (lemah) — meskipun:",
          "   Conjunction: although / though / even though (walaupun/meskipun),",
          "                conceded that",
          "   e.g: ALTHOUGH she doesn't enjoy her job, she works hard.",
          "",
          "b) Adversative (kuat) — sedangkan / padahal:",
          "   Conjunction: while (sedangkan), whereas (padahal)",
          "   e.g: She is a thief WHEREAS she is a kind person.",
          "        He is quiet and shy WHILE his sister is talkative.",
          "",
          "AVC OF REASON / CAUSE — menjawab MENGAPA?",
          "Conjunction: because / since / as / inasmuch as (karena),",
          "  now that (karena sekarang), on the ground(s) that, dll.",
          "",
          "  e.g: I made mistakes BECAUSE I was tired.",
          "       NOW THAT he has graduated, he can apply for a job.",
        ],
      },
      {
        title: "B.5. AVC of Result/Effect  &  B.6. AVC of Purpose",
        points: [
          "AVC OF RESULT / EFFECT — sehingga...",
          "  so + adj/adv + that   = sehingga",
          "  such + noun phrase + that = sehingga",
          "  so that               = sehingga",
          "",
          "  e.g: He spoke SO FAST THAT nobody can understand.",
          "       It was SUCH A GOOD COFFEE THAT I had another cup.",
          "",
          "AVC OF PURPOSE — agar / supaya...",
          "",
          "a) Positive Purpose:",
          "   in order that, so that, in the hope that, to the end that",
          "   e.g: We left early SO THAT we wouldn't arrive late.",
          "",
          "b) Negative Purpose — agar/supaya tidak:",
          "   lest (agar tidak), for fear that (agar tidak)",
          "   e.g: They kept watch all night LEST robbers should come.",
          "",
          "📌 Perbedaan 'so that' untuk PURPOSE vs RESULT:",
          "   Purpose : He sits in front SO THAT he can hear. (modal 'can')",
          "   Result  : He sat in front, SO THAT he heard... (past, tanpa modal, + koma)",
        ],
      },
      {
        title: "B.7. AVC of Condition  &  B.8. AVC of Manner",
        points: [
          "AVC OF CONDITION — jika/seandainya...",
          "Conjunction: if, even if (sekalipun), unless (jika...tidak),",
          "  in case (jikalau), if only (seandainya), provided that (asalkan),",
          "  on condition that (dengan syarat), suppose that (bagaimana jika)",
          "",
          "  TYPE 1 — probability (90%): If + simple present, simple future",
          "    e.g: IF I go out, I'll buy newspaper.",
          "    Modal 'will' bisa diganti: may/might (possibility), can/may (permission),",
          "    must/should (command/advisability)",
          "",
          "  TYPE 2 — unreal present: If + simple past, past future",
          "    e.g: IF he got up earlier, he wouldn't be late for work.",
          "    ⚠ 'Be' dalam Type 2 → WERE (semua subject)",
          "",
          "  TYPE 3 — unreal past/regret: If + past perfect, past future perfect",
          "    e.g: IF the weather had been nice, I would have gone to the beach.",
          "",
          "AVC OF MANNER — seolah-olah / seperti...",
          "Conjunction: as if, as though (seolah-olah), as (seperti), like (informal)",
          "",
          "  e.g: Nobody loves you LIKE I do.",
          "       She acted AS THOUGH he had never met her.",
        ],
      },
      {
        title: "C. Abridgement & Reducing dalam AVC",
        points: [
          "Berlaku untuk AVC of: time, place, contrast, reason/cause, manner.",
          "Syarat: S main clause = S sub clause + tidak ada modal setelah conjunction.",
          "",
          "ABRIDGEMENT (dengan conjunction):",
          "  Conj + V-ing = Verbal Active",
          "  Conj + V3   = Verbal Passive",
          "  Conj + ANA  = Non Verbal (adjective/noun/adverb)",
          "",
          "  e.g: When he is doing the housework, John turns on the radio.",
          "       → When DOING the housework, John turns on the radio. (Ving)",
          "",
          "       When he was invited to my party, he brought a teddy bear.",
          "       → When INVITED to my party, he brought a teddy bear. (V3)",
          "",
          "       Although she is sick, Yola goes to school.",
          "       → Although SICK, Yola goes to school. (ANA)",
          "",
          "REDUCING (tanpa conjunction):",
          "  V-ing          = Verbal Active",
          "  V3             = Verbal Passive",
          "  Being + ANA    = Non Verbal",
          "",
          "  e.g: When he was doing the housework, John turns on the radio.",
          "       → DOING the housework, John turns on the radio.",
          "",
          "       When he was invited to my party, he brought a teddy bear.",
          "       → INVITED to my party, he brought a teddy bear.",
        ],
      },
      {
        title: "Pengecualian AVC of Result, Purpose & Condition",
        points: [
          "AVC OF RESULT — Reducing:",
          "  adj/adv + ENOUGH + to inf",
          "    e.g: She is so old that she can travel alone.",
          "         → She is OLD ENOUGH TO TRAVEL alone.",
          "  TOO + adj/adv + to inf",
          "    e.g: John is so young that he must not watch that movie.",
          "         → John is TOO YOUNG TO WATCH that movie.",
          "  Abridgement: So + adj + as + to inf / Such + noun + as + to inf",
          "    e.g: Jack was so foolish that he left his car unlocked.",
          "         → Jack was SO FOOLISH AS TO LEAVE his car unlocked.",
          "         → Jack was SUCH A FOOLISH PERSON AS TO LEAVE his car unlocked.",
          "",
          "AVC OF PURPOSE — Reducing: 'to / in order to / so as to'",
          "  Syarat: S main clause = S sub clause + ada modal",
          "  e.g: John is studying math in order that he can qualify for a better job.",
          "       → John is studying math TO/IN ORDER TO/SO AS TO QUALIFY for a better job.",
          "",
          "AVC OF CONDITION — Omitting (Inversion):",
          "  Type 1 (dengan should): Should + S + V",
          "    e.g: If you should fall ill, we will pay your expenses.",
          "         → SHOULD you fall ill, we will pay your expenses.",
          "  Type 2: Were + S + to V / Should + S + V",
          "    e.g: If he were to ask her, she would surely help him.",
          "         → WERE he to ask her, she would surely help him.",
          "  Type 3: Had + S + V3",
          "    e.g: If he had known about her, he would have come.",
          "         → HAD he known about her, he would have come.",
        ],
      },
    ],
    exercises: [
      {
        id: "adv-g3-mc1",
        type: "multiple-choice",
        question: "She kept working ______ she was exhausted.",
        options: ["A. because", "B. even though", "C. so that", "D. unless"],
        correctAnswer: "B. even though",
        reason:
          "AVC of Contrast — concessive: 'even though' = meskipun. 'Kept working meskipun lelah' = kontras. 'Because' (sebab), 'so that' (tujuan), 'unless' (kondisi negatif).",
      },
      {
        id: "adv-g3-mc2",
        type: "multiple-choice",
        question:
          "She spoke very softly ______ she wouldn't wake the sleeping child.",
        options: ["A. because", "B. lest", "C. so that", "D. unless"],
        correctAnswer: "C. so that",
        reason:
          "AVC of Purpose (positive): 'so that' = agar/supaya. Berbicara pelan agar tidak membangunkan anak. 'Lest' = agar tidak (negative purpose, biasanya + should).",
      },
      {
        id: "adv-g3-mc3",
        type: "multiple-choice",
        question:
          "John is so young that he must not watch that movie. → Reducing yang benar?",
        options: [
          "A. John is young enough to watch that movie.",
          "B. John is too young to watch that movie.",
          "C. John is so young to watch that movie.",
          "D. John is young so as to watch that movie.",
        ],
        correctAnswer: "B. John is too young to watch that movie.",
        reason:
          "AVC of Result Reducing dengan makna NEGATIF/LARANGAN (must not): TOO + adj + to inf. 'Too young to watch' = terlalu muda sehingga tidak boleh menonton.",
      },
      {
        id: "adv-g3-mc4",
        type: "multiple-choice",
        question:
          "If you should need further information, please contact our office. → Inversion?",
        options: [
          "A. Were you to need further information, please contact our office.",
          "B. Had you needed further information, please contact our office.",
          "C. Should you need further information, please contact our office.",
          "D. Do you need further information, please contact our office.",
        ],
        correctAnswer:
          "C. Should you need further information, please contact our office.",
        reason:
          "AVC of Condition Type 1 dengan 'should' → inversion: SHOULD + S + V (hapus 'if', pindah 'should' ke depan). Type 1 inversion hanya bisa jika ada 'should'.",
      },
      {
        id: "adv-g3-mc5",
        type: "multiple-choice",
        question:
          "When she was invited to the gala, she wore her finest dress. → Abridgement (verbal passive)?",
        options: [
          "A. When inviting to the gala, she wore her finest dress.",
          "B. When invited to the gala, she wore her finest dress.",
          "C. Inviting to the gala, she wore her finest dress.",
          "D. Being invited to the gala, she wore her finest dress.",
        ],
        correctAnswer:
          "B. When invited to the gala, she wore her finest dress.",
        reason:
          "Abridgement AVC (dengan conjunction): Conj + V3 = verbal passive. 'When she was invited' → 'When invited' (hapus S+to be, conjunction tetap).",
      },
      {
        id: "adv-g3-mc6",
        type: "multiple-choice",
        question: "______ the meeting ended, they all left quickly.",
        options: ["A. So that", "B. Although", "C. As soon as", "D. Unless"],
        correctAnswer: "C. As soon as",
        reason:
          "AVC of Time: 'as soon as' = segera setelah. Urutan kejadian berturutan. 'So that' (tujuan), 'although' (kontras), 'unless' (kondisi negatif) tidak cocok.",
      },
      {
        id: "adv-g3-task",
        type: "task",
        section: "final",
        question:
          "A. Tentukan jenis AVC dan buat abridgement atau reducing:\n1. Although she is sick, she still goes to work.\n2. When he was walking in the park, he found a wallet.\n3. Because she was tired, she fell asleep immediately.\n\nB. Ubah ke bentuk inversion (AVC of Condition):\n4. If he had told me the truth, I would have forgiven him.\n5. If you should have any problems, call the helpdesk.\n\nC. Reducing AVC of Result:\n6. The exam was so difficult that nobody could finish it on time.",
        sampleAnswer:
          "A.\n1. AVC Contrast — Abridgement: Although sick, she still goes to work.\n2. AVC Time — Abridgement: When walking in the park, he found a wallet.\n   Reducing: Walking in the park, he found a wallet.\n3. AVC Cause — Abridgement: Being tired, she fell asleep immediately. (Non-verbal with Being)\n   Reducing: Tired, she fell asleep immediately.\n\nB.\n4. Had he told me the truth, I would have forgiven him. (Type 3)\n5. Should you have any problems, call the helpdesk. (Type 1)\n\nC.\n6. The exam was too difficult for anyone to finish on time.\n   OR: The exam was difficult enough that nobody could finish on time.",
      },
    ],
  },

  // ── Day 6 · Causative Verb ───────────────────────────────────────────────────
  {
    id: "adv-grammar-4b",
    track: "grammar",
    day: 6,
    tutor: "Ms. Vita",
    title: "Causative Verb",
    subtitle: "Get · Have · Make · Let · Help — Active & Passive",
    overview:
      "Causative Verb (CV) digunakan ketika subjek menyuruh/meminta/memaksa/mengizinkan orang lain melakukan sesuatu. Ada 5 jenis CV: Get (persuade), Have (ask), Make (force), Let (allow), Help (assist). Setiap verb punya formula Active dan Passive yang berbeda.",
    materialSections: [
      {
        title: "Pengertian & Ketentuan Causative Verb",
        points: [
          "Causative Verb (CV) = Verb makes someone do something",
          "Verb yg menyuruh/menyebabkan orang lain melakukan pekerjaan",
          "",
          "Types:",
          "Get (persuade) · Have (ask) · Make (force) · Let (allow) · Help (assist)",
          "",
          "Key Terms:",
          "Agent = orang/benda yg meminta, menyuruh",
          "Object = orang/benda yg diterima pekerjaan",
          "",
          "Ketentuan:",
          "→ Berlaku rumus khusus yg aktif & passive",
          "→ CV bisa diganti berdasarkan subject & bentuk tertennya",
          "→ Rumus bersifat absolut",
          "→ Beberapa jenis tidak bermakna asli",
          "→ Jk menggunakan verb yg bermakna asli maka menggunakan rumus biasa",
        ],
      },
      {
        title: "Get, Have, Make, Let, Help — Formula & Contoh",
        points: [
          "──1) GET → persuade (meyakinkan)──",
          "Active → S + Get + Agent + to-Inf + object:",
          "   'I get my friend to take my phone'",
          "   'the pilot got the passengers to sit / still'",
          "   'He gets the captain to lead the competition'",
          "Passive → S + get + object + V3 + (by Agent):",
          "   'the board will get the files reviewed by an accountant'",
          "   'the secretary has gotten the printer repaired immediately'",
          "",
          "──2) HAVE → meminta (ask)──",
          "Active → S + have + Agent + V1 (bare) + object:",
          "   'the security had the thief return the stealing stuff'",
          "   'the vice president has the people follow the rules'",
          "   'the designer had the sailors sew based on his design'",
          "Passive → S + have + object + V3 + (by Agent):",
          "   'the boys have their hair cut'",
          "   'I have my nails done'",
          "   'the technician has the machine sent'",
          "",
          "──3) MAKE → force (memaksa)──",
          "Active → S + make + Agent + V1 (bare) + object:",
          "   'they made the corruptors admit their mistake'",
          "   'my brother makes me memorize all of the formulas fast'",
          "Passive → S + make + object + V3 + (by Agent):",
          "   'the minister of finance will make the taxation rate increased'",
          "   'the poet has made her work accepted based on current circumstances'",
          "",
          "──4) LET → allow / permit (mengizinkan)──",
          "Active → S + let + Agent + V1 (bare) + object:",
          "   'I let my sister eat the candy'",
          "   'my mom lets the cat play in the garden'",
          "Passive → S + let + object + V3 + (by Agent):",
          "   'they will let the floor swept manually'",
          "   'the engineer has let the prototype copied by his junior'",
          "",
          "──5) HELP → assist (membantu)──",
          "⚠ Hanya Active — tidak ada passive causative",
          "Active → S + help + Agent + to-Inf / V1 (bare) + object:",
          "   'I help my mom carry / to carry the heavy stuff'",
          "   'She helps her friends arrange / to arrange the puzzle'",
          "",
          "──Ordinary Verb (non-causative)──",
          "→ It will be back to the usual formula",
          "→ All use to-V1 (active) / to be + V3 (passive):",
          "   'I persuade my sister to buy me some food.'",
          "   'they asked the box to be lifted in the trunk.'",
          "   'She forces her junior to ride a car.'",
          "   'He allowed his gadget to be checked.'",
        ],
      },
    ],
    exercises: [
      {
        id: "adv-g4-mc1",
        type: "multiple-choice",
        question: "I ______ my friend to take my phone.",
        options: ["A. made", "B. had", "C. got", "D. let"],
        correctAnswer: "C. got",
        reason:
          "GET active = S + Get + Agent + to-Inf. 'I get my friend to take' — langsung dari contoh papan tulis. GET pakai to-Inf, bukan V1 bare.",
      },
      {
        id: "adv-g4-mc2",
        type: "multiple-choice",
        question: "The boys have their hair ______.",
        options: ["A. cut", "B. cutting", "C. to cut", "D. cuts"],
        correctAnswer: "A. cut",
        reason:
          "HAVE passive = S + have + object + V3. 'Their hair' = object (benda), 'cut' = V3 (past participle). Dari contoh: 'the boys have their hair cut'.",
      },
      {
        id: "adv-g4-mc3",
        type: "multiple-choice",
        question: "They made the corruptors ______ their mistake.",
        options: ["A. admitting", "B. admitted", "C. to admit", "D. admit"],
        correctAnswer: "D. admit",
        reason:
          "MAKE active = S + make + Agent + V1 bare. 'The corruptors' = Agent, 'admit' = V1 bare (tidak pakai TO, tidak pakai -ing). Dari contoh papan tulis.",
      },
      {
        id: "adv-g4-mc4",
        type: "multiple-choice",
        question: "My mom lets the cat ______ in the garden.",
        options: ["A. to play", "B. played", "C. play", "D. playing"],
        correctAnswer: "C. play",
        reason:
          "LET active = S + let + Agent + V1 bare. 'The cat' = Agent, 'play' = V1 bare. LET tidak pakai TO infinitive. Dari contoh: 'my mom lets the cat play in the garden'.",
      },
      {
        id: "adv-g4-mc5",
        type: "multiple-choice",
        question: "She helps her friends ______ the puzzle.",
        options: ["A. arranges", "B. arranged", "C. arrange", "D. arranging"],
        correctAnswer: "C. arrange",
        reason:
          "HELP active = S + help + Agent + V1 bare / to-Inf. Kedua bentuk 'arrange' dan 'to arrange' benar. Dari contoh: 'She helps her friends arrange / to arrange the puzzle'.",
      },
      {
        id: "adv-g4-mc6",
        type: "multiple-choice",
        question: "The secretary has gotten the printer ______ immediately.",
        options: ["A. repair", "B. to repair", "C. repairing", "D. repaired"],
        correctAnswer: "D. repaired",
        reason:
          "GET passive = S + get + object + V3. 'The printer' = object (benda), 'repaired' = V3. Dari contoh: 'the secretary has gotten the printer repaired immediately'.",
      },
      {
        id: "adv-g4-mc7",
        type: "multiple-choice",
        question: "The engineer has let the prototype ______ by his junior.",
        options: ["A. copy", "B. to copy", "C. copied", "D. copying"],
        correctAnswer: "C. copied",
        reason:
          "LET passive = S + let + object + V3. 'The prototype' = object (benda), 'copied' = V3. Dari contoh: 'the engineer has let the prototype copied by his junior'.",
      },
      {
        id: "adv-g4-task",
        type: "task",
        section: "final",
        question:
          "Tulis 5 kalimat Causative Verb menggunakan verb yang berbeda-beda (GET, HAVE, MAKE, LET, HELP). Pilih active atau passive untuk setiap kalimat dan cantumkan label Agent/Object pada hasil tulisanmu.",
        sampleAnswer:
          "1. GET active: I got my friend to fix my laptop. (Agent = my friend, to-Inf = to fix)\n2. HAVE passive: She had her dress altered before the wedding. (Object = her dress, V3 = altered)\n3. MAKE active: The teacher made the students rewrite the essay. (Agent = the students, V1 = rewrite)\n4. LET active: My parents let me travel abroad alone. (Agent = me, V1 = travel)\n5. HELP active: He helped his brother carry / to carry the boxes. (Agent = his brother, V1/to-Inf = carry)",
      },
    ],
  },

  // ── Day 7 · Comparison Degree ────────────────────────────────────────────────
  {
    id: "adv-grammar-5",
    track: "grammar",
    day: 7,
    tutor: "Ms. Vita",
    title: "Comparison Degree",
    subtitle: "Positive · Comparative (b.1–b.4) · Superlative (c.1–c.3) · Inversion Alternatives",
    overview:
      "Comparison Degree (Perbandingan) terbagi tiga: Positive Degree (perbandingan setara — as...as), Comparative Degree (perbandingan tidak setara — -er/more/less + than), dan Superlative Degree (yang paling — the -est/most/least). Termasuk pola inversion alternatives pada bentuk komparatif.",
    materialSections: [
      {
        title: "Jenis-Jenis Comparison Degree",
        points: [
          "a) POSITIVE DEGREE  — Perbandingan Setara",
          "b) COMPARATIVE DEGREE — Perbandingan Tidak Setara",
          "c) SUPERLATIVE DEGREE — Yang Paling",
        ],
      },
      {
        title: "a) Positive Degree — Perbandingan Setara",
        points: [
          "Form:  as + Adj / Adv + as",
          "",
          "NB — pilih ADJ atau ADV:",
          "  • ADJ → pakai verb tobe (is, am, are, was, were, be, been)",
          "  • ADV → pakai verb aktif/pasif (does, did, has, will, ran, dll.)",
          "",
          "Contoh ADJ (verb tobe):",
          "{{alts: She is as smart as BJ Habibie. | as is BJ Habibie. | or BJ Habibie is.}}",
          "{{alts: Ms Salsa was as diligent as her sister. | as was her sister. | as her sister was.}}",
          "",
          "Contoh ADV (action verb):",
          "{{alts: She studies as smartly as BJ Habibie. | or does BJ Habibie. | or BJ Habibie does.}}",
          "{{alts: Mr Nabil ran as fast as the deer. | as did the deer. | as the deer did.}}",
          "",
          "Contoh lainnya:",
          "  → Burj Khalifa is as high as the Eiffel Tower.",
          "  → The demand increases the same as the supply.",
        ],
      },
      {
        title: "b) Comparative Degree — Perbandingan Tidak Setara",
        points: [
          "Form — Qualitative (Adj/Adv):",
          "  more + Adj/Adv + than   → lebih (prefix)",
          "  less  + Adj/Adv + than  → kurang",
          "  Adj/Adv + er    + than  → lebih (suffix, 1-2 suku kata)",
          "",
          "Form — Quantitative (Noun):",
          "  more / less + noun + than",
        ],
      },
      {
        title: "b.1) Adj/Adv + er + than  (1-2 suku kata)",
        points: [
          "Gunakan SUFFIX -er untuk adj/adv dengan 1-2 suku kata.",
          "",
          "{{alts: The kite flew higher than the plane. | than did the plane. | than the plane did.}}",
          "{{alts: Her dress looks prettier than my gown. | than does my gown. | than my gown does.}}",
          "{{alts: Yogurt has a higher percentage than milk. | than does milk. | than milk does.}}",
          "{{alts: She has been here longer than I (have). | than have I. | than I have.}}",
        ],
      },
      {
        title: "b.2) more + Adj/Adv + than  (2-3 suku kata)",
        points: [
          "Gunakan PREFIX more untuk adj/adv dengan 2-3+ suku kata.",
          "",
          "{{alts: She will finish the report more slowly than I (will). | than will I. | than I will.}}",
          "{{alts: He drove the car more quickly than I (did). | than did I. | than I did.}}",
          "{{alts: I get a more expensive price than she (does). | than does she. | than she does.}}",
        ],
      },
      {
        title: "b.3) less + Adj/Adv + than  (semua suku kata)",
        points: [
          "Gunakan less untuk menyatakan yang KURANG/LEBIH SEDIKIT kualitasnya.",
          "",
          "{{alts: She is more beautiful than Selena. | than is Selena. | than Selena is.}}",
          "{{alts: The temperature was less hot than the weather. | than was the weather. | than the weather was.}}",
          "  → The data are less favourable.",
          "  → My neighbours are less interesting than your neighbour.",
        ],
      },
      {
        title: "b.4) more/less + Noun + than  (Count & Uncountable)",
        points: [
          "Gunakan more/less sebelum NOUN (baik count maupun uncountable).",
          "",
          "{{alts: I earn much more money than you (do). | than do you. | than you do.}}",
          "  → Less people are interested in learning English.",
          "  → I read more books every day.",
          "  → She drank less water.",
        ],
      },
      {
        title: "c.1) the + Adj/Adv + est  (1-2 suku kata)",
        points: [
          "Superlative suffix: the + Adj/Adv + est (untuk 1-2 suku kata).",
          "",
          "  → Semeru has the highest peak of mountain in Jago.",
          "  → The lowest / deepest trench in the ocean is the Mariana Trench.",
          "  → This grocery store offers the cheapest price.",
          "  → Ferrari car is the fastest in F1.",
          "  → Mr Alga has the longest hair in the class.",
        ],
      },
      {
        title: "c.2) the most + Adj/Adv  (2-3+ suku kata)",
        points: [
          "Superlative prefix: the most + Adj/Adv (untuk 2-3+ suku kata).",
          "",
          "  → I got the most unforgettable memory in Pune.",
          "  → Germany experienced the most favourable conditions among others.",
          "  → Woman is the most complicated creature in the world.",
        ],
      },
      {
        title: "c.3) the least + Adj/Adv  (semua suku kata)",
        points: [
          "Superlative inferior: the least + Adj/Adv (semua suku kata).",
          "",
          "  → She is the least experienced candidate.",
          "  → Candle has the least bright light.",
          "  → The trend reached the least point in the final year.",
        ],
      },
      {
        title: "Kapan Pakai -er/-est?",
        points: [
          "1) Adj/Adv 1 SUKU KATA → SUFFIX -er/-est:",
          "   high → higher → the highest",
          "   low  → lower  → the lowest",
          "   cheap → cheaper → the cheapest",
          "   long  → longer  → the longest",
          "",
          "2) Adj 2 suku kata berakhiran -er, -y, -le, -ow, -some → SUFFIX atau PREFIX:",
          "   clever   → cleverer / more clever   — the cleverest / the most clever",
          "   pretty   → prettier / more pretty   — the prettiest / the most pretty",
          "   gentle   → gentler  / more gentle   — the gentlest  / the most gentle",
          "   narrow   → narrower / more narrow   — the narrowest / the most narrow",
          "   handsome → handsomer / more handsome — the handsomest / the most handsome",
          "",
          "3) Adj 3+ SUKU KATA → selalu PREFIX (more/most):",
          "   beautiful → more beautiful → the most beautiful",
        ],
      },
    ],
    exercises: [
      {
        id: "adv-g5-mc1",
        type: "multiple-choice",
        question: "The kite flew ______ the plane.",
        options: [
          "A. more high than",
          "B. the highest than",
          "C. higher than",
          "D. highest than",
        ],
        correctAnswer: "C. higher than",
        reason:
          "'High' = 1 suku kata → pakai SUFFIX -er: 'higher than'. 'More high' salah untuk adj 1 suku kata reguler. Comparative b.1.",
      },
      {
        id: "adv-g5-mc2",
        type: "multiple-choice",
        question: "He drove the car ______ I did.",
        options: [
          "A. more quickly as",
          "B. more quickly than",
          "C. most quickly than",
          "D. quicker than",
        ],
        correctAnswer: "B. more quickly than",
        reason:
          "'Quickly' = adv 3 suku kata → pakai PREFIX: 'more quickly than'. Comparative b.2. 'Quicker' salah untuk adverb 3 suku kata.",
      },
      {
        id: "adv-g5-mc3",
        type: "multiple-choice",
        question: "My neighbours are ______ yours.",
        options: [
          "A. less interesting as",
          "B. least interesting than",
          "C. less interesting than",
          "D. more less interesting",
        ],
        correctAnswer: "C. less interesting than",
        reason:
          "Comparative inferior: LESS + adj + THAN. 'Less interesting than' = kurang menarik daripada. Comparative b.3.",
      },
      {
        id: "adv-g5-mc4",
        type: "multiple-choice",
        question: "Ferrari car is ______ in F1.",
        options: [
          "A. most fast",
          "B. faster",
          "C. the fastest",
          "D. the most fastest",
        ],
        correctAnswer: "C. the fastest",
        reason:
          "Superlative 1 suku kata: the + adj + est. 'Fast' → 'the fastest'. Superlative selalu pakai 'the'. 'The most fastest' = double superlative (salah). c.1.",
      },
      {
        id: "adv-g5-mc5",
        type: "multiple-choice",
        question: "Woman is ______ creature in the world.",
        options: [
          "A. the most complicated",
          "B. the more complicated",
          "C. most complicated",
          "D. the complicatedest",
        ],
        correctAnswer: "A. the most complicated",
        reason:
          "Superlative 3+ suku kata: THE MOST + adj. 'Complicated' = 4 suku kata → 'the most complicated'. Superlative c.2.",
      },
      {
        id: "adv-g5-mc6",
        type: "multiple-choice",
        question: "She is as smart ______ BJ Habibie.",
        options: ["A. than", "B. as", "C. like", "D. with"],
        correctAnswer: "B. as",
        reason:
          "Positive degree: as + adj + AS. Kedua 'as' wajib digunakan. 'Than' untuk comparative, bukan positive degree.",
      },
      {
        id: "adv-g5-mc7",
        type: "multiple-choice",
        question: "I earn much more money than you ______.",
        options: ["A. does", "B. do", "C. did", "D. are"],
        correctAnswer: "B. do",
        reason:
          "Inversion alternative: 'than you do' = subjek (you) + auxiliary (do). Karena kalimat utama Present Simple dengan 'I earn', maka auxiliary = 'do'. Comparative b.4.",
      },
      {
        id: "adv-g5-task",
        type: "task",
        section: "final",
        question:
          "A. Lengkapi kalimat dengan bentuk comparison yang tepat:\n1. Burj Khalifa / high / Eiffel Tower (positive degree)\n2. She will finish the report / slowly / I will (comparative b.2)\n3. Ferrari car / fast / car in F1 (superlative c.1)\n4. Woman / complicated / creature in the world (superlative c.2)\n\nB. Tulis 2 inversion alternatives dari kalimat berikut:\n5. Her dress looks prettier than my gown.\n   → than _____ / than _____\n6. He drove the car more quickly than I did.\n   → than _____ / than _____\n\nC. Pilih bentuk yang BENAR:\n7. clever → ______ (comparative, 2 opsi boleh)\n8. beautiful → ______ (superlative)",
        sampleAnswer:
          "A.\n1. Burj Khalifa is as high as the Eiffel Tower. (as + adj + as)\n2. She will finish the report more slowly than I will. (more + adv + than)\n3. Ferrari car is the fastest car in F1. (the + adj + est, c.1)\n4. Woman is the most complicated creature in the world. (the most + adj, c.2)\n\nB.\n5. → than does my gown. / than my gown does.\n6. → than did I. / than I did.\n\nC.\n7. clever → cleverer (suffix) / more clever (prefix) — keduanya benar\n8. beautiful → the most beautiful (prefix, 3+ suku kata selalu prefix)",
      },
    ],
  },

  // ── Day 8 · Irregular & Double Comparative + Logical Comparison ─────────────
  {
    id: "adv-grammar-5b",
    track: "grammar",
    day: 8,
    tutor: "Ms. Vita",
    title: "Irregular Comparison · Double Comparative · Logical Comparison",
    subtitle: "Irregular Forms · DC I (sebab-akibat) · DC II (semakin…semakin…) · Perbandingan Setara",
    overview:
      "Melanjutkan materi Comparative Degree: bentuk irregular, Double Comparative (DC) I sebab-akibat dan DC II semakin…semakin…, serta Logical Comparison (Perbandingan Setara) dengan pronoun that/those dan ekspresi similar to, different from, the same as.",
    materialSections: [
      {
        title: "Irregular Comparison",
        points: [
          "Kata sifat/adverb berikut memiliki bentuk comparative dan superlative yang TIDAK BERATURAN:",
          "",
          "Word              | Comparative  | Superlative",
          "  good / well     | better       | the best",
          "  bad             | worse        | the worst",
          "  far             | farther      | the farthest",
          "  early           | earlier      | the earliest",
          "  soon            | sooner       | —",
          "",
          "Contoh kalimat:",
          "  → My score is better than your score.",
          "  → The worst accident happening is caused by human.",
          "  → The earliest human touching down on the moon is Neil Armstrong.",
        ],
      },
      {
        title: "Double Comparative (DC) I — Sebab-Akibat",
        points: [
          "DC I digunakan untuk menyatakan hubungan SEBAB-AKIBAT.",
          "",
          "Formula:",
          "  The + comparative (+S+V)  ,  the + comparative (+S+V)",
          "  ↑ sebab/kondisi                ↑ akibat/hasil",
          "",
          "Contoh:",
          "  → The sooner, the better.",
          "  → The more I chase you, the farther you are.",
          "              S      V              S        V",
          "  → The more we know someone's position, the more we can respect them.",
          "              S   V                                S       V",
          "  → The more you complain, the less chance you will get.",
          "              S     V                          S      V",
          "  → The cuter the stuff is, the greater number of customers.",
          "                    S    V          V",
          "",
          "Catatan: Jika tidak ada verb eksplisit, subjek dan verb tetap tersirat.",
          "  e.g: The sooner (, you leave), the better (, it is).",
        ],
      },
      {
        title: "Double Comparative (DC) II — Semakin…Semakin…",
        points: [
          "DC II digunakan untuk menyatakan sesuatu yang terus MENINGKAT atau MENURUN.",
          "",
          "Formula:",
          "  Comparative + and + comparative",
          "  (S + V + comparative + and + comparative)",
          "",
          "Contoh:",
          "  → She looks prettier and prettier.",
          "  → Mr. Lessan is getting more and more annoying.",
          "  → The visitors of Bali Island are more and more.",
          "  → Grammar becomes easier and easier.",
          "  → Her followers are getting lesser and lesser.",
          "",
          "Catatan penting:",
          "  • Jika 1 suku kata / -y → comparative + and + comparative:",
          "    prettier and prettier  |  harder and harder",
          "  • Jika 2+ suku kata → more and more + adj / less and less + adj:",
          "    more and more annoying  |  less and less popular",
        ],
      },
      {
        title: "Logical Comparison — Perbandingan Setara",
        points: [
          "Logical Comparison: membandingkan dua hal secara SETARA dan LOGIS.",
          "",
          "Gunakan THAT / THOSE untuk menggantikan noun agar perbandingan logis:",
          "  • THAT  → menggantikan noun SINGULAR",
          "  • THOSE → menggantikan noun PLURAL",
          "  Berlaku untuk comparative & positive degree.",
          "",
          "❌ SALAH:",
          "   The ears of elephants are wider than giraffe.",
          "   (membandingkan 'ears' ← → 'giraffe' — tidak logis!)",
          "",
          "✅ BENAR:",
          "   The ears of elephants are wider than those of giraffe.",
          "   (THOSE = the ears → plural, logis ✓)",
          "",
          "Contoh lainnya:",
          "  → The price of my bag is cheaper than that of your bag.",
          "    (THAT = the price → singular)",
          "  → My hometown environment is freer than that of yours.",
          "    (THAT = environment → singular)",
          "  → The movements of data in 1995 were as fluctuative as those of in 2004.",
          "    (THOSE = the movements → plural)",
          "  → The air quality in Indonesia is as bad as that in India.",
          "    (THAT = the air quality → singular)",
        ],
      },
      {
        title: "Similar Expressions — similar to · different from · the same as",
        points: [
          "Ekspresi berikut juga digunakan untuk perbandingan setara:",
          "",
          "similar to     = sama  →  subjek + be + similar to + that/those + of...",
          "different from = berbeda dari  →  subjek + be + different from + those/that + of...",
          "the same as    = sama dengan   →  subjek + be + the same as + that + in...",
          "",
          "Contoh:",
          "  → The size of my shoes is similar to that of yours.",
          "    (THAT = the size → singular)",
          "  → The colors of my drawing are different from those of yours.",
          "    (THOSE = the colors → plural)",
          "  → Indonesian economic condition is the same as that in Malaysia.",
          "    (THAT = Indonesian economic condition → singular)",
        ],
      },
    ],
    exercises: [
      {
        id: "adv-g5b-mc1",
        type: "multiple-choice",
        question: "The sooner you start, ______ you will finish.",
        options: [
          "A. the more early",
          "B. the earlier",
          "C. the earliest",
          "D. earlier",
        ],
        correctAnswer: "B. the earlier",
        reason:
          "DC I (sebab-akibat): The + comparative, the + comparative. 'Early' → irregular: earlier. Jawaban: B. The sooner…, the earlier…",
      },
      {
        id: "adv-g5b-mc2",
        type: "multiple-choice",
        question: "______ he complained, ______ help he received.",
        options: [
          "A. The more / the less",
          "B. More / less",
          "C. The most / the least",
          "D. The more / less",
        ],
        correctAnswer: "A. The more / the less",
        reason:
          "DC I: The + comparative, the + comparative. 'The more he complained, the less help he received.' Kedua bagian harus pakai 'the + comparative'. Jawaban: A.",
      },
      {
        id: "adv-g5b-mc3",
        type: "multiple-choice",
        question: "Traffic in this city is getting ______.",
        options: [
          "A. more and more worse",
          "B. worse and worse",
          "C. more worse and worse",
          "D. bad and bad",
        ],
        correctAnswer: "B. worse and worse",
        reason:
          "DC II (semakin...semakin...): comparative + and + comparative. 'Bad' → irregular comparative: worse. Jadi 'worse and worse'. 'More and more worse' salah (double). Jawaban: B.",
      },
      {
        id: "adv-g5b-mc4",
        type: "multiple-choice",
        question: "The population of Jakarta is larger than ______ of Surabaya.",
        options: ["A. it", "B. that", "C. those", "D. the population"],
        correctAnswer: "B. that",
        reason:
          "THAT menggantikan singular noun 'the population'. Logical comparison: membandingkan 'the population of Jakarta' (singular) → pakai THAT. THOSE untuk plural. Jawaban: B.",
      },
      {
        id: "adv-g5b-mc5",
        type: "multiple-choice",
        question: "The leaves of maple trees are more colorful than ______ of pine trees.",
        options: ["A. that", "B. it", "C. those", "D. the leaf"],
        correctAnswer: "C. those",
        reason:
          "THOSE menggantikan plural noun 'the leaves'. Logical comparison: membandingkan 'the leaves' (plural) → pakai THOSE. 'That' untuk singular. Jawaban: C.",
      },
      {
        id: "adv-g5b-mc6",
        type: "multiple-choice",
        question: "The design of my portfolio is ______ yours.",
        options: [
          "A. similar with",
          "B. same as",
          "C. similar to that of",
          "D. different with",
        ],
        correctAnswer: "C. similar to that of",
        reason:
          "'Similar to' (bukan 'similar with') + THAT OF untuk logical comparison (singular noun). Ekspresi yang benar: similar to that of. Jawaban: C.",
      },
      {
        id: "adv-g5b-mc7",
        type: "multiple-choice",
        question: "She is becoming ______ as her presentation skills improve.",
        options: [
          "A. more confident and more confident",
          "B. most and most confident",
          "C. more and more confident",
          "D. confident and confident",
        ],
        correctAnswer: "C. more and more confident",
        reason:
          "DC II untuk adj 2+ suku kata: more and more + adj. 'Confident' = 3 suku kata → 'more and more confident'. Bukan 'more confident and more confident'. Jawaban: C.",
      },
      {
        id: "adv-g5b-task",
        type: "task",
        section: "final",
        question:
          "A. Lengkapi kalimat DC I:\n1. The harder you study, ______ (good) your grades will be.\n2. ______ (many) people attend, the merrier it will be.\n3. The more she practised, ______ (fluent) she became.\n\nB. Ubah menjadi DC II:\n4. She sings well. Her singing improves every day. → She sings ______.\n5. The exam is becoming difficult. → The exam is becoming ______.\n\nC. Perbaiki logical comparison yang salah:\n6. The price of this hotel is higher than the other hotel.\n7. The results of the 2020 research are more accurate than the 2019 research.\n8. The air quality in Bali is as good as Jakarta.",
        sampleAnswer:
          "A.\n1. The harder you study, the better your grades will be.\n2. The more people attend, the merrier it will be.\n3. The more she practised, the more fluent she became.\n\nB.\n4. She sings better and better. (1 suku kata: well → better)\n5. The exam is becoming more and more difficult. (3 suku kata: 'more and more + adj')\n\nC.\n6. The price of this hotel is higher than THAT OF the other hotel. (THAT = the price, singular)\n7. The results of the 2020 research are more accurate than THOSE OF the 2019 research. (THOSE = the results, plural)\n8. The air quality in Bali is as good as THAT IN Jakarta. (THAT = the air quality, singular)",
      },
    ],
  },

  // ── Day 9 · Inversion ────────────────────────────────────────────────────────
  {
    id: "adv-grammar-6",
    track: "grammar",
    day: 9,
    tutor: "Ms. Vita",
    title: "Inversion",
    subtitle:
      "Negative Adverbials · Only + · So + Adj · Adverb of Place · Comparison",
    overview:
      "Inversion adalah pembalikan susunan kalimat dari S+V menjadi V aux + S + V ord (atau V+S). Digunakan untuk penekanan (emphasis), gaya formal/sastra, dan kondisi tertentu. Pelajari 5 jenis inversion berdasarkan trigger-nya.",
    materialSections: [
      {
        title: "Pengertian & Formula Inversion",
        points: [
          "INVERSION = pembalikan urutan kalimat",
          "Formula: V aux + Subject + V ord  ATAU  V + S",
          "",
          "Normal   : I have SELDOM heard this beautiful music.",
          "Inversion: SELDOM HAVE I heard this beautiful music.",
          "",
          "Normal   : We have NEVER witnessed such cruel behaviour.",
          "Inversion: NEVER HAVE WE witnessed such cruel behaviour.",
        ],
      },
      {
        title: "1) Negative Adverbials — Not only, Never, Seldom, dll.",
        points: [
          "Trigger: negative/restrictive adverbial di awal kalimat",
          "",
          "KELOMPOK A — Negative Adverbials:",
          "  Not only  | Never    | Not until | Seldom",
          "  Not once  | Rarely   | At no time| Barely",
          "  By no means | Scarcely | Nowhere | No sooner",
          "",
          "  e.g: We have NEVER witnessed such cruel behaviour to children.",
          "       → NEVER HAVE WE witnessed such cruel behaviour to children.",
          "",
          "  e.g: I have SELDOM heard this beautiful music throughout my life.",
          "       → SELDOM HAVE I heard this beautiful music throughout my life.",
        ],
      },
      {
        title: "2) ONLY + Phrase  &  3) So + Adjective / V-ing & V3",
        points: [
          "KELOMPOK B — ONLY + (adverbial phrase):",
          "  Only in  | Only on  | Only at   | Only by  | Only once",
          "  Only after| Only if | Only until| Only when| Only recently",
          "",
          "  e.g: You should crack the window only IN AN EMERGENCY.",
          "       → ONLY IN AN EMERGENCY, SHOULD YOU crack the window.",
          "",
          "  e.g: You should call a psychologist only IF you have a serious problem.",
          "       → ONLY IF YOU HAVE A SERIOUS PROBLEM, SHOULD YOU call a psychologist.",
          "",
          "KELOMPOK C — So + Adjective / Or Adjective / 'Ving & V3' (Adjective):",
          "",
          "  e.g: The scenery which Lawu Mountain provides IS WONDERFUL.",
          "       → WONDERFUL IS the scenery which Lawu Mountain provides.",
          "",
          "  e.g: The problems that we know in Indonesia are SO COMPLICATED.",
          "       → SO COMPLICATED ARE the problems that we know in Indonesia.",
        ],
      },
      {
        title: "4) Adverb of Place  &  5) Comparison Inversion",
        points: [
          "KELOMPOK D — Adverb of Place (di awal kalimat):",
          "",
          "  e.g: Religious and cultural diversity EXIST IN INDONESIA.",
          "       → IN INDONESIA EXIST religious and cultural diversity.",
          "",
          "  e.g: Titik Nol English Course IS IN FRONT OF Danis Bakery.",
          "       → IN FRONT OF DANIS BAKERY IS Titik Nol English Course.",
          "",
          "⚠ Pola: Adverb of Place + V/Be + S",
          "",
          "KELOMPOK E — Comparison (Positive & Comparative):",
          "",
          "  e.g: He looks as smart AS HABIBIE (does).",
          "       → He looks as smart AS DOES HABIBIE.",
          "",
          "  e.g: She is lazier than HER SISTER (is).",
          "       → She is lazier than IS HER SISTER.",
          "",
          "⚠ Inversion dalam comparison: auxiliary dipindah sebelum noun",
        ],
      },
    ],
    exercises: [
      {
        id: "adv-g6-mc1",
        type: "multiple-choice",
        question:
          '"I have seldom heard this beautiful music." → Inversion yang benar?',
        options: [
          "A. Seldom I have heard this beautiful music.",
          "B. Seldom have I heard this beautiful music.",
          "C. Seldom heard I have this beautiful music.",
          "D. I seldom heard have this beautiful music.",
        ],
        correctAnswer: "B. Seldom have I heard this beautiful music.",
        reason:
          "Negative Adverbial Inversion: SELDOM + Aux(have) + S(I) + V(heard). Pola: Neg. Adv. + Aux + S + V ord.",
      },
      {
        id: "adv-g6-mc2",
        type: "multiple-choice",
        question:
          '"You should crack the window only in an emergency." → Inversion yang benar?',
        options: [
          "A. Only in an emergency you should crack the window.",
          "B. Only in an emergency should you crack the window.",
          "C. Only in an emergency crack you should the window.",
          "D. Should only in an emergency you crack the window.",
        ],
        correctAnswer: "B. Only in an emergency should you crack the window.",
        reason:
          "ONLY + Phrase Inversion: Only in an emergency + SHOULD + S + V. Auxiliary 'should' dipindah sebelum subject.",
      },
      {
        id: "adv-g6-mc3",
        type: "multiple-choice",
        question:
          '"The problems in Indonesia are so complicated." → Inversion yang benar?',
        options: [
          "A. So complicated the problems in Indonesia are.",
          "B. So complicated are the problems in Indonesia.",
          "C. Are so complicated the problems in Indonesia.",
          "D. The problems so complicated in Indonesia are.",
        ],
        correctAnswer: "B. So complicated are the problems in Indonesia.",
        reason:
          "So + Adjective Inversion: SO COMPLICATED + ARE (be/aux) + S. Pola: So + adj + V/be + S.",
      },
      {
        id: "adv-g6-mc4",
        type: "multiple-choice",
        question:
          '"Titik Nol English Course is in front of Danis Bakery." → Inversion yang benar?',
        options: [
          "A. In front of Danis Bakery Titik Nol English Course is.",
          "B. In front of Danis Bakery is Titik Nol English Course.",
          "C. Is Titik Nol English Course in front of Danis Bakery.",
          "D. Danis Bakery in front is Titik Nol English Course.",
        ],
        correctAnswer:
          "B. In front of Danis Bakery is Titik Nol English Course.",
        reason:
          "Adverb of Place Inversion: Adv. of Place + V/Be + S. 'In front of Danis Bakery' + 'is' + 'Titik Nol English Course'.",
      },
      {
        id: "adv-g6-mc5",
        type: "multiple-choice",
        question:
          '"She is lazier than her sister." → Comparison Inversion yang benar?',
        options: [
          "A. She is lazier than her sister is.",
          "B. She is lazier than is her sister.",
          "C. She is lazier than does her sister.",
          "D. She is lazier than her sister does.",
        ],
        correctAnswer: "B. She is lazier than is her sister.",
        reason:
          "Comparison Inversion: auxiliary/be dipindah sebelum noun. 'than her sister (is)' → 'than IS her sister'. Pola: than/as + Aux + S.",
      },
      {
        id: "adv-g6-mc6",
        type: "multiple-choice",
        question: "______ have we seen such dedication to the craft.",
        options: [
          "A. Rarely",
          "B. Only rarely",
          "C. Never before",
          "D. Semua benar (A, B, dan C bisa digunakan)",
        ],
        correctAnswer: "D. Semua benar (A, B, dan C bisa digunakan)",
        reason:
          "'Rarely', 'Only rarely', dan 'Never before' semua adalah negative/restrictive adverbials yang memicu inversion (Aux + S + V). Ketiganya grammatically correct.",
      },
      {
        id: "adv-g6-task",
        type: "task",
        section: "final",
        question:
          "Ubah kalimat berikut menggunakan Inversion yang tepat:\n\n1. I have never eaten such delicious food in my life.\n2. Religious diversity exists in this country.\n3. You should call the emergency number only if you have a real emergency.\n4. The mountain view is so breathtaking.\n5. He looks as tall as his father (does).\n6. Titik Nol English Course is near Brawijaya Street.",
        sampleAnswer:
          "1. Never have I eaten such delicious food in my life. (Negative Adverbial)\n2. In this country exists religious diversity. (Adverb of Place)\n3. Only if you have a real emergency should you call the emergency number. (Only + if)\n4. So breathtaking is the mountain view. (So + Adjective)\n5. He looks as tall as does his father. (Comparison Inversion)\n6. Near Brawijaya Street is Titik Nol English Course. (Adverb of Place)",
      },
    ],
  },

  // ── Day 9 · Conditional Sentence ─────────────────────────────────────────────
  {
    id: "adv-grammar-7",
    track: "grammar",
    day: 10,
    tutor: "Ms. Vita",
    title: "Conditional Sentence",
    subtitle:
      "Type 1 · Type 2 · Type 3 · Mixed — Kalimat Pengandaian & Inversion",
    overview:
      "Conditional Sentence menyatakan hubungan sebab-akibat berdasarkan kondisi. Type 1 (probabilitas nyata), Type 2 (andaian masa kini — tidak nyata), Type 3 (menyesal tentang masa lalu). Termasuk conditional inversion (tanpa 'if') dan mixed conditional.",
    materialSections: [
      {
        title: "Type 1 — Real Condition (Probability)",
        points: [
          "TYPE 1 — Menunjukkan KEMUNGKINAN yang AKAN TERJADI (~90%)",
          "",
          "Formula: IF + Simple Present, Simple Future / Present",
          "",
          "  e.g: IF I go out, I'll buy newspaper.",
          "       Fact: mungkin saya keluar, mungkin tidak.",
          "",
          "Modal 'will' dalam result clause bisa diganti dengan:",
          "1. Possibility: may / might",
          "   If the fog gets thicker, the plane MAY/MIGHT be diverted.",
          "",
          "2. Permission: may / can",
          "   If it stops snowing, we CAN go out.",
          "",
          "3. Command/advisability: must, should, had better",
          "   If you want to lose weight, you HAD BETTER eat less bread.",
          "",
          "Conditional Inversion Type 1 (dengan SHOULD):",
          "  If you SHOULD fall ill, we will pay your expenses.",
          "  → SHOULD you fall ill, we will pay your expenses.",
        ],
      },
      {
        title: "Type 2 — Unreal Present Condition",
        points: [
          "TYPE 2 — Kondisi TIDAK NYATA / HIPOTESIS di masa kini atau masa depan",
          "",
          "Formula: IF + Simple Past, Past Future (would/could/might + V1)",
          "",
          "  e.g: IF he got up earlier, he wouldn't be late for work.",
          "       Fact: He doesn't get up earlier, so he is late for work.",
          "",
          "  e.g: IF she had more time, she could finish the project.",
          "       Fact: She doesn't have more time, so she can't finish it.",
          "",
          "⚠ Aturan penting Type 2:",
          "   'BE' dalam if-clause HARUS 'WERE' (semua subject — formal)",
          "   IF I WERE you, I would apologize.",
          "   IF he WERE rich, he would travel the world.",
          "   (dalam percakapan informal boleh 'was')",
          "",
          "'Would' bisa diganti: could, might",
          "",
          "Conditional Inversion Type 2:",
          "  If he WERE to ask her, she would surely help him.",
          "  → WERE he to ask her, she would surely help him.",
        ],
      },
      {
        title: "Type 3 — Unreal Past Condition (Regret)",
        points: [
          "TYPE 3 — Kondisi TIDAK NYATA / MENYESAL tentang masa lalu",
          "",
          "Formula: IF + Past Perfect (had + V3), Past Future Perfect",
          "         (would/could/might + have + V3)",
          "",
          "  e.g: IF the weather had been nice yesterday, I would have gone to the beach.",
          "       Fact: The weather wasn't nice, so I didn't go to the beach.",
          "",
          "  e.g: IF she hadn't been late, she could have caught the last train.",
          "       Fact: She was late, so she missed the train.",
          "",
          "'Would have' bisa diganti: could have, might have",
          "",
          "Conditional Inversion Type 3 (HAD):",
          "  If he HAD KNOWN about her, he would have come.",
          "  → HAD he known about her, he would have come.",
        ],
      },
      {
        title: "Mixed Conditional & Ringkasan",
        points: [
          "MIXED CONDITIONAL — Kondisi masa LALU, hasil masa KINI:",
          "Formula: IF + Past Perfect (had + V3), would + V1",
          "",
          "  e.g: IF I had taken that job offer, I would be rich NOW.",
          "       (Dulu: tidak ambil tawaran → Sekarang: tidak kaya)",
          "",
          "  e.g: IF she had moved to London, she would know the city well now.",
          "",
          "═══ RINGKASAN SEMUA TYPE ═══",
          "  Type 1 : If + V1 (present), will/can/may + V1",
          "           → Conditional inversion: SHOULD + S + V",
          "",
          "  Type 2 : If + V2/were, would/could/might + V1",
          "           → Conditional inversion: WERE + S + to V",
          "",
          "  Type 3 : If + had + V3, would/could/might + have + V3",
          "           → Conditional inversion: HAD + S + V3",
          "",
          "  Mixed  : If + had + V3, would + V1 (past cond → present result)",
        ],
      },
    ],
    exercises: [
      {
        id: "adv-g7-mc1",
        type: "multiple-choice",
        question: "If the fog gets thicker, the plane ______ be diverted.",
        options: ["A. will", "B. would", "C. may", "D. had"],
        correctAnswer: "C. may",
        reason:
          "Type 1 dengan possibility: 'may/might' menggantikan 'will' untuk menyatakan kemungkinan. 'If the fog gets thicker' = Simple Present → result bisa pakai will/may/might. Contoh langsung dari modul.",
      },
      {
        id: "adv-g7-mc2",
        type: "multiple-choice",
        question: "If he ______ up earlier, he wouldn't be late for work.",
        options: ["A. gets", "B. got", "C. had gotten", "D. will get"],
        correctAnswer: "B. got",
        reason:
          "Type 2 (unreal present): 'wouldn't be' = past future → if-clause pakai Simple Past 'got'. Fact: He doesn't get up earlier. Contoh langsung dari modul.",
      },
      {
        id: "adv-g7-mc3",
        type: "multiple-choice",
        question:
          "If the weather ______ nice yesterday, I would have gone to the beach.",
        options: ["A. was", "B. were", "C. had been", "D. has been"],
        correctAnswer: "C. had been",
        reason:
          "Type 3 (unreal past): 'would have gone' = past future perfect → if-clause pakai Past Perfect 'had been'. Menyatakan penyesalan tentang masa lalu. Contoh langsung dari modul.",
      },
      {
        id: "adv-g7-mc4",
        type: "multiple-choice",
        question: "If I were you, I ______ apologize immediately.",
        options: ["A. will", "B. would", "C. had", "D. have"],
        correctAnswer: "B. would",
        reason:
          "Type 2 (unreal present): If + were (be → were untuk semua subject) → result: would/could/might + V1. 'Would apologize' ✓.",
      },
      {
        id: "adv-g7-mc5",
        type: "multiple-choice",
        question:
          '"If he had known about her, he would have come." → Conditional Inversion?',
        options: [
          "A. Should he known about her, he would have come.",
          "B. Were he known about her, he would have come.",
          "C. Had he known about her, he would have come.",
          "D. Would he have known about her, he would have come.",
        ],
        correctAnswer: "C. Had he known about her, he would have come.",
        reason:
          "Type 3 Inversion: HAD + S + V3 (tanpa 'if'). 'If he had known' → 'HAD he known'. Contoh langsung dari modul.",
      },
      {
        id: "adv-g7-mc6",
        type: "multiple-choice",
        question:
          "If I had invested in that startup years ago, I ______ a millionaire now.",
        options: [
          "A. would have been",
          "B. would be",
          "C. will be",
          "D. had been",
        ],
        correctAnswer: "B. would be",
        reason:
          "MIXED Conditional: kondisi masa lalu (had invested) → hasil masa KINI (now). Result clause = would + V1 (bukan 'would have been' yang untuk Type 3 murni).",
      },
      {
        id: "adv-g7-task",
        type: "task",
        section: "final",
        question:
          "A. Tentukan TYPE Conditional dan lengkapi kalimat:\n1. If it ______ (stop) snowing, we can go out.\n2. If he ______ (be) more careful, he wouldn't have made that mistake.\n3. If you ______ (should) need any assistance, please don't hesitate to call.\n\nB. Ubah ke Conditional Inversion (tanpa 'if'):\n4. If you should have any questions, feel free to ask.\n5. If I were the president, I would change this policy.\n6. If she had studied harder, she would have passed the exam.\n\nC. Mixed Conditional:\n7. If he had taken better care of his health, he ______ (feel) healthier now.",
        sampleAnswer:
          "A.\n1. stops → Type 1 (if + present, can + V1)\n2. had been → Type 3 (if + past perfect, wouldn't have made)\n3. should need → Type 1 dengan 'should' (kemungkinan yang sewaktu-waktu terjadi)\n\nB.\n4. Should you have any questions, feel free to ask. (Type 1 inversion)\n5. Were I the president, I would change this policy. (Type 2 inversion)\n6. Had she studied harder, she would have passed the exam. (Type 3 inversion)\n\nC.\n7. would feel (Mixed: had + V3 → would + V1 untuk hasil masa kini 'now')",
      },
    ],
  },
];

export { advanceGrammarLessons };
