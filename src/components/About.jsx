import React from 'react'

const About = () => {
  return (
    <section id="about">
    <div
      className="min-h-screen bg-[#fefef3] px-8 md:px-16 py-10 md:py-14"
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Cormorant+Garamond:wght@300;400&family=Montserrat:wght@400;600;700&display=swap');`}</style>

      {/* ── TOP ROW: THAT'S (left) | quote + body (right) ── */}
      <div className="flex justify-between items-center gap-4 md:gap-24 mb-12 px-24">

        {/* Big serif word — left */}
        <h1
          className="text-[#c7482c] uppercase"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(4.8rem, 14vw, 12rem)',
            letterSpacing: '-0.01em',
          }}
        >
          THAT'S
        </h1>

        {/* Right block: tagline + paragraph — vertically centred with the word */}
        <div className="flex flex-col justify-center ">
          <p
            className="text-[#1d1d1d] font-semibold max-w-xl pt-16"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(2rem, 2.2vw, 2.3rem)',
            }}
          >
            Life's too short to be taken too seriously
          </p>
          <p
            className="text-[#666] leading-relaxed"
            style={{
              fontFamily: "'Montserrat', serif",
              fontSize: 'clamp(0.9rem, 1.2vw, 1.9rem)',
            }}
          >
            My houseplants have an uncanny ability to pretend
            they're invisible. I've resorted to leaving them audio
            books in hopes that they'll grow toward the sound,
            but they remain steadfastly leafy and aloof.
          </p>
        </div>
      </div>

      {/* ── FULL-WIDTH IMAGE ── */}
      <div
        className="max-w-6xl mx-auto overflow-hidden"
        style={{ height: 'clamp(280px, 55vw, 580px)' }}
      >
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&h=700&fit=crop&crop=center"
          alt="Shagun Manandhar"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(1) contrast(1.05)' }}
        />
      </div>

      {/* ── BOTTOM ROW: social + ME ── */}
      <div className="flex items-end justify-between max-w-6xl mx-auto">
        {/* Social links */}
        <div
          className="flex flex-col gap-[3px]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(0.6rem, 1.3vw, 1.72rem)',
            letterSpacing: '0.10em',
          }}
        >
          {['INSTAGRAM', 'TWITTER', 'FACEBOOK'].map(s => (
            <a
              key={s}
              href="#"
              className="text-[#1d1d1d] hover:text-[#c7482c] transition-colors duration-200 uppercase"
            >
              {s}
            </a>
          ))}
        </div>

        {/* ME */}
        <h1
          className="text-[#c7482c] font-bold uppercase leading-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3.8rem, 10vw, 7.5rem)',
            letterSpacing: '-0.01em',
          }}
        >
          ME
        </h1>
      </div>
    </div>
    </section>
  )
}

export default About