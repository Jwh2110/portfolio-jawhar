import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)

  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        {
          name: 'React',
          level: 90,
          description: 'Composants, Hooks, State Management',
          projects: ['Projet 1', 'Projet 2'],
          proofUrl: '/pdfs/react-proof.pdf',
        },
        {
          name: 'TypeScript',
          level: 85,
          description: 'Typage fort, Interfaces',
          projects: ['Portfolio', 'App Web'],
          proofUrl: '/pdfs/typescript-proof.pdf',
        },
        {
          name: 'TailwindCSS',
          level: 88,
          description: 'Design Responsive, Animations',
          projects: ['UI moderne'],
          proofUrl: '/pdfs/tailwind-proof.pdf',
        },
      ],
    },
    {
      category: 'Backend',
      skills: [
        {
          name: 'PHP',
          level: 82,
          description: 'POO, MVC, APIs',
          projects: ['Backend'],
          proofUrl: '/pdfs/php-proof.pdf',
        },
        {
          name: 'Python',
          level: 80,
          description: 'Scripts, Automation',
          projects: ['Outils'],
          proofUrl: '/pdfs/python-proof.pdf',
        },
        {
          name: 'SQL',
          level: 85,
          description: 'Queries, Design BD',
          projects: ['Bases de données'],
          proofUrl: '/pdfs/sql-proof.pdf',
        },
      ],
    },
    {
      category: 'Outils',
      skills: [
        {
          name: 'Git',
          level: 88,
          description: 'Versioning, Collaboration',
          projects: ['Tous les projets'],
          proofUrl: '/pdfs/git-proof.pdf',
        },
        {
          name: 'Docker',
          level: 75,
          description: 'Containerization',
          projects: ['Deployment'],
          proofUrl: '/pdfs/docker-proof.pdf',
        },
        {
          name: 'Figma',
          level: 80,
          description: 'UI/UX Design',
          projects: ['Designs'],
          proofUrl: '/pdfs/figma-proof.pdf',
        },
      ],
    },
  ]

  const categories = ['all', ...skillsData.map(d => d.category)]
  const displayedSkills = selectedCategory === 'all'
    ? skillsData.flatMap(d => d.skills)
    : skillsData.find(d => d.category === selectedCategory)?.skills || []

  const openPdf = (url: string) => {
    window.open(url, 'width=900,height=700')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        >
          Tableau de Compétences
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-secondary'
                  : 'bg-primary/10 text-primary border border-primary/30 hover:border-primary'
              }`}
            >
              {cat === 'all' ? 'Tous' : cat}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
              className="p-6 bg-secondary/50 border border-primary/20 rounded-lg hover:border-primary/50 cursor-pointer transition-all hover:bg-secondary/70"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{skill.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{skill.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Compétence</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-primary h-2 rounded-full"
                  />
                </div>
              </div>

              {/* Expandable Details */}
              {selectedSkill === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-primary/20"
                >
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 mb-2">Projets:</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.projects.map((proj, i) => (
                        <span key={i} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openPdf(skill.proofUrl)
                    }}
                    className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors text-sm"
                  >
                    <FileText size={16} />
                    Voir la preuve (PDF)
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
