import { Home } from "lucide-react";
import { HOTEL, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#080f18] pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gold rounded-md flex items-center justify-center">
                <Home size={18} className="text-navy-dark" strokeWidth={2} />
              </div>
              <div className="font-cormorant text-white text-xl font-semibold">
                FARA <span className="text-gold">Hotel &amp; Suites</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-jost max-w-xs">
              Your home away from home in the heart of Alagbado, Ojokoro, Lagos. Comfort, security,
              and warmth — every night.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-gold text-[0.72rem] tracking-[0.15em] uppercase font-semibold mb-4 font-jost">
              Quick Links
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/45 text-sm font-jost hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold text-[0.72rem] tracking-[0.15em] uppercase font-semibold mb-4 font-jost">
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a href={HOTEL.phoneLink} className="text-white/45 text-sm font-jost hover:text-gold transition-colors">
                  📞 {HOTEL.phone}
                </a>
              </li>
              <li>
                <a href={HOTEL.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/45 text-sm font-jost hover:text-gold transition-colors">
                  💬 WhatsApp Us
                </a>
              </li>
              <li>
                <span className="text-white/30 text-sm font-jost">
                  📍 19 Oladapo Abudu, Alagbado
                </span>
              </li>
              <li className="pt-1">
                <span className="text-white/25 text-xs font-jost">Open 24 hours, 7 days</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-jost">
            © {new Date().getFullYear()} FARA Hotel &amp; Suites. All rights reserved. Alagbado,
            Ojokoro, Lagos, Nigeria.
          </p>
          <p className="text-white/20 text-xs font-jost">⭐ {HOTEL.rating}/5 · {HOTEL.reviews} reviews</p>
        </div>
      </div>
    </footer>
  );
}
