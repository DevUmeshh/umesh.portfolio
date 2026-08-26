
## File structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── umesh-cutout.png           → hero photo, background removed
    ├── Umesh_Jadhav_Resume.pdf    → real one-page resume, ready to send
    ├── favicon.png / apple-touch-icon.png
    └── achievements/
        ├── ach-1.jpg  (JIT stage felicitation)
        ├── ach-2.jpg  (Induction Programme 2024–25)
        └── ach-3.jpg  (TE Topper, CGPA 9.86)
```

## What's in this version

- **Light + dark theme**, toggled from the nav (sun/moon icon, top right). Defaults to the visitor's system preference, remembers their choice after that via `localStorage` (safely no-ops if storage is blocked, so it never breaks).
- **Real projects only** — JalRakshya (hackathon project, live at jal-rakshya.vercel.app) and RCAgen (built at Arrow Technologies and Solutions), both with real descriptions and tech stacks. No filler cards.
- **Achievements** — your 3 event photos in a simple static grid with a gentle hover lift. No auto-scrolling, no duplicated images.
- **One consistent animation language** — sections fade up gently as you scroll to them, achievement photos lift slightly on hover, that's it. Nothing else moves on its own.
- Typography pairs **Bricolage Grotesque** (headlines) with **Inter** (body/UI) — deliberately not the cream-background/serif/terracotta or black-background/neon-green looks that most AI-generated portfolios default to.

## Before you deploy

1. **Photo** — `assets/umesh-cutout.png` already has the background removed. Swap it for an updated one any time; keep the same filename or update the `src` in `index.html`.
2. **Resume** — `assets/Umesh_Jadhav_Resume.pdf` is real and ready to send. Replace it whenever you update your resume, same filename.
3. **Projects** — when you have more projects, copy one `<article class="project">` block in `index.html` and fill in the title, dates, description, tech list, and (if it's live) a link button.
4. **Achievements** — to add a 4th photo, copy one `<figure class="achieve-item">` block and drop the new image into `assets/achievements/`.

## Run it locally

```bash
cd portfolio
python3 -m http.server 8000
# visit http://localhost:8000
```

Or just double-click `index.html` — it's plain HTML/CSS/JS, no server required.

## Deploy

**Vercel (recommended)**
```bash
npm i -g vercel
cd portfolio
vercel --prod
```
Or skip the CLI entirely: unzip this folder and drag it into [vercel.com/new](https://vercel.com/new) or [app.netlify.com/drop](https://app.netlify.com/drop) — either gives you a live URL in seconds, no config needed since it's static.

**Push to GitHub first (optional, recommended for long-term use)**
```bash
git init
git add .
git commit -m "portfolio"
git branch -M main
git remote add origin https://github.com/DevUmeshh/umesh-portfolio.git
git push -u origin main
```
Then import that repo at [vercel.com/new](https://vercel.com/new) — every future push auto-deploys.
