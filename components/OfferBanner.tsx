"use client";
export default function OfferBanner() {
  return (
    <div className="bg-gradient-to-r from-navy-dark to-navy text-white text-center py-3 px-4 text-sm tracking-wide font-jost z-50 relative">
      🎉 <span className="text-gold font-semibold">Weekend Special</span> — Enjoy{" "}
      <span className="font-semibold">10% off</span> all room bookings Friday to Sunday.{" "}
      <a
        href="https://wa.me/2349026133762"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-gold-light hover:text-gold transition-colors"
      >
        Call or WhatsApp to claim!
      </a>
    </div>
  );
}
