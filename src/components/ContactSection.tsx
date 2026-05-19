import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, Sparkles } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-6xl font-bold gradient-text mb-12 text-center animate-glow-intense"
        >
          Travaillons Ensemble
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl text-center text-gray-300 mb-16"
        >
          Vous avez un projet en tête ? Je serais ravi de discuter de vos idées et de créer quelque chose d'extraordinaire.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Mail, label: 'Email', value: 'contact@jawhar.dev', color: '#ff006e' },
            { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/jawhar', color: '#00d4ff' },
            { icon: Github, label: 'GitHub', value: 'github.com/Jwh2110', color: '#00ff88' },
          ].map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -20, scale: 1.1, rotate: 5 }}
              >
                <div className="glass p-8 rounded-xl text-center cursor-pointer group hover:shadow-2xl transition-all">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon size={40} className="mx-auto mb-4" style={{ color: contact.color }} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all">
                    {contact.label}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-[#00ff88] transition-colors">
                    {contact.value}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-8 rounded-2xl max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.input
              whileFocus={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 136, 0.5)' }}
              type="text"
              placeholder="Votre nom"
              className="w-full bg-[#0a0e27]/50 border border-[#00ff88]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-all"
            />
            <motion.input
              whileFocus={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 136, 0.5)' }}
              type="email"
              placeholder="Votre email"
              className="w-full bg-[#0a0e27]/50 border border-[#00ff88]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-all"
            />
          </div>
          <motion.textarea
            whileFocus={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 136, 0.5)' }}
            placeholder="Votre message..."
            rows={5}
            className="w-full bg-[#0a0e27]/50 border border-[#00ff88]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-all mb-6 resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2, boxShadow: '0 0 60px rgba(0, 255, 136, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0e27] font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-2xl transition-all"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Send size={20} />
            </motion.div>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Envoyer
            </motion.span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
