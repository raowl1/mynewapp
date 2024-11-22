import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Logo and About Me */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/placeholder.svg?height=100&width=100&text=Logo"
              alt="Company Logo"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-600">
              I'm a passionate content writer dedicated to crafting compelling stories and engaging copy. With years of experience across various industries, I bring creativity and expertise to every project.
            </p>
          </div>

          {/* Middle Column: Send Message Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Details and Social Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <div className="space-y-4">
              <a href="https://instagram.com" className="flex items-center space-x-2 text-gray-600 hover:text-black">
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com" className="flex items-center space-x-2 text-gray-600 hover:text-black">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:contact@example.com" className="flex items-center space-x-2 text-gray-600 hover:text-black">
                <FaEnvelope />
                <span>contact@example.com</span>
              </a>
              <a href="https://wa.me/1234567890" className="flex items-center space-x-2 text-gray-600 hover:text-black">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

