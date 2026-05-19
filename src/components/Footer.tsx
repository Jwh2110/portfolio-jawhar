import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#00ff88]/20 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-liquid-morph bg-gradient-to-br from-[#00ff88] to-[#ff006e]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <motion.h3
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-serif text-2xl font-bold gradient-text mb-4 animate-neon-pulse"
            >
              Jawhar
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Créateur de solutions numériques exceptionnelles. Passionné par l'innovation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold text-white mb-4 text-[#00ff88]">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Accueil', 'À propos', 'Compétences', 'Projets'].map((item, i) => (
                <li key={i}>
                  <motion.a
                    whileHover={{ x: 5, color: '#00ff88' }}
                    href={`#${item.toLowerCase()}`}
                    className="transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold text-white mb-4 text-[#00d4ff]">Ressources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Blog', 'Projets', 'Certifications', 'CV'].map((item, i) => (
                <li key={i}>
                  <motion.a
                    whileHover={{ x: 5, color: '#00d4ff' }}
                    href="#"
                    className="transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4 className="font-semibold text-white mb-4 text-[#ff006e]">Suivez-moi</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, link: '#', color: '#00ff88' },
                { icon: Linkedin, link: '#', color: '#00d4ff' },
                { icon: Mail, link: '#', color: '#ff006e' },
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ scale: 1.3, rotate: 20 }}
                    whileTap={{ scale: 0.9 }}
                    className="transition-colors"
                  >
                    <Icon size={20} style={{ color: social.color }} />
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
          <motion.p
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            © {currentYear} Jawhar. Créé avec <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline"
            >
              <Heart className="inline text-[#ff006e]" size={16} />
            </motion.span> pour l'E5.
          </motion.p>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 md:mt-0"
          >
            Portfolio • BTS SIO • Développement Web
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
