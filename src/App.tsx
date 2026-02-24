import './App.css'
import './index.css'
import DotNav from './components/DotNav'
import HeroSection from './components/HeroSection'

/* ── PLACEHOLDER SECTIONS ─────────────────────────────── */
/* About, Projects, Skills, Hobbies, Contact will be
   implemented section-by-section after approval.          */

function PlaceholderSection({
  id,
  label,
  num,
}: {
  id: string
  label: string
  num: string
}) {
  return (
    <section
      id={id}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: num === '02' || num === '04'
          ? 'var(--dark2)'
          : 'var(--dark)',
        borderTop: '1px solid rgba(0,245,255,0.06)',
      }}
    >
      <div style={{ textAlign: 'center', opacity: 0.25 }}>
        <span
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 11,
            color: 'var(--magenta)',
            letterSpacing: 4,
            display: 'block',
            marginBottom: 8,
          }}
        >
          // {num}. {label.toUpperCase()}
        </span>
        <p
          style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: 32,
            color: 'var(--cyan)',
            margin: 0,
          }}
        >
          {label.toUpperCase()}
        </p>
        <p
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 12,
            color: 'var(--text-dim)',
            marginTop: 16,
            letterSpacing: 2,
          }}
        >
          PENDING IMPLEMENTATION
        </p>
      </div>
    </section>
  )
}

/* ── APP ──────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      {/* Global vertical dot navigation */}
      <DotNav />

      {/* ① HERO — implemented */}
      <HeroSection />

      {/* ② – ⑥ Placeholder sections (to be replaced section-by-section) */}
      <PlaceholderSection id="about"    label="About"    num="02" />
      <PlaceholderSection id="projects" label="Projects" num="03" />
      <PlaceholderSection id="skills"   label="Skills"   num="04" />
      <PlaceholderSection id="hobbies"  label="Hobbies"  num="05" />
      <PlaceholderSection id="contact"  label="Contact"  num="06" />
    </>
  )
}

