// Grammar Challenge Day 9 — Master the Tenses & Outsmart the Traps!
// Section A: MCQ (30 Q) · B: Sentence Transformers (8 Q) · C: Translation (8 Q) · D: Spot the Error (7 Q)

export type GrammarChallengeSection = 'A' | 'B' | 'C' | 'D';

export type GrammarChallengeQ = {
  id: string;
  section: GrammarChallengeSection;
  question: string;
  // Section A: MCQ
  options?: string[];
  correctIndex?: number;
  // Section B/C/D: text answer
  sampleAnswer?: string;
  reason: string;
};

export const grammarChallengeQuestions: GrammarChallengeQ[] = [

  // ══════════════════════════════════════════════════════════════════════
  // SECTION A — Time Travelers: Choose the Right Tense! (30 soal)
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'a1', section: 'A',
    question: 'After she has watered the plants, she ___ the window.',
    options: ['opens', 'opened', 'opening', 'has opened'],
    correctIndex: 0,
    reason: "Pola 'After + Present Perfect → Simple Present'. Klausa utama menggunakan Simple Present: opens.",
  },
  {
    id: 'a2', section: 'A',
    question: 'She ___ a book while he watched TV and waited for dinner.',
    options: ['read', 'reads', 'reading', 'has read'],
    correctIndex: 0,
    reason: "'while he watched TV' = konteks Simple Past. Kedua aksi terjadi bersamaan di masa lalu → Simple Past: read.",
  },
  {
    id: 'a3', section: 'A',
    question: 'The chef ___ the cake at this moment.',
    options: ['is baking', 'bakes', 'bake', 'baked'],
    correctIndex: 0,
    reason: "'at this moment' = signal Present Continuous. S + is/am/are + Ving.",
  },
  {
    id: 'a4', section: 'A',
    question: 'They ___ their exam next week.',
    options: ['will take', 'takes', 'took', 'are taking'],
    correctIndex: 0,
    reason: "'next week' + rencana → Simple Future: will + V1.",
  },
  {
    id: 'a5', section: 'A',
    question: 'He ___ his wallet since this morning.',
    options: ['has lost', 'lost', 'loses', 'is losing'],
    correctIndex: 0,
    reason: "'since this morning' = signal Present Perfect. S + have/has + V3.",
  },
  {
    id: 'a6', section: 'A',
    question: 'Yesterday, the boy ___ when he saw the dog and ran into the house.',
    options: ['screamed', 'screams', 'screaming', 'has screamed'],
    correctIndex: 0,
    reason: "'Yesterday' = signal Simple Past. S + V2 (screamed).",
  },
  {
    id: 'a7', section: 'A',
    question: 'After he has cleaned the floor, he ___ the table.',
    options: ['wipes', 'wiped', 'wiping', 'has wiped'],
    correctIndex: 0,
    reason: "Pola 'After + Present Perfect → Simple Present'. Klausa utama: wipes.",
  },
  {
    id: 'a8', section: 'A',
    question: 'A new hospital ___ near my house next year.',
    options: ['will be built', 'is built', 'was built', 'builds'],
    correctIndex: 0,
    reason: "'next year' = signal Future. Passive: will + be + V3.",
  },
  {
    id: 'a9', section: 'A',
    question: 'My parents ___ their anniversary this weekend.',
    options: ['are celebrating', 'celebrate', 'celebrated', 'celebrates'],
    correctIndex: 0,
    reason: "'this weekend' = rencana pasti → Present Continuous untuk future yang sudah direncanakan.",
  },
  {
    id: 'a10', section: 'A',
    question: 'She ___ her homework after she turned off the lights and checked the door.',
    options: ['went', 'goes', 'going', 'has gone'],
    correctIndex: 0,
    reason: "Seluruh konteks = Simple Past ('turned off', 'checked'). Jawaban sejajar: went (past tense of go).",
  },
  {
    id: 'a11', section: 'A',
    question: "She ___ tired since she hasn't eaten anything.",
    options: ['looks', 'looked', 'looking', 'has looked'],
    correctIndex: 3,
    reason: "'since' = signal Present Perfect. S + has + V3. 'she has looked tired' (terlihat lelah hingga kini).",
  },
  {
    id: 'a12', section: 'A',
    question: 'Look! The children ___ in the garden.',
    options: ['are playing', 'play', 'played', 'have played'],
    correctIndex: 0,
    reason: "'Look!' = signal Present Continuous. S + are + Ving.",
  },
  {
    id: 'a13', section: 'A',
    question: 'After we have parked the car, we ___ into the building.',
    options: ['go', 'went', 'going', 'has gone'],
    correctIndex: 0,
    reason: "Pola 'After + Present Perfect → Simple Present'. Klausa utama: go.",
  },
  {
    id: 'a14', section: 'A',
    question: 'The sun ___ after the rain stopped.',
    options: ['shone', 'shines', 'shining', 'has shone'],
    correctIndex: 0,
    reason: "'stopped' = Simple Past → aksi sejajar Simple Past. shine → shone.",
  },
  {
    id: 'a15', section: 'A',
    question: 'After she has finished her homework, she ___ TV.',
    options: ['watches', 'watched', 'watching', 'has watched'],
    correctIndex: 0,
    reason: "Pola 'After + Present Perfect → Simple Present'. Klausa utama: watches.",
  },
  {
    id: 'a16', section: 'A',
    question: 'They ___ their project since Monday.',
    options: ['have done', 'did', 'do', 'are doing'],
    correctIndex: 0,
    reason: "'since Monday' = signal Present Perfect. They + have + V3 (done).",
  },
  {
    id: 'a17', section: 'A',
    question: 'My father ___ coffee every morning.',
    options: ['drinks', 'drink', 'drank', 'drinking'],
    correctIndex: 0,
    reason: "'every morning' = kebiasaan → Simple Present. father (3rd person singular) → drinks.",
  },
  {
    id: 'a18', section: 'A',
    question: 'He ___ his keys while he was closing the office and locking the door.',
    options: ['forgot', 'forgets', 'forgetting', 'has forgotten'],
    correctIndex: 0,
    reason: "'was closing' = Past Continuous. 'forgot' = Simple Past yang terjadi di tengah aksi Past Continuous.",
  },
  {
    id: 'a19', section: 'A',
    question: 'The meeting ___ at 10 AM every Monday.',
    options: ['starts', 'started', 'starting', 'has started'],
    correctIndex: 0,
    reason: "'every Monday' = jadwal rutin → Simple Present. meeting (singular) → starts.",
  },
  {
    id: 'a20', section: 'A',
    question: 'I ___ him twice today.',
    options: ['have seen', 'saw', 'seeing', 'see'],
    correctIndex: 0,
    reason: "'twice today' (hari ini belum selesai) = signal Present Perfect. I + have + V3 (seen).",
  },
  {
    id: 'a21', section: 'A',
    question: 'After the teacher has checked the work, the students ___ the task.',
    options: ['start', 'started', 'starting', 'has started'],
    correctIndex: 0,
    reason: "Pola 'After + Present Perfect → Simple Present'. Klausa utama: start.",
  },
  {
    id: 'a22', section: 'A',
    question: 'After he has locked the door, he ___ to the station.',
    options: ['walks', 'walked', 'walking', 'has walked'],
    correctIndex: 0,
    reason: "Pola 'After + Present Perfect → Simple Present'. Klausa utama: walks.",
  },
  {
    id: 'a23', section: 'A',
    question: 'She ___ to school every morning.',
    options: ['goes', 'go', 'going', 'gone'],
    correctIndex: 0,
    reason: "'every morning' = kebiasaan → Simple Present. she (3rd person singular) → goes.",
  },
  {
    id: 'a24', section: 'A',
    question: 'After she has finished her meal, she ___ her phone.',
    options: ['checks', 'checked', 'checking', 'has checked'],
    correctIndex: 0,
    reason: "Pola 'After + Present Perfect → Simple Present'. Klausa utama: checks.",
  },
  {
    id: 'a25', section: 'A',
    question: 'They ___ the project when the manager entered the room and asked questions.',
    options: ['discussed', 'discuss', 'discussing', 'has discussed'],
    correctIndex: 0,
    reason: "'when the manager entered' = Simple Past. Aksi sejajar → Simple Past: discussed.",
  },
  {
    id: 'a26', section: 'A',
    question: 'Two days ago, he ___ the window, fed the cat, and left the house.',
    options: ['opened', 'opens', 'opening', 'has opened'],
    correctIndex: 0,
    reason: "'Two days ago' = signal Simple Past. Sejajar dengan 'fed' dan 'left' → opened.",
  },
  {
    id: 'a27', section: 'A',
    question: 'She ___ her mother in the kitchen yesterday.',
    options: ['helped', 'helps', 'helping', 'has helped'],
    correctIndex: 0,
    reason: "'yesterday' = signal Simple Past. S + V2 → helped.",
  },
  {
    id: 'a28', section: 'A',
    question: 'The chef ___ the cake at this moment.',
    options: ['is baking', 'bakes', 'bake', 'baked'],
    correctIndex: 0,
    reason: "'at this moment' = signal Present Continuous. S + is + Ving.",
  },
  {
    id: 'a29', section: 'A',
    question: 'After they have eaten dinner, they ___ outside.',
    options: ['play', 'played', 'playing', 'has played'],
    correctIndex: 0,
    reason: "Pola 'After + Present Perfect → Simple Present'. Klausa utama: play.",
  },
  {
    id: 'a30', section: 'A',
    question: 'We ___ to the park every Sunday.',
    options: ['walk', 'walks', 'walked', 'walking'],
    correctIndex: 0,
    reason: "'every Sunday' = kebiasaan → Simple Present. we (plural) → walk (tanpa -s).",
  },

  // ══════════════════════════════════════════════════════════════════════
  // SECTION B — Sentence Transformers: Flip It Like a Pro! (8 soal)
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'b1', section: 'B',
    question: 'The police caught the thief.\n→ Transform to: present perfect verbal active, interrogative form',
    sampleAnswer: 'Have the police caught the thief?',
    reason: "Present Perfect Active Interrogative: Have/Has + S + V3? Police (plural) → Have. catch → caught.",
  },
  {
    id: 'b2', section: 'B',
    question: 'The report is being written by the manager.\n→ Transform to: simple past verbal active, negative form',
    sampleAnswer: 'The manager did not write the report.',
    reason: "Simple Past Active Negative: S + did not + V1. Ubah passive ke active: manager jadi subjek.",
  },
  {
    id: 'b3', section: 'B',
    question: 'They will finish the project.\n→ Transform to: present perfect verbal passive, positive form',
    sampleAnswer: 'The project has been finished by them.',
    reason: "Present Perfect Passive Positive: S + have/has + been + V3. project (singular) → has.",
  },
  {
    id: 'b4', section: 'B',
    question: 'She has completed the training.\n→ Transform to: simple past verbal passive, interrogative form',
    sampleAnswer: 'Was the training completed by her?',
    reason: "Simple Past Passive Interrogative: Was/Were + S + V3 + by agent? training (singular) → Was.",
  },
  {
    id: 'b5', section: 'B',
    question: 'The students cleaned the classroom.\n→ Transform to: present continuous verbal passive, positive form',
    sampleAnswer: 'The classroom is being cleaned by the students.',
    reason: "Present Continuous Passive Positive: S + is/am/are + being + V3. classroom (singular) → is.",
  },
  {
    id: 'b6', section: 'B',
    question: 'He is painting the wall.\n→ Transform to: future verbal passive, negative form',
    sampleAnswer: 'The wall will not be painted by him.',
    reason: "Future Passive Negative: S + will + not + be + V3. Ubah active ke passive: wall jadi subjek.",
  },
  {
    id: 'b7', section: 'B',
    question: 'The letter was sent by him.\n→ Transform to: simple present verbal active, positive form',
    sampleAnswer: 'He sends the letter.',
    reason: "Simple Present Active Positive: S + V1(s/es). him → he. send (3rd singular) → sends.",
  },
  {
    id: 'b8', section: 'B',
    question: 'They have opened the new store.\n→ Transform to: simple past verbal passive, interrogative form',
    sampleAnswer: 'Was the new store opened by them?',
    reason: "Simple Past Passive Interrogative: Was/Were + S + V3 + by agent? store (singular) → Was.",
  },

  // ══════════════════════════════════════════════════════════════════════
  // SECTION C — Translation Trap: Don't Be Fooled by 'Sedang'! (8 soal)
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'c1', section: 'C',
    question: 'Dia memberi makan kelincinya tiga kali sehari.',
    sampleAnswer: 'She feeds her rabbit three times a day.',
    reason: "Kebiasaan rutin → Simple Present. she → feeds (3rd singular).",
  },
  {
    id: 'c2', section: 'C',
    question: 'Kami makan malam bersama tadi malam.',
    sampleAnswer: 'We had dinner together last night.',
    reason: "'tadi malam' = last night → Simple Past. have dinner → had dinner.",
  },
  {
    id: 'c3', section: 'C',
    question: 'Mereka akan mengunjungi paman mereka minggu depan.',
    sampleAnswer: 'They will visit their uncle next week.',
    reason: "'minggu depan' = next week → Simple Future. will + V1.",
  },
  {
    id: 'c4', section: 'C',
    question: 'Ibu sedang memiliki banyak pekerjaan hari ini.\n⚠ Hint: "have" (memiliki) = stative verb — tidak bisa pakai -ing!',
    sampleAnswer: 'Mother has a lot of work today.',
    reason: "'have' (memiliki) = stative verb → TIDAK boleh pakai -ing. Gunakan Simple Present: has.",
  },
  {
    id: 'c5', section: 'C',
    question: 'Dia sedang percaya bahwa semuanya akan baik-baik saja.\n⚠ Hint: "believe" = stative verb — tidak bisa pakai -ing!',
    sampleAnswer: 'She believes that everything will be fine.',
    reason: "'believe' = stative verb → TIDAK boleh pakai -ing. Simple Present: believes.",
  },
  {
    id: 'c6', section: 'C',
    question: 'Kami bakalan bermain sepak bola nanti sore.',
    sampleAnswer: 'We are going to play football this afternoon.',
    reason: "'bakalan' = going to (rencana yang sudah ada). be going to + V1.",
  },
  {
    id: 'c7', section: 'C',
    question: 'Saya sudah melihat film itu dua kali.',
    sampleAnswer: 'I have seen that film twice.',
    reason: "'sudah' + pengalaman → Present Perfect. I + have + V3 (seen).",
  },
  {
    id: 'c8', section: 'C',
    question: 'Aku sedang menjawab soal-soal grammar sekarang.',
    sampleAnswer: 'I am answering the grammar questions now.',
    reason: "'sedang ... sekarang' = aktivitas yang berlangsung → Present Continuous. I + am + Ving.",
  },

  // ══════════════════════════════════════════════════════════════════════
  // SECTION D — Spot the Error: Grammar Sniper Mode On! (7 soal)
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'd1', section: 'D',
    question: 'Temukan & perbaiki kesalahan grammar:\n"Nobody invited to the party last month."',
    sampleAnswer: 'Nobody was invited to the party last month.',
    reason: "Kalimat passive membutuhkan auxiliary 'was'. 'invited' saja tidak cukup → was invited.",
  },
  {
    id: 'd2', section: 'D',
    question: 'Temukan & perbaiki kesalahan grammar:\n"She have wrote three poems this week."',
    sampleAnswer: 'She has written three poems this week.',
    reason: "Dua kesalahan: (1) she → has (bukan have), (2) wrote → written (V3 untuk Present Perfect).",
  },
  {
    id: 'd3', section: 'D',
    question: "Temukan & perbaiki kesalahan grammar:\n\"You shall helps me with this project, won't you?\"",
    sampleAnswer: "You shall help me with this project, won't you?",
    reason: "Setelah modal (shall) → V1 (bare infinitive). 'helps' salah → 'help'.",
  },
  {
    id: 'd4', section: 'D',
    question: 'Temukan & perbaiki kesalahan grammar:\n"They eating dinner at the moment."',
    sampleAnswer: 'They are eating dinner at the moment.',
    reason: "Present Continuous memerlukan auxiliary 'are'. 'They eating' tidak lengkap → They are eating.",
  },
  {
    id: 'd5', section: 'D',
    question: 'Temukan & perbaiki kesalahan grammar:\n"Somebody have broke the window."',
    sampleAnswer: 'Somebody has broken the window.',
    reason: "Dua kesalahan: (1) somebody (singular) → has (bukan have), (2) broke → broken (V3 untuk Present Perfect).",
  },
  {
    id: 'd6', section: 'D',
    question: 'Temukan & perbaiki kesalahan grammar:\n"Do everyone plays football on Sundays?"',
    sampleAnswer: 'Does everyone play football on Sundays?',
    reason: "Dua kesalahan: (1) everyone (singular) → Does (bukan Do), (2) plays → play (setelah auxiliary, V1).",
  },
  {
    id: 'd7', section: 'D',
    question: 'Temukan & perbaiki kesalahan grammar:\n"She walking to school every day, but she walk yesterday."',
    sampleAnswer: 'She walks to school every day, but she walked yesterday.',
    reason: "Dua kesalahan: (1) walking → walks (Simple Present, bukan Continuous), (2) walk → walked (Simple Past kemarin).",
  },
];
