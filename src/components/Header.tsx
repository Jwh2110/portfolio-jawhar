import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact']

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-[#ff8c42]/20 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-serif text-2xl font-bold gradient-landscape"
          >
            Jawhar 🇱🇧
          </motion.div>

          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, color: '#ff8c42' }}
                className="text-sm font-medium text-gray-300 hover:text-[#ff8c42] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#87ceeb] to-[#ff8c42] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#ff8c42]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 space-y-3"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-400 hover:text-[#ff8c42] transition-colors"
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
