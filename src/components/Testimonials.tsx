import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Anindita Dewi',
      city: 'Jakarta',
      rating: 5,
      text: 'Preset-nya bagus banget! Foto Instagram saya jadi lebih aesthetic dan professional. Worth it banget!',
      image: 'https://instagram.fsub8-2.fna.fbcdn.net/v/t51.2885-19/476781079_645435607825900_7959270283643674206_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fsub8-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QHU_b4PuJgDh1057uu7KkCCHcsyLtr25MThERlGQfkKxfoUJf0kZLWM965R043UCeU&_nc_ohc=Bb9_HJc349sQ7kNvwH1QUds&_nc_gid=PcIqDqbfdvfK565KxvjQpg&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfJg4asxEEBEthiqpxdlwVbVy9rXmNuuia1neSx_E7rI_g&oe=68459D8F&_nc_sid=22de04'
    },
    {
      name: 'Rizki A.',
      city: 'Bandung',
      rating: 5,
      text: 'Gampang banget dipakenya, tinggal 1 klik langsung jadi keren. Recommended untuk content creator!',
      image: 'https://i.imgur.com/n2btdhm.jpeg'
    },
    {
      name: 'Rakha P',
      city: 'Surabaya',
      rating: 5,
      text: 'Koleksi presetnya lengkap banget, dari vintage sampai modern semua ada. Puas banget!',
      image: 'https://instagram.fsub8-2.fna.fbcdn.net/v/t51.2885-19/268163229_138066775273231_5969094771649786595_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fsub8-2.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QGQP1LvaeFxmQjgRjM-k5pnPMbXHh5MYUT-DLy7LHEY1gH__gMp5zSWeNlbr0Fsomw&_nc_ohc=dWj4lC2WN0cQ7kNvwHpxfRL&_nc_gid=SMRB0ZgVrfs7eKfQBEAiFA&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfK92lRaX9Lkg2LuagjGjfrJwjriHNcrAGAlKwKT9YYKKQ&oe=6845A24E&_nc_sid=7d3ac5'
    },
    {
      name: 'Rifky Susseto V C',
      city: 'Yogyakarta',
      rating: 5,
      text: 'Harga segini dapet 500+ preset premium? Murah banget! File-nya juga berkualitas tinggi.',
      image: 'https://i.imgur.com/DGCa7fa.jpeg'
    }
  ]

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
        Apa Kata Mereka?
      </h2>

      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-800 text-sm">
                    {testimonial.name}
                  </span>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className="text-gray-500 text-xs">{testimonial.city}</span>
                </div>

                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={`star-${testimonial.name}-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
          <div className="flex -space-x-2">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <img
                key={testimonial.name}
                src={testimonial.image}
                alt=""
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <span className="text-green-700 text-sm font-medium">
            +1,000 pelanggan puas
          </span>
        </div>
      </div>
    </div>
  )
}
