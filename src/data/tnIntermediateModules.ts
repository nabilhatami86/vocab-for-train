import type { ModuleLesson, ModuleTrack } from "@/types/module";

// ── Reading Lessons ───────────────────────────────────────────────────────────

const readingLessons: ModuleLesson[] = [
  {
    id: "int-reading-2",
    track: "reading",
    day: 2,
    tutor: "Ms. Siska",
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
      {
        title: "Vocabulary List",
        points: [
          "1. amazing (adj) — menakjubkan | Sinonim: incredible | Antonim: ordinary",
          "2. structure (n) — struktur | Sinonim: framework | Antonim: chaos",
          "3. complex (adj) — kompleks | Sinonim: complicated | Antonim: simple",
          "4. develop (v) — berkembang | Sinonim: grow | Antonim: decline",
          "5. creature (n) — makhluk | Sinonim: being",
          "6. wormlike (adj) — mirip cacing | Sinonim: snake-like",
          "7. nerves (n) — saraf | Sinonim: neurons",
          "8. sense (v) — merasakan | Sinonim: detect | Antonim: ignore",
          "9. danger (n) — bahaya | Sinonim: risk | Antonim: safety",
          "10. eventually (adv) — akhirnya | Sinonim: finally | Antonim: immediately",
          "11. spinal cord (n) — sumsum tulang belakang | Sinonim: backbone",
          "12. information (n) — informasi | Sinonim: data | Antonim: ignorance",
          "13. process (v) — memproses | Sinonim: handle | Antonim: ignore",
          "14. mysterious (adj) — misterius | Sinonim: puzzling | Antonim: clear",
          "15. useless (adj) — tidak berguna | Sinonim: pointless | Antonim: useful",
          "16. control centre (n) — pusat kendali | Sinonim: command center",
          "17. surface (n) — permukaan | Sinonim: outer layer | Antonim: interior",
          "18. intelligent (adj) — cerdas | Sinonim: smart | Antonim: stupid",
          "19. consists of (v phrase) — terdiri dari | Sinonim: includes | Antonim: excludes",
          "20. thinking (n) — berpikir | Sinonim: reasoning",
          "21. muscles (n) — otot | Sinonim: tissue",
          "22. hearing (n) — pendengaran | Sinonim: listening | Antonim: deafness",
          "23. speech (n) — ucapan | Sinonim: talk | Antonim: silence",
          "24. memories (n) — ingatan | Sinonim: recollections | Antonim: forgetfulness",
          "25. process images (v phrase) — memproses gambar | Sinonim: interpret visuals | Antonim: ignore",
          "26. powerful (adj) — kuat | Sinonim: strong | Antonim: weak",
          "27. packed with (adj phrase) — dipenuhi | Sinonim: filled with | Antonim: empty",
          "28. neurons (n) — neuron / sel saraf | Sinonim: nerve cells",
          "29. receive (v) — menerima | Sinonim: get | Antonim: send",
          "30. pathway (n) — jalur | Sinonim: route | Antonim: blockage",
          "31. practice (v) — berlatih | Sinonim: rehearse | Antonim: neglect",
          "32. stronger (adj) — lebih kuat | Sinonim: tougher | Antonim: weaker",
          "33. learn (v) — belajar | Sinonim: study | Antonim: forget",
          "34. remember (v) — mengingat | Sinonim: recall | Antonim: forget",
          "35. born (v) — dilahirkan | Sinonim: delivered | Antonim: die",
          "36. connections (n) — hubungan | Sinonim: links | Antonim: separation",
          "37. compete (v) — bersaing | Sinonim: rival | Antonim: cooperate",
          "38. speed (n) — kecepatan | Sinonim: velocity | Antonim: slowness",
          "39. capable (adj) — mampu | Sinonim: able | Antonim: incapable",
          "40. creativity (n) — kreativitas | Sinonim: imagination | Antonim: rigidity",
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
      // ── True / False / Not Given ──────────────────────────────────────────────
      {
        id: "int-r2-tfng1",
        type: "true-false-not-given",
        question: "Early creatures detected light, food, and danger through developing nerves.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'Paragraf 1: "These nerves helped the creature to sense light, food and danger." — pernyataan sesuai dengan teks.',
      },
      {
        id: "int-r2-tfng2",
        type: "true-false-not-given",
        question: "The spinal cord carries messages from the brain to the rest of the body.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'Paragraf 1: "To carry messages from the brain to other parts of the body, the creature developed a spinal cord." — sesuai teks.',
      },
      {
        id: "int-r2-tfng3",
        type: "true-false-not-given",
        question: "Fish are becoming humans immediately after they grow arms and legs.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'Paragraf 2: Setelah tumbuh kaki dan tangan, makhluk itu menjadi "ape-like creature" dulu, bukan langsung manusia. Kata "immediately" membuat pernyataan ini salah.',
      },
      {
        id: "int-r2-tfng4",
        type: "true-false-not-given",
        question: "People in the past believe that the brain is the body's control centre.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'Paragraf 3: "people used to think of the brain as useless stuffing." — justru sebaliknya; dulu otak dianggap tidak berguna, bukan pusat kendali.',
      },
      {
        id: "int-r2-tfng5",
        type: "true-false-not-given",
        question: "The cerebral cortex is made up of four lobes.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'Paragraf 3: "It consists of four parts called lobes." — pernyataan sesuai teks.',
      },
      {
        id: "int-r2-tfng6",
        type: "true-false-not-given",
        question: "Scientists have explained completely why humans sleep and dream.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'Paragraf 3: "Many questions about the brain have not yet been answered. For example, why do we need sleep or why do we dream?" — teks menyatakan belum terjawab.',
      },
      {
        id: "int-r2-tfng7",
        type: "true-false-not-given",
        question: "The side lobe helps with hearing, speech, and long-term memory.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'Paragraf 3: "The side lobe plays an important role in hearing, speech and long-term memories." — sesuai teks.',
      },
      {
        id: "int-r2-tfng8",
        type: "true-false-not-given",
        question: "Humans will be born with new neurons throughout their adult lives.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'Paragraf 4: "you were born with most of the neurons you have now" — artinya neuron sudah ada sejak lahir, tidak bertambah sepanjang hidup dewasa.',
      },
      {
        id: "int-r2-tfng9",
        type: "true-false-not-given",
        question: "Repeating an activity strengthens the neural pathways in the brain.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason:
          'Teks menyebutkan bahwa jalur (pathways) terbentuk saat informasi berpindah antar neuron, tetapi tidak menyebutkan secara eksplisit bahwa pengulangan aktivitas memperkuat jalur tersebut.',
      },
      {
        id: "int-r2-tfng10",
        type: "true-false-not-given",
        question: "The human brain uses electricity as its main source of energy.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason:
          'Informasi ini tidak disebutkan sama sekali dalam teks bacaan.',
      },
      // ── Matching Vocabulary ───────────────────────────────────────────────────
      {
        id: "int-r2-match1",
        type: "multiple-choice",
        question: "Match: (adj) amazing",
        options: [
          "A. to handle or deal with information",
          "B. a living being, especially an animal",
          "C. very surprising or impressive",
          "D. something that gives orders and controls actions",
          "E. not simple; having many parts",
        ],
        correctAnswer: "C. very surprising or impressive",
        reason: '"amazing" = menakjubkan → C. very surprising or impressive.',
      },
      {
        id: "int-r2-match2",
        type: "multiple-choice",
        question: "Match: (n) structure",
        options: [
          "F. the outer or top layer of something",
          "G. to grow or change over time",
          "H. a route or way that something follows",
          "I. able to think, learn, and understand well",
          "N. the way parts are arranged or organized",
        ],
        correctAnswer: "N. the way parts are arranged or organized",
        reason: '"structure" = struktur → N. the way parts are arranged or organized.',
      },
      {
        id: "int-r2-match3",
        type: "multiple-choice",
        question: "Match: (v) develop",
        options: [
          "G. to grow or change over time",
          "J. after a long time; in the end",
          "K. something difficult to explain or understand",
          "L. a thin fiber that carries messages in the body",
          "M. to become aware of something through the senses",
        ],
        correctAnswer: "G. to grow or change over time",
        reason: '"develop" = berkembang → G. to grow or change over time.',
      },
      {
        id: "int-r2-match4",
        type: "multiple-choice",
        question: "Match: (n) creature",
        options: [
          "A. to handle or deal with information",
          "B. a living being, especially an animal",
          "C. very surprising or impressive",
          "E. not simple; having many parts",
          "N. the way parts are arranged or organized",
        ],
        correctAnswer: "B. a living being, especially an animal",
        reason: '"creature" = makhluk → B. a living being, especially an animal.',
      },
      {
        id: "int-r2-match5",
        type: "multiple-choice",
        question: "Match: (v) sense",
        options: [
          "D. something that gives orders and controls actions",
          "G. to grow or change over time",
          "J. after a long time; in the end",
          "M. to become aware of something through the senses",
          "O. to try to be better than others",
        ],
        correctAnswer: "M. to become aware of something through the senses",
        reason: '"sense" = merasakan → M. to become aware of something through the senses.',
      },
      {
        id: "int-r2-match6",
        type: "multiple-choice",
        question: "Match: (adj) complex",
        options: [
          "B. a living being, especially an animal",
          "E. not simple; having many parts",
          "F. the outer or top layer of something",
          "I. able to think, learn, and understand well",
          "K. something difficult to explain or understand",
        ],
        correctAnswer: "E. not simple; having many parts",
        reason: '"complex" = kompleks → E. not simple; having many parts.',
      },
      {
        id: "int-r2-match7",
        type: "multiple-choice",
        question: "Match: (n) nerve",
        options: [
          "H. a route or way that something follows",
          "J. after a long time; in the end",
          "K. something difficult to explain or understand",
          "L. a thin fiber that carries messages in the body",
          "N. the way parts are arranged or organized",
        ],
        correctAnswer: "L. a thin fiber that carries messages in the body",
        reason: '"nerve" = saraf → L. a thin fiber that carries messages in the body.',
      },
      {
        id: "int-r2-match8",
        type: "multiple-choice",
        question: "Match: (adv) eventually",
        options: [
          "A. to handle or deal with information",
          "D. something that gives orders and controls actions",
          "G. to grow or change over time",
          "J. after a long time; in the end",
          "O. to try to be better than others",
        ],
        correctAnswer: "J. after a long time; in the end",
        reason: '"eventually" = akhirnya → J. after a long time; in the end.',
      },
      {
        id: "int-r2-match9",
        type: "multiple-choice",
        question: "Match: (adj) mysterious",
        options: [
          "E. not simple; having many parts",
          "I. able to think, learn, and understand well",
          "J. after a long time; in the end",
          "K. something difficult to explain or understand",
          "M. to become aware of something through the senses",
        ],
        correctAnswer: "K. something difficult to explain or understand",
        reason: '"mysterious" = misterius → K. something difficult to explain or understand.',
      },
      {
        id: "int-r2-match10",
        type: "multiple-choice",
        question: "Match: (n) control centre",
        options: [
          "B. a living being, especially an animal",
          "D. something that gives orders and controls actions",
          "F. the outer or top layer of something",
          "H. a route or way that something follows",
          "N. the way parts are arranged or organized",
        ],
        correctAnswer: "D. something that gives orders and controls actions",
        reason: '"control centre" = pusat kendali → D. something that gives orders and controls actions.',
      },
      {
        id: "int-r2-match11",
        type: "multiple-choice",
        question: "Match: (n) surface",
        options: [
          "C. very surprising or impressive",
          "F. the outer or top layer of something",
          "G. to grow or change over time",
          "L. a thin fiber that carries messages in the body",
          "O. to try to be better than others",
        ],
        correctAnswer: "F. the outer or top layer of something",
        reason: '"surface" = permukaan → F. the outer or top layer of something.',
      },
      {
        id: "int-r2-match12",
        type: "multiple-choice",
        question: "Match: (adj) intelligent",
        options: [
          "A. to handle or deal with information",
          "E. not simple; having many parts",
          "I. able to think, learn, and understand well",
          "J. after a long time; in the end",
          "K. something difficult to explain or understand",
        ],
        correctAnswer: "I. able to think, learn, and understand well",
        reason: '"intelligent" = cerdas → I. able to think, learn, and understand well.',
      },
      {
        id: "int-r2-match13",
        type: "multiple-choice",
        question: "Match: (v) process",
        options: [
          "A. to handle or deal with information",
          "B. a living being, especially an animal",
          "G. to grow or change over time",
          "M. to become aware of something through the senses",
          "O. to try to be better than others",
        ],
        correctAnswer: "A. to handle or deal with information",
        reason: '"process" = memproses → A. to handle or deal with information.',
      },
      {
        id: "int-r2-match14",
        type: "multiple-choice",
        question: "Match: (n) pathway",
        options: [
          "D. something that gives orders and controls actions",
          "F. the outer or top layer of something",
          "H. a route or way that something follows",
          "L. a thin fiber that carries messages in the body",
          "N. the way parts are arranged or organized",
        ],
        correctAnswer: "H. a route or way that something follows",
        reason: '"pathway" = jalur → H. a route or way that something follows.',
      },
      {
        id: "int-r2-match15",
        type: "multiple-choice",
        question: "Match: (v) compete",
        options: [
          "A. to handle or deal with information",
          "G. to grow or change over time",
          "J. after a long time; in the end",
          "M. to become aware of something through the senses",
          "O. to try to be better than others",
        ],
        correctAnswer: "O. to try to be better than others",
        reason: '"compete" = bersaing → O. to try to be better than others.',
      },
    ],
  },

  // ── Day 3: Video Games Are Good for You! ─────────────────────────────────────
  {
    id: "int-reading-3",
    track: "reading",
    day: 3,
    tutor: "Ms. Lidya",
    title: "Video Games Are Good for You!",
    subtitle:
      "Exploring the physical, mental, and psychological benefits of gaming",
    overview:
      "Materi reading tentang manfaat video game bagi tubuh dan otak: keterampilan fisik, fungsi otak, masalah psikologis, hingga potensi penggunaan game dalam dunia medis.",
    passage: [
      "For years video games have been criticised for making people more antisocial, overweight or depressed. But now researchers are finding that games can actually change us for the better and improve both our body and mind.",
      "(Selama bertahun-tahun, video game dikritik karena membuat orang menjadi lebih antisosial, kelebihan berat badan, atau depresi. Namun kini para peneliti menemukan bahwa game sebenarnya dapat mengubah kita menjadi lebih baik dan meningkatkan kondisi tubuh serta pikiran kita.)",
      "Games can help to develop physical skills. Pre-school children who played interactive games such as the ones available on Wii have been shown to have improved motor skills, for example they can kick, catch and throw a ball better than children who don't play video games. A study of surgeons who do microsurgery in Boston found that those who played video games were 27 per cent faster and made 37 per cent fewer errors than those who didn't. Vision is also improved, particularly telling the difference between shades of grey. This is useful for driving at night, piloting a plane or reading X-rays.",
      "(Game dapat membantu mengembangkan keterampilan fisik. Anak-anak usia pra-sekolah yang memainkan game interaktif seperti yang tersedia di Wii terbukti memiliki keterampilan motorik yang lebih baik — misalnya mereka dapat menendang, menangkap, dan melempar bola dengan lebih baik dibanding anak-anak yang tidak bermain video game. Sebuah studi terhadap ahli bedah yang melakukan operasi mikro di Boston menemukan bahwa mereka yang bermain video game 27 persen lebih cepat dan membuat 37 persen lebih sedikit kesalahan dibanding yang tidak. Penglihatan juga meningkat, terutama dalam membedakan gradasi warna abu-abu. Hal ini berguna untuk mengemudi di malam hari, menerbangkan pesawat, atau membaca foto X-ray.)",
      "Games also benefit a variety of brain functions, including decision-making. People who play action-based games make decisions 25 per cent faster than others and are no less accurate, according to one study. It was also found that the best gamers can make choices and act on them up to six times a second, four times faster than most people. In another study by researchers from the University of Rochester in New York, experienced gamers were shown to be able to pay attention to more than six things at once without getting confused, compared with the four that most people can normally keep in mind. Additionally, video games can also reduce gender differences. Scientists have found that women who play games are better able to mentally manipulate 3D objects.",
      "(Game juga memberikan manfaat bagi berbagai fungsi otak, termasuk pengambilan keputusan. Orang yang memainkan game berbasis aksi mengambil keputusan 25 persen lebih cepat dibanding orang lain dan tidak kalah akuratnya, menurut sebuah studi. Ditemukan pula bahwa gamer terbaik dapat membuat pilihan dan bertindak berdasarkan pilihan tersebut hingga enam kali per detik, empat kali lebih cepat dari kebanyakan orang. Dalam studi lain oleh peneliti dari University of Rochester di New York, gamer berpengalaman terbukti mampu memperhatikan lebih dari enam hal sekaligus tanpa kebingungan, dibanding empat hal yang biasanya dapat diingat kebanyakan orang. Selain itu, video game juga dapat mengurangi perbedaan gender. Para ilmuwan menemukan bahwa wanita yang bermain game lebih mampu memanipulasi objek 3D secara mental.)",
      "There is also evidence that gaming can help with psychological problems. At the University of Auckland in New Zealand, researchers asked 94 young people diagnosed with depression to play a 3D fantasy game called SPARX and in many cases, the game reduced symptoms of depression more than conventional treatment. Another research team at Oxford University found that playing Tetris shortly after exposure to something very upsetting – in the experiment, a film of traumatic scenes of injury and death was used – can actually prevent people having disturbing flashbacks.",
      "(Ada juga bukti bahwa bermain game dapat membantu mengatasi masalah psikologis. Di University of Auckland di Selandia Baru, para peneliti meminta 94 anak muda yang didiagnosis menderita depresi untuk memainkan game fantasi 3D bernama SPARX, dan dalam banyak kasus, game tersebut berhasil mengurangi gejala depresi lebih efektif daripada pengobatan konvensional. Tim peneliti lain di University of Oxford menemukan bahwa bermain Tetris segera setelah terpapar sesuatu yang sangat mengganggu — dalam eksperimen tersebut digunakan film yang menampilkan adegan traumatis berupa cedera dan kematian — ternyata dapat mencegah orang mengalami kilas balik (flashback) yang mengganggu.)",
      "The effects are not always so positive, however. Indiana University researchers carried out brain scans on young men and found evidence that violent games can alter brain function after as little as a week of play, affecting regions in the brain associated with emotional control and causing more aggressive behaviour in the player. But Daphne Bavelier, one of the most experienced researchers in the field, says that violent action games that often worry parents most may actually have the strongest beneficial effect on the brain. In the future, we may see many treatments for physical and neurological problems which incorporate the playing of video games.",
      "(Namun, efeknya tidak selalu positif. Peneliti dari Indiana University melakukan pemindaian otak pada pria muda dan menemukan bukti bahwa game kekerasan dapat mengubah fungsi otak setelah hanya satu minggu bermain, memengaruhi wilayah otak yang terkait dengan pengendalian emosi dan menyebabkan perilaku yang lebih agresif pada pemain. Namun Daphne Bavelier, salah satu peneliti paling berpengalaman di bidang ini, mengatakan bahwa game aksi kekerasan yang paling sering dikhawatirkan orang tua justru mungkin memiliki efek paling menguntungkan bagi otak. Di masa depan, kita mungkin akan melihat banyak pengobatan untuk masalah fisik dan neurologis yang melibatkan permainan video game.)",
    ],
    materialSections: [
      {
        title: "Main Passage Focus",
        points: [
          "Para. 1 — Intro: Video games long criticised, but researchers now finding benefits for body and mind.",
          "Para. 2 — Physical skills: improved motor skills (Wii), surgeons faster & fewer errors, better vision (shades of grey).",
          "Para. 3 — Brain functions: faster decisions (25%), attention to 6+ things at once (Rochester), reduces gender gap in spatial skills.",
          "Para. 4 — Psychological: SPARX game reduced depression (Auckland); Tetris prevents traumatic flashbacks (Oxford).",
          "Para. 5 — Negatives: violent games alter brain, cause aggression (Indiana Uni). BUT Bavelier: violent games may have strongest benefit. Future: games as medical treatments.",
        ],
      },
      {
        title: "Key Vocabulary",
        points: [
          "criticised, antisocial, overweight, depressed — kritik terhadap game",
          "motor skills, microsurgery, errors, shades of grey, piloting — manfaat fisik",
          "decision-making, accurate, manipulate, gender differences — manfaat kognitif",
          "psychological, diagnosed, depression, symptoms, conventional treatment — manfaat psikologis",
          "flashbacks, traumatic, violent, aggressive, neurological — efek negatif & masa depan",
          "incorporate, beneficial, alter, evidence, researchers — kata kunci akademik",
        ],
      },
      {
        title: "Reading Strategy: Fact vs. Opinion",
        points: [
          "📌 FACT = informasi yang bisa dibuktikan dengan data/penelitian.",
          "📌 OPINION = pandangan seseorang yang bisa diperdebatkan.",
          '⚡ Ciri fact: angka, nama universitas, hasil studi ("A study found that…")',
          '⚡ Ciri opinion: "may", "says that", "according to" + nama orang ("Bavelier says that…")',
          'Contoh fact: "Surgeons who played games were 27% faster." (ada data angka)',
          'Contoh opinion: "Violent games may have the strongest beneficial effect." (Bavelier\'s view)',
        ],
      },
    ],
    exercises: [
      {
        id: "int-r3-ftg1",
        type: "fill-the-gap",
        question:
          "Fill the gap — Playing video games improves the speed at which people can make ______.",
        options: ["Decisions", "Attention", "Skills", "Errors"],
        correctAnswer: "Decisions",
        reason:
          'Paragraf 3: "People who play action-based games make decisions 25 per cent faster than others."',
      },
      {
        id: "int-r3-ftg2",
        type: "fill-the-gap",
        question:
          "Fill the gap — Video gamers also demonstrate an improved ability to pay ______ to several things at once.",
        options: ["Attention", "Behaviour", "Difference", "Field"],
        correctAnswer: "Attention",
        reason:
          'Paragraf 3: "experienced gamers were shown to be able to pay attention to more than six things at once."',
      },
      {
        id: "int-r3-ftg3",
        type: "fill-the-gap",
        question:
          "Fill the gap — Pre-school children who play video games have been shown to have improved motor ______.",
        options: ["Shades", "Skills", "Scans", "Decisions"],
        correctAnswer: "Skills",
        reason:
          'Paragraf 2: "Pre-school children … have been shown to have improved motor skills."',
      },
      {
        id: "int-r3-ftg4",
        type: "fill-the-gap",
        question:
          "Fill the gap — Playing video games increases players' ability to tell the ______ between ______ of grey.",
        options: [
          "Difference / Shades",
          "Field / Errors",
          "Attention / Skills",
          "Behaviour / Scans",
        ],
        correctAnswer: "Difference / Shades",
        reason:
          'Paragraf 2: "particularly telling the difference between shades of grey."',
      },
      {
        id: "int-r3-ftg5",
        type: "fill-the-gap",
        question:
          "Fill the gap — Surgeons who play computer games work faster and make ______ fewer.",
        options: ["Errors", "Scans", "Decisions", "Shades"],
        correctAnswer: "Errors",
        reason:
          'Paragraf 2: "made 37 per cent fewer errors than those who didn\'t."',
      },
      {
        id: "int-r3-ftg6",
        type: "fill-the-gap",
        question:
          "Fill the gap — Researchers from Indiana University investigated the effects of violent video games by doing some brain ______ on video gamers.",
        options: ["Scans", "Field", "Behaviour", "Attention"],
        correctAnswer: "Scans",
        reason:
          'Paragraf 5: "Indiana University researchers carried out brain scans on young men."',
      },
      {
        id: "int-r3-ftg7",
        type: "fill-the-gap",
        question:
          "Fill the gap — Their research showed that violent video games affect emotional control and may cause more aggressive ______.",
        options: ["Behaviour", "Difference", "Skills", "Errors"],
        correctAnswer: "Behaviour",
        reason:
          'Paragraf 5: "causing more aggressive behaviour in the player."',
      },
      {
        id: "int-r3-ftg8",
        type: "fill-the-gap",
        question:
          "Fill the gap — Daphne Bavelier is one of the most experienced researchers in her ______.",
        options: ["Field", "Shades", "Scans", "Decisions"],
        correctAnswer: "Field",
        reason:
          'Paragraf 5: "Daphne Bavelier, one of the most experienced researchers in the field."',
      },
      {
        id: "int-r3-mc1",
        type: "multiple-choice",
        question:
          "Only relatively recently have people started to realise ______.",
        options: [
          "The harmful effects of video games",
          "The beneficial effects of video games",
          "How much we don't know about video games' effects",
          "How video games are different from other hobbies",
        ],
        correctAnswer: "The beneficial effects of video games",
        reason:
          'Paragraf 1: "researchers are finding that games can actually change us for the better" — menunjukkan manfaat yang baru disadari.',
      },
      {
        id: "int-r3-mc2",
        type: "multiple-choice",
        question:
          "Very young children show improved ______ after playing video games.",
        options: [
          "Muscle control and co-ordination",
          "Social interaction skills",
          "Reading and writing ability",
          "Ability to tell different colours apart",
        ],
        correctAnswer: "Muscle control and co-ordination",
        reason:
          'Paragraf 2: "improved motor skills, for example they can kick, catch and throw a ball better" — motor skills = muscle control and co-ordination.',
      },
      {
        id: "int-r3-mc3",
        type: "multiple-choice",
        question: "Playing video games helps doctors ______.",
        options: [
          "Do operations faster and read X-rays more accurately",
          "Make better decisions under pressure",
          "Operate more safely on young children",
          "Attend to more than one patient at a time",
        ],
        correctAnswer: "Do operations faster and read X-rays more accurately",
        reason:
          "Paragraf 2: surgeons were 27% faster, fewer errors, AND vision improved for reading X-rays.",
      },
      {
        id: "int-r3-mc4",
        type: "multiple-choice",
        question:
          "Video gamers' decision-making speed is significantly improved by ______.",
        options: [
          "Years of gaming experience",
          "Playing different types of games regularly",
          "Playing action-based games",
          "Owning a certain type of gaming device",
        ],
        correctAnswer: "Playing action-based games",
        reason:
          'Paragraf 3: "People who play action-based games make decisions 25 per cent faster than others."',
      },
      {
        id: "int-r3-mc5",
        type: "multiple-choice",
        question: "Women who play video games demonstrate ______.",
        options: [
          "Faster reaction speeds than men",
          "Reduced stress levels compared to non-gamers",
          "Better concentration in the workplace",
          "Better spatial awareness when manipulating 3D objects",
        ],
        correctAnswer: "Better spatial awareness when manipulating 3D objects",
        reason:
          'Paragraf 3: "women who play games are better able to mentally manipulate 3D objects."',
      },
      {
        id: "int-r3-mc6",
        type: "multiple-choice",
        question:
          "In one research study, the video game Tetris helps people to ______.",
        options: [
          "Improve overall concentration and memory",
          "Overcome symptoms of long-term depression",
          "Stop disturbing flashbacks after a traumatic experience",
          "Make faster and more accurate decisions under stress",
        ],
        correctAnswer:
          "Stop disturbing flashbacks after a traumatic experience",
        reason:
          'Paragraf 4: "playing Tetris … can actually prevent people having disturbing flashbacks."',
      },
      {
        id: "int-r3-mc7",
        type: "multiple-choice",
        question: "Research shows that violent video games ______.",
        options: [
          "Have no measurable negative effects on players",
          "Only affect the brain after many months of play",
          "May have both positive and negative effects on the brain",
          "Only impact players who already show aggressive tendencies",
        ],
        correctAnswer:
          "May have both positive and negative effects on the brain",
        reason:
          "Paragraf 5: Indiana Uni found negative effects (aggression), but Bavelier says they may also have the strongest beneficial effects — jadi ada dua sisi.",
      },
      {
        id: "int-r3-mc8",
        type: "multiple-choice",
        question: "In the future, video games may be used for ______.",
        options: [
          "Treating a variety of physical and neurological problems",
          "Training doctors to manage emotional pressure at work",
          "Helping parents deal with difficult teenagers at home",
          "Rehabilitating prisoners with a history of violent behaviour",
        ],
        correctAnswer:
          "Treating a variety of physical and neurological problems",
        reason:
          'Paragraf 5: "many treatments for physical and neurological problems which incorporate the playing of video games."',
      },
      {
        id: "int-r3-mc9",
        type: "multiple-choice",
        question:
          "According to the passage, why do scientists continue studying video games despite concerns?",
        options: [
          "They want to prove that violent games should be completely banned",
          "They believe video games have absolutely no effect on the brain",
          "Evidence shows that certain games may provide important benefits",
          "Most scientists believe current research on games is unscientific",
        ],
        correctAnswer:
          "Evidence shows that certain games may provide important benefits",
        reason:
          "Keseluruhan artikel menunjukkan bukti manfaat — peneliti terus meneliti karena ada potensi besar yang belum sepenuhnya dipahami.",
      },
      {
        id: "int-r3-mc10",
        type: "multiple-choice",
        question:
          "What can you infer about the future role of video games in society?",
        options: [
          "They will completely replace all traditional medical treatments",
          "They will likely be used as tools to support physical and mental health",
          "They will become less popular as more people learn about their risks",
          "They will only ever be used for entertainment and leisure purposes",
        ],
        correctAnswer:
          "They will likely be used as tools to support physical and mental health",
        reason:
          'Paragraf 5: "we may see many treatments for physical and neurological problems which incorporate the playing of video games" — mengindikasikan peran medis di masa depan.',
      },
    ],
  },

  // ── Day 4: Culture Shock ──────────────────────────────────────────────────────
  {
    id: "int-reading-4",
    track: "reading",
    day: 4,
    tutor: "Ms. Lidya",
    title: "Culture Shock",
    subtitle:
      "The four stages of adapting to a new culture — and the surprising fifth stage",
    overview:
      "Materi reading tentang culture shock: 4 tahap adaptasi budaya (honeymoon, rejection, adjustment, at ease at last) dan tahap kelima yang mengejutkan — reverse culture shock.",
    passage: [
      "Psychologists tell us that there are four basic stages that people go through when they enter and begin to adapt to a new culture. The phenomenon of experiencing culture shock is the way our brain and body react when we encounter new surroundings.",
      "(Para psikolog memberi tahu kita bahwa ada empat tahap dasar yang dilalui orang ketika mereka memasuki dan mulai beradaptasi dengan budaya baru. Fenomena mengalami culture shock adalah cara otak dan tubuh kita bereaksi ketika kita menemukan lingkungan baru.)",
      "When we move from one culture to another, there are many new things we encounter. When we greet someone, we may feel very strange when we use a greeting that does not involve bowing. If the language or the other person's age and status is not clear, it may be difficult for us to feel comfortable communicating with people in the new culture.",
      "(Ketika kita berpindah dari satu budaya ke budaya lain, ada banyak hal baru yang kita temui. Ketika kita menyapa seseorang, kita mungkin merasa sangat aneh ketika menggunakan salam yang tidak melibatkan membungkuk. Jika bahasa atau usia dan status orang lain tidak jelas, mungkin sulit bagi kita untuk merasa nyaman berkomunikasi dengan orang-orang di budaya baru tersebut.)",
      'We can call this the "honeymoon stage". This is the period of time when everything about the new culture is exciting and interesting. You might be thrilled to be in the new environment, seeing new sights, hearing new sounds, and meeting new people. This feeling can last for quite a long time because we feel we are involved in some kind of great adventure.',
      '(Kita bisa menyebut ini sebagai "tahap bulan madu". Ini adalah periode waktu ketika segala sesuatu tentang budaya baru terasa menyenangkan dan menarik. Kamu mungkin merasa sangat senang berada di lingkungan baru, melihat pemandangan baru, mendengar suara-suara baru, dan bertemu orang-orang baru. Perasaan ini bisa bertahan cukup lama karena kita merasa sedang terlibat dalam semacam petualangan besar.)',
      'Unfortunately, the second stage of culture shock can be more difficult. After we have settled down into our new life, working or studying, buying groceries, doing laundry, or living with a family, problems can begin to appear. We may miss our homeland and our family, and we may feel lonely. We may also feel uncomfortable or disturbed when we face the foreign culture. This period of cultural adjustment is called the "rejection stage".',
      '(Sayangnya, tahap kedua dari culture shock bisa lebih sulit. Setelah kita menetap dalam kehidupan baru kita — bekerja atau belajar, membeli bahan makanan, mencuci pakaian, atau tinggal bersama keluarga — masalah bisa mulai muncul. Kita mungkin merindukan tanah air dan keluarga kita, dan kita mungkin merasa kesepian. Kita juga mungkin merasa tidak nyaman atau terganggu ketika menghadapi budaya asing tersebut. Periode penyesuaian budaya ini disebut "tahap penolakan".)',
      "This rejection stage can be quite dangerous because the visitor may feel depressed and tired. This is often caused by not being able to communicate effectively, or by too much concern over food or contact with people from the new culture. This may also lead to physical symptoms such as developing skin infections or rashes which then makes the person feel even more scared and unhappy. People may also experience a crisis in the process of cultural adjustment and may choose to go back to their homeland or spend all their time with people from their own culture speaking their native language.",
      "(Tahap penolakan ini bisa cukup berbahaya karena pengunjung mungkin merasa tertekan dan lelah. Hal ini sering disebabkan oleh ketidakmampuan berkomunikasi secara efektif, atau terlalu khawatir tentang makanan atau kontak dengan orang-orang dari budaya baru. Ini juga bisa menyebabkan gejala fisik seperti infeksi kulit atau ruam yang kemudian membuat orang tersebut merasa semakin takut dan tidak bahagia. Orang-orang juga mungkin mengalami krisis dalam proses penyesuaian budaya dan mungkin memilih untuk kembali ke tanah air mereka atau menghabiskan semua waktu mereka dengan orang-orang dari budaya mereka sendiri yang berbicara bahasa asli mereka.)",
      'The third stage of culture shock is called the "adjustment stage". This is when you begin to understand more about the host culture. Your sense of humour usually becomes stronger and you realize that you are capable of taking care of yourself in the new place. Things are still difficult, but you are now a survivor.',
      '(Tahap ketiga dari culture shock disebut "tahap penyesuaian". Inilah saatnya kamu mulai lebih memahami budaya tuan rumah. Rasa humor kamu biasanya menjadi lebih kuat dan kamu menyadari bahwa kamu mampu mengurus diri sendiri di tempat baru. Hal-hal masih sulit, tetapi kamu kini adalah seorang yang berhasil bertahan.)',
      'The fourth stage can be called "at ease at last". Now you feel quite comfortable in your new surroundings. You can cope with most problems that occur. You may still have problems with the language, but you know that you can deal with them. If you meet someone from your country who has just arrived, you can be the expert on life in the new culture and help them to deal with their culture shock.',
      '(Tahap keempat bisa disebut "akhirnya nyaman". Kini kamu merasa cukup nyaman di lingkungan barumu. Kamu dapat mengatasi sebagian besar masalah yang terjadi. Kamu mungkin masih mengalami kesulitan dengan bahasa, tetapi kamu tahu bahwa kamu bisa menghadapinya. Jika kamu bertemu seseorang dari negaramu yang baru tiba, kamu bisa menjadi ahli dalam kehidupan di budaya baru tersebut dan membantu mereka menghadapi culture shock mereka.)',
      'There is a fifth stage of culture shock which many people don\'t know about. This is called "reverse culture shock". Surprisingly, this occurs when you go back to your native culture and find that you have changed and that things there have changed while you have been away. Now you feel a little uncomfortable back home. Life is a struggle!',
      '(Ada tahap kelima dari culture shock yang banyak orang tidak ketahui. Ini disebut "reverse culture shock". Mengejutkan, ini terjadi ketika kamu kembali ke budaya aslimu dan menemukan bahwa kamu telah berubah dan hal-hal di sana juga telah berubah selama kamu pergi. Kini kamu merasa sedikit tidak nyaman kembali di rumah. Hidup menjadi perjuangan!)',
    ],
    materialSections: [
      {
        title: "5 Stages of Culture Shock",
        points: [
          "1. 🍯 HONEYMOON — Segalanya terasa seru & menakjubkan. Bisa bertahan cukup lama.",
          "2. ❌ REJECTION — Masalah mulai muncul: rindu rumah, kesepian, tidak nyaman. Bisa menyebabkan gejala fisik.",
          "3. 🔧 ADJUSTMENT — Mulai memahami budaya baru, lebih kuat, bisa mengurus diri sendiri.",
          "4. ✅ AT EASE AT LAST — Nyaman dengan lingkungan baru, bisa bantu orang lain.",
          "5. 🔄 REVERSE CULTURE SHOCK — Terjadi saat kembali ke budaya asal — terasa asing di negeri sendiri.",
        ],
      },
      {
        title: "Key Vocabulary",
        points: [
          "culture shock — rasa tidak nyaman saat memasuki budaya baru",
          "honeymoon stage — tahap awal yang menyenangkan",
          "rejection stage — tahap penolakan; kesepian, rindu rumah",
          "adjustment stage — tahap penyesuaian; mulai memahami budaya baru",
          "reverse culture shock — rasa tidak nyaman ketika kembali ke budaya sendiri",
          'cope — mengatasi, menghadapi: "You can cope with most problems."',
          "symptoms — gejala: skin infections, rashes",
          "phenomenon — fenomena; sesuatu yang terjadi dan bisa diamati",
          "resilience — ketahanan; kemampuan bangkit dari kesulitan",
          "survivor — orang yang berhasil bertahan",
        ],
      },
      {
        title: "Reading Strategy: True / False / Not Given",
        points: [
          "✅ TRUE — pernyataan sesuai dengan informasi dalam teks.",
          "❌ FALSE — pernyataan bertentangan dengan informasi dalam teks.",
          "❓ NOT GIVEN — teks tidak menyebutkan informasi tersebut sama sekali.",
          "⚡ Tips: Jangan gunakan pengetahuan umum — hanya berdasarkan apa yang tertulis.",
          "⚡ NOT GIVEN ≠ False: kalau teks diam tentang suatu hal, jawabannya NOT GIVEN.",
          "⚡ Cari kata kunci dari pernyataan di dalam teks, lalu bandingkan maknanya.",
        ],
      },
    ],
    exercises: [
      // Multiple Choice (10 soal)
      {
        id: "int-r4-mc1",
        type: "multiple-choice",
        question: "When does culture shock happen?",
        options: [
          "When you reach your teens",
          "When you move to a big city",
          "When you meet foreign people for the first time",
          "When you go to live in a foreign culture",
        ],
        correctAnswer: "When you go to live in a foreign culture",
        reason:
          'Paragraf 1: "four basic stages that people go through when they enter and begin to adapt to a new culture." — culture shock terjadi saat memasuki & beradaptasi dengan budaya baru.',
      },
      {
        id: "int-r4-mc2",
        type: "multiple-choice",
        question: "How do you feel during the first stage of culture shock?",
        options: [
          "Lonely and depressed",
          "Bored and homesick",
          "Happy and excited",
          "Angry and frustrated",
        ],
        correctAnswer: "Happy and excited",
        reason:
          'Paragraf 3: "everything about the new culture is exciting and interesting. You might be thrilled to be in the new environment." — thrilled = very happy/excited.',
      },
      {
        id: "int-r4-mc3",
        type: "multiple-choice",
        question: "How do you feel during the second stage (rejection stage)?",
        options: [
          "Homesick and uncomfortable",
          "Interested and amused",
          "Stressed, but positive",
          "You have no particular feelings",
        ],
        correctAnswer: "Homesick and uncomfortable",
        reason:
          'Paragraf 4: "We may miss our homeland and our family" (= homesick) + "we may feel uncomfortable or disturbed when we face the foreign culture."',
      },
      {
        id: "int-r4-mc4",
        type: "multiple-choice",
        question: "How could the third stage best be described?",
        options: ["Adjustment", "Rejection", "Enthusiasm", "Anger"],
        correctAnswer: "Adjustment",
        reason:
          "Paragraf 6: \"The third stage of culture shock is called the 'adjustment stage'.\" — nama resmi tahap ketiga adalah adjustment.",
      },
      {
        id: "int-r4-mc5",
        type: "multiple-choice",
        question: "How do you feel during the fourth stage of culture shock?",
        options: [
          "Tense, but positive",
          "Relaxed and comfortable",
          "Negative and stressed",
          "Afraid",
        ],
        correctAnswer: "Relaxed and comfortable",
        reason:
          'Paragraf 7: "Now you feel quite comfortable in your new surroundings. You can cope with most problems that occur." — nyaman dan santai.',
      },
      {
        id: "int-r4-mc6",
        type: "multiple-choice",
        question: "Why might reverse culture shock be a problem?",
        options: [
          "It hardly ever happens.",
          "It is extremely stressful.",
          "Most people do not expect it.",
          "It only happens to young people.",
        ],
        correctAnswer: "Most people do not expect it.",
        reason:
          'Paragraf 8: "There is a fifth stage of culture shock which many people don\'t know about." — kebanyakan orang tidak tahu tentangnya, artinya tidak menyangka/expect.',
      },
      {
        id: "int-r4-mc7",
        type: "multiple-choice",
        question: "The four basic stages of culture shock are:",
        options: [
          "Honeymoon, rehearsal, memorization, return",
          "Honeymoon, rejection, adjustment, at ease at last",
          "Honeymoon, rejection, reverse, at ease at last",
          "Honeymoon, rehearsal, rejection, at ease at last",
        ],
        correctAnswer: "Honeymoon, rejection, adjustment, at ease at last",
        reason:
          "Sesuai urutan dalam teks: (1) honeymoon, (2) rejection, (3) adjustment, (4) at ease at last. Reverse culture shock adalah tahap ke-5, bukan bagian dari 4 tahap dasar.",
      },
      {
        id: "int-r4-mc8",
        type: "multiple-choice",
        question: "What is the fifth stage of culture shock called?",
        options: [
          "Rehearsal culture shock",
          "Reverse culture shock",
          "Foreign culture shock",
          "Unknown culture shock",
        ],
        correctAnswer: "Reverse culture shock",
        reason:
          "Paragraf 8: \"This is called 'reverse culture shock'.\" — nama persisnya adalah reverse culture shock.",
      },
      {
        id: "int-r4-mc9",
        type: "multiple-choice",
        question:
          "Why would people in the second stage choose to spend all their time with people from their homeland?",
        options: [
          "They are afraid to risk being uncomfortable with strangers and it is easier to stay with people from their own culture.",
          "They are afraid of skin diseases and want to hide from contact with foreigners.",
          "They feel that they can learn the new language by themselves and do not need contact with others.",
          "They are only interested in going home.",
        ],
        correctAnswer:
          "They are afraid to risk being uncomfortable with strangers and it is easier to stay with people from their own culture.",
        reason:
          'Paragraf 5: "may choose to spend all their time with people from their own culture speaking their native language" — karena lebih nyaman dengan orang budaya sendiri, menghindari rasa tidak nyaman dengan orang asing.',
      },
      {
        id: "int-r4-mc10",
        type: "multiple-choice",
        question:
          "What can we conclude about the entire culture shock process from the passage?",
        options: [
          "Most people never recover from the difficult stages.",
          "The stages show that adapting to a new culture requires time and emotional resilience.",
          "Culture shock only affects people who travel for the first time.",
          "The process becomes easier only if someone already knows the language.",
        ],
        correctAnswer:
          "The stages show that adapting to a new culture requires time and emotional resilience.",
        reason:
          "Keseluruhan teks menggambarkan proses bertahap dari kesulitan menuju kenyamanan — membuktikan bahwa adaptasi budaya membutuhkan waktu dan ketahanan emosional (resilience).",
      },
      // True / False / Not Given (5 soal)
      {
        id: "int-r4-tfng1",
        type: "true-false-not-given",
        question:
          "People often experience culture shock because their usual habits and customs are different from those in the new culture.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          "TRUE — Paragraf 1 & 2 menyatakan culture shock terjadi karena kita menemukan hal-hal baru yang berbeda: salam berbeda, bahasa berbeda, norma berbeda. Perbedaan kebiasaan & adat istiadat adalah inti dari culture shock.",
      },
      {
        id: "int-r4-tfng2",
        type: "true-false-not-given",
        question:
          "The honeymoon stage is usually short because people quickly get bored of the new environment.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'FALSE — Paragraf 3: "This feeling can last for quite a long time." — Tahap honeymoon bisa berlangsung CUKUP LAMA, bukan singkat. Selain itu, orang merasa excited (bukan bored) karena merasa sedang berpetualang.',
      },
      {
        id: "int-r4-tfng3",
        type: "true-false-not-given",
        question:
          "People always visit a doctor when they feel sick during the rejection stage.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason:
          "NOT GIVEN — Paragraf 5 menyebutkan bahwa orang bisa mengalami gejala fisik seperti infeksi kulit dan ruam. Namun teks TIDAK menyebutkan apakah mereka pergi ke dokter atau tidak — informasi itu tidak ada dalam teks.",
      },
      {
        id: "int-r4-tfng4",
        type: "true-false-not-given",
        question:
          "In the adjustment stage, people begin to understand and adapt to the new culture better.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'TRUE — Paragraf 6: "This is when you begin to understand more about the host culture… you realize that you are capable of taking care of yourself in the new place." — Pernyataan ini sesuai dengan isi teks.',
      },
      {
        id: "int-r4-tfng5",
        type: "true-false-not-given",
        question:
          "Reverse culture shock happens only to people who stay abroad for less than a year.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason:
          "NOT GIVEN — Paragraf 8 hanya menyebutkan bahwa reverse culture shock terjadi ketika seseorang kembali ke budaya asalnya dan menemukan bahwa semuanya telah berubah. Teks TIDAK menyebutkan berapa lama seseorang harus tinggal di luar negeri agar mengalaminya.",
      },
    ],
  },
];

// ── Speaking Lessons ──────────────────────────────────────────────────────────

const speakingLessons: ModuleLesson[] = [
  // ── Day 1: Past Events ───────────────────────────────────────────────────────
  {
    id: "int-speaking-1",
    track: "speaking",
    day: 1,
    tutor: "Ms. Aul",
    title: "Past Events",
    subtitle: "Describing memorable events using a mind map framework",
    overview:
      "Materi speaking tentang cara menceritakan kejadian di masa lalu menggunakan 5 pertanyaan panduan: what it was, when, what happened, why it happened, where & who was there, how you felt, dan why it was special.",
    materialSections: [
      {
        title: "Mind Map — Past Events",
        points: [
          "🗺️ Gunakan 5 pertanyaan ini sebagai panduan saat berbicara tentang past event:",
          "1. WHAT it was — Kejadian apa yang ingin kamu ceritakan?",
          "2. WHEN — Kapan kejadian itu terjadi?",
          "3. WHAT happened — Apa yang terjadi? Ceritakan urutannya.",
          "4. WHY it happened — Kenapa bisa terjadi?",
          "5. WHERE & WHO was there — Di mana lokasinya? Siapa saja yang hadir?",
          "6. How was your FEELING — Bagaimana perasaanmu saat itu?",
          "7. Why do you think it was SPECIAL — Kenapa kejadian itu berkesan bagimu?",
        ],
      },
      {
        title: 'Example Narrative — "My First Day at School"',
        points: [
          '"I would like to tell you about one of the most memorable events in my life — my first day at junior high school."',
          '"It happened in July, about eight years ago, at SMPN 5 in my hometown."',
          '"On that day, my mum dropped me off early in the morning. I was carrying a new bag and wearing a brand new uniform. I felt so proud, but also very nervous at the same time."',
          '"When I entered the school gate, I suddenly realized I had no idea where my classroom was. I walked around the corridor for almost ten minutes, looking lost and confused. Fortunately, a kind senior student noticed me and helped me find my class."',
          '"The reason it happened was because I was too nervous to read the notice board at the entrance, where the class list was already posted."',
          '"When I finally sat down in my seat, I felt so relieved. It was then that the person next to me smiled and introduced herself — and that was the beginning of a friendship that still lasts until today."',
          '"I think this event was very special because it was the first time I truly had to handle a situation on my own. It also taught me that it is okay to ask for help. Most importantly, it was the day I met my best friend."',
        ],
      },
      {
        title: "Useful Language for Telling Past Events",
        points: [
          'It happened on / in / at … — "It happened in the summer of 2018."',
          "At that time, … / Back then, … — memberi konteks waktu",
          "First … / Then … / After that … / Finally … — urutan kejadian",
          'I remember feeling … — "I remember feeling very nervous."',
          'What made it special was … — "What made it special was meeting my best friend."',
          'Looking back, … — "Looking back, I realize how much I learned from that experience."',
          'I will never forget … — "I will never forget the moment when …"',
        ],
      },
      {
        title: "Key Vocabulary — Feelings & Reactions",
        points: [
          "Positive: excited, thrilled, overjoyed, relieved, proud, grateful, touched",
          "Negative: nervous, anxious, scared, embarrassed, disappointed, overwhelmed",
          "Mixed: bittersweet, nostalgic, confused, surprised, speechless",
          'Tip: jangan hanya bilang "happy" atau "sad" — gunakan kata yang lebih spesifik untuk membuat ceritamu lebih hidup.',
        ],
      },
      {
        title: "Non-Familiar Vocabulary (from the Example)",
        points: [
          'memorable /ˈmem.ər.ə.bəl/ — (adj) berkesan, mudah diingat | "It was the most memorable event of my life."',
          'corridor /ˈkɒr.ɪ.dɔːr/ — (n) lorong, selasar di dalam gedung | "I walked around the corridor for ten minutes."',
          'noticed /ˈnəʊ.tɪst/ — (v) memperhatikan, menyadari | "A kind student noticed me and helped."',
          'fortunately /ˈfɔː.tʃən.ət.li/ — (adv) untungnya, beruntung sekali | "Fortunately, someone helped me."',
          'relieved /rɪˈliːvd/ — (adj) lega, merasa bebas dari tekanan | "I felt so relieved when I found my class."',
          'brand new — (phrase) baru sekali, belum pernah dipakai | "I was wearing a brand new uniform."',
          'handle /ˈhæn.dəl/ — (v) mengatasi, mengurus sendiri | "It was the first time I had to handle a situation on my own."',
          'entrance /ˈen.trəns/ — (n) pintu masuk, gerbang | "The class list was posted at the entrance."',
          'posted /ˈpəʊ.stɪd/ — (v) ditempelkan, dipasang (pengumuman) | "The list was already posted on the board."',
          'lasts /lɑːsts/ — (v) bertahan, berlangsung | "A friendship that still lasts until today."',
        ],
      },
    ],
    exercises: [
      {
        id: "int-sp1-q1",
        type: "task",
        question:
          "Buat mind map Past Event kamu sendiri di kertas! Tulis 1 kejadian berkesan di tengah, lalu isi 7 cabang: what, when, what happened, why it happened, where & who, feeling, why special.",
      },
      {
        id: "int-sp1-q2",
        type: "task",
        question:
          "Gunakan mind map yang sudah kamu buat untuk bercerita selama 2 menit kepada teman/tutor. Jangan membaca — cukup lihat mind map sebagai panduan. Gunakan minimal 4 useful language expressions dari daftar.",
      },
      {
        id: "int-sp1-q3",
        type: "task",
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
    tutor: "Ms. Siska",
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
  // ── Day 2: Introduction to Tenses + Simple Present ───────────────────────────
  {
    id: "int-grammar-2",
    track: "grammar",
    day: 2,
    tutor: "Ms. Manda",
    title: "Introduction to Tenses & Simple Present Tense",
    subtitle: "Verbal, Non-Verbal, Active, Passive — dan Simple Present",
    overview:
      "Pengenalan konsep dasar tenses: perbedaan kalimat Verbal vs Non-Verbal, Active vs Passive, lalu masuk ke Simple Present Tense lengkap dengan formula dan contoh.",
    materialSections: [
      {
        title: "SENTENCE — Jenis Kalimat",
        points: [
          "Kalimat = Subjek + Verb",
          "─────────────────────────────",
          "🔵 Kalimat AKTIF (me- / ber-) → Subjek melakukan pekerjaan",
          "   → Aku sedang belajar bahasa Inggris.",
          "🔵 Kalimat PASIF (di- / ter-) → Subjek dikenai pekerjaan",
          "   → Bahasa Inggris sedang dipelajari oleh aku.",
          "─────────────────────────────",
          "🟢 Kalimat VERBAL → menggunakan kata kerja utama (bukan BE)",
          "   → Kamu sedang bernyanyi.",
          "🟢 Kalimat NON-VERBAL / NOMINA → kata kerja utamanya BE (is/am/are)",
          "   → Aku sedang di kelas.",
        ],
      },
      {
        title: "What is TENSES?",
        points: [
          "TENSES = perubahan bentuk kata kerja yang menunjukkan WAKTU terjadinya suatu peristiwa.",
          "─────────────────────────────",
          "Kalimat VERBAL = kata kerja utamanya BUKAN BE.",
          "  Contoh: She reads a book every day.",
          "Kalimat NON-VERBAL = kata kerja utamanya BE (is/am/are/was/were/been/being).",
          "  Contoh: She is kind. / They are students.",
          "─────────────────────────────",
          'Kalimat VERBAL ACTIVE = subjek melakukan pekerjaan (makna "me-/ber-").',
          "  Contoh: Cindy cooks the soup. (Cindy memasak sup)",
          'Kalimat VERBAL PASSIVE = subjek dikenai pekerjaan (makna "di-/ter-").',
          "  Ciri: BE + V3. Syarat: hanya Verbal + verb transitive.",
          "  Contoh: Soup is cooked by Cindy. (Sup dimasak oleh Cindy)",
        ],
      },
      {
        title: "FUNGSI Simple Present Tense",
        points: [
          "1️⃣ Kebiasaan / Routine",
          '   → She drinks coffee in the morning.',
          "2️⃣ Jadwal (Scheduled event)",
          '   → The train leaves at 7.30 pm.',
          "3️⃣ Fakta (General fact)",
          '   → The weather is sunny.',
          "4️⃣ Arahan / Instruksi (Instruction)",
          '   → First, you should put the book.',
          "─────────────────────────────",
          "⏱ Time Signal: always, usually, often, sometimes, rarely, seldom, never,",
          "   every day / every week / every month / every year",
        ],
      },
      {
        title: "VERBAL ACTIVE — Simple Present",
        points: [
          "Formula: S + V1 (s/es)",
          "─────────────────────────────",
          "(+) S + V1 (s/es)",
          "   → Mother provides food every morning.",
          "   → I want to enhance my IELTS skills.",
          "─────────────────────────────",
          "(-) S + do/does + not + V1",
          "   → My mother doesn't provide food every morning.",
          "   → My mother does not provide food every morning.",
          "   → She does not affect bad things for me.",
          "      (S = She | Vaux = does not | Vordinary = affect)",
          "─────────────────────────────",
          "(?) Does/Do + S + V1?",
          "   → Do you solve your problem every day?",
          "      (Vaux = Do | S = you | Vord = solve)",
          "   → Does he come to exacerbate the situation?",
          "      (Vaux = Does | S = he | Vord = come | to inf = to exacerbate)",
        ],
      },
      {
        title: "VERBAL PASSIVE — Simple Present",
        points: [
          "Formula: S + is/am/are + V3 + (by agent)",
          "─────────────────────────────",
          "(+) S + is/am/are + V3 + (by agent)",
          "   → Food is provided by mother.",
          "      (S = Food | Vaux = is | V3 = provided)",
          "   → Our class is allocated to the street.",
          "      (S = Our class | Vaux = is | Vord = allocated)",
          "─────────────────────────────",
          "(-) S + is/am/are + not + V3",
          "   → MBG is not tackled by some people.",
          "      (S = MBG | Vaux = is not | V3 = tackled)",
          "   → My friend is not encouraged by her parent.",
          "      (S = My friend | Vaux = is not | Vord = encouraged)",
          "─────────────────────────────",
          "(?) Is/Am/Are + S + V3?",
          "   → Is education fund reduced by the government?",
        ],
      },
      {
        title: "NON-VERBAL / NOMINAL — Simple Present",
        points: [
          "Formula: S + be + ANA (Adjective / Noun / Adverb)",
          "ANA = kata sifat, kata benda, atau kata keterangan",
          "─────────────────────────────",
          "(+) S + is/am/are + ANA",
          "   → He is a harmful person.",
          "─────────────────────────────",
          "(-) S + be + not + ANA",
          "   → The air pollution is not a significant problem in Irlandia.",
          "─────────────────────────────",
          "(?) Be + S + ANA?",
          "   → Is MBG beneficial for students?",
        ],
      },
      {
        title: "Vocabulary dari Kelas",
        points: [
          "exacerbate (v) — memperburuk | 'Does he come to exacerbate the situation?'",
          "allocate (v) — mengalokasikan | 'Our class is allocated to the street.'",
          "consumption (n) — konsumsi/penggunaan",
          "provide (v) — menyediakan | 'Mother provides food every morning.'",
          "enhance (v) — meningkatkan | 'I want to enhance my IELTS skills.'",
          "encourage (v) — mendorong/memberi semangat | 'She is encouraged by her parent.'",
          "affect (v) — mempengaruhi | 'She does not affect bad things for me.'",
          "beneficial (adj) — bermanfaat | 'Is MBG beneficial for students?'",
          "harmful (adj) — berbahaya | 'He is a harmful person.'",
          "significant (adj) — signifikan/penting | 'a significant problem'",
          "reduce (v) — mengurangi | 'Is education fund reduced by the government?'",
        ],
      },
    ],
    exercises: [
      {
        id: "int-gr2-q1",
        type: "multiple-choice",
        question:
          "Which sentence is an example of Simple Present Verbal Active (+)?",
        options: [
          "She is reading a book.",
          "She reads a book every day.",
          "She read a book yesterday.",
          "She will read a book tomorrow.",
        ],
        correctAnswer: "She reads a book every day.",
        reason:
          'Simple Present Verbal Active (+) = S + V1 s/es. "reads" adalah V1 dengan akhiran -s untuk She.',
      },
      {
        id: "int-gr2-q2",
        type: "multiple-choice",
        question:
          "What is the correct Simple Present Verbal Passive (+) formula?",
        options: [
          "S + was/were + V3",
          "S + is/am/are + V3",
          "S + have/has + V3",
          "S + is/am/are + being + V3",
        ],
        correctAnswer: "S + is/am/are + V3",
        reason: "Simple Present Verbal Passive (+) = S + is/am/are + V3.",
      },
      {
        id: "int-gr2-q3",
        type: "task",
        question:
          "Buat 3 kalimat Simple Present (1 Verbal Active, 1 Verbal Passive, 1 Non-Verbal) tentang kebiasaan harianmu. Gunakan time signal yang tepat.",
      },
    ],
  },

  // ── Day 3: Simple Past + Simple Future ───────────────────────────────────────
  {
    id: "int-grammar-3",
    track: "grammar",
    day: 3,
    tutor: "M",
    title: "Simple Past & Simple Future Tense",
    subtitle: "Menyatakan peristiwa lampau dan rencana masa depan",
    overview:
      "Materi Simple Past Tense untuk menyatakan peristiwa di masa lalu, dan Simple Future Tense untuk aktivitas yang akan terjadi — lengkap dengan formula Verbal Active, Passive, dan Non-Verbal.",
    materialSections: [
      {
        title: "2. Simple Past Tense",
        points: [
          "Digunakan untuk: peristiwa di waktu lampau, kebiasaan lampau, aktivitas yang dimulai dan selesai di waktu lampau.",
          "Time signal: last night, last week, yesterday, two days ago, in 1990, etc.",
          "─────────────────────────────",
          "VERBAL ACTIVE:",
          "  (+) S + V2",
          "  (-) S + did + not + V1",
          "  (?) did + S + V1?",
          "─────────────────────────────",
          "VERBAL PASSIVE:",
          "  (+) S + was/were + V3",
          "  (-) S + was/were + not + V3",
          "  (?) was/were + S + V3?",
          "─────────────────────────────",
          "NON-VERBAL:",
          "  (+) S + was/were + CS (adj/n/adv)",
          "  (-) S + was/were + not + CS",
          "  (?) was/were + S + CS?",
        ],
      },
      {
        title: "Examples — Simple Past",
        points: [
          "Verbal Active (+): She visited Paris last year.",
          "Verbal Active (-): She did not visit Paris last year.",
          "Verbal Active (?): Did she visit Paris last year?",
          "Verbal Passive (+): The letter was written by him yesterday.",
          "Non-Verbal (+): She was happy yesterday.",
          "Non-Verbal (?): Was she happy yesterday?",
        ],
      },
      {
        title: "3. Simple Future Tense",
        points: [
          "Digunakan untuk: aktivitas yang akan terjadi di masa depan atau kegiatan yang direncanakan.",
          "Time signal: tomorrow, next year, next week, the day after tomorrow, etc.",
          "─────────────────────────────",
          "VERBAL ACTIVE:",
          "  (+) S + will/shall + V1",
          "  (-) S + will/shall + not + V1",
          "  (?) will/shall + S + V1?",
          "─────────────────────────────",
          "VERBAL PASSIVE:",
          "  (+) S + will/shall + be + V3",
          "  (-) S + will/shall + not + be + V3",
          "  (?) will/shall + S + be + V3?",
          "─────────────────────────────",
          "NON-VERBAL:",
          "  (+) S + will/shall + be + CS (adj/n/adv)",
          "  (-) S + will/shall + not + be + CS",
          "  (?) will/shall + S + be + CS?",
        ],
      },
      {
        title: "Examples — Simple Future",
        points: [
          "Verbal Active (+): She will visit Paris next year.",
          "Verbal Active (-): She will not visit Paris next year.",
          "Verbal Active (?): Will she visit Paris next year?",
          "Verbal Passive (+): The letter will be written by him tomorrow.",
          "Non-Verbal (+): She will be happy tomorrow.",
        ],
      },
    ],
    exercises: [
      {
        id: "int-gr3-q1",
        type: "multiple-choice",
        question: "Which is the correct Simple Past Verbal Active (-) form?",
        options: [
          "She not read the book.",
          "She did not read the book.",
          "She does not read the book.",
          "She was not read the book.",
        ],
        correctAnswer: "She did not read the book.",
        reason:
          'Simple Past Verbal Active (-) = S + did + not + V1. Gunakan "did not" dan kembali ke V1 (bukan V2).',
      },
      {
        id: "int-gr3-q2",
        type: "multiple-choice",
        question:
          "What is the correct Simple Future Verbal Passive (+) formula?",
        options: [
          "S + will + V3",
          "S + will + be + V3",
          "S + will + have + V3",
          "S + will + being + V3",
        ],
        correctAnswer: "S + will + be + V3",
        reason: "Simple Future Verbal Passive (+) = S + will/shall + be + V3.",
      },
      {
        id: "int-gr3-q3",
        type: "task",
        question:
          'Ubah kalimat berikut menjadi Simple Past dan Simple Future: "She writes a letter every day." — Tulis masing-masing dalam bentuk (+), (-), dan (?).',
      },
    ],
  },

  // ── Day 4: Present Continuous + Present Perfect ───────────────────────────────
  {
    id: "int-grammar-4",
    track: "grammar",
    day: 4,
    tutor: "M",
    title: "Present Continuous & Present Perfect Tense",
    subtitle: "Aktivitas yang sedang berlangsung dan yang sudah selesai",
    overview:
      "Materi Present Continuous (aktivitas sedang dilakukan sekarang) dan Present Perfect (aktivitas yang sudah/baru saja selesai), lengkap dengan formula dan tabel ringkasan semua tenses.",
    materialSections: [
      {
        title: "4. Present Continuous Tense",
        points: [
          "Digunakan untuk: aktivitas yang SEDANG dilakukan di waktu sekarang.",
          "Time signal: now, right now, at this moment, at present, etc.",
          "─────────────────────────────",
          "VERBAL ACTIVE:",
          "  (+) S + is/am/are + V-ing",
          "  (-) S + is/am/are + not + V-ing",
          "  (?) is/am/are + S + V-ing?",
          "─────────────────────────────",
          "VERBAL PASSIVE:",
          "  (+) S + is/am/are + being + V3",
          "  (-) S + is/am/are + not + being + V3",
          "  (?) is/am/are + S + being + V3?",
          "─────────────────────────────",
          "NON-VERBAL:",
          "  (+) S + is/am/are + CS (adj/n/adv)",
          "  (-) S + is/am/are + not + CS",
          "  (?) is/am/are + S + CS?",
        ],
      },
      {
        title: "5. Present Perfect Tense",
        points: [
          "Digunakan untuk: aktivitas yang SUDAH / TELAH dilakukan di waktu present, atau aktivitas di akhir proses (sudah selesai).",
          "Time signal: just now / just (baru saja), already / yet (sudah), since (sejak), for, ever, never, etc.",
          "─────────────────────────────",
          "VERBAL ACTIVE:",
          "  (+) S + have/has + V3",
          "  (-) S + have/has + not + V3",
          "  (?) have/has + S + V3?",
          "─────────────────────────────",
          "VERBAL PASSIVE:",
          "  (+) S + have/has + been + V3",
          "  (-) S + have/has + not + been + V3",
          "  (?) have/has + S + been + V3?",
          "─────────────────────────────",
          "NON-VERBAL:",
          "  (+) S + have/has + been + CS (adj/n/adv)",
          "  (-) S + have/has + been + not + CS",
          "  (?) have/has + S + been + CS?",
        ],
      },
      {
        title: "Tenses Summary Table — Verbal Active (Simple)",
        points: [
          "Present Simple: S + V1 s/es",
          "Past Simple: S + V2",
          "Future Simple: S + will/shall + V1",
          "Past Future: S + would/should + V1",
          "─────────────────────────────",
          "Present Continuous: S + is/am/are + V-ing",
          "Past Continuous: S + was/were + V-ing",
          "Future Continuous: S + will/shall + be + V-ing",
          "─────────────────────────────",
          "Present Perfect: S + have/has + V3",
          "Past Perfect: S + had + V3",
          "Future Perfect: S + will/shall + have + V3",
        ],
      },
    ],
    exercises: [
      {
        id: "int-gr4-q1",
        type: "multiple-choice",
        question:
          "Which sentence uses Present Continuous Verbal Passive correctly?",
        options: [
          "The cake is being baked by her right now.",
          "The cake was being baked by her right now.",
          "The cake has been baked by her right now.",
          "The cake is baked by her right now.",
        ],
        correctAnswer: "The cake is being baked by her right now.",
        reason:
          'Present Continuous Verbal Passive = S + is/am/are + being + V3. "is being baked" adalah bentuk yang benar.',
      },
      {
        id: "int-gr4-q2",
        type: "multiple-choice",
        question:
          "Choose the correct Present Perfect Verbal Active (+) sentence.",
        options: [
          "She has visit Paris.",
          "She have visited Paris.",
          "She has visited Paris.",
          "She had visited Paris.",
        ],
        correctAnswer: "She has visited Paris.",
        reason:
          'Present Perfect Verbal Active (+) = S + have/has + V3. Untuk "she" gunakan "has" + V3 (visited).',
      },
      {
        id: "int-gr4-q3",
        type: "task",
        question:
          "Buat 4 kalimat: satu Present Continuous Active, satu Present Continuous Passive, satu Present Perfect Active, dan satu Present Perfect Passive. Gunakan topik berbeda untuk masing-masing.",
      },
    ],
  },

  // ── Day 5: Gerund Part 1 ──────────────────────────────────────────────────────
  {
    id: "int-grammar-5",
    track: "grammar",
    day: 5,
    tutor: "M",
    title: "Gerund — Part 1",
    subtitle: "Pengertian, bentuk, dan fungsi Gerund dalam kalimat",
    overview:
      "Gerund adalah bentuk -ing dari kata kerja yang digunakan sebagai noun. Materi ini mencakup pengertian, jenis, bentuk, dan fungsi gerund sebagai subject, complement, object of preposition, dan object of verb.",
    materialSections: [
      {
        title: "A. What is Gerund?",
        points: [
          "Gerund = the -ing form of a verb used as a NOUN.",
          "Contoh: Swimming is my hobby. (Swimming = gerund sebagai subject)",
          "─────────────────────────────",
          "B. Types of Gerund:",
          "1. Simple gerund: typing, reading, swimming",
          "2. Gerund phrase: listening to music, speaking English",
        ],
      },
      {
        title: "C. Gerund Forms",
        points: [
          "1. Active (V-ing): I like visiting historical places.",
          "2. Passive (Being + V3): I like being visited by old friends.",
          "3. Negative (Not + V-ing): Not being picked up by Selly makes me sad.",
        ],
      },
      {
        title: "D. Functions of Gerund",
        points: [
          "1. As SUBJECT:",
          "   Learning a foreign language is a necessity for many people in the world.",
          "2. As COMPLEMENT:",
          "   My big goals are obtaining the scholarship and studying abroad.",
          "3. As OBJECT OF PREPOSITION:",
          "   I was accustomed to speaking English.",
          "   (preposition: to, in, on, at, of, about, for, by, without, etc.)",
          "4. As OBJECT of certain verb:",
          "   a. Certain verb + gerund: You must stop smoking.",
          "   b. Certain verb + gerund/to inf (SAME meaning): love, like, hate, begin, start, continue, prefer, can't stand, can't bear.",
          "   I hate meeting my enemy. = I hate to meet my enemy.",
        ],
      },
      {
        title: "E. Certain Verbs Followed by Gerund (selected)",
        points: [
          "avoid, celebrate, complete, delay, detest, dislike, enjoy, escape, finish, forgive",
          "keep, mind, miss, postpone, risk, stop, suggest, admit, deny, imagine",
          "consider, continue, recommend, practice, give up, end up, can't help, go on",
          "Note: Untuk daftar lengkap 100 verbs, lihat modul cetak grammar.",
        ],
      },
    ],
    exercises: [
      {
        id: "int-gr5-q1",
        type: "multiple-choice",
        question:
          'What is the function of the gerund in: "Learning a foreign language is important."?',
        options: [
          "As object of preposition",
          "As subject",
          "As complement",
          "As object of verb",
        ],
        correctAnswer: "As subject",
        reason:
          '"Learning a foreign language" berfungsi sebagai SUBJECT kalimat — gerund phrase yang menduduki posisi subjek.',
      },
      {
        id: "int-gr5-q2",
        type: "multiple-choice",
        question:
          "Choose the correct sentence using gerund as object of preposition.",
        options: [
          "She is interested to learn English.",
          "She is interested in learning English.",
          "She is interested learn English.",
          "She is interested for to learn English.",
        ],
        correctAnswer: "She is interested in learning English.",
        reason:
          '"interested in" = adjective + preposition. Setelah preposition, gunakan gerund (V-ing): "learning".',
      },
      {
        id: "int-gr5-q3",
        type: "task",
        question:
          "Buat 4 kalimat menggunakan gerund: (1) sebagai subject, (2) sebagai complement, (3) sebagai object of preposition, (4) sebagai object of certain verb. Tandai gerund dalam setiap kalimatmu.",
      },
    ],
  },

  // ── Day 6: Gerund Part 2 + To Infinitive ─────────────────────────────────────
  {
    id: "int-grammar-6",
    track: "grammar",
    day: 6,
    tutor: "M",
    title: "Gerund vs To Infinitive & Special Cases",
    subtitle:
      "Perbedaan makna Gerund dan To Infinitive pada 6 kata kerja khusus",
    overview:
      "Melanjutkan Gerund dengan kasus-kasus khusus: 6 verbs yang maknanya BERBEDA tergantung apakah diikuti gerund atau to infinitive (forget, regret, remember, stop, try), plus pengenalan To Infinitive.",
    materialSections: [
      {
        title: "Gerund vs To Infinitive — Different Meaning (6 Verbs)",
        points: [
          "1. FORGET",
          "   + Gerund: melupakan sesuatu yang sudah terjadi di masa lalu.",
          "   The children will never forget visiting this park.",
          "   + To inf: lupa melakukan tanggung jawab/tugas.",
          "   I forgot to call you.",
          "─────────────────────────────",
          "2. REGRET",
          "   + Gerund: menyesal atas sesuatu yang terjadi di masa lalu.",
          "   I regret buying this car.",
          "   + To inf: menyesal untuk menyampaikan berita buruk.",
          "   I regret to say that I can't visit your party.",
          "─────────────────────────────",
          "3. REMEMBER",
          "   + Gerund: mengingat sesuatu yang terjadi di masa lalu.",
          "   I remember going to Paris in 1997.",
          "   + To inf: ingat untuk melakukan tugas/tanggung jawab.",
          "   She remembered to buy the newspaper.",
          "─────────────────────────────",
          "4. STOP / QUIT",
          "   + Gerund: menghentikan suatu aktivitas.",
          "   I stop smoking.",
          "   + To inf: berhenti lalu melanjutkan aktivitas berikutnya.",
          "   I stop eating to talk to you.",
          "─────────────────────────────",
          "5. TRY",
          "   + Gerund: mencoba pendekatan baru untuk melihat hasilnya.",
          "   She tried jogging, but her ankles were hurt.",
          "   + To inf: berusaha keras untuk melakukan sesuatu.",
          "   She tried to telephone us.",
        ],
      },
      {
        title: "Special Gerund Expressions",
        points: [
          "Negative expression for advisability:",
          "Pattern: it + be + (no use / no good / no worth) + gerund",
          "It is no use missing you.",
          "─────────────────────────────",
          "Certain verbs with PASSIVE meaning (gerund):",
          "deserve (layak/pantas): The kind man deserved loving.",
          "need (perlu): My car needs servicing.",
          "require (perlu): The house requires painting.",
          "want (ingin): The girl wants understanding.",
        ],
      },
      {
        title: "Introduction to To Infinitive",
        points: [
          "To Infinitive = to + V1 (base verb).",
          "─────────────────────────────",
          "FORMS:",
          "Present Active: to + Vbi — I am happy to meet you.",
          "Present Passive: to be + V3 — The car was too terrible to be used.",
          "Perfect Active: to have + V3 — I am happy to have met you.",
          "─────────────────────────────",
          "FUNCTIONS:",
          "a. As Subject: To study TOEFL needs big efforts.",
          "b. As Object: I want to continue my study.",
          "c. As Complement: My hobby is to travel around the world.",
          "d. Adjective + To inf: It is extremely beneficial to learn English.",
        ],
      },
    ],
    exercises: [
      {
        id: "int-gr6-q1",
        type: "multiple-choice",
        question:
          '"I forgot ______ the door before leaving." — Which is correct?',
        options: ["locking", "to lock", "locked", "lock"],
        correctAnswer: "to lock",
        reason:
          "forget + to infinitive = lupa melakukan tanggung jawab/tugas. Di sini subjek lupa mengunci pintu (tugas), bukan mengingat kejadian masa lalu.",
      },
      {
        id: "int-gr6-q2",
        type: "multiple-choice",
        question:
          '"She stopped ______ when her phone rang." — Which is correct?',
        options: ["to eat", "eating", "eaten", "eat"],
        correctAnswer: "eating",
        reason:
          'stop + gerund = menghentikan aktivitas. "She stopped eating" = dia berhenti makan. (stop + to inf = berhenti untuk melakukan hal lain)',
      },
      {
        id: "int-gr6-q3",
        type: "task",
        question:
          "Buat 5 kalimat menggunakan verbs berbeda makna (forget, regret, remember, stop, try) — masing-masing satu kalimat dengan gerund dan satu dengan to infinitive. Jelaskan perbedaan maknanya.",
      },
    ],
  },

  // ── Day 7: To Infinitive + Adjective Clause Intro ────────────────────────────
  {
    id: "int-grammar-7",
    track: "grammar",
    day: 7,
    tutor: "M",
    title: "To Infinitive & Adjective Clause — Part 1",
    subtitle:
      "Certain verbs + to inf, dan Relative Pronoun sebagai Subject & Object",
    overview:
      "Melengkapi To Infinitive dengan daftar certain verbs, lalu masuk ke Adjective Clause: pengertian, dan Relative Pronoun sebagai Subject (RPS) dan Object (RPO).",
    materialSections: [
      {
        title: "Certain Verbs Followed by To Infinitive (selected)",
        points: [
          "agree, appear, arrange, ask, attempt, beg, afford, wait, care, decide",
          "expect, fail, hope, manage, mean, need, plan, prepare, pretend, promise",
          "refuse, seem, want, wish, would like, begin, require, allow, cause, help",
          "warn, teach, tell, instruct, enable, force, convince, persuade, forbid",
          "Note: Untuk daftar lengkap 100 verbs, lihat modul cetak grammar.",
        ],
      },
      {
        title: "A. What is Adjective Clause?",
        points: [
          "Adjective Clause = sub clause yang digunakan untuk mendeskripsikan / menjelaskan NOUN.",
          "Contoh: The doctor who has two sons stands in front of the office.",
          '  → "who has two sons" = adjective clause yang menjelaskan "the doctor".',
        ],
      },
      {
        title: "B1. Relative Pronoun as Subject (RPS)",
        points: [
          "Conjunction:",
          "  WHO → untuk orang (a person)",
          "  WHICH → untuk benda/hewan (no person)",
          "  THAT → untuk orang/benda (a person/thing)",
          "─────────────────────────────",
          "Formula: Conj + V + (O) + (Adv)  → INCOMPLETE clause",
          "─────────────────────────────",
          "Contoh 1:",
          "  The doctor stands in front of office. + He has two sons.",
          "  → The doctor WHO HAS TWO SONS stands in front of the office.",
          "Contoh 2:",
          "  Did you see the letter? + It came this morning.",
          "  → Did you see the letter WHICH CAME THIS MORNING?",
        ],
      },
      {
        title: "B2. Relative Pronoun as Object (RPO)",
        points: [
          "Conjunction:",
          "  WHOM (formal) / WHO (informal) → orang",
          "  WHICH → benda",
          "  THAT → orang/benda",
          "─────────────────────────────",
          "Formula: Conj + S + V  → COMPLETE clause",
          "─────────────────────────────",
          "Type 1 — Object of Verb Transitive:",
          "  A man was standing at the bar. + Neil knew him.",
          "  → A man WHOM NEIL KNEW was standing at the bar.",
          "─────────────────────────────",
          "Type 2 — Object of Preposition:",
          "  Formal (Prep + conj): The man TO WHOM we spoke was very nice.",
          "  Informal (Conj + S + V + Prep): The man WHOM we spoke TO was very nice.",
          '  Note: "who" dan "that" tidak bisa digunakan dalam pola formal.',
        ],
      },
    ],
    exercises: [
      {
        id: "int-gr7-q1",
        type: "multiple-choice",
        question:
          'Combine: "The girl is my sister." + "She won the competition." → Which is correct?',
        options: [
          "The girl which won the competition is my sister.",
          "The girl whom won the competition is my sister.",
          "The girl who won the competition is my sister.",
          "The girl whose won the competition is my sister.",
        ],
        correctAnswer: "The girl who won the competition is my sister.",
        reason:
          'Relative Pronoun as Subject (RPS) untuk orang = WHO. Formula: Conj + V → "who won the competition".',
      },
      {
        id: "int-gr7-q2",
        type: "multiple-choice",
        question:
          'Combine: "The book is interesting." + "I borrowed it." → Which is correct?',
        options: [
          "The book who I borrowed is interesting.",
          "The book whom I borrowed is interesting.",
          "The book which I borrowed is interesting.",
          "The book whose I borrowed is interesting.",
        ],
        correctAnswer: "The book which I borrowed is interesting.",
        reason:
          'RPO untuk benda = WHICH. Formula: Conj + S + V → "which I borrowed".',
      },
      {
        id: "int-gr7-q3",
        type: "task",
        question:
          'Gabungkan kalimat berikut menggunakan Adjective Clause (RPS atau RPO): (1) "The teacher is very kind. She teaches mathematics." (2) "The movie was amazing. I watched it last night." (3) "The man is my uncle. I met him at the station."',
      },
    ],
  },

  // ── Day 8: Adjective Clause — RPP + Relative Adverb ──────────────────────────
  {
    id: "int-grammar-8",
    track: "grammar",
    day: 8,
    tutor: "M",
    title: "Adjective Clause — Part 2",
    subtitle: "Relative Pronoun Possession (RPP) dan Relative Adverb (RA)",
    overview:
      "Melanjutkan Adjective Clause dengan Relative Pronoun sebagai Possession (WHOSE) dan Relative Adverb (where, when, why), serta konsep Complete vs Incomplete AC.",
    materialSections: [
      {
        title: "B3. Relative Pronoun as Possession (RPP)",
        points: [
          "Conjunction: WHOSE → possessive (orang/benda)",
          "─────────────────────────────",
          "Formula: Whose + Noun + V + (O) + (Adv)",
          "  OR: Whose + Noun + S + V + (O) + (Adv)",
          "─────────────────────────────",
          "Contoh:",
          "  The boy is in Australia. + I am looking after his dog.",
          "  → The boy WHOSE DOG I AM LOOKING AFTER is in Australia.",
        ],
      },
      {
        title: "B4. Relative Adverb (RA)",
        points: [
          "Formula: Conj + S + V + (O)  → COMPLETE clause",
          "─────────────────────────────",
          "1. Relative Adverb of PLACE:",
          "   Conjunction: where, that, in/on/at + which",
          "   The factory WHERE I WORK is going to close down.",
          "   = The factory AT WHICH I WORK is going to close down.",
          "─────────────────────────────",
          "2. Relative Adverb of TIME:",
          "   Conjunction: when, that, in/on/at + which",
          "   Do you remember the time WHEN WE WENT TO Ani's party?",
          "   = Do you remember the time AT WHICH WE WENT TO Ani's party?",
          "─────────────────────────────",
          "3. Relative Adverb of REASON:",
          "   Conjunction: why",
          "   You should give me a reason WHY YOU DID NOT COME to my house.",
        ],
      },
      {
        title: "Complete vs Incomplete AC",
        points: [
          "RPS → Conj + Verb + (O) + (Adv) = INCOMPLETE (subject sudah ada di main clause)",
          "RPO → Conj + Subject + Verb transitive + (Adv) = COMPLETE",
          "RPP → Conj + Subject + Verb + (Object) + (Adv) = COMPLETE",
          "RA  → Conj + Subject + Verb + (Object) + (Adv) = COMPLETE",
          "─────────────────────────────",
          "Conjunction Summary:",
          "  WHO → V + O (RPS/RPO orang)",
          "  WHOM → S + Vt (RPO orang formal)",
          "  WHICH → V + O / S + V (benda)",
          "  THAT → orang/benda",
          "  WHOSE + noun → S + V(O) / V + (O)",
          "  WHERE / WHEN / WHY → S + V + (O)",
        ],
      },
    ],
    exercises: [
      {
        id: "int-gr8-q1",
        type: "multiple-choice",
        question:
          'Combine: "The student is very talented." + "Her painting won the contest." → Which is correct?',
        options: [
          "The student who painting won the contest is very talented.",
          "The student which painting won the contest is very talented.",
          "The student whose painting won the contest is very talented.",
          "The student whom painting won the contest is very talented.",
        ],
        correctAnswer:
          "The student whose painting won the contest is very talented.",
        reason:
          'RPP = WHOSE untuk kepemilikan. "her painting" → "whose painting". Formula: Whose + Noun + V.',
      },
      {
        id: "int-gr8-q2",
        type: "multiple-choice",
        question:
          '"That is the city ______ I was born." — Which conjunction is correct?',
        options: ["which", "who", "where", "whose"],
        correctAnswer: "where",
        reason:
          'Relative Adverb of Place = WHERE (menggantikan "there/in that place"). "the city where I was born."',
      },
      {
        id: "int-gr8-q3",
        type: "task",
        question:
          'Gabungkan kalimat-kalimat berikut menggunakan RPP (whose) atau Relative Adverb (where/when/why): (1) "The man is famous. His book became a bestseller." (2) "I love the restaurant. We had dinner there last month." (3) "She explained the reason. She was late for that reason."',
      },
    ],
  },

  // ── Day 9: Reducing & Omitting AC + Additional Materials ─────────────────────
  {
    id: "int-grammar-9",
    track: "grammar",
    day: 9,
    tutor: "M",
    title: "Adjective Clause — Part 3",
    subtitle:
      "Reducing, Omitting, Restrictive vs Non-Restrictive, dan Appositive",
    overview:
      'Materi lanjutan Adjective Clause: cara mereduksi (reducing) dan menghilangkan (omitting) AC, perbedaan Restrictive vs Non-Restrictive clause, Appositive, serta reducing untuk "the first/second/only".',
    materialSections: [
      {
        title: "C1. Reducing Adjective Clause",
        points: [
          "a. RPS Verbal Active (Simple Present/Past, Continuous):",
          "   Conj + V → VING",
          "   The doctor who stands has two sons. → The doctor STANDING has two sons.",
          "─────────────────────────────",
          "b. RPS Verbal Passive (Simple Present/Past):",
          "   Conj + be + V3 → V3",
          "   Cake which was bought by Alan is delicious. → Cake BOUGHT by Alan is delicious.",
          "─────────────────────────────",
          "c. RPS Verbal Passive Continuous:",
          "   Conj + be + being + V3 → BEING + V3",
          "   The novel which was being written by Andi... → The novel BEING WRITTEN by Andi...",
          "─────────────────────────────",
          "d. RPS (Perfect Tenses):",
          "   Verbal Active: Conj + have/has + V3 → HAVING V3",
          "   I like the boy who has taught English. → I like the boy HAVING TAUGHT English.",
          "   Verbal Passive: Conj + have/has + been + V3 → HAVING BEEN V3",
          "   Non-Verbal: Conj + have/has + been + ANA → ANA only",
          "   The girls who are angry... → The ANGRY girls...",
          "─────────────────────────────",
          "⚠️ NOTE: Semua RPS yang mengandung MODAL (verb) TIDAK BISA direduksi.",
        ],
      },
      {
        title: "C2. Omitting Adjective Clause",
        points: [
          "a. RPS Non-Verbal: Omit Conj (who/which/that) + be + ANA",
          "   The student who was so ugly... → The SO UGLY student...",
          "─────────────────────────────",
          "b. RPO: Omit Conj + S + V",
          "   The man whom I like is a smart boy. → The man I like is a smart boy.",
          "─────────────────────────────",
          "c. RA: Omit Conj + S + V + (O)",
          "   I will not forget the day when I met you. → I will not forget the day I met you.",
          "   ⚠️ RA disarankan TIDAK dihilangkan karena dapat mengubah makna kalimat.",
        ],
      },
      {
        title: "Additional — Restrictive vs Non-Restrictive Clause",
        points: [
          "1. RESTRICTIVE CLAUSE — TANPA koma:",
          "   Menjelaskan noun yang dianggap penting/perlu dijelaskan.",
          "   The professor who teaches chemistry is an excellent lecturer.",
          "   (hanya professor yang mengajar kimia — bukan semua professor)",
          "─────────────────────────────",
          "2. NON-RESTRICTIVE CLAUSE — DENGAN koma:",
          "   Menjelaskan noun sebagai informasi tambahan.",
          "   Professor Wilson, who teaches chemistry, is an excellent lecturer.",
          "   (informasi tambahan — Wilson sudah dikenal)",
          "─────────────────────────────",
          "The children who play football wear red t-shirt. (= SOME children)",
          "The children, who play football, wear red t-shirt. (= ALL children)",
          "─────────────────────────────",
          "APPOSITIVE — Non-Restrictive yang disederhanakan:",
          "   Paris, which is the capital of France, is an exciting city.",
          "   → Paris, THE CAPITAL OF FRANCE, is an exciting city.",
          "─────────────────────────────",
          'REDUCING for "the first / the second / the only" → To Infinitive:',
          "   She was the only one who survived. → She was the only one TO SURVIVE.",
          "   The first man who is killed... → The first man TO BE KILLED...",
        ],
      },
    ],
    exercises: [
      {
        id: "int-gr9-q1",
        type: "multiple-choice",
        question:
          'Reduce: "The book which was written by Tolkien is famous." → Which is correct?',
        options: [
          "The book writing by Tolkien is famous.",
          "The book written by Tolkien is famous.",
          "The book having written by Tolkien is famous.",
          "The book being written by Tolkien is famous.",
        ],
        correctAnswer: "The book written by Tolkien is famous.",
        reason:
          'RPS Verbal Passive (Simple Past): Conj + be + V3 → V3. "which was written" → "written". Hasilnya: "The book written by Tolkien..."',
      },
      {
        id: "int-gr9-q2",
        type: "multiple-choice",
        question: "Which sentence uses a NON-RESTRICTIVE clause correctly?",
        options: [
          "The students who passed the exam were rewarded.",
          "My mother, who is a doctor, works at the hospital.",
          "The car that I bought was expensive.",
          "The man who called you is waiting outside.",
        ],
        correctAnswer: "My mother, who is a doctor, works at the hospital.",
        reason:
          'Non-Restrictive clause menggunakan KOMA di kedua sisi. "My mother, who is a doctor," — informasi tambahan tentang ibu yang sudah dikenal.',
      },
      {
        id: "int-gr9-q3",
        type: "task",
        question:
          'Lakukan reducing atau omitting pada kalimat berikut dan jelaskan caranya: (1) "The girl who is singing on the stage is my friend." (2) "The report which was submitted by him was excellent." (3) "She was the first person who discovered this formula." (4) "I remember the moment when we first met."',
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
