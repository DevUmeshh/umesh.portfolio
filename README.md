# Umesh Jadhav — Portfolio

A static, dependency-free portfolio website built using plain HTML, CSS, and JavaScript. No build tools or frameworks are required.

The portfolio uses a black terminal-inspired design with a 3D photo card, animated boot sequence, matrix-style background, typewriter effects, and scroll-based animations.

## Project Structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
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

### Main Files

* `index.html` — Contains the complete portfolio content, including About, Skills, Experience, Projects, and Contact.
* `style.css` — Contains all styling and responsive layouts for desktop, tablet, mobile, and small-screen devices.
* `script.js` — Handles the boot animation, cursor, 3D tilt effect, typewriter effect, matrix background, and scroll animations.

## Before Deploying

A few sections still need to be updated with personal project and coding-profile information.

### 1. Projects

The three project cards in the Projects section are currently placeholders.

Search `index.html` for:

```text
PROJECT / 01
PROJECT / 02
PROJECT / 03
```

Replace the placeholder title, description, technologies, GitHub repository, and live demo links with your actual projects.

After adding the real project information:

* Remove the `placeholder` ribbon.
* Remove the `is-placeholder` class.
* Replace every `href="#"` with the correct GitHub or live project URL.

### 2. Coding Profile

The coding profile section currently contains an `add link` placeholder.

Search `index.html` for:

```text
add-link
Coding Profile
```

Add your actual LeetCode, Codeforces, or GeeksforGeeks profile URL and remove the placeholder tag.

## What's Included

### Achievements Marquee

The portfolio includes a continuously scrolling achievements section featuring event and award photographs.

Currently included:

* Induction Programme
* JIT Stage Felicitation
* TE Topper Award — CGPA 9.86

The marquee:

* Scrolls continuously.
* Pauses when interacted with.
* Works across desktop and mobile.
* Adjusts its speed on smaller screens.
* Respects `prefers-reduced-motion` for accessibility.

To add another achievement, place the image inside:

```text
assets/achievements/
```

Then copy an existing `.ach-card` block in `index.html` and update the image, year, title, and description. The duplicated cards are required to keep the scrolling loop continuous.

## Resume

The portfolio includes:

```text
assets/Umesh_Jadhav_Resume.pdf
```

The resume is linked from both the navigation bar and hero section.

If you want to replace it with an updated resume, keep the same filename or update the corresponding `href` values in `index.html`.

## Profile Photo

The profile image is stored at:

```text
assets/umesh-cutout.png
```

It is used as a transparent cutout inside the glass-style 3D card.

For the best result, use a portrait image with the subject reaching close to the bottom edge.

If you replace the image, keep the same filename or update the `src` in `index.html`.

## Social Links

The portfolio is already connected to the following profiles:

* Email: `umeshrajput24196@gmail.com`
* GitHub: `https://github.com/DevUmeshh`
* LinkedIn: `https://www.linkedin.com/in/umeshjadhav09`
* Instagram: `https://www.instagram.com/umeshh.jadhav`

## Animations and Interactions

The site includes several lightweight JavaScript interactions:

* One-time boot animation
* Custom cursor on compatible desktop devices
* 3D profile-card tilt
* Typewriter effect
* Scroll-triggered section reveals
* Matrix-style animated background
* Continuous achievements marquee
* Background animation pause when the browser tab is inactive

The boot animation is limited to once per browser session using `sessionStorage`. If storage is unavailable, the site continues to work normally.

The custom cursor only activates on devices that support a real mouse pointer. Touch devices continue using the normal system cursor.

## Responsive Design

The layout has been designed for different screen sizes, including:

* 1440px
* 1024px
* 768px
* 390px
* 360px

The site includes:

* Responsive typography
* Mobile navigation
* Responsive project cards
* Fluid spacing
* Mobile-friendly achievement cards
* No intentional horizontal overflow

The navigation switches to a hamburger menu below 820px.

## Run Locally

No installation or build process is required.

Open `index.html` directly in a browser, or use a local server:

```bash
cd portfolio
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy on Vercel

### Option 1 — Vercel CLI

Install the Vercel CLI:

```bash
npm i -g vercel
```

Then:

```bash
cd portfolio
vercel
```

Follow the prompts for the first deployment.

For production:

```bash
vercel --prod
```

### Option 2 — GitHub + Vercel

Initialize the repository:

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/DevUmeshh/portfolio.git
git push -u origin main
```

Then import the repository into Vercel.

Use:

```text
Framework Preset: Other
Build Command: None
```

Since this is a static website, no build process is required.

After deployment, Vercel will provide a live `vercel.app` URL. A custom domain can also be connected later from the project settings.

## Final Checklist

Before sharing the portfolio publicly, make sure to:

* [ ] Replace all three placeholder projects.
* [ ] Add GitHub and live demo links for each project.
* [ ] Add the correct coding profile link.
* [ ] Check that the resume is up to date.
* [ ] Verify all social links.
* [ ] Check the portfolio on both desktop and mobile.
* [ ] Test every navigation link.
* [ ] Test every project and resume link.
* [ ] Confirm that all achievement images load correctly.

Once these placeholders are replaced, the portfolio is ready to deploy and share.
