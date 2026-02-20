export type VerbItem = {
  base: string;
  v1: string;
  v2: string;
  v3: string;
  ing: string;
  meaning: string;
};

export const irregularVerbs: VerbItem[] = [
  { base: "be", v1: "am/is/are", v2: "was/were", v3: "been", ing: "being", meaning: "menjadi / adalah" },
  { base: "become", v1: "become/becomes", v2: "became", v3: "become", ing: "becoming", meaning: "menjadi" },
  { base: "break", v1: "break/breaks", v2: "broke", v3: "broken", ing: "breaking", meaning: "memecah / patah" },
  { base: "build", v1: "build/builds", v2: "built", v3: "built", ing: "building", meaning: "membangun" },
  { base: "buy", v1: "buy/buys", v2: "bought", v3: "bought", ing: "buying", meaning: "membeli" },
  { base: "come", v1: "come/comes", v2: "came", v3: "come", ing: "coming", meaning: "datang" },
  { base: "do", v1: "do/does", v2: "did", v3: "done", ing: "doing", meaning: "melakukan" },
  { base: "eat", v1: "eat/eats", v2: "ate", v3: "eaten", ing: "eating", meaning: "makan" },
  { base: "fall", v1: "fall/falls", v2: "fell", v3: "fallen", ing: "falling", meaning: "jatuh" },
  { base: "fly", v1: "fly/flies", v2: "flew", v3: "flown", ing: "flying", meaning: "terbang" },
  { base: "give", v1: "give/gives", v2: "gave", v3: "given", ing: "giving", meaning: "memberi" },
  { base: "go", v1: "go/goes", v2: "went", v3: "gone", ing: "going", meaning: "pergi" },
  { base: "have", v1: "have/has", v2: "had", v3: "had", ing: "having", meaning: "memiliki / punya" },
  { base: "hear", v1: "hear/hears", v2: "heard", v3: "heard", ing: "hearing", meaning: "mendengar" },
  { base: "know", v1: "know/knows", v2: "knew", v3: "known", ing: "knowing", meaning: "mengetahui" },
  { base: "leave", v1: "leave/leaves", v2: "left", v3: "left", ing: "leaving", meaning: "meninggalkan / pergi" },
  { base: "lie", v1: "lie/lies", v2: "lay", v3: "lain", ing: "lying", meaning: "berbaring" },
  { base: "lose", v1: "lose/loses", v2: "lost", v3: "lost", ing: "losing", meaning: "kehilangan / kalah" },
  { base: "read", v1: "read/reads", v2: "read", v3: "read", ing: "reading", meaning: "membaca" },
  { base: "ride", v1: "ride/rides", v2: "rode", v3: "ridden", ing: "riding", meaning: "mengendarai / naik" },
  { base: "rise", v1: "rise/rises", v2: "rose", v3: "risen", ing: "rising", meaning: "naik / bangkit" },
  { base: "run", v1: "run/runs", v2: "ran", v3: "run", ing: "running", meaning: "berlari" },
  { base: "say", v1: "say/says", v2: "said", v3: "said", ing: "saying", meaning: "berkata / mengatakan" },
  { base: "see", v1: "see/sees", v2: "saw", v3: "seen", ing: "seeing", meaning: "melihat" },
  { base: "sing", v1: "sing/sings", v2: "sang", v3: "sung", ing: "singing", meaning: "bernyanyi" },
  { base: "sleep", v1: "sleep/sleeps", v2: "slept", v3: "slept", ing: "sleeping", meaning: "tidur" },
  { base: "speak", v1: "speak/speaks", v2: "spoke", v3: "spoken", ing: "speaking", meaning: "berbicara" },
  { base: "tell", v1: "tell/tells", v2: "told", v3: "told", ing: "telling", meaning: "memberitahu" },
  { base: "win", v1: "win/wins", v2: "won", v3: "won", ing: "winning", meaning: "menang" },
  { base: "write", v1: "write/writes", v2: "wrote", v3: "written", ing: "writing", meaning: "menulis" },
];

export const regularVerbs: VerbItem[] = [
  { base: "believe", v1: "believe/believes", v2: "believed", v3: "believed", ing: "believing", meaning: "percaya" },
  { base: "block", v1: "block/blocks", v2: "blocked", v3: "blocked", ing: "blocking", meaning: "memblokir / menghalangi" },
  { base: "cook", v1: "cook/cooks", v2: "cooked", v3: "cooked", ing: "cooking", meaning: "memasak" },
  { base: "cry", v1: "cry/cries", v2: "cried", v3: "cried", ing: "crying", meaning: "menangis" },
  { base: "enjoy", v1: "enjoy/enjoys", v2: "enjoyed", v3: "enjoyed", ing: "enjoying", meaning: "menikmati" },
  { base: "hate", v1: "hate/hates", v2: "hated", v3: "hated", ing: "hating", meaning: "membenci" },
  { base: "learn", v1: "learn/learns", v2: "learned", v3: "learned", ing: "learning", meaning: "belajar" },
  { base: "like", v1: "like/likes", v2: "liked", v3: "liked", ing: "liking", meaning: "menyukai" },
  { base: "listen", v1: "listen/listens", v2: "listened", v3: "listened", ing: "listening", meaning: "mendengarkan" },
  { base: "love", v1: "love/loves", v2: "loved", v3: "loved", ing: "loving", meaning: "mencintai" },
  { base: "need", v1: "need/needs", v2: "needed", v3: "needed", ing: "needing", meaning: "membutuhkan" },
  { base: "open", v1: "open/opens", v2: "opened", v3: "opened", ing: "opening", meaning: "membuka" },
  { base: "perform", v1: "perform/performs", v2: "performed", v3: "performed", ing: "performing", meaning: "menampilkan / tampil" },
  { base: "play", v1: "play/plays", v2: "played", v3: "played", ing: "playing", meaning: "bermain" },
  { base: "pray", v1: "pray/prays", v2: "prayed", v3: "prayed", ing: "praying", meaning: "berdoa" },
  { base: "study", v1: "study/studies", v2: "studied", v3: "studied", ing: "studying", meaning: "belajar / mempelajari" },
  { base: "submit", v1: "submit/submits", v2: "submitted", v3: "submitted", ing: "submitting", meaning: "mengajukan / menyerahkan" },
  { base: "talk", v1: "talk/talks", v2: "talked", v3: "talked", ing: "talking", meaning: "berbicara / mengobrol" },
  { base: "turn off", v1: "turn off/turns off", v2: "turned off", v3: "turned off", ing: "turning off", meaning: "mematikan" },
  { base: "want", v1: "want/wants", v2: "wanted", v3: "wanted", ing: "wanting", meaning: "menginginkan" },
  { base: "watch", v1: "watch/watches", v2: "watched", v3: "watched", ing: "watching", meaning: "menonton / mengamati" },
  { base: "work", v1: "work/works", v2: "worked", v3: "worked", ing: "working", meaning: "bekerja" },
];
