import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { IoFootball, IoBasketball, IoTrainSharp } from 'react-icons/io5'
import { GiShuttlecock, GiVolleyballBall, GiSpiderWeb, GiSwordsEmblem, GiKatana, GiAk47, GiCrosshair, GiStoneWall , GiFist, GiVikingHelmet } from 'react-icons/gi'
import { BsController, BsTv } from 'react-icons/bs'
import { FaHeart, FaRunning, FaSpotify } from 'react-icons/fa'

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
      className="hobby-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? borderColor : 'rgba(0,245,255,0.08)'}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 0 30px ${borderColor}, 0 16px 40px rgba(0,0,0,0.4)` : 'none',
      }}
    >
      {/* top accent line */}
      <div
        className="hobby-card-accent"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)`, opacity: hovered ? 1 : 0.3 }}
      />

      {/* card header */}
      <div
        className="hobby-card-header"
        style={{ borderBottom: `1px solid ${borderColor.replace('0.25', '0.1')}` }}
      >
        <span>{icon}</span>
        <span className="hobby-card-title" style={{ color, textShadow: hovered ? glow : 'none' }}>
          {title}
        </span>
      </div>

      {/* items list */}
      <div className="hobby-items">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            className="hobby-item"
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.12 + i * 0.07 }}
          >
            <span className="hobby-item-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="hobby-item-icon">{item.icon}</span>
            <div className="hobby-item-body">
              <div className="hobby-item-name">{item.name}</div>
              <div className="hobby-item-sub">{item.sub}</div>
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
    <section id="hobbies" ref={sectionRef}>
      <div className="section-inner">

        <SectionHeader label="// 04. OFF-DUTY" title="HOBBIES" inView={inView} />

        {/* hobby cards grid */}
        <div className="hobbies-grid">
          {HOBBIES.map((h, i) => (
            <HobbyCard key={h.id} hobby={h} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          className="spotify-embed-card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="spotify-embed-header">
            <FaSpotify size={18} />
            <span>CURRENT ALBUM PICK</span>
          </div>

          <iframe
            className="spotify-iframe"
            src="https://open.spotify.com/embed/playlist/2isX6bMke3WqX4vYNxEkWB?utm_source=generator"
            width="100%"
            height="352"
            frameBorder={0}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify album embed"
          />
        </motion.div>
      </div>


    </section>
  )
}
{/* <iframe 
  data-testid="embed-iframe" 
  style="border-radius:12px" 
  src="https://open.spotify.com/embed/album/0eYZtVRBgZDpEibSKVri8P?utm_source=generator" 
  width="100%" 
  height="352" 
  frameBorder="0" 
  allowfullscreen="" 
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  loading="lazy">
</iframe> */}