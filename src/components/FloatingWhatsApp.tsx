'use client'

import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.link/inv6bj', '_blank')

    // Track conversion for analytics
    if (typeof window !== 'undefined') {
      // Google Analytics event
      if (window.gtag) {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: 'floating_button'
        })
      }

      // Facebook Pixel event
      if (window.fbq) {
        window.fbq('track', 'Contact')
      }
    }
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-bounce-gentle"
      aria-label="Contact WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
    </button>
  )
}
