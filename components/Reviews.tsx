import { Star } from "lucide-react";
import { REVIEWS, HOTEL } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={14}
          fill={i <= count ? "#d4af37" : "transparent"}
          style={{ color: i <= count ? "#d4af37" : "#d1d5db" }} />
      ))}
    </div>
  );
}

// Map bg class names to hex
const bgHex: Record<string, string> = {
  "bg-navy": "#1a4d7c",
  "bg-gold-dark": "#b8942e",
  "bg-green-800": "#166534",
};

export default function Reviews() {
  return (
    <section id="reviews" style={{ background: "#faf8f3" }} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div>
            <p className="section-label">Guest Reviews</p>
            <h2 className="section-title">
              What Our Guests <em style={{ color: "#1a4d7c" }} className="font-light">Say</em>
            </h2>
            <div className="gold-rule" />
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>
              Real experiences from guests who have stayed at FARA Hotel &amp; Suites.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-xl px-8 py-6 text-center shadow-sm shrink-0">
            <div style={{ fontFamily: "var(--font-cormorant)", color: "#0f2e4a" }} className="text-6xl font-semibold leading-none">{HOTEL.rating}</div>
            <div className="flex justify-center mt-2 mb-1"><StarRating count={4} /></div>
            <p className="text-gray-400 text-xs" style={{ fontFamily: "var(--font-jost)" }}>Based on {HOTEL.reviews} reviews</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-white border border-stone-200 rounded-lg p-7 shadow-sm">
              <div style={{ fontFamily: "var(--font-cormorant)", color: "#d4af37" }} className="text-4xl leading-none mb-2">"</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-jost)" }}>{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-lg font-semibold shrink-0"
                  style={{ background: bgHex[r.bg] ?? "#1a4d7c", fontFamily: "var(--font-cormorant)" }}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#0f2e4a", fontFamily: "var(--font-jost)" }}>{r.name}</p>
                  <p className="text-gray-400 text-xs" style={{ fontFamily: "var(--font-jost)" }}>{r.meta}</p>
                  <StarRating count={r.stars} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}