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
          <span className="text-[#ed2939]">Travaillons</span> <span className="text-[#0b5c3d]">ensemble</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Vous avez un projet en tête ? Je serais ravi de discuter de vos idées et de créer quelque chose d'extraordinaire. 🇱🇧
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
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass p-8 rounded-lg text-center group cursor-pointer border-[#ed2939]/10 hover:border-[#ed2939]/30 transition-colors"
              >
                <Icon size={32} className="mx-auto mb-4 text-[#ed2939] group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#ed2939] transition-colors">
                  {contact.label}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-[#0b5c3d] transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            )
          })}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-8 rounded-lg max-w-2xl mx-auto border-[#ed2939]/10"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full bg-[#0a0e1a]/50 border border-[#ed2939]/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed2939] focus:shadow-lg focus:shadow-[#ed2939]/20 transition-all"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full bg-[#0a0e1a]/50 border border-[#ed2939]/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed2939] focus:shadow-lg focus:shadow-[#ed2939]/20 transition-all"
            />
          </div>
          <textarea
            placeholder="Votre message..."
            rows={5}
            className="w-full bg-[#0a0e1a]/50 border border-[#ed2939]/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed2939] focus:shadow-lg focus:shadow-[#ed2939]/20 transition-all mb-6 resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(237, 41, 57, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-4 bg-gradient-to-r from-[#ed2939] to-[#0b5c3d] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all"
          >
            <Send size={20} />
            Envoyer le message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
