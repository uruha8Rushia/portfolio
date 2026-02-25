import { useEffect, useRef } from 'react'

/* ── Custom two-part cursor (dot + ring) ─────────────────── */
export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.left = `${e.clientX}px`
        dot.current.style.top  = `${e.clientY}px`
      }
      if (ring.current) {
        ring.current.style.left = `${e.clientX}px`
        ring.current.style.top  = `${e.clientY}px`
      }
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
