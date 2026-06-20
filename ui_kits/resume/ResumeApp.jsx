// Łukasz Rej — Resume App
// Source data: github.com/lukaszrej/resume/src/lib/constants/
// Icons: Devicons CDN (substitute for developer-icons npm package)

const { useState, useEffect } = React;

function useWindowWidth() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return w;
}

const DEVICONS = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
const GRAD = 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)';
const gradText = { background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };
const gradBorder = { padding: '2px', background: GRAD, borderRadius: '10px', display: 'inline-flex', flexShrink: 0 };

// ── Data ─────────────────────────────────────────────────────────────────────

const PROFILE = {
  name: 'Łukasz Rej',
  role: 'Frontend Developer',
  wordmark: 'lukasz.rej',
  slogan: 'Coding, creativity, and more...',
  email: 'rejlukasz@gmail.com',
  github: 'https://github.com/lukaszrej',
  linkedin: 'https://www.linkedin.com/in/lukasz-rej/',
  about: 'Frontend developer focused on building scalable web applications with React and TypeScript. Experienced in clean, maintainable architectures and managing complex products, from greenfield projects to legacy refactoring. Committed to code quality, performance, and developer experience, following SOLID and Clean Code principles. Delivered commercial solutions for clients in Germany, Denmark, and Poland.',
};

const EXPERIENCES = [
  {
    company: 'Vaillant Group',
    title: 'Frontend React.js Developer',
    period: '03.2023 – present',
    description: 'Developed a React.js loyalty app for installers from the ground up.',
    skills: ['TypeScript','React.js','Material UI','Emotion','Tanstack Query','Tanstack Router','React Hook Form','Vite','RTL','Vitest'],
  },
  {
    company: 'SNI Group',
    title: 'React.js Developer with German',
    period: '10.2022 – 02.2023',
    description: 'Contributed to a project for a major German public institution.',
    skills: ['TypeScript','React.js','GraphQL','Apollo Client','AntDesign','React Testing Library'],
  },
  {
    company: 'Qualent Software',
    title: 'React.js Developer',
    period: '03.2021 – 10.2022',
    description: 'Developed a React.js app for renting construction machinery. Participated in a Next.js CMS migration from Prismic to Strapi.',
    skills: ['React.js','JavaScript','Redux','GraphQL','Apollo Client','Styled Components','Next.js','Strapi','AWS'],
  },
  {
    company: 'Agora S.A.',
    title: 'React.js Frontend Developer',
    period: '08.2020 – 03.2021',
    description: 'Led development of a React.js-based ad reservation app. Developed and maintained ad display logic including new ad templates.',
    skills: ['TypeScript','React.js','Redux','Styled Components','Material UI','REST API','HTML5','CSS3'],
  },
  {
    company: 'Miinto Group',
    title: 'Junior Frontend Developer',
    period: '12.2019 – 05.2020',
    description: 'Contributed to the Miinto e-commerce platform and helped build an internal React.js component library.',
    skills: ['React.js','JavaScript','SCSS','HTML5','CSS3','jQuery','Bootstrap'],
  },
];

const EDUCATION = [
  {
    institution: 'CodersLab IT School',
    title: 'JavaScript Developer – React.js',
    period: '10.2018 – 06.2019',
    description: null,
    skills: ['React.js','JavaScript (ES6+)','UI/UX Foundation','GitHub'],
  },
  {
    institution: 'University of Lodz',
    title: 'International Relations',
    period: '10.2007 – 06.2012',
    description: 'Specialization: German studies',
    skills: ['English','German'],
  },
];

const TECH_STACK = [
  { name: 'TypeScript',  icon: 'typescript/typescript-original.svg' },
  { name: 'JavaScript',  icon: 'javascript/javascript-original.svg' },
  { name: 'React',       icon: 'react/react-original.svg' },
  { name: 'Next.js',     icon: 'nextjs/nextjs-original.svg' },
  { name: 'React Query', icon: 'react/react-original.svg' },
  { name: 'Material UI', icon: 'materialui/materialui-original.svg' },
  { name: 'Redux',       icon: 'redux/redux-original.svg' },
  { name: 'HTML5',       icon: 'html5/html5-original.svg' },
  { name: 'CSS3',        icon: 'css3/css3-original.svg' },
  { name: 'Astro.js',   icon: 'astro/astro-original.svg' },
  { name: 'Tailwind',   icon: 'tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js',    icon: 'nodejs/nodejs-original.svg' },
  { name: 'Nest.js',    icon: 'nestjs/nestjs-original.svg' },
  { name: 'GraphQL',    icon: 'graphql/graphql-plain.svg' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
  { name: 'Git',        icon: 'git/git-original.svg' },
  { name: 'Vite',       icon: 'vitejs/vitejs-original.svg' },
  { name: 'Docker',     icon: 'docker/docker-original.svg' },
  { name: 'Figma',      icon: 'figma/figma-original.svg' },
  { name: 'Prisma',     icon: 'prisma/prisma-original.svg' },
  { name: 'NPM',        icon: 'npm/npm-original-wordmark.svg' },
  { name: 'shadcn/ui',  icon: null },
  { name: 'Motion',     icon: null },
  { name: 'Vitest',     icon: 'vitejs/vitejs-original.svg' },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

// ── Primitives ────────────────────────────────────────────────────────────────

function DashedLine() {
  return (
    <div style={{ position: 'relative', height: '1px', flexShrink: 0 }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '-100vw',
        width: '300vw',
        borderTop: '1px dashed var(--color-border)',
      }} />
    </div>
  );
}

function Badge({ children }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.6875rem',
      fontWeight: 500,
      letterSpacing: '0.01em',
      padding: '2px 8px',
      borderRadius: '4px',
      border: '1px dashed var(--color-border)',
      color: 'var(--color-fg)',
      background: 'transparent',
      whiteSpace: 'nowrap',
      lineHeight: 1.4,
    }}>
      {children}
    </span>
  );
}

function IconBtn({ href, onClick, title, children }) {
  const [hov, setHov] = useState(false);
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      title={title}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        border: '1px dashed var(--color-border)',
        borderRadius: '8px',
        color: 'var(--color-fg)',
        background: hov ? 'var(--color-secondary)' : 'transparent',
        transition: 'background 150ms',
        cursor: 'pointer',
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      {children}
    </Tag>
  );
}

// ── Sections ──────────────────────────────────────────────────────────────────

function Header({ dark, onToggle }) {
  return (
    <div>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '720px',
        margin: '0 auto',
        padding: '0 24px',
        height: '60px',
      }}>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '1.125rem',
          letterSpacing: '-0.01em',
          userSelect: 'none',
          ...gradText,
        }}>
          lukasz.rej
        </span>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <IconBtn href={PROFILE.github} title="GitHub profile"><GitHubIcon /></IconBtn>
          <IconBtn href={PROFILE.linkedin} title="LinkedIn profile"><LinkedInIcon /></IconBtn>
          <IconBtn onClick={onToggle} title={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </IconBtn>
        </div>
      </header>
      <DashedLine />
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div>
      <DashedLine />
      <div style={{ padding: '18px 0 16px' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '1.0625rem',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: 'var(--color-fg)',
          margin: '0 0 8px',
        }}>
          {children}
        </h2>
        <div style={{ width: '28px', height: '2px', background: GRAD, borderRadius: '1px' }} />
      </div>
      <DashedLine />
    </div>
  );
}

function Profile() {
  const isMobile = useWindowWidth() < 640;
  return (
    <section style={{ padding: isMobile ? '32px 0 24px' : '52px 0 40px' }}>
      {isMobile ? (
        /* ── Mobile: compact avatar row + stacked content ── */
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ ...gradBorder }}>
              <img
                src="../../assets/lukasz-avatar.jpg"
                alt="Łukasz Rej"
                width="72" height="72"
                style={{ display: 'block', width: '72px', height: '72px', objectFit: 'cover', borderRadius: '7px' }}
              />
            </div>
            <div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.875rem', letterSpacing: '-0.03em', margin: '0 0 4px', lineHeight: 1, ...gradText }}>
                {PROFILE.name}
              </h1>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--color-muted-fg)', margin: 0 }}>
                {PROFILE.role}
              </p>
            </div>
          </div>
          <DashedLine />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-fg)', margin: '20px 0 20px' }}>
            {PROFILE.about}
          </p>
          <a href={`mailto:${PROFILE.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted-fg)', textDecoration: 'none', borderBottom: '1px dashed var(--color-border)', paddingBottom: '1px' }}>
            <MailIcon />{PROFILE.email}
          </a>
        </div>
      ) : (
        /* ── Desktop: name left, avatar right ── */
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '32px' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(2.75rem, 7vw, 4.25rem)', letterSpacing: '-0.035em', margin: '0 0 8px', lineHeight: 1, ...gradText }}>
              {PROFILE.name}
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--color-muted-fg)', margin: '0 0 32px' }}>
              {PROFILE.role}
            </p>
            <DashedLine />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--color-fg)', margin: '24px 0 24px' }}>
              {PROFILE.about}
            </p>
            <a href={`mailto:${PROFILE.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-muted-fg)', textDecoration: 'none', borderBottom: '1px dashed var(--color-border)', paddingBottom: '1px' }}>
              <MailIcon />{PROFILE.email}
            </a>
          </div>
          <div style={{ ...gradBorder }}>
            <img src="../../assets/lukasz-avatar.jpg" alt="Łukasz Rej" width="148" height="148"
              style={{ display: 'block', width: '148px', height: '148px', objectFit: 'cover', borderRadius: '7px' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

function ExperienceEntry({ company, title, period, description, skills, isLast }) {
  const isMobile = useWindowWidth() < 640;
  return (
    <>
      <div style={{ padding: isMobile ? '20px 0' : '28px 0' }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'baseline', gap: isMobile ? '2px' : '16px', marginBottom: '4px' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.0625rem',
            color: 'var(--color-fg)',
            margin: 0,
            letterSpacing: '-0.01em',
          }}>
            {company}
          </h3>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-muted-fg)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            {period}
          </span>
        </div>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--color-fg)',
          margin: '0 0 8px',
        }}>
          {title}
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.875rem',
          color: 'var(--color-muted-fg)',
          margin: '0 0 14px',
          lineHeight: 1.65,
        }}>
          {description}
        </p>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
          {skills.map(s => <Badge key={s}>{s}</Badge>)}
        </div>
      </div>
      {!isLast && <DashedLine />}
    </>
  );
}

function TechItem({ name, icon }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      title={name}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '14px 8px 10px',
        border: '1px dashed var(--color-border)',
        borderRadius: '8px',
        background: hov ? 'var(--color-secondary)' : 'transparent',
        transition: 'background 150ms',
        cursor: 'default',
      }}
    >
      {icon ? (
        <img src={DEVICONS + icon} alt="" aria-hidden="true" width="28" height="28"
          style={{ display: 'block', flexShrink: 0 }} />
      ) : (
        <div style={{
          width: '28px',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.5rem',
          color: 'var(--color-muted-fg)',
          fontWeight: 700,
          textAlign: 'center',
          lineHeight: 1.2,
        }}>
          {name.slice(0, 5).toUpperCase()}
        </div>
      )}
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.625rem',
        color: 'var(--color-muted-fg)',
        textAlign: 'center',
        lineHeight: 1.3,
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>
        {name}
      </span>
    </div>
  );
}

function EducationEntry({ institution, title, period, description, skills, isLast }) {
  const isMobile = useWindowWidth() < 640;
  return (
    <>
      <div style={{ padding: isMobile ? '20px 0' : '28px 0' }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'baseline', gap: isMobile ? '2px' : '16px', marginBottom: '4px' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.0625rem',
            color: 'var(--color-fg)',
            margin: 0,
            letterSpacing: '-0.01em',
          }}>
            {institution}
          </h3>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-muted-fg)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            {period}
          </span>
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-fg)', margin: '0 0 8px' }}>
          {title}
        </p>
        {description && (
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--color-muted-fg)', margin: '0 0 12px', lineHeight: 1.6 }}>
            {description}
          </p>
        )}
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
          {skills.map(s => <Badge key={s}>{s}</Badge>)}
        </div>
      </div>
      {!isLast && <DashedLine />}
    </>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '32px 0 48px' }}>
      <DashedLine />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0 0',
      }}>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '0.9375rem',
          letterSpacing: '-0.01em',
          ...gradText,
        }}>
          {PROFILE.wordmark}
        </span>
        <a href={`mailto:${PROFILE.email}`} style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--color-muted-fg)',
          textDecoration: 'none',
        }}>
          {PROFILE.email}
        </a>
      </div>
    </footer>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────

function ResumeApp() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('lr-theme');
      if (saved) return saved === 'dark';
    } catch(e) {}
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('lr-theme', dark ? 'dark' : 'light'); } catch(e) {}
  }, [dark]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-bg)',
      color: 'var(--color-fg)',
      transition: 'background 250ms, color 250ms',
    }}>
      <Header dark={dark} onToggle={() => setDark(d => !d)} />
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px)' }}>
        <Profile />
        <section>
          <SectionTitle>Experience</SectionTitle>
          {EXPERIENCES.map((exp, i) => (
            <ExperienceEntry key={exp.company} {...exp} isLast={i === EXPERIENCES.length - 1} />
          ))}
        </section>
        <section>
          <SectionTitle>Tech Stack</SectionTitle>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(84px, 1fr))',
            gap: '8px',
            padding: '24px 0',
          }}>
            {TECH_STACK.map(t => <TechItem key={t.name} {...t} />)}
          </div>
        </section>
        <section>
          <SectionTitle>Education</SectionTitle>
          {EDUCATION.map((edu, i) => (
            <EducationEntry key={edu.institution} {...edu} isLast={i === EDUCATION.length - 1} />
          ))}
        </section>
        <Footer />
      </main>
    </div>
  );
}

Object.assign(window, { ResumeApp });
