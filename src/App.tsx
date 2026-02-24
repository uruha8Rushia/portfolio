import './index.css'
import DotNav from './components/DotNav'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import HobbiesSection from './components/HobbiesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

/* ── APP ──────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      {/* Global vertical dot navigation */}
      <DotNav />

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </>
  )
}

