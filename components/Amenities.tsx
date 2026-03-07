"use client";
import { Wifi, Zap, Car, BellRing, Coffee, Monitor, Shirt, Shield } from "lucide-react";

const AMENITIES = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Zap, label: "24/7 Power Supply" },
  { icon: Car, label: "Secure Parking" },
  { icon: BellRing, label: "Room Service" },
  { icon: Coffee, label: "Restaurant & Bar" },
  { icon: Monitor, label: "Conference Room" },
  { icon: Shirt, label: "Laundry Service" },
  { icon: Shield, label: "24/7 Security" },
];

export default function Amenities() {
  return (
    <section id="amenities" style={{ background: "#0f2e4a" }} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="section-label">What We Offer</p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.9rem,4vw,2.8rem)", color: "#ffffff" }} className="leading-tight mb-3">
          Hotel <em style={{ color: "#e8cc6a" }} className="font-light">Amenities</em>
        </h2>
        <p className="text-white/55 text-sm max-w-md leading-relaxed mb-12" style={{ fontFamily: "var(--font-jost)" }}>
          Every facility you need for a comfortable, worry-free stay — all under one roof.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {AMENITIES.map(({ icon: Icon, label }) => (
            <div key={label}
              className="rounded-lg p-7 text-center transition-all duration-300 hover:-translate-y-1 group cursor-default"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
              }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(212,175,55,0.15)" }}>
                <Icon size={22} style={{ color: "#d4af37" }} strokeWidth={1.8} />
              </div>
              <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-jost)" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}