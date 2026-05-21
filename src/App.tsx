import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import HeroLebanon from './components/HeroLebanon'
import Particles from './components/Particles'
import SkillsShowcase from './components/SkillsShowcase'
import ProjectsGallery from './components/ProjectsGallery'
import AboutLebanon from './components/AboutLebanon'
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
      className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#1a0f0f] to-[#0a1a15] relative overflow-hidden pattern-arabian"
    >
      {/* Background éléments libanais */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        {/* Gradient cèdre */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0b5c3d]/10 to-transparent rounded-full blur-3xl" />
        {/* Gradient rouge */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#ed2939]/5 to-transparent rounded-full blur-3xl" />
        {/* Accent or */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-[#d4a574]/3 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Patterns arabes animés */}
      <svg className="fixed inset-0 w-full h-full z-0 opacity-5 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <pattern id="arabic" patternUnits="userSpaceOnUse" width="100" height="100">
            <path d="M0,50 Q25,0 50,50 T100,50" stroke="#ed2939" strokeWidth="2" fill="none" />
            <path d="M0,50 Q25,100 50,50 T100,50" stroke="#0b5c3d" strokeWidth="2" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arabic)" />
      </svg>

      <Particles />

      <div className="relative z-10">
        <Header />
        <HeroLebanon mousePos={mousePos} />
        <AboutLebanon />
        <SkillsShowcase />
        <ProjectsGallery />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default App
