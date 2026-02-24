import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/* ── ABOUT TAGS ──────────────────────────────────────── */
const TAGS = [
  'Machine Learning', 'AI Systems', 'Data Science','Software Engineering'
]

/* ── TERMINAL BLINK CURSOR ───────────────────────────── */
function BlinkCursor() {
  return (
    <span style={{ display: 'inline-block', animation: 'blink 1s infinite', color: 'var(--cyan)' }}>▋</span>
  )
}

/* ── ABOUT SECTION ───────────────────────────────────── */
export default function AboutSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const inView      = useInView(sectionRef, { once: true, margin: '-100px' })

  /* typing reveal state for terminal lines */
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (!inView) return
    const timers = [200, 600, 1000, 1400, 1900].map((ms, i) =>
      setTimeout(() => setStep(i + 1), ms)
    )
    return () => timers.forEach(clearTimeout)
  }, [inView])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, var(--dark) 0%, var(--dark2) 100%)',
        padding: '120px 48px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* ── header ── */}
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          // 01. IDENTITY
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ABOUT ME
        </motion.h2>
        <motion.div
          className="section-divider"
          initial={{ scaleX: 0, originX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* ── two-column grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.6fr)',
          gap: 80,
          alignItems: 'start',
        }}
          className="about-grid-responsive"
        >

          {/* ── LEFT: terminal + MAGI + stats ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Entry Plug terminal */}
            <div className="terminal-window" style={{ marginBottom: 24 }}>
              <div className="terminal-bar">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">user_profile.sh</span>
              </div>
              <div className="terminal-body" style={{ lineHeight: 1.9 }}>

                {step >= 1 && (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span className="t-prompt">$</span>
                    <span className="t-cmd"> whoami</span>
                  </div>
                )}
                {step >= 2 && <span className="t-out cyan">yeap_jiong_ming</span>}

                {step >= 2 && (
                  <>
                    <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
                      <span className="t-prompt">$</span>
                      <span className="t-cmd"> cat profile.json</span>
                    </div>
                  </>
                )}
                {step >= 3 && (
                  <>
                    <span className="t-out">{'{'}</span>
                    <span className="t-out">&nbsp;&nbsp;"role": <span style={{ color: 'var(--yellow)' }}>"CS Student"</span>,</span>
                    <span className="t-out">&nbsp;&nbsp;"major": <span style={{ color: 'var(--yellow)' }}>"Intelligent Computing"</span>,</span>
                    <span className="t-out">&nbsp;&nbsp;"uni": <span style={{ color: 'var(--yellow)' }}>"USM"</span>,</span>
                    <span className="t-out">&nbsp;&nbsp;"year": <span style={{ color: 'var(--cyan)' }}>3</span>,</span>
                    <span className="t-out">&nbsp;&nbsp;"location": <span style={{ color: 'var(--yellow)' }}>"Penang, MY"</span>,</span>
                    <span className="t-out">&nbsp;&nbsp;"status": <span className="mag">"available"</span></span>
                    <span className="t-out">{'}'}</span>
                  </>
                )}

                <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">&nbsp;<BlinkCursor /></span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* ── RIGHT: bio + minibar skills + tags ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Bio */}
            <p style={{
              fontSize: 17,
              lineHeight: 1.85,
              color: 'var(--text)',
              marginBottom: 32,
              fontWeight: 300,
            }}>
              I'm a <strong style={{ color: 'var(--cyan)', fontWeight: 600 }}>Computer Science student</strong> at
              USM majoring in{' '}
              <strong style={{ color: 'var(--cyan)', fontWeight: 600 }}>Intelligent Computing</strong>, passionate
              about <strong style={{ color: 'var(--cyan)', fontWeight: 600 }}>AI and machine learning</strong>.
              Specifically, how machine learning or AI systems can transform{' '}
              <strong style={{ color: 'var(--cyan)', fontWeight: 600 }}>complex data into meaningful decisions</strong>.
              <br /><br />
              I enjoy solving complex problems as the sense of satisfaction are highly rewarding. I'm also driven
              by the challenge of designing models that are not only accurate, but{' '}
              <strong style={{ color: 'var(--cyan)', fontWeight: 600 }}>efficient, scalable, and impactful</strong>{' '}
              in real-world applications.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {TAGS.map((t, i) => (
                <motion.span
                  key={t}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 1.0 + i * 0.07 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* responsive style injection */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
