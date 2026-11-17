import { Module } from "../types";

export const modulesStarter: Module[] = [
  {
    id: 1,
    title: "Alfabet & Bunyi Bahasa Inggris",
    titleSyriac: "The Alphabet & Sounds",
    category: "Starter",
    summary: "Mengenal 26 huruf alfabet bahasa Inggris dari A sampai Z, cara membacanya, dan huruf vokal. Modul ini adalah langkah pertama untuk bisa membaca dan mengeja kata dalam bahasa Inggris.",
    introduction: "Bahasa Inggris memakai alfabet Latin yang sama seperti bahasa Indonesia, tetapi bunyi dan nama hurufnya berbeda. Ada 26 huruf, dan setiap huruf punya nama sendiri saat dieja.",
    content: "Alfabet bahasa Inggris terdiri dari 26 huruf: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z. Lima huruf disebut huruf vokal (vowel): A, E, I, O, U. Sisanya adalah huruf konsonan (consonant). Saat mengeja kata, kita menyebut nama hurufnya, contohnya C-A-T dibaca 'si-ei-ti' dan artinya kucing.",
    keyRules: [
      "Ada 26 huruf dalam alfabet bahasa Inggris.",
      "Huruf vokal ada 5: A, E, I, O, U.",
      "Huruf selain vokal disebut konsonan.",
      "Nama huruf dibaca saat mengeja, contoh: B dibaca 'bi', C dibaca 'si'.",
      "Huruf besar (capital) dipakai di awal kalimat dan untuk nama orang."
    ],
    vocabulary: [
      { syriac: "A - apple", translit: "ei - AP-pel", meaning: "Huruf A, contoh: apple (apel)", category: "Alfabet" },
      { syriac: "B - book", translit: "bi - BUK", meaning: "Huruf B, contoh: book (buku)", category: "Alfabet" },
      { syriac: "C - cat", translit: "si - KAT", meaning: "Huruf C, contoh: cat (kucing)", category: "Alfabet" },
      { syriac: "D - dog", translit: "di - DOG", meaning: "Huruf D, contoh: dog (anjing)", category: "Alfabet" },
      { syriac: "E - egg", translit: "i - EG", meaning: "Huruf E, contoh: egg (telur)", category: "Alfabet" },
      { syriac: "F - fish", translit: "ef - FISH", meaning: "Huruf F, contoh: fish (ikan)", category: "Alfabet" },
      { syriac: "G - grape", translit: "ji - GREIP", meaning: "Huruf G, contoh: grape (anggur)", category: "Alfabet" },
      { syriac: "H - house", translit: "eich - HAUS", meaning: "Huruf H, contoh: house (rumah)", category: "Alfabet" },
      { syriac: "I - ice", translit: "ai - AIS", meaning: "Huruf I, contoh: ice (es)", category: "Alfabet" },
      { syriac: "J - juice", translit: "jei - JUUS", meaning: "Huruf J, contoh: juice (jus)", category: "Alfabet" }
    ],
    examples: [
      { syriac: "A, B, C, D, E.", translit: "ei, bi, si, di, i", indonesian: "Lima huruf pertama alfabet." },
      { syriac: "C-A-T spells cat.", translit: "si-ei-ti spelz KAT", indonesian: "C-A-T mengeja kata cat (kucing)." },
      { syriac: "D-O-G spells dog.", translit: "di-oh-ji spelz DOG", indonesian: "D-O-G mengeja kata dog (anjing)." },
      { syriac: "A, E, I, O, U are vowels.", translit: "ei, i, ai, oh, yu ar VAU-elz", indonesian: "A, E, I, O, U adalah huruf vokal." },
      { syriac: "B is for book.", translit: "bi iz for BUK", indonesian: "B untuk book (buku)." }
    ],
    quizzes: [
      {
        id: 101,
        question: "Berapa jumlah huruf dalam alfabet bahasa Inggris?",
        options: ["21 huruf", "24 huruf", "26 huruf", "28 huruf"],
        correctAnswer: "26 huruf",
        explanation: "Alfabet bahasa Inggris memiliki 26 huruf, dari A sampai Z."
      },
      {
        id: 102,
        question: "Manakah kelompok huruf vokal (vowel) yang benar?",
        options: ["A, E, I, O, U", "B, C, D, F, G", "A, B, C, D, E", "E, F, G, H, I"],
        correctAnswer: "A, E, I, O, U",
        explanation: "Huruf vokal dalam bahasa Inggris ada lima: A, E, I, O, U."
      },
      {
        id: 103,
        question: "Kata 'cat' dimulai dengan huruf...",
        options: ["K", "C", "S", "T"],
        correctAnswer: "C",
        explanation: "Kata cat (kucing) dieja C-A-T, jadi dimulai dengan huruf C."
      },
      {
        id: 104,
        question: "Huruf B dalam bahasa Inggris dibaca...",
        options: ["be", "bi", "ba", "bo"],
        correctAnswer: "bi",
        explanation: "Nama huruf B dibaca 'bi' dalam bahasa Inggris."
      },
      {
        id: 105,
        question: "Kata 'book' dimulai dengan huruf...",
        options: ["P", "K", "B", "D"],
        correctAnswer: "B",
        explanation: "Kata book (buku) dieja B-O-O-K, jadi dimulai dengan huruf B."
      }
    ]
  },
  {
    id: 2,
    title: "Sapaan & Perkenalan",
    titleSyriac: "Greetings & Introductions",
    category: "Starter",
    summary: "Belajar menyapa orang lain dalam bahasa Inggris: hello, good morning, dan goodbye. Kamu juga belajar memperkenalkan diri dan menanyakan kabar dengan sopan.",
    introduction: "Sapaan adalah kata pertama yang kita ucapkan saat bertemu orang lain. Dalam bahasa Inggris, sapaan berubah menurut waktu: pagi, siang, sore, dan malam.",
    content: "Untuk menyapa, kita bisa berkata 'Hello!' atau 'Hi!'. Di pagi hari kita berkata 'Good morning', di siang hari 'Good afternoon', di sore hari 'Good evening', dan sebelum tidur 'Good night'. Untuk berpisah, kita berkata 'Goodbye!' atau 'Bye!'. Untuk memperkenalkan diri, katakan 'My name is ...' lalu sebutkan namamu. Untuk menanyakan kabar, tanyakan 'How are you?' dan jawab 'I am fine, thank you.'",
    keyRules: [
      "Good morning dipakai di pagi hari, good afternoon di siang hari, good evening di sore/malam hari.",
      "Good night dipakai saat berpisah di malam hari atau sebelum tidur.",
      "Untuk memperkenalkan diri: My name is ... (Nama saya ...).",
      "Untuk menanyakan kabar: How are you? (Apa kabar?).",
      "Jawaban kabar: I am fine, thank you. (Saya baik, terima kasih.)"
    ],
    vocabulary: [
      { syriac: "Hello", translit: "he-LOH", meaning: "Halo", category: "Sapaan" },
      { syriac: "Good morning", translit: "gud MOR-ning", meaning: "Selamat pagi", category: "Sapaan" },
      { syriac: "Good afternoon", translit: "gud af-ter-NUN", meaning: "Selamat siang", category: "Sapaan" },
      { syriac: "Good evening", translit: "gud IIV-ning", meaning: "Selamat sore / malam", category: "Sapaan" },
      { syriac: "Good night", translit: "gud NAIT", meaning: "Selamat malam (sebelum tidur)", category: "Sapaan" },
      { syriac: "Goodbye", translit: "gud-BAI", meaning: "Selamat tinggal", category: "Sapaan" },
      { syriac: "Thank you", translit: "THENGK yu", meaning: "Terima kasih", category: "Sopan Santun" },
      { syriac: "Please", translit: "PLIIZ", meaning: "Tolong / Silakan", category: "Sopan Santun" },
      { syriac: "Sorry", translit: "SO-ri", meaning: "Maaf", category: "Sopan Santun" },
      { syriac: "My name is ...", translit: "mai NEIM iz", meaning: "Nama saya ...", category: "Perkenalan" }
    ],
    examples: [
      { syriac: "Hello! My name is Budi.", translit: "he-LOH! mai NEIM iz BU-di", indonesian: "Halo! Nama saya Budi." },
      { syriac: "Good morning, Teacher!", translit: "gud MOR-ning, TII-cher", indonesian: "Selamat pagi, Bu/Bapak Guru!" },
      { syriac: "How are you?", translit: "hau ar yu", indonesian: "Apa kabar?" },
      { syriac: "I am fine, thank you.", translit: "ai am FAIN, THENGK yu", indonesian: "Saya baik, terima kasih." },
      { syriac: "Goodbye! See you tomorrow.", translit: "gud-BAI! sii yu tu-MO-roh", indonesian: "Selamat tinggal! Sampai jumpa besok." }
    ],
    quizzes: [
      {
        id: 201,
        question: "Sapaan yang tepat saat bertemu guru di pagi hari adalah...",
        options: ["Good night", "Good evening", "Good morning", "Goodbye"],
        correctAnswer: "Good morning",
        explanation: "Good morning berarti 'selamat pagi' dan dipakai di pagi hari."
      },
      {
        id: 202,
        question: "Apa arti dari 'Thank you'?",
        options: ["Maaf", "Tolong", "Terima kasih", "Selamat tinggal"],
        correctAnswer: "Terima kasih",
        explanation: "Thank you berarti 'terima kasih'."
      },
      {
        id: 203,
        question: "Jawaban yang tepat untuk 'How are you?' adalah...",
        options: ["My name is Budi.", "I am fine, thank you.", "Goodbye!", "Please."],
        correctAnswer: "I am fine, thank you.",
        explanation: "'How are you?' menanyakan kabar, jawabannya 'I am fine, thank you.' (Saya baik, terima kasih.)"
      },
      {
        id: 204,
        question: "Kalimat untuk memperkenalkan diri adalah...",
        options: ["How are you?", "My name is Siti.", "Good night.", "Thank you."],
        correctAnswer: "My name is Siti.",
        explanation: "'My name is ...' berarti 'Nama saya ...' dan dipakai untuk memperkenalkan diri."
      },
      {
        id: 205,
        question: "Apa arti dari 'Goodbye'?",
        options: ["Selamat pagi", "Selamat tinggal", "Selamat siang", "Apa kabar?"],
        correctAnswer: "Selamat tinggal",
        explanation: "Goodbye berarti 'selamat tinggal', dipakai saat berpisah."
      }
    ]
  },
  {
    id: 3,
    title: "Angka 1–100",
    titleSyriac: "Numbers 1–100",
    category: "Starter",
    summary: "Belajar berhitung dalam bahasa Inggris dari 1 sampai 100. Kamu akan mengenal angka satuan, belasan, puluhan, dan cara menghitung sederhana.",
    introduction: "Angka dipakai setiap hari: untuk umur, jumlah teman, harga, dan jam. Dalam bahasa Inggris, angka 1 sampai 10 adalah dasar dari semua angka lainnya.",
    content: "Angka 1 sampai 10 adalah: one (1), two (2), three (3), four (4), five (5), six (6), seven (7), eight (8), nine (9), ten (10). Angka belasan memakai akhiran -teen, contohnya thirteen (13) dan fifteen (15). Angka puluhan memakai akhiran -ty, contohnya twenty (20), thirty (30), dan fifty (50). Angka 35 dibaca thirty-five: tiga puluh ditambah lima. Angka 100 dibaca one hundred.",
    keyRules: [
      "Angka 1–10 wajib dihafal: one, two, three, four, five, six, seven, eight, nine, ten.",
      "Angka belasan memakai akhiran -teen: thirteen (13), fourteen (14), fifteen (15).",
      "Angka puluhan memakai akhiran -ty: twenty (20), thirty (30), forty (40), fifty (50).",
      "Angka seperti 35 dibaca thirty-five (puluhan + satuan, dipisah tanda hubung).",
      "Angka 100 dibaca one hundred."
    ],
    vocabulary: [
      { syriac: "one", translit: "WAN", meaning: "Satu (1)", category: "Angka" },
      { syriac: "two", translit: "TUU", meaning: "Dua (2)", category: "Angka" },
      { syriac: "three", translit: "THRII", meaning: "Tiga (3)", category: "Angka" },
      { syriac: "four", translit: "FOR", meaning: "Empat (4)", category: "Angka" },
      { syriac: "five", translit: "FAIV", meaning: "Lima (5)", category: "Angka" },
      { syriac: "six", translit: "SIKS", meaning: "Enam (6)", category: "Angka" },
      { syriac: "seven", translit: "SE-ven", meaning: "Tujuh (7)", category: "Angka" },
      { syriac: "eight", translit: "EIT", meaning: "Delapan (8)", category: "Angka" },
      { syriac: "nine", translit: "NAIN", meaning: "Sembilan (9)", category: "Angka" },
      { syriac: "ten", translit: "TEN", meaning: "Sepuluh (10)", category: "Angka" },
      { syriac: "twenty", translit: "TWEN-ti", meaning: "Dua puluh (20)", category: "Angka" },
      { syriac: "one hundred", translit: "wan HAN-dred", meaning: "Seratus (100)", category: "Angka" }
    ],
    examples: [
      { syriac: "I am ten years old.", translit: "ai am TEN yiirz OHLD", indonesian: "Saya berumur sepuluh tahun." },
      { syriac: "I have five pencils.", translit: "ai haf FAIV PEN-silz", indonesian: "Saya punya lima pensil." },
      { syriac: "Five plus seven is twelve.", translit: "FAIV plas SE-ven iz TWELV", indonesian: "Lima tambah tujuh sama dengan dua belas." },
      { syriac: "There are twenty students.", translit: "dher ar TWEN-ti STU-dents", indonesian: "Ada dua puluh siswa." },
      { syriac: "Thirty-five is three tens and five.", translit: "THER-ti-FAIV iz thrii TENZ and FAIV", indonesian: "Tiga puluh lima adalah tiga puluhan dan lima." }
    ],
    quizzes: [
      {
        id: 301,
        question: "Angka 20 dalam bahasa Inggris adalah...",
        options: ["Twelve", "Twenty", "Two", "Ten"],
        correctAnswer: "Twenty",
        explanation: "Twenty berarti dua puluh (20)."
      },
      {
        id: 302,
        question: "Angka 35 dalam bahasa Inggris adalah...",
        options: ["Thirty-five", "Fifty-three", "Thirteen", "Thirty-three"],
        correctAnswer: "Thirty-five",
        explanation: "35 dibaca thirty-five: thirty (30) ditambah five (5)."
      },
      {
        id: 303,
        question: "Five + seven = ...",
        options: ["Ten", "Eleven", "Twelve", "Thirteen"],
        correctAnswer: "Twelve",
        explanation: "Lima tambah tujuh sama dengan dua belas. Twelve berarti 12."
      },
      {
        id: 304,
        question: "Angka 15 dalam bahasa Inggris adalah...",
        options: ["Fifty", "Fifteen", "Five", "Fifty-five"],
        correctAnswer: "Fifteen",
        explanation: "Fifteen berarti lima belas (15). Jangan tertukar dengan fifty (50)."
      },
      {
        id: 305,
        question: "Angka 50 dalam bahasa Inggris adalah...",
        options: ["Fifteen", "Five", "Fifty", "Fifty-five"],
        correctAnswer: "Fifty",
        explanation: "Fifty berarti lima puluh (50). Angka puluhan memakai akhiran -ty."
      }
    ]
  },
  {
    id: 4,
    title: "Warna",
    titleSyriac: "Colors",
    category: "Starter",
    summary: "Belajar nama-nama warna dalam bahasa Inggris dan cara menyebut warna benda di sekitar kita. Warna membuat kalimat menjadi lebih hidup dan jelas.",
    introduction: "Warna ada di mana-mana: langit, daun, baju, dan buah. Dalam bahasa Inggris, warna diletakkan sebelum kata benda, contohnya 'red apple' (apel merah).",
    content: "Warna-warna dasar adalah red (merah), blue (biru), yellow (kuning), green (hijau), orange (jingga), purple (ungu), pink (merah muda), black (hitam), white (putih), dan brown (cokelat). Untuk mengatakan warna sebuah benda, kita memakai pola 'This is ...' atau 'The ... is ...', contohnya 'The sky is blue.' (Langit itu biru.) Mencampur warna menghasilkan warna baru: red + white = pink (merah muda).",
    keyRules: [
      "Warna diletakkan sebelum kata benda: red apple (apel merah), blue pen (pulpen biru).",
      "Untuk menyebut warna benda: The sky is blue. (Langit itu biru.)",
      "Red + white = pink (merah + putih = merah muda).",
      "Yellow + blue = green (kuning + biru = hijau).",
      "Black dan white adalah warna, bukan tidak berwarna."
    ],
    vocabulary: [
      { syriac: "red", translit: "RED", meaning: "Merah", category: "Warna" },
      { syriac: "blue", translit: "BLUU", meaning: "Biru", category: "Warna" },
      { syriac: "yellow", translit: "YE-loh", meaning: "Kuning", category: "Warna" },
      { syriac: "green", translit: "GRIIN", meaning: "Hijau", category: "Warna" },
      { syriac: "orange", translit: "O-rinj", meaning: "Jingga / Oranye", category: "Warna" },
      { syriac: "purple", translit: "PER-pel", meaning: "Ungu", category: "Warna" },
      { syriac: "pink", translit: "PINGK", meaning: "Merah muda", category: "Warna" },
      { syriac: "black", translit: "BLAK", meaning: "Hitam", category: "Warna" },
      { syriac: "white", translit: "WAIT", meaning: "Putih", category: "Warna" },
      { syriac: "brown", translit: "BRAUN", meaning: "Cokelat", category: "Warna" }
    ],
    examples: [
      { syriac: "The apple is red.", translit: "dhi AP-pel iz RED", indonesian: "Apel itu merah." },
      { syriac: "The sky is blue.", translit: "dhi SKAI iz BLUU", indonesian: "Langit itu biru." },
      { syriac: "The banana is yellow.", translit: "dhi ba-NA-na iz YE-loh", indonesian: "Pisang itu kuning." },
      { syriac: "I have a green bag.", translit: "ai haf a GRIIN BAG", indonesian: "Saya punya tas hijau." },
      { syriac: "My cat is white.", translit: "mai KAT iz WAIT", indonesian: "Kucing saya berwarna putih." }
    ],
    quizzes: [
      {
        id: 401,
        question: "Apa arti dari warna 'red'?",
        options: ["Biru", "Kuning", "Merah", "Hijau"],
        correctAnswer: "Merah",
        explanation: "Red berarti merah, seperti warna apel dan bunga mawar."
      },
      {
        id: 402,
        question: "Langit pada hari yang cerah berwarna...",
        options: ["Green", "Blue", "Black", "Brown"],
        correctAnswer: "Blue",
        explanation: "Langit yang cerah berwarna biru (blue)."
      },
      {
        id: 403,
        question: "Daun yang sehat berwarna...",
        options: ["Yellow", "Red", "Green", "Pink"],
        correctAnswer: "Green",
        explanation: "Daun yang sehat berwarna hijau (green)."
      },
      {
        id: 404,
        question: "Pisang yang matang berwarna...",
        options: ["Blue", "Yellow", "Purple", "Black"],
        correctAnswer: "Yellow",
        explanation: "Pisang yang matang berwarna kuning (yellow)."
      },
      {
        id: 405,
        question: "Warna apa yang dihasilkan dari campuran red + white?",
        options: ["Purple", "Orange", "Pink", "Brown"],
        correctAnswer: "Pink",
        explanation: "Merah (red) dicampur putih (white) menghasilkan merah muda (pink)."
      }
    ]
  },
  {
    id: 5,
    title: "Keluarga",
    titleSyriac: "My Family",
    category: "Starter",
    summary: "Belajar menyebut anggota keluarga dalam bahasa Inggris: father, mother, brother, sister, dan kakek-nenek. Kamu juga belajar memperkenalkan keluargamu dengan kalimat sederhana.",
    introduction: "Keluarga adalah orang-orang terdekat kita. Dalam bahasa Inggris, setiap anggota keluarga punya nama sendiri, dan kata 'my' dipakai untuk menunjukkan milik kita: my father (ayah saya).",
    content: "Anggota keluarga inti adalah father (ayah), mother (ibu), brother (saudara laki-laki), dan sister (saudara perempuan). Kakek disebut grandfather dan nenek disebut grandmother. Anak laki-laki disebut son dan anak perempuan disebut daughter. Semua anggota keluarga bersama-sama disebut family. Untuk memperkenalkan keluarga, katakan 'This is my mother.' (Ini ibu saya.) atau 'I have one brother.' (Saya punya satu saudara laki-laki.)",
    keyRules: [
      "Father = ayah, mother = ibu, brother = saudara laki-laki, sister = saudara perempuan.",
      "Grandfather = kakek, grandmother = nenek.",
      "Pakai 'my' untuk milik kita: my father (ayah saya), my sister (saudara perempuan saya).",
      "Untuk memperkenalkan: This is my ... (Ini ... saya).",
      "Untuk jumlah saudara: I have one brother. (Saya punya satu saudara laki-laki.)"
    ],
    vocabulary: [
      { syriac: "father", translit: "FA-dher", meaning: "Ayah", category: "Keluarga" },
      { syriac: "mother", translit: "MA-dher", meaning: "Ibu", category: "Keluarga" },
      { syriac: "brother", translit: "BRA-dher", meaning: "Saudara laki-laki", category: "Keluarga" },
      { syriac: "sister", translit: "SIS-ter", meaning: "Saudara perempuan", category: "Keluarga" },
      { syriac: "grandfather", translit: "GRAND-fa-dher", meaning: "Kakek", category: "Keluarga" },
      { syriac: "grandmother", translit: "GRAND-ma-dher", meaning: "Nenek", category: "Keluarga" },
      { syriac: "son", translit: "SAN", meaning: "Anak laki-laki", category: "Keluarga" },
      { syriac: "daughter", translit: "DO-ter", meaning: "Anak perempuan", category: "Keluarga" },
      { syriac: "baby", translit: "BEI-bi", meaning: "Bayi", category: "Keluarga" },
      { syriac: "family", translit: "FAM-li", meaning: "Keluarga", category: "Keluarga" }
    ],
    examples: [
      { syriac: "This is my father.", translit: "dhis iz mai FA-dher", indonesian: "Ini ayah saya." },
      { syriac: "This is my mother.", translit: "dhis iz mai MA-dher", indonesian: "Ini ibu saya." },
      { syriac: "I have one brother and one sister.", translit: "ai haf wan BRA-dher and wan SIS-ter", indonesian: "Saya punya satu saudara laki-laki dan satu saudara perempuan." },
      { syriac: "My grandmother is kind.", translit: "mai GRAND-ma-dher iz KAIND", indonesian: "Nenek saya baik hati." },
      { syriac: "I love my family.", translit: "ai LAV mai FAM-li", indonesian: "Saya menyayangi keluarga saya." }
    ],
    quizzes: [
      {
        id: 501,
        question: "Apa arti dari 'father'?",
        options: ["Ibu", "Ayah", "Kakek", "Paman"],
        correctAnswer: "Ayah",
        explanation: "Father berarti ayah."
      },
      {
        id: 502,
        question: "Ibu dari ibu kita disebut...",
        options: ["Grandfather", "Mother", "Grandmother", "Sister"],
        correctAnswer: "Grandmother",
        explanation: "Grandmother berarti nenek, yaitu ibu dari ayah atau ibu kita."
      },
      {
        id: 503,
        question: "Apa arti dari 'sister'?",
        options: ["Saudara laki-laki", "Ibu", "Anak perempuan", "Saudara perempuan"],
        correctAnswer: "Saudara perempuan",
        explanation: "Sister berarti saudara perempuan. Saudara laki-laki adalah brother."
      },
      {
        id: 504,
        question: "Kalimat yang benar untuk memperkenalkan ibu adalah...",
        options: ["This is my father.", "This is my mother.", "This is my brother.", "This is my son."],
        correctAnswer: "This is my mother.",
        explanation: "Mother berarti ibu, jadi 'This is my mother.' berarti 'Ini ibu saya.'"
      },
      {
        id: 505,
        question: "Apa arti dari 'family'?",
        options: ["Teman", "Keluarga", "Tetangga", "Guru"],
        correctAnswer: "Keluarga",
        explanation: "Family berarti keluarga."
      }
    ]
  },
  {
    id: 6,
    title: "Binatang",
    titleSyriac: "Animals",
    category: "Starter",
    summary: "Belajar nama-nama binatang dalam bahasa Inggris dan apa yang bisa mereka lakukan. Kamu akan mengenal binatang peliharaan, binatang ternak, dan binatang liar.",
    introduction: "Binatang ada di sekitar kita: di rumah, di sawah, dan di hutan. Setiap binatang punya nama, suara, dan tempat tinggalnya sendiri dalam bahasa Inggris.",
    content: "Binatang peliharaan yang umum adalah cat (kucing), dog (anjing), bird (burung), dan fish (ikan). Binatang ternak antara lain cow (sapi), chicken (ayam), dan duck (bebek). Binatang lain yang perlu dikenal adalah rabbit (kelinci), monkey (monyet), dan elephant (gajah). Untuk mengatakan apa yang bisa dilakukan binatang, kita memakai 'can': 'A bird can fly.' (Burung bisa terbang.) Ikan hidup di air: 'A fish lives in the water.'",
    keyRules: [
      "Cat = kucing, dog = anjing, bird = burung, fish = ikan.",
      "Cow = sapi, chicken = ayam, duck = bebek.",
      "Untuk kemampuan binatang, pakai 'can': A bird can fly. (Burung bisa terbang.)",
      "Untuk tempat tinggal: A fish lives in the water. (Ikan hidup di air.)",
      "Bentuk jamak umumnya tambah -s: cat → cats, dog → dogs."
    ],
    vocabulary: [
      { syriac: "cat", translit: "KAT", meaning: "Kucing", category: "Binatang" },
      { syriac: "dog", translit: "DOG", meaning: "Anjing", category: "Binatang" },
      { syriac: "bird", translit: "BERD", meaning: "Burung", category: "Binatang" },
      { syriac: "fish", translit: "FISH", meaning: "Ikan", category: "Binatang" },
      { syriac: "rabbit", translit: "RA-bit", meaning: "Kelinci", category: "Binatang" },
      { syriac: "cow", translit: "KAU", meaning: "Sapi", category: "Binatang" },
      { syriac: "chicken", translit: "CHI-ken", meaning: "Ayam", category: "Binatang" },
      { syriac: "duck", translit: "DAK", meaning: "Bebek", category: "Binatang" },
      { syriac: "monkey", translit: "MONG-ki", meaning: "Monyet", category: "Binatang" },
      { syriac: "elephant", translit: "E-le-fent", meaning: "Gajah", category: "Binatang" }
    ],
    examples: [
      { syriac: "I have a cat.", translit: "ai haf a KAT", indonesian: "Saya punya seekor kucing." },
      { syriac: "A bird can fly.", translit: "a BERD kan FLAI", indonesian: "Burung bisa terbang." },
      { syriac: "A fish lives in the water.", translit: "a FISH livz in dhi WO-ter", indonesian: "Ikan hidup di air." },
      { syriac: "The dog is big.", translit: "dhi DOG iz BIG", indonesian: "Anjing itu besar." },
      { syriac: "The elephant is grey.", translit: "dhi E-le-fent iz GREI", indonesian: "Gajah itu berwarna abu-abu." }
    ],
    quizzes: [
      {
        id: 601,
        question: "Apa arti dari 'cat'?",
        options: ["Anjing", "Kucing", "Ayam", "Bebek"],
        correctAnswer: "Kucing",
        explanation: "Cat berarti kucing."
      },
      {
        id: 602,
        question: "Binatang yang bersuara 'moo' dan memberi kita susu adalah...",
        options: ["Duck", "Chicken", "Cow", "Rabbit"],
        correctAnswer: "Cow",
        explanation: "Cow (sapi) bersuara 'moo' dan menghasilkan susu."
      },
      {
        id: 603,
        question: "Binatang yang bisa terbang adalah...",
        options: ["Fish", "Bird", "Cow", "Elephant"],
        correctAnswer: "Bird",
        explanation: "Bird (burung) bisa terbang. Ikan berenang, sapi dan gajah berjalan di darat."
      },
      {
        id: 604,
        question: "Di mana ikan hidup?",
        options: ["In the sky (di langit)", "In the water (di air)", "In the tree (di pohon)", "In the house (di rumah)"],
        correctAnswer: "In the water (di air)",
        explanation: "Ikan hidup di air: 'A fish lives in the water.'"
      },
      {
        id: 605,
        question: "Binatang terbesar di antara pilihan berikut adalah...",
        options: ["Rabbit", "Cat", "Dog", "Elephant"],
        correctAnswer: "Elephant",
        explanation: "Elephant (gajah) adalah binatang darat terbesar di antara pilihan tersebut."
      }
    ]
  },
  {
    id: 7,
    title: "Benda di Kelas",
    titleSyriac: "Classroom Objects",
    category: "Starter",
    summary: "Belajar nama benda-benda di kelas dalam bahasa Inggris: book, pencil, pen, dan lain-lain. Kamu juga belajar mengatakan apa kegunaan setiap benda.",
    introduction: "Setiap hari di kelas kita memakai banyak benda: buku untuk membaca, pensil untuk menulis, dan tas untuk membawa peralatan. Semua benda itu punya nama dalam bahasa Inggris.",
    content: "Benda yang dipakai untuk belajar adalah book (buku), pencil (pensil), pen (pulpen), eraser (penghapus), ruler (penggaris), dan crayon (krayon). Benda lain di kelas adalah bag (tas), table (meja), chair (kursi), dan board (papan tulis). Untuk mengatakan kegunaan benda, kita memakai pola 'I write with a pencil.' (Saya menulis dengan pensil.) atau 'I read a book.' (Saya membaca buku.)",
    keyRules: [
      "Book = buku, pencil = pensil, pen = pulpen, eraser = penghapus.",
      "Ruler = penggaris, bag = tas, table = meja, chair = kursi.",
      "Untuk menulis: I write with a pencil. (Saya menulis dengan pensil.)",
      "Untuk membaca: I read a book. (Saya membaca buku.)",
      "Kata 'a' dipakai sebelum benda tunggal: a book, a pencil, a ruler."
    ],
    vocabulary: [
      { syriac: "book", translit: "BUK", meaning: "Buku", category: "Benda di Kelas" },
      { syriac: "pencil", translit: "PEN-sil", meaning: "Pensil", category: "Benda di Kelas" },
      { syriac: "pen", translit: "PEN", meaning: "Pulpen", category: "Benda di Kelas" },
      { syriac: "eraser", translit: "i-REI-ser", meaning: "Penghapus", category: "Benda di Kelas" },
      { syriac: "ruler", translit: "RUU-ler", meaning: "Penggaris", category: "Benda di Kelas" },
      { syriac: "bag", translit: "BAG", meaning: "Tas", category: "Benda di Kelas" },
      { syriac: "table", translit: "TEI-bel", meaning: "Meja", category: "Benda di Kelas" },
      { syriac: "chair", translit: "CHEIR", meaning: "Kursi", category: "Benda di Kelas" },
      { syriac: "board", translit: "BORD", meaning: "Papan tulis", category: "Benda di Kelas" },
      { syriac: "crayon", translit: "KREI-on", meaning: "Krayon", category: "Benda di Kelas" }
    ],
    examples: [
      { syriac: "I read a book.", translit: "ai RIID a BUK", indonesian: "Saya membaca buku." },
      { syriac: "I write with a pencil.", translit: "ai RAIT with a PEN-sil", indonesian: "Saya menulis dengan pensil." },
      { syriac: "This is my bag.", translit: "dhis iz mai BAG", indonesian: "Ini tas saya." },
      { syriac: "I sit on a chair.", translit: "ai SIT on a CHEIR", indonesian: "Saya duduk di kursi." },
      { syriac: "The teacher writes on the board.", translit: "dhi TII-cher RAITS on dhi BORD", indonesian: "Guru menulis di papan tulis." }
    ],
    quizzes: [
      {
        id: 701,
        question: "Apa arti dari 'pencil'?",
        options: ["Pulpen", "Pensil", "Penghapus", "Penggaris"],
        correctAnswer: "Pensil",
        explanation: "Pencil berarti pensil. Pulpen adalah pen."
      },
      {
        id: 702,
        question: "Benda apa yang kita pakai untuk menulis?",
        options: ["A book", "A chair", "A pencil", "A table"],
        correctAnswer: "A pencil",
        explanation: "Kita menulis dengan pensil: 'I write with a pencil.'"
      },
      {
        id: 703,
        question: "Apa arti dari 'eraser'?",
        options: ["Penggaris", "Penghapus", "Krayon", "Tas"],
        correctAnswer: "Penghapus",
        explanation: "Eraser berarti penghapus, dipakai untuk menghapus tulisan pensil."
      },
      {
        id: 704,
        question: "Apa arti dari 'ruler'?",
        options: ["Penghapus", "Pensil", "Penggaris", "Buku"],
        correctAnswer: "Penggaris",
        explanation: "Ruler berarti penggaris, dipakai untuk mengukur dan membuat garis lurus."
      },
      {
        id: 705,
        question: "Kita duduk di atas...",
        options: ["A table", "A chair", "A board", "A bag"],
        correctAnswer: "A chair",
        explanation: "Chair berarti kursi, tempat kita duduk. Table adalah meja."
      }
    ]
  },
  {
    id: 8,
    title: "Tubuhku",
    titleSyriac: "My Body",
    category: "Starter",
    summary: "Belajar nama bagian-bagian tubuh dalam bahasa Inggris: head, eye, nose, hand, dan lain-lain. Kamu juga belajar mengatakan apa yang bisa dilakukan setiap bagian tubuh.",
    introduction: "Tubuh kita punya banyak bagian, dan setiap bagian punya tugasnya: mata untuk melihat, telinga untuk mendengar, dan tangan untuk memegang. Semua bagian tubuh itu punya nama dalam bahasa Inggris.",
    content: "Bagian tubuh di kepala adalah head (kepala), hair (rambut), eye (mata), nose (hidung), mouth (mulut), dan ear (telinga). Bagian tubuh lainnya adalah arm (lengan), hand (tangan), leg (kaki/tungkai), dan foot (kaki/telapak kaki). Untuk mengatakan fungsi bagian tubuh, kita memakai pola 'I see with my eyes.' (Saya melihat dengan mata saya.) atau 'I hear with my ears.' (Saya mendengar dengan telinga saya.)",
    keyRules: [
      "Head = kepala, eye = mata, nose = hidung, mouth = mulut, ear = telinga.",
      "Hand = tangan, foot = kaki, arm = lengan, leg = kaki (tungkai).",
      "Untuk fungsi: I see with my eyes. (Saya melihat dengan mata saya.)",
      "Bentuk jamak: eye → eyes, ear → ears, hand → hands, foot → feet.",
      "Pakai 'my' untuk bagian tubuh sendiri: my head (kepala saya), my hands (tangan saya)."
    ],
    vocabulary: [
      { syriac: "head", translit: "HED", meaning: "Kepala", category: "Tubuh" },
      { syriac: "hair", translit: "HEIR", meaning: "Rambut", category: "Tubuh" },
      { syriac: "eye", translit: "AI", meaning: "Mata", category: "Tubuh" },
      { syriac: "nose", translit: "NOHZ", meaning: "Hidung", category: "Tubuh" },
      { syriac: "mouth", translit: "MAUTH", meaning: "Mulut", category: "Tubuh" },
      { syriac: "ear", translit: "IIR", meaning: "Telinga", category: "Tubuh" },
      { syriac: "arm", translit: "ARM", meaning: "Lengan", category: "Tubuh" },
      { syriac: "hand", translit: "HEND", meaning: "Tangan", category: "Tubuh" },
      { syriac: "leg", translit: "LEG", meaning: "Kaki (tungkai)", category: "Tubuh" },
      { syriac: "foot", translit: "FUT", meaning: "Kaki (telapak kaki)", category: "Tubuh" }
    ],
    examples: [
      { syriac: "I see with my eyes.", translit: "ai SII with mai AIZ", indonesian: "Saya melihat dengan mata saya." },
      { syriac: "I hear with my ears.", translit: "ai HIIR with mai IIRZ", indonesian: "Saya mendengar dengan telinga saya." },
      { syriac: "I have two hands.", translit: "ai haf TUU HENDZ", indonesian: "Saya punya dua tangan." },
      { syriac: "I smell with my nose.", translit: "ai SMEL with mai NOHZ", indonesian: "Saya mencium bau dengan hidung saya." },
      { syriac: "I walk with my feet.", translit: "ai WOK with mai FIIT", indonesian: "Saya berjalan dengan kaki saya." }
    ],
    quizzes: [
      {
        id: 801,
        question: "Apa arti dari 'eye'?",
        options: ["Telinga", "Hidung", "Mata", "Mulut"],
        correctAnswer: "Mata",
        explanation: "Eye berarti mata, dipakai untuk melihat."
      },
      {
        id: 802,
        question: "Kita mendengar dengan...",
        options: ["Our eyes (mata)", "Our ears (telinga)", "Our nose (hidung)", "Our hands (tangan)"],
        correctAnswer: "Our ears (telinga)",
        explanation: "Kita mendengar dengan telinga: 'I hear with my ears.'"
      },
      {
        id: 803,
        question: "Apa arti dari 'nose'?",
        options: ["Mulut", "Mata", "Hidung", "Kepala"],
        correctAnswer: "Hidung",
        explanation: "Nose berarti hidung, dipakai untuk mencium bau dan bernapas."
      },
      {
        id: 804,
        question: "Berapa jumlah tangan yang dimiliki manusia?",
        options: ["One hand (satu tangan)", "Two hands (dua tangan)", "Three hands (tiga tangan)", "Four hands (empat tangan)"],
        correctAnswer: "Two hands (dua tangan)",
        explanation: "Manusia punya dua tangan: 'I have two hands.'"
      },
      {
        id: 805,
        question: "Apa arti dari 'foot'?",
        options: ["Tangan", "Lengan", "Kaki", "Kepala"],
        correctAnswer: "Kaki",
        explanation: "Foot berarti kaki (telapak kaki). Bentuk jamaknya adalah feet."
      }
    ]
  },
  {
    id: 9,
    title: "Makanan & Minuman",
    titleSyriac: "Food & Drinks",
    category: "Starter",
    summary: "Belajar nama makanan dan minuman dalam bahasa Inggris: rice, bread, milk, water, dan buah-buahan. Kamu juga belajar mengatakan makanan kesukaanmu.",
    introduction: "Setiap hari kita makan dan minum. Makanan memberi kita energi, dan minuman menghilangkan haus. Dalam bahasa Inggris, kita bisa menyebut makanan kesukaan dengan kalimat 'I like ...'.",
    content: "Makanan pokok adalah rice (nasi) dan bread (roti). Makanan lain yang umum adalah egg (telur), chicken (ayam), apple (apel), banana (pisang), dan cake (kue). Minuman yang umum adalah water (air), milk (susu), dan juice (jus). Untuk mengatakan kesukaan, katakan 'I like rice.' (Saya suka nasi.) atau 'I do not like ...' jika tidak suka. Untuk meminta makanan, katakan 'I want some water, please.' (Saya mau air, tolong.)",
    keyRules: [
      "Rice = nasi, bread = roti, egg = telur, milk = susu, water = air.",
      "Untuk kesukaan: I like ... (Saya suka ...).",
      "Untuk tidak suka: I do not like ... (Saya tidak suka ...).",
      "Untuk meminta dengan sopan: I want some water, please. (Saya mau air, tolong.)",
      "Kata 'some' dipakai untuk jumlah yang tidak pasti: some rice (sedikit nasi)."
    ],
    vocabulary: [
      { syriac: "rice", translit: "RAIS", meaning: "Nasi", category: "Makanan" },
      { syriac: "bread", translit: "BRED", meaning: "Roti", category: "Makanan" },
      { syriac: "egg", translit: "EG", meaning: "Telur", category: "Makanan" },
      { syriac: "milk", translit: "MILK", meaning: "Susu", category: "Minuman" },
      { syriac: "water", translit: "WO-ter", meaning: "Air", category: "Minuman" },
      { syriac: "juice", translit: "JUUS", meaning: "Jus", category: "Minuman" },
      { syriac: "apple", translit: "AP-pel", meaning: "Apel", category: "Makanan" },
      { syriac: "banana", translit: "ba-NA-na", meaning: "Pisang", category: "Makanan" },
      { syriac: "chicken", translit: "CHI-ken", meaning: "Ayam (daging ayam)", category: "Makanan" },
      { syriac: "cake", translit: "KEIK", meaning: "Kue", category: "Makanan" }
    ],
    examples: [
      { syriac: "I like rice.", translit: "ai LAIK RAIS", indonesian: "Saya suka nasi." },
      { syriac: "I drink water every day.", translit: "ai DRINGK WO-ter EV-ri DEI", indonesian: "Saya minum air setiap hari." },
      { syriac: "I want some milk, please.", translit: "ai WONT sam MILK, PLIIZ", indonesian: "Saya mau susu, tolong." },
      { syriac: "The apple is sweet.", translit: "dhi AP-pel iz SWIIT", indonesian: "Apel itu manis." },
      { syriac: "I do not like cake.", translit: "ai du NOT LAIK KEIK", indonesian: "Saya tidak suka kue." }
    ],
    quizzes: [
      {
        id: 901,
        question: "Apa arti dari 'rice'?",
        options: ["Roti", "Nasi", "Susu", "Telur"],
        correctAnswer: "Nasi",
        explanation: "Rice berarti nasi, makanan pokok di Indonesia."
      },
      {
        id: 902,
        question: "Apa arti dari 'milk'?",
        options: ["Air", "Jus", "Susu", "Kue"],
        correctAnswer: "Susu",
        explanation: "Milk berarti susu, minuman yang baik untuk tulang."
      },
      {
        id: 903,
        question: "Minuman apa yang kita minum saat haus?",
        options: ["Cake", "Bread", "Water", "Rice"],
        correctAnswer: "Water",
        explanation: "Water (air) adalah minuman yang kita minum saat haus."
      },
      {
        id: 904,
        question: "Apa arti dari 'apple'?",
        options: ["Pisang", "Apel", "Anggur", "Jeruk"],
        correctAnswer: "Apel",
        explanation: "Apple berarti apel, buah yang berwarna merah atau hijau."
      },
      {
        id: 905,
        question: "Apa arti dari 'bread'?",
        options: ["Nasi", "Kue", "Roti", "Telur"],
        correctAnswer: "Roti",
        explanation: "Bread berarti roti."
      }
    ]
  },
  {
    id: 10,
    title: "Hari, Bulan & Musim",
    titleSyriac: "Days, Months & Seasons",
    category: "Starter",
    summary: "Belajar nama hari dalam seminggu dan bulan dalam setahun dalam bahasa Inggris. Kamu juga mengenal musim hujan dan musim kemarau di Indonesia serta empat musim di negara lain.",
    introduction: "Waktu berjalan dalam hari, minggu, bulan, dan tahun. Ada 7 hari dalam seminggu dan 12 bulan dalam setahun. Nama hari dan bulan dalam bahasa Inggris selalu ditulis dengan huruf besar.",
    content: "Tujuh hari dalam seminggu adalah Monday (Senin), Tuesday (Selasa), Wednesday (Rabu), Thursday (Kamis), Friday (Jumat), Saturday (Sabtu), dan Sunday (Minggu). Bulan pertama adalah January (Januari) dan bulan terakhir adalah December (Desember). Untuk menanyakan hari, tanyakan 'What day is today?' dan jawab 'Today is Monday.' (Hari ini hari Senin.) Di Indonesia ada dua musim: rainy season (musim hujan) dan dry season (musim kemarau). Di negara lain ada empat musim: spring (musim semi), summer (musim panas), autumn (musim gugur), dan winter (musim dingin).",
    keyRules: [
      "Ada 7 hari dalam seminggu dan 12 bulan dalam setahun.",
      "Nama hari dan bulan selalu diawali huruf besar: Monday, January.",
      "Untuk menanyakan hari: What day is today? (Hari ini hari apa?)",
      "Untuk menjawab: Today is Monday. (Hari ini hari Senin.)",
      "Di Indonesia ada dua musim: rainy season (musim hujan) dan dry season (musim kemarau)."
    ],
    vocabulary: [
      { syriac: "Monday", translit: "MAN-dei", meaning: "Senin", category: "Hari" },
      { syriac: "Tuesday", translit: "TYUUZ-dei", meaning: "Selasa", category: "Hari" },
      { syriac: "Wednesday", translit: "WENZ-dei", meaning: "Rabu", category: "Hari" },
      { syriac: "Thursday", translit: "THERZ-dei", meaning: "Kamis", category: "Hari" },
      { syriac: "Friday", translit: "FRAI-dei", meaning: "Jumat", category: "Hari" },
      { syriac: "Saturday", translit: "SA-ter-dei", meaning: "Sabtu", category: "Hari" },
      { syriac: "Sunday", translit: "SAN-dei", meaning: "Minggu", category: "Hari" },
      { syriac: "January", translit: "JAN-yu-e-ri", meaning: "Januari", category: "Bulan" },
      { syriac: "February", translit: "FEB-ru-e-ri", meaning: "Februari", category: "Bulan" },
      { syriac: "December", translit: "di-SEM-ber", meaning: "Desember", category: "Bulan" }
    ],
    examples: [
      { syriac: "Today is Monday.", translit: "tu-DEI iz MAN-dei", indonesian: "Hari ini hari Senin." },
      { syriac: "Tomorrow is Tuesday.", translit: "tu-MO-roh iz TYUUZ-dei", indonesian: "Besok hari Selasa." },
      { syriac: "Sunday is a holiday.", translit: "SAN-dei iz a HO-li-dei", indonesian: "Hari Minggu adalah hari libur." },
      { syriac: "January is the first month.", translit: "JAN-yu-e-ri iz dhi FERST MANTH", indonesian: "Januari adalah bulan pertama." },
      { syriac: "It is rainy season now.", translit: "it iz REI-ni SII-zen nau", indonesian: "Sekarang musim hujan." }
    ],
    quizzes: [
      {
        id: 1001,
        question: "Apa arti dari 'Sunday'?",
        options: ["Sabtu", "Senin", "Minggu", "Jumat"],
        correctAnswer: "Minggu",
        explanation: "Sunday berarti hari Minggu."
      },
      {
        id: 1002,
        question: "Hari setelah Monday adalah...",
        options: ["Sunday", "Tuesday", "Wednesday", "Friday"],
        correctAnswer: "Tuesday",
        explanation: "Urutan hari: Monday (Senin), lalu Tuesday (Selasa)."
      },
      {
        id: 1003,
        question: "Bulan 'December' dalam bahasa Indonesia adalah...",
        options: ["Januari", "Februari", "November", "Desember"],
        correctAnswer: "Desember",
        explanation: "December berarti Desember, bulan terakhir dalam setahun."
      },
      {
        id: 1004,
        question: "Berapa jumlah hari dalam satu minggu?",
        options: ["5 hari", "6 hari", "7 hari", "8 hari"],
        correctAnswer: "7 hari",
        explanation: "Satu minggu terdiri dari 7 hari: Monday sampai Sunday."
      },
      {
        id: 1005,
        question: "Bulan pertama dalam setahun adalah...",
        options: ["December", "February", "January", "March"],
        correctAnswer: "January",
        explanation: "January (Januari) adalah bulan pertama dalam setahun."
      }
    ]
  }
];
