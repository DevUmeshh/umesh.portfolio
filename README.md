# Umesh Jadhav — Portfolio

<<<<<<< HEAD
A static, dependency-free portfolio (plain HTML/CSS/JS, no build step) with a light/dark theme toggle and an editorial, content-first design — no terminal chrome, no stock icon sets, no filler animation.
=======
This is my personal portfolio website, built from scratch using plain HTML, CSS, and JavaScript. It does not use any framework, package, or build tool, so the project is simple to run and deploy.
>>>>>>> c731f9518514bf499bec6471ffba58580b6976f8

The design follows a dark terminal-inspired style with interactive elements such as a 3D profile card, boot animation, matrix background, typewriter effect, and smooth scroll animations.

## Project Structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
<<<<<<< HEAD
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
=======
├── assets/
│   ├── umesh-cutout.png
│   ├── Umesh_Jadhav_Resume.pdf
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   └── achievements/
│       ├── ach-1.jpg
│       ├── ach-2.jpg
│       └── ach-3.jpg
└── README.md
```

## Main Files

* `index.html` — All the content and sections of the portfolio, including About, Skills, Experience, Projects, Achievements, and Contact.
* `style.css` — Handles the complete design, layout, animations, and responsive styling.
* `script.js` — Handles the interactive parts of the website, including the boot screen, cursor, 3D tilt, typewriter effect, matrix background, and scroll animations.

## Before Deploying

Most of the portfolio is already set up, but a few sections still need to be updated with my actual project and coding-profile details.

### Projects

The three project cards are currently marked as placeholders.

Search `index.html` for:

```text
PROJECT / 01
PROJECT / 02
PROJECT / 03
```

Replace them with my actual projects, including:

* Project name
* Short description
* Technologies used
* GitHub repository
* Live project link

After adding the real projects, remove the `placeholder` ribbon and the `is-placeholder` class.

Also make sure all `href="#"` links are replaced with the correct URLs.

### Coding Profile

The coding profile section still contains an `add-link` placeholder.
>>>>>>> c731f9518514bf499bec6471ffba58580b6976f8

Search `index.html` for:

<<<<<<< HEAD
=======
```text
add-link
Coding Profile
```

Add the correct LeetCode, Codeforces, or GeeksforGeeks profile link and remove the placeholder.

## Achievements

The portfolio has a continuously moving achievements section with photographs from events and academic achievements.

Currently included:

* Induction Programme
* JIT Stage Felicitation
* TE Topper Award — CGPA 9.86

The marquee is designed to work smoothly across different screen sizes. It also slows down on smaller screens and respects reduced-motion settings for users who prefer fewer animations.

To add another achievement, place the image inside:

```text
assets/achievements/
```

Then duplicate an existing `.ach-card` in `index.html` and update the image, year, title, and description.

The duplicated cards are intentional because they keep the marquee moving continuously without a visible break.

## Resume

My resume is available at:

```text
assets/Umesh_Jadhav_Resume.pdf
```

It is linked from both the navigation bar and the hero section.

Whenever I update my resume, I can simply replace the existing PDF while keeping the same filename. Otherwise, the `href` references in `index.html` need to be updated.

## Profile Photo

The profile photo is stored at:

```text
assets/umesh-cutout.png
```

It is used as a transparent cutout inside the 3D glass-style profile card.

For the best result, the photo should have a clean background and a portrait composition where the subject extends close to the bottom of the image.

If I replace the photo, I can keep the same filename or update the image path in `index.html`.

## Social Links

The portfolio currently includes my main contact and social profiles:

* Email: `umeshrajput24196@gmail.com`
* GitHub: `https://github.com/DevUmeshh`
* LinkedIn: `https://www.linkedin.com/in/umeshjadhav09`
* Instagram: `https://www.instagram.com/umeshh.jadhav`

## Interactions and Animations

The website includes several small interactions to make the portfolio feel more dynamic without adding unnecessary dependencies:

* Boot animation when the site starts
* Custom cursor on supported desktop devices
* 3D tilt effect on the profile card
* Typewriter animation
* Scroll-based section reveals
* Matrix-style background
* Continuously scrolling achievements
* Automatic pause of the background animation when the browser tab is inactive

The boot animation only runs once during a browser session. `sessionStorage` is used for this, with a fallback so the website still works if browser storage is unavailable.

The custom cursor only appears on devices that support a mouse or similar pointer. On touch devices, the normal system cursor is used.

## Responsive Design

The portfolio has been designed and tested for different screen sizes, including:

* 1440px
* 1024px
* 768px
* 390px
* 360px

The layout includes:

* Responsive typography
* Mobile navigation
* Responsive project cards
* Flexible spacing
* Mobile-friendly achievement cards
* No unnecessary horizontal scrolling

The navigation changes to a hamburger menu on screens below 820px.

## Run Locally

There is no installation or build process required.

The simplest way is to open `index.html` directly in a browser.

For a local server, run:

>>>>>>> c731f9518514bf499bec6471ffba58580b6976f8
```bash
cd portfolio
python3 -m http.server 8000
```

<<<<<<< HEAD
Or just double-click `index.html` — it's plain HTML/CSS/JS, no server required.

## Deploy

**Vercel (recommended)**
```bash
npm i -g vercel
cd portfolio
vercel --prod
=======
Then open:

```text
http://localhost:8000
```

## Deploy on Vercel

### Using Vercel CLI

Install the Vercel CLI:

```bash
npm i -g vercel
>>>>>>> c731f9518514bf499bec6471ffba58580b6976f8
```
Or skip the CLI entirely: unzip this folder and drag it into [vercel.com/new](https://vercel.com/new) or [app.netlify.com/drop](https://app.netlify.com/drop) — either gives you a live URL in seconds, no config needed since it's static.

<<<<<<< HEAD
**Push to GitHub first (optional, recommended for long-term use)**
=======
Then:

```bash
cd portfolio
vercel
```

Follow the prompts to complete the first deployment.

For the production deployment:

```bash
vercel --prod
```

### Using GitHub and Vercel

Create and push the repository:

>>>>>>> c731f9518514bf499bec6471ffba58580b6976f8
```bash
git init
git add .
git commit -m "portfolio"
git branch -M main
git remote add origin https://github.com/DevUmeshh/umesh-portfolio.git
git push -u origin main
```
<<<<<<< HEAD
Then import that repo at [vercel.com/new](https://vercel.com/new) — every future push auto-deploys.
=======

After that, import the repository into Vercel.

Since this is a static website, no framework or build command is required.

```text
Framework Preset: Other
Build Command: None
```

Once deployed, Vercel provides a `vercel.app` URL. A custom domain can also be connected later through the project settings.

## Before Sharing

Before I share the portfolio publicly, I should make sure that:

* [ ] All three placeholder projects have been replaced.
* [ ] Every project has the correct GitHub repository link.
* [ ] Live demo links are added wherever available.
* [ ] My coding profile link is added.
* [ ] The resume is the latest version.
* [ ] All social links are working.
* [ ] Navigation works correctly.
* [ ] The portfolio looks good on both desktop and mobile.
* [ ] All achievement images load properly.
* [ ] The resume and project links open correctly.

Once these remaining placeholders are updated, the portfolio is ready to deploy and share.

>>>>>>> c731f9518514bf499bec6471ffba58580b6976f8
