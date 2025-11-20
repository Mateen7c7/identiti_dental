import React, { useEffect, useRef, useState } from 'react'

// Counter component for animated numbers
const Counter = ({ target, suffix = '', prefix = '', duration = 2000, isVisible, delay = 0 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const startAnimation = () => {
      let startTime = null
      const startValue = 0
      const endValue = target

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
        
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(endValue)
        }
      }

      requestAnimationFrame(animate)
    }

    if (delay > 0) {
      const timeoutId = setTimeout(startAnimation, delay)
      return () => clearTimeout(timeoutId)
    } else {
      startAnimation()
    }
  }, [isVisible, target, duration, delay])

  // Format number with commas for thousands
  const formatNumber = (num) => {
    return num.toLocaleString('en-US')
  }

  return (
    <span>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}

const About = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const highlightRefs = useRef([])
  const [highlightVisibility, setHighlightVisibility] = useState({})

  // Observer for the main section (for other animations)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Observer for individual highlight cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index
            setHighlightVisibility((prev) => ({
              ...prev,
              [index]: true,
            }))
            // Unobserve once visible to prevent re-triggering
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const currentRefs = highlightRefs.current
    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [])

  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '15+ Years',
      description: 'Of Excellence',
      color: '#E7522D',
      bgColor: 'bg-orange-50',
      isCounter: true,
      counterValue: 15,
      counterSuffix: '+',
      titleSuffix: ' Years',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Board Certified',
      description: 'Dental Professionals',
      color: '#E7522D',
      bgColor: 'bg-orange-50',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'State-of-the-Art',
      description: 'Modern Facility',
      color: '#E7522D',
      bgColor: 'bg-orange-50',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: '10,000+',
      description: 'Happy Patients',
      color: '#E7522D',
      bgColor: 'bg-orange-50',
      isCounter: true,
      counterValue: 10000,
      counterSuffix: '+',
      titleSuffix: '',
    },
  ]

  const certifications = [
    'Indian Dental Association (ADA)',
    'State Board Certified',
    'Advanced Cosmetic Dentistry',
    'Implant Dentistry Specialist',
  ]

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" style={{ color: '#1D1C1C' }}>
            About <span style={{ color: '#E7522D' }}>Our Clinic</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #E7522D, #d6451f)' }}></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Story Content */}
          <div className={`space-y-6 scroll-fade-in-left ${isVisible ? 'visible' : ''}`}>
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold" style={{ color: '#1D1C1C' }}>
                Your Trusted Dental Care Partner
              </h3>
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#E7522D' }}></div>
            </div>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              At <span className="font-semibold" style={{ color: '#E7522D' }}>Identiti Dental</span>, we've been dedicated to providing exceptional dental care for over 15 years. Our journey began with a simple mission: to create a dental practice where patients feel comfortable, valued, and receive the highest quality of care.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              We combine years of clinical expertise with cutting-edge technology and a warm, welcoming environment. Our team of board-certified dental professionals is committed to helping you achieve and maintain a healthy, beautiful smile that you can be proud of.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              From routine cleanings to advanced cosmetic and restorative procedures, we offer comprehensive dental services tailored to meet your unique needs. Your oral health and satisfaction are at the heart of everything we do.
            </p>
          </div>

          {/* Dentist Photo */}
          <div className={`relative scroll-fade-in-right ${isVisible ? 'visible' : ''}`}>
            <div className="relative group">
              {/* Decorative Border */}
              <div className="absolute -inset-4 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300" style={{ background: 'linear-gradient(to right, #E7522D, #d6451f)' }}></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="/dentsit.jpg" 
                  alt="Dr. Identiti - Lead Dentist" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #E7522D, #d6451f)' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-medium">Certified</p>
                    <p className="text-sm font-bold text-slate-900">Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              ref={(el) => (highlightRefs.current[index] = el)}
              data-index={index}
              className={`scroll-scale-in ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`${highlight.bgColor} rounded-xl p-6 h-full transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl border border-transparent hover:border-orange-200`}>
                <div className="mb-4" style={{ color: highlight.color }}>
                  {highlight.icon}
                </div>
                <h4 className="text-2xl font-bold mb-2" style={{ color: '#1D1C1C' }}>
                  {highlight.isCounter ? (
                    <>
                      <Counter
                        target={highlight.counterValue}
                        suffix={highlight.counterSuffix || ''}
                        isVisible={highlightVisibility[index] || false}
                        duration={2000}
                        delay={0}
                      />
                      {highlight.titleSuffix}
                    </>
                  ) : (
                    highlight.title
                  )}
                </h4>
                <p className="text-slate-600 font-medium">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className={`rounded-2xl p-8 md:p-12 shadow-2xl scroll-fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s', background: 'linear-gradient(to right, #E7522D, #d6451f)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Certifications & Qualifications
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Our team maintains the highest standards of professional excellence through continuous education and certification.
              </p>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:translate-x-2"
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
