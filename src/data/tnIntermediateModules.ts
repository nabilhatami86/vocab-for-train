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
        question:
          "Early creatures detected light, food, and danger through developing nerves.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'Paragraf 1: "These nerves helped the creature to sense light, food and danger." — pernyataan sesuai dengan teks.',
      },
      {
        id: "int-r2-tfng2",
        type: "true-false-not-given",
        question:
          "The spinal cord carries messages from the brain to the rest of the body.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'Paragraf 1: "To carry messages from the brain to other parts of the body, the creature developed a spinal cord." — sesuai teks.',
      },
      {
        id: "int-r2-tfng3",
        type: "true-false-not-given",
        question:
          "Fish are becoming humans immediately after they grow arms and legs.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'Paragraf 2: Setelah tumbuh kaki dan tangan, makhluk itu menjadi "ape-like creature" dulu, bukan langsung manusia. Kata "immediately" membuat pernyataan ini salah.',
      },
      {
        id: "int-r2-tfng4",
        type: "true-false-not-given",
        question:
          "People in the past believe that the brain is the body's control centre.",
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
        question:
          "Scientists have explained completely why humans sleep and dream.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'Paragraf 3: "Many questions about the brain have not yet been answered. For example, why do we need sleep or why do we dream?" — teks menyatakan belum terjawab.',
      },
      {
        id: "int-r2-tfng7",
        type: "true-false-not-given",
        question:
          "The side lobe helps with hearing, speech, and long-term memory.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'Paragraf 3: "The side lobe plays an important role in hearing, speech and long-term memories." — sesuai teks.',
      },
      {
        id: "int-r2-tfng8",
        type: "true-false-not-given",
        question:
          "Humans will be born with new neurons throughout their adult lives.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'Paragraf 4: "you were born with most of the neurons you have now" — artinya neuron sudah ada sejak lahir, tidak bertambah sepanjang hidup dewasa.',
      },
      {
        id: "int-r2-tfng9",
        type: "true-false-not-given",
        question:
          "Repeating an activity strengthens the neural pathways in the brain.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason:
          "Teks menyebutkan bahwa jalur (pathways) terbentuk saat informasi berpindah antar neuron, tetapi tidak menyebutkan secara eksplisit bahwa pengulangan aktivitas memperkuat jalur tersebut.",
      },
      {
        id: "int-r2-tfng10",
        type: "true-false-not-given",
        question:
          "The human brain uses electricity as its main source of energy.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason: "Informasi ini tidak disebutkan sama sekali dalam teks bacaan.",
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
        reason:
          '"structure" = struktur → N. the way parts are arranged or organized.',
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
        reason:
          '"creature" = makhluk → B. a living being, especially an animal.',
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
        reason:
          '"sense" = merasakan → M. to become aware of something through the senses.',
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
        reason:
          '"nerve" = saraf → L. a thin fiber that carries messages in the body.',
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
        reason:
          '"mysterious" = misterius → K. something difficult to explain or understand.',
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
        reason:
          '"control centre" = pusat kendali → D. something that gives orders and controls actions.',
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
        reason:
          '"surface" = permukaan → F. the outer or top layer of something.',
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
        reason:
          '"intelligent" = cerdas → I. able to think, learn, and understand well.',
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
        reason:
          '"process" = memproses → A. to handle or deal with information.',
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
    tutor: "Ms. Siska",
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
        title: "Vocabulary List",
        points: [
          "1. criticise (v) — mengkritik | Sinonim: blame | Antonim: praise",
          "2. throw (v) — melempar | Sinonim: toss | Antonim: catch",
          "3. overweight (adj) — kelebihan berat badan | Sinonim: obese | Antonim: slim",
          "4. depressed (adj) — depresi | Sinonim: sad | Antonim: cheerful",
          "5. researchers (n) — peneliti | Sinonim: scientists | Antonim: amateurs",
          "6. improve (v) — meningkatkan | Sinonim: enhance | Antonim: worsen",
          "7. develop (v) — mengembangkan | Sinonim: build | Antonim: destroy",
          "8. physical (adj) — fisik | Sinonim: bodily | Antonim: mental",
          "9. particularly (adv) — terutama | Sinonim: especially | Antonim: generally",
          "10. improved (adj) — meningkat | Sinonim: better | Antonim: worse",
          "11. carry out (phrasal v) — melaksanakan | Sinonim: conduct | Antonim: abandon",
          "12. surgeons (n) — ahli bedah | Sinonim: doctors | Antonim: patients",
          "13. faster (adj) — lebih cepat | Sinonim: quicker | Antonim: slower",
          "14. vision (n) — penglihatan | Sinonim: eyesight | Antonim: blindness",
          "15. shades (n) — gradasi warna | Sinonim: tones | Antonim: extremes",
          "16. useful (adj) — berguna | Sinonim: helpful | Antonim: useless",
          "17. benefit (v) — memberi manfaat | Sinonim: help | Antonim: harm",
          "18. decision-making (n) — pengambilan keputusan | Sinonim: judgment | Antonim: indecision",
          "19. accurate (adj) — akurat | Sinonim: precise | Antonim: inaccurate",
          "20. experienced (adj) — berpengalaman | Sinonim: skilled | Antonim: inexperienced",
          "21. attention (n) — perhatian | Sinonim: focus | Antonim: distraction",
          "22. confused (adj) — bingung | Sinonim: puzzled | Antonim: clear",
          "23. additionally (adv) — sebagai tambahan | Sinonim: moreover | Antonim: finally",
          "24. manipulate (v) — memanipulasi | Sinonim: control | Antonim: release",
          "25. evidence (n) — bukti | Sinonim: proof | Antonim: doubt",
          "26. psychological (adj) — psikologis | Sinonim: mental | Antonim: physical",
          "27. diagnose (v) — mendiagnosis | Sinonim: identify | Antonim: ignore",
          "28. symptoms (n) — gejala | Sinonim: signs | Antonim: cure",
          "29. conventional (adj) — konvensional | Sinonim: traditional | Antonim: modern",
          "30. prevent (v) — mencegah | Sinonim: stop | Antonim: cause",
          "31. exposure (n) — paparan | Sinonim: contact | Antonim: protection",
          "32. traumatic (adj) — traumatis | Sinonim: distressing | Antonim: calming",
          "33. flashbacks (n) — kilas balik | Sinonim: memories | Antonim: forgetfulness",
          "34. violent (adj) — penuh kekerasan | Sinonim: aggressive | Antonim: peaceful",
          "35. alter (v) — mengubah | Sinonim: modify | Antonim: maintain",
          "36. emotional (adj) — emosional | Sinonim: sensitive | Antonim: unemotional",
          "37. aggressive (adj) — agresif | Sinonim: hostile | Antonim: gentle",
          "38. beneficial (adj) — bermanfaat | Sinonim: helpful | Antonim: harmful",
          "39. incorporate (v) — menggabungkan | Sinonim: combine | Antonim: separate",
          "40. neurological (adj) — neurologis | Sinonim: neural | Antonim: non-neural",
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
        question: "Only relatively recently have people started to realise ___",
        options: [
          "The harmful effects of video games",
          "The beneficial effects of video games",
          "How much we don't know about video games' effects",
          "How much video games affect the people that play them",
        ],
        correctAnswer: "The beneficial effects of video games",
        reason:
          'Paragraf 1 menyatakan "researchers are finding that games can actually change us for the better" — ini menunjukkan bahwa manfaat video game baru-baru ini mulai disadari. Opsi A salah karena fokusnya bukan efek berbahaya. Opsi C dan D tidak didukung teks.',
      },
      {
        id: "int-r3-mc2",
        type: "multiple-choice",
        question:
          "Very young children show improved ___ after playing video games.",
        options: [
          "Muscle control and co-ordination",
          "Social interaction",
          "Decision-making",
          "Ability to differentiate between different colours",
        ],
        correctAnswer: "Muscle control and co-ordination",
        reason:
          'Paragraf 2: "improved motor skills, for example they can kick, catch and throw a ball better." Motor skills = kemampuan otot dan koordinasi gerak (muscle control and co-ordination). Opsi B, C, D tidak disebutkan dalam konteks anak kecil di paragraf ini.',
      },
      {
        id: "int-r3-mc3",
        type: "multiple-choice",
        question: "Playing video games helps doctors ___",
        options: [
          "Do operations and read X-rays",
          "Make decisions under pressure",
          "Operate complex equipment",
          "Tend to more than one patient at a time",
        ],
        correctAnswer: "Do operations and read X-rays",
        reason:
          "Paragraf 2 menyebutkan dua manfaat bagi dokter: (1) surgeons who played games were 27% faster and made fewer errors in operations, dan (2) their visual acuity improved, helping them read X-rays. Opsi B, C, D tidak disebutkan secara eksplisit.",
      },
      {
        id: "int-r3-mc4",
        type: "multiple-choice",
        question:
          "Video gamers' decision-making speed is significantly improved by ___",
        options: [
          "Years of gaming experience",
          "Long periods of game playing",
          "Playing video games in short bursts",
          "Certain types of video game",
        ],
        correctAnswer: "Certain types of video game",
        reason:
          'Paragraf 3: "People who play action-based games make decisions 25 per cent faster than others." Kata kunci: "action-based games" = certain types of video game (jenis tertentu). Bukan durasi atau pengalaman bertahun-tahun yang menjadi faktornya.',
      },
      {
        id: "int-r3-mc5",
        type: "multiple-choice",
        question: "Women who play video games demonstrate ___",
        options: [
          "Faster reaction speeds",
          "Reduced stress levels",
          "Better multitasking ability",
          "Better spatial awareness",
        ],
        correctAnswer: "Better spatial awareness",
        reason:
          'Paragraf 3: "women who play games are better able to mentally manipulate 3D objects" — ini merujuk pada spatial awareness (kesadaran ruang/spasial). Opsi A, B, C tidak disebutkan untuk perempuan di bagian ini.',
      },
      {
        id: "int-r3-mc6",
        type: "multiple-choice",
        question:
          "In one research study, the video game Tetris helps people to ___",
        options: [
          "Improve their concentration",
          "Overcome depression",
          "Forget disturbing experiences",
          "Make decisions faster",
        ],
        correctAnswer: "Forget disturbing experiences",
        reason:
          'Paragraf 4: "playing Tetris shortly after a traumatic event can actually prevent people having disturbing flashbacks." Ini berarti membantu melupakan/mencegah kenangan buruk (forget disturbing experiences). Opsi A, B, D tidak sesuai dengan konteks penelitian Tetris.',
      },
      {
        id: "int-r3-mc7",
        type: "multiple-choice",
        question: "Research shows that violent video games ___",
        options: [
          "Have no negative effects on players",
          "Only affect players' brains after extended hours of play",
          "May have positive and negative effects on the brain",
          "Only affect players' brains in extreme ways",
        ],
        correctAnswer: "May have positive and negative effects on the brain",
        reason:
          "Paragraf 5 menunjukkan dua sisi: peneliti di Indiana University menemukan efek negatif (area otak terkait agresi aktif), NAMUN Daphne Bavelier menyatakan bahwa violent games justru mungkin memiliki manfaat terbesar. Jadi jawabannya: dua sisi, positif DAN negatif.",
      },
      {
        id: "int-r3-mc8",
        type: "multiple-choice",
        question: "In the future, computer games may be used for ___",
        options: [
          "Treating a variety of medical problems",
          "Training doctors to deal with emotional pressure",
          "Helping parents to deal with difficult teenagers",
          "Treating prisoners with a history of violent behaviour",
        ],
        correctAnswer: "Treating a variety of medical problems",
        reason:
          'Paragraf 5: "we may see many treatments for physical and neurological problems which incorporate the playing of video games." Physical and neurological problems = medical problems (masalah medis). Opsi B, C, D tidak didukung teks.',
      },
      {
        id: "int-r3-mc9",
        type: "multiple-choice",
        question:
          "According to the passage, why do scientists continue studying video games despite concerns?",
        options: [
          "They want to prove that violent games should be banned",
          "They believe video games have no effect on the brain",
          "They see evidence that certain games may provide important benefits",
          "They think most research on video games is unscientific",
        ],
        correctAnswer:
          "They see evidence that certain games may provide important benefits",
        reason:
          "Sepanjang teks, para peneliti terus menemukan bukti bahwa game tertentu memberikan manfaat nyata (motor skills, decision-making, trauma therapy, medical treatment). Itulah yang mendorong mereka terus meneliti meski ada kekhawatiran. Opsi A, B, D bertentangan dengan isi teks.",
      },
      {
        id: "int-r3-mc10",
        type: "multiple-choice",
        question:
          "What can you infer about the future role of video games in society?",
        options: [
          "They will replace all traditional medical treatments",
          "They will likely be used as tools to support physical and mental health",
          "They will become less popular as people learn about their risks",
          "They will only be used for entertainment purposes",
        ],
        correctAnswer:
          "They will likely be used as tools to support physical and mental health",
        reason:
          'Paragraf 5 menyebut "treatments for physical and neurological problems" dan manfaat mental (trauma, stress). Ini mengarah pada inferensi bahwa games akan digunakan sebagai alat kesehatan fisik dan mental. Opsi A terlalu ekstrem ("replace all"). Opsi C dan D bertentangan dengan keseluruhan isi teks.',
      },
      // ── Matching Vocabulary ───────────────────────────────────────────────────
      {
        id: "int-r3-match1",
        type: "multiple-choice",
        question: "Match: (v) criticise",
        options: [
          "A. to stop something from happening",
          "B. to gain an advantage or profit",
          "C. to express disapproval or point out faults",
          "D. to create or grow something over time",
        ],
        correctAnswer: "C. to express disapproval or point out faults",
        reason:
          '"criticise" = mengkritik → C. to express disapproval or point out faults.',
      },
      {
        id: "int-r3-match2",
        type: "multiple-choice",
        question: "Match: (v) throw",
        options: [
          "A. to perform or complete a task",
          "B. to make something better",
          "C. to stop something from happening",
          "D. to send something through the air using your hand",
        ],
        correctAnswer: "D. to send something through the air using your hand",
        reason:
          '"throw" = melempar → D. to send something through the air using your hand.',
      },
      {
        id: "int-r3-match3",
        type: "multiple-choice",
        question: "Match: (adj) overweight",
        options: [
          "A. exact and correct, without mistakes",
          "B. having too much body weight",
          "C. helpful or producing good results",
          "D. feeling very unhappy or hopeless",
        ],
        correctAnswer: "B. having too much body weight",
        reason:
          '"overweight" = kelebihan berat badan → B. having too much body weight.',
      },
      {
        id: "int-r3-match4",
        type: "multiple-choice",
        question: "Match: (adj) depressed",
        options: [
          "A. very forceful and involving physical harm",
          "B. relating to the body rather than the mind",
          "C. feeling very unhappy or hopeless",
          "D. having too much body weight",
        ],
        correctAnswer: "C. feeling very unhappy or hopeless",
        reason: '"depressed" = depresi → C. feeling very unhappy or hopeless.',
      },
      {
        id: "int-r3-match5",
        type: "multiple-choice",
        question: "Match: (n) researchers",
        options: [
          "A. people who perform medical operations",
          "B. people who study something carefully to discover facts",
          "C. information that proves something is true",
          "D. the process of making choices",
        ],
        correctAnswer:
          "B. people who study something carefully to discover facts",
        reason:
          '"researchers" = peneliti → B. people who study something carefully to discover facts.',
      },
      {
        id: "int-r3-match6",
        type: "multiple-choice",
        question: "Match: (v) improve",
        options: [
          "A. to create or grow something over time",
          "B. to gain an advantage or profit",
          "C. to make something better",
          "D. to stop something from happening",
        ],
        correctAnswer: "C. to make something better",
        reason: '"improve" = meningkatkan → C. to make something better.',
      },
      {
        id: "int-r3-match7",
        type: "multiple-choice",
        question: "Match: (v) develop",
        options: [
          "A. to make something better",
          "B. to create or grow something over time",
          "C. to express disapproval or point out faults",
          "D. to send something through the air",
        ],
        correctAnswer: "B. to create or grow something over time",
        reason:
          '"develop" = mengembangkan → B. to create or grow something over time.',
      },
      {
        id: "int-r3-match8",
        type: "multiple-choice",
        question: "Match: (adj) physical",
        options: [
          "A. relating to the mind or mental processes",
          "B. exact and correct, without mistakes",
          "C. relating to the body rather than the mind",
          "D. very forceful and involving physical harm",
        ],
        correctAnswer: "C. relating to the body rather than the mind",
        reason:
          '"physical" = fisik → C. relating to the body rather than the mind.',
      },
      {
        id: "int-r3-match9",
        type: "multiple-choice",
        question: "Match: (adv) particularly",
        options: [
          "A. more than usual; especially",
          "B. exact and correct, without mistakes",
          "C. helpful or producing good results",
          "D. the ability to see",
        ],
        correctAnswer: "A. more than usual; especially",
        reason: '"particularly" = terutama → A. more than usual; especially.',
      },
      {
        id: "int-r3-match10",
        type: "multiple-choice",
        question: "Match: (phrasal v) carry out",
        options: [
          "A. to gain an advantage or profit",
          "B. to stop something from happening",
          "C. to perform or complete a task",
          "D. to make something better",
        ],
        correctAnswer: "C. to perform or complete a task",
        reason:
          '"carry out" = melaksanakan → C. to perform or complete a task.',
      },
      {
        id: "int-r3-match11",
        type: "multiple-choice",
        question: "Match: (n) surgeons",
        options: [
          "A. people who study something carefully to discover facts",
          "B. information that proves something is true",
          "C. the process of making choices",
          "D. people who perform medical operations",
        ],
        correctAnswer: "D. people who perform medical operations",
        reason:
          '"surgeons" = ahli bedah → D. people who perform medical operations.',
      },
      {
        id: "int-r3-match12",
        type: "multiple-choice",
        question: "Match: (n) vision",
        options: [
          "A. the ability to see",
          "B. the process of making choices",
          "C. information that proves something is true",
          "D. people who perform medical operations",
        ],
        correctAnswer: "A. the ability to see",
        reason: '"vision" = penglihatan → A. the ability to see.',
      },
      {
        id: "int-r3-match13",
        type: "multiple-choice",
        question: "Match: (v) benefit",
        options: [
          "A. to make something better",
          "B. to gain an advantage or profit",
          "C. to stop something from happening",
          "D. to create or grow something over time",
        ],
        correctAnswer: "B. to gain an advantage or profit",
        reason:
          '"benefit" = memberi manfaat → B. to gain an advantage or profit.',
      },
      {
        id: "int-r3-match14",
        type: "multiple-choice",
        question: "Match: (n) decision-making",
        options: [
          "A. information that proves something is true",
          "B. the ability to see",
          "C. people who perform medical operations",
          "D. the process of making choices",
        ],
        correctAnswer: "D. the process of making choices",
        reason:
          '"decision-making" = pengambilan keputusan → D. the process of making choices.',
      },
      {
        id: "int-r3-match15",
        type: "multiple-choice",
        question: "Match: (adj) accurate",
        options: [
          "A. helpful or producing good results",
          "B. exact and correct, without mistakes",
          "C. relating to the mind or mental processes",
          "D. very forceful and involving physical harm",
        ],
        correctAnswer: "B. exact and correct, without mistakes",
        reason: '"accurate" = akurat → B. exact and correct, without mistakes.',
      },
      {
        id: "int-r3-match16",
        type: "multiple-choice",
        question: "Match: (n) evidence",
        options: [
          "A. the process of making choices",
          "B. people who study something carefully to discover facts",
          "C. information that proves something is true",
          "D. the ability to see",
        ],
        correctAnswer: "C. information that proves something is true",
        reason:
          '"evidence" = bukti → C. information that proves something is true.',
      },
      {
        id: "int-r3-match17",
        type: "multiple-choice",
        question: "Match: (adj) psychological",
        options: [
          "A. relating to the body rather than the mind",
          "B. very forceful and involving physical harm",
          "C. helpful or producing good results",
          "D. relating to the mind or mental processes",
        ],
        correctAnswer: "D. relating to the mind or mental processes",
        reason:
          '"psychological" = psikologis → D. relating to the mind or mental processes.',
      },
      {
        id: "int-r3-match18",
        type: "multiple-choice",
        question: "Match: (v) prevent",
        options: [
          "A. to stop something from happening",
          "B. to gain an advantage or profit",
          "C. to express disapproval or point out faults",
          "D. to create or grow something over time",
        ],
        correctAnswer: "A. to stop something from happening",
        reason: '"prevent" = mencegah → A. to stop something from happening.',
      },
      {
        id: "int-r3-match19",
        type: "multiple-choice",
        question: "Match: (adj) violent",
        options: [
          "A. helpful or producing good results",
          "B. relating to the mind or mental processes",
          "C. very forceful and involving physical harm",
          "D. exact and correct, without mistakes",
        ],
        correctAnswer: "C. very forceful and involving physical harm",
        reason:
          '"violent" = penuh kekerasan → C. very forceful and involving physical harm.',
      },
      {
        id: "int-r3-match20",
        type: "multiple-choice",
        question: "Match: (adj) beneficial",
        options: [
          "A. exact and correct, without mistakes",
          "B. helpful or producing good results",
          "C. relating to the body rather than the mind",
          "D. feeling very unhappy or hopeless",
        ],
        correctAnswer: "B. helpful or producing good results",
        reason:
          '"beneficial" = bermanfaat → B. helpful or producing good results.',
      },
    ],
  },

  // ── Day 4: Culture Shock ──────────────────────────────────────────────────────
  {
    id: "int-reading-4",
    track: "reading",
    day: 4,
    tutor: "Ms. Siska",
    title: "Culture Shock",
    subtitle:
      "The four stages of adapting to a new culture — and the surprising fifth stage",
    overview:
      "Materi reading tentang culture shock: 4 tahap adaptasi budaya (honeymoon, rejection, adjustment, at ease at last) dan tahap kelima yang mengejutkan — reverse culture shock.",
    passage: [
      "Psychologists tell us that there are four basic stages that human beings pass through when they enter and live in a new culture. This process, which helps us to deal with culture shock, is the way our brain and our personality react to the strange new things we encounter when we move from one culture to another. If our culture involves bowing when we greet someone, we may feel very uncomfortable in a culture that does not involve bowing. If the language we use when talking to someone in our own culture is influenced by the other person's age and status, it may be difficult for us to feel comfortable communicating with people in the new culture.",
      "(Para psikolog memberi tahu kita bahwa ada empat tahap dasar yang dilalui manusia ketika memasuki dan tinggal di budaya baru. Proses ini, yang membantu kita menghadapi culture shock, adalah cara otak dan kepribadian kita bereaksi terhadap hal-hal asing baru yang kita temui ketika berpindah dari satu budaya ke budaya lain. Jika budaya kita melibatkan membungkuk saat menyapa seseorang, kita mungkin merasa sangat tidak nyaman di budaya yang tidak melibatkan membungkuk. Jika bahasa yang kita gunakan saat berbicara dengan seseorang di budaya kita sendiri dipengaruhi oleh usia dan status orang lain, mungkin sulit bagi kita untuk merasa nyaman berkomunikasi dengan orang-orang di budaya baru.)",
      "Culture begins with the \"honeymoon stage\". This is the period of time when we first arrive in which everything about the new culture is strange and exciting. We may be suffering from \"jet lag\" but we are thrilled to be in the new environment, seeing new sights, hearing new sounds and language, eating new kinds of food. This honeymoon stage can last for quite a long time because we feel we are involved in some kind of great adventure.",
      "(Culture shock dimulai dengan \"tahap bulan madu\". Ini adalah periode waktu ketika kita pertama kali tiba di mana segalanya tentang budaya baru terasa asing dan menyenangkan. Kita mungkin menderita jet lag namun kita sangat bersemangat berada di lingkungan baru, melihat pemandangan baru, mendengar suara dan bahasa baru, mencicipi makanan-makanan baru. Tahap bulan madu ini bisa berlangsung cukup lama karena kita merasa terlibat dalam semacam petualangan besar.)",
      "Unfortunately, the second stage of culture shock can be more difficult. After we have settled down into our new life, working or studying, buying groceries, doing laundry or living with a home-stay family, we can become very tired and begin to miss our homeland and our family, girlfriend/boyfriend, pets. All the little problems that everybody in life has seem to be much bigger and more disturbing when you face them in a foreign culture. This period of cultural adjustment can be very difficult and lead to the new arrival rejecting or pulling away from the new culture. This \"rejection stage\" can be quite dangerous because the visitor may develop unhealthy habits (smoking and drinking too much, being too concerned over food or contact with people from the new culture). This can, unfortunately lead to the person getting sick or developing skin infections or rashes which then makes the person feel even more scared and confused and helpless. This stage is considered a crisis in the process of cultural adjustment and many people choose to go back to their homeland or spend all their time with people from their own culture speaking their native language.",
      "(Sayangnya, tahap kedua dari culture shock bisa lebih sulit. Setelah kita menetap dalam kehidupan baru — bekerja atau belajar, membeli bahan makanan, mencuci pakaian, atau tinggal bersama keluarga homestay — kita bisa menjadi sangat lelah dan mulai merindukan tanah air, keluarga, pacar, dan hewan peliharaan. Semua masalah kecil yang dihadapi semua orang dalam hidup tampak jauh lebih besar dan lebih mengganggu ketika kamu menghadapinya di budaya asing. Periode penyesuaian budaya ini bisa sangat sulit dan menyebabkan orang yang baru datang menolak atau menjauh dari budaya baru. \"Tahap penolakan\" ini bisa cukup berbahaya karena pengunjung mungkin mengembangkan kebiasaan tidak sehat (merokok dan minum terlalu banyak, terlalu khawatir tentang makanan atau kontak dengan orang dari budaya baru). Ini bisa, sayangnya, menyebabkan orang tersebut sakit atau mengembangkan infeksi kulit atau ruam yang kemudian membuat orang tersebut merasa semakin takut, bingung, dan tidak berdaya. Tahap ini dianggap krisis dalam proses penyesuaian budaya dan banyak orang memilih untuk kembali ke tanah air mereka atau menghabiskan semua waktu mereka bersama orang-orang dari budaya mereka sendiri yang berbicara bahasa asli mereka.)",
      "The third stage of culture shock is called the \"adjustment stage\". This is when you begin to realize that things are not so bad in the host culture. Your sense of humour usually becomes stronger and you realize that you are becoming stronger by learning to take care of yourself in the new place. Things are still difficult, but you are now a survivor!",
      "(Tahap ketiga dari culture shock disebut \"tahap penyesuaian\". Inilah saatnya kamu mulai menyadari bahwa segala sesuatu tidak seburuk itu di budaya tuan rumah. Rasa humor kamu biasanya menjadi lebih kuat dan kamu menyadari bahwa kamu semakin kuat dengan belajar mengurus diri sendiri di tempat baru. Hal-hal masih sulit, tetapi kamu kini adalah seorang penyintas!)",
      "The fourth stage can be called \"at ease at last\". Now you feel quite comfortable in your new surroundings. You can cope with most problems that occur. You may still have problems with the language, but you know you are strong enough to deal with them. If you meet someone from your country who has just arrived, you can be the expert on life in the new culture and help them to deal with their culture shock.",
      "(Tahap keempat dapat disebut \"akhirnya merasa nyaman\". Kini kamu merasa cukup nyaman di lingkungan barumu. Kamu bisa mengatasi sebagian besar masalah yang terjadi. Kamu mungkin masih mengalami kesulitan dengan bahasa, tetapi kamu tahu kamu cukup kuat untuk menghadapinya. Jika kamu bertemu seseorang dari negaramu yang baru tiba, kamu bisa menjadi ahli dalam kehidupan di budaya baru dan membantu mereka menghadapi culture shock mereka.)",
      "There is a fifth stage of culture shock which many people don't know about. This is called \"reverse culture shock\". Surprisingly, this occurs when you go back to your native culture and find that you have changed and that things there have changed while you have been away. Now you feel a little uncomfortable back home. Life is a struggle!",
      "(Ada tahap kelima dari culture shock yang banyak orang tidak ketahui. Ini disebut \"reverse culture shock\". Mengejutkan, ini terjadi ketika kamu kembali ke budaya aslimu dan menemukan bahwa kamu telah berubah dan hal-hal di sana juga telah berubah sementara kamu pergi. Kini kamu merasa sedikit tidak nyaman kembali di rumah. Hidup adalah perjuangan!)",
    ],
    materialSections: [
      {
        title: "5 Stages of Culture Shock",
        points: [
          "1. 🍯 HONEYMOON — Segalanya terasa seru & menakjubkan. Bisa bertahan cukup lama.",
          "2. ❌ REJECTION — Masalah mulai muncul: rindu rumah, lelah, kebiasaan tidak sehat. Bisa menyebabkan gejala fisik.",
          "3. 🔧 ADJUSTMENT — Mulai menyadari hal-hal tidak seburuk itu, lebih kuat, bisa mengurus diri sendiri.",
          "4. ✅ AT EASE AT LAST — Nyaman dengan lingkungan baru, bisa bantu orang lain.",
          "5. 🔄 REVERSE CULTURE SHOCK — Terjadi saat kembali ke budaya asal — terasa asing di negeri sendiri.",
        ],
      },
      {
        title: "Key Vocabulary",
        points: [
          "culture shock — rasa tidak nyaman saat memasuki budaya baru",
          "honeymoon stage — tahap awal yang menyenangkan dan penuh semangat",
          "rejection stage — tahap penolakan; lelah, rindu rumah, kebiasaan tidak sehat",
          "adjustment stage — tahap penyesuaian; mulai menyadari tidak seburuk yang dibayangkan",
          "reverse culture shock — rasa tidak nyaman ketika kembali ke budaya sendiri",
          'cope — mengatasi, menghadapi: "You can cope with most problems."',
          "helpless — tidak berdaya; tidak bisa berbuat apa-apa",
          "rashes — ruam kulit; tanda gejala fisik dari stres",
          "thrilled — sangat senang dan bersemangat",
          "survivor — orang yang berhasil bertahan melewati kesulitan",
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
          'Paragraf 1: "four basic stages that human beings pass through when they enter and live in a new culture" — culture shock terjadi saat memasuki dan tinggal di budaya baru.',
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
          'Paragraf 2: "everything about the new culture is strange and exciting…we are thrilled to be in the new environment." — thrilled = very happy/excited.',
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
          'Paragraf 3: "we can become very tired and begin to miss our homeland and our family" (= homesick) + orang menjadi "scared and confused and helpless" saat menghadapi budaya asing.',
      },
      {
        id: "int-r4-mc4",
        type: "multiple-choice",
        question: "How could the third stage best be described?",
        options: ["Adjustment", "Rejection", "Enthusiasm", "Anger"],
        correctAnswer: "Adjustment",
        reason:
          "Paragraf 4: \"The third stage of culture shock is called the 'adjustment stage'.\" — nama resmi tahap ketiga adalah adjustment.",
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
          'Paragraf 5: "Now you feel quite comfortable in your new surroundings. You can cope with most problems that occur." — nyaman dan santai.',
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
          'Paragraf 6: "There is a fifth stage of culture shock which many people don\'t know about." — kebanyakan orang tidak tahu tentangnya, artinya tidak menyangka/expect.',
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
          "Paragraf 6: \"This is called 'reverse culture shock'.\" — nama persisnya adalah reverse culture shock.",
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
          'Paragraf 3: "many people choose to spend all their time with people from their own culture speaking their native language" — karena lebih nyaman dengan orang budaya sendiri, menghindari rasa tidak nyaman dengan orang asing.',
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
          "TRUE — Paragraf 1 menyatakan culture shock terjadi karena kita menemukan hal-hal asing baru: salam berbeda (bowing), bahasa berbeda, norma berbeda. Perbedaan kebiasaan & adat istiadat adalah inti dari culture shock.",
      },
      {
        id: "int-r4-tfng2",
        type: "true-false-not-given",
        question:
          "The honeymoon stage is usually short because people quickly get bored of the new environment.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'FALSE — Paragraf 2: "This honeymoon stage can last for quite a long time." — Tahap honeymoon bisa berlangsung CUKUP LAMA, bukan singkat. Selain itu, orang merasa thrilled/excited (bukan bored) karena merasa sedang berpetualang.',
      },
      {
        id: "int-r4-tfng3",
        type: "true-false-not-given",
        question:
          "People always visit a doctor when they feel sick during the rejection stage.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason:
          "NOT GIVEN — Paragraf 3 menyebutkan bahwa orang bisa mengalami gejala fisik seperti infeksi kulit dan ruam. Namun teks TIDAK menyebutkan apakah mereka pergi ke dokter atau tidak — informasi itu tidak ada dalam teks.",
      },
      {
        id: "int-r4-tfng4",
        type: "true-false-not-given",
        question:
          "In the adjustment stage, people begin to realize things are not so bad and feel stronger.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'TRUE — Paragraf 4: "you begin to realize that things are not so bad in the host culture…you realize that you are becoming stronger by learning to take care of yourself." — Pernyataan ini sesuai dengan isi teks.',
      },
      {
        id: "int-r4-tfng5",
        type: "true-false-not-given",
        question:
          "Reverse culture shock happens only to people who stay abroad for less than a year.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason:
          "NOT GIVEN — Paragraf 6 hanya menyebutkan bahwa reverse culture shock terjadi ketika seseorang kembali ke budaya asalnya dan menemukan bahwa dirinya dan segala sesuatunya telah berubah. Teks TIDAK menyebutkan berapa lama seseorang harus tinggal di luar negeri agar mengalaminya.",
      },
    ],
  },

  // ── Day 5: Are Celebrities Bad for You? ──────────────────────────────────────
  {
    id: "int-reading-5",
    track: "reading",
    day: 5,
    tutor: "Ms. Siska",
    title: "Are Celebrities Bad for You?",
    subtitle:
      "Exploring how celebrity culture affects fans — and the celebrities themselves",
    overview:
      "Teks reading tentang dampak budaya selebriti: tiga jenis fans, efek pada kesehatan mental, penelitian tentang narsisme pada selebriti, dan apakah selebriti layak dijadikan role model.",
    passage: [
      "Celebrities are everywhere nowadays: on TV, in magazines, online. Is this preoccupation with famous people harmless fun or is it bad for us? How many people are truly obsessed with modern media idols? And on the other side of the coin, can fame be harmful to the celebrities?",
      "Studies suggest that the vast majority of teenagers do not really worship celebrities. Researchers have identified three kinds of fans. About 15% of young people have an 'entertainment-social' interest. They love chatting about their favourite celebrities with friends and this does not appear to do any harm.",
      "Another 5% feel that they have an 'intense-personal' relationship with a celebrity. Sometimes they see them as their soulmate and find that they are often thinking about them, even when they don't want to. These people are more at risk from depression and anxiety. If girls in this group idolise a female star with a body they consider to be perfect, they are more likely to be unhappy with their own bodies.",
      "That leaves 2% of young people with a 'borderline-pathological' interest. They might say, for example, that they would spend several thousand pounds on a paper plate the celebrity had used, or that they would do something illegal if the celebrity asked them to. These people are in most danger of being seriously disturbed.",
      "What about the celebrities themselves? A study in the USA tried to measure narcissism or extreme self-centredness, when feelings of worthlessness and invisibility are compensated for by turning into the opposite: excessive showing off. Researchers looked at 200 celebrities, 200 young adults with Masters in Business Administration (a group known for being narcissistic) and a nationally representative sample using the same questionnaire. As was expected, the celebrities were significantly more narcissistic than the MBAs and both groups were a lot more narcissistic than the general population.",
      "Four kinds of celebrity were included in the sample. The most narcissistic were the ones who had become famous through reality TV shows — they scored highest on vanity and willingness to exploit other people. Next came actors, and the least narcissistic were musicians. One interesting result was that there was no connection between narcissism and the length of time the celebrity had been famous. This means that becoming famous probably did not make the celebrities narcissistic — they already were beforehand.",
      "So, what can we learn from this? People who are very successful or famous tend to be narcissists and are liable to be ruthless, self-seeking workaholics. As we can see from celebrity magazines, they are also often desperate and lonely. They make disastrous role models.",
    ],
    materialSections: [
      {
        title: "Vocabulary Preview",
        points: [
          "preoccupation (n) — sesuatu yang selalu dipikirkan/dikhawatirkan | 'Is this preoccupation with famous people harmless?'",
          "harmful (adj) — merusak, berbahaya | 'can fame be harmful to the celebrities?'",
          "worship (v) — memuja, mengagumi secara mendalam | 'teenagers do not really worship celebrities'",
          "soulmate (n) — belahan jiwa, seseorang yang terasa sangat cocok | 'they see them as their soulmate'",
          "narcissism (n) — kecintaan berlebihan pada diri sendiri | 'a study tried to measure narcissism'",
          "showing off (phrasal v) — pamer, berperilaku untuk menarik perhatian | 'excessive showing off'",
          "vanity (n) — kesombongan berlebih tentang penampilan diri | 'scored highest on vanity'",
          "role model (n) — panutan, sosok yang ingin ditiru | 'They make disastrous role models'",
          "narcissistic (adj) — bersifat narsistik/egois berlebih",
          "exploit (v) — memanfaatkan orang lain untuk keuntungan sendiri",
          "ruthless (adj) — tidak berperasaan, kejam dalam mengejar tujuan",
          "liable (adj) — cenderung/berpotensi melakukan sesuatu",
        ],
      },
      {
        title: "Three Types of Celebrity Fans",
        points: [
          "🟢 Entertainment-Social (± 15%) — suka ngobrol tentang selebriti dengan teman. TIDAK berbahaya.",
          "🟡 Intense-Personal (± 5%) — merasa punya hubungan mendalam dengan selebriti, sering memikirkannya. Risiko: depresi & kecemasan.",
          "🔴 Borderline-Pathological (± 2%) — bisa melakukan hal ilegal atau ekstrem demi selebriti. PALING berbahaya.",
          "─────────────────────────────",
          "💡 Total fans yang 'bermasalah' = sekitar 7%. Mayoritas (85%+) tidak terlalu terobsesi.",
        ],
      },
      {
        title: "Narcissism Study — Key Findings",
        points: [
          "Penelitian membandingkan 200 selebriti vs 200 MBA students vs masyarakat umum.",
          "Hasil: Selebriti > MBA > masyarakat umum (dalam tingkat narsisme).",
          "─────────────────────────────",
          "Peringkat narsisme berdasarkan jenis selebriti:",
          "1️⃣ Reality TV stars — paling narsis (vanity + exploit others)",
          "2️⃣ Actors",
          "3️⃣ Musicians — paling TIDAK narsis",
          "─────────────────────────────",
          "🔑 Temuan penting: Lamanya seseorang terkenal TIDAK berpengaruh pada narsisme mereka.",
          "   → Kesimpulan: Mereka sudah narsis SEBELUM menjadi terkenal, bukan karena ketenaran.",
        ],
      },
    ],
    exercises: [
      // ── Vocabulary Check ──────────────────────────────────────────────────────
      {
        id: "int-r5-vc1",
        type: "multiple-choice",
        question:
          "VOCABULARY CHECK\nP___________ = something we think or worry about a lot (noun, paragraph 1)",
        options: ["Preoccupation", "Popularity", "Presentation", "Prediction"],
        correctAnswer: "Preoccupation",
        reason:
          '"Preoccupation" = sesuatu yang terus dipikirkan/dikhawatirkan. Paragraf 1: "Is this preoccupation with famous people harmless fun…"',
      },
      {
        id: "int-r5-vc2",
        type: "multiple-choice",
        question:
          "VOCABULARY CHECK\nH___________ = damaging or injurious (adjective, paragraph 1)",
        options: ["Harmful", "Helpful", "Hopeful", "Honest"],
        correctAnswer: "Harmful",
        reason:
          '"Harmful" = merusak/berbahaya. Paragraf 1: "can fame be harmful to the celebrities?"',
      },
      {
        id: "int-r5-vc3",
        type: "multiple-choice",
        question:
          "VOCABULARY CHECK\nW___________ = have or show feelings of profound devotion (verb, paragraph 2)",
        options: ["Worship", "Wonder", "Watch", "Work"],
        correctAnswer: "Worship",
        reason:
          '"Worship" = memuja dengan perasaan sangat mendalam. Paragraf 2: "the vast majority of teenagers do not really worship celebrities."',
      },
      {
        id: "int-r5-vc4",
        type: "multiple-choice",
        question:
          "VOCABULARY CHECK\nS___________ = a person with whom you feel a deep affinity or connection (noun, paragraph 3)",
        options: ["Soulmate", "Supporter", "Stranger", "Spectator"],
        correctAnswer: "Soulmate",
        reason:
          '"Soulmate" = belahan jiwa, seseorang yang terasa sangat cocok. Paragraf 3: "Sometimes they see them as their soulmate."',
      },
      {
        id: "int-r5-vc5",
        type: "multiple-choice",
        question:
          "VOCABULARY CHECK\nN___________ = excessive interest in or admiration of oneself (noun, paragraph 5)",
        options: ["Narcissism", "Negativity", "Nervousness", "Nomination"],
        correctAnswer: "Narcissism",
        reason:
          '"Narcissism" = kecintaan/kekaguman berlebihan pada diri sendiri. Paragraf 5: "A study in the USA tried to measure narcissism or extreme self-centredness."',
      },
      {
        id: "int-r5-vc6",
        type: "multiple-choice",
        question:
          "VOCABULARY CHECK\nS___O___ = behaving in a way that is intended to attract attention (phrasal verb, paragraph 5)",
        options: ["Showing off", "Standing out", "Speaking out", "Setting off"],
        correctAnswer: "Showing off",
        reason:
          '"Showing off" = pamer / berperilaku untuk menarik perhatian orang lain. Paragraf 5: "feelings of worthlessness…compensated for by turning into the opposite: excessive showing off."',
      },
      {
        id: "int-r5-vc7",
        type: "multiple-choice",
        question:
          "VOCABULARY CHECK\nV___________ = excessive pride or interest in your own attractiveness (noun, paragraph 6)",
        options: ["Vanity", "Validity", "Virtue", "Velocity"],
        correctAnswer: "Vanity",
        reason:
          '"Vanity" = kebanggaan berlebihan atas penampilan/diri sendiri. Paragraf 6: "they scored highest on vanity and willingness to exploit other people."',
      },
      {
        id: "int-r5-vc8",
        type: "multiple-choice",
        question:
          "VOCABULARY CHECK\nR___M___ = a person we look up to and want to be like (noun, paragraph 7)",
        options: ["Role model", "Real master", "Rising mentor", "Record maker"],
        correctAnswer: "Role model",
        reason:
          '"Role model" = panutan, sosok yang ingin ditiru. Paragraf 7: "They make disastrous role models."',
      },
      // ── True / False / Not Given ──────────────────────────────────────────────
      {
        id: "int-r5-tfng1",
        type: "true-false-not-given",
        question:
          "The article is about whether celebrity culture is harmful, for either the public or the celebrities themselves.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          "TRUE — Paragraf 1 langsung mengajukan dua pertanyaan: apakah obsesi terhadap selebriti berbahaya bagi kita (publik), dan apakah ketenaran bisa berbahaya bagi selebriti itu sendiri. Kedua sudut pandang itulah yang menjadi inti artikel.",
      },
      {
        id: "int-r5-tfng2",
        type: "true-false-not-given",
        question:
          "Fifteen per cent of teenagers have an interest in celebrities that probably isn't a cause for concern.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          "TRUE — Paragraf 2: \"About 15% of young people have an 'entertainment-social' interest…this does not appear to do any harm.\" Artinya ketertarikan mereka tidak berbahaya, sehingga tidak perlu dikhawatirkan.",
      },
      {
        id: "int-r5-tfng3",
        type: "true-false-not-given",
        question:
          "Young people who feel they have an 'intense-personal' relationship with a celebrity do not experience any negative consequences related to it.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'FALSE — Paragraf 3 jelas menyatakan: "These people are more at risk from depression and anxiety." Ada konsekuensi negatif, yaitu risiko depresi dan kecemasan. Pernyataan soal bertentangan langsung dengan teks.',
      },
      {
        id: "int-r5-tfng4",
        type: "true-false-not-given",
        question:
          "A study found that celebrities were more self-centred than business administration masters students.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'TRUE — Paragraf 5: "the celebrities were significantly more narcissistic than the MBAs." Narcissism/extreme self-centredness = self-centred. Jadi selebriti terbukti lebih self-centred daripada mahasiswa MBA.',
      },
      {
        id: "int-r5-tfng5",
        type: "true-false-not-given",
        question:
          "Some celebrities said they became narcissistic only after becoming famous.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'FALSE — Paragraf 6: "becoming famous probably did not make the celebrities narcissistic — they already were beforehand." Teks justru menyatakan kebalikannya: mereka sudah narsis sebelum terkenal. Tidak ada selebriti yang mengklaim hal tersebut dalam teks.',
      },
      {
        id: "int-r5-tfng6",
        type: "true-false-not-given",
        question:
          "Celebrities from reality TV were found to be the most vain and exploitative.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'TRUE — Paragraf 6: "The most narcissistic were the ones who had become famous through reality TV shows — they scored highest on vanity and willingness to exploit other people." Ini langsung mendukung pernyataan soal.',
      },
      {
        id: "int-r5-tfng7",
        type: "true-false-not-given",
        question: "Actors were the least self-obsessed group of celebrities.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'FALSE — Paragraf 6: "the least narcissistic were musicians." Bukan aktor, melainkan musisi yang paling tidak narsis. Aktor berada di urutan kedua (setelah reality TV stars), bukan yang paling rendah.',
      },
      {
        id: "int-r5-tfng8",
        type: "true-false-not-given",
        question:
          "The study included sports players as one of the celebrity types.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason:
          "NOT GIVEN — Paragraf 6 hanya menyebutkan tiga kelompok selebriti: reality TV stars, actors, dan musicians. Tidak ada informasi tentang atlet/sports players dalam teks, sehingga kita tidak bisa menentukan benar atau salah.",
      },
      {
        id: "int-r5-tfng9",
        type: "true-false-not-given",
        question:
          "The research concluded that the experience of being a celebrity made people more narcissistic than they were previously.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason:
          'FALSE — Paragraf 6 secara eksplisit menyatakan: "there was no connection between narcissism and the length of time the celebrity had been famous…becoming famous probably did not make the celebrities narcissistic — they already were beforehand." Penelitian menyimpulkan kebalikannya.',
      },
      {
        id: "int-r5-tfng10",
        type: "true-false-not-given",
        question:
          "The author says that celebrities tend to exhibit negative qualities and are therefore not good role models.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason:
          'TRUE — Paragraf 7 (penutup): "People who are very successful or famous tend to be narcissists and are liable to be ruthless, self-seeking workaholics…they are also often desperate and lonely. They make disastrous role models." Penulis dengan jelas menyatakan bahwa selebriti bukan panutan yang baik.',
      },
    ],
  },

  // ── Day 6: Shopping for Christmas ────────────────────────────────────────────
  {
    id: "int-reading-6",
    track: "reading",
    day: 6,
    tutor: "Ms. Siska",
    title: "Shopping for Christmas",
    subtitle: "How Christmas transforms British shopping — from festive frenzy to New Year sales",
    overview:
      "Teks reading tentang suasana belanja Natal di Inggris: bulan tersibuk untuk toko, dampak Covid-19 pada belanja online, cara toko menarik pembeli, suasana kerja para pramuniaga, dan tradisi belanja pasca-Natal.",
    passage: [
      "Christmas will soon be here again. For Britain's shops, especially shops in cities, November and December are the busiest months of the year. In fact, some big shops do half their year's business in those two months.",
      "(Natal akan segera tiba lagi. Bagi toko-toko di Inggris, khususnya toko-toko di kota, November dan Desember adalah bulan-bulan tersibuk dalam setahun. Bahkan, beberapa toko besar melakukan setengah dari bisnis tahunan mereka dalam dua bulan tersebut.)",
      "Yet in 2020, with Covid-19, Christmas shopping will not be the same! Many people do not want to go into cities, or into big shopping centres. They are afraid of catching Covid. More and more people are now shopping on the internet! Internet shops are safe for shoppers, and they never shut… not even on Christmas Day!",
      "(Namun pada tahun 2020, dengan adanya Covid-19, belanja Natal tidak akan sama! Banyak orang tidak ingin pergi ke kota, atau ke pusat perbelanjaan besar. Mereka takut tertular Covid. Semakin banyak orang yang kini berbelanja di internet! Toko internet aman bagi pembeli, dan tidak pernah tutup… bahkan pada hari Natal!)",
      "Most people, however, spend their money before Christmas. \"Christmas shopping\" is different from ordinary shopping, and people like to do it differently. They go to different shops, or different online stores, more expensive shops very often. They don't just buy food from their supermarket and clothes from big department stores. They look round, they take time (if they can), they browse and they choose.",
      "(Namun, sebagian besar orang menghabiskan uang mereka sebelum Natal. \"Belanja Natal\" berbeda dari belanja biasa, dan orang-orang suka melakukannya dengan cara berbeda. Mereka pergi ke toko-toko berbeda, atau toko online yang berbeda, toko yang lebih mahal sering kali. Mereka tidak hanya membeli makanan dari supermarket dan pakaian dari toko serba ada besar. Mereka melihat-lihat, meluangkan waktu (jika bisa), mereka menelusuri dan memilih.)",
      "City shops do their best to attract them with exciting windows, and special offers. In the West End of London, shops spend thousands of pounds on lights, decorations, and special window displays. Some visitors come to London just to see the lights and shop windows, but others come to shop in famous shops like Harrods or Hamleys, Europe's biggest toy shop.",
      "(Toko-toko di kota berusaha semaksimal mungkin untuk menarik mereka dengan etalase yang menarik dan penawaran spesial. Di West End London, toko-toko menghabiskan ribuan pound untuk lampu-lampu, dekorasi, dan tampilan etalase khusus. Beberapa pengunjung datang ke London hanya untuk melihat lampu dan etalase toko, sementara yang lain datang untuk berbelanja di toko-toko terkenal seperti Harrods atau Hamleys, toko mainan terbesar di Eropa.)",
      "For shop assistants, it is a frantic season. There is not much time to rest, just time for a cup of coffee or tea perhaps, then back to work. It's a good season for pay! As Christmas gets nearer, shops stay open longer, sometimes until 10 p.m. This means more pay for the staff. It also means extra staff. Some people find a job, for a few weeks at least. Then, at about 5 p.m. on Christmas Eve, it all stops. The shops are suddenly empty – just a few people running round, looking for last minute presents. In many shops, there is a small party: a bottle of wine and something like that. And then it's all over. The shop doors close, but the lights stay on. Out in the streets, which were so busy a few hours before, there is hardly anyone. Just a few people going home, or singing in the street.",
      "(Bagi para pramuniaga, ini adalah musim yang sibuk sekali. Tidak banyak waktu untuk istirahat, hanya waktu untuk secangkir kopi atau teh mungkin, lalu kembali bekerja. Ini adalah musim yang bagus untuk upah! Semakin dekat Natal, toko-toko buka lebih lama, kadang hingga pukul 22.00. Ini berarti upah lebih banyak bagi staf. Ini juga berarti staf tambahan. Beberapa orang mendapat pekerjaan, setidaknya selama beberapa minggu. Kemudian, sekitar pukul 17.00 pada Malam Natal, semuanya berhenti. Toko-toko tiba-tiba sepi – hanya beberapa orang berlarian, mencari kado menit terakhir. Di banyak toko, ada pesta kecil: sebotol anggur dan semacamnya. Dan kemudian semuanya selesai. Pintu toko ditutup, tapi lampu tetap menyala. Di jalanan, yang begitu ramai beberapa jam sebelumnya, hampir tidak ada siapa pun. Hanya beberapa orang pulang ke rumah, atau bernyanyi di jalanan.)",
      "Christmas shopping is over again until next October or November. But for some shops, the doors will only stay closed for a day. After Christmas shopping, there is New Year shopping. The New Year used to start after January 1st. Now in some shops they start on the day after Christmas, and the crowds rush back for a few more days. Lots of things are cheaper now.",
      "(Belanja Natal sudah selesai lagi hingga Oktober atau November berikutnya. Tapi untuk beberapa toko, pintunya hanya akan tutup selama sehari. Setelah belanja Natal, ada belanja Tahun Baru. Tahun Baru biasanya dimulai setelah 1 Januari. Kini di beberapa toko dimulai pada hari setelah Natal, dan keramaian pun kembali berdatangan selama beberapa hari lagi. Banyak barang yang lebih murah sekarang.)",
    ],
    materialSections: [
      {
        title: "Key Vocabulary",
        points: [
          "frantic (adj) — sangat sibuk/hektik | 'it is a frantic season'",
          "browse (v) — melihat-lihat tanpa tujuan pasti | 'they browse and they choose'",
          "attract (v) — menarik perhatian | 'shops do their best to attract them'",
          "decorations (n) — hiasan | 'shops spend thousands on lights, decorations'",
          "window displays (n) — pajangan etalase | 'special window displays'",
          "last minute (adj) — menit terakhir | 'looking for last minute presents'",
          "ordinary (adj) — biasa, umum | 'different from ordinary shopping'",
          "rush back (v) — bergegas kembali | 'the crowds rush back for a few more days'",
        ],
      },
      {
        title: "Reading Strategy: Short Answer Questions",
        points: [
          "📌 Short answer = jawab singkat, langsung dari teks — jangan tambahkan opini.",
          "⚡ Tip 1: Cari kata kunci dari pertanyaan di dalam teks.",
          "⚡ Tip 2: Gunakan frasa dari teks, tidak perlu kalimat lengkap.",
          "⚡ Tip 3: Jawaban biasanya ada dalam 1-2 kalimat di teks.",
        ],
      },
      {
        title: "Matching Heading Strategy",
        points: [
          "📌 Matching Heading = cocokkan judul dengan isi paragraf.",
          "⚡ Baca SELURUH paragraf dulu sebelum memilih heading.",
          "⚡ Fokus pada ide utama paragraf, bukan detail kecil.",
          "⚡ Perhatikan kata-kata kunci yang muncul di judul dan paragraf.",
          "⚡ Eliminasi pilihan yang jelas tidak cocok terlebih dahulu.",
        ],
      },
    ],
    exercises: [
      // Short Answer (6 questions)
      {
        id: "int-r6-sa1",
        type: "short-answer",
        question: "What are the busiest months of the year for British shops?",
        sampleAnswer: "November and December.",
        reason: 'Paragraf 1: "November and December are the busiest months of the year."',
      },
      {
        id: "int-r6-sa2",
        type: "short-answer",
        question: "What aspects do the shops do to attract buyers?",
        sampleAnswer: "Exciting window displays and special offers.",
        reason: 'Paragraf 4: "City shops do their best to attract them with exciting windows, and special offers."',
      },
      {
        id: "int-r6-sa3",
        type: "short-answer",
        question: "In the West End of London, what things do the shops spend thousands of pounds on?",
        sampleAnswer: "Lights, decorations, and special window displays.",
        reason: 'Paragraf 4: "shops spend thousands of pounds on lights, decorations, and special window displays."',
      },
      {
        id: "int-r6-sa4",
        type: "short-answer",
        question: "What is Europe's biggest toy shop?",
        sampleAnswer: "Hamleys.",
        reason: 'Paragraf 4: "Hamleys, Europe\'s biggest toy shop."',
      },
      {
        id: "int-r6-sa5",
        type: "short-answer",
        question: "When does all the Christmas shopping activity stop?",
        sampleAnswer: "At about 5 p.m. on Christmas Eve.",
        reason: 'Paragraf 5: "at about 5 p.m. on Christmas Eve, it all stops."',
      },
      {
        id: "int-r6-sa6",
        type: "short-answer",
        question: "Why do people rush back to do New Year shopping?",
        sampleAnswer: "Because lots of things are cheaper after Christmas.",
        reason: 'Paragraf 6: "the crowds rush back for a few more days. Lots of things are cheaper now."',
      },
      // Matching Heading (6 paragraphs → multiple-choice)
      {
        id: "int-r6-mh1",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 1: 'Christmas will soon be here again. For Britain's shops… some big shops do half their year's business in those two months.'",
        options: [
          "I. The Calm and Chaos of Christmas for Shop Workers",
          "II. The Rise of Online Shopping",
          "III. How Families Celebrate Christmas at Home",
          "IV. A Busy Time for British Shops",
          "V. The Joy of Christmas Shopping",
          "VI. People Spend Less Money at Christmas",
          "VII. Shops Compete to Attract Customers",
          "VIII. After Christmas: The New Year Sales Begin",
        ],
        correctAnswer: "IV. A Busy Time for British Shops",
        reason: 'Paragraf 1 membahas November & Desember sebagai bulan tersibuk untuk toko-toko Inggris → IV. A Busy Time for British Shops.',
      },
      {
        id: "int-r6-mh2",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 2: 'Yet in 2020, with Covid-19, Christmas shopping will not be the same! … More and more people are now shopping on the internet!'",
        options: [
          "I. The Calm and Chaos of Christmas for Shop Workers",
          "II. The Rise of Online Shopping",
          "III. How Families Celebrate Christmas at Home",
          "IV. A Busy Time for British Shops",
          "V. The Joy of Christmas Shopping",
          "VI. People Spend Less Money at Christmas",
          "VII. Shops Compete to Attract Customers",
          "VIII. After Christmas: The New Year Sales Begin",
        ],
        correctAnswer: "II. The Rise of Online Shopping",
        reason: 'Paragraf 2 membahas meningkatnya belanja online akibat Covid-19 → II. The Rise of Online Shopping.',
      },
      {
        id: "int-r6-mh3",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 3: 'Most people, however, spend their money before Christmas. \"Christmas shopping\" is different from ordinary shopping… they browse and they choose.'",
        options: [
          "I. The Calm and Chaos of Christmas for Shop Workers",
          "II. The Rise of Online Shopping",
          "III. How Families Celebrate Christmas at Home",
          "IV. A Busy Time for British Shops",
          "V. The Joy of Christmas Shopping",
          "VI. People Spend Less Money at Christmas",
          "VII. Shops Compete to Attract Customers",
          "VIII. After Christmas: The New Year Sales Begin",
        ],
        correctAnswer: "V. The Joy of Christmas Shopping",
        reason: 'Paragraf 3 menggambarkan kesenangan berbelanja Natal — melihat-lihat, memilih, menelusuri toko berbeda → V. The Joy of Christmas Shopping.',
      },
      {
        id: "int-r6-mh4",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 4: 'City shops do their best to attract them with exciting windows, and special offers… others come to shop in famous shops like Harrods or Hamleys.'",
        options: [
          "I. The Calm and Chaos of Christmas for Shop Workers",
          "II. The Rise of Online Shopping",
          "III. How Families Celebrate Christmas at Home",
          "IV. A Busy Time for British Shops",
          "V. The Joy of Christmas Shopping",
          "VI. People Spend Less Money at Christmas",
          "VII. Shops Compete to Attract Customers",
          "VIII. After Christmas: The New Year Sales Begin",
        ],
        correctAnswer: "VII. Shops Compete to Attract Customers",
        reason: 'Paragraf 4 membahas upaya toko-toko menarik pembeli dengan lampu, dekorasi, etalase mewah, dan toko-toko terkenal → VII. Shops Compete to Attract Customers.',
      },
      {
        id: "int-r6-mh5",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 5: 'For shop assistants, it is a frantic season… at about 5 p.m. on Christmas Eve, it all stops… Just a few people going home, or singing in the street.'",
        options: [
          "I. The Calm and Chaos of Christmas for Shop Workers",
          "II. The Rise of Online Shopping",
          "III. How Families Celebrate Christmas at Home",
          "IV. A Busy Time for British Shops",
          "V. The Joy of Christmas Shopping",
          "VI. People Spend Less Money at Christmas",
          "VII. Shops Compete to Attract Customers",
          "VIII. After Christmas: The New Year Sales Begin",
        ],
        correctAnswer: "I. The Calm and Chaos of Christmas for Shop Workers",
        reason: 'Paragraf 5 menggambarkan kesibukan pramuniaga (frantic) hingga ketenangan tiba-tiba setelah Malam Natal → I. The Calm and Chaos of Christmas for Shop Workers.',
      },
      {
        id: "int-r6-mh6",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 6: 'Christmas shopping is over again until next October or November… the crowds rush back for a few more days. Lots of things are cheaper now.'",
        options: [
          "I. The Calm and Chaos of Christmas for Shop Workers",
          "II. The Rise of Online Shopping",
          "III. How Families Celebrate Christmas at Home",
          "IV. A Busy Time for British Shops",
          "V. The Joy of Christmas Shopping",
          "VI. People Spend Less Money at Christmas",
          "VII. Shops Compete to Attract Customers",
          "VIII. After Christmas: The New Year Sales Begin",
        ],
        correctAnswer: "VIII. After Christmas: The New Year Sales Begin",
        reason: 'Paragraf 6 membahas belanja setelah Natal — New Year sales dimulai bahkan sehari setelah Natal → VIII. After Christmas: The New Year Sales Begin.',
      },
    ],
  },

  // ── Day 7: The Story of Blue Jeans ───────────────────────────────────────────
  {
    id: "int-reading-7",
    track: "reading",
    day: 7,
    tutor: "Ms. Siska",
    title: "The Story of Blue Jeans",
    subtitle: "From canvas trousers in San Francisco to the world's favourite fashion item",
    overview:
      "Teks reading tentang sejarah blue jeans: dari Levi Strauss di San Francisco tahun 1853, penemuan denim dari Perancis, penambahan rivet logam, hingga jeans menjadi simbol budaya global.",
    passage: [
      "Jeans were the classic clothes of the American West. In 1853, a young tailor from Germany, called Levi Strauss, began working in San Francisco. Levi sold thick canvas to miners; the miners used the canvas to make tents.",
      "(Jeans adalah pakaian klasik American West. Pada tahun 1853, seorang penjahit muda dari Jerman bernama Levi Strauss mulai bekerja di San Francisco. Levi menjual kanvas tebal kepada para penambang; para penambang menggunakan kanvas tersebut untuk membuat tenda.)",
      "One day, a miner told Levi that he could not find trousers that were strong enough for work in the gold mines. Levi decided to make some trousers out of canvas. Very soon, he had sold all the canvas trousers he had made. They were just what miners wanted.",
      "(Suatu hari, seorang penambang memberitahu Levi bahwa dia tidak bisa menemukan celana yang cukup kuat untuk bekerja di tambang emas. Levi memutuskan untuk membuat beberapa celana dari kanvas. Tidak lama kemudian, dia telah menjual semua celana kanvas yang dibuatnya. Itulah yang diinginkan para penambang.)",
      "However, the canvas was rather heavy and stiff. Levi therefore began to look for a different textile; soon he found a heavy textile from France: it was called serge de Nîmes. Americans just called this de Nîmes, and this name soon got reduced to denim.",
      "(Namun, kanvas tersebut cukup berat dan kaku. Levi kemudian mulai mencari tekstil yang berbeda; segera dia menemukan tekstil berat dari Perancis: disebut serge de Nîmes. Orang Amerika hanya menyebutnya de Nîmes, dan nama ini segera disingkat menjadi denim.)",
      "Denim was a bit lighter than canvas, but it was very strong; it was ideal for miners. However, original denim was almost white, and miners did not like the colour! Their denim trousers got dirty as soon as they began working. Levi Strauss therefore decided to use coloured denim, and he chose dark blue. In 1873, he began to make denim trousers with metal rivets to make them stronger. This was a radical new idea: \"Blue jeans\" had arrived!",
      "(Denim sedikit lebih ringan dari kanvas, tetapi sangat kuat; ideal untuk para penambang. Namun, denim asli hampir berwarna putih, dan para penambang tidak menyukai warnanya! Celana denim mereka kotor segera setelah mereka mulai bekerja. Levi Strauss kemudian memutuskan untuk menggunakan denim berwarna, dan dia memilih biru tua. Pada tahun 1873, dia mulai membuat celana denim dengan paku keling logam untuk membuatnya lebih kuat. Ini adalah ide baru yang revolusioner: \"Blue jeans\" telah lahir!)",
      "Levi's jeans were so popular that his company got bigger and bigger; soon, other firms were making blue jeans too. Miners liked them, but so did cowboys and other working men. Blue jeans became classic American working trousers.",
      "(Jeans Levi sangat populer sehingga perusahaannya semakin besar; segera, perusahaan lain juga mulai membuat blue jeans. Para penambang menyukainya, begitu juga dengan para koboi dan pekerja lainnya. Blue jeans menjadi celana kerja klasik Amerika.)",
      "After the Second World War, jeans became popular all over the world. Today, blue jeans are made all over the world – most of them in Asia. Very few jeans are now made in the USA, because of the cost; but it is still possible to buy blue jeans that are made in San Francisco if you have a lot of money to spend.",
      "(Setelah Perang Dunia Kedua, jeans menjadi populer di seluruh dunia. Saat ini, blue jeans dibuat di seluruh dunia – sebagian besar di Asia. Sangat sedikit jeans yang sekarang dibuat di AS, karena biaya; tetapi masih mungkin untuk membeli blue jeans yang dibuat di San Francisco jika Anda memiliki banyak uang untuk dibelanjakan.)",
      "Today there are hundreds of different brands of jeans. Many top fashion brands, like Armani or Benetton, make their own blue jeans. But for real authentic jeans, Levi's are still the most popular brand.",
      "(Saat ini ada ratusan merek jeans yang berbeda. Banyak merek fashion terkemuka, seperti Armani atau Benetton, membuat blue jeans mereka sendiri. Tetapi untuk jeans yang benar-benar autentik, Levi's masih menjadi merek yang paling populer.)",
      "In America, everyone wears jeans as leisure wear. Some people wear jeans all the time, even for work. But Americans are perhaps less formal than other nations. At the \"G7\" summit in Denver, in 1997, American President Bill Clinton gave all the participants a pair of jeans, for a \"Western evening\". Tony Blair, the British Prime Minister, put them on; but other European leaders, including Chancellor Kohl and Jacques Chirac, the President of France, refused. Some people still think that jeans are not respectable clothes! Not the young! Jeans are now the international uniform worn by young people. Why? That is a good question!",
      "(Di Amerika, semua orang memakai jeans sebagai pakaian santai. Beberapa orang memakai jeans setiap saat, bahkan untuk bekerja. Tetapi orang Amerika mungkin kurang formal dibandingkan bangsa lain. Pada pertemuan puncak \"G7\" di Denver tahun 1997, Presiden Amerika Bill Clinton memberikan sepasang jeans kepada semua peserta, untuk \"Western evening\". Tony Blair, Perdana Menteri Inggris, memakainya; tetapi pemimpin Eropa lainnya, termasuk Kanselir Kohl dan Jacques Chirac, Presiden Perancis, menolak. Beberapa orang masih berpikir bahwa jeans bukan pakaian yang terhormat! Tidak bagi kaum muda! Jeans kini menjadi seragam internasional yang dikenakan oleh kaum muda. Mengapa? Itu adalah pertanyaan yang bagus!)",
    ],
    materialSections: [
      {
        title: "Key Vocabulary",
        points: [
          "canvas (n) — kain kanvas tebal | bahan pertama yang dipakai Levi",
          "denim (n) — kain denim; berasal dari 'serge de Nîmes' (Perancis)",
          "rivet (n) — paku keling logam | membuat celana lebih kuat",
          "radical (adj) — revolusioner, drastis | 'a radical new idea'",
          "authentic (adj) — autentik, asli | 'real authentic jeans'",
          "leisure wear (n) — pakaian santai | 'everyone wears jeans as leisure wear'",
          "respectable (adj) — terhormat, pantas dipakai | 'jeans are not respectable clothes'",
          "tailor (n) — penjahit | 'a young tailor from Germany'",
          "brand (n) — merek | 'hundreds of different brands of jeans'",
        ],
      },
      {
        title: "Timeline — History of Blue Jeans",
        points: [
          "🗓️ 1853 — Levi Strauss mulai bekerja di San Francisco, menjual kanvas ke penambang.",
          "🗓️ ~1853 — Seorang penambang meminta celana yang kuat → Levi membuat celana kanvas.",
          "🗓️ Sekitar 1860-an — Levi menemukan 'serge de Nîmes' (denim) dari Perancis.",
          "🗓️ 1873 — Levi membuat celana denim biru tua dengan paku keling logam → Blue jeans lahir!",
          "🗓️ Pasca WWII — Jeans menjadi populer di seluruh dunia.",
          "🗓️ Saat ini — Dibuat di Asia, ratusan merek, tapi Levi's tetap yang paling ikonik.",
        ],
      },
      {
        title: "Matching Heading Strategy",
        points: [
          "📌 Matching Heading = cocokkan judul dengan paragraf yang paling sesuai.",
          "⚡ Baca keseluruhan paragraf, lalu tentukan TEMA UTAMA-nya.",
          "⚡ Pilih heading yang mencakup keseluruhan isi, bukan hanya satu detail.",
          "⚡ Jika ada pilihan yang mirip, cari kata kunci pembeda.",
          "⚡ Ada lebih banyak heading daripada paragraf — ada heading yang tidak dipakai.",
        ],
      },
    ],
    exercises: [
      // Matching Heading (8 paragraphs)
      {
        id: "int-r7-mh1",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 1: 'Jeans were the classic clothes of the American West. In 1853, a young tailor from Germany, called Levi Strauss, began working in San Francisco. Levi sold thick canvas to miners; the miners used the canvas to make tents.'",
        options: [
          "I. The birth of denim and its name",
          "II. A problem leads to an invention",
          "III. The world's love for jeans after the war",
          "V. The introduction of the first blue jeans",
          "VII. Levi Strauss's first business in America",
          "VIII. Jeans as a symbol of American culture",
          "X. A disagreement about wearing jeans",
          "XI. The continuing success of Levi's",
        ],
        correctAnswer: "VII. Levi Strauss's first business in America",
        reason: 'Paragraf 1 memperkenalkan Levi Strauss dan bisnis pertamanya menjual kanvas di San Francisco → VII. Levi Strauss\'s first business in America.',
      },
      {
        id: "int-r7-mh2",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 2: 'One day, a miner told Levi that he could not find trousers that were strong enough… Levi decided to make some trousers out of canvas. Very soon, he had sold all the canvas trousers he had made.'",
        options: [
          "I. The birth of denim and its name",
          "II. A problem leads to an invention",
          "III. The world's love for jeans after the war",
          "V. The introduction of the first blue jeans",
          "VII. Levi Strauss's first business in America",
          "VIII. Jeans as a symbol of American culture",
          "X. A disagreement about wearing jeans",
          "XI. The continuing success of Levi's",
        ],
        correctAnswer: "II. A problem leads to an invention",
        reason: 'Paragraf 2: masalah (tidak ada celana kuat) → solusi (Levi membuat celana kanvas) → II. A problem leads to an invention.',
      },
      {
        id: "int-r7-mh3",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 3: 'However, the canvas was rather heavy and stiff. Levi therefore began to look for a different textile; soon he found a heavy textile from France: it was called serge de Nîmes… this name soon got reduced to denim.'",
        options: [
          "I. The birth of denim and its name",
          "II. A problem leads to an invention",
          "III. The world's love for jeans after the war",
          "V. The introduction of the first blue jeans",
          "VII. Levi Strauss's first business in America",
          "VIII. Jeans as a symbol of American culture",
          "X. A disagreement about wearing jeans",
          "XI. The continuing success of Levi's",
        ],
        correctAnswer: "I. The birth of denim and its name",
        reason: 'Paragraf 3 menjelaskan asal-usul bahan denim dari Perancis (serge de Nîmes → denim) → I. The birth of denim and its name.',
      },
      {
        id: "int-r7-mh4",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 4: 'Denim was a bit lighter than canvas, but it was very strong… he chose dark blue. In 1873, he began to make denim trousers with metal rivets… \"Blue jeans\" had arrived!'",
        options: [
          "I. The birth of denim and its name",
          "II. A problem leads to an invention",
          "III. The world's love for jeans after the war",
          "V. The introduction of the first blue jeans",
          "VII. Levi Strauss's first business in America",
          "VIII. Jeans as a symbol of American culture",
          "X. A disagreement about wearing jeans",
          "XI. The continuing success of Levi's",
        ],
        correctAnswer: "V. The introduction of the first blue jeans",
        reason: 'Paragraf 4 menceritakan lahirnya blue jeans biru tua dengan rivet logam pada 1873 → V. The introduction of the first blue jeans.',
      },
      {
        id: "int-r7-mh5",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 5: 'Levi's jeans were so popular that his company got bigger and bigger; soon, other firms were making blue jeans too. Miners liked them, but so did cowboys and other working men.'",
        options: [
          "I. The birth of denim and its name",
          "II. A problem leads to an invention",
          "III. The world's love for jeans after the war",
          "V. The introduction of the first blue jeans",
          "VI. The modern variety of jeans brands",
          "VIII. Jeans as a symbol of American culture",
          "X. A disagreement about wearing jeans",
          "XI. The continuing success of Levi's",
        ],
        correctAnswer: "VIII. Jeans as a symbol of American culture",
        reason: 'Paragraf 5 menggambarkan jeans yang populer di kalangan penambang, koboi, dan pekerja Amerika → VIII. Jeans as a symbol of American culture.',
      },
      {
        id: "int-r7-mh6",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 6: 'After the Second World War, jeans became popular all over the world. Today, blue jeans are made all over the world – most of them in Asia.'",
        options: [
          "I. The birth of denim and its name",
          "II. A problem leads to an invention",
          "III. The world's love for jeans after the war",
          "V. The introduction of the first blue jeans",
          "VI. The modern variety of jeans brands",
          "VIII. Jeans as a symbol of American culture",
          "X. A disagreement about wearing jeans",
          "XI. The continuing success of Levi's",
        ],
        correctAnswer: "III. The world's love for jeans after the war",
        reason: 'Paragraf 6 membahas popularitas global jeans setelah WWII dan produksinya di Asia → III. The world\'s love for jeans after the war.',
      },
      {
        id: "int-r7-mh7",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 7: 'Today there are hundreds of different brands of jeans. Many top fashion brands, like Armani or Benetton, make their own blue jeans. But for real authentic jeans, Levi's are still the most popular brand.'",
        options: [
          "I. The birth of denim and its name",
          "II. A problem leads to an invention",
          "III. The world's love for jeans after the war",
          "V. The introduction of the first blue jeans",
          "VI. The modern variety of jeans brands",
          "VIII. Jeans as a symbol of American culture",
          "X. A disagreement about wearing jeans",
          "XI. The continuing success of Levi's",
        ],
        correctAnswer: "VI. The modern variety of jeans brands",
        reason: 'Paragraf 7 membahas ratusan merek jeans modern, termasuk Armani dan Benetton → VI. The modern variety of jeans brands.',
      },
      {
        id: "int-r7-mh8",
        type: "multiple-choice",
        question: "MATCHING HEADING — Paragraph 8: 'In America, everyone wears jeans as leisure wear… At the \"G7\" summit in Denver, in 1997, American President Bill Clinton gave all the participants a pair of jeans… other European leaders… refused.'",
        options: [
          "I. The birth of denim and its name",
          "II. A problem leads to an invention",
          "III. The world's love for jeans after the war",
          "V. The introduction of the first blue jeans",
          "VI. The modern variety of jeans brands",
          "VIII. Jeans as a symbol of American culture",
          "X. A disagreement about wearing jeans",
          "XI. The continuing success of Levi's",
        ],
        correctAnswer: "X. A disagreement about wearing jeans",
        reason: 'Paragraf 8 menceritakan KTT G7 di mana beberapa pemimpin Eropa menolak memakai jeans → X. A disagreement about wearing jeans.',
      },
      // True / False / Not Given (7 questions)
      {
        id: "int-r7-tfng1",
        type: "true-false-not-given",
        question: "Levi Strauss originally came to America to look for gold in California.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason: 'NOT GIVEN — Teks hanya menyebutkan bahwa Levi "began working in San Francisco" menjual kanvas. Teks tidak menyebutkan alasan awalnya datang ke Amerika.',
      },
      {
        id: "int-r7-tfng2",
        type: "true-false-not-given",
        question: "The first trousers Levi made were made from a material used for tents.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 1: "Levi sold thick canvas to miners; the miners used the canvas to make tents." Paragraf 2: "Levi decided to make some trousers out of canvas." Kanvas yang sama digunakan untuk tenda dan celana pertama.',
      },
      {
        id: "int-r7-tfng3",
        type: "true-false-not-given",
        question: "Denim was first produced in Italy and exported to the United States.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 3: "he found a heavy textile from France: it was called serge de Nîmes." Denim berasal dari Perancis, bukan Italia.',
      },
      {
        id: "int-r7-tfng4",
        type: "true-false-not-given",
        question: "Levi Strauss was the first person to add metal rivets to denim trousers.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 4: "In 1873, he began to make denim trousers with metal rivets to make them stronger. This was a radical new idea." Kata "radical new idea" menunjukkan ini adalah hal baru yang dilakukan pertama kali oleh Levi.',
      },
      {
        id: "int-r7-tfng5",
        type: "true-false-not-given",
        question: "After the Second World War, jeans were mainly produced in America.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 6: "Today, blue jeans are made all over the world – most of them in Asia. Very few jeans are now made in the USA, because of the cost." Jeans justru sebagian besar diproduksi di Asia.',
      },
      {
        id: "int-r7-tfng6",
        type: "true-false-not-given",
        question: "Today, Levi's jeans are no longer considered fashionable.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 7: "for real authentic jeans, Levi\'s are still the most popular brand." Levi\'s masih dianggap merek yang paling populer.',
      },
      {
        id: "int-r7-tfng7",
        type: "true-false-not-given",
        question: "Some world leaders refused to wear jeans because they thought they were too casual.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 8: "other European leaders…refused. Some people still think that jeans are not respectable clothes!" Pemimpin Eropa menolak karena jeans dianggap tidak terhormat/terlalu santai.',
      },
    ],
  },

  // ── Day 8: The Story of BBC ───────────────────────────────────────────────────
  {
    id: "int-reading-8",
    track: "reading",
    day: 8,
    tutor: "Ms. Siska",
    title: "The Story of BBC",
    subtitle: "From the world's first TV service to one of Britain's most famous institutions",
    overview:
      "Teks reading tentang sejarah BBC: berdiri tahun 1922, menjadi layanan publik yang independen, pelopor televisi dunia tahun 1936, penghentian siaran saat WWII, dan perannya sebagai produser audio-visual terbesar di Eropa.",
    passage: [
      "The British Broadcasting Company was established in 1922. Four years later, it changed its name to British Broadcasting Corporation, better known as the BBC, and that is how it has remained ever since.",
      "(British Broadcasting Company didirikan pada tahun 1922. Empat tahun kemudian, namanya diubah menjadi British Broadcasting Corporation, yang lebih dikenal sebagai BBC, dan begitulah nama itu tetap digunakan hingga sekarang.)",
      "It was not the world's first radio station. There had already been public radio stations in Britain before 1922, and in other countries, like Russia and in America. In the Soviet Union, radio was owned, operated and tightly controlled by the state. In the USA it was a great new adventure for free enterprise. With its new idea of public service broadcasting, the British government chose the middle road.",
      "(BBC bukan stasiun radio pertama di dunia. Sudah ada stasiun radio publik di Inggris sebelum tahun 1922, dan di negara-negara lain, seperti Rusia dan Amerika. Di Uni Soviet, radio dimiliki, dioperasikan, dan dikontrol ketat oleh negara. Di AS, radio merupakan petualangan baru yang luar biasa untuk wirausaha bebas. Dengan ide baru penyiaran layanan publik, pemerintah Inggris memilih jalan tengah.)",
      "From the beginning the BBC was a public service radio, but also an independent operator. Except during the war years, it has never been controlled by the government. On the contrary, several British government ministers have complained, over the years, that the BBC was biased against them!",
      "(Sejak awal, BBC adalah radio layanan publik, tetapi juga operator independen. Kecuali selama tahun-tahun perang, BBC tidak pernah dikendalikan oleh pemerintah. Sebaliknya, beberapa menteri pemerintah Inggris telah mengeluh, selama bertahun-tahun, bahwa BBC berpihak melawan mereka!)",
      "In the early days of BBC radio, there was not a lot of news on the radio. There were music, drama, discussions and children's programmes; but news was not broadcast until after 7 p.m., to avoid competition with the newspapers!",
      "(Pada masa awal radio BBC, tidak banyak berita di radio. Ada musik, drama, diskusi, dan program anak-anak; tetapi berita tidak disiarkan hingga setelah pukul 19.00, untuk menghindari persaingan dengan surat kabar!)",
      "In 1936 the BBC began the world's first television service. Only a few thousand people in the London area could receive those first flickering images, which were broadcast using a system of just 204 lines. Today we have 625 lines on ordinary television, and even more HDTV.",
      "(Pada tahun 1936, BBC memulai layanan televisi pertama di dunia. Hanya beberapa ribu orang di area London yang bisa menerima gambar-gambar berkedip pertama itu, yang disiarkan menggunakan sistem hanya 204 garis. Saat ini kita memiliki 625 garis pada televisi biasa, dan bahkan lebih banyak untuk HDTV.)",
      "Nevertheless, people liked what they saw, and as the number of transmitters increased, more and more people went out to buy new television sets.",
      "(Namun demikian, orang-orang menyukai apa yang mereka lihat, dan seiring bertambahnya jumlah pemancar, semakin banyak orang keluar untuk membeli pesawat televisi baru.)",
      "In 1937 tennis was broadcast from Wimbledon for the first time. Then in 1938, football's Cup Final could be seen, live, by hundreds of thousands of people, for the first time ever. Yet, on September 1st, 1939, in the middle of a Mickey Mouse cartoon, BBC TV stopped broadcasting. The Second World War had begun. It was not until June 8th 1946, on the day of the great Victory Parade, that BBC television started again.",
      "(Pada tahun 1937, tenis disiarkan dari Wimbledon untuk pertama kalinya. Kemudian pada tahun 1938, Final Piala sepak bola dapat disaksikan secara langsung oleh ratusan ribu orang, untuk pertama kalinya. Namun, pada tanggal 1 September 1939, di tengah-tengah kartun Mickey Mouse, BBC TV berhenti mengudara. Perang Dunia Kedua telah dimulai. Baru pada tanggal 8 Juni 1946, pada hari parade kemenangan besar, televisi BBC mulai mengudara lagi.)",
      "Since then, the BBC has become one of Britain's most famous institutions. Today it has several national television channels, lots of radio channels and a growing number of international services. It also has a very popular internet site, with news and information from Britain and around the world. As far as programme production is concerned, the BBC is Europe's biggest producer of audio-visual material. In international competitions, the BBC regularly wins more prizes than other broadcasters.",
      "(Sejak saat itu, BBC telah menjadi salah satu institusi paling terkenal di Inggris. Saat ini BBC memiliki beberapa saluran televisi nasional, banyak saluran radio, dan jumlah layanan internasional yang terus bertambah. BBC juga memiliki situs internet yang sangat populer, dengan berita dan informasi dari Inggris dan seluruh dunia. Sejauh menyangkut produksi program, BBC adalah produsen materi audio-visual terbesar di Eropa. Dalam kompetisi internasional, BBC secara teratur memenangkan lebih banyak hadiah daripada penyiar lainnya.)",
      "In tomorrow's world, communications and the media will become more and more important. With almost 100 years of experience, the BBC is determined to remain one of the world's major players.",
      "(Di dunia masa depan, komunikasi dan media akan menjadi semakin penting. Dengan hampir 100 tahun pengalaman, BBC bertekad untuk tetap menjadi salah satu pemain utama dunia.)",
    ],
    materialSections: [
      {
        title: "Key Vocabulary",
        points: [
          "established (v) — didirikan | 'was established in 1922'",
          "corporation (n) — korporasi/badan usaha besar | 'British Broadcasting Corporation'",
          "independent (adj) — mandiri, tidak bergantung | 'an independent operator'",
          "biased (adj) — berpihak, tidak netral | 'the BBC was biased against them'",
          "flickering (adj) — berkedip-kedip | 'those first flickering images'",
          "transmitters (n) — pemancar (siaran) | 'the number of transmitters increased'",
          "institution (n) — institusi, lembaga penting | 'one of Britain's most famous institutions'",
          "audio-visual (adj) — audio-visual (suara & gambar) | 'Europe's biggest producer of audio-visual material'",
          "determined (adj) — bertekad, penuh tekad | 'the BBC is determined to remain'",
        ],
      },
      {
        title: "BBC Timeline",
        points: [
          "🗓️ 1922 — British Broadcasting Company didirikan.",
          "🗓️ 1926 — Berganti nama menjadi BBC (Corporation).",
          "🗓️ 1936 — Memulai layanan televisi pertama di dunia (204 garis, hanya area London).",
          "🗓️ 1937 — Siaran tenis pertama dari Wimbledon.",
          "🗓️ 1938 — Siaran langsung pertama Final Piala sepak bola.",
          "🗓️ 1 September 1939 — BBC TV berhenti siaran (WWII dimulai).",
          "🗓️ 8 Juni 1946 — BBC TV kembali mengudara (Victory Parade).",
          "🗓️ Sekarang — Produser audio-visual terbesar di Eropa.",
        ],
      },
      {
        title: "Reading Strategy: Short Answer & True/False/Not Given",
        points: [
          "📌 Short Answer — Cari informasi spesifik dalam teks. Jawab singkat sesuai teks.",
          "📌 True/False/Not Given — Bandingkan pernyataan dengan teks secara hati-hati.",
          "⚡ FALSE hanya jika teks menyatakan sesuatu yang BERLAWANAN.",
          "⚡ NOT GIVEN jika teks tidak menyebut sama sekali (jangan menebak).",
          "⚡ Perhatikan kata-kata pengubah makna: 'only', 'never', 'always', 'all'.",
        ],
      },
    ],
    exercises: [
      // Short Answer (5 questions)
      {
        id: "int-r8-sa1",
        type: "short-answer",
        question: "When did the British Broadcasting Company change its name?",
        sampleAnswer: "Four years after it was established (in 1926).",
        reason: 'Paragraf 1: "Four years later, it changed its name to British Broadcasting Corporation."',
      },
      {
        id: "int-r8-sa2",
        type: "short-answer",
        question: "Why was the news broadcast only after 7 p.m. in the early days of BBC radio?",
        sampleAnswer: "To avoid competition with the newspapers.",
        reason: 'Paragraf 4: "news was not broadcast until after 7 p.m., to avoid competition with the newspapers!"',
      },
      {
        id: "int-r8-sa3",
        type: "short-answer",
        question: "When did the BBC begin the world's first television service?",
        sampleAnswer: "In 1936.",
        reason: 'Paragraf 5: "In 1936 the BBC began the world\'s first television service."',
      },
      {
        id: "int-r8-sa4",
        type: "short-answer",
        question: "How many lines were used for broadcasting in the early days (mid-1900s)?",
        sampleAnswer: "204 lines.",
        reason: 'Paragraf 5: "broadcast using a system of just 204 lines."',
      },
      {
        id: "int-r8-sa5",
        type: "short-answer",
        question: "When was the first time the BBC broadcast a sporting event?",
        sampleAnswer: "In 1937, when tennis was broadcast from Wimbledon.",
        reason: 'Paragraf 7: "In 1937 tennis was broadcast from Wimbledon for the first time."',
      },
      // True / False / Not Given (10 questions)
      {
        id: "int-r8-tfng1",
        type: "true-false-not-given",
        question: "The BBC pioneered global radio broadcasting as the first station of its kind.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 2: "It was not the world\'s first radio station. There had already been public radio stations in Britain before 1922, and in other countries."',
      },
      {
        id: "int-r8-tfng2",
        type: "true-false-not-given",
        question: "The British Broadcasting Company adopted its current name, the British Broadcasting Corporation, four years after its establishment.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 1: "Four years later, it changed its name to British Broadcasting Corporation." (Berdiri 1922, berganti nama 1926.)',
      },
      {
        id: "int-r8-tfng3",
        type: "true-false-not-given",
        question: "In the Soviet Union, radio broadcasting was entirely privately owned.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 2: "In the Soviet Union, radio was owned, operated and tightly controlled by the state." — bukan swasta, melainkan milik negara.',
      },
      {
        id: "int-r8-tfng4",
        type: "true-false-not-given",
        question: "The BBC has always functioned as a government-controlled institution.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 3: "Except during the war years, it has never been controlled by the government." BBC adalah operator independen.',
      },
      {
        id: "int-r8-tfng5",
        type: "true-false-not-given",
        question: "During its early years, the BBC avoided daytime news bulletins to prevent rivalry with the press.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 4: "news was not broadcast until after 7 p.m., to avoid competition with the newspapers!" Berita hanya setelah pukul 19.00.',
      },
      {
        id: "int-r8-tfng6",
        type: "true-false-not-given",
        question: "The BBC's first television transmissions in 1936 could be viewed nationwide.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 5: "Only a few thousand people in the London area could receive those first flickering images." Hanya di area London, bukan seluruh Inggris.',
      },
      {
        id: "int-r8-tfng7",
        type: "true-false-not-given",
        question: "Following World War II, all BBC radio and television broadcasts were immediately suspended.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Teks hanya menyebutkan BBC TV berhenti (1939), bukan radio. BBC TV kembali mengudara 1946. Tidak ada informasi bahwa radio juga berhenti.',
      },
      {
        id: "int-r8-tfng8",
        type: "true-false-not-given",
        question: "BBC television services were resumed in 1946 to mark the Victory Parade.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 7: "It was not until June 8th 1946, on the day of the great Victory Parade, that BBC television started again."',
      },
      {
        id: "int-r8-tfng9",
        type: "true-false-not-given",
        question: "The BBC is Europe's leading exporter of audio-visual productions.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason: 'NOT GIVEN — Paragraf 8 menyatakan BBC adalah "Europe\'s biggest producer of audio-visual material", bukan exporter. Teks tidak menyebutkan tentang ekspor.',
      },
      {
        id: "int-r8-tfng10",
        type: "true-false-not-given",
        question: "Due to global competition, the BBC intends to withdraw from international media activity.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 9 (penutup): "the BBC is determined to remain one of the world\'s major players." BBC justru bertekad untuk TETAP menjadi pemain utama global.',
      },
    ],
  },

  // ── Day 9: Causes of Floods ───────────────────────────────────────────────────
  {
    id: "int-reading-9",
    track: "reading",
    day: 9,
    tutor: "Ms. Siska",
    title: "Causes of Floods",
    subtitle: "Understanding the natural and human factors that trigger devastating floods",
    overview:
      "Teks reading tentang penyebab banjir: salju yang mencair, sungai yang tertutup es membentuk bendungan alami, serta jebolnya bendungan buatan manusia — dan mengapa ilmuwan sulit memprediksi banjir dengan tepat.",
    passage: [
      "Floods are second only to fire as the most common of all natural disasters. They occur almost everywhere in the world, resulting in widespread damage and even loss of life. Consequently, scientists have long tried to perfect their ability to predict floods. So far, the best that scientists can do is recognize the potential for flooding in certain conditions. There are a number of conditions, from deep snow on the ground to human error, that cause flooding.",
      "(Banjir hanya kalah dari kebakaran sebagai bencana alam yang paling umum. Banjir terjadi hampir di seluruh dunia, mengakibatkan kerusakan yang meluas bahkan hilangnya nyawa. Akibatnya, para ilmuwan sudah lama berusaha menyempurnakan kemampuan mereka untuk memprediksi banjir. Sejauh ini, yang terbaik yang dapat dilakukan ilmuwan adalah mengenali potensi banjir dalam kondisi tertentu. Ada sejumlah kondisi, dari salju tebal di tanah hingga kesalahan manusia, yang menyebabkan banjir.)",
      "When deep snow melts it creates a large amount of water. Although deep snow alone rarely causes floods, when it occurs together with heavy rain and sudden warmer weather it can lead to serious flooding. If there is a fast snow melt, the soil cannot absorb the water, especially if the ground is still frozen. Frozen ground or ground that is very wet cannot absorb water quickly. Melting snow also contributes to high water levels in rivers and streams. Whenever rivers are already at their full capacity of water, heavy rains will result in the rivers overflowing and flooding the surrounding land.",
      "(Ketika salju tebal mencair, ia menciptakan sejumlah besar air. Meskipun salju tebal sendiri jarang menyebabkan banjir, ketika terjadi bersamaan dengan hujan lebat dan cuaca yang tiba-tiba menghangat, hal itu dapat menyebabkan banjir yang serius. Jika salju mencair dengan cepat, tanah tidak dapat menyerap air, terutama jika tanah masih membeku. Tanah yang membeku atau tanah yang sangat basah tidak dapat menyerap air dengan cepat. Salju yang mencair juga berkontribusi pada tingginya permukaan air di sungai dan anak sungai. Setiap kali sungai sudah pada kapasitas penuh air, hujan lebat akan mengakibatkan sungai meluap dan membanjiri tanah sekitarnya.)",
      "Rivers that are covered in ice can also lead to flooding. When ice begins to melt, the surface of the ice breaks into large pieces. These pieces of ice move and float down the river. They can form a dam in the river, causing the water behind the dam to rise and flood the land upstream. If the dam breaks suddenly, then the large amount of water held behind the dam can flood the areas downstream too.",
      "(Sungai yang tertutup es juga dapat menyebabkan banjir. Ketika es mulai mencair, permukaan es pecah menjadi potongan-potongan besar. Potongan-potongan es ini bergerak dan mengapung di sungai. Mereka dapat membentuk bendungan di sungai, menyebabkan air di belakang bendungan naik dan membanjiri tanah di bagian hulu. Jika bendungan itu tiba-tiba pecah, maka sejumlah besar air yang tertahan di belakang bendungan dapat membanjiri daerah di hilir juga.)",
      "Broken ice dams are not the only dam problems that can cause flooding. When a large human-made dam breaks or fails to hold the water behind it, the results can be devastating. This is similar to the sudden break of an ice dam. Unleashed dam waters can travel tens of kilometres, cover the ground in metres of mud and debris, and drown and crush everything and creature in their path.",
      "(Bendungan es yang pecah bukan satu-satunya masalah bendungan yang dapat menyebabkan banjir. Ketika bendungan besar buatan manusia jebol atau gagal menahan air di belakangnya, hasilnya bisa menghancurkan. Ini mirip dengan pecahnya bendungan es secara tiba-tiba. Air bendungan yang lepas dapat menempuh puluhan kilometer, menutupi tanah dengan lumpur dan puing-puing setebal beberapa meter, serta menenggelamkan dan menghancurkan segalanya di jalannya.)",
      "Although scientists cannot always predict exactly when floods will occur, they do know a great deal about when floods are likely or possible. Deep snow, ice-covered rivers, and weak dams are all strong conditions for potential flooding. Hopefully, this knowledge of why floods happen can help us reduce the damage they cause.",
      "(Meskipun para ilmuwan tidak selalu dapat memprediksi dengan tepat kapan banjir akan terjadi, mereka memang mengetahui banyak tentang kapan banjir kemungkinan akan terjadi. Salju tebal, sungai yang tertutup es, dan bendungan yang lemah semuanya merupakan kondisi kuat untuk potensi banjir. Semoga, pengetahuan tentang mengapa banjir terjadi ini dapat membantu kita mengurangi kerusakan yang ditimbulkannya.)",
    ],
    materialSections: [
      {
        title: "Key Vocabulary (Causes of Floods)",
        points: [
          "widespread (adj) — meluas, tersebar | 'resulting in widespread damage'",
          "absorb (v) — menyerap | 'the soil cannot absorb the water'",
          "capacity (n) — kapasitas, daya tampung | 'rivers are already at their full capacity'",
          "overflow (v) — meluap | 'rivers overflowing and flooding the surrounding land'",
          "upstream / downstream (adv) — hulu / hilir sungai",
          "devastating (adj) — sangat merusak/menghancurkan | 'the results can be devastating'",
          "debris (n) — puing-puing, reruntuhan | 'cover the ground in metres of mud and debris'",
          "unleashed (adj) — yang dilepaskan | 'Unleashed dam waters can travel tens of kilometres'",
          "potential (adj/n) — potensi | 'recognize the potential for flooding'",
        ],
      },
      {
        title: "Three Main Causes of Floods",
        points: [
          "1️⃣ MELTING SNOW — Salju mencair + hujan lebat + cuaca panas tiba-tiba → tanah tidak bisa menyerap → banjir.",
          "2️⃣ ICE DAM — Es di sungai pecah menjadi potongan besar → membentuk bendungan → air meluap ke hulu; jika bendungan pecah → banjir ke hilir.",
          "3️⃣ BROKEN DAM — Bendungan buatan manusia jebol → air menempuh puluhan km, membawa lumpur dan puing.",
        ],
      },
      {
        title: "Reading Strategy: Multiple Choice",
        points: [
          "📌 Baca pertanyaan dulu sebelum membaca teks, lalu cari jawabannya.",
          "⚡ Eliminasi pilihan yang jelas salah terlebih dahulu.",
          "⚡ Hati-hati dengan kata 'NOT', 'ONLY', 'ALWAYS', 'NEVER' — bisa mengubah makna soal.",
          "⚡ Jawaban yang benar biasanya parafrase dari teks, bukan salinan persis.",
        ],
      },
    ],
    exercises: [
      // Passage A: Multiple Choice (10 questions)
      {
        id: "int-r9-mc1",
        type: "multiple-choice",
        question: "PASSAGE A — Which of the following words is NOT a natural disaster?",
        options: ["Flood", "Earthquake", "Epidemic", "Typhoon"],
        correctAnswer: "Epidemic",
        reason: 'Epidemic (wabah penyakit) bukan termasuk bencana alam (natural disaster) — ini adalah bencana kesehatan. Flood, earthquake, dan typhoon semuanya adalah bencana alam.',
      },
      {
        id: "int-r9-mc2",
        type: "multiple-choice",
        question: "PASSAGE A — Which of the following is included as a cause of floods in the reading passage?",
        options: ["Droughts", "Large lakes", "Poorly built roads", "Melting snow"],
        correctAnswer: "Melting snow",
        reason: 'Paragraf 2 teks A: "When deep snow melts it creates a large amount of water… it can lead to serious flooding." Melting snow adalah penyebab banjir yang dibahas.',
      },
      {
        id: "int-r9-mc3",
        type: "multiple-choice",
        question: "PASSAGE A — How does deep snow cause flooding?",
        options: [
          "Melting snow alone causes flooding",
          "Too much rain alone causes flooding",
          "Sudden warm temperatures combined with heavy rains causes flooding",
          "Freezing water alone causes flooding",
        ],
        correctAnswer: "Sudden warm temperatures combined with heavy rains causes flooding",
        reason: 'Paragraf 2 teks A: "when it occurs together with heavy rain and sudden warmer weather it can lead to serious flooding."',
      },
      {
        id: "int-r9-mc4",
        type: "multiple-choice",
        question: "PASSAGE A — A broken human-made dam is compared to what?",
        options: ["A tsunami", "A tidal wave", "A broken ice dam", "Overflowing rivers"],
        correctAnswer: "A broken ice dam",
        reason: 'Paragraf 4 teks A: "When a large human-made dam breaks… This is similar to the sudden break of an ice dam."',
      },
      {
        id: "int-r9-mc5",
        type: "multiple-choice",
        question: "PASSAGE A — Which best describes how a frozen river can cause a flood?",
        options: [
          "The ice in the river melts too quickly and causes a flood",
          "The ice in the river cracks causing the water to overflow",
          "The ice in the river cracks into pieces that eventually create a dam causing the water to overflow",
          "The water behind the ice dam collects and when the dam breaks, it causes flooding upstream only",
        ],
        correctAnswer: "The ice in the river cracks into pieces that eventually create a dam causing the water to overflow",
        reason: 'Paragraf 3 teks A: "the surface of the ice breaks into large pieces… They can form a dam in the river, causing the water behind the dam to rise and flood the land upstream."',
      },
      {
        id: "int-r9-mc6",
        type: "multiple-choice",
        question: "PASSAGE A — How far can water travel when it is unleashed from a broken dam?",
        options: [
          "Less than 10 kilometres",
          "Tens of kilometres",
          "Thousands of kilometres",
          "Tens of thousands of kilometres",
        ],
        correctAnswer: "Tens of kilometres",
        reason: 'Paragraf 4 teks A: "Unleashed dam waters can travel tens of kilometres."',
      },
      {
        id: "int-r9-mc7",
        type: "multiple-choice",
        question: "PASSAGE A — Why does saturated ground contribute to flooding problems?",
        options: [
          "The ground cannot absorb more moisture",
          "The ground is too hard, so the water runs off",
          "The ground is always frozen",
          "It causes ice to form",
        ],
        correctAnswer: "The ground cannot absorb more moisture",
        reason: 'Paragraf 2 teks A: "Frozen ground or ground that is very wet cannot absorb water quickly." Tanah yang sudah jenuh tidak bisa menyerap air lagi.',
      },
      {
        id: "int-r9-mc8",
        type: "multiple-choice",
        question: "PASSAGE A — What kinds of problems can floods cause?",
        options: [
          "Death",
          "Widespread damage",
          "Destruction of plants and animals",
          "All of the above",
        ],
        correctAnswer: "All of the above",
        reason: 'Paragraf 1 teks A: "resulting in widespread damage and even loss of life." Paragraf 4: "drown and crush everything and creature in their path." — semua pilihan termasuk.',
      },
      {
        id: "int-r9-mc9",
        type: "multiple-choice",
        question: "PASSAGE A — What is the most common natural disaster according to the passage?",
        options: ["Flood", "Fire", "Wind damage", "Rain"],
        correctAnswer: "Fire",
        reason: 'Paragraf 1 teks A: "Floods are second only to fire as the most common of all natural disasters." Artinya kebakaran (fire) adalah yang PALING umum, dan banjir ada di posisi kedua.',
      },
      {
        id: "int-r9-mc10",
        type: "multiple-choice",
        question: "PASSAGE A — How does melting snow cause problems related to flooding?",
        options: [
          "It makes the rivers run too fast",
          "It makes the water too cold",
          "It causes pieces of ice to block the river",
          "It makes the level of the river rise",
        ],
        correctAnswer: "It makes the level of the river rise",
        reason: 'Paragraf 2 teks A: "Melting snow also contributes to high water levels in rivers and streams." Salju yang mencair meningkatkan level/ketinggian air sungai.',
      },
    ],
  },

  // ── Day 10: The Hardest Language ─────────────────────────────────────────────
  {
    id: "int-reading-10",
    track: "reading",
    day: 10,
    tutor: "Ms. Siska",
    title: "The Hardest Language",
    subtitle: "Why there is no single answer to which language is the most difficult to learn",
    overview:
      "Teks reading tentang faktor-faktor yang memengaruhi kesulitan belajar bahasa asing: kemiripan dengan bahasa pertama, sistem tulisan, motivasi, guru, dan temuan menarik tentang bahasa Hungaria dan Tabassaran.",
    passage: [
      "People often ask which is the most difficult language to learn, and it is not easy to answer because there are many factors to take into consideration. Firstly, in a first language the differences are unimportant as people learn their mother tongue naturally, so the question of how hard a language is to learn is only relevant when learning a second language.",
      "(Orang-orang sering bertanya bahasa mana yang paling sulit untuk dipelajari, dan tidak mudah untuk menjawabnya karena ada banyak faktor yang perlu dipertimbangkan. Pertama, dalam bahasa pertama perbedaannya tidak penting karena orang mempelajari bahasa ibu mereka secara alami, sehingga pertanyaan tentang seberapa sulit sebuah bahasa untuk dipelajari hanya relevan ketika mempelajari bahasa kedua.)",
      "A native speaker of Spanish, for example, will find Portuguese much easier to learn than a native speaker of Chinese, because Portuguese is very similar to Spanish, while Chinese is very different. The greater the differences between the second language and our first, the harder it will be for most people to learn. Many people answer that Chinese is the hardest language to learn, possibly influenced by the thought of learning the Chinese writing system, and the pronunciation of Chinese does appear to be very difficult for many foreign learners. However, for Japanese speakers, who already use Chinese characters in their own language, learning writing will be less difficult than for speakers of languages using the Roman alphabet.",
      "(Penutur asli bahasa Spanyol, misalnya, akan menemukan bahasa Portugis jauh lebih mudah untuk dipelajari daripada penutur asli bahasa Mandarin, karena bahasa Portugis sangat mirip dengan bahasa Spanyol, sementara bahasa Mandarin sangat berbeda. Semakin besar perbedaan antara bahasa kedua dan bahasa pertama kita, semakin sulit bagi kebanyakan orang untuk mempelajarinya. Banyak orang menjawab bahwa bahasa Mandarin adalah bahasa yang paling sulit dipelajari, mungkin dipengaruhi oleh pemikiran tentang mempelajari sistem tulisan Mandarin, dan pengucapan bahasa Mandarin memang tampak sangat sulit bagi banyak pelajar asing. Namun, bagi penutur bahasa Jepang, yang sudah menggunakan karakter Mandarin dalam bahasa mereka sendiri, belajar menulis akan lebih mudah daripada penutur bahasa yang menggunakan alfabet Romawi.)",
      "Some people seem to learn languages readily, while others find it very difficult. Teachers and the circumstances in which the language is learned also play an important role, as well as each learner's motivation for learning. If people learn a language because they need to use it professionally, they often learn it faster than people studying a language that has no direct use in their day-to-day life.",
      "(Beberapa orang tampak mudah mempelajari bahasa, sementara yang lain merasa sangat sulit. Guru dan keadaan di mana bahasa itu dipelajari juga memainkan peran penting, serta motivasi setiap pelajar untuk belajar. Jika orang mempelajari bahasa karena mereka perlu menggunakannya secara profesional, mereka sering mempelajarinya lebih cepat daripada orang yang mempelajari bahasa yang tidak memiliki kegunaan langsung dalam kehidupan sehari-hari mereka.)",
      "Apparently, British diplomats and other embassy staff have found that the second hardest language is Japanese, but the language that they have found to be the most problematic is Hungarian, which has 35 cases (forms of a noun according to whether it is subject, object, genitive, etc). This does not mean that Hungarian is the hardest language to learn for everyone, but it causes British diplomatic personnel the most difficulty. However, Tabassaran, a Caucasian language, has 48 cases, so it might cause more difficulty if British diplomats had to learn it.",
      "(Rupanya, diplomat Inggris dan staf kedutaan lainnya menemukan bahwa bahasa yang paling sulit kedua adalah bahasa Jepang, tetapi bahasa yang mereka anggap paling bermasalah adalah bahasa Hungaria, yang memiliki 35 kasus (bentuk kata benda menurut apakah itu subjek, objek, genitif, dll). Ini tidak berarti bahwa bahasa Hungaria adalah bahasa yang paling sulit dipelajari bagi semua orang, tetapi bahasa ini menyebabkan kesulitan paling besar bagi personel diplomatik Inggris. Namun, bahasa Tabassaran, sebuah bahasa Kaukasia, memiliki 48 kasus, sehingga mungkin akan menyebabkan lebih banyak kesulitan jika diplomat Inggris harus mempelajarinya.)",
      "Different cultures and individuals from those cultures will find different languages more difficult. In the case of Hungarian for British learners, it is not a question of the writing system, which uses a similar alphabet, but the grammatical complexity, though native speakers of related languages may find it easier, while struggling with languages that the British find relatively easy.",
      "(Budaya yang berbeda dan individu dari budaya tersebut akan menemukan bahasa yang berbeda lebih sulit. Dalam kasus bahasa Hungaria bagi pelajar Inggris, ini bukan soal sistem tulisan, yang menggunakan alfabet yang mirip, tetapi kompleksitas tata bahasa, meskipun penutur asli bahasa yang berkerabat mungkin merasa lebih mudah, sementara kesulitan dengan bahasa yang relatif mudah bagi orang Inggris.)",
      "No language is easy to learn well, though languages which are related to our first language are easier. Learning a completely different writing system is a huge challenge, but that does not necessarily make a language more difficult than another. In the end, it is impossible to say that there is one language that is the most difficult language in the world.",
      "(Tidak ada bahasa yang mudah untuk dikuasai dengan baik, meskipun bahasa yang berkaitan dengan bahasa pertama kita lebih mudah. Mempelajari sistem tulisan yang sama sekali berbeda merupakan tantangan besar, tetapi itu tidak selalu membuat sebuah bahasa lebih sulit dari bahasa lain. Pada akhirnya, tidak mungkin untuk mengatakan bahwa ada satu bahasa yang paling sulit di dunia.)",
    ],
    materialSections: [
      {
        title: "Key Vocabulary",
        points: [
          "factors (n) — faktor-faktor | 'there are many factors to take into consideration'",
          "relevant (adj) — relevan, berkaitan | 'only relevant when learning a second language'",
          "motivation (n) — motivasi | 'each learner's motivation for learning'",
          "professionally (adv) — secara profesional | 'they need to use it professionally'",
          "grammatical complexity (n) — kerumitan tata bahasa | bahasa Hungaria sulit karena ini",
          "cases (n) — kasus (tata bahasa) | Hungarian: 35 cases; Tabassaran: 48 cases",
          "alphabet (n) — alfabet | 'languages using the Roman alphabet'",
          "Caucasian (adj) — Kaukasia (wilayah antara Eropa Timur dan Asia Barat)",
          "diplomatic personnel (n) — staf/personel diplomatik | diplomat dan staf kedutaan",
        ],
      },
      {
        title: "Key Factors in Language Difficulty",
        points: [
          "1️⃣ Kemiripan dengan bahasa pertama — Spanyol → Portugis lebih mudah dari Spanyol → Mandarin.",
          "2️⃣ Sistem tulisan — karakter Mandarin sulit bagi pengguna alfabet Romawi, tapi tidak bagi penutur Jepang.",
          "3️⃣ Tata bahasa — Hungaria (35 cases) dan Tabassaran (48 cases) sangat kompleks.",
          "4️⃣ Guru dan lingkungan belajar — memengaruhi kecepatan belajar.",
          "5️⃣ Motivasi — belajar untuk kebutuhan profesional = lebih cepat.",
          "─────────────────────────────────",
          "🔑 Kesimpulan penulis: Tidak ada satu bahasa yang 'paling sulit' untuk semua orang.",
        ],
      },
      {
        title: "Reading Strategy: True / False / Not Given",
        points: [
          "✅ TRUE — pernyataan sesuai dengan isi teks.",
          "❌ FALSE — pernyataan bertentangan/berlawanan dengan teks.",
          "❓ NOT GIVEN — informasi tidak disebutkan sama sekali dalam teks.",
          "⚡ Jangan gunakan pengetahuan umum — hanya berdasarkan teks.",
          "⚡ NOT GIVEN ≠ False. Jika teks diam tentang suatu hal → NOT GIVEN.",
          "⚡ Kata 'always', 'never', 'only', 'all' sering membuat pernyataan FALSE.",
        ],
      },
    ],
    exercises: [
      {
        id: "int-r10-tfng1",
        type: "true-false-not-given",
        question: "For Japanese learners, Chinese writing is more difficult than for English speakers.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 2: "for Japanese speakers, who already use Chinese characters in their own language, learning writing will be less difficult than for speakers of languages using the Roman alphabet." Bagi penutur Jepang, menulis Mandarin lebih MUDAH, bukan lebih sulit.',
      },
      {
        id: "int-r10-tfng2",
        type: "true-false-not-given",
        question: "People learn their first language without much effort or formal study.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 1: "people learn their mother tongue naturally" — secara alami, tanpa studi formal.',
      },
      {
        id: "int-r10-tfng3",
        type: "true-false-not-given",
        question: "Tabassaran has fewer grammar cases than Hungarian.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 4: "Hungarian, which has 35 cases… Tabassaran, a Caucasian language, has 48 cases." Tabassaran memiliki lebih BANYAK kasus (48 > 35).',
      },
      {
        id: "int-r10-tfng4",
        type: "true-false-not-given",
        question: "Some people seem to find learning a foreign language easier than others.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 3: "Some people seem to learn languages readily, while others find it very difficult."',
      },
      {
        id: "int-r10-tfng5",
        type: "true-false-not-given",
        question: "British diplomats found Hungarian easier to learn than Japanese.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 4: "the second hardest language is Japanese… the most problematic is Hungarian." Hungarian lebih SULIT daripada Japanese bagi diplomat Inggris.',
      },
      {
        id: "int-r10-tfng6",
        type: "true-false-not-given",
        question: "The text suggests that the pronunciation of Chinese is considered difficult for many learners.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 2: "the pronunciation of Chinese does appear to be very difficult for many foreign learners."',
      },
      {
        id: "int-r10-tfng7",
        type: "true-false-not-given",
        question: "Hungarian uses an alphabet that is very different from English.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 5: "it is not a question of the writing system, which uses a similar alphabet." Alfabet Hungaria mirip dengan Inggris.',
      },
      {
        id: "int-r10-tfng8",
        type: "true-false-not-given",
        question: "According to the text, younger learners always learn languages more quickly than adults.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason: 'NOT GIVEN — Teks tidak menyebutkan perbandingan antara pelajar muda dan dewasa sama sekali.',
      },
      {
        id: "int-r10-tfng9",
        type: "true-false-not-given",
        question: "People who study a language for professional reasons usually learn it faster.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 3: "If people learn a language because they need to use it professionally, they often learn it faster."',
      },
      {
        id: "int-r10-tfng10",
        type: "true-false-not-given",
        question: "Chinese is considered the hardest language in the world by everyone.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "False",
        reason: 'FALSE — Paragraf 2 menyatakan "Many people answer that Chinese is the hardest" tetapi bagi penutur Jepang hal itu tidak berlaku. Paragraf 6 menyatakan tidak mungkin ada SATU bahasa paling sulit bagi semua orang.',
      },
      {
        id: "int-r10-tfng11",
        type: "true-false-not-given",
        question: "The difficulty of a second language can depend on how similar it is to a learner's first language.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 2: "The greater the differences between the second language and our first, the harder it will be for most people to learn."',
      },
      {
        id: "int-r10-tfng12",
        type: "true-false-not-given",
        question: "British diplomats are required to learn Tabassaran before being sent abroad.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason: 'NOT GIVEN — Teks hanya menyebut Tabassaran sebagai perbandingan hipotetis ("if British diplomats had to learn it"). Tidak ada kewajiban seperti itu yang disebutkan.',
      },
      {
        id: "int-r10-tfng13",
        type: "true-false-not-given",
        question: "Hungarian is difficult for British people mainly because of its complex grammar.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 5: "it is not a question of the writing system… but the grammatical complexity." Kesulitan utama bahasa Hungaria bagi orang Inggris adalah kompleksitas tata bahasanya.',
      },
      {
        id: "int-r10-tfng14",
        type: "true-false-not-given",
        question: "The author says that no language can be considered the most difficult for all learners.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "True",
        reason: 'TRUE — Paragraf 6: "it is impossible to say that there is one language that is the most difficult language in the world."',
      },
      {
        id: "int-r10-tfng15",
        type: "true-false-not-given",
        question: "The passage claims that people learn languages better if they are taught by native speakers only.",
        options: ["True", "False", "Not Given"],
        correctAnswer: "Not Given",
        reason: 'NOT GIVEN — Teks menyebutkan "teachers" sebagai faktor penting, tetapi tidak menyebutkan apakah guru harus native speakers atau tidak.',
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
      {
        title: "SPEAKING TASK — Describe a Foreign Country",
        points: [
          "Describe a foreign country you would like to visit in the future.",
          "─────────────────────────────",
          "You should say:",
          "1️⃣ What country it is",
          "2️⃣ What you already know about it",
          "3️⃣ Who you would like to go there with",
          "4️⃣ And explain why you would like to visit that country",
          "─────────────────────────────",
          "⏱ Preparation time: 1 minute  |  Speaking time: 1–2 minutes",
          "💡 Tip: gunakan Present tense untuk fakta, Future tense (would like to / want to) untuk rencana.",
        ],
      },
      {
        title: "Contoh Jawaban — Describe a Foreign Country",
        points: [
          "── Point 1: What country it is ──",
          '   "The country I would like to visit in the future is Japan. It is an island country located in East Asia, and it is well known for its unique blend of ancient traditions and modern technology."',
          "── Point 2: What you already know about it ──",
          '   "I already know quite a lot about Japan. I know that it has a very rich culture, including traditional tea ceremonies, beautiful temples, and stunning landscapes like Mount Fuji. Japan is also famous for its delicious food such as sushi, ramen, and takoyaki. Besides that, I have watched many Japanese anime series and films, so I feel like I already have a connection with the country."',
          "── Point 3: Who you would like to go with ──",
          '   "I would like to go there with my best friend because we both share the same interest in Japanese culture and food. I think travelling together would make the experience even more memorable and enjoyable."',
          "── Point 4: Why you would like to visit ──",
          '   "The main reason why I want to visit Japan is because I am deeply fascinated by how the Japanese people manage to preserve their traditional culture while at the same time being one of the most technologically advanced countries in the world. I would love to experience that contrast myself — walking through ancient shrines in Kyoto in the morning and exploring the futuristic city of Tokyo in the evening. I also believe that visiting Japan would broaden my perspective and help me appreciate different cultures more deeply."',
          "─────────────────────────────",
          "📝 Key phrases to use:",
          "   would like to / want to / hope to / plan to + V1",
          "   I already know that... / I have heard that... / As far as I know...",
          "   The main reason is... / One of the reasons why... / That is why...",
          "   I believe that... / I think that... / In my opinion...",
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
      {
        id: "int-sp3-q4",
        type: "task",
        question:
          "SPEAKING TASK: Describe a foreign country you would like to visit in the future.\n\nYou should cover:\n1. What country it is\n2. What you already know about it\n3. Who you would like to go there with\n4. Why you would like to visit that country\n\nPractice speaking for 1–2 minutes. Use the example in the material as a guide, but describe YOUR OWN chosen country.",
        sampleAnswer:
          "Contoh (Japan): 'The country I would like to visit is Japan. I know it is famous for its culture, food like sushi and ramen, and places like Mount Fuji and Tokyo. I would go there with my best friend because we both love Japanese culture. The main reason I want to visit is because I am fascinated by how Japan mixes ancient traditions with modern technology, and I believe it would be an unforgettable experience.'",
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
      {
        title: "SPEAKING TASK — Describe a Useful Job",
        points: [
          "Describe a job that is useful to society.",
          "─────────────────────────────",
          "You should say:",
          "1️⃣ What job it is",
          "2️⃣ How you know about this job",
          "3️⃣ What type of people do this job",
          "4️⃣ And explain why you think this job is useful to society",
          "─────────────────────────────",
          "⏱ Preparation time: 1 minute  |  Speaking time: 1–2 minutes",
          "💡 Tip: gunakan Present tense untuk fakta umum dan pendapat, Simple Past untuk pengalaman pribadi yang membuatmu tahu tentang pekerjaan ini.",
        ],
      },
      {
        title: "Contoh Jawaban — Describe a Useful Job",
        points: [
          "── Point 1: What job it is ──",
          '   "The job I would like to talk about is a doctor. A doctor is a medical professional whose main responsibility is to diagnose illnesses, treat patients, and help people recover from various health conditions."',
          "── Point 2: How you know about this job ──",
          '   "I have known about this job since I was a child because my uncle is a doctor at a public hospital in my city. I used to visit him at the hospital and I was always amazed by how he took care of the patients with so much patience and dedication. Apart from that, I have also learned about this profession from television programmes and health-related books."',
          "── Point 3: What type of people do this job ──",
          '   "In my opinion, people who become doctors are usually very hardworking, disciplined, and compassionate individuals. They need to be patient because they deal with sick people every day, and they must be detail-oriented since a small mistake can have serious consequences. Most doctors spend many years studying at university and continue learning throughout their career to keep up with the latest medical knowledge."',
          "── Point 4: Why this job is useful to society ──",
          '   "I strongly believe that doctors are one of the most important and useful members of society. Without doctors, people would have no one to turn to when they are seriously ill. Doctors save lives every single day, whether it is treating a child with a fever or performing a complex surgery. They also play a key role in preventing diseases by educating the public about healthy lifestyles and vaccinations. On a larger scale, doctors helped the world fight against dangerous pandemics like COVID-19, which showed us just how essential this profession truly is. That is why I think being a doctor is not only a great career but also a noble contribution to humanity."',
          "─────────────────────────────",
          "📝 Key phrases to use:",
          "   In my opinion / I believe / I strongly think that...",
          "   Without... / If there were no..., ...",
          "   Not only... but also... / As well as...",
          "   Play a key role in / contribute to / be responsible for",
          "   On a larger scale / In general / As a result",
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
      {
        id: "int-sp4-q4",
        type: "task",
        question:
          "SPEAKING TASK: Describe a job that is useful to society.\n\nYou should cover:\n1. What job it is\n2. How you know about this job\n3. What type of people do this job\n4. Why you think this job is useful to society\n\nPractice speaking for 1–2 minutes. Use the example in the material as a guide, but choose YOUR OWN job.",
        sampleAnswer:
          "Contoh (Doctor): 'The job I want to describe is a doctor. I know about this job because my uncle is a doctor. Doctors are usually hardworking, patient, and compassionate people who study for many years. I think this job is very useful because doctors save lives every day, help prevent diseases, and were essential during the COVID-19 pandemic. Without doctors, society would be in serious trouble.'",
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
          "   → She drinks coffee in the morning.",
          "2️⃣ Jadwal (Scheduled event)",
          "   → The train leaves at 7.30 pm.",
          "3️⃣ Fakta (General fact)",
          "   → The weather is sunny.",
          "4️⃣ Arahan / Instruksi (Instruction)",
          "   → First, you should put the book.",
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
          "{{quiz-game:Review Quiz — Simple Present|10 soal pilihan ganda · asah pemahamanmu}}",
        ],
      },
    ],
    exercises: [
      // ── Quiz Game: Review Simple Present (moved from Day 3) ───────────────────
      {
        id: "int-gr2-rev-q1",
        section: "quiz",
        type: "multiple-choice",
        question: "The researcher usually ______ data from various sources.",
        options: ["Collect", "Collects", "Is collecting"],
        correctAnswer: "Collects",
        reason:
          '"The researcher" = singular → Simple Present Verbal Active → V1+s. "Collects" benar. "Collect" kurang -s. "Is collecting" = Progressive, tidak cocok dengan "usually".',
      },
      {
        id: "int-gr2-rev-q2",
        section: "quiz",
        type: "multiple-choice",
        question: "Many environmental issues ______ by experts every year.",
        options: ["Analyze", "Are analyzed", "Analyzes"],
        correctAnswer: "Are analyzed",
        reason:
          '"Many environmental issues" = plural → Passive Simple Present → are + V3. "Are analyzed" benar. "Analyze" = active. "Analyzes" = singular only.',
      },
      {
        id: "int-gr2-rev-q3",
        section: "quiz",
        type: "multiple-choice",
        question:
          "English ______ as an international language in many countries.",
        options: ["Uses", "Is used", "Used"],
        correctAnswer: "Is used",
        reason:
          '"English" = singular + makna pasif → Passive Simple Present → is + V3. "Is used" benar. "Uses" = active. "Used" = V2 (Past).',
      },
      {
        id: "int-gr2-rev-q4",
        section: "quiz",
        type: "multiple-choice",
        question:
          "A new policy ______ by the organization to reduce pollution.",
        options: ["Implements", "Is implemented", "Implement"],
        correctAnswer: "Is implemented",
        reason:
          '"A new policy" = singular + "by the organization" → Passive Simple Present → is + V3. "Is implemented" benar.',
      },
      {
        id: "int-gr2-rev-q5",
        section: "quiz",
        type: "multiple-choice",
        question: "Renewable energy ______ in many developed countries.",
        options: ["Promote", "Promotes", "Is promoted"],
        correctAnswer: "Is promoted",
        reason:
          '"Renewable energy" = singular uncountable + makna pasif → Passive → is + V3. "Is promoted" benar.',
      },
      {
        id: "int-gr2-rev-q6",
        section: "quiz",
        type: "multiple-choice",
        question: 'Correct this sentence: "Your reason sound quiet logical."',
        options: [
          "Your reason sounds quite logical.",
          "Your reason sounds quiet logical.",
          "Your reasons sound quite logical.",
          "Your reason sounds quite logically.",
        ],
        correctAnswer: "Your reason sounds quite logical.",
        reason:
          '(1) "sound" → "sounds" karena singular. (2) "quiet" (sunyi) → "quite" (cukup) — adverb yang tepat untuk menerangkan "logical".',
      },
      {
        id: "int-gr2-rev-q7",
        section: "quiz",
        type: "multiple-choice",
        question:
          'Correct this sentence: "Hmm, your cookies smells really good."',
        options: [
          "Hmm, your cookies smell really good.",
          "Hmm, your cookie smells really good.",
          "Hmm, your cookies is smelling really good.",
          "Hmm, your cookies smelled really good.",
        ],
        correctAnswer: "Hmm, your cookies smell really good.",
        reason:
          '"cookies" = plural → verb tanpa -s. "smells" → "smell". Plural subject + V1 (bare).',
      },
      {
        id: "int-gr2-rev-q8",
        section: "quiz",
        type: "multiple-choice",
        question:
          'Correct this sentence: "She be highly interested of studying English."',
        options: [
          "She is highly interested in studying English.",
          "She is highly interested of studying English.",
          "She be highly interested in studying English.",
          "She is highly interest in studying English.",
        ],
        correctAnswer: "She is highly interested in studying English.",
        reason:
          '(1) "be" → "is" (She = singular). (2) "interested of" → "interested in" — preposisi yang benar.',
      },
      {
        id: "int-gr2-rev-q9",
        section: "quiz",
        type: "multiple-choice",
        question:
          'Correct this sentence: "The recruitment process is consist of several steps."',
        options: [
          "The recruitment process consists of several steps.",
          "The recruitment process is consisted of several steps.",
          "The recruitment process is consisting of several steps.",
          "The recruitment process consist of several steps.",
        ],
        correctAnswer: "The recruitment process consists of several steps.",
        reason:
          '"consist" adalah verb utama (intransitive), tidak bisa digabung dengan "is". Hilangkan "is", tambahkan -s → "consists of".',
      },
      {
        id: "int-gr2-rev-q10",
        section: "quiz",
        type: "multiple-choice",
        question:
          'Correct this sentence: "He beliefs that his dream will come true."',
        options: [
          "He believes that his dream will come true.",
          "He belief that his dream will come true.",
          "He is believing that his dream will come true.",
          "He beliefed that his dream will come true.",
        ],
        correctAnswer: "He believes that his dream will come true.",
        reason:
          '"beliefs" = NOUN, bukan verb. Bentuk verb = "believe" → He + believes (V1+s). belief (n) vs believe (v).',
      },
      // ── Set 1: Verbal Passive Simple Present ──────────────────────────────────
      {
        id: "int-gr2-s1q1",
        type: "multiple-choice",
        question:
          "I ......... such a precious opportunity to join this program.",
        options: ["was given", "am given", "do given"],
        correctAnswer: "am given",
        reason:
          "Subjek 'I' → gunakan 'am'. Passive Voice Simple Present: S + am/is/are + V3. 'given' = V3 dari 'give'.",
      },
      {
        id: "int-gr2-s1q2",
        type: "multiple-choice",
        question: "The men ......... of stealing money.",
        options: ["is accused", "are accused", "am accused"],
        correctAnswer: "are accused",
        reason:
          "'The men' = plural → gunakan 'are'. Simple Present Passive: The men + are + V3 (accused).",
      },
      {
        id: "int-gr2-s1q3",
        type: "multiple-choice",
        question: "Their scores ......... by the committee.",
        options: [
          "do not fairly accumulate",
          "are not fair accumulated",
          "are not fairly accumulated",
        ],
        correctAnswer: "are not fairly accumulated",
        reason:
          "Passive negatif: S + are not + V3. 'fairly' = adverb (menerangkan V3), bukan adjective, jadi 'fairly accumulated' bukan 'fair accumulated'.",
      },
      {
        id: "int-gr2-s1q4",
        type: "multiple-choice",
        question: "...... data ......... analyzed together with professor.",
        options: ["this, are not", "these, are not", "those, do not"],
        correctAnswer: "these, are not",
        reason:
          "'Data' = plural noun → determiner 'these' (plural). Passive negatif: these data + are not + V3.",
      },
      {
        id: "int-gr2-s1q5",
        type: "multiple-choice",
        question: "...... all of the questions correctly answered by Radit?",
        options: ["are", "do", "is"],
        correctAnswer: "are",
        reason:
          "Passive interrogatif: Are/Is + S + V3? 'all of the questions' = plural → 'Are'.",
      },
      {
        id: "int-gr2-s1q6",
        type: "multiple-choice",
        question: "... my pizza eaten by you?",
        options: ["is", "are", "does"],
        correctAnswer: "is",
        reason:
          "'My pizza' = singular → 'Is'. Passive interrogatif: Is + S + V3? 'eaten' = V3 dari 'eat'.",
      },
      {
        id: "int-gr2-s1q7",
        type: "multiple-choice",
        question: "My statement ......... by opposing team.",
        options: ["are argued", "is argued", "do argued"],
        correctAnswer: "is argued",
        reason:
          "'My statement' = singular → 'is'. Passive Simple Present: S + is + V3. 'argued' = V3 dari 'argue'.",
      },
      {
        id: "int-gr2-s1q8",
        type: "multiple-choice",
        question: "... this information directly derived by reliable source?",
        options: ["are", "is", "do"],
        correctAnswer: "is",
        reason:
          "'This information' = singular (uncountable) → 'Is'. Passive interrogatif: Is + S + V3?",
      },
      {
        id: "int-gr2-s1q9",
        type: "multiple-choice",
        question: "Anna's paper ......... by Professor Mark.",
        options: ["are examined", "be examined", "is examined"],
        correctAnswer: "is examined",
        reason:
          "'Anna's paper' = singular → 'is'. Passive Simple Present (+): S + is + V3. 'be examined' salah karena 'be' bukan bentuk finite.",
      },
      {
        id: "int-gr2-s1q10",
        type: "multiple-choice",
        question: "This meat ......... by Joe.",
        options: [
          "is not well grilled",
          "are not well grilled",
          "do not well grilled",
        ],
        correctAnswer: "is not well grilled",
        reason:
          "'This meat' = singular → 'is not'. Passive negatif: S + is not + V3. 'well' = adverb menerangkan 'grilled'.",
      },
      // ── Set 2: Non-Verbal (BE + ANA) ─────────────────────────────────────────
      {
        id: "int-gr2-s2q1",
        section: "middle",
        type: "multiple-choice",
        question: "Elisa and I ... at Risa's house.",
        options: ["are", "be", "is"],
        correctAnswer: "are",
        reason:
          "'Elisa and I' = compound subject (plural) → 'are'. Non-Verbal: S + are + adverb of place.",
      },
      {
        id: "int-gr2-s2q2",
        section: "middle",
        type: "multiple-choice",
        question: "These ...... are very rare.",
        options: ["species", "specieses", "specie"],
        correctAnswer: "species",
        reason:
          "'Species' adalah kata yang bentuk singular dan pluralnya sama (irregular). Tidak ada 'specieses' atau 'specie'.",
      },
      {
        id: "int-gr2-s2q3",
        section: "middle",
        type: "multiple-choice",
        question: "They are ..........",
        options: [
          "the winneres of this competition",
          "the winners of this competition",
          "the winner of this competition",
        ],
        correctAnswer: "the winners of this competition",
        reason:
          "'They are' → butuh plural noun. 'Winners' = plural yang benar. 'Winneres' salah ejaan.",
      },
      {
        id: "int-gr2-s2q4",
        section: "middle",
        type: "multiple-choice",
        question: "I ......... eating vegetables day in and day out.",
        options: ["am sick to", "am sick of", "am sick for"],
        correctAnswer: "am sick of",
        reason:
          "'Sick of' = idiom yang benar (bosan dengan). 'Sick to' dan 'sick for' bukan idiom baku dalam konteks ini.",
      },
      {
        id: "int-gr2-s2q5",
        section: "middle",
        type: "multiple-choice",
        question: "Our score ... the highest in C group.",
        options: ["is", "are", "was"],
        correctAnswer: "is",
        reason:
          "'Our score' = singular → 'is'. Non-Verbal Simple Present: S + is + adjective/noun.",
      },
      {
        id: "int-gr2-s2q6",
        section: "middle",
        type: "multiple-choice",
        question: "The meat ... burning.",
        options: ["are", "is", "be"],
        correctAnswer: "is",
        reason:
          "'The meat' = singular (uncountable) → 'is'. Present Continuous: S + is + V-ing. 'burning' = V-ing.",
      },
      {
        id: "int-gr2-s2q7",
        section: "middle",
        type: "multiple-choice",
        question: "I ... not that hungry.",
        options: ["am", "be", "do"],
        correctAnswer: "am",
        reason:
          "'I' → selalu gunakan 'am'. Non-Verbal negatif: I + am + not + adjective.",
      },
      {
        id: "int-gr2-s2q8",
        section: "middle",
        type: "multiple-choice",
        question: "... everyone here?",
        options: ["is", "are", "do"],
        correctAnswer: "is",
        reason:
          "'Everyone' = indefinite pronoun → selalu singular → 'Is'. Non-Verbal interrogatif: Is + everyone + adverb?",
      },
      {
        id: "int-gr2-s2q9",
        section: "middle",
        type: "multiple-choice",
        question: ".......... dead.",
        options: ["These cactus are", "Those cactuses are", "Those cacti are"],
        correctAnswer: "Those cacti are",
        reason:
          "'Cacti' = bentuk plural irregular dari 'cactus' (Latin). 'Cactuses' kurang tepat secara akademis. Jarak jauh → 'those'.",
      },
      {
        id: "int-gr2-s2q10",
        section: "middle",
        type: "multiple-choice",
        question: "... somebody inside?",
        options: ["is", "are", "does"],
        correctAnswer: "is",
        reason:
          "'Somebody' = indefinite pronoun → selalu singular → 'Is'. Non-Verbal interrogatif: Is + somebody + adverb?",
      },
      // ── Set 3: Verbal Active (Do/Does) ────────────────────────────────────────
      {
        id: "int-gr2-s3q1",
        section: "final",
        type: "multiple-choice",
        question: "......... many siblings?",
        options: ["Do Rachel has", "Does Rachel has", "Does Rachel have"],
        correctAnswer: "Does Rachel have",
        reason:
          "'Rachel' = singular → 'Does'. Setelah Does: gunakan V1 bare (tanpa -s/-es). Jadi 'have', bukan 'has'.",
      },
      {
        id: "int-gr2-s3q2",
        section: "final",
        type: "multiple-choice",
        question: "My family and I ......... holiday once a year.",
        options: ["go on", "gone on", "goes on"],
        correctAnswer: "go on",
        reason:
          "'My family and I' = compound subject (plural, termasuk 'I') → V1 tanpa -s. 'Go on holiday' = idiom.",
      },
      {
        id: "int-gr2-s3q3",
        section: "final",
        type: "multiple-choice",
        question: "The accident ......... on Merdeka street.",
        options: ["happen", "happens", "is happened"],
        correctAnswer: "happens",
        reason:
          "'The accident' = singular → V1 + s/es. 'Happen' adalah intransitive verb → tidak bisa passive ('is happened' salah).",
      },
      {
        id: "int-gr2-s3q4",
        section: "final",
        type: "multiple-choice",
        question: "My dad ......... love playing badminton.",
        options: ["do not", "is not", "does not"],
        correctAnswer: "does not",
        reason:
          "'My dad' = singular (He) → 'does not'. Negatif Verbal Active: S + does not + V1. 'is not' hanya untuk non-verbal.",
      },
      {
        id: "int-gr2-s3q5",
        section: "final",
        type: "multiple-choice",
        question: "...... these plants absorb water well?",
        options: ["are", "do", "does"],
        correctAnswer: "do",
        reason:
          "'These plants' = plural → 'Do'. Verbal interrogatif: Do/Does + S + V1? 'are' hanya untuk non-verbal.",
      },
      {
        id: "int-gr2-s3q6",
        section: "final",
        type: "multiple-choice",
        question: "Your knowledge ...... not guarantee your politeness.",
        options: ["does", "are", "do"],
        correctAnswer: "does",
        reason:
          "'Your knowledge' = singular (uncountable) → 'does'. Negatif Verbal: S + does not + V1. 'guarantee' = V1 bare.",
      },
      {
        id: "int-gr2-s3q7",
        section: "final",
        type: "multiple-choice",
        question: "......... good?",
        options: [
          "does your soup tastes",
          "is your soup taste",
          "does your soup taste",
        ],
        correctAnswer: "does your soup taste",
        reason:
          "'Your soup' = singular → 'Does'. Setelah Does: V1 bare ('taste', bukan 'tastes'). 'is your soup taste' salah karena 'taste' di sini adalah verb.",
      },
      {
        id: "int-gr2-s3q8",
        section: "final",
        type: "multiple-choice",
        question: "In fact, many children ...... not receive decent education.",
        options: ["does", "are", "do"],
        correctAnswer: "do",
        reason:
          "'Many children' = plural → 'do'. Negatif Verbal: S + do not + V1. 'are' hanya untuk non-verbal.",
      },
      {
        id: "int-gr2-s3q9",
        section: "final",
        type: "multiple-choice",
        question: "Sarah and Joe ...... me to go out tonight.",
        options: ["asks", "ask", "asking"],
        correctAnswer: "ask",
        reason:
          "'Sarah and Joe' = plural → V1 tanpa -s. 'ask' = V1 bare. 'asks' hanya untuk He/She/It. 'asking' butuh auxiliary.",
      },
      {
        id: "int-gr2-s3q10",
        section: "final",
        type: "multiple-choice",
        question: "Water ......... the drain.",
        options: ["run down", "runs down", "is run down"],
        correctAnswer: "runs down",
        reason:
          "'Water' = singular (uncountable) → V1 + s. 'runs down' = Simple Present Verbal Active. 'is run down' = passive (tidak tepat untuk konteks ini).",
      },
    ],
  },

  // ── Day 3: Simple Past Tense ─────────────────────────────────────────────────
  {
    id: "int-grammar-3",
    track: "grammar",
    day: 3,
    tutor: "Ms. Manda",
    title: "Simple Past Tense",
    subtitle:
      "Non-Verbal, Verbal Active, Verbal Passive — Simple Past (was/were / V2 / did)",
    overview:
      "Materi Simple Past Tense lengkap: NON-VERBAL (was/were + ANA), VERBAL ACTIVE (S + V2), dan VERBAL PASSIVE (S + was/were + V3 + by agent) — beserta fungsi, time signal, dan contoh dari kelas.",
    materialSections: [
      {
        title: "SIMPLE PAST — Pengenalan",
        points: [
          "Simple Past = tenses untuk menyatakan hal yang terjadi di MASA LAMPAU.",
          "─────────────────────────────",
          "⏱ TIME SIGNAL (penanda waktu):",
          "   yesterday, ago, last week, last month, last year, ...",
          "─────────────────────────────",
          "📌 FUNGSI Simple Past:",
          "1️⃣ Menyatakan kejadian di masa lampau",
          "   → {{annotation:I|S}} {{annotation:graduated|V2}} from university last year.",
          "2️⃣ Kebiasaan di masa lampau",
          "   → {{annotation:I|S}} always {{annotation:drank|V2}} coffee in the morning.",
          "3️⃣ Fakta di masa lampau",
          "   → {{annotation:Mr. Jokowi|S}} {{annotation:was|Vord}} seventh President of Indonesia.",
        ],
      },
      {
        title: "NON-VERBAL — Simple Past (be + ANA)",
        points: [
          "Formula: S + was/were + ANA",
          "ANA = Adjective / Noun / Adverb",
          "was → I / He / She / It / Singular Noun",
          "were → We / You / They / Plural Noun",
          "─────────────────────────────",
          "(+) S + was/were + ANA",
          "   → {{annotation:The improvement of birth|S}} {{annotation:was|Vord}} {{annotation:rapid|ANA/adj}} in Indonesia.",
          "─────────────────────────────",
          "(-) S + was/were + not + ANA",
          "   → {{annotation:The impact of eruption|S}} {{annotation:was not|Vord}} {{annotation:considerable|ANA/adj}}.",
          "─────────────────────────────",
          "(?) Was/Were + S + ANA?",
          "   → {{annotation:Was|Vord}} {{annotation:MBG|S}} {{annotation:beneficial|ANA/adj}} for Indonesia student?",
        ],
      },
      {
        title: "VERBAL ACTIVE — Simple Past",
        points: [
          "Formula: S + V2 (verb bentuk past)",
          "─────────────────────────────",
          "(+) S + V2",
          "   → {{annotation:I|S}} {{annotation:rarely|adv}} {{annotation:utilized|V2}} my phone in the class.",
          "─────────────────────────────",
          "(-) S + did + not + V1",
          "   → {{annotation:I|S}} usually {{annotation:did not|aux}} {{annotation:maintain|V1}} my server.",
          "   ⚠ Setelah did not → wajib V1 (bentuk dasar, bukan V2)",
          "─────────────────────────────",
          "(?) Did + S + V1?",
          "   → {{annotation:Did|aux}} {{annotation:you|S}} {{annotation:assume|V1}} that drunk is good for your health?",
        ],
      },
      {
        title: "VERBAL PASSIVE — Simple Past (be + V3)",
        points: [
          "Formula: S + was/were + V3 + (by agent)",
          "Ciri khas: BE past (was/were) + V3",
          "─────────────────────────────",
          "(+) S + was/were + V3 + (by agent)",
          "   → {{annotation:I|S}} {{annotation:was|Vaux}} {{annotation:emphasized|V3}} {{annotation:to study|to inf}} hard.",
          "─────────────────────────────",
          "(-) S + was/were + not + V3 + (by agent)",
          "   → {{annotation:This problem|S}} {{annotation:was not|Vaux}} {{annotation:tackled|V3}} by my teacher.",
          "─────────────────────────────",
          "(?) Was/Were + S + V3 + (by agent)?",
          "   → {{annotation:Was|Vaux}} {{annotation:Judge|S}} {{annotation:justified|V3}} the problem?",
          "─────────────────────────────",
          "💡 Aktif vs Pasif:",
          "   Aktif:  My teacher tackled this problem.",
          "   Pasif:  This problem was tackled by my teacher.",
        ],
      },
      {
        title: "Vocabulary dari Kelas",
        points: [
          "improvement (n) — peningkatan | 'The improvement of birth was rapid.'",
          "rapid (adj) — cepat/pesat | 'The improvement was rapid.'",
          "impact (n) — dampak | 'The impact of eruption was not considerable.'",
          "eruption (n) — letusan/semburan | 'the impact of eruption'",
          "considerable (adj) — cukup besar/signifikan | 'was not considerable'",
          "beneficial (adj) — bermanfaat | 'Was MBG beneficial for Indonesia student?'",
          "utilize (v) — menggunakan/memanfaatkan | 'I rarely utilized my phone.'",
          "rarely (adv) — jarang sekali | penanda frekuensi negatif",
          "maintain (v) — memelihara/menjaga | 'did not maintain my server'",
          "assume (v) — mengasumsikan/menganggap | 'Did you assume that...'",
          "emphasize (v) — menekankan | 'I was emphasized to study hard.'",
          "tackle (v) — menangani/menghadapi | 'This problem was not tackled.'",
          "justify (v) — membenarkan/membuktikan | 'Was Judge justified the problem?'",
          "graduate (v) — lulus | 'I graduated from university last year.'",
        ],
      },
    ],
    exercises: [
      // ── Set 1: Simple Past Passive / Non-Verbal ───────────────────────────────
      {
        id: "int-gr3-s1q1",
        section: "final",
        type: "multiple-choice",
        question: "...... the topic described in detail last meeting.",
        options: ["did", "were", "was"],
        correctAnswer: "was",
        reason:
          '"The topic" = singular + "described" = V3 + "last meeting" = time signal past → Verbal Passive Simple Past: was + V3. "did" hanya untuk Verbal Active. "were" untuk plural.',
      },
      {
        id: "int-gr3-s1q2",
        section: "final",
        type: "multiple-choice",
        question: "You ......... to cheat during examination.",
        options: ["are not allowed", "were not allowed", "are not allow"],
        correctAnswer: "were not allowed",
        reason:
          'Konteks past (examination = kejadian lampau) + passive → were not + V3. "are not allowed" = Simple Present. "are not allow" salah karena allow tanpa -ed.',
      },
      {
        id: "int-gr3-s1q3",
        section: "final",
        type: "multiple-choice",
        question: "My mom ......... by her when we lived there.",
        options: [
          "Was always greeting",
          "Was always greet",
          "Was always greeted",
        ],
        correctAnswer: "Was always greeted",
        reason:
          '"by her" = ciri khas Passive + "lived there" = past context → Verbal Passive Simple Past: was + V3. "greeted" = V3 dari "greet". "greeting" = V-ing (bukan V3). "greet" = V1.',
      },
      {
        id: "int-gr3-s1q4",
        section: "final",
        type: "multiple-choice",
        question:
          "We ....... not reminded at all last week to bring our own stuff.",
        options: ["are", "were", "did"],
        correctAnswer: "were",
        reason:
          '"last week" = time signal past + "reminded" = V3 → Verbal Passive negatif Simple Past: were not + V3. "We" = plural → "were". "are" = Present. "did" hanya untuk Verbal Active.',
      },
      {
        id: "int-gr3-s1q5",
        section: "final",
        type: "multiple-choice",
        question: "That bike ...... once repaired last month.",
        options: ["was", "did", "is"],
        correctAnswer: "was",
        reason:
          '"last month" = time signal past + "repaired" = V3 + "That bike" = singular → Verbal Passive Simple Past: was + V3. "did" = Verbal Active auxiliary. "is" = Simple Present.',
      },
      // ── Set 2: Simple Past Non-Verbal (was/were) ─────────────────────────────
      {
        id: "int-gr3-s2q1",
        type: "multiple-choice",
        question:
          "A: Where ...... you yesterday? I ...... to call you but it didn't work.\nB: Oh, I am sorry. I ...... my grandparents' house yesterday and the connection is not good there.",
        options: [
          "are, tried, visit",
          "were, tried, visited",
          "were, try, visit",
        ],
        correctAnswer: "were, tried, visited",
        reason:
          '"yesterday" = past. (1) "Where were you" = Non-Verbal Past, "you" = plural → were. (2) "tried" = V2 dari try (Verbal Active Past). (3) "visited" = V2 dari visit. Semua menggunakan bentuk past.',
      },
      {
        id: "int-gr3-s2q2",
        type: "multiple-choice",
        question:
          "It ...... such a severe pain that I ...... my lovely cat last month.",
        options: ["was, lost", "was, loss", "was, lose"],
        correctAnswer: "was, lost",
        reason:
          '"last month" = past. (1) "It was" = Non-Verbal Past, it = singular → was. (2) "lost" = V2 dari lose (Verbal Active Past). "loss" = noun (kerugian). "lose" = V1.',
      },
      {
        id: "int-gr3-s2q3",
        type: "multiple-choice",
        question: "We ...... in out of city when the tragedy happened.",
        options: ["was", "were", "are"],
        correctAnswer: "were",
        reason:
          '"happened" = past context + Non-Verbal (lokasi). "We" = plural → were. "was" hanya untuk I/He/She/It/Singular. "are" = Present.',
      },
      {
        id: "int-gr3-s2q4",
        type: "multiple-choice",
        question: "When I ..............., I won storytelling contest.",
        options: [
          "was kinder garten",
          "was in kinder gartet",
          "was in kindergarten",
        ],
        correctAnswer: "was in kindergarten",
        reason:
          'Non-Verbal Past (lokasi/kondisi): I + was + adverb of place. "in kindergarten" = preposisi yang benar. "kinder garten" salah ejaan. "kinder gartet" salah.',
      },
      {
        id: "int-gr3-s2q5",
        type: "multiple-choice",
        question: "Mrs. Yeni ...... my teacher in high school.",
        options: ["was", "is", "were"],
        correctAnswer: "was",
        reason:
          '"in high school" = masa lampau → Simple Past Non-Verbal. "Mrs. Yeni" = singular (She) → was. "is" = Present. "were" hanya untuk plural/you.',
      },
      // ── Set 3: Simple Past Verbal Active ─────────────────────────────────────
      {
        id: "int-gr3-s3q1",
        section: "middle",
        type: "multiple-choice",
        question:
          "A: ...... you submit your assignment last night?\nB: Yes, .......",
        options: ["Do, I don't", "Did, I don't", "Did, I did."],
        correctAnswer: "Did, I did.",
        reason:
          '"last night" = past → Simple Past Verbal Active. Interrogatif: Did + S + V1? → "Did you submit". Jawaban positif: Yes, I did (bukan "I don\'t" yang Present negatif).',
      },
      {
        id: "int-gr3-s3q2",
        section: "middle",
        type: "multiple-choice",
        question:
          "My friend ...... me her dream catcher before she departed to New York.",
        options: ["gives", "gave", "given"],
        correctAnswer: "gave",
        reason:
          '"before she departed" = past context → Verbal Active Simple Past: S + V2. "gave" = V2 dari "give". "gives" = Present V1+s. "given" = V3 (digunakan di Passive/Perfect).',
      },
      {
        id: "int-gr3-s3q3",
        section: "middle",
        type: "multiple-choice",
        question:
          "I ...... nothing from your last presentation since I ...... very sleepy.",
        options: ["got, was", "got, am", "get, was"],
        correctAnswer: "got, was",
        reason:
          '"last presentation" = past. (1) "got" = V2 dari get (Verbal Active Past). (2) "was" = Non-Verbal Past, I = singular → was. "get" = V1 (Present). "am" = Present.',
      },
      {
        id: "int-gr3-s3q4",
        section: "middle",
        type: "multiple-choice",
        question:
          "A: What ...... I do wrong?\nB: No, it was only a misunderstanding.",
        options: ["am", "did", "do"],
        correctAnswer: "did",
        reason:
          'Jawaban B menggunakan "was" (past) → konteks past. Interrogatif Verbal Active Simple Past: What did + S + V1? "did" = auxiliary past. "am/do" = Present.',
      },
      {
        id: "int-gr3-s3q5",
        section: "middle",
        type: "multiple-choice",
        question: "He ...... your car key into your bag yesterday.",
        options: ["puted", "putted", "put"],
        correctAnswer: "put",
        reason:
          '"yesterday" = past → Verbal Active Simple Past: S + V2. "put" adalah irregular verb yang bentuk V1/V2/V3-nya SAMA: put–put–put. "puted" dan "putted" tidak ada dalam bahasa Inggris.',
      },
    ],
  },

  // ── Day 4: Present Continuous + Present Perfect ───────────────────────────────
  {
    id: "int-grammar-4",
    track: "grammar",
    day: 4,
    tutor: "M",
    title: "Present Continuous Tense",
    subtitle: "Fungsi, rumus Verbal Active, Verbal Passive, dan Non-Verbal",
    overview:
      "Materi Present Continuous secara lengkap: 5 fungsi utama, time signal, rumus Verbal Active, Verbal Passive (be + V3), dan Non-Verbal (be + ANA) beserta contoh kalimat positif, negatif, dan tanya.",
    materialSections: [
      {
        title: "Time Signal",
        points: [
          "now — sekarang",
          "at the moment — saat ini",
          "currently — saat ini / sedang",
          "at the day — pada hari ini",
          "still — masih",
          "these days — hari-hari ini",
        ],
      },
      {
        title: "Fungsi Present Continuous",
        points: [
          "1️⃣ Aksi yang SEDANG berlangsung",
          '   → He is studying right now.',
          "─────────────────────────────",
          "2️⃣ Rencana yang SUDAH PASTI (future plan)",
          '   → I am appointing with doctor tomorrow.',
          "─────────────────────────────",
          "3️⃣ Perubahan yang SEDANG berlangsung",
          "   → Government's program is still happening until now.",
          "─────────────────────────────",
          "4️⃣ Aksi SEMENTARA",
          '   → For this time, I am staying with my friend.',
          "─────────────────────────────",
          "5️⃣ Menyatakan KEJENGKELAN (consistently / always)",
          '   → She is always calling me, when I am teaching my students.',
        ],
      },
      {
        title: "Verbal Active",
        points: [
          "Rumus: S + is/am/are + V-ing",
          "─────────────────────────────",
          "(+) S + is/am/are + V-ing",
          "{{annotation:She|S}} {{annotation:is|Vaux}} {{annotation:tackling|Vord}} her problem by herself.",
          "─────────────────────────────",
          "(-) S + is/am/are + not + V-ing",
          "{{annotation:The government|S}} {{annotation:is not|Vaux}} {{annotation:mitigating|Vord}} the flood.",
          "─────────────────────────────",
          "(?) Am/Is/Are + S + V-ing?",
          "{{annotation:Is|Vaux}} {{annotation:he|S}} {{annotation:enhancing|Vord}} the education value?",
        ],
      },
      {
        title: "Verbal Passive (be + V3)",
        points: [
          "Rumus: S + is/am/are + being + V3",
          "─────────────────────────────",
          "(+) S + is/am/are + being + V3",
          "{{annotation:This Policy of Country|S}} {{annotation:is being|Vaux}} {{annotation:limited|Vord}} by the government.",
          "─────────────────────────────",
          "(-) S + is/am/are + not + being + V3",
          "{{annotation:This spidol|S}} {{annotation:is not being|Vaux}} {{annotation:utilized|Vord}} for writing.",
          "─────────────────────────────",
          "(?) Is/Am/Are + S + being + V3?",
          "{{annotation:Am|Vaux}} {{annotation:I|S}} {{annotation:being sustained|Vord}} by you?",
        ],
      },
      {
        title: "Non-Verbal (be + ANA — Adjective/Noun/Adverb)",
        points: [
          "Rumus: S + is/am/are + being + ANA",
          "─────────────────────────────",
          "(+) S + is/am/are + being + ANA",
          "{{annotation:The ball|S}} {{annotation:is being|Vord}} {{annotation:tremendous|ANA}}.",
          "─────────────────────────────",
          "(-) S + is/am/are + not + being + ANA",
          "{{annotation:She|S}} {{annotation:is not being|Vord}} {{annotation:evidently performant|ANA}}.",
          "─────────────────────────────",
          "(?) Is/Am/Are + S + being + ANA?",
          "{{annotation:Are|Vord}} {{annotation:you|S}} being {{annotation:hungry|ANA}}?",
        ],
      },
    ],
    exercises: [
      {
        id: "int-gr4-q1",
        type: "multiple-choice",
        question: "Which sentence correctly uses Present Continuous Verbal Active (+)?",
        options: [
          "She is tackling her problem by herself.",
          "She tackling her problem by herself.",
          "She are tackling her problem by herself.",
          "She was tackling her problem by herself.",
        ],
        correctAnswer: "She is tackling her problem by herself.",
        reason: 'Verbal Active (+) = S + is/am/are + V-ing. "She is tackling" adalah bentuk yang benar untuk subjek orang ketiga tunggal.',
      },
      {
        id: "int-gr4-q2",
        type: "multiple-choice",
        question: "Which sentence correctly uses Present Continuous Verbal Passive (+)?",
        options: [
          "This policy is being limited by the government.",
          "This policy being limited by the government.",
          "This policy is limited by the government.",
          "This policy has been limited by the government.",
        ],
        correctAnswer: "This policy is being limited by the government.",
        reason: 'Verbal Passive (+) = S + is/am/are + being + V3. "is being limited" adalah bentuk yang benar.',
      },
      {
        id: "int-gr4-q3",
        type: "multiple-choice",
        question: "Fungsi nomor 2 dari Present Continuous adalah untuk...",
        options: [
          "Aksi yang sedang berlangsung saat ini",
          "Rencana yang sudah pasti di masa depan",
          "Menyatakan kejengkelan",
          "Aksi sementara",
        ],
        correctAnswer: "Rencana yang sudah pasti di masa depan",
        reason: 'Fungsi ke-2 Present Continuous = rencana yang SUDAH PASTI (future plan). Contoh: "I am appointing with doctor tomorrow."',
      },
      {
        id: "int-gr4-q4",
        type: "multiple-choice",
        question: 'Kalimat mana yang menunjukkan fungsi "menyatakan kejengkelan" dari Present Continuous?',
        options: [
          "He is studying right now.",
          "I am staying with my friend for this time.",
          "She is always calling me when I am teaching.",
          "The government's program is still happening.",
        ],
        correctAnswer: "She is always calling me when I am teaching.",
        reason: 'Fungsi ke-5: menyatakan kejengkelan ditandai dengan kata "always" atau "constantly". "She is always calling me" menunjukkan rasa jengkel terhadap kebiasaan orang lain.',
      },
      {
        id: "int-gr4-q5",
        type: "multiple-choice",
        question: "Rumus Non-Verbal Present Continuous (+) adalah...",
        options: [
          "S + is/am/are + V-ing",
          "S + is/am/are + being + V3",
          "S + is/am/are + being + ANA",
          "S + is/am/are + not + ANA",
        ],
        correctAnswer: "S + is/am/are + being + ANA",
        reason: 'Non-Verbal Present Continuous (+) = S + is/am/are + being + ANA (Adjective/Noun/Adverb). Contoh: "The ball is being tremendous."',
      },
      {
        id: "int-gr4-q6",
        type: "fill-the-gap",
        question: "Fill in the blank — Verbal Active (+):\n'The government _____ (mitigate) the flood right now.'",
        correctAnswer: "is mitigating",
        reason: 'Verbal Active (+) Present Continuous: S + is/am/are + V-ing. "The government" = subjek tunggal → pakai "is" + mitigating.',
      },
      {
        id: "int-gr4-q7",
        type: "fill-the-gap",
        question: "Fill in the blank — Verbal Passive (?):\n'_____ the policy _____ limited by the committee?'",
        correctAnswer: "Is / being",
        reason: 'Verbal Passive (?) = Is/Am/Are + S + being + V3. Jawaban: "Is the policy being limited by the committee?"',
      },
      {
        id: "int-gr4-q8",
        type: "task",
        question: "Buat 3 kalimat Present Continuous:\n1. Verbal Active (+) tentang aktivitasmu hari ini\n2. Verbal Passive (-) tentang sebuah proyek\n3. Non-Verbal (?) tentang seseorang",
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
