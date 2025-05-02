"use client"

import { useRef } from "react"
import { Link } from "react-router-dom"
import ImageSlider from "../../../components/ImageSlider"
import useParticles from "../../../hooks/useParticles"
import d1 from '../../../assest/d1.jpg'
import d2 from '../../../assest/d2.png'
import d3 from '../../../assest/d3.png'
import d4 from '../../../assest/d4.png'
import d5 from '../../../assest/d5.png'
import d6 from '../../../assest/d6.png'



const HeroSection = () => {
  const canvasRef = useRef(null)
  useParticles(canvasRef)

  // Demo slider images with alt
  const demoSlides = [
   
    
    
    
    {
      imageUrl: d4,
   
    },
    {
      imageUrl: d6,
   
    },
    {
      imageUrl: d3,
   
    },
  ]

  return (
    <section className="py-14 md:py-20 min-h-[80vh] flex items-center">
      <div className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-[#016A70] via-[#016A70]/90 to-[#016A70] rounded-3xl shadow-2xl max-w-7xl mx-auto w-full">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none select-none transition-opacity duration-500"
          aria-hidden="true"
        ></canvas>
        <div className="relative z-10 py-10 px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-6 py-2 bg-[#A2C579]/20 backdrop-blur-md rounded-full text-white font-medium mb-6 animate-fadeIn shadow-md" tabIndex={0} role="status">
                #1 Background Removal Tool
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-slideUp">
                Transform Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2DE32] to-[#A2C579] animate-gradient bg-[200%_auto]">
                  Images
                </span>{' '}
                With One Click
              </h1>
              <p className="text-xl text-[#FFFFDD] mb-8 max-w-xl mx-auto lg:mx-0 animate-slideUp animation-delay-150">
                Our  background removal technology delivers perfect results in seconds. No design skills required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp animation-delay-300">
                <Link
                  to="/templates"
                  className="px-8 py-4 bg-[#FFFFDD] text-[#016A70] font-bold rounded-xl hover:bg-white transition-transform hover:scale-[1.04] shadow-lg hover:shadow-xl focus:ring-2 focus:ring-[#A2C579] focus:outline-none"
                >
                  Get Started
                </Link>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 bg-[#A2C579]/30 backdrop-blur-md text-white font-bold rounded-xl border border-[#A2C579]/30 hover:bg-[#A2C579]/50 transition-all focus:ring-2 focus:ring-[#FFFFDD] focus:outline-none"
                >
                  How It Works
                </a>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#A2C579]/20 bg-white/5">
                <ImageSlider slides={demoSlides} autoPlay showArrows={false} />
              </div>
              <div className="z-20 absolute -top-6 -right-6">
                <span className="relative block rounded-2xl p-4 bg-gradient-to-br from-[#D2DE32] to-[#A2C579] shadow-lg rotate-6 animate-pulse ring-4 ring-[#D2DE32]/60">
                  <span className="text-white font-bold text-sm block">Demo</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#016A70] to-transparent"></div>
      </div>
    </section>
  )
}

export default HeroSection
