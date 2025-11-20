import React, { useState, useEffect } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle active section detection
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'results', 'gallery', 'reviews', 'contact']
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }

      // If at top, set hero as active
      if (window.scrollY < 100) {
        setActiveSection('hero')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        const offset = 80 // Navbar height
        const elementPosition = section.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsOpen(false) // Close mobile menu after click
  }

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Results', id: 'results' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <img
                src="/logo.jpg"
                alt="Identiti Dental Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain transition-transform duration-300 group-hover:scale-110 rounded-full"
              />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                style={{ backgroundColor: '#E7522D' }}
              ></div>
            </div>
            <span
              className={`hidden sm:inline text-lg font-bold tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              <span style={{ color: scrolled ? '#1D1C1C' : '#fff' }}>
                IDENTITI
              </span>
              <span
                className="ml-1"
                style={{ color: '#E7522D' }}
              >
                DENTAL
              </span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group ${
                  scrolled
                    ? 'text-slate-700 hover:text-slate-900'
                    : 'text-white/90 hover:text-white'
                } ${
                  activeSection === item.id
                    ? scrolled
                      ? 'text-slate-900'
                      : 'text-white'
                    : ''
                }`}
                style={{
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <span
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300"
                    style={{ backgroundColor: '#E7522D' }}
                  ></span>
                )}

                {/* Hover effect */}
                <span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: '#E7522D' }}
                ></span>
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-2.5 text-sm font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#E7522D' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d6451f'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E7522D'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 transition-all duration-300 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              style={{
                backgroundColor: isOpen
                  ? '#E7522D'
                  : scrolled
                  ? '#1D1C1C'
                  : '#fff',
              }}
            ></span>
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
              style={{
                backgroundColor: scrolled ? '#1D1C1C' : '#fff',
              }}
            ></span>
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              style={{
                backgroundColor: isOpen
                  ? '#E7522D'
                  : scrolled
                  ? '#1D1C1C'
                  : '#fff',
              }}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-120 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className={`px-4 py-6 space-y-2 ${
            scrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-md'
          }`}
        >
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:translate-x-2 ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
              style={{
                backgroundColor:
                  activeSection === item.id ? '#E7522D' : 'transparent',
                transitionDelay: `${index * 0.05}s`,
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(231, 82, 45, 0.1)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
            >
              {item.name}
            </button>
          ))}
          
          {/* Mobile CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full mt-4 px-6 py-3 text-sm font-semibold text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#E7522D' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d6451f'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E7522D'
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
