import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import HeroLebanonLandscape from './components/HeroLebanonLandscape'
import Particles from './components/Particles'
import SkillsLebanon from './components/SkillsLebanon'
import ProjectsLebanon from './components/ProjectsLebanon'
import AboutLebanon from './components/AboutLebanon'
import ContactLebanon from './components/ContactLebanon'
import Footer from './components/Footer'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
      {/* Animated sky background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 animated-sky opacity-40 pointer-events-none" />

      {/* Mountain silhouettes */}
      <div className="fixed bottom-0 left-0 w-full z-1 pointer-events-none">
        <div className="mountain" style={{ opacity: 0.1 }} />
      </div>

      {/* Parallax layers */}
      <div
        className="fixed top-0 left-0 w-full h-full z-2 pointer-events-none opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 stone-texture" />
      </div>

      <Particles />

      <div className="relative z-10">
        <Header />
        <HeroLebanonLandscape scrollY={scrollY} />
        <AboutLebanon />
        <SkillsLebanon />
        <ProjectsLebanon />
        <ContactLebanon />
        <Footer />
      </div>
    </div>
  )
}

export default App
