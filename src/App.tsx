import { useEffect, useRef } from 'react'
import Header from './components/Header'
import HeroEpic from './components/HeroEpic'
import Particles from './components/Particles'
import SkillsShowcase from './components/SkillsShowcase'
import ProjectsGallery from './components/ProjectsGallery'
import AboutUnique from './components/AboutUnique'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY
        // Effet parallax subtil sur le background
        containerRef.current.style.backgroundPosition = `0% ${scrollY * 0.5}px`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#16213e] to-[#0f3460] relative overflow-hidden"
    >
      {/* Background animé */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-[#ff006e] to-[#00d4ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gradient-to-br from-[#00ff88] to-[#ff006e] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Particles */}
      <Particles />

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
