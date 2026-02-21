export type DialogueLine = {
  speaker: string;
  role: string;
  text: string;
  translation: string;
};

export type KeyExpression = {
  phrase: string;
  meaning: string;
};

export type ConversationSituation =
  | "restaurant"
  | "school"
  | "shopping"
  | "hospital";

export type Conversation = {
  id: string;
  situation: ConversationSituation;
  title: string;
  description: string;
  difficulty: "basic" | "intermediate" | "advanced";
  dialogue: DialogueLine[];
  keyExpressions: KeyExpression[];
};

// ════════════════════════════════════════════════════════════════
//  RESTAURANT & CAFE
// ════════════════════════════════════════════════════════════════

const restaurantConversations: Conversation[] = [
  {
    id: "rest-1",
    situation: "restaurant",
    title: "Ordering Food",
    description: "Pesan makanan dan minuman di restoran",
    difficulty: "basic",
    dialogue: [
      {
        speaker: "Waiter",
        role: "Staff",
        text: "Good evening! Welcome. Do you have a reservation?",
        translation: "Selamat malam! Selamat datang. Apakah Anda punya reservasi?",
      },
      {
        speaker: "Rina",
        role: "Customer",
        text: "No, we don't. Is there a table for two available?",
        translation: "Tidak. Apakah ada meja untuk dua orang?",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "Of course! Right this way, please. Here are your menus.",
        translation: "Tentu! Silakan ke sini. Ini menunya.",
      },
      {
        speaker: "Rina",
        role: "Customer",
        text: "Thank you. What do you recommend?",
        translation: "Terima kasih. Apa yang Anda rekomendasikan?",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "Our grilled chicken is very popular today. It comes with rice and salad.",
        translation: "Ayam bakar kami sangat populer hari ini. Sudah termasuk nasi dan salad.",
      },
      {
        speaker: "Dani",
        role: "Customer",
        text: "That sounds good. I'll have the grilled chicken, please.",
        translation: "Kedengarannya enak. Saya mau ayam bakarnya.",
      },
      {
        speaker: "Rina",
        role: "Customer",
        text: "And I'd like the pasta, please. Is it spicy?",
        translation: "Dan saya mau pasta. Apakah itu pedas?",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "No, it's not spicy. But I can add chili if you like.",
        translation: "Tidak, tidak pedas. Tapi saya bisa tambahkan cabai kalau Anda mau.",
      },
      {
        speaker: "Rina",
        role: "Customer",
        text: "No, that's fine. And two glasses of water, please.",
        translation: "Tidak perlu. Dan dua gelas air putih ya.",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "Sure! Your order will be ready in about 15 minutes.",
        translation: "Siap! Pesanan Anda akan siap sekitar 15 menit.",
      },
    ],
    keyExpressions: [
      { phrase: "Do you have a reservation?", meaning: "Apakah kamu punya reservasi?" },
      { phrase: "A table for two", meaning: "Meja untuk dua orang" },
      { phrase: "What do you recommend?", meaning: "Apa yang kamu rekomendasikan?" },
      { phrase: "I'll have ___", meaning: "Saya mau pesan ___" },
      { phrase: "I'd like ___", meaning: "Saya ingin ___ (lebih sopan)" },
      { phrase: "Is it spicy?", meaning: "Apakah itu pedas?" },
    ],
  },
  {
    id: "rest-2",
    situation: "restaurant",
    title: "Asking for the Bill",
    description: "Minta tagihan dan cara bayar di restoran",
    difficulty: "basic",
    dialogue: [
      {
        speaker: "Budi",
        role: "Customer",
        text: "Excuse me! Could we get the bill, please?",
        translation: "Permisi! Bisakah kami minta tagihan?",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "Of course. Here you go. The total is Rp 150,000.",
        translation: "Tentu. Ini. Totalnya Rp 150.000.",
      },
      {
        speaker: "Budi",
        role: "Customer",
        text: "Is service charge included?",
        translation: "Apakah biaya servis sudah termasuk?",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "Yes, a 10% service charge is already included.",
        translation: "Ya, biaya servis 10% sudah termasuk.",
      },
      {
        speaker: "Sari",
        role: "Customer",
        text: "Can we pay separately?",
        translation: "Bisakah kami bayar terpisah?",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "Sure, no problem. How would you like to split it?",
        translation: "Tentu, tidak masalah. Mau dibagi bagaimana?",
      },
      {
        speaker: "Budi",
        role: "Customer",
        text: "Just split it in half. I'll pay by card.",
        translation: "Bagi dua saja. Saya bayar pakai kartu.",
      },
      {
        speaker: "Sari",
        role: "Customer",
        text: "And I'll pay cash. Here's Rp 80,000. Keep the change.",
        translation: "Dan saya bayar tunai. Ini Rp 80.000. Kembaliannya buat kamu.",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "Thank you so much! Have a great evening!",
        translation: "Terima kasih banyak! Selamat malam!",
      },
    ],
    keyExpressions: [
      { phrase: "Could we get the bill?", meaning: "Bisakah kami minta tagihan?" },
      { phrase: "Is service charge included?", meaning: "Apakah biaya servis sudah termasuk?" },
      { phrase: "Can we pay separately?", meaning: "Bisakah kami bayar terpisah?" },
      { phrase: "Split it in half", meaning: "Dibagi dua" },
      { phrase: "Keep the change", meaning: "Kembaliannya buat kamu" },
      { phrase: "I'll pay by card", meaning: "Saya bayar pakai kartu" },
    ],
  },
  {
    id: "rest-3",
    situation: "restaurant",
    title: "Complaining About the Order",
    description: "Komplain ketika pesanan salah atau tidak sesuai",
    difficulty: "intermediate",
    dialogue: [
      {
        speaker: "Eko",
        role: "Customer",
        text: "Excuse me, I think there's a mistake with my order.",
        translation: "Permisi, sepertinya ada kesalahan dengan pesanan saya.",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "I'm sorry to hear that. What seems to be the problem?",
        translation: "Maaf mendengarnya. Apa masalahnya?",
      },
      {
        speaker: "Eko",
        role: "Customer",
        text: "I ordered the beef steak, but this is chicken.",
        translation: "Saya pesan steak sapi, tapi ini ayam.",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "Oh, I apologize for the confusion. I'll get that fixed right away.",
        translation: "Maaf atas kebingungan ini. Saya akan perbaiki segera.",
      },
      {
        speaker: "Eko",
        role: "Customer",
        text: "Also, my soup is cold. Can you warm it up, please?",
        translation: "Juga, supnya sudah dingin. Bisakah dipanaskan?",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "Of course, I'm really sorry about that. I'll bring you a fresh bowl.",
        translation: "Tentu, saya sangat minta maaf. Saya akan bawakan sup yang baru.",
      },
      {
        speaker: "Eko",
        role: "Customer",
        text: "Thank you. I hope this won't take too long.",
        translation: "Terima kasih. Semoga tidak terlalu lama.",
      },
      {
        speaker: "Waiter",
        role: "Staff",
        text: "It will only take 5 minutes. And the soup is on us — no charge.",
        translation: "Hanya 5 menit. Dan sup-nya gratis dari kami.",
      },
    ],
    keyExpressions: [
      { phrase: "There's a mistake with my order", meaning: "Ada kesalahan dengan pesanan saya" },
      { phrase: "I apologize for the confusion", meaning: "Saya minta maaf atas kebingungan ini" },
      { phrase: "I'll get that fixed right away", meaning: "Saya akan perbaiki segera" },
      { phrase: "Can you warm it up?", meaning: "Bisakah dipanaskan?" },
      { phrase: "It's on us", meaning: "Gratis dari kami" },
    ],
  },
];

// ════════════════════════════════════════════════════════════════
//  SCHOOL & CAMPUS
// ════════════════════════════════════════════════════════════════

const schoolConversations: Conversation[] = [
  {
    id: "school-1",
    situation: "school",
    title: "Asking for Permission",
    description: "Minta izin ke guru saat di kelas",
    difficulty: "basic",
    dialogue: [
      {
        speaker: "Maya",
        role: "Student",
        text: "Excuse me, Mr. Harris. May I go to the bathroom?",
        translation: "Permisi, Pak Harris. Boleh saya ke kamar mandi?",
      },
      {
        speaker: "Mr. Harris",
        role: "Teacher",
        text: "Yes, you may. But please be quick, we're in the middle of a lesson.",
        translation: "Ya, boleh. Tapi cepat ya, kita sedang di tengah pelajaran.",
      },
      {
        speaker: "Maya",
        role: "Student",
        text: "Yes, sir. Thank you.",
        translation: "Baik, Pak. Terima kasih.",
      },
      {
        speaker: "Reza",
        role: "Student",
        text: "Mr. Harris, I didn't quite understand the last explanation. Could you repeat it?",
        translation: "Pak Harris, saya kurang paham penjelasan tadi. Bisakah diulang?",
      },
      {
        speaker: "Mr. Harris",
        role: "Teacher",
        text: "Of course. Let me go over it one more time.",
        translation: "Tentu. Saya jelaskan sekali lagi.",
      },
      {
        speaker: "Reza",
        role: "Student",
        text: "Thank you, sir. Now I understand.",
        translation: "Terima kasih, Pak. Sekarang saya mengerti.",
      },
      {
        speaker: "Mr. Harris",
        role: "Teacher",
        text: "Good. Don't hesitate to ask if you have more questions.",
        translation: "Bagus. Jangan ragu bertanya kalau ada pertanyaan lagi.",
      },
    ],
    keyExpressions: [
      { phrase: "May I go to the bathroom?", meaning: "Boleh saya ke kamar mandi?" },
      { phrase: "Could you repeat it?", meaning: "Bisakah diulang?" },
      { phrase: "Let me go over it one more time", meaning: "Biar saya jelaskan sekali lagi" },
      { phrase: "Don't hesitate to ask", meaning: "Jangan ragu untuk bertanya" },
      { phrase: "I didn't quite understand", meaning: "Saya kurang paham" },
    ],
  },
  {
    id: "school-2",
    situation: "school",
    title: "Discussing a Group Assignment",
    description: "Diskusi tugas kelompok dengan teman sekelas",
    difficulty: "intermediate",
    dialogue: [
      {
        speaker: "Dina",
        role: "Student",
        text: "Hey, have you started working on the history project?",
        translation: "Hei, kamu sudah mulai mengerjakan proyek sejarah?",
      },
      {
        speaker: "Fajar",
        role: "Student",
        text: "Not yet. I was going to ask you about that. When is it due?",
        translation: "Belum. Saya mau tanya itu ke kamu. Kapan deadline-nya?",
      },
      {
        speaker: "Dina",
        role: "Student",
        text: "It's due next Friday. We only have a week left.",
        translation: "Jumat depan. Kita hanya punya waktu seminggu lagi.",
      },
      {
        speaker: "Fajar",
        role: "Student",
        text: "Oh no, that's soon. Should we divide the work?",
        translation: "Aduh, sebentar lagi. Sebaiknya kita bagi kerjaannya?",
      },
      {
        speaker: "Dina",
        role: "Student",
        text: "Yeah, that's a good idea. I can do the research part if you do the presentation.",
        translation: "Ya, ide bagus. Saya bisa bagian riset kalau kamu bikin presentasinya.",
      },
      {
        speaker: "Fajar",
        role: "Student",
        text: "That works for me. Let's meet at the library on Wednesday to put it all together.",
        translation: "Oke cocok. Kita ketemu di perpustakaan Rabu untuk digabungkan.",
      },
      {
        speaker: "Dina",
        role: "Student",
        text: "Perfect. Don't forget to bring your notes.",
        translation: "Oke. Jangan lupa bawa catatan kamu.",
      },
      {
        speaker: "Fajar",
        role: "Student",
        text: "Will do. See you Wednesday!",
        translation: "Siap. Sampai Rabu!",
      },
    ],
    keyExpressions: [
      { phrase: "When is it due?", meaning: "Kapan deadline-nya?" },
      { phrase: "Should we divide the work?", meaning: "Sebaiknya kita bagi tugasnya?" },
      { phrase: "That works for me", meaning: "Itu cocok buat saya / Oke buat saya" },
      { phrase: "Put it all together", meaning: "Gabungkan semuanya" },
      { phrase: "Will do", meaning: "Siap / Akan kulakukan" },
    ],
  },
  {
    id: "school-3",
    situation: "school",
    title: "Talking to a Lecturer",
    description: "Berbicara dengan dosen tentang nilai dan tugas",
    difficulty: "intermediate",
    dialogue: [
      {
        speaker: "Nisa",
        role: "Student",
        text: "Good morning, Professor. Do you have a minute?",
        translation: "Selamat pagi, Profesor. Apakah Anda punya waktu sebentar?",
      },
      {
        speaker: "Professor",
        role: "Lecturer",
        text: "Good morning, Nisa. Sure, come in. What's on your mind?",
        translation: "Selamat pagi, Nisa. Tentu, masuk. Ada apa?",
      },
      {
        speaker: "Nisa",
        role: "Student",
        text: "I got my midterm result back and I'm a bit confused about my score.",
        translation: "Saya sudah dapat nilai ujian tengah semester dan sedikit bingung dengan nilainya.",
      },
      {
        speaker: "Professor",
        role: "Lecturer",
        text: "Let me pull up your record. Ah, I see. You lost marks on the essay section. Your argument wasn't clear enough.",
        translation: "Biar saya lihat datanya. Ah, saya lihat. Kamu kehilangan nilai di bagian esai. Argumenmu kurang jelas.",
      },
      {
        speaker: "Nisa",
        role: "Student",
        text: "I see. Is there anything I can do to improve my final grade?",
        translation: "Saya mengerti. Apakah ada yang bisa saya lakukan untuk memperbaiki nilai akhir?",
      },
      {
        speaker: "Professor",
        role: "Lecturer",
        text: "Yes. Make sure your final assignment is well-structured. Focus on supporting your main points with evidence.",
        translation: "Ya. Pastikan tugas akhirmu terstruktur dengan baik. Fokus mendukung poin utama dengan bukti.",
      },
      {
        speaker: "Nisa",
        role: "Student",
        text: "Thank you for the advice. I'll work harder on that.",
        translation: "Terima kasih atas sarannya. Saya akan berusaha lebih keras.",
      },
      {
        speaker: "Professor",
        role: "Lecturer",
        text: "Good luck. My door is always open if you need help.",
        translation: "Semoga berhasil. Pintuku selalu terbuka kalau kamu butuh bantuan.",
      },
    ],
    keyExpressions: [
      { phrase: "Do you have a minute?", meaning: "Apakah Anda punya waktu sebentar?" },
      { phrase: "What's on your mind?", meaning: "Ada apa? / Apa yang kamu pikirkan?" },
      { phrase: "Is there anything I can do to improve?", meaning: "Apakah ada yang bisa saya lakukan untuk meningkatkan?" },
      { phrase: "My door is always open", meaning: "Pintuku selalu terbuka (selalu siap membantu)" },
      { phrase: "I'll work harder on that", meaning: "Saya akan berusaha lebih keras" },
    ],
  },
];

// ════════════════════════════════════════════════════════════════
//  SHOPPING & STORE
// ════════════════════════════════════════════════════════════════

const shoppingConversations: Conversation[] = [
  {
    id: "shop-1",
    situation: "shopping",
    title: "Asking About Price and Size",
    description: "Tanya harga dan ukuran pakaian di toko",
    difficulty: "basic",
    dialogue: [
      {
        speaker: "Tara",
        role: "Customer",
        text: "Excuse me, how much is this jacket?",
        translation: "Permisi, berapa harga jaket ini?",
      },
      {
        speaker: "Staff",
        role: "Shop Assistant",
        text: "That one is Rp 350,000. It's on sale — originally Rp 500,000.",
        translation: "Itu Rp 350.000. Sedang diskon — harga aslinya Rp 500.000.",
      },
      {
        speaker: "Tara",
        role: "Customer",
        text: "Oh nice! Do you have it in a smaller size? This looks too big.",
        translation: "Wah bagus! Apakah ada ukuran yang lebih kecil? Ini kelihatan terlalu besar.",
      },
      {
        speaker: "Staff",
        role: "Shop Assistant",
        text: "Let me check. What size are you usually?",
        translation: "Biar saya cek. Biasanya pakai ukuran berapa?",
      },
      {
        speaker: "Tara",
        role: "Customer",
        text: "Usually a small or medium.",
        translation: "Biasanya small atau medium.",
      },
      {
        speaker: "Staff",
        role: "Shop Assistant",
        text: "We have a medium left in this color. Let me get it for you.",
        translation: "Masih ada medium untuk warna ini. Biar saya ambilkan.",
      },
      {
        speaker: "Tara",
        role: "Customer",
        text: "Can I try it on?",
        translation: "Boleh saya coba dulu?",
      },
      {
        speaker: "Staff",
        role: "Shop Assistant",
        text: "Of course! The fitting room is over there on the right.",
        translation: "Tentu! Ruang ganti ada di sana sebelah kanan.",
      },
    ],
    keyExpressions: [
      { phrase: "How much is this?", meaning: "Berapa harga ini?" },
      { phrase: "It's on sale", meaning: "Sedang diskon" },
      { phrase: "Do you have it in a smaller size?", meaning: "Ada ukuran yang lebih kecil?" },
      { phrase: "Can I try it on?", meaning: "Boleh saya coba?" },
      { phrase: "The fitting room", meaning: "Ruang ganti" },
    ],
  },
  {
    id: "shop-2",
    situation: "shopping",
    title: "Returning an Item",
    description: "Mengembalikan barang yang salah atau rusak",
    difficulty: "intermediate",
    dialogue: [
      {
        speaker: "Hendra",
        role: "Customer",
        text: "Hi, I'd like to return this shirt. I bought it two days ago.",
        translation: "Halo, saya ingin mengembalikan kemeja ini. Saya beli dua hari lalu.",
      },
      {
        speaker: "Staff",
        role: "Shop Assistant",
        text: "Sure, do you have the receipt?",
        translation: "Tentu, apakah Anda punya struk pembelian?",
      },
      {
        speaker: "Hendra",
        role: "Customer",
        text: "Yes, here it is. The problem is there's a small tear near the button.",
        translation: "Ya, ini. Masalahnya ada sobekan kecil di dekat kancingnya.",
      },
      {
        speaker: "Staff",
        role: "Shop Assistant",
        text: "Oh, I'm sorry about that. Is it a manufacturing defect?",
        translation: "Maaf ya. Apakah itu cacat produksi?",
      },
      {
        speaker: "Hendra",
        role: "Customer",
        text: "Yes, I noticed it when I got home. I didn't wear it at all.",
        translation: "Ya, saya baru sadar waktu sampai rumah. Sama sekali belum dipakai.",
      },
      {
        speaker: "Staff",
        role: "Shop Assistant",
        text: "No problem. Would you like a refund or an exchange?",
        translation: "Tidak masalah. Mau refund atau tukar barang?",
      },
      {
        speaker: "Hendra",
        role: "Customer",
        text: "I'd prefer an exchange if you still have the same shirt in my size.",
        translation: "Saya lebih suka tukar barang kalau masih ada kemeja yang sama ukuran saya.",
      },
      {
        speaker: "Staff",
        role: "Shop Assistant",
        text: "Let me check for you. Yes, we do! I'll get it now.",
        translation: "Biar saya cek. Ada! Saya ambilkan sekarang.",
      },
    ],
    keyExpressions: [
      { phrase: "I'd like to return this", meaning: "Saya ingin mengembalikan ini" },
      { phrase: "Do you have the receipt?", meaning: "Apakah kamu punya struk?" },
      { phrase: "Manufacturing defect", meaning: "Cacat produksi" },
      { phrase: "Would you like a refund or an exchange?", meaning: "Mau refund atau tukar barang?" },
      { phrase: "I'd prefer ___", meaning: "Saya lebih suka ___" },
    ],
  },
  {
    id: "shop-3",
    situation: "shopping",
    title: "At the Cashier",
    description: "Proses pembayaran di kasir supermarket",
    difficulty: "basic",
    dialogue: [
      {
        speaker: "Cashier",
        role: "Staff",
        text: "Hi! Did you find everything you were looking for?",
        translation: "Halo! Apakah sudah menemukan semua yang dicari?",
      },
      {
        speaker: "Lisa",
        role: "Customer",
        text: "Yes, thanks! Oh, do you have a plastic bag?",
        translation: "Ya, terima kasih! Oh, ada kantong plastik?",
      },
      {
        speaker: "Cashier",
        role: "Staff",
        text: "We charge Rp 500 per bag. Would you like one?",
        translation: "Kami kenakan Rp 500 per kantong. Mau?",
      },
      {
        speaker: "Lisa",
        role: "Customer",
        text: "Yes, just one please. Do you accept debit card?",
        translation: "Ya, satu saja. Apakah bisa pakai kartu debit?",
      },
      {
        speaker: "Cashier",
        role: "Staff",
        text: "Yes, we do. Your total comes to Rp 87,500.",
        translation: "Ya, bisa. Total Anda Rp 87.500.",
      },
      {
        speaker: "Lisa",
        role: "Customer",
        text: "Here's my card.",
        translation: "Ini kartunya.",
      },
      {
        speaker: "Cashier",
        role: "Staff",
        text: "Please tap your card on the machine. Thank you! Here's your receipt.",
        translation: "Silakan tempel kartu Anda di mesin. Terima kasih! Ini struknya.",
      },
      {
        speaker: "Lisa",
        role: "Customer",
        text: "Thank you. Have a good day!",
        translation: "Terima kasih. Selamat beraktivitas!",
      },
    ],
    keyExpressions: [
      { phrase: "Did you find everything?", meaning: "Apakah sudah menemukan segalanya?" },
      { phrase: "We charge Rp ___ per bag", meaning: "Kami kenakan Rp ___ per kantong" },
      { phrase: "Do you accept debit card?", meaning: "Apakah bisa pakai kartu debit?" },
      { phrase: "Your total comes to ___", meaning: "Total Anda adalah ___" },
      { phrase: "Please tap your card", meaning: "Silakan tempel kartu Anda" },
    ],
  },
];

// ════════════════════════════════════════════════════════════════
//  DOCTOR & HOSPITAL
// ════════════════════════════════════════════════════════════════

const hospitalConversations: Conversation[] = [
  {
    id: "hosp-1",
    situation: "hospital",
    title: "Registering at the Clinic",
    description: "Daftar dan administrasi saat pertama datang ke klinik",
    difficulty: "basic",
    dialogue: [
      {
        speaker: "Receptionist",
        role: "Staff",
        text: "Good morning! How can I help you?",
        translation: "Selamat pagi! Ada yang bisa saya bantu?",
      },
      {
        speaker: "Andi",
        role: "Patient",
        text: "Hi, I'd like to see a doctor. I haven't made an appointment.",
        translation: "Halo, saya ingin bertemu dokter. Saya belum buat janji.",
      },
      {
        speaker: "Receptionist",
        role: "Staff",
        text: "That's fine. It's a walk-in visit. Can I have your name and ID card?",
        translation: "Tidak apa-apa. Bisa langsung tanpa janji. Boleh nama dan KTP-nya?",
      },
      {
        speaker: "Andi",
        role: "Patient",
        text: "My name is Andi Pratama. Here's my ID.",
        translation: "Nama saya Andi Pratama. Ini KTP saya.",
      },
      {
        speaker: "Receptionist",
        role: "Staff",
        text: "Thank you. Do you have health insurance?",
        translation: "Terima kasih. Apakah Anda punya asuransi kesehatan?",
      },
      {
        speaker: "Andi",
        role: "Patient",
        text: "Yes, I have BPJS. Here's my card.",
        translation: "Ya, saya punya BPJS. Ini kartunya.",
      },
      {
        speaker: "Receptionist",
        role: "Staff",
        text: "Perfect. Please take a seat. The doctor will see you shortly.",
        translation: "Bagus. Silakan duduk. Dokter akan segera menemui Anda.",
      },
      {
        speaker: "Andi",
        role: "Patient",
        text: "How long is the wait approximately?",
        translation: "Kira-kira berapa lama menunggu?",
      },
      {
        speaker: "Receptionist",
        role: "Staff",
        text: "About 20 minutes. We'll call your name when it's your turn.",
        translation: "Sekitar 20 menit. Kami akan panggil nama Anda saat giliran tiba.",
      },
    ],
    keyExpressions: [
      { phrase: "I'd like to see a doctor", meaning: "Saya ingin bertemu dokter" },
      { phrase: "I haven't made an appointment", meaning: "Saya belum buat janji" },
      { phrase: "Walk-in visit", meaning: "Kunjungan tanpa janji" },
      { phrase: "Do you have health insurance?", meaning: "Apakah Anda punya asuransi kesehatan?" },
      { phrase: "How long is the wait?", meaning: "Berapa lama menunggu?" },
    ],
  },
  {
    id: "hosp-2",
    situation: "hospital",
    title: "Describing Symptoms to the Doctor",
    description: "Menjelaskan gejala sakit kepada dokter",
    difficulty: "intermediate",
    dialogue: [
      {
        speaker: "Doctor",
        role: "Doctor",
        text: "Hello! What brings you in today?",
        translation: "Halo! Ada keluhan apa hari ini?",
      },
      {
        speaker: "Wulan",
        role: "Patient",
        text: "I've been feeling really unwell for the past three days.",
        translation: "Saya merasa tidak enak badan selama tiga hari terakhir.",
      },
      {
        speaker: "Doctor",
        role: "Doctor",
        text: "I see. What are your symptoms?",
        translation: "Saya mengerti. Apa saja gejalanya?",
      },
      {
        speaker: "Wulan",
        role: "Patient",
        text: "I have a sore throat, a runny nose, and I've been coughing a lot.",
        translation: "Tenggorokan saya sakit, hidung meler, dan batuk terus.",
      },
      {
        speaker: "Doctor",
        role: "Doctor",
        text: "Do you have a fever?",
        translation: "Apakah Anda demam?",
      },
      {
        speaker: "Wulan",
        role: "Patient",
        text: "Yes, my temperature was 38.5°C this morning.",
        translation: "Ya, suhu saya 38,5°C tadi pagi.",
      },
      {
        speaker: "Doctor",
        role: "Doctor",
        text: "Have you taken any medication?",
        translation: "Apakah sudah minum obat?",
      },
      {
        speaker: "Wulan",
        role: "Patient",
        text: "Just paracetamol to bring the fever down.",
        translation: "Hanya paracetamol untuk menurunkan demam.",
      },
      {
        speaker: "Doctor",
        role: "Doctor",
        text: "Okay. It looks like a common cold. I'll prescribe some medicine. Get plenty of rest and drink lots of water.",
        translation: "Baik. Kelihatannya ini flu biasa. Saya akan resepkan obat. Banyak istirahat dan minum banyak air.",
      },
      {
        speaker: "Wulan",
        role: "Patient",
        text: "Thank you, Doctor. How long until I feel better?",
        translation: "Terima kasih, Dokter. Kira-kira berapa lama sampai sembuh?",
      },
      {
        speaker: "Doctor",
        role: "Doctor",
        text: "Usually about 5 to 7 days. Come back if you don't improve.",
        translation: "Biasanya sekitar 5 sampai 7 hari. Kembali lagi kalau tidak membaik.",
      },
    ],
    keyExpressions: [
      { phrase: "What brings you in today?", meaning: "Ada keluhan apa hari ini?" },
      { phrase: "I've been feeling unwell", meaning: "Saya merasa tidak enak badan" },
      { phrase: "I have a sore throat", meaning: "Tenggorokan saya sakit" },
      { phrase: "I'll prescribe some medicine", meaning: "Saya akan resepkan obat" },
      { phrase: "Get plenty of rest", meaning: "Banyak istirahat" },
      { phrase: "Come back if you don't improve", meaning: "Kembali kalau tidak membaik" },
    ],
  },
  {
    id: "hosp-3",
    situation: "hospital",
    title: "At the Pharmacy",
    description: "Mengambil obat di apotek dengan resep dokter",
    difficulty: "basic",
    dialogue: [
      {
        speaker: "Rio",
        role: "Patient",
        text: "Hi, I have a prescription from the doctor.",
        translation: "Halo, saya punya resep dari dokter.",
      },
      {
        speaker: "Pharmacist",
        role: "Pharmacist",
        text: "Sure, let me have a look. Give me a moment to prepare your medicine.",
        translation: "Tentu, biar saya lihat. Tunggu sebentar ya, saya siapkan obatnya.",
      },
      {
        speaker: "Rio",
        role: "Patient",
        text: "How long will it take?",
        translation: "Berapa lama?",
      },
      {
        speaker: "Pharmacist",
        role: "Pharmacist",
        text: "About 10 minutes. Here you go — three types of medicine.",
        translation: "Sekitar 10 menit. Ini — ada tiga jenis obat.",
      },
      {
        speaker: "Rio",
        role: "Patient",
        text: "Can you explain how to take them?",
        translation: "Bisakah Anda jelaskan cara minumnya?",
      },
      {
        speaker: "Pharmacist",
        role: "Pharmacist",
        text: "The white tablet is for fever — take one tablet three times a day after meals. The syrup is for your cough — one spoon twice a day.",
        translation: "Tablet putih untuk demam — minum satu tablet tiga kali sehari setelah makan. Sirupnya untuk batuk — satu sendok dua kali sehari.",
      },
      {
        speaker: "Rio",
        role: "Patient",
        text: "Should I take them all at the same time?",
        translation: "Apakah diminum semuanya bersamaan?",
      },
      {
        speaker: "Pharmacist",
        role: "Pharmacist",
        text: "Yes, you can take them together after eating. Make sure you finish all the antibiotics.",
        translation: "Ya, bisa diminum bersama setelah makan. Pastikan antibiotiknya dihabiskan.",
      },
      {
        speaker: "Rio",
        role: "Patient",
        text: "Got it. Thank you very much!",
        translation: "Mengerti. Terima kasih banyak!",
      },
    ],
    keyExpressions: [
      { phrase: "I have a prescription", meaning: "Saya punya resep" },
      { phrase: "Can you explain how to take them?", meaning: "Bisakah jelaskan cara minumnya?" },
      { phrase: "Three times a day after meals", meaning: "Tiga kali sehari setelah makan" },
      { phrase: "Make sure you finish all the antibiotics", meaning: "Pastikan antibiotiknya dihabiskan" },
      { phrase: "Got it", meaning: "Mengerti / Siap" },
    ],
  },
];

// ════════════════════════════════════════════════════════════════
//  EXPORT
// ════════════════════════════════════════════════════════════════

export const conversations: Conversation[] = [
  ...restaurantConversations,
  ...schoolConversations,
  ...shoppingConversations,
  ...hospitalConversations,
];

export const situationMeta: Record<
  ConversationSituation,
  { label: string; emoji: string; color: string; description: string }
> = {
  restaurant: {
    label: "Restaurant & Cafe",
    emoji: "🍽️",
    color: "bg-orange-500",
    description: "Order makanan, bayar tagihan, komplain",
  },
  school: {
    label: "School & Campus",
    emoji: "🏫",
    color: "bg-blue-500",
    description: "Izin ke guru, diskusi tugas, tanya dosen",
  },
  shopping: {
    label: "Shopping & Store",
    emoji: "🛍️",
    color: "bg-pink-500",
    description: "Tanya harga, coba baju, retur barang",
  },
  hospital: {
    label: "Doctor & Hospital",
    emoji: "🏥",
    color: "bg-green-500",
    description: "Daftar, cerita gejala, ambil obat",
  },
};
