// http://localhost:5173/
// npm run dev
// because I keep forgetting

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, ArrowDown } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);

    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'contact'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      number: '01',
      title: 'Project One',
      subtitle: 'A placeholder for something beautiful',
      category: 'UI/UX · Web Design',
      year: '2026',
      tags: ['React', 'Figma', 'Design System'],
    },
    {
      id: 2,
      number: '02',
      title: 'Project Two',
      subtitle: 'Another story, waiting to be told',
      category: 'Visual Design · Branding',
      year: '2026',
      tags: ['Branding', 'Print', 'Identity'],
    },
    {
      id: 3,
      number: '03',
      title: 'Project Three',
      subtitle: 'Reserved for something that mattered',
      category: 'Creative Coding',
      year: '2025',
      tags: ['p5.js', 'Interaction', 'Generative'],
    },
    {
      id: 4,
      number: '04',
      title: 'Project Four',
      subtitle: 'A canvas, not yet painted',
      category: 'Front-End Development',
      year: '2025',
      tags: ['React', 'Animation', 'CSS'],
    },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f1611" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f1611" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: '#faf5ef', color: '#1f1611' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap');

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; margin: 0; }

        .font-display { font-family: 'Fraunces', serif; font-variation-settings: 'SOFT' 100, 'WONK' 0; }
        .font-display-italic { font-family: 'Fraunces', serif; font-style: italic; font-variation-settings: 'SOFT' 100; }
        .font-mono-fine { font-family: 'JetBrains Mono', monospace; }

        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.12 0 0 0 0 0.08 0 0 0 0 0.05 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes drawLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .anim-fadeup { animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
        .anim-fadein { animation: fadeIn 1.4s ease-out forwards; opacity: 0; }
        .anim-line { animation: drawLine 1.2s cubic-bezier(0.7, 0, 0.3, 1) forwards; transform-origin: left; transform: scaleX(0); }
        .anim-float { animation: float 4s ease-in-out infinite; }
        .anim-marquee { animation: marquee 40s linear infinite; }
        .anim-spin-slow { animation: spin 60s linear infinite; transform-origin: center; }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }
        .delay-5 { animation-delay: 0.7s; }
        .delay-6 { animation-delay: 0.85s; }
        .delay-7 { animation-delay: 1s; }

        .underline-grow {
          position: relative;
        }
        .underline-grow::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 100%; height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.5s cubic-bezier(0.7, 0, 0.3, 1);
        }
        .underline-grow:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .project-card {
          transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .project-image {
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .project-card:hover .project-image {
          transform: scale(1.04);
        }
        .project-card:hover .project-arrow {
          transform: translate(4px, -4px) rotate(0deg);
        }
        .project-arrow {
          transform: rotate(-12deg);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .cursor-glow {
          position: fixed;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(184, 115, 110, 0.12) 0%, rgba(184, 115, 110, 0) 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 1;
          transition: opacity 0.3s;
        }

        .nav-dot {
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .scroll-indicator {
          animation: float 2.4s ease-in-out infinite;
        }
      `}</style>

      {/* Cursor glow */}
      <div className="cursor-glow hidden md:block" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* Grain texture overlay */}
      <div className="fixed inset-0 grain pointer-events-none opacity-40 z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-6 flex items-center justify-between" style={{ backgroundColor: 'rgba(250, 245, 239, 0.7)', backdropFilter: 'blur(12px)' }}>
        <button onClick={() => scrollTo('home')} className="font-display text-xl tracking-tight" style={{ color: '#1f1611' }}>
          Keona<span className="font-display-italic" style={{ color: '#b8736e' }}>.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {['work', 'about', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="font-mono-fine text-xs uppercase tracking-[0.2em] flex items-center gap-2 underline-grow"
              style={{ color: activeSection === section ? '#b8736e' : '#5a4a3f' }}
            >
              <span className="nav-dot inline-block w-1 h-1 rounded-full" style={{
                backgroundColor: activeSection === section ? '#b8736e' : 'transparent',
                transform: activeSection === section ? 'scale(1)' : 'scale(0)'
              }} />
              {section}
            </button>
          ))}
        </div>

        <a href="mailto:keona.hicks@outlook.com" className="font-mono-fine text-xs uppercase tracking-[0.2em] hidden md:block underline-grow" style={{ color: '#5a4a3f' }}>
          Get in touch
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center px-8 md:px-12 pt-32 pb-24">
        {/* Top label */}
        <div className={`flex items-center gap-4 mb-12 ${loaded ? 'anim-fadein' : ''}`}>
          <span className="anim-line block h-px w-12" style={{ backgroundColor: '#1f1611' }} />
          <span className="font-mono-fine text-xs uppercase tracking-[0.3em]" style={{ color: '#5a4a3f' }}>
            Portfolio · 2026 Edition
          </span>
        </div>

        {/* Main hero — 2 column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT — Name + tagline */}
          <div className="lg:col-span-8">
            <h1 className="font-display leading-[0.85] tracking-tight" style={{ color: '#1f1611' }}>
              <span className={`block text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[10rem] ${loaded ? 'anim-fadeup delay-1' : 'opacity-0'}`}>
                Keona
              </span>
              <span className={`block text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[10rem] ${loaded ? 'anim-fadeup delay-2' : 'opacity-0'}`}>
                <span className="font-display-italic" style={{ color: '#b8736e' }}>Hicks</span>
              </span>
            </h1>

            <div className={`mt-10 max-w-xl ${loaded ? 'anim-fadeup delay-5' : 'opacity-0'}`}>
              <p className="font-display text-xl md:text-2xl leading-snug" style={{ color: '#1f1611' }}>
                Designer & developer crafting{' '}
                <span className="font-display-italic" style={{ color: '#b8736e' }}>intentional</span>
                , human-centered digital experiences at the intersection of code and creativity.
              </p>
            </div>
          </div>

          {/* RIGHT — Editorial seal */}
          <div className={`lg:col-span-4 hidden lg:flex items-center justify-center ${loaded ? 'anim-fadein delay-4' : 'opacity-0'}`}>
            <div className="anim-float relative">
              <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
                {/* Outer dotted ring (slowly rotating) */}
                <g className="anim-spin-slow" style={{ transformOrigin: '160px 160px' }}>
                  <circle cx="160" cy="160" r="158" stroke="#b8736e" strokeWidth="0.5" strokeDasharray="2 4" />
                </g>
                {/* Mid solid ring */}
                <circle cx="160" cy="160" r="120" stroke="#b8736e" strokeWidth="0.5" />
                {/* Inner dotted ring */}
                <circle cx="160" cy="160" r="82" stroke="#b8736e" strokeWidth="0.3" strokeDasharray="1 3" />
                {/* Center dot */}
                <circle cx="160" cy="160" r="2" fill="#b8736e" />

                {/* Curved text — top */}
                <defs>
                  <path id="ring-top" d="M 50 160 A 110 110 0 0 1 270 160" />
                </defs>
                <text fill="#5a4a3f" fontSize="8.5" fontFamily="JetBrains Mono" letterSpacing="4">
                  <textPath href="#ring-top" startOffset="50%" textAnchor="middle">DESIGN · DEVELOP · CREATE</textPath>
                </text>

                {/* Bottom plain text */}
                <text x="160" y="252" textAnchor="middle" fill="#5a4a3f" fontSize="8.5" fontFamily="JetBrains Mono" letterSpacing="4">EST · MMXXVI</text>

                {/* Side flourishes */}
                <text x="50" y="164" textAnchor="middle" fill="#b8736e" fontSize="14" fontFamily="serif">✦</text>
                <text x="270" y="164" textAnchor="middle" fill="#b8736e" fontSize="14" fontFamily="serif">✦</text>

                {/* Center monogram K */}
                <text x="160" y="182" textAnchor="middle" fill="#1f1611" fontSize="64" fontFamily="Fraunces, serif" fontStyle="italic" fontWeight="400">K</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Meta info row */}
        <div className={`mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl ${loaded ? 'anim-fadeup delay-6' : 'opacity-0'}`}>
          {[
            { label: 'Based in', value: 'Hoboken / Germany' },
            { label: 'Studying', value: 'CS @ Stevens Institute of Technology' },
            { label: 'Focus', value: 'UI/UX · Front-End' },
            { label: 'Status', value: 'Open to work' },
          ].map((item, i) => (
            <div key={i}>
              <div className="font-mono-fine text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: '#a08968' }}>
                {item.label}
              </div>
              <div className="font-display text-base" style={{ color: '#1f1611' }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${loaded ? 'anim-fadein delay-7' : 'opacity-0'}`}>
          <div className="scroll-indicator flex flex-col items-center gap-2">
            <span className="font-mono-fine text-[10px] uppercase tracking-[0.3em]" style={{ color: '#5a4a3f' }}>
              Scroll
            </span>
            <ArrowDown size={14} style={{ color: '#5a4a3f' }} />
          </div>
        </div>
      </section>

      {/* MARQUEE DIVIDER */}
      <div className="relative py-8 overflow-hidden border-y" style={{ borderColor: '#e8dcd0' }}>
        <div className="anim-marquee flex whitespace-nowrap">
          {Array(2).fill(null).map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 px-6">
              {['UI/UX Design', 'Front-End Dev', 'Visual Identity', 'Creative Coding', 'Design Systems', 'Web Animation'].map((item, i) => (
                <React.Fragment key={i}>
                  <span className="font-display-italic text-3xl md:text-5xl" style={{ color: '#1f1611' }}>{item}</span>
                  <span className="font-display text-3xl md:text-5xl" style={{ color: '#b8736e' }}>✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work" className="relative px-8 md:px-12 py-24 md:py-32">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono-fine text-xs uppercase tracking-[0.3em]" style={{ color: '#a08968' }}>
                01 — Selected Work
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]" style={{ color: '#1f1611' }}>
              Things I've{' '}
              <span className="font-display-italic" style={{ color: '#b8736e' }}>made</span>
            </h2>
          </div>
          <div className="hidden md:block max-w-xs">
            <p className="font-mono-fine text-xs leading-relaxed" style={{ color: '#5a4a3f' }}>
              A growing collection of projects spanning interface design, front-end development, and creative experiments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
          {projects.map((project, idx) => (
            <a
              key={project.id}
              href="#"
              className={`project-card group block ${idx % 2 === 1 ? 'md:mt-24' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden" style={{ backgroundColor: '#f4e4dc' }}>
                <div className="project-image absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0" style={{
                    background: `linear-gradient(135deg, #f4e4dc 0%, #ebd4c8 50%, #e0c4b6 100%)`
                  }} />
                  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 500" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`p-${project.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="1" fill="#b8736e" />
                      </pattern>
                    </defs>
                    <rect width="400" height="500" fill={`url(#p-${project.id})`} />
                  </svg>
                  <div className="relative z-10 text-center px-8">
                    <div className="font-display-italic text-6xl md:text-7xl mb-4" style={{ color: '#b8736e' }}>
                      {project.number}
                    </div>
                    <div className="font-mono-fine text-[10px] uppercase tracking-[0.3em]" style={{ color: '#5a4a3f' }}>
                      Preview · Coming Soon
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 z-20" style={{ backgroundColor: 'rgba(250, 245, 239, 0.9)', backdropFilter: 'blur(8px)' }}>
                  <span className="font-mono-fine text-[10px] uppercase tracking-[0.2em]" style={{ color: '#1f1611' }}>
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="font-display text-3xl md:text-4xl leading-tight mb-2" style={{ color: '#1f1611' }}>
                    {project.title}
                  </h3>
                  <p className="font-display-italic text-lg mb-4" style={{ color: '#5a4a3f' }}>
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="font-mono-fine text-[10px] uppercase tracking-[0.2em] px-2 py-1" style={{ color: '#5a4a3f', backgroundColor: '#f0e4d8' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-arrow shrink-0 mt-2">
                  <ArrowUpRight size={28} style={{ color: '#1f1611' }} strokeWidth={1.2} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-24 text-center">
          <span className="font-display-italic text-2xl md:text-3xl" style={{ color: '#5a4a3f' }}>
            More work coming soon
          </span>
          <span className="font-display text-2xl md:text-3xl ml-2" style={{ color: '#b8736e' }}>—</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-8 md:px-12 py-24 md:py-32" style={{ backgroundColor: '#f4e4dc' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono-fine text-xs uppercase tracking-[0.3em]" style={{ color: '#a08968' }}>
                02 — About
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-8" style={{ color: '#1f1611' }}>
              A little{' '}
              <span className="font-display-italic" style={{ color: '#b8736e' }}>about me</span>
            </h2>

            <div className="relative aspect-[3/4] max-w-sm" style={{ backgroundColor: '#ebd4c8' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display-italic text-2xl" style={{ color: '#5a4a3f' }}>portrait</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border" style={{ borderColor: '#b8736e' }} />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-8">
            <p className="font-display text-2xl md:text-3xl leading-snug" style={{ color: '#1f1611' }}>
              I'm a Computer Science student at Stevens Institute of Technology with a Visual Arts & Technology minor, drawn to the in-between space where design thinking meets working code.
            </p>

            <div className="space-y-6 font-display text-lg leading-relaxed" style={{ color: '#3a2e26' }}>
              <p>
                My favorite kind of work lives at the intersection of clean interfaces, thoughtful interactions, and a little bit of personality. I care about details — the way a button feels when you hover, the rhythm of typography, the breath between sections.
              </p>
              <p>
                Outside of design, I'm usually painting dolls, writing fiction, or planning my next cosplay build. I split my time between the East Coast and Germany.
              </p>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: '#d4b9a8' }}>
              <div className="font-mono-fine text-xs uppercase tracking-[0.3em] mb-6" style={{ color: '#a08968' }}>
                Toolkit
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {[
                  'React · Next.js',
                  'Figma',
                  'HTML · CSS · JS',
                  'Adobe Suite',
                  'Node.js',
                  'p5.js · Processing',
                  'Git · GitHub',
                  'Ren\'Py',
                ].map((skill, i) => (
                  <div key={i} className="font-display text-base flex items-center gap-2" style={{ color: '#1f1611' }}>
                    <span style={{ color: '#b8736e' }}>—</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-8 md:px-12 py-24 md:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="font-mono-fine text-xs uppercase tracking-[0.3em]" style={{ color: '#a08968' }}>
              03 — Get in Touch
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-8xl leading-[0.9] mb-12" style={{ color: '#1f1611' }}>
            Let's make{' '}
            <span className="font-display-italic" style={{ color: '#b8736e' }}>something</span>
            <br />
            together.
          </h2>

          <a
            href="mailto:keona.hicks@outlook.com"
            className="inline-block font-display text-3xl md:text-5xl underline-grow mb-16"
            style={{ color: '#1f1611' }}
          >
            keona.hicks@outlook.com
          </a>

          <div className="flex items-center justify-center gap-8 mt-8">
            {[
              {
                label: 'Email',
                href: 'mailto:keona.hicks@outlook.com',
                icon: <Mail size={18} style={{ color: '#1f1611' }} strokeWidth={1.4} />
              },
              {
                label: 'GitHub',
                href: '#',
                icon: <GitHubIcon />
              },
              {
                label: 'LinkedIn',
                href: '#',
                icon: <LinkedInIcon />
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: '#f4e4dc' }}>
                  {social.icon}
                </div>
                <span className="font-mono-fine text-[10px] uppercase tracking-[0.25em]" style={{ color: '#5a4a3f' }}>
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative px-8 md:px-12 py-12 border-t" style={{ borderColor: '#e8dcd0' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono-fine text-[10px] uppercase tracking-[0.3em]" style={{ color: '#5a4a3f' }}>
            © 2026 Keona Hicks — Designed & built with care
          </div>
          <div className="font-mono-fine text-[10px] uppercase tracking-[0.3em]" style={{ color: '#5a4a3f' }}>
            Hoboken, NJ
          </div>
        </div>
      </footer>
    </div>
  );
}