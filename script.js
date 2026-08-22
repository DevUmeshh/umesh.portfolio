// ---- THEME TOGGLE ----
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function getStoredTheme() {
  try { return localStorage.getItem('theme'); } catch (e) { return null; }
}
function storeTheme(value) {
  try { localStorage.setItem('theme', value); } catch (e) { /* ignore */ }
}

const stored = getStoredTheme();
if (stored === 'light' || stored === 'dark') {
  root.setAttribute('data-theme', stored);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  root.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  storeTheme(next);
});

// ---- MOBILE NAV ----
const navtoggle = document.getElementById('navtoggle');
const navlinks = document.getElementById('navlinks');
if (navtoggle) {
  navtoggle.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');
    navtoggle.classList.toggle('open', open);
    navtoggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navlinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navlinks.classList.remove('open');
      navtoggle.classList.remove('open');
      navtoggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// ---- TIMELINE DRAW ----
const timelineEl = document.querySelector('.timeline');
if (timelineEl && 'IntersectionObserver' in window) {
  const tio = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        tio.unobserve(en.target);
      }
    });
  }, { threshold: 0.2 });
  tio.observe(timelineEl);
} else if (timelineEl) {
  timelineEl.classList.add('in');
}

// ---- HERO LETTER SPLIT ----
function splitHeroName() {
  const el = document.querySelector('[data-split]');
  if (!el) return;
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let n;
  while ((n = walker.nextNode())) textNodes.push(n);
  let i = 0;
  textNodes.forEach(node => {
    const frag = document.createDocumentFragment();
    node.textContent.split('').forEach(ch => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.style.setProperty('--i', i++);
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      frag.appendChild(span);
    });
    node.parentNode.replaceChild(frag, node);
  });
}
splitHeroName();

// Trigger hero entrance after first paint
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.body.classList.add('ready');
  });
});

// ---- NAV SCROLL STATE + PROGRESS BAR ----
const siteNav = document.getElementById('siteNav');
const scrollProgress = document.getElementById('scrollProgress');
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const docEl = document.documentElement;
    const scrolled = docEl.scrollTop || document.body.scrollTop;
    const height = docEl.scrollHeight - docEl.clientHeight;
    const pct = height > 0 ? (scrolled / height) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = pct + '%';
    if (siteNav) siteNav.classList.toggle('scrolled', scrolled > 8);
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---- ACTIVE NAV LINK ----
const navAnchors = Array.from(document.querySelectorAll('[data-nav]'));
const sections = navAnchors
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);
if ('IntersectionObserver' in window && sections.length) {
  const navIo = new IntersectionObserver(entries => {
    entries.forEach(en => {
      const id = '#' + en.target.id;
      const link = navAnchors.find(a => a.getAttribute('href') === id);
      if (!link) return;
      if (en.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => navIo.observe(s));
}

// ---- CURSOR GLOW (desktop only) ----
const cursorGlow = document.getElementById('cursorGlow');
const finePointer = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (cursorGlow && finePointer && !reducedMotion) {
  window.addEventListener('pointermove', e => {
    cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorGlow.classList.add('active');
  }, { passive: true });
  window.addEventListener('pointerleave', () => cursorGlow.classList.remove('active'));
}

// ---- SPOTLIGHT (cards that track pointer position) ----
function bindSpot(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    });
  });
}
bindSpot('.stack-row.spot, .achieve-item.spot, .project.spot');

// ---- TILT (achievement cards) ----
function bindTilt(selector, intensity) {
  if (!finePointer || reducedMotion) return;
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (px - 0.5) * intensity;
      const ry = (0.5 - py) * intensity;
      el.style.setProperty('--rx', rx.toFixed(2) + 'deg');
      el.style.setProperty('--ry', ry.toFixed(2) + 'deg');
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });
}
bindTilt('.achieve-item', 8);

// ---- MAGNETIC BUTTONS ----
function bindMagnetic(selector, strength) {
  if (!finePointer || reducedMotion) return;
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      btn.style.transform = `translate(${(x * strength).toFixed(1)}px, ${(y * strength).toFixed(1)}px)`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  });
}
bindMagnetic('.magnetic', 12);
