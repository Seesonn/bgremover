"use client"

import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import ImageSlider from "../../../components/ImageSlider"
import d1 from '../../../assest/d1.jpg'

const HeroSection = () => {
  const canvasRef = useRef(null)

  // Demo slider images
  const demoSlides = [
    {
      imageUrl: d1,
      // title: "Perfect Results Every Time",
      // description: "Even with complex edges and details",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
      // title: "Professional Product Photos",
      // description: "Ideal for e-commerce and marketing",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1620674156044-52b714665d46?q=80&w=1974&auto=format&fit=crop",
      // title: "Stunning Portraits",
      // description: "Perfect for social media and profiles",
    },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5

        // Use the new color theme
        const colors = [
          "rgba(1, 106, 112, 0.7)", // #016A70
          "rgba(162, 197, 121, 0.7)", // #A2C579
          "rgba(210, 222, 50, 0.7)", // #D2DE32
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray = []
    const numberOfParticles = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (<div className="py-20 ">


    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-[#016A70] via-[#016A70]/90 to-[#016A70] rounded-3xl shadow-2xl">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30"></canvas>
      <div className="relative z-10 py-20 px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-6 py-2 bg-[#A2C579]/20 backdrop-blur-md rounded-full text-white font-medium mb-6 animate-fadeIn">
              #1 Background Removal Tool
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slideUp">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2DE32] to-[#A2C579]">Images</span>{" "}
              With One Click
            </h1>
            <p className="text-xl text-[#FFFFDD] mb-8 max-w-xl mx-auto lg:mx-0 animate-slideUp animation-delay-200">
              Our AI-powered background removal technology delivers perfect results in seconds. No design skills
              required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp animation-delay-400">
              <Link
                to="/templates"
                className="px-8 py-4 bg-[#FFFFDD] text-[#016A70] font-bold rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </Link>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-[#A2C579]/30 backdrop-blur-md text-white font-bold rounded-xl border border-[#A2C579]/30 hover:bg-[#A2C579]/50 transition-all"
              >
                How It Works
              </a>
            </div>
           
          </div>
          <div className="relative animate-float">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#A2C579]/20">
              <ImageSlider slides={demoSlides} />
            </div>
            <div className="z-10 absolute -top-6 -right-6 bg-gradient-to-br from-[#D2DE32] to-[#A2C579] rounded-2xl p-4 shadow-lg transform rotate-6 animate-pulse">
              <div className="text-white font-bold">
               
                <span className="text-sm block">Demo</span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#016A70] to-transparent"></div>
    </div>
    </div>
  )
}

export default HeroSection
