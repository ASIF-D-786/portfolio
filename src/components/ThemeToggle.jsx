import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-10 h-10 flex items-center justify-center rounded-full glass hover:border-white/20 dark:hover:border-white/20 hover:border-black/20 transition-all duration-200 cursor-pointer"
    >
      {theme === 'dark' ? (
        <FiSun className="text-white" size={16} />
      ) : (
        <FiMoon className="text-black" size={16} />
      )}
    </button>
  )
}
