import { Module } from "../types";

export const modulesA1: Module[] = [
  {
    id: 11,
    title: "To Be (am, is, are)",
    titleSyriac: "To Be",
    category: "Level A1",
    summary: "Belajar kata kerja 'to be' (am, is, are) untuk menyatakan siapa seseorang, bagaimana keadaannya, dan di mana dia berada. Ini adalah kata kerja paling dasar dalam bahasa Inggris.",
    introduction: "Dalam bahasa Inggris, setiap kalimat membutuhkan kata kerja. Kata kerja 'to be' berarti 'adalah' atau 'berada', dan bentuknya berubah mengikuti subjeknya: I am, he/she/it is, you/we/they are.",
    content: "Gunakan 'am' hanya untuk I (I am a student). Gunakan 'is' untuk he, she, it, dan satu orang atau satu benda (She is happy. The cat is big). Gunakan 'are' untuk you, we, they, dan lebih dari satu orang atau benda (We are ready. They are at school). Untuk kalimat negatif, tambahkan 'not' setelah to be: I am not tired. She is not at home. Untuk pertanyaan, letakkan to be di depan subjek: Are you ready? Is he a teacher?",
    keyRules: [
      "I + am (I am happy).",
      "He, she, it + is (She is a teacher).",
      "You, we, they + are (They are students).",
      "Kalimat negatif: tambahkan 'not' — I am not, she is not, they are not.",
      "Kalimat tanya: to be di depan — Am I...? Is she...? Are they...?"
    ],
    vocabulary: [
      { syriac: "happy", translit: "HE-pi", meaning: "senang, bahagia", category: "Kata Sifat" },
      { syriac: "sad", translit: "SED", meaning: "sedih", category: "Kata Sifat" },
      { syriac: "tired", translit: "TAI-erd", meaning: "lelah, capek", category: "Kata Sifat" },
      { syriac: "hungry", translit: "HANG-gri", meaning: "lapar", category: "Kata Sifat" },
      { syriac: "student", translit: "STYU-dent", meaning: "murid, siswa", category: "Orang" },
      { syriac: "teacher", translit: "TI-cer", meaning: "guru", category: "Orang" },
      { syriac: "friend", translit: "FREND", meaning: "teman", category: "Orang" },
      { syriac: "big", translit: "BIG", meaning: "besar", category: "Kata Sifat" },
      { syriac: "small", translit: "SMOL", meaning: "kecil", category: "Kata Sifat" },
      { syriac: "at home", translit: "et HOM", meaning: "di rumah", category: "Tempat" }
    ],
    examples: [
      { syriac: "I am a student.", translit: "ai em e STYU-dent", indonesian: "Saya adalah seorang murid." },
      { syriac: "She is happy today.", translit: "syi iz HE-pi tu-DEI", indonesian: "Dia (perempuan) senang hari ini." },
      { syriac: "They are at school.", translit: "dei ar et SKUL", indonesian: "Mereka ada di sekolah." },
      { syriac: "He is not tired.", translit: "hi iz not TAI-erd", indonesian: "Dia (laki-laki) tidak lelah." },
      { syriac: "Are you ready?", translit: "ar yu RE-di", indonesian: "Apakah kamu sudah siap?" }
    ],
    quizzes: [
      {
        id: 1101,
        question: "She ___ a teacher.",
        options: ["am", "is", "are", "be"],
        correctAnswer: "is",
        explanation: "Untuk subjek 'she' (dia perempuan), to be yang benar adalah 'is'."
      },
      {
        id: 1102,
        question: "I ___ happy today.",
        options: ["am", "is", "are", "be"],
        correctAnswer: "am",
        explanation: "Untuk subjek 'I' (saya), to be yang benar adalah 'am'."
      },
      {
        id: 1103,
        question: "They ___ students.",
        options: ["am", "is", "are", "be"],
        correctAnswer: "are",
        explanation: "Untuk subjek 'they' (mereka), to be yang benar adalah 'are'."
      },
      {
        id: 1104,
        question: "___ you ready?",
        options: ["Am", "Is", "Are", "Do"],
        correctAnswer: "Are",
        explanation: "Kalimat tanya memakai to be di depan subjek. Untuk 'you', to be yang benar adalah 'are'."
      },
      {
        id: 1105,
        question: "He ___ not at home.",
        options: ["am", "is", "are", "be"],
        correctAnswer: "is",
        explanation: "Untuk subjek 'he' (dia laki-laki), to be yang benar adalah 'is'."
      }
    ]
  },
  {
    id: 12,
    title: "Have Got",
    titleSyriac: "Have Got",
    category: "Level A1",
    summary: "Belajar ungkapan 'have got' dan 'has got' untuk menyatakan kepemilikan, misalnya 'I have got a bike' (Saya mempunyai sepeda).",
    introduction: "'Have got' artinya 'mempunyai'. Ungkapan ini sangat umum dipakai dalam bahasa Inggris sehari-hari, terutama dalam bahasa Inggris British, untuk membicarakan benda yang kita miliki.",
    content: "Gunakan 'have got' untuk I, you, we, they (I have got a cat. They have got a bike). Gunakan 'has got' untuk he, she, it (She has got a dog. It has got four legs). Bentuk negatifnya adalah 'have not got' (haven't got) dan 'has not got' (hasn't got): I haven't got a phone. Untuk bertanya, letakkan have/has di depan: Have you got a pen? Has he got a sister?",
    keyRules: [
      "I, you, we, they + have got (I have got a bike).",
      "He, she, it + has got (She has got a cat).",
      "Negatif: haven't got / hasn't got (He hasn't got a ball).",
      "Tanya: Have you got...? / Has she got...?",
      "Jawaban singkat: Yes, I have. / No, she hasn't."
    ],
    vocabulary: [
      { syriac: "a bike", translit: "e BAIK", meaning: "sebuah sepeda", category: "Benda" },
      { syriac: "a cat", translit: "e KET", meaning: "seekor kucing", category: "Hewan" },
      { syriac: "a dog", translit: "e DOG", meaning: "seekor anjing", category: "Hewan" },
      { syriac: "a book", translit: "e BUK", meaning: "sebuah buku", category: "Benda" },
      { syriac: "a brother", translit: "e BRA-der", meaning: "seorang saudara laki-laki", category: "Keluarga" },
      { syriac: "a sister", translit: "e SIS-ter", meaning: "seorang saudara perempuan", category: "Keluarga" },
      { syriac: "a bag", translit: "e BEG", meaning: "sebuah tas", category: "Benda" },
      { syriac: "a phone", translit: "e FON", meaning: "sebuah telepon / HP", category: "Benda" },
      { syriac: "a ball", translit: "e BOL", meaning: "sebuah bola", category: "Benda" },
      { syriac: "a pet", translit: "e PET", meaning: "seekor hewan peliharaan", category: "Hewan" }
    ],
    examples: [
      { syriac: "I have got a bike.", translit: "ai hev got e BAIK", indonesian: "Saya mempunyai sebuah sepeda." },
      { syriac: "She has got a cat.", translit: "syi hez got e KET", indonesian: "Dia (perempuan) mempunyai seekor kucing." },
      { syriac: "They have got two dogs.", translit: "dei hev got tu DOGZ", indonesian: "Mereka mempunyai dua ekor anjing." },
      { syriac: "He hasn't got a phone.", translit: "hi HE-zent got e FON", indonesian: "Dia (laki-laki) tidak mempunyai HP." },
      { syriac: "Have you got a pen?", translit: "hev yu got e PEN", indonesian: "Apakah kamu mempunyai sebuah pulpen?" }
    ],
    quizzes: [
      {
        id: 1201,
        question: "She ___ got a cat.",
        options: ["have", "has", "having", "had"],
        correctAnswer: "has",
        explanation: "Untuk subjek 'she', bentuk yang benar adalah 'has got'."
      },
      {
        id: 1202,
        question: "I ___ got two brothers.",
        options: ["have", "has", "having", "am"],
        correctAnswer: "have",
        explanation: "Untuk subjek 'I', bentuk yang benar adalah 'have got'."
      },
      {
        id: 1203,
        question: "They ___ got a new bike.",
        options: ["have", "has", "had", "having"],
        correctAnswer: "have",
        explanation: "Untuk subjek 'they', bentuk yang benar adalah 'have got'."
      },
      {
        id: 1204,
        question: "___ he got a dog?",
        options: ["Have", "Has", "Do", "Does"],
        correctAnswer: "Has",
        explanation: "Pertanyaan dengan subjek 'he' memakai 'Has' di depan: Has he got a dog?"
      },
      {
        id: 1205,
        question: "We ___ got a big house.",
        options: ["has", "have", "having", "had"],
        correctAnswer: "have",
        explanation: "Untuk subjek 'we', bentuk yang benar adalah 'have got'."
      }
    ]
  },
  {
    id: 13,
    title: "Present Simple",
    titleSyriac: "Present Simple",
    category: "Level A1",
    summary: "Belajar Present Simple untuk menyatakan kebiasaan, rutinitas, dan fakta sehari-hari, misalnya 'She reads every day' (Dia membaca setiap hari).",
    introduction: "Present Simple dipakai untuk hal yang terjadi secara rutin atau merupakan fakta. Misalnya: I go to school every day (Saya pergi ke sekolah setiap hari) dan The sun rises in the east (Matahari terbit di timur).",
    content: "Untuk I, you, we, they, gunakan kata kerja bentuk dasar: I play football. They read books. Untuk he, she, it, tambahkan -s atau -es pada kata kerja: She plays football. He watches TV. Kata kerja yang berakhiran -s, -x, -ch, -sh mendapat -es (watch → watches). Kata kerja berakhiran konsonan + y berubah menjadi -ies (study → studies). Bentuk negatif memakai don't (I, you, we, they) dan doesn't (he, she, it): I don't like milk. She doesn't like milk. Pertanyaan memakai Do/Does: Do you like rice? Does he play football?",
    keyRules: [
      "I, you, we, they + kata kerja dasar (I play, they read).",
      "He, she, it + kata kerja + -s/-es (She plays, he watches).",
      "Kata kerja berakhiran konsonan + y → -ies (study → studies).",
      "Negatif: don't (I/you/we/they) dan doesn't (he/she/it).",
      "Tanya: Do you...? / Does she...? (kata kerja kembali ke bentuk dasar)."
    ],
    vocabulary: [
      { syriac: "wake up", translit: "WEIK ap", meaning: "bangun tidur", category: "Kata Kerja" },
      { syriac: "eat", translit: "IIT", meaning: "makan", category: "Kata Kerja" },
      { syriac: "go", translit: "GO", meaning: "pergi", category: "Kata Kerja" },
      { syriac: "play", translit: "PLEI", meaning: "bermain", category: "Kata Kerja" },
      { syriac: "read", translit: "RIID", meaning: "membaca", category: "Kata Kerja" },
      { syriac: "study", translit: "STA-di", meaning: "belajar", category: "Kata Kerja" },
      { syriac: "watch", translit: "WOC", meaning: "menonton", category: "Kata Kerja" },
      { syriac: "like", translit: "LAIK", meaning: "suka, menyukai", category: "Kata Kerja" },
      { syriac: "drink", translit: "DRINGK", meaning: "minum", category: "Kata Kerja" },
      { syriac: "sleep", translit: "SLIIP", meaning: "tidur", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "I go to school every day.", translit: "ai go tu SKUL EV-ri DEI", indonesian: "Saya pergi ke sekolah setiap hari." },
      { syriac: "She plays football on Sunday.", translit: "syi PLEIZ FUT-bol on SAN-dei", indonesian: "Dia (perempuan) bermain sepak bola pada hari Minggu." },
      { syriac: "He watches TV in the evening.", translit: "hi WO-ciz TI-VI in di IIV-ning", indonesian: "Dia (laki-laki) menonton TV pada malam hari." },
      { syriac: "They don't like spicy food.", translit: "dei DONT LAIK SPAI-si FUD", indonesian: "Mereka tidak suka makanan pedas." },
      { syriac: "Does she study English?", translit: "daz syi STA-di ING-glisy", indonesian: "Apakah dia (perempuan) belajar bahasa Inggris?" }
    ],
    quizzes: [
      {
        id: 1301,
        question: "She ___ to school every day.",
        options: ["go", "goes", "going", "went"],
        correctAnswer: "goes",
        explanation: "Untuk subjek 'she', kata kerja mendapat akhiran -es: go → goes."
      },
      {
        id: 1302,
        question: "They ___ football on Sunday.",
        options: ["play", "plays", "playing", "played"],
        correctAnswer: "play",
        explanation: "Untuk subjek 'they', kata kerja memakai bentuk dasar: play."
      },
      {
        id: 1303,
        question: "___ he like rice?",
        options: ["Do", "Does", "Is", "Are"],
        correctAnswer: "Does",
        explanation: "Pertanyaan Present Simple dengan subjek 'he' memakai 'Does'."
      },
      {
        id: 1304,
        question: "My mother ___ breakfast at 6 o'clock.",
        options: ["cook", "cooks", "cooking", "cooked"],
        correctAnswer: "cooks",
        explanation: "Untuk subjek 'my mother' (dia perempuan, orang ketiga tunggal), kata kerja mendapat -s: cook → cooks."
      },
      {
        id: 1305,
        question: "He ___ not like milk.",
        options: ["do", "does", "don't", "doesn't"],
        correctAnswer: "doesn't",
        explanation: "Bentuk negatif untuk 'he' adalah 'doesn't' (does + not)."
      }
    ]
  },
  {
    id: 14,
    title: "Bentuk Jamak (Plurals)",
    titleSyriac: "Plurals",
    category: "Level A1",
    summary: "Belajar cara membentuk kata benda jamak dalam bahasa Inggris: menambah -s, -es, mengubah -y menjadi -ies, dan bentuk jamak tidak beraturan seperti child → children.",
    introduction: "Dalam bahasa Inggris, satu benda disebut singular (tunggal) dan lebih dari satu disebut plural (jamak). Kebanyakan kata benda jamak dibentuk dengan menambah -s, tetapi ada beberapa aturan lain yang perlu dihafal.",
    content: "Aturan umum: tambah -s (book → books, cat → cats). Kata yang berakhiran -s, -x, -ch, -sh mendapat -es (box → boxes, watch → watches, class → classes). Kata yang berakhiran konsonan + y berubah menjadi -ies (baby → babies, family → families). Beberapa kata jamaknya tidak beraturan dan harus dihafal: child → children, man → men, woman → women, foot → feet, tooth → teeth. Kata 'sheep' bentuk tunggal dan jamaknya sama.",
    keyRules: [
      "Umumnya tambah -s: book → books, cat → cats.",
      "Berakhiran -s, -x, -ch, -sh tambah -es: box → boxes, watch → watches.",
      "Konsonan + y → -ies: baby → babies, family → families.",
      "Tidak beraturan: child → children, man → men, foot → feet, tooth → teeth.",
      "Sheep bentuk tunggal dan jamaknya sama."
    ],
    vocabulary: [
      { syriac: "book - books", translit: "BUK - BUKS", meaning: "buku - buku-buku", category: "Bentuk Jamak" },
      { syriac: "box - boxes", translit: "BOKS - BOK-siz", meaning: "kotak - kotak-kotak", category: "Bentuk Jamak" },
      { syriac: "baby - babies", translit: "BEI-bi - BEI-biz", meaning: "bayi - bayi-bayi", category: "Bentuk Jamak" },
      { syriac: "child - children", translit: "CAILD - CIL-dren", meaning: "anak - anak-anak", category: "Bentuk Jamak" },
      { syriac: "man - men", translit: "MEN - MEN", meaning: "pria - para pria", category: "Bentuk Jamak" },
      { syriac: "woman - women", translit: "WU-men - WI-men", meaning: "wanita - para wanita", category: "Bentuk Jamak" },
      { syriac: "foot - feet", translit: "FUT - FIIT", meaning: "kaki - kaki-kaki", category: "Bentuk Jamak" },
      { syriac: "tooth - teeth", translit: "TUTH - TIITH", meaning: "gigi - gigi-gigi", category: "Bentuk Jamak" },
      { syriac: "watch - watches", translit: "WOC - WO-ciz", meaning: "jam tangan - jam-jam tangan", category: "Bentuk Jamak" },
      { syriac: "class - classes", translit: "KLAS - KLA-siz", meaning: "kelas - kelas-kelas", category: "Bentuk Jamak" },
      { syriac: "family - families", translit: "FE-mi-li - FE-mi-liz", meaning: "keluarga - keluarga-keluarga", category: "Bentuk Jamak" },
      { syriac: "sheep - sheep", translit: "SYIIP - SYIIP", meaning: "domba - domba-domba", category: "Bentuk Jamak" }
    ],
    examples: [
      { syriac: "I have three books.", translit: "ai hev THRII BUKS", indonesian: "Saya mempunyai tiga buku." },
      { syriac: "There are two boxes on the table.", translit: "der ar TU BOK-siz on di TEI-bel", indonesian: "Ada dua kotak di atas meja." },
      { syriac: "The babies are sleeping.", translit: "di BEI-biz ar SLII-ping", indonesian: "Bayi-bayi itu sedang tidur." },
      { syriac: "The children play in the garden.", translit: "di CIL-dren PLEI in di GAR-den", indonesian: "Anak-anak bermain di taman." },
      { syriac: "Two men are standing there.", translit: "TU MEN ar STEN-ding der", indonesian: "Dua pria sedang berdiri di sana." }
    ],
    quizzes: [
      {
        id: 1401,
        question: "What is the plural of 'box'?",
        options: ["boxs", "boxes", "boxies", "boxen"],
        correctAnswer: "boxes",
        explanation: "Kata yang berakhiran -x mendapat -es: box → boxes."
      },
      {
        id: 1402,
        question: "What is the plural of 'baby'?",
        options: ["babys", "babyes", "babies", "babyes"],
        correctAnswer: "babies",
        explanation: "Kata yang berakhiran konsonan + y berubah menjadi -ies: baby → babies."
      },
      {
        id: 1403,
        question: "What is the plural of 'child'?",
        options: ["childs", "childes", "children", "childrens"],
        correctAnswer: "children",
        explanation: "Child adalah kata tidak beraturan: bentuk jamaknya children."
      },
      {
        id: 1404,
        question: "There are three ___ in the room.",
        options: ["man", "men", "mans", "man's"],
        correctAnswer: "men",
        explanation: "Bentuk jamak dari man adalah men. 'Three' menunjukkan jumlah jamak."
      },
      {
        id: 1405,
        question: "What is the plural of 'watch'?",
        options: ["watchs", "watchies", "watches", "watchen"],
        correctAnswer: "watches",
        explanation: "Kata yang berakhiran -ch mendapat -es: watch → watches."
      }
    ]
  },
  {
    id: 15,
    title: "This, That, These, Those",
    titleSyriac: "This, That, These, Those",
    category: "Level A1",
    summary: "Belajar kata tunjuk dalam bahasa Inggris: this dan these untuk benda yang dekat, that dan those untuk benda yang jauh.",
    introduction: "Kata tunjuk dipakai untuk menunjukkan benda. Pilihannya tergantung pada dua hal: jarak benda (dekat atau jauh) dan jumlah benda (satu atau banyak).",
    content: "This dipakai untuk satu benda yang dekat dengan pembicara: This is my pen (Ini pulpen saya). These dipakai untuk benda jamak yang dekat: These are my books (Ini buku-buku saya). That dipakai untuk satu benda yang jauh: That is a big tree (Itu pohon besar). Those dipakai untuk benda jamak yang jauh: Those are birds in the sky (Itu burung-burung di langit). Ingat: this/that untuk satu benda, these/those untuk banyak benda.",
    keyRules: [
      "This = ini (satu, dekat): This is my bag.",
      "These = ini (banyak, dekat): These are my shoes.",
      "That = itu (satu, jauh): That is a car.",
      "Those = itu (banyak, jauh): Those are stars.",
      "This/that + is; these/those + are."
    ],
    vocabulary: [
      { syriac: "this", translit: "DIS", meaning: "ini (satu, dekat)", category: "Kata Tunjuk" },
      { syriac: "that", translit: "DET", meaning: "itu (satu, jauh)", category: "Kata Tunjuk" },
      { syriac: "these", translit: "DIIZ", meaning: "ini (banyak, dekat)", category: "Kata Tunjuk" },
      { syriac: "those", translit: "DOZ", meaning: "itu (banyak, jauh)", category: "Kata Tunjuk" },
      { syriac: "here", translit: "HIIR", meaning: "di sini", category: "Tempat" },
      { syriac: "there", translit: "DER", meaning: "di sana", category: "Tempat" },
      { syriac: "near", translit: "NIIR", meaning: "dekat", category: "Tempat" },
      { syriac: "far", translit: "FAR", meaning: "jauh", category: "Tempat" },
      { syriac: "pencil", translit: "PEN-sil", meaning: "pensil", category: "Benda" },
      { syriac: "bag", translit: "BEG", meaning: "tas", category: "Benda" }
    ],
    examples: [
      { syriac: "This is my pen.", translit: "dis iz mai PEN", indonesian: "Ini pulpen saya." },
      { syriac: "These are my books.", translit: "diiz ar mai BUKS", indonesian: "Ini buku-buku saya." },
      { syriac: "That is a big tree.", translit: "det iz e BIG TRII", indonesian: "Itu sebuah pohon besar." },
      { syriac: "Those are birds in the sky.", translit: "doz ar BERDZ in di SKAI", indonesian: "Itu burung-burung di langit." },
      { syriac: "Is this your bag?", translit: "iz dis yor BEG", indonesian: "Apakah ini tasmu?" }
    ],
    quizzes: [
      {
        id: 1501,
        question: "___ is my pen. (Pulpen itu dekat dengan saya, hanya satu.)",
        options: ["This", "That", "These", "Those"],
        correctAnswer: "This",
        explanation: "Satu benda yang dekat memakai 'this'."
      },
      {
        id: 1502,
        question: "___ are my books. (Buku-buku itu dekat dengan saya, jumlahnya banyak.)",
        options: ["This", "That", "These", "Those"],
        correctAnswer: "These",
        explanation: "Benda jamak yang dekat memakai 'these'."
      },
      {
        id: 1503,
        question: "___ is a big tree over there. (Pohon itu jauh, hanya satu.)",
        options: ["This", "That", "These", "Those"],
        correctAnswer: "That",
        explanation: "Satu benda yang jauh memakai 'that'."
      },
      {
        id: 1504,
        question: "___ are birds in the sky. (Burung-burung itu jauh, jumlahnya banyak.)",
        options: ["This", "That", "These", "Those"],
        correctAnswer: "Those",
        explanation: "Benda jamak yang jauh memakai 'those'."
      },
      {
        id: 1505,
        question: "___ apples are sweet. (Apel-apel itu dekat dengan saya, jumlahnya banyak.)",
        options: ["This", "That", "These", "Those"],
        correctAnswer: "These",
        explanation: "Benda jamak yang dekat memakai 'these'."
      }
    ]
  },
  {
    id: 16,
    title: "Rutinitas Harianku",
    titleSyriac: "My Daily Routine",
    category: "Level A1",
    summary: "Belajar menceritakan kegiatan sehari-hari dalam bahasa Inggris, dari bangun tidur sampai tidur lagi, memakai Present Simple.",
    introduction: "Setiap hari kita melakukan kegiatan yang sama: bangun, sarapan, pergi ke sekolah, belajar, bermain, lalu tidur. Dalam bahasa Inggris, kegiatan rutin ini diceritakan dengan Present Simple.",
    content: "Kegiatan rutin biasanya memakai kata kerja seperti wake up (bangun), get up (bangun dari tempat tidur), brush my teeth (menggosok gigi), take a shower (mandi), have breakfast (sarapan), go to school (pergi ke sekolah), have lunch (makan siang), do homework (mengerjakan PR), dan go to bed (tidur). Waktu dinyatakan dengan 'at' untuk jam: at 6 o'clock, at 7 o'clock. Urutan waktu bisa memakai first (pertama), then (kemudian), after that (setelah itu), dan finally (akhirnya).",
    keyRules: [
      "Kegiatan rutin memakai Present Simple: I wake up at 5 o'clock.",
      "Jam memakai 'at': at 6 o'clock, at 7 o'clock.",
      "He/she/it + kata kerja -s: She brushes her teeth.",
      "Urutan kegiatan: first, then, after that, finally.",
      "Bagian hari: in the morning, in the afternoon, in the evening, at night."
    ],
    vocabulary: [
      { syriac: "wake up", translit: "WEIK ap", meaning: "bangun tidur", category: "Rutinitas" },
      { syriac: "get up", translit: "GET ap", meaning: "bangun dari tempat tidur", category: "Rutinitas" },
      { syriac: "brush my teeth", translit: "BRASY mai TIITH", meaning: "menggosok gigiku", category: "Rutinitas" },
      { syriac: "take a shower", translit: "TEIK e SYAU-er", meaning: "mandi", category: "Rutinitas" },
      { syriac: "have breakfast", translit: "hev BREK-fast", meaning: "sarapan", category: "Rutinitas" },
      { syriac: "go to school", translit: "go tu SKUL", meaning: "pergi ke sekolah", category: "Rutinitas" },
      { syriac: "have lunch", translit: "hev LANC", meaning: "makan siang", category: "Rutinitas" },
      { syriac: "do homework", translit: "du HOM-werk", meaning: "mengerjakan PR", category: "Rutinitas" },
      { syriac: "go to bed", translit: "go tu BED", meaning: "tidur, pergi ke tempat tidur", category: "Rutinitas" },
      { syriac: "in the morning", translit: "in di MOR-ning", meaning: "pada pagi hari", category: "Waktu" }
    ],
    examples: [
      { syriac: "I wake up at 5 o'clock.", translit: "ai WEIK ap et FAIV e-KLOK", indonesian: "Saya bangun tidur pukul 5." },
      { syriac: "She brushes her teeth every morning.", translit: "syi BRA-syiz her TIITH EV-ri MOR-ning", indonesian: "Dia (perempuan) menggosok gigi setiap pagi." },
      { syriac: "I have breakfast at 6 o'clock.", translit: "ai hev BREK-fast et SIKS e-KLOK", indonesian: "Saya sarapan pukul 6." },
      { syriac: "He does his homework in the evening.", translit: "hi daz hiz HOM-werk in di IIV-ning", indonesian: "Dia (laki-laki) mengerjakan PR-nya pada malam hari." },
      { syriac: "We go to bed at 9 o'clock.", translit: "wi go tu BED et NAIN e-KLOK", indonesian: "Kami tidur pukul 9." }
    ],
    quizzes: [
      {
        id: 1601,
        question: "I ___ up at 5 o'clock.",
        options: ["wake", "wakes", "waking", "woke"],
        correctAnswer: "wake",
        explanation: "Untuk subjek 'I', kata kerja memakai bentuk dasar: wake."
      },
      {
        id: 1602,
        question: "She ___ her teeth every morning.",
        options: ["brush", "brushes", "brushing", "brushed"],
        correctAnswer: "brushes",
        explanation: "Untuk subjek 'she', kata kerja mendapat -es: brush → brushes."
      },
      {
        id: 1603,
        question: "What time do you ___ to bed?",
        options: ["go", "goes", "going", "went"],
        correctAnswer: "go",
        explanation: "Setelah 'do', kata kerja kembali ke bentuk dasar: go."
      },
      {
        id: 1604,
        question: "We have lunch ___ 12 o'clock.",
        options: ["in", "on", "at", "to"],
        correctAnswer: "at",
        explanation: "Jam memakai kata depan 'at': at 12 o'clock."
      },
      {
        id: 1605,
        question: "He ___ homework in the evening.",
        options: ["do", "does", "doing", "did"],
        correctAnswer: "does",
        explanation: "Untuk subjek 'he', kata kerja mendapat -es: do → does."
      }
    ]
  },
  {
    id: 17,
    title: "Menyatakan Waktu",
    titleSyriac: "Telling the Time",
    category: "Level A1",
    summary: "Belajar membaca jam dalam bahasa Inggris: o'clock, half past, quarter past, dan quarter to, serta bertanya dan menjawab tentang waktu.",
    introduction: "Untuk bertanya tentang waktu, kita berkata 'What time is it?' (Jam berapa sekarang?). Jawabannya dimulai dengan 'It is...' diikuti cara membaca jamnya.",
    content: "Jam tepat memakai o'clock: 7.00 = It is seven o'clock. Menit 30 memakai half past: 8.30 = It is half past eight. Menit 15 memakai quarter past: 9.15 = It is quarter past nine. Menit 45 memakai quarter to jam berikutnya: 10.45 = It is quarter to eleven. Bagian hari: in the morning (pagi), in the afternoon (siang/sore), in the evening (malam), at night (tengah malam). Pukul 12 siang disebut noon, pukul 12 malam disebut midnight.",
    keyRules: [
      "Jam tepat: o'clock — 7.00 = seven o'clock.",
      "Menit 30: half past — 8.30 = half past eight.",
      "Menit 15: quarter past — 9.15 = quarter past nine.",
      "Menit 45: quarter to (jam berikutnya) — 10.45 = quarter to eleven.",
      "Bertanya: What time is it? Jawab: It is..."
    ],
    vocabulary: [
      { syriac: "o'clock", translit: "e-KLOK", meaning: "tepat (jam ...)", category: "Waktu" },
      { syriac: "half past", translit: "HAF PAST", meaning: "setengah (lewat 30 menit)", category: "Waktu" },
      { syriac: "quarter past", translit: "KWOR-ter PAST", meaning: "lewat seperempat (15 menit)", category: "Waktu" },
      { syriac: "quarter to", translit: "KWOR-ter TU", meaning: "kurang seperempat (45 menit)", category: "Waktu" },
      { syriac: "morning", translit: "MOR-ning", meaning: "pagi", category: "Waktu" },
      { syriac: "afternoon", translit: "AF-ter-nun", meaning: "siang / sore", category: "Waktu" },
      { syriac: "evening", translit: "IIV-ning", meaning: "malam (sore hari)", category: "Waktu" },
      { syriac: "night", translit: "NAIT", meaning: "malam", category: "Waktu" },
      { syriac: "noon", translit: "NUN", meaning: "tengah hari (pukul 12 siang)", category: "Waktu" },
      { syriac: "midnight", translit: "MID-nait", meaning: "tengah malam (pukul 12 malam)", category: "Waktu" },
      { syriac: "minute", translit: "MI-nit", meaning: "menit", category: "Waktu" },
      { syriac: "hour", translit: "AU-er", meaning: "jam (durasi)", category: "Waktu" }
    ],
    examples: [
      { syriac: "What time is it?", translit: "wot TAIM iz it", indonesian: "Jam berapa sekarang?" },
      { syriac: "It is seven o'clock.", translit: "it iz SE-ven e-KLOK", indonesian: "Sekarang pukul tujuh tepat." },
      { syriac: "It is half past eight.", translit: "it iz HAF PAST EIT", indonesian: "Sekarang pukul setengah sembilan (08.30)." },
      { syriac: "It is quarter past nine.", translit: "it iz KWOR-ter PAST NAIN", indonesian: "Sekarang pukul sembilan lewat seperempat (09.15)." },
      { syriac: "It is quarter to eleven.", translit: "it iz KWOR-ter TU i-LE-ven", indonesian: "Sekarang pukul sebelas kurang seperempat (10.45)." }
    ],
    quizzes: [
      {
        id: 1701,
        question: "It is seven ___. (Pukul 07.00)",
        options: ["o'clock", "half", "past", "to"],
        correctAnswer: "o'clock",
        explanation: "Jam tepat memakai 'o'clock': seven o'clock."
      },
      {
        id: 1702,
        question: "It is half past ___. (Pukul 08.30)",
        options: ["seven", "eight", "nine", "ten"],
        correctAnswer: "eight",
        explanation: "Half past delapan artinya pukul 08.30, jadi jamnya adalah eight."
      },
      {
        id: 1703,
        question: "What time is it? It is ___. (Pukul 09.15)",
        options: ["quarter past nine", "quarter to nine", "half past nine", "nine o'clock"],
        correctAnswer: "quarter past nine",
        explanation: "Pukul 09.15 adalah sembilan lewat seperempat: quarter past nine."
      },
      {
        id: 1704,
        question: "10.45 = It is quarter ___ eleven.",
        options: ["past", "to", "at", "in"],
        correctAnswer: "to",
        explanation: "Pukul 10.45 adalah sebelas kurang seperempat: quarter to eleven."
      },
      {
        id: 1705,
        question: "It is twelve o'clock at night. It is ___.",
        options: ["noon", "midnight", "morning", "afternoon"],
        correctAnswer: "midnight",
        explanation: "Pukul 12 malam disebut midnight. Noon adalah pukul 12 siang."
      }
    ]
  },
  {
    id: 18,
    title: "Sekolahku",
    titleSyriac: "My School",
    category: "Level A1",
    summary: "Belajar kosakata tentang sekolah: ruangan, benda-benda, dan orang-orang di sekolah, serta cara menceritakan kegiatan di sekolah.",
    introduction: "Sekolah adalah tempat kita belajar setiap hari. Di sekolah ada ruang kelas, perpustakaan, kantin, dan lapangan. Kita bertemu guru dan teman-teman di sana.",
    content: "Ruangan di sekolah: classroom (ruang kelas), library (perpustakaan), canteen (kantin), playground (lapangan bermain). Benda di kelas: blackboard (papan tulis), desk (meja), chair (kursi), book (buku), pencil (pensil), bag (tas). Orang di sekolah: teacher (guru), student (murid), friend (teman). Kegiatan di sekolah: We study in the classroom. We read books in the library. We eat lunch in the canteen. We play in the playground.",
    keyRules: [
      "Study (belajar) di classroom; read (membaca) di library.",
      "Eat lunch (makan siang) di canteen; play (bermain) di playground.",
      "Teacher writes on the blackboard (guru menulis di papan tulis).",
      "Pakai 'in the' untuk ruangan: in the classroom, in the library.",
      "Benda di kelas: book, pencil, bag, desk, chair."
    ],
    vocabulary: [
      { syriac: "classroom", translit: "KLAS-rum", meaning: "ruang kelas", category: "Sekolah" },
      { syriac: "teacher", translit: "TI-cer", meaning: "guru", category: "Orang" },
      { syriac: "student", translit: "STYU-dent", meaning: "murid, siswa", category: "Orang" },
      { syriac: "book", translit: "BUK", meaning: "buku", category: "Benda" },
      { syriac: "pencil", translit: "PEN-sil", meaning: "pensil", category: "Benda" },
      { syriac: "bag", translit: "BEG", meaning: "tas", category: "Benda" },
      { syriac: "library", translit: "LAI-bre-ri", meaning: "perpustakaan", category: "Sekolah" },
      { syriac: "canteen", translit: "ken-TIIN", meaning: "kantin", category: "Sekolah" },
      { syriac: "playground", translit: "PLEI-graund", meaning: "lapangan bermain", category: "Sekolah" },
      { syriac: "blackboard", translit: "BLEK-bord", meaning: "papan tulis", category: "Benda" },
      { syriac: "desk", translit: "DESK", meaning: "meja (belajar)", category: "Benda" },
      { syriac: "chair", translit: "CER", meaning: "kursi", category: "Benda" }
    ],
    examples: [
      { syriac: "We study in the classroom.", translit: "wi STA-di in di KLAS-rum", indonesian: "Kami belajar di ruang kelas." },
      { syriac: "I read books in the library.", translit: "ai RIID BUKS in di LAI-bre-ri", indonesian: "Saya membaca buku di perpustakaan." },
      { syriac: "The teacher writes on the blackboard.", translit: "di TI-cer RAITS on di BLEK-bord", indonesian: "Guru menulis di papan tulis." },
      { syriac: "I put my books in my bag.", translit: "ai PUT mai BUKS in mai BEG", indonesian: "Saya menaruh buku-buku saya di dalam tas." },
      { syriac: "We eat lunch in the canteen.", translit: "wi IIT LANC in di ken-TIIN", indonesian: "Kami makan siang di kantin." }
    ],
    quizzes: [
      {
        id: 1801,
        question: "We study in the ___.",
        options: ["library", "classroom", "canteen", "playground"],
        correctAnswer: "classroom",
        explanation: "Kita belajar (study) di ruang kelas (classroom)."
      },
      {
        id: 1802,
        question: "I read books in the ___.",
        options: ["library", "canteen", "playground", "classroom"],
        correctAnswer: "library",
        explanation: "Kita membaca buku di perpustakaan (library)."
      },
      {
        id: 1803,
        question: "The teacher writes on the ___.",
        options: ["blackboard", "desk", "chair", "bag"],
        correctAnswer: "blackboard",
        explanation: "Guru menulis di papan tulis (blackboard)."
      },
      {
        id: 1804,
        question: "I put my books in my ___.",
        options: ["bag", "pencil", "eraser", "ruler"],
        correctAnswer: "bag",
        explanation: "Buku ditaruh di dalam tas (bag)."
      },
      {
        id: 1805,
        question: "We eat lunch in the ___.",
        options: ["canteen", "library", "classroom", "playground"],
        correctAnswer: "canteen",
        explanation: "Kita makan siang di kantin (canteen)."
      }
    ]
  },
  {
    id: 19,
    title: "Rumahku",
    titleSyriac: "My House",
    category: "Level A1",
    summary: "Belajar kosakata tentang rumah: ruangan-ruangan, perabotan, dan cara menceritakan isi rumah kita dalam bahasa Inggris.",
    introduction: "Rumah adalah tempat tinggal kita. Setiap rumah mempunyai ruangan-ruangan dengan fungsi yang berbeda: kamar tidur untuk tidur, dapur untuk memasak, dan ruang tamu untuk berkumpul.",
    content: "Ruangan di rumah: bedroom (kamar tidur), kitchen (dapur), bathroom (kamar mandi), living room (ruang tamu / ruang keluarga), garden (taman / halaman). Perabotan: bed (tempat tidur), table (meja), chair (kursi), sofa (sofa), lamp (lampu). Bagian rumah: door (pintu), window (jendela). Untuk menyatakan ada sesuatu di suatu tempat, pakai There is (satu) dan There are (banyak): There is a lamp in my bedroom. There are two windows in the kitchen.",
    keyRules: [
      "Bedroom untuk tidur, kitchen untuk memasak, bathroom untuk mandi.",
      "Living room adalah ruang tamu / ruang keluarga.",
      "There is + satu benda: There is a lamp in my room.",
      "There are + benda jamak: There are two windows in the kitchen.",
      "Kata depan tempat: in (di dalam), on (di atas), under (di bawah)."
    ],
    vocabulary: [
      { syriac: "bedroom", translit: "BED-rum", meaning: "kamar tidur", category: "Ruangan" },
      { syriac: "kitchen", translit: "KI-cen", meaning: "dapur", category: "Ruangan" },
      { syriac: "bathroom", translit: "BATH-rum", meaning: "kamar mandi", category: "Ruangan" },
      { syriac: "living room", translit: "LI-ving RUM", meaning: "ruang tamu / ruang keluarga", category: "Ruangan" },
      { syriac: "garden", translit: "GAR-den", meaning: "taman / halaman", category: "Ruangan" },
      { syriac: "door", translit: "DOR", meaning: "pintu", category: "Bagian Rumah" },
      { syriac: "window", translit: "WIN-do", meaning: "jendela", category: "Bagian Rumah" },
      { syriac: "bed", translit: "BED", meaning: "tempat tidur", category: "Perabotan" },
      { syriac: "table", translit: "TEI-bel", meaning: "meja", category: "Perabotan" },
      { syriac: "chair", translit: "CER", meaning: "kursi", category: "Perabotan" },
      { syriac: "lamp", translit: "LEMP", meaning: "lampu", category: "Perabotan" },
      { syriac: "sofa", translit: "SO-fa", meaning: "sofa", category: "Perabotan" }
    ],
    examples: [
      { syriac: "We sleep in the bedroom.", translit: "wi SLIIP in di BED-rum", indonesian: "Kami tidur di kamar tidur." },
      { syriac: "My mother cooks in the kitchen.", translit: "mai MA-der KUKS in di KI-cen", indonesian: "Ibu saya memasak di dapur." },
      { syriac: "There is a lamp in my bedroom.", translit: "der iz e LEMP in mai BED-rum", indonesian: "Ada sebuah lampu di kamar tidur saya." },
      { syriac: "There are two windows in the kitchen.", translit: "der ar TU WIN-doz in di KI-cen", indonesian: "Ada dua jendela di dapur." },
      { syriac: "We watch TV in the living room.", translit: "wi WOC TI-VI in di LI-ving RUM", indonesian: "Kami menonton TV di ruang keluarga." }
    ],
    quizzes: [
      {
        id: 1901,
        question: "We sleep in the ___.",
        options: ["bedroom", "kitchen", "bathroom", "garden"],
        correctAnswer: "bedroom",
        explanation: "Kita tidur di kamar tidur (bedroom)."
      },
      {
        id: 1902,
        question: "Mother cooks in the ___.",
        options: ["kitchen", "bedroom", "bathroom", "living room"],
        correctAnswer: "kitchen",
        explanation: "Ibu memasak di dapur (kitchen)."
      },
      {
        id: 1903,
        question: "We wash our hands in the ___.",
        options: ["bathroom", "kitchen", "bedroom", "garden"],
        correctAnswer: "bathroom",
        explanation: "Kita mencuci tangan di kamar mandi (bathroom)."
      },
      {
        id: 1904,
        question: "I watch TV in the ___ room.",
        options: ["living", "bed", "cook", "wash"],
        correctAnswer: "living",
        explanation: "Ruang keluarga disebut living room."
      },
      {
        id: 1905,
        question: "There are two ___ in my bedroom.",
        options: ["window", "windows", "windowes", "windown"],
        correctAnswer: "windows",
        explanation: "Bentuk jamak dari window adalah windows (tambah -s)."
      }
    ]
  },
  {
    id: 20,
    title: "Makanan",
    titleSyriac: "Food",
    category: "Level A1",
    summary: "Belajar kosakata tentang makanan dan minuman, serta cara menyatakan makanan kesukaan dan apa yang kita makan setiap hari.",
    introduction: "Makanan dan minuman adalah bagian penting dari kehidupan sehari-hari. Dalam modul ini kita belajar nama-nama makanan dalam bahasa Inggris dan cara mengatakan apa yang kita suka.",
    content: "Makanan pokok: rice (nasi), bread (roti), noodle (mi), egg (telur), chicken (ayam), fish (ikan). Buah-buahan: apple (apel), banana (pisang), orange (jeruk), mango (mangga). Minuman: milk (susu), water (air), juice (jus), tea (teh). Kata seperti rice, bread, dan milk tidak bisa dihitung (uncountable), jadi tidak memakai -s: I eat rice (bukan rices). Untuk menyatakan kesukaan: I like rice. My favourite food is fried rice. Untuk bertanya: Do you like spicy food?",
    keyRules: [
      "Rice, bread, milk, water tidak memakai -s (uncountable).",
      "Menyatakan suka: I like + makanan (I like chicken).",
      "Makanan kesukaan: My favourite food is... / My favourite fruit is a banana.",
      "Bertanya: Do you like...? / Does she like...?",
      "Eat (makan) dan drink (minum): I eat rice. I drink milk."
    ],
    vocabulary: [
      { syriac: "rice", translit: "RAIS", meaning: "nasi", category: "Makanan" },
      { syriac: "bread", translit: "BRED", meaning: "roti", category: "Makanan" },
      { syriac: "noodle", translit: "NU-del", meaning: "mi", category: "Makanan" },
      { syriac: "egg", translit: "EG", meaning: "telur", category: "Makanan" },
      { syriac: "chicken", translit: "CI-ken", meaning: "ayam (daging ayam)", category: "Makanan" },
      { syriac: "fish", translit: "FISY", meaning: "ikan", category: "Makanan" },
      { syriac: "apple", translit: "E-pel", meaning: "apel", category: "Buah" },
      { syriac: "banana", translit: "be-NA-na", meaning: "pisang", category: "Buah" },
      { syriac: "milk", translit: "MILK", meaning: "susu", category: "Minuman" },
      { syriac: "water", translit: "WO-ter", meaning: "air", category: "Minuman" },
      { syriac: "juice", translit: "JUUS", meaning: "jus", category: "Minuman" },
      { syriac: "favourite", translit: "FEI-vrit", meaning: "kesukaan, favorit", category: "Kata Sifat" }
    ],
    examples: [
      { syriac: "I eat rice every day.", translit: "ai IIT RAIS EV-ri DEI", indonesian: "Saya makan nasi setiap hari." },
      { syriac: "She drinks a glass of milk.", translit: "syi DRINGKS e GLAS ov MILK", indonesian: "Dia (perempuan) minum segelas susu." },
      { syriac: "My favourite fruit is a banana.", translit: "mai FEI-vrit FRUT iz e be-NA-na", indonesian: "Buah kesukaan saya adalah pisang." },
      { syriac: "Do you like spicy food?", translit: "du yu LAIK SPAI-si FUD", indonesian: "Apakah kamu suka makanan pedas?" },
      { syriac: "We eat rice and chicken for lunch.", translit: "wi IIT RAIS end CI-ken for LANC", indonesian: "Kami makan nasi dan ayam untuk makan siang." }
    ],
    quizzes: [
      {
        id: 2001,
        question: "I eat ___ every morning.",
        options: ["bread", "breads", "a bread", "breades"],
        correctAnswer: "bread",
        explanation: "Bread adalah kata yang tidak bisa dihitung (uncountable), jadi tidak memakai -s: I eat bread."
      },
      {
        id: 2002,
        question: "She drinks a glass of ___.",
        options: ["milk", "milks", "a milk", "milkes"],
        correctAnswer: "milk",
        explanation: "Milk tidak bisa dihitung, jadi bentuknya tetap milk."
      },
      {
        id: 2003,
        question: "___ you like spicy food?",
        options: ["Do", "Does", "Is", "Are"],
        correctAnswer: "Do",
        explanation: "Pertanyaan Present Simple dengan subjek 'you' memakai 'Do'."
      },
      {
        id: 2004,
        question: "My favourite fruit is ___.",
        options: ["a banana", "bananas", "banana", "bananes"],
        correctAnswer: "a banana",
        explanation: "Satu buah pisang memakai 'a': a banana."
      },
      {
        id: 2005,
        question: "We eat ___ for lunch.",
        options: ["rice and chicken", "rices and chickens", "rice and chickens", "a rice and a chicken"],
        correctAnswer: "rice and chicken",
        explanation: "Rice dan chicken (sebagai makanan) tidak memakai -s."
      }
    ]
  },
  {
    id: 21,
    title: "Olahraga & Hobi",
    titleSyriac: "Sports & Hobbies",
    category: "Level A1",
    summary: "Belajar kosakata tentang olahraga dan hobi, serta cara menceritakan olahraga dan hobi kesukaan dalam bahasa Inggris.",
    introduction: "Setiap orang punya olahraga dan hobi kesukaan. Ada yang suka bermain sepak bola, ada yang suka berenang, membaca, atau menggambar. Dalam modul ini kita belajar cara membicarakannya.",
    content: "Olahraga: football (sepak bola), basketball (bola basket), badminton (bulu tangkis), swimming (berenang), running (berlari), cycling (bersepeda). Hobi: reading (membaca), drawing (menggambar), singing (bernyanyi), dancing (menari), cooking (memasak), chess (catur). Untuk menyatakan hobi, pakai like + kata kerja -ing: I like swimming. My hobby is reading books. Untuk kegiatan olahraga, pakai play + nama olahraga: He plays football. She plays badminton.",
    keyRules: [
      "Play + olahraga: play football, play badminton, play basketball.",
      "Like + kata kerja -ing: I like swimming, I like reading.",
      "My hobby is + kata kerja -ing: My hobby is drawing.",
      "He/she/it + plays: She plays badminton very well.",
      "Swim, run, dan cycle dipakai untuk kegiatan, bukan dengan 'play'."
    ],
    vocabulary: [
      { syriac: "football", translit: "FUT-bol", meaning: "sepak bola", category: "Olahraga" },
      { syriac: "basketball", translit: "BAS-ket-bol", meaning: "bola basket", category: "Olahraga" },
      { syriac: "badminton", translit: "BED-min-ton", meaning: "bulu tangkis", category: "Olahraga" },
      { syriac: "swimming", translit: "SWI-ming", meaning: "berenang", category: "Olahraga" },
      { syriac: "running", translit: "RA-ning", meaning: "berlari", category: "Olahraga" },
      { syriac: "cycling", translit: "SAI-kling", meaning: "bersepeda", category: "Olahraga" },
      { syriac: "reading", translit: "RII-ding", meaning: "membaca", category: "Hobi" },
      { syriac: "drawing", translit: "DRO-ing", meaning: "menggambar", category: "Hobi" },
      { syriac: "singing", translit: "SI-nging", meaning: "bernyanyi", category: "Hobi" },
      { syriac: "dancing", translit: "DEN-sing", meaning: "menari", category: "Hobi" },
      { syriac: "chess", translit: "CES", meaning: "catur", category: "Hobi" },
      { syriac: "cooking", translit: "KU-king", meaning: "memasak", category: "Hobi" }
    ],
    examples: [
      { syriac: "He plays football every Sunday.", translit: "hi PLEIZ FUT-bol EV-ri SAN-dei", indonesian: "Dia (laki-laki) bermain sepak bola setiap hari Minggu." },
      { syriac: "I like swimming.", translit: "ai LAIK SWI-ming", indonesian: "Saya suka berenang." },
      { syriac: "She plays badminton very well.", translit: "syi PLEIZ BED-min-ton VE-ri WEL", indonesian: "Dia (perempuan) bermain bulu tangkis dengan sangat baik." },
      { syriac: "They swim in the swimming pool.", translit: "dei SWIM in di SWI-ming PUL", indonesian: "Mereka berenang di kolam renang." },
      { syriac: "My hobby is reading books.", translit: "mai HO-bi iz RII-ding BUKS", indonesian: "Hobi saya adalah membaca buku." }
    ],
    quizzes: [
      {
        id: 2101,
        question: "He ___ football every Sunday.",
        options: ["play", "plays", "playing", "played"],
        correctAnswer: "plays",
        explanation: "Untuk subjek 'he', kata kerja mendapat -s: play → plays."
      },
      {
        id: 2102,
        question: "I like ___.",
        options: ["swim", "swimming", "swims", "swam"],
        correctAnswer: "swimming",
        explanation: "Setelah 'like', kata kerja memakai bentuk -ing: like swimming."
      },
      {
        id: 2103,
        question: "She ___ badminton very well.",
        options: ["play", "plays", "playing", "played"],
        correctAnswer: "plays",
        explanation: "Untuk subjek 'she', kata kerja mendapat -s: play → plays."
      },
      {
        id: 2104,
        question: "They ___ in the swimming pool.",
        options: ["swim", "swims", "swimming", "swam"],
        correctAnswer: "swim",
        explanation: "Untuk subjek 'they', kata kerja memakai bentuk dasar: swim."
      },
      {
        id: 2105,
        question: "My hobby is ___.",
        options: ["read", "reading", "reads", "to read"],
        correctAnswer: "reading",
        explanation: "Setelah 'My hobby is', kata kerja memakai bentuk -ing: reading."
      }
    ]
  },
  {
    id: 22,
    title: "Mendeskripsikan Orang",
    titleSyriac: "Describing People",
    category: "Level A1",
    summary: "Belajar mendeskripsikan orang dalam bahasa Inggris: tinggi badan, rambut, dan sifat, misalnya 'She is tall and kind' (Dia tinggi dan baik hati).",
    introduction: "Untuk mendeskripsikan seseorang, kita memakai kata sifat (adjective). Kata sifat diletakkan setelah to be (She is tall) atau sebelum kata benda (a tall girl).",
    content: "Ciri fisik: tall (tinggi), short (pendek), big (besar), small (kecil), long hair (rambut panjang), short hair (rambut pendek), curly hair (rambut keriting), straight hair (rambut lurus). Sifat: friendly (ramah), kind (baik hati), smart (pintar), strong (kuat), beautiful (cantik), handsome (tampan). Pola kalimat: He is tall and strong. She has long hair. My teacher is very smart. Kata sifat tidak berubah bentuk untuk jamak: They are tall (bukan talls).",
    keyRules: [
      "To be + kata sifat: She is tall. They are friendly.",
      "Have got + kata benda: She has got long hair.",
      "Kata sifat sebelum kata benda: a kind boy, a smart girl.",
      "Kata sifat tidak memakai -s untuk jamak: They are tall (bukan talls).",
      "Very = sangat: She is very smart."
    ],
    vocabulary: [
      { syriac: "tall", translit: "TOL", meaning: "tinggi", category: "Ciri Fisik" },
      { syriac: "short", translit: "SYORT", meaning: "pendek", category: "Ciri Fisik" },
      { syriac: "big", translit: "BIG", meaning: "besar", category: "Ciri Fisik" },
      { syriac: "small", translit: "SMOL", meaning: "kecil", category: "Ciri Fisik" },
      { syriac: "long hair", translit: "LONG HER", meaning: "rambut panjang", category: "Ciri Fisik" },
      { syriac: "short hair", translit: "SYORT HER", meaning: "rambut pendek", category: "Ciri Fisik" },
      { syriac: "curly hair", translit: "KER-li HER", meaning: "rambut keriting", category: "Ciri Fisik" },
      { syriac: "friendly", translit: "FREN-li", meaning: "ramah", category: "Sifat" },
      { syriac: "kind", translit: "KAIND", meaning: "baik hati", category: "Sifat" },
      { syriac: "smart", translit: "SMART", meaning: "pintar", category: "Sifat" },
      { syriac: "strong", translit: "STRONG", meaning: "kuat", category: "Sifat" },
      { syriac: "beautiful", translit: "BYU-ti-ful", meaning: "cantik", category: "Sifat" }
    ],
    examples: [
      { syriac: "My father is tall and strong.", translit: "mai FA-der iz TOL end STRONG", indonesian: "Ayah saya tinggi dan kuat." },
      { syriac: "She has long hair.", translit: "syi hez LONG HER", indonesian: "Dia (perempuan) berambut panjang." },
      { syriac: "He is a kind boy.", translit: "hi iz e KAIND BOI", indonesian: "Dia adalah anak laki-laki yang baik hati." },
      { syriac: "My teacher is very smart.", translit: "mai TI-cer iz VE-ri SMART", indonesian: "Guru saya sangat pintar." },
      { syriac: "Siti has curly hair.", translit: "SI-ti hez KER-li HER", indonesian: "Siti berambut keriting." }
    ],
    quizzes: [
      {
        id: 2201,
        question: "My father is ___ and strong.",
        options: ["tall", "talls", "talling", "talles"],
        correctAnswer: "tall",
        explanation: "Kata sifat tidak memakai -s: tall, bukan talls."
      },
      {
        id: 2202,
        question: "She has ___ hair.",
        options: ["long", "longs", "longer", "longest"],
        correctAnswer: "long",
        explanation: "Kata sifat bentuk dasarnya adalah 'long': She has long hair."
      },
      {
        id: 2203,
        question: "He is a ___ boy.",
        options: ["kind", "kinds", "kindly", "kinded"],
        correctAnswer: "kind",
        explanation: "Kata sifat sebelum kata benda memakai bentuk dasar: a kind boy."
      },
      {
        id: 2204,
        question: "My teacher is very ___.",
        options: ["smart", "smarts", "smarting", "smartly"],
        correctAnswer: "smart",
        explanation: "Setelah 'very' memakai kata sifat bentuk dasar: very smart."
      },
      {
        id: 2205,
        question: "Siti has ___ hair.",
        options: ["curly", "curlys", "curlies", "curling"],
        correctAnswer: "curly",
        explanation: "Kata sifatnya adalah 'curly': Siti has curly hair."
      }
    ]
  }
];
