import { Module } from "../types";

export const modulesB2: Module[] = [
  {
    id: 43,
    title: "Conditional Types 2 & 3",
    titleSyriac: "Conditional Types 2 & 3",
    category: "Level B2",
    summary: "Conditional type 2 dipakai untuk membicarakan situasi khayalan di masa kini atau masa depan, sedangkan type 3 untuk membicarakan penyesalan tentang masa lalu yang tidak bisa diubah lagi. Keduanya memakai pola if yang berbeda dan hasil yang berbeda pula.",
    introduction: "Kadang kita membayangkan hal yang tidak nyata: 'Seandainya saya kaya...' atau 'Seandainya kemarin saya belajar...'. Dalam bahasa Inggris, khayalan seperti ini memakai conditional sentence. Type 2 untuk khayalan masa kini, type 3 untuk khayalan masa lalu.",
    content: "Conditional type 2 memakai pola If + past simple, would + kata kerja dasar. Contoh: If I had more money, I would travel the world. Kalimat ini tidak nyata sekarang — saya tidak punya banyak uang. Perhatikan kata 'were' dipakai untuk semua subjek dalam type 2: If I were you, I would study harder.\n\nConditional type 3 memakai pola If + past perfect, would have + past participle. Contoh: If I had studied harder, I would have passed the exam. Kalimat ini membicarakan masa lalu yang sudah terjadi dan tidak bisa diubah — saya tidak belajar giat, dan saya tidak lulus.",
    keyRules: [
      "Type 2: If + past simple, would + kata kerja dasar (khayalan masa kini/masa depan).",
      "Type 3: If + past perfect, would have + past participle (khayalan masa lalu).",
      "Dalam type 2, gunakan 'were' untuk semua subjek: If I were you, If she were here.",
      "Bentuk singkat 'would' adalah 'd: I'd travel, she'd come.",
      "Jangan memakai 'would' di klausa if: salah 'If I would have money', benar 'If I had money'."
    ],
    vocabulary: [
      { syriac: "hypothetical", translit: "hai-po-THET-i-kel", meaning: "khayalan; tidak nyata", category: "Conditional" },
      { syriac: "imaginary", translit: "i-MAJ-i-ner-i", meaning: "khayalan; imajiner", category: "Conditional" },
      { syriac: "consequence", translit: "KON-si-kwens", meaning: "akibat; konsekuensi", category: "Conditional" },
      { syriac: "regret", translit: "ri-GRET", meaning: "penyesalan", category: "Conditional" },
      { syriac: "wish", translit: "WISY", meaning: "harapan; keinginan", category: "Conditional" },
      { syriac: "unlikely", translit: "an-LAIK-li", meaning: "tidak mungkin terjadi", category: "Conditional" },
      { syriac: "outcome", translit: "AUT-kam", meaning: "hasil; keluaran", category: "Conditional" },
      { syriac: "otherwise", translit: "A-der-waiz", meaning: "kalau tidak; jika tidak begitu", category: "Conditional" },
      { syriac: "suppose", translit: "se-POUZ", meaning: "seandainya; anggaplah", category: "Conditional" },
      { syriac: "would have", translit: "WUD HAV", meaning: "akan sudah (untuk masa lalu)", category: "Conditional" }
    ],
    examples: [
      { syriac: "If I had a million dollars, I would travel the world.", translit: "if ai hed e MIL-yen DOL-erz, ai wud TRA-vel de WERLD", indonesian: "Jika saya punya satu juta dolar, saya akan berkeliling dunia." },
      { syriac: "If she studied harder, she would pass the exam.", translit: "if syi STAD-id HAR-der, syi wud PAS de ig-ZAM", indonesian: "Jika dia belajar lebih giat, dia akan lulus ujian." },
      { syriac: "If we had left earlier, we would have caught the train.", translit: "if wi hed LEFT ER-li-er, wi wud hav KOT de TREIN", indonesian: "Jika kita berangkat lebih awal, kita pasti sudah sempat naik kereta." },
      { syriac: "If I had known about the meeting, I would have come.", translit: "if ai hed NOUN e-BAUT de MEE-ting, ai wud hav KAM", indonesian: "Jika saya tahu tentang rapat itu, saya pasti sudah datang." },
      { syriac: "If I were you, I would apologize to her.", translit: "if ai WER yu, ai wud e-POL-o-jaiz tu her", indonesian: "Jika saya jadi kamu, saya akan meminta maaf kepadanya." },
      { syriac: "If they had listened to the teacher, they would not have failed.", translit: "if dei hed LIS-end tu de TEE-cer, dei wud NOT hav FEILD", indonesian: "Jika mereka mendengarkan guru, mereka tidak akan gagal." }
    ],
    quizzes: [
      {
        id: 4301,
        question: "Lengkapi kalimat ini (conditional type 2): If I ___ rich, I would buy a big house.",
        options: ["am", "were", "will be", "have been"],
        correctAnswer: "were",
        explanation: "Conditional type 2 memakai past simple di klausa if, dan 'were' dipakai untuk semua subjek, termasuk 'I'."
      },
      {
        id: 4302,
        question: "Lengkapi kalimat ini (conditional type 3): If she had studied, she ___ passed the exam.",
        options: ["will", "would", "would have", "will have"],
        correctAnswer: "would have",
        explanation: "Conditional type 3 memakai pola would have + past participle: 'would have passed'."
      },
      {
        id: 4303,
        question: "Manakah kalimat conditional type 3 yang benar?",
        options: [
          "If we had saved money, we would have bought a car.",
          "If we save money, we would buy a car.",
          "If we saved money, we will buy a car.",
          "If we would save money, we buy a car."
        ],
        correctAnswer: "If we had saved money, we would have bought a car.",
        explanation: "Type 3 memakai If + past perfect (had saved) dan would have + past participle (would have bought)."
      },
      {
        id: 4304,
        question: "Lengkapi kalimat ini: If I were you, I ___ apologize to him.",
        options: ["will", "would", "would have", "shall"],
        correctAnswer: "would",
        explanation: "'If I were you' adalah type 2, jadi bagian hasil memakai would + kata kerja dasar."
      },
      {
        id: 4305,
        question: "Lengkapi kalimat ini (conditional type 3): If they ___ earlier, they wouldn't have missed the bus.",
        options: ["leave", "left", "had left", "will leave"],
        correctAnswer: "had left",
        explanation: "Type 3 memakai past perfect (had + past participle) di klausa if: 'had left'."
      }
    ]
  },
  {
    id: 44,
    title: "Perfect Tenses",
    titleSyriac: "Perfect Tenses",
    category: "Level B2",
    summary: "Perfect tenses menghubungkan dua waktu: present perfect menghubungkan masa lalu dengan masa kini, past perfect membicarakan kejadian yang terjadi lebih dulu dari kejadian lain di masa lalu, dan future perfect membicarakan sesuatu yang akan selesai sebelum waktu tertentu di masa depan.",
    introduction: "Kata 'perfect' di sini bukan berarti 'sempurna', melainkan 'selesai'. Perfect tenses dipakai untuk menunjukkan bahwa suatu perbuatan sudah selesai pada suatu titik waktu — entah sebelum sekarang, sebelum kejadian lain di masa lalu, atau sebelum waktu tertentu di masa depan.",
    content: "Present perfect dibentuk dengan have/has + past participle: I have finished my homework. Dipakai untuk pengalaman (I have visited Bali), perbuatan yang baru selesai (She has just arrived), dan perbuatan yang masih berlangsung sampai sekarang (We have lived here since 2020).\n\nPast perfect dibentuk dengan had + past participle: When I arrived, they had already left. Dipakai saat ada dua kejadian lampau — yang terjadi lebih dulu memakai past perfect. Future perfect dibentuk dengan will have + past participle: By 2030, she will have graduated. Artinya, pada tahun 2030 nanti, kelulusannya sudah selesai. Present perfect continuous (have/has been + verb-ing) menekankan durasi: We have been studying for two hours.",
    keyRules: [
      "Present perfect: have/has + past participle (pengalaman, baru selesai, masih berlangsung).",
      "Past perfect: had + past participle (kejadian yang terjadi lebih dulu dari kejadian lain di masa lalu).",
      "Future perfect: will have + past participle (selesai sebelum waktu tertentu di masa depan).",
      "Present perfect continuous: have/has been + verb-ing (menekankan durasi).",
      "Gunakan 'since' untuk titik awal waktu (since 2020) dan 'for' untuk lama waktu (for five years)."
    ],
    vocabulary: [
      { syriac: "already", translit: "ol-RED-i", meaning: "sudah", category: "Perfect Tenses" },
      { syriac: "just", translit: "JAST", meaning: "baru saja", category: "Perfect Tenses" },
      { syriac: "ever", translit: "E-ver", meaning: "pernah", category: "Perfect Tenses" },
      { syriac: "never", translit: "NE-ver", meaning: "tidak pernah", category: "Perfect Tenses" },
      { syriac: "since", translit: "SINS", meaning: "sejak", category: "Perfect Tenses" },
      { syriac: "for", translit: "FOR", meaning: "selama", category: "Perfect Tenses" },
      { syriac: "yet", translit: "YET", meaning: "belum; sudah (dalam pertanyaan)", category: "Perfect Tenses" },
      { syriac: "recently", translit: "REE-sent-li", meaning: "baru-baru ini", category: "Perfect Tenses" },
      { syriac: "by the time", translit: "bai de TAIM", meaning: "pada saat (waktu tertentu)", category: "Perfect Tenses" },
      { syriac: "experience", translit: "ik-SPEE-ri-ens", meaning: "pengalaman", category: "Perfect Tenses" }
    ],
    examples: [
      { syriac: "I have lived in Surabaya for five years.", translit: "ai hav LIVD in su-ra-BA-ya for FAIV yirz", indonesian: "Saya sudah tinggal di Surabaya selama lima tahun." },
      { syriac: "She has just finished her homework.", translit: "syi haz JAST FIN-isy-t her HOUM-werk", indonesian: "Dia baru saja menyelesaikan pekerjaan rumahnya." },
      { syriac: "By the time you arrive, we will have cooked dinner.", translit: "bai de TAIM yu e-RAIV, wi wil hav KUKT DIN-er", indonesian: "Pada saat kamu tiba, kami sudah selesai memasak makan malam." },
      { syriac: "They had finished the project before the deadline.", translit: "dei hed FIN-isy-t de PRO-jekt bi-FOR de DED-lain", indonesian: "Mereka sudah menyelesaikan proyek itu sebelum batas waktu." },
      { syriac: "We have been studying English since 2020.", translit: "wi hav bin STAD-i-ing ING-lisy sins TWEN-ti TWEN-ti", indonesian: "Kami sudah belajar bahasa Inggris sejak tahun 2020." },
      { syriac: "He had never seen snow before he visited Korea.", translit: "hi hed NE-ver SIIN SNOU bi-FOR hi VIZ-it-ed ko-REE-a", indonesian: "Dia belum pernah melihat salju sebelum mengunjungi Korea." }
    ],
    quizzes: [
      {
        id: 4401,
        question: "Lengkapi kalimat ini: She ___ lived here since 2018.",
        options: ["has", "have", "had", "will have"],
        correctAnswer: "has",
        explanation: "Subjek 'she' memakai 'has' dalam present perfect: 'has lived'."
      },
      {
        id: 4402,
        question: "Lengkapi kalimat ini: By 2030, scientists ___ found a cure for the disease.",
        options: ["will find", "will have found", "have found", "had found"],
        correctAnswer: "will have found",
        explanation: "Future perfect (will have + past participle) dipakai untuk sesuatu yang sudah selesai sebelum waktu tertentu di masa depan (2030)."
      },
      {
        id: 4403,
        question: "Lengkapi kalimat ini: When I arrived home, my brother ___ already left.",
        options: ["has", "have", "had", "will have"],
        correctAnswer: "had",
        explanation: "Past perfect (had + past participle) dipakai untuk kejadian yang terjadi lebih dulu dari kejadian lain di masa lalu."
      },
      {
        id: 4404,
        question: "Lengkapi kalimat ini: Have you ___ been to Jakarta?",
        options: ["already", "ever", "ago", "yesterday"],
        correctAnswer: "ever",
        explanation: "'Ever' dipakai dalam pertanyaan present perfect untuk menanyakan pengalaman: 'Have you ever been...?'"
      },
      {
        id: 4405,
        question: "Lengkapi kalimat ini: We have been ___ for two hours.",
        options: ["study", "studied", "studying", "to study"],
        correctAnswer: "studying",
        explanation: "Present perfect continuous memakai have/has been + verb-ing: 'have been studying'."
      }
    ]
  },
  {
    id: 45,
    title: "Passive Voice Lanjutan",
    titleSyriac: "Passive Voice — Advanced",
    category: "Level B2",
    summary: "Passive voice dipakai saat pelaku tidak penting, tidak diketahui, atau saat kita ingin menekankan hasil perbuatan. Pada level B2, kita memakai passive dalam berbagai tense, dengan modal, infinitive, dan bentuk causative 'have something done'.",
    introduction: "Dalam kalimat aktif, subjek melakukan perbuatan: 'They built the bridge.' Dalam kalimat pasif, subjek menerima perbuatan: 'The bridge was built.' Rumus dasarnya selalu be + past participle, dan kata kerja 'be' yang berubah mengikuti tense.",
    content: "Passive bisa dipakai di semua tense: present (is spoken), past (was built), present perfect (has been written), future (will be published). Dengan modal, polanya modal + be + past participle: The homework must be submitted tomorrow. Dengan infinitive: I want to be invited. Dengan gerund: I hate being interrupted.\n\nBentuk causative 'have something done' dipakai saat kita meminta orang lain melakukan sesuatu untuk kita: I had my hair cut yesterday (saya minta orang lain memotong rambut saya). Bedakan dengan 'I cut my hair' yang berarti saya memotongnya sendiri.",
    keyRules: [
      "Rumus dasar passive: be + past participle (be berubah mengikuti tense).",
      "Passive dengan modal: modal + be + past participle (must be done, should be checked).",
      "Passive infinitive: to be + past participle (I want to be helped).",
      "Passive gerund: being + past participle (I dislike being ignored).",
      "Causative: have + benda + past participle (I had my bike repaired = orang lain memperbaikinya)."
    ],
    vocabulary: [
      { syriac: "be built", translit: "bi BILT", meaning: "dibangun", category: "Passive Voice" },
      { syriac: "be awarded", translit: "bi e-WOR-ded", meaning: "diberi penghargaan", category: "Passive Voice" },
      { syriac: "be invented", translit: "bi in-VEN-ted", meaning: "ditemukan (diciptakan)", category: "Passive Voice" },
      { syriac: "be constructed", translit: "bi kon-STRAK-ted", meaning: "dibangun", category: "Passive Voice" },
      { syriac: "be elected", translit: "bi i-LEK-ted", meaning: "dipilih (dalam pemilihan)", category: "Passive Voice" },
      { syriac: "be discovered", translit: "bi dis-KA-verd", meaning: "ditemukan", category: "Passive Voice" },
      { syriac: "be repaired", translit: "bi ri-PERD", meaning: "diperbaiki", category: "Passive Voice" },
      { syriac: "be announced", translit: "bi e-NAUNST", meaning: "diumumkan", category: "Passive Voice" },
      { syriac: "be punished", translit: "bi PAN-isyt", meaning: "dihukum", category: "Passive Voice" },
      { syriac: "have something done", translit: "hav SAM-thing DAN", meaning: "meminta orang lain mengerjakan sesuatu", category: "Passive Voice" }
    ],
    examples: [
      { syriac: "The bridge was built in 1990.", translit: "de BRIJ woz BILT in NAIN-tiin NAIN-ti", indonesian: "Jembatan itu dibangun pada tahun 1990." },
      { syriac: "English is spoken in many countries.", translit: "ING-lisy iz SPOU-ken in MEN-i KAN-triiz", indonesian: "Bahasa Inggris dituturkan di banyak negara." },
      { syriac: "The novel will be published next month.", translit: "de NOV-el wil bi PAB-lisy-t NEKST MANT", indonesian: "Novel itu akan diterbitkan bulan depan." },
      { syriac: "The car must be repaired today.", translit: "de KAR mast bi ri-PERD tu-DEI", indonesian: "Mobil itu harus diperbaiki hari ini." },
      { syriac: "The homework has to be submitted by Friday.", translit: "de HOUM-werk haz tu bi seb-MIT-ed bai FRAI-dei", indonesian: "Pekerjaan rumah harus dikumpulkan paling lambat hari Jumat." },
      { syriac: "She had her hair cut yesterday.", translit: "syi hed her HER KAT YES-ter-dei", indonesian: "Dia memotong rambutnya (di salon) kemarin." }
    ],
    quizzes: [
      {
        id: 4501,
        question: "Lengkapi kalimat pasif ini: The letter ___ yesterday.",
        options: ["was sent", "is sent", "has sent", "will send"],
        correctAnswer: "was sent",
        explanation: "Kata 'yesterday' menunjukkan past tense, jadi passive-nya 'was + past participle': 'was sent'."
      },
      {
        id: 4502,
        question: "Lengkapi kalimat ini: The homework must ___ tomorrow.",
        options: ["submit", "be submitted", "submitted", "submitting"],
        correctAnswer: "be submitted",
        explanation: "Passive dengan modal memakai pola modal + be + past participle: 'must be submitted'."
      },
      {
        id: 4503,
        question: "Kalimat aktif 'They built this school in 2000.' Bentuk pasifnya adalah...",
        options: [
          "This school built in 2000.",
          "This school was built in 2000.",
          "This school is built in 2000.",
          "This school has built in 2000."
        ],
        correctAnswer: "This school was built in 2000.",
        explanation: "Past simple aktif 'built' menjadi passive 'was built' dengan subjek 'this school'."
      },
      {
        id: 4504,
        question: "Kalimat pasif 'The thief was caught by the police.' Bentuk aktifnya adalah...",
        options: [
          "The police caught the thief.",
          "The police is caught the thief.",
          "The thief caught the police.",
          "The police was caught the thief."
        ],
        correctAnswer: "The police caught the thief.",
        explanation: "Pelaku dalam kalimat pasif ('by the police') menjadi subjek kalimat aktif: 'The police caught the thief.'"
      },
      {
        id: 4505,
        question: "Lengkapi kalimat causative ini: I had my bike ___ yesterday.",
        options: ["repair", "to repair", "repaired", "repairing"],
        correctAnswer: "repaired",
        explanation: "Causative memakai pola have + benda + past participle: 'had my bike repaired' (orang lain yang memperbaiki)."
      }
    ]
  },
  {
    id: 46,
    title: "Reported Speech Lanjutan",
    titleSyriac: "Reported Speech — Advanced",
    category: "Level B2",
    summary: "Reported speech dipakai untuk menyampaikan kembali ucapan orang lain tanpa mengutip langsung. Pada level B2, kita mempelajari pergeseran tense (backshift), reported questions, perintah, serta kata kerja pelapor seperti suggest, advise, dan recommend.",
    introduction: "Jika seseorang berkata, 'I am tired', kita bisa melaporkannya menjadi: 'She said that she was tired.' Tense-nya bergeser ke belakang (backshift), kata ganti berubah, dan kata keterangan waktu ikut berubah.",
    content: "Aturan backshift: present simple menjadi past simple (am → was), present continuous menjadi past continuous (am reading → was reading), present perfect menjadi past perfect (have finished → had finished), will menjadi would, can menjadi could. Kata keterangan waktu juga berubah: today → that day, tomorrow → the next day, yesterday → the day before, now → then.\n\nUntuk pertanyaan, gunakan ask + if/whether untuk yes/no question (He asked if I liked coffee) dan kata tanya yang sama untuk wh-question tanpa inversi (She asked where I lived). Perintah dilaporkan dengan tell/ask + to + kata kerja: The teacher told us to close the door. Larangan: told us not to be late. Kata kerja pelapor lain: suggest doing, advise to do, recommend doing, warn not to do, promise to do.",
    keyRules: [
      "Backshift: present simple → past simple, present perfect → past perfect, will → would, can → could.",
      "Yes/no question dilaporkan dengan ask + if/whether (He asked if I was ready).",
      "Wh-question dilaporkan tanpa inversi dan tanpa tanda tanya (She asked where I lived).",
      "Perintah: tell/ask + to + kata kerja (told us to sit down); larangan: not to + kata kerja.",
      "Kata waktu berubah: today → that day, tomorrow → the next day, yesterday → the day before, now → then."
    ],
    vocabulary: [
      { syriac: "report", translit: "ri-PORT", meaning: "melaporkan; menyampaikan", category: "Reported Speech" },
      { syriac: "backshift", translit: "BAK-syift", meaning: "pergeseran tense ke belakang", category: "Reported Speech" },
      { syriac: "statement", translit: "STEIT-ment", meaning: "pernyataan", category: "Reported Speech" },
      { syriac: "suggest", translit: "se-JEST", meaning: "menyarankan", category: "Reported Speech" },
      { syriac: "advise", translit: "ed-VAIZ", meaning: "menasihati; menyarankan", category: "Reported Speech" },
      { syriac: "recommend", translit: "re-ko-MEND", meaning: "merekomendasikan", category: "Reported Speech" },
      { syriac: "promise", translit: "PROM-is", meaning: "berjanji", category: "Reported Speech" },
      { syriac: "warn", translit: "WORN", meaning: "memperingatkan", category: "Reported Speech" },
      { syriac: "whether", translit: "WED-er", meaning: "apakah", category: "Reported Speech" },
      { syriac: "command", translit: "ko-MAND", meaning: "perintah", category: "Reported Speech" }
    ],
    examples: [
      { syriac: "She said that she was tired.", translit: "syi SED det syi woz TAI-erd", indonesian: "Dia berkata bahwa dia lelah. (Ucapan langsung: 'I am tired.')" },
      { syriac: "He asked if I liked coffee.", translit: "hi ASKT if ai LAIKT KOF-i", indonesian: "Dia bertanya apakah saya suka kopi. (Ucapan langsung: 'Do you like coffee?')" },
      { syriac: "The teacher told us to close the door.", translit: "de TEE-cer TOULD as tu KLOUZ de DOR", indonesian: "Guru menyuruh kami menutup pintu. (Ucapan langsung: 'Close the door.')" },
      { syriac: "He said that he would help me.", translit: "hi SED det hi wud HELP mi", indonesian: "Dia berkata bahwa dia akan membantu saya. (Ucapan langsung: 'I will help you.')" },
      { syriac: "She asked where I lived.", translit: "syi ASKT WER ai LIVD", indonesian: "Dia bertanya di mana saya tinggal. (Ucapan langsung: 'Where do you live?')" },
      { syriac: "She warned us not to be late.", translit: "syi WORND as NOT tu bi LEIT", indonesian: "Dia memperingatkan kami agar tidak terlambat. (Ucapan langsung: 'Don't be late.')" }
    ],
    quizzes: [
      {
        id: 4601,
        question: "Ucapan langsung: 'I can swim.' Bentuk reported speech-nya: He said that he ___ swim.",
        options: ["can", "could", "will", "may"],
        correctAnswer: "could",
        explanation: "Dalam backshift, 'can' berubah menjadi 'could': 'He said that he could swim.'"
      },
      {
        id: 4602,
        question: "Lengkapi kalimat ini: She asked me ___ I was ready.",
        options: ["if", "that", "what", "when"],
        correctAnswer: "if",
        explanation: "Yes/no question dilaporkan dengan 'ask + if/whether': 'She asked me if I was ready.'"
      },
      {
        id: 4603,
        question: "Ucapan langsung: 'I will come tomorrow,' he said. Bentuk reported speech yang benar adalah...",
        options: [
          "He said that he will come tomorrow.",
          "He said that he would come tomorrow.",
          "He said that he would come the next day.",
          "He said he comes the next day."
        ],
        correctAnswer: "He said that he would come the next day.",
        explanation: "'Will' berubah menjadi 'would' dan 'tomorrow' berubah menjadi 'the next day'."
      },
      {
        id: 4604,
        question: "Lengkapi kalimat reported question ini: She asked where the library ___.",
        options: ["is", "was", "were", "are"],
        correctAnswer: "was",
        explanation: "Dalam reported question, tense bergeser (is → was) dan tidak ada inversi: 'where the library was'."
      },
      {
        id: 4605,
        question: "Lengkapi kalimat ini: The teacher told the students ___ quiet.",
        options: ["be", "to be", "being", "are"],
        correctAnswer: "to be",
        explanation: "Perintah dilaporkan dengan tell + to + kata kerja: 'told the students to be quiet'."
      }
    ]
  },
  {
    id: 47,
    title: "Modal Verbs",
    titleSyriac: "Modal Verbs",
    category: "Level B2",
    summary: "Modal verbs (must, should, might, could, dan lainnya) dipakai untuk menyatakan kewajiban, kemungkinan, nasihat, dan kesimpulan. Pada level B2, kita memakai modal + have + past participle untuk membicarakan masa lalu: must have done, should have done, could have done.",
    introduction: "Modal verbs adalah kata kerja bantu seperti can, must, should, may, dan might. Modal tidak berubah bentuk mengikuti subjek dan selalu diikuti kata kerja dasar. Pada level B2, kita memakai modal untuk menyimpulkan sesuatu tentang masa lalu dan membicarakan penyesalan.",
    content: "Untuk menyimpulkan tentang masa lalu, gunakan modal + have + past participle. Must have done berarti 'pasti sudah' (kesimpulan yang sangat yakin): He must have been tired after the long trip. Can't have done berarti 'tidak mungkin sudah': She can't have forgotten — she wrote it down. Might/may have done berarti 'mungkin sudah': They might have missed the bus.\n\nUntuk penyesalan dan nasihat yang tidak dilakukan, gunakan should have done: You should have told me earlier. Could have done berarti kesempatan yang terlewat: We could have won if we had practiced more. Untuk kewajiban masa kini, must berarti 'harus' (aturan dari diri sendiri atau pembicara) dan have to berarti 'harus' (aturan dari luar).",
    keyRules: [
      "Must have + past participle: kesimpulan yang sangat yakin tentang masa lalu (He must have left).",
      "Can't have + past participle: kesimpulan bahwa sesuatu tidak mungkin terjadi di masa lalu.",
      "Might/may have + past participle: kemungkinan tentang masa lalu (They might have missed it).",
      "Should have + past participle: penyesalan atau nasihat yang tidak dilakukan.",
      "Could have + past participle: kesempatan yang terlewat di masa lalu."
    ],
    vocabulary: [
      { syriac: "deduction", translit: "di-DAK-syen", meaning: "kesimpulan; penalaran", category: "Modal Verbs" },
      { syriac: "certainty", translit: "SER-ten-ti", meaning: "kepastian", category: "Modal Verbs" },
      { syriac: "obligation", translit: "ob-li-GEI-syen", meaning: "kewajiban", category: "Modal Verbs" },
      { syriac: "permission", translit: "per-MISY-en", meaning: "izin", category: "Modal Verbs" },
      { syriac: "advice", translit: "ed-VAIS", meaning: "nasihat", category: "Modal Verbs" },
      { syriac: "regret", translit: "ri-GRET", meaning: "penyesalan", category: "Modal Verbs" },
      { syriac: "possibility", translit: "pos-i-BIL-i-ti", meaning: "kemungkinan", category: "Modal Verbs" },
      { syriac: "ought to", translit: "OT tu", meaning: "seharusnya (sama dengan should)", category: "Modal Verbs" },
      { syriac: "be able to", translit: "bi EI-bel tu", meaning: "dapat; mampu", category: "Modal Verbs" },
      { syriac: "missed opportunity", translit: "MIST op-or-TYU-ni-ti", meaning: "kesempatan yang terlewat", category: "Modal Verbs" }
    ],
    examples: [
      { syriac: "You must have been tired after the long trip.", translit: "yu mast hav bin TAI-erd AF-ter de LONG TRIP", indonesian: "Kamu pasti sudah lelah setelah perjalanan panjang itu." },
      { syriac: "She can't have forgotten — she wrote it in her diary.", translit: "syi KANT hav for-GOT-en — syi ROUT it in her DAI-e-ri", indonesian: "Dia tidak mungkin lupa — dia sudah menulisnya di buku harian." },
      { syriac: "He should have studied harder.", translit: "hi SYUD hav STAD-id HAR-der", indonesian: "Dia seharusnya belajar lebih giat (tapi tidak)." },
      { syriac: "They might have missed the bus.", translit: "dei MAIT hav MIST de BAS", indonesian: "Mereka mungkin sudah ketinggalan bus." },
      { syriac: "You must wear a helmet when riding a motorcycle.", translit: "yu mast WER e HEL-met wen RAI-ding e MOU-ter-sai-kel", indonesian: "Kamu harus memakai helm saat mengendarai sepeda motor." },
      { syriac: "We could have won if we had practiced more.", translit: "wi KUD hav WON if wi hed PRAK-tist MOR", indonesian: "Kita sebenarnya bisa menang jika kita berlatih lebih banyak." }
    ],
    quizzes: [
      {
        id: 4701,
        question: "Lengkapi kalimat ini (kesimpulan yang sangat yakin): He ___ have seen the accident; he was standing right there.",
        options: ["must", "might", "should", "would"],
        correctAnswer: "must",
        explanation: "'Must have + past participle' dipakai untuk kesimpulan yang sangat yakin tentang masa lalu."
      },
      {
        id: 4702,
        question: "Lengkapi kalimat ini (kemungkinan): I ___ have left my keys at home.",
        options: ["must", "might", "should", "can't"],
        correctAnswer: "might",
        explanation: "'Might have + past participle' dipakai untuk kemungkinan tentang masa lalu: mungkin saja kuncinya tertinggal di rumah."
      },
      {
        id: 4703,
        question: "Lengkapi kalimat ini (penyesalan): You ___ have told me earlier!",
        options: ["must", "could", "should", "may"],
        correctAnswer: "should",
        explanation: "'Should have + past participle' dipakai untuk penyesalan atau nasihat yang tidak dilakukan di masa lalu."
      },
      {
        id: 4704,
        question: "Lengkapi kalimat ini (tidak mungkin): He ___ have finished the book in one day — it has 500 pages!",
        options: ["must", "should", "can't", "might"],
        correctAnswer: "can't",
        explanation: "'Can't have + past participle' dipakai untuk kesimpulan bahwa sesuatu tidak mungkin terjadi di masa lalu."
      },
      {
        id: 4705,
        question: "Lengkapi kalimat ini (kesempatan terlewat): We ___ have arrived earlier, but the traffic was terrible.",
        options: ["must", "should", "could", "will"],
        correctAnswer: "could",
        explanation: "'Could have + past participle' dipakai untuk kesempatan yang sebenarnya bisa terjadi tetapi terlewat."
      }
    ]
  },
  {
    id: 48,
    title: "Linking Words (Kata Penghubung)",
    titleSyriac: "Linking Words",
    category: "Level B2",
    summary: "Linking words menghubungkan kalimat dan paragraf agar tulisan mengalir dan mudah dipahami. Kata seperti however, therefore, moreover, dan despite menunjukkan hubungan antaride: pertentangan, akibat, tambahan, atau contoh.",
    introduction: "Tulisan yang baik tidak hanya berisi kalimat-kalimat yang benar, tetapi juga terhubung dengan rapi. Linking words adalah jembatan antar kalimat: however menunjukkan pertentangan, therefore menunjukkan akibat, moreover menambah informasi, dan for instance memberi contoh.",
    content: "Untuk menambah informasi, gunakan furthermore, moreover, in addition, dan besides: She speaks English. Moreover, she speaks French. Untuk pertentangan, gunakan however, nevertheless, on the other hand, dan although: He studied hard; however, he failed. Despite dan in spite of diikuti kata benda atau verb-ing: Despite the rain, we went out.\n\nUntuk sebab dan akibat, gunakan therefore, consequently, as a result, dan because of: It rained heavily. As a result, the match was cancelled. Untuk memberi contoh, gunakan for example dan for instance. Untuk urutan, gunakan firstly, secondly, then, finally, dan meanwhile. Untuk menutup, gunakan in conclusion dan to sum up.",
    keyRules: [
      "However dan therefore biasanya diawali koma atau titik koma dan diikuti koma.",
      "Despite dan in spite of diikuti kata benda atau verb-ing (despite the rain, despite being tired).",
      "Although diikuti klausa lengkap (although it was raining).",
      "Moreover dan furthermore dipakai untuk menambah ide yang lebih kuat.",
      "In conclusion dan to sum up dipakai untuk menutup tulisan atau presentasi."
    ],
    vocabulary: [
      { syriac: "however", translit: "hau-E-ver", meaning: "namun; akan tetapi", category: "Linking Words" },
      { syriac: "furthermore", translit: "FER-der-mor", meaning: "selain itu; terlebih lagi", category: "Linking Words" },
      { syriac: "therefore", translit: "DER-for", meaning: "oleh karena itu", category: "Linking Words" },
      { syriac: "moreover", translit: "mor-OU-ver", meaning: "terlebih lagi; lagi pula", category: "Linking Words" },
      { syriac: "nevertheless", translit: "nev-er-de-LES", meaning: "meskipun demikian", category: "Linking Words" },
      { syriac: "consequently", translit: "KON-si-kwent-li", meaning: "akibatnya", category: "Linking Words" },
      { syriac: "in addition", translit: "in e-DISY-en", meaning: "sebagai tambahan", category: "Linking Words" },
      { syriac: "despite", translit: "dis-PAIT", meaning: "meskipun; walaupun", category: "Linking Words" },
      { syriac: "although", translit: "ol-DOU", meaning: "meskipun; walaupun", category: "Linking Words" },
      { syriac: "for instance", translit: "for IN-stens", meaning: "contohnya", category: "Linking Words" },
      { syriac: "in conclusion", translit: "in kon-KLU-syen", meaning: "sebagai kesimpulan", category: "Linking Words" },
      { syriac: "meanwhile", translit: "MIIN-wail", meaning: "sementara itu", category: "Linking Words" }
    ],
    examples: [
      { syriac: "She studied hard; however, she failed the exam.", translit: "syi STAD-id HARD; hau-E-ver, syi FEILD di ig-ZAM", indonesian: "Dia belajar dengan giat; namun, dia gagal dalam ujian." },
      { syriac: "It was raining. Therefore, we stayed at home.", translit: "it woz REIN-ing. DER-for, wi STEID et HOUM", indonesian: "Hari sedang hujan. Oleh karena itu, kami tinggal di rumah." },
      { syriac: "He is rich; moreover, he is generous.", translit: "hi iz RIC; mor-OU-ver, hi iz JEN-er-es", indonesian: "Dia kaya; terlebih lagi, dia dermawan." },
      { syriac: "In addition to English, she speaks French.", translit: "in e-DISY-en tu ING-lisy, syi SPIKS FRENC", indonesian: "Selain bahasa Inggris, dia juga berbicara bahasa Prancis." },
      { syriac: "Despite the rain, we went hiking.", translit: "dis-PAIT de REIN, wi WENT HAI-king", indonesian: "Meskipun hujan, kami tetap pergi mendaki." },
      { syriac: "For instance, many students use their phones to study.", translit: "for IN-stens, MEN-i STYU-dents YUZ der FOUNZ tu STAD-i", indonesian: "Contohnya, banyak siswa memakai ponsel mereka untuk belajar." }
    ],
    quizzes: [
      {
        id: 4801,
        question: "Lengkapi kalimat ini: He was very tired. ___, he kept working.",
        options: ["However", "Therefore", "Moreover", "For example"],
        correctAnswer: "However",
        explanation: "'However' menunjukkan pertentangan: dia sangat lelah, tetapi tetap bekerja."
      },
      {
        id: 4802,
        question: "Lengkapi kalimat ini: It rained heavily. ___, the football match was cancelled.",
        options: ["However", "Therefore", "Despite", "In addition"],
        correctAnswer: "Therefore",
        explanation: "'Therefore' menunjukkan akibat: hujan deras, akibatnya pertandingan dibatalkan."
      },
      {
        id: 4803,
        question: "Lengkapi kalimat ini: ___ the rain, they played football.",
        options: ["Despite", "Although", "Because", "Therefore"],
        correctAnswer: "Despite",
        explanation: "'Despite' diikuti kata benda (the rain) dan berarti 'meskipun'."
      },
      {
        id: 4804,
        question: "Lengkapi kalimat ini: She speaks three languages. ___, she plays the piano very well.",
        options: ["However", "Moreover", "Therefore", "Although"],
        correctAnswer: "Moreover",
        explanation: "'Moreover' menambah informasi yang sejalan: dia juga pandai bermain piano."
      },
      {
        id: 4805,
        question: "Lengkapi kalimat penutup ini: ___, I would like to thank everyone for listening.",
        options: ["However", "In conclusion", "For instance", "Despite"],
        correctAnswer: "In conclusion",
        explanation: "'In conclusion' dipakai untuk menutup tulisan atau presentasi."
      }
    ]
  },
  {
    id: 49,
    title: "Menulis Esai",
    titleSyriac: "Essay Writing",
    category: "Level B2",
    summary: "Esai yang baik punya struktur yang jelas: pendahuluan dengan hook dan thesis statement, paragraf isi yang masing-masing diawali topic sentence dan didukung bukti, serta kesimpulan yang merangkum ide utama. Esai B2 biasanya bersifat argumentatif: menyatakan pendapat dan mempertahankannya.",
    introduction: "Menulis esai bukan sekadar menulis kalimat panjang. Esai yang baik seperti bangunan: ada fondasi (pendahuluan), dinding (paragraf isi), dan atap (kesimpulan). Setiap bagian punya tugasnya sendiri, dan semuanya terhubung dengan linking words.",
    content: "Pendahuluan dimulai dengan hook — kalimat pembuka yang menarik perhatian, misalnya pertanyaan atau fakta mengejutkan — lalu diakhiri thesis statement, yaitu kalimat yang menyatakan ide utama esai. Setiap paragraf isi dimulai dengan topic sentence (ide utama paragraf), lalu diikuti penjelasan dan bukti atau contoh. Satu paragraf membahas satu ide saja.\n\nKesimpulan merangkum kembali ide utama dengan kata-kata yang berbeda dan bisa ditutup dengan saran atau ajakan. Sebelum mengumpulkan esai, periksa kembali: apakah thesis statement jelas, apakah setiap paragraf punya satu ide, apakah linking words dipakai, dan apakah ejaan serta tanda baca sudah benar. Tulis draf dulu, lalu perbaiki — esai yang bagus jarang lahir dari sekali tulis.",
    keyRules: [
      "Pendahuluan: hook yang menarik, lalu thesis statement di akhir pendahuluan.",
      "Satu paragraf isi membahas satu ide, diawali topic sentence.",
      "Dukung setiap pendapat dengan alasan, bukti, atau contoh.",
      "Kesimpulan merangkum ide utama dengan kata-kata yang berbeda.",
      "Gunakan linking words (firstly, moreover, however, in conclusion) agar esai mengalir."
    ],
    vocabulary: [
      { syriac: "thesis statement", translit: "THEE-sis STEIT-ment", meaning: "kalimat ide utama esai", category: "Essay Writing" },
      { syriac: "introduction", translit: "in-tro-DAK-syen", meaning: "pendahuluan", category: "Essay Writing" },
      { syriac: "body paragraph", translit: "BOD-i PA-re-graf", meaning: "paragraf isi", category: "Essay Writing" },
      { syriac: "topic sentence", translit: "TOP-ik SEN-tens", meaning: "kalimat topik (ide utama paragraf)", category: "Essay Writing" },
      { syriac: "evidence", translit: "EV-i-dens", meaning: "bukti", category: "Essay Writing" },
      { syriac: "argument", translit: "AR-gyu-ment", meaning: "argumen; pendapat yang didukung alasan", category: "Essay Writing" },
      { syriac: "counterargument", translit: "KAUN-ter-AR-gyu-ment", meaning: "argumen lawan (yang dibantah)", category: "Essay Writing" },
      { syriac: "conclusion", translit: "kon-KLU-syen", meaning: "kesimpulan; penutup", category: "Essay Writing" },
      { syriac: "hook", translit: "HUK", meaning: "kalimat pembuka yang menarik perhatian", category: "Essay Writing" },
      { syriac: "draft", translit: "DRAFT", meaning: "draf; tulisan pertama yang masih diperbaiki", category: "Essay Writing" }
    ],
    examples: [
      { syriac: "A good essay starts with a hook that grabs the reader's attention.", translit: "e GUD ES-ei STARTS wid e HUK det GRABZ de REE-derz e-TEN-syen", indonesian: "Esai yang baik dimulai dengan hook yang menarik perhatian pembaca." },
      { syriac: "The thesis statement tells the reader the main idea of the essay.", translit: "de THEE-sis STEIT-ment TELZ de REE-der de MEIN ai-DEE-a ov de ES-ei", indonesian: "Thesis statement memberi tahu pembaca ide utama esai." },
      { syriac: "Each body paragraph should begin with a clear topic sentence.", translit: "IIC BOD-i PA-re-graf SYUD bi-GIN wid e KLEER TOP-ik SEN-tens", indonesian: "Setiap paragraf isi sebaiknya diawali dengan topic sentence yang jelas." },
      { syriac: "In conclusion, we can say that reading is important for students.", translit: "in kon-KLU-syen, wi ken SEI det REE-ding iz im-POR-tent for STYU-dents", indonesian: "Sebagai kesimpulan, kita dapat mengatakan bahwa membaca itu penting bagi siswa." },
      { syriac: "For example, students who read every day learn new words faster.", translit: "for ig-ZAM-pel, STYU-dents hu RIID EV-ri DEI LERN NYU WERDZ FAS-ter", indonesian: "Contohnya, siswa yang membaca setiap hari belajar kata-kata baru lebih cepat." },
      { syriac: "Firstly, mobile phones help students find information quickly.", translit: "FERST-li, MOU-bail FOUNZ HELP STYU-dents FAIND in-for-MEI-syen KWIK-li", indonesian: "Pertama, ponsel membantu siswa menemukan informasi dengan cepat." }
    ],
    quizzes: [
      {
        id: 4901,
        question: "Kalimat yang menyatakan ide utama sebuah esai disebut...",
        options: ["topic sentence", "thesis statement", "hook", "draft"],
        correctAnswer: "thesis statement",
        explanation: "Thesis statement adalah kalimat yang menyatakan ide utama seluruh esai, biasanya di akhir pendahuluan."
      },
      {
        id: 4902,
        question: "Di mana letak thesis statement dalam sebuah esai?",
        options: [
          "Di tengah paragraf isi pertama",
          "Di akhir pendahuluan",
          "Di kesimpulan",
          "Di judul esai"
        ],
        correctAnswer: "Di akhir pendahuluan",
        explanation: "Thesis statement biasanya diletakkan di akhir pendahuluan, setelah hook."
      },
      {
        id: 4903,
        question: "Apa yang sebaiknya mengawali sebuah paragraf isi?",
        options: ["Sebuah contoh", "Sebuah kesimpulan", "Sebuah topic sentence", "Sebuah pertanyaan penutup"],
        correctAnswer: "Sebuah topic sentence",
        explanation: "Setiap paragraf isi diawali topic sentence yang menyatakan ide utama paragraf itu."
      },
      {
        id: 4904,
        question: "Manakah kalimat berikut yang paling baik sebagai hook untuk esai tentang membaca?",
        options: [
          "In this essay I will write about reading.",
          "Reading is good.",
          "Imagine a world without books.",
          "This essay has three paragraphs."
        ],
        correctAnswer: "Imagine a world without books.",
        explanation: "Hook yang baik menarik perhatian pembaca, misalnya dengan membayangkan situasi yang mengejutkan."
      },
      {
        id: 4905,
        question: "Apa tugas utama kesimpulan dalam sebuah esai?",
        options: [
          "Memperkenalkan topik baru",
          "Merangkum kembali ide utama dengan kata-kata yang berbeda",
          "Menambahkan bukti baru yang belum dibahas",
          "Menulis ulang pendahuluan kata demi kata"
        ],
        correctAnswer: "Merangkum kembali ide utama dengan kata-kata yang berbeda",
        explanation: "Kesimpulan merangkum ide utama esai; bukti baru tidak ditambahkan di kesimpulan."
      }
    ]
  },
  {
    id: 50,
    title: "Presentasi & Diskusi",
    titleSyriac: "Presentations & Discussions",
    category: "Level B2",
    summary: "Presentasi yang baik punya pembuka yang jelas, isi yang tertata dengan signposting, dan penutup yang merangkum pesan utama. Dalam diskusi, kita perlu menyampaikan pendapat dengan sopan, setuju atau tidak setuju dengan santun, serta menjawab pertanyaan dengan tenang.",
    introduction: "Berbicara di depan kelas adalah keterampilan penting. Presentasi yang baik bukan soal menghafal teks, melainkan soal menyampaikan ide dengan jelas: sapa audiens, jelaskan apa yang akan dibahas, gunakan kata penanda (signposting) agar pendengar bisa mengikuti, lalu tutup dengan kesimpulan dan sesi tanya jawab.",
    content: "Buka presentasi dengan sapaan dan perkenalan topik: 'Good morning, everyone. Today I am going to talk about...' Gunakan signposting untuk menandai perpindahan: 'First, ...', 'Moving on to the next point, ...', 'In conclusion, ...'. Bicaralah dengan jelas, lakukan kontak mata, dan gunakan slide hanya sebagai bantuan visual, bukan teks untuk dibaca.\n\nDalam diskusi, sampaikan pendapat dengan frasa seperti 'In my opinion...' atau 'I believe that...'. Untuk setuju: 'I agree with you because...'. Untuk tidak setuju dengan sopan: 'I see your point, but...'. Jika tidak tahu jawaban pertanyaan, katakan dengan jujur: 'That's a good question. I'll find out and let you know.'",
    keyRules: [
      "Buka presentasi dengan sapaan dan topik yang jelas.",
      "Gunakan signposting (first, moving on to, in conclusion) agar pendengar bisa mengikuti.",
      "Lakukan kontak mata dan bicara dengan jelas; jangan membaca slide kata demi kata.",
      "Sampaikan pendapat dengan sopan: 'In my opinion...', 'I believe that...'.",
      "Tidak setuju dengan santun: 'I see your point, but...'; tidak tahu jawaban: 'That's a good question. I'll find out.'"
    ],
    vocabulary: [
      { syriac: "audience", translit: "O-di-ens", meaning: "audiens; pendengar", category: "Presentations & Discussions" },
      { syriac: "signposting", translit: "SAIN-pous-ting", meaning: "kata penanda alur presentasi", category: "Presentations & Discussions" },
      { syriac: "visual aid", translit: "VIZ-yu-el EID", meaning: "alat bantu visual (slide, gambar)", category: "Presentations & Discussions" },
      { syriac: "slide", translit: "SLAID", meaning: "slide presentasi", category: "Presentations & Discussions" },
      { syriac: "Q&A session", translit: "KYU en EI SESY-en", meaning: "sesi tanya jawab", category: "Presentations & Discussions" },
      { syriac: "speaker", translit: "SPI-ker", meaning: "pembicara", category: "Presentations & Discussions" },
      { syriac: "confident", translit: "KON-fi-dent", meaning: "percaya diri", category: "Presentations & Discussions" },
      { syriac: "eye contact", translit: "AI KON-tekt", meaning: "kontak mata", category: "Presentations & Discussions" },
      { syriac: "rehearse", translit: "ri-HERS", meaning: "berlatih (presentasi)", category: "Presentations & Discussions" },
      { syriac: "summarize", translit: "SAM-e-raiz", meaning: "merangkum", category: "Presentations & Discussions" },
      { syriac: "feedback", translit: "FIID-bak", meaning: "umpan balik; masukan", category: "Presentations & Discussions" },
      { syriac: "in my opinion", translit: "in mai o-PIN-yen", meaning: "menurut pendapat saya", category: "Presentations & Discussions" }
    ],
    examples: [
      { syriac: "Good morning, everyone. Today I am going to talk about climate change.", translit: "GUD MOR-ning, EV-ri-wan. tu-DEI ai em GO-ing tu TOK e-BAUT KLAI-met CEINJ", indonesian: "Selamat pagi, semuanya. Hari ini saya akan berbicara tentang perubahan iklim." },
      { syriac: "First, I will explain the causes. Then, I will discuss the effects.", translit: "FERST, ai wil ik-SPLEIN de KO-ziz. DEN, ai wil dis-KAS de i-FEKTS", indonesian: "Pertama, saya akan menjelaskan penyebabnya. Lalu, saya akan membahas dampaknya." },
      { syriac: "As you can see on this slide, the number is rising.", translit: "ez yu ken SII on dis SLAID, de NAM-ber iz RAI-zing", indonesian: "Seperti yang bisa Anda lihat pada slide ini, angkanya terus naik." },
      { syriac: "In conclusion, we must act now to protect our planet.", translit: "in kon-KLU-syen, wi mast AKT NAU tu pro-TEKT auer PLAN-et", indonesian: "Sebagai kesimpulan, kita harus bertindak sekarang untuk melindungi planet kita." },
      { syriac: "Thank you for listening. Are there any questions?", translit: "TENGK yu for LIS-en-ing. AR der EN-i KWES-cyenz?", indonesian: "Terima kasih sudah mendengarkan. Apakah ada pertanyaan?" },
      { syriac: "In my opinion, group discussion helps students learn better.", translit: "in mai o-PIN-yen, GRUP dis-KAS-yen HELPS STYU-dents LERN BET-er", indonesian: "Menurut pendapat saya, diskusi kelompok membantu siswa belajar lebih baik." }
    ],
    quizzes: [
      {
        id: 5001,
        question: "Manakah pembuka presentasi yang paling baik?",
        options: [
          "Good morning, everyone. Today I will talk about healthy food.",
          "Um, I don't know what to say.",
          "This is my presentation.",
          "I hope you like my slides."
        ],
        correctAnswer: "Good morning, everyone. Today I will talk about healthy food.",
        explanation: "Pembuka yang baik menyapa audiens dan langsung menyebutkan topik presentasi."
      },
      {
        id: 5002,
        question: "Ungkapan 'Moving on to the next point...' adalah contoh dari...",
        options: ["signposting", "hook", "thesis statement", "feedback"],
        correctAnswer: "signposting",
        explanation: "Signposting adalah kata atau frasa penanda alur presentasi, seperti 'moving on to' atau 'firstly'."
      },
      {
        id: 5003,
        question: "Saat ditanya dan kamu tidak tahu jawabannya, tanggapan terbaik adalah...",
        options: [
          "That's a good question. I'll find out and let you know.",
          "I don't know. Next question.",
          "That's a stupid question.",
          "You should ask someone else."
        ],
        correctAnswer: "That's a good question. I'll find out and let you know.",
        explanation: "Jawaban yang jujur dan sopan lebih baik daripada mengarang jawaban atau bersikap kasar."
      },
      {
        id: 5004,
        question: "Manakah cara yang sopan untuk tidak setuju dalam diskusi?",
        options: [
          "You're wrong!",
          "I see your point, but I think differently.",
          "That's nonsense.",
          "No, you don't understand."
        ],
        correctAnswer: "I see your point, but I think differently.",
        explanation: "Ketidaksetujuan yang sopan mengakui pendapat lawan dulu ('I see your point'), baru menyampaikan pendapat sendiri."
      },
      {
        id: 5005,
        question: "Apa yang sebaiknya dilakukan pembicara selama presentasi?",
        options: [
          "Membaca slide kata demi kata",
          "Menatap lantai sepanjang waktu",
          "Melakukan kontak mata dengan audiens dan bicara dengan jelas",
          "Berbicara secepat mungkin agar cepat selesai"
        ],
        correctAnswer: "Melakukan kontak mata dengan audiens dan bicara dengan jelas",
        explanation: "Kontak mata dan suara yang jelas membuat presentasi mudah diikuti; membaca slide kata demi kata membuat audiens bosan."
      }
    ]
  }
];
