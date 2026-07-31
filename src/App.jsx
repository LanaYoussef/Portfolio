import { motion, useReducedMotion } from 'framer-motion'
import { experience, organizations, profile, projects, skillGroups } from './data'
import './index.css'

const fade = (reduce, delay = 0) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
      }

function Nav() {
  return (
    <header className="shell">
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            LY
          </span>
          <span className="brand-name">{profile.firstName}</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="hero" id="top">
      <div className="hero-wash" aria-hidden="true" />
      <motion.div
        className="hero-arc"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="shell hero-inner">
        <motion.p
          className="hero-meta"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55 }}
        >
          {profile.title}
          <span className="dot" aria-hidden="true" />
          {profile.location}
        </motion.p>
        <motion.h1
          className="hero-name"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06 }}
        >
          <span className="hero-first">{profile.firstName}</span>
          <span className="hero-last">Youssef</span>
        </motion.h1>
        <motion.p
          className="hero-copy"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          className="cta-row"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.24 }}
        >
          <a className="btn btn-primary" href="#work">
            View work
          </a>
          <a className="btn btn-text" href={profile.cv} target="_blank" rel="noreferrer">
            View CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Projects() {
  const reduce = useReducedMotion()
  return (
    <section className="section shell" id="work">
      <motion.div className="section-head" {...fade(reduce)}>
        <p className="section-kicker">Selected work</p>
        <h2 className="section-title">Built end to end</h2>
        <p className="section-lead">
          Auth, APIs, role-based access, and databases — the skills teams hire for.
        </p>
      </motion.div>

      <ol className="project-list">
        {projects.map((project, i) => (
          <motion.li
            key={project.id}
            className="project"
            {...fade(reduce, reduce ? 0 : i * 0.04)}
          >
            <span className="project-index" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="project-body">
              <div className="project-top">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-badge">{project.badge}</span>
              </div>
              <p className="project-summary">{project.summary}</p>
              <ul className="project-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="project-stack">{project.stack}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}

function About() {
  const reduce = useReducedMotion()
  return (
    <section className="section about-section" id="about">
      <div className="shell about-grid">
        <motion.div {...fade(reduce)}>
          <p className="section-kicker">About</p>
          <h2 className="section-title">Based in Beirut</h2>
          <p className="about-text">
            {profile.education.degree}, {profile.education.note}. I like shipping things people
            can use — APIs, admin tools, mobile flows, and clean UIs.
          </p>
          <p className="about-langs">{profile.languages.join('  ·  ')}</p>
        </motion.div>

        <motion.div className="about-side" {...fade(reduce, 0.08)}>
          <div>
            <h3 className="side-label">Experience</h3>
            <ul className="org-list">
              {experience.map((item) => (
                <li key={item.org}>
                  <strong>{item.org}</strong>
                  <span>
                    {item.role} — {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="side-label">Skills</h3>
            <dl className="skill-groups">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="side-label">Community</h3>
            <ul className="org-list">
              {organizations.map((org) => (
                <li key={org.name}>
                  <strong>{org.name}</strong>
                  <span>{org.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  const reduce = useReducedMotion()
  return (
    <section className="section shell contact" id="contact">
      <motion.div {...fade(reduce)}>
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Say hello</h2>
        <p className="section-lead">
          Open to junior roles, internships, and collaborative projects.
        </p>
        <ul className="contact-list">
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.cv} target="_blank" rel="noreferrer">
              CV
            </a>
          </li>
        </ul>
      </motion.div>
    </section>
  )
}

export default function App() {
  return (
    <div className="site">
      <div className="edge" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="footer shell">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </div>
  )
}
