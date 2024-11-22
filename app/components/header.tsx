export default function Header() {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold">
            ContentPro
          </div>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#clients" className="hover:underline">Clients</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }
  
  