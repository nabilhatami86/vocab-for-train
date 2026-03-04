// Bank soal latihan acak Post Test Grammar — berbasis kisi-kisi
// 3 Part: I=Correct Phrase (adjective order), II=Conjunction & Preposition, III=Translation
// Setiap sesi: ambil 7 dari Part I + 7 dari Part II + 6 dari Part III = 20 soal

export type PostTestQuestion = {
  id: string;
  part: "I" | "II" | "III";
  partLabel: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  reason: string;
};

export const postTestGrammarPool: PostTestQuestion[] = [

  // ═══════════════════════════════════════════════════════════════
  // PART I — CORRECT PHRASE (urutan adjective dalam noun phrase)
  // ═══════════════════════════════════════════════════════════════

  {
    id: "rp1_01",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'She carried _____ to the meeting.'",
    options: [
      "a brown heavy old briefcase",
      "a heavy old brown briefcase",
      "heavy brown a old briefcase",
      "an old brown heavy briefcase",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Size/Weight (heavy) → Age (old) → Color (brown) → Noun. 'A heavy old brown briefcase' benar. Bobot/ukuran mendahului usia, usia mendahului warna.",
  },
  {
    id: "rp1_02",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'We visited _____ during our trip to Rome.'",
    options: [
      "an ancient famous marble fountain",
      "a marble ancient famous fountain",
      "a famous ancient marble fountain",
      "famous ancient a marble fountain",
    ],
    correctIndex: 2,
    reason:
      "Urutan adjective: Opinion (famous) → Age (ancient) → Material (marble) → Noun. 'A famous ancient marble fountain' benar. Opinion selalu paling awal.",
  },
  {
    id: "rp1_03",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'He drives _____ to work every day.'",
    options: [
      "a black large German car",
      "a large black German car",
      "a German large black car",
      "large a black German car",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Size (large) → Color (black) → Origin (German) → Noun. 'A large black German car' mengikuti Size → Color → Origin.",
  },
  {
    id: "rp1_04",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'She received _____ on her birthday.'",
    options: [
      "a little lovely silver necklace",
      "a lovely silver little necklace",
      "silver a lovely little necklace",
      "a lovely little silver necklace",
    ],
    correctIndex: 3,
    reason:
      "Urutan adjective: Opinion (lovely) → Size (little) → Material (silver) → Noun. 'A lovely little silver necklace' benar: Opinion → Size → Material.",
  },
  {
    id: "rp1_05",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'The chef prepared _____.'",
    options: [
      "a fresh Italian delicious pasta",
      "a delicious fresh Italian pasta",
      "Italian delicious a fresh pasta",
      "a fresh delicious Italian pasta",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Opinion (delicious) → Quality (fresh) → Origin (Italian) → Noun. 'Delicious' sebagai penilaian subjektif diletakkan sebelum 'fresh' yang lebih faktual.",
  },
  {
    id: "rp1_06",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Which noun phrase uses the CORRECT adjective order?",
    options: [
      "a round small wooden table",
      "a wooden small round table",
      "a small round wooden table",
      "small round a wooden table",
    ],
    correctIndex: 2,
    reason:
      "Urutan adjective: Size (small) → Shape (round) → Material (wooden) → Noun. 'A small round wooden table' benar. Size sebelum Shape, Shape sebelum Material.",
  },
  {
    id: "rp1_07",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'My uncle has _____ in the garage.'",
    options: [
      "two rusty old red bicycles",
      "two old rusty red bicycles",
      "two red old rusty bicycles",
      "two old red rusty bicycles",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Quantity (two) → Age (old) → Quality/state (rusty) → Color (red) → Noun. 'Two old rusty red bicycles' benar: Age → State → Color.",
  },
  {
    id: "rp1_08",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'She wore _____ to the ceremony.'",
    options: [
      "a long white beautiful evening dress",
      "a beautiful white long evening dress",
      "a white beautiful long evening dress",
      "a beautiful long white evening dress",
    ],
    correctIndex: 3,
    reason:
      "Urutan adjective: Opinion (beautiful) → Size/length (long) → Color (white) → Type (evening) → Noun. 'A beautiful long white evening dress' benar.",
  },
  {
    id: "rp1_09",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Which noun phrase uses the CORRECT adjective order?",
    options: [
      "an old stunning red brick building",
      "a red stunning old brick building",
      "a stunning old red brick building",
      "a stunning red old brick building",
    ],
    correctIndex: 2,
    reason:
      "Urutan adjective: Opinion (stunning) → Age (old) → Color (red) → Material (brick) → Noun. 'A stunning old red brick building' mengikuti urutan baku.",
  },
  {
    id: "rp1_10",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'The children found _____.'",
    options: [
      "a tiny cute fluffy white puppy",
      "a cute tiny fluffy white puppy",
      "a white fluffy cute tiny puppy",
      "a fluffy cute tiny white puppy",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Opinion (cute) → Size (tiny) → Quality/texture (fluffy) → Color (white) → Noun. 'A cute tiny fluffy white puppy' benar.",
  },
  {
    id: "rp1_11",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Which noun phrase uses the CORRECT adjective order?",
    options: [
      "a green old small plastic bottle",
      "a small old green plastic bottle",
      "an old small green plastic bottle",
      "green old a small plastic bottle",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Size (small) → Age (old) → Color (green) → Material (plastic) → Noun. 'A small old green plastic bottle' benar: Size → Age → Color → Material.",
  },
  {
    id: "rp1_12",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'The antique shop has _____.'",
    options: [
      "a small beautiful Chinese vase",
      "a Chinese beautiful small vase",
      "a beautiful small Chinese vase",
      "a small Chinese beautiful vase",
    ],
    correctIndex: 2,
    reason:
      "Urutan adjective: Opinion (beautiful) → Size (small) → Origin (Chinese) → Noun. 'A beautiful small Chinese vase' benar: Opinion → Size → Origin.",
  },
  {
    id: "rp1_13",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'She is reading _____.'",
    options: [
      "an old interesting thick Russian novel",
      "an interesting thick old Russian novel",
      "a Russian interesting old thick novel",
      "a thick old Russian interesting novel",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Opinion (interesting) → Size (thick) → Age (old) → Origin (Russian) → Noun. 'An interesting thick old Russian novel' benar.",
  },
  {
    id: "rp1_14",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Which noun phrase uses the CORRECT adjective order?",
    options: [
      "a modern three-storey glass office building",
      "a three-storey modern glass office building",
      "a glass modern three-storey office building",
      "modern glass three-storey a office building",
    ],
    correctIndex: 0,
    reason:
      "Urutan adjective: Opinion (modern) → Size (three-storey) → Material (glass) → Type (office) → Noun. 'A modern three-storey glass office building' benar.",
  },
  {
    id: "rp1_15",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'He bought _____ for his mother.'",
    options: [
      "a yellow silk thin long scarf",
      "a thin long yellow silk scarf",
      "a long thin yellow silk scarf",
      "yellow thin a long silk scarf",
    ],
    correctIndex: 2,
    reason:
      "Urutan adjective: Size (long) → Size/width (thin) → Color (yellow) → Material (silk) → Noun. Ketika ada 2 size adjective, yang lebih umum (long) didahulukan.",
  },
  {
    id: "rp1_16",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'My grandmother makes _____.'",
    options: [
      "small warm round delicious cookies",
      "warm small delicious round cookies",
      "delicious small warm round cookies",
      "round delicious small warm cookies",
    ],
    correctIndex: 2,
    reason:
      "Urutan adjective: Opinion (delicious) → Size (small) → Quality (warm) → Shape (round) → Noun. 'Delicious' sebagai opinion paling subjektif → paling depan.",
  },
  {
    id: "rp1_17",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Choose the CORRECT phrase to complete: 'The museum displayed _____.'",
    options: [
      "an ancient Chinese valuable vase",
      "a valuable ancient Chinese vase",
      "an ancient valuable Chinese vase",
      "Chinese a valuable ancient vase",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Opinion (valuable) → Age (ancient) → Origin (Chinese) → Noun. 'A valuable ancient Chinese vase' benar: Opinion selalu mendahului Age dan Origin.",
  },
  {
    id: "rp1_18",
    part: "I",
    partLabel: "Correct Phrase",
    question: "Which noun phrase uses the CORRECT adjective order?",
    options: [
      "a lovely round silver bracelet",
      "a round lovely silver bracelet",
      "a silver round lovely bracelet",
      "lovely round silver a bracelet",
    ],
    correctIndex: 0,
    reason:
      "Urutan adjective: Opinion (lovely) → Shape (round) → Material (silver) → Noun. 'A lovely round silver bracelet' benar: Opinion → Shape → Material.",
  },

  // ═══════════════════════════════════════════════════════════════
  // PART II — CORRELATIVE CONJUNCTIONS & PREPOSITIONS
  // ═══════════════════════════════════════════════════════════════

  {
    id: "rp2_01",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "Neither my brother _____ my sister _____ staying home tonight.",
    options: ["or, is", "nor, are", "nor, is", "and, is"],
    correctIndex: 2,
    reason:
      "Neither...nor → verb agreement mengikuti subjek PALING DEKAT: 'my sister' (singular) → 'is'. Jawaban: 'nor, is'.",
  },
  {
    id: "rp2_02",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "Not only the boys but also Maria _____ invited to the party.",
    options: ["are", "were", "is", "have been"],
    correctIndex: 2,
    reason:
      "Not only...but also → verb agreement mengikuti subjek paling dekat: 'Maria' (singular) → 'is invited'.",
  },
  {
    id: "rp2_03",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "Both the cat _____ the dog _____ sleeping on the sofa.",
    options: ["and, is", "or, are", "and, are", "nor, is"],
    correctIndex: 2,
    reason:
      "'Both...and' menggabungkan 2 subjek → selalu plural → 'are'. Pola: Both A and B + plural verb.",
  },
  {
    id: "rp2_04",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "She is very passionate _____ teaching young children.",
    options: ["for", "to", "about", "in"],
    correctIndex: 2,
    reason:
      "Collocation tetap: 'passionate ABOUT'. 'Passionate about' = sangat bersemangat tentang sesuatu. Jangan tertukar dengan 'interested IN'.",
  },
  {
    id: "rp2_05",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "This painting is very similar _____ the one in the museum.",
    options: ["with", "from", "as", "to"],
    correctIndex: 3,
    reason:
      "Collocation tetap: 'similar TO'. Jangan tertukar dengan 'different FROM' (berbeda dari). 'Similar to' = mirip dengan.",
  },
  {
    id: "rp2_06",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "The students are responsible _____ keeping the classroom clean.",
    options: ["of", "for", "about", "at"],
    correctIndex: 1,
    reason:
      "Collocation tetap: 'responsible FOR'. 'Responsible for + noun/gerund' = bertanggung jawab atas sesuatu.",
  },
  {
    id: "rp2_07",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "The bus will depart from the terminal _____ Bandung _____ 06.30.",
    options: ["to, in", "at, to", "to, at", "for, on"],
    correctIndex: 2,
    reason:
      "'Depart TO' = berangkat menuju tujuan. 'At 06.30' = waktu spesifik (jam) → pakai 'at'. Jawaban: 'to, at'.",
  },
  {
    id: "rp2_08",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "Neither the teachers _____ the principal _____ aware of the problem.",
    options: ["nor, was", "nor, were", "and, were", "or, was"],
    correctIndex: 0,
    reason:
      "Neither...nor → verb agreement mengikuti subjek paling dekat: 'the principal' (singular) → 'was'. Jawaban: 'nor, was'.",
  },
  {
    id: "rp2_09",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "Not only the students but also the teacher _____ confused by the question.",
    options: ["are", "were", "is", "have been"],
    correctIndex: 2,
    reason:
      "Not only...but also → subjek paling dekat: 'the teacher' (singular) → 'is'. Jika 'the teachers' (plural), maka 'are'.",
  },
  {
    id: "rp2_10",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "I was born _____ 1999 _____ a small town in West Java.",
    options: ["on, in", "in, in", "at, in", "in, at"],
    correctIndex: 1,
    reason:
      "'In 1999' = tahun → IN. 'In a small town' = tempat yang lebih luas (town/city/country) → IN. Keduanya pakai 'in'.",
  },
  {
    id: "rp2_11",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "The concert will be held _____ Saturday _____ the Grand Hall.",
    options: ["at, on", "on, in", "in, at", "on, at"],
    correctIndex: 1,
    reason:
      "'On Saturday' = hari tertentu → ON. 'In the Grand Hall' = di dalam gedung/ruangan → IN. Jawaban: 'on, in'.",
  },
  {
    id: "rp2_12",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "She depends _____ her older sister for many things.",
    options: ["at", "for", "on", "about"],
    correctIndex: 2,
    reason:
      "Collocation tetap: 'depend ON'. 'Depend on someone/something' = bergantung pada. Jangan pakai 'depend at/for'.",
  },
  {
    id: "rp2_13",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "Both the manager _____ the supervisor _____ approved the new policy.",
    options: ["or, have", "and, have", "and, has", "or, has"],
    correctIndex: 1,
    reason:
      "'Both...and' menggabungkan dua subjek → selalu plural verb → 'have approved'. Pola: Both A and B + plural verb.",
  },
  {
    id: "rp2_14",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "My friend is very good _____ memorizing vocabulary.",
    options: ["in", "for", "about", "at"],
    correctIndex: 3,
    reason:
      "Collocation tetap: 'good AT'. 'Good at + gerund/noun' = mahir dalam sesuatu. Jangan pakai 'good in' untuk skill/ability.",
  },
  {
    id: "rp2_15",
    part: "II",
    partLabel: "Conjunction & Preposition",
    question: "The meeting will start _____ 10 a.m. _____ Monday.",
    options: ["at, in", "on, at", "at, on", "in, on"],
    correctIndex: 2,
    reason:
      "'At 10 a.m.' = waktu spesifik (jam) → AT. 'On Monday' = hari tertentu → ON. Jawaban: 'at, on'.",
  },

  // ═══════════════════════════════════════════════════════════════
  // PART III — TRANSLATE TO ENGLISH (urutan adjective)
  // ═══════════════════════════════════════════════════════════════

  {
    id: "rp3_01",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Kami melihat banyak kupu-kupu berwarna-warni yang indah di taman.'",
    options: [
      "We saw many colorful beautiful butterflies in the garden.",
      "We saw many beautiful colorful butterflies in the garden.",
      "We saw beautiful many colorful butterflies in the garden.",
      "We saw many butterflies beautiful colorful in the garden.",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Quantity (many) → Opinion (beautiful) → Color/quality (colorful) → Noun. Opinion (beautiful) mendahului color (colorful) dalam urutan baku.",
  },
  {
    id: "rp3_02",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Dia memakai sebuah gaun sutra merah panjang yang elegan.'",
    options: [
      "She wore a long elegant red silk dress.",
      "She wore a red long elegant silk dress.",
      "She wore an elegant long red silk dress.",
      "She wore elegant a long red silk dress.",
    ],
    correctIndex: 2,
    reason:
      "Urutan adjective: Opinion (elegant) → Size (long) → Color (red) → Material (silk) → Noun. 'An elegant long red silk dress' benar. 'An' karena 'elegant' berbunyi vokal /ɛ/.",
  },
  {
    id: "rp3_03",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Ada sebuah mobil sport merah kecil yang mahal di depan rumah.'",
    options: [
      "There is a small expensive red sports car in front of the house.",
      "There is a red expensive small sports car in front of the house.",
      "There is a small red expensive sports car in front of the house.",
      "There is an expensive small red sports car in front of the house.",
    ],
    correctIndex: 3,
    reason:
      "Urutan adjective: Opinion (expensive) → Size (small) → Color (red) → Noun. 'An expensive small red sports car' benar. 'An' karena 'expensive' berbunyi vokal /ɛ/.",
  },
  {
    id: "rp3_04",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Mereka membangun sebuah gedung beton modern yang tinggi.'",
    options: [
      "They built a modern tall concrete building.",
      "They built a tall modern concrete building.",
      "They built a concrete tall modern building.",
      "They built modern concrete a tall building.",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Size (tall) → Opinion (modern) → Material (concrete) → Noun. 'A tall modern concrete building' benar. Ukuran fisik (tall) umumnya mendahului opinion (modern) untuk bangunan.",
  },
  {
    id: "rp3_05",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Ini adalah sebuah tas tangan kulit hitam kecil yang bagus.'",
    options: [
      "This is a nice black small leather handbag.",
      "This is a black nice small leather handbag.",
      "This is a nice small black leather handbag.",
      "This is a small nice black leather handbag.",
    ],
    correctIndex: 2,
    reason:
      "Urutan adjective: Opinion (nice) → Size (small) → Color (black) → Material (leather) → Noun. 'A nice small black leather handbag' mengikuti Opinion → Size → Color → Material.",
  },
  {
    id: "rp3_06",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Nenek saya membuat kue tradisional Indonesia yang lezat dan manis.'",
    options: [
      "My grandmother makes sweet delicious traditional Indonesian cakes.",
      "My grandmother makes traditional Indonesian delicious sweet cakes.",
      "My grandmother makes delicious sweet traditional Indonesian cakes.",
      "My grandmother makes Indonesian traditional sweet delicious cakes.",
    ],
    correctIndex: 2,
    reason:
      "Urutan adjective: Opinion (delicious, sweet) → Type (traditional) → Origin (Indonesian) → Noun. Opinion didahulukan sebelum Type dan Origin.",
  },
  {
    id: "rp3_07",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Dia membaca sebuah novel sejarah Rusia yang tebal dan tua.'",
    options: [
      "She reads an old thick Russian historical novel.",
      "She reads a thick old Russian historical novel.",
      "She reads a Russian old thick historical novel.",
      "She reads a historical thick old Russian novel.",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Size (thick) → Age (old) → Origin (Russian) → Type (historical) → Noun. 'A thick old Russian historical novel' mengikuti urutan baku.",
  },
  {
    id: "rp3_08",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Mereka tinggal di sebuah apartemen modern bertingkat tinggi di pusat kota.'",
    options: [
      "They live in a high-rise modern apartment in the city center.",
      "They live in a modern apartment high-rise in the city center.",
      "They live in modern a high-rise apartment in the city center.",
      "They live in a modern high-rise apartment in the city center.",
    ],
    correctIndex: 3,
    reason:
      "Urutan adjective: Opinion (modern) → Size/type (high-rise) → Noun. 'A modern high-rise apartment' benar. Opinion (modern) sebelum deskripsi ukuran/tipe (high-rise).",
  },
  {
    id: "rp3_09",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Saya melihat seekor burung bulu merah yang langka di hutan.'",
    options: [
      "I saw a red-feathered rare bird in the forest.",
      "I saw rare red-feathered a bird in the forest.",
      "I saw a rare red-feathered bird in the forest.",
      "I saw a red rare-feathered bird in the forest.",
    ],
    correctIndex: 2,
    reason:
      "Urutan adjective: Opinion (rare) → Descriptive compound (red-feathered) → Noun. 'A rare red-feathered bird' benar. 'Rare' (langka) sebagai penilaian subjektif mendahului compound adjective.",
  },
  {
    id: "rp3_10",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Kami mengunjungi sebuah puri Hindu kuno yang terkenal di Bali.'",
    options: [
      "We visited an ancient famous Hindu temple in Bali.",
      "We visited a famous Hindu ancient temple in Bali.",
      "We visited Hindu famous an ancient temple in Bali.",
      "We visited a famous ancient Hindu temple in Bali.",
    ],
    correctIndex: 3,
    reason:
      "Urutan adjective: Opinion (famous) → Age (ancient) → Type/origin (Hindu) → Noun. 'A famous ancient Hindu temple' benar: Opinion → Age → Type.",
  },
  {
    id: "rp3_11",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Dia memakai sepatu kulit coklat tua yang kecil.'",
    options: [
      "She wears old small brown leather shoes.",
      "She wears small old brown leather shoes.",
      "She wears brown old small leather shoes.",
      "She wears small brown old leather shoes.",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Size (small) → Age (old) → Color (brown) → Material (leather) → Noun. 'Small old brown leather shoes' benar: Size → Age → Color → Material.",
  },
  {
    id: "rp3_12",
    part: "III",
    partLabel: "Translate to English",
    question: "Terjemahkan: 'Ada banyak hasil kerajinan tangan yang indah dan tradisional di pasar ini.'",
    options: [
      "There are many traditional beautiful handmade crafts at this market.",
      "There are many beautiful traditional handmade crafts at this market.",
      "There are beautiful many handmade traditional crafts at this market.",
      "There are many handmade beautiful traditional crafts at this market.",
    ],
    correctIndex: 1,
    reason:
      "Urutan adjective: Quantity (many) → Opinion (beautiful) → Type (traditional) → Quality (handmade) → Noun. Opinion (beautiful) mendahului Type (traditional).",
  },
];

// Ambil sesi seimbang: 7 dari Part I + 7 dari Part II + 6 dari Part III = 20 soal
export function pickPostTestSession(): PostTestQuestion[] {
  const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);
  const partI = shuffle(postTestGrammarPool.filter((q) => q.part === "I")).slice(0, 7);
  const partII = shuffle(postTestGrammarPool.filter((q) => q.part === "II")).slice(0, 7);
  const partIII = shuffle(postTestGrammarPool.filter((q) => q.part === "III")).slice(0, 6);
  return [...partI, ...partII, ...partIII];
}
