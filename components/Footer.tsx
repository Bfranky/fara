import { Home } from "lucide-react";
import { HOTEL, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "#080f18" }} className="pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div style={{ background: "#d4af37" }} className="w-9 h-9 rounded-md flex items-center justify-center">
                <Home size={18} style={{ color: "#0f2e4a" }} strokeWidth={2} />
              </div>
              <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-white text-xl font-semibold">
                FARA <span style={{ color: "#d4af37" }}>Hotel &amp; Suites</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-jost)" }}>
              Your home away from home in the heart of Alagbado, Ojokoro, Lagos. Comfort, security, and warmth — every night.
            </p>
          </div>

          <div>
            <p className="text-[0.72rem] tracking-[0.15em] uppercase font-semibold mb-4" style={{ color: "#d4af37", fontFamily: "var(--font-jost)" }}>Quick Links</p>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:opacity-70 transition-opacity" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-jost)" }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.72rem] tracking-[0.15em] uppercase font-semibold mb-4" style={{ color: "#d4af37", fontFamily: "var(--font-jost)" }}>Contact</p>
            <ul className="space-y-2">
              <li><a href={HOTEL.phoneLink} className="text-sm hover:opacity-70 transition-opacity" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-jost)" }}>📞 {HOTEL.phone}</a></li>
              <li><a href={HOTEL.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-70 transition-opacity" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-jost)" }}>💬 WhatsApp Us</a></li>
              <li><span className="text-sm" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-jost)" }}>📍 19 Oladapo Abudu, Alagbado</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-5 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-jost)" }}>
            © {new Date().getFullYear()} FARA Hotel &amp; Suites. All rights reserved. Alagbado, Ojokoro, Lagos, Nigeria.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-jost)" }}>⭐ {HOTEL.rating}/5 · {HOTEL.reviews} reviews</p>
        </div>
      </div>
    </footer>
  );
}