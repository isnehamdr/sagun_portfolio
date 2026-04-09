import { useState } from "react";

const menuItems = [
  { label: "Home", number: "01" },
  { label: "About", number: "02" },
  { label: "Projects", number: "03" },
  { label: "Contact", number: "04" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <>
      {/* ── Top Bar ── */}
      <div className="flex justify-between items-center px-6 py-4 bg-[#fefef3]">
        <h2
          className={`font-['Playfair_Display',serif] text-black font-semibold tracking-widest text-xl transition-all duration-500 ${
            open ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          Shagun
        </h2>
        <button
          onClick={() => setOpen(true)}
          className={`font-['Playfair_Display',serif] text-black font-semibold tracking-widest text-xl bg-transparent border-none cursor-pointer hover:text-[#c4917a] transition-all duration-300 ${
            open ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          Menu
        </button>
      </div>

      {/* ── Full-screen Overlay ── */}
      <div
        className={`fixed inset-0 z-50 flex transition-all duration-500 ${
          open
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* ── Left Panel ── */}
        <div
          className={`relative w-1/2 bg-[#0e0e0b] flex flex-col justify-center px-[6%] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Quote */}
          <p
            className={`font-['Playfair_Display',serif] text-[#e8d5c4] font-light text-center leading-relaxed text-[clamp(2.6rem,2.2vw,2.6rem)] transition-all duration-500 delay-300 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Every artist{" "}
            <em className="italic text-[#c4917a]">dips his brush</em> in his
            own soul, and paints his own nature{" "}
            <em className="italic text-[#c4917a]">into his pictures.</em>
          </p>

          {/* Attribution */}
          <p
            className={`font-['Playfair_Display',serif] text-[#c4917a] text-center text-3xl tracking-wide mt-5 transition-all duration-500 delay-[400ms] ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            — Henry Ward Beecher
          </p>

          {/* Arrow Buttons */}
          <div
            className={`absolute bottom-[10%] left-0 w-full flex justify-around px-[18%] transition-opacity duration-500 delay-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            <button className="font-['Playfair_Display',serif] w-16 h-16 rounded-full border border-[rgba(196,145,122,0.4)] text-[#c4917a] flex items-center justify-center hover:border-[#c4917a] hover:bg-[rgba(196,145,122,0.08)] transition-all duration-300 cursor-pointer bg-transparent text-xl">
              ←
            </button>
            <button className="font-['Playfair_Display',serif] w-16 h-16 rounded-full border border-[rgba(196,145,122,0.4)] text-[#c4917a] flex items-center justify-center hover:border-[#c4917a] hover:bg-[rgba(196,145,122,0.08)] transition-all duration-300 cursor-pointer bg-transparent text-xl">
              →
            </button>
          </div>
        </div>

        {/* ── Right Panel ── */}
        <div
          className={`relative w-1/2 bg-[#1a1a14] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] delay-[40ms] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className={`font-['Playfair_Display',serif] absolute top-5 right-7 text-[#e8d5c4] text-base tracking-widest bg-transparent border-none cursor-pointer hover:text-[#c4917a] transition-all duration-300 z-10 ${
              open ? "opacity-100 delay-200" : "opacity-0"
            }`}
          >
            Close
          </button>

          {/* Custom grid layout with gaps */}
          <div className="relative w-full h-full p-8">
            {/* Image — top-left */}
            <div
              className={`absolute overflow-hidden transition-opacity duration-500 delay-300 ${
                open ? "opacity-100" : "opacity-0"
              }`}
              style={{
                left: "0%",
                top: "12%",
                width: "30%",
                height: "35%",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=260&q=80"
                alt="still life"
                className="w-full h-full object-cover sepia-[0.2] brightness-[0.78]"
              />
            </div>

            {/* Image — top-right */}
            <div
              className={`absolute overflow-hidden transition-opacity duration-500 delay-[380ms] ${
                open ? "opacity-100" : "opacity-0"
              }`}
              style={{
                right: "-4%",
                top: "32%",
                width: "28%",
                height: "35%",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80"
                alt="fashion"
                className="w-full h-full object-cover sepia-[0.2] brightness-[0.78]"
              />
            </div>

            {/* Nav Items - Centered */}
            <nav className="absolute inset-0 flex flex-col items-center justify-center ps-18">
              <div className="flex flex-col items-start gap-8 -mt-4">
                {menuItems.map((item, i) => (
                  <div
                    key={item.label}
                    onClick={() => {
                      setActive(i);
                      setOpen(false);
                    }}
                    className={`flex items-baseline gap-1.5 cursor-pointer py-0.5 group transition-all duration-500 ${
                      open
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-7"
                    }`}
                    style={{
                      transitionDelay: open ? `${220 + i * 70}ms` : "0ms",
                    }}
                  >
                    <span
                      className={`font-['Playfair_Display',serif] font-light leading-none tracking-tight transition-colors duration-300 text-[clamp(3rem,5vw,5rem)] ${
                        active === i
                          ? "text-[#c4917a] italic"
                          : "text-[#7a6d64] group-hover:text-[#c4917a]"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="font-['Playfair_Display',serif] text-[#5c5047] text-xs tracking-wide self-start mt-2">
                      {item.number}
                    </span>
                  </div>
                ))}
              </div>
            </nav>

            {/* Image — bottom-left */}
            <div
              className={`absolute overflow-hidden transition-opacity duration-500 delay-[460ms] ${
                open ? "opacity-100" : "opacity-0"
              }`}
              style={{
                left: "0%",
                bottom: "2%",
                width: "32%",
                height: "35%",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=260&q=80"
                alt="portrait"
                className="w-full h-full object-cover sepia-[0.2] brightness-[0.78]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}