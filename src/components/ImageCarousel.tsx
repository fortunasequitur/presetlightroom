'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    { id: 'preset-1', url: 'https://i.imgur.com/hCRLV4H.jpeg' },
    { id: 'preset-2', url: 'https://i.imgur.com/y3W7nYK.jpeg' },
    { id: 'preset-3', url: 'https://i.imgur.com/Ft4rGpY.jpeg' },
    { id: 'preset-4', url: 'https://i.imgur.com/3LdTOhI.jpeg' },
    { id: 'preset-5', url: 'https://i.imgur.com/k82k856.jpeg' },
    { id: 'preset-6', url: 'https://i.imgur.com/XpsEglO.jpeg' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">
        Contoh Hasil Preset
      </h2>

      <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={images[currentIndex].url}
          alt={`Contoh preset ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      <div className="flex justify-center mt-3 space-x-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
