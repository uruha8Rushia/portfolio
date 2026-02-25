import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import SectionHeader from './SectionHeader'

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
        <div className="project-badge">{badge}</div>
      )}

      {/* number */}
      <span className="project-num">{num}</span>

      {/* name */}
      <div className={`project-name${featured ? ' featured' : ''}`}>{name}</div>

      {/* desc */}
      <p className="project-desc">{desc}</p>

      {/* tech badges */}
      <div className="project-tech">
        {tech.map(t => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>

      {/* github link — corner mark rendered via .project-card::after */}
      <div>
        <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
          <SiGithub size={14} /> GITHUB
        </a>
      </div>
    </motion.div>
  )
}

/* ── PROJECTS SECTION ────────────────────────────────── */
export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={sectionRef}>
      <div className="section-inner">

        <SectionHeader label="// 02. WORK" title="PROJECTS" inView={inView} />

        {/* grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>


    </section>
  )
}
