import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Zap, Trophy } from 'lucide-react'

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skills = {
    frontend: [
      { name: 'React', level: 95, icon: '⚛️', color: '#61dafb' },
      { name: 'TypeScript', level: 90, icon: '📘', color: '#3178c6' },
      { name: 'TailwindCSS', level: 92, icon: '🎨', color: '#06b6d4' },
      { name: 'Framer Motion', level: 88, icon: '✨', color: '#0055ff' },
    ],
    backend: [
      { name: 'PHP', level: 85, icon: '🐘', color: '#777bb4' },
      { name: 'Python', level: 82, icon: '🐍', color: '#3776ab' },
      { name: 'SQL', level: 88, icon: '🗄️', color: '#336791' },
      { name: 'Node.js', level: 80, icon: '💚', color: '#68a063' },
    ],
    tools: [
      { name: 'Git', level: 90, icon: '🔀', color: '#f1502f' },
      { name: 'Docker', level: 75, icon: '🐳', color: '#2496ed' },
      { name: 'Figma', level: 85, icon: '🎭', color: '#f24e1e' },
      { name: 'VS Code', level: 95, icon: '💻', color: '#007acc' },
    ],
  }

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: Code2 },
    { key: 'backend', label: 'Backend', icon: Database },
    { key: 'tools', label: 'Outils', icon: Zap },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="compétences">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-serif text-5xl md:text-6xl font-bold gradient-text mb-20 text-center"
      >
        Mes Compétences
      </motion.h2>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0e27] shadow-2xl'
                  : 'glass text-gray-300 hover:text-[#00ff88]'
              }`}
            >
              <Icon size={20} />
              {cat.label}
            </motion.button>
          )
        })}
      </div>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="group"
            >
              <div className="glass p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.level}% Maîtrise</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full shadow-lg"
                    />
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="text-xs text-gray-500 group-hover:text-[#00ff88] transition-colors">
                  Niveau: Expert
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
