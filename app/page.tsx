import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Clients from './components/Clients'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Skills />
      <Clients />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}

