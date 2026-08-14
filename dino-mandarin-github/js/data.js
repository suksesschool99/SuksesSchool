/**
 * Dino Mandarin Adventure - Data Module
 * Kosakata Lengkap Per-Unit Buku PDF HAN YU 1 sampai HAN YU 12
 * Dilengkapi Pinyin Berharakat, Arti Bahasa Indonesia, Jumlah Guratan, & Ilustrasi Vektor
 */

const DINO_DATA = {
  // Metadata Buku Han Yu 1 s/d Han Yu 12
  books: [
    { id: 1, title: 'Han Yu 1 (汉语 第一册)', desc: 'Angka, Alam Dasar, Anggota Tubuh, Sapaan, Keluarga & Arah' },
    { id: 2, title: 'Han Yu 2 (汉语 第二册)', desc: 'Waktu, Pakaian, Warna, Hewan, Buah-buahan & Sekolah' },
    { id: 3, title: 'Han Yu 3 (汉语 第三册)', desc: 'Ruang Kelas, Kegiatan Harian, Lokasi, Kebun Binatang & Belanja' },
    { id: 4, title: 'Han Yu 4 (汉语 第四册)', desc: 'Olahraga, Cuaca, 4 Musim, Transportasi, Supermarket & Liburan' },
    { id: 5, title: 'Han Yu 5 (汉语 第五册)', desc: 'Hobi, Memasak, Komunikasi, Museum, Lingkungan & Festival' },
    { id: 6, title: 'Han Yu 6 (汉语 第六册)', desc: 'Teknologi, Tempat Bersejarah, Antariksa, Fabel & Cita-cita' },
    { id: 7, title: 'Han Yu 7 (汉语 第七册)', desc: 'Cerita Idiom (成语), Asal Usul Hanzi & Budaya Kuliner' },
    { id: 8, title: 'Han Yu 8 (汉语 第八册)', desc: 'Geografi Tiongkok, Tokoh Bersejarah & 4 Penemuan Besar' },
    { id: 9, title: 'Han Yu 9 (汉语 第九册)', desc: 'Seni Tradisional (Kaligrafi, Opera) & Karya Sastra Klasik' },
    { id: 10, title: 'Han Yu 10 (汉语 第十册)', desc: 'Ekonomi, Jalur Sutra, Komunikasi Antarbudaya & Ekologi' },
    { id: 11, title: 'Han Yu 11 (汉语 第十一册)', desc: 'Filsafat Tiongkok, Sejarah & Inovasi Teknologi Masa Depan' },
    { id: 12, title: 'Han Yu 12 (汉语 第十二册)', desc: 'Aplikasi Bahasa Lanjutan, Pidato, Penulisan Esai & Wawasan Global' }
  ],

  // Daftar Kosakata Lengkap Terstruktur Per Buku & Per Unit (Han Yu 1 - 12)
  vocabList: [
    // =========================================================================
    // HAN YU 1
    // =========================================================================
    // Unit 1: Angka 1-10
    { char: '一', pinyin: 'yī', meaning: 'Satu (1)', book: 1, unit: 1, strokes: 1, category: 'numbers', tip: 'Satu garis mendatar (横) dari kiri ke kanan.', svgId: 'num1' },
    { char: '二', pinyin: 'èr', meaning: 'Dua (2)', book: 1, unit: 1, strokes: 2, category: 'numbers', tip: 'Dua garis mendatar, garis bawah dibuat lebih panjang.', svgId: 'num2' },
    { char: '三', pinyin: 'sān', meaning: 'Tiga (3)', book: 1, unit: 1, strokes: 3, category: 'numbers', tip: 'Tiga garis mendatar: atas pendek, tengah terpendek, bawah terpanjang.', svgId: 'num3' },
    { char: '四', pinyin: 'sì', meaning: 'Empat (4)', book: 1, unit: 1, strokes: 5, category: 'numbers', tip: 'Buat bingkai luar dulu, isi bagian dalam, lalu tutup bawahnya.', svgId: 'num4' },
    { char: '五', pinyin: 'wǔ', meaning: 'Lima (5)', book: 1, unit: 1, strokes: 4, category: 'numbers', tip: 'Melambangkan lima jari cakar dinosaurus yang kokoh!', svgId: 'num5' },
    { char: '六', pinyin: 'liù', meaning: 'Enam (6)', book: 1, unit: 1, strokes: 4, category: 'numbers', tip: 'Titik di atas disusul garis mendatar dan dua titik di bawah.', svgId: 'num6' },
    { char: '七', pinyin: 'qī', meaning: 'Tujuh (7)', book: 1, unit: 1, strokes: 2, category: 'numbers', tip: 'Garis mendatar lalu garis tegak melengkung ke kanan (竖弯钩).', svgId: 'num7' },
    { char: '八', pinyin: 'bā', meaning: 'Delapan (8)', book: 1, unit: 1, strokes: 2, category: 'numbers', tip: 'Sapuan kiri (撇) dan sapuan kanan (捺) terbuka seperti kaki dino.', svgId: 'num8' },
    { char: '九', pinyin: 'jiǔ', meaning: 'Sembilan (9)', book: 1, unit: 1, strokes: 2, category: 'numbers', tip: 'Sapuan miring kiri disusul tekukan berlekuk (横折弯钩).', svgId: 'num9' },
    { char: '十', pinyin: 'shí', meaning: 'Sepuluh (10)', book: 1, unit: 1, strokes: 2, category: 'numbers', tip: 'Garis mendatar disilangkan dengan garis tegak lurus (十).', svgId: 'num10' },

    // Unit 2: Alam & Tubuh Dasar
    { char: '人', pinyin: 'rén', meaning: 'Orang / Manusia', book: 1, unit: 2, strokes: 2, category: 'body', tip: 'Dua langkah: sapuan kiri (撇) lalu sapuan kanan (捺).', svgId: 'person' },
    { char: '口', pinyin: 'kǒu', meaning: 'Mulut', book: 1, unit: 2, strokes: 3, category: 'body', tip: 'Kotak mulut dino yang siap mengunyah daun atau berteriak ROAR!', svgId: 'mouth' },
    { char: '日', pinyin: 'rì', meaning: 'Matahari / Hari', book: 1, unit: 2, strokes: 4, category: 'nature', tip: 'Kotak persegi panjang dengan garis horisontal di tengah.', svgId: 'sun' },
    { char: '月', pinyin: 'yuè', meaning: 'Bulan', book: 1, unit: 2, strokes: 4, category: 'nature', tip: 'Bulan sabit yang bersinar di langit malam prasejarah.', svgId: 'moon' },
    { char: '山', pinyin: 'shān', meaning: 'Gunung', book: 1, unit: 2, strokes: 3, category: 'nature', tip: 'Tiga puncak gunung tinggi tempat habitat dinosaurus.', svgId: 'mountain' },
    { char: '水', pinyin: 'shuǐ', meaning: 'Air', book: 1, unit: 2, strokes: 4, category: 'nature', tip: 'Mulai dari guratan tengah (竖钩), lalu bagian kiri dan kanan.', svgId: 'water' },
    { char: '木', pinyin: 'mù', meaning: 'Kayu / Pohon', book: 1, unit: 2, strokes: 4, category: 'nature', tip: 'Garis mendatar, tegak lurus ke bawah, lalu sapuan kiri & kanan.', svgId: 'tree' },
    { char: '田', pinyin: 'tián', meaning: 'Sawah / Ladang', book: 1, unit: 2, strokes: 5, category: 'nature', tip: 'Kotak persegi yang dibagi menjadi empat petak di dalamnya.', svgId: 'field' },
    { char: '火', pinyin: 'huǒ', meaning: 'Api / Lahar', book: 1, unit: 2, strokes: 4, category: 'nature', tip: 'Titik kiri dan kanan dulu, lalu karakter 人 di tengahnya.', svgId: 'volcano' },

    // Unit 3: Sapaan & Kata Ganti
    { char: '你', pinyin: 'nǐ', meaning: 'Kamu', book: 1, unit: 3, strokes: 7, category: 'basic', tip: 'Radikal orang (亻) di sebelah kiri disusul bagian kanan (尔).', svgId: 'friend' },
    { char: '我', pinyin: 'wǒ', meaning: 'Saya / Aku', book: 1, unit: 3, strokes: 7, category: 'basic', tip: 'Terdiri dari 7 guratan yang seimbang dan indah.', svgId: 'me' },
    { char: '他', pinyin: 'tā', meaning: 'Dia (Laki-laki)', book: 1, unit: 3, strokes: 5, category: 'basic', tip: 'Radikal orang (亻) di kiri dan karakter 也 di kanan.', svgId: 'he' },
    { char: '她', pinyin: 'tā', meaning: 'Dia (Perempuan)', book: 1, unit: 3, strokes: 6, category: 'basic', tip: 'Radikal wanita (女) di kiri dan karakter 也 di kanan.', svgId: 'she' },
    { char: '好', pinyin: 'hǎo', meaning: 'Baik / Bagus', book: 1, unit: 3, strokes: 6, category: 'basic', tip: 'Gabungan wanita (女) dan anak (子) menjadi sesuatu yang baik!', svgId: 'good' },
    { char: '见', pinyin: 'jiàn', meaning: 'Melihat / Bertemu', book: 1, unit: 3, strokes: 4, category: 'basic', tip: 'Menyerupai mata dan kaki untuk berjalan bertemu teman.', svgId: 'see' },

    // Unit 4: Keluarga
    { char: '爸', pinyin: 'bà', meaning: 'Ayah', book: 1, unit: 4, strokes: 8, category: 'family', tip: 'Bagian atas radikal ayah (父) dan bagian bawah (巴).', svgId: 'father' },
    { char: '妈', pinyin: 'mā', meaning: 'Ibu', book: 1, unit: 4, strokes: 6, category: 'family', tip: 'Radikal wanita (女) di kiri dan kuda (马) sebagai pelafalan.', svgId: 'mother' },
    { char: '哥', pinyin: 'gē', meaning: 'Kakak Laki-laki', book: 1, unit: 4, strokes: 10, category: 'family', tip: 'Dua bentuk 可 yang disusun bertumpuk dari atas ke bawah.', svgId: 'brother' },
    { char: '姐', pinyin: 'jiě', meaning: 'Kakak Perempuan', book: 1, unit: 4, strokes: 8, category: 'family', tip: 'Radikal wanita (女) di sebelah kiri disusul 且 di kanan.', svgId: 'sister' },
    { char: '弟', pinyin: 'dì', meaning: 'Adik Laki-laki', book: 1, unit: 4, strokes: 7, category: 'family', tip: 'Titik dan garis atas dulu, lalu lekukan berulang di bawahnya.', svgId: 'younger_bro' },
    { char: '妹', pinyin: 'mèi', meaning: 'Adik Perempuan', book: 1, unit: 4, strokes: 8, category: 'family', tip: 'Radikal wanita (女) di kiri dan 未 di sebelah kanan.', svgId: 'younger_sis' },
    { char: '家', pinyin: 'jiā', meaning: 'Rumah / Keluarga', book: 1, unit: 4, strokes: 10, category: 'family', tip: 'Atap rumah (宀) di atas melindungi seluruh keluarga di bawah!', svgId: 'home' },

    // Unit 5: Ukuran & Satuan
    { char: '大', pinyin: 'dà', meaning: 'Besar', book: 1, unit: 5, strokes: 3, category: 'size', tip: 'Seperti Dino T-Rex yang membentangkan tangannya lebar-lebar!', svgId: 'big' },
    { char: '小', pinyin: 'xiǎo', meaning: 'Kecil', book: 1, unit: 5, strokes: 3, category: 'size', tip: 'Guratan tengah (竖钩) dibuat dulu, lalu titik kiri dan titik kanan.', svgId: 'small' },
    { char: '多', pinyin: 'duō', meaning: 'Banyak', book: 1, unit: 5, strokes: 6, category: 'size', tip: 'Dua karakter 夕 (malam/bulan) yang bertumpuk atas-bawah.', svgId: 'many' },
    { char: '少', pinyin: 'shǎo', meaning: 'Sedikit', book: 1, unit: 5, strokes: 4, category: 'size', tip: 'Bentuk 小 dengan tambahan sapuan panjang miring ke kiri.', svgId: 'few' },
    { char: '头', pinyin: 'tóu', meaning: 'Kepala / Ekor (Satuan Hewan Besar)', book: 1, unit: 5, strokes: 5, category: 'body', tip: 'Dua titik atas, garis mendatar, sapuan kiri, dan titik kanan.', svgId: 'head' },
    { char: '只', pinyin: 'zhī', meaning: 'Ekor (Satuan Hewan Kecil)', book: 1, unit: 5, strokes: 5, category: 'basic', tip: 'Kotak 口 di atas disusul sapuan kiri (撇) dan titik kanan (点).', svgId: 'unit_animal' },
    { char: '个', pinyin: 'gè', meaning: 'Buah / Orang (Satuan Umum)', book: 1, unit: 5, strokes: 3, category: 'basic', tip: 'Sapuan kiri, sapuan kanan seperti payung, lalu garis tegak lurus.', svgId: 'unit_general' },

    // Unit 6: Arah & Posisi
    { char: '上', pinyin: 'shàng', meaning: 'Atas / Naik', book: 1, unit: 6, strokes: 3, category: 'direction', tip: 'Garis tegak, garis pendek di kanan, dan garis mendatar panjang di dasar.', svgId: 'up' },
    { char: '下', pinyin: 'xià', meaning: 'Bawah / Turun', book: 1, unit: 6, strokes: 3, category: 'direction', tip: 'Garis mendatar panjang di atas, garis tegak, lalu titik di kanan.', svgId: 'down' },
    { char: '左', pinyin: 'zuǒ', meaning: 'Kiri', book: 1, unit: 6, strokes: 5, category: 'direction', tip: 'Garis mendatar, sapuan kiri panjang, lalu karakter 工 di bawahnya.', svgId: 'left' },
    { char: '右', pinyin: 'yòu', meaning: 'Kanan', book: 1, unit: 6, strokes: 5, category: 'direction', tip: 'Garis mendatar, sapuan kiri panjang, lalu kotak 口 di bawahnya.', svgId: 'right' },
    { char: '中', pinyin: 'zhōng', meaning: 'Tengah / Pusat', book: 1, unit: 6, strokes: 4, category: 'direction', tip: 'Kotak 口 di tengah yang ditembus garis vertikal tegak lurus.', svgId: 'center' },

    // Unit 7: Cuaca & Benda Alam
    { char: '天', pinyin: 'tiān', meaning: 'Langit / Hari', book: 1, unit: 7, strokes: 4, category: 'nature', tip: 'Garis mendatar atas pendek, garis bawah panjang, lalu kaki 人.', svgId: 'sky' },
    { char: '地', pinyin: 'dì', meaning: 'Bumi / Tanah', book: 1, unit: 7, strokes: 6, category: 'nature', tip: 'Radikal tanah (土) di kiri dan 也 di sebelah kanan.', svgId: 'earth' },
    { char: '雨', pinyin: 'yǔ', meaning: 'Hujan', book: 1, unit: 7, strokes: 8, category: 'nature', tip: 'Atap langit di atas meneteskan 4 butir air hujan di dalamnya.', svgId: 'rain' },
    { char: '风', pinyin: 'fēng', meaning: 'Angin', book: 1, unit: 7, strokes: 4, category: 'nature', tip: 'Lengkungan bingkai luar seperti angin berhembus kencang.', svgId: 'wind' },
    { char: '云', pinyin: 'yún', meaning: 'Awan', book: 1, unit: 7, strokes: 4, category: 'nature', tip: 'Dua garis mendatar lalu tekukan melengkung seperti gumpalan awan.', svgId: 'cloud' },
    { char: '雪', pinyin: 'xuě', meaning: 'Salju', book: 1, unit: 7, strokes: 11, category: 'nature', tip: 'Radikal hujan (雨) di atas disusul karakter 山 atau sapuan di bawah.', svgId: 'snow' },

    // Unit 8: Benda Kelas & Rumah
    { char: '门', pinyin: 'mén', meaning: 'Pintu', book: 1, unit: 8, strokes: 3, category: 'object', tip: 'Bentuk daun pintu sederhana dengan 3 guratan ringkas.', svgId: 'door' },
    { char: '窗', pinyin: 'chuāng', meaning: 'Jendela', book: 1, unit: 8, strokes: 12, category: 'object', tip: 'Atap lubang (穴) di atas dengan bingkai jendela di bawah.', svgId: 'window' },
    { char: '桌', pinyin: 'zhuō', meaning: 'Meja', book: 1, unit: 8, strokes: 10, category: 'object', tip: 'Bagian atas 卜, 日 di tengah, dan kayu (木) sebagai kaki meja.', svgId: 'desk' },
    { char: '椅', pinyin: 'yǐ', meaning: 'Kursi', book: 1, unit: 8, strokes: 12, category: 'object', tip: 'Radikal kayu (木) di kiri dan 奇 di sebelah kanan.', svgId: 'chair' },
    { char: '书', pinyin: 'shū', meaning: 'Buku', book: 1, unit: 8, strokes: 4, category: 'object', tip: 'Buku catatan dino yang berisi 4 guratan mudah diingat!', svgId: 'book' },
    { char: '笔', pinyin: 'bǐ', meaning: 'Pena / Pensil', book: 1, unit: 8, strokes: 10, category: 'object', tip: 'Batang bambu (竹) di bagian atas dan bulu kuas (毛) di bawah.', svgId: 'pencil' },

    // Unit 9: Makanan & Minuman
    { char: '吃', pinyin: 'chī', meaning: 'Makan', book: 1, unit: 9, strokes: 6, category: 'food', tip: 'Radikal mulut (口) di kiri dan 乞 di sebelah kanan.', svgId: 'eat' },
    { char: '喝', pinyin: 'hē', meaning: 'Minum', book: 1, unit: 9, strokes: 12, category: 'food', tip: 'Radikal mulut (口) di kiri disusul 日 dan 匃 di kanan.', svgId: 'drink' },
    { char: '饭', pinyin: 'fàn', meaning: 'Nasi / Makanan', book: 1, unit: 9, strokes: 7, category: 'food', tip: 'Radikal makanan (饣) di kiri dan 反 di sebelah kanan.', svgId: 'rice' },
    { char: '茶', pinyin: 'chá', meaning: 'Teh', book: 1, unit: 9, strokes: 9, category: 'food', tip: 'Daun teh (艹) di atas, 人 di tengah, dan kayu (木) di bawah.', svgId: 'tea' },
    { char: '果', pinyin: 'guǒ', meaning: 'Buah', book: 1, unit: 9, strokes: 8, category: 'food', tip: 'Bentuk buah bulat (日) di atas pohon kayu (木).', svgId: 'fruit' },

    // Unit 10: Gerakan & Aktivitas
    { char: '走', pinyin: 'zǒu', meaning: 'Berjalan', book: 1, unit: 10, strokes: 7, category: 'action', tip: 'Bagian atas 土 dan bagian bawah sapuan kaki melangkah.', svgId: 'walk' },
    { char: '跑', pinyin: 'pǎo', meaning: 'Berlari', book: 1, unit: 10, strokes: 12, category: 'action', tip: 'Radikal kaki (足) di kiri dan 包 di sebelah kanan.', svgId: 'run' },
    { char: '跳', pinyin: 'tiào', meaning: 'Melompat', book: 1, unit: 10, strokes: 13, category: 'action', tip: 'Radikal kaki (足) di kiri dan 兆 di sebelah kanan.', svgId: 'jump' },
    { char: '看', pinyin: 'kàn', meaning: 'Melihat', book: 1, unit: 10, strokes: 9, category: 'action', tip: 'Tangan (手) memayungi mata (目) saat memandang jauh.', svgId: 'look' },
    { char: '听', pinyin: 'tīng', meaning: 'Mendengar', book: 1, unit: 10, strokes: 7, category: 'action', tip: 'Radikal mulut (口) di kiri dan 斤 di sebelah kanan.', svgId: 'listen' },
    { char: '说', pinyin: 'shuō', meaning: 'Berbicara', book: 1, unit: 10, strokes: 9, category: 'action', tip: 'Radikal bahasa (讠) di kiri dan 兑 di sebelah kanan.', svgId: 'speak' },

    // =========================================================================
    // HAN YU 2
    // =========================================================================
    // Unit 1: Waktu & Sekolah
    { char: '早', pinyin: 'zǎo', meaning: 'Pagi / Awal', book: 2, unit: 1, strokes: 6, category: 'time', tip: 'Matahari (日) baru terbit di atas angka sepuluh (十).', svgId: 'morning' },
    { char: '晚', pinyin: 'wǎn', meaning: 'Malam / Terlambat', book: 2, unit: 1, strokes: 11, category: 'time', tip: 'Matahari (日) di kiri dan 免 di sebelah kanan.', svgId: 'night' },
    { char: '老', pinyin: 'lǎo', meaning: 'Tua / Pengajar', book: 2, unit: 1, strokes: 6, category: 'school', tip: 'Guru dino yang bijaksana dan dihormati!', svgId: 'old' },
    { char: '师', pinyin: 'shī', meaning: 'Guru / Ahli', book: 2, unit: 1, strokes: 6, category: 'school', tip: 'Bagian dari kata 老师 (lǎoshī) = Guru.', svgId: 'teacher' },

    // Unit 2: Identitas Diri
    { char: '名', pinyin: 'míng', meaning: 'Nama', book: 2, unit: 2, strokes: 6, category: 'basic', tip: 'Bulan (夕) di atas mulut (口) untuk menyebutkan nama.', svgId: 'name' },
    { char: '字', pinyin: 'zì', meaning: 'Karakter Hanzi / Tulisan', book: 2, unit: 2, strokes: 6, category: 'basic', tip: 'Atap rumah (宀) melindungi anak (子) yang tekun belajar.', svgId: 'character' },
    { char: '叫', pinyin: 'jiào', meaning: 'Dipanggil / Bernama', book: 2, unit: 2, strokes: 5, category: 'basic', tip: 'Mulut (口) berseru memanggil teman dino!', svgId: 'call' },
    { char: '是', pinyin: 'shì', meaning: 'Adalah / Benar / Ya', book: 2, unit: 2, strokes: 9, category: 'basic', tip: 'Matahari (日) di atas dan 正 di bawahnya.', svgId: 'is' },
    { char: '生', pinyin: 'shēng', meaning: 'Murid / Tumbuh / Lahir', book: 2, unit: 2, strokes: 5, category: 'school', tip: 'Tanaman kecil bertunas tumbuh mekar dari tanah.', svgId: 'student' },

    // Unit 3: Usia & Kelas
    { char: '岁', pinyin: 'suì', meaning: 'Tahun Usia / Umur', book: 2, unit: 3, strokes: 6, category: 'time', tip: 'Gunung (山) di atas dan 夕 di sebelah bawah.', svgId: 'age' },
    { char: '几', pinyin: 'jǐ', meaning: 'Berapa (jumlah kecil)', book: 2, unit: 3, strokes: 2, category: 'basic', tip: 'Hanya 2 guratan melengkung yang ringkas.', svgId: 'how_many' },
    { char: '年', pinyin: 'nián', meaning: 'Tahun', book: 2, unit: 3, strokes: 6, category: 'time', tip: 'Enam guratan teratur untuk merayakan tahun baru!', svgId: 'year' },

    // Unit 4: Anggota Tubuh
    { char: '眼', pinyin: 'yǎn', meaning: 'Mata', book: 2, unit: 4, strokes: 11, category: 'body', tip: 'Radikal mata (目) di kiri disusul 艮 di sebelah kanan.', svgId: 'eye' },
    { char: '耳', pinyin: 'ěr', meaning: 'Telinga', book: 2, unit: 4, strokes: 6, category: 'body', tip: 'Bentuk daun telinga dino yang peka mendengar suara!', svgId: 'ear' },
    { char: '鼻', pinyin: 'bí', meaning: 'Hidung', book: 2, unit: 4, strokes: 14, category: 'body', tip: 'Karakter 14 guratan melambangkan hidung mancung.', svgId: 'nose' },
    { char: '手', pinyin: 'shǒu', meaning: 'Tangan', book: 2, unit: 4, strokes: 4, category: 'body', tip: 'Empat guratan seperti telapak dan cakar dino yang kuat.', svgId: 'hand' },
    { char: '长', pinyin: 'cháng', meaning: 'Panjang', book: 2, unit: 4, strokes: 4, category: 'size', tip: 'Seperti leher dinosaurus Brachiosaurus yang sangat panjang!', svgId: 'long' },

    // Unit 5: Pakaian & Warna
    { char: '衣', pinyin: 'yī', meaning: 'Pakaian / Baju', book: 2, unit: 5, strokes: 6, category: 'clothes', tip: 'Bentuk kerah dan lipatan mantel baju yang hangat.', svgId: 'clothes' },
    { char: '红', pinyin: 'hóng', meaning: 'Merah', book: 2, unit: 5, strokes: 6, category: 'color', tip: 'Radikal sutra (纟) di kiri dan 工 di sebelah kanan.', svgId: 'red' },
    { char: '黄', pinyin: 'huáng', meaning: 'Kuning', book: 2, unit: 5, strokes: 11, category: 'color', tip: 'Warna kuning cerah seperti telur dan matahari pagi.', svgId: 'yellow' },
    { char: '蓝', pinyin: 'lán', meaning: 'Biru', book: 2, unit: 5, strokes: 13, category: 'color', tip: 'Warna biru cerah seperti langit laut prasejarah.', svgId: 'blue' },
    { char: '绿', pinyin: 'lǜ', meaning: 'Hijau', book: 2, unit: 5, strokes: 11, category: 'color', tip: 'Warna hijau daun segar makanan dinosaurus herbivora!', svgId: 'green' },
    { char: '白', pinyin: 'bái', meaning: 'Putih', book: 2, unit: 5, strokes: 5, category: 'color', tip: 'Titik sapuan di atas disusul kotak 日 yang bersinar putih.', svgId: 'white' },

    // Unit 6: Hewan Populer & Dinosaurus
    { char: '龙', pinyin: 'lóng', meaning: 'Naga / Dinosaurus', book: 2, unit: 6, strokes: 5, category: 'animals', tip: 'Karakter naga purba 5 guratan dengan ekor melengkung gagah!', svgId: 'dino' },
    { char: '蛋', pinyin: 'dàn', meaning: 'Telur', book: 2, unit: 6, strokes: 11, category: 'animals', tip: 'Telur dinosaurus 11 guratan yang siap menetas!', svgId: 'egg' },
    { char: '鸟', pinyin: 'niǎo', meaning: 'Burung / Pterodactyl', book: 2, unit: 6, strokes: 5, category: 'animals', tip: 'Menyerupai burung purba yang membentangkan sayap lebar.', svgId: 'bird' },
    { char: '鱼', pinyin: 'yú', meaning: 'Ikan', book: 2, unit: 6, strokes: 8, category: 'animals', tip: 'Kepala ikan, badan bersisik, dan ekor berenang di danau.', svgId: 'fish' },
    { char: '猫', pinyin: 'māo', meaning: 'Kucing', book: 2, unit: 6, strokes: 11, category: 'animals', tip: 'Radikal hewan (犭) di kiri dan 苗 di sebelah kanan.', svgId: 'cat' },
    { char: '狗', pinyin: 'gǒu', meaning: 'Anjing', book: 2, unit: 6, strokes: 8, category: 'animals', tip: 'Radikal hewan (犭) di kiri dan 句 di sebelah kanan.', svgId: 'dog' },
    { char: '象', pinyin: 'xiàng', meaning: 'Gajah / Mammoth', book: 2, unit: 6, strokes: 11, category: 'animals', tip: 'Menyerupai belalai dan tubuh gajah raksasa purba.', svgId: 'elephant' },

    // Unit 7: Buah-buahan
    { char: '苹', pinyin: 'píng', meaning: 'Apel (苹)', book: 2, unit: 7, strokes: 8, category: 'food', tip: 'Radikal tanaman (艹) di atas dan 平 di bawahnya.', svgId: 'apple' },
    { char: '蕉', pinyin: 'jiāo', meaning: 'Pisang (蕉)', book: 2, unit: 7, strokes: 15, category: 'food', tip: 'Radikal tanaman (艹) di atas dan 焦 di bawahnya.', svgId: 'banana' },
    { char: '瓜', pinyin: 'guā', meaning: 'Semangka / Melon / Labu', book: 2, unit: 7, strokes: 5, category: 'food', tip: 'Bentuk buah manis yang menggelantung pada sulur rambat.', svgId: 'watermelon' },

    // Unit 8: Hari & Tempat
    { char: '期', pinyin: 'qī', meaning: 'Periode / Waktu / Minggu', book: 2, unit: 8, strokes: 12, category: 'time', tip: 'Karakter 其 di sebelah kiri dan bulan (月) di kanan.', svgId: 'calendar' },
    { char: '今', pinyin: 'jīn', meaning: 'Sekarang / Hari Ini', book: 2, unit: 8, strokes: 4, category: 'time', tip: 'Atap payung 人 di atas dan sapuan garis mendatar di bawah.', svgId: 'today' },
    { char: '明', pinyin: 'míng', meaning: 'Terang / Besok', book: 2, unit: 8, strokes: 8, category: 'time', tip: 'Matahari (日) dan bulan (月) bersama memancarkan cahaya terang.', svgId: 'tomorrow' },
    { char: '去', pinyin: 'qù', meaning: 'Pergi', book: 2, unit: 8, strokes: 5, category: 'action', tip: 'Tanah (土) di atas disusul langkah kaki di bawahnya.', svgId: 'go' },
    { char: '校', pinyin: 'xiào', meaning: 'Sekolah (学校)', book: 2, unit: 8, strokes: 10, category: 'school', tip: 'Radikal kayu (木) di kiri dan 交 di sebelah kanan.', svgId: 'school' },

    // =========================================================================
    // HAN YU 3 s/d HAN YU 12 (Selected Core Vocabulary Per Book)
    // =========================================================================
    // Han Yu 3
    { char: '学', pinyin: 'xué', meaning: 'Belajar', book: 3, unit: 1, strokes: 8, category: 'school', tip: 'Atap belajar di atas dan anak (子) yang tekun membaca.', svgId: 'study' },
    { char: '同', pinyin: 'tóng', meaning: 'Sama / Teman (同学)', book: 3, unit: 1, strokes: 6, category: 'school', tip: 'Bingkai luar 冂 diisi garis mendatar dan kotak 口.', svgId: 'together' },
    { char: '室', pinyin: 'shì', meaning: 'Ruangan / Kamar (教室)', book: 3, unit: 2, strokes: 9, category: 'school', tip: 'Atap rumah (宀) di atas dan 至 di bawahnya.', svgId: 'room' },
    { char: '包', pinyin: 'bāo', meaning: 'Tas / Membungkus (书包)', book: 3, unit: 2, strokes: 5, category: 'object', tip: 'Lekukan luar membungkus benda berharga di dalam tas.', svgId: 'backpack' },
    { char: '点', pinyin: 'diǎn', meaning: 'Jam / Titik / Sedikit', book: 3, unit: 3, strokes: 9, category: 'time', tip: 'Bagian atas 占 dan empat titik api/air (灬) di dasarnya.', svgId: 'clock' },
    { char: '床', pinyin: 'chuáng', meaning: 'Tempat Tidur / Ranjang', book: 3, unit: 4, strokes: 7, category: 'object', tip: 'Radikal dinding rumah (广) dengan kasur kayu (木) di dalamnya.', svgId: 'bed' },
    { char: '虎', pinyin: 'hǔ', meaning: 'Harimau', book: 3, unit: 5, strokes: 8, category: 'animals', tip: 'Raja hutan yang gagah dengan loreng yang berwibawa.', svgId: 'tiger' },
    { char: '猫', pinyin: 'māo', meaning: 'Panda (熊猫)', book: 3, unit: 5, strokes: 11, category: 'animals', tip: 'Panda lucu yang gemar makan rebung bambu hijau.', svgId: 'panda' },
    { char: '医', pinyin: 'yī', meaning: 'Dokter / Medis (医生)', book: 3, unit: 6, strokes: 7, category: 'profession', tip: 'Kotak pelindung 匚 diisi panah pengobatan (矢).', svgId: 'doctor' },
    { char: '钱', pinyin: 'qián', meaning: 'Uang', book: 3, unit: 7, strokes: 10, category: 'shopping', tip: 'Radikal logam/emas (钅) di kiri dan 戋 di kanan.', svgId: 'money' },

    // Han Yu 4
    { char: '球', pinyin: 'qiú', meaning: 'Bola (足球, 篮球)', book: 4, unit: 1, strokes: 11, category: 'sports', tip: 'Radikal batu permata (王/玉) di kiri dan 求 di kanan.', svgId: 'ball' },
    { char: '车', pinyin: 'chē', meaning: 'Kendaraan / Mobil / Kereta', book: 4, unit: 2, strokes: 4, category: 'transport', tip: 'Bentuk roda dan gandar gerobak prasejarah.', svgId: 'car' },
    { char: '机', pinyin: 'jī', meaning: 'Pesawat / Mesin (飞机)', book: 4, unit: 2, strokes: 6, category: 'transport', tip: 'Radikal kayu (木) di kiri dan 几 di sebelah kanan.', svgId: 'plane' },
    { char: '春', pinyin: 'chūn', meaning: 'Musim Semi', book: 4, unit: 3, strokes: 9, category: 'seasons', tip: 'Tiga garis mendatar, orang (人), dan matahari (日).', svgId: 'spring' },
    { char: '夏', pinyin: 'xià', meaning: 'Musim Panas', book: 4, unit: 3, strokes: 10, category: 'seasons', tip: 'Sepuluh guratan indah menggambarkan kehangatan musim panas.', svgId: 'summer' },
    { char: '秋', pinyin: 'qiū', meaning: 'Musim Gugur', book: 4, unit: 3, strokes: 9, category: 'seasons', tip: 'Batang gandum (禾) matang berwarna keemasan di samping api (火).', svgId: 'autumn' },
    { char: '冬', pinyin: 'dōng', meaning: 'Musim Dingin', book: 4, unit: 3, strokes: 5, category: 'seasons', tip: 'Sapuan atap di atas dan dua titik butiran es beku di bawah.', svgId: 'winter' },
    { char: '奶', pinyin: 'nǎi', meaning: 'Susu / Nenek (牛奶)', book: 4, unit: 4, strokes: 5, category: 'food', tip: 'Radikal wanita (女) di kiri dan 乃 di sebelah kanan.', svgId: 'milk' },

    // Han Yu 5
    { char: '歌', pinyin: 'gē', meaning: 'Lagu / Menyanyi (唱歌)', book: 5, unit: 1, strokes: 14, category: 'arts', tip: 'Dua karakter 哥 di kiri dan menguap/bernapas (欠) di kanan.', svgId: 'sing' },
    { char: '舞', pinyin: 'wǔ', meaning: 'Menari (跳舞)', book: 5, unit: 1, strokes: 14, category: 'arts', tip: 'Gerakan kaki dan selendang penari yang anggun meliuk.', svgId: 'dance' },
    { char: '画', pinyin: 'huà', meaning: 'Menggambar / Lukisan', book: 5, unit: 1, strokes: 8, category: 'arts', tip: 'Kuas menggambar batas ladang dan pemandangan alam.', svgId: 'paint' },
    { char: '电', pinyin: 'diàn', meaning: 'Listrik / Elektronik (电视, 电话)', book: 5, unit: 2, strokes: 5, category: 'tech', tip: 'Kilatan petir yang ditampung kotak daya bertenaga.', svgId: 'electric' },
    { char: '树', pinyin: 'shù', meaning: 'Pohon (树木, 种树)', book: 5, unit: 3, strokes: 9, category: 'nature', tip: 'Kayu (木) di kiri, tanaman di tengah, dan 寸 di kanan.', svgId: 'tree_big' },
    { char: '节', pinyin: 'jié', meaning: 'Festival / Hari Raya (中秋节, 春节)', book: 5, unit: 4, strokes: 5, category: 'culture', tip: 'Bambu (艹) di atas dan lekukan 卩 di bawah.', svgId: 'festival' },

    // Han Yu 6
    { char: '网', pinyin: 'wǎng', meaning: 'Jaringan / Internet (网络)', book: 6, unit: 1, strokes: 6, category: 'tech', tip: 'Jaring laba-laba atau jala yang menghubungkan seluruh dunia.', svgId: 'internet' },
    { char: '城', pinyin: 'chéng', meaning: 'Kota / Tembok Besar (长城)', book: 6, unit: 2, strokes: 9, category: 'history', tip: 'Tanah (土) di kiri dan 成 di sebelah kanan.', svgId: 'great_wall' },
    { char: '舟', pinyin: 'zhōu', meaning: 'Perahu (龙舟)', book: 6, unit: 3, strokes: 6, category: 'culture', tip: 'Bentuk perahu naga purba yang melaju membelah sungai.', svgId: 'dragon_boat' },
    { char: '宇', pinyin: 'yǔ', meaning: 'Alam Semesta (宇宙, 宇航员)', book: 6, unit: 4, strokes: 6, category: 'space', tip: 'Atap ruang (宀) dan 于 di bawahnya.', svgId: 'space' },
    { char: '航', pinyin: 'háng', meaning: 'Berlayar / Terbang (航空)', book: 6, unit: 4, strokes: 10, category: 'space', tip: 'Perahu (舟) di kiri dan 亢 di sebelah kanan.', svgId: 'rocket' },
    { char: '平', pinyin: 'píng', meaning: 'Damai / Rata (和平)', book: 6, unit: 5, strokes: 5, category: 'society', tip: 'Garis mendatar atas, dua titik seimbang, dan tiang tegak lurus.', svgId: 'peace' },

    // Han Yu 7
    { char: '语', pinyin: 'yǔ', meaning: 'Bahasa / Pepatah (成语, 汉语)', book: 7, unit: 1, strokes: 9, category: 'language', tip: 'Radikal bahasa (讠) di kiri dan 五, 口 di sebelah kanan.', svgId: 'idiom' },
    { char: '源', pinyin: 'yuán', meaning: 'Sumber / Asal Mula (起源)', book: 7, unit: 2, strokes: 13, category: 'history', tip: 'Mata air (氵) mengalir dari dataran padang (原).', svgId: 'origin' },
    { char: '食', pinyin: 'shí', meaning: 'Makanan / Kuliner (饮食)', book: 7, unit: 3, strokes: 9, category: 'food', tip: 'Bentuk mangkuk saji makanan bergizi.', svgId: 'cuisine' },

    // Han Yu 8
    { char: '江', pinyin: 'jiāng', meaning: 'Sungai Besar (长江)', book: 8, unit: 1, strokes: 6, category: 'geography', tip: 'Radikal air (氵) di kiri dan 工 di sebelah kanan.', svgId: 'river' },
    { char: '明', pinyin: 'míng', meaning: 'Penemuan / Terang (发明)', book: 8, unit: 2, strokes: 8, category: 'invention', tip: 'Matahari dan bulan memancarkan pencerahan ilmu.', svgId: 'invention' },
    { char: '纸', pinyin: 'zhǐ', meaning: 'Kertas (造纸术)', book: 8, unit: 2, strokes: 7, category: 'invention', tip: 'Radikal sutra (纟) di kiri dan 氏 di sebelah kanan.', svgId: 'paper' },

    // Han Yu 9
    { char: '法', pinyin: 'fǎ', meaning: 'Metode / Seni Kaligrafi (书法)', book: 9, unit: 1, strokes: 8, category: 'arts', tip: 'Air (氵) di kiri dan 去 di sebelah kanan.', svgId: 'calligraphy' },
    { char: '剧', pinyin: 'jù', meaning: 'Drama / Opera (京剧)', book: 9, unit: 1, strokes: 10, category: 'arts', tip: 'Karakter 10 guratan seni teater topeng megah.', svgId: 'opera' },
    { char: '游', pinyin: 'yóu', meaning: 'Perjalanan / Berenang (西游记)', book: 9, unit: 2, strokes: 12, category: 'literature', tip: 'Air (氵) di kiri, bendera 方 di tengah, dan 子 di kanan.', svgId: 'monkey_king' },

    // Han Yu 10
    { char: '贸', pinyin: 'mào', meaning: 'Perdagangan (贸易)', book: 10, unit: 1, strokes: 9, category: 'economy', tip: 'Karakter 卯 di atas dan kulit kerang berharga (贝) di bawah.', svgId: 'trade' },
    { char: '路', pinyin: 'lù', meaning: 'Jalan / Rute (丝绸之路)', book: 10, unit: 1, strokes: 13, category: 'history', tip: 'Kaki melangkah (足) menyusuri jalan panjang 各.', svgId: 'silk_road' },
    { char: '态', pinyin: 'tài', meaning: 'Ekologi / Kondisi (生态)', book: 10, unit: 2, strokes: 8, category: 'ecology', tip: 'Besar (太) di atas hati (心) yang peduli kelestarian bumi.', svgId: 'ecology' },

    // Han Yu 11
    { char: '哲', pinyin: 'zhé', meaning: 'Filosofi / Kebijaksanaan (哲学)', book: 11, unit: 1, strokes: 10, category: 'philosophy', tip: 'Tangan membiasakan (折) disuarakan lewat lisan (口).', svgId: 'philosophy' },
    { char: '新', pinyin: 'xīn', meaning: 'Baru / Inovasi (创新)', book: 11, unit: 2, strokes: 13, category: 'innovation', tip: 'Tegak (立), kayu (木), dan kapak (斤) memahat inovasi baru.', svgId: 'innovation' },

    // Han Yu 12
    { char: '言', pinyin: 'yán', meaning: 'Tutur Kata / Pidato (演讲)', book: 12, unit: 1, strokes: 7, category: 'speech', tip: 'Titik dan tiga garis mendatar di atas mulut (口).', svgId: 'speech' },
    { char: '际', pinyin: 'jì', meaning: 'Internasional / Antara (国际)', book: 12, unit: 2, strokes: 7, category: 'global', tip: 'Radikal bukit (阝) di kiri dan 示 di sebelah kanan.', svgId: 'global' },
    { char: '望', pinyin: 'wàng', meaning: 'Harapan / Masa Depan (展望)', book: 12, unit: 3, strokes: 11, category: 'future', tip: 'Memandang bulan (月) dari ketinggian dengan penuh harapan.', svgId: 'future' }
  ],

  // Kosakata Bergambar untuk Game Mencocokkan (Dino Match Game)
  // Menampilkan Gambar Vektor SVG Keren & Menarik
  matchVocabItems: [
    {
      id: 'dino',
      hanzi: '恐龙',
      pinyin: 'kǒnglóng',
      meaning: 'Dinosaurus',
      book: 2,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <path d="M75,30 C85,25 90,35 85,45 C80,55 70,52 65,48 L55,55 C55,55 60,75 52,85 C48,90 42,90 40,85 C38,80 42,75 42,70 L35,70 C33,75 30,85 25,85 C20,85 20,78 24,70 C15,65 10,50 15,35 C18,25 30,22 42,28 C50,22 62,20 70,25 Z" fill="#4CAF50"/>
        <circle cx="80" cy="35" r="3" fill="#FFFFFF"/><circle cx="81" cy="35" r="1.5" fill="#2E7D32"/>
        <path d="M78,42 Q83,45 80,48" stroke="#2E7D32" stroke-width="2" fill="none"/>
        <polygon points="65,22 68,15 72,23" fill="#81C784"/>
        <polygon points="55,20 58,12 62,21" fill="#81C784"/>
        <polygon points="45,22 48,15 52,24" fill="#81C784"/>
        <ellipse cx="48" cy="52" rx="14" ry="10" fill="#A5D6A7"/>
      </svg>`
    },
    {
      id: 'egg',
      hanzi: '恐龙蛋',
      pinyin: 'kǒnglóng dàn',
      meaning: 'Telur Dinosaurus',
      book: 2,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <ellipse cx="50" cy="55" rx="30" ry="38" fill="#FFF9C4" stroke="#FBC02D" stroke-width="3"/>
        <ellipse cx="38" cy="45" rx="5" ry="7" fill="#81C784" opacity="0.8"/>
        <ellipse cx="60" cy="62" rx="6" ry="8" fill="#81C784" opacity="0.8"/>
        <ellipse cx="48" cy="72" rx="4" ry="5" fill="#81C784" opacity="0.8"/>
        <path d="M35,38 L45,45 L40,55 L55,50 L65,60" stroke="#F57F17" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M48,22 Q52,18 55,25" stroke="#FFE082" stroke-width="3" fill="none"/>
      </svg>`
    },
    {
      id: 'sun',
      hanzi: '太阳',
      pinyin: 'tàiyáng',
      meaning: 'Matahari',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <circle cx="50" cy="50" r="22" fill="#FFA726"/>
        <circle cx="50" cy="50" r="18" fill="#FFEB3B"/>
        <line x1="50" y1="10" x2="50" y2="20" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="50" y1="80" x2="50" y2="90" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="10" y1="50" x2="20" y2="50" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="80" y1="50" x2="90" y2="50" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="22" y1="22" x2="29" y2="29" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="71" y1="71" x2="78" y2="78" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="22" y1="78" x2="29" y2="71" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <line x1="71" y1="29" x2="78" y2="22" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
        <circle cx="44" cy="46" r="2.5" fill="#E65100"/>
        <circle cx="56" cy="46" r="2.5" fill="#E65100"/>
        <path d="M45,54 Q50,58 55,54" stroke="#E65100" stroke-width="2" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'moon',
      hanzi: '月亮',
      pinyin: 'yuèliang',
      meaning: 'Bulan',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <path d="M60,15 C40,18 25,35 25,55 C25,75 42,90 62,88 C50,80 42,65 44,48 C46,32 55,20 60,15 Z" fill="#FFD54F"/>
        <circle cx="75" cy="25" r="2" fill="#FFF59D"/>
        <circle cx="82" cy="45" r="3" fill="#FFF59D"/>
        <circle cx="70" cy="65" r="2.5" fill="#FFF59D"/>
        <circle cx="38" cy="48" r="2" fill="#F57F17"/>
        <path d="M38,55 Q42,58 45,54" stroke="#F57F17" stroke-width="1.5" fill="none"/>
      </svg>`
    },
    {
      id: 'mountain',
      hanzi: '大山',
      pinyin: 'dàshān',
      meaning: 'Gunung Besar',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <polygon points="50,18 15,85 85,85" fill="#5D4037"/>
        <polygon points="50,18 35,45 50,40 65,45" fill="#FFFFFF"/>
        <polygon points="25,45 5,85 45,85" fill="#8D6E63"/>
        <polygon points="75,40 55,85 95,85" fill="#795548"/>
      </svg>`
    },
    {
      id: 'water',
      hanzi: '水',
      pinyin: 'shuǐ',
      meaning: 'Air',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <path d="M50,15 C50,15 25,50 25,68 C25,82 36,90 50,90 C64,90 75,82 75,68 C75,50 50,15 50,15 Z" fill="#29B6F6"/>
        <path d="M42,50 C42,50 32,68 35,76 C37,81 44,83 48,80 C40,78 38,65 42,50 Z" fill="#E1F5FE" opacity="0.85"/>
        <circle cx="60" cy="65" r="4" fill="#FFFFFF" opacity="0.8"/>
      </svg>`
    },
    {
      id: 'volcano',
      hanzi: '火山',
      pinyin: 'huǒshān',
      meaning: 'Gunung Berapi',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <polygon points="50,25 20,85 80,85" fill="#795548"/>
        <polygon points="50,25 35,55 50,45 65,55" fill="#D32F2F"/>
        <ellipse cx="50" cy="25" rx="12" ry="5" fill="#FF5722"/>
        <path d="M45,22 Q40,8 48,2 Q55,10 52,22" fill="#FF9800"/>
        <path d="M48,20 Q52,12 58,5 Q62,15 54,22" fill="#FFEB3B"/>
        <circle cx="38" cy="15" r="3" fill="#FF5722"/>
        <circle cx="62" cy="12" r="2.5" fill="#FF9800"/>
      </svg>`
    },
    {
      id: 'tree',
      hanzi: '树木',
      pinyin: 'shùmù',
      meaning: 'Pohon Purba',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <rect x="44" y="55" width="12" height="35" rx="3" fill="#8D6E63"/>
        <circle cx="50" cy="38" r="26" fill="#388E3C"/>
        <circle cx="35" cy="45" r="18" fill="#4CAF50"/>
        <circle cx="65" cy="45" r="18" fill="#4CAF50"/>
        <circle cx="50" cy="25" r="16" fill="#66BB6A"/>
        <circle cx="42" cy="38" r="4" fill="#C8E6C9" opacity="0.6"/>
      </svg>`
    },
    {
      id: 'apple',
      hanzi: '苹果',
      pinyin: 'píngguǒ',
      meaning: 'Apel',
      book: 2,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <path d="M50,30 C40,15 20,25 20,50 C20,75 38,88 50,88 C62,88 80,75 80,50 C80,25 60,15 50,30 Z" fill="#E53935"/>
        <path d="M50,30 C46,18 48,10 54,6" stroke="#5D4037" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path d="M53,15 Q65,8 68,18 Q58,22 53,15 Z" fill="#43A047"/>
        <ellipse cx="33" cy="45" rx="5" ry="10" fill="#FF8A80" opacity="0.6" transform="rotate(-20 33 45)"/>
      </svg>`
    },
    {
      id: 'banana',
      hanzi: '香蕉',
      pinyin: 'xiāngjiāo',
      meaning: 'Pisang',
      book: 2,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <path d="M20,70 Q35,85 65,70 Q85,55 85,25 Q70,45 50,55 Q30,62 20,70 Z" fill="#FDD835" stroke="#FBC02D" stroke-width="2"/>
        <circle cx="85" cy="25" r="4" fill="#6D4C41"/>
        <path d="M20,70 L15,75" stroke="#6D4C41" stroke-width="3" stroke-linecap="round"/>
        <path d="M30,66 Q52,60 72,40" stroke="#FFF59D" stroke-width="2.5" fill="none"/>
      </svg>`
    },
    {
      id: 'bird',
      hanzi: '小鸟',
      pinyin: 'xiǎoniǎo',
      meaning: 'Burung',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <circle cx="45" cy="42" r="20" fill="#42A5F5"/>
        <polygon points="30,42 15,46 30,50" fill="#FFA726"/>
        <ellipse cx="55" cy="52" rx="22" ry="16" fill="#1E88E5"/>
        <circle cx="40" cy="38" r="3" fill="#FFFFFF"/><circle cx="39" cy="38" r="1.5" fill="#0D47A1"/>
        <polygon points="70,52 90,44 85,58" fill="#1565C0"/>
        <line x1="48" y1="68" x2="44" y2="82" stroke="#FF9800" stroke-width="3" stroke-linecap="round"/>
        <line x1="58" y1="68" x2="56" y2="82" stroke="#FF9800" stroke-width="3" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'fish',
      hanzi: '鱼',
      pinyin: 'yú',
      meaning: 'Ikan',
      book: 1,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <ellipse cx="45" cy="50" rx="30" ry="18" fill="#FF7043"/>
        <polygon points="75,50 92,35 92,65" fill="#FF5722"/>
        <polygon points="45,32 55,20 60,34" fill="#FFA726"/>
        <circle cx="28" cy="46" r="3.5" fill="#FFFFFF"/><circle cx="27" cy="46" r="2" fill="#263238"/>
        <path d="M22,54 Q27,58 32,54" stroke="#D84315" stroke-width="2" fill="none"/>
        <path d="M42,42 Q48,50 42,58" stroke="#FFCCBC" stroke-width="2" fill="none"/>
        <path d="M52,42 Q58,50 52,58" stroke="#FFCCBC" stroke-width="2" fill="none"/>
      </svg>`
    },
    {
      id: 'backpack',
      hanzi: '书包',
      pinyin: 'shūbāo',
      meaning: 'Tas Sekolah',
      book: 3,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <rect x="25" y="30" width="50" height="55" rx="10" fill="#3F51B5"/>
        <rect x="32" y="45" width="36" height="28" rx="6" fill="#5C6BC0"/>
        <path d="M38,30 C38,18 62,18 62,30" stroke="#303F9F" stroke-width="5" fill="none"/>
        <rect x="44" y="55" width="12" height="8" rx="2" fill="#FFCA28"/>
      </svg>`
    },
    {
      id: 'panda',
      hanzi: '熊猫',
      pinyin: 'xióngmāo',
      meaning: 'Panda',
      book: 3,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <circle cx="50" cy="52" r="32" fill="#FFFFFF" stroke="#212121" stroke-width="3"/>
        <circle cx="25" cy="28" r="10" fill="#212121"/>
        <circle cx="75" cy="28" r="10" fill="#212121"/>
        <ellipse cx="38" cy="48" rx="7" ry="10" fill="#212121" transform="rotate(-15 38 48)"/>
        <ellipse cx="62" cy="48" rx="7" ry="10" fill="#212121" transform="rotate(15 62 48)"/>
        <circle cx="38" cy="46" r="2.5" fill="#FFFFFF"/>
        <circle cx="62" cy="46" r="2.5" fill="#FFFFFF"/>
        <ellipse cx="50" cy="60" rx="4" ry="3" fill="#212121"/>
        <path d="M46,65 Q50,68 54,65" stroke="#212121" stroke-width="2" fill="none"/>
      </svg>`
    },
    {
      id: 'plane',
      hanzi: '飞机',
      pinyin: 'fēijī',
      meaning: 'Pesawat Terbang',
      book: 4,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <path d="M15,50 L85,30 L85,42 L55,56 L65,75 L55,77 L45,60 L25,65 Z" fill="#00ACC1"/>
        <circle cx="75" cy="36" r="3" fill="#E0F7FA"/>
        <path d="M48,50 L60,20 L68,20 L58,48 Z" fill="#00838F"/>
      </svg>`
    },
    {
      id: 'clothes',
      hanzi: '衣服',
      pinyin: 'yīfu',
      meaning: 'Pakaian / Baju',
      book: 2,
      svg: `<svg viewBox="0 0 100 100" class="dino-svg">
        <path d="M35,25 L50,35 L65,25 L88,38 L80,52 L70,45 L70,82 L30,82 L30,45 L20,52 L12,38 Z" fill="#AB47BC"/>
        <circle cx="50" cy="48" r="2.5" fill="#FDD835"/>
        <circle cx="50" cy="60" r="2.5" fill="#FDD835"/>
        <circle cx="50" cy="72" r="2.5" fill="#FDD835"/>
      </svg>`
    }
  ],

  // =========================================================================
  // BANK SOAL KUIS KHUSUS JUMLAH GURATAN & KOSAKATA HAN YU 1 - 12
  // Fokus Utama: Guratan 1, 3, 4, 5, 6, 7, 11 dan Variasi Han Yu 1 - 12
  // =========================================================================
  strokeQuizQuestions: [
    // --- GURATAN 1 ---
    {
      id: 101,
      type: 'stroke-count',
      targetStroke: 1,
      question: 'Berapa jumlah guratan dari karakter "一" (yī - satu)?',
      hanzi: '一',
      pinyin: 'yī',
      meaning: 'Satu (1)',
      book: 1,
      options: [
        { text: '1 Guratan', isCorrect: true },
        { text: '2 Guratan', isCorrect: false },
        { text: '3 Guratan', isCorrect: false },
        { text: '4 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 一 (yī) hanya memiliki tepat 1 guratan yaitu 横 (héng / garis mendatar dari kiri ke kanan).',
      strokeSteps: ['1. 横 (Garis mendatar)']
    },

    // --- GURATAN 3 ---
    {
      id: 102,
      type: 'stroke-count',
      targetStroke: 3,
      question: 'Berapa jumlah total guratan karakter "口" (kǒu - mulut)?',
      hanzi: '口',
      pinyin: 'kǒu',
      meaning: 'Mulut',
      book: 1,
      options: [
        { text: '4 Guratan', isCorrect: false },
        { text: '3 Guratan', isCorrect: true },
        { text: '2 Guratan', isCorrect: false },
        { text: '5 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 口 (kǒu) memiliki 3 guratan: 1. 竖 (garis tegak kiri), 2. 横折 (garis siku atas-kanan), 3. 横 (tutup bawah).',
      strokeSteps: ['1. 竖 (shù)', '2. 横折 (héngzhé)', '3. 横 (héng)']
    },
    {
      id: 103,
      type: 'stroke-count',
      targetStroke: 3,
      question: 'Berapa jumlah guratan karakter "山" (shān - gunung)?',
      hanzi: '山',
      pinyin: 'shān',
      meaning: 'Gunung',
      book: 1,
      options: [
        { text: '2 Guratan', isCorrect: false },
        { text: '3 Guratan', isCorrect: true },
        { text: '4 Guratan', isCorrect: false },
        { text: '5 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 山 (shān) memiliki 3 guratan: 1. 竖 (tegak tengah), 2. 竖折 (siku kiri-bawah), 3. 竖 (tegak kanan).',
      strokeSteps: ['1. 竖 (shù - tengah)', '2. 竖折 (shùzhé - kiri bawah)', '3. 竖 (shù - kanan)']
    },
    {
      id: 104,
      type: 'stroke-find-char',
      targetStroke: 3,
      question: 'Manakah karakter dari Han Yu 1 berikut yang memiliki tepat 3 GURATAN?',
      options: [
        { text: '大 (dà - besar)', sub: '3 Guratan', isCorrect: true },
        { text: '木 (mù - kayu)', sub: '4 Guratan', isCorrect: false },
        { text: '火 (huǒ - api)', sub: '4 Guratan', isCorrect: false },
        { text: '水 (shuǐ - air)', sub: '4 Guratan', isCorrect: false }
      ],
      explanation: '大 (dà) memiliki 3 guratan: 1. 横 (héng), 2. 撇 (piě), 3. 捺 (nà). Sedangkan 木, 火, 水 masing-masing 4 guratan.',
      strokeSteps: ['1. 横', '2. 撇', '3. 捺']
    },

    // --- GURATAN 4 ---
    {
      id: 105,
      type: 'stroke-count',
      targetStroke: 4,
      question: 'Berapa jumlah guratan dari karakter "水" (shuǐ - air)?',
      hanzi: '水',
      pinyin: 'shuǐ',
      meaning: 'Air',
      book: 1,
      options: [
        { text: '3 Guratan', isCorrect: false },
        { text: '4 Guratan', isCorrect: true },
        { text: '5 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 水 (shuǐ) memiliki 4 guratan: 1. 竖钩 (shùgōu - tengah), 2. 横撇 (héngpiě - kiri), 3. 撇 (piě - kanan atas), 4. 捺 (nà - kanan bawah).',
      strokeSteps: ['1. 竖钩 (tengah)', '2. 横撇 (kiri)', '3. 撇 (kanan atas)', '4. 捺 (kanan bawah)']
    },
    {
      id: 106,
      type: 'stroke-count',
      targetStroke: 4,
      question: 'Karakter "日" (rì - matahari) dari Han Yu 1 terdiri dari berapa guratan?',
      hanzi: '日',
      pinyin: 'rì',
      meaning: 'Matahari / Hari',
      book: 1,
      options: [
        { text: '3 Guratan', isCorrect: false },
        { text: '4 Guratan', isCorrect: true },
        { text: '5 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 日 (rì) memiliki 4 guratan: 1. 竖, 2. 横折, 3. 横 (tengah), 4. 横 (tutup bawah).',
      strokeSteps: ['1. 竖', '2. 横折', '3. 横 (tengah)', '4. 横 (bawah)']
    },

    // --- GURATAN 5 ---
    {
      id: 107,
      type: 'stroke-count',
      targetStroke: 5,
      question: 'Berapa jumlah guratan karakter maskot kita "龙" (lóng - naga / dino)?',
      hanzi: '龙',
      pinyin: 'lóng',
      meaning: 'Naga / Dinosaurus',
      book: 2,
      options: [
        { text: '4 Guratan', isCorrect: false },
        { text: '5 Guratan', isCorrect: true },
        { text: '6 Guratan', isCorrect: false },
        { text: '7 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 龙 (lóng) memiliki 5 guratan: 1. 一 (横), 2. 撇 (撇), 3. 竖提 (竖提), 4. 横折弯钩 (badan naga), 5. 点 (titik atas).',
      strokeSteps: ['1. 横', '2. 撇', '3. 竖提', '4. 横折弯钩', '5. 点']
    },
    {
      id: 108,
      type: 'stroke-find-char',
      targetStroke: 5,
      question: 'Manakah karakter Han Yu berikut yang memiliki tepat 5 GURATAN?',
      options: [
        { text: '鸟 (niǎo - burung)', sub: '5 Guratan', isCorrect: true },
        { text: '人 (rén - orang)', sub: '2 Guratan', isCorrect: false },
        { text: '天 (tiān - langit)', sub: '4 Guratan', isCorrect: false },
        { text: '你 (nǐ - kamu)', sub: '7 Guratan', isCorrect: false }
      ],
      explanation: '鸟 (niǎo) memiliki 5 guratan: 1. 撇, 2. 横折钩, 3. 点, 4. 竖折折钩, 5. 横.',
      strokeSteps: ['1. 撇', '2. 横折钩', '3. 点', '4. 竖折折钩', '5. 横']
    },

    // --- GURATAN 6 ---
    {
      id: 109,
      type: 'stroke-count',
      targetStroke: 6,
      question: 'Berapa jumlah guratan dari karakter "妈" (mā - ibu) dari Han Yu 1?',
      hanzi: '妈',
      pinyin: 'mā',
      meaning: 'Ibu',
      book: 1,
      options: [
        { text: '5 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: true },
        { text: '7 Guratan', isCorrect: false },
        { text: '8 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 妈 (mā) terdiri dari 6 guratan: 女 (3 guratan) + 马 (3 guratan) = Total 6 guratan.',
      strokeSteps: ['1. 撇点 (女)', '2. 撇 (女)', '3. 提 (女)', '4. 横折 (马)', '5. 竖折折钩 (马)', '6. 横 (马)']
    },
    {
      id: 110,
      type: 'stroke-find-char',
      targetStroke: 6,
      question: 'Manakah karakter Han Yu berikut yang memiliki tepat 6 GURATAN?',
      options: [
        { text: '好 (hǎo - baik)', sub: '6 Guratan', isCorrect: true },
        { text: '中 (zhōng - tengah)', sub: '4 Guratan', isCorrect: false },
        { text: '门 (mén - pintu)', sub: '3 Guratan', isCorrect: false },
        { text: '书 (shū - buku)', sub: '4 Guratan', isCorrect: false }
      ],
      explanation: '好 (hǎo) memiliki 6 guratan: radikal 女 (3 guratan) + radikal 子 (3 guratan) = 6 guratan.',
      strokeSteps: ['1. 撇点', '2. 撇', '3. 提', '4. 横撇', '5. 竖钩', '6. 横']
    },

    // --- GURATAN 7 ---
    {
      id: 111,
      type: 'stroke-count',
      targetStroke: 7,
      question: 'Berapa jumlah total guratan karakter "你" (nǐ - kamu) dari Han Yu 1?',
      hanzi: '你',
      pinyin: 'nǐ',
      meaning: 'Kamu',
      book: 1,
      options: [
        { text: '6 Guratan', isCorrect: false },
        { text: '7 Guratan', isCorrect: true },
        { text: '8 Guratan', isCorrect: false },
        { text: '9 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 你 (nǐ) terdiri dari 7 guratan: radikal orang 亻(2 guratan) + bagian kanan 尔 (5 guratan) = 7 guratan.',
      strokeSteps: ['1. 撇 (亻)', '2. 竖 (亻)', '3. 撇', '4. 横撇', '5. 竖钩', '6. 撇', '7. 点']
    },
    {
      id: 112,
      type: 'stroke-count',
      targetStroke: 7,
      question: 'Berapa jumlah guratan karakter "我" (wǒ - saya/aku) dari Han Yu 1?',
      hanzi: '我',
      pinyin: 'wǒ',
      meaning: 'Saya / Aku',
      book: 1,
      options: [
        { text: '6 Guratan', isCorrect: false },
        { text: '7 Guratan', isCorrect: true },
        { text: '8 Guratan', isCorrect: false },
        { text: '9 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 我 (wǒ) terdiri dari tepat 7 guratan: 1. 撇, 2. 横, 3. 竖钩, 4. 提, 5. 斜钩, 6. 撇, 7. 点.',
      strokeSteps: ['1. 撇', '2. 横', '3. 竖钩', '4. 提', '5. 斜钩', '6. 撇', '7. 点']
    },

    // --- GURATAN 11 ---
    {
      id: 113,
      type: 'stroke-count',
      targetStroke: 11,
      question: 'Berapa jumlah guratan karakter "蛋" (dàn - telur dino) dari Han Yu 2?',
      hanzi: '蛋',
      pinyin: 'dàn',
      meaning: 'Telur',
      book: 2,
      options: [
        { text: '9 Guratan', isCorrect: false },
        { text: '10 Guratan', isCorrect: false },
        { text: '11 Guratan', isCorrect: true },
        { text: '12 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 蛋 (dàn) terdiri dari 11 guratan: bagian atas 疋 (5 guratan) + bagian bawah 虫 (6 guratan) = 11 guratan.',
      strokeSteps: ['1. 横撇', '2. 点', '3. 横撇', '4. 捺', '5. 竖', '6. 竖 (虫)', '7. 横折', '8. 横', '9. 竖', '10. 提', '11. 点']
    },
    {
      id: 114,
      type: 'stroke-find-char',
      targetStroke: 11,
      question: 'Manakah karakter Han Yu berikut yang memiliki tepat 11 GURATAN?',
      options: [
        { text: '雪 (xuě - salju)', sub: '11 Guratan', isCorrect: true },
        { text: '水 (shuǐ - air)', sub: '4 Guratan', isCorrect: false },
        { text: '雨 (yǔ - hujan)', sub: '8 Guratan', isCorrect: false },
        { text: '风 (fēng - angin)', sub: '4 Guratan', isCorrect: false }
      ],
      explanation: '雪 (xuě) memiliki 11 guratan: radikal 雨 (8 guratan) + bagian bawah 彐 (3 guratan) = 11 guratan.',
      strokeSteps: ['1-8. 雨 (Hujan)', '9. 横折', '10. 横', '11. 横']
    },

    // --- SOAL LANJUTAN HAN YU 1 - 12 ---
    {
      id: 115,
      type: 'hanzi-to-meaning',
      question: 'Apa arti dari karakter Hanzi "书包" (shūbāo) dari buku Han Yu 3?',
      hanzi: '书包',
      pinyin: 'shūbāo',
      audioText: '书包',
      book: 3,
      options: [
        { text: 'Tas Sekolah', isCorrect: true },
        { text: 'Buku Pelajaran', isCorrect: false },
        { text: 'Kotak Pensil', isCorrect: false },
        { text: 'Ruang Kelas', isCorrect: false }
      ],
      explanation: '书包 (shūbāo) artinya adalah Tas Sekolah (Tas untuk membawa buku).'
    },
    {
      id: 116,
      type: 'image-to-hanzi',
      question: 'Manakah Hanzi dan Pinyin yang tepat untuk gambar berikut?',
      imageSvgId: 'volcano',
      options: [
        { text: '火山 (huǒshān)', sub: 'Gunung Berapi', isCorrect: true },
        { text: '大山 (dàshān)', sub: 'Gunung Biasa', isCorrect: false },
        { text: '树木 (shùmù)', sub: 'Pohon Kayu', isCorrect: false },
        { text: '水 (shuǐ)', sub: 'Air Danau', isCorrect: false }
      ],
      explanation: 'Gambar tersebut adalah 火山 (huǒshān) = Gunung Berapi (gabungan Api + Gunung).'
    }
  ]
};

// Pastikan data tersedia secara global di window
if (typeof window !== 'undefined') {
  window.DINO_DATA = DINO_DATA;
}
