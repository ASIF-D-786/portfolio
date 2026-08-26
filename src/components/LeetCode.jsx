import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { leetcodeUsername } from '../data/portfolioData.js'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations.js'

// Uses the public leetcode-stats-api (https://github.com/JeremyTsaii/leetcode-stats-api).
// If the API is unreachable, falls back to placeholder numbers so the layout never breaks.
const FALLBACK = {
  totalSolved: 120,
  easySolved: 67,
  mediumSolved: 46,
  hardSolved: 7,
}

export default function LeetCode() {
  const [stats, setStats] = useState(FALLBACK)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data && data.status !== 'error') {
          setStats({
            totalSolved: data.totalSolved ?? FALLBACK.totalSolved,
            easySolved: data.easySolved ?? FALLBACK.easySolved,
            mediumSolved: data.mediumSolved ?? FALLBACK.mediumSolved,
            hardSolved: data.hardSolved ?? FALLBACK.hardSolved,
          })
        }
      })
      .catch(() => {
        /* keep fallback values on failure */
      })
      .finally(() => !cancelled && setLoading(false))

    return () => {
      cancelled = true
    }
  }, [])

  const cards = [
    { label: 'Total Solved', value: stats.totalSolved, color: 'text-ink' },
    { label: 'Easy', value: stats.easySolved, color: 'text-ink' },
    { label: 'Medium', value: stats.mediumSolved, color: 'text-ink' },
    { label: 'Hard', value: stats.hardSolved, color: 'text-ink' },
  ]

  return (
    <section id="leetcode" className="section">
      <SectionHeading
        tag="09 · leetcode"
        title="Problem solving"
        description={loading ? 'Fetching latest stats…' : `Live data for @${leetcodeUsername}`}
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {cards.map((c) => (
          <motion.div key={c.label} variants={fadeUp} className="card text-center">
            <p className={`font-display text-3xl sm:text-4xl font-bold ${c.color}`}>
              {c.value}
            </p>
            <p className="mt-2 text-xs text-ink-muted font-mono">{c.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
