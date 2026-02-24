import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SECTIONS = [
  { id: 'hero',     label: 'HOME' },
  { id: 'about',    label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills',   label: 'SKILLS' },
  { id: 'hobbies',  label: 'HOBBIES' },
  { id: 'contact',  label: 'CONTACT' },
]

export default function DotNav() {
  const [active, setActive]       = useState('hero')
  const [hovered, setHovered]     = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Section navigation"
      style={{
        position: 'fixed',
        right: '28px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 5000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      {/* vertical line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(0,245,255,0.2), transparent)',
          pointerEvents: 'none',
        }}
      />

      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id

        return (
          <div
            key={id}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* label tooltip */}
            <AnimatePresence>
              {hovered === id && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    right: '24px',
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '2px',
                    color: isActive ? 'var(--cyan)' : 'var(--text-dim)',
                    whiteSpace: 'nowrap',
                    textShadow: isActive ? 'var(--glow-cyan)' : 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* dot button */}
            <button
              onClick={() => scrollTo(id)}
              aria-label={`Navigate to ${label}`}
              style={{
                all: 'unset',
                cursor: 'none',
                width: isActive ? '10px' : '6px',
                height: isActive ? '10px' : '6px',
                borderRadius: '50%',
                background: isActive ? 'var(--cyan)' : 'var(--text-dim)',
                boxShadow: isActive ? 'var(--glow-cyan)' : 'none',
                border: isActive ? 'none' : '1px solid rgba(0,245,255,0.2)',
                transition: 'all 0.3s ease',
                display: 'block',
                position: 'relative',
              }}
            />
          </div>
        )
      })}
    </nav>
  )
}
