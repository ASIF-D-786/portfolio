import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { experience } from '../data/portfolioData.js'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading tag="04 · experience" title="Professional Experience" />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative border-l-2 border-neutral-200 dark:border-neutral-800/80 pl-8 space-y-12 ml-4"
      >
        {experience.map((job, i) => (
          <motion.div key={i} variants={fadeUp} className="relative">
            {/* Timeline Dot */}
            <span className="absolute -left-[2.55rem] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-black border-4 border-neutral-800 dark:border-neutral-200 transition-colors" />

            {/* Experience Card */}
            <div className="card border border-neutral-200 dark:border-neutral-800/80 p-8 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-200/60 dark:border-neutral-800/60">
                <div className="flex items-center gap-4">
                  {/* Styled Monogram / Node connection logo for Handshake AI */}
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-neutral-800 dark:text-neutral-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 21a3 3 0 100-6 3 3 0 000 6zM6 8a3 3 0 100-6 3 3 0 000 6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 5.5h7M8.5 18.5h7M5.5 8.5v7M18.5 8.5v7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl leading-tight">{job.role}</h3>
                    <p className="text-neutral-900 dark:text-neutral-100 font-medium text-sm mt-0.5">{job.company}</p>
                  </div>
                </div>
                <div className="text-left md:text-right font-mono text-xs">
                  <p className="text-neutral-900 dark:text-neutral-100 font-medium">{job.period}</p>
                  <p className="text-neutral-500 dark:text-neutral-400 mt-0.5">Remote / Contract</p>
                </div>
              </div>

              {/* Work Bullet Points */}
              <ul className="space-y-3.5 mb-6">
                {job.points.map((pt, idx) => (
                  <li key={idx} className="text-sm text-ink-muted dark:text-ink-muted leading-relaxed flex gap-3">
                    <span className="text-neutral-400 dark:text-neutral-600 mt-1.5 shrink-0 select-none">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              {job.tech && (
                <div className="pt-5 border-t border-neutral-200/40 dark:border-neutral-800/40">
                  <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3">CORE TOOLS & TECHNOLOGIES</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="chip !py-1 !px-2.5 bg-neutral-50 dark:bg-neutral-900/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
