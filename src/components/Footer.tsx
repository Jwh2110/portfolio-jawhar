import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#ff8c42]/10 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="font-serif text-2xl font-bold mb-4 gradient-landscape">Jawhar</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Developer. Mountain dreamer. Building tomorrow with today's code. 🇱🇧
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold text-white mb-4 text-[#ff8c42]">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Home', 'About', 'Skills', 'Projects'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[#ff8c42] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold text-white mb-4 text-[#87ceeb]">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Blog', 'Projects', 'Certifications', 'Resume'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#87ceeb] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4 className="font-semibold text-white mb-4 text-[#ff6b9d]">Follow</h4>
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
                    whileHover={{ scale: 1.2, color: '#ff8c42' }}
                    className="text-gray-500 hover:text-[#ff8c42] transition-colors"
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
          className="h-px bg-gradient-to-r from-transparent via-[#ff8c42]/20 to-transparent mb-8"
        />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {currentYear} <span className="text-[#ff8c42]">Jawhar</span>. Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block mx-1"
            >
              <Heart size={16} className="text-[#ff6b9d]" />
            </motion.span>
            in Lebanon. 🇱🇧
          </p>
          <p className="mt-4 md:mt-0 text-[#ff8c42]">Where Mountains Meet Code 🏔️💻</p>
        </div>
      </div>
    </footer>
  )
}
