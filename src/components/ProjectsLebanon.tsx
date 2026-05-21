import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

export default function ProjectsLebanon() {
  const projects = [
    {
      title: 'Mountain Vista App',
      description: 'Innovative web application inspired by Lebanon\'s mountain landscape architecture',
      tags: ['React', 'TypeScript', 'Landscape Design'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Heritage Commerce',
      description: 'E-commerce platform celebrating Lebanese craftsmanship and traditions',
      tags: ['PHP', 'MySQL', 'Cultural Tech'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Sunset Analytics',
      description: 'Real-time dashboard with sunset-inspired design philosophy',
      tags: ['TypeScript', 'Charts', 'Visualization'],
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="projets">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-serif text-5xl md:text-6xl font-bold mb-20 text-center gradient-landscape"
      >
        Featured Works
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group h-full"
          >
            <div className="glass rounded-lg overflow-hidden h-full flex flex-col p-8 border-[#ff8c42]/10 hover:border-[#ff8c42]/30 transition-colors animate-glow-landscape">
              {/* Color gradient header */}
              <div className="mb-6 h-24 bg-gradient-to-br from-[#87ceeb] via-[#ff8c42] to-[#ff6b9d] rounded-lg opacity-50 group-hover:opacity-70 transition-opacity" />

              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#ff8c42] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{project.description}</p>
                </div>
                <motion.div whileHover={{ rotate: 45, scale: 1.2 }}>
                  <ArrowUpRight size={20} className="text-[#ff8c42]" />
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-gradient-to-r from-[#ff8c42]/10 to-[#87ceeb]/10 text-[#ff8c42] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-6 border-t border-[#ff8c42]/10">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.github}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#ff8c42] transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.demo}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#87ceeb] transition-colors"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
