"use client";
import { useEffect, useState } from "react";
import { ChevronUp, MessageCircle } from "lucide-react";
import { HOTEL } from "@/lib/data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp */}
      <a
        href={HOTEL.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="w-13 h-13 w-[52px] h-[52px] bg-[#25d366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:scale-110 transition-transform animate-float"
      >
        <MessageCircle size={26} fill="white" className="text-white" />
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-11 h-11 bg-navy rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 ${
          showTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} className="text-white" strokeWidth={2.5} />
      </button>
    </div>
  );
}
