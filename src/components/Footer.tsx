import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#ed2939]/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="font-serif text-2xl font-bold mb-4">
              <span className="text-[#ed2939]">J</span>
              <span className="text-[#0b5c3d]">a</span>
              <span className="text-[#d4a574]">w</span>
              <span className="text-[#ed2939]">har</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Développeur libanais créant des solutions numériques exceptionnelles. Passion pour l'innovation et la qualité. 🇱🇧
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold text-white mb-4 text-[#ed2939]">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Accueil', 'À propos', 'Compétences', 'Projets'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[#ed2939] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold text-white mb-4 text-[#0b5c3d]">Ressources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Blog', 'Projets', 'Certifications', 'CV'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#0b5c3d] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4 className="font-semibold text-white mb-4 text-[#d4a574]">Suivez-moi</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:contact@jawhar.dev' },
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.2, color: '#ed2939' }}
                    className="text-gray-500 hover:text-[#ed2939] transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-[#ed2939]/20 to-transparent mb-8"
        />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} <span className="text-[#ed2939]">Jawhar</span>. Tous droits réservés. 🇱🇧</p>
          <p className="mt-4 md:mt-0 text-[#d4a574]">Portfolio Libanais • BTS SIO • Développement Web</p>
        </div>
      </div>
    </footer>
  )
}
