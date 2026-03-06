"use client";
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { NAV_LINKS, HOTEL } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-8 left-0 right-0 z-50 px-6 lg:px-10 flex items-center justify-between h-[70px] transition-all duration-300 ${
          scrolled
            ? "bg-navy-dark shadow-xl shadow-black/30"
            : "bg-navy-dark/60 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-2.5 no-underline"
        >
          <div className="w-9 h-9 bg-gold rounded-md flex items-center justify-center">
            <Home size={18} className="text-navy-dark" strokeWidth={2} />
          </div>
          <div className="font-cormorant text-white text-xl font-semibold leading-none tracking-wide">
            FARA <span className="text-gold">Hotel</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-gold text-[0.82rem] font-medium tracking-[0.06em] uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer font-jost"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={HOTEL.whatsappMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy-dark px-4 py-2 rounded text-[0.82rem] font-semibold tracking-wide uppercase transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5 no-underline font-jost"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[108px] left-0 right-0 z-40 bg-navy-dark flex flex-col px-6 py-6 gap-5 lg:hidden shadow-xl">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white/85 text-base font-medium tracking-[0.05em] uppercase text-left bg-transparent border-none cursor-pointer font-jost hover:text-gold transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={HOTEL.whatsappMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25d366] font-semibold text-base tracking-wide no-underline font-jost"
            onClick={() => setMenuOpen(false)}
          >
            📲 Book via WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
