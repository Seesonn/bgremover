"use client"

import { useState, useEffect, useRef } from "react"

const StatsSection = () => {
  // Stats counter animation
  const [stats, setStats] = useState({
    users: 0,
    images: 0,
    countries: 0,
  })

  const statsRef = useRef(null)
  const statsAnimated = useRef(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsAnimated.current) {
          statsAnimated.current = true

          const usersDuration = 2000
          const usersFPS = 60
          const usersIncrement = 5000 / ((usersDuration / 1000) * usersFPS)
          let usersCount = 0

          const imagesDuration = 2500
          const imagesFPS = 60
          const imagesIncrement = 1000000 / ((imagesDuration / 1000) * imagesFPS)
          let imagesCount = 0

          const countriesDuration = 1500
          const countriesFPS = 60
          const countriesIncrement = 120 / ((countriesDuration / 1000) * countriesFPS)
          let countriesCount = 0

          const usersInterval = setInterval(() => {
            usersCount += usersIncrement
            if (usersCount >= 5000) {
              usersCount = 5000
              clearInterval(usersInterval)
            }
            setStats((prev) => ({ ...prev, users: Math.floor(usersCount) }))
          }, 1000 / usersFPS)

          const imagesInterval = setInterval(() => {
            imagesCount += imagesIncrement
            if (imagesCount >= 1000000) {
              imagesCount = 1000000
              clearInterval(imagesInterval)
            }
            setStats((prev) => ({ ...prev, images: Math.floor(imagesCount) }))
          }, 1000 / imagesFPS)

          const countriesInterval = setInterval(() => {
            countriesCount += countriesIncrement
            if (countriesCount >= 120) {
              countriesCount = 120
              clearInterval(countriesInterval)
            }
            setStats((prev) => ({ ...prev, countries: Math.floor(countriesCount) }))
          }, 1000 / countriesFPS)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    if (statsRef.current) observer.observe(statsRef.current)

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current)
    }
  }, [])

  return (
    <div
      ref={statsRef}
      className="bg-white rounded-3xl shadow-xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
    >
      <div className="p-6">
        <div className="text-5xl font-bold bg-gradient-to-r from-[#016A70] to-[#A2C579] text-transparent bg-clip-text mb-2">
          {stats.users.toLocaleString()}+
        </div>
        <p className="text-[#016A70] text-lg">Active Users</p>
      </div>
      <div className="p-6 border-t md:border-t-0 md:border-l md:border-r border-gray-200">
        <div className="text-5xl font-bold bg-gradient-to-r from-[#016A70] to-[#A2C579] text-transparent bg-clip-text mb-2">
          {stats.images.toLocaleString()}+
        </div>
        <p className="text-[#016A70] text-lg">Images Processed</p>
      </div>
      <div className="p-6 border-t md:border-t-0 border-gray-200">
        <div className="text-5xl font-bold bg-gradient-to-r from-[#016A70] to-[#A2C579] text-transparent bg-clip-text mb-2">
          {stats.countries}+
        </div>
        <p className="text-[#016A70] text-lg">Countries</p>
      </div>
    </div>
  )
}

export default StatsSection
