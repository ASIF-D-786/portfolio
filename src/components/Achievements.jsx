import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { achievements } from '../data/portfolioData.js'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations.js'

function AnimatedNumber({ value, suffix, isInView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1500
    const stepTime = 16
    const steps = duration / stepTime
    const increment = value / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span className="font-display text-4xl sm:text-5xl font-bold gradient-text">
      {count}
      {suffix}
    </span>
  )
}

export default function Achievements() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="achievements" className="section" ref={ref}>
      <SectionHeading tag="07 · achievements" title="By the numbers" align="center" />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {achievements.map((a) => (
          <motion.div key={a.label} variants={fadeUp} className="card text-center">
            <AnimatedNumber value={a.value} suffix={a.suffix} isInView={isInView} />
            <p className="mt-2 text-xs sm:text-sm text-ink-muted font-mono">{a.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
