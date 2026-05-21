import { motion } from 'framer-motion'

export default function AboutLebanon() {
  const values = [
    { label: 'Liban', desc: 'Mon héritage, ma fierté', icon: '🇱🇧' },
    { label: 'Technologie', desc: 'Innovation pour le futur', icon: '💻' },
    { label: 'Excellence', desc: 'Qualité en tout ce que je fais', icon: '⭐' },
    { label: 'Créativité', desc: 'Solutions uniques et audacieuses', icon: '🎨' },
    { label: 'Passion', desc: 'Engagement total dans chaque projet', icon: '🔥' },
    { label: 'Partage', desc: 'Contribuer à la communauté tech', icon: '🤝' },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="à-propos">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-6xl font-bold mb-20 text-center"
        >
          <span className="text-[#ed2939]">À</span> <span className="text-[#0b5c3d]">propos</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                <span className="text-[#ed2939] font-semibold">Développeur libanais</span> en formation au BTS SIO, je crée des solutions numériques qui marient fonctionnalité et esth étique. Mon héritage libanais m'inspire à créer avec passion et détail.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                De Beyrouth au monde digital, je m'implique pleinement dans chaque projet, des architectures backend performantes aux interfaces frontend intuitives. Chaque ligne de code reflète mon excellence et mon dévouement.
              </p>
              <motion.a
                whileHover={{ x: 10, color: '#ed2939' }}
                href="#contact"
                className="inline-block text-[#0b5c3d] font-semibold hover:text-[#ed2939] transition-colors"
              >
                Discutons de tes projets 🇱🇧 →
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass p-6 rounded-lg cursor-pointer group border-[#ed2939]/10"
              >
                <p className="text-3xl mb-2">{item.icon}</p>
                <p className="text-sm font-semibold text-[#ed2939] group-hover:text-[#0b5c3d] transition-colors">
                  {item.label}
                </p>
                <p className="text-xs text-gray-500 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
