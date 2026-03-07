"use client";
import { useState } from "react";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { HOTEL } from "@/lib/data";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "0.25rem",
  padding: "0.75rem 1rem",
  color: "#ffffff",
  fontSize: "0.875rem",
  fontFamily: "var(--font-jost)",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST", body: new FormData(e.currentTarget), headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); (e.target as HTMLFormElement).reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" style={{ background: "#0f2e4a" }} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="section-label">Get In Touch</p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.9rem,4vw,2.8rem)", color: "#ffffff" }} className="leading-tight mb-2">
          Book Your Stay <em style={{ color: "#e8cc6a" }} className="font-light">Today</em>
        </h2>
        <div className="gold-rule" />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 mt-10">
          {/* Left */}
          <div>
            {[
              { icon: Phone, title: "Phone / WhatsApp", node: <a href={HOTEL.phoneLink} className="text-white text-sm hover:opacity-70" style={{ fontFamily: "var(--font-jost)" }}>{HOTEL.phone}</a> },
              { icon: MapPin, title: "Address", node: <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-jost)" }}>{HOTEL.address}</span> },
              { icon: Clock, title: "Hours", node: <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-jost)" }}>Always open — 24 hours, 7 days</span> },
            ].map(({ icon: Icon, title, node }) => (
              <div key={title} className="flex items-start gap-4 mb-7">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.3)" }}>
                  <Icon size={19} style={{ color: "#d4af37" }} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.09em] mb-1" style={{ color: "#d4af37", fontFamily: "var(--font-jost)" }}>{title}</p>
                  {node}
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-3 mt-8">
              <a href={HOTEL.whatsappMsg} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white rounded-md py-3 px-5 text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ background: "#25d366", fontFamily: "var(--font-jost)" }}>
                <MessageCircle size={18} /> Book via WhatsApp
              </a>
              <a href={HOTEL.phoneLink}
                className="flex items-center justify-center gap-2 text-white rounded-md py-3 px-5 text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ border: "1px solid rgba(255,255,255,0.25)", fontFamily: "var(--font-jost)" }}>
                <Phone size={16} /> Call {HOTEL.phone}
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-xl p-7" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <h3 style={{ fontFamily: "var(--font-cormorant)" }} className="text-white text-2xl mb-6">Send a Booking Enquiry</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[0.72rem] uppercase tracking-wider mb-1.5" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-jost)" }}>Full Name</label>
                  <input type="text" name="name" required placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label className="block text-[0.72rem] uppercase tracking-wider mb-1.5" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-jost)" }}>Phone Number</label>
                  <input type="tel" name="phone" required placeholder="08XX XXX XXXX" style={inputStyle} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[0.72rem] uppercase tracking-wider mb-1.5" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-jost)" }}>Check-in Date</label>
                  <input type="date" name="checkin" required style={inputStyle} />
                </div>
                <div>
                  <label className="block text-[0.72rem] uppercase tracking-wider mb-1.5" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-jost)" }}>Check-out Date</label>
                  <input type="date" name="checkout" required style={inputStyle} />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[0.72rem] uppercase tracking-wider mb-1.5" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-jost)" }}>Room Type</label>
                <select name="room" style={inputStyle}>
                  <option value="" className="text-gray-800">Select a room type</option>
                  <option className="text-gray-800">Standard Room — From ₦15,000/night</option>
                  <option className="text-gray-800">Deluxe Room — From ₦22,000/night</option>
                  <option className="text-gray-800">Executive Suite — From ₦35,000/night</option>
                  <option className="text-gray-800">Family Suite — From ₦45,000/night</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="block text-[0.72rem] uppercase tracking-wider mb-1.5" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-jost)" }}>Message (optional)</label>
                <textarea name="message" rows={3} placeholder="Any special requests..." style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              <button type="submit" disabled={status === "sending"}
                className="w-full font-bold py-3 rounded-md text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer"
                style={{ background: "#d4af37", color: "#0f2e4a", fontFamily: "var(--font-jost)", border: "none" }}>
                {status === "sending" ? "Sending…" : "Send Enquiry →"}
              </button>
              {status === "success" && <p className="text-green-400 text-center text-sm mt-3" style={{ fontFamily: "var(--font-jost)" }}>✅ Thank you! We&apos;ll contact you within minutes.</p>}
              {status === "error" && <p className="text-red-400 text-center text-sm mt-3" style={{ fontFamily: "var(--font-jost)" }}>Something went wrong. Please WhatsApp us instead.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}