// ============================================================
//  main.js  –  Theme, Menu, Screen Management, Shared Helpers
// ============================================================

// ─── Theme & Menu ───────────────────────────────────────────
const themeToggle  = document.getElementById('theme-toggle');
const menuBtn      = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const html         = document.documentElement;

let isDark = true;

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  html.classList.toggle('dark', isDark);
});

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle('dropdown-hidden');
  dropdownMenu.classList.toggle('dropdown-visible');
});

document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    dropdownMenu.classList.add('dropdown-hidden');
    dropdownMenu.classList.remove('dropdown-visible');
  }
});

// ─── Member Photo Upload ─────────────────────────────────────
function triggerUpload(inputId) {
  document.getElementById(inputId).click();
}

// Syncs the same photo across all instances of member
function previewMemberPhoto(input, ...imgIds) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imgIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.src = e.target.result;
      });
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// ─── High Scores (shared across all game modules) ───────────
const highScores = { quiz: 0, memory: Infinity, word: 0, runner: 0 };

function updateLeaderboards() {
  document.getElementById('lb-quiz').innerText   = highScores.quiz;
  document.getElementById('lb-memory').innerText = highScores.memory === Infinity ? '—' : highScores.memory;
  document.getElementById('lb-word').innerText   = highScores.word;
  document.getElementById('lb-runner').innerText = highScores.runner;
}

// ─── Screen Management ──────────────────────────────────────
function showScreen(screenId) {
  if (screenId !== 'runner') stopRunner();

  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    setTimeout(() => { if (!s.classList.contains('active')) s.style.display = 'none'; }, 300);
  });

  const target = document.getElementById('screen-' + screenId);
  target.style.display = 'block';
  setTimeout(() => target.classList.add('active'), 50);

  if (screenId === 'leaderboard') updateLeaderboards();
}

function navTo(screenId) {
  dropdownMenu.classList.add('dropdown-hidden');
  dropdownMenu.classList.remove('dropdown-visible');
  showScreen(screenId);
}

function startGame(gameId) {
  navTo(gameId);
  if (gameId === 'quiz')   initQuiz();
  if (gameId === 'memory') initMemory();
  if (gameId === 'word')   initWordGame();
  if (gameId === 'runner') initRunner();
}

// ─── Shared Utility ─────────────────────────────────────────
function shuffleArray(array) {
  let curId = array.length;
  while (curId !== 0) {
    const randId = Math.floor(Math.random() * curId);
    curId--;
    [array[curId], array[randId]] = [array[randId], array[curId]];
  }
  return array;
}

// ─── Init ────────────────────────────────────────────────────
window.onload = () => showScreen('home');