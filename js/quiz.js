// ============================================================
//  quiz.js  –  Utak at Panitik (Trivia Quiz)  [FIXED]
// ============================================================

const allQuizData = [
  { q: "In which town and province was Dr. José Rizal born?",
    choices: ["Calamba, Laguna", "Dapitan, Zamboanga", "Biñan, Laguna", "Intramuros, Manila"],
    ans: 0,
    hint2: "He was born on June 19, 1861 — the seventh of eleven children.",
    fact: "Rizal was born on June 19, 1861, in Calamba, Laguna. He was the seventh of eleven children." },

  { q: "What is the title of Rizal's first published novel?",
    choices: ["El Filibusterismo", "Mi Ultimo Adios", "Noli Me Tangere", "Makamisa"],
    ans: 2,
    hint2: "It was published in Berlin in 1887 and exposed the abuses of Spanish friars.",
    fact: "Published in 1887 in Berlin, 'Noli Me Tangere' exposed the inequities of the Spanish Catholic friars." },

  { q: "Who was Rizal's Austrian friend and closest confidant?",
    choices: ["Marcelo H. del Pilar", "Ferdinand Blumentritt", "Maximo Viola", "Valentin Ventura"],
    ans: 1,
    hint2: "He was a schoolteacher, and their friendship was built entirely through letters.",
    fact: "Ferdinand Blumentritt was an Austrian teacher. They became close friends through letters." },

  { q: "Which pen name did Rizal use for 'La Solidaridad'?",
    choices: ["Plaridel", "Jomapa", "Diego Laura", "Laong Laan / Dimasalang"],
    ans: 3,
    hint2: "One name means 'Untouchable'; the other means 'Ever Prepared'.",
    fact: "He used 'Dimasalang' (Untouchable) and 'Laong Laan' (Ever Prepared)." },

  { q: "Approximately how many languages did Rizal know?",
    choices: ["5", "12", "22", "30"],
    ans: 2,
    hint2: "The number includes Tagalog, Spanish, Latin, French, German, and many more.",
    fact: "Rizal was a polyglot conversant in 22 languages including Tagalog, Spanish, Latin, French, and German." },

  { q: "Where was Rizal exiled for four years (1892-1896)?",
    choices: ["Hong Kong", "Dapitan", "Madrid", "Macau"],
    ans: 1,
    hint2: "It is located in Zamboanga del Norte, Mindanao.",
    fact: "In Dapitan, Rizal built a school, a hospital, a water system, and taught farming." },

  { q: "What was the name of Rizal's first dog?",
    choices: ["Bantay", "Usman", "Brutus", "Vergilio"],
    ans: 1,
    hint2: "It was a black dog he had as a young boy.",
    fact: "Usman was a black dog that Rizal had when he was a young boy." },

  { q: "Who financed the printing of Noli Me Tangere?",
    choices: ["Valentin Ventura", "Paciano Rizal", "Maximo Viola", "Ferdinand Blumentritt"],
    ans: 2,
    hint2: "He lent Rizal 300 pesos to print the first 2,000 copies.",
    fact: "Maximo Viola lent Rizal 300 pesos to print the first 2,000 copies of the Noli." },

  { q: "Who financed the printing of El Filibusterismo?",
    choices: ["Maximo Viola", "Valentin Ventura", "Jose Maria Basa", "Paciano Rizal"],
    ans: 1,
    hint2: "He sent funds to finish the printing in Ghent, Belgium.",
    fact: "Valentin Ventura sent Rizal the necessary funds to finish the printing of El Fili in Ghent." },

  { q: "What poem did Rizal write inside Fort Santiago before his execution?",
    choices: ["A La Juventud Filipina", "Mi Ultimo Adios", "Sa Aking Mga Kabata", "Himno Al Trabajo"],
    ans: 1,
    hint2: "He hid the manuscript inside an alcohol stove given to his sister.",
    fact: "He hid 'Mi Ultimo Adios' inside an alcohol stove given to his sister Trinidad." },

  { q: "Who was the woman considered to be Rizal's 'true love' and inspired Maria Clara?",
    choices: ["Josephine Bracken", "O-Sei-San", "Segunda Katigbak", "Leonor Rivera"],
    ans: 3,
    hint2: "She was his sweetheart for 11 years; her surname is a Spanish word for a riverbank.",
    fact: "Leonor Rivera was his cousin and sweetheart for 11 years, heavily inspiring the character of Maria Clara." },

  { q: "What was Rizal's degree when he graduated from Ateneo Municipal?",
    choices: ["Medicine", "Philosophy", "Land Surveying", "Bachelor of Arts"],
    ans: 3,
    hint2: "He graduated with the highest honors — Sobresaliente.",
    fact: "He graduated with a Bachelor of Arts degree, with highest honors (Sobresaliente)." },

  { q: "Where did Rizal specialize in Ophthalmology?",
    choices: ["Heidelberg, Germany", "Madrid, Spain", "Paris, France", "London, UK"],
    ans: 2,
    hint2: "He trained under Dr. Louis de Weckert in this French city.",
    fact: "He trained under Dr. Louis de Weckert in Paris, and later Dr. Otto Becker in Heidelberg." },

  { q: "What is the name of the secret society founded by Rizal in 1892?",
    choices: ["Katipunan", "La Liga Filipina", "Propaganda Movement", "Indios Bravos"],
    ans: 1,
    hint2: "Its goal was to unite the archipelago and promote peaceful reforms.",
    fact: "La Liga Filipina aimed to unite the archipelago and promote reforms, though he was arrested shortly after." },

  { q: "Which animal species was NOT named after Rizal from his discoveries in Dapitan?",
    choices: ["Draco rizali (Flying Dragon)", "Apogonia rizali (Beetle)", "Rhacophorus rizali (Frog)", "Philippinense rizali (Bird)"],
    ans: 3,
    hint2: "He discovered a flying dragon, a beetle, and a toad — but nothing with feathers.",
    fact: "He discovered a flying dragon, a beetle, and a toad/frog, but no bird species." },

  { q: "What date was Rizal executed?",
    choices: ["June 19, 1896", "December 30, 1896", "July 3, 1892", "August 26, 1896"],
    ans: 1,
    hint2: "He was executed at 7:03 in the morning in Bagumbayan.",
    fact: "He was executed by firing squad in Bagumbayan at 7:03 in the morning." },

  { q: "Who was the Spanish Governor-General who ordered Rizal's execution?",
    choices: ["Eulogio Despujol", "Ramon Blanco", "Camilo de Polavieja", "Miguel Lopez de Legazpi"],
    ans: 2,
    hint2: "He signed the death warrant after a brief and flawed military trial.",
    fact: "Polavieja signed Rizal's death warrant after a brief, flawed military trial." },

  { q: "What did Rizal request the firing squad to do before his death?",
    choices: ["Blindfold him", "Shoot him in the head", "Shoot him facing them", "Tie him to a pole"],
    ans: 2,
    hint2: "He wanted to prove he was not a traitor — but the request was denied.",
    fact: "He wanted to face the firing squad to prove he was not a traitor, but the request was denied. He twisted his body as he fell to land face up." },

  { q: "Who was Rizal's older brother who secretly supported his studies abroad?",
    choices: ["Francisco", "Domingo", "José", "Paciano"],
    ans: 3,
    hint2: "This brother later became a general in the Philippine Revolution.",
    fact: "Paciano was a general in the revolution and heavily influenced Rizal's political thoughts." },

  { q: "What is the meaning of 'Noli Me Tangere'?",
    choices: ["The Filibuster", "Touch Me Not", "My Last Farewell", "The Reign of Greed"],
    ans: 1,
    hint2: "It is a Latin phrase that comes from the Gospel of John.",
    fact: "It is a Latin phrase from the Gospel of John, meaning 'Touch me not'." },

  { q: "What was the surname Rizal used while studying in Europe to avoid Spanish surveillance?",
    choices: ["Mercado", "Lopez", "Laong", "Dimasalang"],
    ans: 0,
    hint2: "It was his family's original surname before the colonial name change.",
    fact: "He used 'Mercado,' his family's original surname, while traveling in Europe to evade Spanish colonial authorities tracking him." },

  { q: "What sculpture did Rizal create that is now displayed in the Rizal Shrine in Calamba?",
    choices: ["A bust of Padre Burgos", "A bust of his mother Teodora", "A bust of Napoleon Bonaparte", "The head of Jesus Christ"],
    ans: 3,
    hint2: "It is a religious subject, showing his skill as a visual artist beyond writing.",
    fact: "Among Rizal's many talents was sculpting. He created a head of Jesus Christ, showcasing his skill as a visual artist." },

  { q: "What sport or physical activity was Rizal notably skilled at during his time in Europe?",
    choices: ["Swimming and fencing", "Horse riding and archery", "Boxing and wrestling", "Gymnastics and polo"],
    ans: 0,
    hint2: "One of these activities involves a sword; the other involves water.",
    fact: "Rizal was an avid swimmer and a skilled fencer. He practiced fencing in Madrid and was known for his physical fitness." },

  { q: "In what city was El Filibusterismo printed?",
    choices: ["Madrid", "Berlin", "Ghent", "Paris"],
    ans: 2,
    hint2: "It is a city in Belgium, where Valentin Ventura funded the printing in 1891.",
    fact: "El Filibusterismo was printed in Ghent, Belgium in 1891, funded by his friend Valentin Ventura." },

  { q: "What medical condition did Rizal travel to Dapitan to treat for his patient and future partner's stepfather?",
    choices: ["Tuberculosis", "Cataracts", "Leprosy", "Malaria"],
    ans: 1,
    hint2: "It is a condition affecting eyesight — fitting for an ophthalmologist.",
    fact: "George Taufer, stepfather of Josephine Bracken, came to Dapitan for Rizal to treat his cataracts. This is how Rizal met Josephine." },

  { q: "Which of Rizal's sisters was with him the night before his execution and received his hidden farewell poem?",
    choices: ["Narcisa", "Lucia", "Trinidad", "Maria"],
    ans: 2,
    hint2: "She received an alcohol stove — with something secretly rolled up inside.",
    fact: "Trinidad Rizal received the alcohol stove in which José had secretly hidden the rolled-up manuscript of 'Mi Ultimo Adios.'" },

  { q: "What was the name of the ship that brought Rizal back to Manila in 1892, leading to his exile?",
    choices: ["SS Cebu", "SS Don Juan", "MV Dona Paz", "SS Salvadora"],
    ans: 0,
    hint2: "It is named after a major city in the Visayas region of the Philippines.",
    fact: "Rizal arrived in Manila aboard the SS Cebu in June 1892, and was arrested and exiled to Dapitan shortly after founding La Liga Filipina." },

  { q: "Which European country did Rizal visit to annotate Antonio de Morga's 'Sucesos de las Islas Filipinas'?",
    choices: ["France", "Germany", "Spain", "England"],
    ans: 3,
    hint2: "He studied the 1609 work at a famous national museum in London.",
    fact: "Rizal went to the British Museum in London to study and annotate Morga's 1609 work, to show Filipinos had a rich pre-colonial history." },

  { q: "What was the name of the school Rizal established for boys during his exile in Dapitan?",
    choices: ["Escuela de Dapitan", "La Liga School", "No formal name — it was simply his school", "Colegio Rizal"],
    ans: 2,
    hint2: "It taught languages, sciences, and arts to around 16 to 20 boys on his own land.",
    fact: "Rizal personally taught around 16 to 20 boys in a school on his own land. It had no official name but covered languages, sciences, and arts." },

  { q: "Before his execution, Rizal was offered a chance to recant his writings in exchange for his life. What did he do?",
    choices: ["He accepted and signed a full recantation", "He partially recanted but refused to renounce his novels", "He refused any recantation entirely", "He signed a document but later denied its authenticity"],
    ans: 0,
    hint2: "Historians still debate whether the document was genuine, coerced, or forged.",
    fact: "A signed recantation document exists, though historians still debate its authenticity. Some believe it was coerced or forged; others accept it as genuine." },
];

let activeQuizData = [];
let currentQIndex  = 0;
let quizScore      = 0;

function initQuiz() {
  activeQuizData = shuffleArray([...allQuizData]);
  currentQIndex  = 0;
  quizScore      = 0;

  document.getElementById('quiz-score-display').innerText = 'Score: 0';
  document.getElementById('quiz-end-screen').classList.add('hidden');
  document.getElementById('quiz-question-container').classList.remove('hidden');
  document.getElementById('quiz-fact-box').classList.add('hidden');

  loadQuestion();
}

function loadQuestion() {
  const qData = activeQuizData[currentQIndex];

  document.getElementById('quiz-question').innerText =
    `${currentQIndex + 1}. ${qData.q}`;
  document.getElementById('quiz-progress').style.width =
    `${(currentQIndex / activeQuizData.length) * 100}%`;

  // --- hint2 setup ---
  const hint2El  = document.getElementById('quiz-hint2');
  const hint2Btn = document.getElementById('btn-quiz-hint2');
  hint2El.classList.add('hidden');
  hint2El.innerText = `Specific Hint: ${qData.hint2}`;
  hint2Btn.classList.remove('hidden');

  // Clone to remove any stacked listeners from previous questions
  const newHint2Btn = hint2Btn.cloneNode(true);
  hint2Btn.parentNode.replaceChild(newHint2Btn, hint2Btn);
  newHint2Btn.addEventListener('click', () => {
    hint2El.classList.remove('hidden');
    newHint2Btn.classList.add('hidden');
  });
  // -------------------

  const choicesContainer = document.getElementById('quiz-choices');
  choicesContainer.innerHTML = '';

  qData.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.className =
      'quiz-choice-btn w-full text-left p-4 rounded-xl border-2 ' +
      'bg-slate-50 dark:bg-slate-600 text-slate-800 dark:text-slate-100 ' +
      'border-slate-300 dark:border-slate-400 ' +
      'hover:border-yellow-400 transition-all font-semibold';
    btn.innerText = choice;
    btn.dataset.index = index;
    btn.addEventListener('click', () => checkQuizAnswer(index));
    choicesContainer.appendChild(btn);
  });
}

function checkQuizAnswer(selectedIndex) {
  const qData   = activeQuizData[currentQIndex];
  const buttons = document.querySelectorAll('.quiz-choice-btn');

  // Disable all buttons immediately
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.style.cursor = 'default';
  });

  // Hide hint2 button once answered
  const hint2Btn = document.getElementById('btn-quiz-hint2');
  if (hint2Btn) hint2Btn.classList.add('hidden');

  buttons.forEach((btn, i) => {
    if (i === qData.ans) {
      // Correct answer — always highlight green
      btn.style.borderColor   = '#14b8a6';
      btn.style.backgroundColor = document.documentElement.classList.contains('dark')
        ? '#14532d' : '#dcfce7';
    } else if (parseInt(btn.dataset.index) === selectedIndex && selectedIndex !== qData.ans) {
      // Wrong selected answer — highlight red
      btn.style.borderColor   = '#ef4444';
      btn.style.backgroundColor = document.documentElement.classList.contains('dark')
        ? '#7f1d1d' : '#fee2e2';
    }
  });

  if (selectedIndex === qData.ans) {
    quizScore++;
    document.getElementById('quiz-score-display').innerText = `Score: ${quizScore}`;
  }

  document.getElementById('quiz-fact-text').innerText = qData.fact;
  document.getElementById('quiz-fact-box').classList.remove('hidden');

  const nextBtn = document.getElementById('quiz-next-btn');
  const newNextBtn = nextBtn.cloneNode(true);
  nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
  newNextBtn.addEventListener('click', () => {
    document.getElementById('quiz-fact-box').classList.add('hidden');
    currentQIndex++;
    if (currentQIndex < activeQuizData.length) {
      loadQuestion();
    } else {
      showQuizEnd();
    }
  });
}

function showQuizEnd() {
  document.getElementById('quiz-progress').style.width = '100%';
  document.getElementById('quiz-question-container').classList.add('hidden');
  document.getElementById('quiz-end-screen').classList.remove('hidden');
  document.getElementById('quiz-final-score').innerText = quizScore;
  document.getElementById('quiz-total-q').innerText     = activeQuizData.length;
  if (quizScore > highScores.quiz) {
    highScores.quiz = quizScore;
  }
}