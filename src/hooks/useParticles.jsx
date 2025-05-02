
import { useEffect, useRef } from "react"


const useParticles = (canvasRef, options = {}) => {
  const animationIdRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let dpr = window.devicePixelRatio || 1

    // Responsive, retina-friendly resize
    const handleResize = () => {
      const { offsetWidth: width, offsetHeight: height } = canvas
      dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.offsetWidth
        this.y = Math.random() * canvas.offsetHeight
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        const colors = [
          "rgba(1, 106, 112, 0.7)",
          "rgba(162, 197, 121, 0.7)",
          "rgba(210, 222, 50, 0.7)",
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        const w = canvas.offsetWidth, h = canvas.offsetHeight
        if (this.x > w) this.x = 0
        else if (this.x < 0) this.x = w
        if (this.y > h) this.y = 0
        else if (this.y < 0) this.y = h
      }
      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const particlesArray = []
    const particleCount = Math.min(100, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 9000))
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle())
    }

    // Animate
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      animationIdRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationIdRef.current)
    }
  }, [canvasRef])
}

export default useParticles
