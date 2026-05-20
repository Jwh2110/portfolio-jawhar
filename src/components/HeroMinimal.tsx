import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

interface HeroMinimalProps {
  mousePos: { x: number; y: number }
}

export default function HeroMinimal({ mousePos }: HeroMinimalProps) {
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
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="glass px-6 py-2 rounded-full inline-block">
            <span className="text-xs font-medium text-[#d4af37]">Portfolio — BTS SIO E5</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white"
        >
          Jawhar<span className="text-[#d4af37]">.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Développeur passionné créant des solutions numériques exceptionnelles avec attention au détail et innovation constante.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.a
            href="#projets"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#d4af37] text-[#0f1419] font-semibold rounded-lg flex items-center gap-3 hover:shadow-lg transition-all"
          >
            Découvrir mes projets
            <ArrowRight size={20} />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37]/5 transition-all"
          >
            Télécharger CV
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex justify-center"
        >
          <ChevronDown size={24} className="text-[#d4af37]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
