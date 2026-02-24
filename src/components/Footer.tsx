import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ── FOOTER ──────────────────────────────────────────── */
export default function Footer() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      style={{
        background: 'var(--dark)',
        borderTop: '1px solid rgba(0,245,255,0.08)',
        padding: '32px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
        maxWidth: '100%',
      }}
    >
      <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 11,
          color: 'var(--text-dim)',
          letterSpacing: 2,
        }}>
          <span style={{ color: 'var(--cyan)' }}>YEAP JIONG MING</span>
        </span>
        <span style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 11,
          color: 'var(--text-dim)',
          letterSpacing: 1,
        }}>
          © {new Date().getFullYear()} · BUILT WITH REACT + VITE
        </span>
      </div>
    </motion.footer>
  )
}
