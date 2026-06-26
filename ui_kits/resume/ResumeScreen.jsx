/**
 * Resume UI Kit — Personal CV showcase
 * Demonstrates the design system in action
 */
export function ResumeScreen() {
  const resumeStyles = {
    container: {
      maxWidth: '720px',
      margin: '0 auto',
      padding: '32px 24px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--color-fg)',
    },
    header: {
      marginBottom: '32px',
      paddingBottom: '24px',
      borderBottom: 'var(--border)',
    },
    name: {
      fontSize: 'var(--text-4xl)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      margin: '0 0 8px 0',
      lineHeight: 'var(--leading-tight)',
    },
    title: {
      fontSize: 'var(--text-lg)',
      color: 'var(--color-muted-fg)',
      margin: 0,
    },
    tagline: {
      fontSize: 'var(--text-base)',
      color: 'var(--color-muted-fg)',
      margin: '8px 0 0 0',
      fontStyle: 'italic',
    },
    section: {
      marginBottom: '28px',
    },
    sectionTitle: {
      fontSize: 'var(--text-2xl)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      margin: '0 0 16px 0',
      paddingBottom: '8px',
      borderBottom: 'var(--border)',
    },
    entry: {
      marginBottom: '16px',
      paddingBottom: '12px',
      borderBottom: '1px dashed var(--color-border)',
    },
    entryTitle: {
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      margin: '0 0 4px 0',
    },
    entryMeta: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-muted-fg)',
      margin: 0,
    },
    entryDesc: {
      fontSize: 'var(--text-base)',
      margin: '8px 0 0 0',
      color: 'var(--color-fg)',
    },
    skillBadge: {
      display: 'inline-block',
      backgroundColor: 'var(--color-secondary)',
      color: 'var(--color-fg)',
      padding: '4px 12px',
      borderRadius: 'var(--radius-sm)',
      border: '1px dashed var(--color-border)',
      fontSize: 'var(--text-sm)',
      marginRight: '8px',
      marginBottom: '8px',
    },
    about: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--color-fg)',
      margin: 0,
    },
  };

  return (
    <div style={resumeStyles.container}>
      <header style={resumeStyles.header}>
        <h1 style={resumeStyles.name}>Łukasz Rej</h1>
        <p style={resumeStyles.title}>Frontend Developer</p>
        <p style={resumeStyles.tagline}>Coding, creativity, and more...</p>
      </header>

      <section style={resumeStyles.section}>
        <h2 style={resumeStyles.sectionTitle}>About</h2>
        <p style={resumeStyles.about}>
          Frontend developer focused on building scalable web applications with React and TypeScript. Experienced in clean, maintainable architectures and managing complex products, from greenfield projects to legacy refactoring.
        </p>
      </section>

      <section style={resumeStyles.section}>
        <h2 style={resumeStyles.sectionTitle}>Experience</h2>
        <div style={resumeStyles.entry}>
          <h3 style={resumeStyles.entryTitle}>Senior Frontend Developer</h3>
          <p style={resumeStyles.entryMeta}>TechCorp · Berlin, Germany · 2022 – Present</p>
          <p style={resumeStyles.entryDesc}>Led frontend architecture for React-based SaaS platform. Implemented design systems and improved bundle size by 40%.</p>
        </div>
        <div style={resumeStyles.entry}>
          <h3 style={resumeStyles.entryTitle}>Full Stack Developer</h3>
          <p style={resumeStyles.entryMeta}>StartupX · Copenhagen, Denmark · 2020 – 2022</p>
          <p style={resumeStyles.entryDesc}>Built and shipped product features using React, Node.js, and PostgreSQL. Mentored junior developers.</p>
        </div>
      </section>

      <section style={resumeStyles.section}>
        <h2 style={resumeStyles.sectionTitle}>Skills</h2>
        <div>
          <span style={resumeStyles.skillBadge}>React</span>
          <span style={resumeStyles.skillBadge}>TypeScript</span>
          <span style={resumeStyles.skillBadge}>JavaScript</span>
          <span style={resumeStyles.skillBadge}>CSS</span>
          <span style={resumeStyles.skillBadge}>Design Systems</span>
          <span style={resumeStyles.skillBadge}>Web Performance</span>
          <span style={resumeStyles.skillBadge}>Node.js</span>
          <span style={resumeStyles.skillBadge}>PostgreSQL</span>
        </div>
      </section>

      <section style={resumeStyles.section}>
        <h2 style={resumeStyles.sectionTitle}>Education</h2>
        <div style={resumeStyles.entry}>
          <h3 style={resumeStyles.entryTitle}>Frontend Development Bootcamp</h3>
          <p style={resumeStyles.entryMeta}>Code Academy · Warsaw, Poland · 2019 – 2020</p>
        </div>
      </section>
    </div>
  );
}
