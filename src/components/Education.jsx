import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import { education } from '../data/portfolioData.js'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading tag="05 · education" title="Academic background" />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5"
      >
        {education.map((edu, i) => (
          <motion.div key={i} variants={fadeUp} className="card flex gap-5 items-start">
            <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-neutral-200">
              <FiBookOpen size={20} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg">{edu.degree}</h3>
              <p className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm mt-0.5">{edu.institution}</p>
              <p className="font-mono text-xs text-ink-muted mt-1">{edu.period}</p>
              <p className="text-sm text-ink-muted mt-3 leading-relaxed">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
