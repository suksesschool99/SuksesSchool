/**
 * Dino Mandarin Adventure - Main App Controller
 * Navigasi Tab, Audio Controls, & Instance Initializer
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi Modul-Modul Aplikasi
  window.strokeWriterApp = new DinoStrokeWriter();
  window.matchGameApp = new DinoMatchGame();
  window.quizApp = new DinoQuiz();

  // Tab Switching
  const navTabs = document.querySelectorAll('.nav-tab-btn');
  const modules = document.querySelectorAll('.app-module-section');

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetModule = tab.getAttribute('data-target');

      // Update Nav active
      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update Module active with smooth transition
      modules.forEach(mod => {
        mod.classList.remove('active');
        if (mod.id === targetModule) {
          mod.classList.add('active');
        }
      });

      window.dinoAudio.playSfx('pop');

      // Jika membuka modul Guratan, reload ukuran canvas
      if (targetModule === 'module-stroke' && window.strokeWriterApp) {
        setTimeout(() => window.strokeWriterApp.reloadWriter(), 150);
      }
    });
  });

  // Sound Controls
  const btnToggleSfx = document.getElementById('btn-toggle-sfx');
  const btnToggleVoice = document.getElementById('btn-toggle-voice');

  if (btnToggleSfx) {
    btnToggleSfx.addEventListener('click', () => {
      const isEnabled = window.dinoAudio.toggleSfx();
      btnToggleSfx.classList.toggle('muted', !isEnabled);
      btnToggleSfx.innerHTML = isEnabled ? '🔊 Efek Suara: ON' : '🔇 Efek Suara: OFF';
      if (isEnabled) window.dinoAudio.playSfx('pop');
    });
  }

  if (btnToggleVoice) {
    btnToggleVoice.addEventListener('click', () => {
      const isEnabled = window.dinoAudio.toggleVoice();
      btnToggleVoice.classList.toggle('muted', !isEnabled);
      btnToggleVoice.innerHTML = isEnabled ? '🗣️ Suara Mandarin: ON' : '🤐 Suara Mandarin: OFF';
      if (isEnabled) window.dinoAudio.speakMandarin('你好');
    });
  }

  // Touch & Click sound wake-up for Web Audio API
  document.body.addEventListener('click', () => {
    window.dinoAudio.ensureAudioContext();
  }, { once: true });
});
