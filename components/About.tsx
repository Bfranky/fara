"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function AnimatedStat({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = Math.ceil(end / 40);
        const interval = setInterval(() => {
          current = Math.min(current + step, end);
          setCount(current);
          if (current >= end) clearInterval(interval);
        }, 35);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div style={{ fontFamily: "var(--font-cormorant)", color: "#1a4d7c" }} className="text-4xl font-semibold leading-none">
        {count}<span style={{ color: "#d4af37" }}>{suffix}</span>
      </div>
      <div className="text-[0.72rem] text-gray-400 tracking-[0.08em] uppercase mt-1" style={{ fontFamily: "var(--font-jost)" }}>{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ background: "#faf8f3" }} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-4/5 rounded overflow-hidden shadow-2xl">
          <Image src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
            alt="FARA Hotel interior" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>

        <div>
          <p className="section-label">Welcome to FARA</p>
          <h2 className="section-title">
            Where Hospitality <br />
            <em style={{ color: "#1a4d7c" }} className="font-light">Meets Home</em>
          </h2>
          <div className="gold-rule" />

          <div className="space-y-4 text-gray-500 text-[0.96rem] leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>
            <p>Nestled in the heart of Alagbado, Ojokoro, FARA Hotel &amp; Suites offers a warm and welcoming retreat for both business and leisure travellers. Our dedicated team ensures every detail of your stay is thoughtfully attended to.</p>
            <p>Our prime location puts you within easy reach of Lagos&apos;s key areas — Agege, Ikeja, Abule Egba, and beyond — making us the ideal base whether you&apos;re visiting for work or exploring the city.</p>
            <p>At FARA, comfort should never come at a compromise. From air-conditioned standard rooms to our spacious Executive Suites, every space is designed to help you rest, recharge, and feel right at home.</p>
          </div>

          <div className="flex gap-8 mt-8 pt-6 border-t border-stone-200">
            <AnimatedStat end={5} suffix="+" label="Years Serving Lagos" />
            <AnimatedStat end={122} label="Verified Reviews" />
            <AnimatedStat end={4} suffix="★" label="Star Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}