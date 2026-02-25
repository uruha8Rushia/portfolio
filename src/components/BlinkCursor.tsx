/* ── Reusable blinking block cursor ─────────────────────── */
export default function BlinkCursor() {
  return (
    <span
      style={{ display: 'inline-block', animation: 'blink 1s infinite', color: 'var(--cyan)' }}
    >
      ▋
    </span>
  )
}
