import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        const offset = 80
        const elementPosition = section.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Results', id: 'results' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Logo & Brand Section */}
          <div className="lg:col-span-1">
            <div
              className="flex items-center gap-3 cursor-pointer group mb-6"
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative">
                <img
                  src="/logo.jpg"
                  alt="Identiti Dental Logo"
                  className="h-14 w-14 sm:h-16 sm:w-16 object-contain transition-transform duration-300 group-hover:scale-110 rounded-full"
                />
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
                  style={{ backgroundColor: '#E7522D' }}
                ></div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-wide block">
                  <span className="text-white">IDENTITI</span>
                  <span className="ml-1" style={{ color: '#E7522D' }}>
                    DENTAL
                  </span>
                </span>
                <p className="text-sm text-slate-400 mt-1">
                  Your Smile, Our Identity
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming smiles with precision, care, and excellence. Your
              trusted partner in dental health and aesthetics.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#E7522D' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium group flex items-center gap-2"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#E7522D'
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = ''
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <span
                      className="w-0 h-0.5 transition-all duration-300 group-hover:w-2"
                      style={{ backgroundColor: '#E7522D' }}
                    ></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#E7522D' }}>
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#privacy-policy"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium group flex items-center gap-2"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#E7522D'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ''
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <span
                    className="w-0 h-0.5 transition-all duration-300 group-hover:w-2"
                    style={{ backgroundColor: '#E7522D' }}
                  ></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms-conditions"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium group flex items-center gap-2"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#E7522D'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ''
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <span
                    className="w-0 h-0.5 transition-all duration-300 group-hover:w-2"
                    style={{ backgroundColor: '#E7522D' }}
                  ></span>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#E7522D' }}>
              Emergency Contact
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Emergency Line
                </p>
                <a
                  href="tel:+16195550143"
                  className="text-lg font-semibold text-white hover:text-red-400 transition-colors duration-300 flex items-center gap-2"
                  style={{ color: '#E7522D' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ff6b4a'
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#E7522D'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (619) 555-0143
                </a>
                <p className="text-xs text-slate-400 mt-2">
                  Available 24/7 for dental emergencies
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Email
                </p>
                <a
                  href="mailto:care@identiti.dental"
                  className="text-sm text-slate-300 hover:text-white transition-colors duration-300"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E7522D')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                >
                  care@identiti.dental
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{ backgroundColor: 'rgba(231, 82, 45, 0.2)' }}
        ></div>

        {/* Copyright & Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">
            <p>
              © {currentYear} Identiti Dental. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <span className="hidden sm:inline">Licensed Dental Practice</span>
            <span className="text-slate-600">•</span>
            <span>San Diego, CA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer