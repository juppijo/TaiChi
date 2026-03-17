/* ============================================================
   KUM NYE — script.js
   ============================================================ */

'use strict';

/* ────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────── */
const EXERCISES = {
  bewegung: {
    label: 'Sanfte Körperbewegungen',
    icon: '🌿',
    items: {
      armkreisen: {
        name: 'Arm-Kreisen',
        dur: 5,
        instruction: 'Hebe beide Arme langsam seitwärts an. Führe große, fließende Kreisbewegungen durch — einatmend aufwärts, ausatmend abwärts. Spüre die Dehnung in den Schultern.'
      },
      wirbelsaeule: {
        name: 'Wirbelsäulen-Welle',
        dur: 8,
        instruction: 'Stehe locker, Füße hüftbreit. Beginne eine weiche Wellenbewegung von der Lendenwirbelsäule durch den ganzen Rücken bis zur Halswirbelsäule. Wie eine Welle im ruhigen Wasser.'
      },
      hueften: {
        name: 'Hüften öffnen',
        dur: 6,
        instruction: 'Rotiere sanft die Hüften in langsamen Kreisen. Lass die Energie durch das Becken fließen. Nach 3 Minuten die Richtung wechseln.'
      },
      nacken: {
        name: 'Nacken-Lösung',
        dur: 4,
        instruction: 'Neige den Kopf sanft zur Seite und halte 5–6 Atemzüge. Dann zur anderen Seite. Achte auf das Lösen von Anspannung mit jedem Ausatmen.'
      }
    }
  },
  atem: {
    label: 'Atemübungen',
    icon: '🌬',
    items: {
      '4-7-8': {
        name: '4-7-8 Atemrhythmus',
        dur: 7,
        instruction: '4 Sekunden einatmen · 7 Sekunden halten · 8 Sekunden ausatmen. Dieser Rhythmus beruhigt das Nervensystem tief. Beginne mit 4 Zyklen, steigere allmählich.'
      },
      vajra: {
        name: 'Vajra-Atem',
        dur: 10,
        instruction: 'Atme durch die Nase ein und stelle dir vor, Licht ströme durch Krone und Wirbelsäule. Beim Ausatmen durch leicht geöffnete Lippen löst sich Spannung wie Rauch auf.'
      },
      '9reinigend': {
        name: '9-Reinigungs-Atem',
        dur: 6,
        instruction: 'Abwechselnd durch jedes Nasenloch atmen: linkes Nasenloch zuhalten, rechts einatmen. Dann tauschen. 9 Runden vollständig. Reinigt und balanciert die Energiekanäle.'
      },
      tiefes: {
        name: 'Tiefer Bauch-Atem',
        dur: 5,
        instruction: 'Eine Hand auf den Bauch legen. Beim Einatmen wölbt sich der Bauch sanft vor. Beim Ausatmen sinkt er. Alles andere bleibt ruhig. Lass das Zwerchfell frei arbeiten.'
      }
    }
  },
  massage: {
    label: 'Selbstmassage',
    icon: '🤲',
    items: {
      gesicht: {
        name: 'Gesichts-Erweckung',
        dur: 4,
        instruction: 'Reibe die Handflächen warm. Fahre mit Fingerkuppen sanft von Stirnmitte zu den Schläfen. Massiere Schläfen, Kiefer und Augenbr. mit kleinen Kreisen. Sehr langsam.'
      },
      kopfhaut: {
        name: 'Kopfhaut-Stimulation',
        dur: 5,
        instruction: 'Zehn Finger auf die Kopfhaut setzen. Mit festem aber sanftem Druck kleine Kreise beschreiben. Vom Nacken bis zur Stirn wandern. Weckt Lebendigkeit und Klarheit.'
      },
      haende: {
        name: 'Hand-Meridian-Massage',
        dur: 6,
        instruction: 'Massiere jeden Finger einzeln von der Basis zur Spitze. Drücke sanft den Punkt zwischen Daumen und Zeigefinger (Hegu-Punkt). Dann Handflächen kreisförmig massieren.'
      },
      fuesse: {
        name: 'Fuß-Reflexzonen',
        dur: 8,
        instruction: 'Setze dich und lege einen Fuß auf das andere Knie. Massiere die gesamte Fußsohle mit dem Daumen. Besondere Aufmerksamkeit dem Bogen widmen — Verbindung zur Lendenregion.'
      }
    }
  },
  stille: {
    label: 'Stille & innere Wahrnehmung',
    icon: '✦',
    items: {
      koerperscan: {
        name: 'Körper-Scan',
        dur: 10,
        instruction: 'Schließe die Augen. Wandere langsam mit deiner Aufmerksamkeit vom Scheitel bis zu den Zehenspitzen. Urteile nicht — beobachte nur. Jede Empfindung ist willkommen.'
      },
      energiefeld: {
        name: 'Energiefeld erspüren',
        dur: 12,
        instruction: 'Halte die Handflächen ca. 20 cm auseinander. Spüre das Feld zwischen ihnen. Ist es warm? Prickelnd? Bewege die Hände langsam näher und weiter — ohne zu berühren.'
      },
      herzraum: {
        name: 'Herzraum-Öffnung',
        dur: 8,
        instruction: 'Lege eine Hand auf das Herz. Atme tief in diesen Raum. Stelle dir vor, wie mit jedem Einatmen der Herzraum sich weitet — wie eine Blüte, die sich in Zeitlupe öffnet.'
      },
      schweigen: {
        name: 'Schweigendes Sitzen',
        dur: 15,
        instruction: 'Sitze aufrecht und still. Kein Ziel außer dem Sein. Wenn Gedanken kommen, begrüße sie und lass sie weiterziehen wie Wolken am Himmel. Verweile im stillen Gewahrsein.'
      }
    }
  }
};

const QUOTES = [
  'Wenn der Körper sich entspannt, öffnet sich der Geist wie der Morgenhimmel. — Tarthang Tulku',
  'Jeder Atemzug ist eine Brücke zwischen innen und außen, zwischen Stille und Leben.',
  'Die heilende Kraft liegt nicht außerhalb von uns — sie wartet im Inneren.',
  'Siddha sagten: Der Körper ist der Tempel, die Energie sein Gebet.',
  'Langsam zu werden bedeutet nicht zu verlieren — es bedeutet, tiefer anzukommen.',
  'Kum Nye lehrt uns, durch die Empfindung zu gehen, nicht um sie herum.',
];

/* ────────────────────────────────────────────────────────────
   STATE
   ──────────────────────────────────────────────────────────── */
const state = {
  theme: 'dark',
  color: 'earth',
  zenMode: false,
  isFullscreen: false,
  selectedDuration: 10,    // minutes
  queue: [],               // built exercise list
  queueIndex: 0,
  timer: {
    running: false,
    remaining: 0,
    total: 0,
    handle: null,
    breathHandle: null
  }
};

/* ────────────────────────────────────────────────────────────
   DOM REFS
   ──────────────────────────────────────────────────────────── */
const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const zenToggle   = document.getElementById('zenToggle');
const fsBtn       = document.getElementById('fullscreenBtn');
const fsIcon      = document.getElementById('fsIcon');
const startBtn    = document.getElementById('startBtn');
const backBtn     = document.getElementById('backBtn');
const restartBtn  = document.getElementById('restartBtn');
const playPauseBtn= document.getElementById('playPauseBtn');
const prevExBtn   = document.getElementById('prevExBtn');
const nextExBtn   = document.getElementById('nextExBtn');
const screens     = {
  select: document.getElementById('screenSelect'),
  timer:  document.getElementById('screenTimer'),
  done:   document.getElementById('screenDone')
};
const durBtns     = document.querySelectorAll('.dur-btn');
const swatches    = document.querySelectorAll('.swatch');
const timeDisplay = document.getElementById('timeDisplay');
const breathCue   = document.getElementById('breathCue');
const cProgress   = document.getElementById('cProgress');
const exCategory  = document.getElementById('exCategory');
const exName      = document.getElementById('exName');
const exInstruction= document.getElementById('exInstruction');
const exProgressBar= document.getElementById('exProgressBar');
const doneQuote   = document.getElementById('doneQuote');
const bgMusic     = document.getElementById('bgMusic');
const soundToggle = document.getElementById('soundToggle');
const soundIcon   = document.getElementById('soundIcon');

const CIRCUMFERENCE = 2 * Math.PI * 120; // r=120 → 753.98

/* ────────────────────────────────────────────────────────────
   THEME TOGGLE
   ──────────────────────────────────────────────────────────── */
themeToggle.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', state.theme);
  themeIcon.textContent = state.theme === 'dark' ? '☀' : '☾';
  themeToggle.classList.toggle('active', state.theme === 'light');
});

/* ────────────────────────────────────────────────────────────
   COLOR SWATCHES
   ──────────────────────────────────────────────────────────── */
swatches.forEach(sw => {
  sw.addEventListener('click', () => {
    state.color = sw.dataset.color;
    html.setAttribute('data-color', state.color);
    swatches.forEach(s => s.classList.remove('active'));
    sw.classList.add('active');
  });
});
// Mark default swatch
document.querySelector('.swatch[data-color="earth"]').classList.add('active');

/* ────────────────────────────────────────────────────────────
   ZEN MODE
   ──────────────────────────────────────────────────────────── */
zenToggle.addEventListener('click', () => {
  state.zenMode = !state.zenMode;
  document.body.classList.toggle('zen-mode', state.zenMode);
  zenToggle.classList.toggle('active', state.zenMode);
});

/* ────────────────────────────────────────────────────────────
   FULLSCREEN
   ──────────────────────────────────────────────────────────── */
fsBtn.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}
document.addEventListener('fullscreenchange', () => {
  state.isFullscreen = !!document.fullscreenElement;
  fsIcon.textContent = state.isFullscreen ? '⛶' : '⛶';
  fsBtn.classList.toggle('active', state.isFullscreen);
});

/* ────────────────────────────────────────────────────────────
   AUDIO / SOUND
   ──────────────────────────────────────────────────────────── */
state.soundOn = true;  // default: sound on

function updateSoundUI() {
  if (state.soundOn) {
    soundIcon.textContent = '♪';
    soundToggle.classList.remove('muted');
    soundToggle.title = 'Ton aus';
  } else {
    soundIcon.textContent = '♪̶';
    soundIcon.textContent = '🔇';
    soundToggle.classList.add('muted');
    soundToggle.title = 'Ton an';
  }
}

function playMusic() {
  if (!state.soundOn) return;
  bgMusic.volume = 0;
  bgMusic.play().catch(() => {});
  // Fade in over 2s
  let vol = 0;
  const fade = setInterval(() => {
    vol = Math.min(vol + 0.04, 0.72);
    bgMusic.volume = vol;
    if (vol >= 0.72) clearInterval(fade);
  }, 80);
}

function stopMusic() {
  // Fade out over 1.5s then pause
  let vol = bgMusic.volume;
  const fade = setInterval(() => {
    vol = Math.max(vol - 0.06, 0);
    bgMusic.volume = vol;
    if (vol <= 0) {
      clearInterval(fade);
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
  }, 80);
}

soundToggle.addEventListener('click', () => {
  state.soundOn = !state.soundOn;
  updateSoundUI();
  if (state.soundOn) {
    // Only play if session is running
    if (screens.timer.classList.contains('active')) playMusic();
  } else {
    bgMusic.pause();
  }
});

// Init sound UI
updateSoundUI();

/* ────────────────────────────────────────────────────────────
   DURATION SELECTOR
   ──────────────────────────────────────────────────────────── */
durBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    state.selectedDuration = parseInt(btn.dataset.min, 10);
    durBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ────────────────────────────────────────────────────────────
   BUILD EXERCISE QUEUE
   ──────────────────────────────────────────────────────────── */
function buildQueue() {
  const totalSec = state.selectedDuration * 60;
  const pool = [];

  // Collect checked exercises
  Object.entries(EXERCISES).forEach(([catKey, cat]) => {
    Object.entries(cat.items).forEach(([exKey, ex]) => {
      const cb = document.querySelector(
        `#ex-${catKey} input[value="${exKey}"]`
      );
      if (cb && cb.checked) {
        pool.push({ catKey, catLabel: cat.label, exKey, ...ex });
      }
    });
  });

  if (pool.length === 0) return null;

  // Distribute time evenly
  const secEach = Math.floor(totalSec / pool.length);
  return pool.map(item => ({ ...item, seconds: Math.max(30, secEach) }));
}

/* ────────────────────────────────────────────────────────────
   SCREEN NAVIGATION
   ──────────────────────────────────────────────────────────── */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

/* ────────────────────────────────────────────────────────────
   TIMER ENGINE
   ──────────────────────────────────────────────────────────── */
function loadExercise(idx) {
  if (idx >= state.queue.length) {
    finishSession();
    return;
  }
  state.queueIndex = idx;
  const ex = state.queue[idx];
  exCategory.textContent  = ex.catLabel;
  exName.textContent      = ex.name;
  exInstruction.textContent = ex.instruction;

  state.timer.remaining = ex.seconds;
  state.timer.total     = ex.seconds;

  updateTimerDisplay(ex.seconds);
  updateProgress();
  updateDots();

  state.timer.running = false;
  playPauseBtn.textContent = '▶';
}

function startTimer() {
  if (state.timer.handle) clearInterval(state.timer.handle);
  state.timer.running = true;
  playPauseBtn.textContent = '⏸';

  state.timer.handle = setInterval(() => {
    state.timer.remaining--;
    updateTimerDisplay(state.timer.remaining);
    updateProgress();

    if (state.timer.remaining <= 0) {
      clearInterval(state.timer.handle);
      // Auto-advance after brief pause
      setTimeout(() => loadExercise(state.queueIndex + 1), 1000);
    }
  }, 1000);
}

function pauseTimer() {
  state.timer.running = false;
  playPauseBtn.textContent = '▶';
  clearInterval(state.timer.handle);
  // Soften music volume while paused
  bgMusic.volume = Math.min(bgMusic.volume, 0.25);
}

function resumeAndPlay() {
  startTimer();
  if (state.soundOn && !bgMusic.paused) {
    // Restore volume
    let vol = bgMusic.volume;
    const fade = setInterval(() => {
      vol = Math.min(vol + 0.04, 0.72);
      bgMusic.volume = vol;
      if (vol >= 0.72) clearInterval(fade);
    }, 80);
  } else if (state.soundOn) {
    playMusic();
  }
}

function updateTimerDisplay(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  timeDisplay.textContent = `${m}:${s}`;

  // Circumference offset
  const fraction = sec / state.timer.total;
  cProgress.style.strokeDashoffset = CIRCUMFERENCE * (1 - fraction);
}

function updateProgress() {
  // nothing extra needed here — updateTimerDisplay covers circle
}

function updateDots() {
  exProgressBar.innerHTML = '';
  state.queue.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('epb-dot');
    if (i < state.queueIndex) dot.classList.add('done');
    if (i === state.queueIndex) dot.classList.add('active');
    exProgressBar.appendChild(dot);
  });
}

/* Breath cue cycle: inhale 4s / hold 2s / exhale 4s */
const BREATH_CYCLE = [
  { text: 'Einatmen…',   dur: 4000 },
  { text: 'Halten…',     dur: 2000 },
  { text: 'Ausatmen…',   dur: 4000 },
  { text: 'Innehalten…', dur: 2000 },
];
let breathIdx = 0;
let breathTimeout = null;

function startBreathCycle() {
  clearTimeout(breathTimeout);
  function tick() {
    const cue = BREATH_CYCLE[breathIdx % BREATH_CYCLE.length];
    breathCue.textContent = cue.text;
    breathIdx++;
    breathTimeout = setTimeout(tick, cue.dur);
  }
  tick();
}

/* ────────────────────────────────────────────────────────────
   SESSION START / FINISH
   ──────────────────────────────────────────────────────────── */
startBtn.addEventListener('click', () => {
  const queue = buildQueue();
  if (!queue) {
    alert('Bitte wähle mindestens eine Übung aus.');
    return;
  }
  state.queue = queue;
  state.queueIndex = 0;

  showScreen('timer');
  loadExercise(0);
  startBreathCycle();
  playMusic();
});

function finishSession() {
  clearInterval(state.timer.handle);
  clearTimeout(breathTimeout);
  state.timer.running = false;
  stopMusic();
  doneQuote.textContent = '„' + QUOTES[Math.floor(Math.random() * QUOTES.length)] + '"';
  showScreen('done');
}

backBtn.addEventListener('click', () => {
  clearInterval(state.timer.handle);
  clearTimeout(breathTimeout);
  state.timer.running = false;
  stopMusic();
  showScreen('select');
});

restartBtn.addEventListener('click', () => {
  showScreen('select');
});

/* ────────────────────────────────────────────────────────────
   PLAY / PAUSE / NAV
   ──────────────────────────────────────────────────────────── */
playPauseBtn.addEventListener('click', () => {
  if (state.timer.running) {
    pauseTimer();
  } else {
    resumeAndPlay();
  }
});

prevExBtn.addEventListener('click', () => {
  clearInterval(state.timer.handle);
  if (state.queueIndex > 0) loadExercise(state.queueIndex - 1);
  if (state.timer.running) startTimer();
});

nextExBtn.addEventListener('click', () => {
  clearInterval(state.timer.handle);
  loadExercise(state.queueIndex + 1);
});

/* ────────────────────────────────────────────────────────────
   KEYBOARD SHORTCUTS
   ──────────────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  switch (e.key) {
    case ' ':
      if (screens.timer.classList.contains('active')) {
        e.preventDefault();
        state.timer.running ? pauseTimer() : startTimer();
      }
      break;
    case 'ArrowRight':
      if (screens.timer.classList.contains('active')) {
        clearInterval(state.timer.handle);
        loadExercise(state.queueIndex + 1);
      }
      break;
    case 'ArrowLeft':
      if (screens.timer.classList.contains('active') && state.queueIndex > 0) {
        clearInterval(state.timer.handle);
        loadExercise(state.queueIndex - 1);
      }
      break;
    case 'z':
    case 'Z':
      zenToggle.click();
      break;
    case 'f':
    case 'F':
      toggleFullscreen();
      break;
    case 'd':
    case 'D':
      themeToggle.click();
      break;
    case 'm':
    case 'M':
      soundToggle.click();
      break;
  }
});

/* ────────────────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────────────────── */
(function init() {
  // Init progress circle empty
  cProgress.style.strokeDasharray  = CIRCUMFERENCE;
  cProgress.style.strokeDashoffset = CIRCUMFERENCE;
})();
