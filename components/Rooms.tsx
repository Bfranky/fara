"use client";
import { useState } from "react";
import Image from "next/image";
import { X, Wifi, Tv, Wind, Droplets, Bath, Briefcase, Users, UtensilsCrossed } from "lucide-react";
import { ROOMS } from "@/lib/data";

const amenityIcons: Record<string, React.ReactNode> = {
  "WiFi": <Wifi size={11} />, "TV": <Tv size={11} />, "Smart TV": <Tv size={11} />,
  "A/C": <Wind size={11} />, "2× A/C": <Wind size={11} />, "Hot Water": <Droplets size={11} />,
  "Bathtub": <Bath size={11} />, "Work Desk": <Briefcase size={11} />,
  "Lounge": <Users size={11} />, "2× TV": <Tv size={11} />, "Mini-Kitchen": <UtensilsCrossed size={11} />,
};

// Map tagBg class names to actual hex colors
const tagColors: Record<string, string> = {
  "bg-gold": "#d4af37", "bg-navy": "#1a4d7c",
  "bg-gold-dark": "#b8942e", "bg-green-800": "#166534",
};
const tagTextColors: Record<string, string> = {
  "text-navy-dark": "#0f2e4a", "text-white": "#ffffff",
};

export default function Rooms() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section id="rooms" className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="section-label">Accommodation</p>
            <h2 className="section-title">
              Choose Your Perfect <em style={{ color: "#1a4d7c" }} className="font-light">Room</em>
            </h2>
            <div className="gold-rule mx-auto" />
            <p className="text-gray-400 text-sm max-w-md mx-auto" style={{ fontFamily: "var(--font-jost)" }}>
              Each room is thoughtfully furnished for your maximum comfort. Click any card to view a larger image.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-7">
            {ROOMS.map((room) => (
              <div key={room.id}
                className="rounded-lg overflow-hidden border border-stone-200 bg-white group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer"
                onClick={() => setLightbox(room.imgFull)}>
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image src={room.img} alt={room.name} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw" />
                  <span className="absolute top-3 left-3 text-[0.68rem] font-semibold tracking-wide uppercase px-3 py-1 rounded-sm"
                    style={{ background: tagColors[room.tagBg] ?? "#d4af37", color: tagTextColors[room.tagText] ?? "#fff", fontFamily: "var(--font-jost)" }}>
                    {room.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#0f2e4a" }} className="text-2xl font-semibold mb-1">{room.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-jost)" }}>{room.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {room.amenities.map((a) => (
                      <span key={a} className="amenity-chip">{amenityIcons[a] ?? null}{a}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span style={{ fontFamily: "var(--font-cormorant)", color: "#1a4d7c" }} className="text-2xl font-semibold">{room.price}</span>
                      <span className="text-gray-400 text-xs ml-1" style={{ fontFamily: "var(--font-jost)" }}>/ night</span>
                    </div>
                    <a href={room.whatsappMsg} target="_blank" rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} className="btn-navy text-xs">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-2000 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.9)" }}
          onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 text-white bg-transparent border-none cursor-pointer" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <div className="relative w-[90vw] max-w-4xl aspect-video rounded overflow-hidden">
            <Image src={lightbox} alt="Room preview" fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}
    </>
  );
}