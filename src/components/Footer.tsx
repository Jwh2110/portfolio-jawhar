import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-primary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Jawhar
            </h3>
            <p className="text-gray-400 text-sm">
              Portfolio E5 BTS SIO - Passionné par la technologie et les belles réalisations.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-accent font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compétences</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Projets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-accent font-semibold mb-4">Suivez-moi</h4>
            <div className="flex gap-4">
              <a href="#" className="text-primary hover:text-primary/70 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary/70 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary/70 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Jawhar. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
