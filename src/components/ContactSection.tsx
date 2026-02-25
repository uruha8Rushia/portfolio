import { useRef } from 'react'
import type { ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from './SectionHeader'
import BlinkCursor from './BlinkCursor'

/* ── SVG ICONS ───────────────────────────────────────── */
function IconEmail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.037-1.85-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667H9.99V9h3.114v1.561h.044c.433-.822 1.493-1.689 3.073-1.689 3.287 0 3.894 2.163 3.894 4.976v6.604zM5.337 7.433a1.81 1.81 0 1 1 0-3.621 1.81 1.81 0 0 1 0 3.621zM6.956 20.452H3.718V9h3.238v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

/* ── CONTACT LINKS ───────────────────────────────────── */
const LINKS: { type: string; icon: ReactNode; label: string; href: string }[] = [
  {
    type: 'EMAIL',
    icon: <IconEmail />,
    label: 'jiongming2004@gmail.com',
    href: 'mailto:jiongming2004@gmail.com',
  },
  {
    type: 'LINKEDIN',
    icon: <IconLinkedIn />,
    label: 'yeap-jiong-ming',
    href: 'https://www.linkedin.com/in/yeap-jiong-ming',
  },
  {
    type: 'GITHUB',
    icon: <IconGitHub />,
    label: 'uruha8Rushia',
    href: 'https://github.com/uruha8Rushia',
  },
]


/* ── CONTACT SECTION ─────────────────────────────────── */
export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, var(--dark2) 0%, var(--dark) 100%)',
        padding: '120px 48px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <SectionHeader label="// 05. CONNECT" title="CONTACT" inView={inView} />

        {/* two-column layout */}
        <div
          className="contact-layout-responsive"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
        >

          {/* ── LEFT: blurb + links ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p style={{
              fontSize: 16,
              color: 'var(--text)',
              lineHeight: 1.85,
              marginBottom: 36,
              fontWeight: 300,
            }}>
              Available for internships, collaborations, and interesting projects.
              Let's build something <span style={{ color: 'var(--cyan)' }}>intelligent</span> together.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {LINKS.map(({ type, icon, label, href }, i) => (
                <motion.a
                  key={type}
                  href={href}
                  target={type !== 'EMAIL' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="contact-link"
                >
                  <span style={{ width: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan)', flexShrink: 0 }}>{icon}</span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: 10,
                      color: 'var(--text-dim)',
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      marginBottom: 2,
                    }}>
                      {type}
                    </span>
                    <span style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--cyan)',
                      transition: 'text-shadow 0.3s',
                    }}>
                      {label}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Entry Plug terminal ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="terminal-window">
              <div className="terminal-bar">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">send_message.sh</span>
              </div>
              <div className="terminal-body" style={{ lineHeight: 2 }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <span className="t-prompt">$</span>
                  <span className="t-cmd"> ./reach_out.sh</span>
                </div>
                <span className="t-out dim">// Initializing connection...</span>
                <span className="t-out cyan">&gt; STATUS: Open to opportunities</span>
                <span className="t-out cyan">&gt; ROLE: Internship / Collaboration</span>
                <span className="t-out cyan">&gt; AREA: AI / ML / Software Engineering</span>
                <span className="t-out" style={{ marginTop: 8 }} />
                <span className="t-out dim">// Best way to reach me:</span>
                <span className="t-out mag">jiongming2004@gmail.com</span>
                <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">&nbsp;<BlinkCursor /></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  )
}
