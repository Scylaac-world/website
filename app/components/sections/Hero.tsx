"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Caveat } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);
const caveat = Caveat({ subsets: ["latin"], weight: "500" });

/* ---------- Sparkles ---------- */
function Sparkles() {
  const [dots, setDots] = useState<{ id: number; top: string; left: string; delay: string; opacity: number }[]>([]);
  useEffect(() => {
    setDots(Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      opacity: 0.2 + Math.random() * 0.4,
    })));
  }, []);
  if (dots.length === 0) return null;
  return (
    <>
      {dots.map((d) => (
        <div key={d.id} className="absolute w-1 h-1 bg-[#1E90C8] rounded-full animate-pulse pointer-events-none"
          style={{ top: d.top, left: d.left, animationDelay: d.delay, opacity: d.opacity }} />
      ))}
    </>
  );
}

/* ---------- Constellation ---------- */
function Constellation() {
  const [items, setItems] = useState<{ id: number; x: string; y: string; size: string; opacity: number; delay: string }[]>([]);
  useEffect(() => {
    setItems(Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: `${1 + Math.random() * 2}px`,
      opacity: 0.1 + Math.random() * 0.25,
      delay: `${Math.random() * 5}s`,
    })));
  }, []);
  if (items.length === 0) return null;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((d) => (
        <div key={d.id} className="absolute rounded-full bg-[#C0C4C8] animate-pulse"
          style={{ left: d.x, top: d.y, width: d.size, height: d.size, opacity: d.opacity, animationDelay: d.delay }} />
      ))}
    </div>
  );
}

/* ---------- Data streams ---------- */
function DataStream() {
  const columns = 8;
  const [lines, setLines] = useState<{ id: number; left: string; duration: string; delay: string }[]>([]);
  useEffect(() => {
    setLines(Array.from({ length: columns }).map((_, i) => ({
      id: i,
      left: `${(i + 1) * (100 / (columns + 1))}%`,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 3}s`,
    })));
  }, []);
  if (lines.length === 0) return null;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {lines.map((l) => (
        <div key={l.id} className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1E90C8]/30 to-transparent"
          style={{ left: l.left, animation: `dataStream ${l.duration} linear infinite`, animationDelay: l.delay }} />
      ))}
    </div>
  );
}

/* ---------- Magnetic tilt on image ---------- */
function MagneticDashboard({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (y / rect.height) * -8;
    const rotateY = (x / rect.width) * 8;
    containerRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    }
  };
  return (
    <div ref={containerRef} className="transition-transform duration-200 ease-out"
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}

/* ---------- Handwritten rotating text ---------- */
const phrases = ["digital systems", "mobile apps", "AI solutions", "SAP integrations", "secure platforms"];

function HandwrittenRotatingText() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    if (!isDeleting && charIndex < phrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(phrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
    if (!isDeleting && charIndex === phrase.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(phrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
  }, [charIndex, isDeleting, currentPhraseIndex]);

  return (
    <span className={`${caveat.className} text-4xl md:text-6xl lg:text-7xl text-[#1E90C8]`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function HeroEnhanced() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({ onComplete: () => setIsComplete(true) });
        tl.from(".hero-badge", { y: 50, opacity: 0, duration: 0.8 })
          .from(".hero-title-line1", { x: -100, opacity: 0, duration: 0.9 }, "-=0.4")
          .from(".hero-title-line2", { x: 100, opacity: 0, duration: 0.9 }, "-=0.6")
          .from(".hero-title-line3", { scale: 0.5, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5")
          .from(".hero-description", { y: 30, opacity: 0, duration: 0.7 }, "-=0.3")
          .from(".hero-buttons", { y: 40, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.2")
          .from(".hero-image", { scale: 1.3, opacity: 0, duration: 1.2, ease: "power2.out" }, "-=0.5")
          .from(".hero-stats", { y: 50, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.4");
      });

      mm.add("(max-width: 1023px)", () => {
        const elements = gsap.utils.toArray<HTMLElement>(
          ".hero-badge, .hero-title-line1, .hero-title-line2, .hero-title-line3, .hero-description, .hero-buttons, .hero-image, .hero-stats"
        );
        elements.forEach((el) => {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
            y: 40, opacity: 0, duration: 0.8, ease: "power2.out",
          });
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" data-theme="dark" className="relative w-full min-h-screen section-dark overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[400px] bg-[#1E90C8]/15 rounded-full blur-[120px] top-1/3 -left-20 animate-float-slow" />
        <div className="absolute w-[500px] h-[350px] bg-[#C0C4C8]/10 rounded-full blur-[100px] bottom-1/4 -right-20 animate-float-medium" />
        <div className="absolute w-[300px] h-[300px] bg-[#1E90C8]/20 rounded-full blur-[80px] top-2/3 left-1/2 animate-float-fast" />
        <Sparkles />
        <Constellation />
        <DataStream />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center py-20 md:pt-24 md:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left column */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4 mt-4">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Smart Solutions. Real Growth.
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span className="hero-title-line1 block text-white">We build</span>
              <span className="hero-title-line2 block">
                <HandwrittenRotatingText />
              </span>
              <span className="hero-title-line3 block text-white">that scale.</span>
            </h1>
            <p className="hero-description text-base md:text-lg text-slate-300 mt-6 max-w-xl leading-relaxed">
              From strategic consulting to SAP integration — we build the digital systems that scale your business.
            </p>

            {/* Mobile image */}
            <div className="hero-image relative mt-8 lg:hidden">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="relative glass-card rounded-3xl p-4 border border-white/10 shadow-2xl img-zoom overflow-hidden">
                <Image
                  src="/assets/hero/hero_img2.png"
                  alt="Scylaac Dashboard"
                  width={800}
                  height={600}
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="rounded-2xl w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-2 flex items-center gap-3 shadow-xl border border-white/10">
                <i className="fas fa-bolt text-[#1E90C8] text-lg" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Growth</p>
                  <p className="font-bold text-white text-sm">Fast & reliable</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="hero-buttons flex gap-3 mt-6 w-full">
              <Link href="#services" className="group relative inline-flex items-center justify-center flex-1 px-4 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#1E90C8] to-[#1873A3] rounded-xl text-white font-semibold shadow-2xl shadow-[#1E90C8]/25 hover:scale-105 transition-transform text-xs md:text-base">
                Explore services <i className="fas fa-arrow-down ml-2 group-hover:translate-y-0.5 transition" />
              </Link>
              <Link href="#contact" className="group relative inline-flex items-center justify-center flex-1 px-4 py-3 md:px-8 md:py-4 bg-transparent border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition text-xs md:text-base">
                Start a diagnostic
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats flex gap-2 md:gap-4 mt-6">
              <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-4 md:py-3 border border-white/10">
                <span className="text-base md:text-2xl font-bold text-white">20+</span>
                <span className="text-[10px] md:text-xs text-slate-400">Projects</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-4 md:py-3 border border-white/10">
                <span className="text-base md:text-2xl font-bold text-white">98%</span>
                <span className="text-[10px] md:text-xs text-slate-400">Satisfaction</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-4 md:py-3 border border-white/10">
                <span className="text-base md:text-2xl font-bold text-white">24/7</span>
                <span className="text-[10px] md:text-xs text-slate-400">Support</span>
              </div>
            </div>
          </div>

          {/* Desktop image */}
          <div className="hero-image relative hidden lg:block">
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full" />
            <MagneticDashboard>
              <div className="relative glass-card rounded-3xl p-4 md:p-6 border border-white/10 shadow-2xl img-zoom overflow-hidden">
                <Image
                  src="/assets/hero/hero_img2.png"
                  alt="Scylaac Dashboard"
                  width={800}
                  height={600}
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="rounded-2xl w-full h-auto object-cover"
                  priority
                />
              </div>
            </MagneticDashboard>
            <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-6 py-4 flex items-center gap-4 shadow-xl border border-white/10">
              <i className="fas fa-bolt text-[#1E90C8] text-2xl" />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">Growth</p>
                <p className="font-bold text-white text-base">Fast & reliable</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-1000 hidden md:block ${isComplete ? "opacity-100" : "opacity-0"}`}>
        <i className="fas fa-chevron-down text-white/60 text-2xl animate-bounce" />
      </div>
    </section>
  );
}