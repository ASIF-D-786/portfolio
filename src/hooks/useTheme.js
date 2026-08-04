import { useEffect, useState } from 'react'

/**
 * Manages dark/light theme, persisted to localStorage and
 * synced to a class on <body> that index.css reads from.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.body.classList.remove('dark', 'light')
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
