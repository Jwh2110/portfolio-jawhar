import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Projet 1',
      description: 'Description du projet 1',
      tags: ['React', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com/Jwh2110/project1',
      demo: '#',
      image: 'bg-gradient-to-br from-blue-600 to-blue-800',
    },
    {
      title: 'Projet 2',
      description: 'Description du projet 2',
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/Jwh2110/project2',
      demo: '#',
      image: 'bg-gradient-to-br from-purple-600 to-purple-800',
    },
    {
      title: 'Projet 3',
      description: 'Description du projet 3',
      tags: ['Python', 'Flask', 'SQLAlchemy'],
      github: 'https://github.com/Jwh2110/project3',
      demo: '#',
      image: 'bg-gradient-to-br from-green-600 to-green-800',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        >
          Projets
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`${project.image} rounded-lg h-48 mb-4 flex items-center justify-center overflow-hidden relative`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
              </div>

              <h3 className="text-xl font-semibold text-accent mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Github size={18} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink size={18} />
                  Démo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
