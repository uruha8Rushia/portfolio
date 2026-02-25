import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ── FOOTER ──────────────────────────────────────────── */
export default function Footer() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.footer
      ref={ref}
      className="footer"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-inner">
        <span className="footer-text footer-brand">
          <span className="text-cyan">YEAP JIONG MING</span>
        </span>
        <span className="footer-text footer-credit">
          &copy; {new Date().getFullYear()} · BUILT WITH REACT + VITE
        </span>
      </div>
    </motion.footer>
  )
}
