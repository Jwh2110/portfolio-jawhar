import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import HeroMinimal from './components/HeroMinimal'
import Particles from './components/Particles'
import SkillsShowcase from './components/SkillsShowcase'
import ProjectsGallery from './components/ProjectsGallery'
import AboutUnique from './components/AboutUnique'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#d4af37]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <Particles />

      <div className="relative z-10">
        <Header />
        <HeroMinimal mousePos={mousePos} />
        <AboutUnique />
        <SkillsShowcase />
        <ProjectsGallery />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default App
