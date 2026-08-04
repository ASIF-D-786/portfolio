import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi'
import { profile } from '../data/portfolioData.js'

const SOCIALS = [
  { icon: FiGithub, href: profile.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: profile.social.linkedin, label: 'LinkedIn' },
  { icon: FiCode, href: profile.social.leetcode, label: 'LeetCode' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section !py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display font-semibold">
          asifbaba<span className="gradient-text">.dev</span>
        </p>

        <div className="flex items-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 flex items-center justify-center rounded-full glass hover:border-white/20 dark:hover:border-white/20 hover:border-black/20 hover:text-ink transition-colors cursor-pointer"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>

        <p className="text-xs text-ink-muted font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
      </div>
    </footer>
  )
}
