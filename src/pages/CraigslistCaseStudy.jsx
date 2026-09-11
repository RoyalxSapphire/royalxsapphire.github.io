import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/*
  Craigslist Redesign - Case Study Page
  Built for Keona Hicks' portfolio.

  Aesthetic: editorial frame (cohesive with the rest of the portfolio),
  color identity pulled from the redesign artifact itself (cobalt blue),
  with a sparing dusty-rose accent for personality.

  Signature moment: the hero opens as a "sea of blue" wall of Craigslist
  links that clears away to reveal the clean redesign, enacting
  cognitive load reduction rather than just describing it.

  NOTE: the redesigned screens below are HTML re-creations so the page reads
  as "live." Swap any of them for clean PNG exports of the real mockups when
  they're ready.
*/

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

:root {
  --paper: #F4F1E8;
  --paper-2: #EFEBDF;
  --ink: #1B2336;
  --ink-soft: #46506b;
  --cobalt: #2643B6;
  --cobalt-deep: #20253b;
  --cream-panel: #E8E1CF;
  --blush: #C0617A;
  --link-blue: #1f44c4;
  --rule: rgba(27,35,54,0.14);
}

* { box-sizing: border-box; }

.cs-root {
  background: var(--paper);
  color: var(--ink);
  font-family: 'Hanken Grotesk', system-ui, sans-serif;
  font-size: 17px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
.cs-root ::selection { background: var(--cobalt); color: #fff; }

.cs-wrap { max-width: 1080px; margin: 0 auto; padding: 0 28px; }

/* ---- nav ---- */
.cs-nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(244,241,232,0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--rule);
}
.cs-nav-inner { display: flex; align-items: center; justify-content: space-between; height: 60px; }
.cs-nav-name { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; letter-spacing: -0.01em; }
.cs-nav-name span { color: var(--blush); }
.cs-nav-link { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-soft); text-decoration: none; }
.cs-nav-link:hover { color: var(--cobalt); }

/* ---- shared section ---- */
.cs-section { padding: 92px 0; border-top: 1px solid var(--rule); }
.cs-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--cobalt); margin: 0 0 22px 0; display: flex; align-items: center; gap: 12px;
}
.cs-eyebrow::before { content: ""; width: 26px; height: 2px; background: var(--blush); display: inline-block; }
.cs-h2 {
  font-family: 'Fraunces', serif; font-weight: 500;
  font-size: clamp(28px, 4.2vw, 46px); line-height: 1.08; letter-spacing: -0.02em;
  margin: 0 0 24px 0; max-width: 18ch;
}
.cs-lead { font-size: clamp(18px, 2.2vw, 21px); color: var(--ink-soft); max-width: 60ch; margin: 0; }
.cs-body { max-width: 64ch; }
.cs-body p { margin: 0 0 18px 0; }

/* center modifiers */
.cs-eyebrow.center { justify-content: center; }
.cs-h2.center { text-align: center; margin-left: auto; margin-right: auto; }
.cs-body.center { text-align: center; margin-left: auto; margin-right: auto; max-width: 62ch; }
.cs-stat-row.center { justify-content: center; }
.cs-stat-row.center .cs-stat { text-align: center; }

/* ---- hero ---- */
.cs-hero { padding: 70px 0 64px; position: relative; text-align: center; }
.cs-hero-eyebrow { font-family: 'Space Mono', monospace; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--cobalt); margin-bottom: 26px; }
.cs-hero-h1 {
  font-family: 'Fraunces', serif; font-weight: 500;
  font-size: clamp(40px, 8.2vw, 92px); line-height: 0.98; letter-spacing: -0.035em;
  margin: 0 auto 28px; max-width: 16ch;
}
.cs-hero-h1 em { font-style: italic; color: var(--cobalt); }
.cs-hero-sub { font-size: clamp(17px, 2.1vw, 20px); color: var(--ink-soft); max-width: 56ch; margin: 0 auto 40px; }

.cs-chips { display: flex; flex-wrap: wrap; gap: 24px 48px; align-items: flex-start; justify-content: center; }
.cs-chip-label { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 8px; min-height: 14px; }
.cs-chip-val { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600; line-height: 1; }
.cs-chip-stat .cs-chip-val { color: var(--cobalt); }

/* prototype CTA */
.cs-cta-wrap { margin: 2px 0 40px; }
.cs-cta {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'Space Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;
  background: var(--cobalt); color: #fff; border-radius: 999px; padding: 14px 26px; text-decoration: none;
  transition: background .2s, transform .2s, box-shadow .2s;
  box-shadow: 0 12px 28px -14px rgba(38,67,182,0.7);
}
.cs-cta:hover { background: var(--cobalt-deep); transform: translateY(-2px); box-shadow: 0 16px 34px -14px rgba(38,67,182,0.85); }
.cs-cta:focus-visible { outline: 3px solid var(--blush); outline-offset: 3px; }
.cs-cta .arr { font-family: 'Fraunces', serif; font-size: 17px; line-height: 0; }

/* ---- before/after demo ---- */
.cs-demo { margin: 52px 0 0; }
.cs-demo-frame {
  position: relative; border-radius: 18px; overflow: hidden;
  border: 1px solid var(--rule); box-shadow: 0 30px 70px -40px rgba(24,38,106,0.5);
  aspect-ratio: 16 / 10; background: var(--cobalt-deep);
}
@media (max-width: 640px){ .cs-demo-frame { aspect-ratio: 4 / 5; } }

.cs-layer { position: absolute; inset: 0; }

/* sea of blue */
.cs-sea {
  background: #fdfdfd; padding: 16px 18px; overflow: hidden;
  transition: opacity 1.1s cubic-bezier(.5,0,.2,1), filter 1.1s cubic-bezier(.5,0,.2,1), transform 1.1s cubic-bezier(.5,0,.2,1);
  z-index: 3;
}
.cs-sea.cleared { opacity: 0; filter: blur(14px); transform: scale(1.04); pointer-events: none; }
.cs-sea-head { font-family: 'Fraunces', serif; color: var(--link-blue); font-size: 15px; font-weight: 600; margin-bottom: 8px; }
.cs-sea-links { columns: 5; column-gap: 18px; }
@media (max-width: 640px){ .cs-sea-links { columns: 3; } }
.cs-sea a { display: block; color: var(--link-blue); font-size: 11px; line-height: 1.7; text-decoration: underline; text-decoration-color: rgba(31,68,196,0.4); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* clean redesign (the "after") */
.cs-after { z-index: 1; display: flex; align-items: center; justify-content: center; padding: 5%;
  background: radial-gradient(120% 120% at 50% 0%, #2c4ccb 0%, var(--cobalt) 55%, var(--cobalt-deep) 100%); }
.cs-cl {
  width: 100%; max-width: 560px; background: var(--cream-panel); border-radius: 16px; padding: 30px 30px 34px;
  box-shadow: 0 18px 40px -22px rgba(0,0,0,0.55);
}
.cs-cl-top { display: flex; justify-content: flex-end; gap: 8px; margin-bottom: 8px; }
.cs-cl-pin, .cs-cl-login { background: #cfe0f2; border-radius: 999px; height: 26px; display: flex; align-items: center; justify-content: center; color: var(--cobalt-deep); }
.cs-cl-pin { width: 26px; }
.cs-cl-login { padding: 0 14px; background: #fff; font-family: 'Fraunces', serif; font-size: 13px; }
.cs-cl-word { font-family: 'Fraunces', serif; font-weight: 600; font-size: clamp(26px, 5vw, 40px); color: var(--cobalt-deep); letter-spacing: -0.01em; margin: 2px 0 14px; }
.cs-cl-search {
  background: #fff; border-radius: 999px; height: 46px; display: flex; align-items: center; padding: 0 20px;
  color: #97a3c0; font-family: 'Fraunces', serif; font-style: italic; font-size: 15px; justify-content: space-between;
}
.cs-cl-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 16px; }
@media (max-width: 480px){ .cs-cl-cards { grid-template-columns: repeat(2, 1fr); } }
.cs-cl-card {
  background: #f3eee0; border-radius: 12px; padding: 14px 8px; text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
}
.cs-cl-card svg { color: var(--cobalt-deep); }
.cs-cl-card span { font-family: 'Fraunces', serif; font-weight: 600; font-size: 13px; color: var(--cobalt-deep); }
.cs-cl-post { display: flex; justify-content: flex-end; margin-top: 14px; }
.cs-cl-post span { background: #cfe0f2; color: var(--cobalt-deep); font-family: 'Fraunces', serif; font-size: 13px; border-radius: 999px; padding: 6px 14px; display: inline-flex; gap: 6px; align-items: center; }

/* demo controls */
.cs-demo-bar { display: flex; align-items: center; justify-content: space-between; margin-top: 16px; flex-wrap: wrap; gap: 12px; }
.cs-demo-state { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.06em; color: var(--ink-soft); }
.cs-demo-state b { color: var(--ink); }
.cs-toggle {
  font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
  background: var(--ink); color: var(--paper); border: none; border-radius: 999px; padding: 11px 20px; cursor: pointer;
  transition: background .2s, transform .2s;
}
.cs-toggle:hover { background: var(--cobalt); transform: translateY(-1px); }
.cs-toggle:focus-visible { outline: 3px solid var(--blush); outline-offset: 2px; }

/* ---- overview meta ---- */
.cs-meta { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border-top: 1px solid var(--rule); }
@media (max-width: 640px){ .cs-meta { grid-template-columns: 1fr; } }
.cs-meta-row { padding: 20px 4px; border-bottom: 1px solid var(--rule); }
.cs-meta-row:nth-child(odd) { padding-right: 28px; }
.cs-meta-k { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cobalt); margin-bottom: 7px; }
.cs-meta-v { font-size: 16px; }
.cs-role-note {
  margin-top: 34px; padding: 24px 26px; background: var(--paper-2);
  border-left: 3px solid var(--blush); border-radius: 0 10px 10px 0; max-width: 70ch;
}
.cs-role-note b { font-family: 'Fraunces', serif; }

/* ---- before / annotations ---- */
.cs-before-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 40px; align-items: center; margin-top: 14px; }
@media (max-width: 820px){ .cs-before-grid { grid-template-columns: 1fr; } }
.cs-callouts { list-style: none; padding: 0; margin: 0; }
.cs-callouts li { padding: 16px 0; border-bottom: 1px solid var(--rule); display: flex; gap: 14px; }
.cs-callouts li:first-child { padding-top: 0; }
.cs-callouts .num { font-family: 'Space Mono', monospace; color: var(--blush); font-size: 13px; padding-top: 2px; }
.cs-callouts b { font-family: 'Fraunces', serif; font-weight: 600; display: block; margin-bottom: 2px; }
.cs-callouts p { margin: 0; font-size: 15px; color: var(--ink-soft); }

/* ---- research quotes ---- */
.cs-quotes { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin: 10px 0 40px; }
@media (max-width: 720px){ .cs-quotes { grid-template-columns: 1fr; } }
.cs-quote {
  background: var(--cobalt); color: #fff; border-radius: 16px; padding: 34px 30px;
  position: relative; overflow: hidden;
}
.cs-quote.alt { background: var(--ink); }
.cs-quote .mark { font-family: 'Fraunces', serif; font-size: 70px; line-height: 0; position: absolute; top: 38px; left: 22px; color: rgba(255,255,255,0.16); }
.cs-quote q { font-family: 'Fraunces', serif; font-size: clamp(22px, 3.4vw, 30px); font-style: italic; line-height: 1.18; display: block; quotes: none; position: relative; }
.cs-quote .who { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.7; margin-top: 18px; }

/* ---- principles ---- */
.cs-princ { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 8px; }
@media (max-width: 720px){ .cs-princ { grid-template-columns: 1fr; } }
.cs-princ-card { padding: 26px 22px; background: var(--paper-2); border-radius: 14px; }
.cs-princ-tag { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--blush); margin-bottom: 14px; }
.cs-princ-prob { font-size: 14px; color: var(--ink-soft); margin: 0 0 14px; }
.cs-princ-prob b { color: var(--ink); font-weight: 600; }
.cs-princ-move { font-family: 'Fraunces', serif; font-size: 19px; line-height: 1.25; margin: 0; }

/* ---- redesign showcase ---- */
.cs-show-hero { margin: 8px 0 44px; border-radius: 20px; overflow: hidden; border: 1px solid var(--rule);
  background: radial-gradient(120% 120% at 50% 0%, #2c4ccb 0%, var(--cobalt) 55%, var(--cobalt-deep) 100%);
  padding: 48px 5%; display: flex; justify-content: center; box-shadow: 0 30px 70px -45px rgba(24,38,106,0.55); }
.cs-decisions { display: grid; grid-template-columns: 1fr 1fr; gap: 26px 44px; }
@media (max-width: 720px){ .cs-decisions { grid-template-columns: 1fr; } }
.cs-decision b { font-family: 'Fraunces', serif; font-weight: 600; font-size: 18px; display: block; margin-bottom: 6px; }
.cs-decision b::before { content: ""; display: inline-block; width: 8px; height: 8px; border-radius: 2px; background: var(--cobalt); margin-right: 9px; vertical-align: middle; }
.cs-decision p { margin: 0; font-size: 15px; color: var(--ink-soft); }

.cs-mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 40px; }
@media (max-width: 720px){ .cs-mini-grid { grid-template-columns: 1fr; } }
.cs-mini { background: var(--cobalt); border-radius: 12px; padding: 18px; aspect-ratio: 3/4; display: flex; flex-direction: column; }
.cs-mini-back { font-family: 'Space Mono', monospace; font-size: 9px; color: #cfe0f2; background: rgba(255,255,255,0.12); align-self: flex-start; padding: 3px 8px; border-radius: 999px; margin-bottom: 16px; }
.cs-mini-title { font-family: 'Fraunces', serif; color: #fff; font-size: 20px; font-weight: 600; margin-bottom: 16px; }
.cs-mini-field { background: rgba(255,255,255,0.92); border-radius: 8px; height: 24px; margin-bottom: 9px; display: flex; align-items: center; padding: 0 8px; }
.cs-mini-field i { font-style: normal; font-family: 'Fraunces', serif; font-size: 10px; color: #97a3c0; }
.cs-mini-chips { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; margin-top: 4px; }
.cs-mini-chip { background: rgba(255,255,255,0.92); border-radius: 7px; height: 22px; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-size: 9px; color: var(--cobalt-deep); }
.cs-mini-row { display: flex; gap: 8px; margin-top: auto; }
.cs-mini-btn { border-radius: 999px; height: 26px; flex: 1; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-size: 10px; }
.cs-mini-btn.pri { background: #fff; color: var(--cobalt-deep); }
.cs-mini-btn.sec { background: rgba(255,255,255,0.28); color: #fff; }
.cs-mini-cap { font-family: 'Space Mono', monospace; font-size: 11px; color: var(--ink-soft); text-align: center; margin-top: 12px; letter-spacing: 0.04em; }
.cs-swap-note { font-family: 'Space Mono', monospace; font-size: 11px; color: var(--ink-soft); text-align: center; margin-top: 24px; opacity: 0.8; }

/* ---- validation ---- */
.cs-stat-row { display: flex; align-items: flex-end; gap: clamp(18px, 5vw, 60px); flex-wrap: wrap; margin: 6px 0 50px; }
.cs-stat { }
.cs-stat-num { font-family: 'Fraunces', serif; font-weight: 500; font-size: clamp(54px, 11vw, 110px); line-height: 0.86; letter-spacing: -0.04em; }
.cs-stat-num.was { color: var(--ink-soft); position: relative; }
.cs-stat-num.now { color: var(--cobalt); }
.cs-stat-lab { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft); margin-top: 12px; }
.cs-arrow { font-family: 'Fraunces', serif; font-size: clamp(40px, 8vw, 80px); color: var(--blush); line-height: 0.86; padding-bottom: 18px; }

.cs-chart { background: var(--paper-2); border-radius: 16px; padding: 34px 30px 26px; }
.cs-chart-title { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 28px; }
.cs-bars { display: flex; align-items: flex-end; gap: clamp(10px, 3vw, 30px); height: 240px; border-bottom: 1px solid var(--rule); }
.cs-bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; }
.cs-bar { width: 100%; max-width: 64px; border-radius: 6px 6px 0 0; position: relative; transition: height .9s cubic-bezier(.4,0,.2,1); }
.cs-bar-val { font-family: 'Space Mono', monospace; font-size: 13px; position: absolute; top: -22px; left: 50%; transform: translateX(-50%); white-space: nowrap; }
.cs-bar-x { display: flex; gap: clamp(10px, 3vw, 30px); margin-top: 12px; }
.cs-bar-lab { flex: 1; text-align: center; font-size: 12px; color: var(--ink-soft); line-height: 1.3; }
.cs-bar-lab.mine { color: var(--cobalt); font-weight: 700; }
.cs-chart-note { font-size: 14px; color: var(--ink-soft); margin: 22px 0 0; max-width: 64ch; }

.cs-nuance { margin-top: 44px; padding: 28px 30px; border: 1px solid var(--rule); border-radius: 14px; background: var(--paper); max-width: 72ch; }
.cs-nuance .cs-meta-k { color: var(--blush); }
.cs-nuance p { margin: 6px 0 0; }

/* ---- reflection ---- */
.cs-reflect { display: grid; grid-template-columns: 1fr 1fr; gap: 30px 50px; margin-top: 8px; }
@media (max-width: 720px){ .cs-reflect { grid-template-columns: 1fr; } }
.cs-reflect h3 { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; margin: 0 0 8px; }
.cs-reflect p { margin: 0; color: var(--ink-soft); font-size: 16px; }

/* ---- footer ---- */
.cs-footer { border-top: 1px solid var(--rule); padding: 60px 0 80px; text-align: center; }
.cs-footer-h { font-family: 'Fraunces', serif; font-size: clamp(24px, 4vw, 36px); font-weight: 500; margin: 0 0 10px; letter-spacing: -0.02em; }
.cs-footer-h em { font-style: italic; color: var(--cobalt); }
.cs-footer-sub { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft); }

@media (prefers-reduced-motion: reduce) {
  .cs-sea, .cs-bar { transition: none; }
}
`;

const SEA_LINKS = [
  "activities","artists","childcare","classes","events","general","groups","local news","lost+found","musicians",
  "politics","rants & raves","volunteers","apts / housing","rooms wanted","sublets","vacation rentals","antiques",
  "appliances","arts+crafts","auto parts","baby+kid","beauty+hlth","bikes","boats","books","business","cars+trucks",
  "cds / dvd","cell phones","clothes+acc","collectibles","computers","electronics","farm+garden","free","furniture",
  "garage sale","heavy equip","household","jewelry","materials","motorcycles","music instr","photo+video","rvs+camp",
  "sporting","tickets","tools","toys+games","wanted","accounting","admin / office","arch / eng","art / media","biotech",
  "business mgmt","customer svc","education","food / bev","general labor","government","human resources","legal",
  "manufacturing","marketing","medical","nonprofit","real estate","retail","sales","salon / spa","security",
  "skilled trade","software","systems","tech support","transport","tv / film","web design","writing","help, faq, abuse",
  "avoid scams","personal safety","best-of-cl","craigslist tv","about","new york","brooklyn","queens","bronx","albany",
];

function Icon({ name }) {
  const p = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "cart") return (<svg {...p}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>);
  if (name === "home") return (<svg {...p}><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>);
  if (name === "job") return (<svg {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>);
  if (name === "wrench") return (<svg {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.3-.2-.2-2.3z"/></svg>);
  if (name === "pin") return (<svg {...p} width="14" height="14"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>);
  if (name === "pen") return (<svg {...p} width="12" height="12"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>);
  return null;
}

function CleanCraigslist() {
  return (
    <div className="cs-cl">
      <div className="cs-cl-top">
        <span className="cs-cl-pin"><Icon name="pin" /></span>
        <span className="cs-cl-login">login</span>
      </div>
      <div className="cs-cl-word">craigslist</div>
      <div className="cs-cl-search">
        <span>what are you looking for?</span>
        <Icon name="pen" />
      </div>
      <div className="cs-cl-cards">
        <div className="cs-cl-card"><Icon name="cart" /><span>shopping</span></div>
        <div className="cs-cl-card"><Icon name="home" /><span>housing</span></div>
        <div className="cs-cl-card"><Icon name="job" /><span>jobs</span></div>
        <div className="cs-cl-card"><Icon name="wrench" /><span>services</span></div>
      </div>
      <div className="cs-cl-post"><span>publish a post <Icon name="pen" /></span></div>
    </div>
  );
}

const POST_DATA = [
  { name: "Original\nCraigslist", val: 63, mine: false, dim: true },
  { name: "Cognitive Load\nReduction", val: 32, mine: true, dim: false },
  { name: "Progressive\nDisclosure", val: 21, mine: false, dim: false },
  { name: "Visual\nHierarchy", val: 23, mine: false, dim: false },
  { name: "Gestalt\nPrinciples", val: 33, mine: false, dim: false },
];

export default function CraigslistCaseStudy() {
  const [cleared, setCleared] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setCleared(true); return; }
    const t = setTimeout(() => setCleared(true), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimateBars(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Paste your Figma prototype share link here once it's ready:
  const PROTOTYPE_URL = "#";

  const maxVal = 70;

  return (
    <div className="cs-root">
      <style>{STYLES}</style>

      {/* NAV */}
      <nav className="cs-nav">
        <div className="cs-wrap cs-nav-inner">
          <div className="cs-nav-name">Keona Hicks<span>.</span></div>
          <Link className="cs-nav-link" to="/">← All work</Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="cs-wrap cs-hero">
        <div className="cs-hero-eyebrow">Case Study / Research-driven redesign</div>
        <h1 className="cs-hero-h1">Redesigning Craigslist for <em>clarity and speed.</em></h1>
        <p className="cs-hero-sub">
          I redesigned Craigslist around one idea: a user should only have to process one thing at a time.
          Then I ran a study with 8 people to see if it actually worked.
        </p>

        <div className="cs-cta-wrap">
          <a className="cs-cta" href={PROTOTYPE_URL} target="_blank" rel="noopener noreferrer">
            View the prototype <span className="arr">↗</span>
          </a>
        </div>

        <div className="cs-chips">
          <div className="cs-chip">
            <div className="cs-chip-label">Role</div>
            <div className="cs-chip-val">UI/UX Designer &amp; Researcher</div>
          </div>
          <div className="cs-chip">
            <div className="cs-chip-label">Context</div>
            <div className="cs-chip-val">HCI study · 7-person team</div>
          </div>
          <div className="cs-chip cs-chip-stat">
            <div className="cs-chip-label">Posting task, my redesign</div>
            <div className="cs-chip-val">−49% time</div>
          </div>
        </div>

        {/* BEFORE / AFTER DEMO */}
        <div className="cs-demo">
          <div className="cs-demo-frame">
            <div className="cs-layer cs-after"><CleanCraigslist /></div>
            <div className={"cs-layer cs-sea" + (cleared ? " cleared" : "")} aria-hidden={cleared}>
              <div className="cs-sea-head">craigslist</div>
              <div className="cs-sea-links">
                {SEA_LINKS.map((l, i) => (
                  <a key={i} href="#" onClick={(e) => e.preventDefault()}>{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="cs-demo-bar">
            <div className="cs-demo-state">
              SHOWING: <b>{cleared ? "the redesign" : "the original, a wall of undifferentiated links"}</b>
            </div>
            <button className="cs-toggle" onClick={() => setCleared((c) => !c)}>
              {cleared ? "↺ See the before" : "Clear the noise →"}
            </button>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow">Overview</div>
          <div className="cs-meta">
            <div className="cs-meta-row"><div className="cs-meta-k">What I owned</div><div className="cs-meta-v">The Cognitive Load Reduction redesign: every screen plus the clickable prototype</div></div>
            <div className="cs-meta-row"><div className="cs-meta-k">Discipline</div><div className="cs-meta-v">UX research, interaction design, usability testing</div></div>
            <div className="cs-meta-row"><div className="cs-meta-k">Methods</div><div className="cs-meta-v">Interviews, moderated focus group, Time-on-Task study, ANOVA</div></div>
            <div className="cs-meta-row"><div className="cs-meta-k">Tools</div><div className="cs-meta-v">Figma / Canva, HTML prototype, statistical analysis</div></div>
          </div>
          <div className="cs-role-note">
            <b>What I did on the team:</b> This was a 7-person project, so to be clear about my part: I designed
            the <b>Cognitive Load Reduction</b> version of the redesign, every screen, the interaction logic, and
            the prototype. I also helped run the user study that tested all of our designs.
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow">The Problem</div>
          <h2 className="cs-h2">You can use it, but it makes you work for it.</h2>
          <div className="cs-before-grid">
            <div className="cs-body">
              <p>
                Craigslist still works the way it did in the early internet: a dense homepage of
                identically-colored blue links with almost no visual hierarchy. Everything looks equally
                important, so nothing stands out as important.
              </p>
              <p>
                I picked it as a stress test. The question wasn't whether I could make it prettier, it was
                <em> whether applying real HCI principles could measurably speed people up, and whether I could
                prove it.</em>
              </p>
            </div>
            <ul className="cs-callouts">
              <li><span className="num">01</span><div><b>One undivided blue</b><p>Every link is the same color and weight, so the eye has no anchor.</p></div></li>
              <li><span className="num">02</span><div><b>No clear entry point</b><p>Users couldn't tell what the site was even for within the first few seconds.</p></div></li>
              <li><span className="num">03</span><div><b>Buried basics</b><p>Finding a plain description of Craigslist took 5+ clicks across nested pages.</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow center">Research</div>
          <h2 className="cs-h2 center">I watched real users try to get around it.</h2>
          <div className="cs-quotes">
            <div className="cs-quote">
              <span className="mark">“</span>
              <q>It's a sea of blue. I can't tell what's clickable or what matters.</q>
              <div className="who">Interview participant</div>
            </div>
            <div className="cs-quote alt">
              <span className="mark">“</span>
              <q>If I had to describe this website, it's a mirror maze.</q>
              <div className="who">Focus group participant</div>
            </div>
          </div>
          <div className="cs-body center">
            <p>
              In a moderated focus group, people had to click through About → Help → Posting → Features → Type
              before they hit a single sentence explaining what Craigslist does. When I asked them to rank what
              mattered in an interface, they put <b>accessibility and functionality above looks</b> every time.
            </p>
            <p>
              <b>The takeaway that set my direction:</b> the problem wasn't that Craigslist was ugly, it was that
              it made people think too hard to do simple things. That pointed me straight at cognitive load
              reduction.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow center">From insight to principle</div>
          <h2 className="cs-h2 center">Three problems.</h2>
          <div className="cs-princ">
            <div className="cs-princ-card">
              <div className="cs-princ-tag">Load</div>
              <p className="cs-princ-prob"><b>Everything competes</b> for attention at once.</p>
              <p className="cs-princ-move">Strip the interface to essentials. Remove anything decorative that doesn't help finish a task.</p>
            </div>
            <div className="cs-princ-card">
              <div className="cs-princ-tag">Hierarchy</div>
              <p className="cs-princ-prob"><b>No sense of what's primary</b> versus secondary.</p>
              <p className="cs-princ-move">Rank by frequency of use. Demote rare actions, promote the core ones.</p>
            </div>
            <div className="cs-princ-card">
              <div className="cs-princ-tag">Focus</div>
              <p className="cs-princ-prob"><b>Every screen overwhelms</b> with options.</p>
              <p className="cs-princ-move">One decision at a time. Each screen does exactly one job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REDESIGN */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow center">The Redesign</div>
          <h2 className="cs-h2 center">Rebuilt so you're only ever processing one thing.</h2>
          <div className="cs-show-hero"><CleanCraigslist /></div>

          <div className="cs-decisions">
            <div className="cs-decision">
              <b>Stripped to essentials</b>
              <p>Decorative imagery removed entirely. What's left: one clear search and four labeled, icon-led category cards.</p>
            </div>
            <div className="cs-decision">
              <b>Demoted peripherals</b>
              <p>Login and location moved to the top-right at a smaller scale, available rather than competing with the main goal.</p>
            </div>
            <div className="cs-decision">
              <b>One task per screen</b>
              <p>Every subpage shows a single title, one job, and the minimum inputs. Nothing asks you to hold two decisions at once.</p>
            </div>
            <div className="cs-decision">
              <b>Weighted buttons</b>
              <p>Primary and secondary actions differ by visual weight, so the right next step is always obvious.</p>
            </div>
          </div>

          <div className="cs-mini-grid">
            <div className="cs-mini">
              <div className="cs-mini-back">← back</div>
              <div className="cs-mini-title">welcome back</div>
              <div className="cs-mini-field"><i>username</i></div>
              <div className="cs-mini-field"><i>password</i></div>
              <div className="cs-mini-row">
                <div className="cs-mini-btn pri">sign in</div>
                <div className="cs-mini-btn sec">sign up</div>
              </div>
            </div>
            <div className="cs-mini">
              <div className="cs-mini-back">← back</div>
              <div className="cs-mini-title">create a post</div>
              <div className="cs-mini-field"><i>city</i></div>
              <div className="cs-mini-field"><i>post type</i></div>
              <div className="cs-mini-field"><i>description</i></div>
              <div className="cs-mini-row">
                <div className="cs-mini-btn sec">upload</div>
                <div className="cs-mini-btn pri">publish</div>
              </div>
            </div>
            <div className="cs-mini">
              <div className="cs-mini-back">← back</div>
              <div className="cs-mini-title">shopping</div>
              <div className="cs-mini-chips">
                <div className="cs-mini-chip">electronics</div>
                <div className="cs-mini-chip">furniture</div>
                <div className="cs-mini-chip">clothing</div>
                <div className="cs-mini-chip">books</div>
                <div className="cs-mini-chip">free stuff</div>
                <div className="cs-mini-chip">all</div>
              </div>
            </div>
          </div>
          <div className="cs-mini-cap">Each subpage: one title, one task, minimal inputs.</div>
          <div className="cs-swap-note">↑ Live HTML re-creations of my screens. Swap in final mockup exports here.</div>
        </div>
      </section>

      {/* VALIDATION */}
      <section className="cs-section" ref={chartRef}>
        <div className="cs-wrap">
          <div className="cs-eyebrow center">Validation</div>
          <h2 className="cs-h2 center">The measurements.</h2>

          <div className="cs-stat-row center">
            <div className="cs-stat">
              <div className="cs-stat-num was">63s</div>
              <div className="cs-stat-lab">Original · create a post</div>
            </div>
            <div className="cs-arrow">→</div>
            <div className="cs-stat">
              <div className="cs-stat-num now">32s</div>
              <div className="cs-stat-lab">My redesign · same task</div>
            </div>
          </div>

          <div className="cs-body center" style={{ marginBottom: 40 }}>
            <p>
              We ran a within-subjects study with <b>8 participants</b>, each doing the same three tasks across
              the original Craigslist and every redesign, with interface order randomized to offset learning
              effects. On the most complex flow, creating a post, my redesign cut completion time roughly in
              half. A two-way ANOVA confirmed the interface had a statistically significant effect on task time
              (p &lt; 0.001).
            </p>
          </div>

          <div className="cs-chart">
            <div className="cs-chart-title">Avg. time to create a post (seconds) · lower is better</div>
            <div className="cs-bars">
              {POST_DATA.map((d, i) => (
                <div className="cs-bar-col" key={i}>
                  <div
                    className="cs-bar"
                    style={{
                      height: animateBars ? `${(d.val / maxVal) * 100}%` : "0%",
                      background: d.mine ? "var(--cobalt)" : d.dim ? "var(--blush)" : "#b9c0d4",
                      transitionDelay: `${i * 90}ms`,
                    }}
                  >
                    <span className="cs-bar-val" style={{ color: d.mine ? "var(--cobalt)" : "var(--ink-soft)" }}>{d.val}s</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="cs-bar-x">
              {POST_DATA.map((d, i) => (
                <div className={"cs-bar-lab" + (d.mine ? " mine" : "")} key={i}>
                  {d.name.split("\n").map((t, j) => <div key={j}>{t}</div>)}
                </div>
              ))}
            </div>
            <p className="cs-chart-note">
              Simple tasks like buying parts stayed fast everywhere, which is a finding on its own: the clutter
              hurts most on complex, multi-step flows, which is where good information design matters most.
            </p>
          </div>

          <div className="cs-nuance">
            <div className="cs-meta-k">The honest nuance</div>
            <p>
              Even though users were objectively faster on the redesigns, their <b>subjective</b> ratings didn't
              shift much. People don't always feel the improvement they're actually experiencing, which taught me
              that measured behavior and self-reported preference are two different signals, and you shouldn't
              rely on only one.
            </p>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow">What I learned</div>
          <div className="cs-reflect">
            <div>
              <h3>Research kept me honest.</h3>
              <p>My first instinct was that the problem was the dated look. Testing showed it was cognitive, and that changed everything I designed.</p>
            </div>
            <div>
              <h3>Constraints clarify.</h3>
              <p>"One decision per screen" sounds limiting, but it made the layouts almost design themselves. The hard part was the discipline to remove things, not add them.</p>
            </div>
            <div>
              <h3>Behavior isn't perception.</h3>
              <p>Faster didn't mean people felt faster. I wouldn't validate a redesign on a single metric again.</p>
            </div>
            <div>
              <h3>If I did it again.</h3>
              <p>More participants for tighter subjective data, and I'd test mobile-first, since classifieds usage skews heavily to phones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cs-footer">
        <div className="cs-wrap">
          <p className="cs-footer-sub">Keona Hicks · UI/UX Design</p>
        </div>
      </footer>
    </div>
  );
}