/**
 * Dino Mandarin Adventure - Quiz Module
 * Latihan Soal Pilihan Berganda Fokus Jumlah Guratan (1, 3, 4, 5, 6, 7, 11) & Kosakata Han Yu 1 - 12
 */

class DinoQuiz {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.hasAnswered = false;
    this.filterType = 'all'; // 'all', 'stroke-only', 'book-1', etc.

    this.init();
  }

  init() {
    this.cacheDom();
    this.populateFilterDropdown();
    this.bindEvents();
    this.startQuiz();
  }

  cacheDom() {
    this.quizContainer = document.getElementById('quiz-active-card');
    this.questionNumEl = document.getElementById('quiz-q-num');
    this.totalQEl = document.getElementById('quiz-total-q');
    this.scoreBadgeEl = document.getElementById('quiz-score-badge');
    this.footprintProgress = document.getElementById('dino-footprints');
    this.questionTextEl = document.getElementById('quiz-question-text');
    this.questionMediaEl = document.getElementById('quiz-question-media');
    this.optionsContainer = document.getElementById('quiz-options-grid');
    this.explanationCard = document.getElementById('quiz-explanation-card');
    this.explanationText = document.getElementById('quiz-explanation-text');
    this.btnNextQuestion = document.getElementById('btn-next-question');
    this.resultContainer = document.getElementById('quiz-result-card');
    this.finalScoreEl = document.getElementById('quiz-final-score');
    this.finalRatingEl = document.getElementById('quiz-final-rating');
    this.finalTitleEl = document.getElementById('quiz-final-title');
    this.finalDetailEl = document.getElementById('quiz-final-detail');
    this.finalReviewList = document.getElementById('quiz-review-list');
    this.btnRestartQuiz = document.getElementById('btn-restart-quiz');
    this.mascotReactionEl = document.getElementById('quiz-mascot-box');
    this.quizFilterSelect = document.getElementById('quiz-filter-select');
  }

  populateFilterDropdown() {
    if (!this.quizFilterSelect) return;
    this.quizFilterSelect.innerHTML = `
      <option value="all">🌟 Semua Soal (Guratan + Kosakata Han Yu 1 - 12)</option>
      <option value="stroke-only">✍️ Khusus Kuis Jumlah Guratan (1, 3, 4, 5, 6, 7, 11)</option>
      <option value="book-1">📖 Han Yu 1 (Dasar & Angka 1-10)</option>
      <option value="book-2">📖 Han Yu 2 (Dinosaurus, Tubuh & Warna)</option>
      <option value="book-3-12">📚 Han Yu 3 s/d 12 (Tingkat Lanjut)</option>
    `;
  }

  bindEvents() {
    if (this.btnNextQuestion) {
      this.btnNextQuestion.addEventListener('click', () => this.handleNextQuestion());
    }

    if (this.btnRestartQuiz) {
      this.btnRestartQuiz.addEventListener('click', () => this.startQuiz());
    }

    if (this.quizFilterSelect) {
      this.quizFilterSelect.addEventListener('change', (e) => {
        this.filterType = e.target.value;
        this.startQuiz();
      });
    }
  }

  startQuiz() {
    let pool = [...window.DINO_DATA.strokeQuizQuestions];

    if (this.filterType === 'stroke-only') {
      pool = pool.filter(q => q.type === 'stroke-count' || q.type === 'stroke-find-char');
    } else if (this.filterType === 'book-1') {
      pool = pool.filter(q => q.book === 1);
    } else if (this.filterType === 'book-2') {
      pool = pool.filter(q => q.book === 2);
    } else if (this.filterType === 'book-3-12') {
      pool = pool.filter(q => q.book >= 3);
    }

    // Acak urutan pertanyaan
    this.questions = pool.sort(() => 0.5 - Math.random());
    this.currentIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.hasAnswered = false;

    if (this.quizContainer) this.quizContainer.style.display = 'block';
    if (this.resultContainer) this.resultContainer.style.display = 'none';

    this.renderFootprints();
    this.renderQuestion();
  }

  renderFootprints() {
    if (!this.footprintProgress) return;
    this.footprintProgress.innerHTML = this.questions.map((_, i) => `
      <div class="footprint-step ${i === 0 ? 'current' : ''}" id="fp-step-${i}" title="Soal ${i + 1}">
        <span class="fp-icon">🐾</span>
        <span class="fp-num">${i + 1}</span>
      </div>
    `).join('');
  }

  renderQuestion() {
    const q = this.questions[this.currentIndex];
    this.hasAnswered = false;

    if (this.questionNumEl) this.questionNumEl.textContent = this.currentIndex + 1;
    if (this.totalQEl) this.totalQEl.textContent = this.questions.length;
    if (this.scoreBadgeEl) this.scoreBadgeEl.textContent = `Skor: ${this.score}`;

    // Update Footprint tracker
    this.questions.forEach((_, i) => {
      const step = document.getElementById(`fp-step-${i}`);
      if (step) {
        step.classList.remove('current');
        if (i === this.currentIndex) step.classList.add('current');
      }
    });

    if (this.questionTextEl) {
      this.questionTextEl.textContent = q.question;
    }

    // Render Media (Hanzi Besar, Gambar Vektor, Audio)
    if (this.questionMediaEl) {
      this.questionMediaEl.innerHTML = '';

      if (q.type === 'stroke-count' || q.type === 'hanzi-to-meaning') {
        this.questionMediaEl.innerHTML = `
          <div class="quiz-hanzi-display">
            <div class="large-hanzi">${q.hanzi}</div>
            <div class="hanzi-sub-pinyin">${q.pinyin} ${q.meaning ? `• ${q.meaning}` : ''}</div>
            <button class="dino-btn-audio-circle" id="btn-quiz-audio" title="Putar Suara Mandarin">🔊</button>
          </div>
        `;
        const audioBtn = document.getElementById('btn-quiz-audio');
        if (audioBtn) {
          audioBtn.addEventListener('click', () => window.dinoAudio.speakMandarin(q.audioText || q.hanzi));
          window.dinoAudio.speakMandarin(q.audioText || q.hanzi);
        }

      } else if (q.type === 'image-to-hanzi') {
        const vocab = window.DINO_DATA.matchVocabItems.find(v => v.id === q.imageSvgId);
        if (vocab) {
          this.questionMediaEl.innerHTML = `
            <div class="quiz-image-display">
              <div class="quiz-svg-holder">${vocab.svg}</div>
            </div>
          `;
        }

      } else if (q.type === 'stroke-find-char') {
        this.questionMediaEl.innerHTML = `
          <div class="quiz-stroke-badge-display">
            <span class="stroke-target-number">🎯 Target: ${q.targetStroke} GURATAN</span>
          </div>
        `;
      }
    }

    // Render Pilihan Jawaban
    if (this.optionsContainer) {
      const letters = ['A', 'B', 'C', 'D'];
      this.optionsContainer.innerHTML = q.options.map((opt, idx) => `
        <button class="quiz-option-btn" data-index="${idx}">
          <span class="opt-letter">${letters[idx]}</span>
          <div class="opt-content">
            <span class="opt-text">${opt.text}</span>
            ${opt.sub ? `<span class="opt-sub">${opt.sub}</span>` : ''}
          </div>
        </button>
      `).join('');

      const optionButtons = this.optionsContainer.querySelectorAll('.quiz-option-btn');
      optionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const optIdx = parseInt(btn.getAttribute('data-index'));
          this.handleSelectOption(optIdx, btn);
        });
      });
    }

    if (this.explanationCard) this.explanationCard.style.display = 'none';
    if (this.btnNextQuestion) this.btnNextQuestion.style.display = 'none';
    this.updateMascotMood('neutral');
  }

  handleSelectOption(selectedIndex) {
    if (this.hasAnswered) return;
    this.hasAnswered = true;

    const q = this.questions[this.currentIndex];
    const selectedOption = q.options[selectedIndex];
    const isCorrect = selectedOption.isCorrect;

    this.userAnswers.push({
      question: q,
      selectedIndex,
      isCorrect
    });

    const allOptions = this.optionsContainer.querySelectorAll('.quiz-option-btn');
    allOptions.forEach((btn, idx) => {
      btn.disabled = true;
      if (q.options[idx].isCorrect) {
        btn.classList.add('correct-opt');
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('wrong-opt');
      }
    });

    const currentFp = document.getElementById(`fp-step-${this.currentIndex}`);
    if (currentFp) {
      currentFp.classList.add(isCorrect ? 'answered-correct' : 'answered-wrong');
    }

    if (isCorrect) {
      this.score += 10;
      window.dinoAudio.playSfx('correct');
      this.updateMascotMood('happy');
    } else {
      window.dinoAudio.playSfx('wrong');
      this.updateMascotMood('encouraging');
    }

    if (this.scoreBadgeEl) this.scoreBadgeEl.textContent = `Skor: ${this.score}`;

    // Tampilkan penjelasan langkah guratan
    if (this.explanationCard && this.explanationText) {
      let strokeStepsHtml = '';
      if (q.strokeSteps && q.strokeSteps.length > 0) {
        strokeStepsHtml = `
          <div class="stroke-steps-box">
            <strong>🐾 Urutan Guratan Langkah demi Langkah:</strong>
            <div class="stroke-steps-list">
              ${q.strokeSteps.map(step => `<span class="stroke-step-pill">${step}</span>`).join('')}
            </div>
          </div>
        `;
      }

      this.explanationText.innerHTML = `
        <div class="exp-status ${isCorrect ? 'status-good' : 'status-bad'}">
          ${isCorrect ? '🌟 Luar Biasa! Jawabanmu Benar!' : '💡 Belum Tepat, yuk pelajari pembahasannya!'}
        </div>
        <div class="exp-detail">${q.explanation}</div>
        ${strokeStepsHtml}
      `;
      this.explanationCard.style.display = 'block';
    }

    if (this.btnNextQuestion) {
      this.btnNextQuestion.textContent = (this.currentIndex === this.questions.length - 1) ? 'Lihat Rapor Kuis 🏆' : 'Soal Berikutnya ➔';
      this.btnNextQuestion.style.display = 'inline-flex';
    }
  }

  handleNextQuestion() {
    this.currentIndex++;
    if (this.currentIndex < this.questions.length) {
      this.renderQuestion();
    } else {
      this.showFinalResults();
    }
  }

  updateMascotMood(mood) {
    if (!this.mascotReactionEl) return;
    const avatar = this.mascotReactionEl.querySelector('.mascot-avatar');
    const speech = this.mascotReactionEl.querySelector('.mascot-speech');

    if (mood === 'happy') {
      if (avatar) avatar.textContent = '🦖🎉';
      if (speech) speech.textContent = 'ROAR! Pintar sekali petualang cilik! Jawabanmu tepat!';
    } else if (mood === 'encouraging') {
      if (avatar) avatar.textContent = '🦕🌱';
      if (speech) speech.textContent = 'Tidak apa-apa! Dinosaurus yang hebat terus belajar dari setiap langkah!';
    } else {
      if (avatar) avatar.textContent = '🦖';
      if (speech) speech.textContent = 'Ayo pilih jawaban yang paling tepat!';
    }
  }

  showFinalResults() {
    if (this.quizContainer) this.quizContainer.style.display = 'none';
    if (this.resultContainer) this.resultContainer.style.display = 'block';

    window.dinoAudio.playSfx('fanfare');

    const totalQuestions = this.questions.length;
    const maxScore = totalQuestions * 10;
    const percentage = Math.round((this.score / maxScore) * 100);

    if (this.finalScoreEl) this.finalScoreEl.textContent = `${this.score} / ${maxScore} (${percentage}%)`;

    let rating = '⭐⭐⭐';
    let rankTitle = '👑 Raja Rimba Dinosaurus Hanzi';
    let detailMsg = 'Hebat luar biasa! Kamu telah menguasai jumlah guratan dan kosakata Han Yu 1 - 12 dengan sempurna!';

    if (percentage < 60) {
      rating = '⭐';
      rankTitle = '🥚 Bayi Dinosaurus Baru Menetas';
      detailMsg = 'Tetap semangat! Ulangi latihan menulis guratan dan bermain kuis untuk menambah pengetahuanmu!';
    } else if (percentage < 85) {
      rating = '⭐⭐';
      rankTitle = '🦖 Pemburu Fosil Cerdas';
      detailMsg = 'Bagus sekali! Pemahaman guratan dan kosakata Mandarinmu sudah sangat mantap!';
    }

    if (this.finalRatingEl) this.finalRatingEl.textContent = rating;
    if (this.finalTitleEl) this.finalTitleEl.textContent = rankTitle;
    if (this.finalDetailEl) this.finalDetailEl.textContent = detailMsg;

    // Review daftar soal yang dikerjakan
    if (this.finalReviewList) {
      this.finalReviewList.innerHTML = this.userAnswers.map((ans, idx) => `
        <div class="review-item ${ans.isCorrect ? 'review-correct' : 'review-wrong'}">
          <div class="review-status-icon">${ans.isCorrect ? '✅' : '❌'}</div>
          <div class="review-body">
            <div class="review-q-txt"><strong>Soal ${idx + 1}:</strong> ${ans.question.question}</div>
            <div class="review-ans-row">
              <span>Jawabanmu: <em>${ans.question.options[ans.selectedIndex].text}</em></span>
              ${!ans.isCorrect ? `<span class="review-correct-ans">Kunci Benar: <strong>${ans.question.options.find(o => o.isCorrect).text}</strong></span>` : ''}
            </div>
            <div class="review-exp">${ans.question.explanation}</div>
          </div>
        </div>
      `).join('');
    }
  }
}

// Global exposure
window.DinoQuiz = DinoQuiz;
