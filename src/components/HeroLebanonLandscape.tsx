import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Mountain } from 'lucide-react'

interface HeroLebanonLandscapeProps {
  scrollY: number
}

const HarisaShrine = () => (
  <svg viewBox="0 0 100 120" className="w-20 h-24 animate-harissa-pulse" fill="none" stroke="#fff" strokeWidth="1.5">
    {/* Base */}
    <rect x="35" y="80" width="30" height="20" fill="#8b7355" opacity="0.3" />
    {/* Pillar */}
    <rect x="42" y="40" width="16" height="40" className="ancient-column" />
    {/* Dome */}
    <path d="M 35 40 Q 50 10 65 40" fill="#ff8c42" opacity="0.4" />
    {/* Cross */}
    <line x1="50" y1="5" x2="50" y2="20" />
    <line x1="45" y1="12" x2="55" y2="12" />
  </svg>
)

const CedarTree = () => (
  <svg viewBox="0 0 100 120" className="w-16 h-20 animate-cedar-sway" fill="#1b4d2e">
    {/* Trunk */}
    <rect x="45" y="70" width="10" height="40" fill="#8b6914" />
    {/* Foliage - Cedar shape */}
    <ellipse cx="50" cy="60" rx="35" ry="40" opacity="0.9" />
    <ellipse cx="50" cy="45" rx="25" ry="30" opacity="0.95" />
    <ellipse cx="50" cy="30" rx="15" ry="20" opacity="0.9" />
    <path d="M 30 70 Q 50 45 70 70" fill="#0d3b1d" opacity="0.8" />
  </svg>
)

export default function HeroLebanon({ scrollY }: HeroLebanonLandscapeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden" id="accueil">
      {/* Parallax landscape elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Mountain parallax */}
        <motion.div
          className="absolute right-0 top-20 opacity-20"
          style={{ y: scrollY * 0.3 }}
        >
          <Mountain size={400} className="text-[#8b7355]" />
        </motion.div>

        {/* Sky glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#ff8c42]/10 to-transparent rounded-full blur-3xl animate-sky-shimmer" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10"
      >
        {/* Cedar and Harissa showcase */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex justify-center gap-8 items-end"
        >
          <div className="animate-float-mountain">
            <CedarTree />
          </div>
          <div className="animate-harissa-pulse">
            <HarisaShrine />
          </div>
          <div className="animate-float-mountain" style={{ animationDelay: '1s' }}>
            <CedarTree />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="glass px-6 py-2 rounded-full inline-block border-[#ff8c42]/30">
            <span className="text-xs font-medium">
              <span className="text-[#87ceeb]">🏔️</span>
              <span className="text-[#ff8c42]"> Landscapes of Lebanon </span>
              <span className="text-[#1b4d2e]">🌲</span>
            </span>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          <span className="text-[#87ceeb]">J</span>
          <span className="text-[#ff8c42]">a</span>
          <span className="text-[#ff6b9d]">w</span>
          <span className="text-[#87ceeb]">h</span>
          <span className="text-[#1b4d2e]">a</span>
          <span className="text-[#ff8c42]">r</span>
        </motion.h1>

        {/* Subtitle with landscape theme */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Where <span className="text-[#87ceeb]">mountain peaks</span> meet 
          <span className="text-[#ff8c42]"> digital innovation</span>.
          <br />
          <span className="text-sm text-[#ff6b9d] mt-4 inline-block">
            Inspired by Lebanon's beauty, crafted with passion 🇱🇧
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.a
            href="#projets"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 140, 66, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#ff8c42] via-[#ff6b9d] to-[#87ceeb] text-white font-semibold rounded-lg flex items-center gap-3 hover:shadow-lg transition-all"
          >
            Explore My Work
            <ArrowRight size={20} />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#ff8c42' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-[#87ceeb] text-[#87ceeb] font-semibold rounded-lg hover:bg-[#87ceeb]/5 transition-all"
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex justify-center mt-12"
        >
          <ChevronDown size={28} className="text-[#ff8c42] animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  )
}
