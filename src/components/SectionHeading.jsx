import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../utils/animations.js'

/**
 * Section headings styled like code comments (// 01 about) — a nod to the
 * engineering subject matter, used consistently in place of generic numbered circles.
 */
export default function SectionHeading({ tag, title, description, align = 'left' }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mb-14 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="text-ink-muted text-base leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
