import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { IoFootball, IoBasketball, IoTrainSharp } from 'react-icons/io5'
import { GiShuttlecock, GiVolleyballBall, GiSpiderWeb, GiSwordsEmblem, GiKatana, GiAk47, GiCrosshair, GiStoneWall , GiFist, GiVikingHelmet } from 'react-icons/gi'
import { BsController, BsTv } from 'react-icons/bs'
import { FaHeart, FaRunning } from 'react-icons/fa'

/* ── HOBBY DATA ──────────────────────────────────────── */
const HOBBIES: {
  id: string
  icon: ReactNode
  title: string
  color: string
  glow: string
  borderColor: string
  items: { icon: ReactNode; name: string; sub: string }[]
}[] = [
  {
    id: 'sports',
    icon: <IoFootball size={20} />,
    title: 'SPORTS',
    color: 'var(--cyan)',
    glow: 'var(--glow-cyan)',
    borderColor: 'rgba(0,245,255,0.25)',
    items: [
      { icon: <IoFootball size={16} />,       name: 'Football',   sub: 'The beautiful game' },
      { icon: <IoBasketball size={16} />,     name: 'Basketball', sub: 'Street & court' },
      { icon: <GiShuttlecock size={16} />,    name: 'Badminton',  sub: 'Smash & rally' },
      { icon: <GiVolleyballBall size={16} />, name: 'Volleyball', sub: 'Spike & serve' },
      { icon: <FaRunning size={16} />,        name: 'Jogging',    sub: 'Early morning runs' },
    ],
  },
  {
    id: 'games',
    icon: <BsController size={20} />,
    title: 'GAMES',
    color: 'var(--magenta)',
    glow: 'var(--glow-mag)',
    borderColor: 'rgba(255,0,160,0.25)',
    items: [
      { icon: <IoTrainSharp  size={16} />, name: 'Honkai: Star Rail', sub: 'Turn-based RPG' },
      { icon: <GiSwordsEmblem  size={16} />,    name: 'Elden Ring',        sub: 'Soulslike Action' },
      { icon: <GiKatana size={16} />,        name: 'Sekiro',            sub: 'Soulslike Action' },
      { icon: <GiAk47 size={16} />,          name: 'CS2',               sub: 'Tactical Shooter' },
      { icon: <GiCrosshair size={16} />,      name: 'Valorant',          sub: 'Tactical Shooter' },
    ],
  },
  {
    id: 'anime',
    icon: <BsTv size={20} />,
    title: 'MOVIES & ANIME',
    color: 'var(--yellow)',
    glow: '0 0 10px #ffe600, 0 0 30px #ffe60044',
    borderColor: 'rgba(255,230,0,0.25)',
    items: [
      { icon: <GiStoneWall  size={16} />,             name: 'Attack on Titan',              sub: 'Action · Anime' },
      { icon: <GiFist size={16} />,              name: 'My Hero Academia',              sub: 'Shonen · Anime' },
      { icon: <FaHeart size={16} />,             name: 'Teasing Master Takagi-san',    sub: 'Romance · Anime' },
      { icon: <GiVikingHelmet size={16} />,       name: 'Loki',                          sub: 'Sci-Fi · Marvel' },
      { icon: <GiSpiderWeb size={16} />,         name: 'Spider-Man: Across the Spider-Verse', sub: 'Animation · Marvel' },
    ],
  },
]

/* ── HOBBY CARD ──────────────────────────────────────── */
function HobbyCard({
  hobby,
  index,
  inView,
}: {
  hobby: (typeof HOBBIES)[number]
  index: number
  inView: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const { icon, title, color, glow, borderColor, items } = hobby

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(7,13,26,0.85)',
        border: `1px solid ${hovered ? borderColor : 'rgba(0,245,255,0.08)'}`,
        borderRadius: 4,
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 0 30px ${borderColor}, 0 16px 40px rgba(0,0,0,0.4)` : 'none',
        position: 'relative',
      }}
    >
      {/* top accent line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 2,
        background: `linear-gradient(90deg, ${color}, transparent)`,
        opacity: hovered ? 1 : 0.3,
        transition: 'opacity 0.3s',
      }} />

      {/* card header */}
      <div style={{
        background: 'rgba(0,245,255,0.04)',
        borderBottom: `1px solid ${borderColor.replace('0.25', '0.1')}`,
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
        <span style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: 13,
          fontWeight: 700,
          color,
          letterSpacing: 3,
          textShadow: hovered ? glow : 'none',
          transition: 'text-shadow 0.3s',
        }}>
          {title}
        </span>
      </div>

      {/* items list */}
      <div style={{ padding: '8px 0' }}>
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.12 + i * 0.07 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '11px 20px',
              borderBottom: i < items.length - 1
                ? ' 1px solid rgba(255,255,255,0.03)'
                : 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,245,255,0.04)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            {/* index number */}
            <span style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 10,
              color: 'var(--text-dim)',
              width: 18,
              textAlign: 'right',
              flexShrink: 0,
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>

            <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0, color: 'var(--text-dim)' }}>{item.icon}</span>

            <div style={{ minWidth: 0 }}>
              <div style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--text)',
                lineHeight: 1.2,
              }}>
                {item.name}
              </div>
              <div style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: 10,
                color: 'var(--text-dim)',
                letterSpacing: 1,
                marginTop: 2,
              }}>
                {item.sub}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

/* ── HOBBIES SECTION ─────────────────────────────────── */
export default function HobbiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="hobbies"
      ref={sectionRef}
      style={{ background: 'var(--dark)', padding: '120px 48px', position: 'relative' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <SectionHeader label="// 04. OFF-DUTY" title="HOBBIES" inView={inView} />

        {/* 4-card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {HOBBIES.map((h, i) => (
            <HobbyCard key={h.id} hobby={h} index={i} inView={inView} />
          ))}
        </div>
      </div>


    </section>
  )
}
