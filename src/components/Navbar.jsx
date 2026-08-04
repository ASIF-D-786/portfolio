import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle.jsx'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`container-px max-w-7xl mx-auto flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass px-5 py-2.5' : 'px-2 py-1'
        }`}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('#hero')
          }}
          className="font-display font-semibold text-lg tracking-tight cursor-pointer"
        >
          <span className="text-ink dark:text-ink">asifbaba</span>
          <span className="gradient-text">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(link.href)
              }}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                active === link.href
                  ? 'text-ink bg-white/[0.08] dark:bg-white/[0.08] bg-black/[0.06] font-medium'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass cursor-pointer"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden container-px mt-3"
          >
            <nav className="glass rounded-2xl flex flex-col p-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  className={`px-4 py-2.5 rounded-xl font-mono text-sm cursor-pointer ${
                    active === link.href
                      ? 'text-ink bg-white/[0.08] dark:bg-white/[0.08] bg-black/[0.06] font-medium'
                      : 'text-ink-muted'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
