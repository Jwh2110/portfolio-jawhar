import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

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
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-40 h-40 border-2 border-[#00ff88]/20 rounded-full animate-pulse-crazy"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-40 left-10 w-32 h-32 border-2 border-[#ff006e]/20 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-[#00d4ff]/30 rounded-lg opacity-50"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10"
      >
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8 inline-block"
        >
          <div className="glass px-6 py-3 rounded-full flex items-center gap-2 animate-pulse-crazy">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.div>
            <span className="text-sm font-medium text-[#00ff88] animate-flicker">Portfolio E5 BTS SIO</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          <motion.span
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="block text-white"
          >
            Bienvenue à
          </motion.span>
          <motion.span
            animate={{ color: ['#00ff88', '#00d4ff', '#ff006e', '#00ff88'] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="block animate-glow-intense"
          >
            L'Univers de Jawhar
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Développeur passionné transformant des idées en réalités numériques
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 1 }}
            className="text-[#00ff88]"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 1.3 }}
            className="text-[#00ff88]"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 1.6 }}
            className="text-[#00ff88]"
          >
            .
          </motion.span>
          <br />
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#00ff88] inline-block"
          >
            Découvrez mon univers créatif
          </motion.span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.15, boxShadow: '0 0 60px rgba(0, 255, 136, 0.8)' }}
            whileTap={{ scale: 0.9 }}
            className="px-10 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0e27] font-bold rounded-xl flex items-center gap-3 hover:shadow-2xl transition-all"
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Explorer
            </motion.span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.15, boxShadow: '0 0 60px rgba(255, 0, 110, 0.8)' }}
            whileTap={{ scale: 0.9 }}
            className="px-10 py-4 border-2 border-[#00ff88] text-[#00ff88] font-bold rounded-xl hover:bg-[#00ff88]/20 transition-all animate-pulse-crazy"
          >
            Télécharger CV
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center gap-2"
        >
          <div className="text-[#00ff88] text-sm font-medium flex items-center gap-2">
            <motion.span animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>✨</motion.span>
            Scroll pour l'aventure
            <motion.span animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>✨</motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
