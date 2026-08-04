import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { aboutParagraphs, aboutStats } from '../data/portfolioData.js'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations.js'

function Counter({ value, suffix, isInView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1400
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
    <span className="font-display text-3xl sm:text-4xl font-semibold gradient-text">
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
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
    <section id="about" className="section">
      <SectionHeading
        tag="01 · about"
        title="A little about me"
        description="Where AI research meets shipped software."
      />

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-5"
        >
          {aboutParagraphs.map((p, i) => (
            <motion.p key={i} variants={fadeUp} className="text-ink-muted leading-relaxed">
              {p}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4"
        >
          {aboutStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="card text-center">
              <Counter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              <p className="mt-2 text-xs text-ink-muted font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
