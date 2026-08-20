# Umesh Jadhav — Portfolio

This is my personal portfolio website, built from scratch using plain HTML, CSS, and JavaScript. It does not use any framework, package, or build tool, so the project is simple to run and deploy.

The design follows a dark terminal-inspired style with interactive elements such as a 3D profile card, boot animation, matrix background, typewriter effect, and smooth scroll animations.

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

Search `index.html` for:

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

```bash
cd portfolio
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy on Vercel

### Using Vercel CLI

Install the Vercel CLI:

```bash
npm i -g vercel
```

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

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/DevUmeshh/portfolio.git
git push -u origin main
```

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
