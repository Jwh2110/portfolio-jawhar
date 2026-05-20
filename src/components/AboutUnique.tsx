import { motion } from 'framer-motion'

export default function AboutUnique() {
  const interests = [
    { label: 'Liban', desc: 'Passion pour mon héritage' },
    { label: 'Technologie', desc: 'Innovation constante' },
    { label: 'Design', desc: 'Détail et esthétique' },
    { label: 'Entrepreneuriat', desc: 'Créer de la valeur' },
    { label: 'Apprentissage', desc: 'Croissance perpétuelle' },
    { label: 'Excellence', desc: 'Qualité en tout' },
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
          À propos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                Développeur en formation au BTS SIO, je crée des solutions numériques qui marient fonctionnalité et esthétique. Mon approche combine analyse technique rigoureuse et vision créative.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Passionné par l'excellence, je m'implique pleinement dans chaque projet, des architectures backend performantes aux interfaces frontend intuitives.
              </p>
              <motion.a
                whileHover={{ x: 10 }}
                href="#contact"
                className="inline-block text-[#d4af37] font-semibold hover:text-white transition-colors"
              >
                Discutons →
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {interests.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-6 rounded-lg cursor-pointer group"
              >
                <p className="text-sm font-semibold text-[#d4af37] group-hover:text-white transition-colors">
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
