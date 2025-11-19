import React from 'react'

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="Identiti Dental Clinic" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-slate-900/70 to-slate-900/60"></div>
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Logo */}
        <div className="absolute left-0 top-0 sm:top-4 sm:left-4 flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Identiti Dental logo"
            className="h-12 w-12 sm:h-16 sm:w-16 object-contain drop-shadow-lg"
          />
          <span className="hidden sm:inline text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">
            Identiti Dental
          </span>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Clinic Name - Animated */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-fade-in-up">
            <span className="block">IDENTITI</span>
            <span className="block text-blue-400">DENTAL</span>
          </h1>

          {/* Tagline - Animated with delay */}
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 font-light mb-6 animate-fade-in-up-delay-1">
            Your Smile, Our Care
          </p>

          {/* Short Description - Animated with delay */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up-delay-2">
            Experience exceptional dental care in a modern, comfortable environment. 
            We're committed to making your smile our top priority.
          </p>

          {/* CTA Buttons - Animated with delay */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up-delay-3">
            <button
              type="button"
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out w-full sm:w-auto min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Appointment
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
            
            <a 
              href="tel:+1234567890" 
              className="group px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-all duration-300 ease-out w-full sm:w-auto min-w-[200px]"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </span>
            </a>
          </div>

          {/* Opening Hours & Emergency Hotline - Animated with delay */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-in-up-delay-4">
            {/* Opening Hours */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-3">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Opening Hours</h3>
              </div>
              <div className="text-gray-200 text-sm space-y-1">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Emergency Hotline */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-3">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Emergency Hotline</h3>
              </div>
              <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300 text-lg font-semibold transition-colors duration-300">
                24/7: (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero