const Footer = () => {
  return (
    <section id="contact">
    <div style={{ backgroundColor: '#fefef3', fontFamily: 'Playfair Display' }}>
      
      {/* CTA Section */}
      <div style={{
        textAlign: 'center',
        padding: '80px 40px 60px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <p style={{
          fontSize: '14px',
          color: '#333',
          marginBottom: '16px',
          fontFamily: 'sans-serif',
        }}>
          End.
        </p>

        <h2 style={{
          fontSize: 'clamp(48px, 6vw, 80px)',
          color: '#c0442a',
          fontWeight: '400',
          lineHeight: '1.1',
        }}>
          Let's make something<br />awesome together
        </h2>
      </div>

      {/* Nav Row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 40px',
        borderTop: '1px solid #ccc',
        fontFamily: 'Montserrat',
      }}>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Instagram', 'Facebook', 'Tiktok'].map((link) => (
            <a key={link} href="#" style={{ color: '#111' }}>
              {link}
            </a>
          ))}
        </div>

        <a href="#">Contact</a>
      </div>

      {/* Bottom */}
      <div className="pb-8 text-center text-lg text-gray-400">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        <p className="mt-4">Made by ISNEHA</p>
      </div>

    </div>
    </section>
  )
}

export default Footer