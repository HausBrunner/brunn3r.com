let cards = [];
let filtered = [];
let idx = 0;
let flipped = false;
let showDefFirst = false;
let shuffleOn = false;

// Elements
const frontEl = document.getElementById('front');
const backEl = document.getElementById('back');
const cardEl = document.getElementById('flashcard');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const progressEl = document.getElementById('progress');
const searchEl = document.getElementById('search');
const quicklistEl = document.getElementById('quicklist');
const reverseEl = document.getElementById('reverse');
const shuffleEl = document.getElementById('shuffle');
const studyBtn = document.getElementById('studyBtn');
const testBtn = document.getElementById('testBtn');
const studyMode = document.getElementById('studyMode');
const testMode = document.getElementById('testMode');
const quizPrompt = document.getElementById('quizPrompt');
const quizChoices = document.getElementById('quizChoices');
const quizSkip = document.getElementById('quizSkip');
const quizCheck = document.getElementById('quizCheck');
const quizStatus = document.getElementById('quizStatus');

async function load() {
  const res = await fetch('cards.json');
  cards = await res.json();
  filtered = [...cards];
  buildQuicklist();
  render();
}
load();

function updateProgress() {
  progressEl.textContent = `${filtered.length ? idx + 1 : 0} / ${filtered.length}`;
}

function render() {
  if (!filtered.length) {
    frontEl.textContent = 'No cards match your search.';
    backEl.textContent = '';
    updateProgress();
    return;
  }
  const c = filtered[idx];
  const front = showDefFirst ? c.definition : c.acronym;
  const back = showDefFirst ? c.acronym : c.definition;
  frontEl.textContent = front;
  backEl.textContent = back;
  cardEl.classList.toggle('flipped', flipped);
  updateProgress();
}

function next() {
  if (!filtered.length) return;
  idx = (idx + 1) % filtered.length;
  flipped = false;
  render();
}

function prev() {
  if (!filtered.length) return;
  idx = (idx - 1 + filtered.length) % filtered.length;
  flipped = false;
  render();
}

function applySearch() {
  const q = searchEl.value.toLowerCase().trim();
  filtered = cards.filter(c =>
    c.acronym.toLowerCase().includes(q) ||
    c.definition.toLowerCase().includes(q)
  );
  if (shuffleOn) shuffle(filtered);
  idx = 0;
  flipped = false;
  buildQuicklist();
  render();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function buildQuicklist() {
  quicklistEl.innerHTML = '';
  filtered.slice(0, 60).forEach((c, i) => {
    const btn = document.createElement('button');
    btn.textContent = c.acronym;
    btn.title = c.definition;
    btn.addEventListener('click', () => {
      idx = i;
      flipped = false;
      render();
      cardEl.scrollIntoView({behavior:'smooth', block:'center'});
    });
    quicklistEl.appendChild(btn);
  });
}

// Test mode helpers
let quizIndex = 0;
let quizOrder = [];
let answered = false;
let picked = null;

function startQuiz() {
  // build order from filtered set (fallback to all cards if search emptied it)
  const base = filtered.length ? filtered : cards;
  quizOrder = base.map((_, i) => i);
  shuffle(quizOrder);
  quizIndex = 0;
  quizStatus.textContent = '';
  nextQuizQ();
}

function nextQuizQ() {
  const base = filtered.length ? filtered : cards;
  if (!base.length) {
    quizPrompt.textContent = 'No cards to test. Add some by clearing your search.';
    quizChoices.innerHTML = '';
    return;
  }
  if (quizIndex >= quizOrder.length) {
    quizPrompt.textContent = 'All done! Restarting the quiz with a new shuffle.';
    startQuiz();
    return;
  }
  const i = quizOrder[quizIndex++];
  const correct = base[i];
  const askForDef = Math.random() < 0.5;
  quizPrompt.textContent = askForDef
      ? `What does "${correct.acronym}" stand for?`
      : `Which acronym matches: "${correct.definition}"?`;

  // Build choices: 1 correct + 3 random wrong
  let pool = base.slice();
  shuffle(pool);
  const choices = [correct];
  for (const c of pool) {
    if (choices.length >= 4) break;
    if (c.acronym !== correct.acronym) choices.push(c);
  }
  shuffle(choices);

  quizChoices.innerHTML = '';
  choices.forEach((c) => {
    const btn = document.createElement('button');
    btn.textContent = askForDef ? c.definition : c.acronym;
    btn.addEventListener('click', () => {
      if (answered) return;
      picked = c;
      [...quizChoices.children].forEach(b => b.classList.remove('correct','wrong'));
      btn.classList.add('correct'); // temporary highlight
    });
    quizChoices.appendChild(btn);
  });

  answered = false;
  picked = null;
}

function checkQuiz() {
  if (answered) return;
  const base = filtered.length ? filtered : cards;
  const i = quizOrder[quizIndex - 1];
  const correct = base[i];

  const askForDef = quizPrompt.textContent.includes('stand for?');
  const nodes = [...quizChoices.children];
  nodes.forEach(n => {
    const isCorrect = askForDef
      ? n.textContent === correct.definition
      : n.textContent === correct.acronym;
    n.classList.toggle('correct', isCorrect);
    if (!isCorrect && n.classList.contains('correct')) {
      // if previously highlighted incorrectly, mark wrong
      if (askForDef ? n.textContent !== correct.definition : n.textContent !== correct.acronym) {
        n.classList.remove('correct');
        n.classList.add('wrong');
      }
    }
  });

  if (!picked) {
    quizStatus.textContent = 'Skipped. The correct answer is highlighted.';
  } else {
    const ok = askForDef ? picked.definition === correct.definition : picked.acronym === correct.acronym;
    quizStatus.textContent = ok ? 'Nice! ✅' : 'Not quite. ✅ shows the right answer.';
  }
  answered = true;
}

cardEl.addEventListener('click', () => {
  flipped = !flipped;
  cardEl.classList.toggle('flipped', flipped);
});
cardEl.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { cardEl.click(); }
});
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
searchEl.addEventListener('input', applySearch);
reverseEl.addEventListener('change', () => {
  showDefFirst = reverseEl.checked;
  flipped = false;
  render();
});
shuffleEl.addEventListener('change', () => {
  shuffleOn = shuffleEl.checked;
  if (shuffleOn) shuffle(filtered);
  idx = 0;
  flipped = false;
  render();
});
studyBtn.addEventListener('click', () => {
  studyBtn.classList.add('active');
  testBtn.classList.remove('active');
  studyMode.classList.remove('hidden');
  testMode.classList.add('hidden');
});
testBtn.addEventListener('click', () => {
  testBtn.classList.add('active');
  studyBtn.classList.remove('active');
  studyMode.classList.add('hidden');
  testMode.classList.remove('hidden');
  startQuiz();
});
quizSkip.addEventListener('click', () => nextQuizQ());
quizCheck.addEventListener('click', () => checkQuiz());

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
  if (e.key.toLowerCase() === 'f') cardEl.click();
  if (e.key.toLowerCase() === 's') studyBtn.click();
  if (e.key.toLowerCase() === 't') testBtn.click();
});
