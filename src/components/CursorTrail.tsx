import { motion } from 'framer-motion'

interface MousePos {
  x: number
  y: number
}

interface Trail {
  id: number
  x: number
  y: number
}

export default function CursorTrail({ mousePos }: { mousePos: MousePos }) {
  const [trail, setTrail] = React.useState<Trail[]>([])
  const [nextId, setNextId] = React.useState(0)

  React.useEffect(() => {
    setTrail((prev) => {
      const newTrail = [...prev, { id: nextId, x: mousePos.x, y: mousePos.y }]
      setNextId((p) => p + 1)
      return newTrail.slice(-20) // Keep only last 20 points
    })
  }, [mousePos])

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            left: point.x,
            top: point.y,
            background: `hsl(${(i / trail.length) * 360}, 100%, 50%)`,
            boxShadow: '0 0 10px currentColor',
          }}
        />
      ))}
    </div>
  )
}

import React from 'react'
