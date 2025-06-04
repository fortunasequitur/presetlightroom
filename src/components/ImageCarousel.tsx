'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import type { StaticImageData } from 'next/image'

export interface ImageCarouselProps {
  images: { id: string; url: string }[];
  title: string;
  autoPlay?: boolean;
}

export function ImageCarousel({ images, title, autoPlay = true }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length, autoPlay])

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">
        {title}
      </h2>

      <div className="relative w-full max-w-xs aspect-square rounded-xl overflow-hidden shadow-lg mx-auto">
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
