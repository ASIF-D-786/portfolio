import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import { certifications } from '../data/portfolioData.js'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading tag="06 · certifications" title="Certifications" />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="card"
          >
            <FiAward className="text-neutral-400 dark:text-neutral-500 mb-3" size={22} />
            <h3 className="font-display font-semibold leading-snug">{cert.title}</h3>
            <p className="text-sm text-ink-muted mt-1">{cert.issuer}</p>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-2">{cert.year}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
