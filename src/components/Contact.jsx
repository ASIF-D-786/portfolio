import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import { profile } from '../data/portfolioData.js'
import { fadeUp, viewportOnce } from '../utils/animations.js'

const CONTACT_ITEMS = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Mobile', value: profile.mobile, href: `tel:${profile.mobile}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/asif-baba-d', href: profile.social.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/ASIF-D-786', href: profile.social.github },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="section flex flex-col items-center">
      <SectionHeading
        tag="10 · contact"
        title="Let's build something"
        description="Open to full-time roles, internships, and interesting collaborations. Get in touch directly."
        align="center"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="w-full max-w-4xl"
      >
        {/* Business Card Container */}
        <div className="card border border-neutral-200 dark:border-neutral-800/85 p-8 sm:p-12 text-center md:text-left flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 hover:shadow-md transition-all duration-300">
          <div className="space-y-4 flex-1">
            <h3 className="font-display font-semibold text-2xl sm:text-3xl leading-tight tracking-tight text-ink dark:text-ink">
              {profile.name}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-ink-muted">
              {profile.roles.join(' | ')}
            </p>
            <p className="text-sm text-ink-muted leading-relaxed max-w-md pt-2">
              Looking for opportunities in AI engineering, machine learning, and full-stack software development. Feel free to reach out via any of these channels.
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid sm:grid-cols-2 gap-4 w-full lg:max-w-lg shrink-0">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-center gap-4 border border-black/[0.03] dark:border-white/[0.03] bg-neutral-100/50 dark:bg-neutral-900/40 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 rounded-xl p-4 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-neutral-200 shrink-0">
                    <Icon size={16} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-xs text-ink-muted font-mono">{item.label}</p>
                    <p className="text-xs sm:text-sm font-medium truncate text-ink">{item.value}</p>
                  </div>
                </div>
              )
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
