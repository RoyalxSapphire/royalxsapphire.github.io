# Keona Hicks — Portfolio

The source for my design portfolio. Built with React and Vite, deployed on Vercel.

**Live site:** [keona-portfoliovercelapp.vercel.app](https://keona-portfoliovercelapp.vercel.app) *(placeholder domain for now)*

---

## What this is

A portfolio with dedicated case study routes for each project. Each case study has its own color identity pulled from the project itself, so the site reads as a body of work rather than a uniform grid of screenshots.

## Projects

- **Oregon Road '83** — Pixel art and intro design for a narrative survival game. Aseprite, Phaser 3.
- **FlashClash (Quizlet redesign)** — A flashcard and quiz study platform. Next.js, React, MongoDB.
- **Craigslist Redesign** — A research-driven UX case study. Cut posting task time roughly in half in a study with 8 participants.
- **Houseplant Care App** — In progress.

## Stack

- **React** + **Vite** — app shell and build
- **React Router** — routing between the home page and case studies
- **Tailwind CSS** — utility styling where it helps, with most design tokens in per-page CSS
- **Lucide** — icons
- **Vercel** — deployment

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── assets/              # Project images and media, grouped by project
│   ├── or83/
│   ├── flashclash/
│   └── ...
├── pages/
│   ├── Home.jsx
│   ├── OregonRoad83CaseStudy.jsx
│   ├── QuizletCaseStudy.jsx
│   ├── CraigslistCaseStudy.jsx
│   └── HouseplantCareCaseStudy.jsx
├── App.jsx              # Routes
├── main.jsx
└── index.css
```

Each case study page is self-contained: it carries its own styles, layout, and color system inline so the aesthetic is scoped to that project.

## Notes

Case study screenshots are currently HTML re-creations and exported images. Some are placeholders pending final mockup exports.

The prototype links for a few case studies are wired up but may point at Figma frames that aren't public yet.

## Contact

Email: keona.hicks@outlook.com

LinkedIn: keona-hicks

GitHub: @RoyalxSapphire
