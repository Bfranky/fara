"use client";
import { MessageCircle, Phone, Star } from "lucide-react";
import { HOTEL } from "@/lib/data";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&q=80')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/50 to-navy-dark/85" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pt-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 text-gold-light px-4 py-1.5 rounded-full text-xs tracking-[0.12em] uppercase font-medium mb-6 font-jost">
          <Star size={12} fill="currentColor" />
          Ojokoro · Alagbado · Lagos
        </div>

        {/* Title */}
        <h1 className="font-cormorant text-white font-light leading-[1.05] mb-3">
          <span className="block text-[clamp(2.8rem,7vw,5rem)]">FARA Hotel</span>
          <strong className="block text-[clamp(2.8rem,7vw,5rem)] text-gold font-semibold">
            &amp; Suites
          </strong>
        </h1>

        {/* Tagline */}
        <p className="text-white/75 text-[clamp(1rem,2.5vw,1.2rem)] font-light tracking-wide mb-3 font-jost">
          {HOTEL.tagline}
        </p>

        {/* Stars */}
        <div className="flex items-center justify-center gap-1 text-gold text-xl mb-1">
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
          <Star size={20} className="text-gold/40" fill="currentColor" />
        </div>
        <p className="text-white/55 text-sm mb-10 font-jost">
          {HOTEL.rating} / 5 stars &nbsp;·&nbsp; {HOTEL.reviews} verified guest reviews
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={HOTEL.whatsappMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={18} />
            Book Now via WhatsApp
          </a>
          <a href={HOTEL.phoneLink} className="btn-call">
            <Phone size={18} />
            Call Us Now
          </a>
        </div>

        {/* View Rooms */}
        <button
          onClick={() => scrollTo("#rooms")}
          className="mt-6 text-white/50 text-xs tracking-[0.15em] uppercase font-jost hover:text-gold transition-colors border-none bg-transparent cursor-pointer"
        >
          View Rooms ↓
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-10">
        <span className="block text-white/40 text-[0.65rem] tracking-[0.18em] uppercase mb-2 font-jost">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent mx-auto animate-scroll-pulse" />
      </div>
    </section>
  );
}
