import { Check } from 'lucide-react'

export function Benefits() {
  const benefits = [
    'Dapet 500+ Preset Premium 2025',
    'Hanya 1x Bayar Untuk Selamanya',
    '1x Klik Langsung Aesthetic',
    'Bisa Digunakan di HP Android',
    'Bisa Digunakan di HP iPhone',
    'Bisa Digunakan di Laptop',
    'Bisa Digunakan di Komputer',
    'File Permanen Tidak Ada Expired',
    'Instant Download'
  ]

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
        Benefit Yang Kamu Dapatkan
      </h2>

      <div className="space-y-3">
        {benefits.map((benefit, index) => (
          <div
            key={benefit}
            className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover-lift animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex-shrink-0">
              <Check className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-gray-700 text-sm font-medium">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
