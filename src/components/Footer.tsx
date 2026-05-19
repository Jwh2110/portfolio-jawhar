import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#00ff88]/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="font-serif text-2xl font-bold gradient-text mb-4">Jawhar</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Créateur de solutions numériques exceptionnelles. Passionné par la technologie et l'innovation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Accueil', 'À propos', 'Compétences', 'Projets'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[#00ff88] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold text-white mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Blog', 'Projets', 'Certifications', 'CV'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#00d4ff] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4 className="font-semibold text-white mb-4">Suivez-moi</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, link: '#' },
                { icon: Linkedin, link: '#' },
                { icon: Mail, link: '#' },
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ scale: 1.2, color: '#00ff88' }}
                    className="text-gray-400 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent mb-8"
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {currentYear} Jawhar. Créé avec <Heart className="inline text-[#ff006e]" size={16} /> pour l'E5.
          </p>
          <p className="mt-4 md:mt-0">Portfolio • BTS SIO • Développement Web</p>
        </div>
      </div>
    </footer>
  )
}
