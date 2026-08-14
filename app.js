/**
 * PAW PATROL MANDARIN ADVENTURE - MH 5 UNIT 10: 候鸟千里飞
 * Features:
 * 1. Skye's Sky Flight: Story Reader & Pup Pad Master Audio Player + Sentence TTS
 * 2. Rubble's Hanzi Construction: Stroke Order Animator + Tianzige Interactive Pad
 * 3. Rocky's Puzzle Match: Word-Picture Matching Mini Games (Connect & Memory Flip)
 * 4. Chase's Police Quiz: Audio-Enabled Multiple Choice Quiz with Voice on Every Question & Option
 */

// =============================================================================
// GLOBAL DATA & VOCABULARY
// =============================================================================

const VOCAB_DATA = [
  { id: 1, zh: "候鸟", py: "hòuniǎo", en: "migratory bird", idn: "burung migrasi", type: "main", char: "候", radical: "亻", strokes: 10 },
  { id: 2, zh: "里", py: "lǐ", en: "li (distance unit ~500m)", idn: "li (satuan jarak Tiongkok ~500 meter)", type: "main", char: "里", radical: "里", strokes: 7 },
  { id: 3, zh: "季节", py: "jìjié", en: "season", idn: "musim", type: "main", char: "季", radical: "禾", strokes: 8 },
  { id: 4, zh: "秋天", py: "qiūtiān", en: "autumn", idn: "musim gugur", type: "main", char: "秋", radical: "禾", strokes: 9 },
  { id: 5, zh: "入", py: "rù", en: "to enter", idn: "masuk", type: "main", char: "入", radical: "入", strokes: 2 },
  { id: 6, zh: "冬天", py: "dōngtiān", en: "winter", idn: "musim dingin", type: "main", char: "冬", radical: "夂", strokes: 5 },
  { id: 7, zh: "越来越", py: "yuè lái yuè", en: "becoming / more and more", idn: "semakin lama semakin...", type: "main", char: "越", radical: "走", strokes: 12 },
  { id: 8, zh: "冷", py: "lěng", en: "cold", idn: "dingin", type: "main", char: "冷", radical: "冫", strokes: 7 },
  { id: 9, zh: "北方", py: "běifāng", en: "north / northern region", idn: "wilayah utara", type: "main", char: "北", radical: "匕", strokes: 5 },
  { id: 10, zh: "公里", py: "gōnglǐ", en: "kilometre", idn: "kilometer", type: "main", char: "公", radical: "八", strokes: 4 },
  { id: 11, zh: "南方", py: "nánfāng", en: "south / southern region", idn: "wilayah selatan", type: "main", char: "南", radical: "十", strokes: 9 },
  { id: 12, zh: "国外", py: "guówài", en: "abroad / overseas", idn: "luar negeri", type: "main", char: "国", radical: "囗", strokes: 8 },
  { id: 13, zh: "春天", py: "chūntiān", en: "spring", idn: "musim semi", type: "main", char: "春", radical: "日", strokes: 9 },
  { id: 14, zh: "暖和", py: "nuǎnhuo", en: "warm", idn: "hangat", type: "main", char: "暖", radical: "日", strokes: 13 },
  { id: 15, zh: "然后", py: "ránhòu", en: "then / afterwards", idn: "kemudian / setelah itu", type: "main", char: "然", radical: "灬", strokes: 12 },
  { id: 16, zh: "种", py: "zhǒng", en: "kind / type / species", idn: "jenis / macam", type: "main", char: "种", radical: "禾", strokes: 9 },
  // Supplementary Vocab
  { id: 17, zh: "中国", py: "Zhōngguó", en: "China", idn: "Tiongkok / China", type: "extra", char: "中", radical: "丨", strokes: 4 },
  { id: 18, zh: "夏季 (夏天)", py: "xiàjì (xiàtiān)", en: "summer", idn: "musim panas", type: "extra", char: "夏", radical: "夂", strokes: 10 },
  { id: 19, zh: "只", py: "zhǐ", en: "only", idn: "hanya / cuma", type: "extra", char: "只", radical: "口", strokes: 5 },
  { id: 20, zh: "雨季", py: "yǔjì", en: "rainy season", idn: "musim hujan", type: "extra", char: "雨", radical: "雨", strokes: 8 },
  { id: 21, zh: "旱季", py: "hànjì", en: "dry season", idn: "musim kemarau", type: "extra", char: "旱", radical: "日", strokes: 7 },
  { id: 22, zh: "榴莲", py: "liúlián", en: "durian", idn: "durian", type: "extra", char: "榴", radical: "木", strokes: 14 },
  { id: 23, zh: "等等", py: "děng děng", en: "et cetera / and so on", idn: "dan lain-lain / dsb.", type: "extra", char: "等", radical: "竹", strokes: 12 },
  { id: 24, zh: "算", py: "suàn", en: "to count / consider", idn: "menghitung / terhitung", type: "extra", char: "算", radical: "竹", strokes: 14 }
];

const STROKE_CHAR_LIST = [
  { char: "候", py: "hòu", meaning: "Menunggu / Musim (候鸟)", strokes: 10, radical: "亻 (Orang)" },
  { char: "鸟", py: "niǎo", meaning: "Burung", strokes: 5, radical: "鸟 (Burung)" },
  { char: "季", py: "jì", meaning: "Musim (季节)", strokes: 8, radical: "禾 (Padi)" },
  { char: "节", py: "jié", meaning: "Bagian / Festival (季节)", strokes: 5, radical: "艹 (Rumput)" },
  { char: "秋", py: "qiū", meaning: "Musim Gugur (秋天)", strokes: 9, radical: "禾 (Padi)" },
  { char: "冬", py: "dōng", meaning: "Musim Dingin (冬天)", strokes: 5, radical: "夂 (Melangkah)" },
  { char: "越", py: "yuè", meaning: "Semakin / Melompati (越来越)", strokes: 12, radical: "走 (Berjalan)" },
  { char: "差", py: "chà", meaning: "Kurang / Hampir (差点儿)", strokes: 9, radical: "羊 (Kambing)" },
  { char: "冷", py: "lěng", meaning: "Dingin", strokes: 7, radical: "冫 (Es)" },
  { char: "暖", py: "nuǎn", meaning: "Hangat (暖和)", strokes: 13, radical: "日 (Matahari)" },
  { char: "算", py: "suàn", meaning: "Menghitung / Dihitung (不算)", strokes: 14, radical: "竹 (Bambu)" },
  { char: "南", py: "nán", meaning: "Selatan (南方)", strokes: 9, radical: "十 (Sepuluh)" }
];

// Matching Game Data
const MATCHING_ITEMS = [
  { id: "match-1", zh: "秋天", py: "qiūtiān", idn: "Musim gugur (Daun berguguran)", img: "assets/images/image21.png" },
  { id: "match-2", zh: "生病吃药", py: "shēngbìng chīyào", idn: "Minum obat agar membaik", img: "assets/images/image23.png" },
  { id: "match-3", zh: "四个季节", py: "sì gè jìjié", idn: "Empat musim (Semi, Panas, Gugur, Dingin)", img: "assets/images/image39.png" },
  { id: "match-4", zh: "候鸟千里飞", py: "hòuniǎo qiānlǐ fēi", idn: "Burung migrasi terbang ribuan mil", img: "assets/images/image4.png" },
  { id: "match-5", zh: "走十二公里", py: "zǒu shí'èr gōnglǐ", idn: "Berjalan sejauh 12 kilometer", img: "assets/images/image16.png" },
  { id: "match-6", zh: "差点儿迟到", py: "chàdiǎnr chídào", idn: "Hampir terlambat", img: "assets/images/image30.png" }
];

// Multiple Choice Quiz Questions
const QUIZ_QUESTIONS = [
  // --- Category: listening_e1 (Track 34) ---
  {
    id: "q1",
    cat: "listening_e1",
    catName: "E.1 Tingli Gambar (Track 34)",
    titleZh: "听录音，判断第1幅图片的内容是否正确：",
    titlePy: "Tīng lùyīn, pànduàn dì-1 fú túpiàn de nèiróng shìfǒu zhèngquè:",
    titleIdn: "Dengarkan rekaman Track 34, tentukan apakah gambar nomor 1 sesuai:",
    image: "assets/images/image21.png",
    hasAudioTrack: "assets/audio/media2.mp3",
    trackLabel: "Putar Track 34 (E.1)",
    options: [
      { letter: "A", zh: "对了 (Benar) ✓ - 秋天到了，树叶越来越黄了", py: "Duì le - Qiūtiān dào le, shùyè yuè lái yuè huáng le.", idn: "Musim gugur tiba, daun semakin menguning", isCorrect: true },
      { letter: "B", zh: "错了 (Salah) ✗ - 这是春天的景色", py: "Cuò le - Zhè shì chūntiān de jǐngsè.", idn: "Ini pemandangan musim semi", isCorrect: false }
    ],
    explanation: "Pernyataan sesuai dengan gambar musim gugur di mana daun-daun berguguran dan cuaca mendingin."
  },
  {
    id: "q2",
    cat: "listening_e1",
    catName: "E.1 Tingli Gambar (Track 34)",
    titleZh: "听录音，根据第2幅图判断句子：",
    titlePy: "Tīng lùyīn, gēnjù dì-2 fú tú pànduàn jùzi:",
    titleIdn: "Dengarkan rekaman, periksa pernyataan untuk gambar nomor 2 (anak minum obat):",
    image: "assets/images/image23.png",
    hasAudioTrack: "assets/audio/media2.mp3",
    trackLabel: "Putar Track 34 (E.1)",
    options: [
      { letter: "A", zh: "他喝了药，病越来越好了。", py: "Tā hē le yào, bìng yuè lái yuè hǎo le.", idn: "Dia minum obat, penyakitnya semakin membaik.", isCorrect: true },
      { letter: "B", zh: "他不吃药，生病了。", py: "Tā bù chī yào, shēngbìng le.", idn: "Dia tidak minum obat, dia sakit.", isCorrect: false }
    ],
    explanation: "Gambar menunjukkan anak yang meminum obat sehingga kondisinya semakin membaik (越来越好)."
  },

  // --- Category: listening_e2 (Track 35) ---
  {
    id: "q3",
    cat: "listening_e2",
    catName: "E.2 Tingli Pilihan Ganda (Track 35)",
    titleZh: "第1题：听录音选择正确答案 (Track 35)",
    titlePy: "Dì-1 tí: Tīng lùyīn xuǎnzé zhèngquè dá'àn",
    titleIdn: "Soal No. 1: Dengarkan rekaman dan pilih jawaban yang benar:",
    hasAudioTrack: "assets/audio/media3.mp3",
    trackLabel: "Putar Track 35 (E.2)",
    options: [
      { letter: "A", zh: "他们有一样的爱好。", py: "Tāmen yǒu yíyàng de àihào.", idn: "Mereka memiliki hobi yang sama.", isCorrect: false },
      { letter: "B", zh: "他们是双胞胎。", py: "Tāmen shì shuāngbāotāi.", idn: "Mereka adalah anak kembar.", isCorrect: true },
      { letter: "C", zh: "他们是好朋友。", py: "Tāmen shì hǎo péngyou.", idn: "Mereka adalah teman baik.", isCorrect: false }
    ],
    explanation: "Sesuai rekaman audio Track 35 soal no. 1, jawabannya adalah B (双胞胎 - kembar)."
  },
  {
    id: "q4",
    cat: "listening_e2",
    catName: "E.2 Tingli Pilihan Ganda (Track 35)",
    titleZh: "第2题：听录音选择正确答案 (Track 35)",
    titlePy: "Dì-2 tí: Tīng lùyīn xuǎnzé zhèngquè dá'àn",
    titleIdn: "Soal No. 2: Dengarkan rekaman dan pilih jawaban yang benar:",
    hasAudioTrack: "assets/audio/media3.mp3",
    trackLabel: "Putar Track 35 (E.2)",
    options: [
      { letter: "A", zh: "找妈妈", py: "Zhǎo māma", idn: "Mencari ibu", isCorrect: false },
      { letter: "B", zh: "喝牛奶", py: "Hē niúnǎi", idn: "Minum susu", isCorrect: true },
      { letter: "C", zh: "找爸爸", py: "Zhǎo bàba", idn: "Mencari ayah", isCorrect: false }
    ],
    explanation: "Sesuai rekaman audio Track 35 soal no. 2, jawabannya adalah B (喝牛奶 - minum susu)."
  },
  {
    id: "q5",
    cat: "listening_e2",
    catName: "E.2 Tingli Pilihan Ganda (Track 35)",
    titleZh: "第3题：听录音选择正确答案 (Track 35)",
    titlePy: "Dì-3 tí: Tīng lùyīn xuǎnzé zhèngquè dá'àn",
    titleIdn: "Soal No. 3: Dengarkan rekaman dan pilih jawaban yang benar:",
    hasAudioTrack: "assets/audio/media3.mp3",
    trackLabel: "Putar Track 35 (E.2)",
    options: [
      { letter: "A", zh: "他喜欢跑步。", py: "Tā xǐhuan pǎobù.", idn: "Dia suka berlari.", isCorrect: false },
      { letter: "B", zh: "他快要迟到了。", py: "Tā kuài yào chídào le.", idn: "Dia hampir terlambat.", isCorrect: true },
      { letter: "C", zh: "他迟到了。", py: "Tā chídào le.", idn: "Dia sudah terlambat.", isCorrect: false }
    ],
    explanation: "Sesuai rekaman audio Track 35 soal no. 3, jawabannya adalah B (他快要迟到了 - dia hampir terlambat)."
  },
  {
    id: "q6",
    cat: "listening_e2",
    catName: "E.2 Tingli Pilihan Ganda (Track 35)",
    titleZh: "第4题：听录音选择正确答案 (Track 35)",
    titlePy: "Dì-4 tí: Tīng lùyīn xuǎnzé zhèngquè dá'àn",
    titleIdn: "Soal No. 4: Dengarkan rekaman dan pilih jawaban yang benar:",
    hasAudioTrack: "assets/audio/media3.mp3",
    trackLabel: "Putar Track 35 (E.2)",
    options: [
      { letter: "A", zh: "我要去商店。", py: "Wǒ yào qù shāngdiàn.", idn: "Saya mau pergi ke toko.", isCorrect: false },
      { letter: "B", zh: "我要去服装店和超市。", py: "Wǒ yào qù fúzhuāngdiàn hé chāoshì.", idn: "Saya mau pergi ke toko pakaian dan supermarket.", isCorrect: true },
      { letter: "C", zh: "我要去书店和超市。", py: "Wǒ yào qù shūdiàn hé chāoshì.", idn: "Saya mau pergi ke toko buku dan supermarket.", isCorrect: false }
    ],
    explanation: "Sesuai rekaman audio Track 35 soal no. 4, jawabannya adalah B (去服装店和超市)."
  },
  {
    id: "q7",
    cat: "listening_e2",
    catName: "E.2 Tingli Pilihan Ganda (Track 35)",
    titleZh: "第5题：听录音选择正确答案 (Track 35)",
    titlePy: "Dì-5 tí: Tīng lùyīn xuǎnzé zhèngquè dá'àn",
    titleIdn: "Soal No. 5: Dengarkan rekaman dan pilih jawaban yang benar:",
    hasAudioTrack: "assets/audio/media3.mp3",
    trackLabel: "Putar Track 35 (E.2)",
    options: [
      { letter: "A", zh: "秋天来了。", py: "Qiūtiān lái le.", idn: "Musim gugur telah tiba.", isCorrect: false },
      { letter: "B", zh: "春天来了。", py: "Chūntiān lái le.", idn: "Musim semi telah tiba.", isCorrect: false },
      { letter: "C", zh: "冬天来了。", py: "Dōngtiān lái le.", idn: "Musim dingin telah tiba.", isCorrect: true }
    ],
    explanation: "Sesuai rekaman audio Track 35 soal no. 5, jawabannya adalah C (冬天来了 - musim dingin tiba)."
  },

  // --- Category: reading (Pemahaman Teks Cerita) ---
  {
    id: "q8",
    cat: "reading",
    catName: "Pemahaman Teks Cerita",
    titleZh: "在中国这样一年四季的国家，都有哪些季节？",
    titlePy: "Zài Zhōngguó zhèyàng yì nián sì jì de guójiā, dōu yǒu nǎxiē jìjié?",
    titleIdn: "Di negara empat musim seperti Tiongkok, ada musim apa saja?",
    options: [
      { letter: "A", zh: "春季、夏季、秋季、冬季", py: "Chūnjì, xiàjì, qiūjì, dōngjì", idn: "Musim semi, musim panas, musim gugur, musim dingin", isCorrect: true },
      { letter: "B", zh: "雨季和旱季", py: "Yǔjì hé hànjì", idn: "Musim hujan dan musim kemarau", isCorrect: false },
      { letter: "C", zh: "芒果季和榴莲季", py: "Mángguǒjì hé liúliánjì", idn: "Musim mangga dan musim durian", isCorrect: false }
    ],
    explanation: "Di Tiongkok ada 4 musim: 春季 (semi), 夏季 (panas), 秋季 (gugur), dan 冬季 (dingin)."
  },
  {
    id: "q9",
    cat: "reading",
    catName: "Pemahaman Teks Cerita",
    titleZh: "印尼一共有几个季节？",
    titlePy: "Yìnní yí gòng yǒu jǐ gè jìjié?",
    titleIdn: "Indonesia secara resmi memiliki berapa musim?",
    options: [
      { letter: "A", zh: "四个季节", py: "Sì gè jìjié", idn: "4 musim", isCorrect: false },
      { letter: "B", zh: "只有两个季节（雨季和旱季）", py: "Zhǐ yǒu liǎng gè jìjié (yǔjì hé hànjì)", idn: "Hanya ada 2 musim (hujan dan kemarau)", isCorrect: true },
      { letter: "C", zh: "三个季节", py: "Sān gè jìjié", idn: "3 musim", isCorrect: false }
    ],
    explanation: "Berdasarkan dialog Lili, di Indonesia hanya ada 2 musim: 雨季 (musim hujan) dan 旱季 (musim kemarau)."
  },
  {
    id: "q10",
    cat: "reading",
    catName: "Pemahaman Teks Cerita",
    titleZh: "什么是“候鸟”？",
    titlePy: "Shénme shì 'hòuniǎo'?",
    titleIdn: "Apa yang dimaksud dengan '候鸟' (burung migrasi)?",
    options: [
      { letter: "A", zh: "在不同季节飞到另外一个地方，然后再飞回来的鸟", py: "Zài bùtóng de jìjié fēi dào lìngwài yí gè dìfang, ránhòu zài fēi huílái de niǎo", idn: "Burung yang pada musim berbeda terbang ke tempat lain lalu terbang kembali lagi", isCorrect: true },
      { letter: "B", zh: "从来不飞的鸟", py: "Cónglái bù fēi de niǎo", idn: "Burung yang tidak pernah terbang", isCorrect: false },
      { letter: "C", zh: "只生活在北方的鸟", py: "Zhǐ shēnghuó zài běifāng de niǎo", idn: "Burung yang hanya hidup di utara", isCorrect: false }
    ],
    explanation: "候鸟 adalah burung yang berpindah tempat mencari cuaca hangat di musim dingin dan kembali lagi saat musim semi tiba."
  },
  {
    id: "q11",
    cat: "reading",
    catName: "Pemahaman Teks Cerita",
    titleZh: "秋天转入冬天时，候鸟往哪个方向飞？",
    titlePy: "Qiūtiān zhuǎn rù dōngtiān shí, hòuniǎo wǎng nǎge fāngxiàng fēi?",
    titleIdn: "Ketika musim gugur berganti ke musim dingin, burung migrasi terbang ke arah mana?",
    options: [
      { letter: "A", zh: "从北方往南方飞", py: "Cóng běifāng wǎng nánfāng fēi", idn: "Dari utara terbang menuju ke selatan (tempat yang lebih hangat)", isCorrect: true },
      { letter: "B", zh: "从南方往北方飞", py: "Cóng nánfāng wǎng běifāng fēi", idn: "Dari selatan terbang menuju ke utara", isCorrect: false },
      { letter: "C", zh: "只在原地飞", py: "Zhǐ zài yuándì fēi", idn: "Hanya berputar di tempat semula", isCorrect: false }
    ],
    explanation: "Saat cuaca utara menjadi sangat dingin, burung migrasi terbang dari utara (北方) menuju selatan (南方)."
  },

  // --- Category: grammar (Tata Bahasa & Kosakata) ---
  {
    id: "q12",
    cat: "grammar",
    catName: "Tata Bahasa & Kosakata",
    titleZh: "选词填空：小宝宝____看到妈妈____笑了。",
    titlePy: "Xuǎncí tiánkòng: Xiǎo bǎobao ____ kàndào māma ____ xiào le.",
    titleIdn: "Lengkapi kalimat: Bayi kecil ____ melihat ibu ____ tersenyum.",
    options: [
      { letter: "A", zh: "一 ... 就 ...", py: "yī ... jiù ...", idn: "begitu ... langsung ...", isCorrect: true },
      { letter: "B", zh: "越 ... 越 ...", py: "yuè ... yuè ...", idn: "semakin ... semakin ...", isCorrect: false },
      { letter: "C", zh: "虽然 ... 但是 ...", py: "suīrán ... dànshì ...", idn: "walaupun ... tetapi ...", isCorrect: false }
    ],
    explanation: "Pola 一...就... digunakan untuk menyatakan aksi kedua yang seketika terjadi setelah aksi pertama."
  },
  {
    id: "q13",
    cat: "grammar",
    catName: "Tata Bahasa & Kosakata",
    titleZh: "选词填空：北方的春天到了，天气____暖和了。",
    titlePy: "Xuǎncí tiánkòng: Běifāng de chūntiān dào le, tiānqì ____ nuǎnhuo le.",
    titleIdn: "Lengkapi kalimat: Musim semi di utara tiba, cuaca ____ hangat.",
    options: [
      { letter: "A", zh: "越来越", py: "yuè lái yuè", idn: "semakin lama semakin...", isCorrect: true },
      { letter: "B", zh: "一就", py: "yī jiù", idn: "begitu langsung", isCorrect: false },
      { letter: "C", zh: "而且", py: "érqiě", idn: "lagipula", isCorrect: false }
    ],
    explanation: "越来越 + Kata Sifat (暖和) menyatakan perubahan kondisi yang semakin hangat seiring berjalannya waktu."
  },
  {
    id: "q14",
    cat: "grammar",
    catName: "Tata Bahasa & Kosakata",
    titleZh: "“雨季”的中文拼音和意思是：",
    titlePy: "“Yǔjì” de Zhōngwén pīnyīn hé yìsi shì:",
    titleIdn: "Pinyin dan arti dari kata “雨季” adalah:",
    options: [
      { letter: "A", zh: "yǔjì - Musim Hujan", py: "yǔjì - Musim Hujan", idn: "yǔjì - Musim Hujan", isCorrect: true },
      { letter: "B", zh: "hànjì - Musim Kemarau", py: "hànjì - Musim Kemarau", idn: "hànjì - Musim Kemarau", isCorrect: false },
      { letter: "C", zh: "jìjié - Musim", py: "jìjié - Musim", idn: "jìjié - Musim", isCorrect: false }
    ],
    explanation: "雨 (hujan) + 季 (musim) = 雨季 (yǔjì - musim hujan)."
  },
  {
    id: "q15",
    cat: "grammar",
    catName: "Tata Bahasa & Kosakata",
    titleZh: "“1公里”等于多少米？",
    titlePy: "“1 gōnglǐ” děngyú duōshǎo mǐ?",
    titleIdn: "1 公里 (gōnglǐ) sama dengan berapa meter?",
    options: [
      { letter: "A", zh: "1000 米 (1000 meter)", py: "1000 mǐ", idn: "1 Kilometer = 1000 meter", isCorrect: true },
      { letter: "B", zh: "500 米 (500 meter)", py: "500 mǐ (Ini adalah 1 里 lǐ)", idn: "500 meter (Ini 1 li)", isCorrect: false },
      { letter: "C", zh: "100 米 (100 meter)", py: "100 mǐ", idn: "100 meter", isCorrect: false }
    ],
    explanation: "公里 adalah kilometer (1000m), sedangkan 里 adalah satuan tradisional Tiongkok (sekitar 500m)."
  }
];

// =============================================================================
// SPEECH SYNTHESIS & SOUND EFFECTS (PUP SOUND ENGINE)
// =============================================================================

let chineseVoices = [];
let audioCtx = null;

function initSpeechSynthesis() {
  if ('speechSynthesis' in window) {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      chineseVoices = allVoices.filter(v => v.lang.startsWith('zh') || v.name.includes('Chinese') || v.name.includes('Mandarin'));
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }
}

function speakText(text, onEndCallback = null) {
  if (!('speechSynthesis' in window)) {
    showToast("Browser tidak mendukung Text-to-Speech.");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.85;
  utterance.pitch = 1.05; // Slightly cheerful pitch for Paw Patrol theme

  if (chineseVoices.length > 0) {
    const preferred = chineseVoices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Xiaoxiao') || v.name.includes('Yunxi') || v.lang === 'zh-CN') || chineseVoices[0];
    if (preferred) {
      utterance.voice = preferred;
    }
  }

  showQuickAudioBar(text);

  utterance.onend = () => {
    hideQuickAudioBar();
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = () => {
    hideQuickAudioBar();
  };

  window.speechSynthesis.speak(utterance);
}

function stopAllSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  hideQuickAudioBar();
}

// Web Audio API Synthesizer for Paw Patrol SFX
function playSoundEffect(type) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'success' || type === 'correct') {
      // Cheerful Paw Patrol badge chime
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.24); // C6
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'wrong' || type === 'error') {
      // Siren wobble
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.linearRampToValueAtTime(180, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'click') {
      // Playful click
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'win') {
      // Paw Patrol Mission Complete Fanfare!
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, i) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.connect(g);
        g.connect(audioCtx.destination);
        o.type = 'triangle';
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.2, now + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.35);
        o.start(now + i * 0.1);
        o.stop(now + i * 0.1 + 0.35);
      });
    }
  } catch (e) {
    // AudioContext fallback
  }
}

// Quick Audio Assistant Bar Handlers
function showQuickAudioBar(text) {
  const bar = document.getElementById('quickAudioBar');
  const preview = document.getElementById('quickAudioText');
  if (bar && preview) {
    preview.textContent = `Radio Patroli: "${text}"`;
    bar.classList.add('active');
  }
}

function hideQuickAudioBar() {
  const bar = document.getElementById('quickAudioBar');
  if (bar) {
    bar.classList.remove('active');
  }
}

// Toast helper
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-paw text-amber"></i> <span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

// =============================================================================
// MODUL 1: STORY READER & PUP PAD COMMUNICATOR AUDIO PLAYER
// =============================================================================

function initStoryModule() {
  const storyAudio = document.getElementById('storyAudioElement');
  const playBtn = document.getElementById('storyAudioPlayBtn');
  const playIcon = document.getElementById('storyAudioPlayIcon');
  const progressBar = document.getElementById('storyAudioProgressBar');
  const progressContainer = document.getElementById('storyAudioProgressContainer');
  const currTimeEl = document.getElementById('storyAudioCurrentTime');
  const durTimeEl = document.getElementById('storyAudioDuration');

  // Toggle Pinyin & Translation
  const togglePinyin = document.getElementById('togglePinyin');
  const toggleTranslation = document.getElementById('toggleTranslation');
  const paragraphsContainer = document.getElementById('storyParagraphs');
  const dialogueBox = document.querySelector('.dialogue-box');

  if (togglePinyin) {
    togglePinyin.addEventListener('change', () => {
      paragraphsContainer.classList.toggle('hide-pinyin', !togglePinyin.checked);
      if (dialogueBox) dialogueBox.classList.toggle('hide-pinyin', !togglePinyin.checked);
    });
  }

  if (toggleTranslation) {
    toggleTranslation.addEventListener('change', () => {
      paragraphsContainer.classList.toggle('hide-trans', !toggleTranslation.checked);
      if (dialogueBox) dialogueBox.classList.toggle('hide-trans', !toggleTranslation.checked);
    });
  }

  // Audio Play / Pause
  if (playBtn && storyAudio) {
    playBtn.addEventListener('click', () => {
      if (storyAudio.paused) {
        storyAudio.play();
        playIcon.className = 'fa-solid fa-pause';
      } else {
        storyAudio.pause();
        playIcon.className = 'fa-solid fa-play';
      }
    });

    storyAudio.addEventListener('loadedmetadata', () => {
      durTimeEl.textContent = formatTime(storyAudio.duration);
    });

    storyAudio.addEventListener('timeupdate', () => {
      const progress = (storyAudio.currentTime / storyAudio.duration) * 100;
      progressBar.style.width = `${progress}%`;
      currTimeEl.textContent = formatTime(storyAudio.currentTime);
    });

    storyAudio.addEventListener('ended', () => {
      playIcon.className = 'fa-solid fa-play';
      progressBar.style.width = '0%';
    });

    if (progressContainer) {
      progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        storyAudio.currentTime = pos * storyAudio.duration;
      });
    }

    // Playback Speed Controls
    document.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const speed = parseFloat(btn.dataset.speed);
        storyAudio.playbackRate = speed;
      });
    });
  }

  // Per-sentence TTS click listeners
  document.querySelectorAll('.sentence-row').forEach(row => {
    const speakerBtn = row.querySelector('.sentence-speaker-btn');
    const zh = row.dataset.chinese;
    if (speakerBtn && zh) {
      speakerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        speakText(zh);
      });
    }
  });

  // Dialogue TTS
  document.querySelectorAll('.dialogue-item').forEach(item => {
    const speakerBtn = item.querySelector('.sentence-speaker-btn');
    const bubble = item.querySelector('.hanzi-line');
    if (speakerBtn && bubble) {
      const text = bubble.textContent.replace(/[\n\r\t]/g, '').trim();
      speakerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        speakText(text);
      });
    }
  });

  // Read whole story
  const btnReadAllStory = document.getElementById('btnReadAllStory');
  if (btnReadAllStory) {
    btnReadAllStory.addEventListener('click', () => {
      const fullText = "你一定知道什么是鸟，但是你听说过什么是候鸟吗？中国是一个有四个季节的国家。每当秋天要转入冬天，天气越来越冷的时候，有很多鸟从中国的北方飞向南方，有些鸟一飞就能飞几千公里。有些飞到中国的南方，有些还飞到国外去了。当北方的春天到了，天气越来越暖和了，这些鸟会再次飞回北方。这种在不同的季节飞到另外一个地方，然后再飞回来的鸟，中国人把它们叫做候鸟。";
      speakText(fullText);
    });
  }

  // Read dialogue
  const btnReadAllDialog = document.getElementById('btnReadAllDialog');
  if (btnReadAllDialog) {
    btnReadAllDialog.addEventListener('click', () => {
      const dialogText = "在一些国家，一年有四个季节：春季、夏季、秋季和冬季。丽丽，印尼有几个季节？只有两个季节。哪些季节？经常下雨的季节叫做雨季，不经常下雨的叫做旱季。不对！除了旱季和雨季，印尼还有芒果季、榴莲季等等。那不算！";
      speakText(dialogText);
    });
  }

  // Render Vocabulary Grid
  renderVocabGrid('all');

  // Vocab Filter Tabs
  document.querySelectorAll('.vocab-filter-tabs .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.vocab-filter-tabs .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderVocabGrid(btn.dataset.filter);
    });
  });
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function renderVocabGrid(filter = 'all') {
  const grid = document.getElementById('vocabGrid');
  if (!grid) return;

  const list = VOCAB_DATA.filter(item => {
    if (filter === 'main') return item.type === 'main';
    if (filter === 'extra') return item.type === 'extra';
    return true;
  });

  grid.innerHTML = list.map((item, idx) => `
    <div class="vocab-card" onclick="speakText('${item.zh}')">
      <div class="vocab-card-left">
        <span class="vocab-num-badge">${idx + 1}</span>
        <div>
          <div class="vocab-zh">${item.zh}</div>
          <div class="vocab-pinyin">${item.py}</div>
          <div class="vocab-meaning">${item.idn}</div>
        </div>
      </div>
      <button class="vocab-speaker-btn" title="Dengarkan pelafalan">
        <i class="fa-solid fa-volume-high"></i>
      </button>
    </div>
  `).join('');
}

// =============================================================================
// MODUL 2: RUBBLE'S HANZI BUILDER & TIANZIGE CANVAS
// =============================================================================

let activeCharIndex = 0;
let hanziWriterInstance = null;
let canvasCtx = null;
let isDrawing = false;
let canvasHistory = [];
let brushColor = '#0055b3'; // Default Chase Blue
let brushSize = 9;

function initStrokeModule() {
  renderCharPicker();
  setupDrawingCanvas();
  loadCharacter(STROKE_CHAR_LIST[0]);

  // Animator Controls
  document.getElementById('btnAnimateStroke')?.addEventListener('click', () => {
    if (hanziWriterInstance) {
      hanziWriterInstance.animateCharacter();
    }
  });

  document.getElementById('btnStrokeQuiz')?.addEventListener('click', () => {
    if (hanziWriterInstance) {
      const hint = document.getElementById('writerStatusHint');
      if (hint) hint.textContent = "Mode Latihan Rubble Aktif: Ikuti urutan guratan dengan mouse atau sentuhan!";
      hanziWriterInstance.quiz({
        onMistake: function(strokeData) {
          playSoundEffect('wrong');
        },
        onCorrectStroke: function(strokeData) {
          playSoundEffect('correct');
        },
        onComplete: function(summaryData) {
          playSoundEffect('win');
          showToast(`🐾 Ruff ruff! Rubble bangga padamu! Karakter ${STROKE_CHAR_LIST[activeCharIndex].char} selesai!`);
          if (hint) hint.textContent = "Selamat! Semua guratan berhasil dibangun dengan sempurna!";
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
        }
      });
    }
  });

  document.getElementById('activeCharAudioBtn')?.addEventListener('click', () => {
    const c = STROKE_CHAR_LIST[activeCharIndex];
    speakText(c.char);
  });
}

function renderCharPicker() {
  const grid = document.getElementById('charPickerGrid');
  if (!grid) return;

  grid.innerHTML = STROKE_CHAR_LIST.map((item, idx) => `
    <button class="char-pick-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
      <span class="pick-zh">${item.char}</span>
      <span class="pick-py">${item.py}</span>
    </button>
  `).join('');

  grid.querySelectorAll('.char-pick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      grid.querySelectorAll('.char-pick-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = parseInt(btn.dataset.index);
      activeCharIndex = idx;
      loadCharacter(STROKE_CHAR_LIST[idx]);
    });
  });
}

function loadCharacter(charObj) {
  // Update header info
  document.getElementById('activeHanziText').textContent = charObj.char;
  document.getElementById('activePinyinText').textContent = charObj.py;
  document.getElementById('activeMeaningText').textContent = charObj.meaning;
  document.getElementById('activeStrokeCount').textContent = charObj.strokes;
  document.getElementById('activeRadical').textContent = charObj.radical;
  document.getElementById('ghostCharacter').textContent = charObj.char;

  // Speak character once
  speakText(charObj.char);

  // Initialize HanziWriter
  const target = document.getElementById('hanziWriterTarget');
  if (target) {
    target.innerHTML = '';
    try {
      if (typeof HanziWriter !== 'undefined') {
        hanziWriterInstance = HanziWriter.create('hanziWriterTarget', charObj.char, {
          width: 250,
          height: 250,
          padding: 15,
          showOutline: true,
          strokeAnimationSpeed: 1.2,
          delayBetweenStrokes: 200,
          strokeColor: '#0055b3',
          radicalColor: '#e60000',
          outlineColor: '#cbd5e1'
        });
        hanziWriterInstance.animateCharacter();
      } else {
        target.innerHTML = `<div style="font-family:'Noto Sans SC'; font-size:160px; line-height:250px; text-align:center; color:#0055b3;">${charObj.char}</div>`;
      }
    } catch (e) {
      target.innerHTML = `<div style="font-family:'Noto Sans SC'; font-size:160px; line-height:250px; text-align:center; color:#0055b3;">${charObj.char}</div>`;
    }
  }

  // Render Step-by-step strip
  renderStrokeSteps(charObj);

  // Clear writing canvas
  clearWritingCanvas();
}

function renderStrokeSteps(charObj) {
  const strip = document.getElementById('strokeStepsStrip');
  if (!strip) return;

  const strokeNames = ["1. 撇 (piě)", "2. 竖 (shù)", "3. 横 (héng)", "4. 折 (zhé)", "5. 点 (diǎn)", "6. 捺 (nà)", "7. 提 (tí)", "8. 弯 (wān)", "9. 钩 (gōu)", "10. 斜 (xié)", "11. 撇 (piě)", "12. 捺 (nà)", "13. 点 (diǎn)", "14. 横 (héng)"];

  let html = '';
  for (let i = 1; i <= charObj.strokes; i++) {
    html += `
      <div class="step-chip">
        <span class="step-index">Langkah ${i}</span>
        <div class="step-svg-wrap">
          <span style="font-family: 'Noto Sans SC'; font-size: 26px; font-weight: 900; color: #005ce6;">${charObj.char}</span>
        </div>
        <span class="step-name">${strokeNames[i - 1] || `Guratan ${i}`}</span>
      </div>
    `;
  }
  strip.innerHTML = html;
}

function setupDrawingCanvas() {
  const canvas = document.getElementById('writingCanvas');
  if (!canvas) return;
  canvasCtx = canvas.getContext('2d');

  function getCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  function startDraw(e) {
    e.preventDefault();
    isDrawing = true;
    saveCanvasState();
    const pos = getCoords(e);
    canvasCtx.beginPath();
    canvasCtx.moveTo(pos.x, pos.y);
    canvasCtx.strokeStyle = brushColor;
    canvasCtx.lineWidth = brushSize;
    canvasCtx.lineCap = 'round';
    canvasCtx.lineJoin = 'round';
  }

  function moveDraw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getCoords(e);
    canvasCtx.lineTo(pos.x, pos.y);
    canvasCtx.stroke();
  }

  function stopDraw() {
    isDrawing = false;
  }

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', moveDraw);
  window.addEventListener('mouseup', stopDraw);

  canvas.addEventListener('touchstart', startDraw, { passive: false });
  canvas.addEventListener('touchmove', moveDraw, { passive: false });
  window.addEventListener('touchend', stopDraw);

  // Brush colors
  document.querySelectorAll('.brush-colors .color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      document.querySelectorAll('.brush-colors .color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      brushColor = dot.dataset.color;
    });
  });

  // Brush size
  const brushSlider = document.getElementById('brushSizeSlider');
  if (brushSlider) {
    brushSlider.addEventListener('input', (e) => {
      brushSize = parseInt(e.target.value);
    });
  }

  // Clear canvas
  document.getElementById('btnClearCanvas')?.addEventListener('click', () => {
    clearWritingCanvas();
  });

  // Undo canvas
  document.getElementById('btnUndoCanvas')?.addEventListener('click', () => {
    if (canvasHistory.length > 0) {
      const imgData = canvasHistory.pop();
      canvasCtx.putImageData(imgData, 0, 0);
    } else {
      clearWritingCanvas();
    }
  });

  // Toggle ghost guide
  const ghost = document.getElementById('ghostCharacter');
  document.getElementById('btnToggleGhost')?.addEventListener('click', () => {
    if (ghost) {
      ghost.classList.toggle('hidden');
    }
  });
}

function saveCanvasState() {
  const canvas = document.getElementById('writingCanvas');
  if (canvasCtx && canvas) {
    if (canvasHistory.length > 15) canvasHistory.shift();
    canvasHistory.push(canvasCtx.getImageData(0, 0, canvas.width, canvas.height));
  }
}

function clearWritingCanvas() {
  const canvas = document.getElementById('writingCanvas');
  if (canvasCtx && canvas) {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    canvasHistory = [];
  }
}

// =============================================================================
// MODUL 3: ROCKY'S WORD-TO-PICTURE MATCHING GAME (2 MODES)
// =============================================================================

let matchScore = 0;
let matchStreak = 0;
let matchTimerSec = 0;
let matchTimerInterval = null;
let currentMatchingMode = 'connect';

let selectedWordCard = null;
let selectedImageCard = null;
let matchedCount = 0;

let memoryFlippedCards = [];
let memoryLockBoard = false;

function initMatchingModule() {
  document.getElementById('modeConnectBtn')?.addEventListener('click', () => {
    switchMatchingMode('connect');
  });

  document.getElementById('modeMemoryBtn')?.addEventListener('click', () => {
    switchMatchingMode('memory');
  });

  document.getElementById('btnRestartMatchGame')?.addEventListener('click', () => {
    resetMatchingGame();
  });

  startMatchingGame();
}

function switchMatchingMode(mode) {
  currentMatchingMode = mode;
  document.getElementById('modeConnectBtn').classList.toggle('active', mode === 'connect');
  document.getElementById('modeMemoryBtn').classList.toggle('active', mode === 'memory');

  document.getElementById('connectGameBoard').classList.toggle('hidden', mode !== 'connect');
  document.getElementById('memoryGameBoard').classList.toggle('hidden', mode !== 'memory');

  resetMatchingGame();
}

function startMatchingGame() {
  matchScore = 0;
  matchStreak = 0;
  matchTimerSec = 0;
  matchedCount = 0;
  selectedWordCard = null;
  selectedImageCard = null;
  updateMatchingDashboard();

  clearInterval(matchTimerInterval);
  matchTimerInterval = setInterval(() => {
    matchTimerSec++;
    document.getElementById('matchingTimer').textContent = formatTime(matchTimerSec);
  }, 1000);

  if (currentMatchingMode === 'connect') {
    renderConnectBoard();
  } else {
    renderMemoryBoard();
  }
}

function resetMatchingGame() {
  startMatchingGame();
}

function updateMatchingDashboard() {
  document.getElementById('matchingScore').textContent = matchScore;
  document.getElementById('matchingStreak').textContent = `${matchStreak}x`;
}

// Mode 1: Connect Pairs
function renderConnectBoard() {
  const wordCol = document.getElementById('wordCardsList');
  const imgCol = document.getElementById('imageCardsList');
  if (!wordCol || !imgCol) return;

  const shuffledWords = [...MATCHING_ITEMS].sort(() => Math.random() - 0.5);
  const shuffledImages = [...MATCHING_ITEMS].sort(() => Math.random() - 0.5);

  wordCol.innerHTML = shuffledWords.map(item => `
    <div class="connect-card word-card" data-id="${item.id}" data-type="word">
      <div class="word-card-inner">
        <span class="card-zh">${item.zh}</span>
        <span class="card-py">${item.py}</span>
      </div>
      <button class="small-speaker-btn btn-chase" onclick="event.stopPropagation(); speakText('${item.zh}');">
        <i class="fa-solid fa-volume-high"></i>
      </button>
    </div>
  `).join('');

  imgCol.innerHTML = shuffledImages.map(item => `
    <div class="connect-card img-card" data-id="${item.id}" data-type="image">
      <div class="image-card-inner">
        <img class="image-card-thumb" src="${item.img}" alt="Ilustrasi">
        <span class="image-card-desc">${item.idn}</span>
      </div>
    </div>
  `).join('');

  wordCol.querySelectorAll('.word-card').forEach(card => {
    card.addEventListener('click', () => handleConnectCardClick(card, 'word'));
  });

  imgCol.querySelectorAll('.img-card').forEach(card => {
    card.addEventListener('click', () => handleConnectCardClick(card, 'image'));
  });
}

function handleConnectCardClick(card, type) {
  playSoundEffect('click');

  if (card.classList.contains('matched')) return;

  if (type === 'word') {
    if (selectedWordCard) selectedWordCard.classList.remove('selected');
    selectedWordCard = card;
    card.classList.add('selected');
    const zh = card.querySelector('.card-zh').textContent;
    speakText(zh);
  } else if (type === 'image') {
    if (selectedImageCard) selectedImageCard.classList.remove('selected');
    selectedImageCard = card;
    card.classList.add('selected');
  }

  if (selectedWordCard && selectedImageCard) {
    const wordId = selectedWordCard.dataset.id;
    const imgId = selectedImageCard.dataset.id;

    if (wordId === imgId) {
      // MATCH!
      playSoundEffect('success');
      selectedWordCard.classList.remove('selected');
      selectedImageCard.classList.remove('selected');
      selectedWordCard.classList.add('matched');
      selectedImageCard.classList.add('matched');

      matchStreak++;
      matchScore += 100 * matchStreak;
      matchedCount++;
      updateMatchingDashboard();

      selectedWordCard = null;
      selectedImageCard = null;

      if (matchedCount === MATCHING_ITEMS.length) {
        clearInterval(matchTimerInterval);
        playSoundEffect('win');
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        showToast(`🐾 Hebat! Pasukan Paw Patrol berhasil menyelesaikan penyelamatan gambar! Skor: ${matchScore}`);
      }
    } else {
      // WRONG MATCH
      playSoundEffect('wrong');
      selectedWordCard.classList.add('wrong');
      selectedImageCard.classList.add('wrong');
      matchStreak = 0;
      updateMatchingDashboard();

      setTimeout(() => {
        if (selectedWordCard) {
          selectedWordCard.classList.remove('selected', 'wrong');
          selectedWordCard = null;
        }
        if (selectedImageCard) {
          selectedImageCard.classList.remove('selected', 'wrong');
          selectedImageCard = null;
        }
      }, 500);
    }
  }
}

// Mode 2: Memory Match Cards
function renderMemoryBoard() {
  const grid = document.getElementById('memoryCardsGrid');
  if (!grid) return;

  const cards = [];
  MATCHING_ITEMS.forEach(item => {
    cards.push({ id: item.id, type: 'word', zh: item.zh, py: item.py });
    cards.push({ id: item.id, type: 'image', img: item.img, idn: item.idn, zh: item.zh });
  });

  cards.sort(() => Math.random() - 0.5);

  grid.innerHTML = cards.map((c, i) => `
    <div class="memory-card" data-id="${c.id}" data-type="${c.type}" data-zh="${c.zh || ''}">
      <div class="memory-card-inner">
        <div class="memory-card-front">
          <i class="fa-solid fa-paw"></i>
        </div>
        <div class="memory-card-back">
          ${c.type === 'word' ? `
            <div class="memory-zh">${c.zh}</div>
            <div class="memory-py">${c.py}</div>
          ` : `
            <img class="memory-img" src="${c.img}" alt="Ilustrasi">
            <div style="font-size:0.75rem; font-weight:700; color:#475569;">${c.idn}</div>
          `}
        </div>
      </div>
    </div>
  `).join('');

  memoryFlippedCards = [];
  memoryLockBoard = false;

  grid.querySelectorAll('.memory-card').forEach(card => {
    card.addEventListener('click', () => handleMemoryCardClick(card));
  });
}

function handleMemoryCardClick(card) {
  if (memoryLockBoard) return;
  if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

  playSoundEffect('click');
  card.classList.add('flipped');
  memoryFlippedCards.push(card);

  const zh = card.dataset.zh;
  if (zh) speakText(zh);

  if (memoryFlippedCards.length === 2) {
    memoryLockBoard = true;
    const [card1, card2] = memoryFlippedCards;

    if (card1.dataset.id === card2.dataset.id && card1.dataset.type !== card2.dataset.type) {
      playSoundEffect('success');
      setTimeout(() => {
        card1.classList.add('matched');
        card2.classList.add('matched');
        memoryFlippedCards = [];
        memoryLockBoard = false;

        matchStreak++;
        matchScore += 120 * matchStreak;
        matchedCount++;
        updateMatchingDashboard();

        if (matchedCount === MATCHING_ITEMS.length) {
          clearInterval(matchTimerInterval);
          playSoundEffect('win');
          confetti({ particleCount: 140, spread: 90, origin: { y: 0.6 } });
          showToast(`🐾 Sempurna! Lencana Memory Master berhasil diraih! Skor: ${matchScore}`);
        }
      }, 500);
    } else {
      playSoundEffect('wrong');
      matchStreak = 0;
      updateMatchingDashboard();

      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        memoryFlippedCards = [];
        memoryLockBoard = false;
      }, 850);
    }
  }
}

// =============================================================================
// MODUL 4: CHASE'S POLICE QUIZ ENGINE (AUDIO-ENABLED MULTIPLE CHOICE)
// =============================================================================

let activeQuizCategory = 'all';
let userQuizAnswers = {};
let quizScore = 0;

function initQuizModule() {
  renderQuizList('all');

  document.querySelectorAll('#quizCategoryNav .quiz-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#quizCategoryNav .quiz-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeQuizCategory = btn.dataset.category;
      renderQuizList(activeQuizCategory);
    });
  });

  document.getElementById('btnRestartQuiz')?.addEventListener('click', () => {
    userQuizAnswers = {};
    quizScore = 0;
    document.getElementById('quizResultCard')?.classList.add('hidden');
    renderQuizList(activeQuizCategory);
    window.scrollTo({ top: document.getElementById('quiz-tab').offsetTop - 60, behavior: 'smooth' });
  });

  document.getElementById('btnReviewWrongAnswers')?.addEventListener('click', () => {
    renderQuizList('all');
    window.scrollTo({ top: document.getElementById('quizListContainer').offsetTop - 80, behavior: 'smooth' });
  });
}

function renderQuizList(category = 'all') {
  const container = document.getElementById('quizListContainer');
  if (!container) return;

  const filteredQuestions = QUIZ_QUESTIONS.filter(q => {
    if (category === 'all') return true;
    return q.cat === category;
  });

  document.getElementById('currentCategoryTotal').textContent = filteredQuestions.length;
  updateQuizProgress(filteredQuestions);

  container.innerHTML = filteredQuestions.map((q, qIndex) => {
    const userAnswer = userQuizAnswers[q.id];
    const isAnswered = userAnswer !== undefined;
    const isCorrect = isAnswered && q.options[userAnswer].isCorrect;

    let cardStatusClass = '';
    if (isAnswered) {
      cardStatusClass = isCorrect ? 'answered-correct' : 'answered-wrong';
    }

    return `
      <div class="quiz-item-card ${cardStatusClass}" id="quiz-card-${q.id}">
        <!-- Header -->
        <div class="quiz-header-row">
          <span class="q-number-chip"><i class="fa-solid fa-paw text-primary"></i> Soal ${qIndex + 1}</span>
          <span class="q-type-badge">${q.catName}</span>
        </div>

        <!-- Question Body with Voice Button -->
        <div class="q-body">
          <div class="q-text-row">
            <button class="q-audio-btn" title="Dengarkan Soal (Audio)" onclick="speakQuestionAudio('${q.id}')">
              <i class="fa-solid fa-volume-high"></i>
            </button>
            <div class="q-text-col">
              <div class="q-chinese-text">${q.titleZh}</div>
              <div class="q-pinyin-text" style="font-size: 0.88rem; color: #005ce6; font-weight: 700;">${q.titlePy}</div>
              <div class="q-trans-text">${q.titleIdn}</div>
            </div>
          </div>

          ${q.image ? `
            <div class="q-media-box">
              <img src="${q.image}" alt="Soal Bergambar">
            </div>
          ` : ''}

          ${q.hasAudioTrack ? `
            <div class="q-audio-player-box">
              <button class="q-track-play-btn" onclick="playAudioTrack('${q.hasAudioTrack}')">
                <i class="fa-solid fa-circle-play"></i> ${q.trackLabel}
              </button>
              <span style="font-size: 0.82rem; font-weight: 700; color: #64748b;">(Audio Asli Rekaman MH 5)</span>
            </div>
          ` : ''}
        </div>

        <!-- Options Grid (A, B, C, D) -->
        <div class="q-options-grid">
          ${q.options.map((opt, optIndex) => {
            let optClass = '';
            if (isAnswered) {
              if (opt.isCorrect) optClass = 'correct';
              else if (userAnswer === optIndex) optClass = 'wrong';
            }

            return `
              <div class="option-btn ${optClass} ${isAnswered ? 'disabled' : ''}" 
                   onclick="handleSelectOption('${q.id}', ${optIndex})">
                <div class="opt-left">
                  <span class="opt-letter">${opt.letter}</span>
                  <div class="opt-text-wrap">
                    <span class="opt-zh">${opt.zh}</span>
                    <span class="opt-py">${opt.py}</span>
                    <span class="opt-id">${opt.idn}</span>
                  </div>
                </div>
                <button class="opt-speaker-btn" title="Dengarkan Opsi ${opt.letter}" 
                        onclick="event.stopPropagation(); speakOptionAudio('${opt.zh}');">
                  <i class="fa-solid fa-volume-high"></i>
                </button>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Instant Explanation Drawer -->
        ${isAnswered ? `
          <div class="q-explanation-box ${isCorrect ? '' : 'wrong-exp'}">
            <div class="exp-title">
              <i class="fa-solid ${isCorrect ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
              ${isCorrect ? 'Bagus Sekali! Jawaban Kamu Tepat!' : 'Kurang Tepat, Perhatikan Pembahasan Chase Berikut:'}
            </div>
            <p>${q.explanation}</p>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

function speakQuestionAudio(qId) {
  const q = QUIZ_QUESTIONS.find(item => item.id === qId);
  if (q) {
    speakText(q.titleZh);
  }
}

function speakOptionAudio(zhText) {
  speakText(zhText);
}

function playAudioTrack(trackPath) {
  stopAllSpeech();
  const audio = new Audio(trackPath);
  showToast("Memutar audio rekaman patroli...");
  audio.play();
}

function handleSelectOption(qId, selectedOptionIndex) {
  if (userQuizAnswers[qId] !== undefined) return;

  userQuizAnswers[qId] = selectedOptionIndex;
  const q = QUIZ_QUESTIONS.find(item => item.id === qId);
  const isCorrect = q.options[selectedOptionIndex].isCorrect;

  if (isCorrect) {
    playSoundEffect('correct');
    quizScore += 10;
  } else {
    playSoundEffect('wrong');
  }

  renderQuizList(activeQuizCategory);
  checkQuizCompletion();
}

function updateQuizProgress(filteredQuestions) {
  const answeredInCurrent = filteredQuestions.filter(q => userQuizAnswers[q.id] !== undefined).length;
  document.getElementById('answeredCount').textContent = answeredInCurrent;
  document.getElementById('quizLiveScore').textContent = quizScore;

  const percentage = (answeredInCurrent / filteredQuestions.length) * 100;
  document.getElementById('quizProgressFill').style.width = `${percentage}%`;
}

function checkQuizCompletion() {
  const totalCount = QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(userQuizAnswers).length;

  if (answeredCount === totalCount) {
    let correctCount = 0;
    QUIZ_QUESTIONS.forEach(q => {
      const ans = userQuizAnswers[q.id];
      if (ans !== undefined && q.options[ans].isCorrect) {
        correctCount++;
      }
    });

    const wrongCount = totalCount - correctCount;
    const finalPercentage = Math.round((correctCount / totalCount) * 100);

    const resCard = document.getElementById('quizResultCard');
    if (resCard) {
      resCard.classList.remove('hidden');
      document.getElementById('resCorrectCount').textContent = correctCount;
      document.getElementById('resWrongCount').textContent = wrongCount;
      document.getElementById('resFinalScore').textContent = `${finalPercentage}%`;

      const titleEl = document.getElementById('resultTitle');
      if (finalPercentage >= 80) {
        titleEl.textContent = "🏆 Luar Biasa! Kamu Layak Menjadi Perwira Patroli Mandarin!";
        confetti({ particleCount: 160, spread: 90, origin: { y: 0.6 } });
        playSoundEffect('win');
      } else if (finalPercentage >= 60) {
        titleEl.textContent = "👍 Kerja Bagus! Misi Berhasil Dijalankan!";
        playSoundEffect('win');
      } else {
        titleEl.textContent = "💪 Terus Semangat! Ayo Ulangi Misi Kuis!";
      }

      resCard.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// =============================================================================
// MAIN INITIALIZATION & ROUTING
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initSpeechSynthesis();

  // Tab Navigation Handling
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetTab = document.getElementById(btn.dataset.tab);
      if (targetTab) {
        targetTab.classList.add('active');
      }

      stopAllSpeech();
    });
  });

  // Top Test Voice Button (Paw Patrol Yell)
  document.getElementById('ttsVoiceTestBtn')?.addEventListener('click', () => {
    playSoundEffect('success');
    speakText("你好！汪汪队准备好了！欢迎来到第十课学习：候鸟千里飞。");
    showToast("🐾 Paw Patrol siap menjalankan misi belajar Mandarin!");
  });

  // Quick audio bar stop button
  document.getElementById('quickStopAudioBtn')?.addEventListener('click', () => {
    stopAllSpeech();
  });

  // Initialize Modules
  initStoryModule();
  initStrokeModule();
  initMatchingModule();
  initQuizModule();
});
