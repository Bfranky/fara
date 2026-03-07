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
      <a href={HOTEL.whatsapp} target="_blank" rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="w-13 h-13 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        style={{ background: "#25d366", boxShadow: "0 4px 20px rgba(37,211,102,0.45)", animation: "float 3s ease-in-out infinite" }}>
        <MessageCircle size={26} fill="white" style={{ color: "white" }} />
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border-none cursor-pointer"
        style={{
          background: "#1a4d7c",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "all" : "none",
        }}
        aria-label="Scroll to top">
        <ChevronUp size={20} style={{ color: "white" }} strokeWidth={2.5} />
      </button>
    </div>
  );
}