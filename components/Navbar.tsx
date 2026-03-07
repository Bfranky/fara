"use client";
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { NAV_LINKS, HOTEL } from "@/lib/data";

// Banner is ~44px tall, navbar is 70px = total 114px of fixed headers
const BANNER_H = 44;
const NAV_H = 70;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Once user scrolls past the banner, hide it behind and keep nav sticky
    const onScroll = () => setScrolled(window.scrollY > BANNER_H);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          background: scrolled ? "#0f2e4a" : "rgba(15,46,74,0.6)",
          top: scrolled ? 0 : `${BANNER_H}px`,
        }}
        className="fixed left-0 right-0 z-50 px-6 lg:px-10 flex items-center justify-between h-[70px] transition-all duration-300 backdrop-blur-md shadow-xl"
      >
        {/* Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-2.5 no-underline">
          <div style={{ background: "#d4af37" }} className="w-9 h-9 rounded-md flex items-center justify-center">
            <Home size={18} style={{ color: "#0f2e4a" }} strokeWidth={2} />
          </div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-white text-xl font-semibold leading-none tracking-wide">
            FARA <span style={{ color: "#d4af37" }}>Hotel</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 text-[0.82rem] font-medium tracking-[0.06em] uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer hover:opacity-70"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a href={HOTEL.whatsappMsg} target="_blank" rel="noopener noreferrer"
              style={{ background: "#d4af37", color: "#0f2e4a", fontFamily: "var(--font-jost)" }}
              className="px-4 py-2 rounded text-[0.82rem] font-semibold tracking-wide uppercase transition-all duration-200 hover:opacity-90 no-underline">
              Book Now
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="lg:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu — sits right below the navbar */}
      {menuOpen && (
        <div
          style={{ background: "#0f2e4a", top: scrolled ? `${NAV_H}px` : `${BANNER_H + NAV_H}px` }}
          className="fixed left-0 right-0 z-40 flex flex-col px-6 py-6 gap-5 lg:hidden shadow-xl transition-all duration-300"
        >
          {NAV_LINKS.map((link) => (
            <button key={link.href} onClick={() => handleNavClick(link.href)}
              className="text-white/85 text-base font-medium tracking-[0.05em] uppercase text-left bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-jost)" }}>
              {link.label}
            </button>
          ))}
          <a href={HOTEL.whatsappMsg} target="_blank" rel="noopener noreferrer"
            className="font-semibold text-base tracking-wide no-underline"
            style={{ color: "#25d366", fontFamily: "var(--font-jost)" }}
            onClick={() => setMenuOpen(false)}>
            📲 Book via WhatsApp
          </a>
        </div>
      )}
    </>
  );
}