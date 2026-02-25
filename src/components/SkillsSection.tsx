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
      style={{
        height: 3,
        background: 'rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 1.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, var(--cyan), var(--magenta))',
          boxShadow: '0 0 8px var(--cyan)',
          position: 'relative',
        }}
      >
        <span style={{
          position: 'absolute',
          right: -3, top: -3,
          width: 8, height: 8,
          borderRadius: '50%',
          background: 'var(--cyan)',
          boxShadow: 'var(--glow-cyan)',
          display: 'block',
        }} />
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
    <div style={{ marginBottom: 40 }}>
      {/* category label */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 20,
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 11,
        color: 'var(--magenta)',
        letterSpacing: 3,
        textTransform: 'uppercase',
      }}>
        {label}
        <span style={{
          flex: 1,
          height: 1,
          background: 'linear-gradient(90deg, rgba(255,0,160,0.3), transparent)',
        }} />
      </div>

      {skills.map(({ name, pct, icon }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: baseDelay + i * 0.08 }}
          style={{ marginBottom: 18 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
            <span style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--text)',
              letterSpacing: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 7,
            }}>
              <span style={{ color: 'var(--cyan)', display: 'flex', alignItems: 'center', fontSize: 15 }}>{icon}</span>
              {name}
            </span>
            <span style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 11,
              color: 'var(--cyan)',
            }}>{pct}%</span>
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
    <section
      id="skills"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, var(--dark2) 0%, var(--dark) 100%)',
        padding: '120px 48px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <SectionHeader label="// 03. ARSENAL" title="SKILLS" inView={inView} />

        {/* two-column layout */}
        <div
          className="skills-layout-responsive"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'start',
          }}
        >

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
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 24,
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 11,
              color: 'var(--magenta)',
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}>
              Tools & Platforms
              <span style={{
                flex: 1,
                height: 1,
                background: 'linear-gradient(90deg, rgba(255,0,160,0.3), transparent)',
              }} />
            </div>

            {/* hex-style grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
            }}>
              {TOOLS.map(({ name, icon }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                  className="tool-card"
                  style={{
                    padding: '18px 12px',
                    textAlign: 'center',
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: 12,
                    letterSpacing: 1,
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'default',
                    clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 22, display: 'flex' }}>{icon}</span>
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
