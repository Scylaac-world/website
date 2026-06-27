"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowText from "@/app/components/ui/GlowText";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Google My Business",
    desc: "Rank higher, appear in map pack",
    icon: "fa-google",
    image: "https://picsum.photos/id/30/400/300",
    tech: ["GMB", "Local SEO"],
  },
  {
    title: "Local SEO",
    desc: "50+ directories, citations",
    icon: "fa-map-pin",
    image: "https://picsum.photos/id/32/400/300",
    tech: ["BrightLocal", "Moz"],
  },
  {
    title: "Reputation",
    desc: "Automate reviews, build trust",
    icon: "fa-star",
    image: "https://picsum.photos/id/34/400/300",
    tech: ["Trustpilot", "Google"],
  },
  {
    title: "SMS Automation",
    desc: "Capture leads via SMS",
    icon: "fa-comment",
    image: "https://picsum.photos/id/36/400/300",
    tech: ["Twilio", "WhatsApp"],
  },
];

export default function CustomersScene1Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const serviceItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        },
      });

      tl.from(leftColRef.current, { x: -100, opacity: 0, duration: 1.2 })
        .from(rightColRef.current, { x: 100, opacity: 0, duration: 1.2 }, "-=1")
        .from(serviceItemsRef.current, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
        }, "-=0.5");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-theme="light"
      className="relative w-full h-screen section-dark overflow-hidden"
    >
      {/* Enhanced glows – same positions as your working code */}
      <div className="absolute top-1/3 -left-20 w-[600px] h-[400px] bg-[#1E90C8]/25 rounded-full blur-[120px] opacity-50" />
      <div className="absolute top-1/3 -right-20 w-[600px] h-[400px] bg-[#6B46C1]/20 rounded-full blur-[130px] opacity-40" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[250px] bg-[#1E90C8]/20 rounded-full blur-[100px] opacity-50" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 pt-20 pb-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div ref={leftColRef} className="relative">
              <div className="img-zoom rounded-2xl lg:rounded-3xl border border-[#3E5062] shadow-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/id/1043/800/600"
                  alt="Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-900/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 shadow-xl">
                <p className="text-gray-300 text-xs">Real‑time analytics</p>
                <p className="text-white font-bold text-base">+2.4x more calls</p>
              </div>
            </div>

            {/* Right - Text */}
            <div ref={rightColRef}>
              <span className="text-[#1E90C8] text-xs font-bold tracking-[.3em] uppercase">
                GROWTH ENGINE
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 text-white leading-tight">
                Get More <GlowText>Customers</GlowText>
              </h2>
              <p className="text-base md:text-lg text-gray-300 mt-4 leading-relaxed">
                We bring customers to your business through intelligent local SEO, reputation management, and automated follow‑ups.
              </p>
              <div className="mt-6 flex flex-wrap gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1E90C8]/20 rounded-xl flex items-center justify-center text-[#1E90C8]">
                    <i className="fas fa-chart-line" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">+140%</p>
                    <p className="text-xs text-gray-400">Avg. call increase</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1E90C8]/20 rounded-xl flex items-center justify-center text-[#1E90C8]">
                    <i className="fas fa-clock" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">30-60 days</p>
                    <p className="text-xs text-gray-400">Time to results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards - ONLY COLOR CHANGES */}
          <div className="mt-8 lg:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {services.map((service, i) => (
              <div
                key={i}
                ref={(el) => { if (el) serviceItemsRef.current[i] = el; }}
                className="bg-gray-900/60 backdrop-blur-md rounded-xl p-3 border border-white/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 bg-[#1E90C8]/30 rounded-lg flex items-center justify-center text-[#1E90C8] text-xs">
                    <i className={`fab ${service.icon}`} />
                  </div>
                  <h4 className="font-bold text-white text-sm">{service.title}</h4>
                </div>
                <p className="text-xs text-gray-300 mb-2">{service.desc}</p>
                <div className="rounded-lg h-16 overflow-hidden">
                  <Image src={service.image} alt={service.title} width={600} height={400} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}