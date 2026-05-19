import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Accueil', id: 'home' },
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Projets', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-serif text-2xl font-bold text-primary"
          >
            J<span className="text-accent">awhar</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-accent hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(false)
                }}
                className="block w-full text-left px-4 py-2 text-accent hover:bg-primary/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  )
}
