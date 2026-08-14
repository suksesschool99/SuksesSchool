/**
 * Dino Mandarin Adventure - Stroke Writer Module
 * Modul Latihan Menulis Guratan Hanzi Per-Unit Han Yu 1 - 12
 * Repetisi 3-5 Kali dengan Visual Telur Dino Menetas, Pinyin, & Arti Bahasa Indonesia
 */

class DinoStrokeWriter {
  constructor() {
    this.writer = null;
    this.currentChar = '龙';
    this.currentData = null;
    this.currentBookId = 1;
    this.currentUnitId = 1;
    this.unitVocabList = [];
    this.currentCharIndex = 0;

    // Mode & Repetition Tracker
    this.strokeMode = 'quiz'; // 'quiz' or 'animate'
    this.gridType = 'mizige';
    this.animationSpeed = 1.0;
    this.showOutline = true;

    // Target Repetition (3 to 5 times)
    this.targetReps = 3; // default 3x (options: 3, 4, 5)
    this.currentRepCount = 0;
    this.isCharCompleted = false;

    this.init();
  }

  init() {
    this.cacheDom();
    this.populateBookAndUnitSelects();
    this.bindEvents();
    this.loadBookUnit(1, 1);
  }

  cacheDom() {
    this.targetContainer = document.getElementById('stroke-target');
    this.charPinyinEl = document.getElementById('char-pinyin');
    this.charMeaningEl = document.getElementById('char-meaning');
    this.charStrokesEl = document.getElementById('char-strokes-count');
    this.charBookUnitBadge = document.getElementById('char-book-unit-badge');
    this.charTipEl = document.getElementById('char-dino-tip');
    
    // Selectors
    this.bookSelector = document.getElementById('stroke-book-select');
    this.unitSelector = document.getElementById('stroke-unit-select');
    this.repsSelector = document.getElementById('stroke-reps-target');
    this.repsTrackerContainer = document.getElementById('reps-egg-tracker');
    this.repsCountText = document.getElementById('reps-count-text');

    // Controls
    this.btnPrevChar = document.getElementById('btn-prev-char');
    this.btnNextChar = document.getElementById('btn-next-char');
    this.customCharInput = document.getElementById('custom-char-input');
    this.btnSearchChar = document.getElementById('btn-search-char');
    this.btnAnimate = document.getElementById('btn-animate-stroke');
    this.btnQuiz = document.getElementById('btn-practice-stroke');
    this.btnHint = document.getElementById('btn-stroke-hint');
    this.btnReset = document.getElementById('btn-stroke-reset');
    this.btnAudioChar = document.getElementById('btn-char-audio');
    this.chipsContainer = document.getElementById('stroke-char-chips');
    this.strokeStatusBadge = document.getElementById('stroke-status-badge');
    this.speedSelector = document.getElementById('stroke-speed-select');
    this.gridSelector = document.getElementById('stroke-grid-select');

    // Completion modal/alert
    this.repSuccessBox = document.getElementById('rep-success-banner');
  }

  populateBookAndUnitSelects() {
    if (!this.bookSelector) return;
    
    // Populate Books (Han Yu 1 - 12)
    this.bookSelector.innerHTML = window.DINO_DATA.books.map(b => `
      <option value="${b.id}">${b.title}</option>
    `).join('');

    this.updateUnitSelect(1);
  }

  updateUnitSelect(bookId) {
    if (!this.unitSelector) return;
    const vocabInBook = window.DINO_DATA.vocabList.filter(v => v.book === parseInt(bookId));
    const units = [...new Set(vocabInBook.map(v => v.unit))].sort((a, b) => a - b);

    if (units.length === 0) {
      this.unitSelector.innerHTML = `<option value="1">Unit 1</option>`;
      return;
    }

    this.unitSelector.innerHTML = units.map(u => `
      <option value="${u}">Unit ${u} (${vocabInBook.filter(v => v.unit === u).length} Kata)</option>
    `).join('');
  }

  loadBookUnit(bookId, unitId) {
    this.currentBookId = parseInt(bookId);
    this.currentUnitId = parseInt(unitId);

    // Ambil daftar kosakata untuk buku & unit ini
    let list = window.DINO_DATA.vocabList.filter(v => v.book === this.currentBookId && v.unit === this.currentUnitId);
    if (list.length === 0) {
      // Fallback jika unit kosong, ambil semua kosakata dari buku tersebut
      list = window.DINO_DATA.vocabList.filter(v => v.book === this.currentBookId);
    }
    if (list.length === 0) {
      list = [window.DINO_DATA.vocabList[0]];
    }

    this.unitVocabList = list;
    this.currentCharIndex = 0;
    this.renderCategoryChips();
    this.selectCharacterByIndex(0);
  }

  renderCategoryChips() {
    if (!this.chipsContainer) return;
    
    this.chipsContainer.innerHTML = this.unitVocabList.map((item, index) => {
      const activeClass = index === this.currentCharIndex ? 'active' : '';
      return `
        <button class="dino-chip ${activeClass}" data-index="${index}" data-char="${item.char}" title="${item.pinyin} - ${item.meaning}">
          <span class="chip-hanzi">${item.char}</span>
          <span class="chip-pinyin">${item.pinyin}</span>
          <span class="chip-meaning-sub">${item.meaning}</span>
        </button>
      `;
    }).join('');
  }

  selectCharacterByIndex(index) {
    if (index < 0 || index >= this.unitVocabList.length) return;
    this.currentCharIndex = index;
    const item = this.unitVocabList[index];
    
    // Reset counter repetisi setiap berganti karakter
    this.currentRepCount = 0;
    this.isCharCompleted = false;
    this.updateRepetitionUI();

    if (this.repSuccessBox) this.repSuccessBox.style.display = 'none';

    // Update active chip
    if (this.chipsContainer) {
      this.chipsContainer.querySelectorAll('.dino-chip').forEach((c, idx) => {
        c.classList.toggle('active', idx === index);
      });
    }

    this.loadCharacterData(item);
  }

  loadCharacterData(item) {
    this.currentChar = item.char;
    this.currentData = item;

    // Tampilkan data lengkap di samping kanvas
    if (this.charPinyinEl) this.charPinyinEl.textContent = item.pinyin;
    if (this.charMeaningEl) this.charMeaningEl.textContent = item.meaning;
    if (this.charStrokesEl) this.charStrokesEl.textContent = `${item.strokes} Guratan`;
    if (this.charBookUnitBadge) {
      this.charBookUnitBadge.textContent = `Han Yu ${item.book} • Unit ${item.unit}`;
    }
    if (this.charTipEl) {
      this.charTipEl.textContent = `🦖 Tips Brachy: ${item.tip || 'Latihlah guratan ini dengan teliti!'}`;
    }

    this.reloadWriter();
    window.dinoAudio.speakMandarin(this.currentChar);
  }

  bindEvents() {
    // Ganti Buku
    if (this.bookSelector) {
      this.bookSelector.addEventListener('change', (e) => {
        const bookId = parseInt(e.target.value);
        this.updateUnitSelect(bookId);
        const unitId = this.unitSelector ? parseInt(this.unitSelector.value) : 1;
        this.loadBookUnit(bookId, unitId);
      });
    }

    // Ganti Unit
    if (this.unitSelector) {
      this.unitSelector.addEventListener('change', (e) => {
        const unitId = parseInt(e.target.value);
        const bookId = this.bookSelector ? parseInt(this.bookSelector.value) : 1;
        this.loadBookUnit(bookId, unitId);
      });
    }

    // Ganti Target Repetisi (3, 4, 5 kali)
    if (this.repsSelector) {
      this.repsSelector.addEventListener('change', (e) => {
        this.targetReps = parseInt(e.target.value);
        this.currentRepCount = 0;
        this.isCharCompleted = false;
        this.updateRepetitionUI();
      });
    }

    // Navigasi Karakter Sebelumnya & Berikutnya
    if (this.btnPrevChar) {
      this.btnPrevChar.addEventListener('click', () => {
        if (this.currentCharIndex > 0) {
          this.selectCharacterByIndex(this.currentCharIndex - 1);
        } else {
          this.selectCharacterByIndex(this.unitVocabList.length - 1);
        }
      });
    }

    if (this.btnNextChar) {
      this.btnNextChar.addEventListener('click', () => {
        if (this.currentCharIndex < this.unitVocabList.length - 1) {
          this.selectCharacterByIndex(this.currentCharIndex + 1);
        } else {
          this.selectCharacterByIndex(0);
        }
      });
    }

    // Klik Chip Karakter
    if (this.chipsContainer) {
      this.chipsContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.dino-chip');
        if (chip) {
          const idx = parseInt(chip.getAttribute('data-index'));
          this.selectCharacterByIndex(idx);
        }
      });
    }

    // Pencarian Bebas Hanzi
    if (this.btnSearchChar && this.customCharInput) {
      const handleSearch = () => {
        const val = this.customCharInput.value.trim();
        if (val) {
          const firstChar = Array.from(val)[0];
          // Cari di dataset jika ada
          const found = window.DINO_DATA.vocabList.find(v => v.char === firstChar);
          if (found) {
            this.currentRepCount = 0;
            this.isCharCompleted = false;
            this.loadCharacterData(found);
          } else {
            this.currentRepCount = 0;
            this.isCharCompleted = false;
            this.loadCharacterData({
              char: firstChar,
              pinyin: '-',
              meaning: 'Karakter Kustom',
              book: 1,
              unit: 1,
              strokes: '?',
              tip: 'Ikuti garis bantu guratan karakter ini!'
            });
          }
          this.customCharInput.value = '';
        }
      };

      this.btnSearchChar.addEventListener('click', handleSearch);
      this.customCharInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
      });
    }

    // Tombol Animasi
    if (this.btnAnimate) {
      this.btnAnimate.addEventListener('click', () => {
        this.strokeMode = 'animate';
        this.updateModeButtons();
        this.animateStrokes();
      });
    }

    // Tombol Latihan Mandiri (Quiz)
    if (this.btnQuiz) {
      this.btnQuiz.addEventListener('click', () => {
        this.strokeMode = 'quiz';
        this.updateModeButtons();
        this.startQuiz();
      });
    }

    // Petunjuk Guratan (Hint)
    if (this.btnHint) {
      this.btnHint.addEventListener('click', () => {
        if (this.writer) {
          if (this.strokeMode === 'quiz') {
            this.writer.showHint();
            window.dinoAudio.playSfx('pop');
          } else {
            this.writer.animateCharacter();
          }
        }
      });
    }

    // Tombol Reset
    if (this.btnReset) {
      this.btnReset.addEventListener('click', () => {
        if (this.strokeMode === 'quiz') {
          this.startQuiz();
        } else {
          this.animateStrokes();
        }
      });
    }

    // Tombol Audio Suara Mandarin
    if (this.btnAudioChar) {
      this.btnAudioChar.addEventListener('click', () => {
        window.dinoAudio.speakMandarin(this.currentChar);
        this.btnAudioChar.classList.add('pulse');
        setTimeout(() => this.btnAudioChar.classList.remove('pulse'), 600);
      });
    }

    // Kecepatan
    if (this.speedSelector) {
      this.speedSelector.addEventListener('change', (e) => {
        this.animationSpeed = parseFloat(e.target.value);
        this.reloadWriter();
      });
    }

    // Tipe Grid
    if (this.gridSelector) {
      this.gridSelector.addEventListener('change', (e) => {
        this.gridType = e.target.value;
        this.updateGridDisplay();
      });
    }
  }

  updateModeButtons() {
    if (this.btnAnimate && this.btnQuiz) {
      if (this.strokeMode === 'animate') {
        this.btnAnimate.classList.add('primary-btn');
        this.btnAnimate.classList.remove('secondary-btn');
        this.btnQuiz.classList.remove('primary-btn');
        this.btnQuiz.classList.add('secondary-btn');
        if (this.strokeStatusBadge) {
          this.strokeStatusBadge.innerHTML = '🎬 Mode Animasi: Perhatikan urutan guratan!';
          this.strokeStatusBadge.className = 'status-badge status-animating';
        }
      } else {
        this.btnQuiz.classList.add('primary-btn');
        this.btnQuiz.classList.remove('secondary-btn');
        this.btnAnimate.classList.remove('primary-btn');
        this.btnAnimate.classList.add('secondary-btn');
        if (this.strokeStatusBadge) {
          this.strokeStatusBadge.innerHTML = `✍️ Mode Latihan: Tulis guratan (${this.currentRepCount}/${this.targetReps}x)!`;
          this.strokeStatusBadge.className = 'status-badge status-ready';
        }
      }
    }
  }

  updateGridDisplay() {
    if (!this.targetContainer) return;
    this.targetContainer.classList.remove('grid-mizige', 'grid-tianzige', 'grid-plain');
    this.targetContainer.classList.add(`grid-${this.gridType}`);
  }

  updateRepetitionUI() {
    if (this.repsCountText) {
      this.repsCountText.textContent = `${this.currentRepCount} / ${this.targetReps} Kali`;
    }

    if (this.repsTrackerContainer) {
      let eggsHtml = '';
      for (let i = 1; i <= this.targetReps; i++) {
        if (i <= this.currentRepCount) {
          eggsHtml += `<span class="egg-item hatched" title="Latihan ke-${i} Selesai!">🦖</span>`;
        } else if (i === this.currentRepCount + 1) {
          eggsHtml += `<span class="egg-item active-cracking" title="Sedang menulis ke-${i}">🥚✨</span>`;
        } else {
          eggsHtml += `<span class="egg-item unhatched" title="Target latihan ke-${i}">🥚</span>`;
        }
      }
      this.repsTrackerContainer.innerHTML = eggsHtml;
    }

    if (this.strokeStatusBadge && this.strokeMode === 'quiz') {
      if (this.currentRepCount >= this.targetReps) {
        this.strokeStatusBadge.innerHTML = `🎉 Hebat! Target Latihan ${this.targetReps}x Selesai! Telur Telah Menetas!`;
        this.strokeStatusBadge.className = 'status-badge status-success';
      } else {
        this.strokeStatusBadge.innerHTML = `✍️ Tulis guratan di kotak (Latihan ${this.currentRepCount + 1} dari ${this.targetReps}x)`;
        this.strokeStatusBadge.className = 'status-badge status-ready';
      }
    }
  }

  handleRepetitionComplete() {
    this.currentRepCount++;
    this.updateRepetitionUI();

    if (this.currentRepCount >= this.targetReps) {
      // Selesai target repetisi (3-5 kali)!
      this.isCharCompleted = true;
      window.dinoAudio.playSfx('hatch');
      window.dinoAudio.playSfx('fanfare');

      if (this.repSuccessBox) {
        this.repSuccessBox.innerHTML = `
          <div class="rep-success-content">
            <span class="rep-success-icon">🦖🎉</span>
            <div>
              <h4 class="rep-success-title">Target ${this.targetReps}x Menulis Selesai!</h4>
              <p class="rep-success-desc">Telur dinosaurus untuk karakter <strong>"${this.currentChar}" (${this.currentData.pinyin} - ${this.currentData.meaning})</strong> telah menetas!</p>
            </div>
            <button class="dino-btn primary-btn btn-sm" id="btn-next-char-rep">Karakter Berikutnya ➔</button>
          </div>
        `;
        this.repSuccessBox.style.display = 'block';

        const btnNext = document.getElementById('btn-next-char-rep');
        if (btnNext) {
          btnNext.addEventListener('click', () => {
            if (this.btnNextChar) this.btnNextChar.click();
          });
        }
      }

      // Beri animasi perayaan
      if (this.targetContainer) {
        this.targetContainer.classList.add('celebration-glow');
        setTimeout(() => this.targetContainer.classList.remove('celebration-glow'), 1500);
      }
    } else {
      // Masih ada repetisi berikutnya
      window.dinoAudio.playSfx('correct');
      if (this.strokeStatusBadge) {
        this.strokeStatusBadge.innerHTML = `✨ Bagus sekali! Ayo tulis lagi (${this.currentRepCount + 1}/${this.targetReps}x)!`;
        this.strokeStatusBadge.className = 'status-badge status-success';
      }
      // Mulai kuis ronde berikutnya setelah jeda singkat
      setTimeout(() => {
        if (this.strokeMode === 'quiz' && !this.isCharCompleted) {
          this.startQuiz();
        }
      }, 900);
    }
  }

  reloadWriter() {
    if (!this.targetContainer) return;
    if (typeof HanziWriter === 'undefined') {
      this.targetContainer.innerHTML = `<div class="dino-error">Memuat mesin HanziWriter...</div>`;
      setTimeout(() => this.reloadWriter(), 500);
      return;
    }

    this.targetContainer.innerHTML = '';
    this.updateGridDisplay();

    const size = Math.min(window.innerWidth > 600 ? 280 : 220, 300);

    try {
      this.writer = HanziWriter.create(this.targetContainer, this.currentChar, {
        width: size,
        height: size,
        padding: 20,
        strokeAnimationSpeed: this.animationSpeed,
        delayBetweenStrokes: 150 / this.animationSpeed,
        strokeColor: '#2E7D32', // Forest Green Dino
        radicalColor: '#E65100', // Lava Orange
        outlineColor: '#CFD8DC',
        drawingColor: '#1B5E20',
        drawingWidth: 16,
        showOutline: this.showOutline,
        showCharacter: false,
        strokeFadeDuration: 400,
        highlightColor: '#FFB300',
        charDataLoader: (char, onComplete) => {
          fetch(`https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/${char}.json`)
            .then(res => {
              if (!res.ok) throw new Error('Network error');
              return res.json();
            })
            .then(charData => onComplete(charData))
            .catch(() => {
              // Fallback jika offline / CDN terkendala
              this.targetContainer.innerHTML = `
                <div class="fallback-char-wrap">
                  <div class="fallback-char-big">${char}</div>
                  <div class="fallback-char-note">Pratinjau Font Standar</div>
                </div>
              `;
            });
        },
        onLoadCharDataError: () => {
          this.targetContainer.innerHTML = `
            <div class="fallback-char-wrap">
              <div class="fallback-char-big">${this.currentChar}</div>
              <div class="fallback-char-note">Pratinjau Font Standar</div>
            </div>
          `;
        }
      });

      if (this.strokeMode === 'quiz') {
        this.startQuiz();
      } else {
        this.animateStrokes();
      }
    } catch (err) {
      console.warn('HanziWriter init warning:', err);
    }
  }

  startQuiz() {
    if (!this.writer) return;
    this.strokeMode = 'quiz';
    this.updateModeButtons();

    this.writer.quiz({
      onMistake: (strokeData) => {
        window.dinoAudio.playSfx('wrong');
        if (this.strokeStatusBadge) {
          this.strokeStatusBadge.innerHTML = `⚠️ Oops! Guratan ke-${strokeData.strokeNum + 1} belum tepat. Coba lagi!`;
          this.strokeStatusBadge.className = 'status-badge status-mistake';
        }
      },
      onCorrectStroke: (strokeData) => {
        window.dinoAudio.playSfx('stroke');
        if (this.strokeStatusBadge) {
          this.strokeStatusBadge.innerHTML = `👍 Guratan ke-${strokeData.strokeNum + 1} tepat! Lanjutkan!`;
          this.strokeStatusBadge.className = 'status-badge status-ready';
        }
      },
      onComplete: () => {
        this.handleRepetitionComplete();
      }
    });
  }

  animateStrokes() {
    if (!this.writer) return;
    this.strokeMode = 'animate';
    this.updateModeButtons();
    this.writer.cancelQuiz();
    this.writer.animateCharacter({
      onComplete: () => {
        if (this.strokeStatusBadge) {
          this.strokeStatusBadge.innerHTML = '✅ Animasi selesai! Tekan "Latihan Tulis" untuk mencoba.';
          this.strokeStatusBadge.className = 'status-badge status-success';
        }
      }
    });
  }
}

// Inisialisasi saat window dimuat
window.DinoStrokeWriter = DinoStrokeWriter;
