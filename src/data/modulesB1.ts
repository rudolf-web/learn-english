import { Module } from "../types";

export const modulesB1: Module[] = [
  {
    id: 35,
    title: "Present Perfect",
    titleSyriac: "Present Perfect",
    category: "Level B1",
    summary: "Present perfect digunakan untuk membicarakan pengalaman, kejadian yang baru saja selesai, atau keadaan yang dimulai di masa lalu dan masih berlanjut sampai sekarang. Polanya adalah have/has + kata kerja bentuk ketiga (past participle). Modul ini akan membantumu membedakan present perfect dengan simple past.",
    introduction: "Pernahkah kamu berkata 'I have visited Bali'? Kalimat itu memakai present perfect — bentuk yang menghubungkan masa lalu dengan masa sekarang. Di modul ini kita belajar kapan memakai present perfect dan bagaimana membentuknya dengan benar.",
    content: "Present perfect dibentuk dengan have/has + past participle (kata kerja bentuk ketiga). Contoh: I have finished, She has eaten, They have lived. Gunakan present perfect untuk pengalaman (I have ever tried sushi), kejadian yang baru selesai (She has just arrived), dan keadaan yang masih berlanjut (We have lived here since 2015). Kata keterangan yang sering dipakai adalah already, just, ever, never, yet, since, dan for. Ingat: jangan memakai present perfect dengan keterangan waktu lampau yang sudah selesai, seperti yesterday atau last year — untuk itu gunakan simple past.",
    keyRules: [
      "Pola: subject + have/has + past participle (kata kerja bentuk ketiga).",
      "Pakai have untuk I, you, we, they; pakai has untuk he, she, it.",
      "Gunakan since untuk titik awal waktu (since 2020) dan for untuk lama waktu (for three years).",
      "Jangan memakai present perfect dengan yesterday, last week, atau ago — gunakan simple past.",
      "Ever dipakai dalam pertanyaan, never untuk pengalaman yang tidak pernah terjadi, just untuk kejadian yang baru saja selesai."
    ],
    vocabulary: [
      { syriac: "already", translit: "ol-REH-dee", meaning: "sudah", category: "Kata Keterangan" },
      { syriac: "just", translit: "jast", meaning: "baru saja", category: "Kata Keterangan" },
      { syriac: "ever", translit: "EH-ver", meaning: "pernah", category: "Kata Keterangan" },
      { syriac: "never", translit: "NEH-ver", meaning: "tidak pernah", category: "Kata Keterangan" },
      { syriac: "since", translit: "sins", meaning: "sejak", category: "Kata Keterangan" },
      { syriac: "for", translit: "for", meaning: "selama", category: "Kata Keterangan" },
      { syriac: "yet", translit: "yet", meaning: "belum", category: "Kata Keterangan" },
      { syriac: "recently", translit: "REE-sent-lee", meaning: "baru-baru ini", category: "Kata Keterangan" },
      { syriac: "finish", translit: "FI-nish", meaning: "menyelesaikan", category: "Kata Kerja" },
      { syriac: "visit", translit: "VI-zit", meaning: "mengunjungi", category: "Kata Kerja" },
      { syriac: "break", translit: "breyk", meaning: "memecahkan; merusak", category: "Kata Kerja" },
      { syriac: "twice", translit: "twais", meaning: "dua kali", category: "Kata Keterangan" }
    ],
    examples: [
      { syriac: "I have finished my homework.", translit: "ai hev FI-nisht mai HOM-wurk", indonesian: "Saya sudah menyelesaikan pekerjaan rumah saya." },
      { syriac: "She has visited Bali twice.", translit: "shi hez VI-zi-ted BAH-lee twais", indonesian: "Dia (perempuan) sudah mengunjungi Bali dua kali." },
      { syriac: "We have never seen snow.", translit: "wi hev NEH-ver seen snoh", indonesian: "Kami tidak pernah melihat salju." },
      { syriac: "They have just arrived.", translit: "dhei hev jast a-RAIVD", indonesian: "Mereka baru saja tiba." },
      { syriac: "He has lived here since 2020.", translit: "hi hez livd hir sins twen-tee twen-tee", indonesian: "Dia (laki-laki) sudah tinggal di sini sejak tahun 2020." },
      { syriac: "I have studied English for three years.", translit: "ai hev STUH-deed ING-glish for three yirz", indonesian: "Saya sudah belajar bahasa Inggris selama tiga tahun." }
    ],
    quizzes: [
      {
        id: 3501,
        question: "Lengkapi kalimat ini: 'She ___ her homework already.'",
        options: ["has finished", "have finished", "is finished", "has finish"],
        correctAnswer: "has finished",
        explanation: "She memakai has, dan setelah have/has harus kata kerja bentuk ketiga (finished)."
      },
      {
        id: 3502,
        question: "Manakah kalimat present perfect yang benar?",
        options: ["I have visited Bali twice.", "I have visit Bali twice.", "I has visited Bali twice.", "I am visited Bali twice."],
        correctAnswer: "I have visited Bali twice.",
        explanation: "Present perfect memakai have/has + past participle: have visited."
      },
      {
        id: 3503,
        question: "Lengkapi kalimat ini: 'I have lived in Surabaya ___ 2019.'",
        options: ["since", "for", "from", "at"],
        correctAnswer: "since",
        explanation: "Since dipakai untuk titik awal waktu (2019), sedangkan for dipakai untuk lama waktu."
      },
      {
        id: 3504,
        question: "Lengkapi kalimat ini: 'Have you ___ been to Jakarta?'",
        options: ["ever", "never", "already", "just"],
        correctAnswer: "ever",
        explanation: "Ever dipakai dalam pertanyaan present perfect untuk menanyakan pengalaman."
      },
      {
        id: 3505,
        question: "Lengkapi kalimat ini: 'We ___ just arrived.'",
        options: ["have", "has", "are", "had"],
        correctAnswer: "have",
        explanation: "We memakai have, dan just menunjukkan kejadian yang baru saja selesai."
      }
    ]
  },
  {
    id: 36,
    title: "Past Continuous",
    titleSyriac: "Past Continuous",
    category: "Level B1",
    summary: "Past continuous dipakai untuk kegiatan yang sedang berlangsung di suatu waktu di masa lalu. Polanya adalah was/were + verb-ing. Modul ini membantumu memakai past continuous bersama simple past untuk menceritakan kejadian yang terpotong di tengah jalan.",
    introduction: "Bayangkan kamu sedang membaca buku ketika telepon berdering — itulah past continuous. Bentuk ini menggambarkan kegiatan yang sedang berjalan di masa lalu, sering kali bersama kejadian lain yang memotongnya.",
    content: "Past continuous dibentuk dengan was/were + verb-ing: I was reading, They were playing. Gunakan was untuk I, he, she, it dan were untuk you, we, they. Pola yang paling sering dipakai adalah: past continuous (kegiatan yang sedang berlangsung) + when + simple past (kejadian yang memotong), atau while + past continuous + simple past. Contoh: 'While I was cooking, the phone rang.' Keterangan waktu seperti at 5 p.m. yesterday, all day, dan all night sering muncul bersama past continuous.",
    keyRules: [
      "Pola: subject + was/were + verb-ing.",
      "Pakai was untuk I, he, she, it; pakai were untuk you, we, they.",
      "Gunakan past continuous untuk kegiatan yang sedang berlangsung, dan simple past untuk kejadian yang memotongnya.",
      "When + simple past sering mengikuti past continuous: 'I was reading when she called.'",
      "While + past continuous sering diikuti simple past: 'While I was cooking, the phone rang.'"
    ],
    vocabulary: [
      { syriac: "while", translit: "wail", meaning: "sementara; ketika", category: "Kata Sambung" },
      { syriac: "when", translit: "wen", meaning: "ketika", category: "Kata Sambung" },
      { syriac: "suddenly", translit: "SUH-den-lee", meaning: "tiba-tiba", category: "Kata Keterangan" },
      { syriac: "all day", translit: "ol dei", meaning: "sepanjang hari", category: "Kata Keterangan" },
      { syriac: "rain", translit: "rein", meaning: "hujan", category: "Kata Benda / Kata Kerja" },
      { syriac: "cook", translit: "kuk", meaning: "memasak", category: "Kata Kerja" },
      { syriac: "drive", translit: "draiv", meaning: "mengemudi", category: "Kata Kerja" },
      { syriac: "wait", translit: "weit", meaning: "menunggu", category: "Kata Kerja" },
      { syriac: "sleep", translit: "sleep", meaning: "tidur", category: "Kata Kerja" },
      { syriac: "read", translit: "reed", meaning: "membaca", category: "Kata Kerja" },
      { syriac: "call", translit: "kol", meaning: "menelepon", category: "Kata Kerja" },
      { syriac: "ring", translit: "ring", meaning: "berdering", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "I was reading when she called.", translit: "ai woz REE-ding wen shi kold", indonesian: "Saya sedang membaca ketika dia menelepon." },
      { syriac: "They were playing football at 5 p.m. yesterday.", translit: "dhei wer PLEI-ing FUT-bol at faiv pee-em YES-ter-dei", indonesian: "Mereka sedang bermain sepak bola pukul 5 sore kemarin." },
      { syriac: "While I was cooking, the phone rang.", translit: "wail ai woz KU-king, dhe fohn rang", indonesian: "Ketika saya sedang memasak, telepon berdering." },
      { syriac: "It was raining all day yesterday.", translit: "it woz REI-ning ol dei YES-ter-dei", indonesian: "Hujan turun sepanjang hari kemarin." },
      { syriac: "She was sleeping when the alarm rang.", translit: "shi woz SLEE-ping wen dhe a-LARM rang", indonesian: "Dia sedang tidur ketika alarm berbunyi." }
    ],
    quizzes: [
      {
        id: 3601,
        question: "Lengkapi kalimat ini: 'I ___ reading when she called.'",
        options: ["was", "were", "am", "is"],
        correctAnswer: "was",
        explanation: "I memakai was dalam past continuous (was + verb-ing)."
      },
      {
        id: 3602,
        question: "Lengkapi kalimat ini: 'They ___ playing football at 5 p.m. yesterday.'",
        options: ["were", "was", "are", "is"],
        correctAnswer: "were",
        explanation: "They memakai were dalam past continuous (were + verb-ing)."
      },
      {
        id: 3603,
        question: "Lengkapi kalimat ini: 'While I was cooking, the phone ___.'",
        options: ["rang", "rings", "ringing", "ring"],
        correctAnswer: "rang",
        explanation: "Kejadian yang memotong kegiatan yang sedang berlangsung memakai simple past (rang)."
      },
      {
        id: 3604,
        question: "Manakah kalimat past continuous yang benar?",
        options: ["She was sleeping at midnight.", "She were sleeping at midnight.", "She is sleeping at midnight yesterday.", "She was sleep at midnight."],
        correctAnswer: "She was sleeping at midnight.",
        explanation: "She memakai was + verb-ing: was sleeping."
      },
      {
        id: 3605,
        question: "Lengkapi kalimat ini: 'What were you ___ at 8 last night?'",
        options: ["doing", "do", "did", "done"],
        correctAnswer: "doing",
        explanation: "Setelah was/were harus kata kerja + -ing: were doing."
      }
    ]
  },
  {
    id: 37,
    title: "Will vs Going To",
    titleSyriac: "Will vs Going To",
    category: "Level B1",
    summary: "Will dan going to sama-sama dipakai untuk masa depan, tetapi maknanya berbeda. Will dipakai untuk keputusan spontan, janji, dan tawaran, sedangkan going to dipakai untuk rencana yang sudah dipikirkan dan prediksi berdasarkan bukti yang terlihat. Modul ini membantumu memilih bentuk yang tepat.",
    introduction: "'I will help you' dan 'I am going to help you' sama-sama tentang masa depan, tetapi situasinya berbeda. Will muncul tiba-tiba sebagai keputusan, sedangkan going to sudah direncanakan sebelumnya. Mari pelajari bedanya.",
    content: "Gunakan will untuk keputusan yang dibuat saat berbicara (keputusan spontan), janji, tawaran, dan prediksi berdasarkan pendapat: 'I think it will rain tomorrow.' Gunakan be going to untuk rencana atau niat yang sudah dipikirkan sebelumnya: 'We are going to visit Bali next month.' Going to juga dipakai untuk prediksi berdasarkan bukti yang terlihat sekarang: 'Look at the clouds! It is going to rain.' Pola going to adalah am/is/are + going to + kata kerja dasar.",
    keyRules: [
      "Will dipakai untuk keputusan spontan, janji, tawaran, dan prediksi berdasarkan pendapat.",
      "Be going to dipakai untuk rencana yang sudah dipikirkan sebelumnya.",
      "Be going to juga dipakai untuk prediksi berdasarkan bukti yang terlihat sekarang.",
      "Pola going to: am/is/are + going to + kata kerja dasar.",
      "Pola will: will + kata kerja dasar (tidak berubah untuk semua subjek)."
    ],
    vocabulary: [
      { syriac: "decide", translit: "di-SAID", meaning: "memutuskan", category: "Kata Kerja" },
      { syriac: "promise", translit: "PRO-mis", meaning: "berjanji", category: "Kata Kerja" },
      { syriac: "plan", translit: "plen", meaning: "merencanakan", category: "Kata Kerja" },
      { syriac: "intend", translit: "in-TEND", meaning: "berniat", category: "Kata Kerja" },
      { syriac: "probably", translit: "PRO-beb-lee", meaning: "mungkin; kemungkinan besar", category: "Kata Keterangan" },
      { syriac: "maybe", translit: "MEI-bee", meaning: "mungkin", category: "Kata Keterangan" },
      { syriac: "tomorrow", translit: "to-MO-roh", meaning: "besok", category: "Kata Keterangan" },
      { syriac: "tonight", translit: "to-NAIT", meaning: "malam ini", category: "Kata Keterangan" },
      { syriac: "help", translit: "help", meaning: "membantu", category: "Kata Kerja" },
      { syriac: "offer", translit: "O-fer", meaning: "menawarkan", category: "Kata Kerja" },
      { syriac: "cloud", translit: "klaud", meaning: "awan", category: "Kata Benda" },
      { syriac: "rain", translit: "rein", meaning: "hujan", category: "Kata Benda / Kata Kerja" }
    ],
    examples: [
      { syriac: "I will help you carry the bag.", translit: "ai wil help yu KE-ree dhe beg", indonesian: "Saya akan membantumu membawa tas itu." },
      { syriac: "We are going to visit our grandmother tomorrow.", translit: "wi ar GOH-ing tu VI-zit au-er GRAND-muh-dher to-MO-roh", indonesian: "Kami akan mengunjungi nenek kami besok." },
      { syriac: "Look at the clouds! It is going to rain.", translit: "luk at dhe klaudz! it iz GOH-ing tu rein", indonesian: "Lihat awan itu! Hujan akan turun." },
      { syriac: "I think it will rain tomorrow.", translit: "ai thingk it wil rein to-MO-roh", indonesian: "Saya rasa besok akan hujan." },
      { syriac: "She is going to study medicine at university.", translit: "shi iz GOH-ing tu STUH-dee ME-di-sin at yu-ni-VER-si-tee", indonesian: "Dia akan belajar kedokteran di universitas." },
      { syriac: "I will call you tonight.", translit: "ai wil kol yu to-NAIT", indonesian: "Saya akan meneleponmu malam ini." }
    ],
    quizzes: [
      {
        id: 3701,
        question: "'I dropped my bag!' — 'Don't worry, I ___ help you.' (keputusan spontan)",
        options: ["will", "am going to", "am", "would"],
        correctAnswer: "will",
        explanation: "Keputusan yang dibuat saat berbicara (spontan) memakai will."
      },
      {
        id: 3702,
        question: "Lengkapi kalimat ini: 'We ___ visit Bali next month. We already bought the tickets.' (rencana)",
        options: ["are going to", "will", "are", "would"],
        correctAnswer: "are going to",
        explanation: "Rencana yang sudah dipikirkan dan disiapkan memakai be going to."
      },
      {
        id: 3703,
        question: "Lengkapi kalimat ini: 'Look at the dark clouds! It ___ rain.' (prediksi dari bukti yang terlihat)",
        options: ["is going to", "will", "is", "rains"],
        correctAnswer: "is going to",
        explanation: "Prediksi berdasarkan bukti yang terlihat sekarang (awan gelap) memakai be going to."
      },
      {
        id: 3704,
        question: "Lengkapi kalimat ini: 'I think she ___ pass the exam.' (prediksi berdasarkan pendapat)",
        options: ["will", "is going to", "is", "would"],
        correctAnswer: "will",
        explanation: "Prediksi berdasarkan pendapat (I think) memakai will."
      },
      {
        id: 3705,
        question: "Lengkapi kalimat ini: 'They ___ going to watch a movie tonight.'",
        options: ["are", "is", "will", "am"],
        correctAnswer: "are",
        explanation: "They memakai are dalam pola be going to."
      }
    ]
  },
  {
    id: 38,
    title: "Conditional Type 1",
    titleSyriac: "Conditional Type 1",
    category: "Level B1",
    summary: "Conditional type 1 dipakai untuk membicarakan kemungkinan yang nyata di masa depan: jika syaratnya terpenuhi, akibatnya akan terjadi. Polanya adalah if + simple present, will + kata kerja dasar. Modul ini membantumu membuat kalimat pengandaian yang benar.",
    introduction: "'If you study hard, you will pass the exam.' Kalimat seperti ini adalah conditional type 1 — pengandaian tentang hal yang mungkin benar-benar terjadi. Syaratnya memakai simple present, akibatnya memakai will.",
    content: "Conditional type 1 terdiri dari dua bagian: klausa if (syarat) dan klausa utama (akibat). Klausa if memakai simple present, sedangkan klausa utama memakai will + kata kerja dasar. Contoh: 'If it rains, we will stay at home.' Urutan kedua klausa bisa dibalik: 'We will stay at home if it rains.' Kata unless berarti 'kecuali jika' dan sama dengan if not: 'Unless you hurry, you will miss the train' sama artinya dengan 'If you don't hurry, you will miss the train.'",
    keyRules: [
      "Pola: If + simple present, will + kata kerja dasar.",
      "Klausa if memakai simple present, bukan will.",
      "Urutan klausa boleh dibalik: 'We will stay at home if it rains.'",
      "Unless berarti 'kecuali jika' (if not).",
      "Conditional type 1 dipakai untuk kemungkinan yang nyata di masa depan, bukan khayalan."
    ],
    vocabulary: [
      { syriac: "if", translit: "if", meaning: "jika; kalau", category: "Kata Sambung" },
      { syriac: "unless", translit: "un-LES", meaning: "kecuali jika", category: "Kata Sambung" },
      { syriac: "hurry", translit: "HU-ree", meaning: "bergegas", category: "Kata Kerja" },
      { syriac: "miss", translit: "mis", meaning: "ketinggalan; melewatkan", category: "Kata Kerja" },
      { syriac: "win", translit: "win", meaning: "menang", category: "Kata Kerja" },
      { syriac: "pass", translit: "pas", meaning: "lulus; melewati", category: "Kata Kerja" },
      { syriac: "late", translit: "leit", meaning: "terlambat", category: "Kata Sifat" },
      { syriac: "stay", translit: "stei", meaning: "tinggal; tetap", category: "Kata Kerja" },
      { syriac: "bring", translit: "bring", meaning: "membawa", category: "Kata Kerja" },
      { syriac: "umbrella", translit: "um-BRE-leh", meaning: "payung", category: "Kata Benda" },
      { syriac: "catch", translit: "ketch", meaning: "menangkap; mengejar (bus)", category: "Kata Kerja" },
      { syriac: "study", translit: "STUH-dee", meaning: "belajar", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "If it rains, we will stay at home.", translit: "if it reinz, wi wil stei at hom", indonesian: "Jika hujan, kami akan tinggal di rumah." },
      { syriac: "If you study hard, you will pass the exam.", translit: "if yu STUH-dee hard, yu wil pas dhe ig-ZAM", indonesian: "Jika kamu belajar keras, kamu akan lulus ujian." },
      { syriac: "If she hurries, she will catch the bus.", translit: "if shi HU-reez, shi wil ketch dhe bas", indonesian: "Jika dia bergegas, dia akan mengejar bus." },
      { syriac: "If I have time, I will call you.", translit: "if ai hev taim, ai wil kol yu", indonesian: "Jika saya punya waktu, saya akan meneleponmu." },
      { syriac: "Unless you hurry, you will miss the train.", translit: "un-LES yu HU-ree, yu wil mis dhe trein", indonesian: "Kecuali jika kamu bergegas, kamu akan ketinggalan kereta." }
    ],
    quizzes: [
      {
        id: 3801,
        question: "Lengkapi kalimat ini: 'If it rains, we ___ at home.'",
        options: ["will stay", "would stay", "stayed", "stay"],
        correctAnswer: "will stay",
        explanation: "Klausa utama conditional type 1 memakai will + kata kerja dasar."
      },
      {
        id: 3802,
        question: "Lengkapi kalimat ini: 'If you ___ hard, you will pass the exam.'",
        options: ["study", "studied", "will study", "studying"],
        correctAnswer: "study",
        explanation: "Klausa if memakai simple present, bukan will."
      },
      {
        id: 3803,
        question: "Lengkapi kalimat ini: 'Unless you hurry, you ___ miss the train.'",
        options: ["will", "would", "did", "do"],
        correctAnswer: "will",
        explanation: "Unless berarti 'kecuali jika', dan klausa utama conditional type 1 memakai will."
      },
      {
        id: 3804,
        question: "Lengkapi kalimat ini: 'If she ___ time, she will help us.'",
        options: ["has", "have", "had", "will have"],
        correctAnswer: "has",
        explanation: "She memakai has dalam simple present."
      },
      {
        id: 3805,
        question: "Manakah pola conditional type 1 yang benar?",
        options: ["If + simple present, will + kata kerja dasar", "If + simple past, would + kata kerja dasar", "If + will, simple present", "If + kata kerja dasar, would + kata kerja dasar"],
        correctAnswer: "If + simple present, will + kata kerja dasar",
        explanation: "Conditional type 1: If + simple present, will + kata kerja dasar."
      }
    ]
  },
  {
    id: 39,
    title: "Passive Voice (Present & Past)",
    titleSyriac: "Passive Voice — Present & Past",
    category: "Level B1",
    summary: "Passive voice dipakai ketika pelaku tidak penting atau tidak diketahui, dan yang penting adalah apa yang terjadi pada subjek. Polanya adalah be + past participle (kata kerja bentuk ketiga). Modul ini membahas passive voice dalam present simple dan past simple.",
    introduction: "'The house was built in 1990.' Siapa yang membangunnya tidak disebutkan — yang penting adalah rumahnya. Itulah passive voice: subjek menerima aksi, bukan melakukan aksi.",
    content: "Passive voice dibentuk dengan kata kerja be + past participle (kata kerja bentuk ketiga). Untuk present simple, gunakan am/is/are: 'English is spoken in many countries.' Untuk past simple, gunakan was/were: 'The house was built in 1990.' Gunakan by + pelaku hanya jika pelakunya penting atau perlu disebutkan: 'This book was written by a famous author.' Kalimat pasif sangat sering dipakai dalam berita, laporan, dan teks ilmiah.",
    keyRules: [
      "Pola: be + past participle (kata kerja bentuk ketiga).",
      "Present simple: am/is/are + past participle.",
      "Past simple: was/were + past participle.",
      "Gunakan by + pelaku hanya jika pelaku perlu disebutkan.",
      "Pakai passive voice bila pelaku tidak penting, tidak diketahui, atau sudah jelas."
    ],
    vocabulary: [
      { syriac: "build", translit: "bild", meaning: "membangun", category: "Kata Kerja" },
      { syriac: "write", translit: "rait", meaning: "menulis", category: "Kata Kerja" },
      { syriac: "make", translit: "meik", meaning: "membuat", category: "Kata Kerja" },
      { syriac: "clean", translit: "kleen", meaning: "membersihkan", category: "Kata Kerja" },
      { syriac: "open", translit: "OH-pen", meaning: "membuka", category: "Kata Kerja" },
      { syriac: "close", translit: "klohz", meaning: "menutup", category: "Kata Kerja" },
      { syriac: "speak", translit: "speek", meaning: "berbicara", category: "Kata Kerja" },
      { syriac: "teach", translit: "teech", meaning: "mengajar", category: "Kata Kerja" },
      { syriac: "grow", translit: "groh", meaning: "menanam; tumbuh", category: "Kata Kerja" },
      { syriac: "sell", translit: "sel", meaning: "menjual", category: "Kata Kerja" },
      { syriac: "repair", translit: "ri-PER", meaning: "memperbaiki", category: "Kata Kerja" },
      { syriac: "famous", translit: "FEI-mes", meaning: "terkenal", category: "Kata Sifat" }
    ],
    examples: [
      { syriac: "English is spoken in many countries.", translit: "ING-glish iz SPOH-ken in ME-nee KUN-treez", indonesian: "Bahasa Inggris dituturkan di banyak negara." },
      { syriac: "The house was built in 1990.", translit: "dhe haus woz bilt in nain-teen NAIN-tee", indonesian: "Rumah itu dibangun pada tahun 1990." },
      { syriac: "This book was written by a famous author.", translit: "dhis buk woz RI-ten bai a FEI-mes O-ther", indonesian: "Buku ini ditulis oleh penulis terkenal." },
      { syriac: "The room is cleaned every day.", translit: "dhe rum iz kleend EV-ree dei", indonesian: "Ruangan itu dibersihkan setiap hari." },
      { syriac: "Rice is grown in Indonesia.", translit: "rais iz grohn in in-doh-NEE-zee-a", indonesian: "Padi ditanam di Indonesia." }
    ],
    quizzes: [
      {
        id: 3901,
        question: "Lengkapi kalimat ini: 'English ___ in many countries.'",
        options: ["is spoken", "speaks", "is speak", "spoken"],
        correctAnswer: "is spoken",
        explanation: "Present simple pasif: is + past participle (spoken)."
      },
      {
        id: 3902,
        question: "Lengkapi kalimat ini: 'The house ___ in 1990.'",
        options: ["was built", "is built", "build", "built"],
        correctAnswer: "was built",
        explanation: "Past simple pasif: was + past participle (built)."
      },
      {
        id: 3903,
        question: "Lengkapi kalimat ini: 'The room ___ every day.'",
        options: ["is cleaned", "cleans", "was clean", "clean"],
        correctAnswer: "is cleaned",
        explanation: "Kegiatan rutin di masa kini memakai present simple pasif: is cleaned."
      },
      {
        id: 3904,
        question: "Lengkapi kalimat ini: 'This book ___ by a famous author.'",
        options: ["was written", "wrote", "is write", "written"],
        correctAnswer: "was written",
        explanation: "Past simple pasif: was + past participle (written)."
      },
      {
        id: 3905,
        question: "Manakah pola passive voice yang benar?",
        options: ["be + past participle", "be + verb-ing", "be + kata kerja dasar", "be + to infinitive"],
        correctAnswer: "be + past participle",
        explanation: "Passive voice selalu dibentuk dengan be + past participle (kata kerja bentuk ketiga)."
      }
    ]
  },
  {
    id: 40,
    title: "Reported Speech (Pengenalan)",
    titleSyriac: "Reported Speech — Introduction",
    category: "Level B1",
    summary: "Reported speech dipakai untuk menyampaikan kembali apa yang dikatakan orang lain tanpa mengutip kata-katanya secara persis. Kata kerja biasanya mundur satu langkah ke masa lalu (backshift): am menjadi was, will menjadi would. Modul ini adalah pengenalan dasar reported speech untuk pernyataan (statements).",
    introduction: "Doni berkata, 'I am happy.' Jika kamu menceritakannya kepada orang lain, kamu berkata: 'Doni said he was happy.' Itulah reported speech — menyampaikan ucapan orang lain dengan kata-katamu sendiri dan dengan perubahan kata kerja.",
    content: "Dalam reported speech, kata kerja dalam ucapan asli biasanya mundur satu langkah (backshift): present simple menjadi past simple (like menjadi liked), present continuous menjadi past continuous (am studying menjadi was studying), dan will menjadi would. Kata ganti juga berubah mengikuti pembicara: 'I' menjadi 'he' atau 'she'. Kata 'that' boleh dipakai atau tidak: 'He said (that) he was happy.' Kata keterangan waktu juga berubah: now menjadi then, tomorrow menjadi the next day, dan yesterday menjadi the day before.",
    keyRules: [
      "Present simple menjadi past simple: 'I like pizza.' menjadi He said he liked pizza.",
      "Present continuous menjadi past continuous: 'I am studying.' menjadi She said she was studying.",
      "Will menjadi would: 'I will go.' menjadi He said he would go.",
      "Kata ganti berubah mengikuti pembicara: I menjadi he/she, my menjadi his/her.",
      "Kata that boleh dipakai atau tidak: 'He said (that) he was happy.'"
    ],
    vocabulary: [
      { syriac: "say", translit: "sei", meaning: "berkata", category: "Kata Kerja" },
      { syriac: "tell", translit: "tel", meaning: "memberitahu", category: "Kata Kerja" },
      { syriac: "said", translit: "sed", meaning: "berkata (lampau)", category: "Kata Kerja" },
      { syriac: "told", translit: "tohld", meaning: "memberitahu (lampau)", category: "Kata Kerja" },
      { syriac: "that", translit: "dhet", meaning: "bahwa", category: "Kata Sambung" },
      { syriac: "yesterday", translit: "YES-ter-dei", meaning: "kemarin", category: "Kata Keterangan" },
      { syriac: "tomorrow", translit: "to-MO-roh", meaning: "besok", category: "Kata Keterangan" },
      { syriac: "happy", translit: "HE-pee", meaning: "senang; bahagia", category: "Kata Sifat" },
      { syriac: "tired", translit: "TAI-erd", meaning: "lelah", category: "Kata Sifat" },
      { syriac: "ask", translit: "ask", meaning: "bertanya", category: "Kata Kerja" },
      { syriac: "come", translit: "kam", meaning: "datang", category: "Kata Kerja" },
      { syriac: "go", translit: "goh", meaning: "pergi", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "'I am happy.' menjadi He said (that) he was happy.", translit: "ai em HE-pee — hi sed (dhet) hi woz HE-pee", indonesian: "'Saya senang.' menjadi Dia berkata bahwa dia senang." },
      { syriac: "'I will come tomorrow.' menjadi She said she would come the next day.", translit: "ai wil kam to-MO-roh — shi sed shi wud kam dhe nekst dei", indonesian: "'Saya akan datang besok.' menjadi Dia berkata bahwa dia akan datang keesokan harinya." },
      { syriac: "'I like pizza.' menjadi He said he liked pizza.", translit: "ai laik PEET-se — hi sed hi laikt PEET-se", indonesian: "'Saya suka pizza.' menjadi Dia berkata bahwa dia suka pizza." },
      { syriac: "'I am studying now.' menjadi She said she was studying then.", translit: "ai em STUH-dee-ing nau — shi sed shi woz STUH-dee-ing dhen", indonesian: "'Saya sedang belajar sekarang.' menjadi Dia berkata bahwa dia sedang belajar saat itu." },
      { syriac: "'We live in Surabaya.' menjadi They said they lived in Surabaya.", translit: "wi liv in su-ra-BA-ya — dhei sed dhei livd in su-ra-BA-ya", indonesian: "'Kami tinggal di Surabaya.' menjadi Mereka berkata bahwa mereka tinggal di Surabaya." }
    ],
    quizzes: [
      {
        id: 4001,
        question: "Doni berkata: 'I am happy.' Bentuk reported speech-nya adalah...",
        options: ["He said (that) he was happy.", "He said (that) he is happy.", "He said (that) he will be happy.", "He said (that) he has been happy."],
        correctAnswer: "He said (that) he was happy.",
        explanation: "Present simple (am) mundur menjadi past simple (was) dalam reported speech."
      },
      {
        id: 4002,
        question: "Sinta berkata: 'I will go tomorrow.' Bentuk reported speech-nya adalah...",
        options: ["She said she would go the next day.", "She said she will go tomorrow.", "She said she is going tomorrow.", "She said she goes the next day."],
        correctAnswer: "She said she would go the next day.",
        explanation: "Will menjadi would, dan tomorrow menjadi the next day dalam reported speech."
      },
      {
        id: 4003,
        question: "Lengkapi kalimat ini: 'He said he ___ pizza.' (dari 'I like pizza.')",
        options: ["liked", "likes", "like", "liking"],
        correctAnswer: "liked",
        explanation: "Present simple (like) mundur menjadi past simple (liked)."
      },
      {
        id: 4004,
        question: "Lengkapi kalimat ini: 'She said she ___ studying then.' (dari 'I am studying now.')",
        options: ["was", "is", "will", "has"],
        correctAnswer: "was",
        explanation: "Present continuous (am studying) mundur menjadi past continuous (was studying), dan now menjadi then."
      },
      {
        id: 4005,
        question: "Mereka berkata: 'We live in Surabaya.' Bentuk reported speech-nya adalah...",
        options: ["They said they lived in Surabaya.", "They said they live in Surabaya.", "They said they living in Surabaya.", "They said they will live in Surabaya."],
        correctAnswer: "They said they lived in Surabaya.",
        explanation: "Present simple (live) mundur menjadi past simple (lived)."
      }
    ]
  },
  {
    id: 41,
    title: "Relative Clauses",
    titleSyriac: "Relative Clauses",
    category: "Level B1",
    summary: "Relative clause adalah anak kalimat yang memberi informasi tambahan tentang kata benda. Kata ganti penghubungnya adalah who untuk orang, which untuk benda, that untuk orang atau benda, whose untuk kepemilikan, where untuk tempat, dan when untuk waktu. Modul ini membantumu memilih kata ganti yang tepat.",
    introduction: "'The girl who is wearing a red shirt is my sister.' Kata who menghubungkan dua informasi tentang gadis itu. Tanpa relative clause, kita harus memakai dua kalimat. Mari belajar memakai who, which, that, whose, where, dan when.",
    content: "Relative clause dimulai dengan relative pronoun. Gunakan who untuk orang ('The man who helped me is my teacher'), which untuk benda atau hewan ('This is the book which I bought yesterday'), dan that untuk orang atau benda ('The car that I bought is fast'). Gunakan whose untuk menunjukkan kepemilikan ('The man whose car is red is my uncle'), where untuk tempat ('This is the house where I grew up'), dan when untuk waktu ('I remember the day when we first met'). Relative pronoun menggantikan kata benda yang sudah disebutkan sebelumnya.",
    keyRules: [
      "Who dipakai untuk orang: 'The girl who is singing is my sister.'",
      "Which dipakai untuk benda atau hewan: 'The book which I read is interesting.'",
      "That bisa dipakai untuk orang maupun benda.",
      "Whose dipakai untuk kepemilikan: 'The boy whose bike is blue is my friend.'",
      "Where dipakai untuk tempat dan when dipakai untuk waktu."
    ],
    vocabulary: [
      { syriac: "who", translit: "hu", meaning: "yang (untuk orang)", category: "Kata Ganti" },
      { syriac: "which", translit: "wich", meaning: "yang (untuk benda)", category: "Kata Ganti" },
      { syriac: "that", translit: "dhet", meaning: "yang (untuk orang atau benda)", category: "Kata Ganti" },
      { syriac: "whose", translit: "huuz", meaning: "yang ...-nya (kepemilikan)", category: "Kata Ganti" },
      { syriac: "where", translit: "wer", meaning: "di mana; tempat", category: "Kata Ganti" },
      { syriac: "when", translit: "wen", meaning: "ketika; waktu", category: "Kata Ganti" },
      { syriac: "teacher", translit: "TEE-cher", meaning: "guru", category: "Kata Benda" },
      { syriac: "book", translit: "buk", meaning: "buku", category: "Kata Benda" },
      { syriac: "house", translit: "haus", meaning: "rumah", category: "Kata Benda" },
      { syriac: "friend", translit: "frend", meaning: "teman", category: "Kata Benda" },
      { syriac: "car", translit: "kar", meaning: "mobil", category: "Kata Benda" },
      { syriac: "dog", translit: "dog", meaning: "anjing", category: "Kata Benda" }
    ],
    examples: [
      { syriac: "The girl who is wearing a red shirt is my sister.", translit: "dhe gerl hu iz WE-ring a red shert iz mai SIS-ter", indonesian: "Gadis yang memakai baju merah itu adalah adik saya." },
      { syriac: "This is the book which I bought yesterday.", translit: "dhis iz dhe buk wich ai bot YES-ter-dei", indonesian: "Ini adalah buku yang saya beli kemarin." },
      { syriac: "The man whose car is red is my uncle.", translit: "dhe men huuz kar iz red iz mai UN-kel", indonesian: "Pria yang mobilnya berwarna merah itu adalah paman saya." },
      { syriac: "This is the house where I grew up.", translit: "dhis iz dhe haus wer ai gru ap", indonesian: "Ini adalah rumah tempat saya tumbuh besar." },
      { syriac: "I remember the day when we first met.", translit: "ai ri-MEM-ber dhe dei wen wi ferst met", indonesian: "Saya ingat hari ketika kita pertama kali bertemu." }
    ],
    quizzes: [
      {
        id: 4101,
        question: "Lengkapi kalimat ini: 'The girl ___ is wearing a red shirt is my sister.'",
        options: ["who", "which", "whose", "where"],
        correctAnswer: "who",
        explanation: "Girl adalah orang, jadi memakai who."
      },
      {
        id: 4102,
        question: "Lengkapi kalimat ini: 'This is the book ___ I bought yesterday.'",
        options: ["which", "who", "whose", "where"],
        correctAnswer: "which",
        explanation: "Book adalah benda, jadi memakai which."
      },
      {
        id: 4103,
        question: "Lengkapi kalimat ini: 'The man ___ car is red is my uncle.'",
        options: ["whose", "who", "which", "where"],
        correctAnswer: "whose",
        explanation: "Kalimat ini menunjukkan kepemilikan (mobil milik pria itu), jadi memakai whose."
      },
      {
        id: 4104,
        question: "Lengkapi kalimat ini: 'This is the house ___ I grew up.'",
        options: ["where", "when", "who", "whose"],
        correctAnswer: "where",
        explanation: "House adalah tempat, jadi memakai where."
      },
      {
        id: 4105,
        question: "Lengkapi kalimat ini: 'I remember the day ___ we first met.'",
        options: ["when", "where", "who", "whose"],
        correctAnswer: "when",
        explanation: "Day adalah waktu, jadi memakai when."
      }
    ]
  },
  {
    id: 42,
    title: "Phrasal Verbs",
    titleSyriac: "Phrasal Verbs",
    category: "Level B1",
    summary: "Phrasal verb adalah gabungan kata kerja dengan kata depan atau kata keterangan yang membentuk arti baru, misalnya get up (bangun tidur) dan give up (menyerah). Artinya tidak bisa ditebak dari kata-katanya saja, jadi harus dihafal sebagai satu kesatuan. Modul ini mengenalkan phrasal verb yang paling sering dipakai sehari-hari.",
    introduction: "'Please turn off the lights.' Turn saja berarti memutar, off berarti mati — tetapi turn off berarti mematikan. Itulah phrasal verb: kata kerja + kata kecil yang membentuk arti baru. Modul ini mengenalkan phrasal verb yang paling sering muncul dalam percakapan sehari-hari.",
    content: "Phrasal verb terdiri dari kata kerja + preposisi atau adverb, misalnya get up, look for, turn off, dan give up. Arti gabungannya sering berbeda dari arti tiap kata: give up bukan 'memberi ke atas' melainkan 'menyerah'. Beberapa phrasal verb bisa dipisah oleh objek: 'Turn off the light' sama benarnya dengan 'Turn it off.' Tetapi jika objeknya kata ganti (it, them), kata ganti harus diletakkan di tengah: 'Turn it off', bukan 'Turn off it.'",
    keyRules: [
      "Phrasal verb adalah kata kerja + preposisi/adverb dengan arti baru yang harus dihafal.",
      "Arti phrasal verb tidak bisa ditebak dari arti tiap kata, misalnya give up = menyerah.",
      "Beberapa phrasal verb bisa dipisah objek: 'Turn off the light' = 'Turn it off.'",
      "Jika objeknya kata ganti (it, them), letakkan di tengah: 'Turn it off' (bukan 'Turn off it').",
      "Perhatikan bentuk kata kerjanya: look for menjadi looking for, give up menjadi gave up."
    ],
    vocabulary: [
      { syriac: "get up", translit: "get ap", meaning: "bangun tidur", category: "Phrasal Verb" },
      { syriac: "turn off", translit: "tern of", meaning: "mematikan", category: "Phrasal Verb" },
      { syriac: "turn on", translit: "tern on", meaning: "menyalakan", category: "Phrasal Verb" },
      { syriac: "look for", translit: "luk for", meaning: "mencari", category: "Phrasal Verb" },
      { syriac: "give up", translit: "giv ap", meaning: "menyerah", category: "Phrasal Verb" },
      { syriac: "take off", translit: "teik of", meaning: "melepas (pakaian); lepas landas", category: "Phrasal Verb" },
      { syriac: "put on", translit: "put on", meaning: "memakai (pakaian)", category: "Phrasal Verb" },
      { syriac: "run out of", translit: "ran aut ov", meaning: "kehabisan", category: "Phrasal Verb" },
      { syriac: "look after", translit: "luk AF-ter", meaning: "menjaga; merawat", category: "Phrasal Verb" },
      { syriac: "wake up", translit: "weik ap", meaning: "bangun (dari tidur)", category: "Phrasal Verb" },
      { syriac: "come back", translit: "kam bek", meaning: "kembali", category: "Phrasal Verb" },
      { syriac: "pick up", translit: "pik ap", meaning: "mengambil; menjemput", category: "Phrasal Verb" }
    ],
    examples: [
      { syriac: "I get up at 5 a.m. every day.", translit: "ai get ap at faiv ei-em EV-ree dei", indonesian: "Saya bangun tidur pukul 5 pagi setiap hari." },
      { syriac: "Please turn off the lights before you sleep.", translit: "pleez tern of dhe laits bi-FOR yu sleep", indonesian: "Tolong matikan lampu sebelum kamu tidur." },
      { syriac: "She is looking for her keys.", translit: "shi iz LU-king for her keez", indonesian: "Dia sedang mencari kuncinya." },
      { syriac: "Don't give up! Keep trying.", translit: "dohnt giv ap! keep TRAI-ing", indonesian: "Jangan menyerah! Teruslah berusaha." },
      { syriac: "He took off his shoes before entering the house.", translit: "hi tuk of hiz shuuz bi-FOR EN-te-ring dhe haus", indonesian: "Dia melepas sepatunya sebelum masuk ke rumah." },
      { syriac: "We ran out of sugar, so we bought some.", translit: "wi ran aut ov SHU-ger, soh wi bot sam", indonesian: "Kami kehabisan gula, jadi kami membeli lagi." }
    ],
    quizzes: [
      {
        id: 4201,
        question: "Lengkapi kalimat ini: 'Please ___ the lights before you sleep.'",
        options: ["turn off", "turn on", "give up", "look for"],
        correctAnswer: "turn off",
        explanation: "Turn off berarti mematikan — cocok sebelum tidur."
      },
      {
        id: 4202,
        question: "Lengkapi kalimat ini: 'She is ___ her keys.'",
        options: ["looking for", "looking after", "giving up", "taking off"],
        correctAnswer: "looking for",
        explanation: "Look for berarti mencari; looking after berarti menjaga."
      },
      {
        id: 4203,
        question: "Lengkapi kalimat ini: \"Don't ___! Keep trying.\"",
        options: ["give up", "get up", "pick up", "come back"],
        correctAnswer: "give up",
        explanation: "Give up berarti menyerah; 'Keep trying' (terus berusaha) adalah lawan dari menyerah."
      },
      {
        id: 4204,
        question: "Lengkapi kalimat ini: 'We have ___ sugar. Let's buy some.'",
        options: ["run out of", "looked for", "put on", "taken off"],
        correctAnswer: "run out of",
        explanation: "Run out of berarti kehabisan — cocok dengan ajakan membeli lagi."
      },
      {
        id: 4205,
        question: "Lengkapi kalimat ini: 'He ___ his shoes before entering the house.'",
        options: ["took off", "turned off", "gave up", "looked after"],
        correctAnswer: "took off",
        explanation: "Take off berarti melepas (pakaian/sepatu); bentuk lampau-nya took off."
      }
    ]
  }
];
