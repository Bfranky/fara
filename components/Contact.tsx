"use client";
import { useState } from "react";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { HOTEL } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/8 border border-white/15 rounded px-4 py-3 text-white text-sm font-jost placeholder-white/30 outline-none focus:border-gold transition-colors";

  return (
    <section id="contact" className="bg-navy-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="section-label">Get In Touch</p>
        <h2 className="font-cormorant text-[clamp(1.9rem,4vw,2.8rem)] text-white leading-tight mb-2">
          Book Your Stay <em className="text-gold-light font-light">Today</em>
        </h2>
        <div className="gold-rule" />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 mt-10">
          {/* Left: contact info */}
          <div>
            {[
              {
                icon: Phone,
                title: "Phone / WhatsApp",
                content: (
                  <a href={HOTEL.phoneLink} className="text-white text-sm font-jost hover:text-gold transition-colors">
                    {HOTEL.phone}
                  </a>
                ),
              },
              {
                icon: MapPin,
                title: "Address",
                content: (
                  <span className="text-white/65 text-sm font-jost">{HOTEL.address}</span>
                ),
              },
              {
                icon: Clock,
                title: "Hours",
                content: (
                  <span className="text-white/65 text-sm font-jost">
                    Always open — 24 hours, 7 days
                  </span>
                ),
              },
            ].map(({ icon: Icon, title, content }) => (
              <div key={title} className="flex items-start gap-4 mb-7">
                <div className="w-11 h-11 bg-gold/15 border border-gold/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={19} className="text-gold" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-gold text-[0.72rem] font-semibold uppercase tracking-[0.09em] mb-1 font-jost">
                    {title}
                  </p>
                  {content}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-3 mt-8">
              <a
                href={HOTEL.whatsappMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25d366] text-white rounded-md py-3 px-5 text-sm font-semibold font-jost hover:bg-[#1ebe5d] transition-colors"
              >
                <MessageCircle size={18} />
                Book via WhatsApp
              </a>
              <a
                href={HOTEL.phoneLink}
                className="flex items-center justify-center gap-2 text-white border border-white/25 rounded-md py-3 px-5 text-sm font-medium font-jost hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Phone size={16} />
                Call {HOTEL.phone}
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-7">
            <h3 className="font-cormorant text-white text-2xl mb-6">
              Send a Booking Enquiry
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white/55 text-[0.72rem] uppercase tracking-wider mb-1.5 font-jost">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className={inputClass}
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  />
                </div>
                <div>
                  <label className="block text-white/55 text-[0.72rem] uppercase tracking-wider mb-1.5 font-jost">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="08XX XXX XXXX"
                    className={inputClass}
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white/55 text-[0.72rem] uppercase tracking-wider mb-1.5 font-jost">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkin"
                    required
                    className={inputClass}
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  />
                </div>
                <div>
                  <label className="block text-white/55 text-[0.72rem] uppercase tracking-wider mb-1.5 font-jost">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkout"
                    required
                    className={inputClass}
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-white/55 text-[0.72rem] uppercase tracking-wider mb-1.5 font-jost">
                  Room Type
                </label>
                <select
                  name="room"
                  className={inputClass}
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <option value="" className="text-gray-800">Select a room type</option>
                  <option className="text-gray-800">Standard Room — From ₦15,000/night</option>
                  <option className="text-gray-800">Deluxe Room — From ₦22,000/night</option>
                  <option className="text-gray-800">Executive Suite — From ₦35,000/night</option>
                  <option className="text-gray-800">Family Suite — From ₦45,000/night</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-white/55 text-[0.72rem] uppercase tracking-wider mb-1.5 font-jost">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Any special requests or questions..."
                  className={inputClass}
                  style={{ background: "rgba(255,255,255,0.08)", resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gold text-navy-dark font-bold py-3 rounded-md font-jost text-sm tracking-wide hover:bg-gold-light transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Enquiry →"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-center text-sm mt-3 font-jost">
                  ✅ Thank you! We&apos;ll contact you within minutes.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center text-sm mt-3 font-jost">
                  Something went wrong. Please WhatsApp us instead.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
