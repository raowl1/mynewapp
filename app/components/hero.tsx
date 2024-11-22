import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[120vh] min-h-[800px] max-h-[1200px]">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Modern+Banner"
          alt="Modern banner background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="text-left text-white p-8 max-w-2xl ml-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Writing Stories That Sell
          </h1>
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  )
}

