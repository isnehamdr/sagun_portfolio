import React, { useState, useEffect } from 'react'

const placeholderImages = {
  portrait1: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=700&fit=crop&crop=face",
  portrait2: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=700&fit=crop&crop=face",
  still: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
}

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="home">
    <div className="relative overflow-hidden min-h-screen bg-[#fefef3] py-24" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>

      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Cormorant+Garamond:wght@300;400&display=swap');`}</style>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative px-12">

        {/* PHOTO — first title row */}
        <span
          className="block text-center uppercase text-[#c7482c] font-semibold leading-[1.2] whitespace-nowrap relative z-10"
          style={{ fontSize: 'clamp(4.5rem, 14.5vw, 12rem)', fontFamily: "'Playfair Display', serif" }}
        >
          PHOTO
        </span>

        {/* PORTFOLIO — second title row (photos overlap this) */}
        <span
          className="block text-center uppercase text-[#c7482c] font-semibold leading-[0.9] whitespace-nowrap relative z-[2]"
          style={{ fontSize: 'clamp(4.5rem, 14.5vw, 12rem)', fontFamily: "'Playfair Display', serif" }}
        >
          PORTFOLIO
        </span>

        {/* Credit — absolute, centered between rows */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10 text-center whitespace-nowrap text-[#1a1a1a]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1rem, 2rem, 2rem)',
            letterSpacing: '0.1em',
            lineHeight: 1.9,
            bottom: 660,
          }}
        >
          Shagun Manandhar
        </div>

        {/* LEFT photo — tall portrait, flush left, overlaps PORTFOLIO */}
        <div
          className="absolute overflow-hidden z-30"
          style={{ left: 0, top: 320, width: 'clamp(210px, 29vw, 530px)', height: 'clamp(270px, 37vw, 470px)' }}
        >
          <img
            src={placeholderImages.portrait1}
            alt="Portrait 1"
            className="w-full h-full object-cover saturate-90 contrast-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* CENTER photo — centered, below credit, tall */}
        <div
          className="absolute overflow-hidden z-[35] left-1/2 -translate-x-1/2"
          style={{ top: 540, width: 'clamp(220px, 27vw, 540px)', height: 'clamp(340px, 52vw, 500px)' }}
        >
          <img
            src={placeholderImages.portrait2}
            alt="Portrait 2"
            className="w-full h-full object-cover saturate-90 contrast-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            loading="lazy"
          />
        </div>

        {/* RIGHT photo — landscape, flush right, overlaps PORTFOLIO */}
        <div
          className="absolute overflow-hidden z-30"
          style={{ right: 0, top: 320, width: 'clamp(190px, 27vw, 520px)', height: 'clamp(210px, 29vw, 370px)' }}
        >
          <img
            src={placeholderImages.still}
            alt="Still life"
            className="w-full h-full object-cover saturate-90 contrast-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Spacer */}
        <div style={{ height: 'clamp(380px, 58vw, 740px)' }} />
      </div>

      {/* ── MOBILE ── */}
      <div className="flex md:hidden flex-col items-center justify-center min-h-screen gap-6 py-12 px-4">
        
        {/* Titles */}
        <div className="text-center w-full">
          <span
            className="block uppercase text-[#c7482c] font-bold leading-[0.9]"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 4rem)', fontFamily: "'Playfair Display', serif" }}
          >
            PHOTO
          </span>
          <span
            className="block uppercase text-[#c7482c] font-bold leading-[0.9] mt-2"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 4rem)', fontFamily: "'Playfair Display', serif" }}
          >
            PORTFOLIO
          </span>
        </div>

        {/* Credit */}
        <div
          className="text-center"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <p className="text-[#1a1a1a] text-sm md:text-base tracking-[0.1em] leading-relaxed">
            Shagun Manandhar
          </p>
         
        </div>

        {/* Center portrait - Main featured image */}
        <div className="relative w-full max-w-md mx-auto mt-4 mb-2">
          <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[3/4]">
            <img 
              src={placeholderImages.portrait2} 
              alt="Featured Portrait" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            {/* Optional overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Bottom grid - Two column layout */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-md mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-md aspect-[3/4]">
            <img 
              src={placeholderImages.portrait1} 
              alt="Portrait 1" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md aspect-[3/4]">
            <img 
              src={placeholderImages.still} 
              alt="Still life" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>

        {/* Optional decorative element */}
        
        {/* Small description for mobile */}
       
      </div>
    </div>
    </section>
  )
}

export default Hero