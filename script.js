// ---- BOOT SEQUENCE (fast, plays once per browser) ----
let skipBoot = false;
try {
  skipBoot = sessionStorage.getItem('booted') === '1';
} catch (e) { /* storage unavailable — always show boot */ }

const bootEl = document.getElementById('bootText');
const bootWrap = document.getElementById('boot');

if (skipBoot) {
  bootWrap.remove();
} else {
  const bootLines = [
    "umesh@portfolio:~$ init",
    "loading [aws] [react] [c++] [python] ... OK",
    "welcome."
  ];
  let bi = 0, ci = 0, out = "";
  function typeBoot() {
    if (bi < bootLines.length) {
      const line = bootLines[bi];
      if (ci < line.length) {
        out += line[ci];
        ci++;
        bootEl.innerHTML = out + '<span class="blink">▌</span>';
        setTimeout(typeBoot, 8);
      } else {
        out += "\n";
        bi++;
        ci = 0;
        setTimeout(typeBoot, 70);
      }
    } else {
      setTimeout(() => {
        bootWrap.classList.add('hide');
        setTimeout(() => bootWrap.remove(), 400);
        try { sessionStorage.setItem('booted', '1'); } catch (e) {}
      }, 150);
    }
  }
  typeBoot();
}

// ---- CUSTOM CURSOR (JS-controlled, degrades gracefully if JS fails) ----
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
const supportsHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (supportsHover && dot && ring) {
  document.body.classList.add('has-custom-cursor');
  window.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, .proj-card, button, .add-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '54px';
      ring.style.height = '54px';
      ring.style.borderColor = '#3dffa0';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '34px';
      ring.style.height = '34px';
      ring.style.borderColor = '#1c9e63';
    });
  });
}

// ---- MOBILE NAV TOGGLE ----
const navtoggle = document.getElementById('navtoggle');
const navlinks = document.getElementById('navlinks');
if (navtoggle) {
  navtoggle.addEventListener('click', () => {
    navlinks.classList.toggle('open');
    navtoggle.classList.toggle('open');
  });
  navlinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navlinks.classList.remove('open');
      navtoggle.classList.remove('open');
    })
  );
}

// ---- TYPED HERO TEXT ----
const typedEl = document.getElementById('typed');
const words = ["Umesh Jadhav", "a Software Engineer", "an AWS & DevOps builder"];
let wIdx = 0, chIdx = 0, deleting = false;
function typeLoop() {
  const w = words[wIdx];
  if (!deleting) {
    chIdx++;
    typedEl.textContent = w.slice(0, chIdx);
    if (chIdx === w.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    chIdx--;
    typedEl.textContent = w.slice(0, chIdx);
    if (chIdx === 0) {
      deleting = false;
      wIdx = (wIdx + 1) % words.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 90);
}
setTimeout(typeLoop, skipBoot ? 400 : 900);

// ---- 3D TILT CARD (mouse only — skipped on touch) ----
const card = document.getElementById('card3d');
const stage = document.querySelector('.stage');
if (stage && supportsHover) {
  stage.addEventListener('mousemove', e => {
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
  });
  stage.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0) rotateX(0)';
  });
}

// ---- ACHIEVEMENTS MARQUEE: tap-to-pause on touch devices ----
const marqueeOuter = document.querySelector('.marquee-outer');
if (marqueeOuter && !supportsHover) {
  marqueeOuter.addEventListener('click', () => {
    marqueeOuter.classList.toggle('paused');
  });
}

// ---- SKILL BARS + SCROLL REVEAL ----
const fills = document.querySelectorAll('.fill');
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      if (en.target.classList.contains('skills')) {
        fills.forEach(f => (f.style.width = f.dataset.pct + '%'));
      }
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.2 });
revealEls.forEach(el => io.observe(el));

// ---- BG MATRIX-STYLE CANVAS (pauses when tab is hidden) ----
const canvas = document.getElementById('bgcanvas');
const ctx = canvas.getContext('2d');
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);
const glyphs = "01{}<>/;=+-*";
let cols = Math.floor(window.innerWidth / 26);
let drops = new Array(cols).fill(0);
window.addEventListener('resize', () => {
  cols = Math.floor(window.innerWidth / 26);
  drops = new Array(cols).fill(0);
});

let rafId = null;
let canvasRunning = false;
function draw() {
  if (!canvasRunning) return;
  ctx.fillStyle = 'rgba(4,5,4,0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#1c9e63';
  ctx.font = '13px JetBrains Mono, monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = glyphs[Math.floor(Math.random() * glyphs.length)];
    ctx.fillText(text, i * 26, drops[i] * 18);
    if (drops[i] * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
  rafId = requestAnimationFrame(draw);
}
function startCanvas() {
  if (canvasRunning) return;
  canvasRunning = true;
  draw();
}
function stopCanvas() {
  canvasRunning = false;
  if (rafId) cancelAnimationFrame(rafId);
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopCanvas();
  else startCanvas();
});
startCanvas();
