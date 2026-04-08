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
  {
    word:  "NOLI",
    hint:  "The first word of Rizal's first novel.",
    hint2: "Short for 'Noli Me Tangere'.",
    info:  "Noli Me Tangere, Latin for 'Touch Me Not', was published in 1887 in Berlin and exposed the abuses of Spanish colonial rule.",
  },
  {
    word:  "FILIBUSTERISMO",
    hint:  "The title of Rizal's second novel.",
    hint2: "Also known as 'El Fili'.",
    info:  "El Filibusterismo (1891) is darker and more radical than Noli, depicting the failure of peaceful reform and the rise of revolutionary thought.",
  },
  {
    word:  "KATIPUNAN",
    hint:  "The secret revolutionary society inspired by Rizal's writings.",
    hint2: "Founded by Andres Bonifacio in 1892.",
    info:  "Although Rizal did not endorse armed revolution, the Katipunan used his novels as rallying symbols for Philippine independence.",
  },
  {
    word:  "PROPAGANDA",
    hint:  "The reform movement Rizal was part of in Spain.",
    hint2: "It published La Solidaridad.",
    info:  "The Propaganda Movement sought peaceful reforms such as Philippine representation in the Spanish Cortes and equality before the law.",
  },
  {
    word:  "PACIANO",
    hint:  "Rizal's older brother and closest confidant.",
    hint2: "He financially supported Rizal's studies abroad.",
    info:  "Paciano Rizal was deeply involved in the resistance movement and later became a general in the Philippine-American War.",
  },
  {
    word:  "TEODORA",
    hint:  "The first name of Rizal's mother.",
    hint2: "Her surname is Alonso.",
    info:  "Teodora Alonso was a well-educated woman who taught Jose to read and inspired his love of literature and learning.",
  },
  {
    word:  "ATENEO",
    hint:  "The Manila school where Rizal excelled as a student.",
    hint2: "He graduated with highest honors here.",
    info:  "At the Ateneo Municipal de Manila, Rizal earned the title of Sobresaliente (Outstanding) in nearly all his subjects.",
  },
  {
    word:  "OPHTHALMOLOGY",
    hint:  "The medical specialty Rizal studied in Europe.",
    hint2: "It is the study and treatment of eye diseases.",
    info:  "Rizal specialized in ophthalmology to treat his mother's failing eyesight, successfully operating on her eyes upon his return.",
  },
  {
    word:  "LAGUNA",
    hint:  "The province where Rizal was born.",
    hint2: "Calamba is a city in this province.",
    info:  "Laguna is a landlocked province south of Manila, known for its hot springs and as the birthplace of the Philippine national hero.",
  },
  {
    word:  "SOLIDARIDAD",
    hint:  "The newspaper of the Propaganda Movement.",
    hint2: "It means 'Solidarity' in Spanish.",
    info:  "La Solidaridad was a fortnightly newspaper published in Spain that served as the main platform for Filipino reformists including Rizal.",
  },
  {
    word:  "MADRID",
    hint:  "The Spanish capital where Rizal continued his studies.",
    hint2: "He studied medicine and philosophy here.",
    info:  "In Madrid, Rizal studied at the Universidad Central and became deeply involved in the expatriate Filipino community and the Propaganda Movement.",
  },
  {
    word:  "BERLIN",
    hint:  "The German city where Noli Me Tangere was published.",
    hint2: "Rizal lived here from 1886 to 1887.",
    info:  "In Berlin, Rizal worked under Dr. Rudolf Virchow and completed Noli Me Tangere, which was printed there in 1887.",
  },
  {
    word:  "GHENT",
    hint:  "The Belgian city where El Filibusterismo was printed.",
    hint2: "Rizal chose it for cheaper printing costs.",
    info:  "Rizal moved the printing of El Filibusterismo from Brussels to Ghent to save money, relying on donations from Filipino friends.",
  },
  {
    word:  "BONIFACIO",
    hint:  "The founder of the Katipunan.",
    hint2: "His first name is Andres.",
    info:  "Andres Bonifacio was deeply inspired by Rizal's novels and initially sought Rizal's endorsement before launching the armed revolution.",
  },
  {
    word:  "RETRACTION",
    hint:  "The controversial document Rizal allegedly signed before his death.",
    hint2: "It reportedly renounced his anti-Catholic writings.",
    info:  "Whether Rizal's retraction was genuine or forged remains one of the most debated questions in Philippine history.",
  },
  {
    word:  "MARIACLARA",
    hint:  "The female protagonist of Noli Me Tangere.",
    hint2: "She is Ibarra's love interest.",
    info:  "Maria Clara is a symbol of the idealized Filipino woman and is widely believed to be modeled after Rizal's sweetheart Leonor Rivera.",
  },
  {
    word:  "HONGKONG",
    hint:  "The British colony where Rizal practiced medicine.",
    hint2: "He lived here before returning to the Philippines.",
    info:  "In Hong Kong, Rizal ran a medical clinic and treated many patients, including fellow Filipinos, before his fateful return to Manila in 1892.",
  },
  {
    word:  "LALIGA",
    hint:  "The civic organization Rizal founded upon returning to the Philippines.",
    hint2: "Its full name is La Liga Filipina.",
    info:  "Rizal founded La Liga Filipina on July 3, 1892, to unite Filipinos through civic action — he was arrested just days later.",
  },
  {
    word:  "PEPE",
    hint:  "Rizal's childhood nickname.",
    hint2: "It is a common Spanish nickname for Jose.",
    info:  "Jose Rizal was called Pepe by his family and close friends, a warm diminutive of his baptismal name Jose Protacio.",
  },
  {
    word:  "RIZAL",
    hint:  "The surname of the Philippine national hero.",
    hint2: "His full surname is Rizal Mercado.",
    info:  "Jose Rizal adopted the surname Rizal, derived from the Spanish 'ricial' meaning green fields, to distance himself from his family during his activism.",
  },
  {
    word:  "MERCADO",
    hint:  "The original family surname of Rizal.",
    hint2: "His full name is Jose Protacio Rizal Mercado y Alonso Realonda.",
    info:  "The Mercado family was a prominent ilustrado family in Calamba, Laguna, descended from a Chinese immigrant ancestor named Domingo Lam-Co.",
  },
  {
    word:  "ILUSTRADO",
    hint:  "The social class Rizal belonged to.",
    hint2: "It refers to educated, wealthy Filipinos during the Spanish era.",
    info:  "The ilustrados were the educated Filipino elite who studied in Europe and led the Propaganda Movement, pushing for reforms through intellect rather than arms.",
  },

  // ── ILO 4: Family, Childhood, Education, Early Life ──────────
  {
    word:  "FRANCISCO",
    hint:  "The first name of Rizal's father.",
    hint2: "His surname is Mercado Rizal.",
    info:  "Francisco Engracio Mercado Rizal was a hardworking farmer and sugar planter in Calamba who instilled in young Jose the values of industry, perseverance, and love for family.",
  },
  {
    word:  "BINAN",
    hint:  "The Laguna town where Rizal studied under Maestro Justiniano Aquino Cruz.",
    hint2: "He walked here at age 9 with his uncle.",
    info:  "At age 9, Rizal walked to Biñan, Laguna, with his uncle to attend the Latin school of Maestro Justiniano Aquino Cruz. He quickly surpassed his classmates, demonstrating his early brilliance.",
  },
  {
    word:  "REALONDA",
    hint:  "The second surname of Rizal's mother, Teodora Alonso.",
    hint2: "His full name ends with Alonso Realonda.",
    info:  "Teodora Alonso Realonda was Rizal's highly educated mother who first taught him to read, write, and pray. Her strong character and resilience deeply shaped his nationalist ideals.",
  },
  {
    word:  "CONCHA",
    hint:  "The nickname of Rizal's sister who died in childhood, deeply affecting young Jose.",
    hint2: "Her death introduced Rizal to the concept of mortality at an early age.",
    info:  "The death of his sister Concha (Concepcion) when Rizal was only three years old was one of his earliest and most sorrowful memories, stirring in him deep sensitivity and empathy.",
  },
  {
    word:  "SATURNINA",
    hint:  "The name of Rizal's eldest sister, also called Neneng.",
    hint2: "She was the first of eleven children in the Rizal family.",
    info:  "Saturnina, nicknamed Neneng, was the eldest of the Rizal siblings. The close-knit Rizal family, especially his sisters, provided Jose with the emotional warmth and support that grounded his idealism.",
  },
];

let selectedWordObj;
let guessedLetters      = [];
let wordMistakes        = 0;
const maxMistakes       = 5;
let sessionWordsGuessed = 0;
let gameOver            = false;

function initWordGame() {
  selectedWordObj = wordList[Math.floor(Math.random() * wordList.length)];
  guessedLetters  = [];
  wordMistakes    = 0;
  gameOver        = false;

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

  if (isWon && !gameOver) endGameWord(true);
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
  gameOver        = true;
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