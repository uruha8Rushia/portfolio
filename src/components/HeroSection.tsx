import { useEffect, useRef, useState } from 'react'
import { motion, type Transition} from 'framer-motion'

/* ── TYPED EFFECT HOOK ─────────────────────────────────── */
const SUBTITLES = [
  'CS Student @ Universiti Sains Malaysia',
  'Intelligent Computing Major',
  'ML · AI Systems · Software Engineering',
]

function useTypedText() {
  const [display, setDisplay]     = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx]     = useState(0)
  const [deleting, setDeleting]   = useState(false)
  const timeout                   = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = SUBTITLES[phraseIdx]

    if (!deleting) {
      // typing
      timeout.current = setTimeout(() => {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 >= current.length) {
          // finished typing — pause then start deleting
          timeout.current = setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIdx(c => c + 1)
        }
      }, charIdx === 0 ? 300 : 60)
    } else {
      // deleting
      timeout.current = setTimeout(() => {
        if (charIdx > 0) {
          setDisplay(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        } else {
          setDeleting(false)
          setPhraseIdx(p => (p + 1) % SUBTITLES.length)
        }
      }, 35)
    }

    return () => { if (timeout.current) clearTimeout(timeout.current) }
  }, [charIdx, deleting, phraseIdx])

  return display
}

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

/* ── CUSTOM CURSOR ─────────────────────────────────────── */
function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dot.current)  { dot.current.style.left = `${e.clientX}px`; dot.current.style.top = `${e.clientY}px` }
      if (ring.current) { ring.current.style.left = `${e.clientX}px`; ring.current.style.top = `${e.clientY}px` }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}

export default function HeroSection() {
  const typed = useTypedText()

  return (
    <>
      <CustomCursor />

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

        {/* Glitch grid drift keyframe injected here */}
        <style>{`
          @keyframes grid-drift {
            0%   { transform: translateY(0); }
            100% { transform: translateY(60px); }
          }
          @keyframes hero-float {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50%       { transform: translateX(-50%) translateY(-8px); }
          }
        `}</style>

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
