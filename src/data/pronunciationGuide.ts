export interface PronunciationExample {
  word: string;
  phonetic: string;
  translation: string;
  note?: string;
}

export interface PronunciationRule {
  context: string;
  sound: string;
  soundLabel: string;
  description: string;
  examples: PronunciationExample[];
}

export interface CommonMistake {
  word: string;
  wrong: string;
  right: string;
  tip: string;
}

export interface PronunciationTopic {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  intro: string;
  rules: PronunciationRule[];
  tips: string[];
  commonMistakes?: CommonMistake[];
}

export const pronunciationTopics: PronunciationTopic[] = [
  {
    id: "ed-endings",
    emoji: "🔤",
    title: "-ED Endings",
    subtitle: "Cara membaca akhiran -ED",
    shortDescription:
      "Akhiran -ED punya 3 cara baca berbeda: /t/, /d/, dan /ɪd/. Banyak pelajar salah baca semua kata dengan -ED sebagai 'ed'.",
    intro:
      "Akhiran -ED digunakan untuk past tense dan past participle. Cara membacanya bergantung pada bunyi terakhir dari kata dasarnya, bukan hurufnya. Ada 3 aturan utama.",
    rules: [
      {
        context: "Setelah konsonan tak bersuara (voiceless): /p/, /k/, /f/, /s/, /ʃ/, /tʃ/",
        sound: "/t/",
        soundLabel: "Bunyi T",
        description:
          "Kalau kata dasar berakhir dengan konsonan tak bersuara, -ED dibaca /t/ (seperti huruf T tanpa 'ed'). Bayangkan suara 't' kecil di akhir kata.",
        examples: [
          { word: "walked", phonetic: "/wɔːkt/", translation: "berjalan", note: "walk + ed → /t/" },
          { word: "talked", phonetic: "/tɔːkt/", translation: "berbicara", note: "talk + ed → /t/" },
          { word: "stopped", phonetic: "/stɒpt/", translation: "berhenti", note: "stop + ed → /t/" },
          { word: "worked", phonetic: "/wɜːkt/", translation: "bekerja", note: "work + ed → /t/" },
          { word: "laughed", phonetic: "/læft/", translation: "tertawa", note: "laugh + ed → /t/" },
          { word: "washed", phonetic: "/wɒʃt/", translation: "mencuci", note: "wash + ed → /t/" },
          { word: "watched", phonetic: "/wɒtʃt/", translation: "menonton", note: "watch + ed → /t/" },
          { word: "looked", phonetic: "/lʊkt/", translation: "melihat", note: "look + ed → /t/" },
          { word: "helped", phonetic: "/hɛlpt/", translation: "membantu", note: "help + ed → /t/" },
          { word: "jumped", phonetic: "/dʒʌmpt/", translation: "melompat", note: "jump + ed → /t/" },
        ],
      },
      {
        context: "Setelah vokal atau konsonan bersuara (voiced): /b/, /g/, /v/, /z/, /m/, /n/, /l/, /r/, dll",
        sound: "/d/",
        soundLabel: "Bunyi D",
        description:
          "Kalau kata dasar berakhir dengan vokal atau konsonan bersuara, -ED dibaca /d/ (seperti huruf D tanpa tambahan suara). Bunyi ini lebih lembut.",
        examples: [
          { word: "played", phonetic: "/pleɪd/", translation: "bermain", note: "play + ed → /d/" },
          { word: "called", phonetic: "/kɔːld/", translation: "memanggil", note: "call + ed → /d/" },
          { word: "learned", phonetic: "/lɜːrnd/", translation: "belajar", note: "learn + ed → /d/" },
          { word: "lived", phonetic: "/lɪvd/", translation: "tinggal/hidup", note: "live + ed → /d/" },
          { word: "moved", phonetic: "/muːvd/", translation: "berpindah", note: "move + ed → /d/" },
          { word: "opened", phonetic: "/ˈoʊpənd/", translation: "membuka", note: "open + ed → /d/" },
          { word: "closed", phonetic: "/kloʊzd/", translation: "menutup", note: "close + ed → /d/" },
          { word: "rained", phonetic: "/reɪnd/", translation: "hujan", note: "rain + ed → /d/" },
          { word: "cried", phonetic: "/kraɪd/", translation: "menangis", note: "cry + ed → /d/" },
          { word: "traveled", phonetic: "/ˈtrævəld/", translation: "bepergian", note: "travel + ed → /d/" },
        ],
      },
      {
        context: "Setelah bunyi /t/ atau /d/",
        sound: "/ɪd/",
        soundLabel: "Bunyi ID",
        description:
          "Hanya ketika kata dasar berakhir dengan bunyi /t/ atau /d/, -ED dibaca /ɪd/ (diucapkan 'id'). Ini satu-satunya situasi di mana kita benar-benar mendengar suku kata tambahan.",
        examples: [
          { word: "wanted", phonetic: "/ˈwɒntɪd/", translation: "menginginkan", note: "want (t) + ed → /ɪd/" },
          { word: "needed", phonetic: "/ˈniːdɪd/", translation: "membutuhkan", note: "need (d) + ed → /ɪd/" },
          { word: "started", phonetic: "/ˈstɑːrtɪd/", translation: "memulai", note: "start (t) + ed → /ɪd/" },
          { word: "ended", phonetic: "/ˈɛndɪd/", translation: "berakhir", note: "end (d) + ed → /ɪd/" },
          { word: "waited", phonetic: "/ˈweɪtɪd/", translation: "menunggu", note: "wait (t) + ed → /ɪd/" },
          { word: "visited", phonetic: "/ˈvɪzɪtɪd/", translation: "mengunjungi", note: "visit (t) + ed → /ɪd/" },
          { word: "decided", phonetic: "/dɪˈsaɪdɪd/", translation: "memutuskan", note: "decide (d) + ed → /ɪd/" },
          { word: "added", phonetic: "/ˈædɪd/", translation: "menambahkan", note: "add (d) + ed → /ɪd/" },
          { word: "pointed", phonetic: "/ˈpɔɪntɪd/", translation: "menunjuk", note: "point (t) + ed → /ɪd/" },
          { word: "expected", phonetic: "/ɪkˈspɛktɪd/", translation: "mengharapkan", note: "expect (t) + ed → /ɪd/" },
        ],
      },
    ],
    tips: [
      "Kuncinya bukan huruf terakhir, tapi BUNYI terakhir dari kata dasar.",
      "Tes cepat: sentuh tenggorokan saat mengucapkan bunyi terakhir — kalau bergetar = voiced (/d/), kalau tidak bergetar = voiceless (/t/).",
      "Aturan /ɪd/ hanya berlaku setelah /t/ atau /d/ — ini agar tidak ada dua bunyi yang sama berturut-turut.",
      "Latihan: ucapkan 'walk' lalu 'walked' — rasakan /t/ di akhir, bukan 'id'.",
    ],
    commonMistakes: [
      {
        word: "talked",
        wrong: "/ˈtɔːk-ɛd/",
        right: "/tɔːkt/",
        tip: "Jangan tambah suku kata. Bunyi /k/ adalah voiceless, jadi -ED = /t/.",
      },
      {
        word: "played",
        wrong: "/ˈpleɪ-ɛd/",
        right: "/pleɪd/",
        tip: "Berakhir dengan vokal 'y', termasuk voiced, jadi -ED = /d/.",
      },
      {
        word: "wanted",
        wrong: "/wɒnt/",
        right: "/ˈwɒntɪd/",
        tip: "Berakhir dengan /t/, jadi -ED = /ɪd/ — ini satu-satunya yang punya suku kata tambahan.",
      },
    ],
  },

  {
    id: "silent-letters",
    emoji: "🤫",
    title: "Silent Letters",
    subtitle: "Huruf yang tidak dibaca",
    shortDescription:
      "Banyak kata Inggris punya huruf yang ditulis tapi tidak diucapkan. Menguasai ini sangat penting untuk pengucapan yang alami.",
    intro:
      "Bahasa Inggris memiliki banyak huruf yang ditulis tapi tidak diucapkan — disebut 'silent letters'. Ini sering membingungkan karena ejaan tidak selalu mencerminkan pengucapan. Berikut pola-pola utamanya.",
    rules: [
      {
        context: "Silent K — KN di awal kata",
        sound: "❌ K",
        soundLabel: "K tidak dibaca",
        description:
          "Ketika kata dimulai dengan KN, huruf K tidak dibaca. Hanya N yang diucapkan.",
        examples: [
          { word: "know", phonetic: "/noʊ/", translation: "tahu/mengetahui", note: "K diam, baca 'no'" },
          { word: "knee", phonetic: "/niː/", translation: "lutut", note: "K diam, baca 'nee'" },
          { word: "knife", phonetic: "/naɪf/", translation: "pisau", note: "K diam, baca 'nife'" },
          { word: "knock", phonetic: "/nɒk/", translation: "mengetuk", note: "K diam, baca 'nock'" },
          { word: "knight", phonetic: "/naɪt/", translation: "ksatria", note: "K dan GH diam, baca 'nite'" },
          { word: "knit", phonetic: "/nɪt/", translation: "merajut", note: "K diam, baca 'nit'" },
          { word: "knob", phonetic: "/nɒb/", translation: "kenop/tombol", note: "K diam, baca 'nob'" },
        ],
      },
      {
        context: "Silent B — MB atau BT di akhir kata",
        sound: "❌ B",
        soundLabel: "B tidak dibaca",
        description:
          "Huruf B tidak dibaca ketika berada setelah M di akhir kata, atau sebelum T.",
        examples: [
          { word: "climb", phonetic: "/klaɪm/", translation: "memanjat", note: "B diam, baca 'clime'" },
          { word: "bomb", phonetic: "/bɒm/", translation: "bom", note: "B diam, baca 'bom'" },
          { word: "lamb", phonetic: "/læm/", translation: "anak domba", note: "B diam, baca 'lam'" },
          { word: "thumb", phonetic: "/θʌm/", translation: "ibu jari", note: "B diam, baca 'thum'" },
          { word: "comb", phonetic: "/koʊm/", translation: "sisir", note: "B diam, baca 'kome'" },
          { word: "debt", phonetic: "/dɛt/", translation: "utang", note: "B diam, baca 'det'" },
          { word: "doubt", phonetic: "/daʊt/", translation: "keraguan", note: "B diam, baca 'dout'" },
          { word: "subtle", phonetic: "/ˈsʌtl/", translation: "halus/samar", note: "B diam, baca 'suttle'" },
        ],
      },
      {
        context: "Silent GH — setelah vokal atau di akhir kata",
        sound: "❌ GH",
        soundLabel: "GH tidak dibaca",
        description:
          "Kombinasi GH sangat sering diam, terutama setelah vokal panjang atau di akhir kata. Ini salah satu yang paling membingungkan.",
        examples: [
          { word: "though", phonetic: "/ðoʊ/", translation: "walaupun/meskipun", note: "GH diam, baca 'tho'" },
          { word: "through", phonetic: "/θruː/", translation: "melalui", note: "GH diam, baca 'threw'" },
          { word: "night", phonetic: "/naɪt/", translation: "malam", note: "GH diam, baca 'nite'" },
          { word: "right", phonetic: "/raɪt/", translation: "benar/kanan", note: "GH diam, baca 'rite'" },
          { word: "light", phonetic: "/laɪt/", translation: "cahaya/ringan", note: "GH diam, baca 'lite'" },
          { word: "eight", phonetic: "/eɪt/", translation: "delapan", note: "GH diam, baca 'ate'" },
          { word: "daughter", phonetic: "/ˈdɔːtər/", translation: "putri/anak perempuan", note: "GH diam" },
          { word: "thought", phonetic: "/θɔːt/", translation: "pikiran/berpikir", note: "GH diam, baca 'thawt'" },
          { word: "bought", phonetic: "/bɔːt/", translation: "membeli (past)", note: "GH diam, baca 'bawt'" },
          { word: "high", phonetic: "/haɪ/", translation: "tinggi", note: "GH diam, baca 'hi'" },
        ],
      },
      {
        context: "Silent W — WR di awal kata",
        sound: "❌ W",
        soundLabel: "W tidak dibaca",
        description:
          "Ketika kata dimulai dengan WR, huruf W tidak dibaca. Hanya R yang diucapkan.",
        examples: [
          { word: "write", phonetic: "/raɪt/", translation: "menulis", note: "W diam, baca 'rite'" },
          { word: "wrong", phonetic: "/rɒŋ/", translation: "salah", note: "W diam, baca 'rong'" },
          { word: "wrap", phonetic: "/ræp/", translation: "membungkus", note: "W diam, baca 'rap'" },
          { word: "wrist", phonetic: "/rɪst/", translation: "pergelangan tangan", note: "W diam, baca 'rist'" },
          { word: "wreck", phonetic: "/rɛk/", translation: "menghancurkan/reruntuhan", note: "W diam, baca 'reck'" },
          { word: "wrestle", phonetic: "/ˈrɛsl/", translation: "gulat", note: "W diam, baca 'restle'" },
        ],
      },
      {
        context: "Silent L — setelah A, O, U sebelum konsonan tertentu",
        sound: "❌ L",
        soundLabel: "L tidak dibaca",
        description:
          "Huruf L sering tidak dibaca dalam kombinasi -ALK, -ALF, -ALM, -OLK, -OULD.",
        examples: [
          { word: "walk", phonetic: "/wɔːk/", translation: "berjalan", note: "L diam, baca 'wawk'" },
          { word: "talk", phonetic: "/tɔːk/", translation: "berbicara", note: "L diam, baca 'tawk'" },
          { word: "calm", phonetic: "/kɑːm/", translation: "tenang", note: "L diam, baca 'cahm'" },
          { word: "half", phonetic: "/hɑːf/", translation: "setengah", note: "L diam, baca 'hahf'" },
          { word: "palm", phonetic: "/pɑːm/", translation: "telapak tangan/pohon palem", note: "L diam, baca 'pahm'" },
          { word: "could", phonetic: "/kʊd/", translation: "bisa (past)", note: "L diam, baca 'cud'" },
          { word: "would", phonetic: "/wʊd/", translation: "akan (past)", note: "L diam, baca 'wud'" },
          { word: "should", phonetic: "/ʃʊd/", translation: "seharusnya", note: "L diam, baca 'shud'" },
        ],
      },
      {
        context: "Silent H — di awal kata tertentu atau setelah vokal",
        sound: "❌ H",
        soundLabel: "H tidak dibaca",
        description:
          "Huruf H tidak dibaca di beberapa kata umum, terutama yang berasal dari bahasa Prancis.",
        examples: [
          { word: "hour", phonetic: "/aʊər/", translation: "jam (waktu)", note: "H diam, baca 'our'" },
          { word: "honest", phonetic: "/ˈɒnɪst/", translation: "jujur", note: "H diam, baca 'onist'" },
          { word: "honor", phonetic: "/ˈɒnər/", translation: "kehormatan", note: "H diam, baca 'onor'" },
          { word: "heir", phonetic: "/ɛər/", translation: "pewaris", note: "H diam, baca 'air'" },
          { word: "vehicle", phonetic: "/ˈviːɪkl/", translation: "kendaraan", note: "H diam" },
          { word: "ghost", phonetic: "/goʊst/", translation: "hantu", note: "H diam, G diucapkan" },
        ],
      },
      {
        context: "Silent P — PN, PS, PT di awal kata",
        sound: "❌ P",
        soundLabel: "P tidak dibaca",
        description:
          "Dalam kata-kata dari bahasa Yunani yang dimulai PN, PS, atau PT, huruf P tidak dibaca.",
        examples: [
          { word: "psychology", phonetic: "/saɪˈkɒlədʒi/", translation: "psikologi", note: "P diam, baca 'saikology'" },
          { word: "pneumonia", phonetic: "/njuːˈmoʊniə/", translation: "pneumonia", note: "P diam, baca 'newmonia'" },
          { word: "receipt", phonetic: "/rɪˈsiːt/", translation: "tanda terima/kwitansi", note: "P diam, baca 'reseet'" },
          { word: "psychiatrist", phonetic: "/saɪˈkaɪətrɪst/", translation: "psikiater", note: "P diam" },
        ],
      },
      {
        context: "Silent T — dalam beberapa kata umum",
        sound: "❌ T",
        soundLabel: "T tidak dibaca",
        description:
          "Huruf T tidak dibaca dalam beberapa kata, terutama kombinasi -STEN, -STLE, dan sebelum CH.",
        examples: [
          { word: "listen", phonetic: "/ˈlɪsn/", translation: "mendengarkan", note: "T diam, baca 'lissen'" },
          { word: "castle", phonetic: "/ˈkæsl/", translation: "kastil", note: "T diam, baca 'cassel'" },
          { word: "often", phonetic: "/ˈɒfn/ atau /ˈɒftən/", translation: "sering", note: "T bisa diam (keduanya benar)" },
          { word: "whistle", phonetic: "/ˈwɪsl/", translation: "bersiul", note: "T diam, baca 'wissel'" },
          { word: "fasten", phonetic: "/ˈfɑːsn/", translation: "mengikat/mengencangkan", note: "T diam, baca 'fahssen'" },
          { word: "Christmas", phonetic: "/ˈkrɪsməs/", translation: "Natal", note: "T diam, baca 'Krismas'" },
          { word: "mortgage", phonetic: "/ˈmɔːɡɪdʒ/", translation: "hipotek/kredit rumah", note: "T diam" },
        ],
      },
    ],
    tips: [
      "Silent letters tidak bisa ditebak — harus dihafal satu per satu dengan latihan.",
      "Pola KN, WR di awal kata hampir selalu diam — ini aturan yang konsisten.",
      "GH adalah yang paling rumit karena kadang diam, kadang berbunyi /f/ (rough, enough), atau /g/ (ghost, ghetto).",
      "Saat ragu, cek kamus — IPA (International Phonetic Alphabet) akan menunjukkan huruf mana yang tidak dibaca.",
      "Mendengarkan native speaker dan podcast bahasa Inggris sangat membantu mengenali silent letters secara alami.",
    ],
    commonMistakes: [
      {
        word: "know",
        wrong: "/knoʊ/",
        right: "/noʊ/",
        tip: "KN di awal kata: K selalu diam. Ucapkan 'no', bukan 'kno'.",
      },
      {
        word: "walk",
        wrong: "/wɔːlk/",
        right: "/wɔːk/",
        tip: "Dalam ALK: L diam. Ucapkan 'wawk', bukan 'wohlk'.",
      },
      {
        word: "debt",
        wrong: "/dɛbt/",
        right: "/dɛt/",
        tip: "B di -BT diam. Ucapkan 'det', bukan 'debt'.",
      },
    ],
  },

  {
    id: "s-es-endings",
    emoji: "🔊",
    title: "-S / -ES Endings",
    subtitle: "Cara membaca akhiran -S dan -ES",
    shortDescription:
      "Akhiran -S (plural dan present tense) punya 3 cara baca: /s/, /z/, dan /ɪz/. Sama seperti -ED, bergantung pada bunyi terakhir kata dasar.",
    intro:
      "Akhiran -S digunakan untuk plural (cats, dogs) dan present tense orang ketiga (she walks, he runs). Ada 3 cara membacanya, mirip dengan aturan -ED.",
    rules: [
      {
        context: "Setelah konsonan tak bersuara (voiceless): /p/, /t/, /k/, /f/, /θ/",
        sound: "/s/",
        soundLabel: "Bunyi S",
        description:
          "Setelah bunyi tak bersuara, -S dibaca seperti S biasa — singkat dan tajam.",
        examples: [
          { word: "cats", phonetic: "/kæts/", translation: "kucing-kucing", note: "cat + s → /s/" },
          { word: "books", phonetic: "/bʊks/", translation: "buku-buku", note: "book + s → /s/" },
          { word: "cups", phonetic: "/kʌps/", translation: "cangkir-cangkir", note: "cup + s → /s/" },
          { word: "months", phonetic: "/mʌnθs/", translation: "bulan-bulan", note: "month + s → /s/" },
          { word: "stops", phonetic: "/stɒps/", translation: "berhenti (dia)", note: "stop + s → /s/" },
          { word: "walks", phonetic: "/wɔːks/", translation: "berjalan (dia)", note: "walk + s → /s/" },
        ],
      },
      {
        context: "Setelah vokal atau konsonan bersuara (voiced): /b/, /d/, /g/, /v/, /m/, /n/, /l/, /r/, dll",
        sound: "/z/",
        soundLabel: "Bunyi Z",
        description:
          "Setelah vokal dan bunyi bersuara, -S dibaca seperti Z — lebih bergetar. Ini yang paling umum.",
        examples: [
          { word: "dogs", phonetic: "/dɒɡz/", translation: "anjing-anjing", note: "dog + s → /z/" },
          { word: "trees", phonetic: "/triːz/", translation: "pohon-pohon", note: "tree + s → /z/" },
          { word: "boys", phonetic: "/bɔɪz/", translation: "anak laki-laki", note: "boy + s → /z/" },
          { word: "cars", phonetic: "/kɑːrz/", translation: "mobil-mobil", note: "car + s → /z/" },
          { word: "calls", phonetic: "/kɔːlz/", translation: "menelepon (dia)", note: "call + s → /z/" },
          { word: "plays", phonetic: "/pleɪz/", translation: "bermain (dia)", note: "play + s → /z/" },
        ],
      },
      {
        context: "Setelah bunyi sibilant: /s/, /z/, /ʃ/, /ʒ/, /tʃ/, /dʒ/ (bunyi desis)",
        sound: "/ɪz/",
        soundLabel: "Bunyi IZ",
        description:
          "Setelah bunyi desis, -ES dibaca /ɪz/ (diucapkan 'iz'). Ini menambah suku kata agar tidak ada dua bunyi desis berturut-turut.",
        examples: [
          { word: "buses", phonetic: "/ˈbʌsɪz/", translation: "bus-bus", note: "bus + es → /ɪz/" },
          { word: "churches", phonetic: "/ˈtʃɜːrtʃɪz/", translation: "gereja-gereja", note: "church + es → /ɪz/" },
          { word: "dishes", phonetic: "/ˈdɪʃɪz/", translation: "piring-piring", note: "dish + es → /ɪz/" },
          { word: "boxes", phonetic: "/ˈbɒksɪz/", translation: "kotak-kotak", note: "box + es → /ɪz/" },
          { word: "watches", phonetic: "/ˈwɒtʃɪz/", translation: "jam tangan/menonton (dia)", note: "watch + es → /ɪz/" },
          { word: "judges", phonetic: "/ˈdʒʌdʒɪz/", translation: "hakim-hakim", note: "judge + es → /ɪz/" },
          { word: "roses", phonetic: "/ˈroʊzɪz/", translation: "mawar-mawar", note: "rose + es → /ɪz/" },
        ],
      },
    ],
    tips: [
      "Aturan /ɪz/ berlaku untuk kata-kata yang berakhir dengan bunyi 'desis' — coba ucapkan dan rasakan apakah ujung lidah/gigi ikut 'mendesis'.",
      "Dalam percakapan sehari-hari, /s/ dan /z/ sering hampir sama — yang penting jangan menambah suku kata kecuali memang -ES.",
      "Kata-kata yang berakhir -SH, -CH, -X, -S, -Z, -GE hampir selalu menggunakan /ɪz/ untuk pluralnya.",
    ],
    commonMistakes: [
      {
        word: "dogs",
        wrong: "/dɒɡs/",
        right: "/dɒɡz/",
        tip: "G adalah voiced, jadi -S dibaca /z/. Ucapkan 'dogz', bukan 'dogs' (dengan S tajam).",
      },
      {
        word: "churches",
        wrong: "/tʃɜːrtʃs/",
        right: "/ˈtʃɜːrtʃɪz/",
        tip: "Berakhir dengan bunyi desis /tʃ/, jadi butuh -ES yang dibaca /ɪz/.",
      },
    ],
  },

  {
    id: "th-sounds",
    emoji: "👅",
    title: "TH Sounds",
    subtitle: "Dua bunyi TH yang berbeda",
    shortDescription:
      "Kombinasi TH punya dua bunyi yang sangat berbeda: yang bersuara /ð/ dan yang tak bersuara /θ/. Ini tidak ada padanannya dalam bahasa Indonesia.",
    intro:
      "Bunyi TH adalah salah satu yang paling sulit bagi pelajar Indonesia karena tidak ada dalam bahasa kita. Ada dua jenis TH: /θ/ (tak bersuara, seperti 'th' di 'think') dan /ð/ (bersuara, seperti 'th' di 'the'). Keduanya dibuat dengan meletakkan ujung lidah di antara gigi.",
    rules: [
      {
        context: "Tak bersuara /θ/ — ujung lidah di antara gigi, tiup udara tanpa suara",
        sound: "/θ/",
        soundLabel: "TH tak bersuara",
        description:
          "Letakkan ujung lidah di antara atau di belakang gigi atas, lalu tiup udara tanpa menggetarkan pita suara. Bunyi ini mirip 'S' tapi dengan lidah di gigi.",
        examples: [
          { word: "think", phonetic: "/θɪŋk/", translation: "berpikir", note: "TH tak bersuara" },
          { word: "thank", phonetic: "/θæŋk/", translation: "berterima kasih", note: "TH tak bersuara" },
          { word: "three", phonetic: "/θriː/", translation: "tiga", note: "TH tak bersuara" },
          { word: "thousand", phonetic: "/ˈθaʊzənd/", translation: "seribu", note: "TH tak bersuara" },
          { word: "tooth", phonetic: "/tuːθ/", translation: "gigi", note: "TH tak bersuara di akhir" },
          { word: "month", phonetic: "/mʌnθ/", translation: "bulan", note: "TH tak bersuara di akhir" },
          { word: "bath", phonetic: "/bɑːθ/", translation: "mandi/bak mandi", note: "TH tak bersuara di akhir" },
          { word: "north", phonetic: "/nɔːrθ/", translation: "utara", note: "TH tak bersuara di akhir" },
        ],
      },
      {
        context: "Bersuara /ð/ — ujung lidah di antara gigi, getarkan pita suara",
        sound: "/ð/",
        soundLabel: "TH bersuara",
        description:
          "Posisi lidah sama dengan /θ/, tapi kali ini getarkan pita suara. Coba sentuh tenggorokan — harus terasa getaran. Bunyi ini lebih 'berat' dari /θ/.",
        examples: [
          { word: "the", phonetic: "/ðə/ atau /ðiː/", translation: "si/sang (artikel)", note: "TH bersuara — kata paling sering di bahasa Inggris!" },
          { word: "this", phonetic: "/ðɪs/", translation: "ini", note: "TH bersuara" },
          { word: "that", phonetic: "/ðæt/", translation: "itu", note: "TH bersuara" },
          { word: "there", phonetic: "/ðɛər/", translation: "di sana", note: "TH bersuara" },
          { word: "they", phonetic: "/ðeɪ/", translation: "mereka", note: "TH bersuara" },
          { word: "though", phonetic: "/ðoʊ/", translation: "walaupun", note: "TH bersuara" },
          { word: "breathe", phonetic: "/briːð/", translation: "bernafas", note: "TH bersuara di akhir" },
          { word: "mother", phonetic: "/ˈmʌðər/", translation: "ibu", note: "TH bersuara di tengah" },
          { word: "other", phonetic: "/ˈʌðər/", translation: "lain/yang lain", note: "TH bersuara" },
          { word: "together", phonetic: "/təˈɡɛðər/", translation: "bersama", note: "TH bersuara" },
        ],
      },
    ],
    tips: [
      "Pola umum: pronoun, artikel, dan conjunctions (the, this, that, they, though) = /ð/ bersuara.",
      "Kata benda, kata kerja, kata sifat biasanya = /θ/ tak bersuara (think, thank, three).",
      "Jangan ucapkan TH seperti 'D' atau 'T' atau 'S' — itu akan terdengar salah.",
      "Latihan: taruh cermin di depan mulut. Saat mengucapkan TH, ujung lidah harus terlihat sebentar.",
      "Perhatikan: 'teeth' (gigi-gigi, noun) = /θ/ tapi 'teethe' (tumbuh gigi, verb) = /ð/.",
    ],
    commonMistakes: [
      {
        word: "think",
        wrong: "/tɪŋk/ atau /sɪŋk/",
        right: "/θɪŋk/",
        tip: "Jangan ganti TH dengan T atau S. Lidah harus menyentuh gigi.",
      },
      {
        word: "the",
        wrong: "/de/ atau /te/",
        right: "/ðə/",
        tip: "Ini kesalahan paling umum. 'The' harus selalu dengan bunyi /ð/ bersuara.",
      },
    ],
  },

  {
    id: "vowel-sounds",
    emoji: "🎵",
    title: "Vowel Sounds",
    subtitle: "Bunyi vokal dan kombinasinya",
    shortDescription:
      "Bahasa Inggris punya lebih dari 20 bunyi vokal berbeda, jauh lebih banyak dari 5 vokal Indonesia (A, I, U, E, O). Memahami pola kombinasi vokal sangat penting.",
    intro:
      "Vokal dalam bahasa Inggris jauh lebih kompleks dari bahasa Indonesia. Satu huruf bisa punya banyak bunyi berbeda tergantung konteksnya, dan kombinasi vokal sering menghasilkan bunyi yang tidak terduga. Berikut pola-pola paling penting.",
    rules: [
      {
        context: "OO — dua bunyi berbeda",
        sound: "/uː/ atau /ʊ/",
        soundLabel: "OO panjang vs pendek",
        description:
          "OO bisa berbunyi panjang /uː/ (seperti 'u' panjang) atau pendek /ʊ/ (seperti 'u' singkat dan tertahan). Tidak ada aturan pasti — harus dihafal.",
        examples: [
          { word: "food", phonetic: "/fuːd/", translation: "makanan", note: "OO panjang /uː/" },
          { word: "moon", phonetic: "/muːn/", translation: "bulan", note: "OO panjang /uː/" },
          { word: "school", phonetic: "/skuːl/", translation: "sekolah", note: "OO panjang /uː/" },
          { word: "foot", phonetic: "/fʊt/", translation: "kaki", note: "OO pendek /ʊ/" },
          { word: "book", phonetic: "/bʊk/", translation: "buku", note: "OO pendek /ʊ/" },
          { word: "good", phonetic: "/ɡʊd/", translation: "baik", note: "OO pendek /ʊ/" },
          { word: "wood", phonetic: "/wʊd/", translation: "kayu", note: "OO pendek /ʊ/" },
        ],
      },
      {
        context: "EA — dua bunyi umum",
        sound: "/iː/ atau /ɛ/",
        soundLabel: "EA panjang vs pendek",
        description:
          "EA biasanya berbunyi /iː/ (panjang), tapi dalam beberapa kata berbunyi /ɛ/ (seperti E biasa).",
        examples: [
          { word: "eat", phonetic: "/iːt/", translation: "makan", note: "EA = /iː/" },
          { word: "teach", phonetic: "/tiːtʃ/", translation: "mengajar", note: "EA = /iː/" },
          { word: "read", phonetic: "/riːd/ atau /rɛd/", translation: "membaca / telah membaca", note: "Present /iː/, Past /ɛ/" },
          { word: "bread", phonetic: "/brɛd/", translation: "roti", note: "EA = /ɛ/" },
          { word: "head", phonetic: "/hɛd/", translation: "kepala", note: "EA = /ɛ/" },
          { word: "death", phonetic: "/dɛθ/", translation: "kematian", note: "EA = /ɛ/" },
          { word: "weather", phonetic: "/ˈwɛðər/", translation: "cuaca", note: "EA = /ɛ/" },
        ],
      },
      {
        context: "Schwa /ə/ — bunyi vokal paling umum dalam bahasa Inggris",
        sound: "/ə/",
        soundLabel: "Schwa (vokal netral)",
        description:
          "Schwa adalah bunyi 'eh' yang sangat pendek dan netral. Ini bunyi vokal PALING UMUM dalam bahasa Inggris dan terjadi pada suku kata yang tidak ditekankan (unstressed). Sangat penting untuk pengucapan yang alami.",
        examples: [
          { word: "about", phonetic: "/əˈbaʊt/", translation: "tentang", note: "A pertama = schwa /ə/" },
          { word: "banana", phonetic: "/bəˈnɑːnə/", translation: "pisang", note: "A pertama dan terakhir = schwa" },
          { word: "teacher", phonetic: "/ˈtiːtʃər/", translation: "guru", note: "ER di akhir = schwa /ə/" },
          { word: "problem", phonetic: "/ˈprɒbləm/", translation: "masalah", note: "E di suku tak tertekank = schwa" },
          { word: "family", phonetic: "/ˈfæməli/", translation: "keluarga", note: "I tengah = schwa" },
          { word: "camera", phonetic: "/ˈkæmərə/", translation: "kamera", note: "Dua schwa" },
          { word: "the", phonetic: "/ðə/", translation: "si/sang", note: "E = schwa sebelum konsonan" },
        ],
      },
      {
        context: "OW — dua bunyi berbeda",
        sound: "/oʊ/ atau /aʊ/",
        soundLabel: "OW: o-wa vs au",
        description:
          "OW bisa berbunyi seperti /oʊ/ (o yang meluncur) atau /aʊ/ (seperti 'au'). Tidak ada aturan pasti.",
        examples: [
          { word: "know", phonetic: "/noʊ/", translation: "tahu", note: "OW = /oʊ/" },
          { word: "show", phonetic: "/ʃoʊ/", translation: "pertunjukan/menunjukkan", note: "OW = /oʊ/" },
          { word: "snow", phonetic: "/snoʊ/", translation: "salju", note: "OW = /oʊ/" },
          { word: "how", phonetic: "/haʊ/", translation: "bagaimana", note: "OW = /aʊ/" },
          { word: "now", phonetic: "/naʊ/", translation: "sekarang", note: "OW = /aʊ/" },
          { word: "town", phonetic: "/taʊn/", translation: "kota kecil", note: "OW = /aʊ/" },
          { word: "flower", phonetic: "/ˈflaʊər/", translation: "bunga", note: "OW = /aʊ/" },
        ],
      },
    ],
    tips: [
      "Schwa (/ə/) adalah kunci pengucapan alami — hampir semua suku kata tidak tertekanan menggunakan schwa.",
      "IPA (International Phonetic Alphabet) di kamus akan sangat membantu membedakan bunyi vokal.",
      "Untuk OO, OW, EA yang ambigu — hafal per kata, jangan cari aturan pasti.",
      "Perbedaan vokal pendek vs panjang bisa mengubah arti kata (ship vs sheep, bit vs beat).",
    ],
  },

  {
    id: "word-stress",
    emoji: "🎯",
    title: "Word Stress",
    subtitle: "Penekanan suku kata",
    shortDescription:
      "Bahasa Inggris sangat bergantung pada penekanan (stress) suku kata. Menekan suku kata yang salah bisa membuat native speaker sulit memahami kamu.",
    intro:
      "Dalam bahasa Inggris, setiap kata multi-suku kata punya satu suku kata yang ditekankan lebih keras (primary stress). Menekan suku yang salah bisa mengubah arti atau membuat kata tidak bisa dipahami. Berikut pola-pola yang paling membantu.",
    rules: [
      {
        context: "Kata benda 2 suku kata (noun) — tekanan di suku PERTAMA",
        sound: "´xx",
        soundLabel: "Tekanan awal",
        description:
          "Hampir semua kata benda 2 suku kata bertekanan di suku kata pertama.",
        examples: [
          { word: "TEAcher", phonetic: "/ˈtiːtʃər/", translation: "guru", note: "TEA ditekan" },
          { word: "STUdent", phonetic: "/ˈstjuːdənt/", translation: "siswa/mahasiswa", note: "STU ditekan" },
          { word: "TAble", phonetic: "/ˈteɪbl/", translation: "meja", note: "TA ditekan" },
          { word: "WINdow", phonetic: "/ˈwɪndoʊ/", translation: "jendela", note: "WIN ditekan" },
          { word: "CLImate", phonetic: "/ˈklaɪmɪt/", translation: "iklim", note: "CLI ditekan" },
          { word: "PERson", phonetic: "/ˈpɜːrsn/", translation: "orang", note: "PER ditekan" },
        ],
      },
      {
        context: "Kata kerja 2 suku kata (verb) — tekanan di suku KEDUA",
        sound: "x´x",
        soundLabel: "Tekanan akhir",
        description:
          "Banyak kata kerja 2 suku kata bertekanan di suku kata kedua. Ini menciptakan pasangan menarik dengan kata benda yang ejaan sama.",
        examples: [
          { word: "reCORD", phonetic: "/rɪˈkɔːrd/", translation: "merekam", note: "CORD ditekan (verb)" },
          { word: "REcord", phonetic: "/ˈrɛkərd/", translation: "rekaman", note: "RE ditekan (noun)" },
          { word: "preSENT", phonetic: "/prɪˈzɛnt/", translation: "mempresentasikan", note: "SENT ditekan (verb)" },
          { word: "PREsent", phonetic: "/ˈprɛznt/", translation: "hadiah/sekarang", note: "PRE ditekan (noun/adj)" },
          { word: "perMIT", phonetic: "/pərˈmɪt/", translation: "mengizinkan", note: "MIT ditekan (verb)" },
          { word: "PERmit", phonetic: "/ˈpɜːrmɪt/", translation: "izin", note: "PER ditekan (noun)" },
        ],
      },
      {
        context: "Sufiks yang selalu menarik tekanan ke suku tepat sebelumnya",
        sound: "xx´",
        soundLabel: "Tekanan karena sufiks",
        description:
          "Beberapa akhiran kata selalu menarik tekanan ke suku kata tepat sebelum sufiks tersebut.",
        examples: [
          { word: "phоTOgraphy", phonetic: "/fəˈtɒɡrəfi/", translation: "fotografi", note: "-phy menarik tekanan ke TO" },
          { word: "geoGRAPHy", phonetic: "/dʒiˈɒɡrəfi/", translation: "geografi", note: "-phy menarik tekanan ke GRA" },
          { word: "eCONomy", phonetic: "/ɪˈkɒnəmi/", translation: "ekonomi", note: "-omy menarik tekanan ke CON" },
          { word: "deMOcracy", phonetic: "/dɪˈmɒkrəsi/", translation: "demokrasi", note: "-cracy menarik tekanan ke MO" },
          { word: "eLECtric", phonetic: "/ɪˈlɛktrɪk/", translation: "listrik/elektrik", note: "-ic menarik tekanan ke LEC" },
          { word: "scienTIFic", phonetic: "/ˌsaɪənˈtɪfɪk/", translation: "ilmiah", note: "-ic menarik tekanan ke TIF" },
        ],
      },
    ],
    tips: [
      "Dalam kamus, tanda (ˈ) sebelum suku kata menunjukkan tekanan utama.",
      "Salah menekan suku kata sering lebih mengganggu komunikasi daripada mispronouncing sebuah huruf.",
      "Pasangan noun-verb seperti REcord/reCORD sangat umum — perhatikan konteks kalimat.",
      "Saat belajar kata baru, selalu hafal stressnya bersamaan dengan artinya.",
      "Mendengarkan dan meniru (shadowing) adalah cara terbaik melatih word stress.",
    ],
  },

  {
    id: "c-and-g-rules",
    emoji: "📖",
    title: "C dan G Rules",
    subtitle: "Kapan C dan G berbunyi keras atau lunak",
    shortDescription:
      "Huruf C dan G masing-masing punya dua bunyi berbeda tergantung huruf yang mengikutinya. Ada aturan yang cukup konsisten untuk ini.",
    intro:
      "Huruf C dan G memiliki dua bunyi yang berbeda: 'keras' dan 'lunak'. Bunyi yang dihasilkan bergantung pada huruf yang mengikutinya, khususnya apakah huruf berikutnya adalah E, I, atau Y.",
    rules: [
      {
        context: "C keras /k/ — sebelum A, O, U, dan konsonan",
        sound: "/k/",
        soundLabel: "C keras",
        description:
          "Ketika C diikuti oleh A, O, U, atau konsonan, C berbunyi /k/ seperti huruf K.",
        examples: [
          { word: "cat", phonetic: "/kæt/", translation: "kucing", note: "C + A = /k/" },
          { word: "come", phonetic: "/kʌm/", translation: "datang", note: "C + O = /k/" },
          { word: "cut", phonetic: "/kʌt/", translation: "memotong", note: "C + U = /k/" },
          { word: "class", phonetic: "/klæs/", translation: "kelas", note: "C + konsonan L = /k/" },
          { word: "cream", phonetic: "/kriːm/", translation: "krim", note: "C + konsonan R = /k/" },
          { word: "school", phonetic: "/skuːl/", translation: "sekolah", note: "C + konsonan H (SC) = /k/" },
        ],
      },
      {
        context: "C lunak /s/ — sebelum E, I, Y",
        sound: "/s/",
        soundLabel: "C lunak",
        description:
          "Ketika C diikuti E, I, atau Y, C berbunyi /s/ seperti huruf S. Mudah diingat: E, I, Y membuat C 'lunak'.",
        examples: [
          { word: "city", phonetic: "/ˈsɪti/", translation: "kota", note: "C + I = /s/" },
          { word: "center", phonetic: "/ˈsɛntər/", translation: "pusat", note: "C + E = /s/" },
          { word: "cycle", phonetic: "/ˈsaɪkl/", translation: "siklus", note: "C + Y = /s/" },
          { word: "cinema", phonetic: "/ˈsɪnəmə/", translation: "bioskop", note: "C + I = /s/" },
          { word: "peace", phonetic: "/piːs/", translation: "kedamaian", note: "CE di akhir = /s/" },
          { word: "race", phonetic: "/reɪs/", translation: "balapan/ras", note: "CE di akhir = /s/" },
        ],
      },
      {
        context: "G keras /g/ — sebelum A, O, U, dan konsonan",
        sound: "/g/",
        soundLabel: "G keras",
        description:
          "Ketika G diikuti A, O, U, atau konsonan, G berbunyi /g/ seperti biasa.",
        examples: [
          { word: "game", phonetic: "/ɡeɪm/", translation: "permainan", note: "G + A = /g/" },
          { word: "go", phonetic: "/ɡoʊ/", translation: "pergi", note: "G + O = /g/" },
          { word: "gun", phonetic: "/ɡʌn/", translation: "senjata", note: "G + U = /g/" },
          { word: "green", phonetic: "/ɡriːn/", translation: "hijau", note: "G + R = /g/" },
          { word: "glass", phonetic: "/ɡlæs/", translation: "kaca/gelas", note: "G + L = /g/" },
        ],
      },
      {
        context: "G lunak /dʒ/ — sebelum E, I, Y (tidak selalu konsisten!)",
        sound: "/dʒ/",
        soundLabel: "G lunak",
        description:
          "G sebelum E, I, Y SERING berbunyi /dʒ/ (seperti 'J' dalam bahasa Indonesia), TAPI ada banyak pengecualian. Ini kurang konsisten dibanding aturan C.",
        examples: [
          { word: "gem", phonetic: "/dʒɛm/", translation: "permata", note: "G + E = /dʒ/" },
          { word: "giant", phonetic: "/ˈdʒaɪənt/", translation: "raksasa", note: "G + I = /dʒ/" },
          { word: "gym", phonetic: "/dʒɪm/", translation: "gym/pusat kebugaran", note: "G + Y = /dʒ/" },
          { word: "age", phonetic: "/eɪdʒ/", translation: "usia", note: "GE di akhir = /dʒ/" },
          { word: "page", phonetic: "/peɪdʒ/", translation: "halaman", note: "GE di akhir = /dʒ/" },
          { word: "get", phonetic: "/ɡɛt/", translation: "mendapatkan", note: "G + E = /g/ (PENGECUALIAN!)" },
          { word: "give", phonetic: "/ɡɪv/", translation: "memberi", note: "G + I = /g/ (PENGECUALIAN!)" },
          { word: "girl", phonetic: "/ɡɜːrl/", translation: "perempuan", note: "G + I = /g/ (PENGECUALIAN!)" },
        ],
      },
    ],
    tips: [
      "Aturan C lebih konsisten daripada aturan G. Untuk C, E/I/Y hampir selalu = /s/.",
      "Untuk G, 'get', 'give', 'girl', 'begin', 'gift' adalah pengecualian penting yang harus dihafal.",
      "Trik: 'CE, CI, CY = S-ound' — C sebelum E, I, Y selalu bunyi S.",
      "Kata yang berakhir -AGE, -EGE, -IGE hampir selalu /dʒ/ (village, college, privilege).",
    ],
  },
];
