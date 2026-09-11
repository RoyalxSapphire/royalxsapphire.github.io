import React from "react";
import { Link } from "react-router-dom";
import heroClip from "../assets/or83/intro_countdown.mp4";
import posterImg from "../assets/or83/Keona_Hicks_Summer_Research_Poster.png";
import posterPdf from "../assets/or83/Keona_Hicks_Summer_Research_Poster.pdf";
import tvOff from "../assets/or83/tv_off.png";
import tvOn from "../assets/or83/tv_on.png";
import tvEbs from "../assets/or83/tv_ebs.png";
import candleScene from "../assets/or83/candle_scene.png";
import rotaryPhone from "../assets/or83/rotary_phone.png";
import calendarScene from "../assets/or83/calendar_scene.png";
import storyboard1 from "../assets/or83/storyboard_1.png";
import storyboard2 from "../assets/or83/storyboard_2.png";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

:root {
  --paper: #EFE7D6;
  --paper-2: #E7DBC4;
  --ink: #241C15;
  --ink-soft: #5C4E3E;
  --amber: #C6871F;
  --amber-deep-solid: #8F5E12;
  --glow: #E4A63C;
  --sage: #5F8C81;
  --sage-deep: #3F655C;
  --ebs-text: #F2E6C2;
  --panel: #EBDFC8;
  --night: #171009;
  --rule: rgba(36,28,21,0.15);
}

* { box-sizing: border-box; }

.or-root {
  background: var(--paper);
  color: var(--ink);
  font-family: 'Hanken Grotesk', system-ui, sans-serif;
  font-size: 17px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
.or-root ::selection { background: var(--amber); color: #fff; }

.or-wrap { max-width: 1080px; margin: 0 auto; padding: 0 28px; }

/* ---- nav ---- */
.or-nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(239,231,214,0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--rule);
}
.or-nav-inner { display: flex; align-items: center; justify-content: space-between; height: 60px; }
.or-nav-name { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; letter-spacing: -0.01em; }
.or-nav-name span { color: var(--sage); }
.or-nav-link { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-soft); text-decoration: none; }
.or-nav-link:hover { color: var(--amber); }

/* ---- shared section ---- */
.or-section { padding: 92px 0; border-top: 1px solid var(--rule); }
.or-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--amber); margin: 0 0 22px 0; display: flex; align-items: center; gap: 12px;
}
.or-eyebrow::before { content: ""; width: 26px; height: 2px; background: var(--sage); display: inline-block; }
.or-h2 {
  font-family: 'Fraunces', serif; font-weight: 500;
  font-size: clamp(28px, 4.2vw, 46px); line-height: 1.08; letter-spacing: -0.02em;
  margin: 0 0 24px 0; max-width: 20ch;
}
.or-lead { font-size: clamp(18px, 2.2vw, 21px); color: var(--ink-soft); max-width: 60ch; margin: 0; }
.or-body { max-width: 64ch; }
.or-body p { margin: 0 0 18px 0; }
.or-body em { font-style: italic; color: var(--amber-deep-solid); }

/* center modifiers */
.or-eyebrow.center { justify-content: center; }
.or-h2.center { text-align: center; margin-left: auto; margin-right: auto; }
.or-body.center { text-align: center; margin-left: auto; margin-right: auto; max-width: 62ch; }

/* ---- hero ---- */
.or-hero { padding: 70px 0 60px; position: relative; text-align: center; }
.or-hero-eyebrow { font-family: 'Space Mono', monospace; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--amber); margin-bottom: 22px; }
.or-hero-tag {
  display: inline-block; font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--sage-deep); border: 1px solid var(--sage);
  padding: 4px 10px; border-radius: 2px; margin-bottom: 22px;
}
.or-hero-h1 {
  font-family: 'Fraunces', serif; font-weight: 500;
  font-size: clamp(46px, 9vw, 104px); line-height: 0.96; letter-spacing: -0.035em;
  margin: 0 auto 26px; max-width: 14ch;
}
.or-hero-h1 em { font-style: italic; color: var(--amber); }
.or-hero-sub { font-size: clamp(17px, 2.1vw, 21px); color: var(--ink-soft); max-width: 54ch; margin: 0 auto 38px; }

.or-chips { display: flex; flex-wrap: wrap; gap: 24px 48px; align-items: flex-start; justify-content: center; }
.or-chip-label { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 8px; min-height: 14px; }
.or-chip-val { font-family: 'Fraunces', serif; font-size: 19px; font-weight: 600; line-height: 1.15; }
.or-chip-stat .or-chip-val { color: var(--amber); }

/* CTA */
.or-cta-wrap { margin: 2px 0 8px; }
.or-cta {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'Space Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;
  background: var(--amber); color: #fff; border-radius: 2px; padding: 14px 26px; text-decoration: none;
  transition: background .2s, transform .2s, box-shadow .2s;
  box-shadow: 5px 5px 0 var(--sage-deep);
}
.or-cta:hover { background: var(--amber-deep-solid); transform: translate(-2px,-2px); box-shadow: 7px 7px 0 var(--sage-deep); }
.or-cta:active { transform: translate(2px,2px); box-shadow: 2px 2px 0 var(--sage-deep); }
.or-cta:focus-visible { outline: 3px solid var(--sage); outline-offset: 3px; }
.or-cta.ghost { background: transparent; color: var(--amber-deep-solid); border: 1px solid var(--amber); box-shadow: 5px 5px 0 rgba(198,135,31,0.28); }
.or-cta.ghost:hover { background: var(--panel); }
.or-cta .arr { font-family: 'Fraunces', serif; font-size: 17px; line-height: 0; }

/* ---- hero media ---- */
.or-crt-block { margin: 50px 0 0; }
.or-hero-video {
  width: 100%; display: block; border-radius: 6px;
  image-rendering: pixelated;
  border: 1px solid rgba(0,0,0,0.45);
  box-shadow: 0 24px 60px -28px rgba(0,0,0,0.7);
}
.or-demo-bar { display: flex; align-items: center; justify-content: space-between; margin-top: 16px; flex-wrap: wrap; gap: 12px; }
.or-demo-state { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.06em; color: var(--ink-soft); }

/* ---- overview meta ---- */
.or-meta { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border-top: 1px solid var(--rule); }
@media (max-width: 640px){ .or-meta { grid-template-columns: 1fr; } }
.or-meta-row { padding: 20px 4px; border-bottom: 1px solid var(--rule); }
.or-meta-row:nth-child(odd) { padding-right: 28px; }
.or-meta-k { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--amber); margin-bottom: 7px; }
.or-meta-v { font-size: 16px; }
.or-role-note {
  margin-top: 34px; padding: 24px 26px; background: var(--paper-2);
  border-left: 3px solid var(--sage); border-radius: 0 8px 8px 0; max-width: 74ch;
}
.or-role-note b { font-family: 'Fraunces', serif; }

/* ---- storyboards ---- */
.or-boards { display: flex; flex-direction: column; gap: 26px; margin-top: 12px; }
.or-board {
  border-radius: 6px; overflow: hidden; border: 1px solid rgba(36,28,21,0.25);
  box-shadow: 7px 7px 0 rgba(95,140,129,0.35); background: var(--paper-2);
}
.or-board img { width: 100%; display: block; }
.or-board-ph {
  aspect-ratio: 16 / 7; display: flex; align-items: center; justify-content: center;
  background-image: linear-gradient(rgba(36,28,21,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(36,28,21,0.05) 1px, transparent 1px);
  background-size: 14px 14px;
  color: var(--amber-deep-solid); font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
}
.or-board-cap { font-family: 'Space Mono', monospace; font-size: 12px; color: var(--ink-soft); margin-top: 12px; letter-spacing: 0.03em; }

/* ---- frames (asset tiles) ---- */
.or-frame {
  position: relative; aspect-ratio: 4 / 3; border-radius: 4px; overflow: hidden;
  background: linear-gradient(135deg, #dcc9a4, #cbb488), var(--panel);
  border: 1px solid rgba(36,28,21,0.25);
  box-shadow: 6px 6px 0 rgba(95,140,129,0.4);
  display: flex; align-items: center; justify-content: center;
}
.or-frame img { width: 100%; height: 100%; object-fit: cover; display: block; image-rendering: pixelated; }
.or-frame-ph {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background-image: linear-gradient(rgba(36,28,21,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(36,28,21,0.06) 1px, transparent 1px);
  background-size: 12px 12px;
  color: var(--amber-deep-solid); font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
}

/* ---- decision cards ---- */
.or-decisions { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 8px; }
@media (max-width: 720px){ .or-decisions { grid-template-columns: 1fr; } }
.or-dec {
  padding: 28px 26px; background: var(--paper-2); border-radius: 8px;
  border: 1px solid var(--rule);
}
.or-dec-tag { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sage-deep); margin-bottom: 12px; }
.or-dec-h { font-family: 'Fraunces', serif; font-weight: 600; font-size: 21px; line-height: 1.18; margin: 0 0 10px; }
.or-dec p { margin: 0; font-size: 15px; color: var(--ink-soft); }
.or-dec p em { font-style: italic; color: var(--amber-deep-solid); }

/* A/B/C mini study */
.or-abc { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 16px; }
@media (max-width: 480px){ .or-abc { grid-template-columns: 1fr; } }
.or-abc-item { border: 1px solid var(--rule); border-radius: 4px; padding: 10px 10px; background: var(--paper); }
.or-abc-item.pick { border-color: var(--sage); background: rgba(95,140,129,0.12); }
.or-abc-l { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.1em; color: var(--sage-deep); text-transform: uppercase; }
.or-abc-x { font-size: 13px; color: var(--ink); margin-top: 3px; line-height: 1.3; }
.or-abc-item.pick .or-abc-x { font-weight: 600; }

/* ---- build / event sequence ---- */
.or-term {
  background: var(--night); color: #d7c6a2; border-radius: 6px; padding: 22px 24px;
  font-family: 'Space Mono', monospace; font-size: 13.5px; line-height: 1.9; margin-top: 10px;
  border: 1px solid rgba(0,0,0,0.4); overflow-x: auto;
}
.or-term .k { color: var(--glow); }
.or-term .c { color: #7f8f7a; }
.or-term .s { color: var(--ebs-text); }

/* ---- asset gallery ---- */
.or-assets { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 8px; }
@media (max-width: 720px){ .or-assets { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 460px){ .or-assets { grid-template-columns: 1fr; } }
.or-asset-cap { font-family: 'Space Mono', monospace; font-size: 11px; color: var(--ink-soft); text-align: center; margin-top: 10px; letter-spacing: 0.03em; }

/* ---- poster ---- */
.or-poster {
  border-radius: 6px; overflow: hidden; border: 1px solid rgba(36,28,21,0.25);
  box-shadow: 8px 8px 0 rgba(95,140,129,0.35); background: var(--paper-2);
  max-width: 940px; margin: 0 auto;
}
.or-poster img { width: 100%; display: block; }
.or-poster-ph {
  aspect-ratio: 16 / 11; display: flex; align-items: center; justify-content: center;
  background-image: linear-gradient(rgba(36,28,21,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(36,28,21,0.05) 1px, transparent 1px);
  background-size: 16px 16px;
  color: var(--amber-deep-solid); font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
}
.or-poster-link { text-align: center; margin-top: 24px; }

/* ---- reflection ---- */
.or-reflect { display: grid; grid-template-columns: 1fr 1fr; gap: 30px 50px; margin-top: 8px; }
@media (max-width: 720px){ .or-reflect { grid-template-columns: 1fr; } }
.or-reflect h3 { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; margin: 0 0 8px; }
.or-reflect p { margin: 0; color: var(--ink-soft); font-size: 16px; }

/* ---- links row ---- */
.or-links { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 40px; }

/* ---- footer ---- */
.or-footer { border-top: 1px solid var(--rule); padding: 60px 0 80px; text-align: center; }
.or-footer-sub { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft); }

@media (prefers-reduced-motion: reduce) {
  .or-cta { transition: none; }
}
`;

const HERO_CLIP = heroClip;
const INTRO_URL = "https://youtu.be/SB79NL5V6rs";
const POSTER_IMG = posterImg;
const POSTER_PDF = posterPdf;

function Frame({ src, alt, label }) {
  return (
    <div className="or-frame">
      {src ? <img src={src} alt={alt} /> : <div className="or-frame-ph">{label || "drop frame"}</div>}
    </div>
  );
}

function Board({ src, alt, label, caption }) {
  return (
    <figure style={{ margin: 0 }}>
      <div className="or-board">
        {src ? <img src={src} alt={alt} /> : <div className="or-board-ph">{label || "drop storyboard page"}</div>}
      </div>
      {caption && <figcaption className="or-board-cap">{caption}</figcaption>}
    </figure>
  );
}

function HeroMedia() {
  return (
    <div className="or-crt-block">
      <video className="or-hero-video" src={HERO_CLIP} autoPlay muted loop playsInline />
      <div className="or-demo-bar">
        <div className="or-demo-state">The opening of the intro: the countdown into 1983.</div>
      </div>
    </div>
  );
}

export default function OregonRoad83CaseStudy() {
  return (
    <div className="or-root">
      <style>{STYLES}</style>

      {/* NAV */}
      <nav className="or-nav">
        <div className="or-wrap or-nav-inner">
          <div className="or-nav-name">Keona Hicks<span>.</span></div>
          <Link className="or-nav-link" to="/">&larr; All work</Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="or-wrap or-hero">
        <div className="or-hero-eyebrow">Case Study / Pixel art &amp; narrative design</div>
        <div className="or-hero-tag">OR83 &middot; Phaser 3 &middot; research game</div>
        <h1 className="or-hero-h1">Oregon Road <em>'83.</em></h1>
        <p className="or-hero-sub">
          A survival game set in 1983, right on the edge of a nuclear war. I worked on the intro:
          I drew the pixel art, planned out the scenes, and built the opening in the game engine.
        </p>

        <div className="or-cta-wrap">
          <a className="or-cta" href={INTRO_URL} target="_blank" rel="noopener noreferrer">
            Watch the full intro <span className="arr">&#8599;</span>
          </a>
        </div>

        <div className="or-chips" style={{ marginTop: 34 }}>
          <div className="or-chip">
            <div className="or-chip-label">Role</div>
            <div className="or-chip-val">Pixel art &amp; intro design</div>
          </div>
          <div className="or-chip">
            <div className="or-chip-label">Context</div>
            <div className="or-chip-val">Research game &middot; Prof. Wellerstein</div>
          </div>
          <div className="or-chip or-chip-stat">
            <div className="or-chip-label">What I delivered</div>
            <div className="or-chip-val">Art, design &amp; in-engine build</div>
          </div>
        </div>

        <HeroMedia />
      </header>

      {/* OVERVIEW */}
      <section className="or-section">
        <div className="or-wrap">
          <div className="or-eyebrow">Overview</div>
          <div className="or-meta">
            <div className="or-meta-row"><div className="or-meta-k">What I did</div><div className="or-meta-v">The intro's colored frames, the scene planning, and building the opening in the engine</div></div>
            <div className="or-meta-row"><div className="or-meta-k">Discipline</div><div className="or-meta-v">Pixel art, narrative &amp; interaction design, game UI</div></div>
            <div className="or-meta-row"><div className="or-meta-k">Methods</div><div className="or-meta-v">Storyboarding, making assets in Aseprite, building in-engine, a small interaction study</div></div>
            <div className="or-meta-row"><div className="or-meta-k">Tools</div><div className="or-meta-v">Aseprite &middot; Figma &middot; Phaser 3 &middot; OR83 Event Editor</div></div>
          </div>
          <div className="or-role-note">
            <b>My part on the team.</b> OR83 is a team research project, mentored by Professor Alex
            Wellerstein, who made the main room art and set up the tools we built in. I worked on the intro
            with a partner, and we split it between us. The colored frames are mine. Some of the rough
            sketches and a couple of the assets (the phone and the calendar) are my partner's. My focus was
            the intro's art and getting the opening scenes running in the engine.
          </div>
        </div>
      </section>

      {/* THE PROJECT */}
      <section className="or-section">
        <div className="or-wrap">
          <div className="or-eyebrow">The project</div>
          <h2 className="or-h2">What OR83 is.</h2>
          <div className="or-body">
            <p>
              OR83 is a survival game set in 1983. Think Oregon Trail, but instead of crossing the frontier
              you're trying to survive a nuclear war. It's built in Phaser 3. You start in the basement of your
              late parents' house in Independence, Missouri, and a phone call from your estranged, survivalist
              older brother is what sends you out on the road toward Oregon.
            </p>
            <p>
              My part was the intro, everything that happens <em>before</em> the road trip starts. Its job is
              pretty simple: get the player from a normal night at home to the moment things fall apart.
            </p>
          </div>
        </div>
      </section>

      {/* STORYBOARDS */}
      <section className="or-section">
        <div className="or-wrap">
          <div className="or-eyebrow">Planning the intro</div>
          <h2 className="or-h2">From rough sketches to colored frames.</h2>
          <div className="or-body" style={{ marginBottom: 8 }}>
            <p>
              Before making anything final, we storyboarded the whole intro so we knew every scene and the
              order it happened in. I put these boards together in slides. The rough black-and-white sketches
              were a mix of my partner's and mine. The colored frames are all mine.
            </p>
          </div>
          <div className="or-boards">
            <Board src={storyboard1} label="storyboard page 1" alt="Intro storyboard, scene order" caption="Storyboard, the full scene order and notes." />
            <Board src={storyboard2} label="storyboard page 2" alt="Colored frames for the intro" caption="Colored frames for the key scenes." />
          </div>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section className="or-section">
        <div className="or-wrap">
          <div className="or-eyebrow">Design decisions</div>
          <h2 className="or-h2">A few choices I&apos;m happy with.</h2>
          <div className="or-decisions">
            <div className="or-dec">
              <div className="or-dec-tag">Narrative</div>
              <h3 className="or-dec-h">I kept the player faceless.</h3>
              <p>
                The player doesn&apos;t have a set look in the game, so I didn&apos;t want to lock one in. In the
                family photo, I gave the parents and the brother clear faces, but left the player as a plain
                figure with no set skin tone, so it still feels like <em>you</em>. Since I was working with a
                fixed palette, I used hair shape and outline to tell the family apart instead of color.
              </p>
            </div>
            <div className="or-dec">
              <div className="or-dec-tag">Storytelling</div>
              <h3 className="or-dec-h">The candle only lights once.</h3>
              <p>
                The candle stays unlit through the whole phone call. It only gets lit right at the end, just
                before the game moves into the bunker. I liked using it as a bookend: it&apos;s the last thing
                you see before everything changes.
              </p>
            </div>
            <div className="or-dec" style={{ gridColumn: "1 / -1" }}>
              <div className="or-dec-tag">Interaction</div>
              <h3 className="or-dec-h">Keep the controls consistent.</h3>
              <p>
                For how the player does things in the bunker, I tested three options instead of just picking
                one. The goal wasn&apos;t to make the bunker <em>look</em> like the rest of the game. It was to
                keep the way you interact the same, so players don&apos;t have to relearn anything.
              </p>
              <div className="or-abc">
                <div className="or-abc-item">
                  <div className="or-abc-l">Option A</div>
                  <div className="or-abc-x">Clickable scenery. Ends up training players to hunt around the screen.</div>
                </div>
                <div className="or-abc-item pick">
                  <div className="or-abc-l">Option B &middot; picked</div>
                  <div className="or-abc-x">A checklist styled like the brother&apos;s handwritten note. Same read-and-choose as the rest of the game.</div>
                </div>
                <div className="or-abc-item">
                  <div className="or-abc-l">Option C</div>
                  <div className="or-abc-x">Dials on objects that hide once used. Neat, but it&apos;s one more thing to learn.</div>
                </div>
              </div>
            </div>
            <div className="or-dec" style={{ gridColumn: "1 / -1" }}>
              <div className="or-dec-tag">Pixel art</div>
              <h3 className="or-dec-h">Redrawing the close-ups.</h3>
              <p>
                The game is drawn at 1:1, so a zoomed-in shot can&apos;t just be the wide version blown up, it
                has to be redrawn bigger from scratch. Working inside a set palette meant I had to get the look
                right with shading and shape instead of adding more colors. This was my first time using
                Aseprite, and honestly the limits made it easier to focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="or-section">
        <div className="or-wrap">
          <div className="or-eyebrow">From art to something that runs</div>
          <h2 className="or-h2">I didn&apos;t just hand off the art.</h2>
          <div className="or-body">
            <p>
              Once the frames were done, I helped build the intro inside the game&apos;s engine. I took my art,
              encoded it, and set it up in the Event Editor so the scenes play in the right order with the
              right timing and dialogue. At one point the engine&apos;s text command wouldn&apos;t show up on my
              scene. I tracked it down to a font that wasn&apos;t loading and used message boxes instead. My
              partner and I split the scenes and merged our parts into one sequence. The result actually runs,
              it&apos;s not just a mockup.
            </p>
          </div>
          <div className="or-term" aria-hidden="true">
            <div><span className="c">// intro opening, scene 1 to 2</span></div>
            <div><span className="k">preload</span> &rarr; load frames into <span className="s">images{`{}`}</span></div>
            <div><span className="k">create</span> &rarr; addLayer(<span className="s">tv_off</span>)</div>
            <div>&nbsp;&nbsp;wait &rarr; modifyLayer(<span className="s">tv_on</span>)</div>
            <div>&nbsp;&nbsp;wait &rarr; <span className="s">tv_3</span> &rarr; <span className="s">tv_2</span> &rarr; <span className="s">tv_1</span></div>
            <div>&nbsp;&nbsp;flash + <span className="s">tv_new_years</span> &rarr; message(<span className="s">"Happy New Year..."</span>)</div>
          </div>
        </div>
      </section>

      {/* ASSETS */}
      <section className="or-section">
        <div className="or-wrap">
          <div className="or-eyebrow center">The pixel art</div>
          <h2 className="or-h2 center">The assets.</h2>
          <p className="or-lead" style={{ textAlign: "center", margin: "0 auto 44px" }}>
            Everything in the intro was made in Aseprite on the project&apos;s set palette. Here are the main ones.
          </p>
          <div className="or-assets">
            <div><Frame src={tvOff} label="tv_off" alt="TV, off" /><div className="or-asset-cap">TV, off</div></div>
            <div><Frame src={tvOn} label="tv_on" alt="TV, on" /><div className="or-asset-cap">TV, on</div></div>
            <div><Frame src={tvEbs} label="tv_ebs" alt="TV, Emergency Broadcast" /><div className="or-asset-cap">TV, Emergency Broadcast</div></div>
            <div><Frame src={candleScene} label="candle_scene" alt="The candle scene" /><div className="or-asset-cap">The candle scene</div></div>
            <div><Frame src={rotaryPhone} label="rotary_phone" alt="Rotary phone" /><div className="or-asset-cap">Rotary phone</div></div>
            <div><Frame src={calendarScene} label="calendar_scene" alt="Calendar" /><div className="or-asset-cap">Calendar</div></div>
          </div>
        </div>
      </section>

      {/* RESEARCH POSTER */}
      <section className="or-section">
        <div className="or-wrap">
          <div className="or-eyebrow">Research</div>
          <h2 className="or-h2">The poster.</h2>
          <div className="or-body" style={{ marginBottom: 40 }}>
            <p>
              OR83 was part of a summer research program, and we presented it as a poster at the end. Here&apos;s
              the one we put together.
            </p>
          </div>
          <div className="or-poster">
            {POSTER_IMG ? <img src={POSTER_IMG} alt="OR83 research poster" /> : <div className="or-poster-ph">drop poster image</div>}
          </div>
          <div className="or-poster-link">
            <a className="or-cta ghost" href={POSTER_PDF} target="_blank" rel="noopener noreferrer">
              Open the full PDF <span className="arr">&#8599;</span>
            </a>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="or-section">
        <div className="or-wrap">
          <div className="or-eyebrow">What I learned</div>
          <h2 className="or-h2">What I&apos;d take forward.</h2>
          <div className="or-reflect">
            <div>
              <h3>Pixel art was new to me.</h3>
              <p>I&apos;d never used Aseprite before this. I learned how to make a small palette do a lot, and how much even a small shading change can do.</p>
            </div>
            <div>
              <h3>Limits helped.</h3>
              <p>A fixed palette and a &quot;keep it short&quot; rule actually made the work easier to focus. The candle bookend came out of trying to do more with less.</p>
            </div>
            <div>
              <h3>Consistency beats looks.</h3>
              <p>The bunker test showed me that players learn how a game works, and breaking that is worse than a few things not matching visually.</p>
            </div>
            <div>
              <h3>Designing and building go together.</h3>
              <p>Drawing it, setting it up, and fixing it in the engine were all part of the same job. I want to keep doing both.</p>
            </div>
          </div>

          <div className="or-links">
            <a className="or-cta" href={INTRO_URL} target="_blank" rel="noopener noreferrer">
              Watch the full intro <span className="arr">&#8599;</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="or-footer">
        <div className="or-wrap">
          <p className="or-footer-sub">Keona Hicks &middot; Pixel art &amp; UI/UX</p>
        </div>
      </footer>
    </div>
  );
}