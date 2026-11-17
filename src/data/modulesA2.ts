import { Module } from "../types";

export const modulesA2: Module[] = [
  {
    id: 23,
    title: "Past Simple",
    titleSyriac: "Past Simple",
    category: "Level A2",
    summary: "Mempelajari Past Simple untuk menceritakan kejadian yang sudah selesai di waktu lampau, lengkap dengan kata kerja beraturan dan tidak beraturan.",
    introduction: "Past Simple dipakai untuk menceritakan kejadian yang sudah selesai di masa lalu, misalnya kegiatan kemarin, minggu lalu, atau tahun lalu. Kata kerja bentuk kedua (Verb 2) adalah kunci dari tense ini.",
    content: "Kata kerja beraturan dibentuk dengan menambahkan -ed pada kata kerja bentuk pertama: play → played, watch → watched, like → liked, study → studied, stop → stopped.\nKata kerja tidak beraturan berubah bentuknya dan harus dihafal: go → went, buy → bought, see → saw, eat → ate, have → had, write → wrote, take → took.\nKalimat negatif memakai did not (didn't) + kata kerja bentuk pertama: I didn't go to school yesterday.\nKalimat tanya memakai Did + subjek + kata kerja bentuk pertama: Did you watch the film last night?",
    keyRules: [
      "Gunakan kata kerja bentuk kedua (Verb 2) untuk kalimat positif Past Simple.",
      "Kata kerja beraturan: tambah -ed (play → played); kata berakhiran -e tambah -d (like → liked); konsonan + y menjadi -ied (study → studied); vokal pendek + konsonan digandakan (stop → stopped).",
      "Kata kerja tidak beraturan berubah bentuknya dan harus dihafal: go → went, buy → bought, see → saw, eat → ate.",
      "Kalimat negatif: did not (didn't) + kata kerja bentuk pertama. Contoh: I didn't play football yesterday.",
      "Kalimat tanya: Did + subjek + kata kerja bentuk pertama. Contoh: Did she visit her grandmother?"
    ],
    vocabulary: [
      { syriac: "yesterday", translit: "YES-ter-day", meaning: "Kemarin", category: "Waktu" },
      { syriac: "last night", translit: "LAST NAIT", meaning: "Tadi malam", category: "Waktu" },
      { syriac: "ago", translit: "uh-GOH", meaning: "Yang lalu", category: "Waktu" },
      { syriac: "played", translit: "PLEYD", meaning: "Bermain (lampau dari play)", category: "Kata Kerja" },
      { syriac: "watched", translit: "WOCHT", meaning: "Menonton (lampau dari watch)", category: "Kata Kerja" },
      { syriac: "visited", translit: "VI-zit-ed", meaning: "Mengunjungi (lampau dari visit)", category: "Kata Kerja" },
      { syriac: "went", translit: "WENT", meaning: "Pergi (lampau dari go)", category: "Kata Kerja" },
      { syriac: "bought", translit: "BOT", meaning: "Membeli (lampau dari buy)", category: "Kata Kerja" },
      { syriac: "ate", translit: "ET", meaning: "Makan (lampau dari eat)", category: "Kata Kerja" },
      { syriac: "saw", translit: "SO", meaning: "Melihat (lampau dari see)", category: "Kata Kerja" },
      { syriac: "wrote", translit: "ROHT", meaning: "Menulis (lampau dari write)", category: "Kata Kerja" },
      { syriac: "studied", translit: "STUH-deed", meaning: "Belajar (lampau dari study)", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "I played football yesterday.", translit: "ai PLEYD FUT-bol YES-ter-day", indonesian: "Saya bermain sepak bola kemarin." },
      { syriac: "She visited her grandmother last week.", translit: "shi VI-zit-ed her GRAND-muh-ther LAST WIIK", indonesian: "Dia mengunjungi neneknya minggu lalu." },
      { syriac: "We watched a movie last night.", translit: "wi WOCHT uh MUU-vi LAST NAIT", indonesian: "Kami menonton film tadi malam." },
      { syriac: "They bought new books two days ago.", translit: "dhei BOT NYUU BUKS TUU DEIZ uh-GOH", indonesian: "Mereka membeli buku baru dua hari yang lalu." },
      { syriac: "He ate fried rice this morning.", translit: "hi ET FRAID RAIS DHIS MOR-ning", indonesian: "Dia makan nasi goreng pagi ini." }
    ],
    quizzes: [
      {
        id: 2301,
        question: "She ___ to school yesterday.",
        options: ["go", "goes", "went", "going"],
        correctAnswer: "went",
        explanation: "Untuk kejadian lampau (yesterday), kata kerja go berubah menjadi went."
      },
      {
        id: 2302,
        question: "I ___ a letter last night.",
        options: ["write", "wrote", "written", "writing"],
        correctAnswer: "wrote",
        explanation: "Bentuk lampau dari write adalah wrote. Kata written hanya dipakai bersama have/has."
      },
      {
        id: 2303,
        question: "They ___ TV yesterday evening.",
        options: ["watch", "watched", "watching", "watches"],
        correctAnswer: "watched",
        explanation: "Kata kerja beraturan watch mendapat akhiran -ed menjadi watched untuk waktu lampau."
      },
      {
        id: 2304,
        question: "We ___ football last Sunday because it rained.",
        options: ["didn't played", "didn't play", "don't played", "not played"],
        correctAnswer: "didn't play",
        explanation: "Setelah didn't, kata kerja kembali ke bentuk pertama: didn't play, bukan didn't played."
      },
      {
        id: 2305,
        question: "___ you buy a new book yesterday?",
        options: ["Did", "Do", "Does", "Is"],
        correctAnswer: "Did",
        explanation: "Kalimat tanya Past Simple memakai Did di awal kalimat."
      }
    ]
  },
  {
    id: 24,
    title: "Present Continuous",
    titleSyriac: "Present Continuous",
    category: "Level A2",
    summary: "Mempelajari Present Continuous untuk menceritakan kegiatan yang sedang berlangsung sekarang, dengan pola am/is/are + kata kerja -ing.",
    introduction: "Present Continuous dipakai untuk kegiatan yang sedang terjadi sekarang atau sedang berlangsung sementara waktu. Tanda waktunya antara lain now, at the moment, dan today.",
    content: "Pola Present Continuous adalah am/is/are + kata kerja bentuk -ing: I am studying, She is reading, They are playing.\nEjaan kata kerja -ing: make → making (huruf e di akhir hilang), run → running (konsonan akhir digandakan), study → studying (huruf y tetap).\nKalimat negatif: am/is/are + not + kata kerja -ing. Contoh: He is not sleeping.\nKalimat tanya: Am/Is/Are + subjek + kata kerja -ing. Contoh: Are you watching TV now?",
    keyRules: [
      "Pola: am/is/are + kata kerja -ing. I am, he/she/it is, we/you/they are.",
      "Kata kerja berakhiran -e: huruf e hilang sebelum -ing (make → making, write → writing).",
      "Kata kerja pendek vokal + konsonan: konsonan digandakan (run → running, swim → swimming).",
      "Pakai Present Continuous untuk kegiatan yang sedang terjadi sekarang: now, at the moment, Look!, Listen!",
      "Kalimat negatif: am/is/are + not + kata kerja -ing. Contoh: She is not reading now."
    ],
    vocabulary: [
      { syriac: "now", translit: "NAU", meaning: "Sekarang", category: "Waktu" },
      { syriac: "at the moment", translit: "at dhuh MOH-ment", meaning: "Saat ini", category: "Waktu" },
      { syriac: "listen", translit: "LIS-en", meaning: "Mendengarkan", category: "Kata Kerja" },
      { syriac: "look", translit: "LUK", meaning: "Melihat", category: "Kata Kerja" },
      { syriac: "studying", translit: "STUH-di-ing", meaning: "Sedang belajar", category: "Kata Kerja" },
      { syriac: "reading", translit: "RII-ding", meaning: "Sedang membaca", category: "Kata Kerja" },
      { syriac: "cooking", translit: "KUK-ing", meaning: "Sedang memasak", category: "Kata Kerja" },
      { syriac: "playing", translit: "PLEI-ing", meaning: "Sedang bermain", category: "Kata Kerja" },
      { syriac: "swimming", translit: "SWIM-ing", meaning: "Sedang berenang", category: "Kata Kerja" },
      { syriac: "raining", translit: "REI-ning", meaning: "Sedang hujan", category: "Kata Kerja" },
      { syriac: "sleeping", translit: "SLII-ping", meaning: "Sedang tidur", category: "Kata Kerja" },
      { syriac: "writing", translit: "RAI-ting", meaning: "Sedang menulis", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "I am studying English now.", translit: "ai am STUH-di-ing ING-glish NAU", indonesian: "Saya sedang belajar bahasa Inggris sekarang." },
      { syriac: "She is reading a book at the moment.", translit: "shi iz RII-ding uh BUK at dhuh MOH-ment", indonesian: "Dia sedang membaca buku saat ini." },
      { syriac: "They are playing football in the park.", translit: "dhei ar PLEI-ing FUT-bol in dhuh PARK", indonesian: "Mereka sedang bermain sepak bola di taman." },
      { syriac: "It is raining today.", translit: "it iz REI-ning tuh-DEI", indonesian: "Hari ini sedang hujan." },
      { syriac: "Look! The baby is sleeping.", translit: "LUK! dhuh BEI-bi iz SLII-ping", indonesian: "Lihat! Bayi itu sedang tidur." }
    ],
    quizzes: [
      {
        id: 2401,
        question: "Look! It ___ now.",
        options: ["rain", "rains", "is raining", "rained"],
        correctAnswer: "is raining",
        explanation: "Kegiatan yang sedang terjadi sekarang memakai Present Continuous: is raining."
      },
      {
        id: 2402,
        question: "She ___ a book at the moment.",
        options: ["read", "reads", "is reading", "reading"],
        correctAnswer: "is reading",
        explanation: "Subjek she memakai is, lalu kata kerja -ing: is reading."
      },
      {
        id: 2403,
        question: "They ___ football in the park now.",
        options: ["are playing", "is playing", "plays", "played"],
        correctAnswer: "are playing",
        explanation: "Subjek they memakai are, lalu kata kerja -ing: are playing."
      },
      {
        id: 2404,
        question: "I ___ my homework now.",
        options: ["am doing", "is doing", "do", "does"],
        correctAnswer: "am doing",
        explanation: "Subjek I memakai am, lalu kata kerja -ing: am doing."
      },
      {
        id: 2405,
        question: "___ you watching TV now?",
        options: ["Are", "Is", "Do", "Does"],
        correctAnswer: "Are",
        explanation: "Kalimat tanya Present Continuous untuk you memakai Are di awal kalimat."
      }
    ]
  },
  {
    id: 25,
    title: "Going To (Rencana)",
    titleSyriac: "Going To — Plans",
    category: "Level A2",
    summary: "Mempelajari going to untuk membicarakan rencana dan ramalan di masa depan, dengan pola am/is/are + going to + kata kerja bentuk pertama.",
    introduction: "Going to dipakai untuk rencana yang sudah diputuskan dan untuk ramalan berdasarkan bukti yang terlihat sekarang, misalnya awan gelap berarti sebentar lagi hujan.",
    content: "Pola going to adalah am/is/are + going to + kata kerja bentuk pertama: I am going to visit Bali. She is going to study tonight. They are going to buy a new bicycle.\nKalimat negatif: am/is/are + not + going to + kata kerja bentuk pertama. Contoh: We are not going to travel tomorrow.\nKalimat tanya: Am/Is/Are + subjek + going to + kata kerja bentuk pertama. Contoh: Are you going to watch the film?\nTanda waktu masa depan: tomorrow, tonight, next week, next month, this weekend.",
    keyRules: [
      "Pola: am/is/are + going to + kata kerja bentuk pertama (tanpa -s, -ed, atau -ing).",
      "Going to dipakai untuk rencana yang sudah diputuskan, misalnya: I am going to visit my uncle next week.",
      "Going to juga dipakai untuk ramalan dari bukti yang terlihat: Look at the clouds! It is going to rain.",
      "Kalimat negatif: am/is/are + not + going to. Contoh: She is not going to come today.",
      "Kalimat tanya: Am/Is/Are + subjek + going to. Contoh: Is he going to buy a new bag?"
    ],
    vocabulary: [
      { syriac: "tomorrow", translit: "tuh-MOR-oh", meaning: "Besok", category: "Waktu" },
      { syriac: "next week", translit: "NEKST WIIK", meaning: "Minggu depan", category: "Waktu" },
      { syriac: "tonight", translit: "tuh-NAIT", meaning: "Malam ini", category: "Waktu" },
      { syriac: "weekend", translit: "WIIK-end", meaning: "Akhir pekan", category: "Waktu" },
      { syriac: "plan", translit: "PLAN", meaning: "Rencana", category: "Kata Benda" },
      { syriac: "visit", translit: "VI-zit", meaning: "Mengunjungi", category: "Kata Kerja" },
      { syriac: "travel", translit: "TRA-vel", meaning: "Bepergian", category: "Kata Kerja" },
      { syriac: "holiday", translit: "HOL-i-day", meaning: "Liburan", category: "Kata Benda" },
      { syriac: "buy", translit: "BAI", meaning: "Membeli", category: "Kata Kerja" },
      { syriac: "study", translit: "STUH-di", meaning: "Belajar", category: "Kata Kerja" },
      { syriac: "watch", translit: "WOCH", meaning: "Menonton", category: "Kata Kerja" },
      { syriac: "meet", translit: "MIIT", meaning: "Bertemu", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "I am going to visit Bali next month.", translit: "ai am GOH-ing tuh VI-zit BA-li NEKST MUNTH", indonesian: "Saya akan mengunjungi Bali bulan depan." },
      { syriac: "She is going to study English tonight.", translit: "shi iz GOH-ing tuh STUH-di ING-glish tuh-NAIT", indonesian: "Dia akan belajar bahasa Inggris malam ini." },
      { syriac: "We are going to watch a film this weekend.", translit: "wi ar GOH-ing tuh WOCH uh FILM dhis WIIK-end", indonesian: "Kami akan menonton film akhir pekan ini." },
      { syriac: "They are going to buy a new bicycle tomorrow.", translit: "dhei ar GOH-ing tuh BAI uh NYUU BAI-si-kel tuh-MOR-oh", indonesian: "Mereka akan membeli sepeda baru besok." },
      { syriac: "Look at the dark clouds! It is going to rain.", translit: "LUK at dhuh DARK KLAUDZ! it iz GOH-ing tuh REIN", indonesian: "Lihat awan gelap itu! Sebentar lagi akan hujan." }
    ],
    quizzes: [
      {
        id: 2501,
        question: "I ___ visit my grandmother tomorrow.",
        options: ["am going to", "is going to", "are going to", "going to"],
        correctAnswer: "am going to",
        explanation: "Subjek I memakai am: I am going to visit."
      },
      {
        id: 2502,
        question: "She ___ study hard tonight.",
        options: ["am going to", "is going to", "are going to", "going to"],
        correctAnswer: "is going to",
        explanation: "Subjek she memakai is: She is going to study."
      },
      {
        id: 2503,
        question: "We ___ travel to Yogyakarta next holiday.",
        options: ["is going to", "are going to", "am going to", "going to"],
        correctAnswer: "are going to",
        explanation: "Subjek we memakai are: We are going to travel."
      },
      {
        id: 2504,
        question: "They ___ play football this afternoon because it is raining.",
        options: ["are not going to", "is not going to", "am not going to", "not going to"],
        correctAnswer: "are not going to",
        explanation: "Bentuk negatif untuk they adalah are not going to."
      },
      {
        id: 2505,
        question: "___ he going to buy a new bag tomorrow?",
        options: ["Is", "Are", "Am", "Do"],
        correctAnswer: "Is",
        explanation: "Kalimat tanya going to untuk he memakai Is di awal kalimat."
      }
    ]
  },
  {
    id: 26,
    title: "Perbandingan (Comparatives & Superlatives)",
    titleSyriac: "Comparatives & Superlatives",
    category: "Level A2",
    summary: "Mempelajari cara membandingkan dua hal (comparative) dan menyatakan yang paling (superlative), termasuk bentuk tidak beraturan seperti good → better → best.",
    introduction: "Comparative membandingkan dua hal, misalnya Rudi lebih tinggi daripada Budi. Superlative menyatakan yang paling di antara tiga hal atau lebih, misalnya gunung tertinggi di dunia.",
    content: "Kata sifat pendek (satu suku kata): tambah -er untuk comparative dan -est untuk superlative. Contoh: tall → taller → tallest; big → bigger → biggest; happy → happier → happiest.\nKata sifat panjang (dua suku kata atau lebih): pakai more untuk comparative dan the most untuk superlative. Contoh: beautiful → more beautiful → the most beautiful.\nBentuk tidak beraturan harus dihafal: good → better → best; bad → worse → worst; far → farther → farthest.\nComparative selalu diikuti than. Superlative selalu diawali the: the tallest, the most beautiful.",
    keyRules: [
      "Kata sifat pendek: tambah -er dan -est (tall → taller → tallest); comparative memakai than, superlative memakai the.",
      "Kata sifat berakhiran konsonan + y: y berubah menjadi i (happy → happier → happiest).",
      "Kata sifat pendek vokal + konsonan: konsonan digandakan (big → bigger → biggest).",
      "Kata sifat panjang: pakai more dan the most (interesting → more interesting → the most interesting).",
      "Bentuk tidak beraturan: good → better → best; bad → worse → worst."
    ],
    vocabulary: [
      { syriac: "tall", translit: "TOL", meaning: "Tinggi", category: "Kata Sifat" },
      { syriac: "short", translit: "SHORT", meaning: "Pendek / Rendah", category: "Kata Sifat" },
      { syriac: "big", translit: "BIG", meaning: "Besar", category: "Kata Sifat" },
      { syriac: "small", translit: "SMOL", meaning: "Kecil", category: "Kata Sifat" },
      { syriac: "happy", translit: "HA-pi", meaning: "Senang / Bahagia", category: "Kata Sifat" },
      { syriac: "beautiful", translit: "BYUU-ti-ful", meaning: "Indah / Cantik", category: "Kata Sifat" },
      { syriac: "interesting", translit: "IN-ter-es-ting", meaning: "Menarik", category: "Kata Sifat" },
      { syriac: "good", translit: "GUD", meaning: "Baik / Bagus", category: "Kata Sifat" },
      { syriac: "bad", translit: "BAD", meaning: "Buruk / Jelek", category: "Kata Sifat" },
      { syriac: "far", translit: "FAR", meaning: "Jauh", category: "Kata Sifat" },
      { syriac: "cheap", translit: "CHIIP", meaning: "Murah", category: "Kata Sifat" },
      { syriac: "expensive", translit: "ik-SPEN-siv", meaning: "Mahal", category: "Kata Sifat" }
    ],
    examples: [
      { syriac: "Rudi is taller than Budi.", translit: "RU-di iz TOL-er dhan BU-di", indonesian: "Rudi lebih tinggi daripada Budi." },
      { syriac: "This book is more interesting than that book.", translit: "dhis BUK iz MOR IN-ter-es-ting dhan dhat BUK", indonesian: "Buku ini lebih menarik daripada buku itu." },
      { syriac: "Mount Everest is the highest mountain in the world.", translit: "MAUNT E-ve-rest iz dhuh HAI-est MAUN-ten in dhuh WURLD", indonesian: "Gunung Everest adalah gunung tertinggi di dunia." },
      { syriac: "She is the best student in our class.", translit: "shi iz dhuh BEST STUU-dent in AU-er KLAS", indonesian: "Dia adalah siswa terbaik di kelas kami." },
      { syriac: "Today is hotter than yesterday.", translit: "tuh-DEI iz HOT-er dhan YES-ter-day", indonesian: "Hari ini lebih panas daripada kemarin." }
    ],
    quizzes: [
      {
        id: 2601,
        question: "Rudi is ___ than Budi.",
        options: ["tall", "taller", "tallest", "more tall"],
        correctAnswer: "taller",
        explanation: "Membandingkan dua orang memakai comparative: tall menjadi taller, diikuti than."
      },
      {
        id: 2602,
        question: "This book is ___ interesting than that one.",
        options: ["more", "most", "much", "many"],
        correctAnswer: "more",
        explanation: "Kata sifat panjang interesting memakai more untuk comparative: more interesting."
      },
      {
        id: 2603,
        question: "Mount Everest is the ___ mountain in the world.",
        options: ["high", "higher", "highest", "more high"],
        correctAnswer: "highest",
        explanation: "Menyatakan yang paling di antara semua memakai superlative dengan the: the highest."
      },
      {
        id: 2604,
        question: "My English is ___ than my Maths.",
        options: ["good", "better", "best", "more good"],
        correctAnswer: "better",
        explanation: "Bentuk comparative dari good adalah better, bukan more good."
      },
      {
        id: 2605,
        question: "Yesterday was ___ than today.",
        options: ["bad", "worse", "worst", "more bad"],
        correctAnswer: "worse",
        explanation: "Bentuk comparative dari bad adalah worse, bukan more bad."
      }
    ]
  },
  {
    id: 27,
    title: "Must & Mustn't",
    titleSyriac: "Must & Mustn't",
    category: "Level A2",
    summary: "Mempelajari must untuk kewajiban dan mustn't untuk larangan, dengan pola must/mustn't + kata kerja bentuk pertama.",
    introduction: "Must berarti harus dan dipakai untuk kewajiban atau aturan. Mustn't berarti tidak boleh dan dipakai untuk larangan. Setelah must dan mustn't, kata kerja selalu bentuk pertama tanpa -s atau -ing.",
    content: "Must + kata kerja bentuk pertama menyatakan kewajiban: You must do your homework. Students must wear a uniform.\nMustn't + kata kerja bentuk pertama menyatakan larangan: You mustn't smoke here. We mustn't be late for class.\nMust dipakai untuk aturan sekolah, aturan lalu lintas, dan nasihat yang kuat. Mustn't dipakai untuk hal yang dilarang karena berbahaya atau melanggar aturan.",
    keyRules: [
      "Pola: must + kata kerja bentuk pertama. Contoh: You must study hard.",
      "Pola: mustn't + kata kerja bentuk pertama. Contoh: You mustn't run in the classroom.",
      "Must berarti harus (kewajiban). Mustn't berarti tidak boleh (larangan).",
      "Setelah must dan mustn't, kata kerja tidak boleh ditambah -s, -ed, atau -ing.",
      "Must dan mustn't sama untuk semua subjek: I, you, he, she, we, they."
    ],
    vocabulary: [
      { syriac: "must", translit: "MUST", meaning: "Harus", category: "Kata Kerja Bantu" },
      { syriac: "mustn't", translit: "MUS-ent", meaning: "Tidak boleh", category: "Kata Kerja Bantu" },
      { syriac: "homework", translit: "HOHM-wurk", meaning: "Pekerjaan rumah (PR)", category: "Sekolah" },
      { syriac: "uniform", translit: "YUU-ni-form", meaning: "Seragam", category: "Sekolah" },
      { syriac: "late", translit: "LEIT", meaning: "Terlambat", category: "Kata Sifat" },
      { syriac: "quiet", translit: "KWAI-et", meaning: "Tenang / Diam", category: "Kata Sifat" },
      { syriac: "smoke", translit: "SMOHK", meaning: "Merokok", category: "Kata Kerja" },
      { syriac: "obey", translit: "oh-BEI", meaning: "Mematuhi", category: "Kata Kerja" },
      { syriac: "rule", translit: "RUUL", meaning: "Aturan", category: "Kata Benda" },
      { syriac: "arrive", translit: "uh-RAIV", meaning: "Tiba / Sampai", category: "Kata Kerja" },
      { syriac: "cross", translit: "KROS", meaning: "Menyeberang", category: "Kata Kerja" },
      { syriac: "careful", translit: "KEIR-ful", meaning: "Hati-hati", category: "Kata Sifat" }
    ],
    examples: [
      { syriac: "You must do your homework every day.", translit: "yuu MUST DUU yor HOHM-wurk EV-ri DEI", indonesian: "Kamu harus mengerjakan PR setiap hari." },
      { syriac: "Students must wear a uniform at school.", translit: "STUU-dents MUST WEIR uh YUU-ni-form at SKUUL", indonesian: "Siswa harus memakai seragam di sekolah." },
      { syriac: "You mustn't smoke in the hospital.", translit: "yuu MUS-ent SMOHK in dhuh HOS-pi-tel", indonesian: "Kamu tidak boleh merokok di rumah sakit." },
      { syriac: "We must arrive on time.", translit: "wi MUST uh-RAIV on TAIM", indonesian: "Kita harus tiba tepat waktu." },
      { syriac: "You mustn't cross the road when the light is red.", translit: "yuu MUS-ent KROS dhuh ROHD wen dhuh LAIT iz RED", indonesian: "Kamu tidak boleh menyeberang jalan saat lampu merah." }
    ],
    quizzes: [
      {
        id: 2701,
        question: "You ___ do your homework every day.",
        options: ["must", "mustn't", "must to", "musts"],
        correctAnswer: "must",
        explanation: "Mengerjakan PR adalah kewajiban, jadi memakai must."
      },
      {
        id: 2702,
        question: "Students ___ wear a uniform at school.",
        options: ["must", "mustn't", "musts", "musting"],
        correctAnswer: "must",
        explanation: "Memakai seragam adalah aturan sekolah, jadi memakai must."
      },
      {
        id: 2703,
        question: "You ___ smoke in the hospital. It is dangerous.",
        options: ["must", "mustn't", "must to", "musts"],
        correctAnswer: "mustn't",
        explanation: "Merokok di rumah sakit adalah larangan, jadi memakai mustn't."
      },
      {
        id: 2704,
        question: "We ___ be late for class.",
        options: ["must", "mustn't", "musting", "musts"],
        correctAnswer: "mustn't",
        explanation: "Terlambat masuk kelas adalah hal yang dilarang, jadi memakai mustn't."
      },
      {
        id: 2705,
        question: "You ___ cross the road when the light is red.",
        options: ["mustn't", "must", "must to", "musting"],
        correctAnswer: "mustn't",
        explanation: "Menyeberang saat lampu merah berbahaya dan dilarang, jadi memakai mustn't."
      }
    ]
  },
  {
    id: 28,
    title: "There Is & There Are",
    titleSyriac: "There Is & There Are",
    category: "Level A2",
    summary: "Mempelajari there is dan there are untuk menyatakan ada sesuatu di suatu tempat, lengkap dengan bentuk negatif dan kalimat tanya.",
    introduction: "There is dan there are dipakai untuk menyatakan keberadaan sesuatu. There is untuk satu benda, there are untuk dua benda atau lebih.",
    content: "There is + kata benda tunggal: There is a cat under the table. There is a book on the desk.\nThere are + kata benda jamak: There are five students in the classroom. There are many books in the library.\nBentuk negatif: There isn't a pen here (tunggal). There aren't any chairs here (jamak).\nKalimat tanya: Is there a bank near here? Are there any students in the room? Jawaban singkat: Yes, there is. / No, there aren't.",
    keyRules: [
      "There is dipakai untuk satu benda (tunggal). Contoh: There is a cat in the garden.",
      "There are dipakai untuk dua benda atau lebih (jamak). Contoh: There are two cats in the garden.",
      "Bentuk negatif: there isn't (tunggal) dan there aren't (jamak).",
      "Kalimat tanya: Is there...? untuk tunggal dan Are there...? untuk jamak.",
      "Dalam kalimat tanya dan negatif jamak, pakai any: Are there any pens? There aren't any pens."
    ],
    vocabulary: [
      { syriac: "table", translit: "TEI-bel", meaning: "Meja", category: "Benda" },
      { syriac: "chair", translit: "CHEIR", meaning: "Kursi", category: "Benda" },
      { syriac: "garden", translit: "GAR-den", meaning: "Kebun / Taman", category: "Tempat" },
      { syriac: "library", translit: "LAI-brer-i", meaning: "Perpustakaan", category: "Tempat" },
      { syriac: "book", translit: "BUK", meaning: "Buku", category: "Benda" },
      { syriac: "pen", translit: "PEN", meaning: "Pulpen", category: "Benda" },
      { syriac: "student", translit: "STUU-dent", meaning: "Siswa", category: "Orang" },
      { syriac: "teacher", translit: "TII-cher", meaning: "Guru", category: "Orang" },
      { syriac: "window", translit: "WIN-doh", meaning: "Jendela", category: "Benda" },
      { syriac: "door", translit: "DOR", meaning: "Pintu", category: "Benda" },
      { syriac: "car", translit: "KAR", meaning: "Mobil", category: "Benda" },
      { syriac: "tree", translit: "TRII", meaning: "Pohon", category: "Benda" }
    ],
    examples: [
      { syriac: "There is a cat under the table.", translit: "dheir iz uh KAT UN-der dhuh TEI-bel", indonesian: "Ada seekor kucing di bawah meja." },
      { syriac: "There are five students in the classroom.", translit: "dheir ar FAIV STUU-dents in dhuh KLAS-ruum", indonesian: "Ada lima siswa di dalam kelas." },
      { syriac: "There is a big tree in front of my house.", translit: "dheir iz uh BIG TRII in FRONT ov mai HAUS", indonesian: "Ada pohon besar di depan rumahku." },
      { syriac: "There are many books in the library.", translit: "dheir ar ME-ni BUKS in dhuh LAI-brer-i", indonesian: "Ada banyak buku di perpustakaan." },
      { syriac: "Is there a bank near here? Yes, there is.", translit: "iz dheir uh BANGK NIIR HIIR? YES, dheir iz", indonesian: "Apakah ada bank di dekat sini? Ya, ada." }
    ],
    quizzes: [
      {
        id: 2801,
        question: "___ a cat under the table.",
        options: ["There is", "There are", "There has", "There have"],
        correctAnswer: "There is",
        explanation: "Satu ekor kucing (tunggal) memakai There is."
      },
      {
        id: 2802,
        question: "___ five students in the classroom.",
        options: ["There is", "There are", "There has", "There have"],
        correctAnswer: "There are",
        explanation: "Lima siswa (jamak) memakai There are."
      },
      {
        id: 2803,
        question: "___ there a bank near here?",
        options: ["Is", "Are", "Has", "Does"],
        correctAnswer: "Is",
        explanation: "Kalimat tanya untuk satu bank (tunggal) memakai Is there."
      },
      {
        id: 2804,
        question: "___ there any pens on the desk?",
        options: ["Is", "Are", "Has", "Do"],
        correctAnswer: "Are",
        explanation: "Kalimat tanya untuk pens (jamak) memakai Are there."
      },
      {
        id: 2805,
        question: "There ___ any milk in the fridge.",
        options: ["isn't", "aren't", "is", "are"],
        correctAnswer: "isn't",
        explanation: "Milk adalah kata benda tak terhitung (uncountable), jadi dianggap tunggal dan memakai isn't."
      }
    ]
  },
  {
    id: 29,
    title: "Countable, Uncountable, Some & Any",
    titleSyriac: "Countable & Uncountable — Some & Any",
    category: "Level A2",
    summary: "Mempelajari perbedaan kata benda yang bisa dihitung (countable) dan yang tidak bisa dihitung (uncountable), serta pemakaian some dan any.",
    introduction: "Kata benda countable bisa dihitung dan punya bentuk jamak, misalnya book → books. Kata benda uncountable tidak bisa dihitung dan tidak punya bentuk jamak, misalnya water, rice, dan money.",
    content: "Countable nouns: apple, book, chair, egg. Bentuk jamak memakai -s/-es: apples, books, chairs.\nUncountable nouns: water, rice, milk, bread, sugar, money, cheese. Kata-kata ini tidak memakai -s dan tidak memakai a/an.\nSome dipakai dalam kalimat positif: I have some apples. She bought some rice.\nAny dipakai dalam kalimat negatif dan kalimat tanya: I don't have any money. Do you have any oranges? There isn't any sugar.",
    keyRules: [
      "Countable bisa dihitung dan punya bentuk jamak: one book, two books.",
      "Uncountable tidak bisa dihitung dan tidak punya bentuk jamak: water, rice, milk, money, bread.",
      "Some dipakai dalam kalimat positif: I have some pens.",
      "Any dipakai dalam kalimat negatif dan kalimat tanya: I don't have any pens. Do you have any pens?",
      "A/an hanya dipakai untuk kata benda countable tunggal: a book, an apple."
    ],
    vocabulary: [
      { syriac: "water", translit: "WO-ter", meaning: "Air", category: "Uncountable" },
      { syriac: "rice", translit: "RAIS", meaning: "Beras / Nasi", category: "Uncountable" },
      { syriac: "milk", translit: "MILK", meaning: "Susu", category: "Uncountable" },
      { syriac: "bread", translit: "BRED", meaning: "Roti", category: "Uncountable" },
      { syriac: "sugar", translit: "SHU-ger", meaning: "Gula", category: "Uncountable" },
      { syriac: "money", translit: "MUH-ni", meaning: "Uang", category: "Uncountable" },
      { syriac: "cheese", translit: "CHIIZ", meaning: "Keju", category: "Uncountable" },
      { syriac: "apple", translit: "A-pel", meaning: "Apel", category: "Countable" },
      { syriac: "banana", translit: "buh-NA-nuh", meaning: "Pisang", category: "Countable" },
      { syriac: "book", translit: "BUK", meaning: "Buku", category: "Countable" },
      { syriac: "chair", translit: "CHEIR", meaning: "Kursi", category: "Countable" },
      { syriac: "egg", translit: "EG", meaning: "Telur", category: "Countable" }
    ],
    examples: [
      { syriac: "I have some apples in my bag.", translit: "ai HAV SUM A-pelz in mai BAG", indonesian: "Saya punya beberapa apel di tasku." },
      { syriac: "Do you have any oranges?", translit: "duu yuu HAV E-ni O-rin-jez?", indonesian: "Apakah kamu punya jeruk?" },
      { syriac: "There isn't any water in the bottle.", translit: "dheir IZ-ent E-ni WO-ter in dhuh BOT-el", indonesian: "Tidak ada air di dalam botol." },
      { syriac: "She bought some rice at the market.", translit: "shi BOT SUM RAIS at dhuh MAR-ket", indonesian: "Dia membeli beras di pasar." },
      { syriac: "I need a book and some pens.", translit: "ai NIID uh BUK and SUM PENZ", indonesian: "Saya butuh sebuah buku dan beberapa pulpen." }
    ],
    quizzes: [
      {
        id: 2901,
        question: "I have ___ apples in my bag.",
        options: ["some", "any", "a", "an"],
        correctAnswer: "some",
        explanation: "Kalimat positif memakai some, bukan any."
      },
      {
        id: 2902,
        question: "Do you have ___ money?",
        options: ["some", "any", "a", "an"],
        correctAnswer: "any",
        explanation: "Kalimat tanya memakai any, bukan some."
      },
      {
        id: 2903,
        question: "There isn't ___ sugar in the kitchen.",
        options: ["some", "any", "a", "an"],
        correctAnswer: "any",
        explanation: "Kalimat negatif memakai any, bukan some."
      },
      {
        id: 2904,
        question: "Which word is uncountable?",
        options: ["book", "water", "chair", "apple"],
        correctAnswer: "water",
        explanation: "Water tidak bisa dihitung dan tidak punya bentuk jamak, jadi uncountable. Book, chair, dan apple bisa dihitung."
      },
      {
        id: 2905,
        question: "She bought ___ rice at the market.",
        options: ["some", "any", "a", "an"],
        correctAnswer: "some",
        explanation: "Kalimat positif memakai some. Rice adalah uncountable, jadi tidak memakai a."
      }
    ]
  },
  {
    id: 30,
    title: "Arah & Petunjuk Jalan",
    titleSyriac: "Directions",
    category: "Level A2",
    summary: "Mempelajari cara bertanya dan memberi petunjuk jalan dalam bahasa Inggris, lengkap dengan kosakata arah dan posisi.",
    introduction: "Saat tersesat atau mencari suatu tempat, kita perlu bertanya dan memahami petunjuk jalan. Pelajaran ini berisi ungkapan penting seperti turn left, go straight, dan next to.",
    content: "Bertanya arah: Excuse me, where is the library? How do I get to the station?\nMemberi petunjuk: Go straight ahead. Turn left at the traffic light. Turn right at the corner.\nPosisi tempat: next to (di sebelah), between (di antara), opposite (di seberang), in front of (di depan), behind (di belakang), near (dekat), far from (jauh dari).",
    keyRules: [
      "Bertanya arah: Excuse me, where is...? atau How do I get to...?",
      "Turn left = belok kiri, turn right = belok kanan, go straight = jalan lurus.",
      "Next to = di sebelah, between = di antara dua tempat, opposite = di seberang.",
      "In front of = di depan, behind = di belakang, near = dekat.",
      "On the corner = di sudut jalan, at the traffic light = di lampu lalu lintas."
    ],
    vocabulary: [
      { syriac: "left", translit: "LEFT", meaning: "Kiri", category: "Arah" },
      { syriac: "right", translit: "RAIT", meaning: "Kanan", category: "Arah" },
      { syriac: "straight", translit: "STREIT", meaning: "Lurus", category: "Arah" },
      { syriac: "corner", translit: "KOR-ner", meaning: "Sudut / Tikungan", category: "Tempat" },
      { syriac: "next to", translit: "NEKST TUU", meaning: "Di sebelah", category: "Posisi" },
      { syriac: "between", translit: "bi-TWIIN", meaning: "Di antara", category: "Posisi" },
      { syriac: "opposite", translit: "O-puh-zit", meaning: "Di seberang", category: "Posisi" },
      { syriac: "in front of", translit: "in FRONT ov", meaning: "Di depan", category: "Posisi" },
      { syriac: "behind", translit: "bi-HAIND", meaning: "Di belakang", category: "Posisi" },
      { syriac: "near", translit: "NIIR", meaning: "Dekat", category: "Posisi" },
      { syriac: "far", translit: "FAR", meaning: "Jauh", category: "Posisi" },
      { syriac: "cross", translit: "KROS", meaning: "Menyeberang", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "Turn left at the traffic light.", translit: "TURN LEFT at dhuh TRA-fik LAIT", indonesian: "Belok kiri di lampu lalu lintas." },
      { syriac: "Go straight ahead.", translit: "GOH STREIT uh-HED", indonesian: "Jalan lurus ke depan." },
      { syriac: "The bank is next to the post office.", translit: "dhuh BANGK iz NEKST TUU dhuh POHST O-fis", indonesian: "Bank ada di sebelah kantor pos." },
      { syriac: "The school is between the hospital and the park.", translit: "dhuh SKUUL iz bi-TWIIN dhuh HOS-pi-tel and dhuh PARK", indonesian: "Sekolah ada di antara rumah sakit dan taman." },
      { syriac: "Excuse me, how do I get to the station?", translit: "ik-SKYUUZ MI, HAU duu ai GET tuh dhuh STEI-shen?", indonesian: "Permisi, bagaimana cara saya sampai ke stasiun?" }
    ],
    quizzes: [
      {
        id: 3001,
        question: "Turn ___ at the traffic light.",
        options: ["left", "lift", "leave", "last"],
        correctAnswer: "left",
        explanation: "Turn left berarti belok kiri."
      },
      {
        id: 3002,
        question: "The bank is ___ the post office.",
        options: ["next to", "next", "near to", "beside to"],
        correctAnswer: "next to",
        explanation: "Next to berarti di sebelah. Bentuk next saja, near to, dan beside to tidak tepat di sini."
      },
      {
        id: 3003,
        question: "Go ___ ahead and you will see the school.",
        options: ["straight", "strait", "street", "strong"],
        correctAnswer: "straight",
        explanation: "Go straight ahead berarti jalan lurus ke depan."
      },
      {
        id: 3004,
        question: "The library is ___ the hospital and the park.",
        options: ["between", "behind", "beside", "opposite"],
        correctAnswer: "between",
        explanation: "Between dipakai untuk posisi di antara dua tempat."
      },
      {
        id: 3005,
        question: "Excuse me, ___ is the nearest hospital?",
        options: ["what", "when", "where", "why"],
        correctAnswer: "where",
        explanation: "Untuk menanyakan tempat memakai where."
      }
    ]
  },
  {
    id: 31,
    title: "Cuaca",
    titleSyriac: "Weather",
    category: "Level A2",
    summary: "Mempelajari kosakata cuaca dan musim, serta cara bertanya dan menjawab tentang cuaca dalam bahasa Inggris.",
    introduction: "Cuaca adalah topik percakapan sehari-hari yang sangat umum. Pelajaran ini berisi kata-kata seperti sunny, rainy, cloudy, dan windy, serta cara bertanya What's the weather like?",
    content: "Bertanya cuaca: What's the weather like today? Jawabannya: It's sunny. It's rainy. It's cloudy. It's windy.\nKata sifat cuaca: sunny (cerah), rainy (hujan), cloudy (berawan), windy (berangin), snowy (bersalju), hot (panas), cold (dingin), warm (hangat), cool (sejuk).\nEmpat musim: spring (musim semi), summer (musim panas), autumn atau fall (musim gugur), winter (musim dingin).",
    keyRules: [
      "Bertanya cuaca: What's the weather like? Jawab: It's + kata sifat cuaca.",
      "Untuk hujan yang sedang turun: It is raining. Untuk salju: It is snowing.",
      "Sunny = cerah, rainy = hujan, cloudy = berawan, windy = berangin, snowy = bersalju.",
      "Hot = panas, cold = dingin, warm = hangat, cool = sejuk.",
      "Empat musim: spring, summer, autumn (fall), winter."
    ],
    vocabulary: [
      { syriac: "sunny", translit: "SUH-ni", meaning: "Cerah", category: "Cuaca" },
      { syriac: "rainy", translit: "REI-ni", meaning: "Hujan", category: "Cuaca" },
      { syriac: "cloudy", translit: "KLAU-di", meaning: "Berawan", category: "Cuaca" },
      { syriac: "windy", translit: "WIN-di", meaning: "Berangin", category: "Cuaca" },
      { syriac: "snowy", translit: "SNOH-wi", meaning: "Bersalju", category: "Cuaca" },
      { syriac: "hot", translit: "HOT", meaning: "Panas", category: "Cuaca" },
      { syriac: "cold", translit: "KOHLD", meaning: "Dingin", category: "Cuaca" },
      { syriac: "warm", translit: "WORM", meaning: "Hangat", category: "Cuaca" },
      { syriac: "cool", translit: "KUUL", meaning: "Sejuk", category: "Cuaca" },
      { syriac: "storm", translit: "STORM", meaning: "Badai", category: "Cuaca" },
      { syriac: "season", translit: "SII-zen", meaning: "Musim", category: "Cuaca" },
      { syriac: "temperature", translit: "TEM-puh-ruh-cher", meaning: "Suhu", category: "Cuaca" }
    ],
    examples: [
      { syriac: "It is sunny today.", translit: "it iz SUH-ni tuh-DEI", indonesian: "Hari ini cerah." },
      { syriac: "It is raining now. Take an umbrella.", translit: "it iz REI-ning NAU. TEIK an um-BREL-uh", indonesian: "Sekarang sedang hujan. Bawalah payung." },
      { syriac: "Winter in Europe is very cold.", translit: "WIN-ter in YU-rop iz VE-ri KOHLD", indonesian: "Musim dingin di Eropa sangat dingin." },
      { syriac: "What's the weather like in Jakarta? It's hot and humid.", translit: "WOTS dhuh WE-dher LAIK in juh-KAR-tuh? its HOT and HYUU-mid", indonesian: "Bagaimana cuaca di Jakarta? Panas dan lembap." },
      { syriac: "It was windy yesterday.", translit: "it woz WIN-di YES-ter-day", indonesian: "Kemarin berangin." }
    ],
    quizzes: [
      {
        id: 3101,
        question: "It is ___ today. Take an umbrella.",
        options: ["sunny", "rainy", "windy", "cloudy"],
        correctAnswer: "rainy",
        explanation: "Payung dipakai saat hujan, jadi cuacanya rainy."
      },
      {
        id: 3102,
        question: "What's the weather ___ today?",
        options: ["like", "look", "is", "does"],
        correctAnswer: "like",
        explanation: "Ungkapan bertanya cuaca yang benar adalah What's the weather like?"
      },
      {
        id: 3103,
        question: "In winter, the weather is very ___.",
        options: ["hot", "cold", "warm", "sunny"],
        correctAnswer: "cold",
        explanation: "Musim dingin (winter) identik dengan cuaca yang sangat dingin."
      },
      {
        id: 3104,
        question: "It is very ___ today. Let's go swimming!",
        options: ["cold", "hot", "snowy", "rainy"],
        correctAnswer: "hot",
        explanation: "Cuaca panas cocok untuk berenang, jadi jawabannya hot."
      },
      {
        id: 3105,
        question: "The opposite of 'hot' is ___.",
        options: ["warm", "cold", "cool", "sunny"],
        correctAnswer: "cold",
        explanation: "Lawan kata hot (panas) adalah cold (dingin)."
      }
    ]
  },
  {
    id: 32,
    title: "Kesehatan",
    titleSyriac: "Health",
    category: "Level A2",
    summary: "Mempelajari kosakata kesehatan dan penyakit ringan, serta cara mengatakan sakit dan memberi saran dengan should.",
    introduction: "Saat sakit, kita perlu menjelaskan apa yang dirasakan dan memahami saran dokter. Pelajaran ini berisi kata-kata seperti headache, fever, dan medicine, serta ungkapan What's the matter?",
    content: "Menyatakan sakit: I have a headache (sakit kepala). I have a stomachache (sakit perut). I have a toothache (sakit gigi). I have a fever (demam). I have a cold (pilek). I have a cough (batuk).\nBertanya keadaan: What's the matter? Artinya: Ada apa? / Apa yang terjadi?\nMemberi saran dengan should: You should rest. You should see a doctor. You should drink a lot of water.",
    keyRules: [
      "I have a + penyakit: I have a headache, I have a fever, I have a cold.",
      "What's the matter? artinya Ada apa? Dipakai untuk menanyakan keadaan orang yang terlihat sakit.",
      "Should + kata kerja bentuk pertama dipakai untuk memberi saran: You should rest.",
      "Sakit gigi sebaiknya ke dokter gigi (dentist), sakit lain ke dokter (doctor).",
      "Take this medicine artinya minumlah obat ini. Rest at home artinya beristirahat di rumah."
    ],
    vocabulary: [
      { syriac: "headache", translit: "HED-eik", meaning: "Sakit kepala", category: "Penyakit" },
      { syriac: "stomachache", translit: "STUH-muhk-eik", meaning: "Sakit perut", category: "Penyakit" },
      { syriac: "toothache", translit: "TUUTH-eik", meaning: "Sakit gigi", category: "Penyakit" },
      { syriac: "fever", translit: "FII-ver", meaning: "Demam", category: "Penyakit" },
      { syriac: "cough", translit: "KOF", meaning: "Batuk", category: "Penyakit" },
      { syriac: "cold", translit: "KOHLD", meaning: "Pilek", category: "Penyakit" },
      { syriac: "medicine", translit: "MED-i-sin", meaning: "Obat", category: "Kesehatan" },
      { syriac: "doctor", translit: "DOK-ter", meaning: "Dokter", category: "Orang" },
      { syriac: "rest", translit: "REST", meaning: "Beristirahat", category: "Kata Kerja" },
      { syriac: "sick", translit: "SIK", meaning: "Sakit", category: "Kata Sifat" },
      { syriac: "healthy", translit: "HEL-thi", meaning: "Sehat", category: "Kata Sifat" },
      { syriac: "hospital", translit: "HOS-pi-tel", meaning: "Rumah sakit", category: "Tempat" }
    ],
    examples: [
      { syriac: "I have a headache.", translit: "ai HAV uh HED-eik", indonesian: "Saya sakit kepala." },
      { syriac: "What's the matter? I have a stomachache.", translit: "WOTS dhuh MA-ter? ai HAV uh STUH-muhk-eik", indonesian: "Ada apa? Saya sakit perut." },
      { syriac: "You should see a doctor.", translit: "yuu SHUD SII uh DOK-ter", indonesian: "Kamu sebaiknya pergi ke dokter." },
      { syriac: "She has a fever. She should rest at home.", translit: "shi HAZ uh FII-ver. shi SHUD REST at HOHM", indonesian: "Dia demam. Dia sebaiknya beristirahat di rumah." },
      { syriac: "Drink a lot of water and take this medicine.", translit: "DRINGK uh LOT ov WO-ter and TEIK dhis MED-i-sin", indonesian: "Minumlah banyak air dan minumlah obat ini." }
    ],
    quizzes: [
      {
        id: 3201,
        question: "I have a pain in my head. I have a ___.",
        options: ["headache", "stomachache", "toothache", "backache"],
        correctAnswer: "headache",
        explanation: "Sakit di kepala disebut headache."
      },
      {
        id: 3202,
        question: "What's the ___? You look pale.",
        options: ["matter", "problem", "wrong", "question"],
        correctAnswer: "matter",
        explanation: "Ungkapan yang benar adalah What's the matter?"
      },
      {
        id: 3203,
        question: "You should ___ a lot of water when you have a fever.",
        options: ["drink", "drinks", "drinking", "drank"],
        correctAnswer: "drink",
        explanation: "Setelah should, kata kerja memakai bentuk pertama: should drink."
      },
      {
        id: 3204,
        question: "She has a toothache. She should see a ___.",
        options: ["dentist", "teacher", "driver", "farmer"],
        correctAnswer: "dentist",
        explanation: "Sakit gigi ditangani oleh dokter gigi, yaitu dentist."
      },
      {
        id: 3205,
        question: "You have a cold. You should ___ at home.",
        options: ["rest", "run", "swim", "play"],
        correctAnswer: "rest",
        explanation: "Saat pilek, saran yang tepat adalah beristirahat di rumah."
      }
    ]
  },
  {
    id: 33,
    title: "Berbelanja",
    titleSyriac: "Shopping",
    category: "Level A2",
    summary: "Mempelajari percakapan berbelanja: menanyakan harga, mencoba pakaian, dan membayar, lengkap dengan kosakata toko dan uang.",
    introduction: "Berbelanja dalam bahasa Inggris membutuhkan ungkapan seperti How much is this?, Can I try it on?, dan I'd like to buy.... Pelajaran ini melatih percakapan di toko dan di pasar.",
    content: "Menanyakan harga: How much is this shirt? How much are these shoes? Jawabannya: It's fifty thousand rupiah. It's Rp20,000.\nMencoba pakaian: Can I try it on? Artinya: Bolehkah saya mencobanya?\nMembeli: I'd like to buy a new bag. I want to buy two kilos of apples.\nMembayar: Here you are. (Ini uangnya.) Keep the change. (Simpan kembaliannya.)",
    keyRules: [
      "Menanyakan harga: How much is this...? untuk satu benda, How much are these...? untuk jamak.",
      "Too expensive = terlalu mahal, too cheap = terlalu murah.",
      "Can I try it on? artinya Bolehkah saya mencobanya? (untuk pakaian).",
      "I'd like to buy... artinya Saya ingin membeli....",
      "Change artinya uang kembalian. Keep the change artinya simpan kembaliannya."
    ],
    vocabulary: [
      { syriac: "shop", translit: "SHOP", meaning: "Toko", category: "Tempat" },
      { syriac: "price", translit: "PRAIS", meaning: "Harga", category: "Belanja" },
      { syriac: "cheap", translit: "CHIIP", meaning: "Murah", category: "Kata Sifat" },
      { syriac: "expensive", translit: "ik-SPEN-siv", meaning: "Mahal", category: "Kata Sifat" },
      { syriac: "money", translit: "MUH-ni", meaning: "Uang", category: "Belanja" },
      { syriac: "change", translit: "CHEINJ", meaning: "Uang kembalian", category: "Belanja" },
      { syriac: "buy", translit: "BAI", meaning: "Membeli", category: "Kata Kerja" },
      { syriac: "sell", translit: "SEL", meaning: "Menjual", category: "Kata Kerja" },
      { syriac: "size", translit: "SAIZ", meaning: "Ukuran", category: "Belanja" },
      { syriac: "shirt", translit: "SHURT", meaning: "Baju / Kemeja", category: "Pakaian" },
      { syriac: "shoes", translit: "SHUUZ", meaning: "Sepatu", category: "Pakaian" },
      { syriac: "market", translit: "MAR-ket", meaning: "Pasar", category: "Tempat" }
    ],
    examples: [
      { syriac: "How much is this shirt?", translit: "HAU MUCH iz dhis SHURT?", indonesian: "Berapa harga baju ini?" },
      { syriac: "It's fifty thousand rupiah.", translit: "its FIF-ti THAU-zend ruu-PI-ah", indonesian: "Harganya lima puluh ribu rupiah." },
      { syriac: "Can I try it on?", translit: "KAN ai TRAI it ON?", indonesian: "Bolehkah saya mencobanya?" },
      { syriac: "This bag is too expensive.", translit: "dhis BAG iz TUU ik-SPEN-siv", indonesian: "Tas ini terlalu mahal." },
      { syriac: "I'd like to buy two kilos of apples, please.", translit: "aid LAIK tuh BAI TUU KII-lohz ov A-pelz, PLIIZ", indonesian: "Saya ingin membeli dua kilo apel." }
    ],
    quizzes: [
      {
        id: 3301,
        question: "How ___ is this shirt?",
        options: ["much", "many", "long", "old"],
        correctAnswer: "much",
        explanation: "Untuk menanyakan harga memakai How much."
      },
      {
        id: 3302,
        question: "This bag is too ___ for me.",
        options: ["expensive", "cheap", "cheep", "expensived"],
        correctAnswer: "expensive",
        explanation: "Too expensive berarti terlalu mahal. Cheap berarti murah, kebalikan dari yang dimaksud."
      },
      {
        id: 3303,
        question: "Can I ___ it on?",
        options: ["try", "tries", "trying", "tried"],
        correctAnswer: "try",
        explanation: "Setelah can, kata kerja memakai bentuk pertama: Can I try it on?"
      },
      {
        id: 3304,
        question: "I'd like ___ buy a new pair of shoes.",
        options: ["for", "to", "at", "in"],
        correctAnswer: "to",
        explanation: "Ungkapan yang benar adalah I'd like to buy...."
      },
      {
        id: 3305,
        question: "Here is your ___. (uang yang dikembalikan setelah membayar)",
        options: ["change", "chance", "charge", "check"],
        correctAnswer: "change",
        explanation: "Uang kembalian disebut change."
      }
    ]
  },
  {
    id: 34,
    title: "Liburan & Perjalanan",
    titleSyriac: "Holidays & Travel",
    category: "Level A2",
    summary: "Mempelajari kosakata liburan dan perjalanan, serta cara menceritakan rencana dan pengalaman liburan dalam bahasa Inggris.",
    introduction: "Liburan dan perjalanan adalah topik yang menyenangkan untuk diceritakan. Pelajaran ini berisi kosakata seperti beach, hotel, ticket, dan suitcase, serta contoh kalimat tentang rencana dan pengalaman liburan.",
    content: "Rencana liburan memakai going to: I am going to visit my uncle in Surabaya next holiday. We are going to travel by train.\nPengalaman liburan memakai Past Simple: We spent our holiday at the beach. I stayed in a hotel for three days. She took many photos in Bali.\nAlat perjalanan: ticket (tiket), suitcase (koper), passport (paspor), flight (penerbangan), train (kereta), hotel (hotel), beach (pantai).",
    keyRules: [
      "Rencana liburan memakai going to: I am going to visit Bali next month.",
      "Pengalaman liburan memakai Past Simple: We spent our holiday at the beach.",
      "Travel by train = bepergian dengan kereta, travel by plane = bepergian dengan pesawat.",
      "Stay in a hotel = menginap di hotel, take photos = mengambil foto.",
      "Spend the holiday = menghabiskan liburan. Contoh: We spent our holiday in Yogyakarta."
    ],
    vocabulary: [
      { syriac: "holiday", translit: "HOL-i-day", meaning: "Liburan", category: "Perjalanan" },
      { syriac: "beach", translit: "BIICH", meaning: "Pantai", category: "Tempat" },
      { syriac: "mountain", translit: "MAUN-ten", meaning: "Gunung", category: "Tempat" },
      { syriac: "hotel", translit: "hoh-TEL", meaning: "Hotel", category: "Tempat" },
      { syriac: "ticket", translit: "TI-ket", meaning: "Tiket", category: "Perjalanan" },
      { syriac: "suitcase", translit: "SUUT-keis", meaning: "Koper", category: "Perjalanan" },
      { syriac: "passport", translit: "PAS-port", meaning: "Paspor", category: "Perjalanan" },
      { syriac: "travel", translit: "TRA-vel", meaning: "Bepergian", category: "Kata Kerja" },
      { syriac: "flight", translit: "FLAIT", meaning: "Penerbangan", category: "Perjalanan" },
      { syriac: "train", translit: "TREIN", meaning: "Kereta api", category: "Perjalanan" },
      { syriac: "tour", translit: "TUR", meaning: "Tur / Wisata", category: "Perjalanan" },
      { syriac: "photo", translit: "FOH-toh", meaning: "Foto", category: "Perjalanan" }
    ],
    examples: [
      { syriac: "We spent our holiday at the beach.", translit: "wi SPENT AU-er HOL-i-day at dhuh BIICH", indonesian: "Kami menghabiskan liburan di pantai." },
      { syriac: "I stayed in a hotel for three days.", translit: "ai STEID in uh hoh-TEL for THRII DEIZ", indonesian: "Saya menginap di hotel selama tiga hari." },
      { syriac: "She took many photos in Bali.", translit: "shi TUK ME-ni FOH-tohz in BA-li", indonesian: "Dia mengambil banyak foto di Bali." },
      { syriac: "We travelled by train to Yogyakarta.", translit: "wi TRA-veld bai TREIN tuh yog-yuh-KAR-tuh", indonesian: "Kami bepergian dengan kereta ke Yogyakarta." },
      { syriac: "I am going to visit my uncle in Surabaya next holiday.", translit: "ai am GOH-ing tuh VI-zit mai UN-kel in su-ruh-BA-yuh NEKST HOL-i-day", indonesian: "Saya akan mengunjungi pamanku di Surabaya liburan depan." }
    ],
    quizzes: [
      {
        id: 3401,
        question: "We spent our holiday at the ___.",
        options: ["beach", "bank", "beech", "bench"],
        correctAnswer: "beach",
        explanation: "Liburan di tepi laut adalah at the beach. Bank adalah bank, bench adalah bangku."
      },
      {
        id: 3402,
        question: "I need a ___ to board the plane.",
        options: ["ticket", "pocket", "packet", "ticketing"],
        correctAnswer: "ticket",
        explanation: "Untuk naik pesawat dibutuhkan ticket (tiket)."
      },
      {
        id: 3403,
        question: "She stayed in a ___ for three nights.",
        options: ["hotel", "hospital", "school", "market"],
        correctAnswer: "hotel",
        explanation: "Tempat menginap saat liburan adalah hotel."
      },
      {
        id: 3404,
        question: "We travelled to Yogyakarta by ___.",
        options: ["train", "training", "trainer", "trains"],
        correctAnswer: "train",
        explanation: "Setelah by, alat transportasi memakai kata benda tunggal: by train."
      },
      {
        id: 3405,
        question: "I put my clothes in my ___ before the trip.",
        options: ["suitcase", "suit", "case", "bagpack"],
        correctAnswer: "suitcase",
        explanation: "Koper untuk membawa pakaian saat bepergian disebut suitcase."
      }
    ]
  }
];
