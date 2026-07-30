import React from "react";
import { Link } from "react-router-dom";
import onboardingImg from "../assets/flashclash/onboarding.png";
import dashboardImg from "../assets/flashclash/dashboard.png";
import createEditDeckImg from "../assets/flashclash/create-edit-deck.png";
import studyModeImg from "../assets/flashclash/study-mode.png";
import quizModeImg from "../assets/flashclash/quiz-mode.png";
import aiQuizImg from "../assets/flashclash/ai-quiz.png";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

:root {
  --paper: #FBF4ED;
  --paper-2: #F4E9DE;
  --ink: #2C211B;
  --ink-soft: #6E5D51;
  --coral: #EE6C3A;
  --coral-deep: #C64E22;
  --peach-panel: #FBE5D6;
  --blush: #D98AA0;
  --rule: rgba(44,33,27,0.13);
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
.cs-root ::selection { background: var(--coral); color: #fff; }

.cs-wrap { max-width: 1080px; margin: 0 auto; padding: 0 28px; }

/* ---- nav ---- */
.cs-nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(251,244,237,0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--rule);
}
.cs-nav-inner { display: flex; align-items: center; justify-content: space-between; height: 60px; }
.cs-nav-name { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; letter-spacing: -0.01em; }
.cs-nav-name span { color: var(--blush); }
.cs-nav-link { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-soft); text-decoration: none; }
.cs-nav-link:hover { color: var(--coral); }

/* ---- shared section ---- */
.cs-section { padding: 92px 0; border-top: 1px solid var(--rule); }
.cs-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--coral); margin: 0 0 22px 0; display: flex; align-items: center; gap: 12px;
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
.cs-body em { font-style: italic; color: var(--coral-deep); }

/* center modifiers */
.cs-eyebrow.center { justify-content: center; }
.cs-h2.center { text-align: center; margin-left: auto; margin-right: auto; }
.cs-body.center { text-align: center; margin-left: auto; margin-right: auto; max-width: 62ch; }

/* ---- hero ---- */
.cs-hero { padding: 70px 0 64px; position: relative; text-align: center; }
.cs-hero-eyebrow { font-family: 'Space Mono', monospace; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--coral); margin-bottom: 26px; }
.cs-hero-h1 {
  font-family: 'Fraunces', serif; font-weight: 500;
  font-size: clamp(48px, 9vw, 104px); line-height: 0.98; letter-spacing: -0.035em;
  margin: 0 auto 28px; max-width: 16ch;
}
.cs-hero-h1 span { color: var(--blush); }
.cs-hero-sub { font-size: clamp(17px, 2.1vw, 21px); color: var(--ink-soft); max-width: 58ch; margin: 0 auto 40px; }
.cs-hero-sub em { font-style: italic; color: var(--coral-deep); }

.cs-chips { display: flex; flex-wrap: wrap; gap: 24px 48px; align-items: flex-start; justify-content: center; }
.cs-chip-label { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 8px; min-height: 14px; }
.cs-chip-val { font-family: 'Fraunces', serif; font-size: 19px; font-weight: 600; line-height: 1.15; }

/* CTA */
.cs-cta-wrap { margin: 2px 0 12px; }
.cs-cta {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'Space Mono', monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;
  background: var(--coral); color: #fff; border-radius: 999px; padding: 14px 26px; text-decoration: none;
  transition: background .2s, transform .2s, box-shadow .2s;
  box-shadow: 0 12px 28px -14px rgba(238,108,58,0.7);
}
.cs-cta:hover { background: var(--coral-deep); transform: translateY(-2px); box-shadow: 0 16px 34px -14px rgba(238,108,58,0.85); }
.cs-cta:focus-visible { outline: 3px solid var(--blush); outline-offset: 3px; }
.cs-cta.ghost { background: transparent; color: var(--coral-deep); border: 1px solid var(--coral); box-shadow: none; }
.cs-cta.ghost:hover { background: var(--peach-panel); transform: translateY(-2px); }
.cs-cta .arr { font-family: 'Fraunces', serif; font-size: 17px; line-height: 0; }

/* ---- screenshot frame ---- */
.cs-hero-shot { margin: 52px 0 0; }
.cs-shot {
  border-radius: 18px; overflow: hidden; border: 1px solid var(--rule);
  box-shadow: 0 30px 70px -42px rgba(120,60,30,0.5); background: var(--peach-panel);
}
.cs-shot img { width: 100%; display: block; }
.cs-shot-ph {
  aspect-ratio: 16 / 10; display: flex; align-items: center; justify-content: center;
  color: var(--coral); font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.04em;
  text-align: center; padding: 24px;
}
.cs-shot-cap { font-family: 'Space Mono', monospace; font-size: 12px; color: var(--ink-soft); text-align: center; margin-top: 14px; letter-spacing: 0.03em; }
.cs-swap-note { font-family: 'Space Mono', monospace; font-size: 11px; color: var(--ink-soft); text-align: center; margin-top: 28px; opacity: 0.8; }

/* shots stack */
.cs-shots { display: flex; flex-direction: column; gap: 44px; margin-top: 10px; }

/* ---- overview meta ---- */
.cs-meta { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border-top: 1px solid var(--rule); }
@media (max-width: 640px){ .cs-meta { grid-template-columns: 1fr; } }
.cs-meta-row { padding: 20px 4px; border-bottom: 1px solid var(--rule); }
.cs-meta-row:nth-child(odd) { padding-right: 28px; }
.cs-meta-k { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--coral); margin-bottom: 7px; }
.cs-meta-v { font-size: 16px; }
.cs-role-note {
  margin-top: 34px; padding: 24px 26px; background: var(--paper-2);
  border-left: 3px solid var(--blush); border-radius: 0 10px 10px 0; max-width: 72ch;
}
.cs-role-note p { margin: 0 0 14px; }
.cs-role-note p:last-child { margin-bottom: 0; }
.cs-role-note b { font-family: 'Fraunces', serif; }

/* ---- principles / decisions ---- */
.cs-princ { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 8px; }
@media (max-width: 720px){ .cs-princ { grid-template-columns: 1fr; } }
.cs-princ-card { padding: 28px 24px; background: var(--paper-2); border-radius: 14px; }
.cs-princ-tag { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--blush); margin-bottom: 14px; }
.cs-princ-h { font-family: 'Fraunces', serif; font-weight: 600; font-size: 20px; line-height: 1.2; margin: 0 0 12px; }
.cs-princ-card p { margin: 0; font-size: 15px; color: var(--ink-soft); }

/* ---- sprint cycle ---- */
.cs-cycle { display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; margin: 36px 0 0; }
.cs-cycle-step {
  background: var(--peach-panel); border: 1px solid var(--rule); border-radius: 999px;
  padding: 13px 24px; font-family: 'Fraunces', serif; font-weight: 600; font-size: 16px; color: var(--coral-deep);
}
.cs-cycle-arr { color: var(--blush); font-family: 'Fraunces', serif; font-size: 22px; line-height: 0; }

/* ---- revive callout ---- */
.cs-revive {
  background: var(--peach-panel); border-radius: 18px; padding: 44px 40px; max-width: 78ch; margin: 0 auto;
}
@media (max-width: 640px){ .cs-revive { padding: 32px 26px; } }

/* ---- reflection ---- */
.cs-reflect { display: grid; grid-template-columns: 1fr 1fr; gap: 30px 50px; margin-top: 8px; }
@media (max-width: 720px){ .cs-reflect { grid-template-columns: 1fr; } }
.cs-reflect h3 { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; margin: 0 0 8px; }
.cs-reflect p { margin: 0; color: var(--ink-soft); font-size: 16px; }

/* ---- links row ---- */
.cs-links { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 40px; }

/* ---- footer ---- */
.cs-footer { border-top: 1px solid var(--rule); padding: 60px 0 80px; text-align: center; }
.cs-footer-h { font-family: 'Fraunces', serif; font-size: clamp(24px, 4vw, 36px); font-weight: 500; margin: 0 0 10px; letter-spacing: -0.02em; }
.cs-footer-h em { font-style: italic; color: var(--coral); }
.cs-footer-sub { font-family: 'Space Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft); }

@media (prefers-reduced-motion: reduce) {
  .cs-cta { transition: none; }
}
`;

// Screenshot frame
function Shot({ src, alt, caption }) {
  return (
    <figure style={{ margin: 0 }}>
      <div className="cs-shot">
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <div className="cs-shot-ph">drop screenshot here</div>
        )}
      </div>
      {caption && <figcaption className="cs-shot-cap">{caption}</figcaption>}
    </figure>
  );
}

export default function QuizletCaseStudy() {
  const DEMO_URL = "https://youtu.be/J51SVIgIfyk";
  const REPO_URL = "https://github.com/RoyalxSapphire/cs554-final-project";

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
        <div className="cs-hero-eyebrow">Case Study / UI/UX &amp; Front-End</div>
        <h1 className="cs-hero-h1">FlashClash<span>.</span></h1>
        <p className="cs-hero-sub">
          A flashcard and quiz study platform, designed to be simple to use and easy to move through.
        </p>

        <div className="cs-cta-wrap">
          <a className="cs-cta" href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            View the demo <span className="arr">↗</span>
          </a>
        </div>

        <div className="cs-chips" style={{ marginTop: 36 }}>
          <div className="cs-chip">
            <div className="cs-chip-label">Role</div>
            <div className="cs-chip-val">UI/UX Designer &amp; Front-End</div>
          </div>
          <div className="cs-chip">
            <div className="cs-chip-label">Team</div>
            <div className="cs-chip-val">4 members</div>
          </div>
          <div className="cs-chip">
            <div className="cs-chip-label">Stack</div>
            <div className="cs-chip-val">Next.js · React · MongoDB</div>
          </div>
          <div className="cs-chip">
            <div className="cs-chip-label">Context</div>
            <div className="cs-chip-val">Web Dev II — academic</div>
          </div>
        </div>

        {/* hero shot */}
        <div className="cs-hero-shot">
          <Shot src={dashboardImg} alt="FlashClash dashboard" caption="FlashClash — dashboard" />
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow">Overview</div>
          <div className="cs-meta">
            <div className="cs-meta-row"><div className="cs-meta-k">What I owned</div><div className="cs-meta-v">The design and layout of every page, plus the front-end build of the UI</div></div>
            <div className="cs-meta-row"><div className="cs-meta-k">Team</div><div className="cs-meta-v">4 members · I led the UI/UX</div></div>
            <div className="cs-meta-row"><div className="cs-meta-k">Stack</div><div className="cs-meta-v">Next.js · React · MongoDB</div></div>
            <div className="cs-meta-row"><div className="cs-meta-k">Context</div><div className="cs-meta-v">Web Dev II · semester-long group project</div></div>
          </div>
          <div className="cs-role-note">
            <p>
              <b>What I did on the team.</b> In a group of four, I handled the design and layout of every page,
              along with the front-end code for the UI. I decided how each screen looked, where things went, and
              how a user moved from one page to the next.
            </p>
            <p>
              To be clear about the split: my teammates built most of the backend and data layer. My part was
              the side a user actually sees and clicks, and that's what this case study covers.
            </p>
          </div>
        </div>
      </section>

      {/* THE DECISION / WARMTH */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow">The decision that set the tone</div>
          <h2 className="cs-h2">Warmth, on purpose.</h2>
          <div className="cs-body">
            <p>
              I wanted FlashClash to feel warm and approachable instead of clinical. Studying is tiring enough
              on its own, so I didn't want the interface adding to it.
            </p>
            <p>
              That's why I built the identity around orange. It reads as friendly and inviting, and I used it
              from the first screen onward to keep that feeling consistent across the app.
            </p>
          </div>
        </div>
      </section>

      {/* THE BRIEF */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow">The brief</div>
          <h2 className="cs-h2">What we set out to build.</h2>
          <div className="cs-body">
            <p>
              FlashClash was a semester-long group project for Web Dev II. It's a full-stack study platform
              where you create flashcard decks, turn them into quizzes, study with progress tracking, and
              generate a quiz automatically from a deck. The goal was Quizlet-level features without the clutter.
            </p>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow">Design process</div>
          <h2 className="cs-h2">The decisions behind the screens.</h2>
          <div className="cs-princ">
            <div className="cs-princ-card">
              <div className="cs-princ-tag">Simplicity</div>
              <h3 className="cs-princ-h">Familiar, but lighter</h3>
              <p>
                People already know how a study app works, so I kept the basic model the same (decks, quizzes,
                study mode) but cut the layout down. Fewer competing elements, more space, and one clear action
                per screen so users don't have to hunt for what to do next.
              </p>
            </div>
            <div className="cs-princ-card">
              <div className="cs-princ-tag">Consistency</div>
              <h3 className="cs-princ-h">One pattern, reused</h3>
              <p>
                I built the Create Quiz flow to match the Create Deck flow: same layout, same fields, same
                button placement. Once you've done one, you already know how to do the other, which makes the
                app quicker to learn.
              </p>
            </div>
            <div className="cs-princ-card">
              <div className="cs-princ-tag">Hierarchy</div>
              <h3 className="cs-princ-h">Guiding the eye</h3>
              <p>
                I used spacing and a clear primary action on every page, and kept the orange for the things I
                actually wanted people to click. Color does some of the navigating for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY SCREENS */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow">The interface</div>
          <h2 className="cs-h2">Key screens.</h2>
          <p className="cs-lead" style={{ marginBottom: 44 }}>
            A walk through the app, from first sign-in to daily use.
          </p>

          <div className="cs-shots">
            <Shot src={onboardingImg} alt="FlashClash onboarding screen" caption="Onboarding — a simple, friendly welcome" />
            <Shot src={dashboardImg} alt="FlashClash dashboard" caption="Dashboard — decks and quizzes at a glance" />
            <Shot src={createEditDeckImg} alt="Create and edit deck screen" caption="Create and edit a deck — one consistent pattern" />
            <Shot src={studyModeImg} alt="FlashClash study mode" caption="Study mode — flip through your cards" />
            <Shot src={quizModeImg} alt="FlashClash quiz mode" caption="Quiz mode — test what you've learned" />
            <Shot src={aiQuizImg} alt="AI-assisted quiz generation" caption="AI quiz generation — turn a deck into a quiz automatically" />
          </div>
        </div>
      </section>

      {/* THE CHALLENGE / SPRINTS */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow">Working as a team</div>
          <h2 className="cs-h2">Four people, one deadline.</h2>
          <div className="cs-body">
            <p>
              The hardest part wasn't the design, it was the coordination. Getting four students with different
              schedules to split the work fairly and finish their pieces on time was tough, especially when one
              unfinished part could hold up everyone else.
            </p>
            <p>
              That's where sprints came in. Instead of treating the project as one big deadline, we broke it
              into short cycles: plan what to tackle, build it, check in, repeat. Each cycle had clear goals and
              an end date, so it was obvious early when something was falling behind. It was the first time I
              really got why teams work this way.
            </p>
          </div>

          <div className="cs-cycle">
            <span className="cs-cycle-step">Plan</span>
            <span className="cs-cycle-arr">→</span>
            <span className="cs-cycle-step">Build</span>
            <span className="cs-cycle-arr">→</span>
            <span className="cs-cycle-step">Check in</span>
            <span className="cs-cycle-arr">↻</span>
            <span className="cs-cycle-step">Repeat</span>
          </div>
        </div>
      </section>

      {/* BEYOND THE GRADE */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-revive">
            <div className="cs-eyebrow">Beyond the grade</div>
            <h2 className="cs-h2">Bringing it back to life.</h2>
            <div className="cs-body">
              <p>
                More than a year after the class ended, I came back to FlashClash to turn it into a portfolio
                piece and found it was broken. The dependencies were out of date, login didn't work, and the
                onboarding form crashed before you could even type your name.
              </p>
              <p>
                I traced the crash to a profile-picture default that failed during server rendering, fixed it,
                set up the auth and database services again, and got the whole thing running. I think that's
                worth showing: <em>I can get into the code and make the thing actually work, not just hand off a
                design.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="cs-section">
        <div className="cs-wrap">
          <div className="cs-eyebrow">What I learned</div>
          <h2 className="cs-h2">What I'd take forward.</h2>
          <div className="cs-reflect">
            <div>
              <h3>The feel was mine.</h3>
              <p>FlashClash is a real, working full-stack app, and the way it looks and feels came from my design calls. I'm proud of that.</p>
            </div>
            <div>
              <h3>Loading states matter.</h3>
              <p>The app can feel slow on a first action because there's no feedback while it works. Next time I'd spend more time on loading and empty states so the user always knows something's happening.</p>
            </div>
            <div>
              <h3>Make the AI clearer.</h3>
              <p>The AI quiz generation works, but the user is left staring at a button while it runs. I'd add clearer status so it's obvious the app is doing something.</p>
            </div>
            <div>
              <h3>Sprints stuck with me.</h3>
              <p>Breaking a big build into short cycles is the habit I've carried into projects since.</p>
            </div>
          </div>

          <div className="cs-links">
            <a className="cs-cta" href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              View the demo <span className="arr">↗</span>
            </a>
            <a className="cs-cta ghost" href={REPO_URL} target="_blank" rel="noopener noreferrer">
              GitHub repo <span className="arr">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cs-footer">
        <div className="cs-wrap">
          <p className="cs-footer-h">Built for warmth, <em>made</em> to work.</p>
          <p className="cs-footer-sub">Keona Hicks · UI/UX Design</p>
        </div>
      </footer>
    </div>
  );
}