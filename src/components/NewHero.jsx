
import React from 'react';
import './NewHero.css';

const NewHero = () => {
  const images = [
    '/hero-slider/img1.jpg',
    '/hero-slider/img2.jpg',
    '/hero-slider/img3.jpg',
    '/hero-slider/img4.jpg',
    '/hero-slider/img5.jpg',
    '/hero-slider/img6.jpg',
    '/hero-slider/img7.jpg',
  ];

  return (
    <div className="hero-container">
      <div className="hero-content">

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 text-white  animate-fade-in-up">
            <span className="block " style={{ color: '#F05B28' }}>IDENTITI</span>
            <span className="block" style={{ color: '#F05B28' }}>DENTAL</span>
          </h1>

          {/* Tagline - Animated with delay */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-2 animate-fade-in-up-delay-1" style={{ color: 'rgba(240, 91, 40, 0.9)' }}>
            Your Smile, Our Care
          </p>
        
        {/* <h1 className="hero-title">
          Experience the <br />
          <span>Future of Dentistry</span>
        </h1> */}
        <p className="hero-subtitle">
          Experience exceptional dental care in a modern, comfortable environment. 
            We're committed to making your smile our top priority.
        </p>
        <button className="book-btn">Book Appointment</button>
      </div>

      <div className="hero-visual">
        <div className="circle-bg"></div>
        <div className="orbit-container">
          {images.map((src, index) => {
            const angle = (360 / images.length) * index;
            return (
              <div 
                key={index} 
                className="orbit-item"
                style={{
                  transform: `rotate(${angle}deg) translate(180px)`
                }}
              >
                <img 
                  src={src} 
                  alt={`Dental Patient ${index + 1}`} 
                  style={{
                    animation: `counterRotate-${index} 20s linear infinite`
                  }}
                />
                <style>
                  {`
                    @keyframes counterRotate-${index} {
                      from { transform: rotate(-${angle}deg); }
                      to { transform: rotate(-${angle + 360}deg); }
                    }
                  `}
                </style>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewHero;