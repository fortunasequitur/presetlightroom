import { Header } from '@/components/Header'
import { ProductImage } from '@/components/ProductImage'
import { ImageCarousel } from '@/components/ImageCarousel'
import { Benefits } from '@/components/Benefits'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { FakeNotification } from '@/components/FakeNotification'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <FakeNotification />
      <div className="container mx-auto px-4 py-6 max-w-md">
        <Header />
        <ProductImage />
        <ImageCarousel />
        <Benefits />
        <Testimonials />
        <Pricing />
      </div>
      <FloatingWhatsApp />
    </div>
  )
}
