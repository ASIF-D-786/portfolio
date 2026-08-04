import { motion } from 'framer-motion'
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiCpu,
  FiTool,
} from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import { skillCategories } from '../data/portfolioData.js'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations.js'

const ICONS = {
  code: FiCode,
  layout: FiLayout,
  server: FiServer,
  database: FiDatabase,
  cpu: FiCpu,
  tool: FiTool,
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        tag="02 · skills"
        title="Technologies I work with"
        description="A toolkit spanning applied ML and production-grade full-stack engineering."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skillCategories.map((cat) => {
          const Icon = ICONS[cat.icon] || FiCode
          return (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card group"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-neutral-200 mb-4 transition-all duration-200 group-hover:border-black/30 dark:group-hover:border-white/30">
                <Icon size={18} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
