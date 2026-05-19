import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import HeroEpic from './components/HeroEpic'
import Particles from './components/Particles'
import SkillsShowcase from './components/SkillsShowcase'
import ProjectsGallery from './components/ProjectsGallery'
import AboutUnique from './components/AboutUnique'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CursorTrail from './components/CursorTrail'
import FloatingElements from './components/FloatingElements'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      
      // Parallax effect
      if (containerRef.current) {
        const scrollY = window.scrollY
        containerRef.current.style.backgroundPosition = `${e.clientX * 0.1}px ${scrollY * 0.5}px`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#16213e] to-[#0f3460] relative overflow-hidden"
    >
      {/* Curseur Trail */}
      <CursorTrail mousePos={mousePos} />

      {/* Background animé fou */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        {/* Blobs dynamiques */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-liquid-morph" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-[#ff006e] to-[#00d4ff] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounce-crazy animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gradient-to-br from-[#00ff88] to-[#ff006e] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-spin-wild animation-delay-4000" />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-[#00d4ff] to-[#ff006e] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse-crazy" />
        </div>

        {/* Grille holographique */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 136, 0.3) 25%, rgba(0, 255, 136, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 136, 0.3) 75%, rgba(0, 255, 136, 0.3) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 136, 0.3) 25%, rgba(0, 255, 136, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 136, 0.3) 75%, rgba(0, 255, 136, 0.3) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Particles */}
      <Particles />

      {/* Éléments flottants */}
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroEpic />
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
