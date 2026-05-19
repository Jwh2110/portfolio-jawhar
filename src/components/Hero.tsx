import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Jawhar</span>
            <br />
            <span className="text-accent">Portfolio E5</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Développeur passionné par la technologie et les beaux projets.
          <br />
          BTS SIO - Spécialité SLAM
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105">
            Voir mes projets
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all">
            Télécharger CV
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <ArrowDown className="text-primary" size={32} />
        </motion.div>
      </div>
    </section>
  )
}
