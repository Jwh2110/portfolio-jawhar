import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export default function HeroEpic() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden" id="accueil">
      {/* Éléments flottants de fond */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-40 h-40 border-2 border-[#00ff88]/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-40 left-10 w-32 h-32 border-2 border-[#ff006e]/10 rounded-full"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-block"
        >
          <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
            <Zap size={18} className="text-[#00ff88]" />
            <span className="text-sm font-medium text-[#00ff88]">Portfolio E5 BTS SIO</span>
          </div>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block text-white">Bienvenue à</span>
          <motion.span
            animate={{ color: ['#00ff88', '#00d4ff', '#ff006e', '#00ff88'] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="block"
          >
            L'Univers de Jawhar
          </motion.span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Développeur passionné transformant des idées en réalités numériques exceptionnelles.
          <br />
          <span className="text-[#00ff88]">Découvrez mon univers créatif</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 136, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0e27] font-bold rounded-xl flex items-center gap-3 hover:shadow-2xl transition-all"
          >
            Explorer Mon Travail
            <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#ff006e' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-[#00ff88] text-[#00ff88] font-bold rounded-xl hover:bg-[#00ff88]/10 transition-all"
          >
            Télécharger CV
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <div className="text-[#00ff88] text-sm font-medium">Scroll pour explorer ↓</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
