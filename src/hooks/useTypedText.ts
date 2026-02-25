import { useEffect, useRef, useState } from 'react'

const SUBTITLES = [
  'CS Student @ Universiti Sains Malaysia',
  'Intelligent Computing Major',
  'ML · AI Systems · Software Engineering',
]

/* ── Cycling typed-text hook ──────────────────────────────── */
export function useTypedText(): string {
  const [display,   setDisplay]   = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx,   setCharIdx]   = useState(0)
  const [deleting,  setDeleting]  = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = SUBTITLES[phraseIdx]

    if (!deleting) {
      timeout.current = setTimeout(() => {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 >= current.length) {
          // Finished typing — pause, then start deleting
          timeout.current = setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIdx(c => c + 1)
        }
      }, charIdx === 0 ? 300 : 60)
    } else {
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
