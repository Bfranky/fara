import { Shield, Clock, CheckCircle, Home } from "lucide-react";

const items = [
  { icon: Shield, label: "Secured & Safe" },
  { icon: Clock, label: "24/7 Service" },
  { icon: CheckCircle, label: "Quality Guaranteed" },
  { icon: Home, label: "Comfortable Rooms" },
];

export default function TrustStrip() {
  return (
    <div style={{ background: "#d4af37" }} className="py-4 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-xs font-semibold tracking-[0.06em] uppercase"
            style={{ color: "#0f2e4a", fontFamily: "var(--font-jost)" }}>
            <Icon size={17} strokeWidth={2} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}