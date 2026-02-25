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
    <>

      <section
        id="hero"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: '100vh',
          padding: '0 48px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Animated grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-drift 20s linear infinite',
            zIndex: 0,
          }}
        />


        {/* Corner brackets */}
        {(['tl','tr','bl','br'] as const).map(pos => (
          <div
            key={pos}
            style={{
              position: 'absolute',
              width: 80,
              height: 80,
              borderColor: 'var(--cyan)',
              borderStyle: 'solid',
              opacity: 0.4,
              zIndex: 1,
              ...(pos === 'tl' && { top: 80,  left: 48,  borderWidth: '2px 0 0 2px' }),
              ...(pos === 'tr' && { top: 80,  right: 48, borderWidth: '2px 2px 0 0' }),
              ...(pos === 'bl' && { bottom: 48, left: 48, borderWidth: '0 0 2px 2px' }),
              ...(pos === 'br' && { bottom: 48, right: 48, borderWidth: '0 2px 2px 0' }),
            }}
          />
        ))}

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>

          {/* Eyebrow */}
          <motion.p {...fadeUp(0.3)} style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 13,
            color: 'var(--magenta)',
            letterSpacing: 5,
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            // INTELLIGENT COMPUTING STUDENT
          </motion.p>

          {/* Name */}
          <motion.h1 {...fadeUp(0.5)} style={{ margin: 0, lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Orbitron', monospace",
              fontWeight: 900,
              fontSize: 'clamp(40px, 7vw, 96px)',
              color: '#fff',
              display: 'block',
            }}>
              YEAP
            </span>
            <span
              className="glitch"
              data-text="JIONG MING"
              style={{
                fontFamily: "'Orbitron', monospace",
                fontWeight: 900,
                fontSize: 'clamp(40px, 7vw, 96px)',
                color: 'var(--cyan)',
                textShadow: 'var(--glow-cyan)',
                display: 'block',
              }}
            >
              JIONG MING
            </span>
          </motion.h1>

          {/* Typed subtitle */}
          <motion.p {...fadeUp(0.7)} style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 'clamp(14px, 2vw, 20px)',
            color: 'var(--text-dim)',
            marginTop: 24,
            marginBottom: 40,
            minHeight: '1.6em',
          }}>
            {typed}
            <span className="blink" style={{ color: 'var(--cyan)', marginLeft: 2 }}>_</span>
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(1.0)} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              ↓ DOWNLOAD CV
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 10,
          color: 'var(--text-dim)',
          letterSpacing: 3,
          animation: 'hero-float 2s ease-in-out infinite',
          zIndex: 2,
        }}>
          SCROLL
          <div style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(var(--cyan), transparent)',
          }} />
        </div>
      </section>
    </>
  )
}
