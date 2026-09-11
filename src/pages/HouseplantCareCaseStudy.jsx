import React from "react";
import { Link } from "react-router-dom";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

:root {
  --paper: #EAF1E1;
  --paper-2: #E1EBD4;
  --ink: #26311E;
  --ink-soft: #566B49;
  --green: #6E9E57;
  --green-deep: #4E7A3C;
  --rule: rgba(38,49,30,0.15);
}

* { box-sizing: border-box; }

.hp-root {
  min-height: 100vh; display: flex; flex-direction: column;
  background: var(--paper); color: var(--ink);
  font-family: 'Hanken Grotesk', system-ui, sans-serif;
  font-size: 17px; line-height: 1.6; -webkit-font-smoothing: antialiased;
}
.hp-root ::selection { background: var(--green); color: #fff; }

.hp-wrap { max-width: 1080px; margin: 0 auto; padding: 0 28px; width: 100%; }

/* ---- nav ---- */
.hp-nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(234,241,225,0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--rule);
}
.hp-nav-inner { display: flex; align-items: center; justify-content: space-between; height: 60px; }
.hp-nav-name { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; letter-spacing: -0.01em; }
.hp-nav-name span { color: var(--green); }
.hp-nav-link { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-soft); text-decoration: none; }
.hp-nav-link:hover { color: var(--green); }

/* ---- centered WIP block ---- */
.hp-main { flex: 1; display: flex; align-items: center; justify-content: center; text-align: center; padding: 80px 28px; }
.hp-sprout { display: block; margin: 0 auto 30px; color: var(--green); }
.hp-badge {
  display: inline-block; font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--green-deep); border: 1px solid var(--green);
  border-radius: 999px; padding: 5px 14px; margin-bottom: 28px;
}
.hp-h1 {
  font-family: 'Fraunces', serif; font-weight: 500;
  font-size: clamp(44px, 9vw, 84px); line-height: 1.0; letter-spacing: -0.03em; margin: 0 0 18px;
}
.hp-h1 em { font-style: italic; color: var(--green); }
.hp-sub { font-size: clamp(16px, 2vw, 19px); color: var(--ink-soft); max-width: 44ch; margin: 0 auto; }

/* ---- footer ---- */
.hp-footer { border-top: 1px solid var(--rule); padding: 60px 0 80px; text-align: center; }
.hp-footer-sub { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft); }
`;

export default function HouseplantCareCaseStudy() {
  return (
    <div className="hp-root">
      <style>{STYLES}</style>

      {/* NAV */}
      <nav className="hp-nav">
        <div className="hp-wrap hp-nav-inner">
          <div className="hp-nav-name">Keona Hicks<span>.</span></div>
          <Link className="hp-nav-link" to="/">&larr; All work</Link>
        </div>
      </nav>

      {/* WIP */}
      <main className="hp-main">
        <div>
          <svg className="hp-sprout" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22V10" />
            <path d="M12 14c0-3.3 2.7-6 6-6 0 3.3-2.7 6-6 6z" />
            <path d="M12 12c0-2.8-2.2-5-5-5 0 2.8 2.2 5 5 5z" />
          </svg>
          <div className="hp-badge">Houseplant care app</div>
          <h1 className="hp-h1">Work in <em>progress.</em></h1>
          <p className="hp-sub">This case study is still being put together. Check back soon to see the full thing.</p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="hp-footer">
        <div className="hp-wrap">
          <p className="hp-footer-sub">Keona Hicks &middot; UI/UX Design</p>
        </div>
      </footer>
    </div>
  );
}