import { useEffect, useState } from 'react'
import useTheme from './hooks/useTheme.js'

import Loader from './components/Loader.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Achievements from './components/Achievements.jsx'

import LeetCode from './components/LeetCode.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader show={loading} />
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />

        <LeetCode />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
