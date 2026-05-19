import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectsGallery() {
  const projects = [
    {
      title: 'Projet Innovation',
      description: 'Application web révolutionnaire avec animations 3D',
      tags: ['React', 'Three.js', 'TailwindCSS'],
      github: '#',
      demo: '#',
      gradient: 'from-[#00ff88] via-[#00d4ff] to-[#ff006e]',
      delay: 0,
    },
    {
      title: 'Plateforme E-Commerce',
      description: 'Solution de vente en ligne performante et scalable',
      tags: ['PHP', 'MySQL', 'React'],
      github: '#',
      demo: '#',
      gradient: 'from-[#ff006e] via-[#00d4ff] to-[#00ff88]',
      delay: 0.1,
    },
    {
      title: 'Dashboard Analytics',
      description: 'Tableau de bord temps réel avec visualisations avancées',
      tags: ['TypeScript', 'Chart.js', 'Node.js'],
      github: '#',
      demo: '#',
      gradient: 'from-[#00d4ff] via-[#ff006e] to-[#00ff88]',
      delay: 0.2,
    },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="projets">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-serif text-5xl md:text-6xl font-bold gradient-text mb-20 text-center"
      >
        Portfolio de Projets
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: project.delay }}
            whileHover={{ y: -20, scale: 1.02 }}
            className="group h-full"
          >
            <div className="glass rounded-2xl overflow-hidden h-full flex flex-col">
              {/* Image Area */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 opacity-30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#00ff88]/10 text-[#00ff88] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-[#00ff88]/20">
                  <motion.a
                    whileHover={{ scale: 1.1, color: '#00ff88' }}
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#00ff88] transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, color: '#00d4ff' }}
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#00d4ff] transition-colors"
                  >
                    <ExternalLink size={18} />
                    Démo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
