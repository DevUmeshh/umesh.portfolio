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
