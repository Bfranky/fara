import { Star } from "lucide-react";
import { REVIEWS, HOTEL } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          fill={i <= count ? "#d4af37" : "transparent"}
          className={i <= count ? "text-gold" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div>
            <p className="section-label">Guest Reviews</p>
            <h2 className="section-title">
              What Our Guests <em className="text-navy font-light">Say</em>
            </h2>
            <div className="gold-rule" />
            <p className="text-gray-400 text-sm max-w-sm font-jost leading-relaxed">
              Real experiences from guests who have stayed at FARA Hotel &amp; Suites.
            </p>
          </div>

          {/* Overall rating card */}
          <div className="bg-white border border-stone-200 rounded-xl px-8 py-6 text-center shadow-sm flex-shrink-0">
            <div className="font-cormorant text-6xl text-navy-dark font-semibold leading-none">
              {HOTEL.rating}
            </div>
            <div className="flex justify-center mt-2 mb-1">
              <StarRating count={4} />
            </div>
            <p className="text-gray-400 text-xs font-jost">
              Based on {HOTEL.reviews} reviews
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-stone-200 rounded-lg p-7 shadow-sm"
            >
              <div className="font-cormorant text-4xl text-gold leading-none mb-2">"</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-jost">{r.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full ${r.bg} flex items-center justify-center text-white font-cormorant text-lg font-semibold flex-shrink-0`}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy-dark text-sm font-jost">{r.name}</p>
                  <p className="text-gray-400 text-xs font-jost">{r.meta}</p>
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
