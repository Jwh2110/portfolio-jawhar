import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-6xl font-bold mb-12 text-center"
        >
          Travaillons ensemble
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Vous avez un projet en tête ? Je serais ravi de discuter de vos idées et de créer quelque chose d'extraordinaire.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Mail, label: 'Email', value: 'contact@jawhar.dev', href: 'mailto:contact@jawhar.dev' },
            { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/jawhar', href: '#' },
            { icon: Github, label: 'GitHub', value: 'github.com/Jwh2110', href: '#' },
          ].map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={index}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-lg text-center group cursor-pointer"
              >
                <Icon size={32} className="mx-auto mb-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                <p className="text-sm text-gray-400 group-hover:text-[#d4af37] transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            )
          })}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-8 rounded-lg max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full bg-[#0f1419]/50 border border-[#d4af37]/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full bg-[#0f1419]/50 border border-[#d4af37]/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>
          <textarea
            placeholder="Votre message..."
            rows={5}
            className="w-full bg-[#0f1419]/50 border border-[#d4af37]/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition-colors mb-6 resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-4 bg-[#d4af37] text-[#0f1419] font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all"
          >
            <Send size={20} />
            Envoyer le message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
