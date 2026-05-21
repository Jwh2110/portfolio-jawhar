import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const colors = ['#87ceeb', '#ff8c42', '#ff6b9d', '#1b4d2e', '#d4a574']
    const newParticles: Particle[] = []
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 15 + 10,
      })
    }
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            boxShadow: `0 0 8px ${particle.color}`,
            animation: `float ${particle.speed}s infinite linear`,
            animationDelay: `${particle.id * 0.3}s`,
          }}
        />
      ))}
    </div>
  )
}
