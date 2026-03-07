"use client";
import { MessageCircle, Phone, Star } from "lucide-react";
import { HOTEL } from "@/lib/data";

export default function Hero() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f2e4a 0%, #1a4d7c 100%)" }}>
      {/* BG image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&q=80')" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,30,55,0.7) 0%, rgba(10,30,55,0.5) 60%, rgba(10,30,55,0.85) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pt-36">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.12em] uppercase font-medium mb-6"
          style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.4)", color: "#e8cc6a", fontFamily: "var(--font-jost)" }}>
          <Star size={12} fill="currentColor" /> Ojokoro · Alagbado · Lagos
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.8rem,7vw,5rem)" }} className="text-white font-light leading-[1.05] mb-3">
          <span className="block">FARA Hotel</span>
          <strong style={{ color: "#d4af37" }} className="block font-semibold">&amp; Suites</strong>
        </h1>

        <p className="text-white/75 mb-3" style={{ fontSize: "clamp(1rem,2.5vw,1.2rem)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>
          {HOTEL.tagline}
        </p>

        {/* Stars */}
        <div className="flex items-center justify-center gap-1 mb-1">
          {[1,2,3,4].map(i => <Star key={i} size={20} fill="#d4af37" style={{ color: "#d4af37" }} />)}
          <Star size={20} fill="rgba(212,175,55,0.35)" style={{ color: "rgba(212,175,55,0.35)" }} />
        </div>
        <p className="text-white/55 text-sm mb-10" style={{ fontFamily: "var(--font-jost)" }}>
          {HOTEL.rating} / 5 stars &nbsp;·&nbsp; {HOTEL.reviews} verified guest reviews
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={HOTEL.whatsappMsg} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle size={18} /> Book Now via WhatsApp
          </a>
          <a href={HOTEL.phoneLink} className="btn-call">
            <Phone size={18} /> Call Us Now
          </a>
        </div>

        <button onClick={() => scrollTo("#rooms")}
          className="mt-6 text-white/50 text-xs tracking-[0.15em] uppercase bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
          style={{ fontFamily: "var(--font-jost)" }}>
          View Rooms ↓
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-10">
        <span className="block text-white/40 text-[0.65rem] tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "var(--font-jost)" }}>Scroll</span>
        <div className="w-px h-10 mx-auto" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)", animation: "scrollPulse 2s infinite" }} />
      </div>
    </section>
  );
}