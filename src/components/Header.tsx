import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

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
          ? 'bg-[#0a0e27]/90 backdrop-blur-xl border-b border-[#00ff88]/40 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo avec animation dingue */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="font-serif text-3xl font-bold gradient-text animate-neon-pulse cursor-pointer"
          >
            J<span className="text-[#00d4ff] animate-color-shift">.</span>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.15, y: -5 }}
                className="text-sm font-medium text-gray-300 hover:text-[#00ff88] transition-all relative group cursor-pointer"
              >
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff006e] group-hover:w-full transition-all duration-300" />
                </span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#00ff88] animate-pulse"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 space-y-3"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-[#00ff88] transition-colors rounded-lg hover:bg-[#00ff88]/10"
                whileHover={{ x: 10, scale: 1.05 }}
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
