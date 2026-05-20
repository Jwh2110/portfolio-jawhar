import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

export default function ProjectsGallery() {
  const projects = [
    {
      title: 'Projet Innovation',
      description: 'Application web moderne avec architecture performante et design intuitif',
      tags: ['React', 'TypeScript', 'TailwindCSS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Plateforme E-Commerce',
      description: 'Solution e-commerce complète avec système de paiement intégré',
      tags: ['PHP', 'MySQL', 'React'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Tableau de bord temps réel avec visualisations avancées',
      tags: ['TypeScript', 'Chart.js', 'Node.js'],
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="projets">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-serif text-5xl md:text-6xl font-bold mb-20 text-center"
      >
        Projets
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
            <div className="glass rounded-lg overflow-hidden h-full flex flex-col p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{project.description}</p>
                </div>
                <motion.div whileHover={{ rotate: 45, scale: 1.2 }}>
                  <ArrowUpRight size={20} className="text-[#d4af37]" />
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-6 border-t border-[#d4af37]/10">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.github}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.demo}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Démo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
