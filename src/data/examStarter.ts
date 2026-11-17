export interface LevelExamQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index of option
  explanation: string;
}

export const EXAM_STARTER: LevelExamQuestion[] = [
  {
    question: "Manakah kelompok huruf vokal (vowel) dalam bahasa Inggris?",
    options: [
      "B, C, D, F, G",
      "A, E, I, O, U",
      "K, L, M, N, P",
      "A, B, C, D, E"
    ],
    correctAnswer: 1,
    explanation: "Huruf vokal dalam bahasa Inggris ada lima: A, E, I, O, U."
  },
  {
    question: "Sapaan yang tepat saat bertemu teman di pagi hari adalah...",
    options: [
      "Good night",
      "Goodbye",
      "Good evening",
      "Good morning"
    ],
    correctAnswer: 3,
    explanation: "Good morning berarti 'selamat pagi' dan dipakai di pagi hari."
  },
  {
    question: "Angka 35 dalam bahasa Inggris adalah...",
    options: [
      "Thirty-five",
      "Thirteen",
      "Fifty-three",
      "Thirty-three"
    ],
    correctAnswer: 0,
    explanation: "35 dibaca thirty-five: thirty (30) ditambah five (5)."
  },
  {
    question: "Warna apakah yang dihasilkan dari campuran red + white?",
    options: [
      "Orange",
      "Purple",
      "Brown",
      "Pink"
    ],
    correctAnswer: 3,
    explanation: "Merah (red) dicampur putih (white) menghasilkan merah muda (pink)."
  },
  {
    question: "Siapakah 'grandmother' itu?",
    options: [
      "Ibu",
      "Kakek",
      "Nenek",
      "Saudara perempuan"
    ],
    correctAnswer: 2,
    explanation: "Grandmother berarti nenek, yaitu ibu dari ayah atau ibu kita."
  },
  {
    question: "Binatang yang bisa terbang adalah...",
    options: [
      "Cow",
      "Bird",
      "Fish",
      "Elephant"
    ],
    correctAnswer: 1,
    explanation: "Bird (burung) bisa terbang. Ikan berenang, sapi dan gajah berjalan di darat."
  },
  {
    question: "Benda apa yang kita pakai untuk menghapus tulisan pensil?",
    options: [
      "A ruler",
      "A book",
      "An eraser",
      "A bag"
    ],
    correctAnswer: 2,
    explanation: "Eraser berarti penghapus, dipakai untuk menghapus tulisan pensil."
  },
  {
    question: "Kita melihat dengan...",
    options: [
      "Our eyes (mata kita)",
      "Our ears (telinga kita)",
      "Our nose (hidung kita)",
      "Our hands (tangan kita)"
    ],
    correctAnswer: 0,
    explanation: "Kita melihat dengan mata: 'I see with my eyes.'"
  },
  {
    question: "Apa arti dari kalimat 'I like milk'?",
    options: [
      "Saya tidak suka susu.",
      "Saya mau air.",
      "Saya suka susu.",
      "Saya minum jus."
    ],
    correctAnswer: 2,
    explanation: "'I like milk' berarti 'Saya suka susu.' Milk adalah susu."
  },
  {
    question: "Hari apa yang datang setelah Friday?",
    options: [
      "Thursday",
      "Saturday",
      "Sunday",
      "Monday"
    ],
    correctAnswer: 1,
    explanation: "Urutan hari: Friday (Jumat), lalu Saturday (Sabtu), lalu Sunday (Minggu)."
  }
];
