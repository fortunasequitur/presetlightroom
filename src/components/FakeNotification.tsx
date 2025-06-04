'use client'

import { useState, useEffect } from 'react'
import { X, ShoppingBag } from 'lucide-react'

export function FakeNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentNotification, setCurrentNotification] = useState(0)

  const notifications = [
    { name: 'Calista', city: 'Jakarta' },
    { name: 'Andi', city: 'Surabaya' },
    { name: 'Sari', city: 'Bandung' },
    { name: 'Riko', city: 'Medan' },
    { name: 'Maya', city: 'Yogyakarta' },
    { name: 'Doni', city: 'Bali' },
    { name: 'Nadia', city: 'Semarang' },
    { name: 'Lestari', city: 'Makassar' },
    { name: 'Nurul', city: 'Palembang' },
    { name: 'Zakiah', city: 'Padang' },
    { name: 'Jamilah', city: 'Malang' },
    { name: 'Yohanes', city: 'Pontianak' },
    { name: 'Wahyuni', city: 'Balikpapan' },
    { name: 'Aminah', city: 'Batam' },
    { name: 'Mahmud', city: 'Solo' },
    { name: 'Susila', city: 'Cirebon' }
  ]

  useEffect(() => {
    const showNotification = () => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length)
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 4000)
    }

    const timer = setInterval(showNotification, 8000)

    // Show first notification after 3 seconds
    setTimeout(showNotification, 3000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  const notification = notifications[currentNotification]

  return (
    <div className="fixed top-4 left-4 right-4 z-50 animate-slide-down">
      <div className="bg-white border border-green-200 rounded-lg shadow-lg p-4 mx-auto max-w-sm">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              <span className="font-semibold">{notification.name}</span>, {notification.city}
            </p>
            <p className="text-xs text-gray-600">
              baru saja membeli Preset Lightroom!
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  )
}
