"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface StatProps {
  end: number;
  suffix?: string;
  label: string;
}

function AnimatedStat({ end, suffix = "", label }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-cormorant text-4xl font-semibold text-navy leading-none">
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="text-[0.72rem] text-gray-400 tracking-[0.08em] uppercase mt-1 font-jost">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] rounded overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
            alt="FARA Hotel interior"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Gold accent block */}
          <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-gold rounded hidden md:block -z-10" />
        </div>

        {/* Text */}
        <div>
          <p className="section-label">Welcome to FARA</p>
          <h2 className="section-title">
            Where Hospitality <br />
            <em className="text-navy font-light">Meets Home</em>
          </h2>
          <div className="gold-rule" />

          <div className="space-y-4 text-gray-500 text-[0.96rem] leading-relaxed font-jost">
            <p>
              Nestled in the heart of Alagbado, Ojokoro, FARA Hotel &amp; Suites offers a warm and
              welcoming retreat for both business and leisure travellers. From the moment you arrive,
              our dedicated team ensures every detail of your stay is thoughtfully attended to.
            </p>
            <p>
              Our prime location puts you within easy reach of Lagos's key areas — Agege, Ikeja,
              Abule Egba, and beyond — making us the ideal base whether you're visiting for work or
              exploring the city. Reliable power, high-speed WiFi, and secured premises guarantee
              a hassle-free experience.
            </p>
            <p>
              At FARA, comfort should never come at a compromise. From air-conditioned standard rooms
              to our spacious Executive Suites, every space is designed to help you rest, recharge,
              and feel right at home.
            </p>
          </div>

          {/* Stats */}
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
