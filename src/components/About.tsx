import { motion } from 'framer-motion'

export default function About() {
  const interests = [
    { icon: '🇱🇧', label: 'Liban' },
    { icon: '⛪', label: 'Christianisme' },
    { icon: '🏕️', label: 'Scoutisme' },
    { icon: '🏛️', label: 'Croisades' },
    { icon: '🚗', label: 'Voitures Classiques' },
    { icon: '💻', label: 'Technologies' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        >
          À Propos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-accent mb-6">Qui suis-je ?</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Je suis un développeur passionné en formation au BTS SIO. Avec une curiosité insatiable pour les technologies modernes,
              je m'efforce de créer des solutions élégantes et performantes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Mes intérêts variés - du Liban à l'histoire des croisades - façonnent ma perspective unique et créative en développement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-accent mb-8">Mes Passions</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-primary/10 rounded-lg border border-primary/20 flex items-center gap-3 hover:bg-primary/20 transition-colors"
                >
                  <span className="text-2xl">{interest.icon}</span>
                  <span className="text-accent font-medium">{interest.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
