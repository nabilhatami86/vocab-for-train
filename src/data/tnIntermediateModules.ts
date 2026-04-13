import type { ModuleLesson, ModuleTrack } from '@/types/module';

// ── Reading Lessons ───────────────────────────────────────────────────────────

const readingLessons: ModuleLesson[] = [
  {
    id: 'int-reading-2',
    track: 'reading',
    day: 2,
    tutor: 'Ms. Lidya',
    title: 'The Most Amazing Structure on Earth',
    subtitle: 'How the human brain developed and what makes it remarkable',
    overview:
      'Materi reading tentang otak manusia: sejarah perkembangannya dari makhluk purba, struktur cerebral cortex, cara kerja neuron, dan perbandingannya dengan superkomputer.',
    passage: [
      'There are people who say the most amazing structure on earth is the human brain. It is so complex that it took about 700 million years to develop. Humans started out as wormlike creatures that used one end of the body to move forward. Ever so slowly, a bunch of nerves began developing at that one end — the head. These nerves helped the creature to sense light, food and danger. Gradually, this bunch of nerves became the creature\'s brain. To carry messages from the brain to other parts of the body, the creature developed a spinal cord. Later, the creature became a fish with eyes, ears and a nose that could send the brain information about sights, sounds and smells.',
      '(Ada orang-orang yang mengatakan bahwa struktur paling menakjubkan di bumi adalah otak manusia. Struktur ini begitu kompleks sehingga membutuhkan sekitar 700 juta tahun untuk berkembang. Manusia awalnya adalah makhluk seperti cacing yang menggunakan satu ujung tubuhnya untuk bergerak maju. Secara perlahan, sekumpulan saraf mulai berkembang di ujung tersebut — kepala. Saraf-saraf ini membantu makhluk tersebut untuk merasakan cahaya, makanan, dan bahaya. Lambat laun, sekumpulan saraf ini menjadi otak makhluk tersebut. Untuk membawa pesan dari otak ke bagian tubuh lainnya, makhluk tersebut mengembangkan sumsum tulang belakang. Kemudian, makhluk tersebut menjadi ikan dengan mata, telinga, dan hidung yang dapat mengirimkan informasi tentang penglihatan, suara, dan bau ke otak.)',
      'More time passed, and the fish grew arms and legs so it could move about on land. For this, it needed a larger and more complex brain. It became an ape-like creature, and the part of the brain used for seeing images and being social grew much stronger. Finally, the ape-like creature became human, with a brain that was capable of reason, emotion, creativity, memory and the ability to judge right from wrong.',
      '(Waktu terus berlalu, dan ikan tersebut tumbuh menjadi makhluk dengan lengan dan kaki sehingga dapat bergerak di darat. Untuk itu, makhluk tersebut membutuhkan otak yang lebih besar dan lebih kompleks. Makhluk ini menjadi seperti kera, dan bagian otak yang digunakan untuk melihat gambar dan bersosial tumbuh jauh lebih kuat. Akhirnya, makhluk mirip kera itu menjadi manusia, dengan otak yang mampu berpikir nalar, merasakan emosi, berkreasi, mengingat, dan mampu membedakan yang benar dari yang salah.)',
      'The human brain is very mysterious. Many questions about the brain have not yet been answered. For example, why do we need sleep or why do we dream? There is a lot about the brain that we do not yet understand. Believe it or not, people used to think of the brain as useless stuffing. Of course, we now know the brain is our control centre. The surface of the brain is called the cerebral cortex. It consists of four parts called lobes. The front lobe is where much of our thinking and feeling takes place. The top lobe processes information which is coming from parts of our bodies, such as our skin and muscles. The side lobe plays an important role in hearing, speech and long-term memories while the back lobe processes images from our eyes.',
      '(Otak manusia sangat misterius. Banyak pertanyaan tentang otak yang belum terjawab. Misalnya, mengapa kita membutuhkan tidur atau mengapa kita bermimpi? Masih banyak hal tentang otak yang belum kita pahami. Percaya atau tidak, dulu orang mengira otak hanyalah bahan pengisi yang tidak berguna. Tentu saja, sekarang kita tahu bahwa otak adalah pusat kendali kita. Permukaan otak disebut korteks serebral. Korteks serebral terdiri dari empat bagian yang disebut lobus. Lobus depan adalah tempat berlangsungnya sebagian besar aktivitas berpikir dan merasakan. Lobus atas memproses informasi yang datang dari bagian tubuh kita, seperti kulit dan otot. Lobus samping berperan penting dalam pendengaran, kemampuan berbicara, dan memori jangka panjang, sementara lobus belakang memproses gambar dari mata kita.)',
      'Which do you think is more powerful, your brain or a supercomputer? You might be surprised to learn that the world\'s best supercomputer is only about as powerful as half a mouse brain! Your brain is packed with 100 billion brain cells called neurons. They send information to your body and receive information from it, allowing you to move, feel, taste, hear and touch. All of this information travels to and from parts of your body along your spinal cord, which is like a highway found down the centre of your back. As the information travels from neuron to neuron, pathways are created. When you think about or remember something, your brain sends signals along these pathways. Actually, you were born with most of the neurons you have now but when you were a baby, you didn\'t have many pathways to connect them. As an adult, you now have more than 125 trillion connections between your neurons. No computer on earth can compete with the speed of your brain and how much information it can hold.',
      '(Menurut kamu, mana yang lebih kuat, otakmu atau superkomputer? Kamu mungkin terkejut mengetahui bahwa superkomputer terbaik di dunia hanya sekuat setengah otak tikus! Otakmu dipenuhi dengan 100 miliar sel otak yang disebut neuron. Neuron-neuron ini mengirim informasi ke tubuhmu dan menerima informasi dari tubuh, memungkinkanmu untuk bergerak, merasakan, mencicipi, mendengar, dan menyentuh. Semua informasi ini berjalan ke dan dari bagian-bagian tubuhmu melalui sumsum tulang belakang, yang seperti jalan raya di sepanjang tulang punggungmu. Saat informasi berpindah dari satu neuron ke neuron lainnya, jalur-jalur pun terbentuk. Ketika kamu memikirkan atau mengingat sesuatu, otakmu mengirimkan sinyal melalui jalur-jalur ini. Sebenarnya, kamu sudah lahir dengan sebagian besar neuron yang kamu miliki sekarang, tetapi saat masih bayi, kamu belum memiliki banyak jalur untuk menghubungkannya. Sebagai orang dewasa, kamu kini memiliki lebih dari 125 triliun koneksi antar neuron. Tidak ada komputer di dunia yang dapat menandingi kecepatan otakmu dan seberapa banyak informasi yang dapat disimpannya.)',
    ],
    materialSections: [
      {
        title: 'Main Passage Focus',
        points: [
          'Para. 1 — Brain took 700 million years to develop; early nerves helped sense light, food, danger.',
          'Para. 2 — Brain evolved from fish → ape-like → human: capable of reason, emotion, creativity.',
          'Para. 3 — Brain is mysterious; cerebral cortex has 4 lobes: front (thinking), top (touch), side (hearing/speech/memory), back (vision).',
          'Para. 4 — 100 billion neurons; spinal cord = highway; 125 trillion adult connections; brain beats any computer.',
        ],
      },
      {
        title: 'Key Vocabulary',
        points: [
          'wormlike, nerves, spinal cord, creature, ape-like',
          'reason, emotion, creativity, mysterious, useless stuffing',
          'cerebral cortex, lobes: front / top / side / back',
          'neurons (100 billion), pathways, connections (125 trillion)',
          'highway, compete, complex, capable',
        ],
      },
      {
        title: 'Reading Strategy: Main Idea vs. Supporting Detail',
        points: [
          '📌 Main idea = apa yang dibahas SECARA KESELURUHAN di sebuah paragraf.',
          '📌 Supporting detail = contoh, fakta, atau bukti yang mendukung main idea.',
          '⚡ Tip: Kalimat pertama atau terakhir paragraf sering berisi main idea.',
          'Contoh — Para. 3: Main idea = "The human brain is very mysterious."',
          'Supporting details = pertanyaan tentang tidur & mimpi, cerebral cortex & lobes.',
          'Contoh — Para. 4: Main idea = otak jauh lebih powerful dari komputer manapun.',
          'Supporting details = 100 billion neurons, spinal cord = highway, 125 trillion connections.',
        ],
      },
    ],
    exercises: [
      {
        id: 'int-r2-q1',
        type: 'multiple-choice',
        question: 'What was the first purpose of the nerves that developed in early creatures?',
        options: [
          'To help the brain grow',
          'To sense light, food and danger',
          'Sending sights, sounds and smells to the brain',
        ],
        correctAnswer: 'To sense light, food and danger',
        reason:
          'Paragraf 1: "These nerves helped the creature to sense light, food and danger."',
      },
      {
        id: 'int-r2-q2',
        type: 'multiple-choice',
        question: 'What is the main idea of the second paragraph?',
        options: [
          'The development of human brain',
          'The way early creatures learned to swim',
          'The parts of the human body that send messages',
        ],
        correctAnswer: 'The development of human brain',
        reason:
          'Paragraf 2 menceritakan evolusi otak dari ikan → ape-like → manusia yang mampu berpikir, berkreasi, dan merasakan emosi.',
      },
      {
        id: 'int-r2-q3',
        type: 'multiple-choice',
        question: 'What is the main idea of the third paragraph?',
        options: [
          'The cerebral cortex makes people intelligent',
          'Brain was useless stuffing by people',
          'The human brain is very mysterious',
        ],
        correctAnswer: 'The human brain is very mysterious',
        reason:
          'Paragraf 3 dibuka dengan kalimat "The human brain is very mysterious." Seluruh paragraf mendukung pernyataan ini.',
      },
      {
        id: 'int-r2-q4',
        type: 'multiple-choice',
        question: 'What is the possibility if people get injured in the side lobe?',
        options: [
          'May not able to feel any kinds of emotions',
          'May have trouble to remember and talk',
          'May not be able to think intelligently',
        ],
        correctAnswer: 'May have trouble to remember and talk',
        reason:
          'Paragraf 3: "The side lobe plays an important role in hearing, speech and long-term memories." Kerusakan di sini akan mengganggu bicara (talk) dan memori (remember).',
      },
      {
        id: 'int-r2-q5',
        type: 'multiple-choice',
        question: "According to the passage, how is a mouse's brain described?",
        options: [
          "About half as strong as the world's best supercomputer",
          "About as strong as the world's best supercomputer",
          "About twice as strong as the world's best supercomputer",
        ],
        correctAnswer: "About twice as strong as the world's best supercomputer",
        reason:
          'Paragraf 4: "the world\'s best supercomputer is only about as powerful as half a mouse brain." Artinya otak tikus = 2× superkomputer terbaik dunia.',
      },
      {
        id: 'int-r2-q6',
        type: 'multiple-choice',
        question: 'What does the cerebral cortex do?',
        options: [
          'process images from our eyes',
          'process sounds that people hear',
          'process things that people touch',
        ],
        correctAnswer: 'process things that people touch',
        reason:
          'Paragraf 3: "The top lobe processes information which is coming from parts of our bodies, such as our skin and muscles." — ini adalah fungsi dari bagian cerebral cortex (top lobe) yang memproses rangsangan sentuhan.',
      },
      {
        id: 'int-r2-q7',
        type: 'multiple-choice',
        question: "The brain's neurons use the spinal cord like a ____",
        options: ['Highway', 'Pathway', 'Map'],
        correctAnswer: 'Highway',
        reason:
          'Paragraf 4: "your spinal cord, which is like a highway found down the centre of your back."',
      },
      {
        id: 'int-r2-q8',
        type: 'multiple-choice',
        question: 'How many neuron connections does an adult have?',
        options: ['100 billion', '125 trillion', '700 million'],
        correctAnswer: '125 trillion',
        reason:
          'Paragraf 4: "you now have more than 125 trillion connections between your neurons." (100 billion = jumlah neuron; 700 million = tahun evolusi otak)',
      },
      {
        id: 'int-r2-q9',
        type: 'multiple-choice',
        question: 'What is the main idea of the last paragraph?',
        options: [
          'People are born with most of the neurons they have when they become adults.',
          "The brain's neurons process the information throughout the body faster than any computer.",
          'The brain has 100 million cells called neurons.',
        ],
        correctAnswer:
          "The brain's neurons process the information throughout the body faster than any computer.",
        reason:
          'Paragraf 4 secara keseluruhan membahas bagaimana otak bekerja melalui neuron dan koneksi yang jauh melampaui kemampuan komputer manapun.',
      },
      {
        id: 'int-r2-q10',
        type: 'multiple-choice',
        question: 'As used in this reading, the word "useless stuffing" refers to?',
        options: [
          'Unimportant lobes on the surface of the cerebral cortex',
          'Unused or new neurons inside the brain',
          'Unimportant material',
        ],
        correctAnswer: 'Unimportant material',
        reason:
          'Dahulu orang mengira otak hanyalah "bahan pengisi yang tidak berguna" (unimportant material/filler). Sekarang kita tahu otak adalah pusat kendali tubuh.',
      },
      {
        id: 'int-r2-q11',
        type: 'task',
        question:
          'Write a short paragraph describing the four lobes of the cerebral cortex and their functions in your own words.',
      },
      {
        id: 'int-r2-q12',
        type: 'task',
        question:
          'Find 20 or more vocabulary words from this passage that you do not know and write their meanings. Memorize them as your entrance ticket for tomorrow!',
      },
      {
        id: 'int-r2-q13',
        type: 'task',
        question: 'Summarize this passage using a mind map!',
      },
    ],
  },
  {
    id: 'int-reading-3',
    track: 'reading',
    day: 3,
    tutor: 'Ms. Lidya',
    title: 'Climate Change and Our Future',
    subtitle: 'Understanding the causes and consequences of global warming',
    overview:
      'Materi reading tentang perubahan iklim: penyebab, dampak global, dan langkah yang bisa diambil.',
    passage: [
      'Climate change refers to long-term shifts in temperatures and weather patterns on Earth. While some of these changes occur naturally, the overwhelming scientific consensus is that human activity has been the dominant driver of climate change since the mid-20th century. The burning of fossil fuels such as coal, oil, and natural gas releases large amounts of carbon dioxide and other greenhouse gases into the atmosphere, trapping heat and causing global temperatures to rise.',
      'The consequences of climate change are already being felt around the world. Glaciers and ice sheets are melting at an unprecedented rate, causing sea levels to rise and threatening low-lying coastal communities. Extreme weather events — including more intense hurricanes, prolonged droughts, and devastating floods — have become more frequent and severe. In many parts of the world, these events are displacing communities, destroying livelihoods, and straining emergency response systems.',
      'Biodiversity is another area of grave concern. As temperatures rise and habitats change rapidly, many plant and animal species are struggling to adapt. Scientists estimate that the current rate of extinction is between 100 and 1,000 times higher than natural background rates — a situation sometimes called the "sixth mass extinction." The loss of biodiversity not only threatens ecosystems but also jeopardizes the services that healthy ecosystems provide to humans, such as clean water, pollination, and natural pest control.',
      'Agriculture and food security are also at risk. Changing rainfall patterns, more frequent droughts, and rising temperatures are making it increasingly difficult to grow crops in regions that have historically been fertile. This threatens the food supply for billions of people, particularly in developing nations that are least equipped to adapt to these changes. Paradoxically, the countries that contribute the least to greenhouse gas emissions are often the ones most severely affected by climate change.',
      'Despite the challenges, there is reason for cautious optimism. Renewable energy technologies such as solar and wind power have advanced dramatically and are now often cheaper than fossil fuels. Many countries are setting ambitious targets to reduce their carbon emissions and transition to cleaner energy sources. International agreements such as the Paris Agreement have established frameworks for global cooperation. Individual actions — from reducing meat consumption to choosing sustainable transport — also contribute to the overall effort.',
      'Addressing climate change requires systemic change at every level of society: individual, corporate, and governmental. The decisions made in the coming decade will determine the severity of climate impacts for generations to come. As one leading climate scientist put it: "We have the tools to solve this problem. What we need now is the political will and social commitment to use them."',
    ],
    materialSections: [
      {
        title: 'Main Passage Focus',
        points: [
          'Climate change is driven mainly by human fossil fuel use since the mid-20th century.',
          'Effects: melting glaciers, rising seas, extreme weather displacing communities.',
          'Biodiversity crisis: extinction rates 100–1,000× higher than natural rates.',
          'Food security threatened, especially in developing countries that contribute least to emissions.',
          'Renewable energy is advancing and becoming cheaper; international agreements exist.',
          'Systemic change at all levels is needed; next decade is critical.',
        ],
      },
      {
        title: 'Key Vocabulary Themes',
        points: [
          'fossil fuels, greenhouse gases, carbon dioxide, atmosphere, global warming',
          'glacier, sea level, drought, biodiversity, extinction, habitat',
          'pollination, livelihoods, unprecedented, displacing',
          'renewable energy, solar, wind power, carbon emissions, Paris Agreement',
          'systemic, paradoxically, optimism, livelihoods, jeopardizes',
        ],
      },
    ],
    exercises: [
      {
        id: 'int-r3-q1',
        type: 'multiple-choice',
        question: 'What does the author say is the main cause of climate change?',
        options: [
          'Natural volcanic activity',
          'Changes in the Earth\'s orbit',
          'Human burning of fossil fuels',
          'Deforestation alone',
          'Changes in ocean currents',
        ],
        correctAnswer: 'Human burning of fossil fuels',
        reason:
          'Paragraf 1 menyatakan bahwa aktivitas manusia, khususnya pembakaran bahan bakar fosil, adalah penyebab utama perubahan iklim.',
      },
      {
        id: 'int-r3-q2',
        type: 'multiple-choice',
        question: 'In paragraph 3, "jeopardizes" most nearly means...',
        options: ['strengthens', 'protects', 'endangers', 'improves', 'supports'],
        correctAnswer: 'endangers',
        reason: '"Jeopardizes" berarti membahayakan atau mengancam. "Endangers" adalah kata yang paling tepat.',
      },
      {
        id: 'int-r3-q3',
        type: 'multiple-choice',
        question: 'Which of the following best describes the "paradox" mentioned in paragraph 4?',
        options: [
          'Developing countries produce the most emissions but are the least affected.',
          'Rich countries suffer more from climate change than poor ones.',
          'Countries that contribute least to emissions often suffer most from its effects.',
          'Renewable energy is more expensive than fossil fuels.',
          'Agriculture is improving despite climate change.',
        ],
        correctAnswer:
          'Countries that contribute least to emissions often suffer most from its effects.',
        reason:
          'Paradoks yang disebutkan adalah bahwa negara-negara yang paling sedikit berkontribusi pada emisi sering paling parah terdampak.',
      },
      {
        id: 'int-r3-q4',
        type: 'multiple-choice',
        question: 'What is the main idea of paragraph 5?',
        options: [
          'Climate change cannot be stopped anymore.',
          'Renewable energy is still very expensive.',
          'There are positive developments and reasons for hope in addressing climate change.',
          'Only governments can solve climate change.',
          'The Paris Agreement has already solved the problem.',
        ],
        correctAnswer: 'There are positive developments and reasons for hope in addressing climate change.',
        reason:
          'Paragraf 5 membahas perkembangan positif: energi terbarukan lebih murah, target emisi ambisius, dan perjanjian internasional.',
      },
      {
        id: 'int-r3-q5',
        type: 'short-answer',
        question: 'What does the scientist quoted at the end suggest is needed to solve climate change?',
      },
      {
        id: 'int-r3-q6',
        type: 'task',
        question:
          'Write a short paragraph about one thing you personally could do to help reduce your carbon footprint.',
      },
      {
        id: 'int-r3-q7',
        type: 'task',
        question:
          'Find 20 or more vocabulary words from this passage that you do not know and write their meanings.',
      },
      {
        id: 'int-r3-q8',
        type: 'task',
        question: 'Summarize this passage using a mind map!',
      },
    ],
  },
  {
    id: 'int-reading-4',
    track: 'reading',
    day: 4,
    tutor: 'Ms. Lidya',
    title: 'The Gig Economy',
    subtitle: 'Opportunities and challenges of modern freelance work',
    overview:
      'Materi reading tentang gig economy: peluang, tantangan, dan dampaknya bagi pekerja modern.',
    passage: [
      'The gig economy refers to a labour market characterised by short-term contracts or freelance work as opposed to permanent jobs. Enabled by digital technology and platforms such as Uber, Airbnb, Fiverr, and Upwork, the gig economy has grown significantly over the past decade and is now a major feature of economic life in many countries.',
      'For many workers, the appeal of gig work lies in its flexibility. Unlike traditional nine-to-five employment, gig workers can often choose when, where, and how much they work. This autonomy is particularly attractive to parents who need to balance childcare responsibilities, students who work between classes, or individuals who wish to pursue multiple income streams simultaneously. In some countries, as many as one in three workers participates in some form of freelance or gig work.',
      'However, this flexibility often comes at a significant cost. Gig workers typically lack the employment protections enjoyed by traditional employees, such as paid sick leave, health insurance, retirement benefits, and job security. Because they are classified as independent contractors rather than employees, they are also responsible for paying their own taxes, which can be complex and costly. For many workers, particularly those in lower-income brackets, the unpredictability of gig income can lead to financial instability.',
      'The platforms themselves have also attracted scrutiny. Critics argue that companies such as Uber and Deliveroo profit enormously from the labour of gig workers while avoiding the responsibilities of traditional employers. Legal battles have been fought in courts across Europe, Australia, and the United States over whether gig workers should be reclassified as employees with full rights. In some jurisdictions, notably the United Kingdom, courts have ruled in favour of drivers, granting them minimum wage guarantees and holiday pay.',
      'Proponents of the gig economy counter that it democratises access to work by lowering barriers to entry. A graphic designer in a developing country can now find clients anywhere in the world through platforms like Fiverr or Freelancer. This global connectivity has enabled many skilled workers in lower-income countries to earn far more than they could in their local job markets. From this perspective, the gig economy can be a powerful tool for economic inclusion.',
      'The future of gig work will likely depend on how governments, platforms, and workers negotiate the balance between flexibility and security. Some countries are experimenting with new legal frameworks — such as a "worker" category between employee and independent contractor — that aim to provide gig workers with certain protections without eliminating the flexibility that makes gig work appealing. The challenge for societies is to adapt their labour laws to a world where the nature of work itself is rapidly changing.',
    ],
    materialSections: [
      {
        title: 'Main Passage Focus',
        points: [
          'Gig economy = short-term/freelance work enabled by digital platforms.',
          'Appeal: flexibility, autonomy — attractive to parents, students, multi-income workers.',
          'Challenges: no sick leave, health insurance, retirement; tax responsibility; financial instability.',
          'Platform scrutiny: companies profit but avoid employer responsibilities; court battles ongoing.',
          'Positive side: democratises work, enables workers in developing countries to find global clients.',
          'Future depends on negotiating flexibility vs. security through new legal frameworks.',
        ],
      },
      {
        title: 'Key Vocabulary Themes',
        points: [
          'gig economy, freelance, contractor, autonomy, income streams',
          'employment protections, sick leave, retirement benefits, financial instability',
          'scrutiny, reclassified, jurisdictions, minimum wage, holiday pay',
          'proponents, democratises, barriers to entry, economic inclusion',
          'legal frameworks, labour laws, negotiate, rapidly changing',
        ],
      },
    ],
    exercises: [
      {
        id: 'int-r4-q1',
        type: 'multiple-choice',
        question: 'What is the main appeal of gig work mentioned in paragraph 2?',
        options: [
          'Higher salaries than traditional jobs',
          'Job security and retirement benefits',
          'Flexibility to choose when and how much to work',
          'Access to health insurance',
          'Guaranteed minimum wage',
        ],
        correctAnswer: 'Flexibility to choose when and how much to work',
        reason:
          'Paragraf 2 menyebutkan fleksibilitas sebagai daya tarik utama gig work — bisa memilih kapan, di mana, dan berapa banyak bekerja.',
      },
      {
        id: 'int-r4-q2',
        type: 'multiple-choice',
        question: 'In paragraph 4, "scrutiny" most nearly means...',
        options: ['support', 'close examination', 'praise', 'funding', 'protection'],
        correctAnswer: 'close examination',
        reason: '"Scrutiny" berarti pemeriksaan atau pengawasan yang ketat. "Close examination" adalah arti yang paling tepat.',
      },
      {
        id: 'int-r4-q3',
        type: 'multiple-choice',
        question: 'Which country is mentioned as having courts rule in favour of gig workers?',
        options: ['United States', 'Australia', 'United Kingdom', 'Germany', 'France'],
        correctAnswer: 'United Kingdom',
        reason:
          'Paragraf 4 menyebutkan bahwa pengadilan di Inggris (United Kingdom) telah memutuskan mendukung pengemudi, memberikan upah minimum dan tunjangan liburan.',
      },
      {
        id: 'int-r4-q4',
        type: 'multiple-choice',
        question: 'What is the main idea of paragraph 5?',
        options: [
          'Gig economy only benefits wealthy workers.',
          'Fiverr and Freelancer are the best platforms for designers.',
          'The gig economy can provide economic opportunities for workers in developing countries.',
          'Graphic designers earn less through gig platforms.',
          'Developing countries oppose the gig economy.',
        ],
        correctAnswer:
          'The gig economy can provide economic opportunities for workers in developing countries.',
        reason:
          'Paragraf 5 membahas sisi positif gig economy — memungkinkan pekerja di negara berkembang mengakses klien global dan mendapatkan penghasilan lebih baik.',
      },
      {
        id: 'int-r4-q5',
        type: 'short-answer',
        question: 'What solution does the author suggest for balancing flexibility and security in gig work?',
      },
      {
        id: 'int-r4-q6',
        type: 'task',
        question:
          'Have you ever done any kind of gig or freelance work (e.g. selling things online, tutoring, etc.)? Write 5–7 sentences about your experience or opinion on gig work.',
      },
      {
        id: 'int-r4-q7',
        type: 'task',
        question: 'Find 20 or more vocabulary words from this passage that you do not know and write their meanings.',
      },
      {
        id: 'int-r4-q8',
        type: 'task',
        question: 'Summarize this passage using a mind map!',
      },
    ],
  },
];

// ── Speaking Lessons ──────────────────────────────────────────────────────────

const speakingLessons: ModuleLesson[] = [
  {
    id: 'int-speaking-2',
    track: 'speaking',
    day: 2,
    tutor: 'Ms. Lidya',
    title: 'Expressing Opinions',
    subtitle: 'How to agree, disagree, and give your point of view',
    overview:
      'Materi speaking tentang cara mengungkapkan pendapat, setuju, dan tidak setuju dalam percakapan sehari-hari.',
    materialSections: [
      {
        title: 'Key Expressions',
        points: [
          'In my opinion, … / I think … / I believe …',
          'From my point of view, …',
          'I agree with you because …',
          'I disagree because …',
          'That\'s a good point, however …',
          'I see what you mean, but …',
          'I\'m not sure I agree. My view is that …',
        ],
      },
      {
        title: 'Useful Connectors',
        points: [
          'Furthermore / Moreover / In addition — menambahkan informasi',
          'However / Nevertheless / On the other hand — kontras/pertentangan',
          'Therefore / As a result / Consequently — menyatakan akibat',
          'For example / For instance / Such as — memberikan contoh',
        ],
      },
      {
        title: 'Speaking Tips',
        points: [
          'Pause briefly before giving your opinion — it shows you are thinking, not rushing.',
          'Use hedging language: "I think", "It seems to me", "Perhaps" — sounds more natural.',
          'Ask for the other person\'s opinion: "What do you think?" / "Do you agree?"',
          'Use real examples from your life to support your point.',
        ],
      },
    ],
    exercises: [
      {
        id: 'int-sp2-q1',
        type: 'task',
        question:
          'Practice expressing your opinion: "Do you think social media has more benefits or drawbacks?" Speak for at least 1 minute.',
      },
      {
        id: 'int-sp2-q2',
        type: 'task',
        question:
          'Role-play with a partner: one person argues FOR homework, the other argues AGAINST. Use the expressions from this lesson.',
      },
      {
        id: 'int-sp2-q3',
        type: 'task',
        question:
          'Record yourself giving your opinion on: "Should students be allowed to use their phones in class?" Use at least 3 expressions from the Key Expressions list.',
      },
    ],
  },
];

// ── Listening Lessons ─────────────────────────────────────────────────────────

const listeningLessons: ModuleLesson[] = [
  {
    id: 'int-listening-2',
    track: 'listening',
    day: 2,
    tutor: 'Ms. Lidya',
    title: 'Everyday Conversations',
    subtitle: 'Listening for detail and gist in daily dialogues',
    overview:
      'Materi listening tentang strategi mendengarkan percakapan sehari-hari: memahami gist, detail spesifik, dan nada bicara.',
    materialSections: [
      {
        title: 'Listening Strategies',
        points: [
          '🎯 Listening for GIST — memahami isi umum/topik utama. Jangan terpaku pada setiap kata.',
          '🔍 Listening for DETAIL — mencari informasi spesifik (angka, nama, waktu, tempat).',
          '💡 Listening for ATTITUDE — memahami perasaan atau pendapat pembicara (positive/negative/neutral).',
          '✏️ Note-taking — tulis kata kunci, bukan kalimat lengkap, saat mendengarkan.',
          '🔄 Listen twice — pertama untuk gist, kedua untuk detail dan konfirmasi jawaban.',
        ],
      },
      {
        title: 'Common Traps in Listening Tests',
        points: [
          '⚠️ Distractor words — pembicara menyebut kata yang mirip pilihan jawaban, tapi bukan yang benar.',
          '⚠️ Negation — "He does NOT like coffee" → jangan pilih "coffee" sebagai yang dia suka.',
          '⚠️ Correction — pembicara bisa mengoreksi dirinya sendiri: "Monday — no wait, Tuesday."',
          '⚠️ Paraphrasing — jawaban di audio dan soal sering menggunakan kata yang berbeda tapi makna sama.',
        ],
      },
      {
        title: 'Key Phrases to Listen For',
        points: [
          'Actually / In fact — pembicara menyampaikan informasi penting atau koreksi',
          'So / Therefore / As a result — menyatakan kesimpulan atau akibat',
          'But / However / Although — menyatakan perubahan arah/kontras',
          'First / Then / Finally / After that — urutan kejadian',
        ],
      },
    ],
    exercises: [
      {
        id: 'int-ls2-q1',
        type: 'task',
        question:
          'Listen to a short English podcast or YouTube video (2–3 minutes). Write down 5 key ideas you heard. Share with the class.',
      },
      {
        id: 'int-ls2-q2',
        type: 'task',
        question:
          'Listen to your tutor read the following sentences and identify: is the speaker\'s tone positive, negative, or neutral? Explain your answer.',
      },
      {
        id: 'int-ls2-q3',
        type: 'task',
        question:
          'Partner activity: one person describes their weekend plan using only spoken English (no text), the other takes notes. Then summarize what you heard.',
      },
    ],
  },
];

// ── Grammar Lessons (link to tnIntermediateGrammar topics) ───────────────────

const grammarLessons: ModuleLesson[] = [
  {
    id: 'int-grammar-2',
    track: 'grammar',
    day: 2,
    tutor: 'Ms. Lidya',
    title: '5 Tenses + Grammar Structures',
    subtitle: 'Simple Present, Past, Future, Present Continuous, Present Perfect, Adjective Clause, Gerund & Infinitive',
    overview:
      'Materi grammar TN Intermediate mencakup 5 tenses utama dan 2 grammar structure: Adjective Clause dan To Infinitive & Gerund.',
    materialSections: [
      {
        title: 'Topics Covered',
        points: [
          '1. Simple Present Tense — kebiasaan, fakta, rutinitas (S + V1(s/es))',
          '2. Simple Past Tense — kejadian di masa lalu (S + V2)',
          '3. Simple Future Tense — rencana atau prediksi (S + will + V1)',
          '4. Present Continuous — sedang terjadi sekarang (S + is/am/are + V-ing)',
          '5. Present Perfect — pengalaman atau hasil (S + has/have + V3)',
          '6. Adjective Clause — klausa yang memodifikasi noun (who, which, that, where, whose)',
          '7. To Infinitive & Gerund — V+to+V1 vs V+V-ing',
        ],
      },
      {
        title: 'Study Tip',
        points: [
          'Pelajari setiap topic satu per satu di halaman Grammar TN Intermediate.',
          'Perhatikan formula, signal words, dan contoh kalimat di setiap topic.',
          'Kerjakan latihan soal di setiap topic sebelum ke materi berikutnya.',
        ],
      },
    ],
    exercises: [
      {
        id: 'int-gr2-q1',
        type: 'task',
        question:
          'Buka halaman Grammar TN Intermediate dan pelajari semua 7 topic. Tulis 2 contoh kalimat untuk masing-masing topic (total 14 kalimat).',
      },
      {
        id: 'int-gr2-q2',
        type: 'task',
        question:
          'Kerjakan semua latihan soal di setiap grammar topic. Catat skor kamu dan review kesalahan.',
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
    track: 'reading',
    title: 'Reading Intermediate',
    description: 'Teks bacaan bertopik akademis & kontemporer: media sosial, iklim, ekonomi, dan lainnya.',
    pdfPath: '',
  },
  {
    track: 'speaking',
    title: 'Speaking Intermediate',
    description: 'Latihan speaking: ekspresi pendapat, diskusi, dan percakapan level intermediate.',
    pdfPath: '',
  },
  {
    track: 'grammar',
    title: 'Grammar Intermediate',
    description: '5 tenses utama + Adjective Clause + To Infinitive & Gerund dengan latihan soal.',
    pdfPath: '',
  },
  {
    track: 'listening',
    title: 'Listening Intermediate',
    description: 'Strategi listening: gist, detail, attitude, dan latihan percakapan sehari-hari.',
    pdfPath: '',
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
