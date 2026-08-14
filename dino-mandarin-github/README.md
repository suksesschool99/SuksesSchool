# 🦖 Dino Mandarin Adventure (Han Yu 1 s/d Han Yu 12)

Website interaktif pembelajaran Bahasa Mandarin bertema **Little Dinosaurus** untuk kurikulum buku **PDF Han Yu 1 sampai Han Yu 12**.

![Dino Mandarin Preview](https://img.shields.io/badge/Mandarin-Han%20Yu%201--12-4CAF50?style=for-the-badge&logo=google-chrome&logoColor=white)
![Style](https://img.shields.io/badge/Theme-Little%20Dinosaur-FF9800?style=for-the-badge)
![Status](https://img.shields.io/badge/Deploy-GitHub%20Pages%20Ready-2196F3?style=for-the-badge)

---

## 🌟 3 Modul Utama Pembelajaran

### 1. ✍️ Latihan Menulis Guratan Hanzi (Stroke Writing Practice)
- **Kurikulum Per-Unit**: Pilihan buku dari **Han Yu 1 sampai Han Yu 12** dan per-unit.
- **Target Repetisi 3 s/d 5 Kali**: Latihan menulis karakter berulang dengan indikator telur dinosaurus yang retak dan menetas saat target tercapai.
- **Display Lengkap**: Hanzi besar, Pinyin berharakat, Arti Bahasa Indonesia, total guratan, radikal, tombol suara pelafalan Mandarin (`zh-CN`), dan tips dinosaurus.
- **Kanvas Interaktif**: Garis bantu (米字格, 田字格, Polos), animasi urutan guratan, dan mode kuis tulis mandiri.

### 2. 🧩 Game Mencocokkan Kosakata Bergambar (Dino Match)
- Membuka pasangan kartu gambar/ilustrasi dan kartu Hanzi + Pinyin.
- **Saat Cocok**: Menampilkan kartu lengkap dengan **Gambar + Hanzi + Pinyin + Arti Bahasa Indonesia** dan audio suara Mandarin.
- Pilihan tingkat: 4 pasang, 6 pasang, dan 8 pasang kartu.

### 3. 📝 Kuis Jumlah Guratan Hanzi (Stroke Count Quiz)
- Soal kuis pilihan ganda yang menanyakan jumlah total guratan karakter (fokus guratan **1, 3, 4, 5, 6, 7, 11** dan kosakata Han Yu 1-12).
- Pembahasan langkah demi langkah urutan guratan (*1. 横, 2. 竖, 3. 撇...*).
- Gamifikasi jejak kaki dino (🐾), reaksi maskot Dino Rexy, skor, dan rapor petualang dinosaurus.

---

## 📂 Struktur Berkas Proyek

```
📁 MANDARIN LATIHAN GOOGLE ANTIGRAVITE/
├── 📄 index.html          # Halaman utama aplikasi web
├── 📁 css/
│   ├── 📄 style.css       # Desain dasar & token tema Little Dinosaur
│   └── 📄 components.css  # Komponen kanvas guratan, kartu 3D, kuis & modal
├── 📁 js/
│   ├── 📄 app.js          # Controller utama & navigasi tab
│   ├── 📄 audio-synth.js  # Engine suara TTS Mandarin & Web Audio SFX
│   ├── 📄 data.js         # Database kosakata Han Yu 1-12 & bank soal
│   ├── 📄 match-game.js   # Game mencocokkan kosakata bergambar
│   ├── 📄 quiz.js         # Kuis jumlah guratan & review evaluasi
│   └── 📄 stroke-writer.js# Engine HanziWriter & tracker telur 3-5x
└── 📄 README.md           # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan

### Opsi 1: Langsung di Komputer Lokal
Cukup buka file `index.html` menggunakan browser apapun (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Opsi 2: Online via GitHub Pages (Gratis)
1. Buka repositori ini di GitHub.
2. Masuk ke tab **Settings** ➔ **Pages**.
3. Pada bagian **Build and deployment**, pilih Source: **Deploy from a branch**.
4. Pilih Branch: **main** (atau `master`) dan folder: **/ (root)**, lalu klik **Save**.
5. Website akan online dan dapat diakses dari HP / Laptop melalui URL `https://<username>.github.io/<nama-repo>/`.

---

© 2026 Dino Mandarin Adventure • Kurikulum Han Yu 1 - 12 • HanziWriter Engine
