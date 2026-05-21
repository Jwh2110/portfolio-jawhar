import { motion } from 'framer-motion'

export default function AboutLebanon() {
  const landscapes = [
    { name: 'Mountains', icon: '🏔️', desc: 'Majestic peaks', color: '#8b7355' },
    { name: 'Cedar Trees', icon: '🌲', desc: 'Ancient symbols', color: '#1b4d2e' },
    { name: 'Harissa', icon: '⛪', desc: 'Sacred heights', color: '#ff8c42' },
    { name: 'Ancient Ruins', icon: '🏛️', desc: 'History etched', color: '#d4a574' },
    { name: 'Sunset Sky', icon: '🌅', desc: 'Golden moments', color: '#ff6b9d' },
    { name: 'Beirut Spirit', icon: '🏙️', desc: 'Modern energy', color: '#87ceeb' },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="à-propos">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-6xl font-bold mb-20 text-center gradient-landscape"
        >
          About My Lebanon
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-[#ff8c42] font-semibold">Developer from the Cedars</span>, I create digital solutions inspired by Lebanon's breathtaking landscapes and rich heritage. Every line of code carries the passion of our mountains.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From Beirut's bustling tech scene to Harissa's spiritual heights, from ancient Baalbeck's stones to Cedar's eternal symbol—Lebanon shapes my vision, creativity, and determination.
              </p>
              <motion.a
                whileHover={{ x: 10, color: '#ff8c42' }}
                href="#contact"
                className="inline-block text-[#87ceeb] font-semibold hover:text-[#ff8c42] transition-colors"
              >
                Let's create something beautiful →
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {landscapes.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.05 }}
                className="glass p-6 rounded-lg cursor-pointer group border-[#ff8c42]/10 hover:border-[#ff8c42]/30 transition-colors"
              >
                <p className="text-3xl mb-2">{item.icon}</p>
                <p className="text-sm font-semibold group-hover:text-[#ff8c42] transition-colors">
                  {item.name}
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
