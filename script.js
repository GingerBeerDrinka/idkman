const affirmations = [
  {
    id: 1,
    type: 'flower',
    color: 'pink',
    teaser: '🌸',
    deco: '🌸',
    message:
      "Hannah, you are the absolute best homegirl. The world is genuinely just better, brighter, and a whole lot warmer with you in it. Don't you ever forget that. 💕"
  },
  {
    id: 2,
    type: 'bubble',
    color: 'lavender',
    teaser: '✨',
    deco: '✨',
    message:
      "I am so incredibly proud of how much you've grown and everything you've handled lately. You've been carrying a lot — and you're still standing, still glowing. That's not luck. That's YOU. 🌟"
  },
  {
    id: 3,
    type: 'card',
    color: 'peach',
    teaser: 'Rest',
    emoji: '🌙',
    deco: '🌙',
    message:
      "You're allowed to rest and just breathe today. You don't have to earn your peace. Lay down the weight for a minute. You've already done more than enough. You've got this, bestie. 💆‍♀️"
  },
  {
    id: 4,
    type: 'flower',
    color: 'peach',
    teaser: '🌼',
    deco: '🌼',
    message:
      "Never forget to Buy Yourself the Damn Flowers, Hannah. Not when someone else brings them. Not when you've 'earned' it. But right now. On a random Tuesday. Because you deserve them every single day. 🌷"
  },
  {
    id: 5,
    type: 'bubble',
    color: 'cream',
    teaser: '💛',
    deco: '💛',
    message:
      "You bring so much light to the people around you. Your presence literally shifts the energy of a room. Thank you for just being exactly who you are. That's more than enough. 🫂"
  },
  {
    id: 6,
    type: 'card',
    color: 'pink',
    teaser: 'Strength',
    emoji: '💪',
    deco: '💪',
    message:
      "Your kindness is not a weakness — it is your absolute greatest superpower. The world tries to convince soft hearts to toughen up. Don't believe it for a second. Your softness is radical and rare. 🌸"
  },
  {
    id: 7,
    type: 'card',
    color: 'lavender',
    teaser: 'Boundaries',
    emoji: '🛡️',
    deco: '🛡️',
    message:
      "You are allowed to take up space. You are allowed to want things. You are fully, completely, 100% allowed to say NO. Setting a boundary is an act of love — love for yourself. You deserve that love most of all."
  },
  {
    id: 8,
    type: 'flower',
    color: 'coral',
    teaser: '🌺',
    deco: '🌺',
    message:
      "Someone out there is having a genuinely better day just because you exist and showed up. Think about that for a second. That's not an accident — that's just you being you, Hannah. What an absolute gift. 💖"
  },
  {
    id: 9,
    type: 'bubble',
    color: 'lavender',
    teaser: '🌙',
    deco: '🌙',
    message:
      "You are NOT 'too much.' You are exactly enough. Anyone who ever made you feel like you were too much was simply not enough FOR YOU. Their limits are not your ceiling. Don't shrink for anyone. 👑"
  },
  {
    id: 10,
    type: 'card',
    color: 'peach',
    teaser: 'Trust It',
    emoji: '🧭',
    deco: '🧭',
    message:
      "Hannah, your gut is literally your GPS. If something feels off, it probably is. You already have the answer before you even finish asking the question. Trust yourself — you are so much wiser than you give yourself credit for. BTW HANS IS SUCH A HANDSOME, NICE AND HUMBLE HB 🙏"
  },
  {
    id: 11,
    type: 'bubble',
    color: 'pink',
    teaser: '💁',
    deco: '💁',
    message:
      "You've survived every single hard day that came before today. Every. Single. One. That is a 100% track record, bestie — a literal undefeated streak. You've absolutely got this one too. 🏆"
  },
  {
    id: 12,
    type: 'card',
    color: 'cream',
    emoji: '🌱',
    deco: '🌱',
    message:
      "Growth is not linear. Some days you bloom beautifully, and some days you just survive — and I want you to know that BOTH count. You are always growing, even when it feels invisible. Keep going. 🌷"
  },
  {
    id: 13,
    type: 'card',
    color: 'lavender',
    emoji: '😜',
    deco: '😜',
    message:
      "You are a safe space for so many people. But remember — you also deserve a safe space. You deserve friendships that feel like coming home and love that never makes you anxious. Don't you dare settle for less. 💗"
  },
  {
    id: 14,
    type: 'bubble',
    color: 'cream',
    teaser: '🌈',
    deco: '🌈',
    message:
      "You are the main character of your own story, Hannah. Not a supporting role. Not the background. THE main character. Walk accordingly, dress accordingly, and glow accordingly. 👑✨"
  },
  {
    id: 15,
    type: 'flower',
    color: 'lavender',
    teaser: '🌷',
    deco: '🌷',
    message:
      "The version of you that you're working toward? She's already inside you. She's been there the whole time. Keep going, bestie — she is so, so close. You've got this. 💕"
  },

  /* ───────────────────────────────────────────────────────────
     THE FUNNY ONES: Your incredibly humble, handsome bestie
     ─────────────────────────────────────────────────────────── */
  {
    id: 16,
    type: 'flower',
    color: 'gold',
    teaser: '😌',
    deco: '😌',
    message:
      "A brief message from your most handsome, most humble, most incredibly charming bestie (hi, it's me): while you're out here being a whole queen, please know that your face card is absolutely thriving. Almost as much as mine. ALMOST. My face card? It never. ever. declines. I literally don't make the rules. 😌💅"
  },
  {
    id: 17,
    type: 'bubble',
    color: 'gold',
    teaser: '🏆',
    deco: '🏆',
    message:
      "Science FACT: You are incredibly blessed to have the most ridiculously handsome, objectively coolest, and deeply — DEEPLY — humble homeboy as your best friend. Researchers are baffled. They have never seen a face card this impeccable. Experts say it simply cannot be explained. You're welcome for my friendship, Hannah. 😂🫡"
  },
  {
    id: 18,
    type: 'card',
    color: 'gold',
    emoji: '💳',
    deco: '💳',
    message:
      "BREAKING NEWS: Local man declares himself the most fine, most charming, most gracious individual in recorded history. His humility? Unmatched. His face card? Has never. ever. DECLINED. His best friend Hannah is reportedly SO blessed. Hannah's reaction: 🙄😂. His reaction: 😌✨ You're welcome, bestie. Always."
  },
  {
    id: 19,
    type: 'bubble',
    color: 'gold',
    teaser: '😂',
    deco: '😂',
    message:
      "One final PSA from your incredibly fine, impossibly humble, aggressively handsome bestie: He just wanted to remind you that his face card has NEVER. DECLINED. Not once. Not ever. Not even close. Scientists are studying it. He also says you're one of the greatest humans alive. But mostly the face card thing. Mostly. 😌🫡"
  },

  /* ── HEARTFELT FINALE ── */
  {
    id: 20,
    type: 'flower',
    color: 'pink',
    teaser: '💖',
    deco: '💖',
    message:
      "Last one — real talk, no jokes: Hannah, you are one of the most genuine, caring, and absolutely wonderful people I have ever had the privilege of knowing. I am so proud to be your best friend. Now go buy yourself those flowers. You've earned every single petal. 💐🌸"
  }
];

/* ============================================================
   ELEMENT CREATORS
   ============================================================ */

/**
 * Creates a CSS flower with 6 petal divs + emoji center.
 * @param {object} item - Affirmation data object
 * @returns {HTMLElement}
 */
function createFlower(item) {
  const wrapper = document.createElement('div');
  wrapper.className = `garden-item flower flower-${item.color}`;
  wrapper.dataset.id  = item.id;
  wrapper.dataset.testid = `garden-item-${item.id}`;
  wrapper.setAttribute('role', 'button');
  wrapper.setAttribute('tabindex', '0');
  wrapper.setAttribute('aria-label', 'Reveal your affirmation');

  const petalsContainer = document.createElement('div');
  petalsContainer.className = 'flower-petals';

  for (let i = 0; i < 6; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.transform = `rotate(${i * 60}deg)`;
    petalsContainer.appendChild(petal);
  }

  const center = document.createElement('div');
  center.className = 'flower-center';
  center.textContent = item.teaser;

  wrapper.appendChild(petalsContainer);
  wrapper.appendChild(center);
  return wrapper;
}

/**
 * Creates a circular glassmorphism bubble.
 * @param {object} item
 * @returns {HTMLElement}
 */
function createBubble(item) {
  const wrapper = document.createElement('div');
  wrapper.className = `garden-item bubble bubble-${item.color}`;
  wrapper.dataset.id = item.id;
  wrapper.dataset.testid = `garden-item-${item.id}`;
  wrapper.setAttribute('role', 'button');
  wrapper.setAttribute('tabindex', '0');
  wrapper.setAttribute('aria-label', 'Reveal your affirmation');

  const emoji = document.createElement('div');
  emoji.className = 'bubble-emoji';
  emoji.textContent = item.teaser;

  wrapper.appendChild(emoji);
  return wrapper;
}

/**
 * Creates a rounded teaser card.
 * @param {object} item
 * @returns {HTMLElement}
 */
function createCard(item) {
  const wrapper = document.createElement('div');
  wrapper.className = `garden-item card card-${item.color}`;
  wrapper.dataset.id = item.id;
  wrapper.dataset.testid = `garden-item-${item.id}`;
  wrapper.setAttribute('role', 'button');
  wrapper.setAttribute('tabindex', '0');
  wrapper.setAttribute('aria-label', 'Reveal your affirmation');

  const emojiEl = document.createElement('div');
  emojiEl.className = 'card-emoji';
  emojiEl.textContent = item.emoji;

  const label = document.createElement('div');
  label.className = 'card-teaser';
  label.textContent = item.teaser;

  wrapper.appendChild(emojiEl);
  wrapper.appendChild(label);
  return wrapper;
}

/* ============================================================
   GARDEN BUILDER
   ============================================================ */

/**
 * Shuffles the affirmations array, generates DOM elements,
 * and appends them to #garden with staggered entrance animations.
 */
function buildGarden() {
  const garden = document.getElementById('garden');

  // Shuffle for variety on every load
  const shuffled = [...affirmations].sort(() => Math.random() - 0.5);

  shuffled.forEach((item, index) => {
    let el;
    if      (item.type === 'flower') el = createFlower(item);
    else if (item.type === 'bubble') el = createBubble(item);
    else                              el = createCard(item);

    // Stagger float animation phase so items don't bob in sync
    const floatDelay = ((index * 0.22) % 4.4).toFixed(2);
    el.style.animationDelay = `${floatDelay}s`;

    garden.appendChild(el);

    // Staggered entrance: add .visible after a short timeout per item
    setTimeout(() => el.classList.add('visible'), index * 70 + 80);
  });
}

/* ============================================================
   MODAL LOGIC
   ============================================================ */

const overlay    = document.getElementById('modal-overlay');
const msgEl      = document.getElementById('modal-message');
const decoEl     = document.getElementById('modal-deco');
const closeXBtn  = document.getElementById('modal-close-x');
const closeBtn   = document.getElementById('modal-close-btn');

/**
 * Opens the modal and populates it with the given affirmation.
 * @param {object} item
 */
function openModal(item) {
  decoEl.textContent = item.deco;
  msgEl.textContent  = item.message;

  // Re-trigger bounce animation on the deco emoji each time
  decoEl.style.animation = 'none';
  // Force reflow so the browser registers the reset
  void decoEl.offsetHeight;
  decoEl.style.animation = '';

  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Focus the close button for keyboard accessibility
  setTimeout(() => closeBtn.focus(), 50);
}

/** Closes the modal and restores scroll. */
function closeModal() {
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */

// Click delegation on the garden
document.getElementById('garden').addEventListener('click', (e) => {
  const item = e.target.closest('.garden-item');
  if (!item) return;
  const id   = parseInt(item.dataset.id, 10);
  const data = affirmations.find(a => a.id === id);
  if (data) openModal(data);
});

// Keyboard support (Enter / Space) on garden items
document.getElementById('garden').addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const item = e.target.closest('.garden-item');
  if (!item) return;
  e.preventDefault();
  const id   = parseInt(item.dataset.id, 10);
  const data = affirmations.find(a => a.id === id);
  if (data) openModal(data);
});

closeXBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

// Close on backdrop click
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ============================================================
   INIT
   (script is deferred, so DOM is guaranteed ready)
   ============================================================ */
buildGarden();