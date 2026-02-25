import { motion, type Transition } from 'framer-motion'
import { useTypedText } from '../hooks/useTypedText'

/* ── FADE-UP MOTION HELPER ─────────────────────────────── */
const tx = (delay: number): Transition => ({
  duration: 0.7,
  ease: [0.25, 0.46, 0.45, 0.94],
  delay,
})

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0 },
  transition: tx(delay),
})

export default function HeroSection() {
  const typed = useTypedText()

  return (
    <section id="hero">

      {/* Animated grid background */}
      <div className="hero-grid-bg" />

      {/* Corner brackets */}
      {(['tl', 'tr', 'bl', 'br'] as const).map(pos => (
        <div key={pos} className={`corner-bracket corner-${pos}`} />
      ))}

      {/* Content */}
      <div className="hero-content">

        {/* Eyebrow */}
        <motion.p {...fadeUp(0.3)} className="hero-eyebrow">
          // INTELLIGENT COMPUTING STUDENT
        </motion.p>

        {/* Name */}
        <motion.h1 {...fadeUp(0.5)} className="hero-h1">
          <span className="hero-name hero-name-white">YEAP</span>
          <span className="glitch hero-name hero-name-cyan" data-text="JIONG MING">
            JIONG MING
          </span>
        </motion.h1>

        {/* Typed subtitle */}
        <motion.p {...fadeUp(0.7)} className="hero-subtitle">
          {typed}
          <span className="hero-cursor">_</span>
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(1.0)} className="hero-cta">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            ↓ DOWNLOAD CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        SCROLL
        <div className="hero-scroll-line" />
      </div>

    </section>
  )
}
