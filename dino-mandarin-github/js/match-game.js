/**
 * Dino Mandarin Adventure - Matching Game Module
 * Game Mencocokkan Kosakata Han Yu 1 - 12 dengan Gambar, Pinyin, & Arti Indonesia
 */

class DinoMatchGame {
  constructor() {
    this.difficulty = 4; // 4, 6, or 8 pairs
    this.selectedBook = 'all'; // 'all' or 1..12
    this.cards = [];
    this.selectedCardA = null;
    this.selectedCardB = null;
    this.matchedPairs = 0;
    this.moves = 0;
    this.score = 0;
    this.streak = 0;
    this.timer = 0;
    this.timerInterval = null;
    this.isGameActive = false;
    this.isProcessing = false;

    this.init();
  }

  init() {
    this.cacheDom();
    this.populateBookFilter();
    this.bindEvents();
    this.startNewGame();
  }

  cacheDom() {
    this.boardEl = document.getElementById('match-board');
    this.scoreEl = document.getElementById('match-score');
    this.movesEl = document.getElementById('match-moves');
    this.timerEl = document.getElementById('match-timer');
    this.streakEl = document.getElementById('match-streak');
    this.btnRestart = document.getElementById('btn-match-restart');
    this.diffButtons = document.querySelectorAll('.diff-btn');
    this.bookSelect = document.getElementById('match-book-select');
    
    // Matched card popup toast / banner
    this.matchToastEl = document.getElementById('match-success-toast');

    // Win Modal
    this.winModal = document.getElementById('match-win-modal');
    this.winScoreEl = document.getElementById('win-final-score');
    this.winMovesEl = document.getElementById('win-final-moves');
    this.winTimeEl = document.getElementById('win-final-time');
    this.winSummaryList = document.getElementById('win-matched-vocab-list');
    this.btnPlayAgain = document.getElementById('btn-match-play-again');
  }

  populateBookFilter() {
    if (!this.bookSelect) return;
    let html = `<option value="all">Semua Buku (Han Yu 1 - 12)</option>`;
    window.DINO_DATA.books.forEach(b => {
      html += `<option value="${b.id}">Han Yu ${b.id}</option>`;
    });
    this.bookSelect.innerHTML = html;
  }

  bindEvents() {
    if (this.btnRestart) {
      this.btnRestart.addEventListener('click', () => this.startNewGame());
    }

    if (this.btnPlayAgain) {
      this.btnPlayAgain.addEventListener('click', () => {
        if (this.winModal) this.winModal.classList.remove('show');
        this.startNewGame();
      });
    }

    this.diffButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pairs = parseInt(e.currentTarget.getAttribute('data-pairs'));
        this.diffButtons.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.difficulty = pairs;
        this.startNewGame();
      });
    });

    if (this.bookSelect) {
      this.bookSelect.addEventListener('change', (e) => {
        this.selectedBook = e.target.value;
        this.startNewGame();
      });
    }
  }

  startNewGame() {
    this.isProcessing = false;
    this.selectedCardA = null;
    this.selectedCardB = null;
    this.matchedPairs = 0;
    this.moves = 0;
    this.score = 0;
    this.streak = 0;
    this.timer = 0;
    this.isGameActive = true;

    this.updateStats();
    this.startTimer();

    // Pool kosakata bergambar
    let pool = window.DINO_DATA.matchVocabItems;
    if (this.selectedBook !== 'all') {
      const bookNum = parseInt(this.selectedBook);
      const filtered = pool.filter(item => item.book === bookNum);
      if (filtered.length >= this.difficulty) {
        pool = filtered;
      }
    }

    // Acak dan ambil N pasangan
    const shuffledItems = [...pool].sort(() => 0.5 - Math.random());
    const selectedVocab = shuffledItems.slice(0, this.difficulty);

    // Buat 2 pasang kartu per item: Kartu Gambar (IMAGE) dan Kartu Teks Hanzi+Pinyin (TEXT)
    this.cards = [];
    selectedVocab.forEach((item, index) => {
      // 1. Kartu Gambar
      this.cards.push({
        uid: `img-${item.id}-${index}`,
        vocabId: item.id,
        type: 'image',
        svg: item.svg,
        meaning: item.meaning,
        hanzi: item.hanzi,
        pinyin: item.pinyin,
        matched: false
      });
      // 2. Kartu Hanzi + Pinyin
      this.cards.push({
        uid: `text-${item.id}-${index}`,
        vocabId: item.id,
        type: 'text',
        hanzi: item.hanzi,
        pinyin: item.pinyin,
        meaning: item.meaning,
        svg: item.svg,
        matched: false
      });
    });

    // Acak tata letak kartu
    this.cards.sort(() => 0.5 - Math.random());

    this.renderBoard();
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.isGameActive) {
        this.timer++;
        if (this.timerEl) {
          const mins = Math.floor(this.timer / 60);
          const secs = this.timer % 60;
          this.timerEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }
      }
    }, 1000);
  }

  updateStats() {
    if (this.scoreEl) this.scoreEl.textContent = this.score;
    if (this.movesEl) this.movesEl.textContent = this.moves;
    if (this.streakEl) this.streakEl.textContent = this.streak > 1 ? `🔥 x${this.streak}` : '-';
    if (this.timerEl && this.timer === 0) this.timerEl.textContent = '0:00';
  }

  renderBoard() {
    if (!this.boardEl) return;
    this.boardEl.innerHTML = '';
    this.boardEl.className = `match-board-grid grid-pairs-${this.difficulty}`;

    this.cards.forEach((card) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'dino-card';
      cardEl.setAttribute('data-uid', card.uid);
      cardEl.setAttribute('data-id', card.vocabId);
      cardEl.setAttribute('data-type', card.type);

      let cardInner = '';
      if (card.type === 'image') {
        cardInner = `
          <div class="card-front">
            <div class="card-dino-back">
              <span class="dino-egg-icon">🥚</span>
              <span class="dino-hint-txt">Buka Gambar</span>
            </div>
          </div>
          <div class="card-back card-image-content">
            <div class="card-svg-wrap">${card.svg}</div>
            <div class="card-sub-meaning-blur">???</div>
          </div>
        `;
      } else {
        cardInner = `
          <div class="card-front">
            <div class="card-dino-back">
              <span class="dino-egg-icon">🦕</span>
              <span class="dino-hint-txt">Buka Hanzi</span>
            </div>
          </div>
          <div class="card-back card-text-content">
            <div class="card-hanzi">${card.hanzi}</div>
            <div class="card-pinyin">${card.pinyin}</div>
            <button class="card-audio-mini" title="Dengarkan"><i class="icon-speaker">🔊</i></button>
          </div>
        `;
      }

      cardEl.innerHTML = cardInner;
      cardEl.addEventListener('click', (e) => this.handleCardClick(card, cardEl, e));
      this.boardEl.appendChild(cardEl);
    });
  }

  handleCardClick(card, cardEl, event) {
    if (!this.isGameActive || this.isProcessing) return;
    if (card.matched) return;
    if (this.selectedCardA && this.selectedCardA.uid === card.uid) return;

    if (event.target.closest('.card-audio-mini')) {
      event.stopPropagation();
      window.dinoAudio.speakMandarin(card.hanzi);
      return;
    }

    // Balik kartu
    cardEl.classList.add('flipped');
    window.dinoAudio.playSfx('flip');

    if (card.type === 'text') {
      window.dinoAudio.speakMandarin(card.hanzi);
    }

    if (!this.selectedCardA) {
      this.selectedCardA = { card, element: cardEl };
    } else {
      this.selectedCardB = { card, element: cardEl };
      this.moves++;
      this.isProcessing = true;
      this.checkMatch();
    }
  }

  checkMatch() {
    const cardA = this.selectedCardA.card;
    const cardB = this.selectedCardB.card;
    const elA = this.selectedCardA.element;
    const elB = this.selectedCardB.element;

    const isMatch = (cardA.vocabId === cardB.vocabId) && (cardA.type !== cardB.type);

    if (isMatch) {
      // Cocok!
      cardA.matched = true;
      cardB.matched = true;
      this.matchedPairs++;
      this.streak++;

      // Hitung skor
      const basePoints = 100;
      const streakBonus = (this.streak - 1) * 30;
      this.score += (basePoints + streakBonus);

      // Suara & status
      window.dinoAudio.playSfx('correct');
      window.dinoAudio.speakMandarin(cardA.hanzi);

      // Update kedua kartu agar menampilkan informasi lengkap (Gambar + Hanzi + Pinyin + Arti Lengkap)
      setTimeout(() => {
        elA.classList.add('matched');
        elB.classList.add('matched');

        // Buka teks arti di kartu gambar
        const meaningA = elA.querySelector('.card-sub-meaning-blur');
        if (meaningA) {
          meaningA.textContent = cardA.meaning;
          meaningA.className = 'card-sub-meaning-revealed';
        }
        const meaningB = elB.querySelector('.card-sub-meaning-blur');
        if (meaningB) {
          meaningB.textContent = cardB.meaning;
          meaningB.className = 'card-sub-meaning-revealed';
        }

        // Tampilkan Banner Pop-up Notifikasi Lengkap (Gambar + Hanzi + Pinyin + Arti)
        this.showMatchSuccessToast(cardA);

        this.selectedCardA = null;
        this.selectedCardB = null;
        this.isProcessing = false;
        this.updateStats();

        // Cek jika seluruh papan selesai dicocokkan
        if (this.matchedPairs >= this.difficulty) {
          this.handleGameWin();
        }
      }, 400);

    } else {
      // Belum cocok
      this.streak = 0;
      this.updateStats();
      window.dinoAudio.playSfx('wrong');

      setTimeout(() => {
        elA.classList.remove('flipped');
        elB.classList.remove('flipped');
        this.selectedCardA = null;
        this.selectedCardB = null;
        this.isProcessing = false;
      }, 1000);
    }
  }

  showMatchSuccessToast(card) {
    if (!this.matchToastEl) return;
    this.matchToastEl.innerHTML = `
      <div class="toast-card-success">
        <div class="toast-svg-thumb">${card.svg}</div>
        <div class="toast-info">
          <div class="toast-hanzi-pinyin">
            <span class="toast-hanzi">${card.hanzi}</span>
            <span class="toast-pinyin">${card.pinyin}</span>
          </div>
          <div class="toast-meaning">✨ <strong>Arti:</strong> ${card.meaning}</div>
        </div>
        <button class="toast-audio-btn" onclick="window.dinoAudio.speakMandarin('${card.hanzi}')" title="Putar Suara">🔊</button>
      </div>
    `;
    this.matchToastEl.classList.add('show');
    setTimeout(() => {
      this.matchToastEl.classList.remove('show');
    }, 3200);
  }

  handleGameWin() {
    this.isGameActive = false;
    if (this.timerInterval) clearInterval(this.timerInterval);

    window.dinoAudio.playSfx('fanfare');
    window.dinoAudio.playSfx('hatch');

    const mins = Math.floor(this.timer / 60);
    const secs = this.timer % 60;
    const timeFormatted = `${mins}m ${secs}d`;

    if (this.winScoreEl) this.winScoreEl.textContent = this.score;
    if (this.winMovesEl) this.winMovesEl.textContent = this.moves;
    if (this.winTimeEl) this.winTimeEl.textContent = timeFormatted;

    // Tampilkan daftar ringkasan kosakata yang berhasil dicocokkan
    if (this.winSummaryList) {
      const uniqueMatched = this.cards.filter(c => c.type === 'text');
      this.winSummaryList.innerHTML = uniqueMatched.map(item => `
        <div class="win-vocab-row">
          <div class="win-vocab-icon">${item.svg}</div>
          <div class="win-vocab-text">
            <span class="win-v-hanzi">${item.hanzi}</span>
            <span class="win-v-pinyin">(${item.pinyin})</span>
            <span class="win-v-meaning">= ${item.meaning}</span>
          </div>
          <button class="win-v-audio" onclick="window.dinoAudio.speakMandarin('${item.hanzi}')">🔊</button>
        </div>
      `).join('');
    }

    setTimeout(() => {
      if (this.winModal) this.winModal.classList.add('show');
    }, 600);
  }
}

// Global exposure
window.DinoMatchGame = DinoMatchGame;
