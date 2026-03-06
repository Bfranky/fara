import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { HOTEL } from "@/lib/data";

export default function Location() {
  return (
    <section id="location" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="section-label">Find Us</p>
        <h2 className="section-title">
          Our <em className="text-navy font-light">Location</em>
        </h2>
        <div className="gold-rule" />

        <div className="grid md:grid-cols-2 gap-14 mt-10 items-start">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src={HOTEL.mapSrc}
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FARA Hotel & Suites Location"
            />
          </div>

          {/* Info */}
          <div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-jost">
              FARA Hotel &amp; Suites is conveniently situated at{" "}
              <strong className="text-gray-700">19 Oladapo Abudu Street, Alagbado, Ojokoro</strong>{" "}
              — a well-connected neighbourhood in Lagos State, easily accessible from multiple major
              routes.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-jost">
              Whether you&apos;re arriving from Agege, Ikeja, Abule Egba, or the Lagos–Abeokuta
              Expressway, reaching us is straightforward. Buses and ride-hailing services (Bolt,
              Uber) serve the area around the clock.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  value: HOTEL.address,
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: HOTEL.phone,
                  href: HOTEL.phoneLink,
                },
                {
                  icon: Clock,
                  title: "Hours",
                  value: "Open 24 hours, 7 days a week",
                },
              ].map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={17} className="text-navy" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold text-navy-dark uppercase tracking-wide font-jost">
                      {title}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-gray-500 font-jost hover:text-navy transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-500 font-jost">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap mt-8">
              <a
                href={`https://maps.google.com?q=${encodeURIComponent(HOTEL.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy"
              >
                <Navigation size={15} />
                Get Directions
              </a>
              <a
                href={HOTEL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25d366] text-white rounded px-4 py-2.5 text-sm font-semibold font-jost hover:bg-[#1ebe5d] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
