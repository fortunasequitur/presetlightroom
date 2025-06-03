import { Star } from 'lucide-react'

export function Header() {
  return (
    <div className="text-center mb-6 animate-fade-in">
      <h1 className="text-xl font-bold text-gray-800 leading-tight">
        <span className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse-slow">
          BUNDLE PREMIUM 500+<br />PRESET LIGHTROOM 2025
        </span>
      </h1>

      <div className="flex items-center justify-center mt-3 mb-2">
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={`header-rating-star-${i + 1}`} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <span className="ml-2 text-sm font-semibold text-gray-700">
          (652+ SOLD)
        </span>
      </div>

      <p className="text-gray-600 text-sm font-medium">
        Foto Aestetik Hanya Dengan 1x Klik
      </p>
    </div>
  )
}
