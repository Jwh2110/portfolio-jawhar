import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-secondary to-dark">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
