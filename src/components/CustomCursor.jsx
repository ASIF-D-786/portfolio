import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    const hasTouch = window.matchMedia('(pointer: coarse)').matches
    setIsTouch(hasTouch)
    if (hasTouch) return

    const move = (e) => {
      cursorX.set(e.clientX - 12)
      cursorY.set(e.clientY - 12)
      if (!isVisible) setIsVisible(true)

      const target = e.target
      setIsPointer(
        !!target.closest('a, button, input, textarea, [role="button"], .cursor-pointer')
      )
    }

    const hide = () => setIsVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', hide)
    }
  }, [cursorX, cursorY, isVisible])

  if (isTouch) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[70] mix-blend-difference hidden md:block"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 1 : 0,
        scale: isPointer ? 1.8 : 1,
      }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <div className="w-full h-full rounded-full bg-white" />
    </motion.div>
  )
}
