export type SpeakingSentence = {
  id: string;
  text: string;
  translation: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  tip?: string;
};

export const speakingCategories = [
  'Simple Present',
  'Simple Past',
  'Simple Future',
  'Present Continuous',
  'Present Perfect',
  'Adjective Clause',
  'Gerund & Infinitive',
  'Daily Phrases',
] as const;

export type SpeakingCategory = (typeof speakingCategories)[number];

export const speakingSentences: SpeakingSentence[] = [
  // ── Simple Present ───────────────────────────────────────────────
  {
    id: 'sp-01',
    category: 'Simple Present',
    level: 'beginner',
    text: 'She works at a hospital every day.',
    translation: 'Dia bekerja di rumah sakit setiap hari.',
    tip: 'Perhatikan "works" (ada -s karena She)',
  },
  {
    id: 'sp-02',
    category: 'Simple Present',
    level: 'beginner',
    text: 'They do not eat meat.',
    translation: 'Mereka tidak makan daging.',
  },
  {
    id: 'sp-03',
    category: 'Simple Present',
    level: 'beginner',
    text: 'Water boils at one hundred degrees.',
    translation: 'Air mendidih pada seratus derajat.',
  },
  {
    id: 'sp-04',
    category: 'Simple Present',
    level: 'beginner',
    text: 'He always wakes up early on weekdays.',
    translation: 'Dia selalu bangun pagi di hari kerja.',
  },
  {
    id: 'sp-05',
    category: 'Simple Present',
    level: 'beginner',
    text: 'The sun rises in the east.',
    translation: 'Matahari terbit di sebelah timur.',
  },
  {
    id: 'sp-06',
    category: 'Simple Present',
    level: 'intermediate',
    text: 'My brother does not speak English very well.',
    translation: 'Saudara laki-laki saya tidak berbicara Bahasa Inggris dengan baik.',
  },
  {
    id: 'sp-07',
    category: 'Simple Present',
    level: 'intermediate',
    text: 'Does she usually take the bus to work?',
    translation: 'Apakah dia biasanya naik bus ke tempat kerja?',
  },
  {
    id: 'sp-08',
    category: 'Simple Present',
    level: 'intermediate',
    text: 'The train leaves at seven every morning.',
    translation: 'Kereta berangkat jam tujuh setiap pagi.',
  },

  // ── Simple Past ───────────────────────────────────────────────────
  {
    id: 'past-01',
    category: 'Simple Past',
    level: 'beginner',
    text: 'She visited London last summer.',
    translation: 'Dia mengunjungi London musim panas lalu.',
  },
  {
    id: 'past-02',
    category: 'Simple Past',
    level: 'beginner',
    text: 'We went to the beach last Sunday.',
    translation: 'Kami pergi ke pantai Minggu lalu.',
    tip: '"went" adalah bentuk tidak beraturan dari "go"',
  },
  {
    id: 'past-03',
    category: 'Simple Past',
    level: 'beginner',
    text: 'He studied hard for the final exam.',
    translation: 'Dia belajar keras untuk ujian akhir.',
  },
  {
    id: 'past-04',
    category: 'Simple Past',
    level: 'beginner',
    text: 'They bought a new car two years ago.',
    translation: 'Mereka membeli mobil baru dua tahun yang lalu.',
    tip: '"bought" adalah bentuk tidak beraturan dari "buy"',
  },
  {
    id: 'past-05',
    category: 'Simple Past',
    level: 'intermediate',
    text: 'She did not call me last night.',
    translation: 'Dia tidak menelepon saya tadi malam.',
  },
  {
    id: 'past-06',
    category: 'Simple Past',
    level: 'intermediate',
    text: 'Did you see that movie yesterday?',
    translation: 'Apakah kamu menonton film itu kemarin?',
  },
  {
    id: 'past-07',
    category: 'Simple Past',
    level: 'intermediate',
    text: 'The accident happened at ten o\'clock last night.',
    translation: 'Kecelakaan terjadi pukul sepuluh tadi malam.',
  },

  // ── Simple Future ──────────────────────────────────────────────────
  {
    id: 'fut-01',
    category: 'Simple Future',
    level: 'beginner',
    text: 'I will help you with your homework tonight.',
    translation: 'Saya akan membantumu dengan pekerjaan rumahmu malam ini.',
  },
  {
    id: 'fut-02',
    category: 'Simple Future',
    level: 'beginner',
    text: 'She will finish the report by Friday.',
    translation: 'Dia akan menyelesaikan laporan sebelum Jumat.',
  },
  {
    id: 'fut-03',
    category: 'Simple Future',
    level: 'beginner',
    text: 'The weather will be sunny tomorrow.',
    translation: 'Cuaca akan cerah besok.',
  },
  {
    id: 'fut-04',
    category: 'Simple Future',
    level: 'intermediate',
    text: 'Will they join the meeting next Monday?',
    translation: 'Apakah mereka akan ikut rapat Senin depan?',
  },
  {
    id: 'fut-05',
    category: 'Simple Future',
    level: 'intermediate',
    text: 'If you study hard, you will pass the exam.',
    translation: 'Jika kamu belajar keras, kamu akan lulus ujian.',
  },
  {
    id: 'fut-06',
    category: 'Simple Future',
    level: 'intermediate',
    text: 'Do not worry, I will fix the problem.',
    translation: 'Jangan khawatir, saya akan mengatasi masalahnya.',
  },

  // ── Present Continuous ─────────────────────────────────────────────
  {
    id: 'pc-01',
    category: 'Present Continuous',
    level: 'beginner',
    text: 'She is talking on the phone right now.',
    translation: 'Dia sedang berbicara di telepon sekarang.',
  },
  {
    id: 'pc-02',
    category: 'Present Continuous',
    level: 'beginner',
    text: 'They are not working today.',
    translation: 'Mereka tidak sedang bekerja hari ini.',
  },
  {
    id: 'pc-03',
    category: 'Present Continuous',
    level: 'beginner',
    text: 'Look, it is raining outside.',
    translation: 'Lihat, hujan di luar sekarang.',
  },
  {
    id: 'pc-04',
    category: 'Present Continuous',
    level: 'intermediate',
    text: 'The students are studying in the library right now.',
    translation: 'Para siswa sedang belajar di perpustakaan sekarang.',
  },
  {
    id: 'pc-05',
    category: 'Present Continuous',
    level: 'intermediate',
    text: 'Are you listening to music at the moment?',
    translation: 'Apakah kamu sedang mendengarkan musik saat ini?',
  },
  {
    id: 'pc-06',
    category: 'Present Continuous',
    level: 'intermediate',
    text: 'I am meeting the doctor tomorrow afternoon.',
    translation: 'Saya akan menemui dokter besok siang.',
    tip: 'Present Continuous juga bisa untuk rencana pasti',
  },

  // ── Present Perfect ────────────────────────────────────────────────
  {
    id: 'pp-01',
    category: 'Present Perfect',
    level: 'intermediate',
    text: 'I have never eaten sushi before.',
    translation: 'Saya tidak pernah makan sushi sebelumnya.',
    tip: '"eaten" adalah V3 dari "eat"',
  },
  {
    id: 'pp-02',
    category: 'Present Perfect',
    level: 'intermediate',
    text: 'She has just arrived at the airport.',
    translation: 'Dia baru saja tiba di bandara.',
  },
  {
    id: 'pp-03',
    category: 'Present Perfect',
    level: 'intermediate',
    text: 'Have you ever been to New York?',
    translation: 'Pernahkah kamu ke New York?',
    tip: '"been" adalah V3 dari "be"',
  },
  {
    id: 'pp-04',
    category: 'Present Perfect',
    level: 'intermediate',
    text: 'They have lived here for five years.',
    translation: 'Mereka sudah tinggal di sini selama lima tahun.',
  },
  {
    id: 'pp-05',
    category: 'Present Perfect',
    level: 'intermediate',
    text: 'I have not seen him since Monday.',
    translation: 'Saya tidak melihatnya sejak Senin.',
  },
  {
    id: 'pp-06',
    category: 'Present Perfect',
    level: 'advanced',
    text: 'She has already submitted the assignment.',
    translation: 'Dia sudah menyerahkan tugasnya.',
  },
  {
    id: 'pp-07',
    category: 'Present Perfect',
    level: 'advanced',
    text: 'Technology has changed a lot over the years.',
    translation: 'Teknologi telah banyak berubah dari waktu ke waktu.',
  },

  // ── Adjective Clause ───────────────────────────────────────────────
  {
    id: 'ac-01',
    category: 'Adjective Clause',
    level: 'intermediate',
    text: 'The woman who lives next door is a teacher.',
    translation: 'Perempuan yang tinggal di sebelah adalah seorang guru.',
  },
  {
    id: 'ac-02',
    category: 'Adjective Clause',
    level: 'intermediate',
    text: 'This is the book that I recommended.',
    translation: 'Inilah buku yang saya rekomendasikan.',
  },
  {
    id: 'ac-03',
    category: 'Adjective Clause',
    level: 'intermediate',
    text: 'The city where I was born is very small.',
    translation: 'Kota tempat saya dilahirkan sangat kecil.',
  },
  {
    id: 'ac-04',
    category: 'Adjective Clause',
    level: 'advanced',
    text: 'The boy whose bag was stolen reported it to the police.',
    translation: 'Anak laki-laki yang tasnya dicuri melapor ke polisi.',
  },
  {
    id: 'ac-05',
    category: 'Adjective Clause',
    level: 'advanced',
    text: 'I remember the day when we first met.',
    translation: 'Saya ingat hari ketika kita pertama kali bertemu.',
  },
  {
    id: 'ac-06',
    category: 'Adjective Clause',
    level: 'advanced',
    text: 'My mother, who is a nurse, works at the hospital.',
    translation: 'Ibu saya, yang adalah seorang perawat, bekerja di rumah sakit.',
  },

  // ── Gerund & Infinitive ────────────────────────────────────────────
  {
    id: 'gi-01',
    category: 'Gerund & Infinitive',
    level: 'intermediate',
    text: 'I enjoy swimming in the ocean.',
    translation: 'Saya suka berenang di lautan.',
  },
  {
    id: 'gi-02',
    category: 'Gerund & Infinitive',
    level: 'intermediate',
    text: 'She wants to become a doctor.',
    translation: 'Dia ingin menjadi dokter.',
  },
  {
    id: 'gi-03',
    category: 'Gerund & Infinitive',
    level: 'intermediate',
    text: 'Learning a language takes time and patience.',
    translation: 'Belajar bahasa membutuhkan waktu dan kesabaran.',
  },
  {
    id: 'gi-04',
    category: 'Gerund & Infinitive',
    level: 'intermediate',
    text: 'He decided to move to another city.',
    translation: 'Dia memutuskan untuk pindah ke kota lain.',
  },
  {
    id: 'gi-05',
    category: 'Gerund & Infinitive',
    level: 'advanced',
    text: 'She is interested in learning more about astronomy.',
    translation: 'Dia tertarik untuk mempelajari lebih lanjut tentang astronomi.',
  },
  {
    id: 'gi-06',
    category: 'Gerund & Infinitive',
    level: 'advanced',
    text: 'He stopped smoking after his doctor\'s advice.',
    translation: 'Dia berhenti merokok setelah saran dokternya.',
  },
  {
    id: 'gi-07',
    category: 'Gerund & Infinitive',
    level: 'advanced',
    text: 'I look forward to seeing you at the conference.',
    translation: 'Saya menantikan bertemu denganmu di konferensi.',
  },

  // ── Daily Phrases ──────────────────────────────────────────────────
  {
    id: 'dp-01',
    category: 'Daily Phrases',
    level: 'beginner',
    text: 'Good morning, how are you today?',
    translation: 'Selamat pagi, apa kabar hari ini?',
  },
  {
    id: 'dp-02',
    category: 'Daily Phrases',
    level: 'beginner',
    text: 'I am doing well, thank you very much.',
    translation: 'Saya baik-baik saja, terima kasih banyak.',
  },
  {
    id: 'dp-03',
    category: 'Daily Phrases',
    level: 'beginner',
    text: 'Could you please repeat that?',
    translation: 'Bisakah kamu mengulangi itu?',
  },
  {
    id: 'dp-04',
    category: 'Daily Phrases',
    level: 'beginner',
    text: 'I did not understand what you said.',
    translation: 'Saya tidak mengerti apa yang kamu katakan.',
  },
  {
    id: 'dp-05',
    category: 'Daily Phrases',
    level: 'intermediate',
    text: 'Could you speak more slowly, please?',
    translation: 'Bisakah kamu berbicara lebih pelan?',
  },
  {
    id: 'dp-06',
    category: 'Daily Phrases',
    level: 'intermediate',
    text: 'I have been studying English for two years.',
    translation: 'Saya sudah belajar Bahasa Inggris selama dua tahun.',
  },
  {
    id: 'dp-07',
    category: 'Daily Phrases',
    level: 'intermediate',
    text: 'What time does the meeting start tomorrow?',
    translation: 'Jam berapa rapat dimulai besok?',
  },
  {
    id: 'dp-08',
    category: 'Daily Phrases',
    level: 'advanced',
    text: 'I would appreciate it if you could get back to me as soon as possible.',
    translation: 'Saya akan sangat berterima kasih jika kamu bisa membalas saya sesegera mungkin.',
  },
];
