import {
  Wifi,
  Zap,
  Car,
  BellRing,
  Coffee,
  Monitor,
  Shirt,
  Shield,
} from "lucide-react";

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
    <section id="amenities" className="bg-navy-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="section-label">What We Offer</p>
        <h2 className="font-cormorant text-[clamp(1.9rem,4vw,2.8rem)] text-white leading-tight mb-3">
          Hotel <em className="text-gold-light font-light">Amenities</em>
        </h2>
        <p className="text-white/55 text-sm max-w-md font-jost leading-relaxed mb-12">
          Every facility you need for a comfortable, worry-free stay — all under one roof.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {AMENITIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-white/5 border border-white/10 rounded-lg p-7 text-center
                         transition-all duration-300 hover:bg-gold/10 hover:border-gold/40 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/25 transition-colors">
                <Icon size={22} className="text-gold" strokeWidth={1.8} />
              </div>
              <p className="text-white text-sm font-medium font-jost">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
