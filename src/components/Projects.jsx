import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCpu } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data/portfolioData.js'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        tag="03 · projects"
        title="Featured projects"
        description="A selection of AI and full-stack systems, from research prototype to deployed product."
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="card flex flex-col overflow-hidden"
          >
            <div className="relative -mx-6 -mt-6 mb-5 h-40 bg-gradient-to-br from-neutral-200/40 to-neutral-100/30 dark:from-neutral-800/40 dark:to-neutral-900/30 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <FiCpu className="text-neutral-400 dark:text-neutral-600" size={40} />
              )}
            </div>

            <h3 className="font-display font-semibold text-lg leading-snug mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-ghost justify-center !px-4 !py-2.5 text-sm cursor-pointer ${
                  project.demo ? 'flex-1' : 'w-full'
                }`}
              >
                <FiGithub size={15} /> Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 justify-center !px-4 !py-2.5 text-sm cursor-pointer"
                >
                  <FiExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
