import { useRef } from 'react'
import type { ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from './SectionHeader'
import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript,
  SiPandas, SiScikitlearn, SiFlask, SiReact, SiTailwindcss,
  SiGit, SiGithub, SiJupyter, SiVite, SiFirebase,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

/* ── SKILL DATA ──────────────────────────────────────── */
const LANGUAGES: { name: string; pct: number; icon: ReactNode }[] = [
  { name: 'Python',                  pct: 90, icon: <SiPython /> },
  { name: 'C++',                     pct: 85, icon: <SiCplusplus /> },
  { name: 'JavaScript / TypeScript', pct: 70, icon: <><SiJavascript /><SiTypescript style={{ marginLeft: 3 }} /></> },
  { name: 'Java',                    pct: 70, icon: <FaJava /> },
]

const FRAMEWORKS: { name: string; pct: number; icon: ReactNode }[] = [
  { name: 'Pandas / Matplotlib / Sklearn', pct: 80, icon: <><SiPandas /><SiScikitlearn style={{ marginLeft: 3 }} /></> },
  { name: 'Flask',                         pct: 70, icon: <SiFlask /> },
  { name: 'React',                         pct: 70, icon: <SiReact /> },
  { name: 'TailwindCSS',                   pct: 70, icon: <SiTailwindcss /> },
]

const TOOLS: { name: string; icon: ReactNode }[] = [
  { name: 'Git',     icon: <SiGit /> },
  { name: 'GitHub',  icon: <SiGithub /> },
  { name: 'VS Code', icon: <VscVscode /> },
  { name: 'Jupyter', icon: <SiJupyter /> },
  { name: 'Vite',    icon: <SiVite /> },
  { name: 'Firebase',icon: <SiFirebase /> },
]

/* ── ANIMATED SYNC BAR ───────────────────────────────── */
function SyncBar({ pct, delay }: { pct: number; delay: number }) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      className="sync-bar"
    >
      <motion.div
        className="sync-bar-fill"
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 1.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="sync-bar-dot" />
      </motion.div>
    </div>
  )
}

/* ── SKILL CATEGORY ──────────────────────────────────── */
function SkillCategory({
  label,
  skills,
  baseDelay,
  inView,
}: {
  label: string
  skills: { name: string; pct: number; icon: ReactNode }[]
  baseDelay: number
  inView: boolean
}) {
  return (
    <div className="skill-category">
      {/* category label */}
      <div className="skill-category-label">
        {label}
        <span className="label-divider" />
      </div>

      {skills.map(({ name, pct, icon }, i) => (
        <motion.div
          key={name}
          className="skill-row"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: baseDelay + i * 0.08 }}
        >
          <div className="skill-row-header">
            <span className="skill-name">
              <span className="skill-icon">{icon}</span>
              {name}
            </span>
            <span className="skill-pct">{pct}%</span>
          </div>
          <SyncBar pct={pct} delay={baseDelay + i * 0.1} />
        </motion.div>
      ))}
    </div>
  )
}

/* ── SKILLS SECTION ──────────────────────────────────── */
export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-inner">

        <SectionHeader label="// 03. ARSENAL" title="SKILLS" inView={inView} />

        {/* two-column layout */}
        <div className="skills-grid">

          {/* ── LEFT: sync-rate bars ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <SkillCategory
              label="Languages"
              skills={LANGUAGES}
              baseDelay={0.4}
              inView={inView}
            />
            <SkillCategory
              label="Frameworks & Libraries"
              skills={FRAMEWORKS}
              baseDelay={0.8}
              inView={inView}
            />
          </motion.div>

          {/* ── RIGHT: tools hex grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* tools label */}
            <div className="skill-category-label">
              Tools & Platforms
              <span className="label-divider" />
            </div>

            {/* hex-style grid */}
            <div className="tools-grid">
              {TOOLS.map(({ name, icon }, i) => (
                <motion.div
                  key={name}
                  className="tool-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                >
                  <span className="tool-icon">{icon}</span>
                  {name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  )
}
