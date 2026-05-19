import { motion } from 'framer-motion'

export default function FloatingElements() {
  const elements = [
    { emoji: '✨', x: '10%', y: '20%', duration: 5, delay: 0 },
    { emoji: '🔥', x: '90%', y: '30%', duration: 6, delay: 0.5 },
    { emoji: '🪀', x: '15%', y: '80%', duration: 7, delay: 1 },
    { emoji: '🚀', x: '85%', y: '70%', duration: 5.5, delay: 1.5 },
    { emoji: '⚡', x: '50%', y: '10%', duration: 6.5, delay: 2 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ y: window.innerHeight + 100, x: el.x }}
          animate={{
            y: [window.innerHeight + 100, -100],
            x: [el.x, `calc(${el.x} + ${Math.sin(i) * 100}px)`],
            rotate: [0, 360],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'linear',
          }}
          className="absolute text-4xl"
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  )
}
