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
        <ImageCarousel
          title="Contoh Hasil Preset"
          images={[
            { id: 'preset-1', url: 'https://i.imgur.com/Zt8Fs2u.jpeg' },
            { id: 'preset-2', url: 'https://i.imgur.com/y3W7nYK.jpeg' },
            { id: 'preset-3', url: 'https://i.imgur.com/Ft4rGpY.jpeg' },
            { id: 'preset-4', url: 'https://i.imgur.com/3LdTOhI.jpeg' },
            { id: 'preset-5', url: 'https://i.imgur.com/k82k856.jpeg' },
            { id: 'preset-6', url: 'https://i.imgur.com/XpsEglO.jpeg' }
          ]}
        />
        <ImageCarousel
          title="Preset Andalan Nih Buat Kamu"
          images={[
            { id: 'preset-1', url: 'https://i.imgur.com/9Ds9z7E.jpeg' },
            { id: 'preset-2', url: 'https://i.imgur.com/AHa0Dtv.png' },
            { id: 'preset-3', url: 'https://i.imgur.com/CZAZlJ6.png' },
            { id: 'preset-4', url: 'https://i.imgur.com/RD8HJwf.jpeg' },
            { id: 'preset-5', url: 'https://i.imgur.com/LY9mAMP.jpeg' },
            { id: 'preset-6', url: 'https://i.imgur.com/IjiSbBa.jpeg' }
          ]}
        />
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center border border-purple-100 animate-fade-in">
          <h3 className="text-xl font-bold mb-3 text-purple-700">Tenang Aja!</h3>
          <p className="mb-2 font-medium text-gray-800">Preset Yang Kamu Cari Ada Semua Disini!</p>
          <ul className="text-gray-700 text-sm space-y-1 mb-2">
            <li>Preset Foto Aestetik? <span className="font-semibold text-green-600">Ada</span></li>
            <li>Preset Foto Cinematic? <span className="font-semibold text-green-600">Ada</span></li>
            <li>Preset Foto Kodak? <span className="font-semibold text-green-600">Ada</span></li>
            <li>Preset Foto Kamera Sony? <span className="font-semibold text-green-600">Ada</span></li>
            <li>Preset Foto Wedding? <span className="font-semibold text-green-600">Ada</span></li>
            <li>Preset Foto Liburan? <span className="font-semibold text-green-600">Ada</span></li>
            <li>Preset Foto Korea? <span className="font-semibold text-green-600">Ada</span></li>
          </ul>
          <div className="text-base font-bold text-pink-600 mb-3">Banyak Deh Pokoknya!!</div>
          <div className="mt-2">
            <div className="text-base font-bold text-purple-700 mb-1">Yang Paling Penting Nih</div>
            <div className="text-sm text-gray-800 font-medium">Tone Warna Preset Kami Tidak Alay</div>
            <div className="text-sm text-green-700 font-semibold">1x Beli Untuk Selamanya</div>
          </div>
        </div>
        <Benefits />
        <Testimonials />
        <Pricing />
      </div>
      <FloatingWhatsApp />
    </div>
  )
}
