import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SiGithub } from 'react-icons/si'

/* ── PROJECT DATA ────────────────────────────────────── */
const PROJECTS = [
  {
    num: 'PROJECT_01',
    name: 'LACIAL',
    desc: 'A blockchain-based charity platform ensuring transparent, trustless donation flows via smart contracts.',
    tech: ['TypeScript', 'React', 'Vite', 'TailwindCSS', 'Firebase', 'Hardhat', 'Blockchain'],
    github: 'https://github.com/uruha8Rushia/VHack2025-Lacial',
    featured: true,
    badge: 'VARSITY HACKATHON 2025 FINALIST',
  },
  {
    num: 'PROJECT_02',
    name: 'MYEVENT',
    desc: 'A full-stack event management platform that allows organizers to create, manage, and promote events while enabling attendees to discover and register seamlessly.',
    tech: ['React', 'TypeScript', 'Firebase', 'TailwindCSS'],
    github: 'https://github.com/uruha8Rushia/CAT304-MyEvent',
    featured: false,
  },
  {
    num: 'PROJECT_03',
    name: 'HOUSE PRICE PREDICTOR',
    desc: 'A Flask web application and Jupyter notebook pipeline for predicting house prices using supervised ML regression. Combines data preprocessing, model training, and a clean web interface.',
    tech: ['Python', 'Flask', 'Sklearn', 'Pandas', 'Matplotlib', 'Joblib'],
    github: 'https://github.com/uruha8Rushia/house-price-prediction',
    featured: false,
  },
  {
    num: 'PROJECT_04',
    name: 'PETPARADE',
    desc: 'A full-stack e-commerce platform for pet supplies. React frontend paired with a Java OOP backend, featuring product listings, cart management, and order processing.',
    tech: ['React', 'Java', 'OOP'],
    github: 'https://github.com/uruha8Rushia/petparade',
    featured: false,
  },
  {
    num: 'PROJECT_05',
    name: 'VISIT PENANG',
    desc: 'A landing page showcasing Penang — my hometown. A modern, interactive travel guide built with Vite + React + TypeScript + TailwindCSS, highlighting culture, food, and attractions.',
    tech: ['TypeScript', 'React', 'Vite', 'TailwindCSS'],
    github: 'https://github.com/uruha8Rushia/visit-penang',
    featured: false,
  },
]

/* ── PROJECT CARD ────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof PROJECTS)[number]
  index: number
  inView: boolean
}) {
  const { num, name, desc, tech, github, featured, badge } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`project-card${featured ? ' featured' : ''}`}
    >
      {/* hackathon badge */}
      {badge && (
        <div style={{
          display: 'inline-block',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 10,
          padding: '3px 10px',
          background: 'linear-gradient(90deg, var(--cyan), var(--magenta))',
          color: 'var(--dark)',
          fontWeight: 700,
          letterSpacing: 2,
          marginBottom: 16,
        }}>
          {badge}
        </div>
      )}

      {/* number */}
      <span style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: 11,
        color: 'var(--magenta)',
        letterSpacing: 3,
        marginBottom: 16,
        display: 'block',
      }}>
        {num}
      </span>

      {/* name */}
      <div style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: 18,
        fontWeight: 700,
        color: featured ? 'var(--cyan)' : '#fff',
        marginBottom: 12,
        lineHeight: 1.2,
      }}>
        {name}
      </div>

      {/* desc */}
      <p style={{
        fontSize: 14,
        color: 'var(--text)',
        lineHeight: 1.7,
        marginBottom: 24,
        fontWeight: 300,
      }}>
        {desc}
      </p>

      {/* tech badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {tech.map(t => (
          <span key={t} style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 10,
            padding: '3px 10px',
            border: '1px solid rgba(255,0,160,0.3)',
            color: 'var(--magenta)',
            background: 'rgba(255,0,160,0.04)',
            letterSpacing: 1,
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* github link */}
      <div>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 11,
            color: 'var(--cyan)',
            textDecoration: 'none',
            letterSpacing: 2,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            transition: 'text-shadow 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.textShadow = 'var(--glow-cyan)')}
          onMouseLeave={e => (e.currentTarget.style.textShadow = 'none')}
        >
          <SiGithub size={14} /> GITHUB
        </a>
      </div>

      {/* corner mark */}
      <div style={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 24,
        height: 24,
        borderRight: '1px solid rgba(0,245,255,0.2)',
        borderBottom: '1px solid rgba(0,245,255,0.2)',
      }} />
    </motion.div>
  )
}

/* ── PROJECTS SECTION ────────────────────────────────── */
export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        background: 'var(--dark)',
        padding: '120px 48px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* header */}
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          // 02. WORK
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          PROJECTS
        </motion.h2>
        <motion.div
          className="section-divider"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 24,
        }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects { padding: 100px 24px !important; }
        }
      `}</style>
    </section>
  )
}
