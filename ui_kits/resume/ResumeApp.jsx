// Łukasz Rej — Resume App v2
// Visual direction: Terminal dark · Lime accent · Creative developer

const { useState, useEffect } = React;

// ── Design tokens ─────────────────────────────────────────────────────────────
const T = {
  dark: {
    bg:           '#0a0a0a',
    surface:      '#111111',
    border:       '#222222',
    muted:        '#333333',
    dimText:      '#525252',
    text:         '#c8c8c8',
    strong:       '#f0f0f0',
    accent:       '#818cf8',
    accentAlt:    '#818cf8',
    accentDim:    'rgba(129,140,248,0.10)',
    accentAltDim: 'rgba(129,140,248,0.10)',
  },
  light: {
    bg:           '#f9f9f7',
    surface:      '#ffffff',
    border:       '#e2e2e2',
    muted:        '#f0f0f0',
    dimText:      '#999999',
    text:         '#444444',
    strong:       '#141414',
    accent:       '#a3e635',
    accentAlt:    '#3d6b0a',
    accentDim:    'rgba(163,230,53,0.08)',
    accentAltDim: 'rgba(61,107,10,0.08)',
  },
};

function useWindowWidth() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return w;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const PROFILE = {
  name:     'Łukasz Rej',
  role:     'Frontend Developer',
  wordmark: 'lukasz.rej',
  location: 'Poland',
  email:    'rejlukasz@gmail.com',
  github:   'https://github.com/lukaszrej',
  linkedin: 'https://www.linkedin.com/in/lukasz-rej/',
  about: 'Frontend developer focused on building scalable web applications with React and TypeScript. Experienced in clean, maintainable architectures and managing complex products, from greenfield projects to legacy refactoring. Committed to code quality, performance, and developer experience, following SOLID and Clean Code principles. Delivered commercial solutions for clients in Germany, Denmark, and Poland.',
};

const EXPERIENCES = [
  { company:'Vaillant Group', title:'Frontend React.js Developer', period:'03.2023 – present', current:true,
    description:'Developed a React.js loyalty app for installers from the ground up.',
    skills:['TypeScript','React.js','Material UI','Emotion','Tanstack Query','Tanstack Router','React Hook Form','Vite','RTL','Vitest'] },
  { company:'SNI Group', title:'React.js Developer with German', period:'10.2022 – 02.2023', current:false,
    description:'Contributed to a project for a major German public institution.',
    skills:['TypeScript','React.js','GraphQL','Apollo Client','AntDesign','React Testing Library'] },
  { company:'Qualent Software', title:'React.js Developer', period:'03.2021 – 10.2022', current:false,
    description:'Developed a React.js app for renting construction machinery. Participated in a Next.js CMS migration from Prismic to Strapi.',
    skills:['React.js','JavaScript','Redux','GraphQL','Apollo Client','Styled Components','Next.js','Strapi','AWS'] },
  { company:'Agora S.A.', title:'React.js Frontend Developer', period:'08.2020 – 03.2021', current:false,
    description:'Led development of a React.js-based ad reservation app. Developed and maintained ad display logic including new ad templates.',
    skills:['TypeScript','React.js','Redux','Styled Components','Material UI','REST API','HTML5','CSS3'] },
  { company:'Miinto Group', title:'Junior Frontend Developer', period:'12.2019 – 05.2020', current:false,
    description:'Contributed to the Miinto e-commerce platform and helped build an internal React.js component library.',
    skills:['React.js','JavaScript','SCSS','HTML5','CSS3','jQuery','Bootstrap'] },
];

const EDUCATION = [
  { institution:'CodersLab IT School', title:'JavaScript Developer – React.js', period:'10.2018 – 06.2019', description:null,
    skills:['React.js','JavaScript (ES6+)','UI/UX Foundation','GitHub'] },
  { institution:'University of Lodz', title:'International Relations', period:'10.2007 – 06.2012', description:'Specialization: German studies',
    skills:['English','German'] },
];

const DEVICONS = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
const TECH_STACK = [
  { name:'TypeScript',  icon:'typescript/typescript-original.svg' },
  { name:'JavaScript',  icon:'javascript/javascript-original.svg' },
  { name:'React',       icon:'react/react-original.svg' },
  { name:'Next.js',     icon:'nextjs/nextjs-original.svg' },
  { name:'React Query', icon:'react/react-original.svg' },
  { name:'Material UI', icon:'materialui/materialui-original.svg' },
  { name:'Redux',       icon:'redux/redux-original.svg' },
  { name:'HTML5',       icon:'html5/html5-original.svg' },
  { name:'CSS3',        icon:'css3/css3-original.svg' },
  { name:'Astro.js',   icon:'astro/astro-original.svg' },
  { name:'Tailwind',   icon:'tailwindcss/tailwindcss-original.svg' },
  { name:'Node.js',    icon:'nodejs/nodejs-original.svg' },
  { name:'Nest.js',    icon:'nestjs/nestjs-original.svg' },
  { name:'GraphQL',    icon:'graphql/graphql-plain.svg' },
  { name:'PostgreSQL', icon:'postgresql/postgresql-original.svg' },
  { name:'Git',        icon:'git/git-original.svg' },
  { name:'Vite',       icon:'vitejs/vitejs-original.svg' },
  { name:'Docker',     icon:'docker/docker-original.svg' },
  { name:'Figma',      icon:'figma/figma-original.svg' },
  { name:'Prisma',     icon:'prisma/prisma-original.svg' },
  { name:'NPM',        icon:'npm/npm-original-wordmark.svg' },
  { name:'shadcn/ui',  icon:null },
  { name:'Motion',     icon:null },
  { name:'Vitest',     icon:'vitejs/vitejs-original.svg' },
];

// ── Icons ─────────────────────────────────────────────────────────────────────
function GitHubIcon()   { return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>; }
function LinkedInIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>; }
function SunIcon()      { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>; }
function MoonIcon()     { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>; }
function MailIcon()     { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>; }

// ── Primitives ────────────────────────────────────────────────────────────────
function DashedLine({ t }) {
  return (
    <div style={{ position:'relative', height:'1px', flexShrink:0 }}>
      <div style={{ position:'absolute', top:0, left:'-100vw', width:'300vw', borderTop:`1px dashed ${t.border}` }} />
    </div>
  );
}

function SkillBadge({ children, t }) {
  const [hov, setHov] = useState(false);
  return (
    <span onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      display:'inline-flex', alignItems:'center',
      fontFamily:'var(--font-sans)', fontSize:'0.6875rem', fontWeight:500,
      padding:'2px 8px', borderRadius:'4px',
      border:`1px dashed ${hov ? t.accentAlt : t.border}`,
      color: hov ? t.accentAlt : t.text,
      background: hov ? t.accentAltDim : 'transparent',
      whiteSpace:'nowrap', lineHeight:1.4,
      transition:'color 120ms, border-color 120ms, background 120ms',
      cursor:'default',
    }}>
      {children}
    </span>
  );
}

function IconBtn({ href, onClick, title, t, children }) {
  const [hov, setHov] = useState(false);
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} target={href ? '_blank' : undefined} rel={href ? 'noopener noreferrer' : undefined}
      onClick={onClick} title={title}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display:'inline-flex', alignItems:'center', justifyContent:'center',
        width:'34px', height:'34px',
        border:`1px dashed ${hov ? t.accentAlt : t.border}`,
        borderRadius:'6px',
        color: hov ? t.accentAlt : t.dimText,
        background: hov ? t.accentAltDim : 'transparent',
        transition:'all 150ms', cursor:'pointer', textDecoration:'none', flexShrink:0,
      }}>
      {children}
    </Tag>
  );
}

// ── Section title with counter ────────────────────────────────────────────────
function SectionTitle({ n, children, t }) {
  return (
    <div style={{ padding:'28px 0 0' }}>
      <div style={{ display:'flex', alignItems:'baseline', gap:'10px', marginBottom:'16px' }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.6875rem', fontWeight:600, color:t.accentAlt, letterSpacing:'0.05em', flexShrink:0 }}>
          {n.toString().padStart(2,'0')} /
        </span>
        <h2 style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'0.75rem', letterSpacing:'0.12em', textTransform:'uppercase', color:t.dimText, margin:0 }}>
          {children}
        </h2>
      </div>
      <DashedLine t={t} />
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
function Header({ dark, onToggle, t }) {
  return (
    <div>
      <header style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        maxWidth:'720px', margin:'0 auto', padding:'0 clamp(16px,4vw,24px)', height:'56px',
      }}>
        <span style={{ fontFamily:'var(--font-mono)', fontWeight:600, fontSize:'0.875rem', letterSpacing:'-0.01em', color:t.strong, userSelect:'none' }}>
          lukasz.rej
        </span>
        <div style={{ display:'flex', gap:'6px', alignItems:'center' }}>
          <IconBtn href={PROFILE.github} title="GitHub" t={t}><GitHubIcon /></IconBtn>
          <IconBtn href={PROFILE.linkedin} title="LinkedIn" t={t}><LinkedInIcon /></IconBtn>
          <IconBtn onClick={onToggle} title={dark ? 'Light mode' : 'Dark mode'} t={t}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </IconBtn>
        </div>
      </header>
      <DashedLine t={t} />
    </div>
  );
}

// ── Profile ───────────────────────────────────────────────────────────────────
function Profile({ t }) {
  const isMobile = useWindowWidth() < 640;

  const avatarImg = (size) => (
    <img
      src="../../assets/lukasz-avatar.jpg"
      alt="Łukasz Rej"
      width={size} height={size}
      style={{ display:'block', width:`${size}px`, height:`${size}px`, objectFit:'cover', borderRadius:'8px', border:`1px dashed ${t.border}` }}
    />
  );

  return (
    <section style={{ padding: isMobile ? '32px 0 28px' : '48px 0 40px' }}>
      {isMobile ? (
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'24px' }}>
            {avatarImg(72)}
            <div>
              <h1 style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'2rem', letterSpacing:'-0.03em', margin:'0 0 5px', lineHeight:1, color:t.strong }}>
                {PROFILE.name}<span style={{ color:t.strong, animation:'blink 1.1s step-end infinite' }}>_</span>
              </h1>
              <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:t.dimText, margin:0 }}>
                {PROFILE.role}
              </p>
            </div>
          </div>
          <div style={{ height:'24px' }} />
          <DashedLine t={t} />
          <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.875rem', lineHeight:1.75, color:t.text, margin:'20px 0' }}>
            {PROFILE.about}
          </p>
          <a href={`mailto:${PROFILE.email}`} style={{ display:'inline-flex', alignItems:'center', gap:'6px', fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:t.dimText, textDecoration:'none', borderBottom:`1px dashed ${t.border}`, paddingBottom:'2px' }}>
            <MailIcon />{PROFILE.email}
          </a>
        </div>
      ) : (
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'32px' }}>
          <div style={{ flex:1, minWidth:0 }}>
            <h1 style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'clamp(3rem,8vw,4.5rem)', letterSpacing:'-0.04em', margin:'0 0 10px', lineHeight:0.95, color:t.strong }}>
              {PROFILE.name}<span style={{ color:t.strong, animation:'blink 1.1s step-end infinite' }}>_</span>
            </h1>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.875rem', color:t.dimText, margin:0, letterSpacing:'0.02em' }}>
              {PROFILE.role}
            </p>
            <div style={{ height:'32px' }} />
            <DashedLine t={t} />
            <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.9rem', lineHeight:1.8, color:t.text, margin:'24px 0' }}>
              {PROFILE.about}
            </p>
            <a href={`mailto:${PROFILE.email}`} style={{ display:'inline-flex', alignItems:'center', gap:'6px', fontFamily:'var(--font-mono)', fontSize:'0.8125rem', color:t.dimText, textDecoration:'none', borderBottom:`1px dashed ${t.border}`, paddingBottom:'2px' }}>
              <MailIcon />{PROFILE.email}
            </a>
          </div>
          {avatarImg(148)}
        </div>
      )}
    </section>
  );
}

// ── Experience ────────────────────────────────────────────────────────────────
function ExperienceEntry({ company, title, period, description, skills, current, isLast, t }) {
  const isMobile = useWindowWidth() < 640;
  return (
    <>
      <div style={{ padding: isMobile ? '20px 0 20px 14px' : '26px 0 26px 18px', borderLeft:`2px dashed ${current ? t.accent : t.border}`, marginLeft:'1px', position:'relative' }}>
        <div style={{ position:'absolute', left:'-5px', top: isMobile ? '28px' : '34px', width:'8px', height:'8px', borderRadius:'50%', background: current ? t.accent : t.border }} />
        <div style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent:'space-between', alignItems: isMobile ? 'flex-start' : 'baseline', gap: isMobile ? '2px' : '16px', marginBottom:'4px' }}>
          <h3 style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1.0625rem', color: current ? t.strong : t.text, margin:0, letterSpacing:'-0.01em' }}>
            {company}
            {current && (
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.5625rem', fontWeight:600, color:t.accentAlt, border:`1px solid ${t.accentAlt}`, borderRadius:'3px', padding:'1px 5px', marginLeft:'10px', letterSpacing:'0.06em', verticalAlign:'middle' }}>
                NOW
              </span>
            )}
          </h3>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.6875rem', color: current ? t.accentAlt : t.dimText, whiteSpace:'nowrap', flexShrink:0 }}>
            {period}
          </span>
        </div>
        <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.875rem', fontWeight:500, color:t.text, margin:'0 0 8px' }}>{title}</p>
        <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.8125rem', color:t.dimText, margin:'0 0 14px', lineHeight:1.65 }}>{description}</p>
        <div style={{ display:'flex', gap:'5px', flexWrap:'wrap' }}>
          {skills.map(s => <SkillBadge key={s} t={t}>{s}</SkillBadge>)}
        </div>
      </div>
      {!isLast && <div style={{ height:'2px' }} />}
    </>
  );
}

// ── Tech stack ────────────────────────────────────────────────────────────────
function TechItem({ name, icon, t }) {
  const [hov, setHov] = useState(false);
  return (
    <div title={name} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', padding:'12px 8px 10px', border:`1px dashed ${hov ? t.accentAlt : t.border}`, borderRadius:'6px', background: hov ? t.accentAltDim : 'transparent', transition:'all 150ms', cursor:'default' }}>
      {icon ? (
        <img src={DEVICONS + icon} alt="" aria-hidden="true" width="26" height="26" style={{ display:'block', flexShrink:0 }} />
      ) : (
        <div style={{ width:'26px', height:'26px', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontSize:'0.5rem', color:t.dimText, fontWeight:700, textAlign:'center', lineHeight:1.2 }}>
          {name.slice(0,5).toUpperCase()}
        </div>
      )}
      <span style={{ fontFamily:'var(--font-sans)', fontSize:'0.5625rem', color:t.dimText, textAlign:'center', lineHeight:1.3, width:'100%', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
        {name}
      </span>
    </div>
  );
}

// ── Education ─────────────────────────────────────────────────────────────────
function EducationEntry({ institution, title, period, description, skills, isLast, t }) {
  const isMobile = useWindowWidth() < 640;
  return (
    <>
      <div style={{ padding: isMobile ? '20px 0' : '26px 0' }}>
        <div style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent:'space-between', alignItems: isMobile ? 'flex-start' : 'baseline', gap: isMobile ? '2px' : '16px', marginBottom:'4px' }}>
          <h3 style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1.0625rem', color:t.text, margin:0, letterSpacing:'-0.01em' }}>{institution}</h3>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.6875rem', color:t.dimText, whiteSpace:'nowrap', flexShrink:0 }}>{period}</span>
        </div>
        <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.875rem', fontWeight:500, color:t.text, margin:'0 0 8px' }}>{title}</p>
        {description && <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.8125rem', color:t.dimText, margin:'0 0 12px', lineHeight:1.65 }}>{description}</p>}
        <div style={{ display:'flex', gap:'5px', flexWrap:'wrap' }}>
          {skills.map(s => <SkillBadge key={s} t={t}>{s}</SkillBadge>)}
        </div>
      </div>
      {!isLast && <DashedLine t={t} />}
    </>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer({ t }) {
  return (
    <footer style={{ padding:'32px 0 48px' }}>
      <DashedLine t={t} />
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 0 0' }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:t.dimText, letterSpacing:'0.04em' }}>
          {new Date().getFullYear()}
        </span>
        <a href={`mailto:${PROFILE.email}`} style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:t.dimText, textDecoration:'none' }}>
          {PROFILE.email}
        </a>
      </div>
    </footer>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
function ResumeApp() {
  const [dark, setDark] = useState(() => {
    try { const s = localStorage.getItem('lr-theme'); if (s) return s === 'dark'; } catch(e) {}
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('lr-theme', dark ? 'dark' : 'light'); } catch(e) {}
  }, [dark]);

  const t = dark ? T.dark : T.light;

  const dotGrid = dark
    ? `radial-gradient(circle, #1c1c1c 1px, transparent 1px)`
    : `radial-gradient(circle, #e2e2e2 1px, transparent 1px)`;

  return (
    <div style={{ minHeight:'100vh', background:t.bg, color:t.text, transition:'background 250ms, color 250ms', backgroundImage:dotGrid, backgroundSize:'28px 28px' }}>
      <style dangerouslySetInnerHTML={{ __html:`
        @keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }
      `}} />
      {/* Top accent line */}
      <div style={{ position:'fixed', top:0, left:0, right:0, height:'2px', background:t.accent, zIndex:1000 }} />
      <div style={{ paddingTop:'2px' }}>
        <Header dark={dark} onToggle={() => setDark(d => !d)} t={t} />
        <main style={{ maxWidth:'720px', margin:'0 auto', padding:'0 clamp(16px,4vw,24px)' }}>
          <Profile t={t} />
          <section>
            <SectionTitle n={1} t={t}>Experience</SectionTitle>
            <div style={{ paddingTop:'8px' }}>
              {EXPERIENCES.map((exp, i) => (
                <ExperienceEntry key={exp.company} {...exp} isLast={i === EXPERIENCES.length - 1} t={t} />
              ))}
            </div>
          </section>
          <section>
            <SectionTitle n={2} t={t}>Tech Stack</SectionTitle>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(80px, 1fr))', gap:'6px', padding:'20px 0 8px' }}>
              {TECH_STACK.map(item => <TechItem key={item.name} {...item} t={t} />)}
            </div>
          </section>
          <section>
            <SectionTitle n={3} t={t}>Education</SectionTitle>
            <div style={{ paddingTop:'4px' }}>
              {EDUCATION.map((edu, i) => (
                <EducationEntry key={edu.institution} {...edu} isLast={i === EDUCATION.length - 1} t={t} />
              ))}
            </div>
          </section>
          <Footer t={t} />
        </main>
      </div>
    </div>
  );
}

Object.assign(window, { ResumeApp });
