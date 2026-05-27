export const portfolioConfig = {
  author: 'Jawhar',
  title: 'Portfolio - BTS SIO E5',
  description: 'Tableau de compétences interactif avec preuves PDF',
  email: 'jawhar@example.com',
  phone: '+33 6 XX XX XX XX',
  location: 'France',
  
  // Réseaux sociaux
  social: {
    github: 'https://github.com/Jwh2110',
    linkedin: 'https://linkedin.com/in/jawhar',
    twitter: 'https://twitter.com/jawhar',
  },
  
  // Compétences
  skills: [
    {
      category: 'Frontend',
      items: [
        {
          name: 'React',
          level: 90,
          description: 'Développement de composants réutilisables',
          projects: ['Portfolio', 'Applications web'],
          proofUrl: '/pdfs/react-proof.pdf',
        },
        {
          name: 'TypeScript',
          level: 85,
          description: 'Typage statique et maintenabilité du code',
          projects: ['Portfolio'],
          proofUrl: '/pdfs/typescript-proof.pdf',
        },
        {
          name: 'TailwindCSS',
          level: 88,
          description: 'Design responsive et utility-first',
          projects: ['Portfolio'],
          proofUrl: '/pdfs/tailwind-proof.pdf',
        },
      ],
    },
    {
      category: 'Backend',
      items: [
        {
          name: 'Node.js',
          level: 80,
          description: 'API REST et serveurs Node',
          projects: [],
          proofUrl: '/pdfs/nodejs-proof.pdf',
        },
      ],
    },
  ],
  
  // Projets
  projects: [
    {
      title: 'Portfolio E5',
      description: 'Portfolio moderne avec tableau de compétences',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      link: 'https://github.com/Jwh2110/portfolio-jawhar',
      image: '/images/portfolio.png',
    },
  ],
  
  // À propos
  about: {
    headline: 'Développeur Full-Stack passionné',
    bio: 'Étudiant en BTS SIO spécialisé en développement web moderne',
  },
} as const;

export type PortfolioConfig = typeof portfolioConfig;