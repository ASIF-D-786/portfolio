import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiExternalLink, FiMail, FiArrowDown } from 'react-icons/fi'
import ParticleBackground from './ParticleBackground.jsx'
import { profile } from '../data/portfolioData.js'
import { fadeUp, staggerContainer } from '../utils/animations.js'

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-grad-radial-hero"
    >
      <ParticleBackground />

      <div className="relative z-10 section pt-32 pb-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="eyebrow mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-pulse" />
            open to opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight"
          >
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-3 font-mono text-ink-muted text-sm sm:text-base"
          >
            {profile.degree}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 h-9 font-display text-xl sm:text-2xl font-medium text-ink"
          >
            <TypeAnimation
              sequence={profile.roles.flatMap((r) => [r, 1800])}
              wrapper="span"
              speed={45}
              className="gradient-text"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-ink-muted text-base sm:text-lg leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary cursor-pointer">
              <FiExternalLink size={16} /> Open Resume
            </a>
            <button onClick={() => scrollTo('#contact')} className="btn-ghost cursor-pointer">
              <FiMail size={16} /> Contact Me
            </button>
            <button onClick={() => scrollTo('#projects')} className="btn-ghost cursor-pointer">
              View Projects
            </button>
          </motion.div>
        </motion.div>

        {/* Signature element: a live "system status" readout instead of a static photo card,
            reinforcing the AI-engineer identity through the hero itself. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] overflow-hidden glass p-2"
            >
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden flex items-center justify-center border border-white/10 dark:border-white/10 light:border-black/10">
                <img src="profile.jpg" alt="DUDEKULA ASIF BABA profile" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-8 -left-10 w-56 glass rounded-xl p-4 font-mono text-[11px] leading-relaxed hidden sm:block"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                <span className="w-2 h-2 rounded-full bg-neutral-500 dark:bg-neutral-300" />
              </div>
              <p className="text-ink-muted">
                <span className="text-neutral-500 dark:text-neutral-400">$</span> status --engineer
              </p>
              <p className="text-ink dark:text-ink font-semibold">✓ available_for_hire: true</p>
              <p className="text-ink-muted">→ stack: AI · Full&nbsp;Stack</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-muted cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  )
}
