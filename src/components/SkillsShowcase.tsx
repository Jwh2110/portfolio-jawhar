import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Zap } from 'lucide-react'

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skills = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'TailwindCSS', level: 92 },
      { name: 'Framer Motion', level: 88 },
    ],
    backend: [
      { name: 'PHP', level: 85 },
      { name: 'Python', level: 82 },
      { name: 'SQL', level: 88 },
      { name: 'Node.js', level: 80 },
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Figma', level: 85 },
      { name: 'VS Code', level: 95 },
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
        className="font-serif text-5xl md:text-6xl font-bold mb-20 text-center"
      >
        <span className="text-[#ed2939]">Compé</span><span className="text-[#0b5c3d]">tences</span>
      </motion.h2>

      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-[#ed2939] to-[#0b5c3d] text-white shadow-lg shadow-[#ed2939]/30'
                  : 'glass text-gray-400 hover:text-[#ed2939] border-[#ed2939]/10'
              }`}
            >
              <Icon size={20} />
              {cat.label}
            </motion.button>
          )
        })}
      </div>

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
              <div className="glass p-8 rounded-lg border-[#ed2939]/5 hover:border-[#ed2939]/30 transition-colors">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#ed2939] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-[#0b5c3d] font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gradient-to-r from-[#ed2939]/10 to-[#0b5c3d]/10 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-[#ed2939] to-[#d4a574] rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
