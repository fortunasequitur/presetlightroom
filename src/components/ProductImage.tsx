import Image from 'next/image'

export function ProductImage() {
  return (
    <div className="mb-6 flex justify-center animate-slide-up">
      <div className="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white p-2 hover-lift">
        <Image
          src="https://i.imgur.com/hCRLV4H.jpeg"
          alt="Preset Lightroom 500+ Exclusive Premium"
          fill
          className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
          priority
          sizes="(max-width: 768px) 256px, 256px"
        />
        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-bounce-gentle">
          PREMIUM
        </div>
      </div>
    </div>
  )
}
