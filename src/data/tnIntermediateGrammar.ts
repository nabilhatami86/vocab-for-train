// TN Intermediate — Grammar: Tenses

import {
  Sun, History, Rocket,
  Activity, Rewind, Timer,
  BadgeCheck, Archive, Target,
  TrendingUp, Layers, Infinity,
} from 'lucide-react';

export type TenseExample = {
  sentence: string;
  translation: string;
  note?: string;
};

export type TenseFormula = {
  positive: string;
  negative: string;
  question: string;
};

export type TenseTopic = {
  id: string;
  title: string;
  icon: React.ElementType;
  shortDefinition: string;
  formula: TenseFormula;
  usage: string[];
  examples: TenseExample[];
  signalWords: string[];
  wrongRight?: { wrong: string; right: string; note: string }[];
};

export const tensesTopics: TenseTopic[] = [
  // ─── 1. Simple Present ───────────────────────────────────────────────────
  {
    id: "simple-present",
    title: "Simple Present Tense",
    icon: Sun,
    shortDefinition: "Menyatakan kebiasaan, fakta umum, atau kejadian yang berlangsung secara rutin.",
    formula: {
      positive: "S + V1 (s/es) + O",
      negative: "S + do/does + not + V1 + O",
      question: "Do/Does + S + V1 + O?",
    },
    usage: [
      "Kebiasaan atau rutinitas: She drinks coffee every morning.",
      "Fakta umum / kebenaran ilmiah: The sun rises in the east.",
      "Jadwal / timetable: The train leaves at 8 AM.",
      "Perasaan & opini saat ini: I love this song.",
    ],
    examples: [
      { sentence: "She works at a hospital.", translation: "Dia bekerja di rumah sakit.", note: "She → pakai -s" },
      { sentence: "They don't eat meat.", translation: "Mereka tidak makan daging." },
      { sentence: "Does he speak English?", translation: "Apakah dia bisa berbicara Bahasa Inggris?" },
      { sentence: "Water boils at 100°C.", translation: "Air mendidih pada 100°C.", note: "Fakta ilmiah" },
      { sentence: "I usually wake up at 6 AM.", translation: "Saya biasanya bangun jam 6 pagi." },
    ],
    signalWords: ["always", "usually", "often", "sometimes", "rarely", "never", "every day/week/month", "on Mondays"],
    wrongRight: [
      { wrong: "She work hard.", right: "She works hard.", note: "He/She/It → tambah -s/-es" },
      { wrong: "Do he know?", right: "Does he know?", note: "He/She/It → pakai does" },
    ],
  },

  // ─── 2. Simple Past ──────────────────────────────────────────────────────
  {
    id: "simple-past",
    title: "Simple Past Tense",
    icon: History,
    shortDefinition: "Menyatakan kejadian yang sudah selesai di waktu lampau.",
    formula: {
      positive: "S + V2 + O",
      negative: "S + did + not + V1 + O",
      question: "Did + S + V1 + O?",
    },
    usage: [
      "Kejadian yang selesai di masa lalu: I visited Bali last year.",
      "Serangkaian kejadian di masa lalu: She woke up, showered, and left.",
      "Kebiasaan lama yang tidak dilakukan lagi: He played football when he was young.",
    ],
    examples: [
      { sentence: "They visited the museum yesterday.", translation: "Mereka mengunjungi museum kemarin." },
      { sentence: "She didn't call me last night.", translation: "Dia tidak meneleponku tadi malam." },
      { sentence: "Did you see that movie?", translation: "Apakah kamu menonton film itu?" },
      { sentence: "He studied abroad for two years.", translation: "Dia belajar di luar negeri selama dua tahun." },
      { sentence: "We went to the beach last Sunday.", translation: "Kami pergi ke pantai Minggu lalu." },
    ],
    signalWords: ["yesterday", "last (week/month/year)", "ago", "in 2020", "when I was a child", "just now"],
    wrongRight: [
      { wrong: "She goed to school.", right: "She went to school.", note: "go → went (irregular verb)" },
      { wrong: "Did you went?", right: "Did you go?", note: "Setelah did → pakai V1" },
    ],
  },

  // ─── 3. Simple Future ────────────────────────────────────────────────────
  {
    id: "simple-future",
    title: "Simple Future Tense",
    icon: Rocket,
    shortDefinition: "Menyatakan rencana, prediksi, atau keputusan spontan di masa depan.",
    formula: {
      positive: "S + will + V1 + O",
      negative: "S + will + not (won't) + V1 + O",
      question: "Will + S + V1 + O?",
    },
    usage: [
      "Keputusan spontan: I'll help you with that!",
      "Prediksi / harapan: It will rain tomorrow.",
      "Janji: I will call you tonight.",
      "Kondisional: If you study hard, you will pass.",
    ],
    examples: [
      { sentence: "She will finish the report by Friday.", translation: "Dia akan menyelesaikan laporan itu sebelum Jumat." },
      { sentence: "I won't be late again.", translation: "Saya tidak akan terlambat lagi." },
      { sentence: "Will they join the meeting?", translation: "Apakah mereka akan ikut rapat?" },
      { sentence: "The weather will be sunny tomorrow.", translation: "Cuaca akan cerah besok.", note: "Prediksi" },
      { sentence: "I'll have a coffee, please.", translation: "Saya pesan kopi, tolong ya.", note: "Keputusan spontan" },
    ],
    signalWords: ["tomorrow", "next (week/month/year)", "soon", "in the future", "later", "tonight"],
    wrongRight: [
      { wrong: "She will goes there.", right: "She will go there.", note: "Setelah will → pakai V1 (tanpa -s)" },
      { wrong: "I will to call you.", right: "I will call you.", note: "Tidak ada 'to' setelah will" },
    ],
  },

  // ─── 4. Present Continuous ───────────────────────────────────────────────
  {
    id: "present-continuous",
    title: "Present Continuous Tense",
    icon: Activity,
    shortDefinition: "Menyatakan aksi yang sedang berlangsung sekarang atau rencana mendatang yang sudah pasti.",
    formula: {
      positive: "S + am/is/are + V-ing + O",
      negative: "S + am/is/are + not + V-ing + O",
      question: "Am/Is/Are + S + V-ing + O?",
    },
    usage: [
      "Sedang terjadi saat ini: She is talking on the phone.",
      "Situasi sementara: I am living with my parents this month.",
      "Rencana pasti yang sudah diatur: We are meeting at 7 PM.",
      "Perubahan bertahap: Prices are rising every year.",
    ],
    examples: [
      { sentence: "He is reading a book right now.", translation: "Dia sedang membaca buku sekarang." },
      { sentence: "They aren't working today.", translation: "Mereka tidak sedang bekerja hari ini." },
      { sentence: "Are you listening to me?", translation: "Apakah kamu mendengarkan saya?" },
      { sentence: "I am meeting the doctor tomorrow.", translation: "Saya akan menemui dokter besok.", note: "Rencana pasti" },
      { sentence: "The company is growing rapidly.", translation: "Perusahaan sedang berkembang pesat." },
    ],
    signalWords: ["now", "right now", "at the moment", "currently", "at present", "look!", "listen!"],
    wrongRight: [
      { wrong: "She is sleep.", right: "She is sleeping.", note: "Perlu tambahkan -ing" },
      { wrong: "I am knowing the answer.", right: "I know the answer.", note: "Stative verbs (know, like, want) tidak pakai -ing" },
    ],
  },

  // ─── 5. Past Continuous ──────────────────────────────────────────────────
  {
    id: "past-continuous",
    title: "Past Continuous Tense",
    icon: Rewind,
    shortDefinition: "Menyatakan aksi yang sedang berlangsung pada waktu tertentu di masa lalu.",
    formula: {
      positive: "S + was/were + V-ing + O",
      negative: "S + was/were + not + V-ing + O",
      question: "Was/Were + S + V-ing + O?",
    },
    usage: [
      "Aksi yang sedang berlangsung di waktu tertentu di masa lalu: At 8 PM, she was cooking.",
      "Dua aksi bersamaan di masa lalu: While I was reading, he was sleeping.",
      "Aksi yang terputus oleh aksi lain (pakai when/while): I was walking when it started to rain.",
    ],
    examples: [
      { sentence: "She was watching TV at 9 PM.", translation: "Dia sedang menonton TV jam 9 malam." },
      { sentence: "They weren't sleeping when I called.", translation: "Mereka tidak sedang tidur ketika saya menelepon." },
      { sentence: "Were you studying all afternoon?", translation: "Apakah kamu belajar sepanjang sore?" },
      { sentence: "I was cooking when the power went out.", translation: "Saya sedang memasak ketika listrik mati.", note: "when + Simple Past = memotong aksi" },
      { sentence: "While she was singing, he was dancing.", translation: "Sementara dia bernyanyi, dia menari.", note: "Dua aksi bersamaan" },
    ],
    signalWords: ["while", "when", "at that time", "at 8 PM yesterday", "all day yesterday"],
    wrongRight: [
      { wrong: "I were eating.", right: "I was eating.", note: "I → was (bukan were)" },
      { wrong: "She was eat dinner.", right: "She was eating dinner.", note: "Perlu V-ing" },
    ],
  },

  // ─── 6. Future Continuous ────────────────────────────────────────────────
  {
    id: "future-continuous",
    title: "Future Continuous Tense",
    icon: Timer,
    shortDefinition: "Menyatakan aksi yang akan sedang berlangsung pada waktu tertentu di masa depan.",
    formula: {
      positive: "S + will + be + V-ing + O",
      negative: "S + will + not + be + V-ing + O",
      question: "Will + S + be + V-ing + O?",
    },
    usage: [
      "Aksi yang sedang terjadi pada waktu tertentu di masa depan: At 10 AM, I will be presenting.",
      "Rencana yang sudah pasti di masa depan: This time next week, we will be flying to London.",
      "Kesopanan dalam bertanya: Will you be using the car later?",
    ],
    examples: [
      { sentence: "This time tomorrow, she will be traveling.", translation: "Besok waktu ini, dia akan sedang bepergian." },
      { sentence: "I won't be working on Sunday.", translation: "Saya tidak akan sedang bekerja hari Minggu." },
      { sentence: "Will they be staying at the hotel?", translation: "Apakah mereka akan menginap di hotel?" },
      { sentence: "At 9 PM, he will be watching the match.", translation: "Jam 9 malam, dia akan sedang menonton pertandingan." },
      { sentence: "We will be celebrating our anniversary next week.", translation: "Kami akan sedang merayakan ulang tahun pernikahan kami minggu depan." },
    ],
    signalWords: ["at this time tomorrow", "this time next week/year", "at … o'clock tomorrow", "when you arrive"],
    wrongRight: [
      { wrong: "She will being sleeping.", right: "She will be sleeping.", note: "Gunakan 'will be + V-ing', bukan 'will being'" },
    ],
  },

  // ─── 7. Present Perfect ──────────────────────────────────────────────────
  {
    id: "present-perfect",
    title: "Present Perfect Tense",
    icon: BadgeCheck,
    shortDefinition: "Menyatakan aksi yang sudah selesai tetapi masih relevan dengan kondisi saat ini, atau pengalaman hidup.",
    formula: {
      positive: "S + have/has + V3 + O",
      negative: "S + have/has + not + V3 + O",
      question: "Have/Has + S + V3 + O?",
    },
    usage: [
      "Pengalaman hidup (tanpa waktu spesifik): I have visited Japan.",
      "Aksi yang baru saja selesai: She has just finished her homework.",
      "Hasil yang masih relevan sekarang: He has broken his leg. (jadi masih sakit sekarang)",
      "Periode waktu yang belum selesai: I haven't eaten today.",
    ],
    examples: [
      { sentence: "I have never eaten sushi.", translation: "Saya tidak pernah makan sushi.", note: "Pengalaman" },
      { sentence: "She has just arrived.", translation: "Dia baru saja tiba.", note: "Baru saja" },
      { sentence: "Have you ever been to Europe?", translation: "Pernahkah kamu ke Eropa?" },
      { sentence: "They have lived here for 10 years.", translation: "Mereka sudah tinggal di sini selama 10 tahun.", note: "for = durasi" },
      { sentence: "I haven't seen him since Monday.", translation: "Saya tidak melihatnya sejak Senin.", note: "since = sejak kapan" },
    ],
    signalWords: ["just", "already", "yet", "ever", "never", "recently", "lately", "for", "since", "so far"],
    wrongRight: [
      { wrong: "I have went there.", right: "I have gone there.", note: "go → gone (V3)" },
      { wrong: "She has see that film.", right: "She has seen that film.", note: "see → seen (V3)" },
      { wrong: "Have you been there yesterday?", right: "Did you go there yesterday?", note: "Waktu spesifik (yesterday) → pakai Simple Past" },
    ],
  },

  // ─── 8. Past Perfect ─────────────────────────────────────────────────────
  {
    id: "past-perfect",
    title: "Past Perfect Tense",
    icon: Archive,
    shortDefinition: "Menyatakan aksi yang sudah selesai sebelum aksi lain di masa lalu.",
    formula: {
      positive: "S + had + V3 + O",
      negative: "S + had + not (hadn't) + V3 + O",
      question: "Had + S + V3 + O?",
    },
    usage: [
      "Aksi yang selesai sebelum aksi lain di masa lalu: When I arrived, she had already left.",
      "Kondisi yang terjadi sebelum titik waktu di masa lalu: By 2020, he had worked there for 5 years.",
      "Sering berpasangan dengan Simple Past (when, before, after, by the time).",
    ],
    examples: [
      { sentence: "By the time I arrived, the movie had already started.", translation: "Ketika saya tiba, filmnya sudah dimulai." },
      { sentence: "She hadn't eaten anything before the meeting.", translation: "Dia tidak makan apa-apa sebelum rapat." },
      { sentence: "Had they finished the project before the deadline?", translation: "Apakah mereka menyelesaikan proyek sebelum deadline?" },
      { sentence: "He was tired because he had worked all day.", translation: "Dia lelah karena sudah bekerja sepanjang hari." },
      { sentence: "I recognized her because we had met before.", translation: "Saya mengenalinya karena kami pernah bertemu sebelumnya." },
    ],
    signalWords: ["before", "after", "when", "by the time", "already", "just", "never", "once"],
    wrongRight: [
      { wrong: "She had went home.", right: "She had gone home.", note: "go → gone (V3)" },
      { wrong: "When I arrived, he leaved.", right: "When I arrived, he had left.", note: "Aksi lebih dulu → had + V3" },
    ],
  },

  // ─── 9. Future Perfect ───────────────────────────────────────────────────
  {
    id: "future-perfect",
    title: "Future Perfect Tense",
    icon: Target,
    shortDefinition: "Menyatakan aksi yang akan sudah selesai sebelum waktu atau aksi lain di masa depan.",
    formula: {
      positive: "S + will + have + V3 + O",
      negative: "S + will + not + have + V3 + O",
      question: "Will + S + have + V3 + O?",
    },
    usage: [
      "Aksi yang akan selesai sebelum titik waktu di masa depan: By Friday, I will have finished.",
      "Sering dipakai dengan 'by (the time)', 'before', 'when'.",
    ],
    examples: [
      { sentence: "By next year, she will have graduated.", translation: "Tahun depan, dia sudah wisuda." },
      { sentence: "I won't have finished the book by Monday.", translation: "Saya belum akan selesai membaca buku itu Senin." },
      { sentence: "Will you have completed the course by December?", translation: "Apakah kamu akan sudah menyelesaikan kursus itu pada Desember?" },
      { sentence: "By the time he arrives, we will have eaten.", translation: "Ketika dia tiba, kami sudah makan." },
    ],
    signalWords: ["by (next week/month/year)", "before", "by the time", "by then", "by 2026"],
    wrongRight: [
      { wrong: "I will have finish it.", right: "I will have finished it.", note: "Perlu V3 (finished, not finish)" },
    ],
  },

  // ─── 10. Present Perfect Continuous ──────────────────────────────────────
  {
    id: "present-perfect-continuous",
    title: "Present Perfect Continuous",
    icon: TrendingUp,
    shortDefinition: "Menyatakan aksi yang dimulai di masa lalu dan masih berlangsung atau baru saja selesai dengan hasil yang terlihat.",
    formula: {
      positive: "S + have/has + been + V-ing + O",
      negative: "S + have/has + not + been + V-ing + O",
      question: "Have/Has + S + been + V-ing + O?",
    },
    usage: [
      "Aksi yang dimulai masa lalu dan masih berlangsung: I have been studying for 3 hours.",
      "Aksi yang baru saja selesai dengan bukti nyata: She looks tired — she has been running.",
      "Fokus pada durasi proses (bukan hasil): They have been building the house.",
    ],
    examples: [
      { sentence: "I have been waiting for an hour.", translation: "Saya sudah menunggu selama satu jam.", note: "Masih menunggu sekarang" },
      { sentence: "She has been crying — her eyes are red.", translation: "Dia baru saja menangis — matanya merah.", note: "Baru selesai, hasilnya terlihat" },
      { sentence: "Have you been working all day?", translation: "Apakah kamu sudah bekerja sepanjang hari?" },
      { sentence: "They haven't been sleeping well lately.", translation: "Mereka tidak tidur nyenyak akhir-akhir ini." },
    ],
    signalWords: ["for", "since", "all day/week", "lately", "recently", "how long"],
    wrongRight: [
      { wrong: "She has been sleep for hours.", right: "She has been sleeping for hours.", note: "Perlu V-ing" },
    ],
  },

  // ─── 11. Past Perfect Continuous ─────────────────────────────────────────
  {
    id: "past-perfect-continuous",
    title: "Past Perfect Continuous",
    icon: Layers,
    shortDefinition: "Menyatakan aksi yang sudah berlangsung lama sebelum aksi lain terjadi di masa lalu.",
    formula: {
      positive: "S + had + been + V-ing + O",
      negative: "S + had + not + been + V-ing + O",
      question: "Had + S + been + V-ing + O?",
    },
    usage: [
      "Durasi aksi sebelum titik waktu di masa lalu: He had been working there for 5 years before he quit.",
      "Penyebab di masa lalu: She was exhausted because she had been studying all night.",
    ],
    examples: [
      { sentence: "He had been playing football before it started raining.", translation: "Dia sudah bermain sepak bola sebelum hujan turun." },
      { sentence: "They hadn't been sleeping well before the exam.", translation: "Mereka tidak tidur nyenyak sebelum ujian." },
      { sentence: "How long had you been waiting?", translation: "Sudah berapa lama kamu menunggu?" },
      { sentence: "I was tired because I had been running.", translation: "Saya lelah karena sudah berlari." },
    ],
    signalWords: ["for", "since", "before", "when", "all day", "all morning"],
    wrongRight: [
      { wrong: "He had been work there.", right: "He had been working there.", note: "Perlu V-ing" },
    ],
  },

  // ─── 12. Future Perfect Continuous ───────────────────────────────────────
  {
    id: "future-perfect-continuous",
    title: "Future Perfect Continuous",
    icon: Infinity,
    shortDefinition: "Menyatakan aksi yang akan sedang berlangsung selama durasi tertentu sebelum titik waktu di masa depan.",
    formula: {
      positive: "S + will + have + been + V-ing + O",
      negative: "S + will + not + have + been + V-ing + O",
      question: "Will + S + have + been + V-ing + O?",
    },
    usage: [
      "Durasi aksi yang akan berlangsung hingga titik waktu di masa depan: By June, I will have been studying for 2 years.",
      "Fokus pada proses & durasi di masa depan.",
    ],
    examples: [
      { sentence: "By 2027, she will have been teaching for 10 years.", translation: "Pada 2027, dia sudah mengajar selama 10 tahun." },
      { sentence: "I won't have been living here long enough to know the area.", translation: "Saya belum cukup lama tinggal di sini untuk mengenal daerah ini." },
      { sentence: "Will you have been working here for 5 years by then?", translation: "Apakah kamu sudah bekerja di sini selama 5 tahun pada saat itu?" },
    ],
    signalWords: ["by (next year)", "for … by then", "how long … will … have been"],
    wrongRight: [
      { wrong: "She will have been work.", right: "She will have been working.", note: "Perlu V-ing" },
    ],
  },
];
