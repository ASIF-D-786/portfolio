import { useEffect, useRef } from 'react'

/**
 * Lightweight canvas animation styled like a sparse neural network graph —
 * nodes drift slowly and connect to nearby nodes, echoing the AI/ML theme
 * instead of a generic particle field.
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let nodes = []
    let width, height

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const resize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      const count = Math.min(60, Math.floor((width * height) / 22000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const isLight = document.body.classList.contains('light')

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < 0 || a.x > width) a.vx *= -1
        if (a.y < 0 || a.y > height) a.vy *= -1

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.strokeStyle = isLight 
              ? `rgba(0, 0, 0, ${0.05 * (1 - dist / 140)})` 
              : `rgba(255, 255, 255, ${0.07 * (1 - dist / 140)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = isLight ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.35)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)

    if (!prefersReducedMotion) {
      draw()
    } else {
      // Draw a single static frame for reduced-motion users
      draw()
      cancelAnimationFrame(animationId)
    }

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      aria-hidden="true"
    />
  )
}
