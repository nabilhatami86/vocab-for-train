export type POS =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "pronoun"
  | "article"
  | "preposition"
  | "conjunction"
  | "none";

export type AnnotatedWord = {
  word: string;
  pos: POS;
  reason: string; // empty string if pos === "none"
};

export type AnnotatedSentence = {
  words: AnnotatedWord[];
  translation: string;
};

export type GrammarTopic = {
  id: string;
  title: string;
  emoji: string;
  color: string; // tailwind bg color (light)
  textColor: string; // tailwind text color
  darkColor: string; // tailwind dark mode bg
  shortDefinition: string;
  explanation: string[];
  tips: string[];
  sentences: AnnotatedSentence[];
};

// ════════════════════════════════════════════════════════════════
//  COLOR MAP — digunakan juga di page
// ════════════════════════════════════════════════════════════════

export const posStyle: Record<
  POS,
  { bg: string; text: string; label: string }
> = {
  noun:        { bg: "bg-blue-100 dark:bg-blue-900/40",    text: "text-blue-700 dark:text-blue-300",    label: "Noun" },
  verb:        { bg: "bg-green-100 dark:bg-green-900/40",  text: "text-green-700 dark:text-green-300",  label: "Verb" },
  adjective:   { bg: "bg-purple-100 dark:bg-purple-900/40",text: "text-purple-700 dark:text-purple-300",label: "Adjective" },
  adverb:      { bg: "bg-orange-100 dark:bg-orange-900/40",text: "text-orange-700 dark:text-orange-300",label: "Adverb" },
  pronoun:     { bg: "bg-pink-100 dark:bg-pink-900/40",    text: "text-pink-700 dark:text-pink-300",    label: "Pronoun" },
  article:     { bg: "bg-gray-100 dark:bg-gray-700/60",    text: "text-gray-600 dark:text-gray-300",    label: "Article" },
  preposition: { bg: "bg-teal-100 dark:bg-teal-900/40",    text: "text-teal-700 dark:text-teal-300",    label: "Preposition" },
  conjunction: { bg: "bg-amber-100 dark:bg-amber-900/40",  text: "text-amber-700 dark:text-amber-300",  label: "Conjunction" },
  none:        { bg: "",                                    text: "",                                    label: "" },
};

// ════════════════════════════════════════════════════════════════
//  GRAMMAR TOPICS
// ════════════════════════════════════════════════════════════════

export const grammarTopics: GrammarTopic[] = [
  // ── 1. NOUN ──────────────────────────────────────────────────
  {
    id: "noun",
    title: "Noun (Kata Benda)",
    emoji: "📦",
    color: "bg-blue-50",
    textColor: "text-blue-700",
    darkColor: "dark:bg-blue-900/20",
    shortDefinition: "Kata yang menyebut nama orang, tempat, benda, atau ide.",
    explanation: [
      "Noun adalah kata benda — yaitu kata yang digunakan untuk menyebut sesuatu yang bisa kita lihat, sentuh, pikirkan, atau rasakan.",
      "Noun bisa berupa nama orang (contoh: Rina, teacher), nama tempat (school, Jakarta), benda nyata (book, phone), atau ide abstrak (love, freedom).",
      "Dalam kalimat, noun biasanya menjadi subjek (pelaku) atau objek (yang dikenai aksi).",
    ],
    tips: [
      "Coba tambahkan 'the' atau 'a/an' di depannya — kalau bisa, kemungkinan besar itu noun. Contoh: 'a dog', 'the school'.",
      "Noun bisa dibentuk jamak dengan tambahan -s atau -es. Contoh: book → books, box → boxes.",
      "Noun sering diawali huruf kapital kalau itu nama orang, tempat, atau merek (proper noun). Contoh: Indonesia, Google.",
      "Kata yang bisa diganti dengan 'it', 'he', 'she', atau 'they' biasanya adalah noun.",
    ],
    sentences: [
      {
        translation: "Anjing itu mengejar bola di taman.",
        words: [
          { word: "The",    pos: "article",  reason: "Kata penjelas 'the' menunjukkan benda tertentu yang sudah diketahui." },
          { word: "dog",    pos: "noun",     reason: "'Dog' adalah kata benda — menyebut seekor hewan. Di sini jadi subjek kalimat." },
          { word: "chased", pos: "verb",     reason: "'Chased' adalah kata kerja (bentuk lampau dari 'chase'). Bukan noun." },
          { word: "the",    pos: "article",  reason: "Article penunjuk objek spesifik." },
          { word: "ball",   pos: "noun",     reason: "'Ball' adalah kata benda nyata — benda yang bisa dipegang. Menjadi objek kalimat." },
          { word: "in",     pos: "preposition", reason: "'In' menunjukkan posisi/lokasi. Bukan noun." },
          { word: "the",    pos: "article",  reason: "Article penunjuk tempat spesifik." },
          { word: "park",   pos: "noun",     reason: "'Park' adalah kata benda berupa tempat. Ini disebut noun of place." },
          { word: ".",      pos: "none",     reason: "" },
        ],
      },
      {
        translation: "Guru itu menjelaskan pentingnya ilmu pengetahuan.",
        words: [
          { word: "The",         pos: "article",  reason: "Article spesifik." },
          { word: "teacher",     pos: "noun",     reason: "'Teacher' adalah kata benda menyebut profesi seseorang. Subjek kalimat." },
          { word: "explained",   pos: "verb",     reason: "Kata kerja lampau. Bukan noun." },
          { word: "the",         pos: "article",  reason: "Article." },
          { word: "importance",  pos: "noun",     reason: "'Importance' adalah kata benda abstrak (tidak bisa dilihat/dipegang tapi bisa dirasakan maknanya). Dibentuk dari kata sifat 'important' + akhiran -ance." },
          { word: "of",          pos: "preposition", reason: "Preposisi penghubung." },
          { word: "knowledge",   pos: "noun",     reason: "'Knowledge' adalah kata benda abstrak yang berarti 'pengetahuan'. Tidak bisa dilihat tapi nyata secara konsep." },
          { word: ".",           pos: "none",     reason: "" },
        ],
      },
      {
        translation: "Cinta dan kebebasan adalah hal penting dalam hidup.",
        words: [
          { word: "Love",        pos: "noun",      reason: "'Love' di sini dipakai sebagai subjek kalimat, bukan kata kerja. Ini adalah noun abstrak — tidak bisa dilihat tapi bisa dirasakan." },
          { word: "and",         pos: "conjunction", reason: "Kata penghubung dua subjek." },
          { word: "freedom",     pos: "noun",      reason: "'Freedom' berarti kebebasan — noun abstrak karena konsep, bukan benda fisik." },
          { word: "are",         pos: "verb",      reason: "Kata kerja 'to be'. Bukan noun." },
          { word: "important",   pos: "adjective", reason: "Kata sifat. Bukan noun." },
          { word: "things",      pos: "noun",      reason: "'Things' adalah bentuk jamak dari 'thing' (hal/benda). Noun." },
          { word: "in",          pos: "preposition", reason: "Preposisi." },
          { word: "life",        pos: "noun",      reason: "'Life' adalah noun abstrak yang berarti kehidupan." },
          { word: ".",           pos: "none",      reason: "" },
        ],
      },
    ],
  },

  // ── 2. VERB ──────────────────────────────────────────────────
  {
    id: "verb",
    title: "Verb (Kata Kerja)",
    emoji: "⚡",
    color: "bg-green-50",
    textColor: "text-green-700",
    darkColor: "dark:bg-green-900/20",
    shortDefinition: "Kata yang menyatakan aksi, kejadian, atau keadaan.",
    explanation: [
      "Verb adalah kata kerja — kata yang menggambarkan apa yang dilakukan atau dialami seseorang/sesuatu.",
      "Ada dua jenis verb utama: Action Verb (menunjukkan aksi nyata seperti 'run', 'eat', 'write') dan Linking Verb (menghubungkan subjek dengan keterangan, seperti 'is', 'seem', 'become').",
      "Verb selalu berubah bentuk tergantung waktu: sekarang (eat), lampau (ate), dan akan datang (will eat). Perubahan ini disebut tenses.",
    ],
    tips: [
      "Tanya ke dirimu sendiri: 'Apa yang dilakukan subjek?' Jawabannya kemungkinan besar adalah verb.",
      "Verb sering berubah bentuk dengan akhiran -s (she eats), -ed (walked), atau -ing (running).",
      "Kata 'is', 'am', 'are', 'was', 'were', 'been' juga adalah verb — disebut 'to be'. Walaupun terlihat sederhana, ini tetap verb.",
      "Modal verbs (can, will, should, must, may) selalu diikuti verb lain dalam bentuk dasar.",
    ],
    sentences: [
      {
        translation: "Dia berlari cepat setiap pagi.",
        words: [
          { word: "She",       pos: "pronoun", reason: "Kata ganti orang." },
          { word: "runs",      pos: "verb",    reason: "'Runs' adalah action verb — menunjukkan aksi fisik berlari. Bentuk present tense dengan akhiran -s karena subjeknya 'she' (orang ketiga tunggal)." },
          { word: "fast",      pos: "adverb",  reason: "Menerangkan cara berlari." },
          { word: "every",     pos: "adjective", reason: "Menunjukkan frekuensi/jumlah." },
          { word: "morning",   pos: "noun",    reason: "Kata benda waktu." },
          { word: ".",         pos: "none",    reason: "" },
        ],
      },
      {
        translation: "Mereka sedang belajar Bahasa Inggris bersama.",
        words: [
          { word: "They",      pos: "pronoun", reason: "Kata ganti jamak." },
          { word: "are",       pos: "verb",    reason: "'Are' adalah linking verb (to be). Dipakai bersama -ing untuk membentuk present continuous tense." },
          { word: "studying",  pos: "verb",    reason: "'Studying' adalah verb utama dalam bentuk -ing. Bersama 'are' membentuk 'are studying' = sedang belajar." },
          { word: "English",   pos: "noun",    reason: "Bahasa Inggris sebagai objek yang dipelajari. Noun." },
          { word: "together",  pos: "adverb",  reason: "Menerangkan cara melakukan aksi." },
          { word: ".",         pos: "none",    reason: "" },
        ],
      },
      {
        translation: "Kucing itu kelihatannya mengantuk.",
        words: [
          { word: "The",  pos: "article",  reason: "Article." },
          { word: "cat",  pos: "noun",     reason: "Subjek kalimat." },
          { word: "seems", pos: "verb",   reason: "'Seems' adalah linking verb — menghubungkan subjek 'cat' dengan kondisinya ('sleepy'). Tidak menunjukkan aksi fisik tapi tetap verb." },
          { word: "sleepy", pos: "adjective", reason: "Kata sifat yang menggambarkan kondisi subjek." },
          { word: ".",     pos: "none",    reason: "" },
        ],
      },
    ],
  },

  // ── 3. ADJECTIVE ─────────────────────────────────────────────
  {
    id: "adjective",
    title: "Adjective (Kata Sifat)",
    emoji: "🎨",
    color: "bg-purple-50",
    textColor: "text-purple-700",
    darkColor: "dark:bg-purple-900/20",
    shortDefinition: "Kata yang menjelaskan atau memberi keterangan pada noun.",
    explanation: [
      "Adjective adalah kata sifat — kata yang digunakan untuk menggambarkan atau memberi informasi tambahan tentang suatu noun (kata benda).",
      "Adjective menjawab pertanyaan: Seperti apa bendanya? Seberapa banyak? Yang mana?",
      "Adjective bisa diletakkan sebelum noun ('a tall building') atau setelah linking verb ('She is tall').",
    ],
    tips: [
      "Tanya: 'Seperti apa noun itu?' Kata yang menjawab pertanyaan itu adalah adjective.",
      "Adjective tidak berubah bentuk menjadi jamak meski noun-nya jamak. Contoh: 'two big dogs' — bukan 'bigs dogs'.",
      "Banyak adjective berakhiran: -ful (beautiful), -less (useless), -ous (dangerous), -al (natural), -ive (active).",
      "Adjective bisa dibandingkan: tall → taller → tallest.",
    ],
    sentences: [
      {
        translation: "Anjing kecil itu sangat lucu.",
        words: [
          { word: "The",   pos: "article",   reason: "Article." },
          { word: "small", pos: "adjective", reason: "'Small' menggambarkan ukuran dari 'dog'. Letaknya sebelum noun — ini posisi adjective yang paling umum." },
          { word: "dog",   pos: "noun",      reason: "Kata benda yang dijelaskan oleh 'small'." },
          { word: "is",    pos: "verb",      reason: "Linking verb." },
          { word: "very",  pos: "adverb",    reason: "'Very' memperkuat kata sifat di sampingnya. Bukan adjective." },
          { word: "cute",  pos: "adjective", reason: "'Cute' menggambarkan kondisi subjek. Letaknya setelah linking verb 'is' — ini juga posisi adjective yang benar." },
          { word: ".",     pos: "none",      reason: "" },
        ],
      },
      {
        translation: "Dia memakai baju baru yang mahal.",
        words: [
          { word: "She",       pos: "pronoun",   reason: "Kata ganti." },
          { word: "wore",      pos: "verb",      reason: "Kata kerja lampau." },
          { word: "an",        pos: "article",   reason: "Article untuk kata yang dimulai huruf vokal." },
          { word: "expensive", pos: "adjective", reason: "'Expensive' (mahal) menggambarkan kualitas dari 'dress'. Letaknya sebelum noun." },
          { word: "new",       pos: "adjective", reason: "'New' (baru) juga menggambarkan 'dress'. Satu noun bisa dijelaskan oleh lebih dari satu adjective." },
          { word: "dress",     pos: "noun",      reason: "Kata benda yang dijelaskan." },
          { word: ".",         pos: "none",      reason: "" },
        ],
      },
      {
        translation: "Film ini sangat membosankan.",
        words: [
          { word: "This",    pos: "adjective", reason: "'This' adalah demonstrative adjective — menunjuk benda tertentu yang dekat. Menerangkan 'movie'." },
          { word: "movie",   pos: "noun",      reason: "Kata benda." },
          { word: "is",      pos: "verb",      reason: "Linking verb." },
          { word: "so",      pos: "adverb",    reason: "'So' memperkuat adjective di sampingnya." },
          { word: "boring",  pos: "adjective", reason: "'Boring' (membosankan) menggambarkan kondisi subjek. Adjective berakhiran -ing yang menggambarkan sifat suatu hal (berbeda dengan -ed yang menggambarkan perasaan)." },
          { word: ".",       pos: "none",      reason: "" },
        ],
      },
    ],
  },

  // ── 4. ADVERB ────────────────────────────────────────────────
  {
    id: "adverb",
    title: "Adverb (Kata Keterangan)",
    emoji: "💨",
    color: "bg-orange-50",
    textColor: "text-orange-700",
    darkColor: "dark:bg-orange-900/20",
    shortDefinition: "Kata yang menerangkan verb, adjective, atau adverb lain.",
    explanation: [
      "Adverb adalah kata keterangan — kata yang memberikan informasi tambahan tentang bagaimana, kapan, di mana, seberapa sering, atau seberapa banyak sesuatu terjadi.",
      "Adverb bisa menerangkan: Verb (She runs quickly), Adjective (very tall), atau Adverb lain (quite slowly).",
      "Banyak adverb dibentuk dari adjective dengan tambahan -ly, contoh: quick → quickly, happy → happily.",
    ],
    tips: [
      "Tanya: 'Bagaimana?', 'Kapan?', 'Di mana?', 'Seberapa sering?' Jawaban dari pertanyaan itu adalah adverb.",
      "Banyak adverb berakhiran -ly: slowly, carefully, loudly. Tapi tidak semua! 'Fast', 'hard', 'well', 'very' adalah adverb tanpa -ly.",
      "Adverb bisa dipindahkan ke bagian lain kalimat tanpa mengubah makna utama. Ini berbeda dengan adjective.",
      "Jangan bingung: 'good' adalah adjective, tapi 'well' adalah adverb. 'She sings good' ❌ → 'She sings well' ✓",
    ],
    sentences: [
      {
        translation: "Dia berbicara dengan sangat perlahan dan jelas.",
        words: [
          { word: "She",     pos: "pronoun",  reason: "Kata ganti." },
          { word: "spoke",   pos: "verb",     reason: "Kata kerja lampau." },
          { word: "very",    pos: "adverb",   reason: "'Very' adalah adverb yang memperkuat adverb lain di sampingnya ('slowly'). Adverb bisa menerangkan adverb lain." },
          { word: "slowly",  pos: "adverb",   reason: "'Slowly' menerangkan bagaimana cara berbicara. Dibentuk dari adjective 'slow' + akhiran -ly." },
          { word: "and",     pos: "conjunction", reason: "Kata penghubung." },
          { word: "clearly", pos: "adverb",   reason: "'Clearly' menerangkan cara berbicara. Dari adjective 'clear' + -ly." },
          { word: ".",       pos: "none",     reason: "" },
        ],
      },
      {
        translation: "Dia hampir selalu datang tepat waktu.",
        words: [
          { word: "He",       pos: "pronoun",  reason: "Kata ganti." },
          { word: "almost",   pos: "adverb",   reason: "'Almost' (hampir) menerangkan frekuensi 'always'. Ini adverb yang menerangkan adverb lain." },
          { word: "always",   pos: "adverb",   reason: "'Always' adalah adverb frekuensi — menunjukkan seberapa sering sesuatu terjadi (selalu)." },
          { word: "arrives",  pos: "verb",     reason: "Kata kerja." },
          { word: "on",       pos: "preposition", reason: "Bagian dari frasa 'on time'." },
          { word: "time",     pos: "noun",     reason: "Kata benda." },
          { word: ".",        pos: "none",     reason: "" },
        ],
      },
      {
        translation: "Mereka bekerja keras kemarin.",
        words: [
          { word: "They",      pos: "pronoun", reason: "Kata ganti jamak." },
          { word: "worked",    pos: "verb",    reason: "Kata kerja lampau." },
          { word: "hard",      pos: "adverb",  reason: "'Hard' menerangkan bagaimana mereka bekerja. Perhatian: 'hard' bisa juga adjective (a hard problem), tapi di sini menerangkan verb, jadi adverb. Tidak pakai -ly karena 'hardly' artinya berbeda (hampir tidak)." },
          { word: "yesterday", pos: "adverb",  reason: "'Yesterday' adalah adverb waktu — menunjukkan kapan aksi terjadi. Menerangkan verb 'worked'." },
          { word: ".",         pos: "none",    reason: "" },
        ],
      },
    ],
  },

  // ── 5. PRONOUN ───────────────────────────────────────────────
  {
    id: "pronoun",
    title: "Pronoun (Kata Ganti)",
    emoji: "👤",
    color: "bg-pink-50",
    textColor: "text-pink-700",
    darkColor: "dark:bg-pink-900/20",
    shortDefinition: "Kata yang digunakan untuk menggantikan noun agar tidak diulang-ulang.",
    explanation: [
      "Pronoun adalah kata ganti — dipakai untuk menghindari pengulangan noun yang sama berkali-kali dalam kalimat atau percakapan.",
      "Contoh tanpa pronoun: 'Rina went to school. Rina forgot Rina's book.' → dengan pronoun: 'Rina went to school. She forgot her book.' Jauh lebih enak dibaca.",
      "Ada beberapa jenis pronoun: Personal (I, you, he, she), Possessive (my, your, his), Reflexive (myself, yourself), dan lainnya.",
    ],
    tips: [
      "Personal pronoun berubah tergantung posisinya: subjek (I, he, she, they) atau objek (me, him, her, them).",
      "Possessive pronoun menunjukkan kepemilikan: my book (adjektif posesif) atau that book is mine (pronoun posesif).",
      "Reflexive pronoun (-self/-selves) digunakan saat subjek dan objek adalah orang yang sama: 'I hurt myself.'",
      "'It' digunakan untuk benda, hewan, atau bayi yang belum diketahui jenis kelaminnya.",
    ],
    sentences: [
      {
        translation: "Dia lupa membawa tasnya sendiri.",
        words: [
          { word: "She",      pos: "pronoun",  reason: "'She' adalah personal pronoun — menggantikan nama perempuan yang sudah disebut sebelumnya. Berperan sebagai subjek kalimat." },
          { word: "forgot",   pos: "verb",     reason: "Kata kerja lampau." },
          { word: "to",       pos: "preposition", reason: "Bagian dari infinitive 'to bring'." },
          { word: "bring",    pos: "verb",     reason: "Kata kerja." },
          { word: "her",      pos: "pronoun",  reason: "'Her' adalah possessive pronoun (kata ganti kepemilikan) — menunjukkan tas milik 'she'. Di sini berperan sebagai adjective yang menerangkan 'bag'." },
          { word: "own",      pos: "adjective", reason: "'Own' memperkuat kepemilikan, menerangkan 'bag'." },
          { word: "bag",      pos: "noun",     reason: "Kata benda yang dimiliki." },
          { word: ".",        pos: "none",     reason: "" },
        ],
      },
      {
        translation: "Mereka menyelesaikan proyeknya sendiri.",
        words: [
          { word: "They",      pos: "pronoun",  reason: "'They' adalah personal pronoun jamak sebagai subjek." },
          { word: "finished",  pos: "verb",     reason: "Kata kerja lampau." },
          { word: "the",       pos: "article",  reason: "Article." },
          { word: "project",   pos: "noun",     reason: "Kata benda objek." },
          { word: "by",        pos: "preposition", reason: "Bagian dari frasa 'by themselves'." },
          { word: "themselves", pos: "pronoun", reason: "'Themselves' adalah reflexive pronoun — menunjukkan bahwa subjek ('they') melakukan aksi untuk/kepada diri mereka sendiri. Berakhiran -selves karena jamak." },
          { word: ".",         pos: "none",     reason: "" },
        ],
      },
      {
        translation: "Ini bukuku. Milikmu ada di atas meja.",
        words: [
          { word: "This",   pos: "pronoun",  reason: "'This' di sini berperan sebagai pronoun — menggantikan benda yang ada di depan pembicara. Kalau sebelum noun (this book) maka itu adjective." },
          { word: "is",     pos: "verb",     reason: "Linking verb." },
          { word: "my",     pos: "pronoun",  reason: "'My' adalah possessive adjective/pronoun — menunjukkan kepemilikan orang pertama tunggal." },
          { word: "book",   pos: "noun",     reason: "Kata benda." },
          { word: ".",      pos: "none",     reason: "" },
          { word: "Yours",  pos: "pronoun",  reason: "'Yours' adalah possessive pronoun — menggantikan 'your book' tanpa harus mengulang kata 'book' lagi." },
          { word: "is",     pos: "verb",     reason: "Linking verb." },
          { word: "on",     pos: "preposition", reason: "Preposisi lokasi." },
          { word: "the",    pos: "article",  reason: "Article." },
          { word: "table",  pos: "noun",     reason: "Kata benda tempat." },
          { word: ".",      pos: "none",     reason: "" },
        ],
      },
    ],
  },

  // ── 6. ARTICLE ───────────────────────────────────────────────
  {
    id: "article",
    title: "Article (Kata Sandang)",
    emoji: "📌",
    color: "bg-gray-50",
    textColor: "text-gray-700",
    darkColor: "dark:bg-gray-800/40",
    shortDefinition: "Kata kecil 'a', 'an', dan 'the' yang diletakkan sebelum noun.",
    explanation: [
      "Article adalah kata sandang — kata kecil yang dipakai sebelum noun untuk menunjukkan apakah benda itu spesifik atau umum.",
      "'A' dan 'an' disebut indefinite article (tidak tentu) — dipakai saat benda pertama kali disebut atau tidak spesifik. 'An' dipakai sebelum kata berawalan bunyi vokal (a, e, i, o, u).",
      "'The' disebut definite article (tentu) — dipakai saat benda sudah diketahui, sudah disebutkan sebelumnya, atau hanya ada satu-satunya.",
    ],
    tips: [
      "Pakai 'a/an' untuk benda yang pertama kali disebut atau tidak spesifik: 'I saw a cat.' (kucing mana saja).",
      "Pakai 'the' untuk benda yang sudah diketahui atau spesifik: 'The cat was black.' (kucing yang tadi).",
      "'An' dipakai sebelum bunyi vokal: an apple, an hour (jam — huruf h tidak berbunyi), an umbrella.",
      "Nama orang, nama kota, dan nama negara umumnya tidak pakai article. ❌ 'The Indonesia' → ✓ 'Indonesia'.",
    ],
    sentences: [
      {
        translation: "Saya melihat seekor kucing. Kucing itu hitam.",
        words: [
          { word: "I",     pos: "pronoun",  reason: "Kata ganti orang pertama." },
          { word: "saw",   pos: "verb",     reason: "Kata kerja lampau." },
          { word: "a",     pos: "article",  reason: "'A' adalah indefinite article — kucing ini pertama kali disebut dan tidak spesifik. Pendengar belum tahu kucing yang mana." },
          { word: "cat",   pos: "noun",     reason: "Kata benda hewan." },
          { word: ".",     pos: "none",     reason: "" },
          { word: "The",   pos: "article",  reason: "'The' adalah definite article — kucing yang dimaksud sekarang sudah spesifik karena sudah disebut di kalimat sebelumnya." },
          { word: "cat",   pos: "noun",     reason: "Kata benda, kini spesifik." },
          { word: "was",   pos: "verb",     reason: "Linking verb lampau." },
          { word: "black", pos: "adjective", reason: "Kata sifat warna." },
          { word: ".",     pos: "none",     reason: "" },
        ],
      },
      {
        translation: "Dia adalah seorang dokter yang baik.",
        words: [
          { word: "She",    pos: "pronoun",  reason: "Kata ganti." },
          { word: "is",     pos: "verb",     reason: "Linking verb." },
          { word: "a",      pos: "article",  reason: "'A' dipakai karena 'doctor' dimulai bunyi konsonan (d-). Artinya: seorang dokter (dari sekian banyak dokter)." },
          { word: "good",   pos: "adjective", reason: "Kata sifat." },
          { word: "doctor", pos: "noun",     reason: "Kata benda profesi." },
          { word: ".",      pos: "none",     reason: "" },
        ],
      },
      {
        translation: "Matahari terbit di timur.",
        words: [
          { word: "The",   pos: "article",  reason: "'The' dipakai karena matahari ('sun') adalah benda yang hanya ada satu di alam semesta — benda yang sudah pasti diketahui semua orang." },
          { word: "sun",   pos: "noun",     reason: "Kata benda alam." },
          { word: "rises", pos: "verb",     reason: "Kata kerja present tense." },
          { word: "in",    pos: "preposition", reason: "Preposisi arah." },
          { word: "the",   pos: "article",  reason: "'The east' — pakai 'the' karena arah mata angin adalah konsep yang sudah dikenal spesifik." },
          { word: "east",  pos: "noun",     reason: "Kata benda arah." },
          { word: ".",     pos: "none",     reason: "" },
        ],
      },
    ],
  },

  // ── 7. PREPOSITION ───────────────────────────────────────────
  {
    id: "preposition",
    title: "Preposition (Kata Depan)",
    emoji: "📍",
    color: "bg-teal-50",
    textColor: "text-teal-700",
    darkColor: "dark:bg-teal-900/20",
    shortDefinition: "Kata yang menunjukkan hubungan antara noun dengan bagian kalimat lainnya.",
    explanation: [
      "Preposition adalah kata depan — kata pendek yang menunjukkan hubungan lokasi, waktu, arah, atau cara antara suatu kata dengan kata lainnya.",
      "Preposition selalu diikuti oleh noun atau pronoun yang disebut 'object of preposition'. Contoh: 'in the box' (in = preposition, the box = objeknya).",
      "Preposition paling umum: in, on, at, to, for, from, by, with, about, of, between, under, over.",
    ],
    tips: [
      "Preposition lokasi: 'in' (di dalam), 'on' (di atas permukaan), 'at' (di titik tertentu).",
      "Preposition waktu: 'in' (in July, in 2024), 'on' (on Monday), 'at' (at 3 PM, at night).",
      "Preposition selalu punya objek setelahnya. Kalau tidak ada objek, kemungkinan kata itu adverb, bukan preposition.",
      "Banyak ekspresi yang pakai preposition spesifik dan harus dihafal: 'interested in', 'good at', 'afraid of', 'listen to'.",
    ],
    sentences: [
      {
        translation: "Kucing itu duduk di atas meja di ruang tamu.",
        words: [
          { word: "The",       pos: "article",     reason: "Article." },
          { word: "cat",       pos: "noun",        reason: "Subjek." },
          { word: "sat",       pos: "verb",        reason: "Kata kerja lampau." },
          { word: "on",        pos: "preposition", reason: "'On' menunjukkan posisi di atas permukaan. Preposition lokasi yang diikuti objek 'the table'." },
          { word: "the",       pos: "article",     reason: "Article." },
          { word: "table",     pos: "noun",        reason: "Objek dari preposisi 'on'." },
          { word: "in",        pos: "preposition", reason: "'In' menunjukkan posisi di dalam suatu ruang. Diikuti objek 'the living room'." },
          { word: "the",       pos: "article",     reason: "Article." },
          { word: "living",    pos: "adjective",   reason: "Menerangkan 'room'." },
          { word: "room",      pos: "noun",        reason: "Objek dari preposisi 'in'." },
          { word: ".",         pos: "none",        reason: "" },
        ],
      },
      {
        translation: "Pertemuan itu dijadwalkan pada hari Senin jam 9 pagi.",
        words: [
          { word: "The",      pos: "article",     reason: "Article." },
          { word: "meeting",  pos: "noun",        reason: "Subjek kalimat." },
          { word: "is",       pos: "verb",        reason: "Linking verb." },
          { word: "scheduled", pos: "verb",       reason: "Participle sebagai predikat." },
          { word: "for",      pos: "preposition", reason: "'For' di sini menunjukkan tujuan/waktu. Diikuti objek 'Monday'." },
          { word: "Monday",   pos: "noun",        reason: "Nama hari sebagai objek preposisi." },
          { word: "at",       pos: "preposition", reason: "'At' dipakai untuk waktu yang spesifik (jam). Diikuti '9 AM'." },
          { word: "9",        pos: "noun",        reason: "Angka waktu." },
          { word: "AM",       pos: "noun",        reason: "Keterangan pagi." },
          { word: ".",        pos: "none",        reason: "" },
        ],
      },
    ],
  },

  // ── 8. CONJUNCTION ───────────────────────────────────────────
  {
    id: "conjunction",
    title: "Conjunction (Kata Hubung)",
    emoji: "🔗",
    color: "bg-amber-50",
    textColor: "text-amber-700",
    darkColor: "dark:bg-amber-900/20",
    shortDefinition: "Kata yang menghubungkan dua kata, frasa, atau kalimat.",
    explanation: [
      "Conjunction adalah kata hubung — kata yang berfungsi menyambungkan dua kata, frasa, atau kalimat menjadi satu.",
      "Ada tiga jenis utama: Coordinating Conjunction (FANBOYS: for, and, nor, but, or, yet, so), Subordinating Conjunction (because, although, when, if, since), dan Correlative Conjunction (either...or, neither...nor, both...and).",
      "Coordinating conjunction menghubungkan dua bagian yang setara. Subordinating conjunction membuat satu kalimat bergantung pada kalimat lainnya.",
    ],
    tips: [
      "Ingat FANBOYS untuk coordinating conjunction: For, And, Nor, But, Or, Yet, So.",
      "'Because', 'although', 'when', 'if' adalah subordinating conjunction yang sering dipakai sehari-hari.",
      "Coordinating conjunction selalu diapit koma saat menghubungkan dua kalimat lengkap: 'I was tired, but I kept working.'",
      "Jangan mulai kalimat formal dengan 'And' atau 'But' — tapi dalam bahasa sehari-hari boleh.",
    ],
    sentences: [
      {
        translation: "Saya ingin teh atau kopi.",
        words: [
          { word: "I",      pos: "pronoun",    reason: "Kata ganti subjek." },
          { word: "want",   pos: "verb",       reason: "Kata kerja." },
          { word: "tea",    pos: "noun",       reason: "Kata benda pertama yang dihubungkan." },
          { word: "or",     pos: "conjunction", reason: "'Or' adalah coordinating conjunction yang memberikan pilihan antara dua opsi ('tea' atau 'coffee'). Keduanya setara." },
          { word: "coffee", pos: "noun",       reason: "Kata benda kedua yang dihubungkan." },
          { word: ".",      pos: "none",       reason: "" },
        ],
      },
      {
        translation: "Dia tidak bisa datang karena sedang sakit.",
        words: [
          { word: "She",    pos: "pronoun",    reason: "Subjek." },
          { word: "could",  pos: "verb",       reason: "Modal verb." },
          { word: "not",    pos: "adverb",     reason: "Negasi." },
          { word: "come",   pos: "verb",       reason: "Kata kerja utama." },
          { word: "because", pos: "conjunction", reason: "'Because' adalah subordinating conjunction — menyambungkan kalimat utama dengan alasan/penyebab. Kalimat setelah 'because' menjelaskan kenapa." },
          { word: "she",    pos: "pronoun",    reason: "Subjek anak kalimat." },
          { word: "was",    pos: "verb",       reason: "Linking verb lampau." },
          { word: "sick",   pos: "adjective",  reason: "Kata sifat kondisi." },
          { word: ".",      pos: "none",       reason: "" },
        ],
      },
      {
        translation: "Dia lelah tapi tetap terus belajar.",
        words: [
          { word: "He",     pos: "pronoun",    reason: "Subjek." },
          { word: "was",    pos: "verb",       reason: "Linking verb." },
          { word: "tired",  pos: "adjective",  reason: "Kata sifat kondisi." },
          { word: "but",    pos: "conjunction", reason: "'But' adalah coordinating conjunction yang menunjukkan pertentangan — sesuatu yang berlawanan dengan yang diharapkan. Klausa sebelumnya (lelah) dan sesudahnya (terus belajar) bertentangan." },
          { word: "he",     pos: "pronoun",    reason: "Subjek klausa kedua." },
          { word: "kept",   pos: "verb",       reason: "Kata kerja." },
          { word: "studying", pos: "verb",     reason: "Verb -ing sebagai objek dari 'kept'." },
          { word: ".",      pos: "none",       reason: "" },
        ],
      },
    ],
  },
];
