// ============================================================
//  runner.js  –  Takbo, Pepe! (Endless Runner)
//  Rizal-themed visuals + Knowledge Unlock system
// ============================================================

sessionStorage.removeItem('rizal_runner_unlocked');
const canvas = document.getElementById('runner-canvas');
const ctx    = canvas.getContext('2d');

// ─── Knowledge Cards unlocked at score milestones ────────────
const knowledgeCards = [
  {
    score: 50,
    icon: '📖',
    title: 'The Noli Me Tangere',
    category: 'Works',
    text: 'Published in Berlin in 1887, Noli Me Tangere exposed the abuses of the Spanish friars and colonial government. The title, Latin for "Touch Me Not," was taken from the Gospel of John.',
  },
  {
    score: 150,
    icon: '🕊️',
    title: "Rizal's Martyrdom",
    category: 'History',
    text: 'Executed at Bagumbayan (now Luneta Park) on December 30, 1896, at age 35. He reportedly turned to face the rising sun before the shots rang out — choosing to die facing the dawn. His death ignited the Philippine Revolution.',
  },
  {
    score: 300,
    icon: '🖊️',
    title: 'El Filibusterismo',
    category: 'Works',
    text: 'The darker sequel to Noli Me Tangere, published in Ghent in 1891. El Filibusterismo follows the vengeful Simoun and warns that violent revolution without moral reform will fail.',
  },
  {
    score: 500,
    icon: '✈️',
    title: "Rizal's Travels to Europe",
    category: 'Travels',
    text: 'Rizal sailed to Spain in 1882 to study medicine at the Universidad Central de Madrid. He later traveled to Paris, Berlin, London, and other European cities, absorbing Enlightenment ideals.',
  },
  {
    score: 750,
    icon: '⚔️',
    title: 'The Katipunan & Revolution',
    category: 'History',
    text: "Although Rizal opposed armed revolution, Andres Bonifacio's Katipunan used Rizal's writings as inspiration. After Rizal's execution on Dec. 30, 1896, the revolution intensified.",
  },
  {
    score: 1050,
    icon: '🏡',
    title: 'Exile in Dapitan',
    category: 'Life',
    text: 'From 1892 to 1896, Rizal was exiled to Dapitan, Mindanao. There he built a school, a water system, and a hospital, practiced medicine, and fell in love with Josephine Bracken.',
  },
  {
    score: 1400,
    icon: '💌',
    title: 'Mi Último Adiós',
    category: 'Works',
    text: 'Written the night before his execution, this farewell poem was smuggled out in an alcohol lamp. Though untitled by Rizal himself, it became his most celebrated literary work.',
  },
  {
    score: 1800,
    icon: '🌏',
    title: 'The Propaganda Movement',
    category: 'Travels',
    text: 'In Europe, Rizal joined the Propaganda Movement alongside Marcelo H. del Pilar and Graciano López Jaena, contributing to La Solidaridad newspaper to advocate for Philippine reforms.',
  },
  {
    score: 2250,
    icon: '⚖️',
    title: 'La Liga Filipina',
    category: 'History',
    text: 'On July 3, 1892, Rizal founded La Liga Filipina in Manila — a civic organization aimed at uniting Filipinos and pushing for peaceful reforms. He was arrested just days later and exiled to Dapitan.',
  },
  {
    score: 2750,
    icon: '📜',
    title: "Rizal's Trial & Conviction",
    category: 'History',
    text: 'Rizal was charged with rebellion, sedition, and conspiracy in a military court. The trial lasted only days. Despite no solid evidence of direct involvement in the revolution, he was sentenced to death.',
  },
  {
    score: 3300,
    icon: '🕯️',
    title: "Rizal's Last Hours",
    category: 'Life',
    text: 'On the eve of his execution, Rizal was visited by family and a Jesuit priest. He hid Mi Último Adiós inside an alcohol stove. He requested to face the firing squad — symbolically refusing to be treated as a traitor.',
  },
  {
    score: 3900,
    icon: '🏫',
    title: "Rizal's School in Dapitan",
    category: 'Life',
    text: 'During his exile, Rizal established a free school for local boys covering languages, science, arts, and physical education. He personally taught up to 20 students and paid for their needs from his own pocket.',
  },
  {
    score: 4550,
    icon: '🎨',
    title: 'Rizal the Artist & Sculptor',
    category: 'Legacy',
    text: 'Beyond writing, Rizal was a gifted visual artist. He sculpted, sketched, and painted throughout his life. Among his works is a sculpted head of Jesus Christ, crafted during his exile in Dapitan.',
  },
  {
    score: 5000,
    icon: '🌿',
    title: 'Rizal the Polymath',
    category: 'Legacy',
    text: 'Rizal spoke over 22 languages, was a physician, poet, novelist, sculptor, painter, and naturalist. He even discovered new animal species, including the Draco rizali lizard.',
  },
  {
    score: 5500,
    icon: '🔬',
    title: 'The Scientist of Dapitan',
    category: 'Legacy',
    text: 'In Dapitan, Rizal corresponded with scientists in Europe and collected specimens. He discovered several new species — a flying dragon (Draco rizali), a beetle (Apogonia rizali), and a frog — all named in his honor.',
  },
  {
    score: 6000,
    icon: '👨‍👩‍👧‍👦',
    title: "The Rizal Family of Calamba",
    category: 'Early Life',
    text: "Jose was the seventh of eleven children born to Francisco Mercado Rizal and Teodora Alonso Realonda. His family were ilustrados — educated, respected landowners in Calamba, Laguna — whose warmth and strong values shaped his character.",
  },
  {
    score: 6500,
    icon: '📚',
    title: "His Mother, His First Teacher",
    category: 'Early Life',
    text: "Teodora Alonso Realonda, Rizal's highly educated mother, was the first to teach him to read and write. She introduced him to poetry and prayer, sparking a love of literature that defined his life. Her unjust imprisonment by Spanish authorities when Rizal was 11 deepened his hatred of colonial injustice.",
  },
  {
    score: 7000,
    icon: '🏫',
    title: "Young Jose in Biñan",
    category: 'Early Life',
    text: "At age 9, Rizal traveled with his uncle to Biñan, Laguna, to study under Maestro Justiniano Aquino Cruz. He surpassed all his classmates within weeks. This early experience away from home built his independence and confirmed his extraordinary intellectual gifts.",
  },
  {
    score: 7500,
    icon: '🌾',
    title: "Father Francisco & The Land Dispute",
    category: 'Early Life',
    text: "Rizal's father Francisco was a sugar farmer who leased land from the Dominican friars. When the friars unjustly raised rents and eventually expelled the family from Calamba, it became one of the most formative injustices of Rizal's life — directly inspiring the themes of Noli Me Tangere.",
  },
  {
    score: 8000,
    icon: '⭐',
    title: "Ateneo & Early Excellence",
    category: 'Early Life',
    text: "Rizal entered the Ateneo Municipal de Manila at age 11. Despite being initially rejected for being late and too small, he rose to become the top student, earning the title 'Sobresaliente' (Outstanding) in nearly every subject. His time at Ateneo honed his nationalism and thirst for knowledge.",
  },
];
// Track which cards have been shown this session
const SESSION_KEY = 'rizal_runner_unlocked';
 
function loadSessionUnlocks() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}
 
function saveSessionUnlocks(indices) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(indices));
  } catch (e) {}
}
 
let unlockedCardIndices = loadSessionUnlocks();

// ─── Game State ──────────────────────────────────────────────
let runnerReq;
let isRunnerPlaying = false;
let rScore    = 0;
let rFrames   = 0;
let gameSpeed = 4;
let groundParticles = [];
let bgStars = [];

const gravity = 0.55;
const floorY  = 210;
const CANVAS_W = 800;
const CANVAS_H = 250;

// ─── Player ──────────────────────────────────────────────────
let player = {
  x: 60, y: floorY - 54,
  width: 36, height: 54,
  dy: 0, jumpPower: -13,
  grounded: false,
  isDucking: false,
  normalH: 54, duckH: 28,
  frame: 0, frameTimer: 0,
  runFrames: 0,
};

// ─── Obstacles ───────────────────────────────────────────────
let obstacles = [];

// Rizal-themed obstacles:
//  LOW  → 💂 Guardia Civil (ground patrol, duck or jump)
//  HIGH → 📜 Flying Scroll / Friar (flying, must duck)
const obstacleTypes = [
  { type: 'low',  label: 'Guardia Civil', emoji: '💂', h: 48, w: 32, y: floorY - 48 },
  { type: 'low',  label: 'Friar',         emoji: '🧔', h: 48, w: 32, y: floorY - 48 },
  { type: 'high', label: 'Flying Scroll', emoji: '📜', h: 32, w: 32, y: floorY - 90 },
  { type: 'high', label: 'Bat',           emoji: '🦇', h: 32, w: 32, y: floorY - 95 },
];

// ─── Background scenery ──────────────────────────────────────
let bgLayers = [
  { x: 0, speed: 0.3, items: [] },  // far buildings / mountains
  { x: 0, speed: 0.8, items: [] },  // mid trees
];

// ─── Init ────────────────────────────────────────────────────
function initRunner() {
  stopRunner();
  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
  unlockedCardIndices = loadSessionUnlocks();
  pendingCard = null;
  showingCard = false;

  // Generate random stars for night background
  bgStars = Array.from({ length: 40 }, () => ({
    x: Math.random() * CANVAS_W,
    y: Math.random() * (floorY - 30),
    r: Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.6 + 0.4,
  }));

  document.getElementById('runner-overlay').classList.remove('hidden');
  document.getElementById('runner-msg-title').innerText = 'Ready?';
  document.getElementById('runner-final-score-display').classList.add('hidden');

  drawBackground();
  drawPlayerSprite(player.x, player.y, player.height, false, false);
}

function startRunner() {
  document.getElementById('runner-overlay').classList.add('hidden');

  player.y        = floorY - player.normalH;
  player.dy       = 0;
  player.isDucking = false;
  player.height   = player.normalH;
  player.frame    = 0;
  player.runFrames = 0;

  obstacles       = [];
  groundParticles = [];
  rScore          = 0;
  rFrames         = 0;
  gameSpeed       = 4;
  isRunnerPlaying = true;
  unlockedCardIndices = loadSessionUnlocks();   // ✅ reads from sessionStorage
  pendingCard = null;
  showingCard = false;

  document.getElementById('runner-score').innerText = rScore;
  runnerLoop();
}

function stopRunner() {
  isRunnerPlaying = false;
  cancelAnimationFrame(runnerReq);
}

// ─── Main Loop ───────────────────────────────────────────────
function runnerLoop() {
  if (!isRunnerPlaying) return;

  // If a knowledge card is waiting to show, pause and show it
  if (pendingCard && !showingCard) {
    showingCard = true;
    isRunnerPlaying = false;
    showKnowledgeCard(pendingCard);
    pendingCard = null;
    return;
  }

  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
  drawBackground();

  // ── Physics ──
  player.dy += gravity;
  player.y  += player.dy;

  if (player.y + player.height >= floorY) {
    player.y        = floorY - player.height;
    player.dy       = 0;
    player.grounded = true;
  } else {
    player.grounded = false;
  }

  // ── Ducking ──
  if (player.isDucking && player.grounded) {
    player.height = player.duckH;
    player.y      = floorY - player.duckH;
  } else if (!player.isDucking) {
    player.height = player.normalH;
  }

  // ── Animate run frames ──
  player.frameTimer++;
  if (player.frameTimer > 8) { player.frame = (player.frame + 1) % 2; player.frameTimer = 0; }
  if (player.grounded) player.runFrames++;

  // ── Ground dust particles ──
  if (player.grounded && player.runFrames % 6 === 0) {
    groundParticles.push({ x: player.x + 5, y: floorY, vx: -1.5 - Math.random(), vy: -1 - Math.random(), life: 18 });
  }
  updateParticles();

  // ── Draw player ──
  drawPlayerSprite(player.x, player.y, player.height, player.isDucking, !player.grounded);

  // ── Spawn obstacles ──
  const spawnInterval = Math.max(55, 110 - Math.floor(rScore / 15));
  if (rFrames % spawnInterval === 0 && rFrames > 0) spawnObstacle();

  // ── Update / draw obstacles ──
  for (let i = obstacles.length - 1; i >= 0; i--) {
    const obs = obstacles[i];
    obs.x -= gameSpeed;

    drawObstacle(obs);

    // Collision (with generous forgiveness margin)
    const margin = 8;
    if (
      player.x + margin < obs.x + obs.w - margin &&
      player.x + player.width - margin > obs.x + margin &&
      player.y + margin < obs.y + obs.h &&
      player.y + player.height > obs.y + margin
    ) {
      gameOverRunner();
      return;
    }

    if (obs.x + obs.w < 0) {
      obstacles.splice(i, 1);
      rScore += 10;
      document.getElementById('runner-score').innerText = rScore;
      if (rScore % 100 === 0 && rScore > 0) gameSpeed = Math.min(gameSpeed + 0.4, 12);
      checkKnowledgeUnlock(rScore);
    }
  }

  rFrames++;
  runnerReq = requestAnimationFrame(runnerLoop);
}

// ─── Drawing ─────────────────────────────────────────────────
function drawBackground() {
  const dark = document.documentElement.classList.contains('dark');

  // Sky gradient
  const skyGrad = ctx.createLinearGradient(0, 0, 0, floorY);
  if (dark) {
    skyGrad.addColorStop(0, '#0b1120');
    skyGrad.addColorStop(1, '#1e2f50');
  } else {
    skyGrad.addColorStop(0, '#7ec8e3');
    skyGrad.addColorStop(1, '#d4eaf7');
  }
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, CANVAS_W, floorY);

  // Stars (dark mode only)
  if (dark) {
    bgStars.forEach(s => {
      ctx.globalAlpha = s.alpha;
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  // Sun / Moon
  const celestialX = 720, celestialY = 40, celestialR = 28;
  if (dark) {
    // Moon
    ctx.fillStyle = '#fde68a';
    ctx.beginPath();
    ctx.arc(celestialX, celestialY, celestialR, 0, Math.PI * 2);
    ctx.fill();
    // crater details
    ctx.fillStyle = 'rgba(0,0,0,0.12)';
    [[8,-8,6],[15,5,4],[-5,6,3]].forEach(([cx,cy,cr]) => {
      ctx.beginPath(); ctx.arc(celestialX+cx, celestialY+cy, cr, 0, Math.PI*2); ctx.fill();
    });
  } else {
    // Sun glow
    const sunGrad = ctx.createRadialGradient(celestialX, celestialY, 0, celestialX, celestialY, celestialR * 2);
    sunGrad.addColorStop(0, 'rgba(255,220,50,0.6)');
    sunGrad.addColorStop(1, 'rgba(255,220,50,0)');
    ctx.fillStyle = sunGrad;
    ctx.beginPath(); ctx.arc(celestialX, celestialY, celestialR * 2, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath(); ctx.arc(celestialX, celestialY, celestialR, 0, Math.PI * 2); ctx.fill();
  }

  // Distant silhouette hills
  ctx.fillStyle = dark ? 'rgba(30,47,80,0.8)' : 'rgba(180,210,230,0.6)';
  ctx.beginPath();
  ctx.moveTo(0, floorY);
  [0,80,160,240,320,400,480,560,640,720,800].forEach((x, i) => {
    const h = [30,55,40,70,45,60,35,65,50,40,30][i];
    ctx.lineTo(x, floorY - h);
  });
  ctx.lineTo(800, floorY);
  ctx.closePath();
  ctx.fill();

  // Mid layer trees / bushes (scroll with rFrames)
  const treeOffset = (rFrames * 0.8) % 200;
  ctx.fillStyle = dark ? '#1a3a2a' : '#4a7c59';
  for (let tx = -treeOffset; tx < CANVAS_W + 40; tx += 90) {
    // Triangle pine tree
    ctx.beginPath();
    ctx.moveTo(tx + 15, floorY - 8);
    ctx.lineTo(tx + 15, floorY - 45);
    ctx.lineTo(tx + 30, floorY - 8);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(tx + 15, floorY - 30);
    ctx.lineTo(tx + 15, floorY - 60);
    ctx.lineTo(tx + 30, floorY - 30);
    ctx.closePath();
    ctx.fill();
  }

  // Ground
  const groundGrad = ctx.createLinearGradient(0, floorY, 0, CANVAS_H);
  groundGrad.addColorStop(0, dark ? '#374151' : '#86976a');
  groundGrad.addColorStop(1, dark ? '#1f2937' : '#6b7e52');
  ctx.fillStyle = groundGrad;
  ctx.fillRect(0, floorY, CANVAS_W, CANVAS_H - floorY);

  // Ground line detail
  ctx.strokeStyle = dark ? '#4b5563' : '#9ab07a';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(0, floorY + 4); ctx.lineTo(CANVAS_W, floorY + 4); ctx.stroke();

  // Scrolling ground dots
  const dotOffset = (rFrames * gameSpeed) % 40;
  ctx.fillStyle = dark ? 'rgba(75,85,99,0.4)' : 'rgba(154,176,122,0.5)';
  for (let dx = -dotOffset; dx < CANVAS_W; dx += 40) {
    ctx.fillRect(dx, floorY + 8, 20, 2);
  }
}

function drawPlayerSprite(px, py, ph, ducking, jumping) {
  // Draw Rizal as a stylized figure
  const cx = px + 18; // center x
  const scale = ducking ? 0.55 : 1;
  const baseY = py + ph;

  ctx.save();
  ctx.translate(cx, baseY);
  ctx.scale(scale, scale);

  const legSwing = Math.sin(player.runFrames * 0.35) * 6;

  if (!ducking) {
    // Legs
    ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-6 + legSwing, -20); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(6 - legSwing, -20); ctx.stroke();
    // Body / coat (barong-inspired, dark blue)
    ctx.fillStyle = '#1e3a5f';
    ctx.beginPath();
    ctx.roundRect(-10, -44, 20, 26, 3);
    ctx.fill();
    // White shirt detail
    ctx.fillStyle = '#f0e6c8';
    ctx.beginPath(); ctx.roundRect(-5, -42, 10, 18, 2); ctx.fill();
    // Arms
    ctx.strokeStyle = '#1e3a5f'; ctx.lineWidth = 5;
    const armSwing = Math.sin(player.runFrames * 0.35) * 8;
    ctx.beginPath(); ctx.moveTo(-10, -38); ctx.lineTo(-18, -24 + armSwing); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(10, -38);  ctx.lineTo(18, -24 - armSwing); ctx.stroke();
    // Head
    ctx.fillStyle = '#d4a574';
    ctx.beginPath(); ctx.arc(0, -50, 10, 0, Math.PI * 2); ctx.fill();
    // Hair
    ctx.fillStyle = '#1a0a00';
    ctx.beginPath(); ctx.arc(0, -57, 8, Math.PI, 0); ctx.fill();
    // Hat (Rizal's signature top hat / barong collar)
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-9, -62, 18, 5);
    ctx.fillRect(-6, -70, 12, 10);
    // Eyes
    ctx.fillStyle = '#fff';
    ctx.fillRect(-5, -52, 4, 3); ctx.fillRect(1, -52, 4, 3);
    ctx.fillStyle = '#1a0a00';
    ctx.fillRect(-4, -52, 2, 2); ctx.fillRect(2, -52, 2, 2);
    // Mouth (small smile)
    ctx.strokeStyle = '#8b5e3c'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(0, -47, 3, 0.1, Math.PI - 0.1); ctx.stroke();
  } else {
    // Ducking — Rizal crouching
    ctx.fillStyle = '#1e3a5f';
    ctx.beginPath(); ctx.roundRect(-14, -16, 28, 14, 3); ctx.fill();
    ctx.fillStyle = '#d4a574';
    ctx.beginPath(); ctx.arc(12, -16, 9, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#1a0a00';
    ctx.beginPath(); ctx.arc(12, -22, 7, Math.PI, 0); ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(4, -27, 16, 4); ctx.fillRect(7, -31, 10, 8);
    // Legs tucked
    ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(-10, -4); ctx.lineTo(-16, 0); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -4); ctx.lineTo(6, 0); ctx.stroke();
  }

  ctx.restore();
}

function drawObstacle(obs) {
  // Draw Rizal-themed enemies with canvas art instead of emoji
  ctx.save();
  ctx.translate(obs.x + obs.w / 2, obs.y + obs.h);

  if (obs.type === 'low') {
    // Guardia Civil / Friar — ground character
    const isGuardia = obs.subtype === 'guardia';
    // Legs
    ctx.strokeStyle = isGuardia ? '#374151' : '#6b3a1f'; ctx.lineWidth = 4; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(-5, 0); ctx.lineTo(-8, -18); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(5, 0);  ctx.lineTo(8, -18); ctx.stroke();
    // Body
    ctx.fillStyle = isGuardia ? '#1f2937' : '#92400e';
    ctx.beginPath(); ctx.roundRect(-12, -42, 24, 26, 3); ctx.fill();
    if (!isGuardia) {
      // Friar's rope belt
      ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-12, -26); ctx.lineTo(12, -26); ctx.stroke();
    }
    // Head
    ctx.fillStyle = '#d4a574';
    ctx.beginPath(); ctx.arc(0, -48, 10, 0, Math.PI * 2); ctx.fill();
    if (isGuardia) {
      // Military hat
      ctx.fillStyle = '#14532d';
      ctx.fillRect(-11, -60, 22, 6);
      ctx.fillRect(-7, -68, 14, 10);
      // Rifle
      ctx.strokeStyle = '#374151'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(14, -40); ctx.lineTo(20, -58); ctx.stroke();
    } else {
      // Friar hood / tonsure
      ctx.fillStyle = '#6b3a1f';
      ctx.beginPath(); ctx.arc(0, -48, 11, Math.PI, 0); ctx.fill();
      ctx.fillStyle = '#d4a574';
      ctx.beginPath(); ctx.arc(0, -48, 6, 0, Math.PI * 2); ctx.fill();
    }
    // Eyes
    ctx.fillStyle = '#1a0a00';
    ctx.fillRect(-4, -50, 2, 2); ctx.fillRect(2, -50, 2, 2);
    // Menacing brow
    ctx.strokeStyle = '#1a0a00'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(-5, -53); ctx.lineTo(-2, -51); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(5, -53); ctx.lineTo(2, -51); ctx.stroke();

  } else {
    // Flying obstacle — Scroll / Abuse decree
    const t = rFrames * 0.08;
    const bobY = Math.sin(t) * 4;
    ctx.translate(0, bobY);

    // Scroll body
    ctx.fillStyle = '#f0e6c8';
    ctx.beginPath(); ctx.roundRect(-14, -obs.h, 28, obs.h, 4); ctx.fill();
    ctx.strokeStyle = '#92400e'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(-14, -obs.h, 28, obs.h, 4); ctx.stroke();
    // Scroll end rolls
    ctx.fillStyle = '#d4b483';
    ctx.beginPath(); ctx.ellipse(0, -obs.h, 14, 5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(0, 0, 14, 5, 0, 0, Math.PI * 2); ctx.fill();
    // Text lines on scroll
    ctx.strokeStyle = '#92400e'; ctx.lineWidth = 1;
    [-20, -14, -8].forEach(ly => {
      ctx.beginPath(); ctx.moveTo(-8, ly); ctx.lineTo(8, ly); ctx.stroke();
    });
    // Red seal
    ctx.fillStyle = '#dc2626';
    ctx.beginPath(); ctx.arc(4, -6, 5, 0, Math.PI * 2); ctx.fill();
    // Chain / shackles
    ctx.strokeStyle = '#6b7280'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, -obs.h); ctx.lineTo(0, -obs.h - 12); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, -obs.h - 14, 3, 0, Math.PI * 2); ctx.stroke();
  }

  ctx.restore();
}

function updateParticles() {
  for (let i = groundParticles.length - 1; i >= 0; i--) {
    const p = groundParticles[i];
    p.x += p.vx; p.y += p.vy; p.life--;
    const alpha = p.life / 18;
    ctx.globalAlpha = alpha * 0.4;
    ctx.fillStyle = '#94a3b8';
    ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 1;
    if (p.life <= 0) groundParticles.splice(i, 1);
  }
}

// ─── Obstacle Spawning ───────────────────────────────────────
function spawnObstacle() {
  const template = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
  obstacles.push({
    x:       CANVAS_W + 10,
    y:       template.y,
    w:       template.w,
    h:       template.h,
    type:    template.type,
    subtype: template.label === 'Guardia Civil' ? 'guardia' : 'friar',
    label:   template.label,
  });
}

// ─── Knowledge Unlock System ─────────────────────────────────
function checkKnowledgeUnlock(score) {
  knowledgeCards.forEach((card, idx) => {
    if (score >= card.score && !unlockedCardIndices.includes(idx)) {
      unlockedCardIndices.push(idx);
      saveSessionUnlocks(unlockedCardIndices);  // persist to session
      pendingCard = card;
    }
  });
}

function showKnowledgeCard(card) {
  const overlay = document.getElementById('runner-overlay');
  overlay.classList.remove('hidden');

  // Category color
  const catColors = {
    'Works':      '#fbbf24',
    'Travels':    '#34d399',
    'Life':       '#60a5fa',
    'History':    '#f87171',
    'Legacy':     '#a78bfa',
    'Early Life': '#fb923c',
  };
  const catColor = catColors[card.category] || '#fbbf24';

  overlay.innerHTML = `
    <div style="
      max-width: 420px;
      background: rgba(15,23,42,0.97);
      border: 2px solid ${catColor};
      border-radius: 16px;
      padding: 28px 32px;
      text-align: center;
      box-shadow: 0 0 40px rgba(251,191,36,0.25);
      animation: fadeInScale 0.4s ease;
    ">
      <div style="font-size:2.5rem; margin-bottom:8px;">${card.icon}</div>
      <div style="
        display:inline-block;
        background:${catColor}22;
        color:${catColor};
        font-size:0.7rem;
        font-weight:700;
        letter-spacing:0.12em;
        text-transform:uppercase;
        padding:3px 12px;
        border-radius:999px;
        border:1px solid ${catColor}44;
        margin-bottom:10px;
      ">${card.category}</div>
      <div style="
        font-family:'Playfair Display',serif;
        font-size:1.2rem;
        font-weight:700;
        color:${catColor};
        margin-bottom:12px;
      ">🔓 ${card.title}</div>
      <p style="
        font-size:0.88rem;
        color:#cbd5e1;
        line-height:1.65;
        margin-bottom:20px;
      ">${card.text}</p>
      <div style="
        font-size:0.72rem;
        color:#64748b;
        margin-bottom:16px;
      ">Unlocked at ${card.score} points · ${unlockedCardIndices.length} / ${knowledgeCards.length} cards collected</div>
      <button onclick="resumeAfterCard()" style="
        background:${catColor};
        color:#0f172a;
        font-weight:700;
        font-size:0.9rem;
        padding:10px 28px;
        border:none;
        border-radius:8px;
        cursor:pointer;
        transition:opacity 0.2s;
      ">Continue Running →</button>
    </div>
  `;

  // Inject keyframe animation once
  if (!document.getElementById('runner-anim-style')) {
    const style = document.createElement('style');
    style.id = 'runner-anim-style';
    style.textContent = `
      @keyframes fadeInScale {
        from { opacity:0; transform:scale(0.85); }
        to   { opacity:1; transform:scale(1); }
      }
    `;
    document.head.appendChild(style);
  }
}

function resumeAfterCard() {
  showingCard = false;
  const overlay = document.getElementById('runner-overlay');

  // Restore normal overlay HTML for game-over / ready state
  overlay.innerHTML = `
    <h3 id="runner-msg-title" class="text-white text-3xl font-bold mb-2" style="display:none"></h3>
    <p id="runner-final-score-display" class="text-gold text-xl font-bold mb-1 hidden"></p>
    <button onclick="startRunner()" style="display:none" id="runner-start-btn"
      class="mt-4 bg-gold text-dark font-bold py-2 px-6 rounded hover:bg-goldhover transition">Start Game</button>
  `;
  overlay.classList.add('hidden');

  isRunnerPlaying = true;
  runnerLoop();
}

// ─── Game Over ───────────────────────────────────────────────
function gameOverRunner() {
  stopRunner();
  if (rScore > highScores.runner) highScores.runner = rScore;

  // Restore overlay markup
  const overlay = document.getElementById('runner-overlay');
  overlay.innerHTML = `
    <h3 id="runner-msg-title" class="text-white text-3xl font-bold mb-2">Game Over!</h3>
    <p id="runner-final-score-display" class="text-xl font-bold mb-1" style="color:#fbbf24">
      Score: ${rScore} &nbsp;|&nbsp; Cards: ${unlockedCardIndices.length}/${knowledgeCards.length} 🔓
    </p>
    <p style="color:#94a3b8;font-size:0.8rem;margin-bottom:4px;">
      ${unlockedCardIndices.length < knowledgeCards.length
        ? `Next card at ${knowledgeCards.find((c,i)=>!unlockedCardIndices.includes(i))?.score ?? '?'} pts`
        : '🎉 All knowledge cards unlocked!'}
    </p>
    <button onclick="startRunner()" class="mt-4 bg-gold text-dark font-bold py-2 px-6 rounded hover:bg-goldhover transition"
      style="background:#fbbf24;color:#0f172a;padding:8px 24px;border:none;border-radius:6px;font-weight:700;cursor:pointer;margin-top:12px;">
      Play Again
    </button>
  `;
  overlay.classList.remove('hidden');
}

// ─── Keyboard Controls ───────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (!isRunnerPlaying) return;
  if ((e.code === 'Space' || e.code === 'ArrowUp') && player.grounded) {
    player.dy = player.jumpPower;
    player.grounded = false;
    e.preventDefault();
  }
  if (e.code === 'ArrowDown') {
    player.isDucking = true;
    e.preventDefault();
  }
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'ArrowDown') player.isDucking = false;
});

// ─── Touch Controls ──────────────────────────────────────────
canvas.addEventListener('touchstart', (e) => {
  if (!isRunnerPlaying) return;
  e.preventDefault();
  const rect   = canvas.getBoundingClientRect();
  const touchY = e.touches[0].clientY - rect.top;
  if (touchY < rect.height / 2) {
    if (player.grounded) { player.dy = player.jumpPower; player.grounded = false; }
  } else {
    player.isDucking = true;
  }
}, { passive: false });

canvas.addEventListener('touchend', (e) => {
  if (!isRunnerPlaying) return;
  e.preventDefault();
  player.isDucking = false;
}, { passive: false });