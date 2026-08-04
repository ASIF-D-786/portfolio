# Asif Baba — Developer Portfolio

A premium, dark-themed, glassmorphic developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**. Designed to read well to recruiters at large tech companies and AI startups alike.

![tech](https://img.shields.io/badge/React-18-3B82F6) ![tech](https://img.shields.io/badge/Vite-5-8B5CF6) ![tech](https://img.shields.io/badge/TailwindCSS-3-22D3EE)

---

## ✨ Features

- Dark / light theme toggle (persisted)
- Glassmorphism UI with blue → purple → cyan gradient accents
- Framer Motion scroll, hover, and page-load animations
- Animated typing effect in the hero
- Neural-network-style canvas particle background
- Animated counters (About stats, Achievements)
- Live GitHub stats, contribution graph, and top languages
- Live LeetCode stats (with graceful fallback if the API is unreachable)
- EmailJS-powered contact form
- Scroll progress bar, custom cursor, back-to-top button
- Sticky navbar with scroll-spy + mobile hamburger menu
- Fully responsive, accessible (visible focus states, reduced-motion support)
- SEO meta tags (Open Graph, Twitter Card)
- GitHub Pages deployment ready (manual + GitHub Actions)

---

## 🚀 Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## 🏗️ Build

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 🎨 Customizing content

Almost everything on the page is driven by **`src/data/portfolioData.js`** — edit that one file to update:

- Name, tagline, roles, resume link, social links
- About paragraphs and stat cards
- Skill categories
- Projects (title, description, tech stack, GitHub/demo links)
- Experience timeline
- Education
- Certifications
- Achievements
- GitHub / LeetCode usernames (used for live stats)

### Profile photo

The hero currently shows your initials in a gradient tile. To use a real photo, replace the initials block in `src/components/Hero.jsx` with:

```jsx
<img src="/profile.jpg" alt="Asif Baba" className="w-full h-full object-cover rounded-[1.5rem]" />
```

and drop `profile.jpg` into the `public/` folder.

### Resume

Add your PDF resume to `public/resume.pdf` — the "Download Resume" button already links to `/resume.pdf`.

### Contact form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Create an **Email Service** and an **Email Template** with fields matching the form (`user_name`, `user_email`, `subject`, `message`).
3. In `src/components/Contact.jsx`, replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
   with your actual IDs (these are safe to expose client-side).

### GitHub / LeetCode stats

Update `githubUsername` and `leetcodeUsername` in `src/data/portfolioData.js`. GitHub stats use the public [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) API; LeetCode stats use [leetcode-stats-api](https://github.com/JeremyTsaii/leetcode-stats-api). Both are free, public APIs — no keys required.

---

## 📦 Deploying to GitHub Pages

### Option A — one command

1. In `vite.config.js`, set `base: '/<your-repo-name>/'`.
2. In `package.json`, set `homepage` to `https://<username>.github.io/<repo-name>/`.
3. Run:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes `dist/` to a `gh-pages` branch using the `gh-pages` package.
4. In your repo settings → Pages, set the source to the `gh-pages` branch.

### Option B — GitHub Actions (automatic on push)

This repo already includes `.github/workflows/deploy.yml`. Just:

1. Push to the `main` branch.
2. In your repo settings → Pages, set **Source** to **GitHub Actions**.
3. Every push to `main` will rebuild and redeploy automatically.

---

## 🗂️ Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf            # add your resume here
├── src/
│   ├── components/           # one component per section/feature
│   ├── data/
│   │   └── portfolioData.js  # ← edit this to customize content
│   ├── hooks/
│   │   └── useTheme.js
│   ├── utils/
│   │   └── animations.js     # shared Framer Motion variants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🧰 Tech stack

React · Vite · Tailwind CSS · Framer Motion · React Icons · React Router · EmailJS · react-type-animation

---

Built by Asif Baba.
