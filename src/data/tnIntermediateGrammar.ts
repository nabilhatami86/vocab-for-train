// TN Intermediate — Grammar: 5 Tenses + Adjective Clause + To Infinitive & Gerund

import {
  Sun, History, Rocket, Activity, BadgeCheck,
  Link2, Layers,
} from 'lucide-react';

// ─── Shared Types ────────────────────────────────────────────────────────────

export type TenseExample = {
  sentence: string;
  translation: string;
  note?: string;
  /** Show alternate contracted/uncontracted form below the sentence */
  altForm?: string;
};

export type TenseFormula = {
  positive: string;
  negative: string;
  question: string;
};

export type WrongRight = {
  wrong: string;
  right: string;
  note: string;
};

export type Exercise = {
  question: string;
  options: [string, string, string, string];
  answer: string;
  explanation: string;
};

// ─── Tense Topic ─────────────────────────────────────────────────────────────

export type TenseTopic = {
  kind: 'tense';
  id: string;
  title: string;
  icon: React.ElementType;
  shortDefinition: string;
  formula: TenseFormula;
  usage: { title: string; example: string }[];
  examples: TenseExample[];
  signalWords: string[];
  wrongRight: WrongRight[];
  exercises: Exercise[];
};

// ─── Grammar Topic (Adjective Clause / To Inf & Gerund) ───────────────────────

export type SubSection = {
  subtitle: string;
  explanation?: string;
  bullets?: string[];
  examples?: TenseExample[];
  table?: { caption?: string; headers: string[]; rows: string[][] };
  tip?: string;
  wrongRight?: WrongRight[];
};

export type GrammarSection = {
  title: string;
  explanation?: string;
  bullets?: string[];
  examples?: TenseExample[];
  table?: { caption?: string; headers: string[]; rows: string[][] };
  tip?: string;
  wrongRight?: WrongRight[];
  subsections?: SubSection[];
};

export type GrammarTopic = {
  kind: 'grammar';
  id: string;
  title: string;
  icon: React.ElementType;
  shortDefinition: string;
  sections: GrammarSection[];
  exercises: Exercise[];
};

export type AnyGrammarTopic = TenseTopic | GrammarTopic;

// ─── 1. Simple Present ────────────────────────────────────────────────────────

const simplePresentTopic: TenseTopic = {
  kind: 'tense',
  id: 'simple-present',
  title: 'Simple Present Tense',
  icon: Sun,
  shortDefinition: 'Menyatakan kebiasaan, fakta umum, atau kejadian yang berlangsung secara rutin.',
  formula: {
    positive: 'S + V1 (s/es) + O',
    negative: 'S + do/does + not + V1 + O',
    question: 'Do/Does + S + V1 + O?',
  },
  usage: [
    { title: 'Kebiasaan / rutinitas', example: 'She drinks coffee every morning.' },
    { title: 'Fakta umum / kebenaran ilmiah', example: 'The sun rises in the east.' },
    { title: 'Jadwal / timetable', example: 'The train leaves at 8 AM.' },
    { title: 'Perasaan & opini saat ini', example: 'I love this song.' },
    { title: 'Instruksi / arahan', example: 'First, you open the app, then you log in.' },
  ],
  examples: [
    { sentence: 'She works at a hospital.', translation: 'Dia bekerja di rumah sakit.', note: 'She → tambah -s' },
    { sentence: 'They don\'t eat meat.', translation: 'Mereka tidak makan daging.' },
    { sentence: 'Does he speak English?', translation: 'Apakah dia bisa berbicara Bahasa Inggris?' },
    { sentence: 'Water boils at 100°C.', translation: 'Air mendidih pada 100°C.', note: 'Fakta ilmiah' },
    { sentence: 'I usually wake up at 6 AM.', translation: 'Saya biasanya bangun jam 6 pagi.' },
    { sentence: 'The bus leaves at 7 every morning.', translation: 'Bus berangkat jam 7 setiap pagi.', note: 'Jadwal tetap' },
  ],
  signalWords: ['always', 'usually', 'often', 'sometimes', 'rarely', 'never', 'every day/week/month', 'on Mondays', 'in general', 'as a rule'],
  wrongRight: [
    { wrong: 'She work hard.', right: 'She works hard.', note: 'He/She/It → tambah -s/-es pada verb' },
    { wrong: 'Do he know?', right: 'Does he know?', note: 'He/She/It → pakai does, bukan do' },
    { wrong: 'They doesn\'t like it.', right: 'They don\'t like it.', note: 'They/We/You/I → pakai do not, bukan does not' },
    { wrong: 'She is go to school every day.', right: 'She goes to school every day.', note: 'Simple Present tidak pakai is/am/are + V1' },
  ],
  exercises: [
    {
      question: 'She ___ (work) at a hospital every day.',
      options: ['work', 'works', 'is working', 'worked'],
      answer: 'works',
      explanation: 'She (He/She/It) → tambah -s pada verb untuk Simple Present.',
    },
    {
      question: 'Water ___ at 100 degrees Celsius.',
      options: ['boil', 'boils', 'boiled', 'is boiling'],
      answer: 'boils',
      explanation: 'Fakta ilmiah menggunakan Simple Present. "Water" = singular → boils.',
    },
    {
      question: '___ they live near the school?',
      options: ['Does', 'Is', 'Do', 'Are'],
      answer: 'Do',
      explanation: 'They = plural → gunakan "Do" untuk membentuk kalimat tanya.',
    },
    {
      question: 'He ___ not play football anymore.',
      options: ['do', 'does', 'did', 'is'],
      answer: 'does',
      explanation: 'He (He/She/It) → gunakan "does not" untuk kalimat negatif.',
    },
    {
      question: 'My brother always ___ early on weekdays.',
      options: ['wake up', 'wakes up', 'is waking up', 'woke up'],
      answer: 'wakes up',
      explanation: 'My brother = He → tambah -s. Signal word "always" = Simple Present.',
    },
    {
      question: 'The sun ___ in the east.',
      options: ['rise', 'rises', 'rose', 'is rising'],
      answer: 'rises',
      explanation: 'Fakta umum → Simple Present. "The sun" = singular → rises.',
    },
    {
      question: 'I ___ coffee every morning.',
      options: ['drinks', 'am drinking', 'drink', 'drank'],
      answer: 'drink',
      explanation: 'I → tidak tambah -s. "Every morning" = signal word Simple Present.',
    },
    {
      question: 'Does she ___ to music on her way to work?',
      options: ['listens', 'listening', 'listen', 'listened'],
      answer: 'listen',
      explanation: 'Setelah Does → selalu gunakan V1 (bentuk dasar), tanpa -s.',
    },
    {
      question: 'The train ___ at 8 AM every Monday.',
      options: ['leave', 'leaving', 'leaves', 'will leave'],
      answer: 'leaves',
      explanation: 'Jadwal tetap = Simple Present. "The train" = singular → leaves.',
    },
    {
      question: 'They ___ not understand the instructions.',
      options: ['does', 'do', 'is', 'are'],
      answer: 'do',
      explanation: 'They = plural → gunakan "do not" untuk negatif.',
    },
  ],
};

// ─── 2. Simple Past ───────────────────────────────────────────────────────────

const simplePastTopic: TenseTopic = {
  kind: 'tense',
  id: 'simple-past',
  title: 'Simple Past Tense',
  icon: History,
  shortDefinition: 'Menyatakan kejadian yang sudah selesai di waktu lampau.',
  formula: {
    positive: 'S + V2 + O',
    negative: 'S + did + not + V1 + O',
    question: 'Did + S + V1 + O?',
  },
  usage: [
    { title: 'Kejadian selesai di masa lalu', example: 'I visited Bali last year.' },
    { title: 'Serangkaian kejadian di masa lalu', example: 'She woke up, showered, and left.' },
    { title: 'Kebiasaan lama yang tidak dilakukan lagi', example: 'He played football when he was young.' },
    { title: 'Kondisi / situasi di masa lalu', example: 'The house was quiet when I arrived.' },
  ],
  examples: [
    { sentence: 'They visited the museum yesterday.', translation: 'Mereka mengunjungi museum kemarin.' },
    { sentence: 'She didn\'t call me last night.', translation: 'Dia tidak meneleponku tadi malam.' },
    { sentence: 'Did you see that movie?', translation: 'Apakah kamu menonton film itu?' },
    { sentence: 'He studied abroad for two years.', translation: 'Dia belajar di luar negeri selama dua tahun.' },
    { sentence: 'We went to the beach last Sunday.', translation: 'Kami pergi ke pantai Minggu lalu.' },
    { sentence: 'She was nervous before the interview.', translation: 'Dia gugup sebelum wawancara.', note: 'Kondisi di masa lalu → was' },
  ],
  signalWords: ['yesterday', 'last (week/month/year)', 'ago', 'in 2020', 'when I was a child', 'just now', 'at that time', 'the other day'],
  wrongRight: [
    { wrong: 'She goed to school.', right: 'She went to school.', note: 'go → went (irregular verb, tidak ada "goed")' },
    { wrong: 'Did you went there?', right: 'Did you go there?', note: 'Setelah Did → selalu V1 (bentuk dasar)' },
    { wrong: 'He didn\'t came yesterday.', right: 'He didn\'t come yesterday.', note: 'Setelah didn\'t → V1 (bukan V2)' },
    { wrong: 'I buyed a new phone.', right: 'I bought a new phone.', note: 'buy → bought (irregular verb)' },
  ],
  exercises: [
    {
      question: 'She ___ (visit) London last summer.',
      options: ['visit', 'visits', 'visited', 'is visiting'],
      answer: 'visited',
      explanation: '"Last summer" adalah signal word Simple Past. Regular verb: visit → visited.',
    },
    {
      question: 'We ___ (go) to the beach last Sunday.',
      options: ['go', 'goes', 'went', 'going'],
      answer: 'went',
      explanation: '"Last Sunday" = Simple Past. go adalah irregular verb → went.',
    },
    {
      question: 'Did you ___ (see) that film yesterday?',
      options: ['see', 'saw', 'seen', 'sees'],
      answer: 'see',
      explanation: 'Setelah Did → selalu gunakan V1 (bentuk dasar).',
    },
    {
      question: 'He ___ not call me last night.',
      options: ['do', 'does', 'did', 'done'],
      answer: 'did',
      explanation: 'Kalimat negatif Simple Past → did not + V1.',
    },
    {
      question: 'I ___ (meet) her at the conference in 2022.',
      options: ['meet', 'meets', 'met', 'meeting'],
      answer: 'met',
      explanation: '"In 2022" = signal word Simple Past. meet adalah irregular verb → met.',
    },
    {
      question: 'They ___ (buy) a new car two years ago.',
      options: ['buy', 'buyed', 'bought', 'buying'],
      answer: 'bought',
      explanation: '"Two years ago" = Simple Past. buy → bought (irregular).',
    },
    {
      question: 'She ___ not understand the question.',
      options: ['do', 'does', 'did', 'done'],
      answer: 'did',
      explanation: 'Negatif Simple Past → did not. Untuk semua subjek (I/She/They, dst.).',
    },
    {
      question: 'Where ___ you ___ (go) last weekend?',
      options: ['did / go', 'do / go', 'did / went', 'does / go'],
      answer: 'did / go',
      explanation: 'Kalimat tanya Simple Past → Did + S + V1. Setelah did → V1 (go).',
    },
    {
      question: 'He ___ (study) hard for the final exam.',
      options: ['study', 'studies', 'studied', 'is studying'],
      answer: 'studied',
      explanation: 'Regular verb: study → studied (y + ied). Konteks = masa lalu.',
    },
    {
      question: 'The accident ___ (happen) at 10 PM last night.',
      options: ['happen', 'happens', 'happened', 'will happen'],
      answer: 'happened',
      explanation: '"Last night" = Simple Past. happen → happened (regular).',
    },
  ],
};

// ─── 3. Simple Future ─────────────────────────────────────────────────────────

const simpleFutureTopic: TenseTopic = {
  kind: 'tense',
  id: 'simple-future',
  title: 'Simple Future Tense',
  icon: Rocket,
  shortDefinition: 'Menyatakan rencana, prediksi, atau keputusan spontan di masa depan.',
  formula: {
    positive: 'S + will + V1 + O',
    negative: 'S + will + not (won\'t) + V1 + O',
    question: 'Will + S + V1 + O?',
  },
  usage: [
    { title: 'Keputusan spontan (saat itu juga)', example: 'I\'ll help you with that!' },
    { title: 'Prediksi / harapan', example: 'It will rain tomorrow.' },
    { title: 'Janji', example: 'I will call you tonight.' },
    { title: 'Penawaran', example: 'I\'ll carry that for you.' },
    { title: 'Kondisional (if-clause)', example: 'If you study hard, you will pass.' },
  ],
  examples: [
    { sentence: 'She will finish the report by Friday.', translation: 'Dia akan menyelesaikan laporan itu sebelum Jumat.' },
    { sentence: 'I won\'t be late again.', translation: 'Saya tidak akan terlambat lagi.' },
    { sentence: 'Will they join the meeting?', translation: 'Apakah mereka akan ikut rapat?' },
    { sentence: 'The weather will be sunny tomorrow.', translation: 'Cuaca akan cerah besok.', note: 'Prediksi' },
    { sentence: 'I\'ll have a coffee, please.', translation: 'Saya pesan kopi, tolong ya.', note: 'Keputusan spontan' },
    { sentence: 'Don\'t worry, I\'ll fix it.', translation: 'Jangan khawatir, saya akan memperbaikinya.', note: 'Penawaran / janji spontan' },
  ],
  signalWords: ['tomorrow', 'next (week/month/year)', 'soon', 'in the future', 'later', 'tonight', 'in … days/weeks/months'],
  wrongRight: [
    { wrong: 'She will goes there.', right: 'She will go there.', note: 'Setelah will → selalu V1 (tanpa -s/-es)' },
    { wrong: 'I will to call you.', right: 'I will call you.', note: 'Tidak ada "to" setelah will' },
    { wrong: 'Will she goes to school?', right: 'Will she go to school?', note: 'Dalam kalimat tanya pun, setelah will → V1' },
    { wrong: 'He wills come.', right: 'He will come.', note: '"will" tidak berubah untuk He/She/It (bukan "wills")' },
  ],
  exercises: [
    {
      question: 'I ___ (help) you with your homework tonight.',
      options: ['help', 'helps', 'will help', 'am helping'],
      answer: 'will help',
      explanation: '"Tonight" = future. Keputusan/penawaran spontan → will + V1.',
    },
    {
      question: 'She ___ not come to the party next week.',
      options: ['do', 'does', 'will', 'shall'],
      answer: 'will',
      explanation: 'Kalimat negatif Simple Future → will not (won\'t) untuk semua subjek.',
    },
    {
      question: '___ they finish the project by Monday?',
      options: ['Do', 'Does', 'Will', 'Are'],
      answer: 'Will',
      explanation: 'Kalimat tanya Simple Future → Will + S + V1.',
    },
    {
      question: 'The weather ___ (be) hot tomorrow.',
      options: ['is', 'was', 'will be', 'has been'],
      answer: 'will be',
      explanation: '"Tomorrow" = future. Prediksi → will + V1 (be).',
    },
    {
      question: 'He ___ (graduate) next year.',
      options: ['graduate', 'graduates', 'will graduate', 'graduated'],
      answer: 'will graduate',
      explanation: '"Next year" = signal word future. will + V1.',
    },
    {
      question: 'Don\'t worry, I ___ (fix) the problem.',
      options: ['fix', 'fixed', 'will fix', 'am fixing'],
      answer: 'will fix',
      explanation: 'Janji / penawaran spontan → will + V1.',
    },
    {
      question: 'If you study hard, you ___ (pass) the exam.',
      options: ['pass', 'passes', 'will pass', 'passed'],
      answer: 'will pass',
      explanation: 'If + Simple Present → will + V1 (kondisional).',
    },
    {
      question: '___ you ___ (be) at home later this afternoon?',
      options: ['Will / be', 'Do / be', 'Are / be', 'Will / are'],
      answer: 'Will / be',
      explanation: 'Kalimat tanya future → Will + S + V1. "be" adalah V1.',
    },
    {
      question: 'She will ___ (go) to Paris next month.',
      options: ['goes', 'went', 'going', 'go'],
      answer: 'go',
      explanation: 'Setelah will → selalu V1 (bentuk dasar, tanpa -s atau -ed).',
    },
    {
      question: 'We ___ (not / be) late, I promise.',
      options: ['won\'t be', 'aren\'t be', 'didn\'t be', 'don\'t be'],
      answer: 'won\'t be',
      explanation: 'Negatif future → won\'t (will not) + V1. "be" tetap V1.',
    },
  ],
};

// ─── 4. Present Continuous ────────────────────────────────────────────────────

const presentContinuousTopic: TenseTopic = {
  kind: 'tense',
  id: 'present-continuous',
  title: 'Present Continuous Tense',
  icon: Activity,
  shortDefinition: 'Menyatakan aksi yang sedang berlangsung sekarang atau rencana mendatang yang sudah pasti.',
  formula: {
    positive: 'S + am/is/are + V-ing + O',
    negative: 'S + am/is/are + not + V-ing + O',
    question: 'Am/Is/Are + S + V-ing + O?',
  },
  usage: [
    { title: 'Sedang terjadi saat ini', example: 'She is talking on the phone right now.' },
    { title: 'Situasi sementara (bukan permanen)', example: 'I am living with my parents this month.' },
    { title: 'Rencana pasti yang sudah diatur', example: 'We are meeting at 7 PM tonight.' },
    { title: 'Perubahan / tren yang sedang terjadi', example: 'Prices are rising every year.' },
  ],
  examples: [
    { sentence: 'He is reading a book right now.', translation: 'Dia sedang membaca buku sekarang.' },
    { sentence: 'They aren\'t working today.', translation: 'Mereka tidak sedang bekerja hari ini.' },
    { sentence: 'Are you listening to me?', translation: 'Apakah kamu mendengarkan saya?' },
    { sentence: 'I am meeting the doctor tomorrow.', translation: 'Saya akan menemui dokter besok.', note: 'Rencana pasti ke depan' },
    { sentence: 'The company is growing rapidly.', translation: 'Perusahaan sedang berkembang pesat.', note: 'Tren yang sedang terjadi' },
    { sentence: 'Look! It is raining outside.', translation: 'Lihat! Hujan di luar sekarang.', note: 'Terjadi tepat saat berbicara' },
  ],
  signalWords: ['now', 'right now', 'at the moment', 'currently', 'at present', 'look!', 'listen!', 'still', 'these days'],
  wrongRight: [
    { wrong: 'She is sleep.', right: 'She is sleeping.', note: 'Perlu tambahkan -ing pada verb utama' },
    { wrong: 'I am knowing the answer.', right: 'I know the answer.', note: 'Stative verbs (know, like, want, love, believe, hate) TIDAK pakai -ing' },
    { wrong: 'He are running.', right: 'He is running.', note: 'He/She/It → is (bukan are)' },
    { wrong: 'Are she coming?', right: 'Is she coming?', note: 'She → Is (bukan Are)' },
  ],
  exercises: [
    {
      question: 'She ___ (talk) on the phone right now.',
      options: ['talks', 'talk', 'is talking', 'was talking'],
      answer: 'is talking',
      explanation: '"Right now" = signal word Present Continuous. She → is + V-ing.',
    },
    {
      question: 'They ___ not ___ (sleep) at the moment.',
      options: ['is / sleeping', 'are / sleeping', 'do / sleeping', 'did / sleeping'],
      answer: 'are / sleeping',
      explanation: 'They → are. Negatif → are not sleeping.',
    },
    {
      question: '___ you ___ (listen) to music now?',
      options: ['Is / listening', 'Are / listening', 'Do / listening', 'Did / listening'],
      answer: 'Are / listening',
      explanation: 'You → Are. Kalimat tanya → Are you + V-ing?',
    },
    {
      question: 'Look! The cat ___ (climb) the tree.',
      options: ['climb', 'climbs', 'is climbing', 'climbed'],
      answer: 'is climbing',
      explanation: '"Look!" = signal word Present Continuous. The cat (singular) → is climbing.',
    },
    {
      question: 'I ___ (meet) the manager tomorrow afternoon. (plan)',
      options: ['meet', 'will meet', 'am meeting', 'met'],
      answer: 'am meeting',
      explanation: 'Rencana pasti ke depan bisa pakai Present Continuous. I → am + V-ing.',
    },
    {
      question: 'He ___ (not / watch) TV at the moment.',
      options: ['doesn\'t watching', 'isn\'t watching', 'aren\'t watching', 'don\'t watching'],
      answer: 'isn\'t watching',
      explanation: 'He → is. Negatif → is not (isn\'t) + V-ing.',
    },
    {
      question: 'The students ___ (study) in the library right now.',
      options: ['study', 'studies', 'are studying', 'were studying'],
      answer: 'are studying',
      explanation: '"Right now" = Present Continuous. The students = plural → are + V-ing.',
    },
    {
      question: '___ she ___ (work) on a new project these days?',
      options: ['Is / working', 'Are / working', 'Does / working', 'Do / working'],
      answer: 'Is / working',
      explanation: 'She → Is. "These days" = Present Continuous. Is + S + V-ing?',
    },
    {
      question: 'I ___ (know) the answer. (Choose the correct sentence)',
      options: ['I am knowing the answer.', 'I is knowing the answer.', 'I know the answer.', 'I knowing the answer.'],
      answer: 'I know the answer.',
      explanation: '"Know" adalah stative verb (verb keadaan). Stative verbs tidak digunakan dalam bentuk -ing.',
    },
    {
      question: 'Prices ___ (rise) rapidly these days.',
      options: ['rise', 'rises', 'are rising', 'rose'],
      answer: 'are rising',
      explanation: '"These days" + tren yang sedang terjadi = Present Continuous. Prices = plural → are rising.',
    },
  ],
};

// ─── 5. Present Perfect ───────────────────────────────────────────────────────

const presentPerfectTopic: TenseTopic = {
  kind: 'tense',
  id: 'present-perfect',
  title: 'Present Perfect Tense',
  icon: BadgeCheck,
  shortDefinition: 'Menyatakan aksi di masa lalu yang masih relevan sekarang. Ada 3 bentuk: Verbal Active, Verbal Passive (be + V3), dan Non Verbal (be + ANA).',
  formula: {
    positive: 'S + have/has + V3  |  S + have/has + been + V3  |  S + have/has + been + ANA',
    negative: 'S + have/has + not + V3  |  S + have/has + not + been + V3  |  S + have/has + not + been + ANA',
    question: 'Have/Has + S + V3?  |  Have/Has + S + been + V3?  |  Have/Has + S + been + ANA?',
  },
  usage: [
    {
      title: '1) Menyatakan pengalaman',
      example: '{{annotation:I|S}} {{annotation:have already finished|Vaux+Vord}} my study program.',
    },
    {
      title: '2) Aksi yang baru selesai',
      example: '{{annotation:We|S}} {{annotation:have just finished|Vaux+Vord}} speaking class.',
    },
    {
      title: '3) Aksi di masa lampau yang masih berlangsung',
      example: '{{annotation:I|S}} {{annotation:have lived|Vaux+Vord}} here {{annotation:for|signal}} 3 months.',
    },
    {
      title: '4) Mempengaruhi kondisi saat ini',
      example: "I'm sad because {{annotation:I|S}} {{annotation:have lost|Vaux+Vord}} my wallet.",
    },
    {
      title: "5) Aksi berulang (bukan habit)",
      example: "{{annotation:I|S}} {{annotation:have watched|Vaux+Vord}} 'Insidious' movie many times.",
    },
    {
      title: '6) Perubahan di masa lalu & sekarang',
      example: '{{annotation:Your English skills|S}} {{annotation:have improved|Vaux+Vord}}.',
    },
  ],
  examples: [
    // ── Verbal Active ────────────────────────────────────────────
    {
      sentence: '{{annotation:I|S}} {{annotation:have|Vaux}} {{annotation:done|Vord}} my homework.',
      translation: 'Saya sudah mengerjakan PR saya.',
      note: 'Verbal Active (+)',
    },
    {
      sentence: '{{annotation:I|S}} {{annotation:have|Vaux}} {{annotation:justified|Vord}} her statement.',
      translation: 'Saya telah membenarkan pernyataannya.',
      note: 'Verbal Active (+)',
    },
    {
      sentence: '{{annotation:He|S}} {{annotation:has not|Vaux}} {{annotation:tackled|Vord}} with his striker.',
      translation: 'Dia belum bertakling dengan strikernya.',
      note: 'Verbal Active (−)',
      altForm: "He hasn't tackled with his striker.",
    },
    {
      sentence: "{{annotation:I|S}} {{annotation:have not|Vaux}} {{annotation:discovered|Vord}} the problem.",
      translation: 'Saya belum menemukan masalahnya.',
      note: "Verbal Active (−)  |  I've not = I have not",
      altForm: "I haven't discovered the problem.",
    },
    {
      sentence: '{{annotation:Have|Vaux}} {{annotation:the products of quality|S}} {{annotation:declined|Vord}}?',
      translation: 'Apakah kualitas produk telah menurun?',
      note: 'Verbal Active (?)',
    },
    {
      sentence: '{{annotation:Has|Vaux}} {{annotation:she|S}} {{annotation:maintained|Vord}} this car?',
      translation: 'Apakah dia sudah merawat mobil ini?',
      note: 'Verbal Active (?)',
    },
    // ── Verbal Passive ───────────────────────────────────────────
    {
      sentence: '{{annotation:The class|S}} {{annotation:has been|Vaux}} {{annotation:started|Vord}} at 9 p.m.',
      translation: 'Kelas telah dimulai pukul 9 malam.',
      note: 'Verbal Passive (+)',
    },
    {
      sentence: '{{annotation:The target|S}} {{annotation:has been|Vaux}} {{annotation:achieved|Vord}} by my team.',
      translation: 'Target telah dicapai oleh tim saya.',
      note: 'Verbal Passive (+)',
    },
    {
      sentence: '{{annotation:The food|S}} {{annotation:has not been|Vaux}} {{annotation:cooked|Vord}} by my mom.',
      translation: 'Makanan belum dimasak oleh ibu saya.',
      note: 'Verbal Passive (−)',
      altForm: "The food hasn't been cooked by my mom.",
    },
    {
      sentence: '{{annotation:The flood|S}} {{annotation:has not been|Vaux}} {{annotation:led|Vord}} to by global warming.',
      translation: 'Banjir itu belum disebabkan oleh pemanasan global.',
      note: 'Verbal Passive (−)',
      altForm: "The flood hasn't been led to by global warming.",
    },
    // ── Non Verbal ───────────────────────────────────────────────
    {
      sentence: '{{annotation:I|S}} {{annotation:have been|Vaux}} {{annotation:tired|ANA}} all day.',
      translation: 'Saya sudah merasa lelah sepanjang hari.',
      note: 'Non Verbal (+)',
    },
    {
      sentence: '{{annotation:She|S}} {{annotation:has been|Vaux}} {{annotation:stronger|ANA}} after GYM.',
      translation: 'Dia menjadi lebih kuat setelah gym.',
      note: 'Non Verbal (+)',
    },
    {
      sentence: '{{annotation:We|S}} {{annotation:have not been|Vaux}} {{annotation:happy|ANA}} since I live in Pare.',
      translation: 'Kami tidak bahagia sejak tinggal di Pare.',
      note: 'Non Verbal (−)',
      altForm: "We haven't been happy since I live in Pare.",
    },
    {
      sentence: "{{annotation:My life|S}} {{annotation:hasn't been|Vaux}} {{annotation:perfect|ANA}} by my imagination.",
      translation: 'Hidupku belum sempurna sesuai imajinasi.',
      note: 'Non Verbal (−)',
      altForm: 'My life has not been perfect by my imagination.',
    },
    {
      sentence: '{{annotation:Has|Vaux}} {{annotation:he|S}} been {{annotation:busy|ANA}} lately?',
      translation: 'Apakah dia sibuk belakangan ini?',
      note: 'Non Verbal (?)',
    },
    {
      sentence: '{{annotation:Has|Vaux}} {{annotation:he|S}} been {{annotation:a student|ANA}} for his life?',
      translation: 'Apakah dia sudah menjadi pelajar seumur hidupnya?',
      note: 'Non Verbal (?)',
    },
  ],
  signalWords: ['just', 'already', 'yet', 'ever', 'never', 'since (+ waktu mulai)', 'for (+ durasi)', 'so far', 'up to now', 'lately', 'recently'],
  wrongRight: [
    { wrong: 'I have went there.', right: 'I have gone there.', note: 'go → gone (V3, bukan "went")' },
    { wrong: 'She has see that film.', right: 'She has seen that film.', note: 'see → seen (V3)' },
    { wrong: 'Have you been there yesterday?', right: 'Did you go there yesterday?', note: 'Waktu spesifik (yesterday) → Simple Past, bukan Present Perfect' },
    { wrong: 'The food has not cook by mom.', right: 'The food has not been cooked by mom.', note: 'Verbal Passive → have/has + been + V3' },
    { wrong: 'She has been tire all day.', right: 'She has been tired all day.', note: 'Non Verbal → have/has + been + ANA (adjective/adverb)' },
  ],
  exercises: [
    {
      question: 'She ___ her homework yet.',
      options: ["hasn't finished", 'didn\'t finish', 'doesn\'t finish', 'isn\'t finishing'],
      answer: "hasn't finished",
      explanation: 'Present Perfect negatif dengan "yet" → S + have/has + not + V3.',
    },
    {
      question: 'I ___ to Japan before. It was amazing.',
      options: ['have been', 'was', 'am', 'had been'],
      answer: 'have been',
      explanation: 'Pengalaman hidup → Present Perfect. "have been to" = pernah pergi ke.',
    },
    {
      question: 'The report ___ by the manager since this morning.',
      options: ['has been written', 'was written', 'is written', 'has written'],
      answer: 'has been written',
      explanation: 'Verbal Passive Present Perfect: S + have/has + been + V3. "since" = time signal.',
    },
    {
      question: '___ you ever eaten durian?',
      options: ['Have', 'Has', 'Did', 'Do'],
      answer: 'Have',
      explanation: 'Present Perfect tanya dengan "ever": Have/Has + S + V3? Subject "you" → Have.',
    },
    {
      question: 'She ___ tired all day because of the long meeting.',
      options: ['has been', 'is been', 'was been', 'have been'],
      answer: 'has been',
      explanation: 'Non Verbal (be + ANA): S + have/has + been + ANA. Subject "she" → has.',
    },
    {
      question: 'The target ___ by my team this week.',
      options: ['has been achieved', 'was achieved', 'is achieved', 'have achieved'],
      answer: 'has been achieved',
      explanation: 'Verbal Passive Present Perfect: S + have/has + been + V3.',
    },
    {
      question: 'We ___ just ___ speaking class.',
      options: ['have / finished', 'has / finished', 'did / finish', 'are / finishing'],
      answer: 'have / finished',
      explanation: '"Just" = time signal Present Perfect. We → have. finish → finished (V3).',
    },
    {
      question: 'I ___ lived here for 3 months.',
      options: ['have', 'has', 'did', 'am'],
      answer: 'have',
      explanation: '"For" + durasi yang masih berlangsung → Present Perfect. I → have.',
    },
    {
      question: 'He ___ not been happy since he moved here.',
      options: ['has', 'have', 'did', 'is'],
      answer: 'has',
      explanation: 'Non Verbal negatif: S + have/has + not + been + ANA. Subject "he" → has.',
    },
    {
      question: 'Choose the CORRECT sentence:',
      options: [
        'I have seen that movie yesterday.',
        'I saw that movie yesterday.',
        'I have saw that movie.',
        'I have see that movie.',
      ],
      answer: 'I saw that movie yesterday.',
      explanation: '"Yesterday" = waktu spesifik → Simple Past (saw). Present Perfect tidak dipakai dengan waktu spesifik.',
    },
  ],
};

// ─── 6. Adjective Clause ──────────────────────────────────────────────────────

const adjClauseTopic: GrammarTopic = {
  kind: 'grammar',
  id: 'adjective-clause',
  title: 'Adjective Clause',
  icon: Link2,
  shortDefinition: 'Anak kalimat yang berfungsi sebagai adjective untuk menerangkan noun atau pronoun.',
  sections: [
    {
      title: '1. Apa itu Adjective Clause?',
      explanation:
        'Adjective Clause (juga disebut Relative Clause) adalah anak kalimat (clause) yang berfungsi sebagai adjective — yaitu menerangkan atau memodifikasi noun/pronoun yang ada sebelumnya. Adjective Clause selalu diawali oleh Relative Pronoun atau Relative Adverb dan diletakkan tepat setelah noun yang diterangkan.',
      examples: [
        {
          sentence: 'The woman [who lives next door] is a doctor.',
          translation: 'Perempuan [yang tinggal di sebelah] adalah seorang dokter.',
          note: '"who lives next door" menerangkan "the woman"',
        },
        {
          sentence: 'I read the book [that you recommended].',
          translation: 'Saya membaca buku [yang kamu rekomendasikan].',
          note: '"that you recommended" menerangkan "the book"',
        },
        {
          sentence: 'This is the city [where I was born].',
          translation: 'Inilah kota [tempat saya dilahirkan].',
          note: '"where I was born" menerangkan "the city"',
        },
      ],
      tip: 'Rumus: Noun + Relative Pronoun/Adverb + S + V ... Letakkan clause tepat setelah noun yang diterangkan!',
    },
    {
      title: '2. Relative Pronouns & Relative Adverbs',
      explanation: 'Berikut adalah kata-kata yang digunakan untuk memulai Adjective Clause beserta fungsinya:',
      table: {
        caption: 'Tabel Relative Pronouns & Adverbs',
        headers: ['Kata', 'Merujuk ke', 'Fungsi dalam Clause', 'Contoh'],
        rows: [
          ['who', 'Orang (people)', 'Subjek clause', 'The man who called you is my friend.'],
          ['whom', 'Orang (people)', 'Objek clause (formal)', 'The woman whom I met was kind.'],
          ['whose', 'Orang / Benda (possessive)', 'Pemilik / Kata sifat kepemilikan', 'The boy whose bag was stolen cried.'],
          ['which', 'Benda / Hewan', 'Subjek atau Objek clause', 'The car which he bought is red.'],
          ['that', 'Orang / Benda', 'Subjek atau Objek (informal)', 'The book that I read was great.'],
          ['where', 'Tempat (place)', 'Keterangan tempat', 'The city where I was born is small.'],
          ['when', 'Waktu (time)', 'Keterangan waktu', 'I remember the day when we first met.'],
          ['why', 'Alasan (reason)', 'Keterangan alasan', 'The reason why she left is unknown.'],
        ],
      },
      tip: 'Catatan: "that" tidak bisa digunakan dalam Non-defining Clause (yang menggunakan koma).',
    },
    {
      title: '3. Jenis Adjective Clause',
      subsections: [
        {
          subtitle: 'A. Defining Clause (Restrictive)',
          explanation:
            'Memberikan informasi yang PENTING untuk mengidentifikasi noun yang diterangkan. Tanpa clause ini, kalimat menjadi tidak jelas atau ambigu. TIDAK menggunakan koma.',
          examples: [
            {
              sentence: 'The student who studies hard will pass the exam.',
              translation: 'Siswa yang belajar keras akan lulus ujian.',
              note: 'Tanpa "who studies hard", kita tidak tahu siswa mana yang dimaksud.',
            },
            {
              sentence: 'The car that he drives is very expensive.',
              translation: 'Mobil yang dia kendarai sangat mahal.',
            },
            {
              sentence: 'People who exercise regularly live longer.',
              translation: 'Orang-orang yang berolahraga secara teratur hidup lebih lama.',
            },
          ],
          tip: 'Defining = tanpa koma, informasi PENTING.',
        },
        {
          subtitle: 'B. Non-defining Clause (Non-restrictive)',
          explanation:
            'Memberikan informasi TAMBAHAN tentang noun yang sudah jelas identitasnya. Informasi ini bersifat opsional — bila dihapus, makna inti kalimat tetap utuh. Menggunakan KOMA (,). "That" TIDAK BISA digunakan di sini.',
          examples: [
            {
              sentence: 'My mother, who is a nurse, works at the hospital.',
              translation: 'Ibu saya, yang adalah seorang perawat, bekerja di rumah sakit.',
              note: 'Kita sudah tahu siapa "my mother". Informasi "who is a nurse" bersifat tambahan.',
            },
            {
              sentence: 'Jakarta, which is the capital of Indonesia, is very crowded.',
              translation: 'Jakarta, yang merupakan ibu kota Indonesia, sangat padat.',
            },
            {
              sentence: "Mr. Budi, whom I've known for years, retired last month.",
              translation: 'Pak Budi, yang sudah saya kenal bertahun-tahun, pensiun bulan lalu.',
            },
          ],
          tip: 'Non-defining = pakai koma, gunakan "who"/"which"/"whom"/"whose" — JANGAN gunakan "that".',
        },
      ],
    },
    {
      title: '4. Pola Peringkasan (Reduction of Adjective Clause)',
      explanation:
        'Adjective Clause bisa diringkas menjadi Adjective Phrase (frasa adjektiva) dengan cara menghilangkan Relative Pronoun dan menyesuaikan bentuk verb. Ada 4 pola utama:',
      subsections: [
        {
          subtitle: 'Pola 1: Relative Pronoun + be + V-ing → tinggalkan V-ing',
          explanation: 'Bila clause berisi Relative Pronoun + be + V-ing, hilangkan Relative Pronoun dan be. Sisakan V-ing.',
          examples: [
            {
              sentence: 'The woman who is singing on stage is famous.',
              translation: '→ The woman singing on stage is famous.',
              note: 'who is → dihapus, "singing" tetap',
            },
            {
              sentence: 'The man who was running in the park is my neighbor.',
              translation: '→ The man running in the park is my neighbor.',
              note: 'who was → dihapus',
            },
          ],
        },
        {
          subtitle: 'Pola 2: Relative Pronoun + be + V3 (Passive) → tinggalkan V3',
          explanation: 'Bila clause berisi Relative Pronoun + be + V3 (bentuk pasif), hilangkan Relative Pronoun dan be. Sisakan V3.',
          examples: [
            {
              sentence: 'The book which was written by Hemingway is a classic.',
              translation: '→ The book written by Hemingway is a classic.',
              note: 'which was → dihapus, "written" tetap',
            },
            {
              sentence: 'The building that was destroyed by fire was very old.',
              translation: '→ The building destroyed by fire was very old.',
              note: 'that was → dihapus',
            },
          ],
        },
        {
          subtitle: 'Pola 3: Relative Pronoun + V (aktif, tanpa be) → ganti dengan V-ing',
          explanation: 'Bila clause berisi Relative Pronoun + verb aktif (tanpa be), hilangkan Relative Pronoun dan ubah verb menjadi V-ing.',
          examples: [
            {
              sentence: 'The girl who dances on stage is talented.',
              translation: '→ The girl dancing on stage is talented.',
              note: '"who dances" → "dancing" (hilangkan who, ubah dances → dancing)',
            },
            {
              sentence: 'Students who live abroad often face challenges.',
              translation: '→ Students living abroad often face challenges.',
              note: '"who live" → "living"',
            },
          ],
        },
        {
          subtitle: 'Pola 4: Relative Pronoun + be + Noun Phrase → Appositive',
          explanation: 'Bila clause berisi Relative Pronoun + be + kata benda/frasa, bisa diringkas menjadi Appositive (frasa penjelas setelah koma).',
          examples: [
            {
              sentence: 'Albert Einstein, who was a great scientist, changed physics.',
              translation: '→ Albert Einstein, a great scientist, changed physics.',
              note: '"who was" → dihapus, frasa noun langsung mengikuti',
            },
            {
              sentence: 'My sister, who is a doctor, lives in Bandung.',
              translation: '→ My sister, a doctor, lives in Bandung.',
            },
          ],
          tip: 'Pola 4 hanya berlaku untuk Non-defining Clause.',
        },
      ],
    },
    {
      title: '5. Kesalahan Umum',
      wrongRight: [
        {
          wrong: 'The man which called you is my teacher.',
          right: 'The man who called you is my teacher.',
          note: '"who" untuk orang sebagai subjek, bukan "which"',
        },
        {
          wrong: 'She is the person who I trust she.',
          right: 'She is the person who I trust.',
          note: 'Jangan ulangi pronoun (she) karena sudah diwakili oleh "who"',
        },
        {
          wrong: 'My brother, that is a doctor, lives in Surabaya.',
          right: 'My brother, who is a doctor, lives in Surabaya.',
          note: '"that" tidak boleh digunakan dalam non-defining clause (yang pakai koma)',
        },
        {
          wrong: 'The city where I was born there is small.',
          right: 'The city where I was born is small.',
          note: 'Tidak perlu "there" setelah "where" — "where" sudah mewakili "there"',
        },
        {
          wrong: 'The book that I bought it yesterday was expensive.',
          right: 'The book that I bought yesterday was expensive.',
          note: 'Jangan ulangi objek (it) karena sudah diwakili oleh "that"',
        },
      ],
    },
  ],
  exercises: [
    {
      question: 'The woman ___ lives next door is a teacher.',
      options: ['which', 'who', 'whose', 'where'],
      answer: 'who',
      explanation: '"The woman" = orang, berfungsi sebagai subjek clause → gunakan "who".',
    },
    {
      question: 'The book ___ I bought yesterday was expensive.',
      options: ['who', 'whose', 'that', 'where'],
      answer: 'that',
      explanation: '"The book" = benda, berfungsi sebagai objek clause → gunakan "that" atau "which".',
    },
    {
      question: 'This is the house ___ I grew up.',
      options: ['that', 'which', 'where', 'who'],
      answer: 'where',
      explanation: '"The house" = tempat → gunakan "where" (= di mana / tempat dimana).',
    },
    {
      question: 'The boy ___ bag was stolen reported it to the police.',
      options: ['who', 'whom', 'whose', 'which'],
      answer: 'whose',
      explanation: '"Whose bag" = kepemilikan (tas milik anak itu) → gunakan "whose".',
    },
    {
      question: 'I remember the year ___ the pandemic started.',
      options: ['where', 'when', 'which', 'who'],
      answer: 'when',
      explanation: '"The year" = waktu → gunakan "when".',
    },
    {
      question: 'Which sentence uses a NON-DEFINING clause correctly?',
      options: [
        'My cat, that is very lazy, sleeps all day.',
        'My cat, which is very lazy, sleeps all day.',
        'My cat which is very lazy sleeps all day.',
        'My cat who is very lazy sleeps all day.',
      ],
      answer: 'My cat, which is very lazy, sleeps all day.',
      explanation: 'Non-defining clause untuk benda → "which" dengan koma. "that" tidak boleh di non-defining clause.',
    },
    {
      question: 'Reduce: "The woman who is singing on stage is famous."',
      options: [
        'The woman who singing on stage is famous.',
        'The woman sing on stage is famous.',
        'The woman singing on stage is famous.',
        'The woman to sing on stage is famous.',
      ],
      answer: 'The woman singing on stage is famous.',
      explanation: 'Pola 1: who + is + V-ing → hilangkan "who is", sisakan V-ing (singing).',
    },
    {
      question: 'Reduce: "The letter which was written by the president was important."',
      options: [
        'The letter writing by the president was important.',
        'The letter written by the president was important.',
        'The letter that written by the president was important.',
        'The letter who written by the president was important.',
      ],
      answer: 'The letter written by the president was important.',
      explanation: 'Pola 2: which + was + V3 (passive) → hilangkan "which was", sisakan V3 (written).',
    },
    {
      question: 'Choose the CORRECT sentence:',
      options: [
        'The man which I spoke to was helpful.',
        'The man who I spoke to him was helpful.',
        'The man whom I spoke to was helpful.',
        'The man whose I spoke to was helpful.',
      ],
      answer: 'The man whom I spoke to was helpful.',
      explanation: '"The man" = orang, berfungsi sebagai objek ("I spoke to him") → gunakan "whom" (formal) atau "who" (informal). Jangan ulangi "him".',
    },
    {
      question: 'Students ___ study regularly tend to get better grades.',
      options: ['who', 'which', 'where', 'whose'],
      answer: 'who',
      explanation: '"Students" = orang, berfungsi sebagai subjek clause → "who".',
    },
  ],
};

// ─── 7. To Infinitive & Gerund ────────────────────────────────────────────────

const gerundInfinitiveTopic: GrammarTopic = {
  kind: 'grammar',
  id: 'to-infinitive-gerund',
  title: 'To Infinitive & Gerund',
  icon: Layers,
  shortDefinition: 'Dua bentuk verb non-finite yang berfungsi sebagai noun, adjective, atau adverb dalam kalimat.',
  sections: [
    {
      title: '1. Pengenalan: Apa itu Gerund & To Infinitive?',
      subsections: [
        {
          subtitle: 'Gerund (V-ing)',
          explanation:
            'Gerund adalah verb yang ditambahkan akhiran -ing dan berfungsi sebagai NOUN (kata benda) dalam kalimat. Gerund berbeda dengan Present Continuous — dalam Gerund, tidak ada auxiliary verb (am/is/are).',
          examples: [
            { sentence: 'Swimming is good for health.', translation: 'Berenang itu baik untuk kesehatan.', note: '"Swimming" = subjek kalimat (noun)' },
            { sentence: 'I enjoy reading novels.', translation: 'Saya suka membaca novel.', note: '"reading" = objek dari "enjoy"' },
            { sentence: 'His hobby is cooking.', translation: 'Hobinya adalah memasak.', note: '"cooking" = pelengkap (complement)' },
          ],
        },
        {
          subtitle: 'To Infinitive (to + V1)',
          explanation:
            'To Infinitive adalah bentuk to + verb dasar yang bisa berfungsi sebagai NOUN, ADJECTIVE, atau ADVERB dalam kalimat.',
          examples: [
            { sentence: 'To learn English is important.', translation: 'Belajar Bahasa Inggris itu penting.', note: '"To learn" = subjek (noun function)' },
            { sentence: 'She wants to become a doctor.', translation: 'Dia ingin menjadi dokter.', note: '"to become" = objek dari "wants"' },
            { sentence: 'I study hard to pass the exam.', translation: 'Saya belajar keras untuk lulus ujian.', note: '"to pass" = tujuan (adverb function)' },
          ],
        },
      ],
    },
    {
      title: '2. Posisi & Fungsi Gerund',
      subsections: [
        {
          subtitle: 'A. Sebagai Subjek Kalimat',
          explanation: 'Gerund dapat menduduki posisi subjek. Ketika digunakan sebagai subjek, Gerund dianggap singular.',
          examples: [
            { sentence: 'Reading books expands your knowledge.', translation: 'Membaca buku memperluas pengetahuanmu.' },
            { sentence: 'Exercising every day keeps you healthy.', translation: 'Berolahraga setiap hari menjaga kesehatanmu.' },
            { sentence: 'Learning a new language takes patience.', translation: 'Belajar bahasa baru membutuhkan kesabaran.' },
          ],
          tip: 'Gerund sebagai subjek bersifat lebih natural/informal dibanding To Infinitive sebagai subjek.',
        },
        {
          subtitle: 'B. Sebagai Objek Kata Kerja Tertentu',
          explanation: 'Beberapa kata kerja HARUS diikuti Gerund (bukan To Infinitive). Lihat daftar verb di Seksi 4.',
          examples: [
            { sentence: 'She avoids eating junk food.', translation: 'Dia menghindari makan makanan cepat saji.' },
            { sentence: 'I enjoy spending time with my family.', translation: 'Saya suka menghabiskan waktu bersama keluarga.' },
            { sentence: 'He finished writing the report.', translation: 'Dia selesai menulis laporan.' },
          ],
        },
        {
          subtitle: 'C. Setelah Preposisi',
          explanation: 'Setelah preposisi (in, on, at, of, about, for, by, after, before, without, despite, instead of, dll.) → SELALU gunakan Gerund.',
          examples: [
            { sentence: 'She is interested in learning English.', translation: 'Dia tertarik untuk belajar Bahasa Inggris.', note: 'interested in + Gerund' },
            { sentence: 'He left without saying goodbye.', translation: 'Dia pergi tanpa mengucapkan selamat tinggal.', note: 'without + Gerund' },
            { sentence: 'I\'m good at cooking Italian food.', translation: 'Saya pandai memasak makanan Italia.', note: 'good at + Gerund' },
            { sentence: 'She thanked him for helping her.', translation: 'Dia berterima kasih padanya karena telah membantunya.', note: 'for + Gerund' },
            { sentence: 'After finishing dinner, we watched a movie.', translation: 'Setelah selesai makan malam, kami menonton film.', note: 'after + Gerund' },
          ],
          tip: 'Ingat: "to" dalam "to + Gerund" adalah preposisi, bukan bagian dari To Infinitive! Contoh: "look forward to seeing you" (bukan "to see").',
        },
        {
          subtitle: 'D. Setelah Ekspresi Tertentu',
          explanation: 'Beberapa ekspresi khusus diikuti Gerund.',
          bullets: [
            'It\'s no use + Gerund: It\'s no use crying over spilled milk.',
            'It\'s worth + Gerund: This movie is worth watching.',
            'have difficulty/trouble + Gerund: I have difficulty speaking in public.',
            'spend/waste time + Gerund: Don\'t waste time complaining.',
            'be busy + Gerund: She is busy preparing for the exam.',
            'can\'t help + Gerund: I can\'t help laughing.',
          ],
        },
      ],
    },
    {
      title: '3. Posisi & Fungsi To Infinitive',
      subsections: [
        {
          subtitle: 'A. Sebagai Subjek Kalimat (Formal)',
          explanation: 'To Infinitive bisa menjadi subjek, terasa lebih formal. Sering digantikan dengan struktur "It + be + adj + to + V1".',
          examples: [
            { sentence: 'To lie is wrong.', translation: 'Berbohong itu salah.' },
            { sentence: 'To master English requires dedication.', translation: 'Menguasai Bahasa Inggris membutuhkan dedikasi.' },
            { sentence: 'It is important to practice every day.', translation: 'Penting untuk berlatih setiap hari.', note: 'Struktur It + be + adj + to Inf (lebih umum)' },
          ],
        },
        {
          subtitle: 'B. Sebagai Objek Kata Kerja Tertentu',
          explanation: 'Beberapa kata kerja HARUS diikuti To Infinitive. Lihat daftar di Seksi 4.',
          examples: [
            { sentence: 'She wants to become a doctor.', translation: 'Dia ingin menjadi dokter.' },
            { sentence: 'He decided to move to another city.', translation: 'Dia memutuskan untuk pindah ke kota lain.' },
            { sentence: 'They refused to cooperate.', translation: 'Mereka menolak untuk bekerja sama.' },
          ],
        },
        {
          subtitle: 'C. Setelah Adjective',
          explanation: 'To Infinitive sering digunakan setelah adjective (kata sifat).',
          examples: [
            { sentence: 'She was happy to hear the news.', translation: 'Dia senang mendengar kabar itu.', note: 'happy + to Inf' },
            { sentence: 'He is ready to start.', translation: 'Dia siap untuk memulai.', note: 'ready + to Inf' },
            { sentence: 'It\'s difficult to concentrate in a noisy room.', translation: 'Sulit untuk berkonsentrasi di ruangan yang bising.' },
            { sentence: 'I was surprised to see her there.', translation: 'Saya terkejut melihatnya di sana.' },
          ],
          tip: 'Adjective + to Inf: happy, sad, glad, ready, able, willing, difficult, easy, important, necessary, dangerous, surprised, excited',
        },
        {
          subtitle: 'D. Untuk Menyatakan Tujuan (Purpose)',
          explanation: 'To Infinitive sering digunakan untuk menyatakan tujuan dari suatu aksi (= in order to).',
          examples: [
            { sentence: 'I study hard to pass the exam.', translation: 'Saya belajar keras untuk lulus ujian.' },
            { sentence: 'She went to the store to buy milk.', translation: 'Dia pergi ke toko untuk membeli susu.' },
            { sentence: 'He saved money to buy a new laptop.', translation: 'Dia menabung untuk membeli laptop baru.' },
          ],
          tip: 'To Infinitive of purpose = in order to. Tapi lebih singkat dan lebih umum dipakai.',
        },
        {
          subtitle: 'E. Setelah Kata Kerja + Objek',
          explanation: 'Beberapa verb diikuti objek + To Infinitive.',
          examples: [
            { sentence: 'She asked me to help her.', translation: 'Dia meminta saya untuk membantunya.', note: 'ask + obj + to Inf' },
            { sentence: 'He told her to stay calm.', translation: 'Dia memintanya untuk tetap tenang.', note: 'tell + obj + to Inf' },
            { sentence: 'They want us to join the project.', translation: 'Mereka ingin kami bergabung dalam proyek.', note: 'want + obj + to Inf' },
          ],
          bullets: ['ask sb to do', 'tell sb to do', 'want sb to do', 'allow sb to do', 'advise sb to do', 'encourage sb to do', 'expect sb to do', 'help sb (to) do'],
        },
      ],
    },
    {
      title: '4. Daftar Kata Kerja (Verb Lists)',
      subsections: [
        {
          subtitle: 'Verbs + Gerund ONLY',
          explanation: 'Kata kerja ini hanya diikuti Gerund, TIDAK bisa diikuti To Infinitive:',
          table: {
            headers: ['Verb', 'Arti', 'Contoh'],
            rows: [
              ['enjoy', 'menikmati', 'I enjoy swimming.'],
              ['avoid', 'menghindari', 'She avoids eating sugar.'],
              ['mind', 'keberatan', 'Do you mind closing the door?'],
              ['finish', 'menyelesaikan', 'He finished writing the report.'],
              ['keep', 'terus melakukan', 'Keep practicing!'],
              ['consider', 'mempertimbangkan', 'I\'m considering moving abroad.'],
              ['suggest', 'menyarankan', 'She suggested going by train.'],
              ['recommend', 'merekomendasikan', 'I recommend trying that restaurant.'],
              ['admit', 'mengakui', 'He admitted stealing the money.'],
              ['deny', 'menyangkal', 'She denied breaking the vase.'],
              ['miss', 'merindukan', 'I miss living in Bali.'],
              ['postpone', 'menunda', 'They postponed having the meeting.'],
              ['practice', 'berlatih', 'She practices speaking every day.'],
              ['risk', 'berisiko', 'Don\'t risk losing your job.'],
              ['imagine', 'membayangkan', 'I can\'t imagine living without music.'],
              ['appreciate', 'menghargai', 'I appreciate your helping me.'],
              ['resist', 'menahan diri', 'I can\'t resist eating chocolate.'],
              ['dislike', 'tidak menyukai', 'He dislikes waiting in line.'],
            ],
          },
        },
        {
          subtitle: 'Verbs + To Infinitive ONLY',
          explanation: 'Kata kerja ini hanya diikuti To Infinitive, TIDAK bisa diikuti Gerund:',
          table: {
            headers: ['Verb', 'Arti', 'Contoh'],
            rows: [
              ['want', 'ingin', 'She wants to become a doctor.'],
              ['decide', 'memutuskan', 'He decided to quit his job.'],
              ['plan', 'merencanakan', 'They plan to travel next year.'],
              ['agree', 'menyetujui', 'We agreed to work together.'],
              ['refuse', 'menolak', 'She refused to answer.'],
              ['hope', 'berharap', 'I hope to see you soon.'],
              ['expect', 'mengharapkan', 'He expects to pass.'],
              ['offer', 'menawarkan', 'She offered to help.'],
              ['promise', 'berjanji', 'I promise to be on time.'],
              ['fail', 'gagal', 'He failed to submit on time.'],
              ['manage', 'berhasil', 'She managed to finish early.'],
              ['seem', 'tampaknya', 'He seems to be tired.'],
              ['appear', 'tampaknya', 'She appears to know the answer.'],
              ['tend', 'cenderung', 'He tends to overthink.'],
              ['pretend', 'berpura-pura', 'She pretended to be asleep.'],
              ['afford', 'mampu', 'They can\'t afford to buy a house.'],
              ['learn', 'belajar (for a skill)', 'She is learning to drive.'],
              ['need', 'perlu', 'You need to study more.'],
            ],
          },
        },
        {
          subtitle: 'Verbs + Gerund OR To Infinitive (Makna SAMA)',
          explanation: 'Beberapa verb bisa diikuti Gerund atau To Infinitive dengan makna yang SAMA:',
          table: {
            headers: ['Verb', 'Contoh dengan Gerund', 'Contoh dengan To Infinitive'],
            rows: [
              ['like', 'I like swimming.', 'I like to swim.'],
              ['love', 'She loves cooking.', 'She loves to cook.'],
              ['hate', 'He hates waiting.', 'He hates to wait.'],
              ['prefer', 'I prefer walking.', 'I prefer to walk.'],
              ['begin', 'It began raining.', 'It began to rain.'],
              ['start', 'She started studying.', 'She started to study.'],
              ['continue', 'He continued reading.', 'He continued to read.'],
              ['intend', 'I intend doing it.', 'I intend to do it.'],
            ],
          },
        },
        {
          subtitle: 'Verbs + Gerund OR To Infinitive (Makna BERBEDA) ⚠️',
          explanation: 'Beberapa verb bisa diikuti keduanya, tetapi MAKNANYA BERBEDA — ini sering menjadi sumber kebingungan:',
          table: {
            headers: ['Verb', '+ Gerund', '+ To Infinitive', 'Contoh'],
            rows: [
              [
                'remember',
                'Ingat bahwa sudah pernah melakukan (masa lalu)',
                'Ingat untuk melakukan (masa depan/saat ini)',
                'I remember locking the door. (sudah terkunci) | Remember to lock the door. (jangan lupa kunci)',
              ],
              [
                'forget',
                'Lupa bahwa pernah melakukan (biasanya negatif)',
                'Lupa untuk melakukan',
                'I\'ll never forget meeting her. (tak terlupakan) | I forgot to call him. (lupa menelepon)',
              ],
              [
                'stop',
                'Berhenti melakukan (selesai, tidak lagi dilakukan)',
                'Berhenti untuk melakukan sesuatu yang lain',
                'She stopped smoking. (berhenti merokok) | She stopped to smoke. (berhenti, lalu merokok)',
              ],
              [
                'try',
                'Mencoba sebagai eksperimen / alternatif',
                'Berusaha keras untuk melakukan',
                'Try adding more salt. (coba tambahkan garam) | Try to open the jar. (berusaha membuka)',
              ],
              [
                'regret',
                'Menyesal karena sudah melakukan',
                'Menyesal harus menyampaikan sesuatu (formal)',
                'I regret saying that. (menyesal sudah berkata) | I regret to inform you. (formal, menyesal memberitahu)',
              ],
            ],
          },
          tip: 'Kunci: Gerund merujuk pada aksi yang sudah lewat atau sedang berlangsung. To Infinitive merujuk pada aksi yang akan datang.',
        },
      ],
    },
    {
      title: '5. Kesalahan Umum',
      wrongRight: [
        {
          wrong: 'She enjoy to swim.',
          right: 'She enjoys swimming.',
          note: '"enjoy" harus diikuti Gerund, dan He/She/It → tambah -s pada verb',
        },
        {
          wrong: 'I want going to the mall.',
          right: 'I want to go to the mall.',
          note: '"want" harus diikuti To Infinitive, bukan Gerund',
        },
        {
          wrong: 'We are interested to learn more.',
          right: 'We are interested in learning more.',
          note: '"interested in" = frasa preposisi → diikuti Gerund',
        },
        {
          wrong: 'She is good to cook.',
          right: 'She is good at cooking.',
          note: '"good at" = frasa preposisi → diikuti Gerund',
        },
        {
          wrong: 'To running is healthy.',
          right: 'Running is healthy.',
          note: 'Tidak ada "to + V-ing". Sebagai subjek, gunakan Gerund (Running) atau To Infinitive (To run)',
        },
        {
          wrong: 'I look forward to see you.',
          right: 'I look forward to seeing you.',
          note: '"look forward to" → "to" di sini adalah preposisi, bukan bagian dari To Infinitive → harus diikuti Gerund',
        },
        {
          wrong: 'She avoided to go out at night.',
          right: 'She avoided going out at night.',
          note: '"avoid" harus diikuti Gerund',
        },
        {
          wrong: 'He suggested to take the bus.',
          right: 'He suggested taking the bus.',
          note: '"suggest" harus diikuti Gerund',
        },
      ],
    },
  ],
  exercises: [
    {
      question: 'I enjoy ___ in the ocean.',
      options: ['swim', 'to swim', 'swimming', 'swam'],
      answer: 'swimming',
      explanation: '"enjoy" adalah verb yang harus diikuti Gerund (V-ing).',
    },
    {
      question: 'She wants ___ a doctor.',
      options: ['become', 'becoming', 'to become', 'became'],
      answer: 'to become',
      explanation: '"want" adalah verb yang harus diikuti To Infinitive (to + V1).',
    },
    {
      question: 'He avoided ___ the truth.',
      options: ['tell', 'to tell', 'told', 'telling'],
      answer: 'telling',
      explanation: '"avoid" harus diikuti Gerund.',
    },
    {
      question: '___ a language takes time and patience.',
      options: ['Learn', 'To learns', 'Learning', 'Learned'],
      answer: 'Learning',
      explanation: 'Sebagai subjek kalimat, gunakan Gerund (Learning). "To learn" juga bisa, tapi Gerund lebih natural.',
    },
    {
      question: 'She is interested in ___ more about astronomy.',
      options: ['learn', 'to learn', 'learning', 'learned'],
      answer: 'learning',
      explanation: '"interested in" = preposisi "in" → harus diikuti Gerund.',
    },
    {
      question: 'I look forward to ___ you at the conference.',
      options: ['see', 'to see', 'seeing', 'saw'],
      answer: 'seeing',
      explanation: '"look forward to" — "to" di sini adalah preposisi → harus diikuti Gerund.',
    },
    {
      question: 'She forgot ___ the door before leaving.',
      options: ['lock', 'locking', 'to lock', 'locked'],
      answer: 'to lock',
      explanation: '"forget + to inf" = lupa untuk melakukan sesuatu (tidak dikerjakan). "forget + gerund" = lupa bahwa sudah melakukan.',
    },
    {
      question: 'He stopped ___ after his doctor\'s advice. (He no longer smokes.)',
      options: ['smoke', 'to smoke', 'smoking', 'smoked'],
      answer: 'smoking',
      explanation: '"stop + Gerund" = berhenti melakukan kebiasaan. "stop + to inf" = berhenti untuk melakukan hal lain.',
    },
    {
      question: 'It is important ___ regularly.',
      options: ['exercise', 'exercising', 'to exercise', 'exercised'],
      answer: 'to exercise',
      explanation: 'Struktur "It + be + adjective + to Infinitive" → to exercise.',
    },
    {
      question: 'Which sentence is CORRECT?',
      options: [
        'She suggested to take the train.',
        'She suggested taking the train.',
        'She suggested take the train.',
        'She suggested to taking the train.',
      ],
      answer: 'She suggested taking the train.',
      explanation: '"suggest" harus diikuti Gerund (taking), bukan To Infinitive.',
    },
  ],
};

// ─── Exports ─────────────────────────────────────────────────────────────────

export const tensesTopics: TenseTopic[] = [
  simplePresentTopic,
  simplePastTopic,
  simpleFutureTopic,
  presentContinuousTopic,
  presentPerfectTopic,
];

export const grammarTopics: GrammarTopic[] = [
  adjClauseTopic,
  gerundInfinitiveTopic,
];

export const allGrammarTopics: AnyGrammarTopic[] = [
  ...tensesTopics,
  ...grammarTopics,
];
