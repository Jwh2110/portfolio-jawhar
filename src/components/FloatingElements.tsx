import { motion } from 'framer-motion'

export default function FloatingElements() {
  const elements = [
    { emoji: '✨', delay: 0 },
    { emoji: '🔥', delay: 0.5 },
    { emoji: '🚀', delay: 1 },
    { emoji: '⚡', delay: 1.5 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          animate={{
            y: [window.innerHeight + 100, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: el.delay,
            ease: 'linear',
          }}
          className="absolute text-4xl"
          style={{
            left: `${10 + i * 25}%`,
          }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  )
}
