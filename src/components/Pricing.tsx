'use client'

import { ShoppingCart } from 'lucide-react'
import { PaymentMethods } from './PaymentMethods'

export function Pricing() {
  const handlePurchaseClick = () => {
    // Track conversion for analytics
    if (typeof window !== 'undefined') {
      // Google Analytics event
      if (window.gtag) {
        window.gtag('event', 'purchase_intent', {
          event_category: 'ecommerce',
          event_label: 'cta_button',
          value: 49000
        })
      }

      // Facebook Pixel event
      if (window.fbq) {
        window.fbq('track', 'AddToCart', {
          value: 49000,
          currency: 'IDR'
        })
      }
    }

    // Redirect to WhatsApp for purchase
    window.open('https://wa.link/inv6bj', '_blank')
  }

  return (
    <div className="mb-8 animate-slide-up">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white text-center shadow-xl hover-lift">
        <div className="mb-4">
          <p className="text-sm opacity-90 mb-2">Harga Normal</p>
          <p className="text-xl line-through opacity-75">Rp 199.000</p>
        </div>

        <div className="mb-6">
          <p className="text-sm opacity-90 mb-2">Harga Spesial Hari Ini</p>
          <p className="text-4xl font-bold animate-pulse-slow">Rp. 49.000</p>
          <p className="text-sm opacity-90 mt-1">/ Permanent</p>
        </div>

        <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-4 animate-bounce-gentle">
          DISKON 75%
        </div>

        <button
          onClick={handlePurchaseClick}
          className="w-full bg-white text-purple-600 font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-lg"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Beli Sekarang</span>
        </button>

        <p className="text-xs opacity-80 mt-3">
          ⚡ Instant Download • 💯 Garansi Uang Kembali
        </p>
      </div>

      <PaymentMethods />
    </div>
  )
}
