import { motion } from 'framer-motion'

export default function AboutUnique() {
  const interests = [
    { emoji: '🇱🇧', label: 'Liban', color: '#ff006e' },
    { emoji: '🏔️', label: 'Montagnes', color: '#00ff88' },
    { emoji: '⛪', label: 'Christianisme', color: '#00d4ff' },
    { emoji: '🐉', label: 'Croisades', color: '#ff006e' },
    { emoji: '🚗', label: 'Voitures Classics', color: '#00ff88' },
    { emoji: '🏕️', label: 'Scoutisme', color: '#00d4ff' },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#1a1f3a]/30 to-transparent" id="à-propos">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-6xl font-bold gradient-text mb-20 text-center"
        >
          Qui suis-je vraiment ?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Je suis un développeur passionné en formation au <span className="text-[#00ff88] font-semibold">BTS SIO</span>, avec une curiosité insatiable pour les technologies qui façonnent notre futur.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mes intérêts variés - du Liban à l'histoire fascinante des croisades - nourrissent ma créativité et façonnent une perspective unique en développement.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Je crois que <span className="text-[#00d4ff] font-semibold">chaque ligne de code</span> doit être une œuvre d'art, alliant fonctionnalité et beauté visuelle.
              </p>
              <motion.div
                whileHover={{ x: 10 }}
                className="inline-block mt-8"
              >
                <button className="px-8 py-3 border-2 border-[#00ff88] text-[#00ff88] font-semibold rounded-lg hover:bg-[#00ff88]/10 transition-all">
                  En savoir plus →
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Passions Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-3 gap-4"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass p-6 rounded-xl text-center cursor-pointer group"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  className="text-4xl mb-3"
                >
                  {interest.emoji}
                </motion.div>
                <p className="text-sm font-medium text-white group-hover:text-[#00ff88] transition-colors">
                  {interest.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
