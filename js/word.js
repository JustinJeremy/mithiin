// ============================================================
//  word.js  –  Mga Lihim (Word Guess)
// ============================================================

const wordList = [
  {
    word:  "IBARRA",
    hint:  "The main protagonist of Noli Me Tangere.",
    hint2: "His full name is Juan Crisóstomo...",
    info:  "Juan Crisóstomo Ibarra represents the idealistic, European-educated Filipino youth who wishes to uplift his country through education.",
  },
  {
    word:  "SIMOUN",
    hint:  "The wealthy jeweler and alter ego of Ibarra.",
    hint2: "He appears in El Filibusterismo.",
    info:  "In El Filibusterismo, a bitter and cynical Ibarra returns as Simoun to exact revenge on the Spanish establishment.",
  },
  {
    word:  "DAPITAN",
    hint:  "The place in Mindanao where Rizal was exiled.",
    hint2: "Located in Zamboanga del Norte.",
    info:  "During his 4-year exile here, he practiced medicine, built infrastructure, and taught locals, proving his commitment to service.",
  },
  {
    word:  "CALAMBA",
    hint:  "The hometown of the Rizal family.",
    hint2: "A municipality in Laguna.",
    info:  "The agrarian trouble in Calamba, where the Dominicans raised rents, heavily influenced Rizal's political views against the friars.",
  },
  {
    word:  "BAGUMBAYAN",
    hint:  "The place where Rizal was executed.",
    hint2: "It is known today as Luneta Park.",
    info:  "On December 30, 1896, his execution here fueled the flames of the revolution, making him a martyr for Philippine independence.",
  },
  {
    word:  "LEONOR",
    hint:  "First name of Rizal's cousin and childhood sweetheart.",
    hint2: "Her surname is Rivera.",
    info:  "Leonor Rivera was widely considered Rizal's true love and the basis for the character Maria Clara.",
  },
  {
    word:  "JOSEPHINE",
    hint:  "The Irish woman Rizal married in Dapitan.",
    hint2: "Her surname is Bracken.",
    info:  "She came to Dapitan seeking treatment for her adoptive father. She and Rizal lived together as husband and wife until his death.",
  },
  {
    word:  "DIMASALANG",
    hint:  "One of Rizal's pen names.",
    hint2: "It translates to 'Untouchable'.",
    info:  "He used this alias to protect his identity when writing controversial articles for the Propaganda Movement.",
  },
];

let selectedWordObj;
let guessedLetters      = [];
let wordMistakes        = 0;
const maxMistakes       = 5;
let sessionWordsGuessed = 0;

function initWordGame() {
  selectedWordObj = wordList[Math.floor(Math.random() * wordList.length)];
  guessedLetters  = [];
  wordMistakes    = 0;

  document.getElementById('word-hint').innerText  = `Hint: ${selectedWordObj.hint}`;
  document.getElementById('word-hint2').classList.add('hidden');
  document.getElementById('word-hint2').innerText = `Specific Hint: ${selectedWordObj.hint2}`;
  document.getElementById('btn-hint2').classList.remove('hidden');

  document.getElementById('word-lives').innerText = maxMistakes;
  document.getElementById('word-end-screen').classList.add('hidden');

  renderWord();
  renderKeyboard();
}

function showHint2() {
  document.getElementById('word-hint2').classList.remove('hidden');
  document.getElementById('btn-hint2').classList.add('hidden');
}

function renderWord() {
  const wordDisplay = document.getElementById('word-display');
  wordDisplay.innerHTML = '';

  // Force layout via inline styles so Tailwind purge can't break it
  wordDisplay.style.cssText = [
    'display:flex',
    'justify-content:center',
    'align-items:flex-end',
    'flex-wrap:wrap',
    'gap:10px',
    'min-height:72px',
    'margin-bottom:24px',
  ].join(';');

  let isWon = true;

  selectedWordObj.word.split('').forEach(letter => {
    const span = document.createElement('span');

    span.style.cssText = [
      'display:inline-flex',
      'align-items:center',
      'justify-content:center',
      'width:44px',
      'height:60px',
      'border-bottom:4px solid #fbbf24',
      'font-family:"Playfair Display",serif',
      'font-size:1.75rem',
      'font-weight:700',
      'text-transform:uppercase',
      'transition:color 0.2s',
    ].join(';');

    if (guessedLetters.includes(letter)) {
      span.innerText     = letter;
      span.style.color   = '#fbbf24'; // gold
    } else {
      span.innerText     = '';
      span.style.color   = 'transparent';
      isWon = false;
    }

    wordDisplay.appendChild(span);
  });

  if (isWon) endGameWord(true);
}

function renderKeyboard() {
  const keyboard = document.getElementById('keyboard');
  keyboard.innerHTML = '';

  keyboard.style.cssText = [
    'display:flex',
    'flex-direction:column',
    'align-items:center',
    'gap:8px',
    'width:100%',
    'margin-top:8px',
  ].join(';');

  const rows   = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
  const isDark = document.documentElement.classList.contains('dark');

  rows.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.style.cssText = 'display:flex;justify-content:center;gap:6px;';

    row.split('').forEach(letter => {
      const btn = document.createElement('button');
      btn.innerText       = letter;
      btn.dataset.letter  = letter;

      const bgDefault  = isDark ? '#334155' : '#e2e8f0';
      const txtDefault = isDark ? '#f8fafc' : '#1e293b';

      btn.style.cssText = [
        'width:36px',
        'height:44px',
        'border-radius:6px',
        'border:none',
        'font-size:0.85rem',
        'font-weight:700',
        'cursor:pointer',
        `background:${bgDefault}`,
        `color:${txtDefault}`,
        'transition:background 0.15s,color 0.15s',
      ].join(';');

      btn.onmouseover = () => {
        if (!btn.disabled && !btn.dataset.result) {
          btn.style.background = '#fbbf24';
          btn.style.color      = '#0f172a';
        }
      };
      btn.onmouseout = () => {
        if (!btn.disabled && !btn.dataset.result) {
          btn.style.background = bgDefault;
          btn.style.color      = txtDefault;
        }
      };

      btn.onclick = () => handleGuess(letter, btn);
      rowDiv.appendChild(btn);
    });

    keyboard.appendChild(rowDiv);
  });
}

function handleGuess(letter, btnElement) {
  if (btnElement.disabled) return;
  btnElement.disabled      = true;
  btnElement.style.cursor  = 'default';
  guessedLetters.push(letter);

  if (selectedWordObj.word.includes(letter)) {
    btnElement.dataset.result    = 'correct';
    btnElement.style.background  = '#22c55e';
    btnElement.style.color       = '#fff';
    renderWord();
  } else {
    btnElement.dataset.result    = 'wrong';
    btnElement.style.background  = '#ef4444';
    btnElement.style.color       = '#fff';
    wordMistakes++;
    document.getElementById('word-lives').innerText = maxMistakes - wordMistakes;
    if (wordMistakes >= maxMistakes) endGameWord(false);
  }
}

function endGameWord(isWin) {
  const endScreen = document.getElementById('word-end-screen');
  const title     = document.getElementById('word-result-title');
  const desc      = document.getElementById('word-result-desc');
  const infoDump  = document.getElementById('word-info-dump');

  document.querySelectorAll('#keyboard button').forEach(btn => {
    btn.disabled = true;
    btn.style.cursor = 'default';
  });

  endScreen.classList.remove('hidden');
  infoDump.innerText = selectedWordObj.info;

  if (isWin) {
    sessionWordsGuessed++;
    if (typeof highScores !== 'undefined' && sessionWordsGuessed > highScores.word) {
      highScores.word = sessionWordsGuessed;
    }
    title.innerText = 'Magaling! (Excellent!)';
    title.className = 'font-serif text-3xl font-bold mb-2 text-gold';
    desc.innerHTML  = `You guessed it: <strong class="text-slate-900 dark:text-white">${selectedWordObj.word}</strong>`;
  } else {
    title.innerText = 'Sayang! (Too bad!)';
    title.className = 'font-serif text-3xl font-bold mb-2 text-red-500';
    desc.innerHTML  = `The correct word was: <strong class="text-gold">${selectedWordObj.word}</strong>`;

    // Reveal the full word
    guessedLetters = [...new Set([...guessedLetters, ...selectedWordObj.word.split('')])];
    renderWord();
  }
}
