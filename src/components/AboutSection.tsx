import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from './SectionHeader'
import BlinkCursor from './BlinkCursor'

/* ── ABOUT TAGS ──────────────────────────────────────── */
const TAGS = [
  'Machine Learning', 'AI Systems', 'Data Science','Software Engineering'
]


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
    <section id="about" ref={sectionRef}>
      <div className="section-inner">

        <SectionHeader label="// 01. IDENTITY" title="ABOUT ME" inView={inView} />

        {/* ── two-column grid ── */}
        <div className="about-grid">

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
              <div className="terminal-body" style={{ lineHeight: 1.9 }}> {/* lineHeight varies per terminal */}

                {step >= 1 && (
                  <div className="t-row">
                    <span className="t-prompt">$</span>
                    <span className="t-cmd"> whoami</span>
                  </div>
                )}
                {step >= 2 && <span className="t-out cyan">yeap_jiong_ming</span>}

                {step >= 2 && (
                  <>
                    <div className="t-row" style={{ marginTop: 10 }}>
                      <span className="t-prompt">$</span>
                      <span className="t-cmd"> cat profile.json</span>
                    </div>
                  </>
                )}
                {step >= 3 && (
                  <>
                    <span className="t-out">{'{'}</span>
                    <span className="t-out">&nbsp;&nbsp;"role": <span className="text-yellow">"CS Student"</span>,</span>
                    <span className="t-out">&nbsp;&nbsp;"major": <span className="text-yellow">"Intelligent Computing"</span>,</span>
                    <span className="t-out">&nbsp;&nbsp;"uni": <span className="text-yellow">"USM"</span>,</span>
                    <span className="t-out">&nbsp;&nbsp;"year": <span className="text-cyan">3</span>,</span>
                    <span className="t-out">&nbsp;&nbsp;"location": <span className="text-yellow">"Penang, MY"</span>,</span>
                    <span className="t-out">&nbsp;&nbsp;"status": <span className="mag">"available"</span></span>
                    <span className="t-out">{'}'}</span>
                  </>
                )}

                <div className="t-row" style={{ marginTop: 10 }}>
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
            <p className="about-bio">
              I'm a <strong>Computer Science student</strong> at
              USM majoring in{' '}
              <strong>Intelligent Computing</strong>, passionate
              about <strong>AI and machine learning</strong>.
              Specifically, how machine learning or AI systems can transform{' '}
              <strong>complex data into meaningful decisions</strong>.
              <br /><br />
              I enjoy solving complex problems as the sense of satisfaction are highly rewarding. I'm also driven
              by the challenge of designing models that are not only accurate, but{' '}
              <strong>efficient, scalable, and impactful</strong>{' '}
              in real-world applications.
            </p>

            {/* Tags */}
            <div className="tags-container">
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


    </section>
  )
}
