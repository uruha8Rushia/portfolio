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
    <nav className="dotnav" aria-label="Section navigation">
      {/* vertical line */}
      <div className="dotnav-line" />

      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id

        return (
          <div
            key={id}
            className="dotnav-item"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* label tooltip */}
            <AnimatePresence>
              {hovered === id && (
                <motion.span
                  className="dotnav-label"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    color: isActive ? 'var(--cyan)' : 'var(--text-dim)',
                    textShadow: isActive ? 'var(--glow-cyan)' : 'none',
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
