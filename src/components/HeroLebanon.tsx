import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

interface HeroLebanonProps {
  mousePos: { x: number; y: number }
}

const CedarIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-24 h-24 cedar-icon"
    fill="#0b5c3d"
  >
    <path d="M50,10 L70,40 L100,40 L75,60 L85,90 L50,70 L15,90 L25,60 L0,40 L30,40 Z" />
  </svg>
)

export default function HeroLebanon({ mousePos }: HeroLebanonProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden" id="accueil">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10"
      >
        {/* Cèdre animé */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mb-8 flex justify-center"
        >
          <div className="animate-cedar-pulse">
            <CedarIcon />
          </div>
        </motion.div>

        {/* Badge libanais */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="glass px-6 py-2 rounded-full inline-block border-[#ed2939]/30">
            <span className="text-xs font-medium"><span className="text-[#ed2939]">🇱🇧</span> Portfolio Libanais <span className="text-[#0b5c3d]">•</span> BTS SIO E5</span>
          </div>
        </motion.div>

        {/* Titre principal avec couleurs libanaises */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          <span className="text-[#ed2939]">Ja</span>
          <span className="text-[#0b5c3d]">w</span>
          <span className="text-[#d4a574]">h</span>
          <span className="text-[#ed2939]">a</span>
          <span className="text-[#0b5c3d]">r</span>
          <span className="text-[#d4a574]">.</span>
        </motion.h1>

        {/* Sous-titre en arabe-français */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Développeur <span className="text-[#ed2939]">passionné</span> créant des solutions numériques 
          <span className="text-[#0b5c3d]"> exceptionnelles</span> avec attention au détail et innovation constante.
          <br />
          <span className="text-sm text-[#d4a574] mt-4 inline-block">De Beyrouth au monde digital 🌍</span>
        </motion.p>

        {/* Boutons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.a
            href="#projets"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(237, 41, 57, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#ed2939] to-[#d4a574] text-white font-semibold rounded-lg flex items-center gap-3 hover:shadow-lg transition-all"
          >
            Découvrir mes projets
            <ArrowRight size={20} />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#ed2939' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-[#0b5c3d] text-[#0b5c3d] font-semibold rounded-lg hover:bg-[#0b5c3d]/5 transition-all"
          >
            Télécharger CV
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex justify-center"
        >
          <ChevronDown size={24} className="text-[#ed2939]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
