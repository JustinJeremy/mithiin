// ============================================================
//  memory.js  –  Gunita (Memory Match)  [with Info Cards]
// ============================================================

const memorySets = [
  {
    title: "Historical Places",
    items: [
      {
        text: "Calamba",
        img: "assets/HistoricalPlaces/Calamba.jpg",
        info: "Calamba, Laguna is Rizal's birthplace. He was born here on June 19, 1861, in a modest house along the main street. The town's serene environment and his family's farm shaped his early love of nature, poetry, and the Filipino way of life.",
        tag: "Birthplace"
      },
      {
        text: "Dapitan",
        img: "assets/HistoricalPlaces/Dapitan.jpg",
        info: "Dapitan was Rizal's place of exile from 1892 to 1896. Far from being idle, he built a school, a hospital, and a water system for the community. It was here he met Josephine Bracken, his common-law wife, and continued his scientific and artistic pursuits.",
        tag: "Place of Exile"
      },
      {
        text: "Fort Santiago",
        img: "assets/HistoricalPlaces/FortSantiago.jpg",
        info: "Fort Santiago in Intramuros, Manila, was Rizal's final prison. He was detained here before his execution. He wrote his farewell poem 'Mi Último Adiós' within its walls, smuggling the manuscript out hidden inside an alcohol lamp.",
        tag: "Final Imprisonment"
      },
      {
        text: "Bagumbayan",
        img: "assets/HistoricalPlaces/Bagumbayan.jpg",
        info: "Bagumbayan (now Luneta / Rizal Park) was the site of Rizal's execution on December 30, 1896. He requested to face the firing squad — a final act of defiance — but was forced to turn his back. He still managed to turn as the shots rang out.",
        tag: "Martyrdom Site"
      },
      {
        text: "Madrid",
        img: "assets/HistoricalPlaces/Madrid.jpg",
        info: "Madrid was a crucial stop in Rizal's European journey. He enrolled at the Universidad Central de Madrid in 1882 and earned his Licentiate in Medicine. He also joined the Circulo Hispano-Filipino and began writing the early chapters of Noli Me Tangere.",
        tag: "Studies Abroad"
      },
      {
        text: "Heidelberg",
        img: "assets/HistoricalPlaces/Heidelberg.jpg",
        info: "In Heidelberg, Germany (1886), Rizal specialized in ophthalmology under Professor Otto Becker. He also composed the beautiful poem 'A las Flores de Heidelberg,' dedicated to the flowers he saw near the Neckar River, longing for his homeland.",
        tag: "Medical Specialization"
      },
      {
        text: "Hong Kong",
        img: "assets/HistoricalPlaces/HongKong.jpg",
        info: "Rizal lived in Hong Kong from 1891–1892, practicing as a doctor and treating poor Filipino expatriates, often for free. He also operated on his mother Teodora Alonso's failing eyesight here. He later planned to establish a Filipino colony in Borneo from this city.",
        tag: "Medical Practice"
      },
      {
        text: "Paris",
        img: "assets/HistoricalPlaces/Paris.jpg",
        info: "In Paris (1885–1886), Rizal worked under Dr. Louis de Weckert, a renowned ophthalmologist. He immersed himself in French culture, visited museums, and refined his painting and sculpting skills. The cosmopolitan city greatly broadened his reform-oriented worldview.",
        tag: "Artistic Growth"
      },
    ],
  },
  {
    title: "People in Rizal's Life",
    items: [
      {
        text: "G. Lopez Jaena",
        img: "assets/People/LopezJaena.jpg",
        info: "Graciano López Jaena was a close friend and fellow propagandist of Rizal. He founded the reformist newspaper La Solidaridad in 1889, which became the main platform of the Propaganda Movement. His fiery oratory and brilliant writing complemented Rizal's intellectual leadership.",
        tag: "Propagandist"
      },
      {
        text: "Paciano",
        img: "assets/People/Paciano.jpg",
        info: "Paciano Rizal was José's older brother and greatest hero. He was a student of Fr. Burgos — one of the Gomburza martyrs — and passed his revolutionary ideals to José. Paciano financed much of Rizal's European education and later became a general in the Philippine Revolution.",
        tag: "Elder Brother"
      },
      {
        text: "Leonor Rivera",
        img: "assets/People/LeonorRivera.jpg",
        info: "Leonor Rivera was Rizal's sweetheart for eleven years and the inspiration behind the character Maria Clara in Noli Me Tangere. She and Rizal exchanged hundreds of letters during his time abroad. She eventually married an Englishman after her family intercepted their correspondence.",
        tag: "Sweetheart & Muse"
      },
      {
        text: "J. Bracken",
        img: "assets/People/Bracken.jpg",
        info: "Josephine Bracken was an Irish-Filipino woman who came to Dapitan to seek treatment for her stepfather's blindness. She and Rizal fell in love and lived as common-law spouses. On the morning of his execution, they were reportedly married by a priest in his cell.",
        tag: "Common-Law Wife"
      },
      {
        text: "Blumentritt",
        img: "assets/People/Blumentritt.jpg",
        info: "Ferdinand Blumentritt was an Austrian professor and Rizal's most devoted foreign friend. Though the two never met until 1887, they exchanged over 200 letters. Blumentritt championed Rizal's work across Europe and wept openly when he learned of Rizal's execution.",
        tag: "Closest Foreign Friend"
      },
      {
        text: "Teodora Alonso",
        img: "assets/People/TeodoraAlonso.jpg",
        info: "Teodora Alonso Realonda was Rizal's beloved mother and his first teacher. She taught him to read and pray, sparking his lifelong love of literature. She was unjustly imprisoned by the Guardia Civil, an injustice that deeply radicalized the young José.",
        tag: "Mother & First Teacher"
      },
      {
        text: "Francisco Mercado",
        img: "assets/People/FranciscoMercado.jpg",
        info: "Francisco Engracio Rizal Mercado y Alejandro was Rizal's father and a prosperous tenant farmer in Calamba. A hardworking and principled man, he supported Rizal's education without fully understanding the revolutionary path it would lead his son toward.",
        tag: "Father"
      },
      {
        text: "M.H. del Pilar",
        img: "assets/People/DelPilar.jpg",
        info: "Marcelo H. del Pilar, known as 'Plaridel,' was a lawyer, journalist, and leader of the Propaganda Movement. He co-edited La Solidaridad and became its chief editor in 1891. He and Rizal competed for the movement's leadership, but both shared the same dream of Filipino freedom.",
        tag: "Propagandist Leader"
      },
    ],
  },
  {
    title: "Characters of Rizal's Works",
    items: [
      {
        text: "C. Ibarra",
        img: "assets/Characters/Ibarra.jpg",
        info: "Crisostomo Ibarra is the idealistic protagonist of Noli Me Tangere. A wealthy, educated ilustrado who returns from Europe with dreams of reforming society through education, Ibarra is widely considered Rizal's literary self-portrait — hopeful, principled, and ultimately disillusioned.",
        tag: "Noli Me Tangere"
      },
      {
        text: "Maria Clara",
        img: "assets/Characters/MariaClara.jpg",
        info: "Maria Clara is the gentle, devoted love interest of Ibarra in Noli Me Tangere. She represents the idealized Filipina of the colonial era — pure, obedient, and tragic. Her character was inspired by Rizal's own sweetheart, Leonor Rivera, and she became a cultural archetype.",
        tag: "Noli Me Tangere"
      },
      {
        text: "Elias",
        img: "assets/Characters/Elias.jpg",
        info: "Elias is the mysterious and self-sacrificing boatman in Noli Me Tangere. Born from a family destroyed by colonial injustice, he represents the revolutionary Filipino masses. He dies saving Ibarra, whispering a hope that someday his people will see a dawn of freedom.",
        tag: "Noli Me Tangere"
      },
      {
        text: "Padre Damaso",
        img: "assets/Characters/PadreDamaso.jpg",
        info: "Padre Dámaso is the arrogant, hypocritical friar and main villain of Noli Me Tangere. He symbolizes the abusive power of the Spanish clergy. Rizal used this character to expose how the Catholic Church in the Philippines wielded corrupt authority over Filipino lives.",
        tag: "Noli Me Tangere"
      },
      {
        text: "Sisa",
        img: "assets/Characters/Sisa.jpg",
        info: "Sisa is one of the most heartbreaking characters in Noli Me Tangere — a mother driven to madness by the loss of her two sons, Basilio and Crispin. She wanders the town singing, a haunting symbol of the suffering inflicted on the poor Filipino family by colonial oppression.",
        tag: "Noli Me Tangere"
      },
      {
        text: "Basilio",
        img: "assets/Characters/Basilio.jpeg",
        info: "Basilio is Sisa's older son who appears in both Noli Me Tangere and El Filibusterismo. He grows up to become a medical student, representing the Filipino youth who seeks change through education. In El Fili, he faces a moral crisis between Simoun's violent revolution and peaceful reform.",
        tag: "Noli / El Fili"
      },
      {
        text: "Simoun",
        img: "assets/Characters/Simoun.jpg",
        info: "Simoun is the transformed Ibarra in El Filibusterismo — now a cynical, revenge-driven jeweler who plots a violent overthrow of Spanish rule. He represents Rizal's darker question: Is peaceful reform enough, or does oppression demand revolution? In the end, his plans collapse.",
        tag: "El Filibusterismo"
      },
      {
        text: "Isagani",
        img: "assets/Characters/Isagani.jpg",
        info: "Isagani is a passionate, idealistic student in El Filibusterismo and the love interest of Paulita Gómez. Unlike Simoun, he believes in the power of education and love over violence. In a climactic act, he throws Simoun's explosive lamp into the river, choosing mercy over destruction.",
        tag: "El Filibusterismo"
      },
    ],
  },
];

// ─── Info Card Modal Injection (runs once) ───────────────────────────────────
(function injectInfoModal() {
  if (document.getElementById('match-info-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'match-info-modal';
  modal.style.cssText = `
    display: none;
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0,0,0,0.72);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    align-items: center;
    justify-content: center;
    padding: 1rem;
  `;

  modal.innerHTML = `
    <div id="match-info-card" style="
      position: relative;
      background: linear-gradient(160deg, #1e293b 0%, #0f172a 100%);
      border: 1.5px solid #fbbf24;
      border-radius: 1.25rem;
      box-shadow: 0 0 60px 0 rgba(251,191,36,0.18), 0 20px 60px rgba(0,0,0,0.5);
      max-width: 420px;
      width: 100%;
      overflow: hidden;
      animation: cardPop 0.38s cubic-bezier(0.175,0.885,0.32,1.275) forwards;
    ">

      <!-- Gold accent line -->
      <div style="height:3px; background: linear-gradient(90deg, transparent, #fbbf24, transparent);"></div>

      <!-- Image -->
      <div style="position:relative; width:100%; height:200px; overflow:hidden; background:#0f172a;">
        <img id="match-info-img" src="" alt="" style="
          width:100%; height:100%;
          object-fit:cover;
          display:block;
          filter: brightness(0.88) saturate(0.9);
        ">
        <!-- Tag badge -->
        <span id="match-info-tag" style="
          position:absolute; top:10px; right:10px;
          background: rgba(251,191,36,0.92);
          color: #0f172a;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          font-family: sans-serif;
        "></span>
        <!-- Gradient fade to card body -->
        <div style="position:absolute;bottom:0;left:0;right:0;height:60px;background:linear-gradient(to top, #1e293b, transparent);"></div>
      </div>

      <!-- Body -->
      <div style="padding: 1.25rem 1.5rem 1.5rem;">
        <!-- Icon + Name -->
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.75rem;">
          <div style="
            width:32px; height:32px; border-radius:50%;
            background: rgba(251,191,36,0.15);
            border: 1.5px solid #fbbf24;
            display:flex; align-items:center; justify-content:center;
            flex-shrink:0;
          ">
            <i class="fa-solid fa-feather" style="color:#fbbf24; font-size:0.8rem;"></i>
          </div>
          <h3 id="match-info-title" style="
            font-family: 'Playfair Display', serif;
            font-size: 1.25rem;
            font-weight: 700;
            color: #fbbf24;
            margin: 0;
            line-height: 1.2;
          "></h3>
        </div>

        <!-- Divider -->
        <div style="height:1px; background:linear-gradient(90deg, #334155, #fbbf2440, #334155); margin-bottom:0.85rem;"></div>

        <!-- Info text -->
        <p id="match-info-text" style="
          font-family: 'Poppins', sans-serif;
          font-size: 0.82rem;
          line-height: 1.7;
          color: #cbd5e1;
          margin: 0 0 1.25rem 0;
          text-align: justify;
        "></p>

        <!-- Continue button -->
        <button onclick="closeMatchInfoModal()" style="
          width: 100%;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: #0f172a;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 0.6rem 1rem;
          border: none;
          border-radius: 0.6rem;
          cursor: pointer;
          transition: opacity 0.15s;
        " onmouseover="this.style.opacity='0.88'" onmouseout="this.style.opacity='1'">
          <i class="fa-solid fa-check" style="margin-right:6px;"></i> Got It — Continue
        </button>
      </div>

      <!-- Close X -->
      <button onclick="closeMatchInfoModal()" style="
        position:absolute; top:10px; left:12px;
        background:rgba(0,0,0,0.45);
        border:none; border-radius:50%;
        width:28px; height:28px;
        color:#94a3b8;
        font-size:0.8rem;
        display:flex; align-items:center; justify-content:center;
        cursor:pointer;
        line-height:1;
      ">&times;</button>
    </div>

    <style>
      @keyframes cardPop {
        from { opacity:0; transform: scale(0.82) translateY(24px); }
        to   { opacity:1; transform: scale(1)    translateY(0);    }
      }
    </style>
  `;

  document.body.appendChild(modal);
})();

// ─── Show / Hide helpers ──────────────────────────────────────────────────────
function showMatchInfoModal(item) {
  const modal = document.getElementById('match-info-modal');
  document.getElementById('match-info-img').src   = item.img;
  document.getElementById('match-info-img').alt   = item.text;
  document.getElementById('match-info-title').textContent = item.text;
  document.getElementById('match-info-text').textContent  = item.info;
  document.getElementById('match-info-tag').textContent   = item.tag || '';

  modal.style.display = 'flex';
  // Re-trigger animation
  const card = document.getElementById('match-info-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = 'cardPop 0.38s cubic-bezier(0.175,0.885,0.32,1.275) forwards';
}

function closeMatchInfoModal() {
  document.getElementById('match-info-modal').style.display = 'none';
}

// Close on backdrop click
document.addEventListener('click', function(e) {
  const modal = document.getElementById('match-info-modal');
  if (modal && e.target === modal) closeMatchInfoModal();
});

// ─── Game State ───────────────────────────────────────────────────────────────
let memoryCards    = [];
let hasFlippedCard = false;
let lockBoard      = false;
let firstCard, secondCard;
let matchedPairs   = 0;
let moves          = 0;
let currentSetItems = []; // flat list for lookup

// ─── Init ─────────────────────────────────────────────────────────────────────
function initMemory() {
  const grid = document.getElementById('memory-grid');
  grid.innerHTML = '';

  const selectedSet = memorySets[Math.floor(Math.random() * memorySets.length)];
  document.getElementById('memory-set-desc').innerText = `Current Set: ${selectedSet.title}`;

  currentSetItems = selectedSet.items;
  memoryCards = shuffleArray([...selectedSet.items, ...selectedSet.items]);

  hasFlippedCard = false;
  lockBoard      = false;
  firstCard      = null;
  secondCard     = null;
  matchedPairs   = 0;
  moves          = 0;

  document.getElementById('memory-moves').innerText = moves;
  document.getElementById('memory-win-screen').classList.add('hidden');

  memoryCards.forEach((item) => {
    const card = document.createElement('div');
    card.style.cssText = `
      position: relative;
      width: 100%;
      padding-bottom: 100%;
      cursor: pointer;
      perspective: 1000px;
    `;
    card.dataset.val = item.text;
    card.classList.add('memory-card-wrapper');

    card.innerHTML = `
      <div class="mc-inner" style="
        position: absolute; inset: 0;
        transition: transform 0.55s ease;
        transform-style: preserve-3d;
      ">
        <!-- BACK (visible by default) -->
        <div style="
          position: absolute; inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border: 2px solid #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fbbf24;
          font-size: 1.8rem;
        ">
          <i class="fa-solid fa-feather"></i>
        </div>

        <!-- FRONT (shown after flip) -->
        <div style="
          position: absolute; inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: rotateY(180deg);
          border-radius: 0.75rem;
          border: 2px solid #fbbf24;
          overflow: hidden;
          background: #1e293b;
        ">
          <img src="${item.img}" alt="${item.text}" style="
            width: 100%; height: 100%;
            object-fit: cover;
            display: block;
            filter: brightness(0.85);
          " onerror="this.style.display='none'">
          <div style="
            position: absolute; bottom: 0; left: 0; right: 0;
            background: rgba(0,0,0,0.75);
            color: white;
            text-align: center;
            padding: 4px 2px;
            font-size: 0.72rem;
            font-weight: bold;
            font-family: sans-serif;
          ">${item.text}</div>
        </div>
      </div>
    `;

    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  });
}

// ─── Flip ─────────────────────────────────────────────────────────────────────
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  if (this.dataset.matched === 'true') return;

  const inner = this.querySelector('.mc-inner');
  inner.style.transform = 'rotateY(180deg)';
  this.dataset.flipped = 'true';

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  moves++;
  document.getElementById('memory-moves').innerText = moves;
  checkForMatch();
}

// ─── Match Check ──────────────────────────────────────────────────────────────
function checkForMatch() {
  const isMatch = firstCard.dataset.val === secondCard.dataset.val;
  if (isMatch) {
    disableMemoryCards();
  } else {
    unflipCards();
  }
}

function disableMemoryCards() {
  const fc = firstCard;
  const sc = secondCard;

  fc.dataset.matched = 'true';
  sc.dataset.matched = 'true';
  fc.classList.add('matched');
  sc.classList.add('matched');

  fc.removeEventListener('click', flipCard);
  sc.removeEventListener('click', flipCard);

  matchedPairs++;

  hasFlippedCard = false;
  lockBoard      = false;
  firstCard      = null;
  secondCard     = null;

  // Gold glow on matched front faces
  const fcFront = fc.querySelector('.mc-inner > div:nth-child(2)');
  const scFront = sc.querySelector('.mc-inner > div:nth-child(2)');
  fcFront.style.boxShadow = '0 0 15px 4px rgba(251, 191, 36, 0.8)';
  scFront.style.boxShadow = '0 0 15px 4px rgba(251, 191, 36, 0.8)';

  // Show info card after a short delay so the flip animation finishes
  const matchedVal = fc.dataset.val;
  const itemData   = currentSetItems.find(i => i.text === matchedVal);

  setTimeout(() => {
    if (itemData) showMatchInfoModal(itemData);

    // Check win condition after modal is closed (handled inside closeMatchInfoModal)
    if (matchedPairs === memoryCards.length / 2) {
      // Attach win check to the close button — override closeMatchInfoModal temporarily
      const originalClose = window.closeMatchInfoModal;
      window.closeMatchInfoModal = function() {
        document.getElementById('match-info-modal').style.display = 'none';
        window.closeMatchInfoModal = originalClose; // restore
        document.getElementById('memory-win-screen').classList.remove('hidden');
        document.getElementById('memory-final-moves').innerText = moves;
        if (typeof highScores !== 'undefined' && moves < highScores.memory) {
          highScores.memory = moves;
        }
      };
    }
  }, 650);
}

// ─── Unflip ───────────────────────────────────────────────────────────────────
function unflipCards() {
  lockBoard = true;
  const fc = firstCard;
  const sc = secondCard;
  setTimeout(() => {
    if (fc && fc.dataset.matched !== 'true') {
      fc.querySelector('.mc-inner').style.transform = '';
      fc.dataset.flipped = 'false';
    }
    if (sc && sc.dataset.matched !== 'true') {
      sc.querySelector('.mc-inner').style.transform = '';
      sc.dataset.flipped = 'false';
    }
    resetMemoryBoard();
  }, 1100);
}

function resetMemoryBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard]     = [null, null];
}