"use client"

import { useEffect, useState, useRef } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
  type: "confetti" | "star" | "circle" | "heart"
}

const colors = [
  "#f59e0b",
  "#fb923c", 
  "#ec4899",
  "#f43f5e",
  "#fbbf24",
  "#f97316",
]

export function CelebrationBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const types: Particle["type"][] = ["confetti", "star", "circle", "heart"]
    const newParticles: Particle[] = []

    for (let i = 0; i < 40; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        type: types[Math.floor(Math.random() * types.length)],
      })
    }
    setParticles(newParticles)

    const animate = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX
        let newY = particle.y + particle.speedY
        let newSpeedX = particle.speedX
        let newSpeedY = particle.speedY

        if (newX < 0 || newX > 100) newSpeedX = -newSpeedX
        if (newY < 0 || newY > 100) newSpeedY = -newSpeedY

        newX = Math.max(0, Math.min(100, newX))
        newY = Math.max(0, Math.min(100, newY))

        return {
          ...particle,
          x: newX,
          y: newY,
          speedX: newSpeedX,
          speedY: newSpeedY,
          rotation: particle.rotation + particle.rotationSpeed,
        }
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const renderShape = (particle: Particle) => {
    switch (particle.type) {
      case "confetti":
        return (
          <div
            className="rounded-sm"
            style={{
              width: particle.size,
              height: particle.size * 0.4,
              backgroundColor: particle.color,
            }}
          />
        )
      case "star":
        return (
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            style={{ fill: particle.color }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )
      case "circle":
        return (
          <div
            className="rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
            }}
          />
        )
      case "heart":
        return (
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            style={{ fill: particle.color }}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-50 transition-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        >
          {renderShape(particle)}
        </div>
      ))}
    </div>
  )
}
