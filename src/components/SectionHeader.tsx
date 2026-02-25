import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string   // e.g. "// 01. IDENTITY"
  title: string   // e.g. "ABOUT ME"
  inView: boolean
}

/* ── Shared section header: label → h2 → animated divider ── */
export default function SectionHeader({ label, title, inView }: SectionHeaderProps) {
  return (
    <>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {label}
      </motion.span>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="section-divider"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ transformOrigin: 'left' }}
      />
    </>
  )
}
