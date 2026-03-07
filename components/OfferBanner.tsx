"use client";
export default function OfferBanner() {
  return (
    <div style={{ background: "linear-gradient(90deg, #0f2e4a, #1a4d7c)" }}
      className="text-white text-center py-3 px-4 text-sm tracking-wide z-50 relative">
      🎉 <span style={{ color: "#d4af37" }} className="font-semibold">Weekend Special</span> — Enjoy{" "}
      <span className="font-semibold">10% off</span> all room bookings Friday to Sunday.{" "}
      <a
        href="https://wa.me/2349026133762"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#e8cc6a" }}
        className="underline hover:opacity-80 transition-opacity"
      >
        Call or WhatsApp to claim!
      </a>
    </div>
  );
}