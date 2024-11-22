import Image from 'next/image'

const portfolioItems = [
  { title: "The Future of AI in Content Creation", image: "/placeholder.svg?text=AI+Content" },
  { title: "10 Effective SEO Strategies for 2023", image: "/placeholder.svg?text=SEO+Strategies" },
  { title: "How to Write Compelling Product Descriptions", image: "/placeholder.svg?text=Product+Descriptions" },
  { title: "The Art of Storytelling in Marketing", image: "/placeholder.svg?text=Storytelling" },
  { title: "Mastering the Craft of Technical Writing", image: "/placeholder.svg?text=Technical+Writing" },
  { title: "Creating Engaging Social Media Content", image: "/placeholder.svg?text=Social+Media" },
  { title: "The Power of Emotional Copywriting", image: "/placeholder.svg?text=Emotional+Copywriting" },
  { title: "Effective Content Strategies for E-commerce", image: "/placeholder.svg?text=E-commerce+Content" },
  { title: "How to Write Viral Blog Posts", image: "/placeholder.svg?text=Viral+Blogging" },
  { title: "The Impact of Voice Search on Content", image: "/placeholder.svg?text=Voice+Search" },
  { title: "Creating Accessible Content for All", image: "/placeholder.svg?text=Accessible+Content" },
  { title: "The Role of Content in Customer Experience", image: "/placeholder.svg?text=CX+Content" }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
              <div className={`flex-1 ${index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={400} 
                  height={400} 
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className={`flex-1 flex items-center justify-center p-6 ${index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                <h3 className="text-xl font-semibold text-center">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

