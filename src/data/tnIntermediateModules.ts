import type { ModuleLesson, ModuleTrack } from "@/types/module";

// ── Reading Lessons ───────────────────────────────────────────────────────────

const readingLessons: ModuleLesson[] = [
  {
    id: "int-reading-2",
    track: "reading",
    day: 2,
    tutor: "Ms. Lidya",
    title: "The Most Amazing Structure on Earth",
    subtitle: "How the human brain developed and what makes it remarkable",
    overview:
      "Materi reading tentang otak manusia: sejarah perkembangannya dari makhluk purba, struktur cerebral cortex, cara kerja neuron, dan perbandingannya dengan superkomputer.",
    passage: [
      "There are people who say the most amazing structure on earth is the human brain. It is so complex that it took about 700 million years to develop. Humans started out as wormlike creatures that used one end of the body to move forward. Ever so slowly, a bunch of nerves began developing at that one end — the head. These nerves helped the creature to sense light, food and danger. Gradually, this bunch of nerves became the creature's brain. To carry messages from the brain to other parts of the body, the creature developed a spinal cord. Later, the creature became a fish with eyes, ears and a nose that could send the brain information about sights, sounds and smells.",
      "(Ada orang-orang yang mengatakan bahwa struktur paling menakjubkan di bumi adalah otak manusia. Struktur ini begitu kompleks sehingga membutuhkan sekitar 700 juta tahun untuk berkembang. Manusia awalnya adalah makhluk seperti cacing yang menggunakan satu ujung tubuhnya untuk bergerak maju. Secara perlahan, sekumpulan saraf mulai berkembang di ujung tersebut — kepala. Saraf-saraf ini membantu makhluk tersebut untuk merasakan cahaya, makanan, dan bahaya. Lambat laun, sekumpulan saraf ini menjadi otak makhluk tersebut. Untuk membawa pesan dari otak ke bagian tubuh lainnya, makhluk tersebut mengembangkan sumsum tulang belakang. Kemudian, makhluk tersebut menjadi ikan dengan mata, telinga, dan hidung yang dapat mengirimkan informasi tentang penglihatan, suara, dan bau ke otak.)",
      "More time passed, and the fish grew arms and legs so it could move about on land. For this, it needed a larger and more complex brain. It became an ape-like creature, and the part of the brain used for seeing images and being social grew much stronger. Finally, the ape-like creature became human, with a brain that was capable of reason, emotion, creativity, memory and the ability to judge right from wrong.",
      "(Waktu terus berlalu, dan ikan tersebut tumbuh menjadi makhluk dengan lengan dan kaki sehingga dapat bergerak di darat. Untuk itu, makhluk tersebut membutuhkan otak yang lebih besar dan lebih kompleks. Makhluk ini menjadi seperti kera, dan bagian otak yang digunakan untuk melihat gambar dan bersosial tumbuh jauh lebih kuat. Akhirnya, makhluk mirip kera itu menjadi manusia, dengan otak yang mampu berpikir nalar, merasakan emosi, berkreasi, mengingat, dan mampu membedakan yang benar dari yang salah.)",
      "The human brain is very mysterious. Many questions about the brain have not yet been answered. For example, why do we need sleep or why do we dream? There is a lot about the brain that we do not yet understand. Believe it or not, people used to think of the brain as useless stuffing. Of course, we now know the brain is our control centre. The surface of the brain is called the cerebral cortex. It consists of four parts called lobes. The front lobe is where much of our thinking and feeling takes place. The top lobe processes information which is coming from parts of our bodies, such as our skin and muscles. The side lobe plays an important role in hearing, speech and long-term memories while the back lobe processes images from our eyes.",
      "(Otak manusia sangat misterius. Banyak pertanyaan tentang otak yang belum terjawab. Misalnya, mengapa kita membutuhkan tidur atau mengapa kita bermimpi? Masih banyak hal tentang otak yang belum kita pahami. Percaya atau tidak, dulu orang mengira otak hanyalah bahan pengisi yang tidak berguna. Tentu saja, sekarang kita tahu bahwa otak adalah pusat kendali kita. Permukaan otak disebut korteks serebral. Korteks serebral terdiri dari empat bagian yang disebut lobus. Lobus depan adalah tempat berlangsungnya sebagian besar aktivitas berpikir dan merasakan. Lobus atas memproses informasi yang datang dari bagian tubuh kita, seperti kulit dan otot. Lobus samping berperan penting dalam pendengaran, kemampuan berbicara, dan memori jangka panjang, sementara lobus belakang memproses gambar dari mata kita.)",
      "Which do you think is more powerful, your brain or a supercomputer? You might be surprised to learn that the world's best supercomputer is only about as powerful as half a mouse brain! Your brain is packed with 100 billion brain cells called neurons. They send information to your body and receive information from it, allowing you to move, feel, taste, hear and touch. All of this information travels to and from parts of your body along your spinal cord, which is like a highway found down the centre of your back. As the information travels from neuron to neuron, pathways are created. When you think about or remember something, your brain sends signals along these pathways. Actually, you were born with most of the neurons you have now but when you were a baby, you didn't have many pathways to connect them. As an adult, you now have more than 125 trillion connections between your neurons. No computer on earth can compete with the speed of your brain and how much information it can hold.",
      "(Menurut kamu, mana yang lebih kuat, otakmu atau superkomputer? Kamu mungkin terkejut mengetahui bahwa superkomputer terbaik di dunia hanya sekuat setengah otak tikus! Otakmu dipenuhi dengan 100 miliar sel otak yang disebut neuron. Neuron-neuron ini mengirim informasi ke tubuhmu dan menerima informasi dari tubuh, memungkinkanmu untuk bergerak, merasakan, mencicipi, mendengar, dan menyentuh. Semua informasi ini berjalan ke dan dari bagian-bagian tubuhmu melalui sumsum tulang belakang, yang seperti jalan raya di sepanjang tulang punggungmu. Saat informasi berpindah dari satu neuron ke neuron lainnya, jalur-jalur pun terbentuk. Ketika kamu memikirkan atau mengingat sesuatu, otakmu mengirimkan sinyal melalui jalur-jalur ini. Sebenarnya, kamu sudah lahir dengan sebagian besar neuron yang kamu miliki sekarang, tetapi saat masih bayi, kamu belum memiliki banyak jalur untuk menghubungkannya. Sebagai orang dewasa, kamu kini memiliki lebih dari 125 triliun koneksi antar neuron. Tidak ada komputer di dunia yang dapat menandingi kecepatan otakmu dan seberapa banyak informasi yang dapat disimpannya.)",
    ],
    materialSections: [
      {
        title: "Main Passage Focus",
        points: [
          "Para. 1 — Brain took 700 million years to develop; early nerves helped sense light, food, danger.",
          "Para. 2 — Brain evolved from fish → ape-like → human: capable of reason, emotion, creativity.",
          "Para. 3 — Brain is mysterious; cerebral cortex has 4 lobes: front (thinking), top (touch), side (hearing/speech/memory), back (vision).",
          "Para. 4 — 100 billion neurons; spinal cord = highway; 125 trillion adult connections; brain beats any computer.",
        ],
      },
      {
        title: "Key Vocabulary",
        points: [
          "wormlike, nerves, spinal cord, creature, ape-like",
          "reason, emotion, creativity, mysterious, useless stuffing",
          "cerebral cortex, lobes: front / top / side / back",
          "neurons (100 billion), pathways, connections (125 trillion)",
          "highway, compete, complex, capable",
        ],
      },
      {
        title: "Reading Strategy: Main Idea vs. Supporting Detail",
        points: [
          "📌 Main idea = apa yang dibahas SECARA KESELURUHAN di sebuah paragraf.",
          "📌 Supporting detail = contoh, fakta, atau bukti yang mendukung main idea.",
          "⚡ Tip: Kalimat pertama atau terakhir paragraf sering berisi main idea.",
          'Contoh — Para. 3: Main idea = "The human brain is very mysterious."',
          "Supporting details = pertanyaan tentang tidur & mimpi, cerebral cortex & lobes.",
          "Contoh — Para. 4: Main idea = otak jauh lebih powerful dari komputer manapun.",
          "Supporting details = 100 billion neurons, spinal cord = highway, 125 trillion connections.",
        ],
      },
    ],
    exercises: [
      {
        id: "int-r2-q1",
        type: "multiple-choice",
        question:
          "What was the first purpose of the nerves that developed in early creatures?",
        options: [
          "To help the brain grow",
          "To sense light, food and danger",
          "Sending sights, sounds and smells to the brain",
        ],
        correctAnswer: "To sense light, food and danger",
        reason:
          'Paragraf 1: "These nerves helped the creature to sense light, food and danger."',
      },
      {
        id: "int-r2-q2",
        type: "multiple-choice",
        question: "What is the main idea of the second paragraph?",
        options: [
          "The development of human brain",
          "The way early creatures learned to swim",
          "The parts of the human body that send messages",
        ],
        correctAnswer: "The development of human brain",
        reason:
          "Paragraf 2 menceritakan evolusi otak dari ikan → ape-like → manusia yang mampu berpikir, berkreasi, dan merasakan emosi.",
      },
      {
        id: "int-r2-q3",
        type: "multiple-choice",
        question: "What is the main idea of the third paragraph?",
        options: [
          "The cerebral cortex makes people intelligent",
          "Brain was useless stuffing by people",
          "The human brain is very mysterious",
        ],
        correctAnswer: "The human brain is very mysterious",
        reason:
          'Paragraf 3 dibuka dengan kalimat "The human brain is very mysterious." Seluruh paragraf mendukung pernyataan ini.',
      },
      {
        id: "int-r2-q4",
        type: "multiple-choice",
        question:
          "What is the possibility if people get injured in the side lobe?",
        options: [
          "May not able to feel any kinds of emotions",
          "May have trouble to remember and talk",
          "May not be able to think intelligently",
        ],
        correctAnswer: "May have trouble to remember and talk",
        reason:
          'Paragraf 3: "The side lobe plays an important role in hearing, speech and long-term memories." Kerusakan di sini akan mengganggu bicara (talk) dan memori (remember).',
      },
      {
        id: "int-r2-q5",
        type: "multiple-choice",
        question: "According to the passage, how is a mouse's brain described?",
        options: [
          "About half as strong as the world's best supercomputer",
          "About as strong as the world's best supercomputer",
          "About twice as strong as the world's best supercomputer",
        ],
        correctAnswer:
          "About twice as strong as the world's best supercomputer",
        reason:
          'Paragraf 4: "the world\'s best supercomputer is only about as powerful as half a mouse brain." Artinya otak tikus = 2× superkomputer terbaik dunia.',
      },
      {
        id: "int-r2-q6",
        type: "multiple-choice",
        question: "What does the cerebral cortex do?",
        options: [
          "process images from our eyes",
          "process sounds that people hear",
          "process things that people touch",
        ],
        correctAnswer: "process things that people touch",
        reason:
          'Paragraf 3: "The top lobe processes information which is coming from parts of our bodies, such as our skin and muscles." — ini adalah fungsi dari bagian cerebral cortex (top lobe) yang memproses rangsangan sentuhan.',
      },
      {
        id: "int-r2-q7",
        type: "multiple-choice",
        question: "The brain's neurons use the spinal cord like a ____",
        options: ["Highway", "Pathway", "Map"],
        correctAnswer: "Highway",
        reason:
          'Paragraf 4: "your spinal cord, which is like a highway found down the centre of your back."',
      },
      {
        id: "int-r2-q8",
        type: "multiple-choice",
        question: "How many neuron connections does an adult have?",
        options: ["100 billion", "125 trillion", "700 million"],
        correctAnswer: "125 trillion",
        reason:
          'Paragraf 4: "you now have more than 125 trillion connections between your neurons." (100 billion = jumlah neuron; 700 million = tahun evolusi otak)',
      },
      {
        id: "int-r2-q9",
        type: "multiple-choice",
        question: "What is the main idea of the last paragraph?",
        options: [
          "People are born with most of the neurons they have when they become adults.",
          "The brain's neurons process the information throughout the body faster than any computer.",
          "The brain has 100 million cells called neurons.",
        ],
        correctAnswer:
          "The brain's neurons process the information throughout the body faster than any computer.",
        reason:
          "Paragraf 4 secara keseluruhan membahas bagaimana otak bekerja melalui neuron dan koneksi yang jauh melampaui kemampuan komputer manapun.",
      },
      {
        id: "int-r2-q10",
        type: "multiple-choice",
        question:
          'As used in this reading, the word "useless stuffing" refers to?',
        options: [
          "Unimportant lobes on the surface of the cerebral cortex",
          "Unused or new neurons inside the brain",
          "Unimportant material",
        ],
        correctAnswer: "Unimportant material",
        reason:
          'Dahulu orang mengira otak hanyalah "bahan pengisi yang tidak berguna" (unimportant material/filler). Sekarang kita tahu otak adalah pusat kendali tubuh.',
      },
    ],
  },
];

// ── Speaking Lessons ──────────────────────────────────────────────────────────

const speakingLessons: ModuleLesson[] = [
  // ── Day 1: Past Events ───────────────────────────────────────────────────────
  {
    id: 'int-speaking-1',
    track: 'speaking',
    day: 1,
    tutor: 'Ms. Aul',
    title: 'Past Events',
    subtitle: 'Describing memorable events using a mind map framework',
    overview:
      'Materi speaking tentang cara menceritakan kejadian di masa lalu menggunakan 5 pertanyaan panduan: what it was, when, what happened, why it happened, where & who was there, how you felt, dan why it was special.',
    materialSections: [
      {
        title: 'Mind Map — Past Events',
        points: [
          '🗺️ Gunakan 5 pertanyaan ini sebagai panduan saat berbicara tentang past event:',
          '1. WHAT it was — Kejadian apa yang ingin kamu ceritakan?',
          '2. WHEN — Kapan kejadian itu terjadi?',
          '3. WHAT happened — Apa yang terjadi? Ceritakan urutannya.',
          '4. WHY it happened — Kenapa bisa terjadi?',
          '5. WHERE & WHO was there — Di mana lokasinya? Siapa saja yang hadir?',
          '6. How was your FEELING — Bagaimana perasaanmu saat itu?',
          '7. Why do you think it was SPECIAL — Kenapa kejadian itu berkesan bagimu?',
        ],
      },
      {
        title: 'Example — "My First Day at School"',
        points: [
          'WHAT: My first day at junior high school.',
          'WHEN: It was in July, about eight years ago.',
          'WHAT happened: I arrived early, couldn\'t find my classroom, and got lost in the corridor. A senior student helped me find my class.',
          'WHY it happened: I was nervous and didn\'t read the map on the notice board.',
          'WHERE & WHO: At SMPN 5 in my hometown. My mum dropped me off, and I met my best friend there for the first time.',
          'FEELING: I felt very nervous and excited at the same time. When I finally found my class, I felt relieved.',
          'WHY SPECIAL: It was the first time I was truly independent. It was also the day I met my best friend who I still keep in touch with today.',
        ],
      },
      {
        title: 'Useful Language for Telling Past Events',
        points: [
          'It happened on / in / at … — "It happened in the summer of 2018."',
          'At that time, … / Back then, … — memberi konteks waktu',
          'First … / Then … / After that … / Finally … — urutan kejadian',
          'I remember feeling … — "I remember feeling very nervous."',
          'What made it special was … — "What made it special was meeting my best friend."',
          'Looking back, … — "Looking back, I realize how much I learned from that experience."',
          'I will never forget … — "I will never forget the moment when …"',
        ],
      },
      {
        title: 'Key Vocabulary — Feelings & Reactions',
        points: [
          'Positive: excited, thrilled, overjoyed, relieved, proud, grateful, touched',
          'Negative: nervous, anxious, scared, embarrassed, disappointed, overwhelmed',
          'Mixed: bittersweet, nostalgic, confused, surprised, speechless',
          'Tip: jangan hanya bilang "happy" atau "sad" — gunakan kata yang lebih spesifik untuk membuat ceritamu lebih hidup.',
        ],
      },
    ],
    exercises: [
      {
        id: 'int-sp1-q1',
        type: 'task',
        question:
          'Buat mind map Past Event kamu sendiri di kertas! Tulis 1 kejadian berkesan di tengah, lalu isi 7 cabang: what, when, what happened, why it happened, where & who, feeling, why special.',
      },
      {
        id: 'int-sp1-q2',
        type: 'task',
        question:
          'Gunakan mind map yang sudah kamu buat untuk bercerita selama 2 menit kepada teman/tutor. Jangan membaca — cukup lihat mind map sebagai panduan. Gunakan minimal 4 useful language expressions dari daftar.',
      },
      {
        id: 'int-sp1-q3',
        type: 'task',
        question:
          'Partner activity: setelah temanmu selesai bercerita, ajukan 3 pertanyaan tentang past event mereka (contoh: "How did you feel when that happened?" / "Who was the most important person in that story?" / "Would you want to experience it again? Why?"). Lalu bergantian.',
      },
    ],
  },

  // ── Day 2: Pronunciation ─────────────────────────────────────────────────────
  {
    id: "int-speaking-2",
    track: "speaking",
    day: 2,
    tutor: "Ms. Aul",
    title: "Pronunciation",
    subtitle: "Silent Letters, Syllables, Stress & the Schwa Sound",
    overview:
      'Materi pronunciation: mengenal silent letters dalam bahasa Inggris, latihan membaca "A Plastic Ocean", pengenalan suku kata (syllable), pola tekanan kata (stress), dan bunyi schwa.',
    materialSections: [
      {
        title: "Silent Letters",
        points: [
          'B — silent setelah "m": lamb, bomb, thumb, climb, comb, debt, subtle',
          'C — silent sebelum "k": knock, knife, know, kneel, knight',
          'G — silent sebelum "n": gnome, gnat, gnaw, sign, foreign',
          "H — silent di awal kata: hour, honest, heir, honor, vehicle",
          'K — silent sebelum "n": knee, knit, knock, know, knife',
          "L — silent: calm, palm, walk, talk, half, could, would, should, folk",
          "P — silent di awal kata: pneumonia, psychology, pterodactyl",
          "T — silent: listen, castle, fasten, whistle, often, mortgage",
          'W — silent sebelum "r": write, wrong, wrap, wrist, wrestle',
        ],
      },
      {
        title: 'Reading Practice — "A Plastic Ocean"',
        points: [
          "Bacaan bertema lingkungan tentang polusi plastik di lautan.",
          "Fokus: membaca keras dengan pelafalan yang benar, perhatikan silent letters.",
          "Latihan: baca per paragraf, tutor koreksi pelafalan kata-kata kunci.",
          "Kata-kata perhatian: pollution, ocean, microplastics, environment, creatures.",
        ],
      },
      {
        title: "Syllables (Suku Kata)",
        points: [
          "Syllable = unit bunyi yang mengandung satu vokal/bunyi vokal.",
          "1 syllable: cat, dog, school, speak",
          "2 syllables: stu-dent, teach-er, com-plex, sim-ple",
          "3 syllables: com-pu-ter, un-der-stand, re-mem-ber",
          "4 syllables: com-mu-ni-cate, un-be-liev-able",
          "Cara menghitung: tempelkan tangan di dagu — tiap vokal yang terasa = 1 syllable.",
        ],
      },
      {
        title: "Word Stress & Sentence Stress",
        points: [
          "Word stress: setiap kata >1 syllable punya satu suku kata yang ditekan lebih keras.",
          "pho-TO-graph (noun) vs. pho-to-GRAPH-ic (adjective)",
          "RE-cord (noun) vs. re-CORD (verb)",
          "Sentence stress: kata konten (nouns, verbs, adjectives, adverbs) biasanya ditekan; kata fungsi (the, a, is, at) biasanya lemah.",
          'Contoh: "She\'s GOING to the STORE to BUY some MILK."',
        ],
      },
      {
        title: "The Schwa Sound /ə/",
        points: [
          'Schwa = bunyi vokal paling umum dalam bahasa Inggris — berbunyi seperti "uh" yang singkat dan lemah.',
          "Terjadi pada suku kata yang tidak ditekan.",
          "about /ə-BOUT/, today /tə-DAY/, banana /bə-NA-nə/",
          "teacher /TEE-chər/, problem /PROB-ləm/, family /FAM-ə-lee/",
          "Latihan: ucapkan kata-kata di atas dan rasakan di mana bunyi schwa muncul.",
        ],
      },
    ],
    exercises: [
      {
        id: "int-sp2-q1",
        type: "task",
        question:
          "Baca daftar silent letter words berikut keras-keras dan tandai huruf yang diam: lamb, knock, gnome, honest, calm, listen, write, psychology. Lalu tulis 2 kata baru dengan silent letter masing-masing.",
      },
      {
        id: "int-sp2-q2",
        type: "task",
        question:
          "Hitung jumlah syllable kata-kata berikut dan tandai suku kata yang ditekan: photograph, comfortable, university, international, pronunciation, communication.",
      },
      {
        id: "int-sp2-q3",
        type: "task",
        question:
          'Ucapkan kalimat berikut dan identifikasi kata mana yang mengandung schwa sound /ə/: "The teacher asked the student to open the textbook to chapter seven."',
      },
    ],
  },

  // ── Day 3: Describe Past Event ───────────────────────────────────────────────
  {
    id: "int-speaking-3",
    track: "speaking",
    day: 3,
    tutor: "Ms. Aul",
    title: "Describe Past Event",
    subtitle: "Using prepositions of time & place to talk about events",
    overview:
      "Materi speaking tentang cara mendeskripsikan kejadian di masa lalu: preposisi waktu & tempat, kosakata untuk event, hubungan/profesi, dan adjektiva untuk menggambarkan suasana acara.",
    materialSections: [
      {
        title: "Prepositions of Time",
        points: [
          "AT — waktu spesifik: at 7 o'clock, at noon, at midnight, at the weekend",
          "ON — hari & tanggal: on Monday, on 15 March, on my birthday, on New Year's Day",
          "IN — periode: in the morning, in 2023, in January, in the 20th century",
          "FOR — durasi: for two hours, for a week, for a long time",
          "DURING — dalam rentang: during the concert, during the holiday",
          "AGO — waktu lalu: three days ago, a year ago, long ago",
          "BEFORE / AFTER — urutan: before dinner, after the show",
        ],
      },
      {
        title: "Prepositions of Location",
        points: [
          "AT — lokasi spesifik: at school, at home, at the airport, at the corner",
          "IN — dalam suatu ruang/area: in the classroom, in Jakarta, in the box",
          "ON — permukaan: on the table, on the street, on the wall",
          "NEXT TO / BESIDE — di samping: next to the door",
          "IN FRONT OF / BEHIND — di depan/belakang",
          "BETWEEN — di antara: between the library and the cafeteria",
          "NEAR — dekat: near the park",
        ],
      },
      {
        title: "Words & Phrases for Describing Events",
        points: [
          'Organized / held — "The event was organized by the school committee."',
          'Took place / was held at — "It took place at the sports hall."',
          'Attended by — "It was attended by over 200 students."',
          'Opened / started — "The ceremony opened with a speech."',
          'Ended / concluded — "The event concluded with a group photo."',
          "Memorable / unforgettable / special — kata sifat untuk suasana",
          "Crowded / lively / cheerful / solemn — menggambarkan suasana acara",
        ],
      },
      {
        title: "Relationship & Occupation Words",
        points: [
          "Relatives: grandmother, grandfather, aunt, uncle, cousin, nephew, niece",
          "Occupations: teacher, principal, committee member, volunteer, organizer",
          "Group words: audience, participants, guests, performers, attendees",
        ],
      },
      {
        title: "Adjectives for Events",
        points: [
          "Exciting / thrilling / entertaining — menyenangkan/mengasyikkan",
          "Boring / dull / monotonous — membosankan",
          "Inspiring / motivating — menginspirasi",
          "Touching / emotional / moving — mengharukan",
          "Crowded / packed — penuh sesak",
          "Well-organized / chaotic — terorganisir/kacau",
        ],
      },
    ],
    exercises: [
      {
        id: "int-sp3-q1",
        type: "task",
        question:
          "Ceritakan satu event yang pernah kamu hadiri (ulang tahun, pernikahan, pertandingan, konser, dll). Gunakan minimal 5 preposisi waktu dan 3 preposisi lokasi dalam ceritamu.",
      },
      {
        id: "int-sp3-q2",
        type: "task",
        question:
          'Lengkapi kalimat: "Last _____, I attended a _____ at _____. It was organized by _____. The event took place _____ and was attended by _____. The atmosphere was _____ because _____."',
      },
      {
        id: "int-sp3-q3",
        type: "task",
        question:
          "Dengan pasangan: satu orang cerita tentang past event, yang lain bertanya minimal 3 pertanyaan (When? Where? Who was there? What happened? How was it?) lalu bergantian.",
      },
    ],
  },

  // ── Day 4: Describe Past Events — Unusual Experience ─────────────────────────
  {
    id: "int-speaking-4",
    track: "speaking",
    day: 4,
    tutor: "Ms. Aul",
    title: "Describe Past Events — Unusual Experience",
    subtitle: "Talking about bizarre, quirky, or unexpected experiences",
    overview:
      "Materi speaking tentang cara mendeskripsikan pengalaman unik atau tidak biasa di masa lalu menggunakan kosakata khusus dan ekspresi naratif.",
    materialSections: [
      {
        title: "Vocabulary — Unusual / Strange",
        points: [
          'Peculiar — aneh/tidak biasa (milder): "It was a peculiar experience."',
          'Quirky — unik/eksentrik: "She has a quirky sense of humor."',
          'Bizarre — sangat aneh/ganjil: "The whole situation was bizarre."',
          'Odd — agak aneh: "That\'s an odd thing to say."',
          'Weird — aneh (informal): "It was a really weird day."',
          'Unexpected — tidak terduga: "The result was completely unexpected."',
          'Coincidence — kebetulan: "What a strange coincidence!"',
          "Unbelievable / Incredible — tidak terpercaya/luar biasa",
        ],
      },
      {
        title: 'Example Story — "A Bad Shopping Experience"',
        points: [
          '"Last Saturday, I went to the supermarket to buy some groceries."',
          '"It was a peculiar experience from the start — the power went out just as I entered."',
          '"I wandered around in the dark, which was quite bizarre."',
          '"Then, unexpectedly, I bumped into my old teacher from primary school."',
          '"What a coincidence! We hadn\'t seen each other for over ten years."',
          '"By the time the lights came back on, I had forgotten everything I needed to buy."',
          '"It was weird, funny, and unforgettable all at once!"',
        ],
      },
      {
        title: "Useful Narrative Phrases",
        points: [
          "It all started when … — cerita dimulai ketika…",
          "All of a sudden / Suddenly — tiba-tiba",
          "Out of nowhere — muncul tiba-tiba",
          "Before I knew it — sebelum aku sadar",
          "To make matters worse — memperparah situasi",
          "Fortunately / Luckily — untungnya",
          "In the end / Eventually — pada akhirnya",
          "Looking back, … — melihat ke belakang…",
        ],
      },
      {
        title: "Grammar Reminder — Simple Past",
        points: [
          "Regular: walk → walked, talk → talked, decide → decided",
          "Irregular: go → went, buy → bought, see → saw, meet → met, forget → forgot",
          "Negative: did not (didn't) + V1: \"I didn't see him.\"",
          'Question: Did + S + V1? "Did you enjoy it?"',
        ],
      },
    ],
    exercises: [
      {
        id: "int-sp4-q1",
        type: "task",
        question:
          "Ceritakan satu pengalaman tidak biasa/unik yang pernah kamu alami. Gunakan minimal 4 vocabulary dari daftar (peculiar, quirky, bizarre, dll) dan 3 narrative phrases (suddenly, out of nowhere, dll). Bicara minimal 1,5 menit.",
      },
      {
        id: "int-sp4-q2",
        type: "task",
        question:
          'Tulis kemudian ceritakan "A Bad _____ Experience" (ganti dengan topik pilihanmu: trip, cooking, exam, date, etc.) menggunakan pola dari contoh cerita "Bad Shopping Experience".',
      },
      {
        id: "int-sp4-q3",
        type: "task",
        question:
          "Two truths and a lie: ceritakan 3 pengalaman unik (2 nyata, 1 rekayasa). Teman menebak mana yang bohong. Gunakan past tense dan kosakata unusual experience.",
      },
    ],
  },

  // ── Day 5: Describe Future Plans ─────────────────────────────────────────────
  {
    id: "int-speaking-5",
    track: "speaking",
    day: 5,
    tutor: "Ms. Aul",
    title: "Describe Future Plans",
    subtitle:
      "Using will, be going to, and simple present to talk about the future",
    overview:
      "Materi speaking tentang cara menyatakan rencana, tujuan, dan ambisi masa depan menggunakan berbagai ekspresi future tense.",
    materialSections: [
      {
        title: "Future Tense Forms",
        points: [
          "WILL — spontaneous decision, prediction, offer/promise:",
          '  "I think it will rain tomorrow."',
          '  "I\'ll help you with that."',
          "BE GOING TO — planned intention, evidence-based prediction:",
          '  "I\'m going to study abroad next year."',
          '  "Look at those clouds — it\'s going to rain."',
          "SIMPLE PRESENT — scheduled/timetabled events:",
          '  "The flight leaves at 8 a.m."',
          '  "The semester starts in September."',
          "PRESENT CONTINUOUS — arranged personal plans:",
          '  "I\'m meeting my advisor tomorrow."',
          '  "We\'re visiting my grandparents this weekend."',
        ],
      },
      {
        title: "Vocabulary — Goals & Ambitions",
        points: [
          'Goal — tujuan yang ingin dicapai: "My goal is to graduate with honors."',
          'Ambition — ambisi/cita-cita: "My ambition is to become a doctor."',
          'Dream — impian: "I have a dream of traveling to Europe."',
          'Plan — rencana konkret: "My plan is to save money every month."',
          'Aim — sasaran: "I aim to improve my English to C1 level."',
          'Aspire — bercita-cita: "I aspire to be a successful entrepreneur."',
          'Intend — bermaksud: "I intend to apply for a scholarship."',
          'Hope — berharap: "I hope to get a promotion this year."',
        ],
      },
      {
        title: "Short-term vs. Long-term Goals",
        points: [
          "Short-term (within 1 year): finish this course, get a new job, save IDR 10 million",
          "Long-term (more than 1 year): buy a house, start a business, move abroad, get a masters degree",
          'Template short-term: "In the next ___ months, I plan to ___."',
          'Template long-term: "In the next ___ years, I hope to ___."',
          'Linking goals: "First I will ___, then I\'m going to ___, and eventually I hope to ___."',
        ],
      },
      {
        title: "Useful Expressions for Future Plans",
        points: [
          "I'm planning to … / I plan to …",
          "I'm thinking about …-ing",
          "I'm looking forward to …-ing",
          "I've decided to …",
          "If everything goes well, I will …",
          "My ultimate goal is to …",
          "I really want to … someday",
          "Eventually, I hope to …",
        ],
      },
    ],
    exercises: [
      {
        id: "int-sp5-q1",
        type: "task",
        question:
          "Ceritakan rencana masa depanmu dalam 2 menit: satu short-term goal (dalam 6–12 bulan) dan satu long-term goal (5 tahun ke depan). Gunakan minimal 3 future forms berbeda (will, be going to, present continuous/simple).",
      },
      {
        id: "int-sp5-q2",
        type: "task",
        question:
          'Partner activity: interview temanmu tentang rencana mereka dengan pertanyaan: "What are you planning to do after this course?" / "Where do you see yourself in 5 years?" / "What is your biggest ambition?" Lalu laporkan ke kelas.',
      },
      {
        id: "int-sp5-q3",
        type: "task",
        question:
          'Buat "Dream Board" lisan: sebutkan 5 impian/tujuanmu (karier, keluarga, pendidikan, kesehatan, travel) dan jelaskan mengapa itu penting bagimu. Gunakan kosakata goal, ambition, dream, aim, aspire.',
      },
    ],
  },

  // ── Day 6: Describing Future Events — Technology ─────────────────────────────
  {
    id: "int-speaking-6",
    track: "speaking",
    day: 6,
    tutor: "Ms. Aul",
    title: "Describing Future Events — Technology",
    subtitle: "Talking about AI, future tech trends, and related phrasal verbs",
    overview:
      "Materi speaking tentang teknologi masa depan: AI, Biotechnology, Quantum Computing, IoT, 5G, Robotics — plus phrasal verbs penting di bidang teknologi.",
    materialSections: [
      {
        title: "Future Technology Themes",
        points: [
          "Artificial Intelligence (AI) — machine learning, chatbots, autonomous systems",
          "Biotechnology — gene editing (CRISPR), personalized medicine, lab-grown food",
          "Quantum Computing — faster computation, cryptography, drug discovery",
          "Internet of Things (IoT) — smart homes, wearables, connected devices",
          "5G & Connectivity — ultra-fast internet, autonomous vehicles, remote surgery",
          "Robotics — industrial robots, delivery drones, humanoid assistants",
        ],
      },
      {
        title: "Example — AI in the Future",
        points: [
          '"In the near future, AI will transform the way we work and live."',
          '"AI-powered tools are going to replace repetitive tasks in many industries."',
          '"Self-driving cars will soon be a common sight on our roads."',
          '"AI is expected to revolutionize healthcare by detecting diseases early."',
          '"However, many experts worry that AI could lead to widespread job losses."',
          '"It is crucial that governments set up regulations to ensure AI is used ethically."',
        ],
      },
      {
        title: "Phrasal Verbs for Technology",
        points: [
          'Set up — to establish or install: "We set up a new server."',
          'Log in / Log out — access/leave a system: "Log in with your username."',
          'Back up — save a copy: "Always back up your files."',
          'Shut down / Power up — turn off/on: "Shut down the computer before leaving."',
          'Roll out — release gradually: "The company will roll out the new app next month."',
          'Phase out — discontinue gradually: "CDs are being phased out by streaming."',
          'Keep up with — stay current: "It\'s hard to keep up with technology."',
          'Come up with — invent/devise: "Engineers came up with a new solution."',
          'Break down — stop functioning: "The system broke down during the demo."',
          'Catch up — reach the same level: "Developing countries are catching up in tech."',
        ],
      },
      {
        title: "Useful Language for Discussing Future Tech",
        points: [
          "It is predicted that … / Experts predict that …",
          "… is expected to … / … is likely to …",
          "In the near/distant future, …",
          "By 2030 / By the end of this decade, …",
          "This will lead to … / This could result in …",
          "On the one hand, … On the other hand, …",
          "The main advantage is … / The main concern is …",
        ],
      },
    ],
    exercises: [
      {
        id: "int-sp6-q1",
        type: "task",
        question:
          "Pilih SATU teknologi masa depan (AI, Biotech, Quantum Computing, IoT, 5G, atau Robotics) dan presentasikan dalam 2 menit: apa itu, bagaimana cara kerjanya, manfaatnya, dan potensi risikonya. Gunakan minimal 3 phrasal verbs dari daftar.",
      },
      {
        id: "int-sp6-q2",
        type: "task",
        question:
          'Debat mini: "Will AI be more beneficial or more harmful to society?" Satu tim pro, satu tim kontra. Gunakan ekspresi: "It is predicted that…", "On the one hand…", "The main concern is…"',
      },
      {
        id: "int-sp6-q3",
        type: "task",
        question:
          "Gambarkan hidupmu pada tahun 2040: bagaimana teknologi mengubah rumah, pekerjaan, transportasi, dan kesehatan kamu? Bicara 1,5–2 menit menggunakan future tenses dan phrasal verbs teknologi.",
      },
    ],
  },

  // ── Day 7: Describe Place ─────────────────────────────────────────────────────
  {
    id: "int-speaking-7",
    track: "speaking",
    day: 7,
    tutor: "Ms. Aul",
    title: "Describe Place",
    subtitle:
      "Vocabulary, prepositions of location, and expressing feelings about places",
    overview:
      "Materi speaking tentang cara mendeskripsikan suatu tempat: kosakata lokasi, preposisi, adjektiva penampilan dan kualitas, serta ekspresi perasaan.",
    materialSections: [
      {
        title: "Place Vocabulary",
        points: [
          "Natural: mountain, valley, river, waterfall, forest, jungle, beach, cliff, plain, volcano",
          "Urban: skyscraper, alley, intersection, boulevard, square, district, suburb, outskirts",
          "Buildings: cathedral, temple, mosque, museum, gallery, stadium, fortress, monument",
          "Features: fountain, bridge, pathway, courtyard, terrace, rooftop, balcony, harbor",
        ],
      },
      {
        title: "Prepositions of Location",
        points: [
          "IN — enclosed/large areas: in the valley, in the city center, in the forest",
          "ON — surfaces/edges: on the hill, on the coast, on the riverbank",
          "AT — specific point: at the top, at the entrance, at the crossroads",
          "BETWEEN — in the middle of two: between the mountains",
          'SURROUNDED BY — dikelilingi: "The village is surrounded by rice fields."',
          'OVERLOOKING — menghadap/melihat ke: "The hotel overlooks the bay."',
          'NESTLED IN — terletak di: "The town is nestled in a quiet valley."',
          'STRETCHING FROM … TO … — membentang dari: "The beach stretches from north to south."',
        ],
      },
      {
        title: "Adjectives of Appearance",
        points: [
          "Vast / Enormous / Sprawling — sangat luas",
          "Tiny / Compact / Cozy — kecil/nyaman",
          "Vibrant / Bustling / Lively — ramai/hidup",
          "Peaceful / Serene / Tranquil — tenang/damai",
          "Ancient / Historic / Well-preserved — kuno/bersejarah/terawat",
          "Modern / Contemporary / Sleek — modern/elegan",
          "Picturesque / Scenic / Breathtaking — indah/memukau",
          "Deserted / Abandoned / Remote — sepi/terpencil",
        ],
      },
      {
        title: "Expressing Feelings About Places",
        points: [
          "The place made me feel … (calm / excited / nostalgic / overwhelmed)",
          "I was struck by … / I was amazed by … / I was moved by …",
          "There was something magical about …",
          "I couldn't help but feel … when I saw …",
          "It took my breath away.",
          "I've never seen anything like it.",
          "It felt like stepping into another world.",
          "The atmosphere was electric / soothing / mysterious.",
        ],
      },
    ],
    exercises: [
      {
        id: "int-sp7-q1",
        type: "task",
        question:
          "Deskripsikan tempat favoritmu (kota, pantai, pegunungan, rumah nenek, dll) selama 2 menit. Gunakan: minimal 5 place vocabulary, 4 preposisi lokasi, dan 3 ekspresi perasaan.",
      },
      {
        id: "int-sp7-q2",
        type: "task",
        question:
          "Tanpa menyebut nama tempatnya, deskripsikan suatu tempat menggunakan clues (penampilan, lokasi, suasana). Teman menebak tempat apa yang kamu maksud.",
      },
      {
        id: "int-sp7-q3",
        type: "task",
        question:
          "Bayangkan kamu adalah tour guide. Deskripsikan Indonesia (atau kota asalmu) kepada turis asing. Jelaskan lokasinya, penampilan, hal-hal menarik, dan suasananya. Bicara 2 menit.",
      },
    ],
  },

  // ── Day 8: Describe Object ────────────────────────────────────────────────────
  {
    id: "int-speaking-8",
    track: "speaking",
    day: 8,
    tutor: "Ms. Aul",
    title: "Describe Object",
    subtitle:
      "What it is, what it is used for, what it is made of, and what it looks like",
    overview:
      "Materi speaking tentang cara mendeskripsikan benda: fungsi, bahan, penampilan, menggunakan passive voice dan adjektiva evaluatif.",
    materialSections: [
      {
        title: "Framework for Describing an Object",
        points: [
          '1. WHAT IT IS — "It is a ___. / This is a kind of ___."',
          '2. WHAT IT IS USED FOR — "It is used for …-ing / It is used to + V1."',
          '3. WHAT IT IS MADE OF — "It is made of ___ (material)."',
          "4. WHAT IT LOOKS LIKE — shape, size, color, texture, features",
          '5. EVALUATION — "I think it is … because …"',
        ],
      },
      {
        title: "Passive Voice for Description",
        points: [
          "Structure: is/are + past participle",
          '"It is made of stainless steel."',
          '"It is used to measure temperature."',
          '"It is found in most kitchens."',
          '"It is known as one of the most useful tools."',
          '"It is designed to be lightweight and portable."',
          '"It was invented in the early 19th century."',
        ],
      },
      {
        title: "Shape, Size & Texture Vocabulary",
        points: [
          "Shape: rectangular, circular, oval, triangular, cylindrical, flat, curved, pointed",
          "Size: tiny, small, medium-sized, large, enormous, compact, slim, thick",
          "Texture: smooth, rough, soft, hard, flexible, rigid, bumpy, glossy, matte",
          "Color: transparent, opaque, shiny, dull, multicolored, solid",
          "Weight: lightweight, heavy, sturdy, fragile, durable",
        ],
      },
      {
        title: "Adjectives for Evaluation",
        points: [
          "Useful / Practical / Handy — berguna/praktis",
          "Innovative / Revolutionary / Cutting-edge — inovatif/mutakhir",
          "Efficient / Effective / Reliable — efisien/andal",
          "Outdated / Obsolete / Old-fashioned — ketinggalan zaman",
          "Affordable / Cost-effective / Overpriced — terjangkau/mahal",
          "Eco-friendly / Sustainable — ramah lingkungan",
          "Fragile / Durable / Long-lasting — rapuh/tahan lama",
        ],
      },
    ],
    exercises: [
      {
        id: "int-sp8-q1",
        type: "task",
        question:
          "Pilih satu benda yang ada di sekitarmu sekarang dan deskripsikan selama 1,5 menit menggunakan framework 5 poin (what it is, used for, made of, looks like, evaluation). Jangan sebutkan namanya dulu — biarkan teman menebak!",
      },
      {
        id: "int-sp8-q2",
        type: "task",
        question:
          'Deskripsikan sebuah alat/gadget teknologi (smartphone, laptop, smartwatch, dll) menggunakan passive voice minimal 5 kali. Contoh: "It is made of aluminum. It is used to…"',
      },
      {
        id: "int-sp8-q3",
        type: "task",
        question:
          'Kamu adalah seorang penjual. Promosikan satu produk kepada "pelanggan" (teman sekelas) dengan mendeskripsikannya secara lengkap dan meyakinkan. Gunakan adjektiva evaluatif (useful, innovative, durable, dll).',
      },
    ],
  },

  // ── Day 9: Describe Person ────────────────────────────────────────────────────
  {
    id: "int-speaking-9",
    track: "speaking",
    day: 9,
    tutor: "Ms. Aul",
    title: "Describe Person",
    subtitle:
      "Relatives, occupations, personality adjectives, and expressions of admiration",
    overview:
      "Materi speaking tentang cara mendeskripsikan seseorang: hubungan keluarga, pekerjaan, adjektiva kepribadian, dan ekspresi kekaguman.",
    materialSections: [
      {
        title: "Relatives & Relationships",
        points: [
          "Nuclear family: parents, mother/mom, father/dad, siblings, brother, sister",
          "Extended family: grandparents, grandmother/grandma, grandfather/grandpa",
          "Aunt, uncle, cousin, nephew (keponakan laki), niece (keponakan perempuan)",
          "In-laws: mother-in-law, father-in-law, brother-in-law, sister-in-law",
          "Other: best friend, mentor, colleague, neighbor, classmate",
        ],
      },
      {
        title: "Occupations & Roles",
        points: [
          "Professional: doctor, lawyer, engineer, architect, accountant, entrepreneur",
          "Education: teacher, lecturer, professor, tutor, researcher",
          "Creative: artist, designer, writer, musician, photographer",
          "Public service: police officer, firefighter, nurse, soldier, civil servant",
          'Phrases: "She works as a ___." / "He is employed by ___." / "She runs her own business."',
        ],
      },
      {
        title: "Personality Adjectives",
        points: [
          "Positive: kind, generous, patient, hardworking, dedicated, reliable, humble, cheerful",
          "Negative: stubborn, arrogant, impatient, careless, dishonest, selfish",
          "Balanced: reserved, independent, perfectionist, ambitious, straightforward",
          'Tip: use examples — "She is very patient. For instance, she always waits for me even when I\'m late."',
        ],
      },
      {
        title: "Physical Appearance",
        points: [
          "Build: slim, athletic, medium build, stocky, tall, short",
          "Hair: straight, curly, wavy; short, long, medium-length; blonde, brunette, dark",
          "Face: round, oval, square-shaped; freckles, dimples, beard, glasses",
          "Style: casual, formal, stylish, simple, elegant",
        ],
      },
      {
        title: "Expressions of Admiration & Imitation",
        points: [
          "I really look up to … because …",
          "I admire … for their ability to …",
          "What I find inspiring about … is that …",
          "They have taught me that …",
          "I hope to be like them someday.",
          "They are the kind of person who …",
          "If I could be like anyone, it would be …",
        ],
      },
    ],
    exercises: [
      {
        id: "int-sp9-q1",
        type: "task",
        question:
          "Deskripsikan seseorang yang paling berpengaruh dalam hidupmu (orang tua, guru, tokoh publik, teman). Ceritakan: hubungan kalian, pekerjaannya, penampilan fisiknya, kepribadiannya, dan mengapa kamu mengaguminya. Bicara 2 menit.",
      },
      {
        id: "int-sp9-q2",
        type: "task",
        question:
          "Tanpa menyebut nama, deskripsikan seseorang yang dikenal bersama (teman sekelas, artis terkenal, tokoh sejarah). Gunakan personality adjectives dan physical appearance. Teman menebak siapa orangnya.",
      },
      {
        id: "int-sp9-q3",
        type: "task",
        question:
          "Pilih satu tokoh inspiratif (lokal atau internasional) dan berikan speech singkat 2 menit tentang mengapa mereka menginspirasimu. Gunakan minimal 4 expressions of admiration dari daftar.",
      },
    ],
  },
];

// ── Listening Lessons ─────────────────────────────────────────────────────────

const listeningLessons: ModuleLesson[] = [
  {
    id: "int-listening-2",
    track: "listening",
    day: 2,
    tutor: "Ms. Lidya",
    title: "Everyday Conversations",
    subtitle: "Listening for detail and gist in daily dialogues",
    overview:
      "Materi listening tentang strategi mendengarkan percakapan sehari-hari: memahami gist, detail spesifik, dan nada bicara.",
    materialSections: [
      {
        title: "Listening Strategies",
        points: [
          "🎯 Listening for GIST — memahami isi umum/topik utama. Jangan terpaku pada setiap kata.",
          "🔍 Listening for DETAIL — mencari informasi spesifik (angka, nama, waktu, tempat).",
          "💡 Listening for ATTITUDE — memahami perasaan atau pendapat pembicara (positive/negative/neutral).",
          "✏️ Note-taking — tulis kata kunci, bukan kalimat lengkap, saat mendengarkan.",
          "🔄 Listen twice — pertama untuk gist, kedua untuk detail dan konfirmasi jawaban.",
        ],
      },
      {
        title: "Common Traps in Listening Tests",
        points: [
          "⚠️ Distractor words — pembicara menyebut kata yang mirip pilihan jawaban, tapi bukan yang benar.",
          '⚠️ Negation — "He does NOT like coffee" → jangan pilih "coffee" sebagai yang dia suka.',
          '⚠️ Correction — pembicara bisa mengoreksi dirinya sendiri: "Monday — no wait, Tuesday."',
          "⚠️ Paraphrasing — jawaban di audio dan soal sering menggunakan kata yang berbeda tapi makna sama.",
        ],
      },
      {
        title: "Key Phrases to Listen For",
        points: [
          "Actually / In fact — pembicara menyampaikan informasi penting atau koreksi",
          "So / Therefore / As a result — menyatakan kesimpulan atau akibat",
          "But / However / Although — menyatakan perubahan arah/kontras",
          "First / Then / Finally / After that — urutan kejadian",
        ],
      },
    ],
    exercises: [
      {
        id: "int-ls2-q1",
        type: "task",
        question:
          "Listen to a short English podcast or YouTube video (2–3 minutes). Write down 5 key ideas you heard. Share with the class.",
      },
      {
        id: "int-ls2-q2",
        type: "task",
        question:
          "Listen to your tutor read the following sentences and identify: is the speaker's tone positive, negative, or neutral? Explain your answer.",
      },
      {
        id: "int-ls2-q3",
        type: "task",
        question:
          "Partner activity: one person describes their weekend plan using only spoken English (no text), the other takes notes. Then summarize what you heard.",
      },
    ],
  },
];

// ── Grammar Lessons (link to tnIntermediateGrammar topics) ───────────────────

const grammarLessons: ModuleLesson[] = [
  {
    id: "int-grammar-2",
    track: "grammar",
    day: 2,
    tutor: "Ms. Lidya",
    title: "5 Tenses + Grammar Structures",
    subtitle:
      "Simple Present, Past, Future, Present Continuous, Present Perfect, Adjective Clause, Gerund & Infinitive",
    overview:
      "Materi grammar TN Intermediate mencakup 5 tenses utama dan 2 grammar structure: Adjective Clause dan To Infinitive & Gerund.",
    materialSections: [
      {
        title: "Topics Covered",
        points: [
          "1. Simple Present Tense — kebiasaan, fakta, rutinitas (S + V1(s/es))",
          "2. Simple Past Tense — kejadian di masa lalu (S + V2)",
          "3. Simple Future Tense — rencana atau prediksi (S + will + V1)",
          "4. Present Continuous — sedang terjadi sekarang (S + is/am/are + V-ing)",
          "5. Present Perfect — pengalaman atau hasil (S + has/have + V3)",
          "6. Adjective Clause — klausa yang memodifikasi noun (who, which, that, where, whose)",
          "7. To Infinitive & Gerund — V+to+V1 vs V+V-ing",
        ],
      },
      {
        title: "Study Tip",
        points: [
          "Pelajari setiap topic satu per satu di halaman Grammar TN Intermediate.",
          "Perhatikan formula, signal words, dan contoh kalimat di setiap topic.",
          "Kerjakan latihan soal di setiap topic sebelum ke materi berikutnya.",
        ],
      },
    ],
    exercises: [
      {
        id: "int-gr2-q1",
        type: "task",
        question:
          "Buka halaman Grammar TN Intermediate dan pelajari semua 7 topic. Tulis 2 contoh kalimat untuk masing-masing topic (total 14 kalimat).",
      },
      {
        id: "int-gr2-q2",
        type: "task",
        question:
          "Kerjakan semua latihan soal di setiap grammar topic. Catat skor kamu dan review kesalahan.",
      },
    ],
  },
];

// ── All lessons combined ──────────────────────────────────────────────────────

export const tnIntermediateLessons: ModuleLesson[] = [
  ...readingLessons,
  ...speakingLessons,
  ...listeningLessons,
  ...grammarLessons,
].sort((a, b) =>
  a.track === b.track ? a.day - b.day : a.track.localeCompare(b.track),
);

export const tnIntermediateTracks: {
  track: ModuleTrack;
  title: string;
  description: string;
  pdfPath: string;
}[] = [
  {
    track: "reading",
    title: "Reading Intermediate",
    description:
      "Teks bacaan bertopik akademis & kontemporer: media sosial, iklim, ekonomi, dan lainnya.",
    pdfPath: "",
  },
  {
    track: "speaking",
    title: "Speaking Intermediate",
    description:
      "Latihan speaking: ekspresi pendapat, diskusi, dan percakapan level intermediate.",
    pdfPath: "",
  },
  {
    track: "grammar",
    title: "Grammar Intermediate",
    description:
      "5 tenses utama + Adjective Clause + To Infinitive & Gerund dengan latihan soal.",
    pdfPath: "",
  },
  {
    track: "listening",
    title: "Listening Intermediate",
    description:
      "Strategi listening: gist, detail, attitude, dan latihan percakapan sehari-hari.",
    pdfPath: "",
  },
];

export const getTnIntermediateLessonsByTrack = (track: ModuleTrack) =>
  tnIntermediateLessons
    .filter((lesson) => lesson.track === track)
    .sort((a, b) => a.day - b.day);

export const getTnIntermediateLesson = (track: ModuleTrack, day: number) =>
  tnIntermediateLessons.find(
    (lesson) => lesson.track === track && lesson.day === day,
  ) ?? null;
